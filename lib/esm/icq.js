function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import { fromBech32 } from "@cosmjs/encoding";
import { arrayContentEquals } from "@cosmjs/utils";
import { Buffer } from "buffer/";
import { CommitmentProof } from "cosmjs-types/cosmos/ics23/v1/proofs";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { MerkleProof } from "cosmjs-types/ibc/core/commitment/v1/commitment";
import { Header as TendermintHeader } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import { blockIDFlagFromJSON, Commit, Header } from "cosmjs-types/tendermint/types/types";
import { ValidatorSet } from "cosmjs-types/tendermint/types/validator";
import { msg } from "./msg";
export const MODULES = [
    {
        label: "Bank",
        value: "bank"
    },
    {
        label: "Staking",
        value: "staking"
    }
];
export const QUERIES = {
    bank: [
        {
            label: "Total Supply",
            value: "TotalSupply",
            parts: [
                Buffer.from([
                    0x00
                ]),
                {
                    value: "Denom",
                    encoding: "string"
                }
            ]
        },
        {
            label: "Balance Of",
            value: "BalanceOf",
            parts: [
                Buffer.from([
                    0x02
                ]),
                {
                    value: "Address",
                    encoding: "addrLen"
                },
                {
                    value: "Denom",
                    encoding: "string"
                }
            ]
        }
    ],
    staking: [
        {
            label: "Delegated Amount",
            value: "Delegation",
            parts: [
                Buffer.from([
                    0x31
                ]),
                {
                    value: "Delegator Address",
                    encoding: "addrLen"
                },
                {
                    value: "Validator Address",
                    encoding: "addrLen"
                }
            ]
        },
        {
            label: "Unbonding Delegation",
            value: "UnbondingDelegation",
            parts: [
                Buffer.from([
                    0x32
                ]),
                {
                    value: "Delegator Address",
                    encoding: "addrLen"
                },
                {
                    value: "Validator Address",
                    encoding: "addrLen"
                }
            ]
        },
        {
            label: "Redelegation",
            value: "Redelegation",
            parts: [
                Buffer.from([
                    0x34
                ]),
                {
                    value: "Delegator Address",
                    encoding: "addrLen"
                },
                {
                    value: "Original Validator Address",
                    encoding: "addrLen"
                },
                {
                    value: "New Validator Address",
                    encoding: "addrLen"
                }
            ]
        }
    ]
};
/** Encode data into a key
 *
 * Typically a complete key will be generated with `Buffer.concat(query.map(encodePart(data)))`
 *
 */ export const encodePart = (data)=>(x)=>{
        if (!("encoding" in x)) return x;
        switch(x.encoding){
            case "string":
                return Buffer.from(data[x.value]);
            case "addr":
                return Buffer.from(fromBech32(data[x.value]).data);
            case "addrLen":
                const val = data[x.value];
                const bytes = fromBech32(val).data;
                const len = bytes.length;
                return Buffer.from([
                    len,
                    ...bytes
                ]);
        }
    };
/** Convert a Proof into data to be submitted to the CosmWasm verify binding */ export const toVerifyMembership = (chainId, connectionId, prefix, proof)=>{
    // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
    const revisionNumber = parseInt(chainId.split("-").at(-1) || "0");
    const merkleProof = MerkleProof.fromPartial({
        proofs: proof.proof.ops.map((x)=>CommitmentProof.decode(x.data))
    });
    return {
        connection: connectionId,
        // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
        revision_number: revisionNumber,
        revision_height: proof.height,
        path_prefix: prefix,
        path_key: Buffer.from(proof.key).toString("base64"),
        value: Buffer.from(proof.value).toString("base64"),
        proof: Buffer.from(MerkleProof.encode(merkleProof).finish()).toString("base64")
    };
};
export const msgUpdateTendermintClient = function() {
    var _ref = _async_to_generator(function*(signer, clientId, header) {
        return msg.ibc.msgUpdateClient({
            signer,
            clientId,
            clientMessage: {
                typeUrl: "/ibc.lightclients.tendermint.v1.Header",
                value: TendermintHeader.encode(header).finish()
            }
        });
    });
    return function msgUpdateTendermintClient(signer, clientId, header) {
        return _ref.apply(this, arguments);
    };
}();
// Build a tendermint header at a specific height for verification.
export const buildHeader = function() {
    var _ref = _async_to_generator(function*(tm, trustedHeight) {
        const signedHeader = yield getSignedHeader(tm);
        // "assert that trustedVals is NextValidators of last trusted header"
        // https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L74
        const validatorHeight = Number(trustedHeight.revisionHeight) + 1;
        /* eslint @typescript-eslint/no-non-null-assertion: "off" */ const curHeight = Number(signedHeader.header.height);
        return TendermintHeader.fromPartial({
            signedHeader,
            validatorSet: yield getValidatorSet(tm, curHeight),
            trustedHeight,
            trustedValidators: yield getValidatorSet(tm, validatorHeight)
        });
    });
    return function buildHeader(tm, trustedHeight) {
        return _ref.apply(this, arguments);
    };
}();
export const getSignedHeader = function() {
    var _ref = _async_to_generator(function*(tm, height) {
        var _rpcHeader_lastBlockId, _rpcHeader_lastBlockId1;
        const { header: rpcHeader, commit: rpcCommit } = yield tm.commit(height);
        const header = Header.fromPartial(_object_spread_props(_object_spread({}, rpcHeader), {
            version: {
                block: BigInt(rpcHeader.version.block),
                app: BigInt(rpcHeader.version.app)
            },
            height: BigInt(rpcHeader.height),
            time: timestampFromDateNanos(rpcHeader.time),
            lastBlockId: {
                hash: (_rpcHeader_lastBlockId = rpcHeader.lastBlockId) === null || _rpcHeader_lastBlockId === void 0 ? void 0 : _rpcHeader_lastBlockId.hash,
                partSetHeader: (_rpcHeader_lastBlockId1 = rpcHeader.lastBlockId) === null || _rpcHeader_lastBlockId1 === void 0 ? void 0 : _rpcHeader_lastBlockId1.parts
            }
        }));
        const signatures = rpcCommit.signatures.map((sig)=>_object_spread_props(_object_spread({}, sig), {
                timestamp: sig.timestamp && timestampFromDateNanos(sig.timestamp),
                blockIdFlag: blockIDFlagFromJSON(sig.blockIdFlag)
            }));
        const commit = Commit.fromPartial({
            height: BigInt(rpcCommit.height),
            round: rpcCommit.round,
            blockId: {
                hash: rpcCommit.blockId.hash,
                partSetHeader: rpcCommit.blockId.parts
            },
            signatures
        });
        // For the vote sign bytes, it checks (from the commit):
        //   Height, Round, BlockId, TimeStamp, ChainID
        return {
            header,
            commit
        };
    });
    return function getSignedHeader(tm, height) {
        return _ref.apply(this, arguments);
    };
}();
const getValidatorSet = function() {
    var _ref = _async_to_generator(function*(tm, height) {
        // we need to query the header to find out who the proposer was, and pull them out
        const { proposerAddress } = yield header(tm, height);
        const validators = yield tm.validatorsAll(height);
        const mappedValidators = validators.validators.map((val)=>({
                address: val.address,
                pubKey: mapRpcPubKeyToProto(val.pubkey),
                votingPower: val.votingPower,
                proposerPriority: val.proposerPriority ? BigInt(val.proposerPriority) : undefined
            }));
        const totalPower = validators.validators.reduce((accumulator, v)=>accumulator + v.votingPower, BigInt(0));
        const proposer = mappedValidators.find((val)=>arrayContentEquals(val.address, proposerAddress));
        return ValidatorSet.fromPartial({
            validators: mappedValidators,
            totalVotingPower: totalPower,
            proposer
        });
    });
    return function getValidatorSet(tm, height) {
        return _ref.apply(this, arguments);
    };
}();
const header = function() {
    var _ref = _async_to_generator(function*(tm, height) {
        // TODO: expose header method on tmClient and use that
        const resp = yield tm.blockchain(height, height);
        return resp.blockMetas[0].header;
    });
    return function header(tm, height) {
        return _ref.apply(this, arguments);
    };
}();
const timestampFromDateNanos = (date)=>{
    var _date_nanoseconds;
    const nanos = date.getTime() % 1000 * 1000000 + ((_date_nanoseconds = date.nanoseconds) !== null && _date_nanoseconds !== void 0 ? _date_nanoseconds : 0);
    return Timestamp.fromPartial({
        seconds: BigInt(Math.floor(date.getTime() / 1000)),
        nanos
    });
};
const mapRpcPubKeyToProto = (pubkey)=>{
    if (pubkey === undefined) {
        return undefined;
    }
    if (pubkey.algorithm == "ed25519") {
        return {
            ed25519: pubkey.data,
            secp256k1: undefined
        };
    } else if (pubkey.algorithm == "secp256k1") {
        return {
            ed25519: undefined,
            secp256k1: pubkey.data
        };
    } else {
        throw new Error(`Unknown validator pubkey type: ${pubkey.algorithm}`);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pY3EudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUJlY2gzMiB9IGZyb20gXCJAY29zbWpzL2VuY29kaW5nXCI7XG5pbXBvcnQgeyBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQgeyBQcm92ZW5RdWVyeSB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlL2J1aWxkL3F1ZXJ5Y2xpZW50L3F1ZXJ5Y2xpZW50XCI7XG5pbXBvcnQge1xuICBSZWFkb25seURhdGVXaXRoTmFub3NlY29uZHMsXG4gIHRlbmRlcm1pbnQzNyxcbiAgVGVuZGVybWludDM3Q2xpZW50LFxuICBWYWxpZGF0b3JQdWJrZXksXG59IGZyb20gXCJAY29zbWpzL3RlbmRlcm1pbnQtcnBjXCI7XG5pbXBvcnQgeyBhcnJheUNvbnRlbnRFcXVhbHMgfSBmcm9tIFwiQGNvc21qcy91dGlsc1wiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlci9cIjtcbmltcG9ydCB7IENvbW1pdG1lbnRQcm9vZiB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2ljczIzL3YxL3Byb29mc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImNvc21qcy10eXBlcy9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wXCI7XG5pbXBvcnQgeyBIZWlnaHQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9jb3JlL2NsaWVudC92MS9jbGllbnRcIjtcbmltcG9ydCB7IE1lcmtsZVByb29mIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvY29yZS9jb21taXRtZW50L3YxL2NvbW1pdG1lbnRcIjtcbmltcG9ydCB7IEhlYWRlciBhcyBUZW5kZXJtaW50SGVhZGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvbGlnaHRjbGllbnRzL3RlbmRlcm1pbnQvdjEvdGVuZGVybWludFwiO1xuaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSBcImNvc21qcy10eXBlcy90ZW5kZXJtaW50L2NyeXB0by9rZXlzXCI7XG5pbXBvcnQge1xuICBibG9ja0lERmxhZ0Zyb21KU09OLFxuICBDb21taXQsXG4gIEhlYWRlcixcbiAgU2lnbmVkSGVhZGVyLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL3RlbmRlcm1pbnQvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IFZhbGlkYXRvclNldCB9IGZyb20gXCJjb3NtanMtdHlwZXMvdGVuZGVybWludC90eXBlcy92YWxpZGF0b3JcIjtcbmltcG9ydCB7IG1zZyB9IGZyb20gXCIuL21zZ1wiO1xuXG5leHBvcnQgdHlwZSBTdG9yZUtleSA9IFwiYmFua1wiIHwgXCJzdGFraW5nXCI7XG5cbmV4cG9ydCBjb25zdCBNT0RVTEVTOiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBTdG9yZUtleSB9W10gPSBbXG4gIHsgbGFiZWw6IFwiQmFua1wiLCB2YWx1ZTogXCJiYW5rXCIgfSxcbiAgeyBsYWJlbDogXCJTdGFraW5nXCIsIHZhbHVlOiBcInN0YWtpbmdcIiB9LFxuXTtcblxuZXhwb3J0IHR5cGUgUGFydCA9XG4gIHwge1xuICAgICAgdmFsdWU6IHN0cmluZztcbiAgICAgIGVuY29kaW5nOiBcInN0cmluZ1wiIHwgXCJhZGRyXCIgfCBcImFkZHJMZW5cIjtcbiAgICB9XG4gIHwgVWludDhBcnJheTtcblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHBhcnRzOiBQYXJ0W107XG59XG5cbmV4cG9ydCBjb25zdCBRVUVSSUVTOiBSZWNvcmQ8U3RvcmVLZXksIFF1ZXJ5W10+ID0ge1xuICBiYW5rOiBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiVG90YWwgU3VwcGx5XCIsXG4gICAgICB2YWx1ZTogXCJUb3RhbFN1cHBseVwiLFxuICAgICAgcGFydHM6IFtCdWZmZXIuZnJvbShbMHgwMF0pLCB7IHZhbHVlOiBcIkRlbm9tXCIsIGVuY29kaW5nOiBcInN0cmluZ1wiIH1dLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQmFsYW5jZSBPZlwiLFxuICAgICAgdmFsdWU6IFwiQmFsYW5jZU9mXCIsXG4gICAgICBwYXJ0czogW1xuICAgICAgICBCdWZmZXIuZnJvbShbMHgwMl0pLFxuICAgICAgICB7IHZhbHVlOiBcIkFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiRGVub21cIiwgZW5jb2Rpbmc6IFwic3RyaW5nXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgc3Rha2luZzogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkRlbGVnYXRlZCBBbW91bnRcIixcbiAgICAgIHZhbHVlOiBcIkRlbGVnYXRpb25cIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIEJ1ZmZlci5mcm9tKFsweDMxXSksXG4gICAgICAgIHsgdmFsdWU6IFwiRGVsZWdhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiVmFsaWRhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiVW5ib25kaW5nIERlbGVnYXRpb25cIixcbiAgICAgIHZhbHVlOiBcIlVuYm9uZGluZ0RlbGVnYXRpb25cIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIEJ1ZmZlci5mcm9tKFsweDMyXSksXG4gICAgICAgIHsgdmFsdWU6IFwiRGVsZWdhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiVmFsaWRhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiUmVkZWxlZ2F0aW9uXCIsXG4gICAgICB2YWx1ZTogXCJSZWRlbGVnYXRpb25cIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIEJ1ZmZlci5mcm9tKFsweDM0XSksXG4gICAgICAgIHsgdmFsdWU6IFwiRGVsZWdhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiT3JpZ2luYWwgVmFsaWRhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiTmV3IFZhbGlkYXRvciBBZGRyZXNzXCIsIGVuY29kaW5nOiBcImFkZHJMZW5cIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuLyoqIEVuY29kZSBkYXRhIGludG8gYSBrZXlcbiAqXG4gKiBUeXBpY2FsbHkgYSBjb21wbGV0ZSBrZXkgd2lsbCBiZSBnZW5lcmF0ZWQgd2l0aCBgQnVmZmVyLmNvbmNhdChxdWVyeS5tYXAoZW5jb2RlUGFydChkYXRhKSkpYFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZVBhcnQgPVxuICAoZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT5cbiAgKHg6IFBhcnQpOiBVaW50OEFycmF5ID0+IHtcbiAgICBpZiAoIShcImVuY29kaW5nXCIgaW4geCkpIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeC5lbmNvZGluZykge1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZGF0YVt4LnZhbHVlXSk7XG4gICAgICBjYXNlIFwiYWRkclwiOlxuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZnJvbUJlY2gzMihkYXRhW3gudmFsdWVdKS5kYXRhKTtcbiAgICAgIGNhc2UgXCJhZGRyTGVuXCI6XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbeC52YWx1ZV07XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gZnJvbUJlY2gzMih2YWwpLmRhdGE7XG4gICAgICAgIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKFtsZW4sIC4uLmJ5dGVzXSk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFZlcmlmeU1lbWJlcnNoaXAge1xuICBjb25uZWN0aW9uOiBzdHJpbmc7XG4gIHJldmlzaW9uX251bWJlcjogbnVtYmVyO1xuICByZXZpc2lvbl9oZWlnaHQ6IG51bWJlcjtcbiAgLyoqIEJhc2U2NCBlbmNvZGVkIGJ5dGVzICovXG4gIHByb29mOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBieXRlcyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICBwYXRoX3ByZWZpeDogc3RyaW5nO1xuICBwYXRoX2tleTogc3RyaW5nO1xufVxuXG4vKiogQ29udmVydCBhIFByb29mIGludG8gZGF0YSB0byBiZSBzdWJtaXR0ZWQgdG8gdGhlIENvc21XYXNtIHZlcmlmeSBiaW5kaW5nICovXG5leHBvcnQgY29uc3QgdG9WZXJpZnlNZW1iZXJzaGlwID0gKFxuICBjaGFpbklkOiBzdHJpbmcsXG4gIGNvbm5lY3Rpb25JZDogc3RyaW5nLFxuICBwcmVmaXg6IHN0cmluZyxcbiAgcHJvb2Y6IFByb3ZlblF1ZXJ5XG4pOiBWZXJpZnlNZW1iZXJzaGlwID0+IHtcbiAgLy8gaHR0cHM6Ly9pYmMuY29zbW9zLm5ldHdvcmsvbWFpbi9pYmMvb3ZlcnZpZXcjaWJjLWNsaWVudC1oZWlnaHRzXG4gIGNvbnN0IHJldmlzaW9uTnVtYmVyID0gcGFyc2VJbnQoY2hhaW5JZC5zcGxpdChcIi1cIikuYXQoLTEpIHx8IFwiMFwiKTtcbiAgY29uc3QgbWVya2xlUHJvb2YgPSBNZXJrbGVQcm9vZi5mcm9tUGFydGlhbCh7XG4gICAgcHJvb2ZzOiBwcm9vZi5wcm9vZi5vcHMubWFwKCh4KSA9PiBDb21taXRtZW50UHJvb2YuZGVjb2RlKHguZGF0YSkpLFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0aW9uOiBjb25uZWN0aW9uSWQsXG4gICAgLy8gaHR0cHM6Ly9pYmMuY29zbW9zLm5ldHdvcmsvbWFpbi9pYmMvb3ZlcnZpZXcjaWJjLWNsaWVudC1oZWlnaHRzXG4gICAgcmV2aXNpb25fbnVtYmVyOiByZXZpc2lvbk51bWJlcixcbiAgICByZXZpc2lvbl9oZWlnaHQ6IHByb29mLmhlaWdodCxcbiAgICBwYXRoX3ByZWZpeDogcHJlZml4LFxuICAgIHBhdGhfa2V5OiBCdWZmZXIuZnJvbShwcm9vZi5rZXkpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxuICAgIHZhbHVlOiBCdWZmZXIuZnJvbShwcm9vZi52YWx1ZSkudG9TdHJpbmcoXCJiYXNlNjRcIiksXG4gICAgcHJvb2Y6IEJ1ZmZlci5mcm9tKE1lcmtsZVByb29mLmVuY29kZShtZXJrbGVQcm9vZikuZmluaXNoKCkpLnRvU3RyaW5nKFxuICAgICAgXCJiYXNlNjRcIlxuICAgICksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbXNnVXBkYXRlVGVuZGVybWludENsaWVudCA9IGFzeW5jIChcbiAgc2lnbmVyOiBzdHJpbmcsXG4gIGNsaWVudElkOiBzdHJpbmcsXG4gIGhlYWRlcjogVGVuZGVybWludEhlYWRlclxuKTogUHJvbWlzZTxFbmNvZGVPYmplY3Q+ID0+IHtcbiAgcmV0dXJuIG1zZy5pYmMubXNnVXBkYXRlQ2xpZW50KHtcbiAgICBzaWduZXIsXG4gICAgY2xpZW50SWQsXG4gICAgY2xpZW50TWVzc2FnZToge1xuICAgICAgdHlwZVVybDogXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLkhlYWRlclwiLFxuICAgICAgdmFsdWU6IFRlbmRlcm1pbnRIZWFkZXIuZW5jb2RlKGhlYWRlcikuZmluaXNoKCksXG4gICAgfSxcbiAgfSk7XG59O1xuXG4vLyBCdWlsZCBhIHRlbmRlcm1pbnQgaGVhZGVyIGF0IGEgc3BlY2lmaWMgaGVpZ2h0IGZvciB2ZXJpZmljYXRpb24uXG5leHBvcnQgY29uc3QgYnVpbGRIZWFkZXIgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIHRydXN0ZWRIZWlnaHQ6IEhlaWdodFxuKTogUHJvbWlzZTxUZW5kZXJtaW50SGVhZGVyPiA9PiB7XG4gIGNvbnN0IHNpZ25lZEhlYWRlciA9IGF3YWl0IGdldFNpZ25lZEhlYWRlcih0bSk7XG4gIC8vIFwiYXNzZXJ0IHRoYXQgdHJ1c3RlZFZhbHMgaXMgTmV4dFZhbGlkYXRvcnMgb2YgbGFzdCB0cnVzdGVkIGhlYWRlclwiXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9ibG9iL3YwLjQxLjAveC9pYmMvbGlnaHQtY2xpZW50cy8wNy10ZW5kZXJtaW50L3R5cGVzL3VwZGF0ZS5nbyNMNzRcbiAgY29uc3QgdmFsaWRhdG9ySGVpZ2h0ID0gTnVtYmVyKHRydXN0ZWRIZWlnaHQucmV2aXNpb25IZWlnaHQpICsgMTtcbiAgLyogZXNsaW50IEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb246IFwib2ZmXCIgKi9cbiAgY29uc3QgY3VySGVpZ2h0ID0gTnVtYmVyKHNpZ25lZEhlYWRlci5oZWFkZXIhLmhlaWdodCk7XG4gIHJldHVybiBUZW5kZXJtaW50SGVhZGVyLmZyb21QYXJ0aWFsKHtcbiAgICBzaWduZWRIZWFkZXIsXG4gICAgdmFsaWRhdG9yU2V0OiBhd2FpdCBnZXRWYWxpZGF0b3JTZXQodG0sIGN1ckhlaWdodCksXG4gICAgdHJ1c3RlZEhlaWdodCxcbiAgICB0cnVzdGVkVmFsaWRhdG9yczogYXdhaXQgZ2V0VmFsaWRhdG9yU2V0KHRtLCB2YWxpZGF0b3JIZWlnaHQpLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaWduZWRIZWFkZXIgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIGhlaWdodD86IG51bWJlclxuKTogUHJvbWlzZTxTaWduZWRIZWFkZXI+ID0+IHtcbiAgY29uc3QgeyBoZWFkZXI6IHJwY0hlYWRlciwgY29tbWl0OiBycGNDb21taXQgfSA9IGF3YWl0IHRtLmNvbW1pdChoZWlnaHQpO1xuICBjb25zdCBoZWFkZXIgPSBIZWFkZXIuZnJvbVBhcnRpYWwoe1xuICAgIC4uLnJwY0hlYWRlcixcbiAgICB2ZXJzaW9uOiB7XG4gICAgICBibG9jazogQmlnSW50KHJwY0hlYWRlci52ZXJzaW9uLmJsb2NrKSxcbiAgICAgIGFwcDogQmlnSW50KHJwY0hlYWRlci52ZXJzaW9uLmFwcCksXG4gICAgfSxcbiAgICBoZWlnaHQ6IEJpZ0ludChycGNIZWFkZXIuaGVpZ2h0KSxcbiAgICB0aW1lOiB0aW1lc3RhbXBGcm9tRGF0ZU5hbm9zKHJwY0hlYWRlci50aW1lKSxcbiAgICBsYXN0QmxvY2tJZDoge1xuICAgICAgaGFzaDogcnBjSGVhZGVyLmxhc3RCbG9ja0lkPy5oYXNoLFxuICAgICAgcGFydFNldEhlYWRlcjogcnBjSGVhZGVyLmxhc3RCbG9ja0lkPy5wYXJ0cyxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBzaWduYXR1cmVzID0gcnBjQ29tbWl0LnNpZ25hdHVyZXMubWFwKChzaWcpID0+ICh7XG4gICAgLi4uc2lnLFxuICAgIHRpbWVzdGFtcDogc2lnLnRpbWVzdGFtcCAmJiB0aW1lc3RhbXBGcm9tRGF0ZU5hbm9zKHNpZy50aW1lc3RhbXApLFxuICAgIGJsb2NrSWRGbGFnOiBibG9ja0lERmxhZ0Zyb21KU09OKHNpZy5ibG9ja0lkRmxhZyksXG4gIH0pKTtcbiAgY29uc3QgY29tbWl0ID0gQ29tbWl0LmZyb21QYXJ0aWFsKHtcbiAgICBoZWlnaHQ6IEJpZ0ludChycGNDb21taXQuaGVpZ2h0KSxcbiAgICByb3VuZDogcnBjQ29tbWl0LnJvdW5kLFxuICAgIGJsb2NrSWQ6IHtcbiAgICAgIGhhc2g6IHJwY0NvbW1pdC5ibG9ja0lkLmhhc2gsXG4gICAgICBwYXJ0U2V0SGVhZGVyOiBycGNDb21taXQuYmxvY2tJZC5wYXJ0cyxcbiAgICB9LFxuICAgIHNpZ25hdHVyZXMsXG4gIH0pO1xuICAvLyBGb3IgdGhlIHZvdGUgc2lnbiBieXRlcywgaXQgY2hlY2tzIChmcm9tIHRoZSBjb21taXQpOlxuICAvLyAgIEhlaWdodCwgUm91bmQsIEJsb2NrSWQsIFRpbWVTdGFtcCwgQ2hhaW5JRFxuXG4gIHJldHVybiB7IGhlYWRlciwgY29tbWl0IH07XG59O1xuXG5jb25zdCBnZXRWYWxpZGF0b3JTZXQgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIGhlaWdodDogbnVtYmVyXG4pOiBQcm9taXNlPFZhbGlkYXRvclNldD4gPT4ge1xuICAvLyB3ZSBuZWVkIHRvIHF1ZXJ5IHRoZSBoZWFkZXIgdG8gZmluZCBvdXQgd2hvIHRoZSBwcm9wb3NlciB3YXMsIGFuZCBwdWxsIHRoZW0gb3V0XG4gIGNvbnN0IHsgcHJvcG9zZXJBZGRyZXNzIH0gPSBhd2FpdCBoZWFkZXIodG0sIGhlaWdodCk7XG4gIGNvbnN0IHZhbGlkYXRvcnMgPSBhd2FpdCB0bS52YWxpZGF0b3JzQWxsKGhlaWdodCk7XG4gIGNvbnN0IG1hcHBlZFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLnZhbGlkYXRvcnMubWFwKCh2YWwpID0+ICh7XG4gICAgYWRkcmVzczogdmFsLmFkZHJlc3MsXG4gICAgcHViS2V5OiBtYXBScGNQdWJLZXlUb1Byb3RvKHZhbC5wdWJrZXkpLFxuICAgIHZvdGluZ1Bvd2VyOiB2YWwudm90aW5nUG93ZXIsXG4gICAgcHJvcG9zZXJQcmlvcml0eTogdmFsLnByb3Bvc2VyUHJpb3JpdHlcbiAgICAgID8gQmlnSW50KHZhbC5wcm9wb3NlclByaW9yaXR5KVxuICAgICAgOiB1bmRlZmluZWQsXG4gIH0pKTtcbiAgY29uc3QgdG90YWxQb3dlciA9IHZhbGlkYXRvcnMudmFsaWRhdG9ycy5yZWR1Y2UoXG4gICAgKGFjY3VtdWxhdG9yLCB2KSA9PiBhY2N1bXVsYXRvciArIHYudm90aW5nUG93ZXIsXG4gICAgQmlnSW50KDApXG4gICk7XG4gIGNvbnN0IHByb3Bvc2VyID0gbWFwcGVkVmFsaWRhdG9ycy5maW5kKCh2YWwpID0+XG4gICAgYXJyYXlDb250ZW50RXF1YWxzKHZhbC5hZGRyZXNzLCBwcm9wb3NlckFkZHJlc3MpXG4gICk7XG4gIHJldHVybiBWYWxpZGF0b3JTZXQuZnJvbVBhcnRpYWwoe1xuICAgIHZhbGlkYXRvcnM6IG1hcHBlZFZhbGlkYXRvcnMsXG4gICAgdG90YWxWb3RpbmdQb3dlcjogdG90YWxQb3dlcixcbiAgICBwcm9wb3NlcixcbiAgfSk7XG59O1xuXG5jb25zdCBoZWFkZXIgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIGhlaWdodDogbnVtYmVyXG4pOiBQcm9taXNlPHRlbmRlcm1pbnQzNy5IZWFkZXI+ID0+IHtcbiAgLy8gVE9ETzogZXhwb3NlIGhlYWRlciBtZXRob2Qgb24gdG1DbGllbnQgYW5kIHVzZSB0aGF0XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB0bS5ibG9ja2NoYWluKGhlaWdodCwgaGVpZ2h0KTtcbiAgcmV0dXJuIHJlc3AuYmxvY2tNZXRhc1swXS5oZWFkZXI7XG59O1xuXG5jb25zdCB0aW1lc3RhbXBGcm9tRGF0ZU5hbm9zID0gKFxuICBkYXRlOiBSZWFkb25seURhdGVXaXRoTmFub3NlY29uZHNcbik6IFRpbWVzdGFtcCA9PiB7XG4gIGNvbnN0IG5hbm9zID0gKGRhdGUuZ2V0VGltZSgpICUgMTAwMCkgKiAxMDAwMDAwICsgKGRhdGUubmFub3NlY29uZHMgPz8gMCk7XG4gIHJldHVybiBUaW1lc3RhbXAuZnJvbVBhcnRpYWwoe1xuICAgIHNlY29uZHM6IEJpZ0ludChNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCkpLFxuICAgIG5hbm9zLFxuICB9KTtcbn07XG5cbmNvbnN0IG1hcFJwY1B1YktleVRvUHJvdG8gPSAoXG4gIHB1YmtleT86IFZhbGlkYXRvclB1YmtleVxuKTogUHVibGljS2V5IHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHB1YmtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAocHVia2V5LmFsZ29yaXRobSA9PSBcImVkMjU1MTlcIikge1xuICAgIHJldHVybiB7XG4gICAgICBlZDI1NTE5OiBwdWJrZXkuZGF0YSxcbiAgICAgIHNlY3AyNTZrMTogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocHVia2V5LmFsZ29yaXRobSA9PSBcInNlY3AyNTZrMVwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkMjU1MTk6IHVuZGVmaW5lZCxcbiAgICAgIHNlY3AyNTZrMTogcHVia2V5LmRhdGEsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5rbm93biB2YWxpZGF0b3IgcHVia2V5IHR5cGU6ICR7KHB1YmtleSBhcyBhbnkpLmFsZ29yaXRobX1gXG4gICAgKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJmcm9tQmVjaDMyIiwiYXJyYXlDb250ZW50RXF1YWxzIiwiQnVmZmVyIiwiQ29tbWl0bWVudFByb29mIiwiVGltZXN0YW1wIiwiTWVya2xlUHJvb2YiLCJIZWFkZXIiLCJUZW5kZXJtaW50SGVhZGVyIiwiYmxvY2tJREZsYWdGcm9tSlNPTiIsIkNvbW1pdCIsIlZhbGlkYXRvclNldCIsIm1zZyIsIk1PRFVMRVMiLCJsYWJlbCIsInZhbHVlIiwiUVVFUklFUyIsImJhbmsiLCJwYXJ0cyIsImZyb20iLCJlbmNvZGluZyIsInN0YWtpbmciLCJlbmNvZGVQYXJ0IiwiZGF0YSIsIngiLCJ2YWwiLCJieXRlcyIsImxlbiIsImxlbmd0aCIsInRvVmVyaWZ5TWVtYmVyc2hpcCIsImNoYWluSWQiLCJjb25uZWN0aW9uSWQiLCJwcmVmaXgiLCJwcm9vZiIsInJldmlzaW9uTnVtYmVyIiwicGFyc2VJbnQiLCJzcGxpdCIsImF0IiwibWVya2xlUHJvb2YiLCJmcm9tUGFydGlhbCIsInByb29mcyIsIm9wcyIsIm1hcCIsImRlY29kZSIsImNvbm5lY3Rpb24iLCJyZXZpc2lvbl9udW1iZXIiLCJyZXZpc2lvbl9oZWlnaHQiLCJoZWlnaHQiLCJwYXRoX3ByZWZpeCIsInBhdGhfa2V5Iiwia2V5IiwidG9TdHJpbmciLCJlbmNvZGUiLCJmaW5pc2giLCJtc2dVcGRhdGVUZW5kZXJtaW50Q2xpZW50Iiwic2lnbmVyIiwiY2xpZW50SWQiLCJoZWFkZXIiLCJpYmMiLCJtc2dVcGRhdGVDbGllbnQiLCJjbGllbnRNZXNzYWdlIiwidHlwZVVybCIsImJ1aWxkSGVhZGVyIiwidG0iLCJ0cnVzdGVkSGVpZ2h0Iiwic2lnbmVkSGVhZGVyIiwiZ2V0U2lnbmVkSGVhZGVyIiwidmFsaWRhdG9ySGVpZ2h0IiwiTnVtYmVyIiwicmV2aXNpb25IZWlnaHQiLCJjdXJIZWlnaHQiLCJ2YWxpZGF0b3JTZXQiLCJnZXRWYWxpZGF0b3JTZXQiLCJ0cnVzdGVkVmFsaWRhdG9ycyIsInJwY0hlYWRlciIsImNvbW1pdCIsInJwY0NvbW1pdCIsInZlcnNpb24iLCJibG9jayIsIkJpZ0ludCIsImFwcCIsInRpbWUiLCJ0aW1lc3RhbXBGcm9tRGF0ZU5hbm9zIiwibGFzdEJsb2NrSWQiLCJoYXNoIiwicGFydFNldEhlYWRlciIsInNpZ25hdHVyZXMiLCJzaWciLCJ0aW1lc3RhbXAiLCJibG9ja0lkRmxhZyIsInJvdW5kIiwiYmxvY2tJZCIsInByb3Bvc2VyQWRkcmVzcyIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0b3JzQWxsIiwibWFwcGVkVmFsaWRhdG9ycyIsImFkZHJlc3MiLCJwdWJLZXkiLCJtYXBScGNQdWJLZXlUb1Byb3RvIiwicHVia2V5Iiwidm90aW5nUG93ZXIiLCJwcm9wb3NlclByaW9yaXR5IiwidW5kZWZpbmVkIiwidG90YWxQb3dlciIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwidiIsInByb3Bvc2VyIiwiZmluZCIsInRvdGFsVm90aW5nUG93ZXIiLCJyZXNwIiwiYmxvY2tjaGFpbiIsImJsb2NrTWV0YXMiLCJkYXRlIiwibmFub3MiLCJnZXRUaW1lIiwibmFub3NlY29uZHMiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiYWxnb3JpdGhtIiwiZWQyNTUxOSIsInNlY3AyNTZrMSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFVLFFBQVEsbUJBQW1CO0FBUzlDLFNBQVNDLGtCQUFrQixRQUFRLGdCQUFnQjtBQUNuRCxTQUFTQyxNQUFNLFFBQVEsVUFBVTtBQUNqQyxTQUFTQyxlQUFlLFFBQVEsc0NBQXNDO0FBQ3RFLFNBQVNDLFNBQVMsUUFBUSx5Q0FBeUM7QUFFbkUsU0FBU0MsV0FBVyxRQUFRLGlEQUFpRDtBQUM3RSxTQUFTQyxVQUFVQyxnQkFBZ0IsUUFBUSx5REFBeUQ7QUFFcEcsU0FDRUMsbUJBQW1CLEVBQ25CQyxNQUFNLEVBQ05ILE1BQU0sUUFFRCxzQ0FBc0M7QUFDN0MsU0FBU0ksWUFBWSxRQUFRLDBDQUEwQztBQUN2RSxTQUFTQyxHQUFHLFFBQVEsUUFBUTtBQUk1QixPQUFPLE1BQU1DLFVBQWdEO0lBQzNEO1FBQUVDLE9BQU87UUFBUUMsT0FBTztJQUFPO0lBQy9CO1FBQUVELE9BQU87UUFBV0MsT0FBTztJQUFVO0NBQ3RDLENBQUM7QUFlRixPQUFPLE1BQU1DLFVBQXFDO0lBQ2hEQyxNQUFNO1FBQ0o7WUFDRUgsT0FBTztZQUNQQyxPQUFPO1lBQ1BHLE9BQU87Z0JBQUNmLE9BQU9nQixJQUFJLENBQUM7b0JBQUM7aUJBQUs7Z0JBQUc7b0JBQUVKLE9BQU87b0JBQVNLLFVBQVU7Z0JBQVM7YUFBRTtRQUN0RTtRQUNBO1lBQ0VOLE9BQU87WUFDUEMsT0FBTztZQUNQRyxPQUFPO2dCQUNMZixPQUFPZ0IsSUFBSSxDQUFDO29CQUFDO2lCQUFLO2dCQUNsQjtvQkFBRUosT0FBTztvQkFBV0ssVUFBVTtnQkFBVTtnQkFDeEM7b0JBQUVMLE9BQU87b0JBQVNLLFVBQVU7Z0JBQVM7YUFDdEM7UUFDSDtLQUNEO0lBQ0RDLFNBQVM7UUFDUDtZQUNFUCxPQUFPO1lBQ1BDLE9BQU87WUFDUEcsT0FBTztnQkFDTGYsT0FBT2dCLElBQUksQ0FBQztvQkFBQztpQkFBSztnQkFDbEI7b0JBQUVKLE9BQU87b0JBQXFCSyxVQUFVO2dCQUFVO2dCQUNsRDtvQkFBRUwsT0FBTztvQkFBcUJLLFVBQVU7Z0JBQVU7YUFDbkQ7UUFDSDtRQUNBO1lBQ0VOLE9BQU87WUFDUEMsT0FBTztZQUNQRyxPQUFPO2dCQUNMZixPQUFPZ0IsSUFBSSxDQUFDO29CQUFDO2lCQUFLO2dCQUNsQjtvQkFBRUosT0FBTztvQkFBcUJLLFVBQVU7Z0JBQVU7Z0JBQ2xEO29CQUFFTCxPQUFPO29CQUFxQkssVUFBVTtnQkFBVTthQUNuRDtRQUNIO1FBQ0E7WUFDRU4sT0FBTztZQUNQQyxPQUFPO1lBQ1BHLE9BQU87Z0JBQ0xmLE9BQU9nQixJQUFJLENBQUM7b0JBQUM7aUJBQUs7Z0JBQ2xCO29CQUFFSixPQUFPO29CQUFxQkssVUFBVTtnQkFBVTtnQkFDbEQ7b0JBQUVMLE9BQU87b0JBQThCSyxVQUFVO2dCQUFVO2dCQUMzRDtvQkFBRUwsT0FBTztvQkFBeUJLLFVBQVU7Z0JBQVU7YUFDdkQ7UUFDSDtLQUNEO0FBQ0gsRUFBRTtBQUVGOzs7O0NBSUMsR0FDRCxPQUFPLE1BQU1FLGFBQ1gsQ0FBQ0MsT0FDRCxDQUFDQztRQUNDLElBQUksQ0FBRSxDQUFBLGNBQWNBLENBQUFBLEdBQUksT0FBT0E7UUFDL0IsT0FBUUEsRUFBRUosUUFBUTtZQUNoQixLQUFLO2dCQUNILE9BQU9qQixPQUFPZ0IsSUFBSSxDQUFDSSxJQUFJLENBQUNDLEVBQUVULEtBQUssQ0FBQztZQUNsQyxLQUFLO2dCQUNILE9BQU9aLE9BQU9nQixJQUFJLENBQUNsQixXQUFXc0IsSUFBSSxDQUFDQyxFQUFFVCxLQUFLLENBQUMsRUFBRVEsSUFBSTtZQUNuRCxLQUFLO2dCQUNILE1BQU1FLE1BQU1GLElBQUksQ0FBQ0MsRUFBRVQsS0FBSyxDQUFDO2dCQUN6QixNQUFNVyxRQUFRekIsV0FBV3dCLEtBQUtGLElBQUk7Z0JBQ2xDLE1BQU1JLE1BQU1ELE1BQU1FLE1BQU07Z0JBQ3hCLE9BQU96QixPQUFPZ0IsSUFBSSxDQUFDO29CQUFDUTt1QkFBUUQ7aUJBQU07UUFDdEM7SUFDRixFQUFFO0FBY0osNkVBQTZFLEdBQzdFLE9BQU8sTUFBTUcscUJBQXFCLENBQ2hDQyxTQUNBQyxjQUNBQyxRQUNBQztJQUVBLGtFQUFrRTtJQUNsRSxNQUFNQyxpQkFBaUJDLFNBQVNMLFFBQVFNLEtBQUssQ0FBQyxLQUFLQyxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQzdELE1BQU1DLGNBQWNoQyxZQUFZaUMsV0FBVyxDQUFDO1FBQzFDQyxRQUFRUCxNQUFNQSxLQUFLLENBQUNRLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNsQixJQUFNcEIsZ0JBQWdCdUMsTUFBTSxDQUFDbkIsRUFBRUQsSUFBSTtJQUNsRTtJQUNBLE9BQU87UUFDTHFCLFlBQVliO1FBQ1osa0VBQWtFO1FBQ2xFYyxpQkFBaUJYO1FBQ2pCWSxpQkFBaUJiLE1BQU1jLE1BQU07UUFDN0JDLGFBQWFoQjtRQUNiaUIsVUFBVTlDLE9BQU9nQixJQUFJLENBQUNjLE1BQU1pQixHQUFHLEVBQUVDLFFBQVEsQ0FBQztRQUMxQ3BDLE9BQU9aLE9BQU9nQixJQUFJLENBQUNjLE1BQU1sQixLQUFLLEVBQUVvQyxRQUFRLENBQUM7UUFDekNsQixPQUFPOUIsT0FBT2dCLElBQUksQ0FBQ2IsWUFBWThDLE1BQU0sQ0FBQ2QsYUFBYWUsTUFBTSxJQUFJRixRQUFRLENBQ25FO0lBRUo7QUFDRixFQUFFO0FBRUYsT0FBTyxNQUFNRztlQUE0QixvQkFBQSxVQUN2Q0MsUUFDQUMsVUFDQUM7UUFFQSxPQUFPN0MsSUFBSThDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDO1lBQzdCSjtZQUNBQztZQUNBSSxlQUFlO2dCQUNiQyxTQUFTO2dCQUNUOUMsT0FBT1AsaUJBQWlCNEMsTUFBTSxDQUFDSyxRQUFRSixNQUFNO1lBQy9DO1FBQ0Y7SUFDRjtvQkFiYUMsMEJBQ1hDLFFBQ0FDLFVBQ0FDOzs7SUFVQTtBQUVGLG1FQUFtRTtBQUNuRSxPQUFPLE1BQU1LO2VBQWMsb0JBQUEsVUFDekJDLElBQ0FDO1FBRUEsTUFBTUMsZUFBZSxNQUFNQyxnQkFBZ0JIO1FBQzNDLHFFQUFxRTtRQUNyRSwwR0FBMEc7UUFDMUcsTUFBTUksa0JBQWtCQyxPQUFPSixjQUFjSyxjQUFjLElBQUk7UUFDL0QsMERBQTBELEdBQzFELE1BQU1DLFlBQVlGLE9BQU9ILGFBQWFSLE1BQU0sQ0FBRVYsTUFBTTtRQUNwRCxPQUFPdkMsaUJBQWlCK0IsV0FBVyxDQUFDO1lBQ2xDMEI7WUFDQU0sY0FBYyxNQUFNQyxnQkFBZ0JULElBQUlPO1lBQ3hDTjtZQUNBUyxtQkFBbUIsTUFBTUQsZ0JBQWdCVCxJQUFJSTtRQUMvQztJQUNGO29CQWhCYUwsWUFDWEMsSUFDQUM7OztJQWNBO0FBRUYsT0FBTyxNQUFNRTtlQUFrQixvQkFBQSxVQUM3QkgsSUFDQWhCO1lBWVUyQix3QkFDU0E7UUFYbkIsTUFBTSxFQUFFakIsUUFBUWlCLFNBQVMsRUFBRUMsUUFBUUMsU0FBUyxFQUFFLEdBQUcsTUFBTWIsR0FBR1ksTUFBTSxDQUFDNUI7UUFDakUsTUFBTVUsU0FBU2xELE9BQU9nQyxXQUFXLENBQUMsd0NBQzdCbUM7WUFDSEcsU0FBUztnQkFDUEMsT0FBT0MsT0FBT0wsVUFBVUcsT0FBTyxDQUFDQyxLQUFLO2dCQUNyQ0UsS0FBS0QsT0FBT0wsVUFBVUcsT0FBTyxDQUFDRyxHQUFHO1lBQ25DO1lBQ0FqQyxRQUFRZ0MsT0FBT0wsVUFBVTNCLE1BQU07WUFDL0JrQyxNQUFNQyx1QkFBdUJSLFVBQVVPLElBQUk7WUFDM0NFLGFBQWE7Z0JBQ1hDLElBQUksR0FBRVYseUJBQUFBLFVBQVVTLFdBQVcsY0FBckJULDZDQUFBQSx1QkFBdUJVLElBQUk7Z0JBQ2pDQyxhQUFhLEdBQUVYLDBCQUFBQSxVQUFVUyxXQUFXLGNBQXJCVCw4Q0FBQUEsd0JBQXVCeEQsS0FBSztZQUM3Qzs7UUFHRixNQUFNb0UsYUFBYVYsVUFBVVUsVUFBVSxDQUFDNUMsR0FBRyxDQUFDLENBQUM2QyxNQUFTLHdDQUNqREE7Z0JBQ0hDLFdBQVdELElBQUlDLFNBQVMsSUFBSU4sdUJBQXVCSyxJQUFJQyxTQUFTO2dCQUNoRUMsYUFBYWhGLG9CQUFvQjhFLElBQUlFLFdBQVc7O1FBRWxELE1BQU1kLFNBQVNqRSxPQUFPNkIsV0FBVyxDQUFDO1lBQ2hDUSxRQUFRZ0MsT0FBT0gsVUFBVTdCLE1BQU07WUFDL0IyQyxPQUFPZCxVQUFVYyxLQUFLO1lBQ3RCQyxTQUFTO2dCQUNQUCxNQUFNUixVQUFVZSxPQUFPLENBQUNQLElBQUk7Z0JBQzVCQyxlQUFlVCxVQUFVZSxPQUFPLENBQUN6RSxLQUFLO1lBQ3hDO1lBQ0FvRTtRQUNGO1FBQ0Esd0RBQXdEO1FBQ3hELCtDQUErQztRQUUvQyxPQUFPO1lBQUU3QjtZQUFRa0I7UUFBTztJQUMxQjtvQkFyQ2FULGdCQUNYSCxJQUNBaEI7OztJQW1DQTtBQUVGLE1BQU15QjtlQUFrQixvQkFBQSxVQUN0QlQsSUFDQWhCO1FBRUEsa0ZBQWtGO1FBQ2xGLE1BQU0sRUFBRTZDLGVBQWUsRUFBRSxHQUFHLE1BQU1uQyxPQUFPTSxJQUFJaEI7UUFDN0MsTUFBTThDLGFBQWEsTUFBTTlCLEdBQUcrQixhQUFhLENBQUMvQztRQUMxQyxNQUFNZ0QsbUJBQW1CRixXQUFXQSxVQUFVLENBQUNuRCxHQUFHLENBQUMsQ0FBQ2pCLE1BQVMsQ0FBQTtnQkFDM0R1RSxTQUFTdkUsSUFBSXVFLE9BQU87Z0JBQ3BCQyxRQUFRQyxvQkFBb0J6RSxJQUFJMEUsTUFBTTtnQkFDdENDLGFBQWEzRSxJQUFJMkUsV0FBVztnQkFDNUJDLGtCQUFrQjVFLElBQUk0RSxnQkFBZ0IsR0FDbEN0QixPQUFPdEQsSUFBSTRFLGdCQUFnQixJQUMzQkM7WUFDTixDQUFBO1FBQ0EsTUFBTUMsYUFBYVYsV0FBV0EsVUFBVSxDQUFDVyxNQUFNLENBQzdDLENBQUNDLGFBQWFDLElBQU1ELGNBQWNDLEVBQUVOLFdBQVcsRUFDL0NyQixPQUFPO1FBRVQsTUFBTTRCLFdBQVdaLGlCQUFpQmEsSUFBSSxDQUFDLENBQUNuRixNQUN0Q3ZCLG1CQUFtQnVCLElBQUl1RSxPQUFPLEVBQUVKO1FBRWxDLE9BQU9qRixhQUFhNEIsV0FBVyxDQUFDO1lBQzlCc0QsWUFBWUU7WUFDWmMsa0JBQWtCTjtZQUNsQkk7UUFDRjtJQUNGO29CQTNCTW5DLGdCQUNKVCxJQUNBaEI7Ozs7QUEyQkYsTUFBTVU7ZUFBUyxvQkFBQSxVQUNiTSxJQUNBaEI7UUFFQSxzREFBc0Q7UUFDdEQsTUFBTStELE9BQU8sTUFBTS9DLEdBQUdnRCxVQUFVLENBQUNoRSxRQUFRQTtRQUN6QyxPQUFPK0QsS0FBS0UsVUFBVSxDQUFDLEVBQUUsQ0FBQ3ZELE1BQU07SUFDbEM7b0JBUE1BLE9BQ0pNLElBQ0FoQjs7OztBQU9GLE1BQU1tQyx5QkFBeUIsQ0FDN0IrQjtRQUVtREE7SUFBbkQsTUFBTUMsUUFBUSxBQUFDRCxLQUFLRSxPQUFPLEtBQUssT0FBUSxVQUFXRixDQUFBQSxDQUFBQSxvQkFBQUEsS0FBS0csV0FBVyxjQUFoQkgsK0JBQUFBLG9CQUFvQixDQUFBO0lBQ3ZFLE9BQU81RyxVQUFVa0MsV0FBVyxDQUFDO1FBQzNCOEUsU0FBU3RDLE9BQU91QyxLQUFLQyxLQUFLLENBQUNOLEtBQUtFLE9BQU8sS0FBSztRQUM1Q0Q7SUFDRjtBQUNGO0FBRUEsTUFBTWhCLHNCQUFzQixDQUMxQkM7SUFFQSxJQUFJQSxXQUFXRyxXQUFXO1FBQ3hCLE9BQU9BO0lBQ1Q7SUFDQSxJQUFJSCxPQUFPcUIsU0FBUyxJQUFJLFdBQVc7UUFDakMsT0FBTztZQUNMQyxTQUFTdEIsT0FBTzVFLElBQUk7WUFDcEJtRyxXQUFXcEI7UUFDYjtJQUNGLE9BQU8sSUFBSUgsT0FBT3FCLFNBQVMsSUFBSSxhQUFhO1FBQzFDLE9BQU87WUFDTEMsU0FBU25CO1lBQ1RvQixXQUFXdkIsT0FBTzVFLElBQUk7UUFDeEI7SUFDRixPQUFPO1FBQ0wsTUFBTSxJQUFJb0csTUFDUixDQUFDLCtCQUErQixFQUFFLEFBQUN4QixPQUFlcUIsU0FBUyxDQUFDLENBQUM7SUFFakU7QUFDRiJ9
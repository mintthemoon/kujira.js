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
import { Buffer } from "buffer";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pY3EudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUJlY2gzMiB9IGZyb20gXCJAY29zbWpzL2VuY29kaW5nXCI7XG5pbXBvcnQgeyBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQgeyBQcm92ZW5RdWVyeSB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlL2J1aWxkL3F1ZXJ5Y2xpZW50L3F1ZXJ5Y2xpZW50XCI7XG5pbXBvcnQge1xuICBSZWFkb25seURhdGVXaXRoTmFub3NlY29uZHMsXG4gIHRlbmRlcm1pbnQzNyxcbiAgVGVuZGVybWludDM3Q2xpZW50LFxuICBWYWxpZGF0b3JQdWJrZXksXG59IGZyb20gXCJAY29zbWpzL3RlbmRlcm1pbnQtcnBjXCI7XG5pbXBvcnQgeyBhcnJheUNvbnRlbnRFcXVhbHMgfSBmcm9tIFwiQGNvc21qcy91dGlsc1wiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuaW1wb3J0IHsgQ29tbWl0bWVudFByb29mIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvaWNzMjMvdjEvcHJvb2ZzXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2dvb2dsZS9wcm90b2J1Zi90aW1lc3RhbXBcIjtcbmltcG9ydCB7IEhlaWdodCB9IGZyb20gXCJjb3NtanMtdHlwZXMvaWJjL2NvcmUvY2xpZW50L3YxL2NsaWVudFwiO1xuaW1wb3J0IHsgTWVya2xlUHJvb2YgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9jb3JlL2NvbW1pdG1lbnQvdjEvY29tbWl0bWVudFwiO1xuaW1wb3J0IHsgSGVhZGVyIGFzIFRlbmRlcm1pbnRIZWFkZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9saWdodGNsaWVudHMvdGVuZGVybWludC92MS90ZW5kZXJtaW50XCI7XG5pbXBvcnQgeyBQdWJsaWNLZXkgfSBmcm9tIFwiY29zbWpzLXR5cGVzL3RlbmRlcm1pbnQvY3J5cHRvL2tleXNcIjtcbmltcG9ydCB7XG4gIGJsb2NrSURGbGFnRnJvbUpTT04sXG4gIENvbW1pdCxcbiAgSGVhZGVyLFxuICBTaWduZWRIZWFkZXIsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvdGVuZGVybWludC90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgVmFsaWRhdG9yU2V0IH0gZnJvbSBcImNvc21qcy10eXBlcy90ZW5kZXJtaW50L3R5cGVzL3ZhbGlkYXRvclwiO1xuaW1wb3J0IHsgbXNnIH0gZnJvbSBcIi4vbXNnXCI7XG5cbmV4cG9ydCB0eXBlIFN0b3JlS2V5ID0gXCJiYW5rXCIgfCBcInN0YWtpbmdcIjtcblxuZXhwb3J0IGNvbnN0IE1PRFVMRVM6IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IFN0b3JlS2V5IH1bXSA9IFtcbiAgeyBsYWJlbDogXCJCYW5rXCIsIHZhbHVlOiBcImJhbmtcIiB9LFxuICB7IGxhYmVsOiBcIlN0YWtpbmdcIiwgdmFsdWU6IFwic3Rha2luZ1wiIH0sXG5dO1xuXG5leHBvcnQgdHlwZSBQYXJ0ID1cbiAgfCB7XG4gICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgZW5jb2Rpbmc6IFwic3RyaW5nXCIgfCBcImFkZHJcIiB8IFwiYWRkckxlblwiO1xuICAgIH1cbiAgfCBVaW50OEFycmF5O1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgcGFydHM6IFBhcnRbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFFVRVJJRVM6IFJlY29yZDxTdG9yZUtleSwgUXVlcnlbXT4gPSB7XG4gIGJhbms6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJUb3RhbCBTdXBwbHlcIixcbiAgICAgIHZhbHVlOiBcIlRvdGFsU3VwcGx5XCIsXG4gICAgICBwYXJ0czogW0J1ZmZlci5mcm9tKFsweDAwXSksIHsgdmFsdWU6IFwiRGVub21cIiwgZW5jb2Rpbmc6IFwic3RyaW5nXCIgfV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJCYWxhbmNlIE9mXCIsXG4gICAgICB2YWx1ZTogXCJCYWxhbmNlT2ZcIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIEJ1ZmZlci5mcm9tKFsweDAyXSksXG4gICAgICAgIHsgdmFsdWU6IFwiQWRkcmVzc1wiLCBlbmNvZGluZzogXCJhZGRyTGVuXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJEZW5vbVwiLCBlbmNvZGluZzogXCJzdHJpbmdcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBzdGFraW5nOiBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiRGVsZWdhdGVkIEFtb3VudFwiLFxuICAgICAgdmFsdWU6IFwiRGVsZWdhdGlvblwiLFxuICAgICAgcGFydHM6IFtcbiAgICAgICAgQnVmZmVyLmZyb20oWzB4MzFdKSxcbiAgICAgICAgeyB2YWx1ZTogXCJEZWxlZ2F0b3IgQWRkcmVzc1wiLCBlbmNvZGluZzogXCJhZGRyTGVuXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJWYWxpZGF0b3IgQWRkcmVzc1wiLCBlbmNvZGluZzogXCJhZGRyTGVuXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJVbmJvbmRpbmcgRGVsZWdhdGlvblwiLFxuICAgICAgdmFsdWU6IFwiVW5ib25kaW5nRGVsZWdhdGlvblwiLFxuICAgICAgcGFydHM6IFtcbiAgICAgICAgQnVmZmVyLmZyb20oWzB4MzJdKSxcbiAgICAgICAgeyB2YWx1ZTogXCJEZWxlZ2F0b3IgQWRkcmVzc1wiLCBlbmNvZGluZzogXCJhZGRyTGVuXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJWYWxpZGF0b3IgQWRkcmVzc1wiLCBlbmNvZGluZzogXCJhZGRyTGVuXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJSZWRlbGVnYXRpb25cIixcbiAgICAgIHZhbHVlOiBcIlJlZGVsZWdhdGlvblwiLFxuICAgICAgcGFydHM6IFtcbiAgICAgICAgQnVmZmVyLmZyb20oWzB4MzRdKSxcbiAgICAgICAgeyB2YWx1ZTogXCJEZWxlZ2F0b3IgQWRkcmVzc1wiLCBlbmNvZGluZzogXCJhZGRyTGVuXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJPcmlnaW5hbCBWYWxpZGF0b3IgQWRkcmVzc1wiLCBlbmNvZGluZzogXCJhZGRyTGVuXCIgfSxcbiAgICAgICAgeyB2YWx1ZTogXCJOZXcgVmFsaWRhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG4vKiogRW5jb2RlIGRhdGEgaW50byBhIGtleVxuICpcbiAqIFR5cGljYWxseSBhIGNvbXBsZXRlIGtleSB3aWxsIGJlIGdlbmVyYXRlZCB3aXRoIGBCdWZmZXIuY29uY2F0KHF1ZXJ5Lm1hcChlbmNvZGVQYXJ0KGRhdGEpKSlgXG4gKlxuICovXG5leHBvcnQgY29uc3QgZW5jb2RlUGFydCA9XG4gIChkYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PlxuICAoeDogUGFydCk6IFVpbnQ4QXJyYXkgPT4ge1xuICAgIGlmICghKFwiZW5jb2RpbmdcIiBpbiB4KSkgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4LmVuY29kaW5nKSB7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShkYXRhW3gudmFsdWVdKTtcbiAgICAgIGNhc2UgXCJhZGRyXCI6XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShmcm9tQmVjaDMyKGRhdGFbeC52YWx1ZV0pLmRhdGEpO1xuICAgICAgY2FzZSBcImFkZHJMZW5cIjpcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVt4LnZhbHVlXTtcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBmcm9tQmVjaDMyKHZhbCkuZGF0YTtcbiAgICAgICAgY29uc3QgbGVuID0gYnl0ZXMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oW2xlbiwgLi4uYnl0ZXNdKTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVyaWZ5TWVtYmVyc2hpcCB7XG4gIGNvbm5lY3Rpb246IHN0cmluZztcbiAgcmV2aXNpb25fbnVtYmVyOiBudW1iZXI7XG4gIHJldmlzaW9uX2hlaWdodDogbnVtYmVyO1xuICAvKiogQmFzZTY0IGVuY29kZWQgYnl0ZXMgKi9cbiAgcHJvb2Y6IHN0cmluZztcbiAgLyoqIEJhc2U2NCBlbmNvZGVkIGJ5dGVzICovXG4gIHZhbHVlOiBzdHJpbmc7XG4gIHBhdGhfcHJlZml4OiBzdHJpbmc7XG4gIHBhdGhfa2V5OiBzdHJpbmc7XG59XG5cbi8qKiBDb252ZXJ0IGEgUHJvb2YgaW50byBkYXRhIHRvIGJlIHN1Ym1pdHRlZCB0byB0aGUgQ29zbVdhc20gdmVyaWZ5IGJpbmRpbmcgKi9cbmV4cG9ydCBjb25zdCB0b1ZlcmlmeU1lbWJlcnNoaXAgPSAoXG4gIGNoYWluSWQ6IHN0cmluZyxcbiAgY29ubmVjdGlvbklkOiBzdHJpbmcsXG4gIHByZWZpeDogc3RyaW5nLFxuICBwcm9vZjogUHJvdmVuUXVlcnlcbik6IFZlcmlmeU1lbWJlcnNoaXAgPT4ge1xuICAvLyBodHRwczovL2liYy5jb3Ntb3MubmV0d29yay9tYWluL2liYy9vdmVydmlldyNpYmMtY2xpZW50LWhlaWdodHNcbiAgY29uc3QgcmV2aXNpb25OdW1iZXIgPSBwYXJzZUludChjaGFpbklkLnNwbGl0KFwiLVwiKS5hdCgtMSkgfHwgXCIwXCIpO1xuICBjb25zdCBtZXJrbGVQcm9vZiA9IE1lcmtsZVByb29mLmZyb21QYXJ0aWFsKHtcbiAgICBwcm9vZnM6IHByb29mLnByb29mLm9wcy5tYXAoKHgpID0+IENvbW1pdG1lbnRQcm9vZi5kZWNvZGUoeC5kYXRhKSksXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvbm5lY3Rpb246IGNvbm5lY3Rpb25JZCxcbiAgICAvLyBodHRwczovL2liYy5jb3Ntb3MubmV0d29yay9tYWluL2liYy9vdmVydmlldyNpYmMtY2xpZW50LWhlaWdodHNcbiAgICByZXZpc2lvbl9udW1iZXI6IHJldmlzaW9uTnVtYmVyLFxuICAgIHJldmlzaW9uX2hlaWdodDogcHJvb2YuaGVpZ2h0LFxuICAgIHBhdGhfcHJlZml4OiBwcmVmaXgsXG4gICAgcGF0aF9rZXk6IEJ1ZmZlci5mcm9tKHByb29mLmtleSkudG9TdHJpbmcoXCJiYXNlNjRcIiksXG4gICAgdmFsdWU6IEJ1ZmZlci5mcm9tKHByb29mLnZhbHVlKS50b1N0cmluZyhcImJhc2U2NFwiKSxcbiAgICBwcm9vZjogQnVmZmVyLmZyb20oTWVya2xlUHJvb2YuZW5jb2RlKG1lcmtsZVByb29mKS5maW5pc2goKSkudG9TdHJpbmcoXG4gICAgICBcImJhc2U2NFwiXG4gICAgKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBtc2dVcGRhdGVUZW5kZXJtaW50Q2xpZW50ID0gYXN5bmMgKFxuICBzaWduZXI6IHN0cmluZyxcbiAgY2xpZW50SWQ6IHN0cmluZyxcbiAgaGVhZGVyOiBUZW5kZXJtaW50SGVhZGVyXG4pOiBQcm9taXNlPEVuY29kZU9iamVjdD4gPT4ge1xuICByZXR1cm4gbXNnLmliYy5tc2dVcGRhdGVDbGllbnQoe1xuICAgIHNpZ25lcixcbiAgICBjbGllbnRJZCxcbiAgICBjbGllbnRNZXNzYWdlOiB7XG4gICAgICB0eXBlVXJsOiBcIi9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuSGVhZGVyXCIsXG4gICAgICB2YWx1ZTogVGVuZGVybWludEhlYWRlci5lbmNvZGUoaGVhZGVyKS5maW5pc2goKSxcbiAgICB9LFxuICB9KTtcbn07XG5cbi8vIEJ1aWxkIGEgdGVuZGVybWludCBoZWFkZXIgYXQgYSBzcGVjaWZpYyBoZWlnaHQgZm9yIHZlcmlmaWNhdGlvbi5cbmV4cG9ydCBjb25zdCBidWlsZEhlYWRlciA9IGFzeW5jIChcbiAgdG06IFRlbmRlcm1pbnQzN0NsaWVudCxcbiAgdHJ1c3RlZEhlaWdodDogSGVpZ2h0XG4pOiBQcm9taXNlPFRlbmRlcm1pbnRIZWFkZXI+ID0+IHtcbiAgY29uc3Qgc2lnbmVkSGVhZGVyID0gYXdhaXQgZ2V0U2lnbmVkSGVhZGVyKHRtKTtcbiAgLy8gXCJhc3NlcnQgdGhhdCB0cnVzdGVkVmFscyBpcyBOZXh0VmFsaWRhdG9ycyBvZiBsYXN0IHRydXN0ZWQgaGVhZGVyXCJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jsb2IvdjAuNDEuMC94L2liYy9saWdodC1jbGllbnRzLzA3LXRlbmRlcm1pbnQvdHlwZXMvdXBkYXRlLmdvI0w3NFxuICBjb25zdCB2YWxpZGF0b3JIZWlnaHQgPSBOdW1iZXIodHJ1c3RlZEhlaWdodC5yZXZpc2lvbkhlaWdodCkgKyAxO1xuICAvKiBlc2xpbnQgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbjogXCJvZmZcIiAqL1xuICBjb25zdCBjdXJIZWlnaHQgPSBOdW1iZXIoc2lnbmVkSGVhZGVyLmhlYWRlciEuaGVpZ2h0KTtcbiAgcmV0dXJuIFRlbmRlcm1pbnRIZWFkZXIuZnJvbVBhcnRpYWwoe1xuICAgIHNpZ25lZEhlYWRlcixcbiAgICB2YWxpZGF0b3JTZXQ6IGF3YWl0IGdldFZhbGlkYXRvclNldCh0bSwgY3VySGVpZ2h0KSxcbiAgICB0cnVzdGVkSGVpZ2h0LFxuICAgIHRydXN0ZWRWYWxpZGF0b3JzOiBhd2FpdCBnZXRWYWxpZGF0b3JTZXQodG0sIHZhbGlkYXRvckhlaWdodCksXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNpZ25lZEhlYWRlciA9IGFzeW5jIChcbiAgdG06IFRlbmRlcm1pbnQzN0NsaWVudCxcbiAgaGVpZ2h0PzogbnVtYmVyXG4pOiBQcm9taXNlPFNpZ25lZEhlYWRlcj4gPT4ge1xuICBjb25zdCB7IGhlYWRlcjogcnBjSGVhZGVyLCBjb21taXQ6IHJwY0NvbW1pdCB9ID0gYXdhaXQgdG0uY29tbWl0KGhlaWdodCk7XG4gIGNvbnN0IGhlYWRlciA9IEhlYWRlci5mcm9tUGFydGlhbCh7XG4gICAgLi4ucnBjSGVhZGVyLFxuICAgIHZlcnNpb246IHtcbiAgICAgIGJsb2NrOiBCaWdJbnQocnBjSGVhZGVyLnZlcnNpb24uYmxvY2spLFxuICAgICAgYXBwOiBCaWdJbnQocnBjSGVhZGVyLnZlcnNpb24uYXBwKSxcbiAgICB9LFxuICAgIGhlaWdodDogQmlnSW50KHJwY0hlYWRlci5oZWlnaHQpLFxuICAgIHRpbWU6IHRpbWVzdGFtcEZyb21EYXRlTmFub3MocnBjSGVhZGVyLnRpbWUpLFxuICAgIGxhc3RCbG9ja0lkOiB7XG4gICAgICBoYXNoOiBycGNIZWFkZXIubGFzdEJsb2NrSWQ/Lmhhc2gsXG4gICAgICBwYXJ0U2V0SGVhZGVyOiBycGNIZWFkZXIubGFzdEJsb2NrSWQ/LnBhcnRzLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHNpZ25hdHVyZXMgPSBycGNDb21taXQuc2lnbmF0dXJlcy5tYXAoKHNpZykgPT4gKHtcbiAgICAuLi5zaWcsXG4gICAgdGltZXN0YW1wOiBzaWcudGltZXN0YW1wICYmIHRpbWVzdGFtcEZyb21EYXRlTmFub3Moc2lnLnRpbWVzdGFtcCksXG4gICAgYmxvY2tJZEZsYWc6IGJsb2NrSURGbGFnRnJvbUpTT04oc2lnLmJsb2NrSWRGbGFnKSxcbiAgfSkpO1xuICBjb25zdCBjb21taXQgPSBDb21taXQuZnJvbVBhcnRpYWwoe1xuICAgIGhlaWdodDogQmlnSW50KHJwY0NvbW1pdC5oZWlnaHQpLFxuICAgIHJvdW5kOiBycGNDb21taXQucm91bmQsXG4gICAgYmxvY2tJZDoge1xuICAgICAgaGFzaDogcnBjQ29tbWl0LmJsb2NrSWQuaGFzaCxcbiAgICAgIHBhcnRTZXRIZWFkZXI6IHJwY0NvbW1pdC5ibG9ja0lkLnBhcnRzLFxuICAgIH0sXG4gICAgc2lnbmF0dXJlcyxcbiAgfSk7XG4gIC8vIEZvciB0aGUgdm90ZSBzaWduIGJ5dGVzLCBpdCBjaGVja3MgKGZyb20gdGhlIGNvbW1pdCk6XG4gIC8vICAgSGVpZ2h0LCBSb3VuZCwgQmxvY2tJZCwgVGltZVN0YW1wLCBDaGFpbklEXG5cbiAgcmV0dXJuIHsgaGVhZGVyLCBjb21taXQgfTtcbn07XG5cbmNvbnN0IGdldFZhbGlkYXRvclNldCA9IGFzeW5jIChcbiAgdG06IFRlbmRlcm1pbnQzN0NsaWVudCxcbiAgaGVpZ2h0OiBudW1iZXJcbik6IFByb21pc2U8VmFsaWRhdG9yU2V0PiA9PiB7XG4gIC8vIHdlIG5lZWQgdG8gcXVlcnkgdGhlIGhlYWRlciB0byBmaW5kIG91dCB3aG8gdGhlIHByb3Bvc2VyIHdhcywgYW5kIHB1bGwgdGhlbSBvdXRcbiAgY29uc3QgeyBwcm9wb3NlckFkZHJlc3MgfSA9IGF3YWl0IGhlYWRlcih0bSwgaGVpZ2h0KTtcbiAgY29uc3QgdmFsaWRhdG9ycyA9IGF3YWl0IHRtLnZhbGlkYXRvcnNBbGwoaGVpZ2h0KTtcbiAgY29uc3QgbWFwcGVkVmFsaWRhdG9ycyA9IHZhbGlkYXRvcnMudmFsaWRhdG9ycy5tYXAoKHZhbCkgPT4gKHtcbiAgICBhZGRyZXNzOiB2YWwuYWRkcmVzcyxcbiAgICBwdWJLZXk6IG1hcFJwY1B1YktleVRvUHJvdG8odmFsLnB1YmtleSksXG4gICAgdm90aW5nUG93ZXI6IHZhbC52b3RpbmdQb3dlcixcbiAgICBwcm9wb3NlclByaW9yaXR5OiB2YWwucHJvcG9zZXJQcmlvcml0eVxuICAgICAgPyBCaWdJbnQodmFsLnByb3Bvc2VyUHJpb3JpdHkpXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfSkpO1xuICBjb25zdCB0b3RhbFBvd2VyID0gdmFsaWRhdG9ycy52YWxpZGF0b3JzLnJlZHVjZShcbiAgICAoYWNjdW11bGF0b3IsIHYpID0+IGFjY3VtdWxhdG9yICsgdi52b3RpbmdQb3dlcixcbiAgICBCaWdJbnQoMClcbiAgKTtcbiAgY29uc3QgcHJvcG9zZXIgPSBtYXBwZWRWYWxpZGF0b3JzLmZpbmQoKHZhbCkgPT5cbiAgICBhcnJheUNvbnRlbnRFcXVhbHModmFsLmFkZHJlc3MsIHByb3Bvc2VyQWRkcmVzcylcbiAgKTtcbiAgcmV0dXJuIFZhbGlkYXRvclNldC5mcm9tUGFydGlhbCh7XG4gICAgdmFsaWRhdG9yczogbWFwcGVkVmFsaWRhdG9ycyxcbiAgICB0b3RhbFZvdGluZ1Bvd2VyOiB0b3RhbFBvd2VyLFxuICAgIHByb3Bvc2VyLFxuICB9KTtcbn07XG5cbmNvbnN0IGhlYWRlciA9IGFzeW5jIChcbiAgdG06IFRlbmRlcm1pbnQzN0NsaWVudCxcbiAgaGVpZ2h0OiBudW1iZXJcbik6IFByb21pc2U8dGVuZGVybWludDM3LkhlYWRlcj4gPT4ge1xuICAvLyBUT0RPOiBleHBvc2UgaGVhZGVyIG1ldGhvZCBvbiB0bUNsaWVudCBhbmQgdXNlIHRoYXRcbiAgY29uc3QgcmVzcCA9IGF3YWl0IHRtLmJsb2NrY2hhaW4oaGVpZ2h0LCBoZWlnaHQpO1xuICByZXR1cm4gcmVzcC5ibG9ja01ldGFzWzBdLmhlYWRlcjtcbn07XG5cbmNvbnN0IHRpbWVzdGFtcEZyb21EYXRlTmFub3MgPSAoXG4gIGRhdGU6IFJlYWRvbmx5RGF0ZVdpdGhOYW5vc2Vjb25kc1xuKTogVGltZXN0YW1wID0+IHtcbiAgY29uc3QgbmFub3MgPSAoZGF0ZS5nZXRUaW1lKCkgJSAxMDAwKSAqIDEwMDAwMDAgKyAoZGF0ZS5uYW5vc2Vjb25kcyA/PyAwKTtcbiAgcmV0dXJuIFRpbWVzdGFtcC5mcm9tUGFydGlhbCh7XG4gICAgc2Vjb25kczogQmlnSW50KE1hdGguZmxvb3IoZGF0ZS5nZXRUaW1lKCkgLyAxMDAwKSksXG4gICAgbmFub3MsXG4gIH0pO1xufTtcblxuY29uc3QgbWFwUnBjUHViS2V5VG9Qcm90byA9IChcbiAgcHVia2V5PzogVmFsaWRhdG9yUHVia2V5XG4pOiBQdWJsaWNLZXkgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAocHVia2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChwdWJrZXkuYWxnb3JpdGhtID09IFwiZWQyNTUxOVwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkMjU1MTk6IHB1YmtleS5kYXRhLFxuICAgICAgc2VjcDI1NmsxOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSBlbHNlIGlmIChwdWJrZXkuYWxnb3JpdGhtID09IFwic2VjcDI1NmsxXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWQyNTUxOTogdW5kZWZpbmVkLFxuICAgICAgc2VjcDI1NmsxOiBwdWJrZXkuZGF0YSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBVbmtub3duIHZhbGlkYXRvciBwdWJrZXkgdHlwZTogJHsocHVia2V5IGFzIGFueSkuYWxnb3JpdGhtfWBcbiAgICApO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImZyb21CZWNoMzIiLCJhcnJheUNvbnRlbnRFcXVhbHMiLCJCdWZmZXIiLCJDb21taXRtZW50UHJvb2YiLCJUaW1lc3RhbXAiLCJNZXJrbGVQcm9vZiIsIkhlYWRlciIsIlRlbmRlcm1pbnRIZWFkZXIiLCJibG9ja0lERmxhZ0Zyb21KU09OIiwiQ29tbWl0IiwiVmFsaWRhdG9yU2V0IiwibXNnIiwiTU9EVUxFUyIsImxhYmVsIiwidmFsdWUiLCJRVUVSSUVTIiwiYmFuayIsInBhcnRzIiwiZnJvbSIsImVuY29kaW5nIiwic3Rha2luZyIsImVuY29kZVBhcnQiLCJkYXRhIiwieCIsInZhbCIsImJ5dGVzIiwibGVuIiwibGVuZ3RoIiwidG9WZXJpZnlNZW1iZXJzaGlwIiwiY2hhaW5JZCIsImNvbm5lY3Rpb25JZCIsInByZWZpeCIsInByb29mIiwicmV2aXNpb25OdW1iZXIiLCJwYXJzZUludCIsInNwbGl0IiwiYXQiLCJtZXJrbGVQcm9vZiIsImZyb21QYXJ0aWFsIiwicHJvb2ZzIiwib3BzIiwibWFwIiwiZGVjb2RlIiwiY29ubmVjdGlvbiIsInJldmlzaW9uX251bWJlciIsInJldmlzaW9uX2hlaWdodCIsImhlaWdodCIsInBhdGhfcHJlZml4IiwicGF0aF9rZXkiLCJrZXkiLCJ0b1N0cmluZyIsImVuY29kZSIsImZpbmlzaCIsIm1zZ1VwZGF0ZVRlbmRlcm1pbnRDbGllbnQiLCJzaWduZXIiLCJjbGllbnRJZCIsImhlYWRlciIsImliYyIsIm1zZ1VwZGF0ZUNsaWVudCIsImNsaWVudE1lc3NhZ2UiLCJ0eXBlVXJsIiwiYnVpbGRIZWFkZXIiLCJ0bSIsInRydXN0ZWRIZWlnaHQiLCJzaWduZWRIZWFkZXIiLCJnZXRTaWduZWRIZWFkZXIiLCJ2YWxpZGF0b3JIZWlnaHQiLCJOdW1iZXIiLCJyZXZpc2lvbkhlaWdodCIsImN1ckhlaWdodCIsInZhbGlkYXRvclNldCIsImdldFZhbGlkYXRvclNldCIsInRydXN0ZWRWYWxpZGF0b3JzIiwicnBjSGVhZGVyIiwiY29tbWl0IiwicnBjQ29tbWl0IiwidmVyc2lvbiIsImJsb2NrIiwiQmlnSW50IiwiYXBwIiwidGltZSIsInRpbWVzdGFtcEZyb21EYXRlTmFub3MiLCJsYXN0QmxvY2tJZCIsImhhc2giLCJwYXJ0U2V0SGVhZGVyIiwic2lnbmF0dXJlcyIsInNpZyIsInRpbWVzdGFtcCIsImJsb2NrSWRGbGFnIiwicm91bmQiLCJibG9ja0lkIiwicHJvcG9zZXJBZGRyZXNzIiwidmFsaWRhdG9ycyIsInZhbGlkYXRvcnNBbGwiLCJtYXBwZWRWYWxpZGF0b3JzIiwiYWRkcmVzcyIsInB1YktleSIsIm1hcFJwY1B1YktleVRvUHJvdG8iLCJwdWJrZXkiLCJ2b3RpbmdQb3dlciIsInByb3Bvc2VyUHJpb3JpdHkiLCJ1bmRlZmluZWQiLCJ0b3RhbFBvd2VyIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJ2IiwicHJvcG9zZXIiLCJmaW5kIiwidG90YWxWb3RpbmdQb3dlciIsInJlc3AiLCJibG9ja2NoYWluIiwiYmxvY2tNZXRhcyIsImRhdGUiLCJuYW5vcyIsImdldFRpbWUiLCJuYW5vc2Vjb25kcyIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJhbGdvcml0aG0iLCJlZDI1NTE5Iiwic2VjcDI1NmsxIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
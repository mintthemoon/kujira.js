"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MODULES: function() {
        return MODULES;
    },
    QUERIES: function() {
        return QUERIES;
    },
    buildHeader: function() {
        return buildHeader;
    },
    encodePart: function() {
        return encodePart;
    },
    getSignedHeader: function() {
        return getSignedHeader;
    },
    msgUpdateTendermintClient: function() {
        return msgUpdateTendermintClient;
    },
    toVerifyMembership: function() {
        return toVerifyMembership;
    }
});
const _encoding = require("@cosmjs/encoding");
const _utils = require("@cosmjs/utils");
const _ = require("buffer/");
const _proofs = require("cosmjs-types/cosmos/ics23/v1/proofs");
const _timestamp = require("cosmjs-types/google/protobuf/timestamp");
const _commitment = require("cosmjs-types/ibc/core/commitment/v1/commitment");
const _tendermint = require("cosmjs-types/ibc/lightclients/tendermint/v1/tendermint");
const _types = require("cosmjs-types/tendermint/types/types");
const _validator = require("cosmjs-types/tendermint/types/validator");
const _msg = require("./msg");
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
const MODULES = [
    {
        label: "Bank",
        value: "bank"
    },
    {
        label: "Staking",
        value: "staking"
    }
];
const QUERIES = {
    bank: [
        {
            label: "Total Supply",
            value: "TotalSupply",
            parts: [
                _.Buffer.from([
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
                _.Buffer.from([
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
                _.Buffer.from([
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
                _.Buffer.from([
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
                _.Buffer.from([
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
const encodePart = (data)=>(x)=>{
        if (!("encoding" in x)) return x;
        switch(x.encoding){
            case "string":
                return _.Buffer.from(data[x.value]);
            case "addr":
                return _.Buffer.from((0, _encoding.fromBech32)(data[x.value]).data);
            case "addrLen":
                const val = data[x.value];
                const bytes = (0, _encoding.fromBech32)(val).data;
                const len = bytes.length;
                return _.Buffer.from([
                    len,
                    ...bytes
                ]);
        }
    };
const toVerifyMembership = (chainId, connectionId, prefix, proof)=>{
    // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
    const revisionNumber = parseInt(chainId.split("-").at(-1) || "0");
    const merkleProof = _commitment.MerkleProof.fromPartial({
        proofs: proof.proof.ops.map((x)=>_proofs.CommitmentProof.decode(x.data))
    });
    return {
        connection: connectionId,
        // https://ibc.cosmos.network/main/ibc/overview#ibc-client-heights
        revision_number: revisionNumber,
        revision_height: proof.height,
        path_prefix: prefix,
        path_key: _.Buffer.from(proof.key).toString("base64"),
        value: _.Buffer.from(proof.value).toString("base64"),
        proof: _.Buffer.from(_commitment.MerkleProof.encode(merkleProof).finish()).toString("base64")
    };
};
const msgUpdateTendermintClient = function() {
    var _ref = _async_to_generator(function*(signer, clientId, header) {
        return _msg.msg.ibc.msgUpdateClient({
            signer,
            clientId,
            clientMessage: {
                typeUrl: "/ibc.lightclients.tendermint.v1.Header",
                value: _tendermint.Header.encode(header).finish()
            }
        });
    });
    return function msgUpdateTendermintClient(signer, clientId, header) {
        return _ref.apply(this, arguments);
    };
}();
const buildHeader = function() {
    var _ref = _async_to_generator(function*(tm, trustedHeight) {
        const signedHeader = yield getSignedHeader(tm);
        // "assert that trustedVals is NextValidators of last trusted header"
        // https://github.com/cosmos/cosmos-sdk/blob/v0.41.0/x/ibc/light-clients/07-tendermint/types/update.go#L74
        const validatorHeight = Number(trustedHeight.revisionHeight) + 1;
        /* eslint @typescript-eslint/no-non-null-assertion: "off" */ const curHeight = Number(signedHeader.header.height);
        return _tendermint.Header.fromPartial({
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
const getSignedHeader = function() {
    var _ref = _async_to_generator(function*(tm, height) {
        var _rpcHeader_lastBlockId, _rpcHeader_lastBlockId1;
        const { header: rpcHeader, commit: rpcCommit } = yield tm.commit(height);
        const header = _types.Header.fromPartial(_object_spread_props(_object_spread({}, rpcHeader), {
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
                blockIdFlag: (0, _types.blockIDFlagFromJSON)(sig.blockIdFlag)
            }));
        const commit = _types.Commit.fromPartial({
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
        const proposer = mappedValidators.find((val)=>(0, _utils.arrayContentEquals)(val.address, proposerAddress));
        return _validator.ValidatorSet.fromPartial({
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
    return _timestamp.Timestamp.fromPartial({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pY3EudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUJlY2gzMiB9IGZyb20gXCJAY29zbWpzL2VuY29kaW5nXCI7XG5pbXBvcnQgeyBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQgeyBQcm92ZW5RdWVyeSB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlL2J1aWxkL3F1ZXJ5Y2xpZW50L3F1ZXJ5Y2xpZW50XCI7XG5pbXBvcnQge1xuICBSZWFkb25seURhdGVXaXRoTmFub3NlY29uZHMsXG4gIHRlbmRlcm1pbnQzNyxcbiAgVGVuZGVybWludDM3Q2xpZW50LFxuICBWYWxpZGF0b3JQdWJrZXksXG59IGZyb20gXCJAY29zbWpzL3RlbmRlcm1pbnQtcnBjXCI7XG5pbXBvcnQgeyBhcnJheUNvbnRlbnRFcXVhbHMgfSBmcm9tIFwiQGNvc21qcy91dGlsc1wiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlci9cIjtcbmltcG9ydCB7IENvbW1pdG1lbnRQcm9vZiB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2ljczIzL3YxL3Byb29mc1wiO1xuaW1wb3J0IHsgVGltZXN0YW1wIH0gZnJvbSBcImNvc21qcy10eXBlcy9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wXCI7XG5pbXBvcnQgeyBIZWlnaHQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9jb3JlL2NsaWVudC92MS9jbGllbnRcIjtcbmltcG9ydCB7IE1lcmtsZVByb29mIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvY29yZS9jb21taXRtZW50L3YxL2NvbW1pdG1lbnRcIjtcbmltcG9ydCB7IEhlYWRlciBhcyBUZW5kZXJtaW50SGVhZGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvbGlnaHRjbGllbnRzL3RlbmRlcm1pbnQvdjEvdGVuZGVybWludFwiO1xuaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSBcImNvc21qcy10eXBlcy90ZW5kZXJtaW50L2NyeXB0by9rZXlzXCI7XG5pbXBvcnQge1xuICBibG9ja0lERmxhZ0Zyb21KU09OLFxuICBDb21taXQsXG4gIEhlYWRlcixcbiAgU2lnbmVkSGVhZGVyLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL3RlbmRlcm1pbnQvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IFZhbGlkYXRvclNldCB9IGZyb20gXCJjb3NtanMtdHlwZXMvdGVuZGVybWludC90eXBlcy92YWxpZGF0b3JcIjtcbmltcG9ydCB7IG1zZyB9IGZyb20gXCIuL21zZ1wiO1xuXG5leHBvcnQgdHlwZSBTdG9yZUtleSA9IFwiYmFua1wiIHwgXCJzdGFraW5nXCI7XG5cbmV4cG9ydCBjb25zdCBNT0RVTEVTOiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBTdG9yZUtleSB9W10gPSBbXG4gIHsgbGFiZWw6IFwiQmFua1wiLCB2YWx1ZTogXCJiYW5rXCIgfSxcbiAgeyBsYWJlbDogXCJTdGFraW5nXCIsIHZhbHVlOiBcInN0YWtpbmdcIiB9LFxuXTtcblxuZXhwb3J0IHR5cGUgUGFydCA9XG4gIHwge1xuICAgICAgdmFsdWU6IHN0cmluZztcbiAgICAgIGVuY29kaW5nOiBcInN0cmluZ1wiIHwgXCJhZGRyXCIgfCBcImFkZHJMZW5cIjtcbiAgICB9XG4gIHwgVWludDhBcnJheTtcblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHBhcnRzOiBQYXJ0W107XG59XG5cbmV4cG9ydCBjb25zdCBRVUVSSUVTOiBSZWNvcmQ8U3RvcmVLZXksIFF1ZXJ5W10+ID0ge1xuICBiYW5rOiBbXG4gICAge1xuICAgICAgbGFiZWw6IFwiVG90YWwgU3VwcGx5XCIsXG4gICAgICB2YWx1ZTogXCJUb3RhbFN1cHBseVwiLFxuICAgICAgcGFydHM6IFtCdWZmZXIuZnJvbShbMHgwMF0pLCB7IHZhbHVlOiBcIkRlbm9tXCIsIGVuY29kaW5nOiBcInN0cmluZ1wiIH1dLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiQmFsYW5jZSBPZlwiLFxuICAgICAgdmFsdWU6IFwiQmFsYW5jZU9mXCIsXG4gICAgICBwYXJ0czogW1xuICAgICAgICBCdWZmZXIuZnJvbShbMHgwMl0pLFxuICAgICAgICB7IHZhbHVlOiBcIkFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiRGVub21cIiwgZW5jb2Rpbmc6IFwic3RyaW5nXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgc3Rha2luZzogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkRlbGVnYXRlZCBBbW91bnRcIixcbiAgICAgIHZhbHVlOiBcIkRlbGVnYXRpb25cIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIEJ1ZmZlci5mcm9tKFsweDMxXSksXG4gICAgICAgIHsgdmFsdWU6IFwiRGVsZWdhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiVmFsaWRhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiVW5ib25kaW5nIERlbGVnYXRpb25cIixcbiAgICAgIHZhbHVlOiBcIlVuYm9uZGluZ0RlbGVnYXRpb25cIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIEJ1ZmZlci5mcm9tKFsweDMyXSksXG4gICAgICAgIHsgdmFsdWU6IFwiRGVsZWdhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiVmFsaWRhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiUmVkZWxlZ2F0aW9uXCIsXG4gICAgICB2YWx1ZTogXCJSZWRlbGVnYXRpb25cIixcbiAgICAgIHBhcnRzOiBbXG4gICAgICAgIEJ1ZmZlci5mcm9tKFsweDM0XSksXG4gICAgICAgIHsgdmFsdWU6IFwiRGVsZWdhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiT3JpZ2luYWwgVmFsaWRhdG9yIEFkZHJlc3NcIiwgZW5jb2Rpbmc6IFwiYWRkckxlblwiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiTmV3IFZhbGlkYXRvciBBZGRyZXNzXCIsIGVuY29kaW5nOiBcImFkZHJMZW5cIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxufTtcblxuLyoqIEVuY29kZSBkYXRhIGludG8gYSBrZXlcbiAqXG4gKiBUeXBpY2FsbHkgYSBjb21wbGV0ZSBrZXkgd2lsbCBiZSBnZW5lcmF0ZWQgd2l0aCBgQnVmZmVyLmNvbmNhdChxdWVyeS5tYXAoZW5jb2RlUGFydChkYXRhKSkpYFxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZVBhcnQgPVxuICAoZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPikgPT5cbiAgKHg6IFBhcnQpOiBVaW50OEFycmF5ID0+IHtcbiAgICBpZiAoIShcImVuY29kaW5nXCIgaW4geCkpIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeC5lbmNvZGluZykge1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZGF0YVt4LnZhbHVlXSk7XG4gICAgICBjYXNlIFwiYWRkclwiOlxuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20oZnJvbUJlY2gzMihkYXRhW3gudmFsdWVdKS5kYXRhKTtcbiAgICAgIGNhc2UgXCJhZGRyTGVuXCI6XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbeC52YWx1ZV07XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gZnJvbUJlY2gzMih2YWwpLmRhdGE7XG4gICAgICAgIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKFtsZW4sIC4uLmJ5dGVzXSk7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFZlcmlmeU1lbWJlcnNoaXAge1xuICBjb25uZWN0aW9uOiBzdHJpbmc7XG4gIHJldmlzaW9uX251bWJlcjogbnVtYmVyO1xuICByZXZpc2lvbl9oZWlnaHQ6IG51bWJlcjtcbiAgLyoqIEJhc2U2NCBlbmNvZGVkIGJ5dGVzICovXG4gIHByb29mOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBieXRlcyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICBwYXRoX3ByZWZpeDogc3RyaW5nO1xuICBwYXRoX2tleTogc3RyaW5nO1xufVxuXG4vKiogQ29udmVydCBhIFByb29mIGludG8gZGF0YSB0byBiZSBzdWJtaXR0ZWQgdG8gdGhlIENvc21XYXNtIHZlcmlmeSBiaW5kaW5nICovXG5leHBvcnQgY29uc3QgdG9WZXJpZnlNZW1iZXJzaGlwID0gKFxuICBjaGFpbklkOiBzdHJpbmcsXG4gIGNvbm5lY3Rpb25JZDogc3RyaW5nLFxuICBwcmVmaXg6IHN0cmluZyxcbiAgcHJvb2Y6IFByb3ZlblF1ZXJ5XG4pOiBWZXJpZnlNZW1iZXJzaGlwID0+IHtcbiAgLy8gaHR0cHM6Ly9pYmMuY29zbW9zLm5ldHdvcmsvbWFpbi9pYmMvb3ZlcnZpZXcjaWJjLWNsaWVudC1oZWlnaHRzXG4gIGNvbnN0IHJldmlzaW9uTnVtYmVyID0gcGFyc2VJbnQoY2hhaW5JZC5zcGxpdChcIi1cIikuYXQoLTEpIHx8IFwiMFwiKTtcbiAgY29uc3QgbWVya2xlUHJvb2YgPSBNZXJrbGVQcm9vZi5mcm9tUGFydGlhbCh7XG4gICAgcHJvb2ZzOiBwcm9vZi5wcm9vZi5vcHMubWFwKCh4KSA9PiBDb21taXRtZW50UHJvb2YuZGVjb2RlKHguZGF0YSkpLFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjb25uZWN0aW9uOiBjb25uZWN0aW9uSWQsXG4gICAgLy8gaHR0cHM6Ly9pYmMuY29zbW9zLm5ldHdvcmsvbWFpbi9pYmMvb3ZlcnZpZXcjaWJjLWNsaWVudC1oZWlnaHRzXG4gICAgcmV2aXNpb25fbnVtYmVyOiByZXZpc2lvbk51bWJlcixcbiAgICByZXZpc2lvbl9oZWlnaHQ6IHByb29mLmhlaWdodCxcbiAgICBwYXRoX3ByZWZpeDogcHJlZml4LFxuICAgIHBhdGhfa2V5OiBCdWZmZXIuZnJvbShwcm9vZi5rZXkpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxuICAgIHZhbHVlOiBCdWZmZXIuZnJvbShwcm9vZi52YWx1ZSkudG9TdHJpbmcoXCJiYXNlNjRcIiksXG4gICAgcHJvb2Y6IEJ1ZmZlci5mcm9tKE1lcmtsZVByb29mLmVuY29kZShtZXJrbGVQcm9vZikuZmluaXNoKCkpLnRvU3RyaW5nKFxuICAgICAgXCJiYXNlNjRcIlxuICAgICksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbXNnVXBkYXRlVGVuZGVybWludENsaWVudCA9IGFzeW5jIChcbiAgc2lnbmVyOiBzdHJpbmcsXG4gIGNsaWVudElkOiBzdHJpbmcsXG4gIGhlYWRlcjogVGVuZGVybWludEhlYWRlclxuKTogUHJvbWlzZTxFbmNvZGVPYmplY3Q+ID0+IHtcbiAgcmV0dXJuIG1zZy5pYmMubXNnVXBkYXRlQ2xpZW50KHtcbiAgICBzaWduZXIsXG4gICAgY2xpZW50SWQsXG4gICAgY2xpZW50TWVzc2FnZToge1xuICAgICAgdHlwZVVybDogXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLkhlYWRlclwiLFxuICAgICAgdmFsdWU6IFRlbmRlcm1pbnRIZWFkZXIuZW5jb2RlKGhlYWRlcikuZmluaXNoKCksXG4gICAgfSxcbiAgfSk7XG59O1xuXG4vLyBCdWlsZCBhIHRlbmRlcm1pbnQgaGVhZGVyIGF0IGEgc3BlY2lmaWMgaGVpZ2h0IGZvciB2ZXJpZmljYXRpb24uXG5leHBvcnQgY29uc3QgYnVpbGRIZWFkZXIgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIHRydXN0ZWRIZWlnaHQ6IEhlaWdodFxuKTogUHJvbWlzZTxUZW5kZXJtaW50SGVhZGVyPiA9PiB7XG4gIGNvbnN0IHNpZ25lZEhlYWRlciA9IGF3YWl0IGdldFNpZ25lZEhlYWRlcih0bSk7XG4gIC8vIFwiYXNzZXJ0IHRoYXQgdHJ1c3RlZFZhbHMgaXMgTmV4dFZhbGlkYXRvcnMgb2YgbGFzdCB0cnVzdGVkIGhlYWRlclwiXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9ibG9iL3YwLjQxLjAveC9pYmMvbGlnaHQtY2xpZW50cy8wNy10ZW5kZXJtaW50L3R5cGVzL3VwZGF0ZS5nbyNMNzRcbiAgY29uc3QgdmFsaWRhdG9ySGVpZ2h0ID0gTnVtYmVyKHRydXN0ZWRIZWlnaHQucmV2aXNpb25IZWlnaHQpICsgMTtcbiAgLyogZXNsaW50IEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb246IFwib2ZmXCIgKi9cbiAgY29uc3QgY3VySGVpZ2h0ID0gTnVtYmVyKHNpZ25lZEhlYWRlci5oZWFkZXIhLmhlaWdodCk7XG4gIHJldHVybiBUZW5kZXJtaW50SGVhZGVyLmZyb21QYXJ0aWFsKHtcbiAgICBzaWduZWRIZWFkZXIsXG4gICAgdmFsaWRhdG9yU2V0OiBhd2FpdCBnZXRWYWxpZGF0b3JTZXQodG0sIGN1ckhlaWdodCksXG4gICAgdHJ1c3RlZEhlaWdodCxcbiAgICB0cnVzdGVkVmFsaWRhdG9yczogYXdhaXQgZ2V0VmFsaWRhdG9yU2V0KHRtLCB2YWxpZGF0b3JIZWlnaHQpLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTaWduZWRIZWFkZXIgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIGhlaWdodD86IG51bWJlclxuKTogUHJvbWlzZTxTaWduZWRIZWFkZXI+ID0+IHtcbiAgY29uc3QgeyBoZWFkZXI6IHJwY0hlYWRlciwgY29tbWl0OiBycGNDb21taXQgfSA9IGF3YWl0IHRtLmNvbW1pdChoZWlnaHQpO1xuICBjb25zdCBoZWFkZXIgPSBIZWFkZXIuZnJvbVBhcnRpYWwoe1xuICAgIC4uLnJwY0hlYWRlcixcbiAgICB2ZXJzaW9uOiB7XG4gICAgICBibG9jazogQmlnSW50KHJwY0hlYWRlci52ZXJzaW9uLmJsb2NrKSxcbiAgICAgIGFwcDogQmlnSW50KHJwY0hlYWRlci52ZXJzaW9uLmFwcCksXG4gICAgfSxcbiAgICBoZWlnaHQ6IEJpZ0ludChycGNIZWFkZXIuaGVpZ2h0KSxcbiAgICB0aW1lOiB0aW1lc3RhbXBGcm9tRGF0ZU5hbm9zKHJwY0hlYWRlci50aW1lKSxcbiAgICBsYXN0QmxvY2tJZDoge1xuICAgICAgaGFzaDogcnBjSGVhZGVyLmxhc3RCbG9ja0lkPy5oYXNoLFxuICAgICAgcGFydFNldEhlYWRlcjogcnBjSGVhZGVyLmxhc3RCbG9ja0lkPy5wYXJ0cyxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBzaWduYXR1cmVzID0gcnBjQ29tbWl0LnNpZ25hdHVyZXMubWFwKChzaWcpID0+ICh7XG4gICAgLi4uc2lnLFxuICAgIHRpbWVzdGFtcDogc2lnLnRpbWVzdGFtcCAmJiB0aW1lc3RhbXBGcm9tRGF0ZU5hbm9zKHNpZy50aW1lc3RhbXApLFxuICAgIGJsb2NrSWRGbGFnOiBibG9ja0lERmxhZ0Zyb21KU09OKHNpZy5ibG9ja0lkRmxhZyksXG4gIH0pKTtcbiAgY29uc3QgY29tbWl0ID0gQ29tbWl0LmZyb21QYXJ0aWFsKHtcbiAgICBoZWlnaHQ6IEJpZ0ludChycGNDb21taXQuaGVpZ2h0KSxcbiAgICByb3VuZDogcnBjQ29tbWl0LnJvdW5kLFxuICAgIGJsb2NrSWQ6IHtcbiAgICAgIGhhc2g6IHJwY0NvbW1pdC5ibG9ja0lkLmhhc2gsXG4gICAgICBwYXJ0U2V0SGVhZGVyOiBycGNDb21taXQuYmxvY2tJZC5wYXJ0cyxcbiAgICB9LFxuICAgIHNpZ25hdHVyZXMsXG4gIH0pO1xuICAvLyBGb3IgdGhlIHZvdGUgc2lnbiBieXRlcywgaXQgY2hlY2tzIChmcm9tIHRoZSBjb21taXQpOlxuICAvLyAgIEhlaWdodCwgUm91bmQsIEJsb2NrSWQsIFRpbWVTdGFtcCwgQ2hhaW5JRFxuXG4gIHJldHVybiB7IGhlYWRlciwgY29tbWl0IH07XG59O1xuXG5jb25zdCBnZXRWYWxpZGF0b3JTZXQgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIGhlaWdodDogbnVtYmVyXG4pOiBQcm9taXNlPFZhbGlkYXRvclNldD4gPT4ge1xuICAvLyB3ZSBuZWVkIHRvIHF1ZXJ5IHRoZSBoZWFkZXIgdG8gZmluZCBvdXQgd2hvIHRoZSBwcm9wb3NlciB3YXMsIGFuZCBwdWxsIHRoZW0gb3V0XG4gIGNvbnN0IHsgcHJvcG9zZXJBZGRyZXNzIH0gPSBhd2FpdCBoZWFkZXIodG0sIGhlaWdodCk7XG4gIGNvbnN0IHZhbGlkYXRvcnMgPSBhd2FpdCB0bS52YWxpZGF0b3JzQWxsKGhlaWdodCk7XG4gIGNvbnN0IG1hcHBlZFZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzLnZhbGlkYXRvcnMubWFwKCh2YWwpID0+ICh7XG4gICAgYWRkcmVzczogdmFsLmFkZHJlc3MsXG4gICAgcHViS2V5OiBtYXBScGNQdWJLZXlUb1Byb3RvKHZhbC5wdWJrZXkpLFxuICAgIHZvdGluZ1Bvd2VyOiB2YWwudm90aW5nUG93ZXIsXG4gICAgcHJvcG9zZXJQcmlvcml0eTogdmFsLnByb3Bvc2VyUHJpb3JpdHlcbiAgICAgID8gQmlnSW50KHZhbC5wcm9wb3NlclByaW9yaXR5KVxuICAgICAgOiB1bmRlZmluZWQsXG4gIH0pKTtcbiAgY29uc3QgdG90YWxQb3dlciA9IHZhbGlkYXRvcnMudmFsaWRhdG9ycy5yZWR1Y2UoXG4gICAgKGFjY3VtdWxhdG9yLCB2KSA9PiBhY2N1bXVsYXRvciArIHYudm90aW5nUG93ZXIsXG4gICAgQmlnSW50KDApXG4gICk7XG4gIGNvbnN0IHByb3Bvc2VyID0gbWFwcGVkVmFsaWRhdG9ycy5maW5kKCh2YWwpID0+XG4gICAgYXJyYXlDb250ZW50RXF1YWxzKHZhbC5hZGRyZXNzLCBwcm9wb3NlckFkZHJlc3MpXG4gICk7XG4gIHJldHVybiBWYWxpZGF0b3JTZXQuZnJvbVBhcnRpYWwoe1xuICAgIHZhbGlkYXRvcnM6IG1hcHBlZFZhbGlkYXRvcnMsXG4gICAgdG90YWxWb3RpbmdQb3dlcjogdG90YWxQb3dlcixcbiAgICBwcm9wb3NlcixcbiAgfSk7XG59O1xuXG5jb25zdCBoZWFkZXIgPSBhc3luYyAoXG4gIHRtOiBUZW5kZXJtaW50MzdDbGllbnQsXG4gIGhlaWdodDogbnVtYmVyXG4pOiBQcm9taXNlPHRlbmRlcm1pbnQzNy5IZWFkZXI+ID0+IHtcbiAgLy8gVE9ETzogZXhwb3NlIGhlYWRlciBtZXRob2Qgb24gdG1DbGllbnQgYW5kIHVzZSB0aGF0XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB0bS5ibG9ja2NoYWluKGhlaWdodCwgaGVpZ2h0KTtcbiAgcmV0dXJuIHJlc3AuYmxvY2tNZXRhc1swXS5oZWFkZXI7XG59O1xuXG5jb25zdCB0aW1lc3RhbXBGcm9tRGF0ZU5hbm9zID0gKFxuICBkYXRlOiBSZWFkb25seURhdGVXaXRoTmFub3NlY29uZHNcbik6IFRpbWVzdGFtcCA9PiB7XG4gIGNvbnN0IG5hbm9zID0gKGRhdGUuZ2V0VGltZSgpICUgMTAwMCkgKiAxMDAwMDAwICsgKGRhdGUubmFub3NlY29uZHMgPz8gMCk7XG4gIHJldHVybiBUaW1lc3RhbXAuZnJvbVBhcnRpYWwoe1xuICAgIHNlY29uZHM6IEJpZ0ludChNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCkpLFxuICAgIG5hbm9zLFxuICB9KTtcbn07XG5cbmNvbnN0IG1hcFJwY1B1YktleVRvUHJvdG8gPSAoXG4gIHB1YmtleT86IFZhbGlkYXRvclB1YmtleVxuKTogUHVibGljS2V5IHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHB1YmtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAocHVia2V5LmFsZ29yaXRobSA9PSBcImVkMjU1MTlcIikge1xuICAgIHJldHVybiB7XG4gICAgICBlZDI1NTE5OiBwdWJrZXkuZGF0YSxcbiAgICAgIHNlY3AyNTZrMTogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0gZWxzZSBpZiAocHVia2V5LmFsZ29yaXRobSA9PSBcInNlY3AyNTZrMVwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVkMjU1MTk6IHVuZGVmaW5lZCxcbiAgICAgIHNlY3AyNTZrMTogcHVia2V5LmRhdGEsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5rbm93biB2YWxpZGF0b3IgcHVia2V5IHR5cGU6ICR7KHB1YmtleSBhcyBhbnkpLmFsZ29yaXRobX1gXG4gICAgKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJNT0RVTEVTIiwiUVVFUklFUyIsImJ1aWxkSGVhZGVyIiwiZW5jb2RlUGFydCIsImdldFNpZ25lZEhlYWRlciIsIm1zZ1VwZGF0ZVRlbmRlcm1pbnRDbGllbnQiLCJ0b1ZlcmlmeU1lbWJlcnNoaXAiLCJsYWJlbCIsInZhbHVlIiwiYmFuayIsInBhcnRzIiwiQnVmZmVyIiwiZnJvbSIsImVuY29kaW5nIiwic3Rha2luZyIsImRhdGEiLCJ4IiwiZnJvbUJlY2gzMiIsInZhbCIsImJ5dGVzIiwibGVuIiwibGVuZ3RoIiwiY2hhaW5JZCIsImNvbm5lY3Rpb25JZCIsInByZWZpeCIsInByb29mIiwicmV2aXNpb25OdW1iZXIiLCJwYXJzZUludCIsInNwbGl0IiwiYXQiLCJtZXJrbGVQcm9vZiIsIk1lcmtsZVByb29mIiwiZnJvbVBhcnRpYWwiLCJwcm9vZnMiLCJvcHMiLCJtYXAiLCJDb21taXRtZW50UHJvb2YiLCJkZWNvZGUiLCJjb25uZWN0aW9uIiwicmV2aXNpb25fbnVtYmVyIiwicmV2aXNpb25faGVpZ2h0IiwiaGVpZ2h0IiwicGF0aF9wcmVmaXgiLCJwYXRoX2tleSIsImtleSIsInRvU3RyaW5nIiwiZW5jb2RlIiwiZmluaXNoIiwic2lnbmVyIiwiY2xpZW50SWQiLCJoZWFkZXIiLCJtc2ciLCJpYmMiLCJtc2dVcGRhdGVDbGllbnQiLCJjbGllbnRNZXNzYWdlIiwidHlwZVVybCIsIlRlbmRlcm1pbnRIZWFkZXIiLCJ0bSIsInRydXN0ZWRIZWlnaHQiLCJzaWduZWRIZWFkZXIiLCJ2YWxpZGF0b3JIZWlnaHQiLCJOdW1iZXIiLCJyZXZpc2lvbkhlaWdodCIsImN1ckhlaWdodCIsInZhbGlkYXRvclNldCIsImdldFZhbGlkYXRvclNldCIsInRydXN0ZWRWYWxpZGF0b3JzIiwicnBjSGVhZGVyIiwiY29tbWl0IiwicnBjQ29tbWl0IiwiSGVhZGVyIiwidmVyc2lvbiIsImJsb2NrIiwiQmlnSW50IiwiYXBwIiwidGltZSIsInRpbWVzdGFtcEZyb21EYXRlTmFub3MiLCJsYXN0QmxvY2tJZCIsImhhc2giLCJwYXJ0U2V0SGVhZGVyIiwic2lnbmF0dXJlcyIsInNpZyIsInRpbWVzdGFtcCIsImJsb2NrSWRGbGFnIiwiYmxvY2tJREZsYWdGcm9tSlNPTiIsIkNvbW1pdCIsInJvdW5kIiwiYmxvY2tJZCIsInByb3Bvc2VyQWRkcmVzcyIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0b3JzQWxsIiwibWFwcGVkVmFsaWRhdG9ycyIsImFkZHJlc3MiLCJwdWJLZXkiLCJtYXBScGNQdWJLZXlUb1Byb3RvIiwicHVia2V5Iiwidm90aW5nUG93ZXIiLCJwcm9wb3NlclByaW9yaXR5IiwidW5kZWZpbmVkIiwidG90YWxQb3dlciIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwidiIsInByb3Bvc2VyIiwiZmluZCIsImFycmF5Q29udGVudEVxdWFscyIsIlZhbGlkYXRvclNldCIsInRvdGFsVm90aW5nUG93ZXIiLCJyZXNwIiwiYmxvY2tjaGFpbiIsImJsb2NrTWV0YXMiLCJkYXRlIiwibmFub3MiLCJnZXRUaW1lIiwibmFub3NlY29uZHMiLCJUaW1lc3RhbXAiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiYWxnb3JpdGhtIiwiZWQyNTUxOSIsInNlY3AyNTZrMSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQTRCYUEsT0FBTztlQUFQQTs7SUFrQkFDLE9BQU87ZUFBUEE7O0lBNkhB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
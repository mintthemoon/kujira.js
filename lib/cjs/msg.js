"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "msg", {
    enumerable: true,
    get: function() {
        return msg;
    }
});
const _tx = require("cosmjs-types/cosmos/authz/v1beta1/tx");
const _tx1 = /*#__PURE__*/ _interop_require_wildcard(require("cosmjs-types/cosmos/bank/v1beta1/tx"));
const _tx2 = /*#__PURE__*/ _interop_require_wildcard(require("cosmjs-types/cosmos/distribution/v1beta1/tx"));
const _tx3 = require("cosmjs-types/cosmos/feegrant/v1beta1/tx");
const _tx4 = /*#__PURE__*/ _interop_require_wildcard(require("cosmjs-types/cosmos/gov/v1/tx"));
const _tx5 = /*#__PURE__*/ _interop_require_wildcard(require("cosmjs-types/cosmos/gov/v1beta1/tx"));
const _tx6 = /*#__PURE__*/ _interop_require_wildcard(require("cosmjs-types/cosmos/staking/v1beta1/tx"));
const _tx7 = require("cosmjs-types/cosmos/vesting/v1beta1/tx");
const _tx8 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const _tx9 = require("cosmjs-types/ibc/applications/transfer/v1/tx");
const _tx10 = require("cosmjs-types/ibc/core/client/v1/tx");
const _batch = /*#__PURE__*/ _interop_require_wildcard(require("./batch"));
const _v1 = /*#__PURE__*/ _interop_require_wildcard(require("./gravity/v1"));
const _denom = /*#__PURE__*/ _interop_require_wildcard(require("./kujira/denom"));
const _oracle = /*#__PURE__*/ _interop_require_wildcard(require("./kujira/oracle"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const msg = {
    authz: {
        msgExec: (i)=>({
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: _tx.MsgExec.fromPartial(i)
            }),
        msgGrant: (i)=>({
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: _tx.MsgGrant.fromPartial(i)
            }),
        msgRevoke: (i)=>({
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: _tx.MsgRevoke.fromPartial(i)
            })
    },
    bank: {
        msgSend: (i)=>({
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: _tx1.MsgSend.fromPartial(i)
            }),
        msgMultiSend: (i)=>({
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: _tx1.MsgMultiSend.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
                value: _tx1.MsgUpdateParams.fromPartial(i)
            })
    },
    distribution: {
        msgFundCommunityPool: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: _tx2.MsgFundCommunityPool.fromPartial(i)
            }),
        msgSetWithdrawAddress: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: _tx2.MsgSetWithdrawAddress.fromPartial(i)
            }),
        msgWithdrawDelegatorReward: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: _tx2.MsgWithdrawDelegatorReward.fromPartial(i)
            }),
        msgWithdrawValidatorCommission: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: _tx2.MsgWithdrawValidatorCommission.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: _tx2.MsgUpdateParams.fromPartial(i)
            })
    },
    denom: _denom.msg,
    feegrant: {
        msgGrantAllowance: (i)=>({
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: _tx3.MsgGrantAllowance.fromPartial(i)
            }),
        msgRevokeAllowance: (i)=>({
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: _tx3.MsgRevokeAllowance.fromPartial(i)
            })
    },
    gov: {
        msgDeposit: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: _tx4.MsgDeposit.fromPartial(i)
            }),
        msgDepositBeta: (i)=>({
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: _tx5.MsgDeposit.fromPartial(i)
            }),
        msgSubmitProposal: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: _tx4.MsgSubmitProposal.fromPartial(i)
            }),
        msgVote: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: _tx4.MsgVote.fromPartial(i)
            }),
        msgVoteBeta: (i)=>({
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: _tx5.MsgVote.fromPartial(i)
            }),
        msgVoteWeighted: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: _tx4.MsgVoteWeighted.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: _tx4.MsgUpdateParams.fromPartial(i)
            })
    },
    oracle: _oracle.msg,
    staking: {
        msgBeginRedelegate: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: _tx6.MsgBeginRedelegate.fromPartial(i)
            }),
        msgCreateValidator: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: _tx6.MsgCreateValidator.fromPartial(i)
            }),
        msgDelegate: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: _tx6.MsgDelegate.fromPartial(i)
            }),
        msgEditValidator: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: _tx6.MsgEditValidator.fromPartial(i)
            }),
        msgUndelegate: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: _tx6.MsgUndelegate.fromPartial(i)
            }),
        msgCancelUnbondingDelegation: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
                value: _tx6.MsgCancelUnbondingDelegation.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
                value: _tx6.MsgUpdateParams.fromPartial(i)
            })
    },
    vesting: {
        msgCreateVestingAccount: (i)=>({
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: _tx7.MsgCreateVestingAccount.fromPartial(i)
            })
    },
    wasm: {
        msgClearAdmin: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: _tx8.MsgClearAdmin.fromPartial(i)
            }),
        msgExecuteContract: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: _tx8.MsgExecuteContract.fromPartial(i)
            }),
        msgMigrateContract: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: _tx8.MsgMigrateContract.fromPartial(i)
            }),
        msgStoreCode: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: _tx8.MsgStoreCode.fromPartial(i)
            }),
        msgInstantiateContract: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: _tx8.MsgInstantiateContract.fromPartial(i)
            }),
        msgUpdateAdmin: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: _tx8.MsgUpdateAdmin.fromPartial(i)
            }),
        msgInstantiateContract2: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: _tx8.MsgInstantiateContract2.fromPartial(i)
            }),
        msgUpdateInstantiateConfig: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
                value: _tx8.MsgUpdateInstantiateConfig.fromPartial(i)
            })
    },
    ibc: {
        msgTransfer: (i)=>({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: _tx9.MsgTransfer.fromPartial(i)
            }),
        msgUpdateClient: (i)=>({
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: _tx10.MsgUpdateClient.fromPartial(i)
            })
    },
    gravity: _v1.msg,
    batch: _batch.msg
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tc2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTXNnRXhlYyxcbiAgTXNnR3JhbnQsXG4gIE1zZ1Jldm9rZSxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYXV0aHovdjFiZXRhMS90eFwiO1xuaW1wb3J0ICogYXMgYmFuayBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYW5rL3YxYmV0YTEvdHhcIjtcbmltcG9ydCAqIGFzIGRpc3RyaWJ1dGlvbiBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS90eFwiO1xuaW1wb3J0IHtcbiAgTXNnR3JhbnRBbGxvd2FuY2UsXG4gIE1zZ1Jldm9rZUFsbG93YW5jZSxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZmVlZ3JhbnQvdjFiZXRhMS90eFwiO1xuaW1wb3J0ICogYXMgZ292IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MS90eFwiO1xuaW1wb3J0ICogYXMgZ292VjFCZXRhMSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9nb3YvdjFiZXRhMS90eFwiO1xuaW1wb3J0ICogYXMgc3Rha2luZyBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9zdGFraW5nL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IE1zZ0NyZWF0ZVZlc3RpbmdBY2NvdW50IH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvdmVzdGluZy92MWJldGExL3R4XCI7XG5pbXBvcnQge1xuICBNc2dDbGVhckFkbWluLFxuICBNc2dFeGVjdXRlQ29udHJhY3QsXG4gIE1zZ0luc3RhbnRpYXRlQ29udHJhY3QsXG4gIE1zZ0luc3RhbnRpYXRlQ29udHJhY3QyLFxuICBNc2dNaWdyYXRlQ29udHJhY3QsXG4gIE1zZ1N0b3JlQ29kZSxcbiAgTXNnVXBkYXRlQWRtaW4sXG4gIE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc213YXNtL3dhc20vdjEvdHhcIjtcbmltcG9ydCB7IE1zZ1RyYW5zZmVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvYXBwbGljYXRpb25zL3RyYW5zZmVyL3YxL3R4XCI7XG5pbXBvcnQgeyBNc2dVcGRhdGVDbGllbnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9jb3JlL2NsaWVudC92MS90eFwiO1xuaW1wb3J0ICogYXMgYmF0Y2ggZnJvbSBcIi4vYmF0Y2hcIjtcbmltcG9ydCAqIGFzIGdyYXZpdHkgZnJvbSBcIi4vZ3Jhdml0eS92MVwiO1xuaW1wb3J0ICogYXMgZGVub20gZnJvbSBcIi4va3VqaXJhL2Rlbm9tXCI7XG5pbXBvcnQgKiBhcyBvcmFjbGUgZnJvbSBcIi4va3VqaXJhL29yYWNsZVwiO1xuXG5leHBvcnQgY29uc3QgbXNnID0ge1xuICBhdXRoejoge1xuICAgIG1zZ0V4ZWM6IChpOiBNc2dFeGVjKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnRXhlY1wiLFxuICAgICAgdmFsdWU6IE1zZ0V4ZWMuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnR3JhbnQ6IChpOiBNc2dHcmFudCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5hdXRoei52MWJldGExLk1zZ0dyYW50XCIsXG4gICAgICB2YWx1ZTogTXNnR3JhbnQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnUmV2b2tlOiAoaTogTXNnUmV2b2tlKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlXCIsXG4gICAgICB2YWx1ZTogTXNnUmV2b2tlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBiYW5rOiB7XG4gICAgbXNnU2VuZDogKGk6IGJhbmsuTXNnU2VuZCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZFwiLFxuICAgICAgdmFsdWU6IGJhbmsuTXNnU2VuZC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dNdWx0aVNlbmQ6IChpOiBiYW5rLk1zZ011bHRpU2VuZCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnTXVsdGlTZW5kXCIsXG4gICAgICB2YWx1ZTogYmFuay5Nc2dNdWx0aVNlbmQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnVXBkYXRlUGFyYW1zOiAoaTogYmFuay5Nc2dVcGRhdGVQYXJhbXMpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1VwZGF0ZVBhcmFtc1wiLFxuICAgICAgdmFsdWU6IGJhbmsuTXNnVXBkYXRlUGFyYW1zLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBkaXN0cmlidXRpb246IHtcbiAgICBtc2dGdW5kQ29tbXVuaXR5UG9vbDogKGk6IGRpc3RyaWJ1dGlvbi5Nc2dGdW5kQ29tbXVuaXR5UG9vbCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Nc2dGdW5kQ29tbXVuaXR5UG9vbFwiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dGdW5kQ29tbXVuaXR5UG9vbC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dTZXRXaXRoZHJhd0FkZHJlc3M6IChpOiBkaXN0cmlidXRpb24uTXNnU2V0V2l0aGRyYXdBZGRyZXNzKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ1NldFdpdGhkcmF3QWRkcmVzc1wiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dTZXRXaXRoZHJhd0FkZHJlc3MuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnV2l0aGRyYXdEZWxlZ2F0b3JSZXdhcmQ6IChcbiAgICAgIGk6IGRpc3RyaWJ1dGlvbi5Nc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZFxuICAgICkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Nc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZFwiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dXaXRoZHJhd1ZhbGlkYXRvckNvbW1pc3Npb246IChcbiAgICAgIGk6IGRpc3RyaWJ1dGlvbi5Nc2dXaXRoZHJhd1ZhbGlkYXRvckNvbW1pc3Npb25cbiAgICApID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZGlzdHJpYnV0aW9uLnYxYmV0YTEuTXNnV2l0aGRyYXdWYWxpZGF0b3JDb21taXNzaW9uXCIsXG4gICAgICB2YWx1ZTogZGlzdHJpYnV0aW9uLk1zZ1dpdGhkcmF3VmFsaWRhdG9yQ29tbWlzc2lvbi5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dVcGRhdGVQYXJhbXM6IChpOiBkaXN0cmlidXRpb24uTXNnVXBkYXRlUGFyYW1zKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ1VwZGF0ZVBhcmFtc1wiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dVcGRhdGVQYXJhbXMuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gIH0sXG4gIGRlbm9tOiBkZW5vbS5tc2csXG4gIGZlZWdyYW50OiB7XG4gICAgbXNnR3JhbnRBbGxvd2FuY2U6IChpOiBNc2dHcmFudEFsbG93YW5jZSkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5mZWVncmFudC52MWJldGExLk1zZ0dyYW50QWxsb3dhbmNlXCIsXG4gICAgICB2YWx1ZTogTXNnR3JhbnRBbGxvd2FuY2UuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnUmV2b2tlQWxsb3dhbmNlOiAoaTogTXNnUmV2b2tlQWxsb3dhbmNlKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmZlZWdyYW50LnYxYmV0YTEuTXNnUmV2b2tlQWxsb3dhbmNlXCIsXG4gICAgICB2YWx1ZTogTXNnUmV2b2tlQWxsb3dhbmNlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBnb3Y6IHtcbiAgICBtc2dEZXBvc2l0OiAoaTogZ292Lk1zZ0RlcG9zaXQpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZ292LnYxLk1zZ0RlcG9zaXRcIixcbiAgICAgIHZhbHVlOiBnb3YuTXNnRGVwb3NpdC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dEZXBvc2l0QmV0YTogKGk6IGdvdlYxQmV0YTEuTXNnRGVwb3NpdCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5nb3YudjFiZXRhMS5Nc2dEZXBvc2l0XCIsXG4gICAgICB2YWx1ZTogZ292VjFCZXRhMS5Nc2dEZXBvc2l0LmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1N1Ym1pdFByb3Bvc2FsOiAoaTogZ292Lk1zZ1N1Ym1pdFByb3Bvc2FsKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmdvdi52MS5Nc2dTdWJtaXRQcm9wb3NhbFwiLFxuICAgICAgdmFsdWU6IGdvdi5Nc2dTdWJtaXRQcm9wb3NhbC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dWb3RlOiAoaTogZ292Lk1zZ1ZvdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZ292LnYxLk1zZ1ZvdGVcIixcbiAgICAgIHZhbHVlOiBnb3YuTXNnVm90ZS5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dWb3RlQmV0YTogKGk6IGdvdlYxQmV0YTEuTXNnVm90ZSkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5nb3YudjFiZXRhMS5Nc2dWb3RlXCIsXG4gICAgICB2YWx1ZTogZ292VjFCZXRhMS5Nc2dWb3RlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1ZvdGVXZWlnaHRlZDogKGk6IGdvdi5Nc2dWb3RlV2VpZ2h0ZWQpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZ292LnYxLk1zZ1ZvdGVXZWlnaHRlZFwiLFxuICAgICAgdmFsdWU6IGdvdi5Nc2dWb3RlV2VpZ2h0ZWQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnVXBkYXRlUGFyYW1zOiAoaTogZ292Lk1zZ1VwZGF0ZVBhcmFtcykgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5nb3YudjEuTXNnVXBkYXRlUGFyYW1zXCIsXG4gICAgICB2YWx1ZTogZ292Lk1zZ1VwZGF0ZVBhcmFtcy5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgfSxcbiAgb3JhY2xlOiBvcmFjbGUubXNnLFxuICBzdGFraW5nOiB7XG4gICAgbXNnQmVnaW5SZWRlbGVnYXRlOiAoaTogc3Rha2luZy5Nc2dCZWdpblJlZGVsZWdhdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0JlZ2luUmVkZWxlZ2F0ZVwiLFxuICAgICAgdmFsdWU6IHN0YWtpbmcuTXNnQmVnaW5SZWRlbGVnYXRlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ0NyZWF0ZVZhbGlkYXRvcjogKGk6IHN0YWtpbmcuTXNnQ3JlYXRlVmFsaWRhdG9yKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dDcmVhdGVWYWxpZGF0b3JcIixcbiAgICAgIHZhbHVlOiBzdGFraW5nLk1zZ0NyZWF0ZVZhbGlkYXRvci5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dEZWxlZ2F0ZTogKGk6IHN0YWtpbmcuTXNnRGVsZWdhdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0RlbGVnYXRlXCIsXG4gICAgICB2YWx1ZTogc3Rha2luZy5Nc2dEZWxlZ2F0ZS5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dFZGl0VmFsaWRhdG9yOiAoaTogc3Rha2luZy5Nc2dFZGl0VmFsaWRhdG9yKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dFZGl0VmFsaWRhdG9yXCIsXG4gICAgICB2YWx1ZTogc3Rha2luZy5Nc2dFZGl0VmFsaWRhdG9yLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VuZGVsZWdhdGU6IChpOiBzdGFraW5nLk1zZ1VuZGVsZWdhdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ1VuZGVsZWdhdGVcIixcbiAgICAgIHZhbHVlOiBzdGFraW5nLk1zZ1VuZGVsZWdhdGUuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbjogKFxuICAgICAgaTogc3Rha2luZy5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXG4gICAgKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXCIsXG4gICAgICB2YWx1ZTogc3Rha2luZy5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VwZGF0ZVBhcmFtczogKGk6IHN0YWtpbmcuTXNnVXBkYXRlUGFyYW1zKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dVcGRhdGVQYXJhbXNcIixcbiAgICAgIHZhbHVlOiBzdGFraW5nLk1zZ1VwZGF0ZVBhcmFtcy5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgfSxcbiAgdmVzdGluZzoge1xuICAgIG1zZ0NyZWF0ZVZlc3RpbmdBY2NvdW50OiAoaTogTXNnQ3JlYXRlVmVzdGluZ0FjY291bnQpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MudmVzdGluZy52MWJldGExLk1zZ0NyZWF0ZVZlc3RpbmdBY2NvdW50XCIsXG4gICAgICB2YWx1ZTogTXNnQ3JlYXRlVmVzdGluZ0FjY291bnQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gIH0sXG4gIHdhc206IHtcbiAgICBtc2dDbGVhckFkbWluOiAoaTogTXNnQ2xlYXJBZG1pbikgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc213YXNtLndhc20udjEuTXNnQ2xlYXJBZG1pblwiLFxuICAgICAgdmFsdWU6IE1zZ0NsZWFyQWRtaW4uZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnRXhlY3V0ZUNvbnRyYWN0OiAoaTogTXNnRXhlY3V0ZUNvbnRyYWN0KSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dFeGVjdXRlQ29udHJhY3RcIixcbiAgICAgIHZhbHVlOiBNc2dFeGVjdXRlQ29udHJhY3QuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnTWlncmF0ZUNvbnRyYWN0OiAoaTogTXNnTWlncmF0ZUNvbnRyYWN0KSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dNaWdyYXRlQ29udHJhY3RcIixcbiAgICAgIHZhbHVlOiBNc2dNaWdyYXRlQ29udHJhY3QuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnU3RvcmVDb2RlOiAoaTogTXNnU3RvcmVDb2RlKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dTdG9yZUNvZGVcIixcbiAgICAgIHZhbHVlOiBNc2dTdG9yZUNvZGUuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnSW5zdGFudGlhdGVDb250cmFjdDogKGk6IE1zZ0luc3RhbnRpYXRlQ29udHJhY3QpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0luc3RhbnRpYXRlQ29udHJhY3RcIixcbiAgICAgIHZhbHVlOiBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0LmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VwZGF0ZUFkbWluOiAoaTogTXNnVXBkYXRlQWRtaW4pID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VwZGF0ZUFkbWluXCIsXG4gICAgICB2YWx1ZTogTXNnVXBkYXRlQWRtaW4uZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnSW5zdGFudGlhdGVDb250cmFjdDI6IChpOiBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0MikgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc213YXNtLndhc20udjEuTXNnSW5zdGFudGlhdGVDb250cmFjdDJcIixcbiAgICAgIHZhbHVlOiBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0Mi5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZzogKGk6IE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1wiLFxuICAgICAgdmFsdWU6IE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBpYmM6IHtcbiAgICBtc2dUcmFuc2ZlcjogKGk6IE1zZ1RyYW5zZmVyKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvaWJjLmFwcGxpY2F0aW9ucy50cmFuc2Zlci52MS5Nc2dUcmFuc2ZlclwiLFxuICAgICAgdmFsdWU6IE1zZ1RyYW5zZmVyLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VwZGF0ZUNsaWVudDogKGk6IE1zZ1VwZGF0ZUNsaWVudCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2liYy5jb3JlLmNsaWVudC52MS5Nc2dVcGRhdGVDbGllbnRcIixcbiAgICAgIHZhbHVlOiBNc2dVcGRhdGVDbGllbnQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gIH0sXG4gIGdyYXZpdHk6IGdyYXZpdHkubXNnLFxuICBiYXRjaDogYmF0Y2gubXNnLFxufTtcbiJdLCJuYW1lcyI6WyJtc2ciLCJhdXRoeiIsIm1zZ0V4ZWMiLCJpIiwidHlwZVVybCIsInZhbHVlIiwiTXNnRXhlYyIsImZyb21QYXJ0aWFsIiwibXNnR3JhbnQiLCJNc2dHcmFudCIsIm1zZ1Jldm9rZSIsIk1zZ1Jldm9rZSIsImJhbmsiLCJtc2dTZW5kIiwiTXNnU2VuZCIsIm1zZ011bHRpU2VuZCIsIk1zZ011bHRpU2VuZCIsIm1zZ1VwZGF0ZVBhcmFtcyIsIk1zZ1VwZGF0ZVBhcmFtcyIsImRpc3RyaWJ1dGlvbiIsIm1zZ0Z1bmRDb21tdW5pdHlQb29sIiwiTXNnRnVuZENvbW11bml0eVBvb2wiLCJtc2dTZXRXaXRoZHJhd0FkZHJlc3MiLCJNc2dTZXRXaXRoZHJhd0FkZHJlc3MiLCJtc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZCIsIk1zZ1dpdGhkcmF3RGVsZWdhdG9yUmV3YXJkIiwibXNnV2l0aGRyYXdWYWxpZGF0b3JDb21taXNzaW9uIiwiTXNnV2l0aGRyYXdWYWxpZGF0b3JDb21taXNzaW9uIiwiZGVub20iLCJmZWVncmFudCIsIm1zZ0dyYW50QWxsb3dhbmNlIiwiTXNnR3JhbnRBbGxvd2FuY2UiLCJtc2dSZXZva2VBbGxvd2FuY2UiLCJNc2dSZXZva2VBbGxvd2FuY2UiLCJnb3YiLCJtc2dEZXBvc2l0IiwiTXNnRGVwb3NpdCIsIm1zZ0RlcG9zaXRCZXRhIiwiZ292VjFCZXRhMSIsIm1zZ1N1Ym1pdFByb3Bvc2FsIiwiTXNnU3VibWl0UHJvcG9zYWwiLCJtc2dWb3RlIiwiTXNnVm90ZSIsIm1zZ1ZvdGVCZXRhIiwibXNnVm90ZVdlaWdodGVkIiwiTXNnVm90ZVdlaWdodGVkIiwib3JhY2xlIiwic3Rha2luZyIsIm1zZ0JlZ2luUmVkZWxlZ2F0ZSIsIk1zZ0JlZ2luUmVkZWxlZ2F0ZSIsIm1zZ0NyZWF0ZVZhbGlkYXRvciIsIk1zZ0NyZWF0ZVZhbGlkYXRvciIsIm1zZ0RlbGVnYXRlIiwiTXNnRGVsZWdhdGUiLCJtc2dFZGl0VmFsaWRhdG9yIiwiTXNnRWRpdFZhbGlkYXRvciIsIm1zZ1VuZGVsZWdhdGUiLCJNc2dVbmRlbGVnYXRlIiwibXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiIsIk1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24iLCJ2ZXN0aW5nIiwibXNnQ3JlYXRlVmVzdGluZ0FjY291bnQiLCJNc2dDcmVhdGVWZXN0aW5nQWNjb3VudCIsIndhc20iLCJtc2dDbGVhckFkbWluIiwiTXNnQ2xlYXJBZG1pbiIsIm1zZ0V4ZWN1dGVDb250cmFjdCIsIk1zZ0V4ZWN1dGVDb250cmFjdCIsIm1zZ01pZ3JhdGVDb250cmFjdCIsIk1zZ01pZ3JhdGVDb250cmFjdCIsIm1zZ1N0b3JlQ29kZSIsIk1zZ1N0b3JlQ29kZSIsIm1zZ0luc3RhbnRpYXRlQ29udHJhY3QiLCJNc2dJbnN0YW50aWF0ZUNvbnRyYWN0IiwibXNnVXBkYXRlQWRtaW4iLCJNc2dVcGRhdGVBZG1pbiIsIm1zZ0luc3RhbnRpYXRlQ29udHJhY3QyIiwiTXNnSW5zdGFudGlhdGVDb250cmFjdDIiLCJtc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyIsIk1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnIiwiaWJjIiwibXNnVHJhbnNmZXIiLCJNc2dUcmFuc2ZlciIsIm1zZ1VwZGF0ZUNsaWVudCIsIk1zZ1VwZGF0ZUNsaWVudCIsImdyYXZpdHkiLCJiYXRjaCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQ2FBOzs7ZUFBQUE7OztvQkE1Qk47NkRBQ2U7NkRBQ1E7cUJBSXZCOzZEQUNjOzZEQUNPOzZEQUNIO3FCQUNlO3FCQVVqQztxQkFDcUI7c0JBQ0k7K0RBQ1Q7NERBQ0U7K0RBQ0Y7Z0VBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
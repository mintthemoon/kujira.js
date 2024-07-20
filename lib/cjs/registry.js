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
    accountParser: function() {
        return accountParser;
    },
    registry: function() {
        return registry;
    }
});
const _modules = require("@cosmjs/cosmwasm-stargate/build/modules");
const _protosigning = require("@cosmjs/proto-signing");
const _stargate = /*#__PURE__*/ _interop_require_wildcard(require("@cosmjs/stargate"));
const _modules1 = require("@cosmjs/stargate/build/modules");
const _utils = require("@cosmjs/utils");
const _buffer = require("buffer");
const _auth = require("cosmjs-types/cosmos/auth/v1beta1/auth");
const _tx = require("cosmjs-types/cosmos/bank/v1beta1/tx");
const _distribution = require("cosmjs-types/cosmos/distribution/v1beta1/distribution");
const _tx1 = require("cosmjs-types/cosmos/distribution/v1beta1/tx");
const _tx2 = require("cosmjs-types/cosmos/gov/v1/tx");
const _gov = require("cosmjs-types/cosmos/gov/v1beta1/gov");
const _params = require("cosmjs-types/cosmos/params/v1beta1/params");
const _tx3 = require("cosmjs-types/cosmos/staking/v1beta1/tx");
const _tx4 = require("cosmjs-types/cosmos/upgrade/v1beta1/tx");
const _upgrade = require("cosmjs-types/cosmos/upgrade/v1beta1/upgrade");
const _proposal = require("cosmjs-types/cosmwasm/wasm/v1/proposal");
const _tx5 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const _tx6 = require("cosmjs-types/ibc/applications/interchain_accounts/controller/v1/tx");
const _client = require("cosmjs-types/ibc/core/client/v1/client");
const _tendermint = require("cosmjs-types/ibc/lightclients/tendermint/v1/tendermint");
const _batch = /*#__PURE__*/ _interop_require_wildcard(require("./batch"));
const _types = /*#__PURE__*/ _interop_require_wildcard(require("./ethermint/types"));
const _v1 = /*#__PURE__*/ _interop_require_wildcard(require("./gravity/v1"));
const _types1 = /*#__PURE__*/ _interop_require_wildcard(require("./injective/types"));
const _denom = /*#__PURE__*/ _interop_require_wildcard(require("./kujira/denom"));
const _oracle = /*#__PURE__*/ _interop_require_wildcard(require("./kujira/oracle"));
const _proposal1 = require("./kujira/scheduler/types/proposal");
const _vesting = require("./stride/vesting");
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
const proposalTypes = [
    [
        "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        _distribution.CommunityPoolSpendProposal
    ],
    [
        "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        _tx1.MsgCommunityPoolSpend
    ],
    [
        "/cosmos.params.v1beta1.ParameterChangeProposal",
        _params.ParameterChangeProposal
    ],
    [
        "/cosmos.params.v1beta1.MsgUpdateParams",
        _tx.MsgUpdateParams
    ],
    [
        "/cosmwasm.wasm.v1.StoreCodeProposal",
        _proposal.StoreCodeProposal
    ],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        _proposal.InstantiateContractProposal
    ],
    [
        "/cosmwasm.wasm.v1.MigrateContractProposal",
        _proposal.MigrateContractProposal
    ],
    [
        "/cosmwasm.wasm.v1.UpdateAdminProposal",
        _proposal.UpdateAdminProposal
    ],
    [
        "/cosmwasm.wasm.v1.ClearAdminProposal",
        _proposal.ClearAdminProposal
    ],
    [
        "/cosmwasm.wasm.v1.PinCodesProposal",
        _proposal.PinCodesProposal
    ],
    [
        "/cosmwasm.wasm.v1.UnpinCodesProposal",
        _proposal.UnpinCodesProposal
    ],
    [
        "/cosmwasm.wasm.v1.ExecuteContractProposal",
        _proposal.ExecuteContractProposal
    ],
    [
        "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        _proposal.UpdateInstantiateConfigProposal
    ],
    [
        "/cosmwasm.wasm.v1.MsgStoreCode",
        _tx5.MsgStoreCode
    ],
    [
        "/cosmwasm.wasm.v1.MsgInstantiateContract",
        _tx5.MsgInstantiateContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgMigrateContract",
        _tx5.MsgMigrateContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        _tx5.MsgUpdateAdmin
    ],
    [
        "/cosmwasm.wasm.v1.MsgClearAdmin",
        _tx5.MsgClearAdmin
    ],
    // ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
    // ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
    [
        "/cosmwasm.wasm.v1.MsgExecuteContract",
        _tx5.MsgExecuteContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        _tx5.MsgUpdateInstantiateConfig
    ],
    [
        "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        _upgrade.SoftwareUpgradeProposal
    ],
    [
        "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        _tx4.MsgSoftwareUpgrade
    ],
    [
        "/kujira.scheduler.CreateHookProposal",
        _proposal1.CreateHookProposal
    ],
    [
        "/kujira.scheduler.UpdateHookProposal",
        _proposal1.UpdateHookProposal
    ],
    [
        "/kujira.scheduler.DeleteHookProposal",
        _proposal1.DeleteHookProposal
    ],
    [
        "/cosmos.gov.v1beta1.TextProposal",
        _gov.TextProposal
    ],
    [
        "/cosmos.gov.v1.MsgExecLegacyContent",
        _tx2.MsgExecLegacyContent
    ],
    [
        "/ibc.core.client.v1.ClientUpdateProposal",
        _client.ClientUpdateProposal
    ]
];
const extraIbc = [
    [
        "/ibc.lightclients.tendermint.v1.Header",
        _tendermint.Header
    ],
    [
        "/ibc.lightclients.tendermint.v1.ClientState",
        _tendermint.ClientState
    ],
    [
        "/ibc.lightclients.tendermint.v1.ConsensusState",
        _tendermint.ConsensusState
    ],
    [
        "/ibc.lightclients.tendermint.v1.Misbehaviour",
        _tendermint.Misbehaviour
    ],
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        _tx6.MsgRegisterInterchainAccount
    ],
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        _tx6.MsgSendTx
    ]
];
const types = [
    ..._stargate.defaultRegistryTypes,
    [
        "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        _tx3.MsgCancelUnbondingDelegation
    ],
    ..._denom.types,
    // ...ethermintEvm.types,
    // ...ethermintFeemarket.types,
    ..._oracle.types,
    ..._modules.wasmTypes,
    ..._modules1.ibcTypes,
    ...proposalTypes,
    ...extraIbc,
    ..._v1.types,
    ..._batch.types
];
const registry = new _protosigning.Registry(types);
const accountParser = (acc)=>{
    switch(acc.typeUrl){
        case "/stride.vesting.StridePeriodicVestingAccount":
            var _StridePeriodicVestingAccount_decode_baseVestingAccount;
            const baseAccount = (_StridePeriodicVestingAccount_decode_baseVestingAccount = _vesting.StridePeriodicVestingAccount.decode(acc.value).baseVestingAccount) === null || _StridePeriodicVestingAccount_decode_baseVestingAccount === void 0 ? void 0 : _StridePeriodicVestingAccount_decode_baseVestingAccount.baseAccount;
            (0, _utils.assert)(baseAccount);
            return _stargate.accountFromAny({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: _auth.BaseAccount.encode(baseAccount).finish()
            });
        case "/injective.types.v1beta1.EthAccount":
            const injAccount = _types1.EthAccount.decode(acc.value);
            const baseInjAccount = injAccount.baseAccount;
            const pubKey = baseInjAccount.pubKey;
            return {
                address: baseInjAccount.address,
                pubkey: pubKey ? {
                    type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
                    value: _buffer.Buffer.from(pubKey.value).toString("base64")
                } : null,
                accountNumber: Number(baseInjAccount.accountNumber),
                sequence: Number(baseInjAccount.sequence)
            };
        case "/ethermint.types.v1.EthAccount":
            const account = _types.EthAccount.decode(acc.value);
            const baseEthAccount = account.baseAccount;
            const pubKeyEth = baseEthAccount.pubKey;
            return {
                address: baseEthAccount.address,
                pubkey: pubKeyEth ? {
                    type: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
                    value: _buffer.Buffer.from(pubKeyEth.value).toString("base64")
                } : null,
                accountNumber: Number(baseEthAccount.accountNumber),
                sequence: Number(baseEthAccount.sequence)
            };
        default:
            return _stargate.accountFromAny(acc);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXNtVHlwZXMgfSBmcm9tIFwiQGNvc21qcy9jb3Ntd2FzbS1zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzXCI7XG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCAqIGFzIHMgZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IGliY1R5cGVzIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGUvYnVpbGQvbW9kdWxlc1wiO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcbmltcG9ydCB7IEJhc2VBY2NvdW50IH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYXV0aC92MWJldGExL2F1dGhcIjtcbmltcG9ydCB7IE1zZ1VwZGF0ZVBhcmFtcyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2JhbmsvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS9kaXN0cmlidXRpb25cIjtcbmltcG9ydCB7IE1zZ0NvbW11bml0eVBvb2xTcGVuZCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2Rpc3RyaWJ1dGlvbi92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBNc2dFeGVjTGVnYWN5Q29udGVudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MS90eFwiO1xuaW1wb3J0IHsgVGV4dFByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZ292L3YxYmV0YTEvZ292XCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3BhcmFtcy92MWJldGExL3BhcmFtc1wiO1xuaW1wb3J0IHsgTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3N0YWtpbmcvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgTXNnU29mdHdhcmVVcGdyYWRlIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvdXBncmFkZS92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS91cGdyYWRlXCI7XG5pbXBvcnQge1xuICBDbGVhckFkbWluUHJvcG9zYWwsXG4gIEV4ZWN1dGVDb250cmFjdFByb3Bvc2FsLFxuICBJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwsXG4gIE1pZ3JhdGVDb250cmFjdFByb3Bvc2FsLFxuICBQaW5Db2Rlc1Byb3Bvc2FsLFxuICBTdG9yZUNvZGVQcm9wb3NhbCxcbiAgVW5waW5Db2Rlc1Byb3Bvc2FsLFxuICBVcGRhdGVBZG1pblByb3Bvc2FsLFxuICBVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc213YXNtL3dhc20vdjEvcHJvcG9zYWxcIjtcbmltcG9ydCB7XG4gIE1zZ0NsZWFyQWRtaW4sXG4gIE1zZ0V4ZWN1dGVDb250cmFjdCxcbiAgTXNnSW5zdGFudGlhdGVDb250cmFjdCxcbiAgTXNnTWlncmF0ZUNvbnRyYWN0LFxuICBNc2dTdG9yZUNvZGUsXG4gIE1zZ1VwZGF0ZUFkbWluLFxuICBNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntd2FzbS93YXNtL3YxL3R4XCI7XG5pbXBvcnQge1xuICBNc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50LFxuICBNc2dTZW5kVHgsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaWJjL2FwcGxpY2F0aW9ucy9pbnRlcmNoYWluX2FjY291bnRzL2NvbnRyb2xsZXIvdjEvdHhcIjtcbmltcG9ydCB7IENsaWVudFVwZGF0ZVByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvY29yZS9jbGllbnQvdjEvY2xpZW50XCI7XG5pbXBvcnQge1xuICBDbGllbnRTdGF0ZSxcbiAgQ29uc2Vuc3VzU3RhdGUsXG4gIEhlYWRlcixcbiAgTWlzYmVoYXZpb3VyLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9saWdodGNsaWVudHMvdGVuZGVybWludC92MS90ZW5kZXJtaW50XCI7XG5pbXBvcnQgKiBhcyBiYXRjaCBmcm9tIFwiLi9iYXRjaFwiO1xuaW1wb3J0ICogYXMgZXRoIGZyb20gXCIuL2V0aGVybWludC90eXBlc1wiO1xuaW1wb3J0ICogYXMgZ3Jhdml0eSBmcm9tIFwiLi9ncmF2aXR5L3YxXCI7XG5pbXBvcnQgKiBhcyBpbmogZnJvbSBcIi4vaW5qZWN0aXZlL3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBkZW5vbSBmcm9tIFwiLi9rdWppcmEvZGVub21cIjtcbmltcG9ydCAqIGFzIG9yYWNsZSBmcm9tIFwiLi9rdWppcmEvb3JhY2xlXCI7XG5pbXBvcnQge1xuICBDcmVhdGVIb29rUHJvcG9zYWwsXG4gIERlbGV0ZUhvb2tQcm9wb3NhbCxcbiAgVXBkYXRlSG9va1Byb3Bvc2FsLFxufSBmcm9tIFwiLi9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL3Byb3Bvc2FsXCI7XG5pbXBvcnQgeyBTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IH0gZnJvbSBcIi4vc3RyaWRlL3Zlc3RpbmdcIjtcbmNvbnN0IHByb3Bvc2FsVHlwZXMgPSBbXG4gIFtcbiAgICBcIi9jb3Ntb3MuZGlzdHJpYnV0aW9uLnYxYmV0YTEuQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWxcIixcbiAgICBDb21tdW5pdHlQb29sU3BlbmRQcm9wb3NhbCxcbiAgXSxcbiAgW1wiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Nc2dDb21tdW5pdHlQb29sU3BlbmRcIiwgTXNnQ29tbXVuaXR5UG9vbFNwZW5kXSxcblxuICBbXCIvY29zbW9zLnBhcmFtcy52MWJldGExLlBhcmFtZXRlckNoYW5nZVByb3Bvc2FsXCIsIFBhcmFtZXRlckNoYW5nZVByb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy5wYXJhbXMudjFiZXRhMS5Nc2dVcGRhdGVQYXJhbXNcIiwgTXNnVXBkYXRlUGFyYW1zXSxcblxuICBbXCIvY29zbXdhc20ud2FzbS52MS5TdG9yZUNvZGVQcm9wb3NhbFwiLCBTdG9yZUNvZGVQcm9wb3NhbF0sXG4gIFtcbiAgICBcIi9jb3Ntd2FzbS53YXNtLnYxLkluc3RhbnRpYXRlQ29udHJhY3RQcm9wb3NhbFwiLFxuICAgIEluc3RhbnRpYXRlQ29udHJhY3RQcm9wb3NhbCxcbiAgXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTWlncmF0ZUNvbnRyYWN0UHJvcG9zYWxcIiwgTWlncmF0ZUNvbnRyYWN0UHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5VcGRhdGVBZG1pblByb3Bvc2FsXCIsIFVwZGF0ZUFkbWluUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5DbGVhckFkbWluUHJvcG9zYWxcIiwgQ2xlYXJBZG1pblByb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuUGluQ29kZXNQcm9wb3NhbFwiLCBQaW5Db2Rlc1Byb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuVW5waW5Db2Rlc1Byb3Bvc2FsXCIsIFVucGluQ29kZXNQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLkV4ZWN1dGVDb250cmFjdFByb3Bvc2FsXCIsIEV4ZWN1dGVDb250cmFjdFByb3Bvc2FsXSxcbiAgW1xuICAgIFwiL2Nvc213YXNtLndhc20udjEuVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbFwiLFxuICAgIFVwZGF0ZUluc3RhbnRpYXRlQ29uZmlnUHJvcG9zYWwsXG4gIF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1N0b3JlQ29kZVwiLCBNc2dTdG9yZUNvZGVdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dJbnN0YW50aWF0ZUNvbnRyYWN0XCIsIE1zZ0luc3RhbnRpYXRlQ29udHJhY3RdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dNaWdyYXRlQ29udHJhY3RcIiwgTXNnTWlncmF0ZUNvbnRyYWN0XSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnVXBkYXRlQWRtaW5cIiwgTXNnVXBkYXRlQWRtaW5dLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dDbGVhckFkbWluXCIsIE1zZ0NsZWFyQWRtaW5dLFxuICAvLyBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dQaW5Db2Rlc1wiLCBNc2dQaW5Db2Rlc10sXG4gIC8vIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VucGluQ29kZXNcIiwgTXNnVW5waW5Db2Rlc10sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0V4ZWN1dGVDb250cmFjdFwiLCBNc2dFeGVjdXRlQ29udHJhY3RdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1wiLCBNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ10sXG5cbiAgW1wiL2Nvc21vcy51cGdyYWRlLnYxYmV0YTEuU29mdHdhcmVVcGdyYWRlUHJvcG9zYWxcIiwgU29mdHdhcmVVcGdyYWRlUHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLnVwZ3JhZGUudjFiZXRhMS5Nc2dTb2Z0d2FyZVVwZ3JhZGVcIiwgTXNnU29mdHdhcmVVcGdyYWRlXSxcbiAgW1wiL2t1amlyYS5zY2hlZHVsZXIuQ3JlYXRlSG9va1Byb3Bvc2FsXCIsIENyZWF0ZUhvb2tQcm9wb3NhbF0sXG4gIFtcIi9rdWppcmEuc2NoZWR1bGVyLlVwZGF0ZUhvb2tQcm9wb3NhbFwiLCBVcGRhdGVIb29rUHJvcG9zYWxdLFxuICBbXCIva3VqaXJhLnNjaGVkdWxlci5EZWxldGVIb29rUHJvcG9zYWxcIiwgRGVsZXRlSG9va1Byb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy5nb3YudjFiZXRhMS5UZXh0UHJvcG9zYWxcIiwgVGV4dFByb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy5nb3YudjEuTXNnRXhlY0xlZ2FjeUNvbnRlbnRcIiwgTXNnRXhlY0xlZ2FjeUNvbnRlbnRdLFxuICBbXCIvaWJjLmNvcmUuY2xpZW50LnYxLkNsaWVudFVwZGF0ZVByb3Bvc2FsXCIsIENsaWVudFVwZGF0ZVByb3Bvc2FsXSxcbl07XG5cbmNvbnN0IGV4dHJhSWJjID0gW1xuICBbXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLkhlYWRlclwiLCBIZWFkZXJdLFxuICBbXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLkNsaWVudFN0YXRlXCIsIENsaWVudFN0YXRlXSxcbiAgW1wiL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZVwiLCBDb25zZW5zdXNTdGF0ZV0sXG4gIFtcIi9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuTWlzYmVoYXZpb3VyXCIsIE1pc2JlaGF2aW91cl0sXG4gIFtcbiAgICBcIi9pYmMuYXBwbGljYXRpb25zLmludGVyY2hhaW5fYWNjb3VudHMuY29udHJvbGxlci52MS5Nc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50XCIsXG4gICAgTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCxcbiAgXSxcbiAgW1wiL2liYy5hcHBsaWNhdGlvbnMuaW50ZXJjaGFpbl9hY2NvdW50cy5jb250cm9sbGVyLnYxLk1zZ1NlbmRUeFwiLCBNc2dTZW5kVHhdLFxuXTtcblxuY29uc3QgdHlwZXMgPSBbXG4gIC4uLnMuZGVmYXVsdFJlZ2lzdHJ5VHlwZXMsXG4gIFtcbiAgICBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb25cIixcbiAgICBNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uLFxuICBdLFxuICAuLi5kZW5vbS50eXBlcyxcbiAgLy8gLi4uZXRoZXJtaW50RXZtLnR5cGVzLFxuICAvLyAuLi5ldGhlcm1pbnRGZWVtYXJrZXQudHlwZXMsXG4gIC4uLm9yYWNsZS50eXBlcyxcbiAgLi4ud2FzbVR5cGVzLFxuICAuLi5pYmNUeXBlcyxcbiAgLi4ucHJvcG9zYWxUeXBlcyxcbiAgLi4uZXh0cmFJYmMsXG4gIC4uLmdyYXZpdHkudHlwZXMsXG4gIC4uLmJhdGNoLnR5cGVzLFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdHJ5ID0gbmV3IFJlZ2lzdHJ5KDxhbnk+dHlwZXMpO1xuXG5leHBvcnQgY29uc3QgYWNjb3VudFBhcnNlcjogcy5BY2NvdW50UGFyc2VyID0gKGFjYykgPT4ge1xuICBzd2l0Y2ggKGFjYy50eXBlVXJsKSB7XG4gICAgY2FzZSBcIi9zdHJpZGUudmVzdGluZy5TdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50XCI6XG4gICAgICBjb25zdCBiYXNlQWNjb3VudCA9IFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQuZGVjb2RlKGFjYy52YWx1ZSlcbiAgICAgICAgLmJhc2VWZXN0aW5nQWNjb3VudD8uYmFzZUFjY291bnQ7XG4gICAgICBhc3NlcnQoYmFzZUFjY291bnQpO1xuICAgICAgcmV0dXJuIHMuYWNjb3VudEZyb21Bbnkoe1xuICAgICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuYXV0aC52MWJldGExLkJhc2VBY2NvdW50XCIsXG4gICAgICAgIHZhbHVlOiBCYXNlQWNjb3VudC5lbmNvZGUoYmFzZUFjY291bnQpLmZpbmlzaCgpLFxuICAgICAgfSk7XG4gICAgY2FzZSBcIi9pbmplY3RpdmUudHlwZXMudjFiZXRhMS5FdGhBY2NvdW50XCI6XG4gICAgICBjb25zdCBpbmpBY2NvdW50ID0gaW5qLkV0aEFjY291bnQuZGVjb2RlKGFjYy52YWx1ZSBhcyBVaW50OEFycmF5KTtcbiAgICAgIGNvbnN0IGJhc2VJbmpBY2NvdW50ID0gaW5qQWNjb3VudC5iYXNlQWNjb3VudCE7XG4gICAgICBjb25zdCBwdWJLZXkgPSBiYXNlSW5qQWNjb3VudC5wdWJLZXk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZHJlc3M6IGJhc2VJbmpBY2NvdW50LmFkZHJlc3MsXG4gICAgICAgIHB1YmtleTogcHViS2V5XG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiL2luamVjdGl2ZS5jcnlwdG8udjFiZXRhMS5ldGhzZWNwMjU2azEuUHViS2V5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBCdWZmZXIuZnJvbShwdWJLZXkudmFsdWUpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYWNjb3VudE51bWJlcjogTnVtYmVyKGJhc2VJbmpBY2NvdW50LmFjY291bnROdW1iZXIpLFxuICAgICAgICBzZXF1ZW5jZTogTnVtYmVyKGJhc2VJbmpBY2NvdW50LnNlcXVlbmNlKSxcbiAgICAgIH07XG5cbiAgICBjYXNlIFwiL2V0aGVybWludC50eXBlcy52MS5FdGhBY2NvdW50XCI6XG4gICAgICBjb25zdCBhY2NvdW50ID0gZXRoLkV0aEFjY291bnQuZGVjb2RlKGFjYy52YWx1ZSBhcyBVaW50OEFycmF5KTtcbiAgICAgIGNvbnN0IGJhc2VFdGhBY2NvdW50ID0gYWNjb3VudC5iYXNlQWNjb3VudCE7XG4gICAgICBjb25zdCBwdWJLZXlFdGggPSBiYXNlRXRoQWNjb3VudC5wdWJLZXk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZHJlc3M6IGJhc2VFdGhBY2NvdW50LmFkZHJlc3MsXG4gICAgICAgIHB1YmtleTogcHViS2V5RXRoXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogQnVmZmVyLmZyb20ocHViS2V5RXRoLnZhbHVlKS50b1N0cmluZyhcImJhc2U2NFwiKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGFjY291bnROdW1iZXI6IE51bWJlcihiYXNlRXRoQWNjb3VudC5hY2NvdW50TnVtYmVyKSxcbiAgICAgICAgc2VxdWVuY2U6IE51bWJlcihiYXNlRXRoQWNjb3VudC5zZXF1ZW5jZSksXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcy5hY2NvdW50RnJvbUFueShhY2MpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImFjY291bnRQYXJzZXIiLCJyZWdpc3RyeSIsInByb3Bvc2FsVHlwZXMiLCJDb21tdW5pdHlQb29sU3BlbmRQcm9wb3NhbCIsIk1zZ0NvbW11bml0eVBvb2xTcGVuZCIsIlBhcmFtZXRlckNoYW5nZVByb3Bvc2FsIiwiTXNnVXBkYXRlUGFyYW1zIiwiU3RvcmVDb2RlUHJvcG9zYWwiLCJJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwiLCJNaWdyYXRlQ29udHJhY3RQcm9wb3NhbCIsIlVwZGF0ZUFkbWluUHJvcG9zYWwiLCJDbGVhckFkbWluUHJvcG9zYWwiLCJQaW5Db2Rlc1Byb3Bvc2FsIiwiVW5waW5Db2Rlc1Byb3Bvc2FsIiwiRXhlY3V0ZUNvbnRyYWN0UHJvcG9zYWwiLCJVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsIiwiTXNnU3RvcmVDb2RlIiwiTXNnSW5zdGFudGlhdGVDb250cmFjdCIsIk1zZ01pZ3JhdGVDb250cmFjdCIsIk1zZ1VwZGF0ZUFkbWluIiwiTXNnQ2xlYXJBZG1pbiIsIk1zZ0V4ZWN1dGVDb250cmFjdCIsIk1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnIiwiU29mdHdhcmVVcGdyYWRlUHJvcG9zYWwiLCJNc2dTb2Z0d2FyZVVwZ3JhZGUiLCJDcmVhdGVIb29rUHJvcG9zYWwiLCJVcGRhdGVIb29rUHJvcG9zYWwiLCJEZWxldGVIb29rUHJvcG9zYWwiLCJUZXh0UHJvcG9zYWwiLCJNc2dFeGVjTGVnYWN5Q29udGVudCIsIkNsaWVudFVwZGF0ZVByb3Bvc2FsIiwiZXh0cmFJYmMiLCJIZWFkZXIiLCJDbGllbnRTdGF0ZSIsIkNvbnNlbnN1c1N0YXRlIiwiTWlzYmVoYXZpb3VyIiwiTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCIsIk1zZ1NlbmRUeCIsInR5cGVzIiwicyIsImRlZmF1bHRSZWdpc3RyeVR5cGVzIiwiTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiIsImRlbm9tIiwib3JhY2xlIiwid2FzbVR5cGVzIiwiaWJjVHlwZXMiLCJncmF2aXR5IiwiYmF0Y2giLCJSZWdpc3RyeSIsImFjYyIsInR5cGVVcmwiLCJTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IiwiYmFzZUFjY291bnQiLCJkZWNvZGUiLCJ2YWx1ZSIsImJhc2VWZXN0aW5nQWNjb3VudCIsImFzc2VydCIsImFjY291bnRGcm9tQW55IiwiQmFzZUFjY291bnQiLCJlbmNvZGUiLCJmaW5pc2giLCJpbmpBY2NvdW50IiwiaW5qIiwiRXRoQWNjb3VudCIsImJhc2VJbmpBY2NvdW50IiwicHViS2V5IiwiYWRkcmVzcyIsInB1YmtleSIsInR5cGUiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJhY2NvdW50TnVtYmVyIiwiTnVtYmVyIiwic2VxdWVuY2UiLCJhY2NvdW50IiwiZXRoIiwiYmFzZUV0aEFjY291bnQiLCJwdWJLZXlFdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBd0lhQSxhQUFhO2VBQWJBOztJQUZBQyxRQUFRO2VBQVJBOzs7eUJBdElhOzhCQUNEO2tFQUNOOzBCQUNNO3VCQUNGO3dCQUNBO3NCQUNLO29CQUNJOzhCQUNXO3FCQUNMO3FCQUNEO3FCQUNSO3dCQUNXO3FCQUNLO3FCQUNWO3lCQUNLOzBCQVdqQztxQkFTQTtxQkFJQTt3QkFDOEI7NEJBTTlCOytEQUNnQjsrREFDRjs0REFDSTtnRUFDSjsrREFDRTtnRUFDQzsyQkFLakI7eUJBQ3NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDN0Ms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
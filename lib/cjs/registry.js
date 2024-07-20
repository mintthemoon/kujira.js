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
const _ = require("buffer/");
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
                    value: _.Buffer.from(pubKey.value).toString("base64")
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
                    value: _.Buffer.from(pubKeyEth.value).toString("base64")
                } : null,
                accountNumber: Number(baseEthAccount.accountNumber),
                sequence: Number(baseEthAccount.sequence)
            };
        default:
            return _stargate.accountFromAny(acc);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXNtVHlwZXMgfSBmcm9tIFwiQGNvc21qcy9jb3Ntd2FzbS1zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzXCI7XG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCAqIGFzIHMgZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IGliY1R5cGVzIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGUvYnVpbGQvbW9kdWxlc1wiO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXIvXCI7XG5pbXBvcnQgeyBCYXNlQWNjb3VudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2F1dGgvdjFiZXRhMS9hdXRoXCI7XG5pbXBvcnQgeyBNc2dVcGRhdGVQYXJhbXMgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYW5rL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IENvbW11bml0eVBvb2xTcGVuZFByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZGlzdHJpYnV0aW9uL3YxYmV0YTEvZGlzdHJpYnV0aW9uXCI7XG5pbXBvcnQgeyBNc2dDb21tdW5pdHlQb29sU3BlbmQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgTXNnRXhlY0xlZ2FjeUNvbnRlbnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9nb3YvdjEvdHhcIjtcbmltcG9ydCB7IFRleHRQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MWJldGExL2dvdlwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9wYXJhbXMvdjFiZXRhMS9wYXJhbXNcIjtcbmltcG9ydCB7IE1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9zdGFraW5nL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IE1zZ1NvZnR3YXJlVXBncmFkZSB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgU29mdHdhcmVVcGdyYWRlUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvdXBncmFkZVwiO1xuaW1wb3J0IHtcbiAgQ2xlYXJBZG1pblByb3Bvc2FsLFxuICBFeGVjdXRlQ29udHJhY3RQcm9wb3NhbCxcbiAgSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsLFxuICBNaWdyYXRlQ29udHJhY3RQcm9wb3NhbCxcbiAgUGluQ29kZXNQcm9wb3NhbCxcbiAgU3RvcmVDb2RlUHJvcG9zYWwsXG4gIFVucGluQ29kZXNQcm9wb3NhbCxcbiAgVXBkYXRlQWRtaW5Qcm9wb3NhbCxcbiAgVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbCxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntd2FzbS93YXNtL3YxL3Byb3Bvc2FsXCI7XG5pbXBvcnQge1xuICBNc2dDbGVhckFkbWluLFxuICBNc2dFeGVjdXRlQ29udHJhY3QsXG4gIE1zZ0luc3RhbnRpYXRlQ29udHJhY3QsXG4gIE1zZ01pZ3JhdGVDb250cmFjdCxcbiAgTXNnU3RvcmVDb2RlLFxuICBNc2dVcGRhdGVBZG1pbixcbiAgTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWcsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbXdhc20vd2FzbS92MS90eFwiO1xuaW1wb3J0IHtcbiAgTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCxcbiAgTXNnU2VuZFR4LFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9hcHBsaWNhdGlvbnMvaW50ZXJjaGFpbl9hY2NvdW50cy9jb250cm9sbGVyL3YxL3R4XCI7XG5pbXBvcnQgeyBDbGllbnRVcGRhdGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvaWJjL2NvcmUvY2xpZW50L3YxL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgQ2xpZW50U3RhdGUsXG4gIENvbnNlbnN1c1N0YXRlLFxuICBIZWFkZXIsXG4gIE1pc2JlaGF2aW91cixcbn0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvbGlnaHRjbGllbnRzL3RlbmRlcm1pbnQvdjEvdGVuZGVybWludFwiO1xuaW1wb3J0ICogYXMgYmF0Y2ggZnJvbSBcIi4vYmF0Y2hcIjtcbmltcG9ydCAqIGFzIGV0aCBmcm9tIFwiLi9ldGhlcm1pbnQvdHlwZXNcIjtcbmltcG9ydCAqIGFzIGdyYXZpdHkgZnJvbSBcIi4vZ3Jhdml0eS92MVwiO1xuaW1wb3J0ICogYXMgaW5qIGZyb20gXCIuL2luamVjdGl2ZS90eXBlc1wiO1xuaW1wb3J0ICogYXMgZGVub20gZnJvbSBcIi4va3VqaXJhL2Rlbm9tXCI7XG5pbXBvcnQgKiBhcyBvcmFjbGUgZnJvbSBcIi4va3VqaXJhL29yYWNsZVwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlSG9va1Byb3Bvc2FsLFxuICBEZWxldGVIb29rUHJvcG9zYWwsXG4gIFVwZGF0ZUhvb2tQcm9wb3NhbCxcbn0gZnJvbSBcIi4va3VqaXJhL3NjaGVkdWxlci90eXBlcy9wcm9wb3NhbFwiO1xuaW1wb3J0IHsgU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudCB9IGZyb20gXCIuL3N0cmlkZS92ZXN0aW5nXCI7XG5jb25zdCBwcm9wb3NhbFR5cGVzID0gW1xuICBbXG4gICAgXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLkNvbW11bml0eVBvb2xTcGVuZFByb3Bvc2FsXCIsXG4gICAgQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwsXG4gIF0sXG4gIFtcIi9jb3Ntb3MuZGlzdHJpYnV0aW9uLnYxYmV0YTEuTXNnQ29tbXVuaXR5UG9vbFNwZW5kXCIsIE1zZ0NvbW11bml0eVBvb2xTcGVuZF0sXG5cbiAgW1wiL2Nvc21vcy5wYXJhbXMudjFiZXRhMS5QYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbFwiLCBQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MucGFyYW1zLnYxYmV0YTEuTXNnVXBkYXRlUGFyYW1zXCIsIE1zZ1VwZGF0ZVBhcmFtc10sXG5cbiAgW1wiL2Nvc213YXNtLndhc20udjEuU3RvcmVDb2RlUHJvcG9zYWxcIiwgU3RvcmVDb2RlUHJvcG9zYWxdLFxuICBbXG4gICAgXCIvY29zbXdhc20ud2FzbS52MS5JbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWxcIixcbiAgICBJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwsXG4gIF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1pZ3JhdGVDb250cmFjdFByb3Bvc2FsXCIsIE1pZ3JhdGVDb250cmFjdFByb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuVXBkYXRlQWRtaW5Qcm9wb3NhbFwiLCBVcGRhdGVBZG1pblByb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuQ2xlYXJBZG1pblByb3Bvc2FsXCIsIENsZWFyQWRtaW5Qcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlBpbkNvZGVzUHJvcG9zYWxcIiwgUGluQ29kZXNQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlVucGluQ29kZXNQcm9wb3NhbFwiLCBVbnBpbkNvZGVzUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5FeGVjdXRlQ29udHJhY3RQcm9wb3NhbFwiLCBFeGVjdXRlQ29udHJhY3RQcm9wb3NhbF0sXG4gIFtcbiAgICBcIi9jb3Ntd2FzbS53YXNtLnYxLlVwZGF0ZUluc3RhbnRpYXRlQ29uZmlnUHJvcG9zYWxcIixcbiAgICBVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsLFxuICBdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dTdG9yZUNvZGVcIiwgTXNnU3RvcmVDb2RlXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnSW5zdGFudGlhdGVDb250cmFjdFwiLCBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0XSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnTWlncmF0ZUNvbnRyYWN0XCIsIE1zZ01pZ3JhdGVDb250cmFjdF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VwZGF0ZUFkbWluXCIsIE1zZ1VwZGF0ZUFkbWluXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnQ2xlYXJBZG1pblwiLCBNc2dDbGVhckFkbWluXSxcbiAgLy8gW1wiL2Nvc213YXNtLndhc20udjEuTXNnUGluQ29kZXNcIiwgTXNnUGluQ29kZXNdLFxuICAvLyBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVbnBpbkNvZGVzXCIsIE1zZ1VucGluQ29kZXNdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dFeGVjdXRlQ29udHJhY3RcIiwgTXNnRXhlY3V0ZUNvbnRyYWN0XSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWdcIiwgTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWddLFxuXG4gIFtcIi9jb3Ntb3MudXBncmFkZS52MWJldGExLlNvZnR3YXJlVXBncmFkZVByb3Bvc2FsXCIsIFNvZnR3YXJlVXBncmFkZVByb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy51cGdyYWRlLnYxYmV0YTEuTXNnU29mdHdhcmVVcGdyYWRlXCIsIE1zZ1NvZnR3YXJlVXBncmFkZV0sXG4gIFtcIi9rdWppcmEuc2NoZWR1bGVyLkNyZWF0ZUhvb2tQcm9wb3NhbFwiLCBDcmVhdGVIb29rUHJvcG9zYWxdLFxuICBbXCIva3VqaXJhLnNjaGVkdWxlci5VcGRhdGVIb29rUHJvcG9zYWxcIiwgVXBkYXRlSG9va1Byb3Bvc2FsXSxcbiAgW1wiL2t1amlyYS5zY2hlZHVsZXIuRGVsZXRlSG9va1Byb3Bvc2FsXCIsIERlbGV0ZUhvb2tQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MuZ292LnYxYmV0YTEuVGV4dFByb3Bvc2FsXCIsIFRleHRQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MuZ292LnYxLk1zZ0V4ZWNMZWdhY3lDb250ZW50XCIsIE1zZ0V4ZWNMZWdhY3lDb250ZW50XSxcbiAgW1wiL2liYy5jb3JlLmNsaWVudC52MS5DbGllbnRVcGRhdGVQcm9wb3NhbFwiLCBDbGllbnRVcGRhdGVQcm9wb3NhbF0sXG5dO1xuXG5jb25zdCBleHRyYUliYyA9IFtcbiAgW1wiL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5IZWFkZXJcIiwgSGVhZGVyXSxcbiAgW1wiL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5DbGllbnRTdGF0ZVwiLCBDbGllbnRTdGF0ZV0sXG4gIFtcIi9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ29uc2Vuc3VzU3RhdGVcIiwgQ29uc2Vuc3VzU3RhdGVdLFxuICBbXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLk1pc2JlaGF2aW91clwiLCBNaXNiZWhhdmlvdXJdLFxuICBbXG4gICAgXCIvaWJjLmFwcGxpY2F0aW9ucy5pbnRlcmNoYWluX2FjY291bnRzLmNvbnRyb2xsZXIudjEuTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudFwiLFxuICAgIE1zZ1JlZ2lzdGVySW50ZXJjaGFpbkFjY291bnQsXG4gIF0sXG4gIFtcIi9pYmMuYXBwbGljYXRpb25zLmludGVyY2hhaW5fYWNjb3VudHMuY29udHJvbGxlci52MS5Nc2dTZW5kVHhcIiwgTXNnU2VuZFR4XSxcbl07XG5cbmNvbnN0IHR5cGVzID0gW1xuICAuLi5zLmRlZmF1bHRSZWdpc3RyeVR5cGVzLFxuICBbXG4gICAgXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXCIsXG4gICAgTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbixcbiAgXSxcbiAgLi4uZGVub20udHlwZXMsXG4gIC8vIC4uLmV0aGVybWludEV2bS50eXBlcyxcbiAgLy8gLi4uZXRoZXJtaW50RmVlbWFya2V0LnR5cGVzLFxuICAuLi5vcmFjbGUudHlwZXMsXG4gIC4uLndhc21UeXBlcyxcbiAgLi4uaWJjVHlwZXMsXG4gIC4uLnByb3Bvc2FsVHlwZXMsXG4gIC4uLmV4dHJhSWJjLFxuICAuLi5ncmF2aXR5LnR5cGVzLFxuICAuLi5iYXRjaC50eXBlcyxcbl07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSg8YW55PnR5cGVzKTtcblxuZXhwb3J0IGNvbnN0IGFjY291bnRQYXJzZXI6IHMuQWNjb3VudFBhcnNlciA9IChhY2MpID0+IHtcbiAgc3dpdGNoIChhY2MudHlwZVVybCkge1xuICAgIGNhc2UgXCIvc3RyaWRlLnZlc3RpbmcuU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudFwiOlxuICAgICAgY29uc3QgYmFzZUFjY291bnQgPSBTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50LmRlY29kZShhY2MudmFsdWUpXG4gICAgICAgIC5iYXNlVmVzdGluZ0FjY291bnQ/LmJhc2VBY2NvdW50O1xuICAgICAgYXNzZXJ0KGJhc2VBY2NvdW50KTtcbiAgICAgIHJldHVybiBzLmFjY291bnRGcm9tQW55KHtcbiAgICAgICAgdHlwZVVybDogXCIvY29zbW9zLmF1dGgudjFiZXRhMS5CYXNlQWNjb3VudFwiLFxuICAgICAgICB2YWx1ZTogQmFzZUFjY291bnQuZW5jb2RlKGJhc2VBY2NvdW50KS5maW5pc2goKSxcbiAgICAgIH0pO1xuICAgIGNhc2UgXCIvaW5qZWN0aXZlLnR5cGVzLnYxYmV0YTEuRXRoQWNjb3VudFwiOlxuICAgICAgY29uc3QgaW5qQWNjb3VudCA9IGluai5FdGhBY2NvdW50LmRlY29kZShhY2MudmFsdWUgYXMgVWludDhBcnJheSk7XG4gICAgICBjb25zdCBiYXNlSW5qQWNjb3VudCA9IGluakFjY291bnQuYmFzZUFjY291bnQhO1xuICAgICAgY29uc3QgcHViS2V5ID0gYmFzZUluakFjY291bnQucHViS2V5O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGRyZXNzOiBiYXNlSW5qQWNjb3VudC5hZGRyZXNzLFxuICAgICAgICBwdWJrZXk6IHB1YktleVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB0eXBlOiBcIi9pbmplY3RpdmUuY3J5cHRvLnYxYmV0YTEuZXRoc2VjcDI1NmsxLlB1YktleVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogQnVmZmVyLmZyb20ocHViS2V5LnZhbHVlKS50b1N0cmluZyhcImJhc2U2NFwiKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGFjY291bnROdW1iZXI6IE51bWJlcihiYXNlSW5qQWNjb3VudC5hY2NvdW50TnVtYmVyKSxcbiAgICAgICAgc2VxdWVuY2U6IE51bWJlcihiYXNlSW5qQWNjb3VudC5zZXF1ZW5jZSksXG4gICAgICB9O1xuXG4gICAgY2FzZSBcIi9ldGhlcm1pbnQudHlwZXMudjEuRXRoQWNjb3VudFwiOlxuICAgICAgY29uc3QgYWNjb3VudCA9IGV0aC5FdGhBY2NvdW50LmRlY29kZShhY2MudmFsdWUgYXMgVWludDhBcnJheSk7XG4gICAgICBjb25zdCBiYXNlRXRoQWNjb3VudCA9IGFjY291bnQuYmFzZUFjY291bnQhO1xuICAgICAgY29uc3QgcHViS2V5RXRoID0gYmFzZUV0aEFjY291bnQucHViS2V5O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGRyZXNzOiBiYXNlRXRoQWNjb3VudC5hZGRyZXNzLFxuICAgICAgICBwdWJrZXk6IHB1YktleUV0aFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB0eXBlOiBcIi9ldGhlcm1pbnQuY3J5cHRvLnYxLmV0aHNlY3AyNTZrMS5QdWJLZXlcIixcbiAgICAgICAgICAgICAgdmFsdWU6IEJ1ZmZlci5mcm9tKHB1YktleUV0aC52YWx1ZSkudG9TdHJpbmcoXCJiYXNlNjRcIiksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIoYmFzZUV0aEFjY291bnQuYWNjb3VudE51bWJlciksXG4gICAgICAgIHNlcXVlbmNlOiBOdW1iZXIoYmFzZUV0aEFjY291bnQuc2VxdWVuY2UpLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHMuYWNjb3VudEZyb21BbnkoYWNjKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJhY2NvdW50UGFyc2VyIiwicmVnaXN0cnkiLCJwcm9wb3NhbFR5cGVzIiwiQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwiLCJNc2dDb21tdW5pdHlQb29sU3BlbmQiLCJQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbCIsIk1zZ1VwZGF0ZVBhcmFtcyIsIlN0b3JlQ29kZVByb3Bvc2FsIiwiSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsIiwiTWlncmF0ZUNvbnRyYWN0UHJvcG9zYWwiLCJVcGRhdGVBZG1pblByb3Bvc2FsIiwiQ2xlYXJBZG1pblByb3Bvc2FsIiwiUGluQ29kZXNQcm9wb3NhbCIsIlVucGluQ29kZXNQcm9wb3NhbCIsIkV4ZWN1dGVDb250cmFjdFByb3Bvc2FsIiwiVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbCIsIk1zZ1N0b3JlQ29kZSIsIk1zZ0luc3RhbnRpYXRlQ29udHJhY3QiLCJNc2dNaWdyYXRlQ29udHJhY3QiLCJNc2dVcGRhdGVBZG1pbiIsIk1zZ0NsZWFyQWRtaW4iLCJNc2dFeGVjdXRlQ29udHJhY3QiLCJNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyIsIlNvZnR3YXJlVXBncmFkZVByb3Bvc2FsIiwiTXNnU29mdHdhcmVVcGdyYWRlIiwiQ3JlYXRlSG9va1Byb3Bvc2FsIiwiVXBkYXRlSG9va1Byb3Bvc2FsIiwiRGVsZXRlSG9va1Byb3Bvc2FsIiwiVGV4dFByb3Bvc2FsIiwiTXNnRXhlY0xlZ2FjeUNvbnRlbnQiLCJDbGllbnRVcGRhdGVQcm9wb3NhbCIsImV4dHJhSWJjIiwiSGVhZGVyIiwiQ2xpZW50U3RhdGUiLCJDb25zZW5zdXNTdGF0ZSIsIk1pc2JlaGF2aW91ciIsIk1zZ1JlZ2lzdGVySW50ZXJjaGFpbkFjY291bnQiLCJNc2dTZW5kVHgiLCJ0eXBlcyIsInMiLCJkZWZhdWx0UmVnaXN0cnlUeXBlcyIsIk1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24iLCJkZW5vbSIsIm9yYWNsZSIsIndhc21UeXBlcyIsImliY1R5cGVzIiwiZ3Jhdml0eSIsImJhdGNoIiwiUmVnaXN0cnkiLCJhY2MiLCJ0eXBlVXJsIiwiU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudCIsImJhc2VBY2NvdW50IiwiZGVjb2RlIiwidmFsdWUiLCJiYXNlVmVzdGluZ0FjY291bnQiLCJhc3NlcnQiLCJhY2NvdW50RnJvbUFueSIsIkJhc2VBY2NvdW50IiwiZW5jb2RlIiwiZmluaXNoIiwiaW5qQWNjb3VudCIsImluaiIsIkV0aEFjY291bnQiLCJiYXNlSW5qQWNjb3VudCIsInB1YktleSIsImFkZHJlc3MiLCJwdWJrZXkiLCJ0eXBlIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiYWNjb3VudE51bWJlciIsIk51bWJlciIsInNlcXVlbmNlIiwiYWNjb3VudCIsImV0aCIsImJhc2VFdGhBY2NvdW50IiwicHViS2V5RXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXdJYUEsYUFBYTtlQUFiQTs7SUFGQUMsUUFBUTtlQUFSQTs7O3lCQXRJYTs4QkFDRDtrRUFDTjswQkFDTTt1QkFDRjtrQkFDQTtzQkFDSztvQkFDSTs4QkFDVztxQkFDTDtxQkFDRDtxQkFDUjt3QkFDVztxQkFDSztxQkFDVjt5QkFDSzswQkFXakM7cUJBU0E7cUJBSUE7d0JBQzhCOzRCQU05QjsrREFDZ0I7K0RBQ0Y7NERBQ0k7Z0VBQ0o7K0RBQ0U7Z0VBQ0M7MkJBS2pCO3lCQUNzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzdD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
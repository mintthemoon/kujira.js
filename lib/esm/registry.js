import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { ibcTypes } from "@cosmjs/stargate/build/modules";
import { assert } from "@cosmjs/utils";
import { Buffer } from "buffer/";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { MsgUpdateParams } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpend } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgExecLegacyContent } from "cosmjs-types/cosmos/gov/v1/tx";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { MsgCancelUnbondingDelegation } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgSoftwareUpgrade } from "cosmjs-types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { ClearAdminProposal, ExecuteContractProposal, InstantiateContractProposal, MigrateContractProposal, PinCodesProposal, StoreCodeProposal, UnpinCodesProposal, UpdateAdminProposal, UpdateInstantiateConfigProposal } from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgRegisterInterchainAccount, MsgSendTx } from "cosmjs-types/ibc/applications/interchain_accounts/controller/v1/tx";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import { ClientState, ConsensusState, Header, Misbehaviour } from "cosmjs-types/ibc/lightclients/tendermint/v1/tendermint";
import * as batch from "./batch";
import * as eth from "./ethermint/types";
import * as gravity from "./gravity/v1";
import * as inj from "./injective/types";
import * as denom from "./kujira/denom";
import * as oracle from "./kujira/oracle";
import { CreateHookProposal, DeleteHookProposal, UpdateHookProposal } from "./kujira/scheduler/types/proposal";
import { StridePeriodicVestingAccount } from "./stride/vesting";
const proposalTypes = [
    [
        "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        CommunityPoolSpendProposal
    ],
    [
        "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
        MsgCommunityPoolSpend
    ],
    [
        "/cosmos.params.v1beta1.ParameterChangeProposal",
        ParameterChangeProposal
    ],
    [
        "/cosmos.params.v1beta1.MsgUpdateParams",
        MsgUpdateParams
    ],
    [
        "/cosmwasm.wasm.v1.StoreCodeProposal",
        StoreCodeProposal
    ],
    [
        "/cosmwasm.wasm.v1.InstantiateContractProposal",
        InstantiateContractProposal
    ],
    [
        "/cosmwasm.wasm.v1.MigrateContractProposal",
        MigrateContractProposal
    ],
    [
        "/cosmwasm.wasm.v1.UpdateAdminProposal",
        UpdateAdminProposal
    ],
    [
        "/cosmwasm.wasm.v1.ClearAdminProposal",
        ClearAdminProposal
    ],
    [
        "/cosmwasm.wasm.v1.PinCodesProposal",
        PinCodesProposal
    ],
    [
        "/cosmwasm.wasm.v1.UnpinCodesProposal",
        UnpinCodesProposal
    ],
    [
        "/cosmwasm.wasm.v1.ExecuteContractProposal",
        ExecuteContractProposal
    ],
    [
        "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
        UpdateInstantiateConfigProposal
    ],
    [
        "/cosmwasm.wasm.v1.MsgStoreCode",
        MsgStoreCode
    ],
    [
        "/cosmwasm.wasm.v1.MsgInstantiateContract",
        MsgInstantiateContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgMigrateContract",
        MsgMigrateContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        MsgUpdateAdmin
    ],
    [
        "/cosmwasm.wasm.v1.MsgClearAdmin",
        MsgClearAdmin
    ],
    // ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
    // ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
    [
        "/cosmwasm.wasm.v1.MsgExecuteContract",
        MsgExecuteContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        MsgUpdateInstantiateConfig
    ],
    [
        "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        SoftwareUpgradeProposal
    ],
    [
        "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        MsgSoftwareUpgrade
    ],
    [
        "/kujira.scheduler.CreateHookProposal",
        CreateHookProposal
    ],
    [
        "/kujira.scheduler.UpdateHookProposal",
        UpdateHookProposal
    ],
    [
        "/kujira.scheduler.DeleteHookProposal",
        DeleteHookProposal
    ],
    [
        "/cosmos.gov.v1beta1.TextProposal",
        TextProposal
    ],
    [
        "/cosmos.gov.v1.MsgExecLegacyContent",
        MsgExecLegacyContent
    ],
    [
        "/ibc.core.client.v1.ClientUpdateProposal",
        ClientUpdateProposal
    ]
];
const extraIbc = [
    [
        "/ibc.lightclients.tendermint.v1.Header",
        Header
    ],
    [
        "/ibc.lightclients.tendermint.v1.ClientState",
        ClientState
    ],
    [
        "/ibc.lightclients.tendermint.v1.ConsensusState",
        ConsensusState
    ],
    [
        "/ibc.lightclients.tendermint.v1.Misbehaviour",
        Misbehaviour
    ],
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        MsgRegisterInterchainAccount
    ],
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
        MsgSendTx
    ]
];
const types = [
    ...s.defaultRegistryTypes,
    [
        "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
        MsgCancelUnbondingDelegation
    ],
    ...denom.types,
    // ...ethermintEvm.types,
    // ...ethermintFeemarket.types,
    ...oracle.types,
    ...wasmTypes,
    ...ibcTypes,
    ...proposalTypes,
    ...extraIbc,
    ...gravity.types,
    ...batch.types
];
export const registry = new Registry(types);
export const accountParser = (acc)=>{
    switch(acc.typeUrl){
        case "/stride.vesting.StridePeriodicVestingAccount":
            var _StridePeriodicVestingAccount_decode_baseVestingAccount;
            const baseAccount = (_StridePeriodicVestingAccount_decode_baseVestingAccount = StridePeriodicVestingAccount.decode(acc.value).baseVestingAccount) === null || _StridePeriodicVestingAccount_decode_baseVestingAccount === void 0 ? void 0 : _StridePeriodicVestingAccount_decode_baseVestingAccount.baseAccount;
            assert(baseAccount);
            return s.accountFromAny({
                typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
                value: BaseAccount.encode(baseAccount).finish()
            });
        case "/injective.types.v1beta1.EthAccount":
            const injAccount = inj.EthAccount.decode(acc.value);
            const baseInjAccount = injAccount.baseAccount;
            const pubKey = baseInjAccount.pubKey;
            return {
                address: baseInjAccount.address,
                pubkey: pubKey ? {
                    type: "/injective.crypto.v1beta1.ethsecp256k1.PubKey",
                    value: Buffer.from(pubKey.value).toString("base64")
                } : null,
                accountNumber: Number(baseInjAccount.accountNumber),
                sequence: Number(baseInjAccount.sequence)
            };
        case "/ethermint.types.v1.EthAccount":
            const account = eth.EthAccount.decode(acc.value);
            const baseEthAccount = account.baseAccount;
            const pubKeyEth = baseEthAccount.pubKey;
            return {
                address: baseEthAccount.address,
                pubkey: pubKeyEth ? {
                    type: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
                    value: Buffer.from(pubKeyEth.value).toString("base64")
                } : null,
                accountNumber: Number(baseEthAccount.accountNumber),
                sequence: Number(baseEthAccount.sequence)
            };
        default:
            return s.accountFromAny(acc);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXNtVHlwZXMgfSBmcm9tIFwiQGNvc21qcy9jb3Ntd2FzbS1zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzXCI7XG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCAqIGFzIHMgZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IGliY1R5cGVzIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGUvYnVpbGQvbW9kdWxlc1wiO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXIvXCI7XG5pbXBvcnQgeyBCYXNlQWNjb3VudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2F1dGgvdjFiZXRhMS9hdXRoXCI7XG5pbXBvcnQgeyBNc2dVcGRhdGVQYXJhbXMgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYW5rL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IENvbW11bml0eVBvb2xTcGVuZFByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZGlzdHJpYnV0aW9uL3YxYmV0YTEvZGlzdHJpYnV0aW9uXCI7XG5pbXBvcnQgeyBNc2dDb21tdW5pdHlQb29sU3BlbmQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgTXNnRXhlY0xlZ2FjeUNvbnRlbnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9nb3YvdjEvdHhcIjtcbmltcG9ydCB7IFRleHRQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MWJldGExL2dvdlwiO1xuaW1wb3J0IHsgUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9wYXJhbXMvdjFiZXRhMS9wYXJhbXNcIjtcbmltcG9ydCB7IE1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9zdGFraW5nL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IE1zZ1NvZnR3YXJlVXBncmFkZSB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgU29mdHdhcmVVcGdyYWRlUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvdXBncmFkZVwiO1xuaW1wb3J0IHtcbiAgQ2xlYXJBZG1pblByb3Bvc2FsLFxuICBFeGVjdXRlQ29udHJhY3RQcm9wb3NhbCxcbiAgSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsLFxuICBNaWdyYXRlQ29udHJhY3RQcm9wb3NhbCxcbiAgUGluQ29kZXNQcm9wb3NhbCxcbiAgU3RvcmVDb2RlUHJvcG9zYWwsXG4gIFVucGluQ29kZXNQcm9wb3NhbCxcbiAgVXBkYXRlQWRtaW5Qcm9wb3NhbCxcbiAgVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbCxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntd2FzbS93YXNtL3YxL3Byb3Bvc2FsXCI7XG5pbXBvcnQge1xuICBNc2dDbGVhckFkbWluLFxuICBNc2dFeGVjdXRlQ29udHJhY3QsXG4gIE1zZ0luc3RhbnRpYXRlQ29udHJhY3QsXG4gIE1zZ01pZ3JhdGVDb250cmFjdCxcbiAgTXNnU3RvcmVDb2RlLFxuICBNc2dVcGRhdGVBZG1pbixcbiAgTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWcsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbXdhc20vd2FzbS92MS90eFwiO1xuaW1wb3J0IHtcbiAgTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCxcbiAgTXNnU2VuZFR4LFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9hcHBsaWNhdGlvbnMvaW50ZXJjaGFpbl9hY2NvdW50cy9jb250cm9sbGVyL3YxL3R4XCI7XG5pbXBvcnQgeyBDbGllbnRVcGRhdGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvaWJjL2NvcmUvY2xpZW50L3YxL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgQ2xpZW50U3RhdGUsXG4gIENvbnNlbnN1c1N0YXRlLFxuICBIZWFkZXIsXG4gIE1pc2JlaGF2aW91cixcbn0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvbGlnaHRjbGllbnRzL3RlbmRlcm1pbnQvdjEvdGVuZGVybWludFwiO1xuaW1wb3J0ICogYXMgYmF0Y2ggZnJvbSBcIi4vYmF0Y2hcIjtcbmltcG9ydCAqIGFzIGV0aCBmcm9tIFwiLi9ldGhlcm1pbnQvdHlwZXNcIjtcbmltcG9ydCAqIGFzIGdyYXZpdHkgZnJvbSBcIi4vZ3Jhdml0eS92MVwiO1xuaW1wb3J0ICogYXMgaW5qIGZyb20gXCIuL2luamVjdGl2ZS90eXBlc1wiO1xuaW1wb3J0ICogYXMgZGVub20gZnJvbSBcIi4va3VqaXJhL2Rlbm9tXCI7XG5pbXBvcnQgKiBhcyBvcmFjbGUgZnJvbSBcIi4va3VqaXJhL29yYWNsZVwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlSG9va1Byb3Bvc2FsLFxuICBEZWxldGVIb29rUHJvcG9zYWwsXG4gIFVwZGF0ZUhvb2tQcm9wb3NhbCxcbn0gZnJvbSBcIi4va3VqaXJhL3NjaGVkdWxlci90eXBlcy9wcm9wb3NhbFwiO1xuaW1wb3J0IHsgU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudCB9IGZyb20gXCIuL3N0cmlkZS92ZXN0aW5nXCI7XG5jb25zdCBwcm9wb3NhbFR5cGVzID0gW1xuICBbXG4gICAgXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLkNvbW11bml0eVBvb2xTcGVuZFByb3Bvc2FsXCIsXG4gICAgQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwsXG4gIF0sXG4gIFtcIi9jb3Ntb3MuZGlzdHJpYnV0aW9uLnYxYmV0YTEuTXNnQ29tbXVuaXR5UG9vbFNwZW5kXCIsIE1zZ0NvbW11bml0eVBvb2xTcGVuZF0sXG5cbiAgW1wiL2Nvc21vcy5wYXJhbXMudjFiZXRhMS5QYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbFwiLCBQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MucGFyYW1zLnYxYmV0YTEuTXNnVXBkYXRlUGFyYW1zXCIsIE1zZ1VwZGF0ZVBhcmFtc10sXG5cbiAgW1wiL2Nvc213YXNtLndhc20udjEuU3RvcmVDb2RlUHJvcG9zYWxcIiwgU3RvcmVDb2RlUHJvcG9zYWxdLFxuICBbXG4gICAgXCIvY29zbXdhc20ud2FzbS52MS5JbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWxcIixcbiAgICBJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwsXG4gIF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1pZ3JhdGVDb250cmFjdFByb3Bvc2FsXCIsIE1pZ3JhdGVDb250cmFjdFByb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuVXBkYXRlQWRtaW5Qcm9wb3NhbFwiLCBVcGRhdGVBZG1pblByb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuQ2xlYXJBZG1pblByb3Bvc2FsXCIsIENsZWFyQWRtaW5Qcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlBpbkNvZGVzUHJvcG9zYWxcIiwgUGluQ29kZXNQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlVucGluQ29kZXNQcm9wb3NhbFwiLCBVbnBpbkNvZGVzUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5FeGVjdXRlQ29udHJhY3RQcm9wb3NhbFwiLCBFeGVjdXRlQ29udHJhY3RQcm9wb3NhbF0sXG4gIFtcbiAgICBcIi9jb3Ntd2FzbS53YXNtLnYxLlVwZGF0ZUluc3RhbnRpYXRlQ29uZmlnUHJvcG9zYWxcIixcbiAgICBVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsLFxuICBdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dTdG9yZUNvZGVcIiwgTXNnU3RvcmVDb2RlXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnSW5zdGFudGlhdGVDb250cmFjdFwiLCBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0XSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnTWlncmF0ZUNvbnRyYWN0XCIsIE1zZ01pZ3JhdGVDb250cmFjdF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VwZGF0ZUFkbWluXCIsIE1zZ1VwZGF0ZUFkbWluXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnQ2xlYXJBZG1pblwiLCBNc2dDbGVhckFkbWluXSxcbiAgLy8gW1wiL2Nvc213YXNtLndhc20udjEuTXNnUGluQ29kZXNcIiwgTXNnUGluQ29kZXNdLFxuICAvLyBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVbnBpbkNvZGVzXCIsIE1zZ1VucGluQ29kZXNdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dFeGVjdXRlQ29udHJhY3RcIiwgTXNnRXhlY3V0ZUNvbnRyYWN0XSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWdcIiwgTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWddLFxuXG4gIFtcIi9jb3Ntb3MudXBncmFkZS52MWJldGExLlNvZnR3YXJlVXBncmFkZVByb3Bvc2FsXCIsIFNvZnR3YXJlVXBncmFkZVByb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy51cGdyYWRlLnYxYmV0YTEuTXNnU29mdHdhcmVVcGdyYWRlXCIsIE1zZ1NvZnR3YXJlVXBncmFkZV0sXG4gIFtcIi9rdWppcmEuc2NoZWR1bGVyLkNyZWF0ZUhvb2tQcm9wb3NhbFwiLCBDcmVhdGVIb29rUHJvcG9zYWxdLFxuICBbXCIva3VqaXJhLnNjaGVkdWxlci5VcGRhdGVIb29rUHJvcG9zYWxcIiwgVXBkYXRlSG9va1Byb3Bvc2FsXSxcbiAgW1wiL2t1amlyYS5zY2hlZHVsZXIuRGVsZXRlSG9va1Byb3Bvc2FsXCIsIERlbGV0ZUhvb2tQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MuZ292LnYxYmV0YTEuVGV4dFByb3Bvc2FsXCIsIFRleHRQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MuZ292LnYxLk1zZ0V4ZWNMZWdhY3lDb250ZW50XCIsIE1zZ0V4ZWNMZWdhY3lDb250ZW50XSxcbiAgW1wiL2liYy5jb3JlLmNsaWVudC52MS5DbGllbnRVcGRhdGVQcm9wb3NhbFwiLCBDbGllbnRVcGRhdGVQcm9wb3NhbF0sXG5dO1xuXG5jb25zdCBleHRyYUliYyA9IFtcbiAgW1wiL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5IZWFkZXJcIiwgSGVhZGVyXSxcbiAgW1wiL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5DbGllbnRTdGF0ZVwiLCBDbGllbnRTdGF0ZV0sXG4gIFtcIi9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuQ29uc2Vuc3VzU3RhdGVcIiwgQ29uc2Vuc3VzU3RhdGVdLFxuICBbXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLk1pc2JlaGF2aW91clwiLCBNaXNiZWhhdmlvdXJdLFxuICBbXG4gICAgXCIvaWJjLmFwcGxpY2F0aW9ucy5pbnRlcmNoYWluX2FjY291bnRzLmNvbnRyb2xsZXIudjEuTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudFwiLFxuICAgIE1zZ1JlZ2lzdGVySW50ZXJjaGFpbkFjY291bnQsXG4gIF0sXG4gIFtcIi9pYmMuYXBwbGljYXRpb25zLmludGVyY2hhaW5fYWNjb3VudHMuY29udHJvbGxlci52MS5Nc2dTZW5kVHhcIiwgTXNnU2VuZFR4XSxcbl07XG5cbmNvbnN0IHR5cGVzID0gW1xuICAuLi5zLmRlZmF1bHRSZWdpc3RyeVR5cGVzLFxuICBbXG4gICAgXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXCIsXG4gICAgTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbixcbiAgXSxcbiAgLi4uZGVub20udHlwZXMsXG4gIC8vIC4uLmV0aGVybWludEV2bS50eXBlcyxcbiAgLy8gLi4uZXRoZXJtaW50RmVlbWFya2V0LnR5cGVzLFxuICAuLi5vcmFjbGUudHlwZXMsXG4gIC4uLndhc21UeXBlcyxcbiAgLi4uaWJjVHlwZXMsXG4gIC4uLnByb3Bvc2FsVHlwZXMsXG4gIC4uLmV4dHJhSWJjLFxuICAuLi5ncmF2aXR5LnR5cGVzLFxuICAuLi5iYXRjaC50eXBlcyxcbl07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSg8YW55PnR5cGVzKTtcblxuZXhwb3J0IGNvbnN0IGFjY291bnRQYXJzZXI6IHMuQWNjb3VudFBhcnNlciA9IChhY2MpID0+IHtcbiAgc3dpdGNoIChhY2MudHlwZVVybCkge1xuICAgIGNhc2UgXCIvc3RyaWRlLnZlc3RpbmcuU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudFwiOlxuICAgICAgY29uc3QgYmFzZUFjY291bnQgPSBTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50LmRlY29kZShhY2MudmFsdWUpXG4gICAgICAgIC5iYXNlVmVzdGluZ0FjY291bnQ/LmJhc2VBY2NvdW50O1xuICAgICAgYXNzZXJ0KGJhc2VBY2NvdW50KTtcbiAgICAgIHJldHVybiBzLmFjY291bnRGcm9tQW55KHtcbiAgICAgICAgdHlwZVVybDogXCIvY29zbW9zLmF1dGgudjFiZXRhMS5CYXNlQWNjb3VudFwiLFxuICAgICAgICB2YWx1ZTogQmFzZUFjY291bnQuZW5jb2RlKGJhc2VBY2NvdW50KS5maW5pc2goKSxcbiAgICAgIH0pO1xuICAgIGNhc2UgXCIvaW5qZWN0aXZlLnR5cGVzLnYxYmV0YTEuRXRoQWNjb3VudFwiOlxuICAgICAgY29uc3QgaW5qQWNjb3VudCA9IGluai5FdGhBY2NvdW50LmRlY29kZShhY2MudmFsdWUgYXMgVWludDhBcnJheSk7XG4gICAgICBjb25zdCBiYXNlSW5qQWNjb3VudCA9IGluakFjY291bnQuYmFzZUFjY291bnQhO1xuICAgICAgY29uc3QgcHViS2V5ID0gYmFzZUluakFjY291bnQucHViS2V5O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGRyZXNzOiBiYXNlSW5qQWNjb3VudC5hZGRyZXNzLFxuICAgICAgICBwdWJrZXk6IHB1YktleVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB0eXBlOiBcIi9pbmplY3RpdmUuY3J5cHRvLnYxYmV0YTEuZXRoc2VjcDI1NmsxLlB1YktleVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogQnVmZmVyLmZyb20ocHViS2V5LnZhbHVlKS50b1N0cmluZyhcImJhc2U2NFwiKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGFjY291bnROdW1iZXI6IE51bWJlcihiYXNlSW5qQWNjb3VudC5hY2NvdW50TnVtYmVyKSxcbiAgICAgICAgc2VxdWVuY2U6IE51bWJlcihiYXNlSW5qQWNjb3VudC5zZXF1ZW5jZSksXG4gICAgICB9O1xuXG4gICAgY2FzZSBcIi9ldGhlcm1pbnQudHlwZXMudjEuRXRoQWNjb3VudFwiOlxuICAgICAgY29uc3QgYWNjb3VudCA9IGV0aC5FdGhBY2NvdW50LmRlY29kZShhY2MudmFsdWUgYXMgVWludDhBcnJheSk7XG4gICAgICBjb25zdCBiYXNlRXRoQWNjb3VudCA9IGFjY291bnQuYmFzZUFjY291bnQhO1xuICAgICAgY29uc3QgcHViS2V5RXRoID0gYmFzZUV0aEFjY291bnQucHViS2V5O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGRyZXNzOiBiYXNlRXRoQWNjb3VudC5hZGRyZXNzLFxuICAgICAgICBwdWJrZXk6IHB1YktleUV0aFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICB0eXBlOiBcIi9ldGhlcm1pbnQuY3J5cHRvLnYxLmV0aHNlY3AyNTZrMS5QdWJLZXlcIixcbiAgICAgICAgICAgICAgdmFsdWU6IEJ1ZmZlci5mcm9tKHB1YktleUV0aC52YWx1ZSkudG9TdHJpbmcoXCJiYXNlNjRcIiksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBhY2NvdW50TnVtYmVyOiBOdW1iZXIoYmFzZUV0aEFjY291bnQuYWNjb3VudE51bWJlciksXG4gICAgICAgIHNlcXVlbmNlOiBOdW1iZXIoYmFzZUV0aEFjY291bnQuc2VxdWVuY2UpLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHMuYWNjb3VudEZyb21BbnkoYWNjKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJ3YXNtVHlwZXMiLCJSZWdpc3RyeSIsInMiLCJpYmNUeXBlcyIsImFzc2VydCIsIkJ1ZmZlciIsIkJhc2VBY2NvdW50IiwiTXNnVXBkYXRlUGFyYW1zIiwiQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwiLCJNc2dDb21tdW5pdHlQb29sU3BlbmQiLCJNc2dFeGVjTGVnYWN5Q29udGVudCIsIlRleHRQcm9wb3NhbCIsIlBhcmFtZXRlckNoYW5nZVByb3Bvc2FsIiwiTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiIsIk1zZ1NvZnR3YXJlVXBncmFkZSIsIlNvZnR3YXJlVXBncmFkZVByb3Bvc2FsIiwiQ2xlYXJBZG1pblByb3Bvc2FsIiwiRXhlY3V0ZUNvbnRyYWN0UHJvcG9zYWwiLCJJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwiLCJNaWdyYXRlQ29udHJhY3RQcm9wb3NhbCIsIlBpbkNvZGVzUHJvcG9zYWwiLCJTdG9yZUNvZGVQcm9wb3NhbCIsIlVucGluQ29kZXNQcm9wb3NhbCIsIlVwZGF0ZUFkbWluUHJvcG9zYWwiLCJVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsIiwiTXNnQ2xlYXJBZG1pbiIsIk1zZ0V4ZWN1dGVDb250cmFjdCIsIk1zZ0luc3RhbnRpYXRlQ29udHJhY3QiLCJNc2dNaWdyYXRlQ29udHJhY3QiLCJNc2dTdG9yZUNvZGUiLCJNc2dVcGRhdGVBZG1pbiIsIk1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnIiwiTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCIsIk1zZ1NlbmRUeCIsIkNsaWVudFVwZGF0ZVByb3Bvc2FsIiwiQ2xpZW50U3RhdGUiLCJDb25zZW5zdXNTdGF0ZSIsIkhlYWRlciIsIk1pc2JlaGF2aW91ciIsImJhdGNoIiwiZXRoIiwiZ3Jhdml0eSIsImluaiIsImRlbm9tIiwib3JhY2xlIiwiQ3JlYXRlSG9va1Byb3Bvc2FsIiwiRGVsZXRlSG9va1Byb3Bvc2FsIiwiVXBkYXRlSG9va1Byb3Bvc2FsIiwiU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudCIsInByb3Bvc2FsVHlwZXMiLCJleHRyYUliYyIsInR5cGVzIiwiZGVmYXVsdFJlZ2lzdHJ5VHlwZXMiLCJyZWdpc3RyeSIsImFjY291bnRQYXJzZXIiLCJhY2MiLCJ0eXBlVXJsIiwiYmFzZUFjY291bnQiLCJkZWNvZGUiLCJ2YWx1ZSIsImJhc2VWZXN0aW5nQWNjb3VudCIsImFjY291bnRGcm9tQW55IiwiZW5jb2RlIiwiZmluaXNoIiwiaW5qQWNjb3VudCIsIkV0aEFjY291bnQiLCJiYXNlSW5qQWNjb3VudCIsInB1YktleSIsImFkZHJlc3MiLCJwdWJrZXkiLCJ0eXBlIiwiZnJvbSIsInRvU3RyaW5nIiwiYWNjb3VudE51bWJlciIsIk51bWJlciIsInNlcXVlbmNlIiwiYWNjb3VudCIsImJhc2VFdGhBY2NvdW50IiwicHViS2V5RXRoIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFTLFFBQVEsMENBQTBDO0FBQ3BFLFNBQVNDLFFBQVEsUUFBUSx3QkFBd0I7QUFDakQsWUFBWUMsT0FBTyxtQkFBbUI7QUFDdEMsU0FBU0MsUUFBUSxRQUFRLGlDQUFpQztBQUMxRCxTQUFTQyxNQUFNLFFBQVEsZ0JBQWdCO0FBQ3ZDLFNBQVNDLE1BQU0sUUFBUSxVQUFVO0FBQ2pDLFNBQVNDLFdBQVcsUUFBUSx3Q0FBd0M7QUFDcEUsU0FBU0MsZUFBZSxRQUFRLHNDQUFzQztBQUN0RSxTQUFTQywwQkFBMEIsUUFBUSx3REFBd0Q7QUFDbkcsU0FBU0MscUJBQXFCLFFBQVEsOENBQThDO0FBQ3BGLFNBQVNDLG9CQUFvQixRQUFRLGdDQUFnQztBQUNyRSxTQUFTQyxZQUFZLFFBQVEsc0NBQXNDO0FBQ25FLFNBQVNDLHVCQUF1QixRQUFRLDRDQUE0QztBQUNwRixTQUFTQyw0QkFBNEIsUUFBUSx5Q0FBeUM7QUFDdEYsU0FBU0Msa0JBQWtCLFFBQVEseUNBQXlDO0FBQzVFLFNBQVNDLHVCQUF1QixRQUFRLDhDQUE4QztBQUN0RixTQUNFQyxrQkFBa0IsRUFDbEJDLHVCQUF1QixFQUN2QkMsMkJBQTJCLEVBQzNCQyx1QkFBdUIsRUFDdkJDLGdCQUFnQixFQUNoQkMsaUJBQWlCLEVBQ2pCQyxrQkFBa0IsRUFDbEJDLG1CQUFtQixFQUNuQkMsK0JBQStCLFFBQzFCLHlDQUF5QztBQUNoRCxTQUNFQyxhQUFhLEVBQ2JDLGtCQUFrQixFQUNsQkMsc0JBQXNCLEVBQ3RCQyxrQkFBa0IsRUFDbEJDLFlBQVksRUFDWkMsY0FBYyxFQUNkQywwQkFBMEIsUUFDckIsbUNBQW1DO0FBQzFDLFNBQ0VDLDRCQUE0QixFQUM1QkMsU0FBUyxRQUNKLHFFQUFxRTtBQUM1RSxTQUFTQyxvQkFBb0IsUUFBUSx5Q0FBeUM7QUFDOUUsU0FDRUMsV0FBVyxFQUNYQyxjQUFjLEVBQ2RDLE1BQU0sRUFDTkMsWUFBWSxRQUNQLHlEQUF5RDtBQUNoRSxZQUFZQyxXQUFXLFVBQVU7QUFDakMsWUFBWUMsU0FBUyxvQkFBb0I7QUFDekMsWUFBWUMsYUFBYSxlQUFlO0FBQ3hDLFlBQVlDLFNBQVMsb0JBQW9CO0FBQ3pDLFlBQVlDLFdBQVcsaUJBQWlCO0FBQ3hDLFlBQVlDLFlBQVksa0JBQWtCO0FBQzFDLFNBQ0VDLGtCQUFrQixFQUNsQkMsa0JBQWtCLEVBQ2xCQyxrQkFBa0IsUUFDYixvQ0FBb0M7QUFDM0MsU0FBU0MsNEJBQTRCLFFBQVEsbUJBQW1CO0FBQ2hFLE1BQU1DLGdCQUFnQjtJQUNwQjtRQUNFO1FBQ0F6QztLQUNEO0lBQ0Q7UUFBQztRQUFzREM7S0FBc0I7SUFFN0U7UUFBQztRQUFrREc7S0FBd0I7SUFDM0U7UUFBQztRQUEwQ0w7S0FBZ0I7SUFFM0Q7UUFBQztRQUF1Q2M7S0FBa0I7SUFDMUQ7UUFDRTtRQUNBSDtLQUNEO0lBQ0Q7UUFBQztRQUE2Q0M7S0FBd0I7SUFDdEU7UUFBQztRQUF5Q0k7S0FBb0I7SUFDOUQ7UUFBQztRQUF3Q1A7S0FBbUI7SUFDNUQ7UUFBQztRQUFzQ0k7S0FBaUI7SUFDeEQ7UUFBQztRQUF3Q0U7S0FBbUI7SUFDNUQ7UUFBQztRQUE2Q0w7S0FBd0I7SUFDdEU7UUFDRTtRQUNBTztLQUNEO0lBQ0Q7UUFBQztRQUFrQ0s7S0FBYTtJQUNoRDtRQUFDO1FBQTRDRjtLQUF1QjtJQUNwRTtRQUFDO1FBQXdDQztLQUFtQjtJQUM1RDtRQUFDO1FBQW9DRTtLQUFlO0lBQ3BEO1FBQUM7UUFBbUNMO0tBQWM7SUFDbEQsa0RBQWtEO0lBQ2xELHNEQUFzRDtJQUN0RDtRQUFDO1FBQXdDQztLQUFtQjtJQUM1RDtRQUFDO1FBQWdESztLQUEyQjtJQUU1RTtRQUFDO1FBQW1EaEI7S0FBd0I7SUFDNUU7UUFBQztRQUE4Q0Q7S0FBbUI7SUFDbEU7UUFBQztRQUF3QytCO0tBQW1CO0lBQzVEO1FBQUM7UUFBd0NFO0tBQW1CO0lBQzVEO1FBQUM7UUFBd0NEO0tBQW1CO0lBQzVEO1FBQUM7UUFBb0NuQztLQUFhO0lBQ2xEO1FBQUM7UUFBdUNEO0tBQXFCO0lBQzdEO1FBQUM7UUFBNEN3QjtLQUFxQjtDQUNuRTtBQUVELE1BQU1nQixXQUFXO0lBQ2Y7UUFBQztRQUEwQ2I7S0FBTztJQUNsRDtRQUFDO1FBQStDRjtLQUFZO0lBQzVEO1FBQUM7UUFBa0RDO0tBQWU7SUFDbEU7UUFBQztRQUFnREU7S0FBYTtJQUM5RDtRQUNFO1FBQ0FOO0tBQ0Q7SUFDRDtRQUFDO1FBQWlFQztLQUFVO0NBQzdFO0FBRUQsTUFBTWtCLFFBQVE7T0FDVGpELEVBQUVrRCxvQkFBb0I7SUFDekI7UUFDRTtRQUNBdkM7S0FDRDtPQUNFOEIsTUFBTVEsS0FBSztJQUNkLHlCQUF5QjtJQUN6QiwrQkFBK0I7T0FDNUJQLE9BQU9PLEtBQUs7T0FDWm5EO09BQ0FHO09BQ0E4QztPQUNBQztPQUNBVCxRQUFRVSxLQUFLO09BQ2JaLE1BQU1ZLEtBQUs7Q0FDZjtBQUVELE9BQU8sTUFBTUUsV0FBVyxJQUFJcEQsU0FBY2tELE9BQU87QUFFakQsT0FBTyxNQUFNRyxnQkFBaUMsQ0FBQ0M7SUFDN0MsT0FBUUEsSUFBSUMsT0FBTztRQUNqQixLQUFLO2dCQUNpQlI7WUFBcEIsTUFBTVMsZUFBY1QsMERBQUFBLDZCQUE2QlUsTUFBTSxDQUFDSCxJQUFJSSxLQUFLLEVBQzlEQyxrQkFBa0IsY0FERFosOEVBQUFBLHdEQUNHUyxXQUFXO1lBQ2xDckQsT0FBT3FEO1lBQ1AsT0FBT3ZELEVBQUUyRCxjQUFjLENBQUM7Z0JBQ3RCTCxTQUFTO2dCQUNURyxPQUFPckQsWUFBWXdELE1BQU0sQ0FBQ0wsYUFBYU0sTUFBTTtZQUMvQztRQUNGLEtBQUs7WUFDSCxNQUFNQyxhQUFhdEIsSUFBSXVCLFVBQVUsQ0FBQ1AsTUFBTSxDQUFDSCxJQUFJSSxLQUFLO1lBQ2xELE1BQU1PLGlCQUFpQkYsV0FBV1AsV0FBVztZQUM3QyxNQUFNVSxTQUFTRCxlQUFlQyxNQUFNO1lBRXBDLE9BQU87Z0JBQ0xDLFNBQVNGLGVBQWVFLE9BQU87Z0JBQy9CQyxRQUFRRixTQUNKO29CQUNFRyxNQUFNO29CQUNOWCxPQUFPdEQsT0FBT2tFLElBQUksQ0FBQ0osT0FBT1IsS0FBSyxFQUFFYSxRQUFRLENBQUM7Z0JBQzVDLElBQ0E7Z0JBQ0pDLGVBQWVDLE9BQU9SLGVBQWVPLGFBQWE7Z0JBQ2xERSxVQUFVRCxPQUFPUixlQUFlUyxRQUFRO1lBQzFDO1FBRUYsS0FBSztZQUNILE1BQU1DLFVBQVVwQyxJQUFJeUIsVUFBVSxDQUFDUCxNQUFNLENBQUNILElBQUlJLEtBQUs7WUFDL0MsTUFBTWtCLGlCQUFpQkQsUUFBUW5CLFdBQVc7WUFDMUMsTUFBTXFCLFlBQVlELGVBQWVWLE1BQU07WUFFdkMsT0FBTztnQkFDTEMsU0FBU1MsZUFBZVQsT0FBTztnQkFDL0JDLFFBQVFTLFlBQ0o7b0JBQ0VSLE1BQU07b0JBQ05YLE9BQU90RCxPQUFPa0UsSUFBSSxDQUFDTyxVQUFVbkIsS0FBSyxFQUFFYSxRQUFRLENBQUM7Z0JBQy9DLElBQ0E7Z0JBQ0pDLGVBQWVDLE9BQU9HLGVBQWVKLGFBQWE7Z0JBQ2xERSxVQUFVRCxPQUFPRyxlQUFlRixRQUFRO1lBQzFDO1FBQ0Y7WUFDRSxPQUFPekUsRUFBRTJELGNBQWMsQ0FBQ047SUFDNUI7QUFDRixFQUFFIn0=
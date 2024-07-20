import { wasmTypes } from "@cosmjs/cosmwasm-stargate/build/modules";
import { Registry } from "@cosmjs/proto-signing";
import * as s from "@cosmjs/stargate";
import { ibcTypes } from "@cosmjs/stargate/build/modules";
import { assert } from "@cosmjs/utils";
import { Buffer } from "buffer";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWdpc3RyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YXNtVHlwZXMgfSBmcm9tIFwiQGNvc21qcy9jb3Ntd2FzbS1zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzXCI7XG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCAqIGFzIHMgZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IGliY1R5cGVzIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGUvYnVpbGQvbW9kdWxlc1wiO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcbmltcG9ydCB7IEJhc2VBY2NvdW50IH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYXV0aC92MWJldGExL2F1dGhcIjtcbmltcG9ydCB7IE1zZ1VwZGF0ZVBhcmFtcyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2JhbmsvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS9kaXN0cmlidXRpb25cIjtcbmltcG9ydCB7IE1zZ0NvbW11bml0eVBvb2xTcGVuZCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2Rpc3RyaWJ1dGlvbi92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBNc2dFeGVjTGVnYWN5Q29udGVudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MS90eFwiO1xuaW1wb3J0IHsgVGV4dFByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZ292L3YxYmV0YTEvZ292XCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3BhcmFtcy92MWJldGExL3BhcmFtc1wiO1xuaW1wb3J0IHsgTXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3N0YWtpbmcvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgTXNnU29mdHdhcmVVcGdyYWRlIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvdXBncmFkZS92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS91cGdyYWRlXCI7XG5pbXBvcnQge1xuICBDbGVhckFkbWluUHJvcG9zYWwsXG4gIEV4ZWN1dGVDb250cmFjdFByb3Bvc2FsLFxuICBJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwsXG4gIE1pZ3JhdGVDb250cmFjdFByb3Bvc2FsLFxuICBQaW5Db2Rlc1Byb3Bvc2FsLFxuICBTdG9yZUNvZGVQcm9wb3NhbCxcbiAgVW5waW5Db2Rlc1Byb3Bvc2FsLFxuICBVcGRhdGVBZG1pblByb3Bvc2FsLFxuICBVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc213YXNtL3dhc20vdjEvcHJvcG9zYWxcIjtcbmltcG9ydCB7XG4gIE1zZ0NsZWFyQWRtaW4sXG4gIE1zZ0V4ZWN1dGVDb250cmFjdCxcbiAgTXNnSW5zdGFudGlhdGVDb250cmFjdCxcbiAgTXNnTWlncmF0ZUNvbnRyYWN0LFxuICBNc2dTdG9yZUNvZGUsXG4gIE1zZ1VwZGF0ZUFkbWluLFxuICBNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntd2FzbS93YXNtL3YxL3R4XCI7XG5pbXBvcnQge1xuICBNc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50LFxuICBNc2dTZW5kVHgsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaWJjL2FwcGxpY2F0aW9ucy9pbnRlcmNoYWluX2FjY291bnRzL2NvbnRyb2xsZXIvdjEvdHhcIjtcbmltcG9ydCB7IENsaWVudFVwZGF0ZVByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvY29yZS9jbGllbnQvdjEvY2xpZW50XCI7XG5pbXBvcnQge1xuICBDbGllbnRTdGF0ZSxcbiAgQ29uc2Vuc3VzU3RhdGUsXG4gIEhlYWRlcixcbiAgTWlzYmVoYXZpb3VyLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9saWdodGNsaWVudHMvdGVuZGVybWludC92MS90ZW5kZXJtaW50XCI7XG5pbXBvcnQgKiBhcyBiYXRjaCBmcm9tIFwiLi9iYXRjaFwiO1xuaW1wb3J0ICogYXMgZXRoIGZyb20gXCIuL2V0aGVybWludC90eXBlc1wiO1xuaW1wb3J0ICogYXMgZ3Jhdml0eSBmcm9tIFwiLi9ncmF2aXR5L3YxXCI7XG5pbXBvcnQgKiBhcyBpbmogZnJvbSBcIi4vaW5qZWN0aXZlL3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBkZW5vbSBmcm9tIFwiLi9rdWppcmEvZGVub21cIjtcbmltcG9ydCAqIGFzIG9yYWNsZSBmcm9tIFwiLi9rdWppcmEvb3JhY2xlXCI7XG5pbXBvcnQge1xuICBDcmVhdGVIb29rUHJvcG9zYWwsXG4gIERlbGV0ZUhvb2tQcm9wb3NhbCxcbiAgVXBkYXRlSG9va1Byb3Bvc2FsLFxufSBmcm9tIFwiLi9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL3Byb3Bvc2FsXCI7XG5pbXBvcnQgeyBTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IH0gZnJvbSBcIi4vc3RyaWRlL3Zlc3RpbmdcIjtcbmNvbnN0IHByb3Bvc2FsVHlwZXMgPSBbXG4gIFtcbiAgICBcIi9jb3Ntb3MuZGlzdHJpYnV0aW9uLnYxYmV0YTEuQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWxcIixcbiAgICBDb21tdW5pdHlQb29sU3BlbmRQcm9wb3NhbCxcbiAgXSxcbiAgW1wiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Nc2dDb21tdW5pdHlQb29sU3BlbmRcIiwgTXNnQ29tbXVuaXR5UG9vbFNwZW5kXSxcblxuICBbXCIvY29zbW9zLnBhcmFtcy52MWJldGExLlBhcmFtZXRlckNoYW5nZVByb3Bvc2FsXCIsIFBhcmFtZXRlckNoYW5nZVByb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy5wYXJhbXMudjFiZXRhMS5Nc2dVcGRhdGVQYXJhbXNcIiwgTXNnVXBkYXRlUGFyYW1zXSxcblxuICBbXCIvY29zbXdhc20ud2FzbS52MS5TdG9yZUNvZGVQcm9wb3NhbFwiLCBTdG9yZUNvZGVQcm9wb3NhbF0sXG4gIFtcbiAgICBcIi9jb3Ntd2FzbS53YXNtLnYxLkluc3RhbnRpYXRlQ29udHJhY3RQcm9wb3NhbFwiLFxuICAgIEluc3RhbnRpYXRlQ29udHJhY3RQcm9wb3NhbCxcbiAgXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTWlncmF0ZUNvbnRyYWN0UHJvcG9zYWxcIiwgTWlncmF0ZUNvbnRyYWN0UHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5VcGRhdGVBZG1pblByb3Bvc2FsXCIsIFVwZGF0ZUFkbWluUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5DbGVhckFkbWluUHJvcG9zYWxcIiwgQ2xlYXJBZG1pblByb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuUGluQ29kZXNQcm9wb3NhbFwiLCBQaW5Db2Rlc1Byb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuVW5waW5Db2Rlc1Byb3Bvc2FsXCIsIFVucGluQ29kZXNQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLkV4ZWN1dGVDb250cmFjdFByb3Bvc2FsXCIsIEV4ZWN1dGVDb250cmFjdFByb3Bvc2FsXSxcbiAgW1xuICAgIFwiL2Nvc213YXNtLndhc20udjEuVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbFwiLFxuICAgIFVwZGF0ZUluc3RhbnRpYXRlQ29uZmlnUHJvcG9zYWwsXG4gIF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1N0b3JlQ29kZVwiLCBNc2dTdG9yZUNvZGVdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dJbnN0YW50aWF0ZUNvbnRyYWN0XCIsIE1zZ0luc3RhbnRpYXRlQ29udHJhY3RdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dNaWdyYXRlQ29udHJhY3RcIiwgTXNnTWlncmF0ZUNvbnRyYWN0XSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnVXBkYXRlQWRtaW5cIiwgTXNnVXBkYXRlQWRtaW5dLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dDbGVhckFkbWluXCIsIE1zZ0NsZWFyQWRtaW5dLFxuICAvLyBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dQaW5Db2Rlc1wiLCBNc2dQaW5Db2Rlc10sXG4gIC8vIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VucGluQ29kZXNcIiwgTXNnVW5waW5Db2Rlc10sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0V4ZWN1dGVDb250cmFjdFwiLCBNc2dFeGVjdXRlQ29udHJhY3RdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1wiLCBNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ10sXG5cbiAgW1wiL2Nvc21vcy51cGdyYWRlLnYxYmV0YTEuU29mdHdhcmVVcGdyYWRlUHJvcG9zYWxcIiwgU29mdHdhcmVVcGdyYWRlUHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLnVwZ3JhZGUudjFiZXRhMS5Nc2dTb2Z0d2FyZVVwZ3JhZGVcIiwgTXNnU29mdHdhcmVVcGdyYWRlXSxcbiAgW1wiL2t1amlyYS5zY2hlZHVsZXIuQ3JlYXRlSG9va1Byb3Bvc2FsXCIsIENyZWF0ZUhvb2tQcm9wb3NhbF0sXG4gIFtcIi9rdWppcmEuc2NoZWR1bGVyLlVwZGF0ZUhvb2tQcm9wb3NhbFwiLCBVcGRhdGVIb29rUHJvcG9zYWxdLFxuICBbXCIva3VqaXJhLnNjaGVkdWxlci5EZWxldGVIb29rUHJvcG9zYWxcIiwgRGVsZXRlSG9va1Byb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy5nb3YudjFiZXRhMS5UZXh0UHJvcG9zYWxcIiwgVGV4dFByb3Bvc2FsXSxcbiAgW1wiL2Nvc21vcy5nb3YudjEuTXNnRXhlY0xlZ2FjeUNvbnRlbnRcIiwgTXNnRXhlY0xlZ2FjeUNvbnRlbnRdLFxuICBbXCIvaWJjLmNvcmUuY2xpZW50LnYxLkNsaWVudFVwZGF0ZVByb3Bvc2FsXCIsIENsaWVudFVwZGF0ZVByb3Bvc2FsXSxcbl07XG5cbmNvbnN0IGV4dHJhSWJjID0gW1xuICBbXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLkhlYWRlclwiLCBIZWFkZXJdLFxuICBbXCIvaWJjLmxpZ2h0Y2xpZW50cy50ZW5kZXJtaW50LnYxLkNsaWVudFN0YXRlXCIsIENsaWVudFN0YXRlXSxcbiAgW1wiL2liYy5saWdodGNsaWVudHMudGVuZGVybWludC52MS5Db25zZW5zdXNTdGF0ZVwiLCBDb25zZW5zdXNTdGF0ZV0sXG4gIFtcIi9pYmMubGlnaHRjbGllbnRzLnRlbmRlcm1pbnQudjEuTWlzYmVoYXZpb3VyXCIsIE1pc2JlaGF2aW91cl0sXG4gIFtcbiAgICBcIi9pYmMuYXBwbGljYXRpb25zLmludGVyY2hhaW5fYWNjb3VudHMuY29udHJvbGxlci52MS5Nc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50XCIsXG4gICAgTXNnUmVnaXN0ZXJJbnRlcmNoYWluQWNjb3VudCxcbiAgXSxcbiAgW1wiL2liYy5hcHBsaWNhdGlvbnMuaW50ZXJjaGFpbl9hY2NvdW50cy5jb250cm9sbGVyLnYxLk1zZ1NlbmRUeFwiLCBNc2dTZW5kVHhdLFxuXTtcblxuY29uc3QgdHlwZXMgPSBbXG4gIC4uLnMuZGVmYXVsdFJlZ2lzdHJ5VHlwZXMsXG4gIFtcbiAgICBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb25cIixcbiAgICBNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uLFxuICBdLFxuICAuLi5kZW5vbS50eXBlcyxcbiAgLy8gLi4uZXRoZXJtaW50RXZtLnR5cGVzLFxuICAvLyAuLi5ldGhlcm1pbnRGZWVtYXJrZXQudHlwZXMsXG4gIC4uLm9yYWNsZS50eXBlcyxcbiAgLi4ud2FzbVR5cGVzLFxuICAuLi5pYmNUeXBlcyxcbiAgLi4ucHJvcG9zYWxUeXBlcyxcbiAgLi4uZXh0cmFJYmMsXG4gIC4uLmdyYXZpdHkudHlwZXMsXG4gIC4uLmJhdGNoLnR5cGVzLFxuXTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdHJ5ID0gbmV3IFJlZ2lzdHJ5KDxhbnk+dHlwZXMpO1xuXG5leHBvcnQgY29uc3QgYWNjb3VudFBhcnNlcjogcy5BY2NvdW50UGFyc2VyID0gKGFjYykgPT4ge1xuICBzd2l0Y2ggKGFjYy50eXBlVXJsKSB7XG4gICAgY2FzZSBcIi9zdHJpZGUudmVzdGluZy5TdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50XCI6XG4gICAgICBjb25zdCBiYXNlQWNjb3VudCA9IFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQuZGVjb2RlKGFjYy52YWx1ZSlcbiAgICAgICAgLmJhc2VWZXN0aW5nQWNjb3VudD8uYmFzZUFjY291bnQ7XG4gICAgICBhc3NlcnQoYmFzZUFjY291bnQpO1xuICAgICAgcmV0dXJuIHMuYWNjb3VudEZyb21Bbnkoe1xuICAgICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuYXV0aC52MWJldGExLkJhc2VBY2NvdW50XCIsXG4gICAgICAgIHZhbHVlOiBCYXNlQWNjb3VudC5lbmNvZGUoYmFzZUFjY291bnQpLmZpbmlzaCgpLFxuICAgICAgfSk7XG4gICAgY2FzZSBcIi9pbmplY3RpdmUudHlwZXMudjFiZXRhMS5FdGhBY2NvdW50XCI6XG4gICAgICBjb25zdCBpbmpBY2NvdW50ID0gaW5qLkV0aEFjY291bnQuZGVjb2RlKGFjYy52YWx1ZSBhcyBVaW50OEFycmF5KTtcbiAgICAgIGNvbnN0IGJhc2VJbmpBY2NvdW50ID0gaW5qQWNjb3VudC5iYXNlQWNjb3VudCE7XG4gICAgICBjb25zdCBwdWJLZXkgPSBiYXNlSW5qQWNjb3VudC5wdWJLZXk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZHJlc3M6IGJhc2VJbmpBY2NvdW50LmFkZHJlc3MsXG4gICAgICAgIHB1YmtleTogcHViS2V5XG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiL2luamVjdGl2ZS5jcnlwdG8udjFiZXRhMS5ldGhzZWNwMjU2azEuUHViS2V5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBCdWZmZXIuZnJvbShwdWJLZXkudmFsdWUpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgYWNjb3VudE51bWJlcjogTnVtYmVyKGJhc2VJbmpBY2NvdW50LmFjY291bnROdW1iZXIpLFxuICAgICAgICBzZXF1ZW5jZTogTnVtYmVyKGJhc2VJbmpBY2NvdW50LnNlcXVlbmNlKSxcbiAgICAgIH07XG5cbiAgICBjYXNlIFwiL2V0aGVybWludC50eXBlcy52MS5FdGhBY2NvdW50XCI6XG4gICAgICBjb25zdCBhY2NvdW50ID0gZXRoLkV0aEFjY291bnQuZGVjb2RlKGFjYy52YWx1ZSBhcyBVaW50OEFycmF5KTtcbiAgICAgIGNvbnN0IGJhc2VFdGhBY2NvdW50ID0gYWNjb3VudC5iYXNlQWNjb3VudCE7XG4gICAgICBjb25zdCBwdWJLZXlFdGggPSBiYXNlRXRoQWNjb3VudC5wdWJLZXk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZHJlc3M6IGJhc2VFdGhBY2NvdW50LmFkZHJlc3MsXG4gICAgICAgIHB1YmtleTogcHViS2V5RXRoXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiL2V0aGVybWludC5jcnlwdG8udjEuZXRoc2VjcDI1NmsxLlB1YktleVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogQnVmZmVyLmZyb20ocHViS2V5RXRoLnZhbHVlKS50b1N0cmluZyhcImJhc2U2NFwiKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IG51bGwsXG4gICAgICAgIGFjY291bnROdW1iZXI6IE51bWJlcihiYXNlRXRoQWNjb3VudC5hY2NvdW50TnVtYmVyKSxcbiAgICAgICAgc2VxdWVuY2U6IE51bWJlcihiYXNlRXRoQWNjb3VudC5zZXF1ZW5jZSksXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcy5hY2NvdW50RnJvbUFueShhY2MpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIndhc21UeXBlcyIsIlJlZ2lzdHJ5IiwicyIsImliY1R5cGVzIiwiYXNzZXJ0IiwiQnVmZmVyIiwiQmFzZUFjY291bnQiLCJNc2dVcGRhdGVQYXJhbXMiLCJDb21tdW5pdHlQb29sU3BlbmRQcm9wb3NhbCIsIk1zZ0NvbW11bml0eVBvb2xTcGVuZCIsIk1zZ0V4ZWNMZWdhY3lDb250ZW50IiwiVGV4dFByb3Bvc2FsIiwiUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWwiLCJNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uIiwiTXNnU29mdHdhcmVVcGdyYWRlIiwiU29mdHdhcmVVcGdyYWRlUHJvcG9zYWwiLCJDbGVhckFkbWluUHJvcG9zYWwiLCJFeGVjdXRlQ29udHJhY3RQcm9wb3NhbCIsIkluc3RhbnRpYXRlQ29udHJhY3RQcm9wb3NhbCIsIk1pZ3JhdGVDb250cmFjdFByb3Bvc2FsIiwiUGluQ29kZXNQcm9wb3NhbCIsIlN0b3JlQ29kZVByb3Bvc2FsIiwiVW5waW5Db2Rlc1Byb3Bvc2FsIiwiVXBkYXRlQWRtaW5Qcm9wb3NhbCIsIlVwZGF0ZUluc3RhbnRpYXRlQ29uZmlnUHJvcG9zYWwiLCJNc2dDbGVhckFkbWluIiwiTXNnRXhlY3V0ZUNvbnRyYWN0IiwiTXNnSW5zdGFudGlhdGVDb250cmFjdCIsIk1zZ01pZ3JhdGVDb250cmFjdCIsIk1zZ1N0b3JlQ29kZSIsIk1zZ1VwZGF0ZUFkbWluIiwiTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWciLCJNc2dSZWdpc3RlckludGVyY2hhaW5BY2NvdW50IiwiTXNnU2VuZFR4IiwiQ2xpZW50VXBkYXRlUHJvcG9zYWwiLCJDbGllbnRTdGF0ZSIsIkNvbnNlbnN1c1N0YXRlIiwiSGVhZGVyIiwiTWlzYmVoYXZpb3VyIiwiYmF0Y2giLCJldGgiLCJncmF2aXR5IiwiaW5qIiwiZGVub20iLCJvcmFjbGUiLCJDcmVhdGVIb29rUHJvcG9zYWwiLCJEZWxldGVIb29rUHJvcG9zYWwiLCJVcGRhdGVIb29rUHJvcG9zYWwiLCJTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IiwicHJvcG9zYWxUeXBlcyIsImV4dHJhSWJjIiwidHlwZXMiLCJkZWZhdWx0UmVnaXN0cnlUeXBlcyIsInJlZ2lzdHJ5IiwiYWNjb3VudFBhcnNlciIsImFjYyIsInR5cGVVcmwiLCJiYXNlQWNjb3VudCIsImRlY29kZSIsInZhbHVlIiwiYmFzZVZlc3RpbmdBY2NvdW50IiwiYWNjb3VudEZyb21BbnkiLCJlbmNvZGUiLCJmaW5pc2giLCJpbmpBY2NvdW50IiwiRXRoQWNjb3VudCIsImJhc2VJbmpBY2NvdW50IiwicHViS2V5IiwiYWRkcmVzcyIsInB1YmtleSIsInR5cGUiLCJmcm9tIiwidG9TdHJpbmciLCJhY2NvdW50TnVtYmVyIiwiTnVtYmVyIiwic2VxdWVuY2UiLCJhY2NvdW50IiwiYmFzZUV0aEFjY291bnQiLCJwdWJLZXlFdGgiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBUSwwQ0FBMEM7QUFDcEUsU0FBU0MsUUFBUSxRQUFRLHdCQUF3QjtBQUNqRCxZQUFZQyxPQUFPLG1CQUFtQjtBQUN0QyxTQUFTQyxRQUFRLFFBQVEsaUNBQWlDO0FBQzFELFNBQVNDLE1BQU0sUUFBUSxnQkFBZ0I7QUFDdkMsU0FBU0MsTUFBTSxRQUFRLFNBQVM7QUFDaEMsU0FBU0MsV0FBVyxRQUFRLHdDQUF3QztBQUNwRSxTQUFTQyxlQUFlLFFBQVEsc0NBQXNDO0FBQ3RFLFNBQVNDLDBCQUEwQixRQUFRLHdEQUF3RDtBQUNuRyxTQUFTQyxxQkFBcUIsUUFB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
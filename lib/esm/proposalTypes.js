import { MsgUpdateParams } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpend } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgExecLegacyContent } from "cosmjs-types/cosmos/gov/v1/tx";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { MsgSoftwareUpgrade } from "cosmjs-types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { ClearAdminProposal, ExecuteContractProposal, InstantiateContractProposal, MigrateContractProposal, PinCodesProposal, StoreCodeProposal, UnpinCodesProposal, UpdateAdminProposal, UpdateInstantiateConfigProposal } from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import { CreateHookProposal, DeleteHookProposal, UpdateHookProposal } from "./kujira/scheduler/types/proposal";
export const proposalTypes = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9wb3NhbFR5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1zZ1VwZGF0ZVBhcmFtcyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2JhbmsvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS9kaXN0cmlidXRpb25cIjtcbmltcG9ydCB7IE1zZ0NvbW11bml0eVBvb2xTcGVuZCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2Rpc3RyaWJ1dGlvbi92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBNc2dFeGVjTGVnYWN5Q29udGVudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MS90eFwiO1xuaW1wb3J0IHsgVGV4dFByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZ292L3YxYmV0YTEvZ292XCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3BhcmFtcy92MWJldGExL3BhcmFtc1wiO1xuaW1wb3J0IHsgTXNnU29mdHdhcmVVcGdyYWRlIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvdXBncmFkZS92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS91cGdyYWRlXCI7XG5pbXBvcnQge1xuICBDbGVhckFkbWluUHJvcG9zYWwsXG4gIEV4ZWN1dGVDb250cmFjdFByb3Bvc2FsLFxuICBJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwsXG4gIE1pZ3JhdGVDb250cmFjdFByb3Bvc2FsLFxuICBQaW5Db2Rlc1Byb3Bvc2FsLFxuICBTdG9yZUNvZGVQcm9wb3NhbCxcbiAgVW5waW5Db2Rlc1Byb3Bvc2FsLFxuICBVcGRhdGVBZG1pblByb3Bvc2FsLFxuICBVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc213YXNtL3dhc20vdjEvcHJvcG9zYWxcIjtcbmltcG9ydCB7XG4gIE1zZ0NsZWFyQWRtaW4sXG4gIE1zZ0V4ZWN1dGVDb250cmFjdCxcbiAgTXNnSW5zdGFudGlhdGVDb250cmFjdCxcbiAgTXNnTWlncmF0ZUNvbnRyYWN0LFxuICBNc2dTdG9yZUNvZGUsXG4gIE1zZ1VwZGF0ZUFkbWluLFxuICBNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntd2FzbS93YXNtL3YxL3R4XCI7XG5pbXBvcnQgeyBDbGllbnRVcGRhdGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvaWJjL2NvcmUvY2xpZW50L3YxL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlSG9va1Byb3Bvc2FsLFxuICBEZWxldGVIb29rUHJvcG9zYWwsXG4gIFVwZGF0ZUhvb2tQcm9wb3NhbCxcbn0gZnJvbSBcIi4va3VqaXJhL3NjaGVkdWxlci90eXBlcy9wcm9wb3NhbFwiO1xuXG5leHBvcnQgY29uc3QgcHJvcG9zYWxUeXBlcyA9IFtcbiAgW1xuICAgIFwiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Db21tdW5pdHlQb29sU3BlbmRQcm9wb3NhbFwiLFxuICAgIENvbW11bml0eVBvb2xTcGVuZFByb3Bvc2FsLFxuICBdLFxuICBbXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ0NvbW11bml0eVBvb2xTcGVuZFwiLCBNc2dDb21tdW5pdHlQb29sU3BlbmRdLFxuXG4gIFtcIi9jb3Ntb3MucGFyYW1zLnYxYmV0YTEuUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWxcIiwgUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLnBhcmFtcy52MWJldGExLk1zZ1VwZGF0ZVBhcmFtc1wiLCBNc2dVcGRhdGVQYXJhbXNdLFxuXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlN0b3JlQ29kZVByb3Bvc2FsXCIsIFN0b3JlQ29kZVByb3Bvc2FsXSxcbiAgW1xuICAgIFwiL2Nvc213YXNtLndhc20udjEuSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsXCIsXG4gICAgSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsLFxuICBdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5NaWdyYXRlQ29udHJhY3RQcm9wb3NhbFwiLCBNaWdyYXRlQ29udHJhY3RQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlVwZGF0ZUFkbWluUHJvcG9zYWxcIiwgVXBkYXRlQWRtaW5Qcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLkNsZWFyQWRtaW5Qcm9wb3NhbFwiLCBDbGVhckFkbWluUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5QaW5Db2Rlc1Byb3Bvc2FsXCIsIFBpbkNvZGVzUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5VbnBpbkNvZGVzUHJvcG9zYWxcIiwgVW5waW5Db2Rlc1Byb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuRXhlY3V0ZUNvbnRyYWN0UHJvcG9zYWxcIiwgRXhlY3V0ZUNvbnRyYWN0UHJvcG9zYWxdLFxuICBbXG4gICAgXCIvY29zbXdhc20ud2FzbS52MS5VcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsXCIsXG4gICAgVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbCxcbiAgXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnU3RvcmVDb2RlXCIsIE1zZ1N0b3JlQ29kZV0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0luc3RhbnRpYXRlQ29udHJhY3RcIiwgTXNnSW5zdGFudGlhdGVDb250cmFjdF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ01pZ3JhdGVDb250cmFjdFwiLCBNc2dNaWdyYXRlQ29udHJhY3RdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVcGRhdGVBZG1pblwiLCBNc2dVcGRhdGVBZG1pbl0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0NsZWFyQWRtaW5cIiwgTXNnQ2xlYXJBZG1pbl0sXG4gIC8vIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1BpbkNvZGVzXCIsIE1zZ1BpbkNvZGVzXSxcbiAgLy8gW1wiL2Nvc213YXNtLndhc20udjEuTXNnVW5waW5Db2Rlc1wiLCBNc2dVbnBpbkNvZGVzXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnRXhlY3V0ZUNvbnRyYWN0XCIsIE1zZ0V4ZWN1dGVDb250cmFjdF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnXCIsIE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnXSxcblxuICBbXCIvY29zbW9zLnVwZ3JhZGUudjFiZXRhMS5Tb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbFwiLCBTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MudXBncmFkZS52MWJldGExLk1zZ1NvZnR3YXJlVXBncmFkZVwiLCBNc2dTb2Z0d2FyZVVwZ3JhZGVdLFxuICBbXCIva3VqaXJhLnNjaGVkdWxlci5DcmVhdGVIb29rUHJvcG9zYWxcIiwgQ3JlYXRlSG9va1Byb3Bvc2FsXSxcbiAgW1wiL2t1amlyYS5zY2hlZHVsZXIuVXBkYXRlSG9va1Byb3Bvc2FsXCIsIFVwZGF0ZUhvb2tQcm9wb3NhbF0sXG4gIFtcIi9rdWppcmEuc2NoZWR1bGVyLkRlbGV0ZUhvb2tQcm9wb3NhbFwiLCBEZWxldGVIb29rUHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLmdvdi52MWJldGExLlRleHRQcm9wb3NhbFwiLCBUZXh0UHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLmdvdi52MS5Nc2dFeGVjTGVnYWN5Q29udGVudFwiLCBNc2dFeGVjTGVnYWN5Q29udGVudF0sXG4gIFtcIi9pYmMuY29yZS5jbGllbnQudjEuQ2xpZW50VXBkYXRlUHJvcG9zYWxcIiwgQ2xpZW50VXBkYXRlUHJvcG9zYWxdLFxuXTtcbiJdLCJuYW1lcyI6WyJNc2dVcGRhdGVQYXJhbXMiLCJDb21tdW5pdHlQb29sU3BlbmRQcm9wb3NhbCIsIk1zZ0NvbW11bml0eVBvb2xTcGVuZCIsIk1zZ0V4ZWNMZWdhY3lDb250ZW50IiwiVGV4dFByb3Bvc2FsIiwiUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWwiLCJNc2dTb2Z0d2FyZVVwZ3JhZGUiLCJTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbCIsIkNsZWFyQWRtaW5Qcm9wb3NhbCIsIkV4ZWN1dGVDb250cmFjdFByb3Bvc2FsIiwiSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsIiwiTWlncmF0ZUNvbnRyYWN0UHJvcG9zYWwiLCJQaW5Db2Rlc1Byb3Bvc2FsIiwiU3RvcmVDb2RlUHJvcG9zYWwiLCJVbnBpbkNvZGVzUHJvcG9zYWwiLCJVcGRhdGVBZG1pblByb3Bvc2FsIiwiVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbCIsIk1zZ0NsZWFyQWRtaW4iLCJNc2dFeGVjdXRlQ29udHJhY3QiLCJNc2dJbnN0YW50aWF0ZUNvbnRyYWN0IiwiTXNnTWlncmF0ZUNvbnRyYWN0IiwiTXNnU3RvcmVDb2RlIiwiTXNnVXBkYXRlQWRtaW4iLCJNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyIsIkNsaWVudFVwZGF0ZVByb3Bvc2FsIiwiQ3JlYXRlSG9va1Byb3Bvc2FsIiwiRGVsZXRlSG9va1Byb3Bvc2FsIiwiVXBkYXRlSG9va1Byb3Bvc2FsIiwicHJvcG9zYWxUeXBlcyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBZSxRQUFRLHNDQUFzQztBQUN0RSxTQUFTQywwQkFBMEIsUUFBUSx3REFBd0Q7QUFDbkcsU0FBU0MscUJBQXFCLFFBQVEsOENBQThDO0FBQ3BGLFNBQVNDLG9CQUFvQixRQUFRLGdDQUFnQztBQUNyRSxTQUFTQyxZQUFZLFFBQVEsc0NBQXNDO0FBQ25FLFNBQVNDLHVCQUF1QixRQUFRLDRDQUE0QztBQUNwRixTQUFTQyxrQkFBa0IsUUFBUSx5Q0FBeUM7QUFDNUUsU0FBU0MsdUJBQXVCLFFBQVEsOENBQThDO0FBQ3RGLFNBQ0VDLGtCQUFrQixFQUNsQkMsdUJBQXVCLEVBQ3ZCQywyQkFBMkIsRUFDM0JDLHVCQUF1QixFQUN2QkMsZ0JBQWdCLEVBQ2hCQyxpQkFBaUIsRUFDakJDLGtCQUFrQixFQUNsQkMsbUJBQW1CLEVBQ25CQywrQkFBK0IsUUFDMUIseUNBQXlDO0FBQ2hELFNBQ0VDLGFBQWEsRUFDYkMsa0JBQWtCLEVBQ2xCQyxzQkFBc0IsRUFDdEJDLGtCQUFrQixFQUNsQkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLDBCQUEwQixRQUNyQixtQ0FBbUM7QUFDMUMsU0FBU0Msb0JBQW9CLFFBQVEseUNBQXlDO0FBQzlFLFNBQ0VDLGtCQUFrQixFQUNsQkMsa0JBQWtCLEVBQ2xCQyxrQkFBa0IsUUFDYixvQ0FBb0M7QUFFM0MsT0FBTyxNQUFNQyxnQkFBZ0I7SUFDM0I7UUFDRTtRQUNBM0I7S0FDRDtJQUNEO1FBQUM7UUFBc0RDO0tBQXNCO0lBRTdFO1FBQUM7UUFBa0RHO0tBQXdCO0lBQzNFO1FBQUM7UUFBMENMO0tBQWdCO0lBRTNEO1FBQUM7UUFBdUNhO0tBQWtCO0lBQzFEO1FBQ0U7UUFDQUg7S0FDRDtJQUNEO1FBQUM7UUFBNkNDO0tBQXdCO0lBQ3RFO1FBQUM7UUFBeUNJO0tBQW9CO0lBQzlEO1FBQUM7UUFBd0NQO0tBQW1CO0lBQzVEO1FBQUM7UUFBc0NJO0tBQWlCO0lBQ3hEO1FBQUM7UUFBd0NFO0tBQW1CO0lBQzVEO1FBQUM7UUFBNkNMO0tBQXdCO0lBQ3RFO1FBQ0U7UUFDQU87S0FDRDtJQUNEO1FBQUM7UUFBa0NLO0tBQWE7SUFDaEQ7UUFBQztRQUE0Q0Y7S0FBdUI7SUFDcEU7UUFBQztRQUF3Q0M7S0FBbUI7SUFDNUQ7UUFBQztRQUFvQ0U7S0FBZTtJQUNwRDtRQUFDO1FBQW1DTDtLQUFjO0lBQ2xELGtEQUFrRDtJQUNsRCxzREFBc0Q7SUFDdEQ7UUFBQztRQUF3Q0M7S0FBbUI7SUFDNUQ7UUFBQztRQUFnREs7S0FBMkI7SUFFNUU7UUFBQztRQUFtRGhCO0tBQXdCO0lBQzVFO1FBQUM7UUFBOENEO0tBQW1CO0lBQ2xFO1FBQUM7UUFBd0NtQjtLQUFtQjtJQUM1RDtRQUFDO1FBQXdDRTtLQUFtQjtJQUM1RDtRQUFDO1FBQXdDRDtLQUFtQjtJQUM1RDtRQUFDO1FBQW9DdEI7S0FBYTtJQUNsRDtRQUFDO1FBQXVDRDtLQUFxQjtJQUM3RDtRQUFDO1FBQTRDcUI7S0FBcUI7Q0FDbkUsQ0FBQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "proposalTypes", {
    enumerable: true,
    get: function() {
        return proposalTypes;
    }
});
const _tx = require("cosmjs-types/cosmos/bank/v1beta1/tx");
const _distribution = require("cosmjs-types/cosmos/distribution/v1beta1/distribution");
const _tx1 = require("cosmjs-types/cosmos/distribution/v1beta1/tx");
const _tx2 = require("cosmjs-types/cosmos/gov/v1/tx");
const _gov = require("cosmjs-types/cosmos/gov/v1beta1/gov");
const _params = require("cosmjs-types/cosmos/params/v1beta1/params");
const _tx3 = require("cosmjs-types/cosmos/upgrade/v1beta1/tx");
const _upgrade = require("cosmjs-types/cosmos/upgrade/v1beta1/upgrade");
const _proposal = require("cosmjs-types/cosmwasm/wasm/v1/proposal");
const _tx4 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const _client = require("cosmjs-types/ibc/core/client/v1/client");
const _proposal1 = require("./kujira/scheduler/types/proposal");
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
        _tx4.MsgStoreCode
    ],
    [
        "/cosmwasm.wasm.v1.MsgInstantiateContract",
        _tx4.MsgInstantiateContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgMigrateContract",
        _tx4.MsgMigrateContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        _tx4.MsgUpdateAdmin
    ],
    [
        "/cosmwasm.wasm.v1.MsgClearAdmin",
        _tx4.MsgClearAdmin
    ],
    // ["/cosmwasm.wasm.v1.MsgPinCodes", MsgPinCodes],
    // ["/cosmwasm.wasm.v1.MsgUnpinCodes", MsgUnpinCodes],
    [
        "/cosmwasm.wasm.v1.MsgExecuteContract",
        _tx4.MsgExecuteContract
    ],
    [
        "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
        _tx4.MsgUpdateInstantiateConfig
    ],
    [
        "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
        _upgrade.SoftwareUpgradeProposal
    ],
    [
        "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
        _tx3.MsgSoftwareUpgrade
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9wb3NhbFR5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1zZ1VwZGF0ZVBhcmFtcyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2JhbmsvdjFiZXRhMS90eFwiO1xuaW1wb3J0IHsgQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS9kaXN0cmlidXRpb25cIjtcbmltcG9ydCB7IE1zZ0NvbW11bml0eVBvb2xTcGVuZCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2Rpc3RyaWJ1dGlvbi92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBNc2dFeGVjTGVnYWN5Q29udGVudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MS90eFwiO1xuaW1wb3J0IHsgVGV4dFByb3Bvc2FsIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZ292L3YxYmV0YTEvZ292XCI7XG5pbXBvcnQgeyBQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3BhcmFtcy92MWJldGExL3BhcmFtc1wiO1xuaW1wb3J0IHsgTXNnU29mdHdhcmVVcGdyYWRlIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvdXBncmFkZS92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3VwZ3JhZGUvdjFiZXRhMS91cGdyYWRlXCI7XG5pbXBvcnQge1xuICBDbGVhckFkbWluUHJvcG9zYWwsXG4gIEV4ZWN1dGVDb250cmFjdFByb3Bvc2FsLFxuICBJbnN0YW50aWF0ZUNvbnRyYWN0UHJvcG9zYWwsXG4gIE1pZ3JhdGVDb250cmFjdFByb3Bvc2FsLFxuICBQaW5Db2Rlc1Byb3Bvc2FsLFxuICBTdG9yZUNvZGVQcm9wb3NhbCxcbiAgVW5waW5Db2Rlc1Byb3Bvc2FsLFxuICBVcGRhdGVBZG1pblByb3Bvc2FsLFxuICBVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc213YXNtL3dhc20vdjEvcHJvcG9zYWxcIjtcbmltcG9ydCB7XG4gIE1zZ0NsZWFyQWRtaW4sXG4gIE1zZ0V4ZWN1dGVDb250cmFjdCxcbiAgTXNnSW5zdGFudGlhdGVDb250cmFjdCxcbiAgTXNnTWlncmF0ZUNvbnRyYWN0LFxuICBNc2dTdG9yZUNvZGUsXG4gIE1zZ1VwZGF0ZUFkbWluLFxuICBNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntd2FzbS93YXNtL3YxL3R4XCI7XG5pbXBvcnQgeyBDbGllbnRVcGRhdGVQcm9wb3NhbCB9IGZyb20gXCJjb3NtanMtdHlwZXMvaWJjL2NvcmUvY2xpZW50L3YxL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgQ3JlYXRlSG9va1Byb3Bvc2FsLFxuICBEZWxldGVIb29rUHJvcG9zYWwsXG4gIFVwZGF0ZUhvb2tQcm9wb3NhbCxcbn0gZnJvbSBcIi4va3VqaXJhL3NjaGVkdWxlci90eXBlcy9wcm9wb3NhbFwiO1xuXG5leHBvcnQgY29uc3QgcHJvcG9zYWxUeXBlcyA9IFtcbiAgW1xuICAgIFwiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Db21tdW5pdHlQb29sU3BlbmRQcm9wb3NhbFwiLFxuICAgIENvbW11bml0eVBvb2xTcGVuZFByb3Bvc2FsLFxuICBdLFxuICBbXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ0NvbW11bml0eVBvb2xTcGVuZFwiLCBNc2dDb21tdW5pdHlQb29sU3BlbmRdLFxuXG4gIFtcIi9jb3Ntb3MucGFyYW1zLnYxYmV0YTEuUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWxcIiwgUGFyYW1ldGVyQ2hhbmdlUHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLnBhcmFtcy52MWJldGExLk1zZ1VwZGF0ZVBhcmFtc1wiLCBNc2dVcGRhdGVQYXJhbXNdLFxuXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlN0b3JlQ29kZVByb3Bvc2FsXCIsIFN0b3JlQ29kZVByb3Bvc2FsXSxcbiAgW1xuICAgIFwiL2Nvc213YXNtLndhc20udjEuSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsXCIsXG4gICAgSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsLFxuICBdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5NaWdyYXRlQ29udHJhY3RQcm9wb3NhbFwiLCBNaWdyYXRlQ29udHJhY3RQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLlVwZGF0ZUFkbWluUHJvcG9zYWxcIiwgVXBkYXRlQWRtaW5Qcm9wb3NhbF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLkNsZWFyQWRtaW5Qcm9wb3NhbFwiLCBDbGVhckFkbWluUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5QaW5Db2Rlc1Byb3Bvc2FsXCIsIFBpbkNvZGVzUHJvcG9zYWxdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5VbnBpbkNvZGVzUHJvcG9zYWxcIiwgVW5waW5Db2Rlc1Byb3Bvc2FsXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuRXhlY3V0ZUNvbnRyYWN0UHJvcG9zYWxcIiwgRXhlY3V0ZUNvbnRyYWN0UHJvcG9zYWxdLFxuICBbXG4gICAgXCIvY29zbXdhc20ud2FzbS52MS5VcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1Byb3Bvc2FsXCIsXG4gICAgVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbCxcbiAgXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnU3RvcmVDb2RlXCIsIE1zZ1N0b3JlQ29kZV0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0luc3RhbnRpYXRlQ29udHJhY3RcIiwgTXNnSW5zdGFudGlhdGVDb250cmFjdF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ01pZ3JhdGVDb250cmFjdFwiLCBNc2dNaWdyYXRlQ29udHJhY3RdLFxuICBbXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVcGRhdGVBZG1pblwiLCBNc2dVcGRhdGVBZG1pbl0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0NsZWFyQWRtaW5cIiwgTXNnQ2xlYXJBZG1pbl0sXG4gIC8vIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1BpbkNvZGVzXCIsIE1zZ1BpbkNvZGVzXSxcbiAgLy8gW1wiL2Nvc213YXNtLndhc20udjEuTXNnVW5waW5Db2Rlc1wiLCBNc2dVbnBpbkNvZGVzXSxcbiAgW1wiL2Nvc213YXNtLndhc20udjEuTXNnRXhlY3V0ZUNvbnRyYWN0XCIsIE1zZ0V4ZWN1dGVDb250cmFjdF0sXG4gIFtcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnXCIsIE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnXSxcblxuICBbXCIvY29zbW9zLnVwZ3JhZGUudjFiZXRhMS5Tb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbFwiLCBTb2Z0d2FyZVVwZ3JhZGVQcm9wb3NhbF0sXG4gIFtcIi9jb3Ntb3MudXBncmFkZS52MWJldGExLk1zZ1NvZnR3YXJlVXBncmFkZVwiLCBNc2dTb2Z0d2FyZVVwZ3JhZGVdLFxuICBbXCIva3VqaXJhLnNjaGVkdWxlci5DcmVhdGVIb29rUHJvcG9zYWxcIiwgQ3JlYXRlSG9va1Byb3Bvc2FsXSxcbiAgW1wiL2t1amlyYS5zY2hlZHVsZXIuVXBkYXRlSG9va1Byb3Bvc2FsXCIsIFVwZGF0ZUhvb2tQcm9wb3NhbF0sXG4gIFtcIi9rdWppcmEuc2NoZWR1bGVyLkRlbGV0ZUhvb2tQcm9wb3NhbFwiLCBEZWxldGVIb29rUHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLmdvdi52MWJldGExLlRleHRQcm9wb3NhbFwiLCBUZXh0UHJvcG9zYWxdLFxuICBbXCIvY29zbW9zLmdvdi52MS5Nc2dFeGVjTGVnYWN5Q29udGVudFwiLCBNc2dFeGVjTGVnYWN5Q29udGVudF0sXG4gIFtcIi9pYmMuY29yZS5jbGllbnQudjEuQ2xpZW50VXBkYXRlUHJvcG9zYWxcIiwgQ2xpZW50VXBkYXRlUHJvcG9zYWxdLFxuXTtcbiJdLCJuYW1lcyI6WyJwcm9wb3NhbFR5cGVzIiwiQ29tbXVuaXR5UG9vbFNwZW5kUHJvcG9zYWwiLCJNc2dDb21tdW5pdHlQb29sU3BlbmQiLCJQYXJhbWV0ZXJDaGFuZ2VQcm9wb3NhbCIsIk1zZ1VwZGF0ZVBhcmFtcyIsIlN0b3JlQ29kZVByb3Bvc2FsIiwiSW5zdGFudGlhdGVDb250cmFjdFByb3Bvc2FsIiwiTWlncmF0ZUNvbnRyYWN0UHJvcG9zYWwiLCJVcGRhdGVBZG1pblByb3Bvc2FsIiwiQ2xlYXJBZG1pblByb3Bvc2FsIiwiUGluQ29kZXNQcm9wb3NhbCIsIlVucGluQ29kZXNQcm9wb3NhbCIsIkV4ZWN1dGVDb250cmFjdFByb3Bvc2FsIiwiVXBkYXRlSW5zdGFudGlhdGVDb25maWdQcm9wb3NhbCIsIk1zZ1N0b3JlQ29kZSIsIk1zZ0luc3RhbnRpYXRlQ29udHJhY3QiLCJNc2dNaWdyYXRlQ29udHJhY3QiLCJNc2dVcGRhdGVBZG1pbiIsIk1zZ0NsZWFyQWRtaW4iLCJNc2dFeGVjdXRlQ29udHJhY3QiLCJNc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZyIsIlNvZnR3YXJlVXBncmFkZVByb3Bvc2FsIiwiTXNnU29mdHdhcmVVcGdyYWRlIiwiQ3JlYXRlSG9va1Byb3Bvc2FsIiwiVXBkYXRlSG9va1Byb3Bvc2FsIiwiRGVsZXRlSG9va1Byb3Bvc2FsIiwiVGV4dFByb3Bvc2FsIiwiTXNnRXhlY0xlZ2FjeUNvbnRlbnQiLCJDbGllbnRVcGRhdGVQcm9wb3NhbCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQ2FBOzs7ZUFBQUE7OztvQkFuQ21COzhCQUNXO3FCQUNMO3FCQUNEO3FCQUNSO3dCQUNXO3FCQUNMO3lCQUNLOzBCQVdqQztxQkFTQTt3QkFDOEI7MkJBSzlCO0FBRUEsTUFBTUEsZ0JBQWdCO0lBQzNCO1FBQ0U7UUFDQUMsd0NBQTBCO0tBQzNCO0lBQ0Q7UUFBQztRQUFzREMsMEJBQXFCO0tBQUM7SUFFN0U7UUFBQztRQUFrREMsK0JBQXVCO0tBQUM7SUFDM0U7UUFBQztRQUEwQ0MsbUJBQWU7S0FBQztJQUUzRDtRQUFDO1FBQXVDQywyQkFBaUI7S0FBQztJQUMxRDtRQUNFO1FBQ0FDLHFDQUEyQjtLQUM1QjtJQUNEO1FBQUM7UUFBNkNDLGlDQUF1QjtLQUFDO0lBQ3RFO1FBQUM7UUFBeUNDLDZCQUFtQjtLQUFDO0lBQzlEO1FBQUM7UUFBd0NDLDRCQUFrQjtLQUFDO0lBQzVEO1FBQUM7UUFBc0NDLDBCQUFnQjtLQUFDO0lBQ3hEO1FBQUM7UUFBd0NDLDRCQUFrQjtLQUFDO0lBQzVEO1FBQUM7UUFBNkNDLGlDQUF1QjtLQUFDO0lBQ3RFO1FBQ0U7UUFDQUMseUNBQStCO0tBQ2hDO0lBQ0Q7UUFBQztRQUFrQ0MsaUJBQVk7S0FBQztJQUNoRDtRQUFDO1FBQTRDQywyQkFBc0I7S0FBQztJQUNwRTtRQUFDO1FBQXdDQyx1QkFBa0I7S0FBQztJQUM1RDtRQUFDO1FBQW9DQyxtQkFBYztLQUFDO0lBQ3BEO1FBQUM7UUFBbUNDLGtCQUFhO0tBQUM7SUFDbEQsa0RBQWtEO0lBQ2xELHNEQUFzRDtJQUN0RDtRQUFDO1FBQXdDQyx1QkFBa0I7S0FBQztJQUM1RDtRQUFDO1FBQWdEQywrQkFBMEI7S0FBQztJQUU1RTtRQUFDO1FBQW1EQyxnQ0FBdUI7S0FBQztJQUM1RTtRQUFDO1FBQThDQyx1QkFBa0I7S0FBQztJQUNsRTtRQUFDO1FBQXdDQyw2QkFBa0I7S0FBQztJQUM1RDtRQUFDO1FBQXdDQyw2QkFBa0I7S0FBQztJQUM1RDtRQUFDO1FBQXdDQyw2QkFBa0I7S0FBQztJQUM1RDtRQUFDO1FBQW9DQyxpQkFBWTtLQUFDO0lBQ2xEO1FBQUM7UUFBdUNDLHlCQUFvQjtLQUFDO0lBQzdEO1FBQUM7UUFBNENDLDRCQUFvQjtLQUFDO0NBQ25FIn0=
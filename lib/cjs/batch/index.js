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
    msg: function() {
        return msg;
    },
    registry: function() {
        return registry;
    },
    types: function() {
        return types;
    }
});
const _protosigning = require("@cosmjs/proto-signing");
const _tx = require("./types/tx");
const types = [
    [
        "/batch.MsgWithdrawAllDelegatorRewards",
        _tx.MsgWithdrawAllDelegatorRewards
    ],
    [
        "/batch.MsgBatchResetDelegation",
        _tx.MsgBatchResetDelegation
    ]
];
const registry = new _protosigning.Registry(types);
const msg = {
    msgWithdrawAllDelegatorRewards: (data)=>({
            typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
            value: _tx.MsgWithdrawAllDelegatorRewards.fromPartial(data)
        }),
    msgBatchResetDelegation: (data)=>({
            typeUrl: "/batch.MsgBatchResetDelegation",
            value: _tx.MsgBatchResetDelegation.fromPartial(data)
        })
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXRjaC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmNvZGVPYmplY3QsIFJlZ2lzdHJ5IH0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHtcbiAgTXNnQmF0Y2hSZXNldERlbGVnYXRpb24sXG4gIE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyxcbn0gZnJvbSBcIi4vdHlwZXMvdHhcIjtcblxuY29uc3QgdHlwZXMgPSBbXG4gIFtcIi9iYXRjaC5Nc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNcIiwgTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzXSxcbiAgW1wiL2JhdGNoLk1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uXCIsIE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uXSxcbl07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSg8YW55PnR5cGVzKTtcblxuY29uc3QgbXNnID0ge1xuICBtc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHM6IChcbiAgICBkYXRhOiBNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNcbiAgKTogRW5jb2RlT2JqZWN0ID0+ICh7XG4gICAgdHlwZVVybDogXCIvYmF0Y2guTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzXCIsXG4gICAgdmFsdWU6IE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcy5mcm9tUGFydGlhbChkYXRhKSxcbiAgfSksXG4gIG1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uOiAoZGF0YTogTXNnQmF0Y2hSZXNldERlbGVnYXRpb24pOiBFbmNvZGVPYmplY3QgPT4gKHtcbiAgICB0eXBlVXJsOiBcIi9iYXRjaC5Nc2dCYXRjaFJlc2V0RGVsZWdhdGlvblwiLFxuICAgIHZhbHVlOiBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvbi5mcm9tUGFydGlhbChkYXRhKSxcbiAgfSksXG59O1xuXG5leHBvcnQgeyBtc2csIHR5cGVzIH07XG4iXSwibmFtZXMiOlsibXNnIiwicmVnaXN0cnkiLCJ0eXBlcyIsIk1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyIsIk1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uIiwiUmVnaXN0cnkiLCJtc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHMiLCJkYXRhIiwidHlwZVVybCIsInZhbHVlIiwiZnJvbVBhcnRpYWwiLCJtc2dCYXRjaFJlc2V0RGVsZWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUEwQlNBLEdBQUc7ZUFBSEE7O0lBZklDLFFBQVE7ZUFBUkE7O0lBZUNDLEtBQUs7ZUFBTEE7Ozs4QkExQnlCO29CQUloQztBQUVQLE1BQU1BLFFBQVE7SUFDWjtRQUFDO1FBQXlDQyxrQ0FBOEI7S0FBQztJQUN6RTtRQUFDO1FBQWtDQywyQkFBdUI7S0FBQztDQUM1RDtBQUVNLE1BQU1ILFdBQVcsSUFBSUksc0JBQVEsQ0FBTUg7QUFFMUMsTUFBTUYsTUFBTTtJQUNWTSxnQ0FBZ0MsQ0FDOUJDLE9BQ2tCLENBQUE7WUFDbEJDLFNBQVM7WUFDVEMsT0FBT04sa0NBQThCLENBQUNPLFdBQVcsQ0FBQ0g7UUFDcEQsQ0FBQTtJQUNBSSx5QkFBeUIsQ0FBQ0osT0FBaUQsQ0FBQTtZQUN6RUMsU0FBUztZQUNUQyxPQUFPTCwyQkFBdUIsQ0FBQ00sV0FBVyxDQUFDSDtRQUM3QyxDQUFBO0FBQ0YifQ==
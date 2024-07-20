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
    MissingWalletError: function() {
        return MissingWalletError;
    },
    OracleExtension: function() {
        return _queries.OracleExtension;
    },
    msg: function() {
        return msg;
    },
    registry: function() {
        return registry;
    },
    setupOracleExtension: function() {
        return _queries.setupOracleExtension;
    },
    types: function() {
        return types;
    }
});
const _protosigning = require("@cosmjs/proto-signing");
const _tx = require("./types/tx");
const _queries = require("./queries");
const types = [
    [
        "/kujira.oracle.MsgAggregateExchangeRateVote",
        _tx.MsgAggregateExchangeRateVote
    ],
    [
        "/kujira.oracle.MsgAggregateExchangeRatePrevote",
        _tx.MsgAggregateExchangeRatePrevote
    ],
    [
        "/kujira.oracle.MsgDelegateFeedConsent",
        _tx.MsgDelegateFeedConsent
    ]
];
const MissingWalletError = new Error("wallet is required");
const registry = new _protosigning.Registry(types);
const msg = {
    msgAggregateExchangeRateVote: (data)=>({
            typeUrl: "/kujira.oracle.MsgAggregateExchangeRateVote",
            value: _tx.MsgAggregateExchangeRateVote.fromPartial(data)
        }),
    msgAggregateExchangeRatePrevote: (data)=>({
            typeUrl: "/kujira.oracle.MsgAggregateExchangeRatePrevote",
            value: _tx.MsgAggregateExchangeRatePrevote.fromPartial(data)
        }),
    msgDelegateFeedConsent: (data)=>({
            typeUrl: "/kujira.oracle.MsgDelegateFeedConsent",
            value: _tx.MsgDelegateFeedConsent.fromPartial(data)
        })
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdHJ5LCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQgeyBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIH0gZnJvbSBcIi4vdHlwZXMvdHhcIjtcbmltcG9ydCB7IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUgfSBmcm9tIFwiLi90eXBlcy90eFwiO1xuaW1wb3J0IHsgTXNnRGVsZWdhdGVGZWVkQ29uc2VudCB9IGZyb20gXCIuL3R5cGVzL3R4XCI7XG5pbXBvcnQgeyBPcmFjbGVFeHRlbnNpb24sIHNldHVwT3JhY2xlRXh0ZW5zaW9uIH0gZnJvbSBcIi4vcXVlcmllc1wiO1xuXG5leHBvcnQgY29uc3QgdHlwZXMgPSBbXG4gIFtcIi9rdWppcmEub3JhY2xlLk1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVcIiwgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZV0sXG4gIFtcbiAgICBcIi9rdWppcmEub3JhY2xlLk1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVcIixcbiAgICBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLFxuICBdLFxuICBbXCIva3VqaXJhLm9yYWNsZS5Nc2dEZWxlZ2F0ZUZlZWRDb25zZW50XCIsIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRdLFxuXTtcbmV4cG9ydCBjb25zdCBNaXNzaW5nV2FsbGV0RXJyb3IgPSBuZXcgRXJyb3IoXCJ3YWxsZXQgaXMgcmVxdWlyZWRcIik7XG5cbmV4cG9ydCBjb25zdCByZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSg8YW55PnR5cGVzKTtcblxuY29uc3QgbXNnID0ge1xuICBtc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlOiAoXG4gICAgZGF0YTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVxuICApOiBFbmNvZGVPYmplY3QgPT4gKHtcbiAgICB0eXBlVXJsOiBcIi9rdWppcmEub3JhY2xlLk1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVcIixcbiAgICB2YWx1ZTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS5mcm9tUGFydGlhbChkYXRhKSxcbiAgfSksXG4gIG1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGU6IChcbiAgICBkYXRhOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlXG4gICk6IEVuY29kZU9iamVjdCA9PiAoe1xuICAgIHR5cGVVcmw6IFwiL2t1amlyYS5vcmFjbGUuTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVwiLFxuICAgIHZhbHVlOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmZyb21QYXJ0aWFsKGRhdGEpLFxuICB9KSxcbiAgbXNnRGVsZWdhdGVGZWVkQ29uc2VudDogKGRhdGE6IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQpOiBFbmNvZGVPYmplY3QgPT4gKHtcbiAgICB0eXBlVXJsOiBcIi9rdWppcmEub3JhY2xlLk1zZ0RlbGVnYXRlRmVlZENvbnNlbnRcIixcbiAgICB2YWx1ZTogTXNnRGVsZWdhdGVGZWVkQ29uc2VudC5mcm9tUGFydGlhbChkYXRhKSxcbiAgfSksXG59O1xuXG5leHBvcnQgeyBtc2csIE9yYWNsZUV4dGVuc2lvbiwgc2V0dXBPcmFjbGVFeHRlbnNpb24gfTtcbiJdLCJuYW1lcyI6WyJNaXNzaW5nV2FsbGV0RXJyb3IiLCJPcmFjbGVFeHRlbnNpb24iLCJtc2ciLCJyZWdpc3RyeSIsInNldHVwT3JhY2xlRXh0ZW5zaW9uIiwidHlwZXMiLCJNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIiwiTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSIsIk1zZ0RlbGVnYXRlRmVlZENvbnNlbnQiLCJFcnJvciIsIlJlZ2lzdHJ5IiwibXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSIsImRhdGEiLCJ0eXBlVXJsIiwidmFsdWUiLCJmcm9tUGFydGlhbCIsIm1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUiLCJtc2dEZWxlZ2F0ZUZlZWRDb25zZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWNhQSxrQkFBa0I7ZUFBbEJBOztJQXVCQ0MsZUFBZTtlQUFmQSx3QkFBZTs7SUFBcEJDLEdBQUc7ZUFBSEE7O0lBckJJQyxRQUFRO2VBQVJBOztJQXFCa0JDLG9CQUFvQjtlQUFwQkEsNkJBQW9COztJQS9CdENDLEtBQUs7ZUFBTEE7Ozs4QkFOMEI7b0JBQ007eUJBR1M7QUFFL0MsTUFBTUEsUUFBUTtJQUNuQjtRQUFDO1FBQStDQyxnQ0FBNEI7S0FBQztJQUM3RTtRQUNFO1FBQ0FDLG1DQUErQjtLQUNoQztJQUNEO1FBQUM7UUFBeUNDLDBCQUFzQjtLQUFDO0NBQ2xFO0FBQ00sTUFBTVIscUJBQXFCLElBQUlTLE1BQU07QUFFckMsTUFBTU4sV0FBVyxJQUFJTyxzQkFBUSxDQUFNTDtBQUUxQyxNQUFNSCxNQUFNO0lBQ1ZTLDhCQUE4QixDQUM1QkMsT0FDa0IsQ0FBQTtZQUNsQkMsU0FBUztZQUNUQyxPQUFPUixnQ0FBNEIsQ0FBQ1MsV0FBVyxDQUFDSDtRQUNsRCxDQUFBO0lBQ0FJLGlDQUFpQyxDQUMvQkosT0FDa0IsQ0FBQTtZQUNsQkMsU0FBUztZQUNUQyxPQUFPUCxtQ0FBK0IsQ0FBQ1EsV0FBVyxDQUFDSDtRQUNyRCxDQUFBO0lBQ0FLLHdCQUF3QixDQUFDTCxPQUFnRCxDQUFBO1lBQ3ZFQyxTQUFTO1lBQ1RDLE9BQU9OLDBCQUFzQixDQUFDTyxXQUFXLENBQUNIO1FBQzVDLENBQUE7QUFDRiJ9
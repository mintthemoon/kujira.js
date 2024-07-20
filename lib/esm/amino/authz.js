import { AcceptedMessageKeysFilter, ContractExecutionAuthorization, MaxFundsLimit } from "cosmjs-types/cosmwasm/wasm/v1/authz";
const grantToAmino = (grant)=>{
    var _grant_expiration, _grant_authorization;
    const expiration = new Date(Math.floor(Number(((_grant_expiration = grant.expiration) === null || _grant_expiration === void 0 ? void 0 : _grant_expiration.seconds) || 0)) * 1000).toISOString().replace(/\.\d+Z/, "Z");
    switch((_grant_authorization = grant.authorization) === null || _grant_authorization === void 0 ? void 0 : _grant_authorization.typeUrl){
        case "/cosmwasm.wasm.v1.ContractExecutionAuthorization":
            const contractExecutionAuthorization = ContractExecutionAuthorization.decode(grant.authorization.value);
            const grants = contractExecutionAuthorization.grants.map((g)=>({
                    contract: g.contract,
                    filter: g.filter && {
                        type: "wasm/AcceptedMessageKeysFilter",
                        value: {
                            keys: AcceptedMessageKeysFilter.decode(g.filter.value).keys
                        }
                    },
                    limit: g.limit && {
                        type: "wasm/MaxFundsLimit",
                        value: {
                            amounts: MaxFundsLimit.decode(g.limit.value).amounts
                        }
                    }
                }));
            return {
                expiration,
                authorization: {
                    type: "wasm/ContractExecutionAuthorization",
                    value: {
                        grants
                    }
                }
            };
        default:
            var _grant_authorization1;
            throw new Error(`${(_grant_authorization1 = grant.authorization) === null || _grant_authorization1 === void 0 ? void 0 : _grant_authorization1.typeUrl} not supported for Ledger`);
    }
};
const grantFromAmino = (grant)=>{
    const expiration = grant.expiration && BigInt(new Date(grant.expiration).getTime() / 1000);
    switch(grant.authorization.type){
        case "wasm/ContractExecutionAuthorization":
            return {
                expiration: expiration ? {
                    seconds: expiration,
                    nanos: 0
                } : undefined,
                authorization: {
                    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization",
                    value: ContractExecutionAuthorization.encode({
                        grants: grant.authorization.value.grants.map((g)=>({
                                contract: g.contract,
                                filter: {
                                    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter",
                                    value: AcceptedMessageKeysFilter.encode({
                                        keys: g.filter.value.keys
                                    }).finish()
                                },
                                limit: {
                                    typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit",
                                    value: MaxFundsLimit.encode({
                                        amounts: g.limit.value.amounts
                                    }).finish()
                                }
                            }))
                    }).finish()
                }
            };
        default:
            var _grant_authorization;
            throw new Error(`${(_grant_authorization = grant.authorization) === null || _grant_authorization === void 0 ? void 0 : _grant_authorization.type} not supported from Ledger`);
    }
};
export function createAuthzAminoConverters() {
    return {
        "/cosmos.authz.v1beta1.MsgGrant": {
            aminoType: "cosmos-sdk/MsgGrant",
            toAmino: ({ granter, grantee, grant })=>({
                    granter: granter,
                    grantee: grantee,
                    grant: grant && grantToAmino(grant)
                }),
            fromAmino: ({ granter, grantee, grant })=>{
                return {
                    granter: granter,
                    grantee: grantee,
                    grant: grantFromAmino(grant)
                };
            }
        },
        "/cosmos.authz.v1beta1.MsgRevoke": {
            aminoType: "cosmos-sdk/MsgRevoke",
            toAmino: ({ granter, grantee, msgTypeUrl })=>({
                    granter: granter,
                    grantee: grantee,
                    msg_type_url: msgTypeUrl
                }),
            fromAmino: ({ granter, grantee, msg_type_url })=>({
                    granter: granter,
                    grantee: grantee,
                    msgTypeUrl: msg_type_url
                })
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWluby9hdXRoei50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbWlub01zZyB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBBbWlub0NvbnZlcnRlcnMsIENvaW4gfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgR3JhbnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9hdXRoei92MWJldGExL2F1dGh6XCI7XG5pbXBvcnQgeyBNc2dHcmFudCwgTXNnUmV2b2tlIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYXV0aHovdjFiZXRhMS90eFwiO1xuaW1wb3J0IHtcbiAgQWNjZXB0ZWRNZXNzYWdlS2V5c0ZpbHRlcixcbiAgQ29udHJhY3RFeGVjdXRpb25BdXRob3JpemF0aW9uLFxuICBNYXhGdW5kc0xpbWl0LFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc213YXNtL3dhc20vdjEvYXV0aHpcIjtcblxudHlwZSBBbWlub0dyYW50ID0ge1xuICBleHBpcmF0aW9uPzogc3RyaW5nO1xuICBhdXRob3JpemF0aW9uOiB7IHR5cGU6IHN0cmluZzsgdmFsdWU6IGFueSB9O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBBbWlub01zZ0dyYW50IGV4dGVuZHMgQW1pbm9Nc2cge1xuICByZWFkb25seSB0eXBlOiBcImNvc21vcy1zZGsvTXNnR3JhbnRcIjtcbiAgcmVhZG9ubHkgdmFsdWU6IHtcbiAgICByZWFkb25seSBncmFudGVyOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZ3JhbnRlZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGdyYW50OiBBbWlub0dyYW50O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFtaW5vTXNnUmV2b2tlIGV4dGVuZHMgQW1pbm9Nc2cge1xuICByZWFkb25seSB0eXBlOiBcImNvc21vcy1zZGsvTXNnUmV2b2tlXCI7XG4gIHJlYWRvbmx5IHZhbHVlOiB7XG4gICAgcmVhZG9ubHkgZ3JhbnRlcjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGdyYW50ZWU6IHN0cmluZztcbiAgICByZWFkb25seSBtc2dfdHlwZV91cmw6IHN0cmluZztcbiAgfTtcbn1cblxuY29uc3QgZ3JhbnRUb0FtaW5vID0gKGdyYW50OiBHcmFudCk6IEFtaW5vR3JhbnQgPT4ge1xuICBjb25zdCBleHBpcmF0aW9uID0gbmV3IERhdGUoXG4gICAgTWF0aC5mbG9vcihOdW1iZXIoZ3JhbnQuZXhwaXJhdGlvbj8uc2Vjb25kcyB8fCAwKSkgKiAxMDAwXG4gIClcbiAgICAudG9JU09TdHJpbmcoKVxuICAgIC5yZXBsYWNlKC9cXC5cXGQrWi8sIFwiWlwiKTtcblxuICBzd2l0Y2ggKGdyYW50LmF1dGhvcml6YXRpb24/LnR5cGVVcmwpIHtcbiAgICBjYXNlIFwiL2Nvc213YXNtLndhc20udjEuQ29udHJhY3RFeGVjdXRpb25BdXRob3JpemF0aW9uXCI6XG4gICAgICBjb25zdCBjb250cmFjdEV4ZWN1dGlvbkF1dGhvcml6YXRpb24gPVxuICAgICAgICBDb250cmFjdEV4ZWN1dGlvbkF1dGhvcml6YXRpb24uZGVjb2RlKGdyYW50LmF1dGhvcml6YXRpb24udmFsdWUpO1xuXG4gICAgICBjb25zdCBncmFudHMgPSBjb250cmFjdEV4ZWN1dGlvbkF1dGhvcml6YXRpb24uZ3JhbnRzLm1hcCgoZykgPT4gKHtcbiAgICAgICAgY29udHJhY3Q6IGcuY29udHJhY3QsXG4gICAgICAgIGZpbHRlcjogZy5maWx0ZXIgJiYge1xuICAgICAgICAgIHR5cGU6IFwid2FzbS9BY2NlcHRlZE1lc3NhZ2VLZXlzRmlsdGVyXCIsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGtleXM6IEFjY2VwdGVkTWVzc2FnZUtleXNGaWx0ZXIuZGVjb2RlKGcuZmlsdGVyLnZhbHVlKS5rZXlzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0OiBnLmxpbWl0ICYmIHtcbiAgICAgICAgICB0eXBlOiBcIndhc20vTWF4RnVuZHNMaW1pdFwiLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBhbW91bnRzOiBNYXhGdW5kc0xpbWl0LmRlY29kZShnLmxpbWl0LnZhbHVlKS5hbW91bnRzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGV4cGlyYXRpb24sXG4gICAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgICB0eXBlOiBcIndhc20vQ29udHJhY3RFeGVjdXRpb25BdXRob3JpemF0aW9uXCIsXG4gICAgICAgICAgdmFsdWU6IHsgZ3JhbnRzIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAke2dyYW50LmF1dGhvcml6YXRpb24/LnR5cGVVcmx9IG5vdCBzdXBwb3J0ZWQgZm9yIExlZGdlcmBcbiAgICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IGdyYW50RnJvbUFtaW5vID0gKGdyYW50OiBBbWlub0dyYW50KTogR3JhbnQgPT4ge1xuICBjb25zdCBleHBpcmF0aW9uID1cbiAgICBncmFudC5leHBpcmF0aW9uICYmIEJpZ0ludChuZXcgRGF0ZShncmFudC5leHBpcmF0aW9uKS5nZXRUaW1lKCkgLyAxMDAwKTtcblxuICBzd2l0Y2ggKGdyYW50LmF1dGhvcml6YXRpb24udHlwZSkge1xuICAgIGNhc2UgXCJ3YXNtL0NvbnRyYWN0RXhlY3V0aW9uQXV0aG9yaXphdGlvblwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJhdGlvbiA/IHsgc2Vjb25kczogZXhwaXJhdGlvbiwgbmFub3M6IDAgfSA6IHVuZGVmaW5lZCxcbiAgICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICAgIHR5cGVVcmw6IFwiL2Nvc213YXNtLndhc20udjEuQ29udHJhY3RFeGVjdXRpb25BdXRob3JpemF0aW9uXCIsXG4gICAgICAgICAgdmFsdWU6IENvbnRyYWN0RXhlY3V0aW9uQXV0aG9yaXphdGlvbi5lbmNvZGUoe1xuICAgICAgICAgICAgZ3JhbnRzOiBncmFudC5hdXRob3JpemF0aW9uLnZhbHVlLmdyYW50cy5tYXAoXG4gICAgICAgICAgICAgIChnOiB7XG4gICAgICAgICAgICAgICAgY29udHJhY3Q6IGFueTtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgdmFsdWU6IHsga2V5czogc3RyaW5nW10gfSB9O1xuICAgICAgICAgICAgICAgIGxpbWl0OiB7IHZhbHVlOiB7IGFtb3VudHM6IENvaW5bXSB9IH07XG4gICAgICAgICAgICAgIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgY29udHJhY3Q6IGcuY29udHJhY3QsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlVXJsOiBcIi9jb3Ntd2FzbS53YXNtLnYxLkFjY2VwdGVkTWVzc2FnZUtleXNGaWx0ZXJcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBBY2NlcHRlZE1lc3NhZ2VLZXlzRmlsdGVyLmVuY29kZSh7XG4gICAgICAgICAgICAgICAgICAgIGtleXM6IGcuZmlsdGVyLnZhbHVlLmtleXMsXG4gICAgICAgICAgICAgICAgICB9KS5maW5pc2goKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbWl0OiB7XG4gICAgICAgICAgICAgICAgICB0eXBlVXJsOiBcIi9jb3Ntd2FzbS53YXNtLnYxLk1heEZ1bmRzTGltaXRcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBNYXhGdW5kc0xpbWl0LmVuY29kZSh7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudHM6IGcubGltaXQudmFsdWUuYW1vdW50cyxcbiAgICAgICAgICAgICAgICAgIH0pLmZpbmlzaCgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pLmZpbmlzaCgpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2dyYW50LmF1dGhvcml6YXRpb24/LnR5cGV9IG5vdCBzdXBwb3J0ZWQgZnJvbSBMZWRnZXJgKTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUF1dGh6QW1pbm9Db252ZXJ0ZXJzKCk6IEFtaW5vQ29udmVydGVycyB7XG4gIHJldHVybiB7XG4gICAgXCIvY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnR3JhbnRcIjoge1xuICAgICAgYW1pbm9UeXBlOiBcImNvc21vcy1zZGsvTXNnR3JhbnRcIixcbiAgICAgIHRvQW1pbm86ICh7XG4gICAgICAgIGdyYW50ZXIsXG4gICAgICAgIGdyYW50ZWUsXG4gICAgICAgIGdyYW50LFxuICAgICAgfTogTXNnR3JhbnQpOiBBbWlub01zZ0dyYW50W1widmFsdWVcIl0gPT4gKHtcbiAgICAgICAgZ3JhbnRlcjogZ3JhbnRlcixcbiAgICAgICAgZ3JhbnRlZTogZ3JhbnRlZSxcbiAgICAgICAgZ3JhbnQ6IGdyYW50ICYmIGdyYW50VG9BbWlubyhncmFudCksXG4gICAgICB9KSxcbiAgICAgIGZyb21BbWlubzogKHtcbiAgICAgICAgZ3JhbnRlcixcbiAgICAgICAgZ3JhbnRlZSxcbiAgICAgICAgZ3JhbnQsXG4gICAgICB9OiBBbWlub01zZ0dyYW50W1widmFsdWVcIl0pOiBNc2dHcmFudCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ3JhbnRlcjogZ3JhbnRlcixcbiAgICAgICAgICBncmFudGVlOiBncmFudGVlLFxuICAgICAgICAgIGdyYW50OiBncmFudEZyb21BbWlubyhncmFudCksXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gICAgXCIvY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlXCI6IHtcbiAgICAgIGFtaW5vVHlwZTogXCJjb3Ntb3Mtc2RrL01zZ1Jldm9rZVwiLFxuICAgICAgdG9BbWlubzogKHtcbiAgICAgICAgZ3JhbnRlcixcbiAgICAgICAgZ3JhbnRlZSxcbiAgICAgICAgbXNnVHlwZVVybCxcbiAgICAgIH06IE1zZ1Jldm9rZSk6IEFtaW5vTXNnUmV2b2tlW1widmFsdWVcIl0gPT4gKHtcbiAgICAgICAgZ3JhbnRlcjogZ3JhbnRlcixcbiAgICAgICAgZ3JhbnRlZTogZ3JhbnRlZSxcbiAgICAgICAgbXNnX3R5cGVfdXJsOiBtc2dUeXBlVXJsLFxuICAgICAgfSksXG4gICAgICBmcm9tQW1pbm86ICh7XG4gICAgICAgIGdyYW50ZXIsXG4gICAgICAgIGdyYW50ZWUsXG4gICAgICAgIG1zZ190eXBlX3VybCxcbiAgICAgIH06IEFtaW5vTXNnUmV2b2tlW1widmFsdWVcIl0pOiBNc2dSZXZva2UgPT4gKHtcbiAgICAgICAgZ3JhbnRlcjogZ3JhbnRlcixcbiAgICAgICAgZ3JhbnRlZTogZ3JhbnRlZSxcbiAgICAgICAgbXNnVHlwZVVybDogbXNnX3R5cGVfdXJsLFxuICAgICAgfSksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJBY2NlcHRlZE1lc3NhZ2VLZXlzRmlsdGVyIiwiQ29udHJhY3RFeGVjdXRpb25BdXRob3JpemF0aW9uIiwiTWF4RnVuZHNMaW1pdCIsImdyYW50VG9BbWlubyIsImdyYW50IiwiZXhwaXJhdGlvbiIsIkRhdGUiLCJNYXRoIiwiZmxvb3IiLCJOdW1iZXIiLCJzZWNvbmRzIiwidG9JU09TdHJpbmciLCJyZXBsYWNlIiwiYXV0aG9yaXphdGlvbiIsInR5cGVVcmwiLCJjb250cmFjdEV4ZWN1dGlvbkF1dGhvcml6YXRpb24iLCJkZWNvZGUiLCJ2YWx1ZSIsImdyYW50cyIsIm1hcCIsImciLCJjb250cmFjdCIsImZpbHRlciIsInR5cGUiLCJrZXlzIiwibGltaXQiLCJhbW91bnRzIiwiRXJyb3IiLCJncmFudEZyb21BbWlubyIsIkJpZ0ludCIsImdldFRpbWUiLCJuYW5vcyIsInVuZGVmaW5lZCIsImVuY29kZSIsImZpbmlzaCIsImNyZWF0ZUF1dGh6QW1pbm9Db252ZXJ0ZXJzIiwiYW1pbm9UeXBlIiwidG9BbWlubyIsImdyYW50ZXIiLCJncmFudGVlIiwiZnJvbUFtaW5vIiwibXNnVHlwZVVybCIsIm1zZ190eXBlX3VybCJdLCJtYXBwaW5ncyI6IkFBSUEsU0FDRUEseUJBQXlCLEVBQ3pCQyw4QkFBOEIsRUFDOUJDLGFBQWEsUUFDUixzQ0FBc0M7QUF5QjdDLE1BQU1DLGVBQWUsQ0FBQ0M7UUFFQUEsbUJBS1pBO0lBTlIsTUFBTUMsYUFBYSxJQUFJQyxLQUNyQkMsS0FBS0MsS0FBSyxDQUFDQyxPQUFPTCxFQUFBQSxvQkFBQUEsTUFBTUMsVUFBVSxjQUFoQkQsd0NBQUFBLGtCQUFrQk0sT0FBTyxLQUFJLE1BQU0sTUFFcERDLFdBQVcsR0FDWEMsT0FBTyxDQUFDLFVBQVU7SUFFckIsUUFBUVIsdUJBQUFBLE1BQU1TLGFBQWEsY0FBbkJULDJDQUFBQSxxQkFBcUJVLE9BQU87UUFDbEMsS0FBSztZQUNILE1BQU1DLGlDQUNKZCwrQkFBK0JlLE1BQU0sQ0FBQ1osTUFBTVMsYUFBYSxDQUFDSSxLQUFLO1lBRWpFLE1BQU1DLFNBQVNILCtCQUErQkcsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsSUFBTyxDQUFBO29CQUMvREMsVUFBVUQsRUFBRUMsUUFBUTtvQkFDcEJDLFFBQVFGLEVBQUVFLE1BQU0sSUFBSTt3QkFDbEJDLE1BQU07d0JBQ05OLE9BQU87NEJBQ0xPLE1BQU14QiwwQkFBMEJnQixNQUFNLENBQUNJLEVBQUVFLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFTyxJQUFJO3dCQUM3RDtvQkFDRjtvQkFDQUMsT0FBT0wsRUFBRUssS0FBSyxJQUFJO3dCQUNoQkYsTUFBTTt3QkFDTk4sT0FBTzs0QkFDTFMsU0FBU3hCLGNBQWNjLE1BQU0sQ0FBQ0ksRUFBRUssS0FBSyxDQUFDUixLQUFLLEVBQUVTLE9BQU87d0JBQ3REO29CQUNGO2dCQUNGLENBQUE7WUFFQSxPQUFPO2dCQUNMckI7Z0JBQ0FRLGVBQWU7b0JBQ2JVLE1B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
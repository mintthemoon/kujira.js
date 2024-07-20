import { BasicAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/feegrant";
const allowanceToAmino = (allowance)=>{
    switch(allowance.typeUrl){
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            {
                const basicAllowance = BasicAllowance.decode(allowance.value);
                const aminoBasicAllowance = {
                    type: "cosmos-sdk/BasicAllowance",
                    value: {
                        spend_limit: basicAllowance.spendLimit,
                        expiration: basicAllowance.expiration
                    }
                };
                return aminoBasicAllowance;
            }
        default:
            throw new Error(`${allowance.typeUrl} not supported for Ledger`);
    }
};
const allowanceFromAmino = (allowance)=>{
    switch(allowance.type){
        case "cosmos-sdk/BasicAllowance":
            {
                const basicAllowance = {
                    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                    value: BasicAllowance.encode(BasicAllowance.fromPartial({
                        spendLimit: allowance.value.spend_limit,
                        expiration: allowance.value.expiration
                    })).finish()
                };
                return basicAllowance;
            }
        default:
            throw new Error(`${allowance.type} not supported from Ledger`);
    }
};
export function createFeegrantAminoConverters() {
    return {
        "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
            aminoType: "cosmos-sdk/MsgGrantAllowance",
            toAmino: ({ granter, grantee, allowance })=>{
                return {
                    granter,
                    grantee,
                    allowance: allowanceToAmino(allowance)
                };
            },
            fromAmino: ({ granter, grantee, allowance })=>{
                return {
                    granter,
                    grantee,
                    allowance: allowance && allowanceFromAmino(allowance)
                };
            }
        },
        "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
            aminoType: "cosmos-sdk/MsgRevokeAllowance",
            toAmino: ({ granter, grantee })=>{
                return {
                    granter,
                    grantee
                };
            },
            fromAmino: ({ granter, grantee })=>{
                return {
                    granter,
                    grantee
                };
            }
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWluby9mZWVncmFudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbWlub01zZyB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBBbWlub0NvbnZlcnRlcnMsIENvaW4gfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgQmFzaWNBbGxvd2FuY2UgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9mZWVncmFudC92MWJldGExL2ZlZWdyYW50XCI7XG5pbXBvcnQge1xuICBNc2dHcmFudEFsbG93YW5jZSxcbiAgTXNnUmV2b2tlQWxsb3dhbmNlLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9mZWVncmFudC92MWJldGExL3R4XCI7XG5cbnR5cGUgQW1pbm9BbGxvd2FuY2UgPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsdWU6IEFtaW5vQmFzaWNBbGxvd2FuY2U7IC8vYWRkIG90aGVyIEFsbG93YW5jZSBUeXBlcyBoZXJlXG59O1xuXG50eXBlIEFtaW5vQmFzaWNBbGxvd2FuY2UgPSB7XG4gIHNwZW5kX2xpbWl0PzogQ29pbltdO1xuICBleHBpcmF0aW9uPzoge1xuICAgIHNlY29uZHM/OiBiaWdpbnQ7XG4gICAgbmFub3M/OiBudW1iZXI7XG4gIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtaW5vTXNnR3JhbnRBbGxvd2FuY2UgZXh0ZW5kcyBBbWlub01zZyB7XG4gIHR5cGU6IFwiY29zbW9zLXNkay9Nc2dHcmFudEFsbG93YW5jZVwiO1xuICB2YWx1ZToge1xuICAgIGdyYW50ZXI6IHN0cmluZztcbiAgICBncmFudGVlOiBzdHJpbmc7XG4gICAgYWxsb3dhbmNlOiBBbWlub0FsbG93YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQW1pbm9Nc2dSZXZva2VBbGxvd2FuY2UgZXh0ZW5kcyBBbWlub01zZyB7XG4gIHR5cGU6IFwiY29zbW9zLXNkay9Nc2dSZXZva2VBbGxvd2FuY2VcIjtcbiAgdmFsdWU6IHtcbiAgICBncmFudGVyOiBzdHJpbmc7XG4gICAgZ3JhbnRlZTogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBhbGxvd2FuY2VUb0FtaW5vID0gKGFsbG93YW5jZToge1xuICB0eXBlVXJsOiBzdHJpbmc7XG4gIHZhbHVlOiBVaW50OEFycmF5O1xufSk6IEFtaW5vQWxsb3dhbmNlID0+IHtcbiAgc3dpdGNoIChhbGxvd2FuY2UudHlwZVVybCkge1xuICAgIGNhc2UgXCIvY29zbW9zLmZlZWdyYW50LnYxYmV0YTEuQmFzaWNBbGxvd2FuY2VcIjoge1xuICAgICAgY29uc3QgYmFzaWNBbGxvd2FuY2UgPSBCYXNpY0FsbG93YW5jZS5kZWNvZGUoYWxsb3dhbmNlLnZhbHVlKTtcbiAgICAgIGNvbnN0IGFtaW5vQmFzaWNBbGxvd2FuY2UgPSB7XG4gICAgICAgIHR5cGU6IFwiY29zbW9zLXNkay9CYXNpY0FsbG93YW5jZVwiLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHNwZW5kX2xpbWl0OiBiYXNpY0FsbG93YW5jZS5zcGVuZExpbWl0LFxuICAgICAgICAgIGV4cGlyYXRpb246IGJhc2ljQWxsb3dhbmNlLmV4cGlyYXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFtaW5vQmFzaWNBbGxvd2FuY2U7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7YWxsb3dhbmNlLnR5cGVVcmx9IG5vdCBzdXBwb3J0ZWQgZm9yIExlZGdlcmApO1xuICB9XG59O1xuXG5jb25zdCBhbGxvd2FuY2VGcm9tQW1pbm8gPSAoXG4gIGFsbG93YW5jZTogQW1pbm9BbGxvd2FuY2Vcbik6IHsgdHlwZVVybDogc3RyaW5nOyB2YWx1ZTogVWludDhBcnJheSB9ID0+IHtcbiAgc3dpdGNoIChhbGxvd2FuY2UudHlwZSkge1xuICAgIGNhc2UgXCJjb3Ntb3Mtc2RrL0Jhc2ljQWxsb3dhbmNlXCI6IHtcbiAgICAgIGNvbnN0IGJhc2ljQWxsb3dhbmNlID0ge1xuICAgICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZmVlZ3JhbnQudjFiZXRhMS5CYXNpY0FsbG93YW5jZVwiLFxuICAgICAgICB2YWx1ZTogQmFzaWNBbGxvd2FuY2UuZW5jb2RlKFxuICAgICAgICAgIEJhc2ljQWxsb3dhbmNlLmZyb21QYXJ0aWFsKHtcbiAgICAgICAgICAgIHNwZW5kTGltaXQ6IGFsbG93YW5jZS52YWx1ZS5zcGVuZF9saW1pdCxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGFsbG93YW5jZS52YWx1ZS5leHBpcmF0aW9uLFxuICAgICAgICAgIH0pXG4gICAgICAgICkuZmluaXNoKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGJhc2ljQWxsb3dhbmNlO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2FsbG93YW5jZS50eXBlfSBub3Qgc3VwcG9ydGVkIGZyb20gTGVkZ2VyYCk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGZWVncmFudEFtaW5vQ29udmVydGVycygpOiBBbWlub0NvbnZlcnRlcnMge1xuICByZXR1cm4ge1xuICAgIFwiL2Nvc21vcy5mZWVncmFudC52MWJldGExLk1zZ0dyYW50QWxsb3dhbmNlXCI6IHtcbiAgICAgIGFtaW5vVHlwZTogXCJjb3Ntb3Mtc2RrL01zZ0dyYW50QWxsb3dhbmNlXCIsXG4gICAgICB0b0FtaW5vOiAoe1xuICAgICAgICBncmFudGVyLFxuICAgICAgICBncmFudGVlLFxuICAgICAgICBhbGxvd2FuY2UsXG4gICAgICB9OiBNc2dHcmFudEFsbG93YW5jZSk6IEFtaW5vTXNnR3JhbnRBbGxvd2FuY2VbXCJ2YWx1ZVwiXSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ3JhbnRlcixcbiAgICAgICAgICBncmFudGVlLFxuICAgICAgICAgIGFsbG93YW5jZTogYWxsb3dhbmNlVG9BbWlubyhhbGxvd2FuY2UhKSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBmcm9tQW1pbm86ICh7XG4gICAgICAgIGdyYW50ZXIsXG4gICAgICAgIGdyYW50ZWUsXG4gICAgICAgIGFsbG93YW5jZSxcbiAgICAgIH06IEFtaW5vTXNnR3JhbnRBbGxvd2FuY2VbXCJ2YWx1ZVwiXSk6IE1zZ0dyYW50QWxsb3dhbmNlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBncmFudGVyLFxuICAgICAgICAgIGdyYW50ZWUsXG4gICAgICAgICAgYWxsb3dhbmNlOiBhbGxvd2FuY2UgJiYgYWxsb3dhbmNlRnJvbUFtaW5vKGFsbG93YW5jZSksXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gICAgXCIvY29zbW9zLmZlZWdyYW50LnYxYmV0YTEuTXNnUmV2b2tlQWxsb3dhbmNlXCI6IHtcbiAgICAgIGFtaW5vVHlwZTogXCJjb3Ntb3Mtc2RrL01zZ1Jldm9rZUFsbG93YW5jZVwiLFxuICAgICAgdG9BbWlubzogKHtcbiAgICAgICAgZ3JhbnRlcixcbiAgICAgICAgZ3JhbnRlZSxcbiAgICAgIH06IE1zZ1Jldm9rZUFsbG93YW5jZSk6IEFtaW5vTXNnUmV2b2tlQWxsb3dhbmNlW1widmFsdWVcIl0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdyYW50ZXIsXG4gICAgICAgICAgZ3JhbnRlZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBmcm9tQW1pbm86ICh7XG4gICAgICAgIGdyYW50ZXIsXG4gICAgICAgIGdyYW50ZWUsXG4gICAgICB9OiBBbWlub01zZ1Jldm9rZUFsbG93YW5jZVtcInZhbHVlXCJdKTogTXNnUmV2b2tlQWxsb3dhbmNlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBncmFudGVyLFxuICAgICAgICAgIGdyYW50ZWUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQmFzaWNBbGxvd2FuY2UiLCJhbGxvd2FuY2VUb0FtaW5vIiwiYWxsb3dhbmNlIiwidHlwZVVybCIsImJhc2ljQWxsb3dhbmNlIiwiZGVjb2RlIiwidmFsdWUiLCJhbWlub0Jhc2ljQWxsb3dhbmNlIiwidHlwZSIsInNwZW5kX2xpbWl0Iiwic3BlbmRMaW1pdCIsImV4cGlyYXRpb24iLCJFcnJvciIsImFsbG93YW5jZUZyb21BbWlubyIsImVuY29kZSIsImZyb21QYXJ0aWFsIiwiZmluaXNoIiwiY3JlYXRlRmVlZ3JhbnRBbWlub0NvbnZlcnRlcnMiLCJhbWlub1R5cGUiLCJ0b0FtaW5vIiwiZ3JhbnRlciIsImdyYW50ZWUiLCJmcm9tQW1pbm8iXSwibWFwcGluZ3MiOiJBQUVBLFNBQVNBLGNBQWMsUUFBUSxnREFBZ0Q7QUFtQy9FLE1BQU1DLG1CQUFtQixDQUFDQztJQUl4QixPQUFRQSxVQUFVQyxPQUFPO1FBQ3ZCLEtBQUs7WUFBMkM7Z0JBQzlDLE1BQU1DLGlCQUFpQkosZUFBZUssTUFBTSxDQUFDSCxVQUFVSSxLQUFLO2dCQUM1RCxNQUFNQyxzQkFBc0I7b0JBQzFCQyxNQUFNO29CQUNORixPQUFPO3dCQUNMRyxhQUFhTCxlQUFlTSxVQUFVO3dCQUN0Q0MsWUFBWVAsZUFBZU8sVUFBVTtvQkFDdkM7Z0JBQ0Y7Z0JBQ0EsT0FBT0o7WUFDVDtRQUNBO1lBQ0UsTUFBTSxJQUFJSyxNQUFNLENBQUMsRUFBRVYsVUFBVUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDO0lBQ25FO0FBQ0Y7QUFFQSxNQUFNVSxxQkFBcUIsQ0FDekJYO0lBRUEsT0FBUUEsVUFBVU0sSUFBSTtRQUNwQixLQUFLO1lBQTZCO2dCQUNoQyxNQUFNSixpQkFBaUI7b0JBQ3JCRCxTQUFTO29CQUNURyxPQUFPTixlQUFlYyxNQUFNLENBQzFCZCxlQUFlZSxXQUFXLENBQUM7d0JBQ3pCTCxZQUFZUixVQUFVSSxLQUFLLENBQUNHLFdBQVc7d0JBQ3ZDRSxZQUFZVCxVQUFVSSxLQUFLLENBQUNLLFVBQVU7b0JBQ3hDLElBQ0FLLE1BQU07Z0JBQ1Y7Z0JBQ0EsT0FBT1o7WUFDVDtRQUNBO1lBQ0UsTUFBTSxJQUFJUSxNQUFNLENBQUMsRUFBRVYsVUFBVU0sSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQ2pFO0FBQ0Y7QUFFQSxPQUFPLFNBQVNTO0lBQ2QsT0FBTztRQUNMLDhDQUE4QztZQUM1Q0MsV0FBVztZQUNYQyxTQUFTLENBQUMsRUFDUkMsT0FBTyxFQUNQQyxPQUFPLEVBQ1BuQixTQUFTLEVBQ1M7Z0JBQ2xCLE9BQU87b0JBQ0xrQjtvQkFDQUM7b0JBQ0FuQixXQUFXRCxpQkFBaUJDO2dCQUM5QjtZQUNGO1lBQ0FvQixXQUFXLENBQUMsRUFDVkYsT0FBTyxFQUNQQyxPQUFPLEVBQ1BuQixTQUFTLEVBQ3VCO2dCQUNoQyxPQUFPO29CQUNMa0I7b0JBQ0FDO29CQUNBbkIsV0FBV0EsYUFBYVcsbUJBQW1CWDtnQkFDN0M7WUFDRjtRQUNGO1FBQ0EsK0NBQStDO1lBQzdDZ0IsV0FBVztZQUNYQyxTQUFTLENBQUMsRUFDUkMsT0FBTyxFQUNQQyxPQUFPLEVBQ1k7Z0JBQ25CLE9BQU87b0JBQ0xEO29CQUNBQztnQkFDRjtZQUNGO1lBQ0FDLFdBQVcsQ0FBQyxFQUNWRixPQUFPLEVBQ1BDLE9BQU8sRUFDMEI7Z0JBQ2pDLE9BQU87b0JBQ0xEO29CQUNBQztnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtBQUNGIn0=
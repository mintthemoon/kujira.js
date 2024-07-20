"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createFeegrantAminoConverters", {
    enumerable: true,
    get: function() {
        return createFeegrantAminoConverters;
    }
});
const _feegrant = require("cosmjs-types/cosmos/feegrant/v1beta1/feegrant");
const allowanceToAmino = (allowance)=>{
    switch(allowance.typeUrl){
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            {
                const basicAllowance = _feegrant.BasicAllowance.decode(allowance.value);
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
                    value: _feegrant.BasicAllowance.encode(_feegrant.BasicAllowance.fromPartial({
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
function createFeegrantAminoConverters() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWluby9mZWVncmFudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbWlub01zZyB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBBbWlub0NvbnZlcnRlcnMsIENvaW4gfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgQmFzaWNBbGxvd2FuY2UgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9mZWVncmFudC92MWJldGExL2ZlZWdyYW50XCI7XG5pbXBvcnQge1xuICBNc2dHcmFudEFsbG93YW5jZSxcbiAgTXNnUmV2b2tlQWxsb3dhbmNlLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9mZWVncmFudC92MWJldGExL3R4XCI7XG5cbnR5cGUgQW1pbm9BbGxvd2FuY2UgPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsdWU6IEFtaW5vQmFzaWNBbGxvd2FuY2U7IC8vYWRkIG90aGVyIEFsbG93YW5jZSBUeXBlcyBoZXJlXG59O1xuXG50eXBlIEFtaW5vQmFzaWNBbGxvd2FuY2UgPSB7XG4gIHNwZW5kX2xpbWl0PzogQ29pbltdO1xuICBleHBpcmF0aW9uPzoge1xuICAgIHNlY29uZHM/OiBiaWdpbnQ7XG4gICAgbmFub3M/OiBudW1iZXI7XG4gIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtaW5vTXNnR3JhbnRBbGxvd2FuY2UgZXh0ZW5kcyBBbWlub01zZyB7XG4gIHR5cGU6IFwiY29zbW9zLXNkay9Nc2dHcmFudEFsbG93YW5jZVwiO1xuICB2YWx1ZToge1xuICAgIGdyYW50ZXI6IHN0cmluZztcbiAgICBncmFudGVlOiBzdHJpbmc7XG4gICAgYWxsb3dhbmNlOiBBbWlub0FsbG93YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQW1pbm9Nc2dSZXZva2VBbGxvd2FuY2UgZXh0ZW5kcyBBbWlub01zZyB7XG4gIHR5cGU6IFwiY29zbW9zLXNkay9Nc2dSZXZva2VBbGxvd2FuY2VcIjtcbiAgdmFsdWU6IHtcbiAgICBncmFudGVyOiBzdHJpbmc7XG4gICAgZ3JhbnRlZTogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBhbGxvd2FuY2VUb0FtaW5vID0gKGFsbG93YW5jZToge1xuICB0eXBlVXJsOiBzdHJpbmc7XG4gIHZhbHVlOiBVaW50OEFycmF5O1xufSk6IEFtaW5vQWxsb3dhbmNlID0+IHtcbiAgc3dpdGNoIChhbGxvd2FuY2UudHlwZVVybCkge1xuICAgIGNhc2UgXCIvY29zbW9zLmZlZWdyYW50LnYxYmV0YTEuQmFzaWNBbGxvd2FuY2VcIjoge1xuICAgICAgY29uc3QgYmFzaWNBbGxvd2FuY2UgPSBCYXNpY0FsbG93YW5jZS5kZWNvZGUoYWxsb3dhbmNlLnZhbHVlKTtcbiAgICAgIGNvbnN0IGFtaW5vQmFzaWNBbGxvd2FuY2UgPSB7XG4gICAgICAgIHR5cGU6IFwiY29zbW9zLXNkay9CYXNpY0FsbG93YW5jZVwiLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHNwZW5kX2xpbWl0OiBiYXNpY0FsbG93YW5jZS5zcGVuZExpbWl0LFxuICAgICAgICAgIGV4cGlyYXRpb246IGJhc2ljQWxsb3dhbmNlLmV4cGlyYXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGFtaW5vQmFzaWNBbGxvd2FuY2U7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7YWxsb3dhbmNlLnR5cGVVcmx9IG5vdCBzdXBwb3J0ZWQgZm9yIExlZGdlcmApO1xuICB9XG59O1xuXG5jb25zdCBhbGxvd2FuY2VGcm9tQW1pbm8gPSAoXG4gIGFsbG93YW5jZTogQW1pbm9BbGxvd2FuY2Vcbik6IHsgdHlwZVVybDogc3RyaW5nOyB2YWx1ZTogVWludDhBcnJheSB9ID0+IHtcbiAgc3dpdGNoIChhbGxvd2FuY2UudHlwZSkge1xuICAgIGNhc2UgXCJjb3Ntb3Mtc2RrL0Jhc2ljQWxsb3dhbmNlXCI6IHtcbiAgICAgIGNvbnN0IGJhc2ljQWxsb3dhbmNlID0ge1xuICAgICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZmVlZ3JhbnQudjFiZXRhMS5CYXNpY0FsbG93YW5jZVwiLFxuICAgICAgICB2YWx1ZTogQmFzaWNBbGxvd2FuY2UuZW5jb2RlKFxuICAgICAgICAgIEJhc2ljQWxsb3dhbmNlLmZyb21QYXJ0aWFsKHtcbiAgICAgICAgICAgIHNwZW5kTGltaXQ6IGFsbG93YW5jZS52YWx1ZS5zcGVuZF9saW1pdCxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IGFsbG93YW5jZS52YWx1ZS5leHBpcmF0aW9uLFxuICAgICAgICAgIH0pXG4gICAgICAgICkuZmluaXNoKCksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGJhc2ljQWxsb3dhbmNlO1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2FsbG93YW5jZS50eXBlfSBub3Qgc3VwcG9ydGVkIGZyb20gTGVkZ2VyYCk7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGZWVncmFudEFtaW5vQ29udmVydGVycygpOiBBbWlub0NvbnZlcnRlcnMge1xuICByZXR1cm4ge1xuICAgIFwiL2Nvc21vcy5mZWVncmFudC52MWJldGExLk1zZ0dyYW50QWxsb3dhbmNlXCI6IHtcbiAgICAgIGFtaW5vVHlwZTogXCJjb3Ntb3Mtc2RrL01zZ0dyYW50QWxsb3dhbmNlXCIsXG4gICAgICB0b0FtaW5vOiAoe1xuICAgICAgICBncmFudGVyLFxuICAgICAgICBncmFudGVlLFxuICAgICAgICBhbGxvd2FuY2UsXG4gICAgICB9OiBNc2dHcmFudEFsbG93YW5jZSk6IEFtaW5vTXNnR3JhbnRBbGxvd2FuY2VbXCJ2YWx1ZVwiXSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ3JhbnRlcixcbiAgICAgICAgICBncmFudGVlLFxuICAgICAgICAgIGFsbG93YW5jZTogYWxsb3dhbmNlVG9BbWlubyhhbGxvd2FuY2UhKSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBmcm9tQW1pbm86ICh7XG4gICAgICAgIGdyYW50ZXIsXG4gICAgICAgIGdyYW50ZWUsXG4gICAgICAgIGFsbG93YW5jZSxcbiAgICAgIH06IEFtaW5vTXNnR3JhbnRBbGxvd2FuY2VbXCJ2YWx1ZVwiXSk6IE1zZ0dyYW50QWxsb3dhbmNlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBncmFudGVyLFxuICAgICAgICAgIGdyYW50ZWUsXG4gICAgICAgICAgYWxsb3dhbmNlOiBhbGxvd2FuY2UgJiYgYWxsb3dhbmNlRnJvbUFtaW5vKGFsbG93YW5jZSksXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gICAgXCIvY29zbW9zLmZlZWdyYW50LnYxYmV0YTEuTXNnUmV2b2tlQWxsb3dhbmNlXCI6IHtcbiAgICAgIGFtaW5vVHlwZTogXCJjb3Ntb3Mtc2RrL01zZ1Jldm9rZUFsbG93YW5jZVwiLFxuICAgICAgdG9BbWlubzogKHtcbiAgICAgICAgZ3JhbnRlcixcbiAgICAgICAgZ3JhbnRlZSxcbiAgICAgIH06IE1zZ1Jldm9rZUFsbG93YW5jZSk6IEFtaW5vTXNnUmV2b2tlQWxsb3dhbmNlW1widmFsdWVcIl0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGdyYW50ZXIsXG4gICAgICAgICAgZ3JhbnRlZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBmcm9tQW1pbm86ICh7XG4gICAgICAgIGdyYW50ZXIsXG4gICAgICAgIGdyYW50ZWUsXG4gICAgICB9OiBBbWlub01zZ1Jldm9rZUFsbG93YW5jZVtcInZhbHVlXCJdKTogTXNnUmV2b2tlQWxsb3dhbmNlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBncmFudGVyLFxuICAgICAgICAgIGdyYW50ZWUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRmVlZ3JhbnRBbWlub0NvbnZlcnRlcnMiLCJhbGxvd2FuY2VUb0FtaW5vIiwiYWxsb3dhbmNlIiwidHlwZVVybCIsImJhc2ljQWxsb3dhbmNlIiwiQmFzaWNBbGxvd2FuY2UiLCJkZWNvZGUiLCJ2YWx1ZSIsImFtaW5vQmFzaWNBbGxvd2FuY2UiLCJ0eXBlIiwic3BlbmRfbGltaXQiLCJzcGVuZExpbWl0IiwiZXhwaXJhdGlvbiIsIkVycm9yIiwiYWxsb3dhbmNlRnJvbUFtaW5vIiwiZW5jb2RlIiwiZnJvbVBhcnRpYWwiLCJmaW5pc2giLCJhbWlub1R5cGUiLCJ0b0FtaW5vIiwiZ3JhbnRlciIsImdyYW50ZWUiLCJmcm9tQW1pbm8iXSwibWFwcGluZ3MiOiI7Ozs7K0JBK0VnQkE7OztlQUFBQTs7OzBCQTdFZTtBQW1DL0IsTUFBTUMsbUJBQW1CLENBQUNDO0lBSXhCLE9BQVFBLFVBQVVDLE9BQU87UUFDdkIsS0FBSztZQUEyQztnQkFDOUMsTUFBTUMsaUJBQWlCQyx3QkFBYyxDQUFDQyxNQUFNLENBQUNKLFVBQVVLLEtBQUs7Z0JBQzVELE1BQU1DLHNCQUFzQjtvQkFDMUJDLE1BQU07b0JBQ05GLE9BQU87d0JBQ0xHLGFBQWFOLGVBQWVPLFVBQVU7d0JBQ3RDQyxZQUFZUixlQUFlUSxVQUFVO29CQUN2QztnQkFDRjtnQkFDQSxPQUFPSjtZQUNUO1FBQ0E7WUFDRSxNQUFNLElBQUlLLE1BQU0sQ0FBQyxFQUFFWCxVQUFVQyxPQUFPLENBQUMseUJBQXlCLENBQUM7SUFDbkU7QUFDRjtBQUVBLE1BQU1XLHFCQUFxQixDQUN6Qlo7SUFFQSxPQUFRQSxVQUFVTyxJQUFJO1FBQ3BCLEtBQUs7WUFBNkI7Z0JBQ2hDLE1BQU1MLGlCQUFpQjtvQkFDckJELFNBQVM7b0JBQ1RJLE9BQU9GLHdCQUFjLENBQUNVLE1BQU0sQ0FDMUJWLHdCQUFjLENBQUNXLFdBQVcsQ0FBQzt3QkFDekJMLFlBQVlULFVBQVVLLEtBQUssQ0FBQ0csV0FBVzt3QkFDdkNFLFlBQVlWLFVBQVVLLEtBQUssQ0FBQ0ssVUFBVTtvQkFDeEMsSUFDQUssTUFBTTtnQkFDVjtnQkFDQSxPQUFPYjtZQUNUO1FBQ0E7WUFDRSxNQUFNLElBQUlTLE1BQU0sQ0FBQyxFQUFFWCxVQUFVTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDakU7QUFDRjtBQUVPLFNBQVNUO0lBQ2QsT0FBTztRQUNMLDhDQUE4QztZQUM1Q2tCLFdBQVc7WUFDWEMsU0FBUyxDQUFDLEVBQ1JDLE9BQU8sRUFDUEMsT0FBTyxFQUNQbkIsU0FBUyxFQUNTO2dCQUNsQixPQUFPO29CQUNMa0I7b0JBQ0FDO29CQUNBbkIsV0FBV0QsaUJBQWlCQztnQkFDOUI7WUFDRjtZQUNBb0IsV0FBVyxDQUFDLEVBQ1ZGLE9BQU8sRUFDUEMsT0FBTyxFQUNQbkIsU0FBUyxFQUN1QjtnQkFDaEMsT0FBTztvQkFDTGtCO29CQUNBQztvQkFDQW5CLFdBQVdBLGFBQWFZLG1CQUFtQlo7Z0JBQzdDO1lBQ0Y7UUFDRjtRQUNBLCtDQUErQztZQUM3Q2dCLFdBQVc7WUFDWEMsU0FBUyxDQUFDLEVBQ1JDLE9BQU8sRUFDUEMsT0FBTyxFQUNZO2dCQUNuQixPQUFPO29CQUNMRDtvQkFDQUM7Z0JBQ0Y7WUFDRjtZQUNBQyxXQUFXLENBQUMsRUFDVkYsT0FBTyxFQUNQQyxPQUFPLEVBQzBCO2dCQUNqQyxPQUFPO29CQUNMRDtvQkFDQUM7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7QUFDRiJ9
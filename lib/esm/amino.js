function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
import { createWasmAminoConverters } from "@cosmjs/cosmwasm-stargate";
import * as s from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";
import { createAuthzAminoConverters } from "./amino/authz";
const extra = {
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight })=>{
            assertDefinedAndNotNull(amount, "missing amount");
            return {
                delegator_address: delegatorAddress,
                validator_address: validatorAddress,
                amount: amount,
                creation_height: creationHeight.toString()
            };
        },
        fromAmino: ({ delegator_address, validator_address, amount, creation_height })=>({
                delegatorAddress: delegator_address,
                validatorAddress: validator_address,
                amount: amount,
                creationHeight: BigInt(creation_height)
            })
    },
    "/batch.MsgWithdrawAllDelegatorRewards": {
        aminoType: "batch/MsgWithdrawAllDelegatorRewards",
        toAmino: ({ delegatorAddress })=>{
            return {
                delegator_address: delegatorAddress
            };
        },
        fromAmino: ({ delegator_address })=>({
                delegatorAddress: delegator_address
            })
    }
};
export const aminoTypes = (prefix)=>new s.AminoTypes(_object_spread({}, createAuthzAminoConverters(), s.createBankAminoConverters(), s.createDistributionAminoConverters(), s.createFeegrantAminoConverters(), s.createGovAminoConverters(), s.createIbcAminoConverters(), s.createStakingAminoConverters(), s.createVestingAminoConverters(), createWasmAminoConverters(), extra));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbWluby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbWlub01zZyB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBjcmVhdGVXYXNtQW1pbm9Db252ZXJ0ZXJzIH0gZnJvbSBcIkBjb3NtanMvY29zbXdhc20tc3RhcmdhdGVcIjtcbmltcG9ydCAqIGFzIHMgZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IGFzc2VydERlZmluZWRBbmROb3ROdWxsIH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IE1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9zdGFraW5nL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IGNyZWF0ZUF1dGh6QW1pbm9Db252ZXJ0ZXJzIH0gZnJvbSBcIi4vYW1pbm8vYXV0aHpcIjtcbmltcG9ydCB7IE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyB9IGZyb20gXCIuL2JhdGNoL3R5cGVzL3R4XCI7XG5cbi8qKiBQZXJmb3JtcyBhbiB1bmRlbGVnYXRpb24gZnJvbSBhIGRlbGVnYXRlIGFuZCBhIHZhbGlkYXRvciAqL1xuZXhwb3J0IGludGVyZmFjZSBBbWlub01zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24gZXh0ZW5kcyBBbWlub01zZyB7XG4gIHJlYWRvbmx5IHR5cGU6IFwiY29zbW9zLXNkay9Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXCI7XG4gIHJlYWRvbmx5IHZhbHVlOiB7XG4gICAgLyoqIEJlY2gzMiBlbmNvZGVkIGRlbGVnYXRvciBhZGRyZXNzICovXG4gICAgcmVhZG9ubHkgZGVsZWdhdG9yX2FkZHJlc3M6IHN0cmluZztcbiAgICAvKiogQmVjaDMyIGVuY29kZWQgdmFsaWRhdG9yIGFkZHJlc3MgKi9cbiAgICByZWFkb25seSB2YWxpZGF0b3JfYWRkcmVzczogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGFtb3VudDogcy5Db2luO1xuICAgIHJlYWRvbmx5IGNyZWF0aW9uX2hlaWdodDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFtaW5vTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzIGV4dGVuZHMgQW1pbm9Nc2cge1xuICByZWFkb25seSB0eXBlOiBcImJhdGNoL01zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1wiO1xuICByZWFkb25seSB2YWx1ZToge1xuICAgIGRlbGVnYXRvcl9hZGRyZXNzOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IGV4dHJhID0ge1xuICBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb25cIjoge1xuICAgIGFtaW5vVHlwZTogXCJjb3Ntb3Mtc2RrL01zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb25cIixcbiAgICB0b0FtaW5vOiAoe1xuICAgICAgZGVsZWdhdG9yQWRkcmVzcyxcbiAgICAgIHZhbGlkYXRvckFkZHJlc3MsXG4gICAgICBhbW91bnQsXG4gICAgICBjcmVhdGlvbkhlaWdodCxcbiAgICB9OiBNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uKTogQW1pbm9Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uW1widmFsdWVcIl0gPT4ge1xuICAgICAgYXNzZXJ0RGVmaW5lZEFuZE5vdE51bGwoYW1vdW50LCBcIm1pc3NpbmcgYW1vdW50XCIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVsZWdhdG9yX2FkZHJlc3M6IGRlbGVnYXRvckFkZHJlc3MsXG4gICAgICAgIHZhbGlkYXRvcl9hZGRyZXNzOiB2YWxpZGF0b3JBZGRyZXNzLFxuICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgY3JlYXRpb25faGVpZ2h0OiBjcmVhdGlvbkhlaWdodC50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGZyb21BbWlubzogKHtcbiAgICAgIGRlbGVnYXRvcl9hZGRyZXNzLFxuICAgICAgdmFsaWRhdG9yX2FkZHJlc3MsXG4gICAgICBhbW91bnQsXG4gICAgICBjcmVhdGlvbl9oZWlnaHQsXG4gICAgfTogQW1pbm9Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uW1widmFsdWVcIl0pOiBNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uID0+ICh7XG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBkZWxlZ2F0b3JfYWRkcmVzcyxcbiAgICAgIHZhbGlkYXRvckFkZHJlc3M6IHZhbGlkYXRvcl9hZGRyZXNzLFxuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBjcmVhdGlvbkhlaWdodDogQmlnSW50KGNyZWF0aW9uX2hlaWdodCksXG4gICAgfSksXG4gIH0sXG5cbiAgXCIvYmF0Y2guTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzXCI6IHtcbiAgICBhbWlub1R5cGU6IFwiYmF0Y2gvTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzXCIsXG4gICAgdG9BbWlubzogKHtcbiAgICAgIGRlbGVnYXRvckFkZHJlc3MsXG4gICAgfTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzKTogQW1pbm9Nc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNbXCJ2YWx1ZVwiXSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWxlZ2F0b3JfYWRkcmVzczogZGVsZWdhdG9yQWRkcmVzcyxcbiAgICAgIH07XG4gICAgfSxcbiAgICBmcm9tQW1pbm86ICh7XG4gICAgICBkZWxlZ2F0b3JfYWRkcmVzcyxcbiAgICB9OiBBbWlub01zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1tcInZhbHVlXCJdKTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzID0+ICh7XG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBkZWxlZ2F0b3JfYWRkcmVzcyxcbiAgICB9KSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBhbWlub1R5cGVzID0gKHByZWZpeDogc3RyaW5nKTogcy5BbWlub1R5cGVzID0+XG4gIG5ldyBzLkFtaW5vVHlwZXMoe1xuICAgIC4uLmNyZWF0ZUF1dGh6QW1pbm9Db252ZXJ0ZXJzKCksXG4gICAgLi4ucy5jcmVhdGVCYW5rQW1pbm9Db252ZXJ0ZXJzKCksXG4gICAgLi4ucy5jcmVhdGVEaXN0cmlidXRpb25BbWlub0NvbnZlcnRlcnMoKSxcbiAgICAuLi5zLmNyZWF0ZUZlZWdyYW50QW1pbm9Db252ZXJ0ZXJzKCksXG4gICAgLi4ucy5jcmVhdGVHb3ZBbWlub0NvbnZlcnRlcnMoKSxcbiAgICAuLi5zLmNyZWF0ZUliY0FtaW5vQ29udmVydGVycygpLFxuICAgIC4uLnMuY3JlYXRlU3Rha2luZ0FtaW5vQ29udmVydGVycygpLFxuICAgIC4uLnMuY3JlYXRlVmVzdGluZ0FtaW5vQ29udmVydGVycygpLFxuICAgIC4uLmNyZWF0ZVdhc21BbWlub0NvbnZlcnRlcnMoKSxcbiAgICAuLi5leHRyYSxcbiAgfSk7XG4iXSwibmFtZXMiOlsiY3JlYXRlV2FzbUFtaW5vQ29udmVydGVycyIsInMiLCJhc3NlcnREZWZpbmVkQW5kTm90TnVsbCIsImNyZWF0ZUF1dGh6QW1pbm9Db252ZXJ0ZXJzIiwiZXh0cmEiLCJhbWlub1R5cGUiLCJ0b0FtaW5vIiwiZGVsZWdhdG9yQWRkcmVzcyIsInZhbGlkYXRvckFkZHJlc3MiLCJhbW91bnQiLCJjcmVhdGlvbkhlaWdodCIsImRlbGVnYXRvcl9hZGRyZXNzIiwidmFsaWRhdG9yX2FkZHJlc3MiLCJjcmVhdGlvbl9oZWlnaHQiLCJ0b1N0cmluZyIsImZyb21BbWlubyIsIkJpZ0ludCIsImFtaW5vVHlwZXMiLCJwcmVmaXgiLCJBbWlub1R5cGVzIiwiY3JlYXRlQmFua0FtaW5vQ29udmVydGVycyIsImNyZWF0ZURpc3RyaWJ1dGlvbkFtaW5vQ29udmVydGVycyIsImNyZWF0ZUZlZWdyYW50QW1pbm9Db252ZXJ0ZXJzIiwiY3JlYXRlR292QW1pbm9Db252ZXJ0ZXJzIiwiY3JlYXRlSWJjQW1pbm9Db252ZXJ0ZXJzIiwiY3JlYXRlU3Rha2luZ0FtaW5vQ29udmVydGVycyIsImNyZWF0ZVZlc3RpbmdBbWlub0NvbnZlcnRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSx5QkFBeUIsUUFBUSw0QkFBNEI7QUFDdEUsWUFBWUMsT0FBTyxtQkFBbUI7QUFDdEMsU0FBU0MsdUJBQXVCLFFBQVEsZ0JBQWdCO0FBRXhELFNBQVNDLDBCQUEwQixRQUFRLGdCQUFnQjtBQXVCM0QsTUFBTUMsUUFBUTtJQUNaLHdEQUF3RDtRQUN0REMsV0FBVztRQUNYQyxTQUFTLENBQUMsRUFDUkMsZ0JBQWdCLEVBQ2hCQyxnQkFBZ0IsRUFDaEJDLE1BQU0sRUFDTkMsY0FBYyxFQUNlO1lBQzdCUix3QkFBd0JPLFFBQVE7WUFDaEMsT0FBTztnQkFDTEUsbUJBQW1CSjtnQkFDbkJLLG1CQUFtQko7Z0JBQ25CQyxRQUFRQTtnQkFDUkksaUJBQWlCSCxlQUFlSSxRQUFRO1lBQzFDO1FBQ0Y7UUFDQUMsV0FBVyxDQUFDLEVBQ1ZKLGlCQUFpQixFQUNqQkMsaUJBQWlCLEVBQ2pCSCxNQUFNLEVBQ05JLGVBQWUsRUFDNEIsR0FBb0MsQ0FBQTtnQkFDL0VOLGtCQUFrQkk7Z0JBQ2xCSCxrQkFBa0JJO2dCQUNsQkgsUUFBUUE7Z0JBQ1JDLGdCQUFnQk0sT0FBT0g7WUFDekIsQ0FBQTtJQUNGO0lBRUEseUNBQXlDO1FBQ3ZDUixXQUFXO1FBQ1hDLFNBQVMsQ0FBQyxFQUNSQyxnQkFBZ0IsRUFDZTtZQUMvQixPQUFPO2dCQUNMSSxtQkFBbUJKO1lBQ3JCO1FBQ0Y7UUFDQVEsV0FBVyxDQUFDLEVBQ1ZKLGlCQUFpQixFQUM0QixHQUFzQyxDQUFBO2dCQUNuRkosa0JBQWtCSTtZQUNwQixDQUFBO0lBQ0Y7QUFDRjtBQUVBLE9BQU8sTUFBTU0sYUFBYSxDQUFDQyxTQUN6QixJQUFJakIsRUFBRWtCLFVBQVUsQ0FBQyxtQkFDWmhCLDhCQUNBRixFQUFFbUIseUJBQXlCLElBQzNCbkIsRUFBRW9CLGlDQUFpQyxJQUNuQ3BCLEVBQUVxQiw2QkFBNkIsSUFDL0JyQixFQUFFc0Isd0JBQXdCLElBQzFCdEIsRUFBRXVCLHdCQUF3QixJQUMxQnZCLEVBQUV3Qiw0QkFBNEIsSUFDOUJ4QixFQUFFeUIsNEJBQTRCLElBQzlCMUIsNkJBQ0FJLFFBQ0YifQ==
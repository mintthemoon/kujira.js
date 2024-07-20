"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "aminoTypes", {
    enumerable: true,
    get: function() {
        return aminoTypes;
    }
});
const _cosmwasmstargate = require("@cosmjs/cosmwasm-stargate");
const _stargate = /*#__PURE__*/ _interop_require_wildcard(require("@cosmjs/stargate"));
const _utils = require("@cosmjs/utils");
const _authz = require("./amino/authz");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
const extra = {
    "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
        aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
        toAmino: ({ delegatorAddress, validatorAddress, amount, creationHeight })=>{
            (0, _utils.assertDefinedAndNotNull)(amount, "missing amount");
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
const aminoTypes = (prefix)=>new _stargate.AminoTypes(_object_spread({}, (0, _authz.createAuthzAminoConverters)(), _stargate.createBankAminoConverters(), _stargate.createDistributionAminoConverters(), _stargate.createFeegrantAminoConverters(), _stargate.createGovAminoConverters(), _stargate.createIbcAminoConverters(), _stargate.createStakingAminoConverters(), _stargate.createVestingAminoConverters(), (0, _cosmwasmstargate.createWasmAminoConverters)(), extra));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbWluby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbWlub01zZyB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBjcmVhdGVXYXNtQW1pbm9Db252ZXJ0ZXJzIH0gZnJvbSBcIkBjb3NtanMvY29zbXdhc20tc3RhcmdhdGVcIjtcbmltcG9ydCAqIGFzIHMgZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IGFzc2VydERlZmluZWRBbmROb3ROdWxsIH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IE1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9zdGFraW5nL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IGNyZWF0ZUF1dGh6QW1pbm9Db252ZXJ0ZXJzIH0gZnJvbSBcIi4vYW1pbm8vYXV0aHpcIjtcbmltcG9ydCB7IE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyB9IGZyb20gXCIuL2JhdGNoL3R5cGVzL3R4XCI7XG5cbi8qKiBQZXJmb3JtcyBhbiB1bmRlbGVnYXRpb24gZnJvbSBhIGRlbGVnYXRlIGFuZCBhIHZhbGlkYXRvciAqL1xuZXhwb3J0IGludGVyZmFjZSBBbWlub01zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24gZXh0ZW5kcyBBbWlub01zZyB7XG4gIHJlYWRvbmx5IHR5cGU6IFwiY29zbW9zLXNkay9Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXCI7XG4gIHJlYWRvbmx5IHZhbHVlOiB7XG4gICAgLyoqIEJlY2gzMiBlbmNvZGVkIGRlbGVnYXRvciBhZGRyZXNzICovXG4gICAgcmVhZG9ubHkgZGVsZWdhdG9yX2FkZHJlc3M6IHN0cmluZztcbiAgICAvKiogQmVjaDMyIGVuY29kZWQgdmFsaWRhdG9yIGFkZHJlc3MgKi9cbiAgICByZWFkb25seSB2YWxpZGF0b3JfYWRkcmVzczogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGFtb3VudDogcy5Db2luO1xuICAgIHJlYWRvbmx5IGNyZWF0aW9uX2hlaWdodDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFtaW5vTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzIGV4dGVuZHMgQW1pbm9Nc2cge1xuICByZWFkb25seSB0eXBlOiBcImJhdGNoL01zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1wiO1xuICByZWFkb25seSB2YWx1ZToge1xuICAgIGRlbGVnYXRvcl9hZGRyZXNzOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IGV4dHJhID0ge1xuICBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb25cIjoge1xuICAgIGFtaW5vVHlwZTogXCJjb3Ntb3Mtc2RrL01zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb25cIixcbiAgICB0b0FtaW5vOiAoe1xuICAgICAgZGVsZWdhdG9yQWRkcmVzcyxcbiAgICAgIHZhbGlkYXRvckFkZHJlc3MsXG4gICAgICBhbW91bnQsXG4gICAgICBjcmVhdGlvbkhlaWdodCxcbiAgICB9OiBNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uKTogQW1pbm9Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uW1widmFsdWVcIl0gPT4ge1xuICAgICAgYXNzZXJ0RGVmaW5lZEFuZE5vdE51bGwoYW1vdW50LCBcIm1pc3NpbmcgYW1vdW50XCIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVsZWdhdG9yX2FkZHJlc3M6IGRlbGVnYXRvckFkZHJlc3MsXG4gICAgICAgIHZhbGlkYXRvcl9hZGRyZXNzOiB2YWxpZGF0b3JBZGRyZXNzLFxuICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgY3JlYXRpb25faGVpZ2h0OiBjcmVhdGlvbkhlaWdodC50b1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9LFxuICAgIGZyb21BbWlubzogKHtcbiAgICAgIGRlbGVnYXRvcl9hZGRyZXNzLFxuICAgICAgdmFsaWRhdG9yX2FkZHJlc3MsXG4gICAgICBhbW91bnQsXG4gICAgICBjcmVhdGlvbl9oZWlnaHQsXG4gICAgfTogQW1pbm9Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uW1widmFsdWVcIl0pOiBNc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uID0+ICh7XG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBkZWxlZ2F0b3JfYWRkcmVzcyxcbiAgICAgIHZhbGlkYXRvckFkZHJlc3M6IHZhbGlkYXRvcl9hZGRyZXNzLFxuICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICBjcmVhdGlvbkhlaWdodDogQmlnSW50KGNyZWF0aW9uX2hlaWdodCksXG4gICAgfSksXG4gIH0sXG5cbiAgXCIvYmF0Y2guTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzXCI6IHtcbiAgICBhbWlub1R5cGU6IFwiYmF0Y2gvTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzXCIsXG4gICAgdG9BbWlubzogKHtcbiAgICAgIGRlbGVnYXRvckFkZHJlc3MsXG4gICAgfTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzKTogQW1pbm9Nc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNbXCJ2YWx1ZVwiXSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWxlZ2F0b3JfYWRkcmVzczogZGVsZWdhdG9yQWRkcmVzcyxcbiAgICAgIH07XG4gICAgfSxcbiAgICBmcm9tQW1pbm86ICh7XG4gICAgICBkZWxlZ2F0b3JfYWRkcmVzcyxcbiAgICB9OiBBbWlub01zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1tcInZhbHVlXCJdKTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzID0+ICh7XG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBkZWxlZ2F0b3JfYWRkcmVzcyxcbiAgICB9KSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBhbWlub1R5cGVzID0gKHByZWZpeDogc3RyaW5nKTogcy5BbWlub1R5cGVzID0+XG4gIG5ldyBzLkFtaW5vVHlwZXMoe1xuICAgIC4uLmNyZWF0ZUF1dGh6QW1pbm9Db252ZXJ0ZXJzKCksXG4gICAgLi4ucy5jcmVhdGVCYW5rQW1pbm9Db252ZXJ0ZXJzKCksXG4gICAgLi4ucy5jcmVhdGVEaXN0cmlidXRpb25BbWlub0NvbnZlcnRlcnMoKSxcbiAgICAuLi5zLmNyZWF0ZUZlZWdyYW50QW1pbm9Db252ZXJ0ZXJzKCksXG4gICAgLi4ucy5jcmVhdGVHb3ZBbWlub0NvbnZlcnRlcnMoKSxcbiAgICAuLi5zLmNyZWF0ZUliY0FtaW5vQ29udmVydGVycygpLFxuICAgIC4uLnMuY3JlYXRlU3Rha2luZ0FtaW5vQ29udmVydGVycygpLFxuICAgIC4uLnMuY3JlYXRlVmVzdGluZ0FtaW5vQ29udmVydGVycygpLFxuICAgIC4uLmNyZWF0ZVdhc21BbWlub0NvbnZlcnRlcnMoKSxcbiAgICAuLi5leHRyYSxcbiAgfSk7XG4iXSwibmFtZXMiOlsiYW1pbm9UeXBlcyIsImV4dHJhIiwiYW1pbm9UeXBlIiwidG9BbWlubyIsImRlbGVnYXRvckFkZHJlc3MiLCJ2YWxpZGF0b3JBZGRyZXNzIiwiYW1vdW50IiwiY3JlYXRpb25IZWlnaHQiLCJhc3NlcnREZWZpbmVkQW5kTm90TnVsbCIsImRlbGVnYXRvcl9hZGRyZXNzIiwidmFsaWRhdG9yX2FkZHJlc3MiLCJjcmVhdGlvbl9oZWlnaHQiLCJ0b1N0cmluZyIsImZyb21BbWlubyIsIkJpZ0ludCIsInByZWZpeCIsInMiLCJBbWlub1R5cGVzIiwiY3JlYXRlQXV0aHpBbWlub0NvbnZlcnRlcnMiLCJjcmVhdGVCYW5rQW1pbm9Db252ZXJ0ZXJzIiwiY3JlYXRlRGlzdHJpYnV0aW9uQW1pbm9Db252ZXJ0ZXJzIiwiY3JlYXRlRmVlZ3JhbnRBbWlub0NvbnZlcnRlcnMiLCJjcmVhdGVHb3ZBbWlub0NvbnZlcnRlcnMiLCJjcmVhdGVJYmNBbWlub0NvbnZlcnRlcnMiLCJjcmVhdGVTdGFraW5nQW1pbm9Db252ZXJ0ZXJzIiwiY3JlYXRlVmVzdGluZ0FtaW5vQ29udmVydGVycyIsImNyZWF0ZVdhc21BbWlub0NvbnZlcnRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMkVhQTs7O2VBQUFBOzs7a0NBMUU2QjtrRUFDdkI7dUJBQ3FCO3VCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUIzQyxNQUFNQyxRQUFRO0lBQ1osd0RBQXdEO1FBQ3REQyxXQUFXO1FBQ1hDLFNBQVMsQ0FBQyxFQUNSQyxnQkFBZ0IsRUFDaEJDLGdCQUFnQixFQUNoQkMsTUFBTSxFQUNOQyxjQUFjLEVBQ2U7WUFDN0JDLElBQUFBLDhCQUF1QixFQUFDRixRQUFRO1lBQ2hDLE9BQU87Z0JBQ0xHLG1CQUFtQkw7Z0JBQ25CTSxtQkFBbUJMO2dCQUNuQkMsUUFBUUE7Z0JBQ1JLLGlCQUFpQkosZUFBZUssUUFBUTtZQUMxQztRQUNGO1FBQ0FDLFdBQVcsQ0FBQyxFQUNWSixpQkFBaUIsRUFDakJDLGlCQUFpQixFQUNqQkosTUFBTSxFQUNOSyxlQUFlLEVBQzRCLEdBQW9DLENBQUE7Z0JBQy9FUCxrQkFBa0JLO2dCQUNsQkosa0JBQWtCSztnQkFDbEJKLFFBQVFBO2dCQUNSQyxnQkFBZ0JPLE9BQU9IO1lBQ3pCLENBQUE7SUFDRjtJQUVBLHlDQUF5QztRQUN2Q1QsV0FBVztRQUNYQyxTQUFTLENBQUMsRUFDUkMsZ0JBQWdCLEVBQ2U7WUFDL0IsT0FBTztnQkFDTEssbUJBQW1CTDtZQUNyQjtRQUNGO1FBQ0FTLFdBQVcsQ0FBQyxFQUNWSixpQkFBaUIsRUFDNEIsR0FBc0MsQ0FBQTtnQkFDbkZMLGtCQUFrQks7WUFDcEIsQ0FBQTtJQUNGO0FBQ0Y7QUFFTyxNQUFNVCxhQUFhLENBQUNlLFNBQ3pCLElBQUlDLFVBQUVDLFVBQVUsQ0FBQyxtQkFDWkMsSUFBQUEsaUNBQTBCLEtBQzFCRixVQUFFRyx5QkFBeUIsSUFDM0JILFVBQUVJLGlDQUFpQyxJQUNuQ0osVUFBRUssNkJBQTZCLElBQy9CTCxVQUFFTSx3QkFBd0IsSUFDMUJOLFVBQUVPLHdCQUF3QixJQUMxQlAsVUFBRVEsNEJBQTRCLElBQzlCUixVQUFFUyw0QkFBNEIsSUFDOUJDLElBQUFBLDJDQUF5QixLQUN6QnpCIn0=
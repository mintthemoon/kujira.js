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
    fetchTokens: function() {
        return fetchTokens;
    },
    kujiraQueryClient: function() {
        return kujiraQueryClient;
    }
});
const _stargate = /*#__PURE__*/ _interop_require_wildcard(require("@cosmjs/stargate"));
require("@cosmjs/stargate/build/modules/distribution/messages");
const _bank = require("./cosmos/bank");
const _gov = require("./cosmos/gov");
const _staking = require("./cosmos/staking");
const _wasm = require("./cosmwasm/wasm");
const _v1 = require("./gravity/v1");
const _cwica = require("./kujira/cwica");
const _denom = require("./kujira/denom");
const _oracle = require("./kujira/oracle");
const _scheduler = require("./kujira/scheduler");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
const kujiraQueryClient = ({ client })=>_stargate.QueryClient.withExtensions(client, _stargate.setupAuthExtension, _stargate.setupAuthzExtension, _bank.setupBankExtensionExtended, _denom.setupDenomExtension, _stargate.setupDistributionExtension, _stargate.setupFeegrantExtension, _gov.setupGovExtension, _oracle.setupOracleExtension, _scheduler.setupSchedulerExtension, _stargate.setupSlashingExtension, _staking.setupStakingExtension, _stargate.setupTxExtension, _wasm.setupWasmExtensionExtended, _stargate.setupIbcExtension, _v1.setupGravityExtension, _cwica.setupCwIcaExtension);
const fetchTokens = (query, paginationKey)=>{
    return query.bank.totalSupply(paginationKey).then(function() {
        var _ref = _async_to_generator(function*(xs) {
            var _xs_pagination;
            return ((_xs_pagination = xs.pagination) === null || _xs_pagination === void 0 ? void 0 : _xs_pagination.nextKey.toString()) ? [
                ...yield fetchTokens(query, xs.pagination.nextKey),
                ...xs.supply
            ] : xs.supply;
        });
        return function(xs) {
            return _ref.apply(this, arguments);
        };
    }());
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyeUNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzIGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7XG4gIEZlZWdyYW50RXh0ZW5zaW9uLFxuICBTbGFzaGluZ0V4dGVuc2lvbixcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGUvYnVpbGQvbW9kdWxlc1wiO1xuaW1wb3J0IHsgQXV0aHpFeHRlbnNpb24gfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzL2F1dGh6L3F1ZXJpZXNcIjtcbmltcG9ydCB7fSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzL2Rpc3RyaWJ1dGlvbi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgVGVuZGVybWludDM3Q2xpZW50IH0gZnJvbSBcIkBjb3NtanMvdGVuZGVybWludC1ycGNcIjtcbmltcG9ydCB7XG4gIEJhbmtFeHRlbnNpb25FeHRlbmRlZCxcbiAgc2V0dXBCYW5rRXh0ZW5zaW9uRXh0ZW5kZWQsXG59IGZyb20gXCIuL2Nvc21vcy9iYW5rXCI7XG5pbXBvcnQgeyBHb3ZFeHRlbnNpb24sIHNldHVwR292RXh0ZW5zaW9uIH0gZnJvbSBcIi4vY29zbW9zL2dvdlwiO1xuaW1wb3J0IHsgU3Rha2luZ0V4dGVuc2lvbiwgc2V0dXBTdGFraW5nRXh0ZW5zaW9uIH0gZnJvbSBcIi4vY29zbW9zL3N0YWtpbmdcIjtcbmltcG9ydCB7XG4gIFdhc21FeHRlbnNpb25FeHRlbmRlZCxcbiAgc2V0dXBXYXNtRXh0ZW5zaW9uRXh0ZW5kZWQsXG59IGZyb20gXCIuL2Nvc213YXNtL3dhc21cIjtcbmltcG9ydCB7IEdyYXZpdHlFeHRlbnNpb24sIHNldHVwR3Jhdml0eUV4dGVuc2lvbiB9IGZyb20gXCIuL2dyYXZpdHkvdjFcIjtcbmltcG9ydCB7IEN3SWNhRXh0ZW5zaW9uLCBzZXR1cEN3SWNhRXh0ZW5zaW9uIH0gZnJvbSBcIi4va3VqaXJhL2N3aWNhXCI7XG5pbXBvcnQgeyBEZW5vbUV4dGVuc2lvbiwgc2V0dXBEZW5vbUV4dGVuc2lvbiB9IGZyb20gXCIuL2t1amlyYS9kZW5vbVwiO1xuaW1wb3J0IHsgT3JhY2xlRXh0ZW5zaW9uLCBzZXR1cE9yYWNsZUV4dGVuc2lvbiB9IGZyb20gXCIuL2t1amlyYS9vcmFjbGVcIjtcbmltcG9ydCB7XG4gIFNjaGVkdWxlckV4dGVuc2lvbixcbiAgc2V0dXBTY2hlZHVsZXJFeHRlbnNpb24sXG59IGZyb20gXCIuL2t1amlyYS9zY2hlZHVsZXJcIjtcblxuZXhwb3J0IHR5cGUgS3VqaXJhUXVlcnlDbGllbnQgPSBzLlF1ZXJ5Q2xpZW50ICZcbiAgcy5BdXRoRXh0ZW5zaW9uICZcbiAgQXV0aHpFeHRlbnNpb24gJlxuICBCYW5rRXh0ZW5zaW9uRXh0ZW5kZWQgJlxuICBzLkRpc3RyaWJ1dGlvbkV4dGVuc2lvbiAmXG4gIERlbm9tRXh0ZW5zaW9uICZcbiAgRmVlZ3JhbnRFeHRlbnNpb24gJlxuICBHb3ZFeHRlbnNpb24gJlxuICBPcmFjbGVFeHRlbnNpb24gJlxuICBTY2hlZHVsZXJFeHRlbnNpb24gJlxuICBTbGFzaGluZ0V4dGVuc2lvbiAmXG4gIFN0YWtpbmdFeHRlbnNpb24gJlxuICBzLlR4RXh0ZW5zaW9uICZcbiAgV2FzbUV4dGVuc2lvbkV4dGVuZGVkICZcbiAgcy5JYmNFeHRlbnNpb24gJlxuICBHcmF2aXR5RXh0ZW5zaW9uICZcbiAgQ3dJY2FFeHRlbnNpb247XG5cbmV4cG9ydCBjb25zdCBrdWppcmFRdWVyeUNsaWVudCA9ICh7XG4gIGNsaWVudCxcbn06IHtcbiAgY2xpZW50OiBUZW5kZXJtaW50MzdDbGllbnQ7XG59KTogS3VqaXJhUXVlcnlDbGllbnQgPT5cbiAgcy5RdWVyeUNsaWVudC53aXRoRXh0ZW5zaW9ucyhcbiAgICBjbGllbnQsXG4gICAgcy5zZXR1cEF1dGhFeHRlbnNpb24sXG4gICAgcy5zZXR1cEF1dGh6RXh0ZW5zaW9uLFxuICAgIHNldHVwQmFua0V4dGVuc2lvbkV4dGVuZGVkLFxuICAgIHNldHVwRGVub21FeHRlbnNpb24sXG4gICAgcy5zZXR1cERpc3RyaWJ1dGlvbkV4dGVuc2lvbixcbiAgICBzLnNldHVwRmVlZ3JhbnRFeHRlbnNpb24sXG4gICAgc2V0dXBHb3ZFeHRlbnNpb24sXG4gICAgc2V0dXBPcmFjbGVFeHRlbnNpb24sXG4gICAgc2V0dXBTY2hlZHVsZXJFeHRlbnNpb24sXG4gICAgcy5zZXR1cFNsYXNoaW5nRXh0ZW5zaW9uLFxuICAgIHNldHVwU3Rha2luZ0V4dGVuc2lvbixcbiAgICBzLnNldHVwVHhFeHRlbnNpb24sXG4gICAgc2V0dXBXYXNtRXh0ZW5zaW9uRXh0ZW5kZWQsXG4gICAgcy5zZXR1cEliY0V4dGVuc2lvbixcbiAgICBzZXR1cEdyYXZpdHlFeHRlbnNpb24sXG4gICAgc2V0dXBDd0ljYUV4dGVuc2lvblxuICApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUb2tlbnMgPSAoXG4gIHF1ZXJ5OiBLdWppcmFRdWVyeUNsaWVudCxcbiAgcGFnaW5hdGlvbktleT86IFVpbnQ4QXJyYXlcbik6IFByb21pc2U8Q29pbltdPiA9PiB7XG4gIHJldHVybiBxdWVyeS5iYW5rLnRvdGFsU3VwcGx5KHBhZ2luYXRpb25LZXkpLnRoZW4oYXN5bmMgKHhzKSA9PiB7XG4gICAgcmV0dXJuIHhzLnBhZ2luYXRpb24/Lm5leHRLZXkudG9TdHJpbmcoKVxuICAgICAgPyBbLi4uKGF3YWl0IGZldGNoVG9rZW5zKHF1ZXJ5LCB4cy5wYWdpbmF0aW9uLm5leHRLZXkpKSwgLi4ueHMuc3VwcGx5XVxuICAgICAgOiB4cy5zdXBwbHk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJmZXRjaFRva2VucyIsImt1amlyYVF1ZXJ5Q2xpZW50IiwiY2xpZW50IiwicyIsIlF1ZXJ5Q2xpZW50Iiwid2l0aEV4dGVuc2lvbnMiLCJzZXR1cEF1dGhFeHRlbnNpb24iLCJzZXR1cEF1dGh6RXh0ZW5zaW9uIiwic2V0dXBCYW5rRXh0ZW5zaW9uRXh0ZW5kZWQiLCJzZXR1cERlbm9tRXh0ZW5zaW9uIiwic2V0dXBEaXN0cmlidXRpb25FeHRlbnNpb24iLCJzZXR1cEZlZWdyYW50RXh0ZW5zaW9uIiwic2V0dXBHb3ZFeHRlbnNpb24iLCJzZXR1cE9yYWNsZUV4dGVuc2lvbiIsInNldHVwU2NoZWR1bGVyRXh0ZW5zaW9uIiwic2V0dXBTbGFzaGluZ0V4dGVuc2lvbiIsInNldHVwU3Rha2luZ0V4dGVuc2lvbiIsInNldHVwVHhFeHRlbnNpb24iLCJzZXR1cFdhc21FeHRlbnNpb25FeHRlbmRlZCIsInNldHVwSWJjRXh0ZW5zaW9uIiwic2V0dXBHcmF2aXR5RXh0ZW5zaW9uIiwic2V0dXBDd0ljYUV4dGVuc2lvbiIsInF1ZXJ5IiwicGFnaW5hdGlvbktleSIsImJhbmsiLCJ0b3RhbFN1cHBseSIsInRoZW4iLCJ4cyIsInBhZ2luYXRpb24iLCJuZXh0S2V5IiwidG9TdHJpbmciLCJzdXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBdUVhQSxXQUFXO2VBQVhBOztJQXpCQUMsaUJBQWlCO2VBQWpCQTs7O2tFQTlDTTtRQU9KO3NCQUtSO3FCQUN5Qzt5QkFDUTtzQkFJakQ7b0JBQ2lEO3VCQUNKO3VCQUNBO3dCQUNFOzJCQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsTUFBTUEsb0JBQW9CLENBQUMsRUFDaENDLE1BQU0sRUFHUCxHQUNDQyxVQUFFQyxXQUFXLENBQUNDLGNBQWMsQ0FDMUJILFFBQ0FDLFVBQUVHLGtCQUFrQixFQUNwQkgsVUFBRUksbUJBQW1CLEVBQ3JCQyxnQ0FBMEIsRUFDMUJDLDBCQUFtQixFQUNuQk4sVUFBRU8sMEJBQTBCLEVBQzVCUCxVQUFFUSxzQkFBc0IsRUFDeEJDLHNCQUFpQixFQUNqQkMsNEJBQW9CLEVBQ3BCQyxrQ0FBdUIsRUFDdkJYLFVBQUVZLHNCQUFzQixFQUN4QkMsOEJBQXFCLEVBQ3JCYixVQUFFYyxnQkFBZ0IsRUFDbEJDLGdDQUEwQixFQUMxQmYsVUFBRWdCLGlCQUFpQixFQUNuQkMseUJBQXFCLEVBQ3JCQywwQkFBbUI7QUFHaEIsTUFBTXJCLGNBQWMsQ0FDekJzQixPQUNBQztJQUVBLE9BQU9ELE1BQU1FLElBQUksQ0FBQ0MsV0FBVyxDQUFDRixlQUFlRyxJQUFJO21CQUFDLG9CQUFBLFVBQU9DO2dCQUNoREE7WUFBUCxPQUFPQSxFQUFBQSxpQkFBQUEsR0FBR0MsVUFBVSxjQUFiRCxxQ0FBQUEsZUFBZUUsT0FBTyxDQUFDQyxRQUFRLE1BQ2xDO21CQUFLLE1BQU05QixZQUFZc0IsT0FBT0ssR0FBR0MsVUFBVSxDQUFDQyxPQUFPO21CQUFPRixHQUFHSSxNQUFNO2FBQUMsR0FDcEVKLEdBQUdJLE1BQU07UUFDZjt3QkFKeURKOzs7O0FBSzNEIn0=
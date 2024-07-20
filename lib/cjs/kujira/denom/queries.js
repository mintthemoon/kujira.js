"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupDenomExtension", {
    enumerable: true,
    get: function() {
        return setupDenomExtension;
    }
});
const _utils = require("@cosmjs/utils");
const _query = require("./types/query");
const _stargate = require("@cosmjs/stargate");
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
function setupDenomExtension(base) {
    const rpc = (0, _stargate.createProtobufRpcClient)(base);
    const queryService = new _query.QueryClientImpl(rpc);
    return {
        denom: {
            params: /*#__PURE__*/ _async_to_generator(function*() {
                const { params } = yield queryService.Params({});
                (0, _utils.assert)(params);
                return params;
            }),
            fromCreator: function() {
                var _ref = _async_to_generator(function*(creator) {
                    const { denoms } = yield queryService.DenomsFromCreator({
                        creator
                    });
                    return denoms;
                });
                return function(creator) {
                    return _ref.apply(this, arguments);
                };
            }(),
            authorityMetadata: function() {
                var _ref = _async_to_generator(function*(denom) {
                    const { authority_metadata } = yield queryService.DenomAuthorityMetadata({
                        denom
                    });
                    (0, _utils.assert)(authority_metadata);
                    return authority_metadata;
                });
                return function(denom) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiQGNvc21qcy91dGlsc1wiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRJbXBsIH0gZnJvbSBcIi4vdHlwZXMvcXVlcnlcIjtcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gXCIuL3R5cGVzL3BhcmFtc1wiO1xuaW1wb3J0IHsgRGVub21BdXRob3JpdHlNZXRhZGF0YSB9IGZyb20gXCIuL3R5cGVzL2F1dGhvcml0eU1ldGFkYXRhXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50LCBRdWVyeUNsaWVudCB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVub21FeHRlbnNpb24ge1xuICByZWFkb25seSBkZW5vbToge1xuICAgIHJlYWRvbmx5IHBhcmFtczogKCkgPT4gUHJvbWlzZTxQYXJhbXM+O1xuICAgIHJlYWRvbmx5IGZyb21DcmVhdG9yOiAoY3JlYXRvcjogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbiAgICByZWFkb25seSBhdXRob3JpdHlNZXRhZGF0YTogKFxuICAgICAgZGVub206IHN0cmluZ1xuICAgICkgPT4gUHJvbWlzZTxEZW5vbUF1dGhvcml0eU1ldGFkYXRhPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRGVub21FeHRlbnNpb24oYmFzZTogUXVlcnlDbGllbnQpOiBEZW5vbUV4dGVuc2lvbiB7XG4gIGNvbnN0IHJwYyA9IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50KGJhc2UpO1xuICBjb25zdCBxdWVyeVNlcnZpY2UgPSBuZXcgUXVlcnlDbGllbnRJbXBsKHJwYyk7XG5cbiAgcmV0dXJuIHtcbiAgICBkZW5vbToge1xuICAgICAgcGFyYW1zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBhd2FpdCBxdWVyeVNlcnZpY2UuUGFyYW1zKHt9KTtcbiAgICAgICAgYXNzZXJ0KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9LFxuICAgICAgZnJvbUNyZWF0b3I6IGFzeW5jIChjcmVhdG9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgeyBkZW5vbXMgfSA9IGF3YWl0IHF1ZXJ5U2VydmljZS5EZW5vbXNGcm9tQ3JlYXRvcih7XG4gICAgICAgICAgY3JlYXRvcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZW5vbXM7XG4gICAgICB9LFxuICAgICAgYXV0aG9yaXR5TWV0YWRhdGE6IGFzeW5jIChkZW5vbTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXV0aG9yaXR5X21ldGFkYXRhIH0gPVxuICAgICAgICAgIGF3YWl0IHF1ZXJ5U2VydmljZS5EZW5vbUF1dGhvcml0eU1ldGFkYXRhKHtcbiAgICAgICAgICAgIGRlbm9tLFxuICAgICAgICAgIH0pO1xuICAgICAgICBhc3NlcnQoYXV0aG9yaXR5X21ldGFkYXRhKTtcbiAgICAgICAgcmV0dXJuIGF1dGhvcml0eV9tZXRhZGF0YTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJzZXR1cERlbm9tRXh0ZW5zaW9uIiwiYmFzZSIsInJwYyIsImNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50IiwicXVlcnlTZXJ2aWNlIiwiUXVlcnlDbGllbnRJbXBsIiwiZGVub20iLCJwYXJhbXMiLCJQYXJhbXMiLCJhc3NlcnQiLCJmcm9tQ3JlYXRvciIsImNyZWF0b3IiLCJkZW5vbXMiLCJEZW5vbXNGcm9tQ3JlYXRvciIsImF1dGhvcml0eU1ldGFkYXRhIiwiYXV0aG9yaXR5X21ldGFkYXRhIiwiRGVub21BdXRob3JpdHlNZXRhZGF0YSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQmdCQTs7O2VBQUFBOzs7dUJBakJPO3VCQUNTOzBCQUlxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTlDLFNBQVNBLG9CQUFvQkMsSUFBaUI7SUFDbkQsTUFBTUMsTUFBTUMsSUFBQUEsaUNBQXVCLEVBQUNGO0lBQ3BDLE1BQU1HLGVBQWUsSUFBSUMsc0JBQWUsQ0FBQ0g7SUFFekMsT0FBTztRQUNMSSxPQUFPO1lBQ0xDLHNCQUFRLG9CQUFBO2dCQUNOLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUcsTUFBTUgsYUFBYUksTUFBTSxDQUFDLENBQUM7Z0JBQzlDQyxJQUFBQSxhQUFNLEVBQUNGO2dCQUNQLE9BQU9BO1lBQ1Q7WUFDQUcsV0FBVzsyQkFBRSxvQkFBQSxVQUFPQztvQkFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNUixhQUFhUyxpQkFBaUIsQ0FBQzt3QkFDdERGO29CQUNGO29CQUNBLE9BQU9DO2dCQUNUO2dDQUxvQkQ7Ozs7WUFNcEJHLGlCQUFpQjsyQkFBRSxvQkFBQSxVQUFPUjtvQkFDeEIsTUFBTSxFQUFFUyxrQkFBa0IsRUFBRSxHQUMxQixNQUFNWCxhQUFhWSxzQkFBc0IsQ0FBQzt3QkFDeENWO29CQUNGO29CQUNGRyxJQUFBQSxhQUFNLEVBQUNNO29CQUNQLE9BQU9BO2dCQUNUO2dDQVAwQlQ7Ozs7UUFRNUI7SUFDRjtBQUNGIn0=
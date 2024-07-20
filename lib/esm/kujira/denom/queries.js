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
import { assert } from "@cosmjs/utils";
import { QueryClientImpl } from "./types/query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupDenomExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        denom: {
            params: /*#__PURE__*/ _async_to_generator(function*() {
                const { params } = yield queryService.Params({});
                assert(params);
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
                    assert(authority_metadata);
                    return authority_metadata;
                });
                return function(denom) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiQGNvc21qcy91dGlsc1wiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRJbXBsIH0gZnJvbSBcIi4vdHlwZXMvcXVlcnlcIjtcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gXCIuL3R5cGVzL3BhcmFtc1wiO1xuaW1wb3J0IHsgRGVub21BdXRob3JpdHlNZXRhZGF0YSB9IGZyb20gXCIuL3R5cGVzL2F1dGhvcml0eU1ldGFkYXRhXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50LCBRdWVyeUNsaWVudCB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVub21FeHRlbnNpb24ge1xuICByZWFkb25seSBkZW5vbToge1xuICAgIHJlYWRvbmx5IHBhcmFtczogKCkgPT4gUHJvbWlzZTxQYXJhbXM+O1xuICAgIHJlYWRvbmx5IGZyb21DcmVhdG9yOiAoY3JlYXRvcjogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbiAgICByZWFkb25seSBhdXRob3JpdHlNZXRhZGF0YTogKFxuICAgICAgZGVub206IHN0cmluZ1xuICAgICkgPT4gUHJvbWlzZTxEZW5vbUF1dGhvcml0eU1ldGFkYXRhPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRGVub21FeHRlbnNpb24oYmFzZTogUXVlcnlDbGllbnQpOiBEZW5vbUV4dGVuc2lvbiB7XG4gIGNvbnN0IHJwYyA9IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50KGJhc2UpO1xuICBjb25zdCBxdWVyeVNlcnZpY2UgPSBuZXcgUXVlcnlDbGllbnRJbXBsKHJwYyk7XG5cbiAgcmV0dXJuIHtcbiAgICBkZW5vbToge1xuICAgICAgcGFyYW1zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBhd2FpdCBxdWVyeVNlcnZpY2UuUGFyYW1zKHt9KTtcbiAgICAgICAgYXNzZXJ0KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9LFxuICAgICAgZnJvbUNyZWF0b3I6IGFzeW5jIChjcmVhdG9yOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgeyBkZW5vbXMgfSA9IGF3YWl0IHF1ZXJ5U2VydmljZS5EZW5vbXNGcm9tQ3JlYXRvcih7XG4gICAgICAgICAgY3JlYXRvcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZW5vbXM7XG4gICAgICB9LFxuICAgICAgYXV0aG9yaXR5TWV0YWRhdGE6IGFzeW5jIChkZW5vbTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXV0aG9yaXR5X21ldGFkYXRhIH0gPVxuICAgICAgICAgIGF3YWl0IHF1ZXJ5U2VydmljZS5EZW5vbUF1dGhvcml0eU1ldGFkYXRhKHtcbiAgICAgICAgICAgIGRlbm9tLFxuICAgICAgICAgIH0pO1xuICAgICAgICBhc3NlcnQoYXV0aG9yaXR5X21ldGFkYXRhKTtcbiAgICAgICAgcmV0dXJuIGF1dGhvcml0eV9tZXRhZGF0YTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJhc3NlcnQiLCJRdWVyeUNsaWVudEltcGwiLCJjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCIsInNldHVwRGVub21FeHRlbnNpb24iLCJiYXNlIiwicnBjIiwicXVlcnlTZXJ2aWNlIiwiZGVub20iLCJwYXJhbXMiLCJQYXJhbXMiLCJmcm9tQ3JlYXRvciIsImNyZWF0b3IiLCJkZW5vbXMiLCJEZW5vbXNGcm9tQ3JlYXRvciIsImF1dGhvcml0eU1ldGFkYXRhIiwiYXV0aG9yaXR5X21ldGFkYXRhIiwiRGVub21BdXRob3JpdHlNZXRhZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxNQUFNLFFBQVEsZ0JBQWdCO0FBQ3ZDLFNBQVNDLGVBQWUsUUFBUSxnQkFBZ0I7QUFJaEQsU0FBU0MsdUJBQXVCLFFBQXFCLG1CQUFtQjtBQVl4RSxPQUFPLFNBQVNDLG9CQUFvQkMsSUFBaUI7SUFDbkQsTUFBTUMsTUFBTUgsd0JBQXdCRTtJQUNwQyxNQUFNRSxlQUFlLElBQUlMLGdCQUFnQkk7SUFFekMsT0FBTztRQUNMRSxPQUFPO1lBQ0xDLHNCQUFRLG9CQUFBO2dCQUNOLE1BQU0sRUFBRUEsTUFBTSxFQUFFLEdBQUcsTUFBTUYsYUFBYUcsTUFBTSxDQUFDLENBQUM7Z0JBQzlDVCxPQUFPUTtnQkFDUCxPQUFPQTtZQUNUO1lBQ0FFLFdBQVc7MkJBQUUsb0JBQUEsVUFBT0M7b0JBQ2xCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTU4sYUFBYU8saUJBQWlCLENBQUM7d0JBQ3RERjtvQkFDRjtvQkFDQSxPQUFPQztnQkFDVDtnQ0FMb0JEOzs7O1lBTXBCRyxpQkFBaUI7MkJBQUUsb0JBQUEsVUFBT1A7b0JBQ3hCLE1BQU0sRUFBRVEsa0JBQWtCLEVBQUUsR0FDMUIsTUFBTVQsYUFBYVUsc0JBQXNCLENBQUM7d0JBQ3hDVDtvQkFDRjtvQkFDRlAsT0FBT2U7b0JBQ1AsT0FBT0E7Z0JBQ1Q7Z0NBUDBCUjs7OztRQVE1QjtJQUNGO0FBQ0YifQ==
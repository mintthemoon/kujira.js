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
export function setupOracleExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        oracle: {
            params: /*#__PURE__*/ _async_to_generator(function*() {
                const { params } = yield queryService.Params({});
                assert(params);
                return params;
            }),
            exchangeRate: function() {
                var _ref = _async_to_generator(function*(denom) {
                    return queryService.ExchangeRate({
                        denom
                    });
                });
                return function(denom) {
                    return _ref.apply(this, arguments);
                };
            }(),
            exchangeRates: /*#__PURE__*/ _async_to_generator(function*() {
                return queryService.ExchangeRates({});
            }),
            actives: /*#__PURE__*/ _async_to_generator(function*() {
                return queryService.Actives({});
            }),
            feederDelegation: function() {
                var _ref = _async_to_generator(function*(validator_addr) {
                    return queryService.FeederDelegation({
                        validator_addr
                    });
                });
                return function(validator_addr) {
                    return _ref.apply(this, arguments);
                };
            }(),
            missCounter: function() {
                var _ref = _async_to_generator(function*(validator_addr) {
                    return queryService.MissCounter({
                        validator_addr
                    });
                });
                return function(validator_addr) {
                    return _ref.apply(this, arguments);
                };
            }(),
            aggregatePrevote: function() {
                var _ref = _async_to_generator(function*(validator_addr) {
                    return queryService.AggregatePrevote({
                        validator_addr
                    });
                });
                return function(validator_addr) {
                    return _ref.apply(this, arguments);
                };
            }(),
            aggregatePrevotes: /*#__PURE__*/ _async_to_generator(function*() {
                return queryService.AggregatePrevotes({});
            }),
            aggregateVote: function() {
                var _ref = _async_to_generator(function*(validator_addr) {
                    return queryService.AggregateVote({
                        validator_addr
                    });
                });
                return function(validator_addr) {
                    return _ref.apply(this, arguments);
                };
            }(),
            aggregateVotes: /*#__PURE__*/ _async_to_generator(function*() {
                return queryService.AggregateVotes({});
            })
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3F1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlLFxuICBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSxcbiAgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlLFxuICBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZSxcbiAgUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlLFxuICBRdWVyeUNsaWVudEltcGwsXG4gIFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UsXG4gIFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlLFxuICBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZSxcbiAgUXVlcnlNaXNzQ291bnRlclJlc3BvbnNlLFxufSBmcm9tIFwiLi90eXBlcy9xdWVyeVwiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vdHlwZXMvb3JhY2xlXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50LCBRdWVyeUNsaWVudCB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3JhY2xlRXh0ZW5zaW9uIHtcbiAgcmVhZG9ubHkgb3JhY2xlOiB7XG4gICAgcmVhZG9ubHkgcGFyYW1zOiAoKSA9PiBQcm9taXNlPFBhcmFtcz47XG4gICAgcmVhZG9ubHkgZXhjaGFuZ2VSYXRlOiAoXG4gICAgICBkZW5vbTogc3RyaW5nXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2U+O1xuICAgIHJlYWRvbmx5IGV4Y2hhbmdlUmF0ZXM6ICgpID0+IFByb21pc2U8UXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2U+O1xuICAgIHJlYWRvbmx5IGFjdGl2ZXM6ICgpID0+IFByb21pc2U8UXVlcnlBY3RpdmVzUmVzcG9uc2U+O1xuICAgIHJlYWRvbmx5IGZlZWRlckRlbGVnYXRpb246IChcbiAgICAgIHZhbGlkYXRvcl9hZGRyOiBzdHJpbmdcbiAgICApID0+IFByb21pc2U8UXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U+O1xuICAgIHJlYWRvbmx5IG1pc3NDb3VudGVyOiAoXG4gICAgICB2YWxpZGF0b3JfYWRkcjogc3RyaW5nXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZT47XG4gICAgcmVhZG9ubHkgYWdncmVnYXRlUHJldm90ZTogKFxuICAgICAgdmFsaWRhdG9yX2FkZHI6IHN0cmluZ1xuICAgICkgPT4gUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZT47XG4gICAgcmVhZG9ubHkgYWdncmVnYXRlUHJldm90ZXM6ICgpID0+IFByb21pc2U8UXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlPjtcbiAgICByZWFkb25seSBhZ2dyZWdhdGVWb3RlOiAoXG4gICAgICB2YWxpZGF0b3JfYWRkcjogc3RyaW5nXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlPjtcbiAgICByZWFkb25seSBhZ2dyZWdhdGVWb3RlczogKCkgPT4gUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2U+O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBPcmFjbGVFeHRlbnNpb24oYmFzZTogUXVlcnlDbGllbnQpOiBPcmFjbGVFeHRlbnNpb24ge1xuICBjb25zdCBycGMgPSBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudChiYXNlKTtcbiAgY29uc3QgcXVlcnlTZXJ2aWNlID0gbmV3IFF1ZXJ5Q2xpZW50SW1wbChycGMpO1xuXG4gIHJldHVybiB7XG4gICAgb3JhY2xlOiB7XG4gICAgICBwYXJhbXM6IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBwYXJhbXMgfSA9IGF3YWl0IHF1ZXJ5U2VydmljZS5QYXJhbXMoe30pO1xuICAgICAgICBhc3NlcnQocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH0sXG4gICAgICBleGNoYW5nZVJhdGU6IGFzeW5jIChkZW5vbSkgPT4gcXVlcnlTZXJ2aWNlLkV4Y2hhbmdlUmF0ZSh7IGRlbm9tIH0pLFxuICAgICAgZXhjaGFuZ2VSYXRlczogYXN5bmMgKCkgPT4gcXVlcnlTZXJ2aWNlLkV4Y2hhbmdlUmF0ZXMoe30pLFxuICAgICAgYWN0aXZlczogYXN5bmMgKCkgPT4gcXVlcnlTZXJ2aWNlLkFjdGl2ZXMoe30pLFxuICAgICAgZmVlZGVyRGVsZWdhdGlvbjogYXN5bmMgKHZhbGlkYXRvcl9hZGRyKSA9PlxuICAgICAgICBxdWVyeVNlcnZpY2UuRmVlZGVyRGVsZWdhdGlvbih7IHZhbGlkYXRvcl9hZGRyIH0pLFxuICAgICAgbWlzc0NvdW50ZXI6IGFzeW5jICh2YWxpZGF0b3JfYWRkcjogc3RyaW5nKSA9PlxuICAgICAgICBxdWVyeVNlcnZpY2UuTWlzc0NvdW50ZXIoeyB2YWxpZGF0b3JfYWRkciB9KSxcbiAgICAgIGFnZ3JlZ2F0ZVByZXZvdGU6IGFzeW5jICh2YWxpZGF0b3JfYWRkcjogc3RyaW5nKSA9PlxuICAgICAgICBxdWVyeVNlcnZpY2UuQWdncmVnYXRlUHJldm90ZSh7IHZhbGlkYXRvcl9hZGRyIH0pLFxuICAgICAgYWdncmVnYXRlUHJldm90ZXM6IGFzeW5jICgpID0+IHF1ZXJ5U2VydmljZS5BZ2dyZWdhdGVQcmV2b3Rlcyh7fSksXG4gICAgICBhZ2dyZWdhdGVWb3RlOiBhc3luYyAodmFsaWRhdG9yX2FkZHI6IHN0cmluZykgPT5cbiAgICAgICAgcXVlcnlTZXJ2aWNlLkFnZ3JlZ2F0ZVZvdGUoeyB2YWxpZGF0b3JfYWRkciB9KSxcbiAgICAgIGFnZ3JlZ2F0ZVZvdGVzOiBhc3luYyAoKSA9PiBxdWVyeVNlcnZpY2UuQWdncmVnYXRlVm90ZXMoe30pLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiYXNzZXJ0IiwiUXVlcnlDbGllbnRJbXBsIiwiY3JlYXRlUHJvdG9idWZScGNDbGllbnQiLCJzZXR1cE9yYWNsZUV4dGVuc2lvbiIsImJhc2UiLCJycGMiLCJxdWVyeVNlcnZpY2UiLCJvcmFjbGUiLCJwYXJhbXMiLCJQYXJhbXMiLCJleGNoYW5nZVJhdGUiLCJkZW5vbSIsIkV4Y2hhbmdlUmF0ZSIsImV4Y2hhbmdlUmF0ZXMiLCJFeGNoYW5nZVJhdGVzIiwiYWN0aXZlcyIsIkFjdGl2ZXMiLCJmZWVkZXJEZWxlZ2F0aW9uIiwidmFsaWRhdG9yX2FkZHIiLCJGZWVkZXJEZWxlZ2F0aW9uIiwibWlzc0NvdW50ZXIiLCJNaXNzQ291bnRlciIsImFnZ3JlZ2F0ZVByZXZvdGUiLCJBZ2dyZWdhdGVQcmV2b3RlIiwiYWdncmVnYXRlUHJldm90ZXMiLCJBZ2dyZWdhdGVQcmV2b3RlcyIsImFnZ3JlZ2F0ZVZvdGUiLCJBZ2dyZWdhdGVWb3RlIiwiYWdncmVnYXRlVm90ZXMiLCJBZ2dyZWdhdGVWb3RlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxNQUFNLFFBQVEsZ0JBQWdCO0FBQ3ZDLFNBTUVDLGVBQWUsUUFLVixnQkFBZ0I7QUFHdkIsU0FBU0MsdUJBQXVCLFFBQXFCLG1CQUFtQjtBQTJCeEUsT0FBTyxTQUFTQyxxQkFBcUJDLElBQWlCO0lBQ3BELE1BQU1DLE1BQU1ILHdCQUF3QkU7SUFDcEMsTUFBTUUsZUFBZSxJQUFJTCxnQkFBZ0JJO0lBRXpDLE9BQU87UUFDTEUsUUFBUTtZQUNOQyxzQkFBUSxvQkFBQTtnQkFDTixNQUFNLEVBQUVBLE1BQU0sRUFBRSxHQUFHLE1BQU1GLGFBQWFHLE1BQU0sQ0FBQyxDQUFDO2dCQUM5Q1QsT0FBT1E7Z0JBQ1AsT0FBT0E7WUFDVDtZQUNBRSxZQUFZOzJCQUFFLG9CQUFBLFVBQU9DO29CQUFVTCxPQUFBQSxhQUFhTSxZQUFZLENBQUM7d0JBQUVEO29CQUFNOztnQ0FBNUNBOzs7O1lBQ3JCRSw2QkFBZSxvQkFBQTtnQkFBWVAsT0FBQUEsYUFBYVEsYUFBYSxDQUFDLENBQUM7O1lBQ3ZEQyx1QkFBUyxvQkFBQTtnQkFBWVQsT0FBQUEsYUFBYVUsT0FBTyxDQUFDLENBQUM7O1lBQzNDQyxnQkFBZ0I7MkJBQUUsb0JBQUEsVUFBT0M7b0JBQ3ZCWixPQUFBQSxhQUFhYSxnQkFBZ0IsQ0FBQzt3QkFBRUQ7b0JBQWU7O2dDQUR4QkE7Ozs7WUFFekJFLFdBQVc7MkJBQUUsb0JBQUEsVUFBT0Y7b0JBQ2xCWixPQUFBQSxhQUFhZSxXQUFXLENBQUM7d0JBQUVIO29CQUFlOztnQ0FEeEJBOzs7O1lBRXBCSSxnQkFBZ0I7MkJBQUUsb0JBQUEsVUFBT0o7b0JBQ3ZCWixPQUFBQSxhQUFhaUIsZ0JBQWdCLENBQUM7d0JBQUVMO29CQUFlOztnQ0FEeEJBOzs7O1lBRXpCTSxpQ0FBbUIsb0JBQUE7Z0JBQVlsQixPQUFBQSxhQUFhbUIsaUJBQWlCLENBQUMsQ0FBQzs7WUFDL0RDLGFBQWE7MkJBQUUsb0JBQUEsVUFBT1I7b0JBQ3BCWixPQUFBQSxhQUFhcUIsYUFBYSxDQUFDO3dCQUFFVDtvQkFBZTs7Z0NBRHhCQTs7OztZQUV0QlUsOEJBQWdCLG9CQUFBO2dCQUFZdEIsT0FBQUEsYUFBYXVCLGNBQWMsQ0FBQyxDQUFDOztRQUMzRDtJQUNGO0FBQ0YifQ==
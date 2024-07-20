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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import { createProtobufRpcClient, setupBankExtension } from "@cosmjs/stargate";
import { QueryClientImpl } from "cosmjs-types/cosmos/bank/v1beta1/query";
import "text-encoding";
export function setupBankExtensionExtended(base) {
    const rpc = createProtobufRpcClient(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc);
    return {
        bank: _object_spread_props(_object_spread({}, setupBankExtension(base).bank), {
            allBalances: function() {
                var _ref = _async_to_generator(function*(address, pagination) {
                    const { balances } = yield queryService.AllBalances({
                        address,
                        pagination
                    });
                    return balances;
                });
                return function(address, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            spendableBalances: function() {
                var _ref = _async_to_generator(function*(address) {
                    const { balances } = yield queryService.SpendableBalances({
                        address: address
                    });
                    return balances;
                });
                return function(address) {
                    return _ref.apply(this, arguments);
                };
            }()
        })
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3Ntb3MvYmFuay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb2luLFxuICBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCxcbiAgUXVlcnlDbGllbnQsXG4gIHNldHVwQmFua0V4dGVuc2lvbixcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYmFuay92MWJldGExL2JhbmtcIjtcbmltcG9ydCB7XG4gIFF1ZXJ5Q2xpZW50SW1wbCxcbiAgUXVlcnlUb3RhbFN1cHBseVJlc3BvbnNlLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYW5rL3YxYmV0YTEvcXVlcnlcIjtcbmltcG9ydCB7IFBhZ2VSZXF1ZXN0IH0gZnJvbSBcImNvc21qcy10eXBlcy9oZWxwZXJzXCI7XG5pbXBvcnQgXCJ0ZXh0LWVuY29kaW5nXCI7XG5cbmV4cG9ydCB0eXBlIEJhbmtFeHRlbnNpb25FeHRlbmRlZCA9IHtcbiAgcmVhZG9ubHkgYmFuazoge1xuICAgIHJlYWRvbmx5IGJhbGFuY2U6IChhZGRyZXNzOiBzdHJpbmcsIGRlbm9tOiBzdHJpbmcpID0+IFByb21pc2U8Q29pbj47XG4gICAgcmVhZG9ubHkgYWxsQmFsYW5jZXM6IChcbiAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgIHBhZ2luYXRpb24/OiBQYWdlUmVxdWVzdFxuICAgICkgPT4gUHJvbWlzZTxDb2luW10+O1xuICAgIHJlYWRvbmx5IHNwZW5kYWJsZUJhbGFuY2VzOiAoYWRkcmVzczogc3RyaW5nKSA9PiBQcm9taXNlPENvaW5bXT47XG4gICAgcmVhZG9ubHkgdG90YWxTdXBwbHk6IChcbiAgICAgIHBhZ2luYXRpb25LZXk/OiBVaW50OEFycmF5XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5VG90YWxTdXBwbHlSZXNwb25zZT47XG4gICAgcmVhZG9ubHkgc3VwcGx5T2Y6IChkZW5vbTogc3RyaW5nKSA9PiBQcm9taXNlPENvaW4+O1xuICAgIHJlYWRvbmx5IGRlbm9tTWV0YWRhdGE6IChkZW5vbTogc3RyaW5nKSA9PiBQcm9taXNlPE1ldGFkYXRhPjtcbiAgICByZWFkb25seSBkZW5vbXNNZXRhZGF0YTogKCkgPT4gUHJvbWlzZTxNZXRhZGF0YVtdPjtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEJhbmtFeHRlbnNpb25FeHRlbmRlZChcbiAgYmFzZTogUXVlcnlDbGllbnRcbik6IEJhbmtFeHRlbnNpb25FeHRlbmRlZCB7XG4gIGNvbnN0IHJwYyA9IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50KGJhc2UpO1xuICAvLyBVc2UgdGhpcyBzZXJ2aWNlIHRvIGdldCBlYXN5IHR5cGVkIGFjY2VzcyB0byBxdWVyeSBtZXRob2RzXG4gIC8vIFRoaXMgY2Fubm90IGJlIHVzZWQgZm9yIHByb29mIHZlcmlmaWNhdGlvblxuICBjb25zdCBxdWVyeVNlcnZpY2UgPSBuZXcgUXVlcnlDbGllbnRJbXBsKHJwYyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiYW5rOiB7XG4gICAgICAuLi5zZXR1cEJhbmtFeHRlbnNpb24oYmFzZSkuYmFuayxcbiAgICAgIGFsbEJhbGFuY2VzOiBhc3luYyAoYWRkcmVzczogc3RyaW5nLCBwYWdpbmF0aW9uPzogUGFnZVJlcXVlc3QpID0+IHtcbiAgICAgICAgY29uc3QgeyBiYWxhbmNlcyB9ID0gYXdhaXQgcXVlcnlTZXJ2aWNlLkFsbEJhbGFuY2VzKHtcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgIHBhZ2luYXRpb24sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmFsYW5jZXM7XG4gICAgICB9LFxuXG4gICAgICBzcGVuZGFibGVCYWxhbmNlczogYXN5bmMgKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB7IGJhbGFuY2VzIH0gPSBhd2FpdCBxdWVyeVNlcnZpY2UuU3BlbmRhYmxlQmFsYW5jZXMoe1xuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmFsYW5jZXM7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlUHJvdG9idWZScGNDbGllbnQiLCJzZXR1cEJhbmtFeHRlbnNpb24iLCJRdWVyeUNsaWVudEltcGwiLCJzZXR1cEJhbmtFeHRlbnNpb25FeHRlbmRlZCIsImJhc2UiLCJycGMiLCJxdWVyeVNlcnZpY2UiLCJiYW5rIiwiYWxsQmFsYW5jZXMiLCJhZGRyZXNzIiwicGFnaW5hdGlvbiIsImJhbGFuY2VzIiwiQWxsQmFsYW5jZXMiLCJzcGVuZGFibGVCYWxhbmNlcyIsIlNwZW5kYWJsZUJhbGFuY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUVFQSx1QkFBdUIsRUFFdkJDLGtCQUFrQixRQUNiLG1CQUFtQjtBQUUxQixTQUNFQyxlQUFlLFFBRVYseUNBQXlDO0FBRWhELE9BQU8sZ0JBQWdCO0FBbUJ2QixPQUFPLFNBQVNDLDJCQUNkQyxJQUFpQjtJQUVqQixNQUFNQyxNQUFNTCx3QkFBd0JJO0lBQ3BDLDZEQUE2RDtJQUM3RCw2Q0FBNkM7SUFDN0MsTUFBTUUsZUFBZSxJQUFJSixnQkFBZ0JHO0lBRXpDLE9BQU87UUFDTEUsTUFBTSx3Q0FDRE4sbUJBQW1CRyxNQUFNRyxJQUFJO1lBQ2hDQyxXQUFXOzJCQUFFLG9CQUFBLFVBQU9DLFNBQWlCQztvQkFDbkMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNTCxhQUFhTSxXQUFXLENBQUM7d0JBQ2xESDt3QkFDQUM7b0JBQ0Y7b0JBQ0EsT0FBT0M7Z0JBQ1Q7Z0NBTm9CRixTQUFpQkM7Ozs7WUFRckNHLGlCQUFpQjsyQkFBRSxvQkFBQSxVQUFPSjtvQkFDeEIsTUFBTSxFQUFFRSxRQUFRLEVBQUUsR0FBRyxNQUFNTCxhQUFhUSxpQkFBaUIsQ0FBQzt3QkFDeERMLFNBQVNBO29CQUNYO29CQUNBLE9BQU9FO2dCQUNUO2dDQUwwQkY7Ozs7O0lBTzlCO0FBQ0YifQ==
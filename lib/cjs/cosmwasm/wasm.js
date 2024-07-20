"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupWasmExtensionExtended", {
    enumerable: true,
    get: function() {
        return setupWasmExtensionExtended;
    }
});
const _cosmwasmstargate = require("@cosmjs/cosmwasm-stargate");
const _stargate = require("@cosmjs/stargate");
const _query = require("cosmjs-types/cosmwasm/wasm/v1/query");
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
function setupWasmExtensionExtended(base) {
    const rpc = (0, _stargate.createProtobufRpcClient)(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new _query.QueryClientImpl(rpc);
    return {
        wasm: _object_spread_props(_object_spread({}, (0, _cosmwasmstargate.setupWasmExtension)(base).wasm), {
            listCodeInfo: function() {
                var _ref = _async_to_generator(function*(pageRequest) {
                    const request = {
                        pagination: pageRequest
                    };
                    return queryService.Codes(request);
                });
                return function(pageRequest) {
                    return _ref.apply(this, arguments);
                };
            }(),
            listContractsByCodeId: function() {
                var _ref = _async_to_generator(function*(id, pageRequest) {
                    const request = {
                        codeId: id,
                        pagination: pageRequest
                    };
                    return queryService.ContractsByCode(request);
                });
                return function(id, pageRequest) {
                    return _ref.apply(this, arguments);
                };
            }(),
            getContractCodeHistory: function() {
                var _ref = _async_to_generator(function*(address, pageRequest) {
                    const request = {
                        address: address,
                        pagination: pageRequest
                    };
                    return queryService.ContractHistory(request);
                });
                return function(address, pageRequest) {
                    return _ref.apply(this, arguments);
                };
            }(),
            getAllContractState: function() {
                var _ref = _async_to_generator(function*(address, pageRequest) {
                    const request = {
                        address: address,
                        pagination: pageRequest
                    };
                    return queryService.AllContractState(request);
                });
                return function(address, pageRequest) {
                    return _ref.apply(this, arguments);
                };
            }()
        })
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3Ntd2FzbS93YXNtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25PYmplY3QsIHNldHVwV2FzbUV4dGVuc2lvbiB9IGZyb20gXCJAY29zbWpzL2Nvc213YXNtLXN0YXJnYXRlXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgY3JlYXRlUHJvdG9idWZScGNDbGllbnQgfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgUGFnZVJlcXVlc3QgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHtcbiAgUXVlcnlBbGxDb250cmFjdFN0YXRlUmVzcG9uc2UsXG4gIFF1ZXJ5Q2xpZW50SW1wbCxcbiAgUXVlcnlDb2RlUmVzcG9uc2UsXG4gIFF1ZXJ5Q29kZXNSZXNwb25zZSxcbiAgUXVlcnlDb250cmFjdEhpc3RvcnlSZXNwb25zZSxcbiAgUXVlcnlDb250cmFjdEluZm9SZXNwb25zZSxcbiAgUXVlcnlDb250cmFjdHNCeUNvZGVSZXNwb25zZSxcbiAgUXVlcnlSYXdDb250cmFjdFN0YXRlUmVzcG9uc2UsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbXdhc20vd2FzbS92MS9xdWVyeVwiO1xuXG5leHBvcnQgdHlwZSBXYXNtRXh0ZW5zaW9uRXh0ZW5kZWQgPSB7XG4gIHJlYWRvbmx5IHdhc206IHtcbiAgICByZWFkb25seSBsaXN0Q29kZUluZm86IChcbiAgICAgIHBhZ2VSZXF1ZXN0PzogUGFnZVJlcXVlc3RcbiAgICApID0+IFByb21pc2U8UXVlcnlDb2Rlc1Jlc3BvbnNlPjtcbiAgICAvKipcbiAgICAgKiBEb3dubG9hZHMgdGhlIG9yaWdpbmFsIHdhc20gYnl0ZWNvZGUgYnkgY29kZSBJRC5cbiAgICAgKlxuICAgICAqIFRocm93cyBhbiBlcnJvciBpZiBubyBjb2RlIHdpdGggdGhpcyBpZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdldENvZGU6IChpZDogbnVtYmVyKSA9PiBQcm9taXNlPFF1ZXJ5Q29kZVJlc3BvbnNlPjtcbiAgICByZWFkb25seSBsaXN0Q29udHJhY3RzQnlDb2RlSWQ6IChcbiAgICAgIGlkOiBiaWdpbnQsXG4gICAgICBwYWdlUmVxdWVzdD86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5Q29udHJhY3RzQnlDb2RlUmVzcG9uc2U+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgbnVsbCB3aGVuIGNvbnRyYWN0IHdhcyBub3QgZm91bmQgYXQgdGhpcyBhZGRyZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdldENvbnRyYWN0SW5mbzogKFxuICAgICAgYWRkcmVzczogc3RyaW5nXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5Q29udHJhY3RJbmZvUmVzcG9uc2U+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgbnVsbCB3aGVuIGNvbnRyYWN0IGhpc3Rvcnkgd2FzIG5vdCBmb3VuZCBmb3IgdGhpcyBhZGRyZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdldENvbnRyYWN0Q29kZUhpc3Rvcnk6IChcbiAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgIHBhZ2VSZXF1ZXN0PzogUGFnZVJlcXVlc3RcbiAgICApID0+IFByb21pc2U8UXVlcnlDb250cmFjdEhpc3RvcnlSZXNwb25zZT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY29udHJhY3Qgc3RhdGUuXG4gICAgICogVGhpcyBpcyBhbiBlbXB0eSBhcnJheSBpZiBubyBzdWNoIGNvbnRyYWN0LCBvciBjb250cmFjdCBoYXMgbm8gZGF0YS5cbiAgICAgKi9cbiAgICByZWFkb25seSBnZXRBbGxDb250cmFjdFN0YXRlOiAoXG4gICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICBwYWdlUmVxdWVzdD86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5QWxsQ29udHJhY3RTdGF0ZVJlc3BvbnNlPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkYXRhIGF0IHRoZSBrZXkgaWYgcHJlc2VudCAodW5rbm93biBkZWNvZGVkIGpzb24pLFxuICAgICAqIG9yIG51bGwgaWYgbm8gZGF0YSBhdCB0aGlzIChjb250cmFjdCBhZGRyZXNzLCBrZXkpIHBhaXJcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWVyeUNvbnRyYWN0UmF3OiAoXG4gICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICBrZXk6IFVpbnQ4QXJyYXlcbiAgICApID0+IFByb21pc2U8UXVlcnlSYXdDb250cmFjdFN0YXRlUmVzcG9uc2U+O1xuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgc21hcnQgcXVlcnkgb24gdGhlIGNvbnRyYWN0IGFuZCBwYXJzZXMgdGhlIHJlc3BvbnNlIGFzIEpTT04uXG4gICAgICogVGhyb3dzIGVycm9yIGlmIG5vIHN1Y2ggY29udHJhY3QgZXhpc3RzLCB0aGUgcXVlcnkgZm9ybWF0IGlzIGludmFsaWQgb3IgdGhlIHJlc3BvbnNlIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVlcnlDb250cmFjdFNtYXJ0OiAoXG4gICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICBxdWVyeTogSnNvbk9iamVjdFxuICAgICkgPT4gUHJvbWlzZTxKc29uT2JqZWN0PjtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFdhc21FeHRlbnNpb25FeHRlbmRlZChcbiAgYmFzZTogUXVlcnlDbGllbnRcbik6IFdhc21FeHRlbnNpb25FeHRlbmRlZCB7XG4gIGNvbnN0IHJwYyA9IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50KGJhc2UpO1xuICAvLyBVc2UgdGhpcyBzZXJ2aWNlIHRvIGdldCBlYXN5IHR5cGVkIGFjY2VzcyB0byBxdWVyeSBtZXRob2RzXG4gIC8vIFRoaXMgY2Fubm90IGJlIHVzZWQgZm9yIHByb29mIHZlcmlmaWNhdGlvblxuICBjb25zdCBxdWVyeVNlcnZpY2UgPSBuZXcgUXVlcnlDbGllbnRJbXBsKHJwYyk7XG5cbiAgcmV0dXJuIHtcbiAgICB3YXNtOiB7XG4gICAgICAuLi5zZXR1cFdhc21FeHRlbnNpb24oYmFzZSkud2FzbSxcbiAgICAgIGxpc3RDb2RlSW5mbzogYXN5bmMgKHBhZ2VSZXF1ZXN0PzogUGFnZVJlcXVlc3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdlUmVxdWVzdCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5U2VydmljZS5Db2RlcyhyZXF1ZXN0KTtcbiAgICAgIH0sXG4gICAgICBsaXN0Q29udHJhY3RzQnlDb2RlSWQ6IGFzeW5jIChpZDogYmlnaW50LCBwYWdlUmVxdWVzdD86IFBhZ2VSZXF1ZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgY29kZUlkOiBpZCxcbiAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdlUmVxdWVzdCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5U2VydmljZS5Db250cmFjdHNCeUNvZGUocmVxdWVzdCk7XG4gICAgICB9LFxuICAgICAgZ2V0Q29udHJhY3RDb2RlSGlzdG9yeTogYXN5bmMgKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHBhZ2VSZXF1ZXN0PzogUGFnZVJlcXVlc3RcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgcGFnaW5hdGlvbjogcGFnZVJlcXVlc3QsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBxdWVyeVNlcnZpY2UuQ29udHJhY3RIaXN0b3J5KHJlcXVlc3QpO1xuICAgICAgfSxcblxuICAgICAgZ2V0QWxsQ29udHJhY3RTdGF0ZTogYXN5bmMgKFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHBhZ2VSZXF1ZXN0PzogUGFnZVJlcXVlc3RcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0ge1xuICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgcGFnaW5hdGlvbjogcGFnZVJlcXVlc3QsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBxdWVyeVNlcnZpY2UuQWxsQ29udHJhY3RTdGF0ZShyZXF1ZXN0KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJzZXR1cFdhc21FeHRlbnNpb25FeHRlbmRlZCIsImJhc2UiLCJycGMiLCJjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCIsInF1ZXJ5U2VydmljZSIsIlF1ZXJ5Q2xpZW50SW1wbCIsIndhc20iLCJzZXR1cFdhc21FeHRlbnNpb24iLCJsaXN0Q29kZUluZm8iLCJwYWdlUmVxdWVzdCIsInJlcXVlc3QiLCJwYWdpbmF0aW9uIiwiQ29kZXMiLCJsaXN0Q29udHJhY3RzQnlDb2RlSWQiLCJpZCIsImNvZGVJZCIsIkNvbnRyYWN0c0J5Q29kZSIsImdldENvbnRyYWN0Q29kZUhpc3RvcnkiLCJhZGRyZXNzIiwiQ29udHJhY3RIaXN0b3J5IiwiZ2V0QWxsQ29udHJhY3RTdGF0ZSIsIkFsbENvbnRyYWN0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcUVnQkE7OztlQUFBQTs7O2tDQXJFK0I7MEJBQ007dUJBVzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeURBLFNBQVNBLDJCQUNkQyxJQUFpQjtJQUVqQixNQUFNQyxNQUFNQyxJQUFBQSxpQ0FBdUIsRUFBQ0Y7SUFDcEMsNkRBQTZEO0lBQzdELDZDQUE2QztJQUM3QyxNQUFNRyxlQUFlLElBQUlDLHNCQUFlLENBQUNIO0lBRXpDLE9BQU87UUFDTEksTUFBTSx3Q0FDREMsSUFBQUEsb0NBQWtCLEVBQUNOLE1BQU1LLElBQUk7WUFDaENFLFlBQVk7MkJBQUUsb0JBQUEsVUFBT0M7b0JBQ25CLE1BQU1DLFVBQVU7d0JBQ2RDLFlBQVlGO29CQUNkO29CQUNBLE9BQU9MLGFBQWFRLEtBQUssQ0FBQ0Y7Z0JBQzVCO2dDQUxxQkQ7Ozs7WUFNckJJLHFCQUFxQjsyQkFBRSxvQkFBQSxVQUFPQyxJQUFZTDtvQkFDeEMsTUFBTUMsVUFBVTt3QkFDZEssUUFBUUQ7d0JBQ1JILFlBQVlGO29CQUNkO29CQUNBLE9BQU9MLGFBQWFZLGVBQWUsQ0FBQ047Z0JBQ3RDO2dDQU44QkksSUFBWUw7Ozs7WUFPMUNRLHNCQUFzQjsyQkFBRSxvQkFBQSxVQUN0QkMsU0FDQVQ7b0JBRUEsTUFBTUMsVUFBVTt3QkFDZFEsU0FBU0E7d0JBQ1RQLFlBQVlGO29CQUNkO29CQUNBLE9BQU9MLGFBQWFlLGVBQWUsQ0FBQ1Q7Z0JBQ3RDO2dDQVJFUSxTQUNBVDs7OztZQVNGVyxtQkFBbUI7MkJBQUUsb0JBQUEsVUFDbkJGLFNBQ0FUO29CQUVBLE1BQU1DLFVBQVU7d0JBQ2RRLFNBQVNBO3dCQUNUUCxZQUFZRjtvQkFDZDtvQkFDQSxPQUFPTCxhQUFhaUIsZ0JBQWdCLENBQUNYO2dCQUN2QztnQ0FSRVEsU0FDQVQ7Ozs7O0lBU047QUFDRiJ9
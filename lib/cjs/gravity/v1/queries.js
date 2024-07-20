"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupGravityExtension", {
    enumerable: true,
    get: function() {
        return setupGravityExtension;
    }
});
const _utils = require("@cosmjs/utils");
const _query = require("./query");
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
function setupGravityExtension(base) {
    const rpc = (0, _stargate.createProtobufRpcClient)(base);
    const queryService = new _query.QueryClientImpl(rpc);
    return {
        gravity: {
            params: /*#__PURE__*/ _async_to_generator(function*() {
                const { params } = yield queryService.Params({});
                (0, _utils.assert)(params);
                return params;
            }),
            pendingSendToEth: function() {
                var _ref = _async_to_generator(function*(q) {
                    return queryService.GetPendingSendToEth(q);
                });
                return function(q) {
                    return _ref.apply(this, arguments);
                };
            }(),
            denomToERC20: function() {
                var _ref = _async_to_generator(function*(q) {
                    return queryService.DenomToERC20(q);
                });
                return function(q) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL3F1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIFF1ZXJ5Q2xpZW50SW1wbCxcbiAgUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0LFxuICBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlLFxuICBRdWVyeVBlbmRpbmdTZW5kVG9FdGgsXG4gIFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlLFxufSBmcm9tIFwiLi9xdWVyeVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCwgUXVlcnlDbGllbnQgfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vZ2VuZXNpc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyYXZpdHlFeHRlbnNpb24ge1xuICByZWFkb25seSBncmF2aXR5OiB7XG4gICAgcmVhZG9ubHkgcGFyYW1zOiAoKSA9PiBQcm9taXNlPFBhcmFtcz47XG4gICAgcmVhZG9ubHkgcGVuZGluZ1NlbmRUb0V0aDogKFxuICAgICAgcTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlPjtcbiAgICByZWFkb25seSBkZW5vbVRvRVJDMjA6IChcbiAgICAgIHE6IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdFxuICAgICkgPT4gUHJvbWlzZTxRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwR3Jhdml0eUV4dGVuc2lvbihiYXNlOiBRdWVyeUNsaWVudCk6IEdyYXZpdHlFeHRlbnNpb24ge1xuICBjb25zdCBycGMgPSBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudChiYXNlKTtcbiAgY29uc3QgcXVlcnlTZXJ2aWNlID0gbmV3IFF1ZXJ5Q2xpZW50SW1wbChycGMpO1xuXG4gIHJldHVybiB7XG4gICAgZ3Jhdml0eToge1xuICAgICAgcGFyYW1zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBhd2FpdCBxdWVyeVNlcnZpY2UuUGFyYW1zKHt9KTtcbiAgICAgICAgYXNzZXJ0KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9LFxuICAgICAgcGVuZGluZ1NlbmRUb0V0aDogYXN5bmMgKHE6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCkgPT4ge1xuICAgICAgICByZXR1cm4gcXVlcnlTZXJ2aWNlLkdldFBlbmRpbmdTZW5kVG9FdGgocSk7XG4gICAgICB9LFxuICAgICAgZGVub21Ub0VSQzIwOiBhc3luYyAocTogUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBxdWVyeVNlcnZpY2UuRGVub21Ub0VSQzIwKHEpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInNldHVwR3Jhdml0eUV4dGVuc2lvbiIsImJhc2UiLCJycGMiLCJjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCIsInF1ZXJ5U2VydmljZSIsIlF1ZXJ5Q2xpZW50SW1wbCIsImdyYXZpdHkiLCJwYXJhbXMiLCJQYXJhbXMiLCJhc3NlcnQiLCJwZW5kaW5nU2VuZFRvRXRoIiwicSIsIkdldFBlbmRpbmdTZW5kVG9FdGgiLCJkZW5vbVRvRVJDMjAiLCJEZW5vbVRvRVJDMjAiXSwibWFwcGluZ3MiOiI7Ozs7K0JBd0JnQkE7OztlQUFBQTs7O3VCQXhCTzt1QkFPaEI7MEJBRThDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlOUMsU0FBU0Esc0JBQXNCQyxJQUFpQjtJQUNyRCxNQUFNQyxNQUFNQyxJQUFBQSxpQ0FBdUIsRUFBQ0Y7SUFDcEMsTUFBTUcsZUFBZSxJQUFJQyxzQkFBZSxDQUFDSDtJQUV6QyxPQUFPO1FBQ0xJLFNBQVM7WUFDUEMsc0JBQVEsb0JBQUE7Z0JBQ04sTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBRyxNQUFNSCxhQUFhSSxNQUFNLENBQUMsQ0FBQztnQkFDOUNDLElBQUFBLGFBQU0sRUFBQ0Y7Z0JBQ1AsT0FBT0E7WUFDVDtZQUNBRyxnQkFBZ0I7MkJBQUUsb0JBQUEsVUFBT0M7b0JBQ3ZCLE9BQU9QLGFBQWFRLG1CQUFtQixDQUFDRDtnQkFDMUM7Z0NBRnlCQTs7OztZQUd6QkUsWUFBWTsyQkFBRSxvQkFBQSxVQUFPRjtvQkFDbkIsT0FBT1AsYUFBYVUsWUFBWSxDQUFDSDtnQkFDbkM7Z0NBRnFCQTs7OztRQUd2QjtJQUNGO0FBQ0YifQ==
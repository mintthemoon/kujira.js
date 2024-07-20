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
import { QueryClientImpl } from "./query";
import { createProtobufRpcClient } from "@cosmjs/stargate";
export function setupGravityExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        gravity: {
            params: /*#__PURE__*/ _async_to_generator(function*() {
                const { params } = yield queryService.Params({});
                assert(params);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL3F1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7XG4gIFF1ZXJ5Q2xpZW50SW1wbCxcbiAgUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0LFxuICBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlLFxuICBRdWVyeVBlbmRpbmdTZW5kVG9FdGgsXG4gIFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlLFxufSBmcm9tIFwiLi9xdWVyeVwiO1xuXG5pbXBvcnQgeyBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCwgUXVlcnlDbGllbnQgfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vZ2VuZXNpc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyYXZpdHlFeHRlbnNpb24ge1xuICByZWFkb25seSBncmF2aXR5OiB7XG4gICAgcmVhZG9ubHkgcGFyYW1zOiAoKSA9PiBQcm9taXNlPFBhcmFtcz47XG4gICAgcmVhZG9ubHkgcGVuZGluZ1NlbmRUb0V0aDogKFxuICAgICAgcTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlPjtcbiAgICByZWFkb25seSBkZW5vbVRvRVJDMjA6IChcbiAgICAgIHE6IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdFxuICAgICkgPT4gUHJvbWlzZTxRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwR3Jhdml0eUV4dGVuc2lvbihiYXNlOiBRdWVyeUNsaWVudCk6IEdyYXZpdHlFeHRlbnNpb24ge1xuICBjb25zdCBycGMgPSBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudChiYXNlKTtcbiAgY29uc3QgcXVlcnlTZXJ2aWNlID0gbmV3IFF1ZXJ5Q2xpZW50SW1wbChycGMpO1xuXG4gIHJldHVybiB7XG4gICAgZ3Jhdml0eToge1xuICAgICAgcGFyYW1zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBhd2FpdCBxdWVyeVNlcnZpY2UuUGFyYW1zKHt9KTtcbiAgICAgICAgYXNzZXJ0KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9LFxuICAgICAgcGVuZGluZ1NlbmRUb0V0aDogYXN5bmMgKHE6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCkgPT4ge1xuICAgICAgICByZXR1cm4gcXVlcnlTZXJ2aWNlLkdldFBlbmRpbmdTZW5kVG9FdGgocSk7XG4gICAgICB9LFxuICAgICAgZGVub21Ub0VSQzIwOiBhc3luYyAocTogUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBxdWVyeVNlcnZpY2UuRGVub21Ub0VSQzIwKHEpO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImFzc2VydCIsIlF1ZXJ5Q2xpZW50SW1wbCIsImNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50Iiwic2V0dXBHcmF2aXR5RXh0ZW5zaW9uIiwiYmFzZSIsInJwYyIsInF1ZXJ5U2VydmljZSIsImdyYXZpdHkiLCJwYXJhbXMiLCJQYXJhbXMiLCJwZW5kaW5nU2VuZFRvRXRoIiwicSIsIkdldFBlbmRpbmdTZW5kVG9FdGgiLCJkZW5vbVRvRVJDMjAiLCJEZW5vbVRvRVJDMjAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsTUFBTSxRQUFRLGdCQUFnQjtBQUN2QyxTQUNFQyxlQUFlLFFBS1YsVUFBVTtBQUVqQixTQUFTQyx1QkFBdUIsUUFBcUIsbUJBQW1CO0FBZXhFLE9BQU8sU0FBU0Msc0JBQXNCQyxJQUFpQjtJQUNyRCxNQUFNQyxNQUFNSCx3QkFBd0JFO0lBQ3BDLE1BQU1FLGVBQWUsSUFBSUwsZ0JBQWdCSTtJQUV6QyxPQUFPO1FBQ0xFLFNBQVM7WUFDUEMsc0JBQVEsb0JBQUE7Z0JBQ04sTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBRyxNQUFNRixhQUFhRyxNQUFNLENBQUMsQ0FBQztnQkFDOUNULE9BQU9RO2dCQUNQLE9BQU9BO1lBQ1Q7WUFDQUUsZ0JBQWdCOzJCQUFFLG9CQUFBLFVBQU9DO29CQUN2QixPQUFPTCxhQUFhTSxtQkFBbUIsQ0FBQ0Q7Z0JBQzFDO2dDQUZ5QkE7Ozs7WUFHekJFLFlBQVk7MkJBQUUsb0JBQUEsVUFBT0Y7b0JBQ25CLE9BQU9MLGFBQWFRLFlBQVksQ0FBQ0g7Z0JBQ25DO2dDQUZxQkE7Ozs7UUFHdkI7SUFDRjtBQUNGIn0=
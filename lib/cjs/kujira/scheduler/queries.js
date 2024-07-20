"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupSchedulerExtension", {
    enumerable: true,
    get: function() {
        return setupSchedulerExtension;
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
function setupSchedulerExtension(base) {
    const rpc = (0, _stargate.createProtobufRpcClient)(base);
    const queryService = new _query.QueryClientImpl(rpc);
    return {
        scheduler: {
            params: /*#__PURE__*/ _async_to_generator(function*() {
                const { params } = yield queryService.Params({});
                (0, _utils.assert)(params);
                return params;
            }),
            hook: function() {
                var _ref = _async_to_generator(function*(id) {
                    const { Hook } = yield queryService.Hook({
                        id
                    });
                    (0, _utils.assert)(Hook);
                    return Hook;
                });
                return function(id) {
                    return _ref.apply(this, arguments);
                };
            }(),
            allHooks: function() {
                var _ref = _async_to_generator(function*(paginationKey) {
                    return queryService.HookAll({
                        pagination: (0, _stargate.createPagination)(paginationKey)
                    });
                });
                return function(paginationKey) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3F1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IFF1ZXJ5QWxsSG9va1Jlc3BvbnNlLCBRdWVyeUNsaWVudEltcGwgfSBmcm9tIFwiLi90eXBlcy9xdWVyeVwiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vdHlwZXMvcGFyYW1zXCI7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZVBhZ2luYXRpb24sXG4gIGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50LFxuICBRdWVyeUNsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IEhvb2sgfSBmcm9tIFwiLi90eXBlcy9ob29rXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVyRXh0ZW5zaW9uIHtcbiAgcmVhZG9ubHkgc2NoZWR1bGVyOiB7XG4gICAgcmVhZG9ubHkgcGFyYW1zOiAoKSA9PiBQcm9taXNlPFBhcmFtcz47XG4gICAgcmVhZG9ubHkgaG9vazogKGlkOiBudW1iZXIpID0+IFByb21pc2U8SG9vaz47XG4gICAgcmVhZG9ubHkgYWxsSG9va3M6IChcbiAgICAgIHBhZ2luYXRpb25LZXk/OiBVaW50OEFycmF5XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5QWxsSG9va1Jlc3BvbnNlPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2NoZWR1bGVyRXh0ZW5zaW9uKGJhc2U6IFF1ZXJ5Q2xpZW50KTogU2NoZWR1bGVyRXh0ZW5zaW9uIHtcbiAgY29uc3QgcnBjID0gY3JlYXRlUHJvdG9idWZScGNDbGllbnQoYmFzZSk7XG4gIGNvbnN0IHF1ZXJ5U2VydmljZSA9IG5ldyBRdWVyeUNsaWVudEltcGwocnBjKTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlcjoge1xuICAgICAgcGFyYW1zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBhd2FpdCBxdWVyeVNlcnZpY2UuUGFyYW1zKHt9KTtcbiAgICAgICAgYXNzZXJ0KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9LFxuICAgICAgaG9vazogYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgSG9vayB9ID0gYXdhaXQgcXVlcnlTZXJ2aWNlLkhvb2soeyBpZCB9KTtcbiAgICAgICAgYXNzZXJ0KEhvb2spO1xuICAgICAgICByZXR1cm4gSG9vaztcbiAgICAgIH0sXG4gICAgICBhbGxIb29rczogYXN5bmMgKHBhZ2luYXRpb25LZXk/OiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBxdWVyeVNlcnZpY2UuSG9va0FsbCh7XG4gICAgICAgICAgcGFnaW5hdGlvbjogY3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uS2V5KSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsic2V0dXBTY2hlZHVsZXJFeHRlbnNpb24iLCJiYXNlIiwicnBjIiwiY3JlYXRlUHJvdG9idWZScGNDbGllbnQiLCJxdWVyeVNlcnZpY2UiLCJRdWVyeUNsaWVudEltcGwiLCJzY2hlZHVsZXIiLCJwYXJhbXMiLCJQYXJhbXMiLCJhc3NlcnQiLCJob29rIiwiaWQiLCJIb29rIiwiYWxsSG9va3MiLCJwYWdpbmF0aW9uS2V5IiwiSG9va0FsbCIsInBhZ2luYXRpb24iLCJjcmVhdGVQYWdpbmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXFCZ0JBOzs7ZUFBQUE7Ozt1QkFyQk87dUJBQytCOzBCQU8vQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsU0FBU0Esd0JBQXdCQyxJQUFpQjtJQUN2RCxNQUFNQyxNQUFNQyxJQUFBQSxpQ0FBdUIsRUFBQ0Y7SUFDcEMsTUFBTUcsZUFBZSxJQUFJQyxzQkFBZSxDQUFDSDtJQUV6QyxPQUFPO1FBQ0xJLFdBQVc7WUFDVEMsc0JBQVEsb0JBQUE7Z0JBQ04sTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBRyxNQUFNSCxhQUFhSSxNQUFNLENBQUMsQ0FBQztnQkFDOUNDLElBQUFBLGFBQU0sRUFBQ0Y7Z0JBQ1AsT0FBT0E7WUFDVDtZQUNBRyxJQUFJOzJCQUFFLG9CQUFBLFVBQU9DO29CQUNYLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVIsYUFBYVEsSUFBSSxDQUFDO3dCQUFFRDtvQkFBRztvQkFDOUNGLElBQUFBLGFBQU0sRUFBQ0c7b0JBQ1AsT0FBT0E7Z0JBQ1Q7Z0NBSmFEOzs7O1lBS2JFLFFBQVE7MkJBQUUsb0JBQUEsVUFBT0M7b0JBQ2YsT0FBT1YsYUFBYVcsT0FBTyxDQUFDO3dCQUMxQkMsWUFBWUMsSUFBQUEsMEJBQWdCLEVBQUNIO29CQUMvQjtnQkFDRjtnQ0FKaUJBOzs7O1FBS25CO0lBQ0Y7QUFDRiJ9
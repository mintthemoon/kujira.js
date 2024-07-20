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
import { createPagination, createProtobufRpcClient } from "@cosmjs/stargate";
export function setupSchedulerExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        scheduler: {
            params: /*#__PURE__*/ _async_to_generator(function*() {
                const { params } = yield queryService.Params({});
                assert(params);
                return params;
            }),
            hook: function() {
                var _ref = _async_to_generator(function*(id) {
                    const { Hook } = yield queryService.Hook({
                        id
                    });
                    assert(Hook);
                    return Hook;
                });
                return function(id) {
                    return _ref.apply(this, arguments);
                };
            }(),
            allHooks: function() {
                var _ref = _async_to_generator(function*(paginationKey) {
                    return queryService.HookAll({
                        pagination: createPagination(paginationKey)
                    });
                });
                return function(paginationKey) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3F1ZXJpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSBcIkBjb3NtanMvdXRpbHNcIjtcbmltcG9ydCB7IFF1ZXJ5QWxsSG9va1Jlc3BvbnNlLCBRdWVyeUNsaWVudEltcGwgfSBmcm9tIFwiLi90eXBlcy9xdWVyeVwiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vdHlwZXMvcGFyYW1zXCI7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZVBhZ2luYXRpb24sXG4gIGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50LFxuICBRdWVyeUNsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IEhvb2sgfSBmcm9tIFwiLi90eXBlcy9ob29rXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVyRXh0ZW5zaW9uIHtcbiAgcmVhZG9ubHkgc2NoZWR1bGVyOiB7XG4gICAgcmVhZG9ubHkgcGFyYW1zOiAoKSA9PiBQcm9taXNlPFBhcmFtcz47XG4gICAgcmVhZG9ubHkgaG9vazogKGlkOiBudW1iZXIpID0+IFByb21pc2U8SG9vaz47XG4gICAgcmVhZG9ubHkgYWxsSG9va3M6IChcbiAgICAgIHBhZ2luYXRpb25LZXk/OiBVaW50OEFycmF5XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5QWxsSG9va1Jlc3BvbnNlPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwU2NoZWR1bGVyRXh0ZW5zaW9uKGJhc2U6IFF1ZXJ5Q2xpZW50KTogU2NoZWR1bGVyRXh0ZW5zaW9uIHtcbiAgY29uc3QgcnBjID0gY3JlYXRlUHJvdG9idWZScGNDbGllbnQoYmFzZSk7XG4gIGNvbnN0IHF1ZXJ5U2VydmljZSA9IG5ldyBRdWVyeUNsaWVudEltcGwocnBjKTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlcjoge1xuICAgICAgcGFyYW1zOiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBhd2FpdCBxdWVyeVNlcnZpY2UuUGFyYW1zKHt9KTtcbiAgICAgICAgYXNzZXJ0KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9LFxuICAgICAgaG9vazogYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgSG9vayB9ID0gYXdhaXQgcXVlcnlTZXJ2aWNlLkhvb2soeyBpZCB9KTtcbiAgICAgICAgYXNzZXJ0KEhvb2spO1xuICAgICAgICByZXR1cm4gSG9vaztcbiAgICAgIH0sXG4gICAgICBhbGxIb29rczogYXN5bmMgKHBhZ2luYXRpb25LZXk/OiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgIHJldHVybiBxdWVyeVNlcnZpY2UuSG9va0FsbCh7XG4gICAgICAgICAgcGFnaW5hdGlvbjogY3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uS2V5KSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiYXNzZXJ0IiwiUXVlcnlDbGllbnRJbXBsIiwiY3JlYXRlUGFnaW5hdGlvbiIsImNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50Iiwic2V0dXBTY2hlZHVsZXJFeHRlbnNpb24iLCJiYXNlIiwicnBjIiwicXVlcnlTZXJ2aWNlIiwic2NoZWR1bGVyIiwicGFyYW1zIiwiUGFyYW1zIiwiaG9vayIsImlkIiwiSG9vayIsImFsbEhvb2tzIiwicGFnaW5hdGlvbktleSIsIkhvb2tBbGwiLCJwYWdpbmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE1BQU0sUUFBUSxnQkFBZ0I7QUFDdkMsU0FBK0JDLGVBQWUsUUFBUSxnQkFBZ0I7QUFHdEUsU0FDRUMsZ0JBQWdCLEVBQ2hCQyx1QkFBdUIsUUFFbEIsbUJBQW1CO0FBYTFCLE9BQU8sU0FBU0Msd0JBQXdCQyxJQUFpQjtJQUN2RCxNQUFNQyxNQUFNSCx3QkFBd0JFO0lBQ3BDLE1BQU1FLGVBQWUsSUFBSU4sZ0JBQWdCSztJQUV6QyxPQUFPO1FBQ0xFLFdBQVc7WUFDVEMsc0JBQVEsb0JBQUE7Z0JBQ04sTUFBTSxFQUFFQSxNQUFNLEVBQUUsR0FBRyxNQUFNRixhQUFhRyxNQUFNLENBQUMsQ0FBQztnQkFDOUNWLE9BQU9TO2dCQUNQLE9BQU9BO1lBQ1Q7WUFDQUUsSUFBSTsyQkFBRSxvQkFBQSxVQUFPQztvQkFDWCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1OLGFBQWFNLElBQUksQ0FBQzt3QkFBRUQ7b0JBQUc7b0JBQzlDWixPQUFPYTtvQkFDUCxPQUFPQTtnQkFDVDtnQ0FKYUQ7Ozs7WUFLYkUsUUFBUTsyQkFBRSxvQkFBQSxVQUFPQztvQkFDZixPQUFPUixhQUFhUyxPQUFPLENBQUM7d0JBQzFCQyxZQUFZZixpQkFBaUJhO29CQUMvQjtnQkFDRjtnQ0FKaUJBOzs7O1FBS25CO0lBQ0Y7QUFDRiJ9
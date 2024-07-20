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
export function setupCwIcaExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        denom: {
            account: function() {
                var _ref = _async_to_generator(function*(req) {
                    const { interchainAccountAddress } = yield queryService.InterchainAccount(req);
                    assert(interchainAccountAddress);
                    return interchainAccountAddress;
                });
                return function(req) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvY3dpY2EvcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiQGNvc21qcy91dGlsc1wiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRJbXBsLCBRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCB9IGZyb20gXCIuL3R5cGVzL3F1ZXJ5XCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50LCBRdWVyeUNsaWVudCB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3dJY2FFeHRlbnNpb24ge1xuICByZWFkb25seSBkZW5vbToge1xuICAgIHJlYWRvbmx5IGFjY291bnQ6IChyZXE6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0KSA9PiBQcm9taXNlPHN0cmluZz47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEN3SWNhRXh0ZW5zaW9uKGJhc2U6IFF1ZXJ5Q2xpZW50KTogQ3dJY2FFeHRlbnNpb24ge1xuICBjb25zdCBycGMgPSBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudChiYXNlKTtcbiAgY29uc3QgcXVlcnlTZXJ2aWNlID0gbmV3IFF1ZXJ5Q2xpZW50SW1wbChycGMpO1xuXG4gIHJldHVybiB7XG4gICAgZGVub206IHtcbiAgICAgIGFjY291bnQ6IGFzeW5jIChyZXE6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzIH0gPVxuICAgICAgICAgIGF3YWl0IHF1ZXJ5U2VydmljZS5JbnRlcmNoYWluQWNjb3VudChyZXEpO1xuICAgICAgICBhc3NlcnQoaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIGludGVyY2hhaW5BY2NvdW50QWRkcmVzcztcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJhc3NlcnQiLCJRdWVyeUNsaWVudEltcGwiLCJjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCIsInNldHVwQ3dJY2FFeHRlbnNpb24iLCJiYXNlIiwicnBjIiwicXVlcnlTZXJ2aWNlIiwiZGVub20iLCJhY2NvdW50IiwicmVxIiwiaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzIiwiSW50ZXJjaGFpbkFjY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsTUFBTSxRQUFRLGdCQUFnQjtBQUN2QyxTQUFTQyxlQUFlLFFBQXVDLGdCQUFnQjtBQUUvRSxTQUFTQyx1QkFBdUIsUUFBcUIsbUJBQW1CO0FBUXhFLE9BQU8sU0FBU0Msb0JBQW9CQyxJQUFpQjtJQUNuRCxNQUFNQyxNQUFNSCx3QkFBd0JFO0lBQ3BDLE1BQU1FLGVBQWUsSUFBSUwsZ0JBQWdCSTtJQUV6QyxPQUFPO1FBQ0xFLE9BQU87WUFDTEMsT0FBTzsyQkFBRSxvQkFBQSxVQUFPQztvQkFDZCxNQUFNLEVBQUVDLHdCQUF3QixFQUFFLEdBQ2hDLE1BQU1KLGFBQWFLLGlCQUFpQixDQUFDRjtvQkFDdkNULE9BQU9VO29CQUNQLE9BQU9BO2dCQUNUO2dDQUxnQkQ7Ozs7UUFNbEI7SUFDRjtBQUNGIn0=
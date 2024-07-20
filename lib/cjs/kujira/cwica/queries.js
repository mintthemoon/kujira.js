"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupCwIcaExtension", {
    enumerable: true,
    get: function() {
        return setupCwIcaExtension;
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
function setupCwIcaExtension(base) {
    const rpc = (0, _stargate.createProtobufRpcClient)(base);
    const queryService = new _query.QueryClientImpl(rpc);
    return {
        denom: {
            account: function() {
                var _ref = _async_to_generator(function*(req) {
                    const { interchainAccountAddress } = yield queryService.InterchainAccount(req);
                    (0, _utils.assert)(interchainAccountAddress);
                    return interchainAccountAddress;
                });
                return function(req) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvY3dpY2EvcXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tIFwiQGNvc21qcy91dGlsc1wiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRJbXBsLCBRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCB9IGZyb20gXCIuL3R5cGVzL3F1ZXJ5XCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50LCBRdWVyeUNsaWVudCB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3dJY2FFeHRlbnNpb24ge1xuICByZWFkb25seSBkZW5vbToge1xuICAgIHJlYWRvbmx5IGFjY291bnQ6IChyZXE6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0KSA9PiBQcm9taXNlPHN0cmluZz47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEN3SWNhRXh0ZW5zaW9uKGJhc2U6IFF1ZXJ5Q2xpZW50KTogQ3dJY2FFeHRlbnNpb24ge1xuICBjb25zdCBycGMgPSBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudChiYXNlKTtcbiAgY29uc3QgcXVlcnlTZXJ2aWNlID0gbmV3IFF1ZXJ5Q2xpZW50SW1wbChycGMpO1xuXG4gIHJldHVybiB7XG4gICAgZGVub206IHtcbiAgICAgIGFjY291bnQ6IGFzeW5jIChyZXE6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzIH0gPVxuICAgICAgICAgIGF3YWl0IHF1ZXJ5U2VydmljZS5JbnRlcmNoYWluQWNjb3VudChyZXEpO1xuICAgICAgICBhc3NlcnQoaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIGludGVyY2hhaW5BY2NvdW50QWRkcmVzcztcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJzZXR1cEN3SWNhRXh0ZW5zaW9uIiwiYmFzZSIsInJwYyIsImNyZWF0ZVByb3RvYnVmUnBjQ2xpZW50IiwicXVlcnlTZXJ2aWNlIiwiUXVlcnlDbGllbnRJbXBsIiwiZGVub20iLCJhY2NvdW50IiwicmVxIiwiaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzIiwiSW50ZXJjaGFpbkFjY291bnQiLCJhc3NlcnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBV2dCQTs7O2VBQUFBOzs7dUJBWE87dUJBQ3dDOzBCQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUMsU0FBU0Esb0JBQW9CQyxJQUFpQjtJQUNuRCxNQUFNQyxNQUFNQyxJQUFBQSxpQ0FBdUIsRUFBQ0Y7SUFDcEMsTUFBTUcsZUFBZSxJQUFJQyxzQkFBZSxDQUFDSDtJQUV6QyxPQUFPO1FBQ0xJLE9BQU87WUFDTEMsT0FBTzsyQkFBRSxvQkFBQSxVQUFPQztvQkFDZCxNQUFNLEVBQUVDLHdCQUF3QixFQUFFLEdBQ2hDLE1BQU1MLGFBQWFNLGlCQUFpQixDQUFDRjtvQkFDdkNHLElBQUFBLGFBQU0sRUFBQ0Y7b0JBQ1AsT0FBT0E7Z0JBQ1Q7Z0NBTGdCRDs7OztRQU1sQjtJQUNGO0FBQ0YifQ==
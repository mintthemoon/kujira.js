"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReadOnly", {
    enumerable: true,
    get: function() {
        return ReadOnly;
    }
});
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
class ReadOnly {
    constructor(account){
        _define_property(this, "account", void 0);
        _define_property(this, "onChange", void 0);
        _define_property(this, "disconnect", void 0);
        _define_property(this, "signAndBroadcast", void 0);
        this.account = account;
        this.onChange = (fn)=>{};
        this.disconnect = ()=>{};
        this.signAndBroadcast = function() {
            var _ref = _async_to_generator(function*(rpc, msgs, gas, memo) {
                throw new Error("Transaction signing not available in read-only mode");
            });
            return function(rpc, msgs, gas, memo) {
                return _ref.apply(this, arguments);
            };
        }();
    }
}
_define_property(ReadOnly, "connect", function() {
    var _ref = _async_to_generator(function*(address) {
        return new ReadOnly({
            address,
            algo: "secp256k1",
            pubkey: new Uint8Array()
        });
    });
    return function(address) {
        return _ref.apply(this, arguments);
    };
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3JlYWRPbmx5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnREYXRhLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQgeyBEZWxpdmVyVHhSZXNwb25zZSB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWFkT25seSBpbXBsZW1lbnRzIFdhbGxldEkge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKHB1YmxpYyBhY2NvdW50OiBBY2NvdW50RGF0YSkge31cblxuICBzdGF0aWMgY29ubmVjdCA9IGFzeW5jIChhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPFJlYWRPbmx5PiA9PiB7XG4gICAgcmV0dXJuIG5ldyBSZWFkT25seSh7XG4gICAgICBhZGRyZXNzLFxuICAgICAgYWxnbzogXCJzZWNwMjU2azFcIixcbiAgICAgIHB1YmtleTogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgb25DaGFuZ2UgPSAoZm46IChrOiBSZWFkT25seSB8IG51bGwpID0+IHZvaWQpID0+IHt9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4ge307XG5cbiAgc2lnbkFuZEJyb2FkY2FzdCA9IGFzeW5jIChcbiAgICBycGM6IHN0cmluZyxcbiAgICBtc2dzOiBFbmNvZGVPYmplY3RbXSxcbiAgICBnYXM/OiBzdHJpbmcsXG4gICAgbWVtbz86IHN0cmluZ1xuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVHJhbnNhY3Rpb24gc2lnbmluZyBub3QgYXZhaWxhYmxlIGluIHJlYWQtb25seSBtb2RlXCIpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWRPbmx5IiwiYWNjb3VudCIsIm9uQ2hhbmdlIiwiZGlzY29ubmVjdCIsInNpZ25BbmRCcm9hZGNhc3QiLCJmbiIsInJwYyIsIm1zZ3MiLCJnYXMiLCJtZW1vIiwiRXJyb3IiLCJjb25uZWN0IiwiYWRkcmVzcyIsImFsZ28iLCJwdWJrZXkiLCJVaW50OEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7OytCQUlhQTs7O2VBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixNQUFNQTtJQUNYLFlBQW9CLEFBQU9DLE9BQW9CLENBQUU7O1FBVWpELHVCQUFPQyxZQUFQLEtBQUE7UUFFQSx1QkFBT0MsY0FBUCxLQUFBO1FBRUFDLHVCQUFBQSxvQkFBQUEsS0FBQUE7YUFkMkJILFVBQUFBO2FBVXBCQyxXQUFXLENBQUNHLE1BQXNDO2FBRWxERixhQUFhLEtBQU87YUFFM0JDO3VCQUFtQixvQkFBQSxVQUNqQkUsS0FDQUMsTUFDQUMsS0FDQUM7Z0JBRUEsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCOzRCQU5FSixLQUNBQyxNQUNBQyxLQUNBQzs7OztJQWxCZ0Q7QUFzQnBEO0FBcEJFLGlCQUhXVCxVQUdKVztlQUFVLG9CQUFBLFVBQU9DO1FBQ3RCLE9BQU8sSUFBSVosU0FBUztZQUNsQlk7WUFDQUMsTUFBTTtZQUNOQyxRQUFRLElBQUlDO1FBQ2Q7SUFDRjtvQkFOd0JIIn0=
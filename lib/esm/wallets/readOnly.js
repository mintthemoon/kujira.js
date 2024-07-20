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
export class ReadOnly {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3JlYWRPbmx5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnREYXRhLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQgeyBEZWxpdmVyVHhSZXNwb25zZSB9IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWFkT25seSBpbXBsZW1lbnRzIFdhbGxldEkge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKHB1YmxpYyBhY2NvdW50OiBBY2NvdW50RGF0YSkge31cblxuICBzdGF0aWMgY29ubmVjdCA9IGFzeW5jIChhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPFJlYWRPbmx5PiA9PiB7XG4gICAgcmV0dXJuIG5ldyBSZWFkT25seSh7XG4gICAgICBhZGRyZXNzLFxuICAgICAgYWxnbzogXCJzZWNwMjU2azFcIixcbiAgICAgIHB1YmtleTogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgb25DaGFuZ2UgPSAoZm46IChrOiBSZWFkT25seSB8IG51bGwpID0+IHZvaWQpID0+IHt9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4ge307XG5cbiAgc2lnbkFuZEJyb2FkY2FzdCA9IGFzeW5jIChcbiAgICBycGM6IHN0cmluZyxcbiAgICBtc2dzOiBFbmNvZGVPYmplY3RbXSxcbiAgICBnYXM/OiBzdHJpbmcsXG4gICAgbWVtbz86IHN0cmluZ1xuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVHJhbnNhY3Rpb24gc2lnbmluZyBub3QgYXZhaWxhYmxlIGluIHJlYWQtb25seSBtb2RlXCIpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWRPbmx5IiwiYWNjb3VudCIsIm9uQ2hhbmdlIiwiZGlzY29ubmVjdCIsInNpZ25BbmRCcm9hZGNhc3QiLCJmbiIsInJwYyIsIm1zZ3MiLCJnYXMiLCJtZW1vIiwiRXJyb3IiLCJjb25uZWN0IiwiYWRkcmVzcyIsImFsZ28iLCJwdWJrZXkiLCJVaW50OEFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxPQUFPLE1BQU1BO0lBQ1gsWUFBb0IsQUFBT0MsT0FBb0IsQ0FBRTs7UUFVakQsdUJBQU9DLFlBQVAsS0FBQTtRQUVBLHVCQUFPQyxjQUFQLEtBQUE7UUFFQUMsdUJBQUFBLG9CQUFBQSxLQUFBQTthQWQyQkgsVUFBQUE7YUFVcEJDLFdBQVcsQ0FBQ0csTUFBc0M7YUFFbERGLGFBQWEsS0FBTzthQUUzQkM7dUJBQW1CLG9CQUFBLFVBQ2pCRSxLQUNBQyxNQUNBQyxLQUNBQztnQkFFQSxNQUFNLElBQUlDLE1BQU07WUFDbEI7NEJBTkVKLEtBQ0FDLE1BQ0FDLEtBQ0FDOzs7O0lBbEJnRDtBQXNCcEQ7QUFwQkUsaUJBSFdULFVBR0pXO2VBQVUsb0JBQUEsVUFBT0M7UUFDdEIsT0FBTyxJQUFJWixTQUFTO1lBQ2xCWTtZQUNBQyxNQUFNO1lBQ05DLFFBQVEsSUFBSUM7UUFDZDtJQUNGO29CQU53QkgifQ==
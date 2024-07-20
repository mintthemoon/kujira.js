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
import Long from "long";
export const castSigner = (old)=>"signAmino" in old ? old : castDirectSigner(old);
const castDirectSigner = (old)=>_object_spread_props(_object_spread({}, old), {
        signDirect: function() {
            var _ref = _async_to_generator(function*(signerAddress, signDoc) {
                const res = yield old.signDirect(signerAddress, _object_spread_props(_object_spread({}, signDoc), {
                    accountNumber: Long.fromNumber(Number(signDoc.accountNumber))
                }));
                return _object_spread_props(_object_spread({}, res), {
                    signed: _object_spread_props(_object_spread({}, res.signed), {
                        accountNumber: BigInt(res.signed.accountNumber.toString())
                    })
                });
            });
            return function(signerAddress, signDoc) {
                return _ref.apply(this, arguments);
            };
        }()
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdFNpZ25SZXNwb25zZSxcbiAgT2ZmbGluZURpcmVjdFNpZ25lcixcbiAgT2ZmbGluZVNpZ25lcixcbn0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0ICogYXMgayBmcm9tIFwiQGtlcGxyLXdhbGxldC90eXBlc1wiO1xuaW1wb3J0IHsgU2lnbkRvYyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3R4L3YxYmV0YTEvdHhcIjtcbmltcG9ydCBMb25nIGZyb20gXCJsb25nXCI7XG5cbmV4cG9ydCBjb25zdCBjYXN0U2lnbmVyID0gKFxuICBvbGQ6IGsuT2ZmbGluZUFtaW5vU2lnbmVyIHwgay5PZmZsaW5lRGlyZWN0U2lnbmVyXG4pOiBPZmZsaW5lU2lnbmVyID0+XG4gIFwic2lnbkFtaW5vXCIgaW4gb2xkID8gb2xkIDogY2FzdERpcmVjdFNpZ25lcihvbGQpO1xuXG5jb25zdCBjYXN0RGlyZWN0U2lnbmVyID0gKFxuICBvbGQ6IGsuT2ZmbGluZURpcmVjdFNpZ25lclxuKTogT2ZmbGluZURpcmVjdFNpZ25lciA9PiAoe1xuICAuLi5vbGQsXG4gIHNpZ25EaXJlY3Q6IGFzeW5jIChcbiAgICBzaWduZXJBZGRyZXNzOiBzdHJpbmcsXG4gICAgc2lnbkRvYzogU2lnbkRvY1xuICApOiBQcm9taXNlPERpcmVjdFNpZ25SZXNwb25zZT4gPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9sZC5zaWduRGlyZWN0KHNpZ25lckFkZHJlc3MsIHtcbiAgICAgIC4uLnNpZ25Eb2MsXG4gICAgICBhY2NvdW50TnVtYmVyOiBMb25nLmZyb21OdW1iZXIoTnVtYmVyKHNpZ25Eb2MuYWNjb3VudE51bWJlcikpLFxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXMsXG4gICAgICBzaWduZWQ6IHtcbiAgICAgICAgLi4ucmVzLnNpZ25lZCxcbiAgICAgICAgYWNjb3VudE51bWJlcjogQmlnSW50KHJlcy5zaWduZWQuYWNjb3VudE51bWJlci50b1N0cmluZygpKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIkxvbmciLCJjYXN0U2lnbmVyIiwib2xkIiwiY2FzdERpcmVjdFNpZ25lciIsInNpZ25EaXJlY3QiLCJzaWduZXJBZGRyZXNzIiwic2lnbkRvYyIsInJlcyIsImFjY291bnROdW1iZXIiLCJmcm9tTnVtYmVyIiwiTnVtYmVyIiwic2lnbmVkIiwiQmlnSW50IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLE9BQU9BLFVBQVUsT0FBTztBQUV4QixPQUFPLE1BQU1DLGFBQWEsQ0FDeEJDLE1BRUEsZUFBZUEsTUFBTUEsTUFBTUMsaUJBQWlCRCxLQUFLO0FBRW5ELE1BQU1DLG1CQUFtQixDQUN2QkQsTUFDeUIsd0NBQ3RCQTtRQUNIRSxVQUFVO3VCQUFFLG9CQUFBLFVBQ1ZDLGVBQ0FDO2dCQUVBLE1BQU1DLE1BQU0sTUFBTUwsSUFBSUUsVUFBVSxDQUFDQyxlQUFlLHdDQUMzQ0M7b0JBQ0hFLGVBQWVSLEtBQUtTLFVBQVUsQ0FBQ0MsT0FBT0osUUFBUUUsYUFBYTs7Z0JBRTdELE9BQU8sd0NBQ0ZEO29CQUNISSxRQUFRLHdDQUNISixJQUFJSSxNQUFNO3dCQUNiSCxlQUFlSSxPQUFPTCxJQUFJSSxNQUFNLENBQUNILGFBQWEsQ0FBQ0ssUUFBUTs7O1lBRzdEOzRCQWRFUixlQUNBQyJ9
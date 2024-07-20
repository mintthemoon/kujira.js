"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DaoDao", {
    enumerable: true,
    get: function() {
        return DaoDao;
    }
});
const _math = require("@cosmjs/math");
const _stargate = require("@cosmjs/stargate");
const _cosmiframe = require("@dao-dao/cosmiframe");
const _amino = require("../amino");
const _registry = require("../registry");
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
const cosmiframe = new _cosmiframe.Cosmiframe([
    "https://daodao.zone",
    "https://dao.daodao.zone"
]);
class DaoDao {
    constructor(account, config, options){
        _define_property(this, "account", void 0);
        _define_property(this, "config", void 0);
        _define_property(this, "options", void 0);
        _define_property(this, "onChange", void 0);
        _define_property(this, "disconnect", void 0);
        _define_property(this, "signAndBroadcast", void 0);
        this.account = account;
        this.config = config;
        this.options = options;
        this.onChange = (fn)=>{};
        this.disconnect = ()=>{};
        var _this = this;
        this.signAndBroadcast = function() {
            var _ref = _async_to_generator(function*(rpc, msgs) {
                const signer = cosmiframe.getOfflineSigner("kaiyo-1");
                const gasPrice = new _stargate.GasPrice(_math.Decimal.fromUserInput("0.00125", 18), _this.options ? _this.options.feeDenom : _this.config.feeCurrencies[0].coinDenom);
                const client = yield _stargate.SigningStargateClient.connectWithSigner(rpc, signer, {
                    registry: _registry.registry,
                    gasPrice,
                    aminoTypes: (0, _amino.aminoTypes)(_this.config.bech32Config.bech32PrefixAccAddr),
                    accountParser: _registry.accountParser
                });
                return client.signAndBroadcast(_this.account.address, msgs, 1.7);
            });
            return function(rpc, msgs) {
                return _ref.apply(this, arguments);
            };
        }();
    }
}
_define_property(DaoDao, "connect", function() {
    var _ref = _async_to_generator(function*(config, opts) {
        if (!(yield cosmiframe.isReady())) {
            throw new Error("DAO DAO Cosmiframe not ready");
        }
        return cosmiframe.p.connect(config.chainId).then(()=>cosmiframe.p.getAccount(config.chainId).then((account)=>new DaoDao(_object_spread_props(_object_spread({}, account), {
                    label: account.username
                }), config, opts)));
    });
    return function(config, opts) {
        return _ref.apply(this, arguments);
    };
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL2Rhb0Rhby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsIH0gZnJvbSBcIkBjb3NtanMvbWF0aFwiO1xuaW1wb3J0IHsgQWNjb3VudERhdGEsIEVuY29kZU9iamVjdCB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCB7XG4gIERlbGl2ZXJUeFJlc3BvbnNlLFxuICBHYXNQcmljZSxcbiAgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LFxufSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgQ29zbWlmcmFtZSB9IGZyb20gXCJAZGFvLWRhby9jb3NtaWZyYW1lXCI7XG5pbXBvcnQgeyBDaGFpbkluZm8gfSBmcm9tIFwiQGtlcGxyLXdhbGxldC90eXBlc1wiO1xuaW1wb3J0IHsgYW1pbm9UeXBlcyB9IGZyb20gXCIuLi9hbWlub1wiO1xuaW1wb3J0IHsgYWNjb3VudFBhcnNlciwgcmVnaXN0cnkgfSBmcm9tIFwiLi4vcmVnaXN0cnlcIjtcbmltcG9ydCB7IFdhbGxldEkgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuY29uc3QgY29zbWlmcmFtZSA9IG5ldyBDb3NtaWZyYW1lKFtcbiAgXCJodHRwczovL2Rhb2Rhby56b25lXCIsXG4gIFwiaHR0cHM6Ly9kYW8uZGFvZGFvLnpvbmVcIixcbl0pO1xuXG50eXBlIE9wdGlvbnMgPSB7IGZlZURlbm9tOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNsYXNzIERhb0RhbyBpbXBsZW1lbnRzIFdhbGxldEkge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY2NvdW50OiBBY2NvdW50RGF0YSAmIHsgbGFiZWw/OiBzdHJpbmcgfSxcbiAgICBwdWJsaWMgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgcHJpdmF0ZSBvcHRpb25zPzogT3B0aW9uc1xuICApIHt9XG5cbiAgc3RhdGljIGNvbm5lY3QgPSBhc3luYyAoXG4gICAgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgb3B0cz86IHsgZmVlRGVub206IHN0cmluZyB9XG4gICk6IFByb21pc2U8RGFvRGFvPiA9PiB7XG4gICAgaWYgKCEoYXdhaXQgY29zbWlmcmFtZS5pc1JlYWR5KCkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEQU8gREFPIENvc21pZnJhbWUgbm90IHJlYWR5XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb3NtaWZyYW1lLnBcbiAgICAgIC5jb25uZWN0KGNvbmZpZy5jaGFpbklkKVxuICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgY29zbWlmcmFtZS5wXG4gICAgICAgICAgLmdldEFjY291bnQoY29uZmlnLmNoYWluSWQpXG4gICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAoYWNjb3VudCkgPT5cbiAgICAgICAgICAgICAgbmV3IERhb0Rhbyh7IC4uLmFjY291bnQsIGxhYmVsOiBhY2NvdW50LnVzZXJuYW1lIH0sIGNvbmZpZywgb3B0cylcbiAgICAgICAgICApXG4gICAgICApO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IERhb0RhbykgPT4gdm9pZCkgPT4ge307XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7fTtcblxuICBwdWJsaWMgc2lnbkFuZEJyb2FkY2FzdCA9IGFzeW5jIChcbiAgICBycGM6IHN0cmluZyxcbiAgICBtc2dzOiBFbmNvZGVPYmplY3RbXVxuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3Qgc2lnbmVyID0gY29zbWlmcmFtZS5nZXRPZmZsaW5lU2lnbmVyKFwia2FpeW8tMVwiKTtcbiAgICBjb25zdCBnYXNQcmljZSA9IG5ldyBHYXNQcmljZShcbiAgICAgIERlY2ltYWwuZnJvbVVzZXJJbnB1dChcIjAuMDAxMjVcIiwgMTgpLFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmZlZURlbm9tXG4gICAgICAgIDogdGhpcy5jb25maWcuZmVlQ3VycmVuY2llc1swXS5jb2luRGVub21cbiAgICApO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKHJwYywgc2lnbmVyLCB7XG4gICAgICByZWdpc3RyeSxcbiAgICAgIGdhc1ByaWNlLFxuICAgICAgYW1pbm9UeXBlczogYW1pbm9UeXBlcyh0aGlzLmNvbmZpZy5iZWNoMzJDb25maWcuYmVjaDMyUHJlZml4QWNjQWRkciksXG4gICAgICBhY2NvdW50UGFyc2VyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KHRoaXMuYWNjb3VudC5hZGRyZXNzLCBtc2dzLCAxLjcpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIkRhb0RhbyIsImNvc21pZnJhbWUiLCJDb3NtaWZyYW1lIiwiYWNjb3VudCIsImNvbmZpZyIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImRpc2Nvbm5lY3QiLCJzaWduQW5kQnJvYWRjYXN0IiwiZm4iLCJycGMiLCJtc2dzIiwic2lnbmVyIiwiZ2V0T2ZmbGluZVNpZ25lciIsImdhc1ByaWNlIiwiR2FzUHJpY2UiLCJEZWNpbWFsIiwiZnJvbVVzZXJJbnB1dCIsImZlZURlbm9tIiwiZmVlQ3VycmVuY2llcyIsImNvaW5EZW5vbSIsImNsaWVudCIsIlNpZ25pbmdTdGFyZ2F0ZUNsaWVudCIsImNvbm5lY3RXaXRoU2lnbmVyIiwicmVnaXN0cnkiLCJhbWlub1R5cGVzIiwiYmVjaDMyQ29uZmlnIiwiYmVjaDMyUHJlZml4QWNjQWRkciIsImFjY291bnRQYXJzZXIiLCJhZGRyZXNzIiwiY29ubmVjdCIsIm9wdHMiLCJpc1JlYWR5IiwiRXJyb3IiLCJwIiwiY2hhaW5JZCIsInRoZW4iLCJnZXRBY2NvdW50IiwibGFiZWwiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFvQmFBOzs7ZUFBQUE7OztzQkFwQlc7MEJBTWpCOzRCQUNvQjt1QkFFQTswQkFDYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd4QyxNQUFNQyxhQUFhLElBQUlDLHNCQUFVLENBQUM7SUFDaEM7SUFDQTtDQUNEO0FBSU0sTUFBTUY7SUFDWCxZQUNFLEFBQU9HLE9BQXlDLEVBQ2hELEFBQU9DLE1BQWlCLEVBQ3hCLEFBQVFDLE9BQWlCLENBQ3pCOzs7O1FBc0JGLHVCQUFPQyxZQUFQLEtBQUE7UUFFQSx1QkFBT0MsY0FBUCxLQUFBO1FBRUEsdUJBQU9DLG9CQUFQLEtBQUE7YUE3QlNMLFVBQUFBO2FBQ0FDLFNBQUFBO2FBQ0NDLFVBQUFBO2FBdUJIQyxXQUFXLENBQUNHLE1BQTZCO2FBRXpDRixhQUFhLEtBQU87O2FBRXBCQzt1QkFBbUIsb0JBQUEsVUFDeEJFLEtBQ0FDO2dCQUVBLE1BQU1DLFNBQVNYLFdBQVdZLGdCQUFnQixDQUFDO2dCQUMzQyxNQUFNQyxXQUFXLElBQUlDLGtCQUFRLENBQzNCQyxhQUFPLENBQUNDLGFBQWEsQ0FBQyxXQUFXLEtBQ2pDLE1BQUtaLE9BQU8sR0FDUixNQUFLQSxPQUFPLENBQUNhLFFBQVEsR0FDckIsTUFBS2QsTUFBTSxDQUFDZSxhQUFhLENBQUMsRUFBRSxDQUFDQyxTQUFTO2dCQUc1QyxNQUFNQyxTQUFTLE1BQU1DLCtCQUFxQixDQUFDQyxpQkFBaUIsQ0FBQ2IsS0FBS0UsUUFBUTtvQkFDeEVZLFVBQUFBLGtCQUFRO29CQUNSVjtvQkFDQVcsWUFBWUEsSUFBQUEsaUJBQVUsRUFBQyxNQUFLckIsTUFBTSxDQUFDc0IsWUFBWSxDQUFDQyxtQkFBbUI7b0JBQ25FQyxlQUFBQSx1QkFBYTtnQkFDZjtnQkFFQSxPQUFPUCxPQUFPYixnQkFBZ0IsQ0FBQyxNQUFLTCxPQUFPLENBQUMwQixPQUFPLEVBQUVsQixNQUFNO1lBQzdEOzRCQW5CRUQsS0FDQUM7Ozs7SUE1QkM7QUErQ0w7QUE3Q0UsaUJBUFdYLFFBT0o4QjtlQUFVLG9CQUFBLFVBQ2YxQixRQUNBMkI7UUFFQSxJQUFJLENBQUUsQ0FBQSxNQUFNOUIsV0FBVytCLE9BQU8sRUFBQyxHQUFJO1lBQ2pDLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE9BQU9oQyxXQUFXaUMsQ0FBQyxDQUNoQkosT0FBTyxDQUFDMUIsT0FBTytCLE9BQU8sRUFDdEJDLElBQUksQ0FBQyxJQUNKbkMsV0FBV2lDLENBQUMsQ0FDVEcsVUFBVSxDQUFDakMsT0FBTytCLE9BQU8sRUFDekJDLElBQUksQ0FDSCxDQUFDakMsVUFDQyxJQUFJSCxPQUFPLHdDQUFLRztvQkFBU21DLE9BQU9uQyxRQUFRb0MsUUFBUTtvQkFBSW5DLFFBQVEyQjtJQUd4RTtvQkFqQkUzQixRQUNBMkIifQ==
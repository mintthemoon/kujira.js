"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeapSnap", {
    enumerable: true,
    get: function() {
        return LeapSnap;
    }
});
const _math = require("@cosmjs/math");
const _stargate = require("@cosmjs/stargate");
const _cosmossnapprovider = require("@leapwallet/cosmos-snap-provider");
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
class LeapSnap {
    static connect(config, opts) {
        return _async_to_generator(function*() {
            return (0, _cosmossnapprovider.connectSnap)().then(()=>(0, _cosmossnapprovider.getKey)(config.chainId)).then((account)=>new LeapSnap(account, config, opts)).catch((error)=>{
                if (error.message === "Invalid chainId") {
                    return (0, _cosmossnapprovider.suggestChain)(config, {}).then(()=>LeapSnap.connect(config, opts));
                }
                throw error;
            });
        })();
    }
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
            var _ref = _async_to_generator(function*(rpc, encodeObjects) {
                const signer = new _cosmossnapprovider.CosmjsOfflineSigner(_this.config.chainId);
                const gasPrice = new _stargate.GasPrice(_math.Decimal.fromUserInput("0.034", 18), _this.options ? _this.options.feeDenom : _this.config.feeCurrencies[0].coinDenom);
                const client = yield _stargate.SigningStargateClient.connectWithSigner(rpc, signer, {
                    registry: _registry.registry,
                    gasPrice,
                    aminoTypes: (0, _amino.aminoTypes)(_this.config.bech32Config.bech32PrefixAccAddr),
                    accountParser: _registry.accountParser
                });
                return yield client.signAndBroadcast(_this.account.address, encodeObjects, 1.5);
            });
            return function(rpc, encodeObjects) {
                return _ref.apply(this, arguments);
            };
        }();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL2xlYXBTbmFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWwgfSBmcm9tIFwiQGNvc21qcy9tYXRoXCI7XG5pbXBvcnQgeyBBY2NvdW50RGF0YSwgRW5jb2RlT2JqZWN0IH0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHtcbiAgRGVsaXZlclR4UmVzcG9uc2UsXG4gIEdhc1ByaWNlLFxuICBTaWduaW5nU3RhcmdhdGVDbGllbnQsXG59IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBDaGFpbkluZm8gfSBmcm9tIFwiQGtlcGxyLXdhbGxldC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ29zbWpzT2ZmbGluZVNpZ25lcixcbiAgY29ubmVjdFNuYXAsXG4gIGdldEtleSxcbiAgc3VnZ2VzdENoYWluLFxufSBmcm9tIFwiQGxlYXB3YWxsZXQvY29zbW9zLXNuYXAtcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFtaW5vVHlwZXMgfSBmcm9tIFwiLi4vYW1pbm9cIjtcbmltcG9ydCB7IGFjY291bnRQYXJzZXIsIHJlZ2lzdHJ5IH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbnR5cGUgT3B0aW9ucyA9IHsgZmVlRGVub206IHN0cmluZyB9O1xuXG5leHBvcnQgY2xhc3MgTGVhcFNuYXAgaW1wbGVtZW50cyBXYWxsZXRJIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWNjb3VudDogQWNjb3VudERhdGEsXG4gICAgcHJpdmF0ZSBjb25maWc6IENoYWluSW5mbyxcbiAgICBwcml2YXRlIG9wdGlvbnM/OiBPcHRpb25zXG4gICkge31cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbm5lY3QoXG4gICAgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgb3B0cz86IHsgZmVlRGVub206IHN0cmluZyB9XG4gICk6IFByb21pc2U8TGVhcFNuYXA+IHtcbiAgICByZXR1cm4gY29ubmVjdFNuYXAoKVxuICAgICAgLnRoZW4oKCkgPT4gZ2V0S2V5KGNvbmZpZy5jaGFpbklkKSlcbiAgICAgIC50aGVuKChhY2NvdW50KSA9PiBuZXcgTGVhcFNuYXAoYWNjb3VudCwgY29uZmlnLCBvcHRzKSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gXCJJbnZhbGlkIGNoYWluSWRcIikge1xuICAgICAgICAgIHJldHVybiBzdWdnZXN0Q2hhaW4oY29uZmlnLCB7fSkudGhlbigoKSA9PlxuICAgICAgICAgICAgTGVhcFNuYXAuY29ubmVjdChjb25maWcsIG9wdHMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuICB9XG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IExlYXBTbmFwIHwgbnVsbCkgPT4gdm9pZCkgPT4ge307XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7fTtcblxuICBzaWduQW5kQnJvYWRjYXN0ID0gYXN5bmMgKFxuICAgIHJwYzogc3RyaW5nLFxuICAgIGVuY29kZU9iamVjdHM6IEVuY29kZU9iamVjdFtdXG4gICk6IFByb21pc2U8RGVsaXZlclR4UmVzcG9uc2U+ID0+IHtcbiAgICBjb25zdCBzaWduZXIgPSBuZXcgQ29zbWpzT2ZmbGluZVNpZ25lcih0aGlzLmNvbmZpZy5jaGFpbklkKTtcblxuICAgIGNvbnN0IGdhc1ByaWNlID0gbmV3IEdhc1ByaWNlKFxuICAgICAgRGVjaW1hbC5mcm9tVXNlcklucHV0KFwiMC4wMzRcIiwgMTgpLFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmZlZURlbm9tXG4gICAgICAgIDogdGhpcy5jb25maWcuZmVlQ3VycmVuY2llc1swXS5jb2luRGVub21cbiAgICApO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKHJwYywgc2lnbmVyLCB7XG4gICAgICByZWdpc3RyeSxcbiAgICAgIGdhc1ByaWNlLFxuICAgICAgYW1pbm9UeXBlczogYW1pbm9UeXBlcyh0aGlzLmNvbmZpZy5iZWNoMzJDb25maWcuYmVjaDMyUHJlZml4QWNjQWRkciksXG4gICAgICBhY2NvdW50UGFyc2VyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KFxuICAgICAgdGhpcy5hY2NvdW50LmFkZHJlc3MsXG4gICAgICBlbmNvZGVPYmplY3RzLFxuICAgICAgMS41XG4gICAgKTtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJMZWFwU25hcCIsImNvbm5lY3QiLCJjb25maWciLCJvcHRzIiwiY29ubmVjdFNuYXAiLCJ0aGVuIiwiZ2V0S2V5IiwiY2hhaW5JZCIsImFjY291bnQiLCJjYXRjaCIsImVycm9yIiwibWVzc2FnZSIsInN1Z2dlc3RDaGFpbiIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImRpc2Nvbm5lY3QiLCJzaWduQW5kQnJvYWRjYXN0IiwiZm4iLCJycGMiLCJlbmNvZGVPYmplY3RzIiwic2lnbmVyIiwiQ29zbWpzT2ZmbGluZVNpZ25lciIsImdhc1ByaWNlIiwiR2FzUHJpY2UiLCJEZWNpbWFsIiwiZnJvbVVzZXJJbnB1dCIsImZlZURlbm9tIiwiZmVlQ3VycmVuY2llcyIsImNvaW5EZW5vbSIsImNsaWVudCIsIlNpZ25pbmdTdGFyZ2F0ZUNsaWVudCIsImNvbm5lY3RXaXRoU2lnbmVyIiwicmVnaXN0cnkiLCJhbWlub1R5cGVzIiwiYmVjaDMyQ29uZmlnIiwiYmVjaDMyUHJlZml4QWNjQWRkciIsImFjY291bnRQYXJzZXIiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CYUE7OztlQUFBQTs7O3NCQXBCVzswQkFNakI7b0NBT0E7dUJBQ29COzBCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pDLE1BQU1BO0lBT1gsT0FBb0JDLFFBQ2xCQyxNQUFpQixFQUNqQkMsSUFBMkI7ZUFGN0Isb0JBQUE7WUFJRSxPQUFPQyxJQUFBQSwrQkFBVyxJQUNmQyxJQUFJLENBQUMsSUFBTUMsSUFBQUEsMEJBQU0sRUFBQ0osT0FBT0ssT0FBTyxHQUNoQ0YsSUFBSSxDQUFDLENBQUNHLFVBQVksSUFBSVIsU0FBU1EsU0FBU04sUUFBUUMsT0FDaERNLEtBQUssQ0FBQyxDQUFDQztnQkFDTixJQUFJQSxNQUFNQyxPQUFPLEtBQUssbUJBQW1CO29CQUN2QyxPQUFPQyxJQUFBQSxnQ0FBWSxFQUFDVixRQUFRLENBQUMsR0FBR0csSUFBSSxDQUFDLElBQ25DTCxTQUFTQyxPQUFPLENBQUNDLFFBQVFDO2dCQUU3QjtnQkFDQSxNQUFNTztZQUNSO1FBQ0o7O0lBckJBLFlBQ0UsQUFBT0YsT0FBb0IsRUFDM0IsQUFBUU4sTUFBaUIsRUFDekIsQUFBUVcsT0FBaUIsQ0FDekI7Ozs7UUFrQkYsdUJBQU9DLFlBQVAsS0FBQTtRQUVBLHVCQUFPQyxjQUFQLEtBQUE7UUFFQUMsdUJBQUFBLG9CQUFBQSxLQUFBQTthQXpCU1IsVUFBQUE7YUFDQ04sU0FBQUE7YUFDQVcsVUFBQUE7YUFtQkhDLFdBQVcsQ0FBQ0csTUFBc0M7YUFFbERGLGFBQWEsS0FBTzs7YUFFM0JDO3VCQUFtQixvQkFBQSxVQUNqQkUsS0FDQUM7Z0JBRUEsTUFBTUMsU0FBUyxJQUFJQyx1Q0FBbUIsQ0FBQyxNQUFLbkIsTUFBTSxDQUFDSyxPQUFPO2dCQUUxRCxNQUFNZSxXQUFXLElBQUlDLGtCQUFRLENBQzNCQyxhQUFPLENBQUNDLGFBQWEsQ0FBQyxTQUFTLEtBQy9CLE1BQUtaLE9BQU8sR0FDUixNQUFLQSxPQUFPLENBQUNhLFFBQVEsR0FDckIsTUFBS3hCLE1BQU0sQ0FBQ3lCLGFBQWEsQ0FBQyxFQUFFLENBQUNDLFNBQVM7Z0JBRzVDLE1BQU1DLFNBQVMsTUFBTUMsK0JBQXFCLENBQUNDLGlCQUFpQixDQUFDYixLQUFLRSxRQUFRO29CQUN4RVksVUFBQUEsa0JBQVE7b0JBQ1JWO29CQUNBVyxZQUFZQSxJQUFBQSxpQkFBVSxFQUFDLE1BQUsvQixNQUFNLENBQUNnQyxZQUFZLENBQUNDLG1CQUFtQjtvQkFDbkVDLGVBQUFBLHVCQUFhO2dCQUNmO2dCQUVBLE9BQU8sTUFBTVAsT0FBT2IsZ0JBQWdCLENBQ2xDLE1BQUtSLE9BQU8sQ0FBQzZCLE9BQU8sRUFDcEJsQixlQUNBO1lBRUo7NEJBeEJFRCxLQUNBQzs7OztJQXhCQztBQWdETCJ9
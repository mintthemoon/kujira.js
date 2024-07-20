"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Keplr", {
    enumerable: true,
    get: function() {
        return Keplr;
    }
});
const _math = require("@cosmjs/math");
const _stargate = require("@cosmjs/stargate");
const _amino = require("../amino");
const _registry = require("../registry");
const _evmos = /*#__PURE__*/ _interop_require_wildcard(require("./evmos"));
const _utils = require("./utils");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
class Keplr {
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
        this.onChange = (fn)=>{
            window.addEventListener("keplr_keystorechange", ()=>{
                const keplr = window.keplr;
                if (!keplr) return;
                keplr.getOfflineSignerAuto(this.config.chainId).then((signer)=>signer.getAccounts()).then((as)=>{
                    if (as.length) {
                        this.account = as[0];
                        fn(this);
                    }
                });
            });
        };
        this.disconnect = ()=>{};
        var _this = this;
        this.signAndBroadcast = function() {
            var _ref = _async_to_generator(function*(rpc, msgs) {
                if (!window.keplr) throw new Error("No Wallet Connected");
                const signer = yield window.keplr.getOfflineSignerAuto(_this.config.chainId);
                if (_this.config.chainName === "Evmos") return _evmos.signAndBroadcast({
                    rpc: _this.config.rpc,
                    signer: (0, _utils.castSigner)(signer),
                    messages: msgs,
                    sourceAccount: _this.account,
                    sourceChainData: _this.config
                });
                const gasPrice = new _stargate.GasPrice(_math.Decimal.fromUserInput("0.00125", 18), _this.options ? _this.options.feeDenom : _this.config.feeCurrencies[0].coinDenom);
                const client = yield _stargate.SigningStargateClient.connectWithSigner(rpc, (0, _utils.castSigner)(signer), {
                    registry: _registry.registry,
                    gasPrice,
                    aminoTypes: (0, _amino.aminoTypes)(_this.config.bech32Config.bech32PrefixAccAddr),
                    accountParser: _registry.accountParser
                });
                return yield client.signAndBroadcast(_this.account.address, msgs, 1.7);
            });
            return function(rpc, msgs) {
                return _ref.apply(this, arguments);
            };
        }();
    }
}
_define_property(Keplr, "connect", (config, opts)=>{
    const keplr = window.keplr;
    if (!keplr) throw new Error("Keplr extension not available");
    const chainInfo = _object_spread_props(_object_spread({}, config), {
        // Keplr is bullshti and defaults to the first of these provided as the fee denom
        feeCurrencies: config.feeCurrencies.filter((x)=>opts ? x.coinMinimalDenom === opts.feeDenom : true)
    });
    return keplr.experimentalSuggestChain(chainInfo).then(()=>keplr.enable(config.chainId)).then(()=>keplr.getOfflineSignerAuto(config.chainId)).then((signer)=>signer.getAccounts()).then((as)=>{
        if (as.length) {
            return new Keplr(as[0], config, opts);
        } else {
            throw new Error("No Accounts");
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL2tlcGxyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWwgfSBmcm9tIFwiQGNvc21qcy9tYXRoXCI7XG5pbXBvcnQgeyBBY2NvdW50RGF0YSwgRW5jb2RlT2JqZWN0IH0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHtcbiAgRGVsaXZlclR4UmVzcG9uc2UsXG4gIEdhc1ByaWNlLFxuICBTaWduaW5nU3RhcmdhdGVDbGllbnQsXG59IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBDaGFpbkluZm8sIFdpbmRvdyBhcyBLZXBscldpbmRvdyB9IGZyb20gXCJAa2VwbHItd2FsbGV0L3R5cGVzXCI7XG5pbXBvcnQgeyBhbWlub1R5cGVzIH0gZnJvbSBcIi4uL2FtaW5vXCI7XG5pbXBvcnQgeyBhY2NvdW50UGFyc2VyLCByZWdpc3RyeSB9IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgZXZtb3MgZnJvbSBcIi4vZXZtb3NcIjtcbmltcG9ydCB7IFdhbGxldEkgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGNhc3RTaWduZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlXG4gIGludGVyZmFjZSBXaW5kb3cgZXh0ZW5kcyBLZXBscldpbmRvdyB7fVxufVxuXG50eXBlIE9wdGlvbnMgPSB7IGZlZURlbm9tOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNsYXNzIEtlcGxyIGltcGxlbWVudHMgV2FsbGV0SSB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjY291bnQ6IEFjY291bnREYXRhLFxuICAgIHB1YmxpYyBjb25maWc6IENoYWluSW5mbyxcbiAgICBwcml2YXRlIG9wdGlvbnM/OiBPcHRpb25zXG4gICkge31cblxuICBzdGF0aWMgY29ubmVjdCA9IChcbiAgICBjb25maWc6IENoYWluSW5mbyxcbiAgICBvcHRzPzogeyBmZWVEZW5vbTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxLZXBscj4gPT4ge1xuICAgIGNvbnN0IGtlcGxyID0gd2luZG93LmtlcGxyO1xuXG4gICAgaWYgKCFrZXBscikgdGhyb3cgbmV3IEVycm9yKFwiS2VwbHIgZXh0ZW5zaW9uIG5vdCBhdmFpbGFibGVcIik7XG5cbiAgICBjb25zdCBjaGFpbkluZm8gPSB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAvLyBLZXBsciBpcyBidWxsc2h0aSBhbmQgZGVmYXVsdHMgdG8gdGhlIGZpcnN0IG9mIHRoZXNlIHByb3ZpZGVkIGFzIHRoZSBmZWUgZGVub21cbiAgICAgIGZlZUN1cnJlbmNpZXM6IGNvbmZpZy5mZWVDdXJyZW5jaWVzLmZpbHRlcigoeCkgPT5cbiAgICAgICAgb3B0cyA/IHguY29pbk1pbmltYWxEZW5vbSA9PT0gb3B0cy5mZWVEZW5vbSA6IHRydWVcbiAgICAgICksXG4gICAgfTtcblxuICAgIHJldHVybiBrZXBsclxuICAgICAgLmV4cGVyaW1lbnRhbFN1Z2dlc3RDaGFpbihjaGFpbkluZm8pXG4gICAgICAudGhlbigoKSA9PiBrZXBsci5lbmFibGUoY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKCkgPT4ga2VwbHIuZ2V0T2ZmbGluZVNpZ25lckF1dG8oY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKHNpZ25lcikgPT4gc2lnbmVyLmdldEFjY291bnRzKCkpXG4gICAgICAudGhlbigoYXMpID0+IHtcbiAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBuZXcgS2VwbHIoYXNbMF0sIGNvbmZpZywgb3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gQWNjb3VudHNcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IEtlcGxyKSA9PiB2b2lkKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXBscl9rZXlzdG9yZWNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXBsciA9IHdpbmRvdy5rZXBscjtcbiAgICAgIGlmICgha2VwbHIpIHJldHVybjtcblxuICAgICAga2VwbHJcbiAgICAgICAgLmdldE9mZmxpbmVTaWduZXJBdXRvKHRoaXMuY29uZmlnLmNoYWluSWQpXG4gICAgICAgIC50aGVuKChzaWduZXIpID0+IHNpZ25lci5nZXRBY2NvdW50cygpKVxuICAgICAgICAudGhlbigoYXMpID0+IHtcbiAgICAgICAgICBpZiAoYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhc1swXTtcbiAgICAgICAgICAgIGZuKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7fTtcblxuICBwdWJsaWMgc2lnbkFuZEJyb2FkY2FzdCA9IGFzeW5jIChcbiAgICBycGM6IHN0cmluZyxcbiAgICBtc2dzOiBFbmNvZGVPYmplY3RbXVxuICAgIC8vIGJhdGNoPzoge1xuICAgIC8vICAgc2l6ZTogbnVtYmVyO1xuICAgIC8vICAgY2I6ICh0b3RhbDogbnVtYmVyLCByZW1haW5pbmc6IG51bWJlcikgPT4gdm9pZDtcbiAgICAvLyB9XG4gICk6IFByb21pc2U8RGVsaXZlclR4UmVzcG9uc2U+ID0+IHtcbiAgICBpZiAoIXdpbmRvdy5rZXBscikgdGhyb3cgbmV3IEVycm9yKFwiTm8gV2FsbGV0IENvbm5lY3RlZFwiKTtcblxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdpbmRvdy5rZXBsci5nZXRPZmZsaW5lU2lnbmVyQXV0byh0aGlzLmNvbmZpZy5jaGFpbklkKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5jaGFpbk5hbWUgPT09IFwiRXZtb3NcIilcbiAgICAgIHJldHVybiBldm1vcy5zaWduQW5kQnJvYWRjYXN0KHtcbiAgICAgICAgcnBjOiB0aGlzLmNvbmZpZy5ycGMsXG4gICAgICAgIHNpZ25lcjogY2FzdFNpZ25lcihzaWduZXIpLFxuICAgICAgICBtZXNzYWdlczogbXNncyxcbiAgICAgICAgc291cmNlQWNjb3VudDogdGhpcy5hY2NvdW50LFxuICAgICAgICBzb3VyY2VDaGFpbkRhdGE6IHRoaXMuY29uZmlnLFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBnYXNQcmljZSA9IG5ldyBHYXNQcmljZShcbiAgICAgIERlY2ltYWwuZnJvbVVzZXJJbnB1dChcIjAuMDAxMjVcIiwgMTgpLFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmZlZURlbm9tXG4gICAgICAgIDogdGhpcy5jb25maWcuZmVlQ3VycmVuY2llc1swXS5jb2luRGVub21cbiAgICApO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKFxuICAgICAgcnBjLFxuICAgICAgY2FzdFNpZ25lcihzaWduZXIpLFxuICAgICAge1xuICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgZ2FzUHJpY2UsXG4gICAgICAgIGFtaW5vVHlwZXM6IGFtaW5vVHlwZXModGhpcy5jb25maWcuYmVjaDMyQ29uZmlnLmJlY2gzMlByZWZpeEFjY0FkZHIpLFxuICAgICAgICBhY2NvdW50UGFyc2VyLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LnNpZ25BbmRCcm9hZGNhc3QodGhpcy5hY2NvdW50LmFkZHJlc3MsIG1zZ3MsIDEuNyk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiS2VwbHIiLCJhY2NvdW50IiwiY29uZmlnIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZGlzY29ubmVjdCIsInNpZ25BbmRCcm9hZGNhc3QiLCJmbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXBsciIsImdldE9mZmxpbmVTaWduZXJBdXRvIiwiY2hhaW5JZCIsInRoZW4iLCJzaWduZXIiLCJnZXRBY2NvdW50cyIsImFzIiwibGVuZ3RoIiwicnBjIiwibXNncyIsIkVycm9yIiwiY2hhaW5OYW1lIiwiZXZtb3MiLCJjYXN0U2lnbmVyIiwibWVzc2FnZXMiLCJzb3VyY2VBY2NvdW50Iiwic291cmNlQ2hhaW5EYXRhIiwiZ2FzUHJpY2UiLCJHYXNQcmljZSIsIkRlY2ltYWwiLCJmcm9tVXNlcklucHV0IiwiZmVlRGVub20iLCJmZWVDdXJyZW5jaWVzIiwiY29pbkRlbm9tIiwiY2xpZW50IiwiU2lnbmluZ1N0YXJnYXRlQ2xpZW50IiwiY29ubmVjdFdpdGhTaWduZXIiLCJyZWdpc3RyeSIsImFtaW5vVHlwZXMiLCJiZWNoMzJDb25maWciLCJiZWNoMzJQcmVmaXhBY2NBZGRyIiwiYWNjb3VudFBhcnNlciIsImFkZHJlc3MiLCJjb25uZWN0Iiwib3B0cyIsImNoYWluSW5mbyIsImZpbHRlciIsIngiLCJjb2luTWluaW1hbERlbm9tIiwiZXhwZXJpbWVudGFsU3VnZ2VzdENoYWluIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQXFCYUE7OztlQUFBQTs7O3NCQXJCVzswQkFNakI7dUJBRW9COzBCQUNhOytEQUNqQjt1QkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BCLE1BQU1BO0lBQ1gsWUFDRSxBQUFPQyxPQUFvQixFQUMzQixBQUFPQyxNQUFpQixFQUN4QixBQUFRQyxPQUFpQixDQUN6Qjs7OztRQWdDRix1QkFBT0MsWUFBUCxLQUFBO1FBaUJBLHVCQUFPQyxjQUFQLEtBQUE7UUFFQSx1QkFBT0Msb0JBQVAsS0FBQTthQXREU0wsVUFB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
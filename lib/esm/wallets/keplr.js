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
import { Decimal } from "@cosmjs/math";
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import * as evmos from "./evmos";
import { castSigner } from "./utils";
export class Keplr {
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
                if (_this.config.chainName === "Evmos") return evmos.signAndBroadcast({
                    rpc: _this.config.rpc,
                    signer: castSigner(signer),
                    messages: msgs,
                    sourceAccount: _this.account,
                    sourceChainData: _this.config
                });
                const gasPrice = new GasPrice(Decimal.fromUserInput("0.00125", 18), _this.options ? _this.options.feeDenom : _this.config.feeCurrencies[0].coinDenom);
                const client = yield SigningStargateClient.connectWithSigner(rpc, castSigner(signer), {
                    registry,
                    gasPrice,
                    aminoTypes: aminoTypes(_this.config.bech32Config.bech32PrefixAccAddr),
                    accountParser
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL2tlcGxyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWwgfSBmcm9tIFwiQGNvc21qcy9tYXRoXCI7XG5pbXBvcnQgeyBBY2NvdW50RGF0YSwgRW5jb2RlT2JqZWN0IH0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHtcbiAgRGVsaXZlclR4UmVzcG9uc2UsXG4gIEdhc1ByaWNlLFxuICBTaWduaW5nU3RhcmdhdGVDbGllbnQsXG59IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBDaGFpbkluZm8sIFdpbmRvdyBhcyBLZXBscldpbmRvdyB9IGZyb20gXCJAa2VwbHItd2FsbGV0L3R5cGVzXCI7XG5pbXBvcnQgeyBhbWlub1R5cGVzIH0gZnJvbSBcIi4uL2FtaW5vXCI7XG5pbXBvcnQgeyBhY2NvdW50UGFyc2VyLCByZWdpc3RyeSB9IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgZXZtb3MgZnJvbSBcIi4vZXZtb3NcIjtcbmltcG9ydCB7IFdhbGxldEkgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGNhc3RTaWduZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlXG4gIGludGVyZmFjZSBXaW5kb3cgZXh0ZW5kcyBLZXBscldpbmRvdyB7fVxufVxuXG50eXBlIE9wdGlvbnMgPSB7IGZlZURlbm9tOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNsYXNzIEtlcGxyIGltcGxlbWVudHMgV2FsbGV0SSB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjY291bnQ6IEFjY291bnREYXRhLFxuICAgIHB1YmxpYyBjb25maWc6IENoYWluSW5mbyxcbiAgICBwcml2YXRlIG9wdGlvbnM/OiBPcHRpb25zXG4gICkge31cblxuICBzdGF0aWMgY29ubmVjdCA9IChcbiAgICBjb25maWc6IENoYWluSW5mbyxcbiAgICBvcHRzPzogeyBmZWVEZW5vbTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxLZXBscj4gPT4ge1xuICAgIGNvbnN0IGtlcGxyID0gd2luZG93LmtlcGxyO1xuXG4gICAgaWYgKCFrZXBscikgdGhyb3cgbmV3IEVycm9yKFwiS2VwbHIgZXh0ZW5zaW9uIG5vdCBhdmFpbGFibGVcIik7XG5cbiAgICBjb25zdCBjaGFpbkluZm8gPSB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAvLyBLZXBsciBpcyBidWxsc2h0aSBhbmQgZGVmYXVsdHMgdG8gdGhlIGZpcnN0IG9mIHRoZXNlIHByb3ZpZGVkIGFzIHRoZSBmZWUgZGVub21cbiAgICAgIGZlZUN1cnJlbmNpZXM6IGNvbmZpZy5mZWVDdXJyZW5jaWVzLmZpbHRlcigoeCkgPT5cbiAgICAgICAgb3B0cyA/IHguY29pbk1pbmltYWxEZW5vbSA9PT0gb3B0cy5mZWVEZW5vbSA6IHRydWVcbiAgICAgICksXG4gICAgfTtcblxuICAgIHJldHVybiBrZXBsclxuICAgICAgLmV4cGVyaW1lbnRhbFN1Z2dlc3RDaGFpbihjaGFpbkluZm8pXG4gICAgICAudGhlbigoKSA9PiBrZXBsci5lbmFibGUoY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKCkgPT4ga2VwbHIuZ2V0T2ZmbGluZVNpZ25lckF1dG8oY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKHNpZ25lcikgPT4gc2lnbmVyLmdldEFjY291bnRzKCkpXG4gICAgICAudGhlbigoYXMpID0+IHtcbiAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBuZXcgS2VwbHIoYXNbMF0sIGNvbmZpZywgb3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gQWNjb3VudHNcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IEtlcGxyKSA9PiB2b2lkKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXBscl9rZXlzdG9yZWNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXBsciA9IHdpbmRvdy5rZXBscjtcbiAgICAgIGlmICgha2VwbHIpIHJldHVybjtcblxuICAgICAga2VwbHJcbiAgICAgICAgLmdldE9mZmxpbmVTaWduZXJBdXRvKHRoaXMuY29uZmlnLmNoYWluSWQpXG4gICAgICAgIC50aGVuKChzaWduZXIpID0+IHNpZ25lci5nZXRBY2NvdW50cygpKVxuICAgICAgICAudGhlbigoYXMpID0+IHtcbiAgICAgICAgICBpZiAoYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhc1swXTtcbiAgICAgICAgICAgIGZuKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7fTtcblxuICBwdWJsaWMgc2lnbkFuZEJyb2FkY2FzdCA9IGFzeW5jIChcbiAgICBycGM6IHN0cmluZyxcbiAgICBtc2dzOiBFbmNvZGVPYmplY3RbXVxuICAgIC8vIGJhdGNoPzoge1xuICAgIC8vICAgc2l6ZTogbnVtYmVyO1xuICAgIC8vICAgY2I6ICh0b3RhbDogbnVtYmVyLCByZW1haW5pbmc6IG51bWJlcikgPT4gdm9pZDtcbiAgICAvLyB9XG4gICk6IFByb21pc2U8RGVsaXZlclR4UmVzcG9uc2U+ID0+IHtcbiAgICBpZiAoIXdpbmRvdy5rZXBscikgdGhyb3cgbmV3IEVycm9yKFwiTm8gV2FsbGV0IENvbm5lY3RlZFwiKTtcblxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdpbmRvdy5rZXBsci5nZXRPZmZsaW5lU2lnbmVyQXV0byh0aGlzLmNvbmZpZy5jaGFpbklkKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5jaGFpbk5hbWUgPT09IFwiRXZtb3NcIilcbiAgICAgIHJldHVybiBldm1vcy5zaWduQW5kQnJvYWRjYXN0KHtcbiAgICAgICAgcnBjOiB0aGlzLmNvbmZpZy5ycGMsXG4gICAgICAgIHNpZ25lcjogY2FzdFNpZ25lcihzaWduZXIpLFxuICAgICAgICBtZXNzYWdlczogbXNncyxcbiAgICAgICAgc291cmNlQWNjb3VudDogdGhpcy5hY2NvdW50LFxuICAgICAgICBzb3VyY2VDaGFpbkRhdGE6IHRoaXMuY29uZmlnLFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBnYXNQcmljZSA9IG5ldyBHYXNQcmljZShcbiAgICAgIERlY2ltYWwuZnJvbVVzZXJJbnB1dChcIjAuMDAxMjVcIiwgMTgpLFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmZlZURlbm9tXG4gICAgICAgIDogdGhpcy5jb25maWcuZmVlQ3VycmVuY2llc1swXS5jb2luRGVub21cbiAgICApO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKFxuICAgICAgcnBjLFxuICAgICAgY2FzdFNpZ25lcihzaWduZXIpLFxuICAgICAge1xuICAgICAgICByZWdpc3RyeSxcbiAgICAgICAgZ2FzUHJpY2UsXG4gICAgICAgIGFtaW5vVHlwZXM6IGFtaW5vVHlwZXModGhpcy5jb25maWcuYmVjaDMyQ29uZmlnLmJlY2gzMlByZWZpeEFjY0FkZHIpLFxuICAgICAgICBhY2NvdW50UGFyc2VyLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LnNpZ25BbmRCcm9hZGNhc3QodGhpcy5hY2NvdW50LmFkZHJlc3MsIG1zZ3MsIDEuNyk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiRGVjaW1hbCIsIkdhc1ByaWNlIiwiU2lnbmluZ1N0YXJnYXRlQ2xpZW50IiwiYW1pbm9UeXBlcyIsImFjY291bnRQYXJzZXIiLCJyZWdpc3RyeSIsImV2bW9zIiwiY2FzdFNpZ25lciIsIktlcGxyIiwiYWNjb3VudCIsImNvbmZpZyIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImRpc2Nvbm5lY3QiLCJzaWduQW5kQnJvYWRjYXN0IiwiZm4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwia2VwbHIiLCJnZXRPZmZsaW5lU2lnbmVyQXV0byIsImNoYWluSWQiLCJ0aGVuIiwic2lnbmVyIiwiZ2V0QWNjb3VudHMiLCJhcyIsImxlbmd0aCIsInJwYyIsIm1zZ3MiLCJFcnJvciIsImNoYWluTmFtZSIsIm1lc3NhZ2VzIiwic291cmNlQWNjb3VudCIsInNvdXJjZUNoYWluRGF0YSIsImdhc1ByaWNlIiwiZnJvbVVzZXJJbnB1dCIsImZlZURlbm9tIiwiZmVlQ3VycmVuY2llcyIsImNvaW5EZW5vbSIsImNsaWVudCIsImNvbm5lY3RXaXRoU2lnbmVyIiwiYmVjaDMyQ29uZmlnIiwiYmVjaDMyUHJlZml4QWNjQWRkciIsImFkZHJlc3MiLCJjb25uZWN0Iiwib3B0cyIsImNoYWluSW5mbyIsImZpbHRlciIsIngiLCJjb2luTWluaW1hbERlbm9tIiwiZXhwZXJpbWVudGFsU3VnZ2VzdENoYWluIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxPQUFPLFFBQVEsZUFBZTtBQUV2QyxTQUVFQyxRQUFRLEVBQ1JDLHFCQUFxQixRQUNoQixtQkFBbUI7QUFFMUIsU0FBU0MsVUFBVSxRQUFRLFdBQVc7QUFDdEMsU0FBU0MsYUFBYSxFQUFFQyxRQUFRLFFBQVEsY0FBYztBQUN0RCxZQUFZQyxXQUFXLFVBQVU7QUFFakMsU0FBU0MsVUFBVSxRQUFRLFVBQVU7QUFTckMsT0FBTyxNQUFNQztJQUNYLFlBQ0UsQUFBT0MsT0FBb0IsRUFDM0IsQUFBT0MsTUFBaUIsRUFDeEIsQUFBUUMsT0FBaUIsQ0FD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
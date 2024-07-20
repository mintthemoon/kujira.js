"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Leap", {
    enumerable: true,
    get: function() {
        return Leap;
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
class Leap {
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
            window.addEventListener("leap_keystorechange", ()=>{
                const leap = window.leap;
                if (!leap) return;
                leap.getOfflineSignerAuto(this.config.chainId).then((signer)=>signer.getAccounts()).then((as)=>{
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
                if (!window.leap) throw new Error("No Wallet Connected");
                const signer = yield window.leap.getOfflineSignerAuto(_this.config.chainId);
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
                // if (batch) {
                //   const chunks = msgs.reduce((agg, item, index) => {
                //     const chunkIndex = Math.floor(index / batch.size);
                //     if (!agg[chunkIndex]) agg[chunkIndex] = [];
                //     agg[chunkIndex].push(item);
                //     return agg;
                //   }, [] as EncodeObject[][]);
                //   let remaining = chunks.length;
                //   batch.cb(chunks.length, remaining);
                //   let res: DeliverTxResponse;
                //   for (const chunk of chunks) {
                //     res = await client.signAndBroadcast(
                //       this.account.address,
                //       chunk,
                //       1.5
                //     );
                //     remaining -= 1;
                //     batch.cb(chunks.length, remaining);
                //   }
                //   // @ts-expect-error this is fine
                //   return res;
                // } else {
                return yield client.signAndBroadcast(_this.account.address, msgs, 1.7);
            // }
            });
            return function(rpc, msgs) {
                return _ref.apply(this, arguments);
            };
        }();
    }
}
_define_property(Leap, "connect", (config, opts)=>{
    const leap = window.leap;
    if (!leap) throw new Error("Leap extension not available");
    return leap.experimentalSuggestChain(config).then(()=>leap.enable(config.chainId)).then(()=>leap.getOfflineSignerAuto(config.chainId)).then((signer)=>signer.getAccounts()).then((as)=>{
        if (as.length) {
            return new Leap(as[0], config, opts);
        } else {
            throw new Error("No Accounts");
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL2xlYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbCB9IGZyb20gXCJAY29zbWpzL21hdGhcIjtcbmltcG9ydCB7IEFjY291bnREYXRhLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgR2FzUHJpY2UsXG4gIFNpZ25pbmdTdGFyZ2F0ZUNsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IENoYWluSW5mbywgS2VwbHIsIFdpbmRvdyBhcyBLZXBscldpbmRvdyB9IGZyb20gXCJAa2VwbHItd2FsbGV0L3R5cGVzXCI7XG5pbXBvcnQgeyBhbWlub1R5cGVzIH0gZnJvbSBcIi4uL2FtaW5vXCI7XG5pbXBvcnQgeyBhY2NvdW50UGFyc2VyLCByZWdpc3RyeSB9IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgZXZtb3MgZnJvbSBcIi4vZXZtb3NcIjtcbmltcG9ydCB7IFdhbGxldEkgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGNhc3RTaWduZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlXG4gIGludGVyZmFjZSBXaW5kb3cgZXh0ZW5kcyBLZXBscldpbmRvdyB7XG4gICAgbGVhcDogS2VwbHI7XG4gIH1cbn1cblxudHlwZSBPcHRpb25zID0geyBmZWVEZW5vbTogc3RyaW5nIH07XG5cbmV4cG9ydCBjbGFzcyBMZWFwIGltcGxlbWVudHMgV2FsbGV0SSB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjY291bnQ6IEFjY291bnREYXRhLFxuICAgIHB1YmxpYyBjb25maWc6IENoYWluSW5mbyxcbiAgICBwcml2YXRlIG9wdGlvbnM/OiBPcHRpb25zXG4gICkge31cblxuICBzdGF0aWMgY29ubmVjdCA9IChcbiAgICBjb25maWc6IENoYWluSW5mbyxcbiAgICBvcHRzPzogeyBmZWVEZW5vbTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxMZWFwPiA9PiB7XG4gICAgY29uc3QgbGVhcCA9IHdpbmRvdy5sZWFwO1xuXG4gICAgaWYgKCFsZWFwKSB0aHJvdyBuZXcgRXJyb3IoXCJMZWFwIGV4dGVuc2lvbiBub3QgYXZhaWxhYmxlXCIpO1xuXG4gICAgcmV0dXJuIGxlYXBcbiAgICAgIC5leHBlcmltZW50YWxTdWdnZXN0Q2hhaW4oY29uZmlnKVxuICAgICAgLnRoZW4oKCkgPT4gbGVhcC5lbmFibGUoY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKCkgPT4gbGVhcC5nZXRPZmZsaW5lU2lnbmVyQXV0byhjb25maWcuY2hhaW5JZCkpXG4gICAgICAudGhlbigoc2lnbmVyKSA9PiBzaWduZXIuZ2V0QWNjb3VudHMoKSlcbiAgICAgIC50aGVuKChhcykgPT4ge1xuICAgICAgICBpZiAoYXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBMZWFwKGFzWzBdLCBjb25maWcsIG9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIEFjY291bnRzXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgb25DaGFuZ2UgPSAoZm46IChrOiBMZWFwKSA9PiB2b2lkKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsZWFwX2tleXN0b3JlY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxlYXAgPSB3aW5kb3cubGVhcDtcbiAgICAgIGlmICghbGVhcCkgcmV0dXJuO1xuXG4gICAgICBsZWFwXG4gICAgICAgIC5nZXRPZmZsaW5lU2lnbmVyQXV0byh0aGlzLmNvbmZpZy5jaGFpbklkKVxuICAgICAgICAudGhlbigoc2lnbmVyKSA9PiBzaWduZXIuZ2V0QWNjb3VudHMoKSlcbiAgICAgICAgLnRoZW4oKGFzKSA9PiB7XG4gICAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYXNbMF07XG4gICAgICAgICAgICBmbih0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4ge307XG5cbiAgcHVibGljIHNpZ25BbmRCcm9hZGNhc3QgPSBhc3luYyAoXG4gICAgcnBjOiBzdHJpbmcsXG4gICAgbXNnczogRW5jb2RlT2JqZWN0W11cbiAgICAvLyBiYXRjaD86IHtcbiAgICAvLyAgIHNpemU6IG51bWJlcjtcbiAgICAvLyAgIGNiOiAodG90YWw6IG51bWJlciwgcmVtYWluaW5nOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgLy8gfVxuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgaWYgKCF3aW5kb3cubGVhcCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gV2FsbGV0IENvbm5lY3RlZFwiKTtcblxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdpbmRvdy5sZWFwLmdldE9mZmxpbmVTaWduZXJBdXRvKHRoaXMuY29uZmlnLmNoYWluSWQpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmNoYWluTmFtZSA9PT0gXCJFdm1vc1wiKVxuICAgICAgcmV0dXJuIGV2bW9zLnNpZ25BbmRCcm9hZGNhc3Qoe1xuICAgICAgICBycGM6IHRoaXMuY29uZmlnLnJwYyxcbiAgICAgICAgc2lnbmVyOiBjYXN0U2lnbmVyKHNpZ25lciksXG4gICAgICAgIG1lc3NhZ2VzOiBtc2dzLFxuICAgICAgICBzb3VyY2VBY2NvdW50OiB0aGlzLmFjY291bnQsXG4gICAgICAgIHNvdXJjZUNoYWluRGF0YTogdGhpcy5jb25maWcsXG4gICAgICB9KTtcblxuICAgIGNvbnN0IGdhc1ByaWNlID0gbmV3IEdhc1ByaWNlKFxuICAgICAgRGVjaW1hbC5mcm9tVXNlcklucHV0KFwiMC4wMDEyNVwiLCAxOCksXG4gICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgPyB0aGlzLm9wdGlvbnMuZmVlRGVub21cbiAgICAgICAgOiB0aGlzLmNvbmZpZy5mZWVDdXJyZW5jaWVzWzBdLmNvaW5EZW5vbVxuICAgICk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBTaWduaW5nU3RhcmdhdGVDbGllbnQuY29ubmVjdFdpdGhTaWduZXIoXG4gICAgICBycGMsXG4gICAgICBjYXN0U2lnbmVyKHNpZ25lciksXG4gICAgICB7XG4gICAgICAgIHJlZ2lzdHJ5LFxuICAgICAgICBnYXNQcmljZSxcbiAgICAgICAgYW1pbm9UeXBlczogYW1pbm9UeXBlcyh0aGlzLmNvbmZpZy5iZWNoMzJDb25maWcuYmVjaDMyUHJlZml4QWNjQWRkciksXG4gICAgICAgIGFjY291bnRQYXJzZXIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIGlmIChiYXRjaCkge1xuICAgIC8vICAgY29uc3QgY2h1bmtzID0gbXNncy5yZWR1Y2UoKGFnZywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgY2h1bmtJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyBiYXRjaC5zaXplKTtcbiAgICAvLyAgICAgaWYgKCFhZ2dbY2h1bmtJbmRleF0pIGFnZ1tjaHVua0luZGV4XSA9IFtdO1xuICAgIC8vICAgICBhZ2dbY2h1bmtJbmRleF0ucHVzaChpdGVtKTtcbiAgICAvLyAgICAgcmV0dXJuIGFnZztcbiAgICAvLyAgIH0sIFtdIGFzIEVuY29kZU9iamVjdFtdW10pO1xuICAgIC8vICAgbGV0IHJlbWFpbmluZyA9IGNodW5rcy5sZW5ndGg7XG4gICAgLy8gICBiYXRjaC5jYihjaHVua3MubGVuZ3RoLCByZW1haW5pbmcpO1xuXG4gICAgLy8gICBsZXQgcmVzOiBEZWxpdmVyVHhSZXNwb25zZTtcbiAgICAvLyAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgLy8gICAgIHJlcyA9IGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KFxuICAgIC8vICAgICAgIHRoaXMuYWNjb3VudC5hZGRyZXNzLFxuICAgIC8vICAgICAgIGNodW5rLFxuICAgIC8vICAgICAgIDEuNVxuICAgIC8vICAgICApO1xuICAgIC8vICAgICByZW1haW5pbmcgLT0gMTtcbiAgICAvLyAgICAgYmF0Y2guY2IoY2h1bmtzLmxlbmd0aCwgcmVtYWluaW5nKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdGhpcyBpcyBmaW5lXG4gICAgLy8gICByZXR1cm4gcmVzO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KHRoaXMuYWNjb3VudC5hZGRyZXNzLCBtc2dzLCAxLjcpO1xuICAgIC8vIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJMZWFwIiwiYWNjb3VudCIsImNvbmZpZyIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImRpc2Nvbm5lY3QiLCJzaWduQW5kQnJvYWRjYXN0IiwiZm4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibGVhcCIsImdldE9mZmxpbmVTaWduZXJBdXRvIiwiY2hhaW5JZCIsInRoZW4iLCJzaWduZXIiLCJnZXRBY2NvdW50cyIsImFzIiwibGVuZ3RoIiwicnBjIiwibXNncyIsIkVycm9yIiwiY2hhaW5OYW1lIiwiZXZtb3MiLCJjYXN0U2lnbmVyIiwibWVzc2FnZXMiLCJzb3VyY2VBY2NvdW50Iiwic291cmNlQ2hhaW5EYXRhIiwiZ2FzUHJpY2UiLCJHYXNQcmljZSIsIkRlY2ltYWwiLCJmcm9tVXNlcklucHV0IiwiZmVlRGVub20iLCJmZWVDdXJyZW5jaWVzIiwiY29pbkRlbm9tIiwiY2xpZW50IiwiU2lnbmluZ1N0YXJnYXRlQ2xpZW50IiwiY29ubmVjdFdpdGhTaWduZXIiLCJyZWdpc3RyeSIsImFtaW5vVHlwZXMiLCJiZWNoMzJDb25maWciLCJiZWNoMzJQcmVmaXhBY2NBZGRyIiwiYWNjb3VudFBhcnNlciIsImFkZHJlc3MiLCJjb25uZWN0Iiwib3B0cyIsImV4cGVyaW1lbnRhbFN1Z2dlc3RDaGFpbiIsImVuYWJsZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF1QmFBOzs7ZUFBQUE7OztzQkF2Qlc7MEJBTWpCO3VCQUVvQjswQkFDYTsrREFDakI7dUJBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdwQixNQUFNQTtJQUNYLFlBQ0UsQUFBT0MsT0FBb0IsRUFDM0IsQUFBT0MsTUFBaUIsRUFDeEIsQUFBUUMsT0FBaUIsQ0FDekI7Ozs7UUF3QkYsdUJBQU9DLFlBQVAsS0FBQTtRQWlCQSx1QkFBT0MsY0FBUCxLQUFBO1FBRUEsdUJBQU9DLG9CQUFQLEtBQUE7YUE5Q1NMLFVBQUFBO2FBQ0FDLFNBQUFBO2FBQ0NDLFVBQUFBO2FBeUJIQyxXQUFXLENBQUNHO1lBQ2pCQyxPQUFPQyxnQkFBZ0IsQ0FBQyx1QkFBdUI7Z0JBQzdDLE1BQU1DLE9BQU9GLE9BQU9FLElBQUk7Z0JBQ3hCLElBQUksQ0FBQ0EsTUFBTTtnQkFFWEEsS0FDR0Msb0JBQW9CLENBQUMsSUFBSSxDQUFDVCxNQUFNLENBQUNVLE9BQU8sRUFDeENDLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxXQUFXLElBQ25DRixJQUFJLENBQUMsQ0FBQ0c7b0JBQ0wsSUFBSUEsR0FBR0MsTUFBTSxFQUFFO3dCQUNiLElBQUksQ0FBQ2hCLE9BQU8sR0FBR2UsRUFBRSxDQUFDLEVBQUU7d0JBQ3BCVCxHQUFHLElBQUk7b0JBQ1Q7Z0JBQ0Y7WUFDSjtRQUNGO2FBRU9GLGFBQWEsS0FBTzs7YUFFcEJDO3VCQUFtQixvQkFBQSxVQUN4QlksS0FDQUM7Z0JBTUEsSUFBSSxDQUFDWCxPQUFPRSxJQUFJLEVBQUUsTUFBTSxJQUFJVSxNQUFNO2dCQUVsQyxNQUFNTixTQUFTLE1BQU1OLE9BQU9FLElBQUksQ0FBQ0Msb0JBQW9CLENBQUMsTUFBS1QsTUFBTSxDQUFDVSxPQUFPO2dCQUV6RSxJQUFJLE1BQUtWLE1BQU0sQ0FBQ21CLFNBQVMsS0FBSyxTQUM1QixPQUFPQyxPQUFNaEIsZ0JBQWdCLENBQUM7b0JBQzVCWSxLQUFLLE1BQUtoQixNQUFNLENBQUNnQixHQUFHO29CQUNwQkosUUFBUVMsSUFBQUEsaUJBQVUsRUFBQ1Q7b0JBQ25CVSxVQUFVTDtvQkFDVk0sZUFBZSxNQUFLeEIsT0FBTztvQkFDM0J5QixpQkFBaUIsTUFBS3hCLE1BQU07Z0JBQzlCO2dCQUVGLE1BQU15QixXQUFXLElBQUlDLGtCQUFRLENBQzNCQyxhQUFPLENBQUNDLGFBQWEsQ0FBQyxXQUFXLEtBQ2pDLE1BQUszQixPQUFPLEdBQ1IsTUFBS0EsT0FBTyxDQUFDNEIsUUFBUSxHQUNyQixNQUFLN0IsTUFBTSxDQUFDOEIsYUFBYSxDQUFDLEVBQUUsQ0FBQ0MsU0FBUztnQkFHNUMsTUFBTUMsU0FBUyxNQUFNQywrQkFBcUIsQ0FBQ0MsaUJBQWlCLENBQzFEbEIsS0FDQUssSUFBQUEsaUJBQVUsRUFBQ1QsU0FDWDtvQkFDRXVCLFVBQUFBLGtCQUFRO29CQUNSVjtvQkFDQVcsWUFBWUEsSUFBQUEsaUJBQVUsRUFBQyxNQUFLcEMsTUFBTSxDQUFDcUMsWUFBWSxDQUFDQyxtQkFBbUI7b0JBQ25FQyxlQUFBQSx1QkFBYTtnQkFDZjtnQkFHRixlQUFlO2dCQUNmLHVEQUF1RDtnQkFDdkQseURBQXlEO2dCQUN6RCxrREFBa0Q7Z0JBQ2xELGtDQUFrQztnQkFDbEMsa0JBQWtCO2dCQUNsQixnQ0FBZ0M7Z0JBQ2hDLG1DQUFtQztnQkFDbkMsd0NBQXdDO2dCQUV4QyxnQ0FBZ0M7Z0JBQ2hDLGtDQUFrQztnQkFDbEMsMkNBQTJDO2dCQUMzQyw4QkFBOEI7Z0JBQzlCLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixTQUFTO2dCQUNULHNCQUFzQjtnQkFDdEIsMENBQTBDO2dCQUMxQyxNQUFNO2dCQUNOLHFDQUFxQztnQkFDckMsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLE9BQU8sTUFBTVAsT0FBTzVCLGdCQUFnQixDQUFDLE1BQUtMLE9BQU8sQ0FBQ3lDLE9BQU8sRUFBRXZCLE1BQU07WUFDakUsSUFBSTtZQUNOOzRCQS9ERUQsS0FDQUM7Ozs7SUE3Q0M7QUE0R0w7QUExR0UsaUJBUFduQixNQU9KMkMsV0FBVSxDQUNmekMsUUFDQTBDO0lBRUEsTUFBTWxDLE9BQU9GLE9BQU9FLElBQUk7SUFFeEIsSUFBSSxDQUFDQSxNQUFNLE1BQU0sSUFBSVUsTUFBTTtJQUUzQixPQUFPVixLQUNKbUMsd0JBQXdCLENBQUMzQyxRQUN6QlcsSUFBSSxDQUFDLElBQU1ILEtBQUtvQyxNQUFNLENBQUM1QyxPQUFPVSxPQUFPLEdBQ3JDQyxJQUFJLENBQUMsSUFBTUgsS0FBS0Msb0JBQW9CLENBQUNULE9BQU9VLE9BQU8sR0FDbkRDLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxXQUFXLElBQ25DRixJQUFJLENBQUMsQ0FBQ0c7UUFDTCxJQUFJQSxHQUFHQyxNQUFNLEVBQUU7WUFDYixPQUFPLElBQUlqQixLQUFLZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRWQsUUFBUTBDO1FBQ2pDLE9BQU87WUFDTCxNQUFNLElBQUl4QixNQUFNO1FBQ2xCO0lBQ0Y7QUFDSiJ9
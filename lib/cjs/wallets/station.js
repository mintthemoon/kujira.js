"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Station", {
    enumerable: true,
    get: function() {
        return Station;
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
class Station {
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
            window.addEventListener("station_wallet_change", ()=>{
                const station = window.station;
                if (!station) return;
                station.keplr.getOfflineSignerAuto(this.config.chainId).then((signer)=>signer.getAccounts()).then((as)=>{
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
                if (!window.station) throw new Error("No Wallet Connected");
                const signer = yield window.station.keplr.getOfflineSignerAuto(_this.config.chainId);
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
_define_property(Station, "connect", (config, opts)=>{
    const station = window.station;
    if (!station) throw new Error("Station extension not available");
    return station.keplr.experimentalSuggestChain(config).then(()=>station.keplr.enable(config.chainId)).then(()=>station.keplr.getOfflineSignerAuto(config.chainId)).then((signer)=>signer.getAccounts()).then((as)=>{
        if (as.length) {
            return new Station(as[0], config, opts);
        } else {
            throw new Error("No Accounts");
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3N0YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbCB9IGZyb20gXCJAY29zbWpzL21hdGhcIjtcbmltcG9ydCB7IEFjY291bnREYXRhLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgR2FzUHJpY2UsXG4gIFNpZ25pbmdTdGFyZ2F0ZUNsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IENoYWluSW5mbywgS2VwbHIgfSBmcm9tIFwiQGtlcGxyLXdhbGxldC90eXBlc1wiO1xuaW1wb3J0IHsgYW1pbm9UeXBlcyB9IGZyb20gXCIuLi9hbWlub1wiO1xuaW1wb3J0IHsgYWNjb3VudFBhcnNlciwgcmVnaXN0cnkgfSBmcm9tIFwiLi4vcmVnaXN0cnlcIjtcbmltcG9ydCAqIGFzIGV2bW9zIGZyb20gXCIuL2V2bW9zXCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBjYXN0U2lnbmVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBzdGF0aW9uOiB7IGtlcGxyOiBLZXBsciB9O1xuICB9XG59XG5cbnR5cGUgT3B0aW9ucyA9IHsgZmVlRGVub206IHN0cmluZyB9O1xuXG5leHBvcnQgY2xhc3MgU3RhdGlvbiBpbXBsZW1lbnRzIFdhbGxldEkge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY2NvdW50OiBBY2NvdW50RGF0YSxcbiAgICBwdWJsaWMgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgcHJpdmF0ZSBvcHRpb25zPzogT3B0aW9uc1xuICApIHt9XG5cbiAgc3RhdGljIGNvbm5lY3QgPSAoXG4gICAgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgb3B0cz86IHsgZmVlRGVub206IHN0cmluZyB9XG4gICk6IFByb21pc2U8U3RhdGlvbj4gPT4ge1xuICAgIGNvbnN0IHN0YXRpb24gPSB3aW5kb3cuc3RhdGlvbjtcblxuICAgIGlmICghc3RhdGlvbikgdGhyb3cgbmV3IEVycm9yKFwiU3RhdGlvbiBleHRlbnNpb24gbm90IGF2YWlsYWJsZVwiKTtcblxuICAgIHJldHVybiBzdGF0aW9uLmtlcGxyXG4gICAgICAuZXhwZXJpbWVudGFsU3VnZ2VzdENoYWluKGNvbmZpZylcbiAgICAgIC50aGVuKCgpID0+IHN0YXRpb24ua2VwbHIuZW5hYmxlKGNvbmZpZy5jaGFpbklkKSlcbiAgICAgIC50aGVuKCgpID0+IHN0YXRpb24ua2VwbHIuZ2V0T2ZmbGluZVNpZ25lckF1dG8oY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKHNpZ25lcikgPT4gc2lnbmVyLmdldEFjY291bnRzKCkpXG4gICAgICAudGhlbigoYXMpID0+IHtcbiAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU3RhdGlvbihhc1swXSwgY29uZmlnLCBvcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBBY2NvdW50c1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgcHVibGljIG9uQ2hhbmdlID0gKGZuOiAoazogU3RhdGlvbikgPT4gdm9pZCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RhdGlvbl93YWxsZXRfY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRpb24gPSB3aW5kb3cuc3RhdGlvbjtcbiAgICAgIGlmICghc3RhdGlvbikgcmV0dXJuO1xuXG4gICAgICBzdGF0aW9uLmtlcGxyXG4gICAgICAgIC5nZXRPZmZsaW5lU2lnbmVyQXV0byh0aGlzLmNvbmZpZy5jaGFpbklkKVxuICAgICAgICAudGhlbigoc2lnbmVyKSA9PiBzaWduZXIuZ2V0QWNjb3VudHMoKSlcbiAgICAgICAgLnRoZW4oKGFzKSA9PiB7XG4gICAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYXNbMF07XG4gICAgICAgICAgICBmbih0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4ge307XG5cbiAgcHVibGljIHNpZ25BbmRCcm9hZGNhc3QgPSBhc3luYyAoXG4gICAgcnBjOiBzdHJpbmcsXG4gICAgbXNnczogRW5jb2RlT2JqZWN0W11cbiAgICAvLyBiYXRjaD86IHtcbiAgICAvLyAgIHNpemU6IG51bWJlcjtcbiAgICAvLyAgIGNiOiAodG90YWw6IG51bWJlciwgcmVtYWluaW5nOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgLy8gfVxuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgaWYgKCF3aW5kb3cuc3RhdGlvbikgdGhyb3cgbmV3IEVycm9yKFwiTm8gV2FsbGV0IENvbm5lY3RlZFwiKTtcblxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdpbmRvdy5zdGF0aW9uLmtlcGxyLmdldE9mZmxpbmVTaWduZXJBdXRvKFxuICAgICAgdGhpcy5jb25maWcuY2hhaW5JZFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuY2hhaW5OYW1lID09PSBcIkV2bW9zXCIpXG4gICAgICByZXR1cm4gZXZtb3Muc2lnbkFuZEJyb2FkY2FzdCh7XG4gICAgICAgIHJwYzogdGhpcy5jb25maWcucnBjLFxuICAgICAgICBzaWduZXI6IGNhc3RTaWduZXIoc2lnbmVyKSxcbiAgICAgICAgbWVzc2FnZXM6IG1zZ3MsXG4gICAgICAgIHNvdXJjZUFjY291bnQ6IHRoaXMuYWNjb3VudCxcbiAgICAgICAgc291cmNlQ2hhaW5EYXRhOiB0aGlzLmNvbmZpZyxcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBuZXcgR2FzUHJpY2UoXG4gICAgICBEZWNpbWFsLmZyb21Vc2VySW5wdXQoXCIwLjAwMTI1XCIsIDE4KSxcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICA/IHRoaXMub3B0aW9ucy5mZWVEZW5vbVxuICAgICAgICA6IHRoaXMuY29uZmlnLmZlZUN1cnJlbmNpZXNbMF0uY29pbkRlbm9tXG4gICAgKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IFNpZ25pbmdTdGFyZ2F0ZUNsaWVudC5jb25uZWN0V2l0aFNpZ25lcihcbiAgICAgIHJwYyxcbiAgICAgIGNhc3RTaWduZXIoc2lnbmVyKSxcbiAgICAgIHtcbiAgICAgICAgcmVnaXN0cnksXG4gICAgICAgIGdhc1ByaWNlLFxuICAgICAgICBhbWlub1R5cGVzOiBhbWlub1R5cGVzKHRoaXMuY29uZmlnLmJlY2gzMkNvbmZpZy5iZWNoMzJQcmVmaXhBY2NBZGRyKSxcbiAgICAgICAgYWNjb3VudFBhcnNlcixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KHRoaXMuYWNjb3VudC5hZGRyZXNzLCBtc2dzLCAxLjcpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlN0YXRpb24iLCJhY2NvdW50IiwiY29uZmlnIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZGlzY29ubmVjdCIsInNpZ25BbmRCcm9hZGNhc3QiLCJmbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0aW9uIiwia2VwbHIiLCJnZXRPZmZsaW5lU2lnbmVyQXV0byIsImNoYWluSWQiLCJ0aGVuIiwic2lnbmVyIiwiZ2V0QWNjb3VudHMiLCJhcyIsImxlbmd0aCIsInJwYyIsIm1zZ3MiLCJFcnJvciIsImNoYWluTmFtZSIsImV2bW9zIiwiY2FzdFNpZ25lciIsIm1lc3NhZ2VzIiwic291cmNlQWNjb3VudCIsInNvdXJjZUNoYWluRGF0YSIsImdhc1ByaWNlIiwiR2FzUHJpY2UiLCJEZWNpbWFsIiwiZnJvbVVzZXJJbnB1dCIsImZlZURlbm9tIiwiZmVlQ3VycmVuY2llcyIsImNvaW5EZW5vbSIsImNsaWVudCIsIlNpZ25pbmdTdGFyZ2F0ZUNsaWVudCIsImNvbm5lY3RXaXRoU2lnbmVyIiwicmVnaXN0cnkiLCJhbWlub1R5cGVzIiwiYmVjaDMyQ29uZmlnIiwiYmVjaDMyUHJlZml4QWNjQWRkciIsImFjY291bnRQYXJzZXIiLCJhZGRyZXNzIiwiY29ubmVjdCIsIm9wdHMiLCJleHBlcmltZW50YWxTdWdnZXN0Q2hhaW4iLCJlbmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBc0JhQTs7O2VBQUFBOzs7c0JBdEJXOzBCQU1qQjt1QkFFb0I7MEJBQ2E7K0RBQ2pCO3VCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVcEIsTUFBTUE7SUFDWCxZQUNFLEFBQU9DLE9BQW9CLEVBQzNCLEFBQU9DLE1BQWlCLEVBQ3hCLEFBQVFDLE9BQWlCLENBQ3pCOzs7O1FBd0JGLHVCQUFPQyxZQUFQLEtBQUE7UUFpQkEsdUJBQU9DLGNBQVAsS0FBQTtRQUVBLHVCQUFPQyxvQkFBUCxLQUFBO2FBOUNTTCxVQUFBQTthQUNBQyxTQUFBQTthQUNDQyxVQUFBQTthQXlCSEMsV0FBVyxDQUFDRztZQUNqQkMsT0FBT0MsZ0JBQWdCLENBQUMseUJBQXlCO2dCQUMvQyxNQUFNQyxVQUFVRixPQUFPRSxPQUFPO2dCQUM5QixJQUFJLENBQUNBLFNBQVM7Z0JBRWRBLFFBQVFDLEtBQUssQ0FDVkMsb0JBQW9CLENBQUMsSUFBSSxDQUFDVixNQUFNLENBQUNXLE9BQU8sRUFDeENDLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxXQUFXLElBQ25DRixJQUFJLENBQUMsQ0FBQ0c7b0JBQ0wsSUFBSUEsR0FBR0MsTUFBTSxFQUFFO3dCQUNiLElBQUksQ0FBQ2pCLE9BQU8sR0FBR2dCLEVBQUUsQ0FBQyxFQUFFO3dCQUNwQlYsR0FBRyxJQUFJO29CQUNUO2dCQUNGO1lBQ0o7UUFDRjthQUVPRixhQUFhLEtBQU87O2FBRXBCQzt1QkFBbUIsb0JBQUEsVUFDeEJhLEtBQ0FDO2dCQU1BLElBQUksQ0FBQ1osT0FBT0UsT0FBTyxFQUFFLE1BQU0sSUFBSVcsTUFBTTtnQkFFckMsTUFBTU4sU0FBUyxNQUFNUCxPQUFPRSxPQUFPLENBQUNDLEtBQUssQ0FBQ0Msb0JBQW9CLENBQzVELE1BQUtWLE1BQU0sQ0FBQ1csT0FBTztnQkFHckIsSUFBSSxNQUFLWCxNQUFNLENBQUNvQixTQUFTLEtBQUssU0FDNUIsT0FBT0MsT0FBTWpCLGdCQUFnQixDQUFDO29CQUM1QmEsS0FBSyxNQUFLakIsTUFBTSxDQUFDaUIsR0FBRztvQkFDcEJKLFFBQVFTLElBQUFBLGlCQUFVLEVBQUNUO29CQUNuQlUsVUFBVUw7b0JBQ1ZNLGVBQWUsTUFBS3pCLE9BQU87b0JBQzNCMEIsaUJBQWlCLE1BQUt6QixNQUFNO2dCQUM5QjtnQkFFRixNQUFNMEIsV0FBVyxJQUFJQyxrQkFBUSxDQUMzQkMsYUFBTyxDQUFDQyxhQUFhLENBQUMsV0FBVyxLQUNqQyxNQUFLNUIsT0FBTyxHQUNSLE1BQUtBLE9BQU8sQ0FBQzZCLFFBQVEsR0FDckIsTUFBSzlCLE1BQU0sQ0FBQytCLGFBQWEsQ0FBQyxFQUFFLENBQUNDLFNBQVM7Z0JBRzVDLE1BQU1DLFNBQVMsTUFBTUMsK0JBQXFCLENBQUNDLGlCQUFpQixDQUMxRGxCLEtBQ0FLLElBQUFBLGlCQUFVLEVBQUNULFNBQ1g7b0JBQ0V1QixVQUFBQSxrQkFBUTtvQkFDUlY7b0JBQ0FXLFlBQVlBLElBQUFBLGlCQUFVLEVBQUMsTUFBS3JDLE1BQU0sQ0FBQ3NDLFlBQVksQ0FBQ0MsbUJBQW1CO29CQUNuRUMsZUFBQUEsdUJBQWE7Z0JBQ2Y7Z0JBR0YsT0FBTyxNQUFNUCxPQUFPN0IsZ0JBQWdCLENBQUMsTUFBS0wsT0FBTyxDQUFDMEMsT0FBTyxFQUFFdkIsTUFBTTtZQUNuRTs0QkF6Q0VELEtBQ0FDOzs7O0lBN0NDO0FBc0ZMO0FBcEZFLGlCQVBXcEIsU0FPSjRDLFdBQVUsQ0FDZjFDLFFBQ0EyQztJQUVBLE1BQU1uQyxVQUFVRixPQUFPRSxPQUFPO0lBRTlCLElBQUksQ0FBQ0EsU0FBUyxNQUFNLElBQUlXLE1BQU07SUFFOUIsT0FBT1gsUUFBUUMsS0FBSyxDQUNqQm1DLHdCQUF3QixDQUFDNUMsUUFDekJZLElBQUksQ0FBQyxJQUFNSixRQUFRQyxLQUFLLENBQUNvQyxNQUFNLENBQUM3QyxPQUFPVyxPQUFPLEdBQzlDQyxJQUFJLENBQUMsSUFBTUosUUFBUUMsS0FBSyxDQUFDQyxvQkFBb0IsQ0FBQ1YsT0FBT1csT0FBTyxHQUM1REMsSUFBSSxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLFdBQVcsSUFDbkNGLElBQUksQ0FBQyxDQUFDRztRQUNMLElBQUlBLEdBQUdDLE1BQU0sRUFBRTtZQUNiLE9BQU8sSUFBSWxCLFFBQVFpQixFQUFFLENBQUMsRUFBRSxFQUFFZixRQUFRMkM7UUFDcEMsT0FBTztZQUNMLE1BQU0sSUFBSXhCLE1BQU07UUFDbEI7SUFDRjtBQUNKIn0=
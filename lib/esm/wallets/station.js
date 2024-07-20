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
import { Decimal } from "@cosmjs/math";
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
import * as evmos from "./evmos";
import { castSigner } from "./utils";
export class Station {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3N0YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbCB9IGZyb20gXCJAY29zbWpzL21hdGhcIjtcbmltcG9ydCB7IEFjY291bnREYXRhLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgR2FzUHJpY2UsXG4gIFNpZ25pbmdTdGFyZ2F0ZUNsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IENoYWluSW5mbywgS2VwbHIgfSBmcm9tIFwiQGtlcGxyLXdhbGxldC90eXBlc1wiO1xuaW1wb3J0IHsgYW1pbm9UeXBlcyB9IGZyb20gXCIuLi9hbWlub1wiO1xuaW1wb3J0IHsgYWNjb3VudFBhcnNlciwgcmVnaXN0cnkgfSBmcm9tIFwiLi4vcmVnaXN0cnlcIjtcbmltcG9ydCAqIGFzIGV2bW9zIGZyb20gXCIuL2V2bW9zXCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBjYXN0U2lnbmVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBzdGF0aW9uOiB7IGtlcGxyOiBLZXBsciB9O1xuICB9XG59XG5cbnR5cGUgT3B0aW9ucyA9IHsgZmVlRGVub206IHN0cmluZyB9O1xuXG5leHBvcnQgY2xhc3MgU3RhdGlvbiBpbXBsZW1lbnRzIFdhbGxldEkge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY2NvdW50OiBBY2NvdW50RGF0YSxcbiAgICBwdWJsaWMgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgcHJpdmF0ZSBvcHRpb25zPzogT3B0aW9uc1xuICApIHt9XG5cbiAgc3RhdGljIGNvbm5lY3QgPSAoXG4gICAgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgb3B0cz86IHsgZmVlRGVub206IHN0cmluZyB9XG4gICk6IFByb21pc2U8U3RhdGlvbj4gPT4ge1xuICAgIGNvbnN0IHN0YXRpb24gPSB3aW5kb3cuc3RhdGlvbjtcblxuICAgIGlmICghc3RhdGlvbikgdGhyb3cgbmV3IEVycm9yKFwiU3RhdGlvbiBleHRlbnNpb24gbm90IGF2YWlsYWJsZVwiKTtcblxuICAgIHJldHVybiBzdGF0aW9uLmtlcGxyXG4gICAgICAuZXhwZXJpbWVudGFsU3VnZ2VzdENoYWluKGNvbmZpZylcbiAgICAgIC50aGVuKCgpID0+IHN0YXRpb24ua2VwbHIuZW5hYmxlKGNvbmZpZy5jaGFpbklkKSlcbiAgICAgIC50aGVuKCgpID0+IHN0YXRpb24ua2VwbHIuZ2V0T2ZmbGluZVNpZ25lckF1dG8oY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKHNpZ25lcikgPT4gc2lnbmVyLmdldEFjY291bnRzKCkpXG4gICAgICAudGhlbigoYXMpID0+IHtcbiAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU3RhdGlvbihhc1swXSwgY29uZmlnLCBvcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBBY2NvdW50c1wiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgcHVibGljIG9uQ2hhbmdlID0gKGZuOiAoazogU3RhdGlvbikgPT4gdm9pZCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RhdGlvbl93YWxsZXRfY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRpb24gPSB3aW5kb3cuc3RhdGlvbjtcbiAgICAgIGlmICghc3RhdGlvbikgcmV0dXJuO1xuXG4gICAgICBzdGF0aW9uLmtlcGxyXG4gICAgICAgIC5nZXRPZmZsaW5lU2lnbmVyQXV0byh0aGlzLmNvbmZpZy5jaGFpbklkKVxuICAgICAgICAudGhlbigoc2lnbmVyKSA9PiBzaWduZXIuZ2V0QWNjb3VudHMoKSlcbiAgICAgICAgLnRoZW4oKGFzKSA9PiB7XG4gICAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYXNbMF07XG4gICAgICAgICAgICBmbih0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4ge307XG5cbiAgcHVibGljIHNpZ25BbmRCcm9hZGNhc3QgPSBhc3luYyAoXG4gICAgcnBjOiBzdHJpbmcsXG4gICAgbXNnczogRW5jb2RlT2JqZWN0W11cbiAgICAvLyBiYXRjaD86IHtcbiAgICAvLyAgIHNpemU6IG51bWJlcjtcbiAgICAvLyAgIGNiOiAodG90YWw6IG51bWJlciwgcmVtYWluaW5nOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgLy8gfVxuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgaWYgKCF3aW5kb3cuc3RhdGlvbikgdGhyb3cgbmV3IEVycm9yKFwiTm8gV2FsbGV0IENvbm5lY3RlZFwiKTtcblxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdpbmRvdy5zdGF0aW9uLmtlcGxyLmdldE9mZmxpbmVTaWduZXJBdXRvKFxuICAgICAgdGhpcy5jb25maWcuY2hhaW5JZFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuY2hhaW5OYW1lID09PSBcIkV2bW9zXCIpXG4gICAgICByZXR1cm4gZXZtb3Muc2lnbkFuZEJyb2FkY2FzdCh7XG4gICAgICAgIHJwYzogdGhpcy5jb25maWcucnBjLFxuICAgICAgICBzaWduZXI6IGNhc3RTaWduZXIoc2lnbmVyKSxcbiAgICAgICAgbWVzc2FnZXM6IG1zZ3MsXG4gICAgICAgIHNvdXJjZUFjY291bnQ6IHRoaXMuYWNjb3VudCxcbiAgICAgICAgc291cmNlQ2hhaW5EYXRhOiB0aGlzLmNvbmZpZyxcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBuZXcgR2FzUHJpY2UoXG4gICAgICBEZWNpbWFsLmZyb21Vc2VySW5wdXQoXCIwLjAwMTI1XCIsIDE4KSxcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICA/IHRoaXMub3B0aW9ucy5mZWVEZW5vbVxuICAgICAgICA6IHRoaXMuY29uZmlnLmZlZUN1cnJlbmNpZXNbMF0uY29pbkRlbm9tXG4gICAgKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IFNpZ25pbmdTdGFyZ2F0ZUNsaWVudC5jb25uZWN0V2l0aFNpZ25lcihcbiAgICAgIHJwYyxcbiAgICAgIGNhc3RTaWduZXIoc2lnbmVyKSxcbiAgICAgIHtcbiAgICAgICAgcmVnaXN0cnksXG4gICAgICAgIGdhc1ByaWNlLFxuICAgICAgICBhbWlub1R5cGVzOiBhbWlub1R5cGVzKHRoaXMuY29uZmlnLmJlY2gzMkNvbmZpZy5iZWNoMzJQcmVmaXhBY2NBZGRyKSxcbiAgICAgICAgYWNjb3VudFBhcnNlcixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KHRoaXMuYWNjb3VudC5hZGRyZXNzLCBtc2dzLCAxLjcpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIkRlY2ltYWwiLCJHYXNQcmljZSIsIlNpZ25pbmdTdGFyZ2F0ZUNsaWVudCIsImFtaW5vVHlwZXMiLCJhY2NvdW50UGFyc2VyIiwicmVnaXN0cnkiLCJldm1vcyIsImNhc3RTaWduZXIiLCJTdGF0aW9uIiwiYWNjb3VudCIsImNvbmZpZyIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImRpc2Nvbm5lY3QiLCJzaWduQW5kQnJvYWRjYXN0IiwiZm4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdGlvbiIsImtlcGxyIiwiZ2V0T2ZmbGluZVNpZ25lckF1dG8iLCJjaGFpbklkIiwidGhlbiIsInNpZ25lciIsImdldEFjY291bnRzIiwiYXMiLCJsZW5ndGgiLCJycGMiLCJtc2dzIiwiRXJyb3IiLCJjaGFpbk5hbWUiLCJtZXNzYWdlcyIsInNvdXJjZUFjY291bnQiLCJzb3VyY2VDaGFpbkRhdGEiLCJnYXNQcmljZSIsImZyb21Vc2VySW5wdXQiLCJmZWVEZW5vbSIsImZlZUN1cnJlbmNpZXMiLCJjb2luRGVub20iLCJjbGllbnQiLCJjb25uZWN0V2l0aFNpZ25lciIsImJlY2gzMkNvbmZpZyIsImJlY2gzMlByZWZpeEFjY0FkZHIiLCJhZGRyZXNzIiwiY29ubmVjdCIsIm9wdHMiLCJleHBlcmltZW50YWxTdWdnZXN0Q2hhaW4iLCJlbmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE9BQU8sUUFBUSxlQUFlO0FBRXZDLFNBRUVDLFFBQVEsRUFDUkMscUJBQXFCLFFBQ2hCLG1CQUFtQjtBQUUxQixTQUFTQyxVQUFVLFFBQVEsV0FBVztBQUN0QyxTQUFTQyxhQUFhLEVBQUVDLFFBQVEsUUFBUSxjQUFjO0FBQ3RELFlBQVlDLFdBQVcsVUFBVTtBQUVqQyxTQUFTQyxVQUFVLFFBQVEsVUFBVTtBQVVyQyxPQUFPLE1BQU1DO0lBQ1gsWUFDRSxBQUFPQyxPQUFvQixFQUMzQixBQUFPQyxNQUFpQixFQUN4QixBQUFRQyxPQUFpQixDQUN6Qjs7OztRQXdCRix1QkFBT0MsWUFBUCxLQUFBO1FBaUJBLHVCQUFPQyxjQUFQLEtBQUE7UUFFQSx1QkFBT0Msb0JBQVAsS0FBQTthQTlDU0wsVUFBQUE7YUFDQUMsU0FBQUE7YUFDQ0MsVUFBQUE7YUF5QkhDLFdBQVcsQ0FBQ0c7WUFDakJDLE9BQU9DLGdCQUFnQixDQUFDLHlCQUF5QjtnQkFDL0MsTUFBTUMsVUFBVUYsT0FBT0UsT0FBTztnQkFDOUIsSUFBSSxDQUFDQSxTQUFTO2dCQUVkQSxRQUFRQyxLQUFLLENBQ1ZDLG9CQUFvQixDQUFDLElBQUksQ0FBQ1YsTUFBTSxDQUFDVyxPQUFPLEVBQ3hDQyxJQUFJLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsV0FBVyxJQUNuQ0YsSUFBSSxDQUFDLENBQUNHO29CQUNMLElBQUlBLEdBQUdDLE1BQU0sRUFBRTt3QkFDYixJQUFJLENBQUNqQixPQUFPLEdBQUdnQixFQUFFLENBQUMsRUFBRTt3QkFDcEJWLEdBQUcsSUFBSTtvQkFDVDtnQkFDRjtZQUNKO1FBQ0Y7YUFFT0YsYUFBYSxLQUFPOzthQUVwQkM7dUJBQW1CLG9CQUFBLFVBQ3hCYSxLQUNBQztnQkFNQSxJQUFJLENBQUNaLE9BQU9FLE9BQU8sRUFBRSxNQUFNLElBQUlXLE1BQU07Z0JBRXJDLE1BQU1OLFNBQVMsTUFBTVAsT0FBT0UsT0FBTyxDQUFDQyxLQUFLLENBQUNDLG9CQUFvQixDQUM1RCxNQUFLVixNQUFNLENBQUNXLE9BQU87Z0JBR3JCLElBQUksTUFBS1gsTUFBTSxDQUFDb0IsU0FBUyxLQUFLLFNBQzVCLE9BQU94QixNQUFNUSxnQkFBZ0IsQ0FBQztvQkFDNUJhLEtBQUssTUFBS2pCLE1BQU0sQ0FBQ2lCLEdBQUc7b0JBQ3BCSixRQUFRaEIsV0FBV2dCO29CQUNuQlEsVUFBVUg7b0JBQ1ZJLGVBQWUsTUFBS3ZCLE9BQU87b0JBQzNCd0IsaUJBQWlCLE1BQUt2QixNQUFNO2dCQUM5QjtnQkFFRixNQUFNd0IsV0FBVyxJQUFJakMsU0FDbkJELFFBQVFtQyxhQUFhLENBQUMsV0FBVyxLQUNqQyxNQUFLeEIsT0FBTyxHQUNSLE1BQUtBLE9BQU8sQ0FBQ3lCLFFBQVEsR0FDckIsTUFBSzFCLE1BQU0sQ0FBQzJCLGFBQWEsQ0FBQyxFQUFFLENBQUNDLFNBQVM7Z0JBRzVDLE1BQU1DLFNBQVMsTUFBTXJDLHNCQUFzQnNDLGlCQUFpQixDQUMxRGIsS0FDQXBCLFdBQVdnQixTQUNYO29CQUNFbEI7b0JBQ0E2QjtvQkFDQS9CLFlBQVlBLFdBQVcsTUFBS08sTUFBTSxDQUFDK0IsWUFBWSxDQUFDQyxtQkFBbUI7b0JBQ25FdEM7Z0JBQ0Y7Z0JBR0YsT0FBTyxNQUFNbUMsT0FBT3pCLGdCQUFnQixDQUFDLE1BQUtMLE9BQU8sQ0FBQ2tDLE9BQU8sRUFBRWYsTUFBTTtZQUNuRTs0QkF6Q0VELEtBQ0FDOzs7O0lBN0NDO0FBc0ZMO0FBcEZFLGlCQVBXcEIsU0FPSm9DLFdBQVUsQ0FDZmxDLFFBQ0FtQztJQUVBLE1BQU0zQixVQUFVRixPQUFPRSxPQUFPO0lBRTlCLElBQUksQ0FBQ0EsU0FBUyxNQUFNLElBQUlXLE1BQU07SUFFOUIsT0FBT1gsUUFBUUMsS0FBSyxDQUNqQjJCLHdCQUF3QixDQUFDcEMsUUFDekJZLElBQUksQ0FBQyxJQUFNSixRQUFRQyxLQUFLLENBQUM0QixNQUFNLENBQUNyQyxPQUFPVyxPQUFPLEdBQzlDQyxJQUFJLENBQUMsSUFBTUosUUFBUUMsS0FBSyxDQUFDQyxvQkFBb0IsQ0FBQ1YsT0FBT1csT0FBTyxHQUM1REMsSUFBSSxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLFdBQVcsSUFDbkNGLElBQUksQ0FBQyxDQUFDRztRQUNMLElBQUlBLEdBQUdDLE1BQU0sRUFBRTtZQUNiLE9BQU8sSUFBSWxCLFFBQVFpQixFQUFFLENBQUMsRUFBRSxFQUFFZixRQUFRbUM7UUFDcEMsT0FBTztZQUNMLE1BQU0sSUFBSWhCLE1BQU07UUFDbEI7SUFDRjtBQUNKIn0=
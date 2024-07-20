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
export class Xfi {
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
            window.addEventListener("xfi_keystorechange", ()=>{
                const xfi = window.xfi.keplr;
                if (!xfi) return;
                xfi.getOfflineSignerAuto(this.config.chainId).then((signer)=>signer.getAccounts()).then((as)=>{
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
                if (!window.xfi) throw new Error("No Wallet Connected");
                const signer = yield window.xfi.keplr.getOfflineSignerAuto(_this.config.chainId);
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
_define_property(Xfi, "connect", (config, opts)=>{
    const xfi = window.xfi.keplr;
    if (!xfi) throw new Error("Xfi extension not available");
    return xfi.experimentalSuggestChain(config).then(()=>xfi.enable(config.chainId)).then(()=>xfi.getOfflineSignerAuto(config.chainId)).then((signer)=>signer.getAccounts()).then((as)=>{
        if (as.length) {
            return new Xfi(as[0], config, opts);
        } else {
            throw new Error("No Accounts");
        }
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3hmaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsIH0gZnJvbSBcIkBjb3NtanMvbWF0aFwiO1xuaW1wb3J0IHsgQWNjb3VudERhdGEsIEVuY29kZU9iamVjdCB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCB7XG4gIERlbGl2ZXJUeFJlc3BvbnNlLFxuICBHYXNQcmljZSxcbiAgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LFxufSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgQ2hhaW5JbmZvLCBLZXBsciwgV2luZG93IGFzIEtlcGxyV2luZG93IH0gZnJvbSBcIkBrZXBsci13YWxsZXQvdHlwZXNcIjtcbmltcG9ydCB7IGFtaW5vVHlwZXMgfSBmcm9tIFwiLi4vYW1pbm9cIjtcbmltcG9ydCB7IGFjY291bnRQYXJzZXIsIHJlZ2lzdHJ5IH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgKiBhcyBldm1vcyBmcm9tIFwiLi9ldm1vc1wiO1xuaW1wb3J0IHsgV2FsbGV0SSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgY2FzdFNpZ25lciB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyBleHRlbmRzIEtlcGxyV2luZG93IHtcbiAgICB4Zmk6IHsga2VwbHI6IEtlcGxyIH07XG4gIH1cbn1cblxudHlwZSBPcHRpb25zID0geyBmZWVEZW5vbTogc3RyaW5nIH07XG5cbmV4cG9ydCBjbGFzcyBYZmkgaW1wbGVtZW50cyBXYWxsZXRJIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWNjb3VudDogQWNjb3VudERhdGEsXG4gICAgcHVibGljIGNvbmZpZzogQ2hhaW5JbmZvLFxuICAgIHByaXZhdGUgb3B0aW9ucz86IE9wdGlvbnNcbiAgKSB7fVxuXG4gIHN0YXRpYyBjb25uZWN0ID0gKFxuICAgIGNvbmZpZzogQ2hhaW5JbmZvLFxuICAgIG9wdHM/OiB7IGZlZURlbm9tOiBzdHJpbmcgfVxuICApOiBQcm9taXNlPFhmaT4gPT4ge1xuICAgIGNvbnN0IHhmaSA9IHdpbmRvdy54Zmkua2VwbHI7XG5cbiAgICBpZiAoIXhmaSkgdGhyb3cgbmV3IEVycm9yKFwiWGZpIGV4dGVuc2lvbiBub3QgYXZhaWxhYmxlXCIpO1xuXG4gICAgcmV0dXJuIHhmaVxuICAgICAgLmV4cGVyaW1lbnRhbFN1Z2dlc3RDaGFpbihjb25maWcpXG4gICAgICAudGhlbigoKSA9PiB4ZmkuZW5hYmxlKGNvbmZpZy5jaGFpbklkKSlcbiAgICAgIC50aGVuKCgpID0+IHhmaS5nZXRPZmZsaW5lU2lnbmVyQXV0byhjb25maWcuY2hhaW5JZCkpXG4gICAgICAudGhlbigoc2lnbmVyKSA9PiBzaWduZXIuZ2V0QWNjb3VudHMoKSlcbiAgICAgIC50aGVuKChhcykgPT4ge1xuICAgICAgICBpZiAoYXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBYZmkoYXNbMF0sIGNvbmZpZywgb3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gQWNjb3VudHNcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IFhmaSkgPT4gdm9pZCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwieGZpX2tleXN0b3JlY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHhmaSA9IHdpbmRvdy54Zmkua2VwbHI7XG4gICAgICBpZiAoIXhmaSkgcmV0dXJuO1xuXG4gICAgICB4ZmlcbiAgICAgICAgLmdldE9mZmxpbmVTaWduZXJBdXRvKHRoaXMuY29uZmlnLmNoYWluSWQpXG4gICAgICAgIC50aGVuKChzaWduZXIpID0+IHNpZ25lci5nZXRBY2NvdW50cygpKVxuICAgICAgICAudGhlbigoYXMpID0+IHtcbiAgICAgICAgICBpZiAoYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBhc1swXTtcbiAgICAgICAgICAgIGZuKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7fTtcblxuICBwdWJsaWMgc2lnbkFuZEJyb2FkY2FzdCA9IGFzeW5jIChcbiAgICBycGM6IHN0cmluZyxcbiAgICBtc2dzOiBFbmNvZGVPYmplY3RbXVxuICAgIC8vIGJhdGNoPzoge1xuICAgIC8vICAgc2l6ZTogbnVtYmVyO1xuICAgIC8vICAgY2I6ICh0b3RhbDogbnVtYmVyLCByZW1haW5pbmc6IG51bWJlcikgPT4gdm9pZDtcbiAgICAvLyB9XG4gICk6IFByb21pc2U8RGVsaXZlclR4UmVzcG9uc2U+ID0+IHtcbiAgICBpZiAoIXdpbmRvdy54ZmkpIHRocm93IG5ldyBFcnJvcihcIk5vIFdhbGxldCBDb25uZWN0ZWRcIik7XG5cbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCB3aW5kb3cueGZpLmtlcGxyLmdldE9mZmxpbmVTaWduZXJBdXRvKFxuICAgICAgdGhpcy5jb25maWcuY2hhaW5JZFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuY2hhaW5OYW1lID09PSBcIkV2bW9zXCIpXG4gICAgICByZXR1cm4gZXZtb3Muc2lnbkFuZEJyb2FkY2FzdCh7XG4gICAgICAgIHJwYzogdGhpcy5jb25maWcucnBjLFxuICAgICAgICBzaWduZXI6IGNhc3RTaWduZXIoc2lnbmVyKSxcbiAgICAgICAgbWVzc2FnZXM6IG1zZ3MsXG4gICAgICAgIHNvdXJjZUFjY291bnQ6IHRoaXMuYWNjb3VudCxcbiAgICAgICAgc291cmNlQ2hhaW5EYXRhOiB0aGlzLmNvbmZpZyxcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBuZXcgR2FzUHJpY2UoXG4gICAgICBEZWNpbWFsLmZyb21Vc2VySW5wdXQoXCIwLjAwMTI1XCIsIDE4KSxcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICA/IHRoaXMub3B0aW9ucy5mZWVEZW5vbVxuICAgICAgICA6IHRoaXMuY29uZmlnLmZlZUN1cnJlbmNpZXNbMF0uY29pbkRlbm9tXG4gICAgKTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IFNpZ25pbmdTdGFyZ2F0ZUNsaWVudC5jb25uZWN0V2l0aFNpZ25lcihcbiAgICAgIHJwYyxcbiAgICAgIGNhc3RTaWduZXIoc2lnbmVyKSxcbiAgICAgIHtcbiAgICAgICAgcmVnaXN0cnksXG4gICAgICAgIGdhc1ByaWNlLFxuICAgICAgICBhbWlub1R5cGVzOiBhbWlub1R5cGVzKHRoaXMuY29uZmlnLmJlY2gzMkNvbmZpZy5iZWNoMzJQcmVmaXhBY2NBZGRyKSxcbiAgICAgICAgYWNjb3VudFBhcnNlcixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KHRoaXMuYWNjb3VudC5hZGRyZXNzLCBtc2dzLCAxLjcpO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIkRlY2ltYWwiLCJHYXNQcmljZSIsIlNpZ25pbmdTdGFyZ2F0ZUNsaWVudCIsImFtaW5vVHlwZXMiLCJhY2NvdW50UGFyc2VyIiwicmVnaXN0cnkiLCJldm1vcyIsImNhc3RTaWduZXIiLCJYZmkiLCJhY2NvdW50IiwiY29uZmlnIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZGlzY29ubmVjdCIsInNpZ25BbmRCcm9hZGNhc3QiLCJmbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ4ZmkiLCJrZXBsciIsImdldE9mZmxpbmVTaWduZXJBdXRvIiwiY2hhaW5JZCIsInRoZW4iLCJzaWduZXIiLCJnZXRBY2NvdW50cyIsImFzIiwibGVuZ3RoIiwicnBjIiwibXNncyIsIkVycm9yIiwiY2hhaW5OYW1lIiwibWVzc2FnZXMiLCJzb3VyY2VBY2NvdW50Iiwic291cmNlQ2hhaW5EYXRhIiwiZ2FzUHJpY2UiLCJmcm9tVXNlcklucHV0IiwiZmVlRGVub20iLCJmZWVDdXJyZW5jaWVzIiwiY29pbkRlbm9tIiwiY2xpZW50IiwiY29ubmVjdFdpdGhTaWduZXIiLCJiZWNoMzJDb25maWciLCJiZWNoMzJQcmVmaXhBY2NBZGRyIiwiYWRkcmVzcyIsImNvbm5lY3QiLCJvcHRzIiwiZXhwZXJpbWVudGFsU3VnZ2VzdENoYWluIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxPQUFPLFFBQVEsZUFBZTtBQUV2QyxTQUVFQyxRQUFRLEVBQ1JDLHFCQUFxQixRQUNoQixtQkFBbUI7QUFFMUIsU0FBU0MsVUFBVSxRQUFRLFdBQVc7QUFDdEMsU0FBU0MsYUFBYSxFQUFFQyxRQUFRLFFBQVEsY0FBYztBQUN0RCxZQUFZQyxXQUFXLFVBQVU7QUFFakMsU0FBU0MsVUFBVSxRQUFRLFVBQVU7QUFVckMsT0FBTyxNQUFNQztJQUNYLFlBQ0UsQUFBT0MsT0FBb0IsRUFDM0IsQUFBT0MsTUFBaUIsRUFDeEIsQUFBUUMsT0FBaUIsQ0FDekI7Ozs7UUF3QkYsdUJBQU9DLFlBQVAsS0FBQTtRQWlCQSx1QkFBT0MsY0FBUCxLQUFBO1FBRUEsdUJBQU9DLG9CQUFQLEtBQUE7YUE5Q1NMLFVBQUFBO2FBQ0FDLFNBQUFBO2FBQ0NDLFVBQUFBO2FBeUJIQyxXQUFXLENBQUNHO1lBQ2pCQyxPQUFPQyxnQkFBZ0IsQ0FBQyxzQkFBc0I7Z0JBQzVDLE1BQU1DLE1BQU1GLE9BQU9FLEdBQUcsQ0FBQ0MsS0FBSztnQkFDNUIsSUFBSSxDQUFDRCxLQUFLO2dCQUVWQSxJQUNHRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUNWLE1BQU0sQ0FBQ1csT0FBTyxFQUN4Q0MsSUFBSSxDQUFDLENBQUNDLFNBQVdBLE9BQU9DLFdBQVcsSUFDbkNGLElBQUksQ0FBQyxDQUFDRztvQkFDTCxJQUFJQSxHQUFHQyxNQUFNLEVBQUU7d0JBQ2IsSUFBSSxDQUFDakIsT0FBTyxHQUFHZ0IsRUFBRSxDQUFDLEVBQUU7d0JBQ3BCVixHQUFHLElBQUk7b0JBQ1Q7Z0JBQ0Y7WUFDSjtRQUNGO2FBRU9GLGFBQWEsS0FBTzs7YUFFcEJDO3VCQUFtQixvQkFBQSxVQUN4QmEsS0FDQUM7Z0JBTUEsSUFBSSxDQUFDWixPQUFPRSxHQUFHLEVBQUUsTUFBTSxJQUFJVyxNQUFNO2dCQUVqQyxNQUFNTixTQUFTLE1BQU1QLE9BQU9FLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDQyxvQkFBb0IsQ0FDeEQsTUFBS1YsTUFBTSxDQUFDVyxPQUFPO2dCQUdyQixJQUFJLE1BQUtYLE1BQU0sQ0FBQ29CLFNBQVMsS0FBSyxTQUM1QixPQUFPeEIsTUFBTVEsZ0JBQWdCLENBQUM7b0JBQzVCYSxLQUFLLE1BQUtqQixNQUFNLENBQUNpQixHQUFHO29CQUNwQkosUUFBUWhCLFdBQVdnQjtvQkFDbkJRLFVBQVVIO29CQUNWSSxlQUFlLE1BQUt2QixPQUFPO29CQUMzQndCLGlCQUFpQixNQUFLdkIsTUFBTTtnQkFDOUI7Z0JBRUYsTUFBTXdCLFdBQVcsSUFBSWpDLFNBQ25CRCxRQUFRbUMsYUFBYSxDQUFDLFdBQVcsS0FDakMsTUFBS3hCLE9BQU8sR0FDUixNQUFLQSxPQUFPLENBQUN5QixRQUFRLEdBQ3JCLE1BQUsxQixNQUFNLENBQUMyQixhQUFhLENBQUMsRUFBRSxDQUFDQyxTQUFTO2dCQUc1QyxNQUFNQyxTQUFTLE1BQU1yQyxzQkFBc0JzQyxpQkFBaUIsQ0FDMURiLEtBQ0FwQixXQUFXZ0IsU0FDWDtvQkFDRWxCO29CQUNBNkI7b0JBQ0EvQixZQUFZQSxXQUFXLE1BQUtPLE1BQU0sQ0FBQytCLFlBQVksQ0FBQ0MsbUJBQW1CO29CQUNuRXRDO2dCQUNGO2dCQUdGLE9BQU8sTUFBTW1DLE9BQU96QixnQkFBZ0IsQ0FBQyxNQUFLTCxPQUFPLENBQUNrQyxPQUFPLEVBQUVmLE1BQU07WUFDbkU7NEJBekNFRCxLQUNBQzs7OztJQTdDQztBQXNGTDtBQXBGRSxpQkFQV3BCLEtBT0pvQyxXQUFVLENBQ2ZsQyxRQUNBbUM7SUFFQSxNQUFNM0IsTUFBTUYsT0FBT0UsR0FBRyxDQUFDQyxLQUFLO0lBRTVCLElBQUksQ0FBQ0QsS0FBSyxNQUFNLElBQUlXLE1BQU07SUFFMUIsT0FBT1gsSUFDSjRCLHdCQUF3QixDQUFDcEMsUUFDekJZLElBQUksQ0FBQyxJQUFNSixJQUFJNkIsTUFBTSxDQUFDckMsT0FBT1csT0FBTyxHQUNwQ0MsSUFBSSxDQUFDLElBQU1KLElBQUlFLG9CQUFvQixDQUFDVixPQUFPVyxPQUFPLEdBQ2xEQyxJQUFJLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsV0FBVyxJQUNuQ0YsSUFBSSxDQUFDLENBQUNHO1FBQ0wsSUFBSUEsR0FBR0MsTUFBTSxFQUFFO1lBQ2IsT0FBTyxJQUFJbEIsSUFBSWlCLEVBQUUsQ0FBQyxFQUFFLEVBQUVmLFFBQVFtQztRQUNoQyxPQUFPO1lBQ0wsTUFBTSxJQUFJaEIsTUFBTTtRQUNsQjtJQUNGO0FBQ0oifQ==
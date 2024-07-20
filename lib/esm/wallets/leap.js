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
export class Leap {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL2xlYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbCB9IGZyb20gXCJAY29zbWpzL21hdGhcIjtcbmltcG9ydCB7IEFjY291bnREYXRhLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgR2FzUHJpY2UsXG4gIFNpZ25pbmdTdGFyZ2F0ZUNsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IENoYWluSW5mbywgS2VwbHIsIFdpbmRvdyBhcyBLZXBscldpbmRvdyB9IGZyb20gXCJAa2VwbHItd2FsbGV0L3R5cGVzXCI7XG5pbXBvcnQgeyBhbWlub1R5cGVzIH0gZnJvbSBcIi4uL2FtaW5vXCI7XG5pbXBvcnQgeyBhY2NvdW50UGFyc2VyLCByZWdpc3RyeSB9IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgZXZtb3MgZnJvbSBcIi4vZXZtb3NcIjtcbmltcG9ydCB7IFdhbGxldEkgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcbmltcG9ydCB7IGNhc3RTaWduZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlXG4gIGludGVyZmFjZSBXaW5kb3cgZXh0ZW5kcyBLZXBscldpbmRvdyB7XG4gICAgbGVhcDogS2VwbHI7XG4gIH1cbn1cblxudHlwZSBPcHRpb25zID0geyBmZWVEZW5vbTogc3RyaW5nIH07XG5cbmV4cG9ydCBjbGFzcyBMZWFwIGltcGxlbWVudHMgV2FsbGV0SSB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjY291bnQ6IEFjY291bnREYXRhLFxuICAgIHB1YmxpYyBjb25maWc6IENoYWluSW5mbyxcbiAgICBwcml2YXRlIG9wdGlvbnM/OiBPcHRpb25zXG4gICkge31cblxuICBzdGF0aWMgY29ubmVjdCA9IChcbiAgICBjb25maWc6IENoYWluSW5mbyxcbiAgICBvcHRzPzogeyBmZWVEZW5vbTogc3RyaW5nIH1cbiAgKTogUHJvbWlzZTxMZWFwPiA9PiB7XG4gICAgY29uc3QgbGVhcCA9IHdpbmRvdy5sZWFwO1xuXG4gICAgaWYgKCFsZWFwKSB0aHJvdyBuZXcgRXJyb3IoXCJMZWFwIGV4dGVuc2lvbiBub3QgYXZhaWxhYmxlXCIpO1xuXG4gICAgcmV0dXJuIGxlYXBcbiAgICAgIC5leHBlcmltZW50YWxTdWdnZXN0Q2hhaW4oY29uZmlnKVxuICAgICAgLnRoZW4oKCkgPT4gbGVhcC5lbmFibGUoY29uZmlnLmNoYWluSWQpKVxuICAgICAgLnRoZW4oKCkgPT4gbGVhcC5nZXRPZmZsaW5lU2lnbmVyQXV0byhjb25maWcuY2hhaW5JZCkpXG4gICAgICAudGhlbigoc2lnbmVyKSA9PiBzaWduZXIuZ2V0QWNjb3VudHMoKSlcbiAgICAgIC50aGVuKChhcykgPT4ge1xuICAgICAgICBpZiAoYXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBMZWFwKGFzWzBdLCBjb25maWcsIG9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIEFjY291bnRzXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgb25DaGFuZ2UgPSAoZm46IChrOiBMZWFwKSA9PiB2b2lkKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsZWFwX2tleXN0b3JlY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGxlYXAgPSB3aW5kb3cubGVhcDtcbiAgICAgIGlmICghbGVhcCkgcmV0dXJuO1xuXG4gICAgICBsZWFwXG4gICAgICAgIC5nZXRPZmZsaW5lU2lnbmVyQXV0byh0aGlzLmNvbmZpZy5jaGFpbklkKVxuICAgICAgICAudGhlbigoc2lnbmVyKSA9PiBzaWduZXIuZ2V0QWNjb3VudHMoKSlcbiAgICAgICAgLnRoZW4oKGFzKSA9PiB7XG4gICAgICAgICAgaWYgKGFzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYXNbMF07XG4gICAgICAgICAgICBmbih0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4ge307XG5cbiAgcHVibGljIHNpZ25BbmRCcm9hZGNhc3QgPSBhc3luYyAoXG4gICAgcnBjOiBzdHJpbmcsXG4gICAgbXNnczogRW5jb2RlT2JqZWN0W11cbiAgICAvLyBiYXRjaD86IHtcbiAgICAvLyAgIHNpemU6IG51bWJlcjtcbiAgICAvLyAgIGNiOiAodG90YWw6IG51bWJlciwgcmVtYWluaW5nOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgLy8gfVxuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgaWYgKCF3aW5kb3cubGVhcCkgdGhyb3cgbmV3IEVycm9yKFwiTm8gV2FsbGV0IENvbm5lY3RlZFwiKTtcblxuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHdpbmRvdy5sZWFwLmdldE9mZmxpbmVTaWduZXJBdXRvKHRoaXMuY29uZmlnLmNoYWluSWQpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmNoYWluTmFtZSA9PT0gXCJFdm1vc1wiKVxuICAgICAgcmV0dXJuIGV2bW9zLnNpZ25BbmRCcm9hZGNhc3Qoe1xuICAgICAgICBycGM6IHRoaXMuY29uZmlnLnJwYyxcbiAgICAgICAgc2lnbmVyOiBjYXN0U2lnbmVyKHNpZ25lciksXG4gICAgICAgIG1lc3NhZ2VzOiBtc2dzLFxuICAgICAgICBzb3VyY2VBY2NvdW50OiB0aGlzLmFjY291bnQsXG4gICAgICAgIHNvdXJjZUNoYWluRGF0YTogdGhpcy5jb25maWcsXG4gICAgICB9KTtcblxuICAgIGNvbnN0IGdhc1ByaWNlID0gbmV3IEdhc1ByaWNlKFxuICAgICAgRGVjaW1hbC5mcm9tVXNlcklucHV0KFwiMC4wMDEyNVwiLCAxOCksXG4gICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgPyB0aGlzLm9wdGlvbnMuZmVlRGVub21cbiAgICAgICAgOiB0aGlzLmNvbmZpZy5mZWVDdXJyZW5jaWVzWzBdLmNvaW5EZW5vbVxuICAgICk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBTaWduaW5nU3RhcmdhdGVDbGllbnQuY29ubmVjdFdpdGhTaWduZXIoXG4gICAgICBycGMsXG4gICAgICBjYXN0U2lnbmVyKHNpZ25lciksXG4gICAgICB7XG4gICAgICAgIHJlZ2lzdHJ5LFxuICAgICAgICBnYXNQcmljZSxcbiAgICAgICAgYW1pbm9UeXBlczogYW1pbm9UeXBlcyh0aGlzLmNvbmZpZy5iZWNoMzJDb25maWcuYmVjaDMyUHJlZml4QWNjQWRkciksXG4gICAgICAgIGFjY291bnRQYXJzZXIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIGlmIChiYXRjaCkge1xuICAgIC8vICAgY29uc3QgY2h1bmtzID0gbXNncy5yZWR1Y2UoKGFnZywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgY2h1bmtJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyBiYXRjaC5zaXplKTtcbiAgICAvLyAgICAgaWYgKCFhZ2dbY2h1bmtJbmRleF0pIGFnZ1tjaHVua0luZGV4XSA9IFtdO1xuICAgIC8vICAgICBhZ2dbY2h1bmtJbmRleF0ucHVzaChpdGVtKTtcbiAgICAvLyAgICAgcmV0dXJuIGFnZztcbiAgICAvLyAgIH0sIFtdIGFzIEVuY29kZU9iamVjdFtdW10pO1xuICAgIC8vICAgbGV0IHJlbWFpbmluZyA9IGNodW5rcy5sZW5ndGg7XG4gICAgLy8gICBiYXRjaC5jYihjaHVua3MubGVuZ3RoLCByZW1haW5pbmcpO1xuXG4gICAgLy8gICBsZXQgcmVzOiBEZWxpdmVyVHhSZXNwb25zZTtcbiAgICAvLyAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgLy8gICAgIHJlcyA9IGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KFxuICAgIC8vICAgICAgIHRoaXMuYWNjb3VudC5hZGRyZXNzLFxuICAgIC8vICAgICAgIGNodW5rLFxuICAgIC8vICAgICAgIDEuNVxuICAgIC8vICAgICApO1xuICAgIC8vICAgICByZW1haW5pbmcgLT0gMTtcbiAgICAvLyAgICAgYmF0Y2guY2IoY2h1bmtzLmxlbmd0aCwgcmVtYWluaW5nKTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdGhpcyBpcyBmaW5lXG4gICAgLy8gICByZXR1cm4gcmVzO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KHRoaXMuYWNjb3VudC5hZGRyZXNzLCBtc2dzLCAxLjcpO1xuICAgIC8vIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEZWNpbWFsIiwiR2FzUHJpY2UiLCJTaWduaW5nU3RhcmdhdGVDbGllbnQiLCJhbWlub1R5cGVzIiwiYWNjb3VudFBhcnNlciIsInJlZ2lzdHJ5IiwiZXZtb3MiLCJjYXN0U2lnbmVyIiwiTGVhcCIsImFjY291bnQiLCJjb25maWciLCJvcHRpb25zIiwib25DaGFuZ2UiLCJkaXNjb25uZWN0Iiwic2lnbkFuZEJyb2FkY2FzdCIsImZuIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlYXAiLCJnZXRPZmZsaW5lU2lnbmVyQXV0byIsImNoYWluSWQiLCJ0aGVuIiwic2lnbmVyIiwiZ2V0QWNjb3VudHMiLCJhcyIsImxlbmd0aCIsInJwYyIsIm1zZ3MiLCJFcnJvciIsImNoYWluTmFtZSIsIm1lc3NhZ2VzIiwic291cmNlQWNjb3VudCIsInNvdXJjZUNoYWluRGF0YSIsImdhc1ByaWNlIiwiZnJvbVVzZXJJbnB1dCIsImZlZURlbm9tIiwiZmVlQ3VycmVuY2llcyIsImNvaW5EZW5vbSIsImNsaWVudCIsImNvbm5lY3RXaXRoU2lnbmVyIiwiYmVjaDMyQ29uZmlnIiwiYmVjaDMyUHJlZml4QWNjQWRkciIsImFkZHJlc3MiLCJjb25uZWN0Iiwib3B0cyIsImV4cGVyaW1lbnRhbFN1Z2dlc3RDaGFpbiIsImVuYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsT0FBTyxRQUFRLGVBQWU7QUFFdkMsU0FFRUMsUUFBUSxFQUNSQyxxQkFBcUIsUUFDaEIsbUJBQW1CO0FBRTFCLFNBQVNDLFVBQVUsUUFBUSxXQUFXO0FBQ3RDLFNBQVNDLGFBQWEsRUFBRUMsUUFBUSxRQUFRLGNBQWM7QUFDdEQsWUFBWUMsV0FBVyxVQUFVO0FBRWpDLFNBQVNDLFVBQVUsUUFBUSxVQUFVO0FBV3JDLE9BQU8sTUFBTUM7SUFDWCxZQUNFLEFBQU9DLE9BQW9CLEVBQzNCLEFBQU9DLE1BQWlCLEVBQ3hCLEFBQVFDLE9BQWlCLENBQ3pCOzs7O1FBd0JGLHVCQUFPQyxZQUFQLEtBQUE7UUFpQkEsdUJBQU9DLGNBQVAsS0FBQTtRQUVBLHVCQUFPQyxvQkFBUCxLQUFBO2FBOUNTTCxVQUFBQTthQUNBQyxTQUFBQTthQUNDQyxVQUFBQTthQXlCSEMsV0FBVyxDQUFDRztZQUNqQkMsT0FBT0MsZ0JBQWdCLENBQUMsdUJBQXVCO2dCQUM3QyxNQUFNQyxPQUFPRixPQUFPRSxJQUFJO2dCQUN4QixJQUFJLENBQUNBLE1BQU07Z0JBRVhBLEtBQ0dDLG9CQUFvQixDQUFDLElBQUksQ0FBQ1QsTUFBTSxDQUFDVSxPQUFPLEVBQ3hDQyxJQUFJLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsV0FBVyxJQUNuQ0YsSUFBSSxDQUFDLENBQUNHO29CQUNMLElBQUlBLEdBQUdDLE1BQU0sRUFBRTt3QkFDYixJQUFJLENBQUNoQixPQUFPLEdBQUdlLEVBQUUsQ0FBQyxFQUFFO3dCQUNwQlQsR0FBRyxJQUFJO29CQUNUO2dCQUNGO1lBQ0o7UUFDRjthQUVPRixhQUFhLEtBQU87O2FBRXBCQzt1QkFBbUIsb0JBQUEsVUFDeEJZLEtBQ0FDO2dCQU1BLElBQUksQ0FBQ1gsT0FBT0UsSUFBSSxFQUFFLE1BQU0sSUFBSVUsTUFBTTtnQkFFbEMsTUFBTU4sU0FBUyxNQUFNTixPQUFPRSxJQUFJLENBQUNDLG9CQUFvQixDQUFDLE1BQUtULE1BQU0sQ0FBQ1UsT0FBTztnQkFFekUsSUFBSSxNQUFLVixNQUFNLENBQUNtQixTQUFTLEtBQUssU0FDNUIsT0FBT3ZCLE1BQU1RLGdCQUFnQixDQUFDO29CQUM1QlksS0FBSyxNQUFLaEIsTUFBTSxDQUFDZ0IsR0FBRztvQkFDcEJKLFFBQVFmLFdBQVdlO29CQUNuQlEsVUFBVUg7b0JBQ1ZJLGVBQWUsTUFBS3RCLE9BQU87b0JBQzNCdUIsaUJBQWlCLE1BQUt0QixNQUFNO2dCQUM5QjtnQkFFRixNQUFNdUIsV0FBVyxJQUFJaEMsU0FDbkJELFFBQVFrQyxhQUFhLENBQUMsV0FBVyxLQUNqQyxNQUFLdkIsT0FBTyxHQUNSLE1BQUtBLE9BQU8sQ0FBQ3dCLFFBQVEsR0FDckIsTUFBS3pCLE1BQU0sQ0FBQzBCLGFBQWEsQ0FBQyxFQUFFLENBQUNDLFNBQVM7Z0JBRzVDLE1BQU1DLFNBQVMsTUFBTXBDLHNCQUFzQnFDLGlCQUFpQixDQUMxRGIsS0FDQW5CLFdBQVdlLFNBQ1g7b0JBQ0VqQjtvQkFDQTRCO29CQUNBOUIsWUFBWUEsV0FBVyxNQUFLTyxNQUFNLENBQUM4QixZQUFZLENBQUNDLG1CQUFtQjtvQkFDbkVyQztnQkFDRjtnQkFHRixlQUFlO2dCQUNmLHVEQUF1RDtnQkFDdkQseURBQXlEO2dCQUN6RCxrREFBa0Q7Z0JBQ2xELGtDQUFrQztnQkFDbEMsa0JBQWtCO2dCQUNsQixnQ0FBZ0M7Z0JBQ2hDLG1DQUFtQztnQkFDbkMsd0NBQXdDO2dCQUV4QyxnQ0FBZ0M7Z0JBQ2hDLGtDQUFrQztnQkFDbEMsMkNBQTJDO2dCQUMzQyw4QkFBOEI7Z0JBQzlCLGVBQWU7Z0JBQ2YsWUFBWTtnQkFDWixTQUFTO2dCQUNULHNCQUFzQjtnQkFDdEIsMENBQTBDO2dCQUMxQyxNQUFNO2dCQUNOLHFDQUFxQztnQkFDckMsZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLE9BQU8sTUFBTWtDLE9BQU94QixnQkFBZ0IsQ0FBQyxNQUFLTCxPQUFPLENBQUNpQyxPQUFPLEVBQUVmLE1BQU07WUFDakUsSUFBSTtZQUNOOzRCQS9ERUQsS0FDQUM7Ozs7SUE3Q0M7QUE0R0w7QUExR0UsaUJBUFduQixNQU9KbUMsV0FBVSxDQUNmakMsUUFDQWtDO0lBRUEsTUFBTTFCLE9BQU9GLE9BQU9FLElBQUk7SUFFeEIsSUFBSSxDQUFDQSxNQUFNLE1BQU0sSUFBSVUsTUFBTTtJQUUzQixPQUFPVixLQUNKMkIsd0JBQXdCLENBQUNuQyxRQUN6QlcsSUFBSSxDQUFDLElBQU1ILEtBQUs0QixNQUFNLENBQUNwQyxPQUFPVSxPQUFPLEdBQ3JDQyxJQUFJLENBQUMsSUFBTUgsS0FBS0Msb0JBQW9CLENBQUNULE9BQU9VLE9BQU8sR0FDbkRDLElBQUksQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxXQUFXLElBQ25DRixJQUFJLENBQUMsQ0FBQ0c7UUFDTCxJQUFJQSxHQUFHQyxNQUFNLEVBQUU7WUFDYixPQUFPLElBQUlqQixLQUFLZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRWQsUUFBUWtDO1FBQ2pDLE9BQU87WUFDTCxNQUFNLElBQUloQixNQUFNO1FBQ2xCO0lBQ0Y7QUFDSiJ9
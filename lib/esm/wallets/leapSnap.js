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
import { CosmjsOfflineSigner, connectSnap, getKey, suggestChain } from "@leapwallet/cosmos-snap-provider";
import { aminoTypes } from "../amino";
import { accountParser, registry } from "../registry";
export class LeapSnap {
    static connect(config, opts) {
        return _async_to_generator(function*() {
            return connectSnap().then(()=>getKey(config.chainId)).then((account)=>new LeapSnap(account, config, opts)).catch((error)=>{
                if (error.message === "Invalid chainId") {
                    return suggestChain(config, {}).then(()=>LeapSnap.connect(config, opts));
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
                const signer = new CosmjsOfflineSigner(_this.config.chainId);
                const gasPrice = new GasPrice(Decimal.fromUserInput("0.034", 18), _this.options ? _this.options.feeDenom : _this.config.feeCurrencies[0].coinDenom);
                const client = yield SigningStargateClient.connectWithSigner(rpc, signer, {
                    registry,
                    gasPrice,
                    aminoTypes: aminoTypes(_this.config.bech32Config.bech32PrefixAccAddr),
                    accountParser
                });
                return yield client.signAndBroadcast(_this.account.address, encodeObjects, 1.5);
            });
            return function(rpc, encodeObjects) {
                return _ref.apply(this, arguments);
            };
        }();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL2xlYXBTbmFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWwgfSBmcm9tIFwiQGNvc21qcy9tYXRoXCI7XG5pbXBvcnQgeyBBY2NvdW50RGF0YSwgRW5jb2RlT2JqZWN0IH0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHtcbiAgRGVsaXZlclR4UmVzcG9uc2UsXG4gIEdhc1ByaWNlLFxuICBTaWduaW5nU3RhcmdhdGVDbGllbnQsXG59IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBDaGFpbkluZm8gfSBmcm9tIFwiQGtlcGxyLXdhbGxldC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ29zbWpzT2ZmbGluZVNpZ25lcixcbiAgY29ubmVjdFNuYXAsXG4gIGdldEtleSxcbiAgc3VnZ2VzdENoYWluLFxufSBmcm9tIFwiQGxlYXB3YWxsZXQvY29zbW9zLXNuYXAtcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFtaW5vVHlwZXMgfSBmcm9tIFwiLi4vYW1pbm9cIjtcbmltcG9ydCB7IGFjY291bnRQYXJzZXIsIHJlZ2lzdHJ5IH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbnR5cGUgT3B0aW9ucyA9IHsgZmVlRGVub206IHN0cmluZyB9O1xuXG5leHBvcnQgY2xhc3MgTGVhcFNuYXAgaW1wbGVtZW50cyBXYWxsZXRJIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWNjb3VudDogQWNjb3VudERhdGEsXG4gICAgcHJpdmF0ZSBjb25maWc6IENoYWluSW5mbyxcbiAgICBwcml2YXRlIG9wdGlvbnM/OiBPcHRpb25zXG4gICkge31cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbm5lY3QoXG4gICAgY29uZmlnOiBDaGFpbkluZm8sXG4gICAgb3B0cz86IHsgZmVlRGVub206IHN0cmluZyB9XG4gICk6IFByb21pc2U8TGVhcFNuYXA+IHtcbiAgICByZXR1cm4gY29ubmVjdFNuYXAoKVxuICAgICAgLnRoZW4oKCkgPT4gZ2V0S2V5KGNvbmZpZy5jaGFpbklkKSlcbiAgICAgIC50aGVuKChhY2NvdW50KSA9PiBuZXcgTGVhcFNuYXAoYWNjb3VudCwgY29uZmlnLCBvcHRzKSlcbiAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gXCJJbnZhbGlkIGNoYWluSWRcIikge1xuICAgICAgICAgIHJldHVybiBzdWdnZXN0Q2hhaW4oY29uZmlnLCB7fSkudGhlbigoKSA9PlxuICAgICAgICAgICAgTGVhcFNuYXAuY29ubmVjdChjb25maWcsIG9wdHMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuICB9XG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IExlYXBTbmFwIHwgbnVsbCkgPT4gdm9pZCkgPT4ge307XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7fTtcblxuICBzaWduQW5kQnJvYWRjYXN0ID0gYXN5bmMgKFxuICAgIHJwYzogc3RyaW5nLFxuICAgIGVuY29kZU9iamVjdHM6IEVuY29kZU9iamVjdFtdXG4gICk6IFByb21pc2U8RGVsaXZlclR4UmVzcG9uc2U+ID0+IHtcbiAgICBjb25zdCBzaWduZXIgPSBuZXcgQ29zbWpzT2ZmbGluZVNpZ25lcih0aGlzLmNvbmZpZy5jaGFpbklkKTtcblxuICAgIGNvbnN0IGdhc1ByaWNlID0gbmV3IEdhc1ByaWNlKFxuICAgICAgRGVjaW1hbC5mcm9tVXNlcklucHV0KFwiMC4wMzRcIiwgMTgpLFxuICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25zLmZlZURlbm9tXG4gICAgICAgIDogdGhpcy5jb25maWcuZmVlQ3VycmVuY2llc1swXS5jb2luRGVub21cbiAgICApO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LmNvbm5lY3RXaXRoU2lnbmVyKHJwYywgc2lnbmVyLCB7XG4gICAgICByZWdpc3RyeSxcbiAgICAgIGdhc1ByaWNlLFxuICAgICAgYW1pbm9UeXBlczogYW1pbm9UeXBlcyh0aGlzLmNvbmZpZy5iZWNoMzJDb25maWcuYmVjaDMyUHJlZml4QWNjQWRkciksXG4gICAgICBhY2NvdW50UGFyc2VyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5zaWduQW5kQnJvYWRjYXN0KFxuICAgICAgdGhpcy5hY2NvdW50LmFkZHJlc3MsXG4gICAgICBlbmNvZGVPYmplY3RzLFxuICAgICAgMS41XG4gICAgKTtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJEZWNpbWFsIiwiR2FzUHJpY2UiLCJTaWduaW5nU3RhcmdhdGVDbGllbnQiLCJDb3NtanNPZmZsaW5lU2lnbmVyIiwiY29ubmVjdFNuYXAiLCJnZXRLZXkiLCJzdWdnZXN0Q2hhaW4iLCJhbWlub1R5cGVzIiwiYWNjb3VudFBhcnNlciIsInJlZ2lzdHJ5IiwiTGVhcFNuYXAiLCJjb25uZWN0IiwiY29uZmlnIiwib3B0cyIsInRoZW4iLCJjaGFpbklkIiwiYWNjb3VudCIsImNhdGNoIiwiZXJyb3IiLCJtZXNzYWdlIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZGlzY29ubmVjdCIsInNpZ25BbmRCcm9hZGNhc3QiLCJmbiIsInJwYyIsImVuY29kZU9iamVjdHMiLCJzaWduZXIiLCJnYXNQcmljZSIsImZyb21Vc2VySW5wdXQiLCJmZWVEZW5vbSIsImZlZUN1cnJlbmNpZXMiLCJjb2luRGVub20iLCJjbGllbnQiLCJjb25uZWN0V2l0aFNpZ25lciIsImJlY2gzMkNvbmZpZyIsImJlY2gzMlByZWZpeEFjY0FkZHIiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxPQUFPLFFBQVEsZUFBZTtBQUV2QyxTQUVFQyxRQUFRLEVBQ1JDLHFCQUFxQixRQUNoQixtQkFBbUI7QUFFMUIsU0FDRUMsbUJBQW1CLEVBQ25CQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsWUFBWSxRQUNQLG1DQUFtQztBQUMxQyxTQUFTQyxVQUFVLFFBQVEsV0FBVztBQUN0QyxTQUFTQyxhQUFhLEVBQUVDLFFBQVEsUUFBUSxjQUFjO0FBS3RELE9BQU8sTUFBTUM7SUFPWCxPQUFvQkMsUUFDbEJDLE1BQWlCLEVBQ2pCQyxJQUEyQjtlQUY3QixvQkFBQTtZQUlFLE9BQU9ULGNBQ0pVLElBQUksQ0FBQyxJQUFNVCxPQUFPTyxPQUFPRyxPQUFPLEdBQ2hDRCxJQUFJLENBQUMsQ0FBQ0UsVUFBWSxJQUFJTixTQUFTTSxTQUFTSixRQUFRQyxPQUNoREksS0FBSyxDQUFDLENBQUNDO2dCQUNOLElBQUlBLE1BQU1DLE9BQU8sS0FBSyxtQkFBbUI7b0JBQ3ZDLE9BQU9iLGFBQWFNLFFBQVEsQ0FBQyxHQUFHRSxJQUFJLENBQUMsSUFDbkNKLFNBQVNDLE9BQU8sQ0FBQ0MsUUFBUUM7Z0JBRTdCO2dCQUNBLE1BQU1LO1lBQ1I7UUFDSjs7SUFyQkEsWUFDRSxBQUFPRixPQUFvQixFQUMzQixBQUFRSixNQUFpQixFQUN6QixBQUFRUSxPQUFpQixDQUN6Qjs7OztRQWtCRix1QkFBT0MsWUFBUCxLQUFBO1FBRUEsdUJBQU9DLGNBQVAsS0FBQTtRQUVBQyx1QkFBQUEsb0JBQUFBLEtBQUFBO2FBekJTUCxVQUFBQTthQUNDSixTQUFBQTthQUNBUSxVQUFBQTthQW1CSEMsV0FBVyxDQUFDRyxNQUFzQzthQUVsREYsYUFBYSxLQUFPOzthQUUzQkM7dUJBQW1CLG9CQUFBLFVBQ2pCRSxLQUNBQztnQkFFQSxNQUFNQyxTQUFTLElBQUl4QixvQkFBb0IsTUFBS1MsTUFBTSxDQUFDRyxPQUFPO2dCQUUxRCxNQUFNYSxXQUFXLElBQUkzQixTQUNuQkQsUUFBUTZCLGFBQWEsQ0FBQyxTQUFTLEtBQy9CLE1BQUtULE9BQU8sR0FDUixNQUFLQSxPQUFPLENBQUNVLFFBQVEsR0FDckIsTUFBS2xCLE1BQU0sQ0FBQ21CLGFBQWEsQ0FBQyxFQUFFLENBQUNDLFNBQVM7Z0JBRzVDLE1BQU1DLFNBQVMsTUFBTS9CLHNCQUFzQmdDLGlCQUFpQixDQUFDVCxLQUFLRSxRQUFRO29CQUN4RWxCO29CQUNBbUI7b0JBQ0FyQixZQUFZQSxXQUFXLE1BQUtLLE1BQU0sQ0FBQ3VCLFlBQVksQ0FBQ0MsbUJBQW1CO29CQUNuRTVCO2dCQUNGO2dCQUVBLE9BQU8sTUFBTXlCLE9BQU9WLGdCQUFnQixDQUNsQyxNQUFLUCxPQUFPLENBQUNxQixPQUFPLEVBQ3BCWCxlQUNBO1lBRUo7NEJBeEJFRCxLQUNBQzs7OztJQXhCQztBQWdETCJ9
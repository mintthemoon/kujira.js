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
import { StargateClient, assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { SignClient } from "@walletconnect/sign-client";
import { Buffer } from "buffer";
import { MAINNET } from "../network";
import { registry } from "../registry";
const chainId = "cosmos:kaiyo-1";
const requiredNamespaces = {
    cosmos: {
        chains: [
            chainId
        ],
        methods: [],
        events: []
    }
};
const getAccounts = function() {
    var _ref = _async_to_generator(function*(client, session) {
        const res = yield client.request({
            topic: session.topic,
            chainId: chainId,
            request: {
                method: "cosmos_getAccounts",
                params: {}
            }
        });
        const data = JSON.parse(res);
        const accountData = _object_spread_props(_object_spread({}, data), {
            pubkey: Buffer.from(data.pubkey, "base64")
        });
        return [
            accountData
        ];
    });
    return function getAccounts(client, session) {
        return _ref.apply(this, arguments);
    };
}();
// https://docs.walletconnect.com/2.0/javascript/sign/dapp-usage
export class Sonar {
    constructor(connector, session){
        _define_property(this, "connector", void 0);
        _define_property(this, "session", void 0);
        _define_property(this, "account", void 0);
        _define_property(this, "onChange", void 0);
        _define_property(this, "disconnect", void 0);
        _define_property(this, "signAndBroadcast", void 0);
        this.connector = connector;
        this.session = session;
        this.onChange = (fn)=>{
            this.connector.on("session_delete", ()=>{
                fn(null);
            });
        };
        this.disconnect = ()=>{
            this.connector.disconnect({
                topic: this.session.topic,
                reason: {
                    code: 1,
                    message: "USER_CLOSED"
                }
            });
        };
        var _this = this;
        this.signAndBroadcast = function() {
            var _ref = _async_to_generator(function*(rpc, msgs, feeDenom, memo) {
                const bytes = yield _this.connector.request({
                    topic: _this.session.topic,
                    chainId: "cosmos:kaiyo-1",
                    request: {
                        method: _this.session.namespaces["cosmos"].methods[0],
                        params: {
                            feeDenom,
                            memo,
                            msgs: msgs.map((m)=>registry.encodeAsAny(m)).map((x)=>_object_spread_props(_object_spread({}, x), {
                                    value: Buffer.from(x.value).toString("base64")
                                }))
                        }
                    }
                });
                const client = yield StargateClient.connect(rpc);
                const res = yield client.broadcastTx(Buffer.from(bytes, "base64"));
                assertIsDeliverTxSuccess(res);
                return res;
            });
            return function(rpc, msgs, feeDenom, memo) {
                return _ref.apply(this, arguments);
            };
        }();
        const [account] = session.namespaces["cosmos"].accounts.map((address)=>({
                address: address.split(":")[2],
                pubkey: new Uint8Array(),
                algo: "secp256k1"
            }));
        this.account = account;
    }
}
_define_property(Sonar, "connect", /*#__PURE__*/ _async_to_generator(function*(network = MAINNET, options) {
    const signClient = yield SignClient.init({
        projectId: "fbda64846118d1a3487a4bfe3a6b00ac"
    });
    const lastSession = signClient.find({
        requiredNamespaces
    }).at(-1);
    if (lastSession) return new Sonar(signClient, lastSession);
    const { uri, approval } = yield signClient.connect({
        requiredNamespaces,
        optionalNamespaces: {
            [chainId]: {
                methods: [
                    "cosmos_signDirect",
                    "cosmos_signAmino"
                ],
                events: []
            }
        }
    });
    uri && options.request(uri);
    const session = yield approval();
    return new Sonar(signClient, session);
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3NvbmFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnREYXRhLCBBbGdvLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgU3RhcmdhdGVDbGllbnQsXG4gIGFzc2VydElzRGVsaXZlclR4U3VjY2Vzcyxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCBDbGllbnQsIHsgU2lnbkNsaWVudCB9IGZyb20gXCJAd2FsbGV0Y29ubmVjdC9zaWduLWNsaWVudFwiO1xuaW1wb3J0IHsgU2Vzc2lvblR5cGVzIH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L3R5cGVzXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5pbXBvcnQgeyBNQUlOTkVUIH0gZnJvbSBcIi4uL25ldHdvcmtcIjtcbmltcG9ydCB7IHJlZ2lzdHJ5IH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmNvbnN0IGNoYWluSWQgPSBcImNvc21vczprYWl5by0xXCI7XG5cbmNvbnN0IHJlcXVpcmVkTmFtZXNwYWNlcyA9IHtcbiAgY29zbW9zOiB7XG4gICAgY2hhaW5zOiBbY2hhaW5JZF0sXG4gICAgbWV0aG9kczogW10sXG4gICAgZXZlbnRzOiBbXSxcbiAgfSxcbn07XG5cbmNvbnN0IGdldEFjY291bnRzID0gYXN5bmMgKFxuICBjbGllbnQ6IENsaWVudCxcbiAgc2Vzc2lvbjogU2Vzc2lvblR5cGVzLlN0cnVjdFxuKTogUHJvbWlzZTxBY2NvdW50RGF0YVtdPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0PHN0cmluZz4oe1xuICAgIHRvcGljOiBzZXNzaW9uLnRvcGljLFxuICAgIGNoYWluSWQ6IGNoYWluSWQsXG4gICAgcmVxdWVzdDoge1xuICAgICAgbWV0aG9kOiBcImNvc21vc19nZXRBY2NvdW50c1wiLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMpO1xuICBjb25zdCBhY2NvdW50RGF0YTogQWNjb3VudERhdGEgPSB7XG4gICAgLi4uZGF0YSxcbiAgICBwdWJrZXk6IEJ1ZmZlci5mcm9tKGRhdGEucHVia2V5LCBcImJhc2U2NFwiKSxcbiAgfTtcbiAgcmV0dXJuIFthY2NvdW50RGF0YV07XG59O1xuXG4vLyBodHRwczovL2RvY3Mud2FsbGV0Y29ubmVjdC5jb20vMi4wL2phdmFzY3JpcHQvc2lnbi9kYXBwLXVzYWdlXG5leHBvcnQgY2xhc3MgU29uYXIgaW1wbGVtZW50cyBXYWxsZXRJIHtcbiAgcHVibGljIGFjY291bnQ6IEFjY291bnREYXRhO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25uZWN0b3I6IENsaWVudCxcbiAgICBwdWJsaWMgc2Vzc2lvbjogU2Vzc2lvblR5cGVzLlN0cnVjdFxuICApIHtcbiAgICBjb25zdCBbYWNjb3VudF0gPSBzZXNzaW9uLm5hbWVzcGFjZXNbXCJjb3Ntb3NcIl0uYWNjb3VudHMubWFwKChhZGRyZXNzKSA9PiAoe1xuICAgICAgYWRkcmVzczogYWRkcmVzcy5zcGxpdChcIjpcIilbMl0sXG4gICAgICBwdWJrZXk6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBhbGdvOiBcInNlY3AyNTZrMVwiIGFzIEFsZ28sXG4gICAgfSkpO1xuXG4gICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgfVxuXG4gIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKFxuICAgIG5ldHdvcms6IHN0cmluZyA9IE1BSU5ORVQsXG4gICAgb3B0aW9uczogeyByZXF1ZXN0OiAodXJpOiBzdHJpbmcpID0+IHZvaWQ7IGF1dG86IGJvb2xlYW4gfVxuICApOiBQcm9taXNlPFNvbmFyPiA9PiB7XG4gICAgY29uc3Qgc2lnbkNsaWVudCA9IGF3YWl0IFNpZ25DbGllbnQuaW5pdCh7XG4gICAgICBwcm9qZWN0SWQ6IFwiZmJkYTY0ODQ2MTE4ZDFhMzQ4N2E0YmZlM2E2YjAwYWNcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGxhc3RTZXNzaW9uID0gc2lnbkNsaWVudFxuICAgICAgLmZpbmQoe1xuICAgICAgICByZXF1aXJlZE5hbWVzcGFjZXMsXG4gICAgICB9KVxuICAgICAgLmF0KC0xKTtcblxuICAgIGlmIChsYXN0U2Vzc2lvbikgcmV0dXJuIG5ldyBTb25hcihzaWduQ2xpZW50LCBsYXN0U2Vzc2lvbik7XG5cbiAgICBjb25zdCB7IHVyaSwgYXBwcm92YWwgfSA9IGF3YWl0IHNpZ25DbGllbnQuY29ubmVjdCh7XG4gICAgICByZXF1aXJlZE5hbWVzcGFjZXMsXG4gICAgICBvcHRpb25hbE5hbWVzcGFjZXM6IHtcbiAgICAgICAgW2NoYWluSWRdOiB7XG4gICAgICAgICAgbWV0aG9kczogW1wiY29zbW9zX3NpZ25EaXJlY3RcIiwgXCJjb3Ntb3Nfc2lnbkFtaW5vXCJdLFxuICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdXJpICYmIG9wdGlvbnMucmVxdWVzdCh1cmkpO1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGFwcHJvdmFsKCk7XG5cbiAgICByZXR1cm4gbmV3IFNvbmFyKHNpZ25DbGllbnQsIHNlc3Npb24pO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IFNvbmFyIHwgbnVsbCkgPT4gdm9pZCkgPT4ge1xuICAgIHRoaXMuY29ubmVjdG9yLm9uKFwic2Vzc2lvbl9kZWxldGVcIiwgKCkgPT4ge1xuICAgICAgZm4obnVsbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgdGhpcy5jb25uZWN0b3IuZGlzY29ubmVjdCh7XG4gICAgICB0b3BpYzogdGhpcy5zZXNzaW9uLnRvcGljLFxuICAgICAgcmVhc29uOiB7IGNvZGU6IDEsIG1lc3NhZ2U6IFwiVVNFUl9DTE9TRURcIiB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHNpZ25BbmRCcm9hZGNhc3QgPSBhc3luYyAoXG4gICAgcnBjOiBzdHJpbmcsXG4gICAgbXNnczogRW5jb2RlT2JqZWN0W10sXG4gICAgZmVlRGVub20/OiBzdHJpbmcsXG4gICAgbWVtbz86IHN0cmluZ1xuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCB0aGlzLmNvbm5lY3Rvci5yZXF1ZXN0PHN0cmluZz4oe1xuICAgICAgdG9waWM6IHRoaXMuc2Vzc2lvbi50b3BpYyxcbiAgICAgIGNoYWluSWQ6IFwiY29zbW9zOmthaXlvLTFcIixcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgbWV0aG9kOiB0aGlzLnNlc3Npb24ubmFtZXNwYWNlc1tcImNvc21vc1wiXS5tZXRob2RzWzBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBmZWVEZW5vbSxcbiAgICAgICAgICBtZW1vLFxuICAgICAgICAgIG1zZ3M6IG1zZ3NcbiAgICAgICAgICAgIC5tYXAoKG0pID0+IHJlZ2lzdHJ5LmVuY29kZUFzQW55KG0pKVxuICAgICAgICAgICAgLm1hcCgoeCkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ueCxcbiAgICAgICAgICAgICAgdmFsdWU6IEJ1ZmZlci5mcm9tKHgudmFsdWUpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IFN0YXJnYXRlQ2xpZW50LmNvbm5lY3QocnBjKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuYnJvYWRjYXN0VHgoQnVmZmVyLmZyb20oYnl0ZXMsIFwiYmFzZTY0XCIpKTtcbiAgICBhc3NlcnRJc0RlbGl2ZXJUeFN1Y2Nlc3MocmVzKTtcblxuICAgIHJldHVybiByZXM7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiU3RhcmdhdGVDbGllbnQiLCJhc3NlcnRJc0RlbGl2ZXJUeFN1Y2Nlc3MiLCJTaWduQ2xpZW50IiwiQnVmZmVyIiwiTUFJTk5FVCIsInJlZ2lzdHJ5IiwiY2hhaW5JZCIsInJlcXVpcmVkTmFtZXNwYWNlcyIsImNvc21vcyIsImNoYWlucyIsIm1ldGhvZHMiLCJldmVudHMiLCJnZXRBY2NvdW50cyIsImNsaWVudCIsInNlc3Npb24iLCJyZXMiLCJyZXF1ZXN0IiwidG9waWMiLCJtZXRob2QiLCJwYXJhbXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYWNjb3VudERhdGEiLCJwdWJrZXkiLCJmcm9tIiwiU29uYXIiLCJjb25uZWN0b3IiLCJhY2NvdW50Iiwib25DaGFuZ2UiLCJkaXNjb25uZWN0Iiwic2lnbkFuZEJyb2FkY2FzdCIsImZuIiwib24iLCJyZWFzb24iLCJjb2RlIiwibWVzc2FnZSIsInJwYyIsIm1zZ3MiLCJmZWVEZW5vbSIsIm1lbW8iLCJieXRlcyIsIm5hbWVzcGFjZXMiLCJtYXAiLCJtIiwiZW5jb2RlQXNBbnkiLCJ4IiwidmFsdWUiLCJ0b1N0cmluZyIsImNvbm5lY3QiLCJicm9hZGNhc3RUeCIsImFjY291bnRzIiwiYWRkcmVzcyIsInNwbGl0IiwiVWludDhBcnJheSIsImFsZ28iLCJuZXR3b3JrIiwib3B0aW9ucyIsInNpZ25DbGllbnQiLCJpbml0IiwicHJvamVjdElkIiwibGFzdFNlc3Npb24iLCJmaW5kIiwiYXQiLCJ1cmkiLCJhcHByb3ZhbCIsIm9wdGlvbmFsTmFtZXNwYWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FFRUEsY0FBYyxFQUNkQyx3QkFBd0IsUUFDbkIsbUJBQW1CO0FBQzFCLFNBQWlCQyxVQUFV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
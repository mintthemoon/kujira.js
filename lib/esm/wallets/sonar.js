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
import { Buffer } from "buffer/";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3NvbmFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnREYXRhLCBBbGdvLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgU3RhcmdhdGVDbGllbnQsXG4gIGFzc2VydElzRGVsaXZlclR4U3VjY2Vzcyxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCBDbGllbnQsIHsgU2lnbkNsaWVudCB9IGZyb20gXCJAd2FsbGV0Y29ubmVjdC9zaWduLWNsaWVudFwiO1xuaW1wb3J0IHsgU2Vzc2lvblR5cGVzIH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L3R5cGVzXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyL1wiO1xuaW1wb3J0IHsgTUFJTk5FVCB9IGZyb20gXCIuLi9uZXR3b3JrXCI7XG5pbXBvcnQgeyByZWdpc3RyeSB9IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgV2FsbGV0SSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG5jb25zdCBjaGFpbklkID0gXCJjb3Ntb3M6a2FpeW8tMVwiO1xuXG5jb25zdCByZXF1aXJlZE5hbWVzcGFjZXMgPSB7XG4gIGNvc21vczoge1xuICAgIGNoYWluczogW2NoYWluSWRdLFxuICAgIG1ldGhvZHM6IFtdLFxuICAgIGV2ZW50czogW10sXG4gIH0sXG59O1xuXG5jb25zdCBnZXRBY2NvdW50cyA9IGFzeW5jIChcbiAgY2xpZW50OiBDbGllbnQsXG4gIHNlc3Npb246IFNlc3Npb25UeXBlcy5TdHJ1Y3Rcbik6IFByb21pc2U8QWNjb3VudERhdGFbXT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQucmVxdWVzdDxzdHJpbmc+KHtcbiAgICB0b3BpYzogc2Vzc2lvbi50b3BpYyxcbiAgICBjaGFpbklkOiBjaGFpbklkLFxuICAgIHJlcXVlc3Q6IHtcbiAgICAgIG1ldGhvZDogXCJjb3Ntb3NfZ2V0QWNjb3VudHNcIixcbiAgICAgIHBhcmFtczoge30sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzKTtcbiAgY29uc3QgYWNjb3VudERhdGE6IEFjY291bnREYXRhID0ge1xuICAgIC4uLmRhdGEsXG4gICAgcHVia2V5OiBCdWZmZXIuZnJvbShkYXRhLnB1YmtleSwgXCJiYXNlNjRcIiksXG4gIH07XG4gIHJldHVybiBbYWNjb3VudERhdGFdO1xufTtcblxuLy8gaHR0cHM6Ly9kb2NzLndhbGxldGNvbm5lY3QuY29tLzIuMC9qYXZhc2NyaXB0L3NpZ24vZGFwcC11c2FnZVxuZXhwb3J0IGNsYXNzIFNvbmFyIGltcGxlbWVudHMgV2FsbGV0SSB7XG4gIHB1YmxpYyBhY2NvdW50OiBBY2NvdW50RGF0YTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29ubmVjdG9yOiBDbGllbnQsXG4gICAgcHVibGljIHNlc3Npb246IFNlc3Npb25UeXBlcy5TdHJ1Y3RcbiAgKSB7XG4gICAgY29uc3QgW2FjY291bnRdID0gc2Vzc2lvbi5uYW1lc3BhY2VzW1wiY29zbW9zXCJdLmFjY291bnRzLm1hcCgoYWRkcmVzcykgPT4gKHtcbiAgICAgIGFkZHJlc3M6IGFkZHJlc3Muc3BsaXQoXCI6XCIpWzJdLFxuICAgICAgcHVia2V5OiBuZXcgVWludDhBcnJheSgpLFxuICAgICAgYWxnbzogXCJzZWNwMjU2azFcIiBhcyBBbGdvLFxuICAgIH0pKTtcblxuICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gIH1cblxuICBzdGF0aWMgY29ubmVjdCA9IGFzeW5jIChcbiAgICBuZXR3b3JrOiBzdHJpbmcgPSBNQUlOTkVULFxuICAgIG9wdGlvbnM6IHsgcmVxdWVzdDogKHVyaTogc3RyaW5nKSA9PiB2b2lkOyBhdXRvOiBib29sZWFuIH1cbiAgKTogUHJvbWlzZTxTb25hcj4gPT4ge1xuICAgIGNvbnN0IHNpZ25DbGllbnQgPSBhd2FpdCBTaWduQ2xpZW50LmluaXQoe1xuICAgICAgcHJvamVjdElkOiBcImZiZGE2NDg0NjExOGQxYTM0ODdhNGJmZTNhNmIwMGFjXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBsYXN0U2Vzc2lvbiA9IHNpZ25DbGllbnRcbiAgICAgIC5maW5kKHtcbiAgICAgICAgcmVxdWlyZWROYW1lc3BhY2VzLFxuICAgICAgfSlcbiAgICAgIC5hdCgtMSk7XG5cbiAgICBpZiAobGFzdFNlc3Npb24pIHJldHVybiBuZXcgU29uYXIoc2lnbkNsaWVudCwgbGFzdFNlc3Npb24pO1xuXG4gICAgY29uc3QgeyB1cmksIGFwcHJvdmFsIH0gPSBhd2FpdCBzaWduQ2xpZW50LmNvbm5lY3Qoe1xuICAgICAgcmVxdWlyZWROYW1lc3BhY2VzLFxuICAgICAgb3B0aW9uYWxOYW1lc3BhY2VzOiB7XG4gICAgICAgIFtjaGFpbklkXToge1xuICAgICAgICAgIG1ldGhvZHM6IFtcImNvc21vc19zaWduRGlyZWN0XCIsIFwiY29zbW9zX3NpZ25BbWlub1wiXSxcbiAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHVyaSAmJiBvcHRpb25zLnJlcXVlc3QodXJpKTtcblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhcHByb3ZhbCgpO1xuXG4gICAgcmV0dXJuIG5ldyBTb25hcihzaWduQ2xpZW50LCBzZXNzaW9uKTtcbiAgfTtcblxuICBwdWJsaWMgb25DaGFuZ2UgPSAoZm46IChrOiBTb25hciB8IG51bGwpID0+IHZvaWQpID0+IHtcbiAgICB0aGlzLmNvbm5lY3Rvci5vbihcInNlc3Npb25fZGVsZXRlXCIsICgpID0+IHtcbiAgICAgIGZuKG51bGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ID0gKCkgPT4ge1xuICAgIHRoaXMuY29ubmVjdG9yLmRpc2Nvbm5lY3Qoe1xuICAgICAgdG9waWM6IHRoaXMuc2Vzc2lvbi50b3BpYyxcbiAgICAgIHJlYXNvbjogeyBjb2RlOiAxLCBtZXNzYWdlOiBcIlVTRVJfQ0xPU0VEXCIgfSxcbiAgICB9KTtcbiAgfTtcblxuICBzaWduQW5kQnJvYWRjYXN0ID0gYXN5bmMgKFxuICAgIHJwYzogc3RyaW5nLFxuICAgIG1zZ3M6IEVuY29kZU9iamVjdFtdLFxuICAgIGZlZURlbm9tPzogc3RyaW5nLFxuICAgIG1lbW8/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxEZWxpdmVyVHhSZXNwb25zZT4gPT4ge1xuICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgdGhpcy5jb25uZWN0b3IucmVxdWVzdDxzdHJpbmc+KHtcbiAgICAgIHRvcGljOiB0aGlzLnNlc3Npb24udG9waWMsXG4gICAgICBjaGFpbklkOiBcImNvc21vczprYWl5by0xXCIsXG4gICAgICByZXF1ZXN0OiB7XG4gICAgICAgIG1ldGhvZDogdGhpcy5zZXNzaW9uLm5hbWVzcGFjZXNbXCJjb3Ntb3NcIl0ubWV0aG9kc1swXSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZmVlRGVub20sXG4gICAgICAgICAgbWVtbyxcbiAgICAgICAgICBtc2dzOiBtc2dzXG4gICAgICAgICAgICAubWFwKChtKSA9PiByZWdpc3RyeS5lbmNvZGVBc0FueShtKSlcbiAgICAgICAgICAgIC5tYXAoKHgpID0+ICh7XG4gICAgICAgICAgICAgIC4uLngsXG4gICAgICAgICAgICAgIHZhbHVlOiBCdWZmZXIuZnJvbSh4LnZhbHVlKS50b1N0cmluZyhcImJhc2U2NFwiKSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBTdGFyZ2F0ZUNsaWVudC5jb25uZWN0KHJwYyk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmJyb2FkY2FzdFR4KEJ1ZmZlci5mcm9tKGJ5dGVzLCBcImJhc2U2NFwiKSk7XG4gICAgYXNzZXJ0SXNEZWxpdmVyVHhTdWNjZXNzKHJlcyk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlN0YXJnYXRlQ2xpZW50IiwiYXNzZXJ0SXNEZWxpdmVyVHhTdWNjZXNzIiwiU2lnbkNsaWVudCIsIkJ1ZmZlciIsIk1BSU5ORVQiLCJyZWdpc3RyeSIsImNoYWluSWQiLCJyZXF1aXJlZE5hbWVzcGFjZXMiLCJjb3Ntb3MiLCJjaGFpbnMiLCJtZXRob2RzIiwiZXZlbnRzIiwiZ2V0QWNjb3VudHMiLCJjbGllbnQiLCJzZXNzaW9uIiwicmVzIiwicmVxdWVzdCIsInRvcGljIiwibWV0aG9kIiwicGFyYW1zIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImFjY291bnREYXRhIiwicHVia2V5IiwiZnJvbSIsIlNvbmFyIiwiY29ubmVjdG9yIiwiYWNjb3VudCIsIm9uQ2hhbmdlIiwiZGlzY29ubmVjdCIsInNpZ25BbmRCcm9hZGNhc3QiLCJmbiIsIm9uIiwicmVhc29uIiwiY29kZSIsIm1lc3NhZ2UiLCJycGMiLCJtc2dzIiwiZmVlRGVub20iLCJtZW1vIiwiYnl0ZXMiLCJuYW1lc3BhY2VzIiwibWFwIiwibSIsImVuY29kZUFzQW55IiwieCIsInZhbHVlIiwidG9TdHJpbmciLCJjb25uZWN0IiwiYnJvYWRjYXN0VHgiLCJhY2NvdW50cyIsImFkZHJlc3MiLCJzcGxpdCIsIlVpbnQ4QXJyYXkiLCJhbGdvIiwibmV0d29yayIsIm9wdGlvbnMiLCJzaWduQ2xpZW50IiwiaW5pdCIsInByb2plY3RJZCIsImxhc3RTZXNzaW9uIiwiZmluZCIsImF0IiwidXJpIiwiYXBwcm92YWwiLCJvcHRpb25hbE5hbWVzcGFjZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBRUVBLGNBQWMsRUFDZEMsd0JBQXdCLFFBQ25CLG1CQUFtQjtBQUMxQixTQUFpQkMsVUFB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
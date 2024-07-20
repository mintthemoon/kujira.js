"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Sonar", {
    enumerable: true,
    get: function() {
        return Sonar;
    }
});
const _stargate = require("@cosmjs/stargate");
const _signclient = require("@walletconnect/sign-client");
const _buffer = require("buffer");
const _network = require("../network");
const _registry = require("../registry");
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
            pubkey: _buffer.Buffer.from(data.pubkey, "base64")
        });
        return [
            accountData
        ];
    });
    return function getAccounts(client, session) {
        return _ref.apply(this, arguments);
    };
}();
class Sonar {
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
                            msgs: msgs.map((m)=>_registry.registry.encodeAsAny(m)).map((x)=>_object_spread_props(_object_spread({}, x), {
                                    value: _buffer.Buffer.from(x.value).toString("base64")
                                }))
                        }
                    }
                });
                const client = yield _stargate.StargateClient.connect(rpc);
                const res = yield client.broadcastTx(_buffer.Buffer.from(bytes, "base64"));
                (0, _stargate.assertIsDeliverTxSuccess)(res);
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
_define_property(Sonar, "connect", /*#__PURE__*/ _async_to_generator(function*(network = _network.MAINNET, options) {
    const signClient = yield _signclient.SignClient.init({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy93YWxsZXRzL3NvbmFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnREYXRhLCBBbGdvLCBFbmNvZGVPYmplY3QgfSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgU3RhcmdhdGVDbGllbnQsXG4gIGFzc2VydElzRGVsaXZlclR4U3VjY2Vzcyxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCBDbGllbnQsIHsgU2lnbkNsaWVudCB9IGZyb20gXCJAd2FsbGV0Y29ubmVjdC9zaWduLWNsaWVudFwiO1xuaW1wb3J0IHsgU2Vzc2lvblR5cGVzIH0gZnJvbSBcIkB3YWxsZXRjb25uZWN0L3R5cGVzXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5pbXBvcnQgeyBNQUlOTkVUIH0gZnJvbSBcIi4uL25ldHdvcmtcIjtcbmltcG9ydCB7IHJlZ2lzdHJ5IH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBXYWxsZXRJIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbmNvbnN0IGNoYWluSWQgPSBcImNvc21vczprYWl5by0xXCI7XG5cbmNvbnN0IHJlcXVpcmVkTmFtZXNwYWNlcyA9IHtcbiAgY29zbW9zOiB7XG4gICAgY2hhaW5zOiBbY2hhaW5JZF0sXG4gICAgbWV0aG9kczogW10sXG4gICAgZXZlbnRzOiBbXSxcbiAgfSxcbn07XG5cbmNvbnN0IGdldEFjY291bnRzID0gYXN5bmMgKFxuICBjbGllbnQ6IENsaWVudCxcbiAgc2Vzc2lvbjogU2Vzc2lvblR5cGVzLlN0cnVjdFxuKTogUHJvbWlzZTxBY2NvdW50RGF0YVtdPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0PHN0cmluZz4oe1xuICAgIHRvcGljOiBzZXNzaW9uLnRvcGljLFxuICAgIGNoYWluSWQ6IGNoYWluSWQsXG4gICAgcmVxdWVzdDoge1xuICAgICAgbWV0aG9kOiBcImNvc21vc19nZXRBY2NvdW50c1wiLFxuICAgICAgcGFyYW1zOiB7fSxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXMpO1xuICBjb25zdCBhY2NvdW50RGF0YTogQWNjb3VudERhdGEgPSB7XG4gICAgLi4uZGF0YSxcbiAgICBwdWJrZXk6IEJ1ZmZlci5mcm9tKGRhdGEucHVia2V5LCBcImJhc2U2NFwiKSxcbiAgfTtcbiAgcmV0dXJuIFthY2NvdW50RGF0YV07XG59O1xuXG4vLyBodHRwczovL2RvY3Mud2FsbGV0Y29ubmVjdC5jb20vMi4wL2phdmFzY3JpcHQvc2lnbi9kYXBwLXVzYWdlXG5leHBvcnQgY2xhc3MgU29uYXIgaW1wbGVtZW50cyBXYWxsZXRJIHtcbiAgcHVibGljIGFjY291bnQ6IEFjY291bnREYXRhO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25uZWN0b3I6IENsaWVudCxcbiAgICBwdWJsaWMgc2Vzc2lvbjogU2Vzc2lvblR5cGVzLlN0cnVjdFxuICApIHtcbiAgICBjb25zdCBbYWNjb3VudF0gPSBzZXNzaW9uLm5hbWVzcGFjZXNbXCJjb3Ntb3NcIl0uYWNjb3VudHMubWFwKChhZGRyZXNzKSA9PiAoe1xuICAgICAgYWRkcmVzczogYWRkcmVzcy5zcGxpdChcIjpcIilbMl0sXG4gICAgICBwdWJrZXk6IG5ldyBVaW50OEFycmF5KCksXG4gICAgICBhbGdvOiBcInNlY3AyNTZrMVwiIGFzIEFsZ28sXG4gICAgfSkpO1xuXG4gICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgfVxuXG4gIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKFxuICAgIG5ldHdvcms6IHN0cmluZyA9IE1BSU5ORVQsXG4gICAgb3B0aW9uczogeyByZXF1ZXN0OiAodXJpOiBzdHJpbmcpID0+IHZvaWQ7IGF1dG86IGJvb2xlYW4gfVxuICApOiBQcm9taXNlPFNvbmFyPiA9PiB7XG4gICAgY29uc3Qgc2lnbkNsaWVudCA9IGF3YWl0IFNpZ25DbGllbnQuaW5pdCh7XG4gICAgICBwcm9qZWN0SWQ6IFwiZmJkYTY0ODQ2MTE4ZDFhMzQ4N2E0YmZlM2E2YjAwYWNcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGxhc3RTZXNzaW9uID0gc2lnbkNsaWVudFxuICAgICAgLmZpbmQoe1xuICAgICAgICByZXF1aXJlZE5hbWVzcGFjZXMsXG4gICAgICB9KVxuICAgICAgLmF0KC0xKTtcblxuICAgIGlmIChsYXN0U2Vzc2lvbikgcmV0dXJuIG5ldyBTb25hcihzaWduQ2xpZW50LCBsYXN0U2Vzc2lvbik7XG5cbiAgICBjb25zdCB7IHVyaSwgYXBwcm92YWwgfSA9IGF3YWl0IHNpZ25DbGllbnQuY29ubmVjdCh7XG4gICAgICByZXF1aXJlZE5hbWVzcGFjZXMsXG4gICAgICBvcHRpb25hbE5hbWVzcGFjZXM6IHtcbiAgICAgICAgW2NoYWluSWRdOiB7XG4gICAgICAgICAgbWV0aG9kczogW1wiY29zbW9zX3NpZ25EaXJlY3RcIiwgXCJjb3Ntb3Nfc2lnbkFtaW5vXCJdLFxuICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdXJpICYmIG9wdGlvbnMucmVxdWVzdCh1cmkpO1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGFwcHJvdmFsKCk7XG5cbiAgICByZXR1cm4gbmV3IFNvbmFyKHNpZ25DbGllbnQsIHNlc3Npb24pO1xuICB9O1xuXG4gIHB1YmxpYyBvbkNoYW5nZSA9IChmbjogKGs6IFNvbmFyIHwgbnVsbCkgPT4gdm9pZCkgPT4ge1xuICAgIHRoaXMuY29ubmVjdG9yLm9uKFwic2Vzc2lvbl9kZWxldGVcIiwgKCkgPT4ge1xuICAgICAgZm4obnVsbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgdGhpcy5jb25uZWN0b3IuZGlzY29ubmVjdCh7XG4gICAgICB0b3BpYzogdGhpcy5zZXNzaW9uLnRvcGljLFxuICAgICAgcmVhc29uOiB7IGNvZGU6IDEsIG1lc3NhZ2U6IFwiVVNFUl9DTE9TRURcIiB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHNpZ25BbmRCcm9hZGNhc3QgPSBhc3luYyAoXG4gICAgcnBjOiBzdHJpbmcsXG4gICAgbXNnczogRW5jb2RlT2JqZWN0W10sXG4gICAgZmVlRGVub20/OiBzdHJpbmcsXG4gICAgbWVtbz86IHN0cmluZ1xuICApOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgYnl0ZXMgPSBhd2FpdCB0aGlzLmNvbm5lY3Rvci5yZXF1ZXN0PHN0cmluZz4oe1xuICAgICAgdG9waWM6IHRoaXMuc2Vzc2lvbi50b3BpYyxcbiAgICAgIGNoYWluSWQ6IFwiY29zbW9zOmthaXlvLTFcIixcbiAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgbWV0aG9kOiB0aGlzLnNlc3Npb24ubmFtZXNwYWNlc1tcImNvc21vc1wiXS5tZXRob2RzWzBdLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBmZWVEZW5vbSxcbiAgICAgICAgICBtZW1vLFxuICAgICAgICAgIG1zZ3M6IG1zZ3NcbiAgICAgICAgICAgIC5tYXAoKG0pID0+IHJlZ2lzdHJ5LmVuY29kZUFzQW55KG0pKVxuICAgICAgICAgICAgLm1hcCgoeCkgPT4gKHtcbiAgICAgICAgICAgICAgLi4ueCxcbiAgICAgICAgICAgICAgdmFsdWU6IEJ1ZmZlci5mcm9tKHgudmFsdWUpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IFN0YXJnYXRlQ2xpZW50LmNvbm5lY3QocnBjKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQuYnJvYWRjYXN0VHgoQnVmZmVyLmZyb20oYnl0ZXMsIFwiYmFzZTY0XCIpKTtcbiAgICBhc3NlcnRJc0RlbGl2ZXJUeFN1Y2Nlc3MocmVzKTtcblxuICAgIHJldHVybiByZXM7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiU29uYXIiLCJjaGFpbklkIiwicmVxdWlyZWROYW1lc3BhY2VzIiwiY29zbW9zIiwiY2hhaW5zIiwibWV0aG9kcyIsImV2ZW50cyIsImdldEFjY291bnRzIiwiY2xpZW50Iiwic2Vzc2lvbiIsInJlcyIsInJlcXVlc3QiLCJ0b3BpYyIsIm1ldGhvZCIsInBhcmFtcyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJhY2NvdW50RGF0YSIsInB1YmtleSIsIkJ1ZmZlciIsImZyb20iLCJjb25uZWN0b3IiLCJhY2NvdW50Iiwib25DaGFuZ2UiLCJkaXNjb25uZWN0Iiwic2lnbkFuZEJyb2FkY2FzdCIsImZuIiwib24iLCJyZWFzb24iLCJjb2RlIiwibWVzc2FnZSIsInJwYyIsIm1zZ3MiLCJmZWVEZW5vbSIsIm1lbW8iLCJieXRlcyIsIm5hbWVzcGFjZXMiLCJtYXAiLCJtIiwicmVnaXN0cnkiLCJlbmNvZGVBc0FueSIsIngiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiU3RhcmdhdGVDbGllbnQiLCJjb25uZWN0IiwiYnJvYWRjYXN0VHgiLCJhc3NlcnRJc0RlbGl2ZXJUeFN1Y2Nlc3MiLCJhY2NvdW50cyIsImFkZHJlc3MiLCJzcGxpdCIsIlVpbnQ4QXJyYXkiLCJhbGdvIiwibmV0d29yayIsIk1BSU5ORVQiLCJvcHRpb25zIiwic2lnbkNsaWVudCIsIlNpZ25DbGllbnQiLCJpbml0IiwicHJvamVjdElkIiwibGFzdFNlc3Npb24iLCJmaW5kIiwiYXQiLCJ1cmkiLCJhcHByb3ZhbCIsIm9wdGlvbmFsTmFtZXNwYWNlcyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE2Q2FBOzs7ZUFBQUE7OzswQkF4Q047NEJBQzRCO3dCQUVaO3lCQUNDOzBCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3pC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
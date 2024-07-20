"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AuthnClient: function() {
        return AuthnClient;
    },
    decodePubkey: function() {
        return decodePubkey;
    },
    encodeAminoAuthnPubkey: function() {
        return encodeAminoAuthnPubkey;
    },
    encodePubkey: function() {
        return encodePubkey;
    }
});
const _encoding = require("@cosmjs/encoding");
const _math = require("@cosmjs/math");
const _protosigning = require("@cosmjs/proto-signing");
const _stargate = require("@cosmjs/stargate");
const _utils = require("@cosmjs/utils");
const _auth = require("cosmjs-types/cosmos/auth/v1beta1/auth");
const _tx = require("cosmjs-types/cosmos/tx/v1beta1/tx");
const _any = require("cosmjs-types/google/protobuf/any");
const _registry = require("../registry");
const _AuthnPubKey = require("./AuthnPubKey");
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
function encodePubkey(id, key) {
    return _any.Any.fromPartial({
        typeUrl: "/kujira.crypto.authn.PubKey",
        // the proto definition of the k1 key as it's just a string value at index 1
        value: _AuthnPubKey.PubKey.encode(_AuthnPubKey.PubKey.fromPartial({
            key_id: id,
            key
        })).finish()
    });
}
function decodePubkey(pubkey) {
    switch(pubkey.typeUrl){
        case "/kujira.crypto.authn.PubKey":
            const { key_id, key } = _AuthnPubKey.PubKey.decode(pubkey.value);
            return encodeAminoAuthnPubkey(key_id, key);
        default:
            throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized`);
    }
}
function encodeAminoAuthnPubkey(id, pubkey) {
    if (pubkey.length !== 33 || pubkey[0] !== 0x02 && pubkey[0] !== 0x03) {
        throw new Error("Public key must be compressed Ecdsa256, i.e. 33 bytes starting with 0x02 or 0x03");
    }
    return {
        type: "tendermint/PubKeyAuthn",
        value: {
            key_id: id,
            key: (0, _encoding.toBase64)(pubkey)
        }
    };
}
function accountFromBaseAccount(input) {
    const { address, pubKey, accountNumber, sequence } = input;
    const pubkey = pubKey ? decodePubkey(pubKey) : null;
    return {
        address: address,
        pubkey: pubkey,
        accountNumber: uint64FromProto(accountNumber).toNumber(),
        sequence: uint64FromProto(sequence).toNumber()
    };
}
function uint64FromProto(input) {
    return _math.Uint64.fromString(input.toString());
}
const accountParser = (any)=>accountFromBaseAccount(_auth.BaseAccount.decode(any.value));
class AuthnClient extends _stargate.StargateClient {
    /**
   * Creates an instance from a manually created Tendermint client.
   * Use this to use `Tendermint37Client` instead of `Tendermint34Client`.
   */ static createWithSigner(tmClient, signer, options) {
        return _async_to_generator(function*() {
            return new AuthnClient(tmClient, signer, _object_spread_props(_object_spread({}, options), {
                accountParser
            }));
        })();
    }
    simulate(signerAddress, messages, memo) {
        var _this = this;
        return _async_to_generator(function*() {
            const anyMsgs = messages.map((m)=>_registry.registry.encodeAsAny(m));
            const accountFromSigner = (yield _this.signer.getAccounts()).find((account)=>account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error("Failed to retrieve account from signer");
            }
            const pubkey = encodeAminoAuthnPubkey(_this.signer.id(), accountFromSigner.pubkey);
            const { sequence } = yield _this.getSequence(signerAddress);
            const { gasInfo } = yield _this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence);
            (0, _utils.assertDefined)(gasInfo);
            return _math.Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
        })();
    }
    signAndBroadcast(signerAddress, messages, fee, memo = "") {
        var _this = this;
        return _async_to_generator(function*() {
            let usedFee;
            if (fee == "auto" || typeof fee === "number") {
                (0, _utils.assertDefined)(_this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
                const gasEstimation = yield _this.simulate(signerAddress, messages, memo);
                const multiplier = typeof fee === "number" ? fee : 1.4;
                usedFee = (0, _stargate.calculateFee)(Math.round(gasEstimation * multiplier), _this.gasPrice);
            } else {
                usedFee = fee;
            }
            const txRaw = yield _this.sign(signerAddress, messages, usedFee, memo);
            const txBytes = _tx.TxRaw.encode(txRaw).finish();
            return _this.broadcastTx(txBytes, _this.broadcastTimeoutMs, _this.broadcastPollIntervalMs);
        })();
    }
    /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain.
   */ sign(signerAddress, messages, fee, memo, explicitSignerData) {
        var _this = this;
        return _async_to_generator(function*() {
            let signerData;
            if (explicitSignerData) {
                signerData = explicitSignerData;
            } else {
                const { accountNumber, sequence } = yield _this.getSequence(signerAddress);
                const chainId = yield _this.getChainId();
                signerData = {
                    accountNumber: accountNumber,
                    sequence: sequence,
                    chainId: chainId
                };
            }
            return _this.signAuthn(signerAddress, messages, fee, memo, signerData);
        })();
    }
    signAuthn(signerAddress, messages, fee, memo, { accountNumber, sequence, chainId }) {
        var _this = this;
        return _async_to_generator(function*() {
            const accountFromSigner = (yield _this.signer.getAccounts()).find((account)=>account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error("Failed to retrieve account from signer");
            }
            const pubkey = encodePubkey(_this.signer.id(), accountFromSigner.pubkey);
            const txBodyEncodeObject = {
                typeUrl: "/cosmos.tx.v1beta1.TxBody",
                value: {
                    messages: messages,
                    memo: memo
                }
            };
            const txBodyBytes = _this.registry.encode(txBodyEncodeObject);
            const gasLimit = _math.Int53.fromString(fee.gas).toNumber();
            const authInfoBytes = (0, _protosigning.makeAuthInfoBytes)([
                {
                    pubkey,
                    sequence
                }
            ], fee.amount, gasLimit, fee.granter, fee.payer);
            const signDoc = (0, _protosigning.makeSignDoc)(txBodyBytes, authInfoBytes, chainId, accountNumber);
            const { signature, signed } = yield _this.signer.signAuthn(signerAddress, signDoc);
            return _tx.TxRaw.fromPartial({
                bodyBytes: signed.bodyBytes,
                authInfoBytes: signed.authInfoBytes,
                signatures: [
                    (0, _encoding.fromBase64)(signature)
                ]
            });
        })();
    }
    constructor(tmClient, signer, options){
        super(tmClient, options);
        _define_property(this, "registry", void 0);
        _define_property(this, "broadcastTimeoutMs", void 0);
        _define_property(this, "broadcastPollIntervalMs", void 0);
        _define_property(this, "signer", void 0);
        _define_property(this, "gasPrice", void 0);
        const { registry = new _protosigning.Registry(_stargate.defaultRegistryTypes) } = options;
        this.registry = registry;
        this.signer = signer;
        this.broadcastTimeoutMs = options.broadcastTimeoutMs;
        this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
        this.gasPrice = options.gasPrice;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRobi9BdXRobkNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdWJrZXksIFN0ZEZlZSB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBEZWxpdmVyVHhSZXNwb25zZSB9IGZyb20gXCJAY29zbWpzL2Nvc213YXNtLXN0YXJnYXRlXCI7XG5pbXBvcnQgeyBmcm9tQmFzZTY0LCB0b0Jhc2U2NCB9IGZyb20gXCJAY29zbWpzL2VuY29kaW5nXCI7XG5pbXBvcnQgeyBJbnQ1MywgVWludDUzLCBVaW50NjQgfSBmcm9tIFwiQGNvc21qcy9tYXRoXCI7XG5pbXBvcnQge1xuICBFbmNvZGVPYmplY3QsXG4gIFJlZ2lzdHJ5LFxuICBUeEJvZHlFbmNvZGVPYmplY3QsXG4gIG1ha2VBdXRoSW5mb0J5dGVzLFxuICBtYWtlU2lnbkRvYyxcbn0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHtcbiAgQWNjb3VudCxcbiAgQWNjb3VudFBhcnNlcixcbiAgR2FzUHJpY2UsXG4gIFNpZ25lckRhdGEsXG4gIFN0YXJnYXRlQ2xpZW50LFxuICBTdGFyZ2F0ZUNsaWVudE9wdGlvbnMsXG4gIGNhbGN1bGF0ZUZlZSxcbiAgZGVmYXVsdFJlZ2lzdHJ5VHlwZXMsXG59IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBUZW5kZXJtaW50MzdDbGllbnQgfSBmcm9tIFwiQGNvc21qcy90ZW5kZXJtaW50LXJwY1wiO1xuaW1wb3J0IHsgYXNzZXJ0RGVmaW5lZCB9IGZyb20gXCJAY29zbWpzL3V0aWxzXCI7XG5pbXBvcnQgeyBCYXNlQWNjb3VudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2F1dGgvdjFiZXRhMS9hdXRoXCI7XG5pbXBvcnQgeyBUeFJhdyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3R4L3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IEFueSB9IGZyb20gXCJjb3NtanMtdHlwZXMvZ29vZ2xlL3Byb3RvYnVmL2FueVwiO1xuaW1wb3J0IHsgcmVnaXN0cnkgfSBmcm9tIFwiLi4vcmVnaXN0cnlcIjtcbmltcG9ydCB7IFB1YktleSBhcyBBdXRoblB1YktleSB9IGZyb20gXCIuL0F1dGhuUHViS2V5XCI7XG5pbXBvcnQgeyBBdXRoblNpZ25lciB9IGZyb20gXCIuL0F1dGhuU2lnbmVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1pbm9BdXRoblB1YktleSB7XG4gIHJlYWRvbmx5IHR5cGU6IFwidGVuZGVybWludC9QdWJLZXlBdXRoblwiO1xuICByZWFkb25seSB2YWx1ZTogeyBrZXlfaWQ6IHN0cmluZzsga2V5OiBzdHJpbmcgfTtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHB1YmtleSBpbiB0aGUgQW1pbm8gSlNPTiBvYmplY3Qgc3R5bGUgKHR5cGUvdmFsdWUgd3JhcHBlcilcbiAqIGFuZCBjb252ZXJ0ZXMgaXQgaW50byBhIHByb3RvYnVmIGBBbnlgLlxuICpcbiAqIFRoaXMgaXMgdGhlIHJldmVyc2Ugb3BlcmF0aW9uIHRvIGBkZWNvZGVQdWJrZXlgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUHVia2V5KGlkOiBzdHJpbmcsIGtleTogVWludDhBcnJheSk6IEFueSB7XG4gIHJldHVybiBBbnkuZnJvbVBhcnRpYWwoe1xuICAgIHR5cGVVcmw6IFwiL2t1amlyYS5jcnlwdG8uYXV0aG4uUHViS2V5XCIsXG4gICAgLy8gdGhlIHByb3RvIGRlZmluaXRpb24gb2YgdGhlIGsxIGtleSBhcyBpdCdzIGp1c3QgYSBzdHJpbmcgdmFsdWUgYXQgaW5kZXggMVxuICAgIHZhbHVlOiBBdXRoblB1YktleS5lbmNvZGUoXG4gICAgICBBdXRoblB1YktleS5mcm9tUGFydGlhbCh7XG4gICAgICAgIGtleV9pZDogaWQsXG4gICAgICAgIGtleSxcbiAgICAgIH0pXG4gICAgKS5maW5pc2goKSxcbiAgfSk7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIHB1YmtleSBmcm9tIGEgcHJvdG9idWYgYEFueWAgaW50byBgUHVia2V5YC5cbiAqIFRoaXMgc3VwcG9ydHMgc2luZ2xlIHB1YmtleXMgc3VjaCBhcyBDb3Ntb3MgZWQyNTUxOSBhbmQgc2VjcDI1NmsxIGtleXNcbiAqIGFzIHdlbGwgYXMgbXVsdGlzaWcgdGhyZXNob2xkIHB1YmtleXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQdWJrZXkocHVia2V5OiBBbnkpOiBQdWJrZXkge1xuICBzd2l0Y2ggKHB1YmtleS50eXBlVXJsKSB7XG4gICAgY2FzZSBcIi9rdWppcmEuY3J5cHRvLmF1dGhuLlB1YktleVwiOlxuICAgICAgY29uc3QgeyBrZXlfaWQsIGtleSB9ID0gQXV0aG5QdWJLZXkuZGVjb2RlKHB1YmtleS52YWx1ZSk7XG4gICAgICByZXR1cm4gZW5jb2RlQW1pbm9BdXRoblB1YmtleShrZXlfaWQsIGtleSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQdWJrZXkgdHlwZV91cmwgJHtwdWJrZXkudHlwZVVybH0gbm90IHJlY29nbml6ZWRgKTtcbiAgfVxufVxuXG4vKipcbiAqIFRha2VzIGEgRWNkc2EyNTYgcHVibGljIGtleSBhcyByYXcgYnl0ZXMgYW5kIHJldHVybnMgdGhlIEFtaW5vIEpTT05cbiAqIHJlcHJlc2VudGF0aW9uIG9mIGl0ICh0aGUgdHlwZS92YWx1ZSB3cmFwcGVyIG9iamVjdCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVBbWlub0F1dGhuUHVia2V5KFxuICBpZDogc3RyaW5nLFxuICBwdWJrZXk6IFVpbnQ4QXJyYXlcbik6IEFtaW5vQXV0aG5QdWJLZXkge1xuICBpZiAocHVia2V5Lmxlbmd0aCAhPT0gMzMgfHwgKHB1YmtleVswXSAhPT0gMHgwMiAmJiBwdWJrZXlbMF0gIT09IDB4MDMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJQdWJsaWMga2V5IG11c3QgYmUgY29tcHJlc3NlZCBFY2RzYTI1NiwgaS5lLiAzMyBieXRlcyBzdGFydGluZyB3aXRoIDB4MDIgb3IgMHgwM1wiXG4gICAgKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IFwidGVuZGVybWludC9QdWJLZXlBdXRoblwiLFxuICAgIHZhbHVlOiB7IGtleV9pZDogaWQsIGtleTogdG9CYXNlNjQocHVia2V5KSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhY2NvdW50RnJvbUJhc2VBY2NvdW50KGlucHV0OiBCYXNlQWNjb3VudCk6IEFjY291bnQge1xuICBjb25zdCB7IGFkZHJlc3MsIHB1YktleSwgYWNjb3VudE51bWJlciwgc2VxdWVuY2UgfSA9IGlucHV0O1xuICBjb25zdCBwdWJrZXkgPSBwdWJLZXkgPyBkZWNvZGVQdWJrZXkocHViS2V5KSA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBwdWJrZXk6IHB1YmtleSxcbiAgICBhY2NvdW50TnVtYmVyOiB1aW50NjRGcm9tUHJvdG8oYWNjb3VudE51bWJlcikudG9OdW1iZXIoKSxcbiAgICBzZXF1ZW5jZTogdWludDY0RnJvbVByb3RvKHNlcXVlbmNlKS50b051bWJlcigpLFxuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50NjRGcm9tUHJvdG8oaW5wdXQ6IEJpZ0ludCk6IFVpbnQ2NCB7XG4gIHJldHVybiBVaW50NjQuZnJvbVN0cmluZyhpbnB1dC50b1N0cmluZygpKTtcbn1cblxuY29uc3QgYWNjb3VudFBhcnNlcjogQWNjb3VudFBhcnNlciA9IChhbnk6IEFueSkgPT5cbiAgYWNjb3VudEZyb21CYXNlQWNjb3VudChCYXNlQWNjb3VudC5kZWNvZGUoYW55LnZhbHVlKSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG5DbGllbnRPcHRpb25zIGV4dGVuZHMgU3RhcmdhdGVDbGllbnRPcHRpb25zIHtcbiAgcmVhZG9ubHkgcmVnaXN0cnk/OiBSZWdpc3RyeTtcbiAgcmVhZG9ubHkgYnJvYWRjYXN0VGltZW91dE1zPzogbnVtYmVyO1xuICByZWFkb25seSBicm9hZGNhc3RQb2xsSW50ZXJ2YWxNcz86IG51bWJlcjtcbiAgcmVhZG9ubHkgZ2FzUHJpY2U/OiBHYXNQcmljZTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhuQ2xpZW50IGV4dGVuZHMgU3RhcmdhdGVDbGllbnQge1xuICBwdWJsaWMgcmVhZG9ubHkgcmVnaXN0cnk6IFJlZ2lzdHJ5O1xuICBwdWJsaWMgcmVhZG9ubHkgYnJvYWRjYXN0VGltZW91dE1zOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSBicm9hZGNhc3RQb2xsSW50ZXJ2YWxNczogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2lnbmVyOiBBdXRoblNpZ25lcjtcbiAgcHJpdmF0ZSByZWFkb25seSBnYXNQcmljZTogR2FzUHJpY2UgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2UgZnJvbSBhIG1hbnVhbGx5IGNyZWF0ZWQgVGVuZGVybWludCBjbGllbnQuXG4gICAqIFVzZSB0aGlzIHRvIHVzZSBgVGVuZGVybWludDM3Q2xpZW50YCBpbnN0ZWFkIG9mIGBUZW5kZXJtaW50MzRDbGllbnRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVXaXRoU2lnbmVyKFxuICAgIHRtQ2xpZW50OiBUZW5kZXJtaW50MzdDbGllbnQsXG4gICAgc2lnbmVyOiBBdXRoblNpZ25lcixcbiAgICBvcHRpb25zOiBBdXRobkNsaWVudE9wdGlvbnNcbiAgKTogUHJvbWlzZTxBdXRobkNsaWVudD4ge1xuICAgIHJldHVybiBuZXcgQXV0aG5DbGllbnQodG1DbGllbnQsIHNpZ25lciwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGFjY291bnRQYXJzZXIsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgdG1DbGllbnQ6IFRlbmRlcm1pbnQzN0NsaWVudCB8IHVuZGVmaW5lZCxcbiAgICBzaWduZXI6IEF1dGhuU2lnbmVyLFxuICAgIG9wdGlvbnM6IEF1dGhuQ2xpZW50T3B0aW9uc1xuICApIHtcbiAgICBzdXBlcih0bUNsaWVudCwgb3B0aW9ucyk7XG4gICAgY29uc3QgeyByZWdpc3RyeSA9IG5ldyBSZWdpc3RyeShkZWZhdWx0UmVnaXN0cnlUeXBlcykgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgIHRoaXMuc2lnbmVyID0gc2lnbmVyO1xuICAgIHRoaXMuYnJvYWRjYXN0VGltZW91dE1zID0gb3B0aW9ucy5icm9hZGNhc3RUaW1lb3V0TXM7XG4gICAgdGhpcy5icm9hZGNhc3RQb2xsSW50ZXJ2YWxNcyA9IG9wdGlvbnMuYnJvYWRjYXN0UG9sbEludGVydmFsTXM7XG4gICAgdGhpcy5nYXNQcmljZSA9IG9wdGlvbnMuZ2FzUHJpY2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2ltdWxhdGUoXG4gICAgc2lnbmVyQWRkcmVzczogc3RyaW5nLFxuICAgIG1lc3NhZ2VzOiByZWFkb25seSBFbmNvZGVPYmplY3RbXSxcbiAgICBtZW1vOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBjb25zdCBhbnlNc2dzID0gbWVzc2FnZXMubWFwKChtKSA9PiByZWdpc3RyeS5lbmNvZGVBc0FueShtKSk7XG4gICAgY29uc3QgYWNjb3VudEZyb21TaWduZXIgPSAoYXdhaXQgdGhpcy5zaWduZXIuZ2V0QWNjb3VudHMoKSkuZmluZChcbiAgICAgIChhY2NvdW50KSA9PiBhY2NvdW50LmFkZHJlc3MgPT09IHNpZ25lckFkZHJlc3NcbiAgICApO1xuICAgIGlmICghYWNjb3VudEZyb21TaWduZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZXRyaWV2ZSBhY2NvdW50IGZyb20gc2lnbmVyXCIpO1xuICAgIH1cbiAgICBjb25zdCBwdWJrZXkgPSBlbmNvZGVBbWlub0F1dGhuUHVia2V5KFxuICAgICAgdGhpcy5zaWduZXIuaWQoKSxcbiAgICAgIGFjY291bnRGcm9tU2lnbmVyLnB1YmtleVxuICAgICk7XG4gICAgY29uc3QgeyBzZXF1ZW5jZSB9ID0gYXdhaXQgdGhpcy5nZXRTZXF1ZW5jZShzaWduZXJBZGRyZXNzKTtcbiAgICBjb25zdCB7IGdhc0luZm8gfSA9IGF3YWl0IHRoaXMuZm9yY2VHZXRRdWVyeUNsaWVudCgpLnR4LnNpbXVsYXRlKFxuICAgICAgYW55TXNncyxcbiAgICAgIG1lbW8sXG4gICAgICBwdWJrZXksXG4gICAgICBzZXF1ZW5jZVxuICAgICk7XG4gICAgYXNzZXJ0RGVmaW5lZChnYXNJbmZvKTtcbiAgICByZXR1cm4gVWludDUzLmZyb21TdHJpbmcoZ2FzSW5mby5nYXNVc2VkLnRvU3RyaW5nKCkpLnRvTnVtYmVyKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2lnbkFuZEJyb2FkY2FzdChcbiAgICBzaWduZXJBZGRyZXNzOiBzdHJpbmcsXG4gICAgbWVzc2FnZXM6IHJlYWRvbmx5IEVuY29kZU9iamVjdFtdLFxuICAgIGZlZTogU3RkRmVlIHwgXCJhdXRvXCIgfCBudW1iZXIsXG4gICAgbWVtbyA9IFwiXCJcbiAgKTogUHJvbWlzZTxEZWxpdmVyVHhSZXNwb25zZT4ge1xuICAgIGxldCB1c2VkRmVlOiBTdGRGZWU7XG4gICAgaWYgKGZlZSA9PSBcImF1dG9cIiB8fCB0eXBlb2YgZmVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICBhc3NlcnREZWZpbmVkKFxuICAgICAgICB0aGlzLmdhc1ByaWNlLFxuICAgICAgICBcIkdhcyBwcmljZSBtdXN0IGJlIHNldCBpbiB0aGUgY2xpZW50IG9wdGlvbnMgd2hlbiBhdXRvIGdhcyBpcyB1c2VkLlwiXG4gICAgICApO1xuICAgICAgY29uc3QgZ2FzRXN0aW1hdGlvbiA9IGF3YWl0IHRoaXMuc2ltdWxhdGUoc2lnbmVyQWRkcmVzcywgbWVzc2FnZXMsIG1lbW8pO1xuICAgICAgY29uc3QgbXVsdGlwbGllciA9IHR5cGVvZiBmZWUgPT09IFwibnVtYmVyXCIgPyBmZWUgOiAxLjQ7XG4gICAgICB1c2VkRmVlID0gY2FsY3VsYXRlRmVlKFxuICAgICAgICBNYXRoLnJvdW5kKGdhc0VzdGltYXRpb24gKiBtdWx0aXBsaWVyKSxcbiAgICAgICAgdGhpcy5nYXNQcmljZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlZEZlZSA9IGZlZTtcbiAgICB9XG4gICAgY29uc3QgdHhSYXcgPSBhd2FpdCB0aGlzLnNpZ24oc2lnbmVyQWRkcmVzcywgbWVzc2FnZXMsIHVzZWRGZWUsIG1lbW8pO1xuICAgIGNvbnN0IHR4Qnl0ZXMgPSBUeFJhdy5lbmNvZGUodHhSYXcpLmZpbmlzaCgpO1xuICAgIHJldHVybiB0aGlzLmJyb2FkY2FzdFR4KFxuICAgICAgdHhCeXRlcyxcbiAgICAgIHRoaXMuYnJvYWRjYXN0VGltZW91dE1zLFxuICAgICAgdGhpcy5icm9hZGNhc3RQb2xsSW50ZXJ2YWxNc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhY2NvdW50IG51bWJlciBhbmQgc2VxdWVuY2UgZnJvbSB0aGUgQVBJLCBjcmVhdGVzIGEgc2lnbiBkb2MsXG4gICAqIGNyZWF0ZXMgYSBzaW5nbGUgc2lnbmF0dXJlIGFuZCBhc3NlbWJsZXMgdGhlIHNpZ25lZCB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IGNhbiBwYXNzIHNpZ25lciBkYXRhIChhY2NvdW50IG51bWJlciwgc2VxdWVuY2UgYW5kIGNoYWluIElEKSBleHBsaWNpdGx5IGluc3RlYWQgb2YgcXVlcnlpbmcgdGhlbVxuICAgKiBmcm9tIHRoZSBjaGFpbi5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzaWduKFxuICAgIHNpZ25lckFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlczogcmVhZG9ubHkgRW5jb2RlT2JqZWN0W10sXG4gICAgZmVlOiBTdGRGZWUsXG4gICAgbWVtbzogc3RyaW5nLFxuICAgIGV4cGxpY2l0U2lnbmVyRGF0YT86IFNpZ25lckRhdGFcbiAgKTogUHJvbWlzZTxUeFJhdz4ge1xuICAgIGxldCBzaWduZXJEYXRhOiBTaWduZXJEYXRhO1xuICAgIGlmIChleHBsaWNpdFNpZ25lckRhdGEpIHtcbiAgICAgIHNpZ25lckRhdGEgPSBleHBsaWNpdFNpZ25lckRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgYWNjb3VudE51bWJlciwgc2VxdWVuY2UgfSA9IGF3YWl0IHRoaXMuZ2V0U2VxdWVuY2Uoc2lnbmVyQWRkcmVzcyk7XG4gICAgICBjb25zdCBjaGFpbklkID0gYXdhaXQgdGhpcy5nZXRDaGFpbklkKCk7XG4gICAgICBzaWduZXJEYXRhID0ge1xuICAgICAgICBhY2NvdW50TnVtYmVyOiBhY2NvdW50TnVtYmVyLFxuICAgICAgICBzZXF1ZW5jZTogc2VxdWVuY2UsXG4gICAgICAgIGNoYWluSWQ6IGNoYWluSWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNpZ25BdXRobihzaWduZXJBZGRyZXNzLCBtZXNzYWdlcywgZmVlLCBtZW1vLCBzaWduZXJEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduQXV0aG4oXG4gICAgc2lnbmVyQWRkcmVzczogc3RyaW5nLFxuICAgIG1lc3NhZ2VzOiByZWFkb25seSBFbmNvZGVPYmplY3RbXSxcbiAgICBmZWU6IFN0ZEZlZSxcbiAgICBtZW1vOiBzdHJpbmcsXG4gICAgeyBhY2NvdW50TnVtYmVyLCBzZXF1ZW5jZSwgY2hhaW5JZCB9OiBTaWduZXJEYXRhXG4gICk6IFByb21pc2U8VHhSYXc+IHtcbiAgICBjb25zdCBhY2NvdW50RnJvbVNpZ25lciA9IChhd2FpdCB0aGlzLnNpZ25lci5nZXRBY2NvdW50cygpKS5maW5kKFxuICAgICAgKGFjY291bnQpID0+IGFjY291bnQuYWRkcmVzcyA9PT0gc2lnbmVyQWRkcmVzc1xuICAgICk7XG4gICAgaWYgKCFhY2NvdW50RnJvbVNpZ25lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJldHJpZXZlIGFjY291bnQgZnJvbSBzaWduZXJcIik7XG4gICAgfVxuICAgIGNvbnN0IHB1YmtleSA9IGVuY29kZVB1YmtleSh0aGlzLnNpZ25lci5pZCgpLCBhY2NvdW50RnJvbVNpZ25lci5wdWJrZXkpO1xuICAgIGNvbnN0IHR4Qm9keUVuY29kZU9iamVjdDogVHhCb2R5RW5jb2RlT2JqZWN0ID0ge1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnR4LnYxYmV0YTEuVHhCb2R5XCIsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIG1lbW86IG1lbW8sXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgdHhCb2R5Qnl0ZXMgPSB0aGlzLnJlZ2lzdHJ5LmVuY29kZSh0eEJvZHlFbmNvZGVPYmplY3QpO1xuICAgIGNvbnN0IGdhc0xpbWl0ID0gSW50NTMuZnJvbVN0cmluZyhmZWUuZ2FzKS50b051bWJlcigpO1xuICAgIGNvbnN0IGF1dGhJbmZvQnl0ZXMgPSBtYWtlQXV0aEluZm9CeXRlcyhcbiAgICAgIFt7IHB1YmtleSwgc2VxdWVuY2UgfV0sXG4gICAgICBmZWUuYW1vdW50LFxuICAgICAgZ2FzTGltaXQsXG4gICAgICBmZWUuZ3JhbnRlcixcbiAgICAgIGZlZS5wYXllclxuICAgICk7XG4gICAgY29uc3Qgc2lnbkRvYyA9IG1ha2VTaWduRG9jKFxuICAgICAgdHhCb2R5Qnl0ZXMsXG4gICAgICBhdXRoSW5mb0J5dGVzLFxuICAgICAgY2hhaW5JZCxcbiAgICAgIGFjY291bnROdW1iZXJcbiAgICApO1xuICAgIGNvbnN0IHsgc2lnbmF0dXJlLCBzaWduZWQgfSA9IGF3YWl0IHRoaXMuc2lnbmVyLnNpZ25BdXRobihcbiAgICAgIHNpZ25lckFkZHJlc3MsXG4gICAgICBzaWduRG9jXG4gICAgKTtcbiAgICByZXR1cm4gVHhSYXcuZnJvbVBhcnRpYWwoe1xuICAgICAgYm9keUJ5dGVzOiBzaWduZWQuYm9keUJ5dGVzLFxuICAgICAgYXV0aEluZm9CeXRlczogc2lnbmVkLmF1dGhJbmZvQnl0ZXMsXG4gICAgICBzaWduYXR1cmVzOiBbZnJvbUJhc2U2NChzaWduYXR1cmUpXSxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkF1dGhuQ2xpZW50IiwiZGVjb2RlUHVia2V5IiwiZW5jb2RlQW1pbm9BdXRoblB1YmtleSIsImVuY29kZVB1YmtleSIsImlkIiwia2V5IiwiQW55IiwiZnJvbVBhcnRpYWwiLCJ0eXBlVXJsIiwidmFsdWUiLCJBdXRoblB1YktleSIsImVuY29kZSIsImtleV9pZCIsImZpbmlzaCIsInB1YmtleSIsImRlY29kZSIsIkVycm9yIiwibGVuZ3RoIiwidHlwZSIsInRvQmFzZTY0IiwiYWNjb3VudEZyb21CYXNlQWNjb3VudCIsImlucHV0IiwiYWRkcmVzcyIsInB1YktleSIsImFjY291bnROdW1iZXIiLCJzZXF1ZW5jZSIsInVpbnQ2NEZyb21Qcm90byIsInRvTnVtYmVyIiwiVWludDY0IiwiZnJvbVN0cmluZyIsInRvU3RyaW5nIiwiYWNjb3VudFBhcnNlciIsImFueSIsIkJhc2VBY2NvdW50IiwiU3RhcmdhdGVDbGllbnQiLCJjcmVhdGVXaXRoU2lnbmVyIiwidG1DbGllbnQiLCJzaWduZXIiLCJvcHRpb25zIiwic2ltdWxhdGUiLCJzaWduZXJBZGRyZXNzIiwibWVzc2FnZXMiLCJtZW1vIiwiYW55TXNncyIsIm1hcCIsIm0iLCJyZWdpc3RyeSIsImVuY29kZUFzQW55IiwiYWNjb3VudEZyb21TaWduZXIiLCJnZXRBY2NvdW50cyIsImZpbmQiLCJhY2NvdW50IiwiZ2V0U2VxdWVuY2UiLCJnYXNJbmZvIiwiZm9yY2VHZXRRdWVyeUNsaWVudCIsInR4IiwiYXNzZXJ0RGVmaW5lZCIsIlVpbnQ1MyIsImdhc1VzZWQiLCJzaWduQW5kQnJvYWRjYXN0IiwiZmVlIiwidXNlZEZlZSIsImdhc1ByaWNlIiwiZ2FzRXN0aW1hdGlvbiIsIm11bHRpcGxpZXIiLCJjYWxjdWxhdGVGZWUiLCJNYXRoIiwicm91bmQiLCJ0eFJhdyIsInNpZ24iLCJ0eEJ5dGVzIiwiVHhSYXciLCJicm9hZGNhc3RUeCIsImJyb2FkY2FzdFRpbWVvdXRNcyIsImJyb2FkY2FzdFBvbGxJbnRlcnZhbE1zIiwiZXhwbGljaXRTaWduZXJEYXRhIiwic2lnbmVyRGF0YSIsImNoYWluSWQiLCJnZXRDaGFpbklkIiwic2lnbkF1dGhuIiwidHhCb2R5RW5jb2RlT2JqZWN0IiwidHhCb2R5Qnl0ZXMiLCJnYXNMaW1pdCIsIkludDUzIiwiZ2FzIiwiYXV0aEluZm9CeXRlcyIsIm1ha2VBdXRoSW5mb0J5dGVzIiwiYW1vdW50IiwiZ3JhbnRlciIsInBheWVyIiwic2lnbkRvYyIsIm1ha2VTaWduRG9jIiwic2lnbmF0dXJlIiwic2lnbmVkIiwiYm9keUJ5dGVzIiwic2lnbmF0dXJlcyIsImZyb21CYXNlNjQiLCJSZWdpc3RyeSIsImRlZmF1bHRSZWdpc3RyeVR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWtIYUEsV0FBVztlQUFYQTs7SUF2REdDLFlBQVk7ZUFBWkE7O0lBZUFDLHNCQUFzQjtlQUF0QkE7O0lBakNBQyxZQUFZO2VBQVpBOzs7MEJBdkNxQjtzQkFDQzs4QkFPL0I7MEJBVUE7dUJBRXVCO3NCQUNGO29CQUNOO3FCQUNGOzBCQUNLOzZCQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYy9CLFNBQVNBLGFBQWFDLEVBQVUsRUFBRUMsR0FBZTtJQUN0RCxPQUFPQyxRQUFHLENBQUNDLFdBQVcsQ0FBQztRQUNyQkMsU0FBUztRQUNULDRFQUE0RTtRQUM1RUMsT0FBT0MsbUJBQVcsQ0FBQ0MsTUFBTSxDQUN2QkQsbUJBQVcsQ0FBQ0gsV0FBVyxDQUFDO1lBQ3RCSyxRQUFRUjtZQUNSQztRQUNGLElBQ0FRLE1BQU07SUFDVjtBQUNGO0FBT08sU0FBU1osYUFBYWEsTUFBVztJQUN0QyxPQUFRQSxPQUFPTixPQUFPO1FBQ3BCLEtBQUs7WUFDSCxNQUFNLEVBQUVJLE1BQU0sRUFBRVAs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
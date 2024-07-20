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
import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { Int53, Uint53, Uint64 } from "@cosmjs/math";
import { Registry, makeAuthInfoBytes, makeSignDoc } from "@cosmjs/proto-signing";
import { StargateClient, calculateFee, defaultRegistryTypes } from "@cosmjs/stargate";
import { assertDefined } from "@cosmjs/utils";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { registry } from "../registry";
import { PubKey as AuthnPubKey } from "./AuthnPubKey";
/**
 * Takes a pubkey in the Amino JSON object style (type/value wrapper)
 * and convertes it into a protobuf `Any`.
 *
 * This is the reverse operation to `decodePubkey`.
 */ export function encodePubkey(id, key) {
    return Any.fromPartial({
        typeUrl: "/kujira.crypto.authn.PubKey",
        // the proto definition of the k1 key as it's just a string value at index 1
        value: AuthnPubKey.encode(AuthnPubKey.fromPartial({
            key_id: id,
            key
        })).finish()
    });
}
/**
 * Decodes a pubkey from a protobuf `Any` into `Pubkey`.
 * This supports single pubkeys such as Cosmos ed25519 and secp256k1 keys
 * as well as multisig threshold pubkeys.
 */ export function decodePubkey(pubkey) {
    switch(pubkey.typeUrl){
        case "/kujira.crypto.authn.PubKey":
            const { key_id, key } = AuthnPubKey.decode(pubkey.value);
            return encodeAminoAuthnPubkey(key_id, key);
        default:
            throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized`);
    }
}
/**
 * Takes a Ecdsa256 public key as raw bytes and returns the Amino JSON
 * representation of it (the type/value wrapper object).
 */ export function encodeAminoAuthnPubkey(id, pubkey) {
    if (pubkey.length !== 33 || pubkey[0] !== 0x02 && pubkey[0] !== 0x03) {
        throw new Error("Public key must be compressed Ecdsa256, i.e. 33 bytes starting with 0x02 or 0x03");
    }
    return {
        type: "tendermint/PubKeyAuthn",
        value: {
            key_id: id,
            key: toBase64(pubkey)
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
    return Uint64.fromString(input.toString());
}
const accountParser = (any)=>accountFromBaseAccount(BaseAccount.decode(any.value));
export class AuthnClient extends StargateClient {
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
            const anyMsgs = messages.map((m)=>registry.encodeAsAny(m));
            const accountFromSigner = (yield _this.signer.getAccounts()).find((account)=>account.address === signerAddress);
            if (!accountFromSigner) {
                throw new Error("Failed to retrieve account from signer");
            }
            const pubkey = encodeAminoAuthnPubkey(_this.signer.id(), accountFromSigner.pubkey);
            const { sequence } = yield _this.getSequence(signerAddress);
            const { gasInfo } = yield _this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence);
            assertDefined(gasInfo);
            return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
        })();
    }
    signAndBroadcast(signerAddress, messages, fee, memo = "") {
        var _this = this;
        return _async_to_generator(function*() {
            let usedFee;
            if (fee == "auto" || typeof fee === "number") {
                assertDefined(_this.gasPrice, "Gas price must be set in the client options when auto gas is used.");
                const gasEstimation = yield _this.simulate(signerAddress, messages, memo);
                const multiplier = typeof fee === "number" ? fee : 1.4;
                usedFee = calculateFee(Math.round(gasEstimation * multiplier), _this.gasPrice);
            } else {
                usedFee = fee;
            }
            const txRaw = yield _this.sign(signerAddress, messages, usedFee, memo);
            const txBytes = TxRaw.encode(txRaw).finish();
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
            const gasLimit = Int53.fromString(fee.gas).toNumber();
            const authInfoBytes = makeAuthInfoBytes([
                {
                    pubkey,
                    sequence
                }
            ], fee.amount, gasLimit, fee.granter, fee.payer);
            const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
            const { signature, signed } = yield _this.signer.signAuthn(signerAddress, signDoc);
            return TxRaw.fromPartial({
                bodyBytes: signed.bodyBytes,
                authInfoBytes: signed.authInfoBytes,
                signatures: [
                    fromBase64(signature)
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
        const { registry = new Registry(defaultRegistryTypes) } = options;
        this.registry = registry;
        this.signer = signer;
        this.broadcastTimeoutMs = options.broadcastTimeoutMs;
        this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
        this.gasPrice = options.gasPrice;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRobi9BdXRobkNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdWJrZXksIFN0ZEZlZSB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5pbXBvcnQgeyBEZWxpdmVyVHhSZXNwb25zZSB9IGZyb20gXCJAY29zbWpzL2Nvc213YXNtLXN0YXJnYXRlXCI7XG5pbXBvcnQgeyBmcm9tQmFzZTY0LCB0b0Jhc2U2NCB9IGZyb20gXCJAY29zbWpzL2VuY29kaW5nXCI7XG5pbXBvcnQgeyBJbnQ1MywgVWludDUzLCBVaW50NjQgfSBmcm9tIFwiQGNvc21qcy9tYXRoXCI7XG5pbXBvcnQge1xuICBFbmNvZGVPYmplY3QsXG4gIFJlZ2lzdHJ5LFxuICBUeEJvZHlFbmNvZGVPYmplY3QsXG4gIG1ha2VBdXRoSW5mb0J5dGVzLFxuICBtYWtlU2lnbkRvYyxcbn0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHtcbiAgQWNjb3VudCxcbiAgQWNjb3VudFBhcnNlcixcbiAgR2FzUHJpY2UsXG4gIFNpZ25lckRhdGEsXG4gIFN0YXJnYXRlQ2xpZW50LFxuICBTdGFyZ2F0ZUNsaWVudE9wdGlvbnMsXG4gIGNhbGN1bGF0ZUZlZSxcbiAgZGVmYXVsdFJlZ2lzdHJ5VHlwZXMsXG59IGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBUZW5kZXJtaW50MzdDbGllbnQgfSBmcm9tIFwiQGNvc21qcy90ZW5kZXJtaW50LXJwY1wiO1xuaW1wb3J0IHsgYXNzZXJ0RGVmaW5lZCB9IGZyb20gXCJAY29zbWpzL3V0aWxzXCI7XG5pbXBvcnQgeyBCYXNlQWNjb3VudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2F1dGgvdjFiZXRhMS9hdXRoXCI7XG5pbXBvcnQgeyBUeFJhdyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3R4L3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IEFueSB9IGZyb20gXCJjb3NtanMtdHlwZXMvZ29vZ2xlL3Byb3RvYnVmL2FueVwiO1xuaW1wb3J0IHsgcmVnaXN0cnkgfSBmcm9tIFwiLi4vcmVnaXN0cnlcIjtcbmltcG9ydCB7IFB1YktleSBhcyBBdXRoblB1YktleSB9IGZyb20gXCIuL0F1dGhuUHViS2V5XCI7XG5pbXBvcnQgeyBBdXRoblNpZ25lciB9IGZyb20gXCIuL0F1dGhuU2lnbmVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1pbm9BdXRoblB1YktleSB7XG4gIHJlYWRvbmx5IHR5cGU6IFwidGVuZGVybWludC9QdWJLZXlBdXRoblwiO1xuICByZWFkb25seSB2YWx1ZTogeyBrZXlfaWQ6IHN0cmluZzsga2V5OiBzdHJpbmcgfTtcbn1cblxuLyoqXG4gKiBUYWtlcyBhIHB1YmtleSBpbiB0aGUgQW1pbm8gSlNPTiBvYmplY3Qgc3R5bGUgKHR5cGUvdmFsdWUgd3JhcHBlcilcbiAqIGFuZCBjb252ZXJ0ZXMgaXQgaW50byBhIHByb3RvYnVmIGBBbnlgLlxuICpcbiAqIFRoaXMgaXMgdGhlIHJldmVyc2Ugb3BlcmF0aW9uIHRvIGBkZWNvZGVQdWJrZXlgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlUHVia2V5KGlkOiBzdHJpbmcsIGtleTogVWludDhBcnJheSk6IEFueSB7XG4gIHJldHVybiBBbnkuZnJvbVBhcnRpYWwoe1xuICAgIHR5cGVVcmw6IFwiL2t1amlyYS5jcnlwdG8uYXV0aG4uUHViS2V5XCIsXG4gICAgLy8gdGhlIHByb3RvIGRlZmluaXRpb24gb2YgdGhlIGsxIGtleSBhcyBpdCdzIGp1c3QgYSBzdHJpbmcgdmFsdWUgYXQgaW5kZXggMVxuICAgIHZhbHVlOiBBdXRoblB1YktleS5lbmNvZGUoXG4gICAgICBBdXRoblB1YktleS5mcm9tUGFydGlhbCh7XG4gICAgICAgIGtleV9pZDogaWQsXG4gICAgICAgIGtleSxcbiAgICAgIH0pXG4gICAgKS5maW5pc2goKSxcbiAgfSk7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIHB1YmtleSBmcm9tIGEgcHJvdG9idWYgYEFueWAgaW50byBgUHVia2V5YC5cbiAqIFRoaXMgc3VwcG9ydHMgc2luZ2xlIHB1YmtleXMgc3VjaCBhcyBDb3Ntb3MgZWQyNTUxOSBhbmQgc2VjcDI1NmsxIGtleXNcbiAqIGFzIHdlbGwgYXMgbXVsdGlzaWcgdGhyZXNob2xkIHB1YmtleXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQdWJrZXkocHVia2V5OiBBbnkpOiBQdWJrZXkge1xuICBzd2l0Y2ggKHB1YmtleS50eXBlVXJsKSB7XG4gICAgY2FzZSBcIi9rdWppcmEuY3J5cHRvLmF1dGhuLlB1YktleVwiOlxuICAgICAgY29uc3QgeyBrZXlfaWQsIGtleSB9ID0gQXV0aG5QdWJLZXkuZGVjb2RlKHB1YmtleS52YWx1ZSk7XG4gICAgICByZXR1cm4gZW5jb2RlQW1pbm9BdXRoblB1YmtleShrZXlfaWQsIGtleSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQdWJrZXkgdHlwZV91cmwgJHtwdWJrZXkudHlwZVVybH0gbm90IHJlY29nbml6ZWRgKTtcbiAgfVxufVxuXG4vKipcbiAqIFRha2VzIGEgRWNkc2EyNTYgcHVibGljIGtleSBhcyByYXcgYnl0ZXMgYW5kIHJldHVybnMgdGhlIEFtaW5vIEpTT05cbiAqIHJlcHJlc2VudGF0aW9uIG9mIGl0ICh0aGUgdHlwZS92YWx1ZSB3cmFwcGVyIG9iamVjdCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVBbWlub0F1dGhuUHVia2V5KFxuICBpZDogc3RyaW5nLFxuICBwdWJrZXk6IFVpbnQ4QXJyYXlcbik6IEFtaW5vQXV0aG5QdWJLZXkge1xuICBpZiAocHVia2V5Lmxlbmd0aCAhPT0gMzMgfHwgKHB1YmtleVswXSAhPT0gMHgwMiAmJiBwdWJrZXlbMF0gIT09IDB4MDMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJQdWJsaWMga2V5IG11c3QgYmUgY29tcHJlc3NlZCBFY2RzYTI1NiwgaS5lLiAzMyBieXRlcyBzdGFydGluZyB3aXRoIDB4MDIgb3IgMHgwM1wiXG4gICAgKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6IFwidGVuZGVybWludC9QdWJLZXlBdXRoblwiLFxuICAgIHZhbHVlOiB7IGtleV9pZDogaWQsIGtleTogdG9CYXNlNjQocHVia2V5KSB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBhY2NvdW50RnJvbUJhc2VBY2NvdW50KGlucHV0OiBCYXNlQWNjb3VudCk6IEFjY291bnQge1xuICBjb25zdCB7IGFkZHJlc3MsIHB1YktleSwgYWNjb3VudE51bWJlciwgc2VxdWVuY2UgfSA9IGlucHV0O1xuICBjb25zdCBwdWJrZXkgPSBwdWJLZXkgPyBkZWNvZGVQdWJrZXkocHViS2V5KSA6IG51bGw7XG4gIHJldHVybiB7XG4gICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICBwdWJrZXk6IHB1YmtleSxcbiAgICBhY2NvdW50TnVtYmVyOiB1aW50NjRGcm9tUHJvdG8oYWNjb3VudE51bWJlcikudG9OdW1iZXIoKSxcbiAgICBzZXF1ZW5jZTogdWludDY0RnJvbVByb3RvKHNlcXVlbmNlKS50b051bWJlcigpLFxuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50NjRGcm9tUHJvdG8oaW5wdXQ6IEJpZ0ludCk6IFVpbnQ2NCB7XG4gIHJldHVybiBVaW50NjQuZnJvbVN0cmluZyhpbnB1dC50b1N0cmluZygpKTtcbn1cblxuY29uc3QgYWNjb3VudFBhcnNlcjogQWNjb3VudFBhcnNlciA9IChhbnk6IEFueSkgPT5cbiAgYWNjb3VudEZyb21CYXNlQWNjb3VudChCYXNlQWNjb3VudC5kZWNvZGUoYW55LnZhbHVlKSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG5DbGllbnRPcHRpb25zIGV4dGVuZHMgU3RhcmdhdGVDbGllbnRPcHRpb25zIHtcbiAgcmVhZG9ubHkgcmVnaXN0cnk/OiBSZWdpc3RyeTtcbiAgcmVhZG9ubHkgYnJvYWRjYXN0VGltZW91dE1zPzogbnVtYmVyO1xuICByZWFkb25seSBicm9hZGNhc3RQb2xsSW50ZXJ2YWxNcz86IG51bWJlcjtcbiAgcmVhZG9ubHkgZ2FzUHJpY2U/OiBHYXNQcmljZTtcbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhuQ2xpZW50IGV4dGVuZHMgU3RhcmdhdGVDbGllbnQge1xuICBwdWJsaWMgcmVhZG9ubHkgcmVnaXN0cnk6IFJlZ2lzdHJ5O1xuICBwdWJsaWMgcmVhZG9ubHkgYnJvYWRjYXN0VGltZW91dE1zOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSBicm9hZGNhc3RQb2xsSW50ZXJ2YWxNczogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2lnbmVyOiBBdXRoblNpZ25lcjtcbiAgcHJpdmF0ZSByZWFkb25seSBnYXNQcmljZTogR2FzUHJpY2UgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2UgZnJvbSBhIG1hbnVhbGx5IGNyZWF0ZWQgVGVuZGVybWludCBjbGllbnQuXG4gICAqIFVzZSB0aGlzIHRvIHVzZSBgVGVuZGVybWludDM3Q2xpZW50YCBpbnN0ZWFkIG9mIGBUZW5kZXJtaW50MzRDbGllbnRgLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVXaXRoU2lnbmVyKFxuICAgIHRtQ2xpZW50OiBUZW5kZXJtaW50MzdDbGllbnQsXG4gICAgc2lnbmVyOiBBdXRoblNpZ25lcixcbiAgICBvcHRpb25zOiBBdXRobkNsaWVudE9wdGlvbnNcbiAgKTogUHJvbWlzZTxBdXRobkNsaWVudD4ge1xuICAgIHJldHVybiBuZXcgQXV0aG5DbGllbnQodG1DbGllbnQsIHNpZ25lciwge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGFjY291bnRQYXJzZXIsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgdG1DbGllbnQ6IFRlbmRlcm1pbnQzN0NsaWVudCB8IHVuZGVmaW5lZCxcbiAgICBzaWduZXI6IEF1dGhuU2lnbmVyLFxuICAgIG9wdGlvbnM6IEF1dGhuQ2xpZW50T3B0aW9uc1xuICApIHtcbiAgICBzdXBlcih0bUNsaWVudCwgb3B0aW9ucyk7XG4gICAgY29uc3QgeyByZWdpc3RyeSA9IG5ldyBSZWdpc3RyeShkZWZhdWx0UmVnaXN0cnlUeXBlcykgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgIHRoaXMuc2lnbmVyID0gc2lnbmVyO1xuICAgIHRoaXMuYnJvYWRjYXN0VGltZW91dE1zID0gb3B0aW9ucy5icm9hZGNhc3RUaW1lb3V0TXM7XG4gICAgdGhpcy5icm9hZGNhc3RQb2xsSW50ZXJ2YWxNcyA9IG9wdGlvbnMuYnJvYWRjYXN0UG9sbEludGVydmFsTXM7XG4gICAgdGhpcy5nYXNQcmljZSA9IG9wdGlvbnMuZ2FzUHJpY2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2ltdWxhdGUoXG4gICAgc2lnbmVyQWRkcmVzczogc3RyaW5nLFxuICAgIG1lc3NhZ2VzOiByZWFkb25seSBFbmNvZGVPYmplY3RbXSxcbiAgICBtZW1vOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBjb25zdCBhbnlNc2dzID0gbWVzc2FnZXMubWFwKChtKSA9PiByZWdpc3RyeS5lbmNvZGVBc0FueShtKSk7XG4gICAgY29uc3QgYWNjb3VudEZyb21TaWduZXIgPSAoYXdhaXQgdGhpcy5zaWduZXIuZ2V0QWNjb3VudHMoKSkuZmluZChcbiAgICAgIChhY2NvdW50KSA9PiBhY2NvdW50LmFkZHJlc3MgPT09IHNpZ25lckFkZHJlc3NcbiAgICApO1xuICAgIGlmICghYWNjb3VudEZyb21TaWduZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZXRyaWV2ZSBhY2NvdW50IGZyb20gc2lnbmVyXCIpO1xuICAgIH1cbiAgICBjb25zdCBwdWJrZXkgPSBlbmNvZGVBbWlub0F1dGhuUHVia2V5KFxuICAgICAgdGhpcy5zaWduZXIuaWQoKSxcbiAgICAgIGFjY291bnRGcm9tU2lnbmVyLnB1YmtleVxuICAgICk7XG4gICAgY29uc3QgeyBzZXF1ZW5jZSB9ID0gYXdhaXQgdGhpcy5nZXRTZXF1ZW5jZShzaWduZXJBZGRyZXNzKTtcbiAgICBjb25zdCB7IGdhc0luZm8gfSA9IGF3YWl0IHRoaXMuZm9yY2VHZXRRdWVyeUNsaWVudCgpLnR4LnNpbXVsYXRlKFxuICAgICAgYW55TXNncyxcbiAgICAgIG1lbW8sXG4gICAgICBwdWJrZXksXG4gICAgICBzZXF1ZW5jZVxuICAgICk7XG4gICAgYXNzZXJ0RGVmaW5lZChnYXNJbmZvKTtcbiAgICByZXR1cm4gVWludDUzLmZyb21TdHJpbmcoZ2FzSW5mby5nYXNVc2VkLnRvU3RyaW5nKCkpLnRvTnVtYmVyKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2lnbkFuZEJyb2FkY2FzdChcbiAgICBzaWduZXJBZGRyZXNzOiBzdHJpbmcsXG4gICAgbWVzc2FnZXM6IHJlYWRvbmx5IEVuY29kZU9iamVjdFtdLFxuICAgIGZlZTogU3RkRmVlIHwgXCJhdXRvXCIgfCBudW1iZXIsXG4gICAgbWVtbyA9IFwiXCJcbiAgKTogUHJvbWlzZTxEZWxpdmVyVHhSZXNwb25zZT4ge1xuICAgIGxldCB1c2VkRmVlOiBTdGRGZWU7XG4gICAgaWYgKGZlZSA9PSBcImF1dG9cIiB8fCB0eXBlb2YgZmVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICBhc3NlcnREZWZpbmVkKFxuICAgICAgICB0aGlzLmdhc1ByaWNlLFxuICAgICAgICBcIkdhcyBwcmljZSBtdXN0IGJlIHNldCBpbiB0aGUgY2xpZW50IG9wdGlvbnMgd2hlbiBhdXRvIGdhcyBpcyB1c2VkLlwiXG4gICAgICApO1xuICAgICAgY29uc3QgZ2FzRXN0aW1hdGlvbiA9IGF3YWl0IHRoaXMuc2ltdWxhdGUoc2lnbmVyQWRkcmVzcywgbWVzc2FnZXMsIG1lbW8pO1xuICAgICAgY29uc3QgbXVsdGlwbGllciA9IHR5cGVvZiBmZWUgPT09IFwibnVtYmVyXCIgPyBmZWUgOiAxLjQ7XG4gICAgICB1c2VkRmVlID0gY2FsY3VsYXRlRmVlKFxuICAgICAgICBNYXRoLnJvdW5kKGdhc0VzdGltYXRpb24gKiBtdWx0aXBsaWVyKSxcbiAgICAgICAgdGhpcy5nYXNQcmljZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlZEZlZSA9IGZlZTtcbiAgICB9XG4gICAgY29uc3QgdHhSYXcgPSBhd2FpdCB0aGlzLnNpZ24oc2lnbmVyQWRkcmVzcywgbWVzc2FnZXMsIHVzZWRGZWUsIG1lbW8pO1xuICAgIGNvbnN0IHR4Qnl0ZXMgPSBUeFJhdy5lbmNvZGUodHhSYXcpLmZpbmlzaCgpO1xuICAgIHJldHVybiB0aGlzLmJyb2FkY2FzdFR4KFxuICAgICAgdHhCeXRlcyxcbiAgICAgIHRoaXMuYnJvYWRjYXN0VGltZW91dE1zLFxuICAgICAgdGhpcy5icm9hZGNhc3RQb2xsSW50ZXJ2YWxNc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhY2NvdW50IG51bWJlciBhbmQgc2VxdWVuY2UgZnJvbSB0aGUgQVBJLCBjcmVhdGVzIGEgc2lnbiBkb2MsXG4gICAqIGNyZWF0ZXMgYSBzaW5nbGUgc2lnbmF0dXJlIGFuZCBhc3NlbWJsZXMgdGhlIHNpZ25lZCB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IGNhbiBwYXNzIHNpZ25lciBkYXRhIChhY2NvdW50IG51bWJlciwgc2VxdWVuY2UgYW5kIGNoYWluIElEKSBleHBsaWNpdGx5IGluc3RlYWQgb2YgcXVlcnlpbmcgdGhlbVxuICAgKiBmcm9tIHRoZSBjaGFpbi5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBzaWduKFxuICAgIHNpZ25lckFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlczogcmVhZG9ubHkgRW5jb2RlT2JqZWN0W10sXG4gICAgZmVlOiBTdGRGZWUsXG4gICAgbWVtbzogc3RyaW5nLFxuICAgIGV4cGxpY2l0U2lnbmVyRGF0YT86IFNpZ25lckRhdGFcbiAgKTogUHJvbWlzZTxUeFJhdz4ge1xuICAgIGxldCBzaWduZXJEYXRhOiBTaWduZXJEYXRhO1xuICAgIGlmIChleHBsaWNpdFNpZ25lckRhdGEpIHtcbiAgICAgIHNpZ25lckRhdGEgPSBleHBsaWNpdFNpZ25lckRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgYWNjb3VudE51bWJlciwgc2VxdWVuY2UgfSA9IGF3YWl0IHRoaXMuZ2V0U2VxdWVuY2Uoc2lnbmVyQWRkcmVzcyk7XG4gICAgICBjb25zdCBjaGFpbklkID0gYXdhaXQgdGhpcy5nZXRDaGFpbklkKCk7XG4gICAgICBzaWduZXJEYXRhID0ge1xuICAgICAgICBhY2NvdW50TnVtYmVyOiBhY2NvdW50TnVtYmVyLFxuICAgICAgICBzZXF1ZW5jZTogc2VxdWVuY2UsXG4gICAgICAgIGNoYWluSWQ6IGNoYWluSWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNpZ25BdXRobihzaWduZXJBZGRyZXNzLCBtZXNzYWdlcywgZmVlLCBtZW1vLCBzaWduZXJEYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduQXV0aG4oXG4gICAgc2lnbmVyQWRkcmVzczogc3RyaW5nLFxuICAgIG1lc3NhZ2VzOiByZWFkb25seSBFbmNvZGVPYmplY3RbXSxcbiAgICBmZWU6IFN0ZEZlZSxcbiAgICBtZW1vOiBzdHJpbmcsXG4gICAgeyBhY2NvdW50TnVtYmVyLCBzZXF1ZW5jZSwgY2hhaW5JZCB9OiBTaWduZXJEYXRhXG4gICk6IFByb21pc2U8VHhSYXc+IHtcbiAgICBjb25zdCBhY2NvdW50RnJvbVNpZ25lciA9IChhd2FpdCB0aGlzLnNpZ25lci5nZXRBY2NvdW50cygpKS5maW5kKFxuICAgICAgKGFjY291bnQpID0+IGFjY291bnQuYWRkcmVzcyA9PT0gc2lnbmVyQWRkcmVzc1xuICAgICk7XG4gICAgaWYgKCFhY2NvdW50RnJvbVNpZ25lcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJldHJpZXZlIGFjY291bnQgZnJvbSBzaWduZXJcIik7XG4gICAgfVxuICAgIGNvbnN0IHB1YmtleSA9IGVuY29kZVB1YmtleSh0aGlzLnNpZ25lci5pZCgpLCBhY2NvdW50RnJvbVNpZ25lci5wdWJrZXkpO1xuICAgIGNvbnN0IHR4Qm9keUVuY29kZU9iamVjdDogVHhCb2R5RW5jb2RlT2JqZWN0ID0ge1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnR4LnYxYmV0YTEuVHhCb2R5XCIsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBtZXNzYWdlczogbWVzc2FnZXMsXG4gICAgICAgIG1lbW86IG1lbW8sXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgdHhCb2R5Qnl0ZXMgPSB0aGlzLnJlZ2lzdHJ5LmVuY29kZSh0eEJvZHlFbmNvZGVPYmplY3QpO1xuICAgIGNvbnN0IGdhc0xpbWl0ID0gSW50NTMuZnJvbVN0cmluZyhmZWUuZ2FzKS50b051bWJlcigpO1xuICAgIGNvbnN0IGF1dGhJbmZvQnl0ZXMgPSBtYWtlQXV0aEluZm9CeXRlcyhcbiAgICAgIFt7IHB1YmtleSwgc2VxdWVuY2UgfV0sXG4gICAgICBmZWUuYW1vdW50LFxuICAgICAgZ2FzTGltaXQsXG4gICAgICBmZWUuZ3JhbnRlcixcbiAgICAgIGZlZS5wYXllclxuICAgICk7XG4gICAgY29uc3Qgc2lnbkRvYyA9IG1ha2VTaWduRG9jKFxuICAgICAgdHhCb2R5Qnl0ZXMsXG4gICAgICBhdXRoSW5mb0J5dGVzLFxuICAgICAgY2hhaW5JZCxcbiAgICAgIGFjY291bnROdW1iZXJcbiAgICApO1xuICAgIGNvbnN0IHsgc2lnbmF0dXJlLCBzaWduZWQgfSA9IGF3YWl0IHRoaXMuc2lnbmVyLnNpZ25BdXRobihcbiAgICAgIHNpZ25lckFkZHJlc3MsXG4gICAgICBzaWduRG9jXG4gICAgKTtcbiAgICByZXR1cm4gVHhSYXcuZnJvbVBhcnRpYWwoe1xuICAgICAgYm9keUJ5dGVzOiBzaWduZWQuYm9keUJ5dGVzLFxuICAgICAgYXV0aEluZm9CeXRlczogc2lnbmVkLmF1dGhJbmZvQnl0ZXMsXG4gICAgICBzaWduYXR1cmVzOiBbZnJvbUJhc2U2NChzaWduYXR1cmUpXSxcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZyb21CYXNlNjQiLCJ0b0Jhc2U2NCIsIkludDUzIiwiVWludDUzIiwiVWludDY0IiwiUmVnaXN0cnkiLCJtYWtlQXV0aEluZm9CeXRlcyIsIm1ha2VTaWduRG9jIiwiU3RhcmdhdGVDbGllbnQiLCJjYWxjdWxhdGVGZWUiLCJkZWZhdWx0UmVnaXN0cnlUeXBlcyIsImFzc2VydERlZmluZWQiLCJCYXNlQWNjb3VudCIsIlR4UmF3IiwiQW55IiwicmVnaXN0cnkiLCJQdWJLZXkiLCJBdXRoblB1YktleSIsImVuY29kZVB1YmtleSIsImlkIiwia2V5IiwiZnJvbVBhcnRpYWwiLCJ0eXBlVXJsIiwidmFsdWUiLCJlbmNvZGUiLCJrZXlfaWQiLCJmaW5pc2giLCJkZWNvZGVQdWJrZXkiLCJwdWJrZXkiLCJkZWNvZGUiLCJlbmNvZGVBbWlub0F1dGhuUHVia2V5IiwiRXJyb3IiLCJsZW5ndGgiLCJ0eXBlIiwiYWNjb3VudEZyb21CYXNlQWNjb3VudCIsImlucHV0IiwiYWRkcmVzcyIsInB1YktleSIsImFjY291bnROdW1iZXIiLCJzZXF1ZW5jZSIsInVpbnQ2NEZyb21Qcm90byIsInRvTnVtYmVyIiwiZnJvbVN0cmluZyIsInRvU3RyaW5nIiwiYWNjb3VudFBhcnNlciIsImFueSIsIkF1dGhuQ2xpZW50IiwiY3JlYXRlV2l0aFNpZ25lciIsInRtQ2xpZW50Iiwic2lnbmVyIiwib3B0aW9ucyIsInNpbXVsYXRlIiwic2lnbmVyQWRkcmVzcyIsIm1lc3NhZ2VzIiwibWVtbyIsImFueU1zZ3MiLCJtYXAiLCJtIiwiZW5jb2RlQXNBbnkiLCJhY2NvdW50RnJvbVNpZ25lciIsImdldEFjY291bnRzIiwiZmluZCIsImFjY291bnQiLCJnZXRTZXF1ZW5jZSIsImdhc0luZm8iLCJmb3JjZUdldFF1ZXJ5Q2xpZW50IiwidHgiLCJnYXNVc2VkIiwic2lnbkFuZEJyb2FkY2FzdCIsImZlZSIsInVzZWRGZWUiLCJnYXNQcmljZSIsImdhc0VzdGltYXRpb24iLCJtdWx0aXBsaWVyIiwiTWF0aCIsInJvdW5kIiwidHhSYXciLCJzaWduIiwidHhCeXRlcyIsImJyb2FkY2FzdFR4IiwiYnJvYWRjYXN0VGltZW91dE1zIiwiYnJvYWRjYXN0UG9sbEludGVydmFsTXMiLCJleHBsaWNpdFNpZ25lckRhdGEiLCJzaWduZXJEYXRhIiwiY2hhaW5JZCIsImdldENoYWluSWQiLCJzaWduQXV0aG4iLCJ0eEJvZHlFbmNvZGVPYmplY3QiLCJ0eEJvZHlCeXRlcyIsImdhc0xpbWl0IiwiZ2FzIiwiYXV0aEluZm9CeXRlcyIsImFtb3VudCIsImdyYW50ZXIiLCJwYXllciIsInNpZ25Eb2MiLCJzaWduYXR1cmUiLCJzaWduZWQiLCJib2R5Qnl0ZXMiLCJzaWduYXR1cmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxVQUFVLEVBQUVDLFFBQVEsUUFBUSxtQkFBbUI7QUFDeEQsU0FBU0MsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sUUFBUSxlQUFlO0FBQ3JELFNBRUVDLFFBQVEsRUFFUkMsaUJBQWlCLEVBQ2pCQyxXQUFXLFFBQ04sd0JBQXdCO0FBQy9CLFNBS0VDLGNBQWMsRUFFZEMsWUFBWSxFQUNaQyxvQkFBb0IsUUFDZixtQkFBbUI7QUFFMUIsU0FBU0MsYUFBYSxRQUFRLGdCQUFnQjtBQUM5QyxTQUFTQyxXQUFXLFFBQVEsd0NBQXdDO0FBQ3BFLFNBQVNDLEtBQUssUUFBUSxvQ0FBb0M7QUFDMUQsU0FBU0MsR0FBRyxRQUFRLG1DQUFtQztBQUN2RCxTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxTQUFTQyxVQUFVQyxXQUFXLFFBQVEsZ0JBQWdCO0FBUXREOzs7OztDQUtDLEdBQ0QsT0FBTyxTQUFTQyxhQUFhQyxFQUFVLEVBQUVDLEdB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
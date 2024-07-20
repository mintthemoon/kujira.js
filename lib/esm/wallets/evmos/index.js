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
import { fromBase64 } from "@cosmjs/encoding";
import { makeAuthInfoBytes, makeSignDoc } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, coins, SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { PubKey } from "cosmjs-types/cosmos/crypto/secp256k1/keys";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import { aminoTypes } from "../../amino";
import { registry } from "../../registry";
import { EthAccount } from "./auth";
export function signAndBroadcast(_) {
    return _signAndBroadcast.apply(this, arguments);
}
function _signAndBroadcast() {
    _signAndBroadcast = _async_to_generator(function*({ rpc, signer, messages, sourceAccount, sourceChainData }) {
        if (!("signDirect" in signer)) throw new Error("Ledger not supported for EVMOS Accounts");
        const query = yield StargateClient.connect(rpc);
        const response = yield query["forceGetQueryClient"]().auth.account(sourceAccount.address);
        if (!response) throw new Error("EVMOS Account not found");
        const account = EthAccount.decode(response.value);
        if (!account.base_account) throw new Error("EVMOS Account not found");
        const pubk = Any.fromPartial({
            typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
            value: PubKey.encode({
                key: sourceAccount.pubkey
            }).finish()
        });
        const txBodyEncodeObject = {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: {
                messages,
                memo: ""
            }
        };
        const txBodyBytes = registry.encode(txBodyEncodeObject);
        const gasPrice = 25;
        const gasLimit = 300000;
        const authInfoBytes = makeAuthInfoBytes([
            {
                pubkey: pubk,
                sequence: Number(account.base_account.sequence)
            }
        ], coins(gasPrice * gasLimit, "aevmos"), gasLimit, undefined, undefined);
        const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, sourceChainData.chainId, Number(account.base_account.accountNumber));
        const { signature, signed } = yield signer.signDirect(sourceAccount.address, signDoc);
        // returns txBytes for broadcast
        const tx = TxRaw.encode({
            bodyBytes: signed.bodyBytes,
            authInfoBytes: signed.authInfoBytes,
            signatures: [
                fromBase64(signature.signature)
            ]
        }).finish();
        const client = yield SigningStargateClient.connectWithSigner(rpc, signer, {
            registry,
            aminoTypes: aminoTypes("evmos")
        });
        const res = yield client.broadcastTx(tx);
        assertIsDeliverTxSuccess(res);
        return res;
    });
    return _signAndBroadcast.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93YWxsZXRzL2V2bW9zL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21CYXNlNjQgfSBmcm9tIFwiQGNvc21qcy9lbmNvZGluZ1wiO1xuaW1wb3J0IHtcbiAgQWNjb3VudERhdGEsXG4gIEVuY29kZU9iamVjdCxcbiAgbWFrZUF1dGhJbmZvQnl0ZXMsXG4gIG1ha2VTaWduRG9jLFxuICBPZmZsaW5lU2lnbmVyLFxufSBmcm9tIFwiQGNvc21qcy9wcm90by1zaWduaW5nXCI7XG5pbXBvcnQge1xuICBhc3NlcnRJc0RlbGl2ZXJUeFN1Y2Nlc3MsXG4gIGNvaW5zLFxuICBEZWxpdmVyVHhSZXNwb25zZSxcbiAgU2lnbmluZ1N0YXJnYXRlQ2xpZW50LFxuICBTdGFyZ2F0ZUNsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IFB1YktleSB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2NyeXB0by9zZWNwMjU2azEva2V5c1wiO1xuaW1wb3J0IHsgVHhSYXcgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy90eC92MWJldGExL3R4XCI7XG5pbXBvcnQgeyBBbnkgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2dvb2dsZS9wcm90b2J1Zi9hbnlcIjtcblxuaW1wb3J0IHsgQ2hhaW5JbmZvIH0gZnJvbSBcIkBrZXBsci13YWxsZXQvdHlwZXNcIjtcbmltcG9ydCB7IGFtaW5vVHlwZXMgfSBmcm9tIFwiLi4vLi4vYW1pbm9cIjtcbmltcG9ydCB7IHJlZ2lzdHJ5IH0gZnJvbSBcIi4uLy4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBFdGhBY2NvdW50IH0gZnJvbSBcIi4vYXV0aFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkFuZEJyb2FkY2FzdCh7XG4gIHJwYyxcbiAgc2lnbmVyLFxuICBtZXNzYWdlcyxcbiAgc291cmNlQWNjb3VudCxcbiAgc291cmNlQ2hhaW5EYXRhLFxufToge1xuICBycGM6IHN0cmluZztcbiAgc2lnbmVyOiBPZmZsaW5lU2lnbmVyO1xuICBtZXNzYWdlczogRW5jb2RlT2JqZWN0W107XG4gIHNvdXJjZUFjY291bnQ6IEFjY291bnREYXRhO1xuICBzb3VyY2VDaGFpbkRhdGE6IENoYWluSW5mbztcbn0pOiBQcm9taXNlPERlbGl2ZXJUeFJlc3BvbnNlPiB7XG4gIGlmICghKFwic2lnbkRpcmVjdFwiIGluIHNpZ25lcikpXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTGVkZ2VyIG5vdCBzdXBwb3J0ZWQgZm9yIEVWTU9TIEFjY291bnRzXCIpO1xuICBjb25zdCBxdWVyeSA9IGF3YWl0IFN0YXJnYXRlQ2xpZW50LmNvbm5lY3QocnBjKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVtcImZvcmNlR2V0UXVlcnlDbGllbnRcIl0oKS5hdXRoLmFjY291bnQoXG4gICAgc291cmNlQWNjb3VudC5hZGRyZXNzXG4gICk7XG4gIGlmICghcmVzcG9uc2UpIHRocm93IG5ldyBFcnJvcihcIkVWTU9TIEFjY291bnQgbm90IGZvdW5kXCIpO1xuICBjb25zdCBhY2NvdW50ID0gRXRoQWNjb3VudC5kZWNvZGUocmVzcG9uc2UudmFsdWUpO1xuICBpZiAoIWFjY291bnQuYmFzZV9hY2NvdW50KSB0aHJvdyBuZXcgRXJyb3IoXCJFVk1PUyBBY2NvdW50IG5vdCBmb3VuZFwiKTtcblxuICBjb25zdCBwdWJrID0gQW55LmZyb21QYXJ0aWFsKHtcbiAgICB0eXBlVXJsOiBcIi9ldGhlcm1pbnQuY3J5cHRvLnYxLmV0aHNlY3AyNTZrMS5QdWJLZXlcIixcbiAgICB2YWx1ZTogUHViS2V5LmVuY29kZSh7IGtleTogc291cmNlQWNjb3VudC5wdWJrZXkgfSkuZmluaXNoKCksXG4gIH0pO1xuXG4gIGNvbnN0IHR4Qm9keUVuY29kZU9iamVjdCA9IHtcbiAgICB0eXBlVXJsOiBcIi9jb3Ntb3MudHgudjFiZXRhMS5UeEJvZHlcIixcbiAgICB2YWx1ZTogeyBtZXNzYWdlcywgbWVtbzogXCJcIiB9LFxuICB9O1xuXG4gIGNvbnN0IHR4Qm9keUJ5dGVzID0gcmVnaXN0cnkuZW5jb2RlKHR4Qm9keUVuY29kZU9iamVjdCk7XG4gIGNvbnN0IGdhc1ByaWNlID0gMjU7XG4gIGNvbnN0IGdhc0xpbWl0ID0gMzAwMDAwO1xuICBjb25zdCBhdXRoSW5mb0J5dGVzID0gbWFrZUF1dGhJbmZvQnl0ZXMoXG4gICAgW1xuICAgICAge1xuICAgICAgICBwdWJrZXk6IHB1YmssXG4gICAgICAgIHNlcXVlbmNlOiBOdW1iZXIoYWNjb3VudC5iYXNlX2FjY291bnQuc2VxdWVuY2UpLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNvaW5zKGdhc1ByaWNlICogZ2FzTGltaXQsIFwiYWV2bW9zXCIpLFxuICAgIGdhc0xpbWl0LFxuICAgIHVuZGVmaW5lZCxcbiAgICB1bmRlZmluZWRcbiAgKTtcbiAgY29uc3Qgc2lnbkRvYyA9IG1ha2VTaWduRG9jKFxuICAgIHR4Qm9keUJ5dGVzLFxuICAgIGF1dGhJbmZvQnl0ZXMsXG4gICAgc291cmNlQ2hhaW5EYXRhLmNoYWluSWQsXG4gICAgTnVtYmVyKGFjY291bnQuYmFzZV9hY2NvdW50LmFjY291bnROdW1iZXIpXG4gICk7XG4gIGNvbnN0IHsgc2lnbmF0dXJlLCBzaWduZWQgfSA9IGF3YWl0IHNpZ25lci5zaWduRGlyZWN0KFxuICAgIHNvdXJjZUFjY291bnQuYWRkcmVzcyxcbiAgICBzaWduRG9jXG4gICk7XG4gIC8vIHJldHVybnMgdHhCeXRlcyBmb3IgYnJvYWRjYXN0XG4gIGNvbnN0IHR4ID0gVHhSYXcuZW5jb2RlKHtcbiAgICBib2R5Qnl0ZXM6IHNpZ25lZC5ib2R5Qnl0ZXMsXG4gICAgYXV0aEluZm9CeXRlczogc2lnbmVkLmF1dGhJbmZvQnl0ZXMsXG4gICAgc2lnbmF0dXJlczogW2Zyb21CYXNlNjQoc2lnbmF0dXJlLnNpZ25hdHVyZSldLFxuICB9KS5maW5pc2goKTtcblxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBTaWduaW5nU3RhcmdhdGVDbGllbnQuY29ubmVjdFdpdGhTaWduZXIocnBjLCBzaWduZXIsIHtcbiAgICByZWdpc3RyeSxcbiAgICBhbWlub1R5cGVzOiBhbWlub1R5cGVzKFwiZXZtb3NcIiksXG4gIH0pO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5icm9hZGNhc3RUeCh0eCk7XG5cbiAgYXNzZXJ0SXNEZWxpdmVyVHhTdWNjZXNzKHJlcyk7XG5cbiAgcmV0dXJuIHJlcztcbn1cbiJdLCJuYW1lcyI6WyJmcm9tQmFzZTY0IiwibWFrZUF1dGhJbmZvQnl0ZXMiLCJtYWtlU2lnbkRvYyIsImFzc2VydElzRGVsaXZlclR4U3VjY2VzcyIsImNvaW5zIiwiU2lnbmluZ1N0YXJnYXRlQ2xpZW50IiwiU3RhcmdhdGVDbGllbnQiLCJQdWJLZXkiLCJUeFJhdyIsIkFueSIsImFtaW5vVHlwZXMiLCJyZWdpc3RyeSIsIkV0aEFjY291bnQiLCJzaWduQW5kQnJvYWRjYXN0IiwicnBjIiwic2lnbmVyIiwibWVzc2FnZXMiLCJzb3VyY2VBY2NvdW50Iiwic291cmNlQ2hhaW5EYXRhIiwiRXJyb3IiLCJxdWVyeSIsImNvbm5lY3QiLCJyZXNwb25zZSIsImF1dGgiLCJhY2NvdW50IiwiYWRkcmVzcyIsImRlY29kZSIsInZhbHVlIiwiYmFzZV9hY2NvdW50IiwicHViayIsImZyb21QYXJ0aWFsIiwidHlwZVVybCIsImVuY29kZSIsImtleSIsInB1YmtleSIsImZpbmlzaCIsInR4Qm9keUVuY29kZU9iamVjdCIsIm1lbW8iLCJ0eEJvZHlCeXRlcyIsImdhc1ByaWNlIiwiZ2FzTGltaXQiLCJhdXRoSW5mb0J5dGVzIiwic2VxdWVuY2UiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJzaWduRG9jIiwiY2hhaW5JZCIsImFjY291bnROdW1iZXIiLCJzaWduYXR1cmUiLCJzaWduZWQiLCJzaWduRGlyZWN0IiwidHgiLCJib2R5Qnl0ZXMiLCJzaWduYXR1cmVzIiwiY2xpZW50IiwiY29ubmVjdFdpdGhTaWduZXIiLCJyZXMiLCJicm9hZGNh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
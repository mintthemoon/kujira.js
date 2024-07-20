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
    EthAccount: function() {
        return EthAccount;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _auth = require("cosmjs-types/cosmos/auth/v1beta1/auth");
const _helpers = require("cosmjs-types/helpers");
const protobufPackage = "injective.types.v1beta1";
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: new Uint8Array()
    };
}
const EthAccount = {
    typeUrl: "/injective.types.v1beta1.EthAccount",
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            _auth.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(18).bytes(message.codeHash);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthAccount();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.baseAccount = _auth.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codeHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const obj = createBaseEthAccount();
        if ((0, _helpers.isSet)(object.baseAccount)) obj.baseAccount = _auth.BaseAccount.fromJSON(object.baseAccount);
        if ((0, _helpers.isSet)(object.codeHash)) obj.codeHash = (0, _helpers.bytesFromBase64)(object.codeHash);
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? _auth.BaseAccount.toJSON(message.baseAccount) : undefined);
        message.codeHash !== undefined && (obj.codeHash = (0, _helpers.base64FromBytes)(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEthAccount();
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = _auth.BaseAccount.fromPartial(object.baseAccount);
        }
        var _object_codeHash;
        message.codeHash = (_object_codeHash = object.codeHash) !== null && _object_codeHash !== void 0 ? _object_codeHash : new Uint8Array();
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmplY3RpdmUvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQmFzZUFjY291bnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9hdXRoL3YxYmV0YTEvYXV0aFwiO1xuaW1wb3J0IHtcbiAgRGVlcFBhcnRpYWwsXG4gIEV4YWN0LFxuICBiYXNlNjRGcm9tQnl0ZXMsXG4gIGJ5dGVzRnJvbUJhc2U2NCxcbiAgaXNTZXQsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaGVscGVyc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiaW5qZWN0aXZlLnR5cGVzLnYxYmV0YTFcIjtcbi8qKlxuICogRXRoQWNjb3VudCBpbXBsZW1lbnRzIHRoZSBhdXRodHlwZXMuQWNjb3VudEkgaW50ZXJmYWNlIGFuZCBlbWJlZHMgYW5cbiAqIGF1dGh0eXBlcy5CYXNlQWNjb3VudCB0eXBlLiBJdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIGF1dGggQWNjb3VudEtlZXBlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFdGhBY2NvdW50IHtcbiAgYmFzZUFjY291bnQ/OiBCYXNlQWNjb3VudDtcbiAgY29kZUhhc2g6IFVpbnQ4QXJyYXk7XG59XG5mdW5jdGlvbiBjcmVhdGVCYXNlRXRoQWNjb3VudCgpOiBFdGhBY2NvdW50IHtcbiAgcmV0dXJuIHtcbiAgICBiYXNlQWNjb3VudDogdW5kZWZpbmVkLFxuICAgIGNvZGVIYXNoOiBuZXcgVWludDhBcnJheSgpLFxuICB9O1xufVxuZXhwb3J0IGNvbnN0IEV0aEFjY291bnQgPSB7XG4gIHR5cGVVcmw6IFwiL2luamVjdGl2ZS50eXBlcy52MWJldGExLkV0aEFjY291bnRcIixcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV0aEFjY291bnQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5iYXNlQWNjb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBCYXNlQWNjb3VudC5lbmNvZGUoXG4gICAgICAgIG1lc3NhZ2UuYmFzZUFjY291bnQsXG4gICAgICAgIHdyaXRlci51aW50MzIoMTApLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuY29kZUhhc2gubGVuZ3RoICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5ieXRlcyhtZXNzYWdlLmNvZGVIYXNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXRoQWNjb3VudCgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5iYXNlQWNjb3VudCA9IEJhc2VBY2NvdW50LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmNvZGVIYXNoID0gcmVhZGVyLmJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBvYmogPSBjcmVhdGVCYXNlRXRoQWNjb3VudCgpO1xuICAgIGlmIChpc1NldChvYmplY3QuYmFzZUFjY291bnQpKVxuICAgICAgb2JqLmJhc2VBY2NvdW50ID0gQmFzZUFjY291bnQuZnJvbUpTT04ob2JqZWN0LmJhc2VBY2NvdW50KTtcbiAgICBpZiAoaXNTZXQob2JqZWN0LmNvZGVIYXNoKSkgb2JqLmNvZGVIYXNoID0gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5jb2RlSGFzaCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgdG9KU09OKG1lc3NhZ2U6IEV0aEFjY291bnQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuYmFzZUFjY291bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5iYXNlQWNjb3VudCA9IG1lc3NhZ2UuYmFzZUFjY291bnRcbiAgICAgICAgPyBCYXNlQWNjb3VudC50b0pTT04obWVzc2FnZS5iYXNlQWNjb3VudClcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIG1lc3NhZ2UuY29kZUhhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5jb2RlSGFzaCA9IGJhc2U2NEZyb21CeXRlcyhcbiAgICAgICAgbWVzc2FnZS5jb2RlSGFzaCAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS5jb2RlSGFzaCA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxFdGhBY2NvdW50PiwgST4+KFxuICAgIG9iamVjdDogSVxuICApOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV0aEFjY291bnQoKTtcbiAgICBpZiAob2JqZWN0LmJhc2VBY2NvdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmJhc2VBY2NvdW50ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmJhc2VBY2NvdW50ID0gQmFzZUFjY291bnQuZnJvbVBhcnRpYWwob2JqZWN0LmJhc2VBY2NvdW50KTtcbiAgICB9XG4gICAgbWVzc2FnZS5jb2RlSGFzaCA9IG9iamVjdC5jb2RlSGFzaCA/PyBuZXcgVWludDhBcnJheSgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJFdGhBY2NvdW50IiwicHJvdG9idWZQYWNrYWdlIiwiY3JlYXRlQmFzZUV0aEFjY291bnQiLCJiYXNlQWNjb3VudCIsInVuZGVmaW5lZCIsImNvZGVIYXNoIiwiVWludDhBcnJheSIsInR5cGVVcmwiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiQmluYXJ5V3JpdGVyIiwiY3JlYXRlIiwiQmFzZUFjY291bnQiLCJ1aW50MzIiLCJmb3JrIiwibGRlbGltIiwibGVuZ3RoIiwiYnl0ZXMiLCJkZWNvZGUiLCJpbnB1dCIsInJlYWRlciIsIkJpbmFyeVJlYWRlciIsImVuZCIsImxlbiIsInBvcyIsInRhZyIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJvYmoiLCJpc1NldCIsImJ5dGVzRnJvbUJhc2U2NCIsInRvSlNPTiIsImJhc2U2NEZyb21CeXRlcyIsImZyb21QYXJ0aWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQTBCYUEsVUFBVTtlQUFWQTs7SUFmQUMsZUFBZTtlQUFmQTs7O3dCQVg4QjtzQkFDZjt5QkFPckI7QUFHQSxNQUFNQSxrQkFBa0I7QUFTL0IsU0FBU0M7SUFDUCxPQUFPO1FBQ0xD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
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
const protobufPackage = "ethermint.types.v1";
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: new Uint8Array()
    };
}
const EthAccount = {
    typeUrl: "/ethermint.types.v1.EthAccount",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ldGhlcm1pbnQvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQmFzZUFjY291bnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9hdXRoL3YxYmV0YTEvYXV0aFwiO1xuaW1wb3J0IHtcbiAgRGVlcFBhcnRpYWwsXG4gIEV4YWN0LFxuICBiYXNlNjRGcm9tQnl0ZXMsXG4gIGJ5dGVzRnJvbUJhc2U2NCxcbiAgaXNTZXQsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaGVscGVyc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZXRoZXJtaW50LnR5cGVzLnYxXCI7XG4vKipcbiAqIEV0aEFjY291bnQgaW1wbGVtZW50cyB0aGUgYXV0aHR5cGVzLkFjY291bnRJIGludGVyZmFjZSBhbmQgZW1iZWRzIGFuXG4gKiBhdXRodHlwZXMuQmFzZUFjY291bnQgdHlwZS4gSXQgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBhdXRoIEFjY291bnRLZWVwZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXRoQWNjb3VudCB7XG4gIGJhc2VBY2NvdW50PzogQmFzZUFjY291bnQ7XG4gIGNvZGVIYXNoOiBVaW50OEFycmF5O1xufVxuZnVuY3Rpb24gY3JlYXRlQmFzZUV0aEFjY291bnQoKTogRXRoQWNjb3VudCB7XG4gIHJldHVybiB7XG4gICAgYmFzZUFjY291bnQ6IHVuZGVmaW5lZCxcbiAgICBjb2RlSGFzaDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgfTtcbn1cbmV4cG9ydCBjb25zdCBFdGhBY2NvdW50ID0ge1xuICB0eXBlVXJsOiBcIi9ldGhlcm1pbnQudHlwZXMudjEuRXRoQWNjb3VudFwiLFxuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXRoQWNjb3VudCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmJhc2VBY2NvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEJhc2VBY2NvdW50LmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5iYXNlQWNjb3VudCxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5jb2RlSGFzaC5sZW5ndGggIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLmJ5dGVzKG1lc3NhZ2UuY29kZUhhc2gpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdGhBY2NvdW50KCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJhc2VBY2NvdW50ID0gQmFzZUFjY291bnQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29kZUhhc2ggPSByZWFkZXIuYnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IG9iaiA9IGNyZWF0ZUJhc2VFdGhBY2NvdW50KCk7XG4gICAgaWYgKGlzU2V0KG9iamVjdC5iYXNlQWNjb3VudCkpXG4gICAgICBvYmouYmFzZUFjY291bnQgPSBCYXNlQWNjb3VudC5mcm9tSlNPTihvYmplY3QuYmFzZUFjY291bnQpO1xuICAgIGlmIChpc1NldChvYmplY3QuY29kZUhhc2gpKSBvYmouY29kZUhhc2ggPSBieXRlc0Zyb21CYXNlNjQob2JqZWN0LmNvZGVIYXNoKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICB0b0pTT04obWVzc2FnZTogRXRoQWNjb3VudCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5iYXNlQWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhc2VBY2NvdW50ID0gbWVzc2FnZS5iYXNlQWNjb3VudFxuICAgICAgICA/IEJhc2VBY2NvdW50LnRvSlNPTihtZXNzYWdlLmJhc2VBY2NvdW50KVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5jb2RlSGFzaCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNvZGVIYXNoID0gYmFzZTY0RnJvbUJ5dGVzKFxuICAgICAgICBtZXNzYWdlLmNvZGVIYXNoICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLmNvZGVIYXNoIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgICAgKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEV0aEFjY291bnQ+LCBJPj4oXG4gICAgb2JqZWN0OiBJXG4gICk6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXRoQWNjb3VudCgpO1xuICAgIGlmIChvYmplY3QuYmFzZUFjY291bnQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuYmFzZUFjY291bnQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuYmFzZUFjY291bnQgPSBCYXNlQWNjb3VudC5mcm9tUGFydGlhbChvYmplY3QuYmFzZUFjY291bnQpO1xuICAgIH1cbiAgICBtZXNzYWdlLmNvZGVIYXNoID0gb2JqZWN0LmNvZGVIYXNoID8/IG5ldyBVaW50OEFycmF5KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkV0aEFjY291bnQiLCJwcm90b2J1ZlBhY2thZ2UiLCJjcmVhdGVCYXNlRXRoQWNjb3VudCIsImJhc2VBY2NvdW50IiwidW5kZWZpbmVkIiwiY29kZUhhc2giLCJVaW50OEFycmF5IiwidHlwZVVybCIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJjcmVhdGUiLCJCYXNlQWNjb3VudCIsInVpbnQzMiIsImZvcmsiLCJsZGVsaW0iLCJsZW5ndGgiLCJieXRlcyIsImRlY29kZSIsImlucHV0IiwicmVhZGVyIiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwibGVuIiwicG9zIiwidGFnIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsIm9iaiIsImlzU2V0IiwiYnl0ZXNGcm9tQmFzZTY0IiwidG9KU09OIiwiYmFzZTY0RnJvbUJ5dGVzIiwiZnJvbVBhcnRpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBMEJhQSxVQUFVO2VBQVZBOztJQWZBQyxlQUFlO2VBQWZBOzs7d0JBWDhCO3NCQUNmO3lCQU9yQjtBQUdBLE1BQU1BLGtCQUFrQjtBQVMvQixTQUFTQztJQUNQLE9BQU87UUFDTEMsYUFBYUM7UUFD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
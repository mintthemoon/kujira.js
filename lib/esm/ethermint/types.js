import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { base64FromBytes, bytesFromBase64, isSet } from "cosmjs-types/helpers";
/* eslint-disable */ export const protobufPackage = "ethermint.types.v1";
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: new Uint8Array()
    };
}
export const EthAccount = {
    typeUrl: "/ethermint.types.v1.EthAccount",
    encode (message, writer = BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash.length !== 0) {
            writer.uint32(18).bytes(message.codeHash);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthAccount();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
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
        if (isSet(object.baseAccount)) obj.baseAccount = BaseAccount.fromJSON(object.baseAccount);
        if (isSet(object.codeHash)) obj.codeHash = bytesFromBase64(object.codeHash);
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
        message.codeHash !== undefined && (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEthAccount();
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
        }
        var _object_codeHash;
        message.codeHash = (_object_codeHash = object.codeHash) !== null && _object_codeHash !== void 0 ? _object_codeHash : new Uint8Array();
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ldGhlcm1pbnQvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQmFzZUFjY291bnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9hdXRoL3YxYmV0YTEvYXV0aFwiO1xuaW1wb3J0IHtcbiAgRGVlcFBhcnRpYWwsXG4gIEV4YWN0LFxuICBiYXNlNjRGcm9tQnl0ZXMsXG4gIGJ5dGVzRnJvbUJhc2U2NCxcbiAgaXNTZXQsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaGVscGVyc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZXRoZXJtaW50LnR5cGVzLnYxXCI7XG4vKipcbiAqIEV0aEFjY291bnQgaW1wbGVtZW50cyB0aGUgYXV0aHR5cGVzLkFjY291bnRJIGludGVyZmFjZSBhbmQgZW1iZWRzIGFuXG4gKiBhdXRodHlwZXMuQmFzZUFjY291bnQgdHlwZS4gSXQgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBhdXRoIEFjY291bnRLZWVwZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXRoQWNjb3VudCB7XG4gIGJhc2VBY2NvdW50PzogQmFzZUFjY291bnQ7XG4gIGNvZGVIYXNoOiBVaW50OEFycmF5O1xufVxuZnVuY3Rpb24gY3JlYXRlQmFzZUV0aEFjY291bnQoKTogRXRoQWNjb3VudCB7XG4gIHJldHVybiB7XG4gICAgYmFzZUFjY291bnQ6IHVuZGVmaW5lZCxcbiAgICBjb2RlSGFzaDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgfTtcbn1cbmV4cG9ydCBjb25zdCBFdGhBY2NvdW50ID0ge1xuICB0eXBlVXJsOiBcIi9ldGhlcm1pbnQudHlwZXMudjEuRXRoQWNjb3VudFwiLFxuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXRoQWNjb3VudCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmJhc2VBY2NvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEJhc2VBY2NvdW50LmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5iYXNlQWNjb3VudCxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5jb2RlSGFzaC5sZW5ndGggIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLmJ5dGVzKG1lc3NhZ2UuY29kZUhhc2gpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdGhBY2NvdW50KCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJhc2VBY2NvdW50ID0gQmFzZUFjY291bnQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29kZUhhc2ggPSByZWFkZXIuYnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IG9iaiA9IGNyZWF0ZUJhc2VFdGhBY2NvdW50KCk7XG4gICAgaWYgKGlzU2V0KG9iamVjdC5iYXNlQWNjb3VudCkpXG4gICAgICBvYmouYmFzZUFjY291bnQgPSBCYXNlQWNjb3VudC5mcm9tSlNPTihvYmplY3QuYmFzZUFjY291bnQpO1xuICAgIGlmIChpc1NldChvYmplY3QuY29kZUhhc2gpKSBvYmouY29kZUhhc2ggPSBieXRlc0Zyb21CYXNlNjQob2JqZWN0LmNvZGVIYXNoKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICB0b0pTT04obWVzc2FnZTogRXRoQWNjb3VudCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5iYXNlQWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhc2VBY2NvdW50ID0gbWVzc2FnZS5iYXNlQWNjb3VudFxuICAgICAgICA/IEJhc2VBY2NvdW50LnRvSlNPTihtZXNzYWdlLmJhc2VBY2NvdW50KVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5jb2RlSGFzaCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNvZGVIYXNoID0gYmFzZTY0RnJvbUJ5dGVzKFxuICAgICAgICBtZXNzYWdlLmNvZGVIYXNoICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLmNvZGVIYXNoIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgICAgKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPEV0aEFjY291bnQ+LCBJPj4oXG4gICAgb2JqZWN0OiBJXG4gICk6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXRoQWNjb3VudCgpO1xuICAgIGlmIChvYmplY3QuYmFzZUFjY291bnQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuYmFzZUFjY291bnQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuYmFzZUFjY291bnQgPSBCYXNlQWNjb3VudC5mcm9tUGFydGlhbChvYmplY3QuYmFzZUFjY291bnQpO1xuICAgIH1cbiAgICBtZXNzYWdlLmNvZGVIYXNoID0gb2JqZWN0LmNvZGVIYXNoID8/IG5ldyBVaW50OEFycmF5KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJpbmFyeVJlYWRlciIsIkJpbmFyeVdyaXRlciIsIkJhc2VBY2NvdW50IiwiYmFzZTY0RnJvbUJ5dGVzIiwiYnl0ZXNGcm9tQmFzZTY0IiwiaXNTZXQiLCJwcm90b2J1ZlBhY2thZ2UiLCJjcmVhdGVCYXNlRXRoQWNjb3VudCIsImJhc2VBY2NvdW50IiwidW5kZWZpbmVkIiwiY29kZUhhc2giLCJVaW50OEFycmF5IiwiRXRoQWNjb3VudCIsInR5cGVVcmwiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwiZm9yayIsImxkZWxpbSIsImxlbmd0aCIsImJ5dGVzIiwiZGVjb2RlIiwiaW5wdXQiLCJyZWFkZXIiLCJlbmQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0Iiwib2JqIiwidG9KU09OIiwiZnJvbVBhcnRpYWwiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUNqRSxTQUFTQyxXQUFXLFFBQVEsd0NBQXdDO0FBQ3BFLFNBR0VDLGVBQWUsRUFDZkMsZUFBZSxFQUNmQyxLQUFLLFFBQ0EsdUJBQXVCO0FBRTlC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
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { base64FromBytes, bytesFromBase64, isSet } from "cosmjs-types/helpers";
/* eslint-disable */ export const protobufPackage = "injective.types.v1beta1";
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: new Uint8Array()
    };
}
export const EthAccount = {
    typeUrl: "/injective.types.v1beta1.EthAccount",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmplY3RpdmUvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQmFzZUFjY291bnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9hdXRoL3YxYmV0YTEvYXV0aFwiO1xuaW1wb3J0IHtcbiAgRGVlcFBhcnRpYWwsXG4gIEV4YWN0LFxuICBiYXNlNjRGcm9tQnl0ZXMsXG4gIGJ5dGVzRnJvbUJhc2U2NCxcbiAgaXNTZXQsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaGVscGVyc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiaW5qZWN0aXZlLnR5cGVzLnYxYmV0YTFcIjtcbi8qKlxuICogRXRoQWNjb3VudCBpbXBsZW1lbnRzIHRoZSBhdXRodHlwZXMuQWNjb3VudEkgaW50ZXJmYWNlIGFuZCBlbWJlZHMgYW5cbiAqIGF1dGh0eXBlcy5CYXNlQWNjb3VudCB0eXBlLiBJdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIGF1dGggQWNjb3VudEtlZXBlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFdGhBY2NvdW50IHtcbiAgYmFzZUFjY291bnQ/OiBCYXNlQWNjb3VudDtcbiAgY29kZUhhc2g6IFVpbnQ4QXJyYXk7XG59XG5mdW5jdGlvbiBjcmVhdGVCYXNlRXRoQWNjb3VudCgpOiBFdGhBY2NvdW50IHtcbiAgcmV0dXJuIHtcbiAgICBiYXNlQWNjb3VudDogdW5kZWZpbmVkLFxuICAgIGNvZGVIYXNoOiBuZXcgVWludDhBcnJheSgpLFxuICB9O1xufVxuZXhwb3J0IGNvbnN0IEV0aEFjY291bnQgPSB7XG4gIHR5cGVVcmw6IFwiL2luamVjdGl2ZS50eXBlcy52MWJldGExLkV0aEFjY291bnRcIixcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV0aEFjY291bnQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5iYXNlQWNjb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBCYXNlQWNjb3VudC5lbmNvZGUoXG4gICAgICAgIG1lc3NhZ2UuYmFzZUFjY291bnQsXG4gICAgICAgIHdyaXRlci51aW50MzIoMTApLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuY29kZUhhc2gubGVuZ3RoICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5ieXRlcyhtZXNzYWdlLmNvZGVIYXNoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXRoQWNjb3VudCgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5iYXNlQWNjb3VudCA9IEJhc2VBY2NvdW50LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmNvZGVIYXNoID0gcmVhZGVyLmJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBvYmogPSBjcmVhdGVCYXNlRXRoQWNjb3VudCgpO1xuICAgIGlmIChpc1NldChvYmplY3QuYmFzZUFjY291bnQpKVxuICAgICAgb2JqLmJhc2VBY2NvdW50ID0gQmFzZUFjY291bnQuZnJvbUpTT04ob2JqZWN0LmJhc2VBY2NvdW50KTtcbiAgICBpZiAoaXNTZXQob2JqZWN0LmNvZGVIYXNoKSkgb2JqLmNvZGVIYXNoID0gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5jb2RlSGFzaCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgdG9KU09OKG1lc3NhZ2U6IEV0aEFjY291bnQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuYmFzZUFjY291bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5iYXNlQWNjb3VudCA9IG1lc3NhZ2UuYmFzZUFjY291bnRcbiAgICAgICAgPyBCYXNlQWNjb3VudC50b0pTT04obWVzc2FnZS5iYXNlQWNjb3VudClcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIG1lc3NhZ2UuY29kZUhhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5jb2RlSGFzaCA9IGJhc2U2NEZyb21CeXRlcyhcbiAgICAgICAgbWVzc2FnZS5jb2RlSGFzaCAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS5jb2RlSGFzaCA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxFdGhBY2NvdW50PiwgST4+KFxuICAgIG9iamVjdDogSVxuICApOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV0aEFjY291bnQoKTtcbiAgICBpZiAob2JqZWN0LmJhc2VBY2NvdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmJhc2VBY2NvdW50ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmJhc2VBY2NvdW50ID0gQmFzZUFjY291bnQuZnJvbVBhcnRpYWwob2JqZWN0LmJhc2VBY2NvdW50KTtcbiAgICB9XG4gICAgbWVzc2FnZS5jb2RlSGFzaCA9IG9iamVjdC5jb2RlSGFzaCA/PyBuZXcgVWludDhBcnJheSgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJCYXNlQWNjb3VudCIsImJhc2U2NEZyb21CeXRlcyIsImJ5dGVzRnJvbUJhc2U2NCIsImlzU2V0IiwicHJvdG9idWZQYWNrYWdlIiwiY3JlYXRlQmFzZUV0aEFjY291bnQiLCJiYXNlQWNjb3VudCIsInVuZGVmaW5lZCIsImNvZGVIYXNoIiwiVWludDhBcnJheSIsIkV0aEFjY291bnQiLCJ0eXBlVXJsIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsImZvcmsiLCJsZGVsaW0iLCJsZW5ndGgiLCJieXRlcyIsImRlY29kZSIsImlucHV0IiwicmVhZGVyIiwiZW5kIiwibGVuIiwicG9zIiwidGFnIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsIm9iaiIsInRvSlNPTiIsImZyb21QYXJ0aWFsIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxZQUFZLEVBQUVDLFlBQVksUUFBUSxzQkFBc0I7QUFDakUsU0FBU0MsV0FBVyxRQUFRLHdDQUF3QztBQUNwRSxTQUdFQyxlQUFlLEVBQ2ZDLGVBQWUsRUFDZkMsS0FBSyxRQUNBLHVC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
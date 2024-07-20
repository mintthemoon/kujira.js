import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { base64FromBytes, bytesFromBase64, isSet } from "cosmjs-types/helpers";
/* eslint-disable */ export const protobufPackage = "kujira.crypto.authn";
function createBasePubKey() {
    return {
        key_id: "",
        key: new Uint8Array()
    };
}
export const PubKey = {
    typeUrl: "/kujira.crypto.authn.PubKey",
    encode (message, writer = BinaryWriter.create()) {
        if (message.key_id !== "") {
            writer.uint32(10).string(message.key_id);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.key_id = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const obj = createBasePubKey();
        if (isSet(object.key_id)) obj.key_id = String(object.key_id);
        if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.key_id !== undefined && (obj.key_id = message.key_id);
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial (object) {
        const message = createBasePubKey();
        var _object_key_id;
        message.key_id = (_object_key_id = object.key_id) !== null && _object_key_id !== void 0 ? _object_key_id : "";
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : new Uint8Array();
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRobi9BdXRoblB1YktleS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUGFydGlhbCwgRXhhY3QgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQge1xuICBiYXNlNjRGcm9tQnl0ZXMsXG4gIGJ5dGVzRnJvbUJhc2U2NCxcbiAgaXNTZXQsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaGVscGVyc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmNyeXB0by5hdXRoblwiO1xuLyoqXG4gKiBQdWJLZXkgZGVmaW5lcyBhbSBhdXRobiBwdWJsaWMga2V5XG4gKiBJRCBpcyB0aGUgaWQgcmV0dXJuZWQgZnJvbSB0aGUgcmVnaXN0cmF0aW9uXG4gKiBLZXkgaXMgdGhlIGNvbXByZXNzZWQgZm9ybSBvZiB0aGUgcHVia2V5LiBUaGUgZmlyc3QgYnl0ZSBkZXBlbmRzIGlzIGEgMHgwMiBieXRlXG4gKiBpZiB0aGUgeS1jb29yZGluYXRlIGlzIHRoZSBsZXhpY29ncmFwaGljYWxseSBsYXJnZXN0IG9mIHRoZSB0d28gYXNzb2NpYXRlZCB3aXRoXG4gKiB0aGUgeC1jb29yZGluYXRlLiBPdGhlcndpc2UgdGhlIGZpcnN0IGJ5dGUgaXMgYSAweDAzLlxuICogVGhpcyBwcmVmaXggaXMgZm9sbG93ZWQgd2l0aCB0aGUgeC1jb29yZGluYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFB1YktleSB7XG4gIGtleV9pZDogc3RyaW5nO1xuICBrZXk6IFVpbnQ4QXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VQdWJLZXkoKTogUHViS2V5IHtcbiAgcmV0dXJuIHtcbiAgICBrZXlfaWQ6IFwiXCIsXG4gICAga2V5OiBuZXcgVWludDhBcnJheSgpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUHViS2V5ID0ge1xuICB0eXBlVXJsOiBcIi9rdWppcmEuY3J5cHRvLmF1dGhuLlB1YktleVwiLFxuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUHViS2V5LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uua2V5X2lkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5rZXlfaWQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmtleS5sZW5ndGggIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLmJ5dGVzKG1lc3NhZ2Uua2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFB1YktleSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVB1YktleSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5rZXlfaWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmtleSA9IHJlYWRlci5ieXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBQdWJLZXkge1xuICAgIGNvbnN0IG9iaiA9IGNyZWF0ZUJhc2VQdWJLZXkoKTtcbiAgICBpZiAoaXNTZXQob2JqZWN0LmtleV9pZCkpIG9iai5rZXlfaWQgPSBTdHJpbmcob2JqZWN0LmtleV9pZCk7XG4gICAgaWYgKGlzU2V0KG9iamVjdC5rZXkpKSBvYmoua2V5ID0gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5rZXkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIHRvSlNPTihtZXNzYWdlOiBQdWJLZXkpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uua2V5X2lkICE9PSB1bmRlZmluZWQgJiYgKG9iai5rZXlfaWQgPSBtZXNzYWdlLmtleV9pZCk7XG4gICAgbWVzc2FnZS5rZXkgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5rZXkgPSBiYXNlNjRGcm9tQnl0ZXMoXG4gICAgICAgIG1lc3NhZ2Uua2V5ICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLmtleSA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxQdWJLZXk+LCBJPj4oXG4gICAgb2JqZWN0OiBJXG4gICk6IFB1YktleSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VQdWJLZXkoKTtcbiAgICBtZXNzYWdlLmtleV9pZCA9IG9iamVjdC5rZXlfaWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmtleSA9IG9iamVjdC5rZXkgPz8gbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQmluYXJ5UmVhZGVyIiwiQmluYXJ5V3JpdGVyIiwiYmFzZTY0RnJvbUJ5dGVzIiwiYnl0ZXNGcm9tQmFzZTY0IiwiaXNTZXQiLCJwcm90b2J1ZlBhY2thZ2UiLCJjcmVhdGVCYXNlUHViS2V5Iiwia2V5X2lkIiwia2V5IiwiVWludDhBcnJheSIsIlB1YktleSIsInR5cGVVcmwiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwic3RyaW5nIiwibGVuZ3RoIiwiYnl0ZXMiLCJkZWNvZGUiLCJpbnB1dCIsInJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJvYmoiLCJTdHJpbmciLCJ0b0pTT04iLCJmcm9tUGFydGlhbCJdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBU0EsWUFBWSxFQUFFQyxZQUFZLFFBQVEsc0JBQXNCO0FBQ2pFLFNBQ0VDLGVBQWUsRUFDZkMsZUFBZSxFQUNmQyxLQUFLLFFBQ0EsdUJBQXVCO0FBRTlCLGtCQUFrQixHQUNsQixPQUFPLE1BQU1DLGtCQUFrQixzQkFBc0I7QUFjckQsU0FBU0M7SUFDUCxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsS0FBSyxJQUFJQztJQUNYO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLFNBQVM7SUFDcEJDLFNBQVM7SUFDVEMsUUFDRUMsT0FBZSxFQUNmQyxTQUF1QmIsYUFBYWMsTUFBTSxFQUFFO1FBRTVDLElBQUlGLFFBQVFOLE1BQU0sS0FBSyxJQUFJO1lBQ3pCTyxPQUFPRSxNQUFNLENBQUMsSUFBSUMsTUFBTSxDQUFDSixRQUFRTixNQUFNO1FBQ3pDO1FBRUEsSUFBSU0sUUFBUUwsR0FBRyxDQUFDVSxNQUFNLEtBQUssR0FBRztZQUM1QkosT0FBT0UsTUFBTSxDQUFDLElBQUlHLEtBQUssQ0FBQ04sUUFBUUwsR0FBRztRQUNyQztRQUNBLE9BQU9NO0lBQ1Q7SUFFQU0sUUFBT0MsS0FBZ0MsRUFBRUgsTUFBZTtRQUN0RCxNQUFNSSxTQUNKRCxpQkFBaUJyQixlQUFlcUIsUUFBUSxJQUFJckIsYUFBYXFCO1FBQzNELElBQUlFLE1BQU1MLFdBQVdNLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHUjtRQUMzRCxNQUFNTCxVQUFVUDtRQUNoQixNQUFPZ0IsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1JLE1BQU1MLE9BQU9OLE1BQU07WUFDekIsT0FBUVcsUUFBUTtnQkFDZCxLQUFLO29CQUNIZCxRQUFRTixNQUFNLEdBQUdlLE9BQU9MLE1BQU07b0JBQzlCO2dCQUNGLEtBQUs7b0JBQ0hKLFFBQVFMLEdBQUcsR0FBR2MsT0FBT0gsS0FBSztvQkFDMUI7Z0JBRUY7b0JBQ0VHLE9BQU9NLFFBQVEsQ0FBQ0QsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBQ0EsT0FBT2Q7SUFDVDtJQUNBZ0IsVUFBU0MsTUFBVztRQUNsQixNQUFNQyxNQUFNekI7UUFDWixJQUFJRixNQUFNMEIsT0FBT3ZCLE1BQU0sR0FBR3dCLElBQUl4QixNQUFNLEdBQUd5QixPQUFPRixPQUFPdkIsTUFBTTtRQUMzRCxJQUFJSCxNQUFNMEIsT0FBT3RCLEdBQUcsR0FBR3VCLElBQUl2QixHQUFHLEdBQUdMLGdCQUFnQjJCLE9BQU90QixHQUFHO1FBQzNELE9BQU91QjtJQUNUO0lBQ0FFLFFBQU9wQixPQUFlO1FBQ3BCLE1BQU1rQixNQUFXLENBQUM7UUFDbEJsQixRQUFRTixNQUFNLEtBQUtpQixhQUFjTyxDQUFBQSxJQUFJeEIsTUFBTSxHQUFHTSxRQUFRTixNQUFNLEFBQUQ7UUFDM0RNLFFBQVFMLEdBQUcsS0FBS2dCLGFBQ2JPLENBQUFBLElBQUl2QixHQUFHLEdBQUdOLGdCQUNUVyxRQUFRTCxHQUFHLEtBQUtnQixZQUFZWCxRQUFRTCxHQUFHLEdBQUcsSUFBSUMsYUFDaEQ7UUFDRixPQUFPc0I7SUFDVDtJQUNBRyxhQUNFSixNQUFTO1FBRVQsTUFBTWpCLFVBQVVQO1lBQ0N3QjtRQUFqQmpCLFFBQVFOLE1BQU0sR0FBR3VCLENBQUFBLGlCQUFBQSxPQUFPdkIsTUFBTSxjQUFidUIsNEJBQUFBLGlCQUFpQjtZQUNwQkE7UUFBZGpCLFFBQVFMLEdBQUcsR0FBR3NCLENBQUFBLGNBQUFBLE9BQU90QixHQUFHLGNBQVZzQix5QkFBQUEsY0FBYyxJQUFJckI7UUFDaEMsT0FBT0k7SUFDVDtBQUNGLEVBQUUifQ==
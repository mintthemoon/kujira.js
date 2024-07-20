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
    PubKey: function() {
        return PubKey;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _helpers = require("cosmjs-types/helpers");
const protobufPackage = "kujira.crypto.authn";
function createBasePubKey() {
    return {
        key_id: "",
        key: new Uint8Array()
    };
}
const PubKey = {
    typeUrl: "/kujira.crypto.authn.PubKey",
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.key_id !== "") {
            writer.uint32(10).string(message.key_id);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
        if ((0, _helpers.isSet)(object.key_id)) obj.key_id = String(object.key_id);
        if ((0, _helpers.isSet)(object.key)) obj.key = (0, _helpers.bytesFromBase64)(object.key);
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.key_id !== undefined && (obj.key_id = message.key_id);
        message.key !== undefined && (obj.key = (0, _helpers.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRobi9BdXRoblB1YktleS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUGFydGlhbCwgRXhhY3QgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQge1xuICBiYXNlNjRGcm9tQnl0ZXMsXG4gIGJ5dGVzRnJvbUJhc2U2NCxcbiAgaXNTZXQsXG59IGZyb20gXCJjb3NtanMtdHlwZXMvaGVscGVyc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmNyeXB0by5hdXRoblwiO1xuLyoqXG4gKiBQdWJLZXkgZGVmaW5lcyBhbSBhdXRobiBwdWJsaWMga2V5XG4gKiBJRCBpcyB0aGUgaWQgcmV0dXJuZWQgZnJvbSB0aGUgcmVnaXN0cmF0aW9uXG4gKiBLZXkgaXMgdGhlIGNvbXByZXNzZWQgZm9ybSBvZiB0aGUgcHVia2V5LiBUaGUgZmlyc3QgYnl0ZSBkZXBlbmRzIGlzIGEgMHgwMiBieXRlXG4gKiBpZiB0aGUgeS1jb29yZGluYXRlIGlzIHRoZSBsZXhpY29ncmFwaGljYWxseSBsYXJnZXN0IG9mIHRoZSB0d28gYXNzb2NpYXRlZCB3aXRoXG4gKiB0aGUgeC1jb29yZGluYXRlLiBPdGhlcndpc2UgdGhlIGZpcnN0IGJ5dGUgaXMgYSAweDAzLlxuICogVGhpcyBwcmVmaXggaXMgZm9sbG93ZWQgd2l0aCB0aGUgeC1jb29yZGluYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFB1YktleSB7XG4gIGtleV9pZDogc3RyaW5nO1xuICBrZXk6IFVpbnQ4QXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VQdWJLZXkoKTogUHViS2V5IHtcbiAgcmV0dXJuIHtcbiAgICBrZXlfaWQ6IFwiXCIsXG4gICAga2V5OiBuZXcgVWludDhBcnJheSgpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUHViS2V5ID0ge1xuICB0eXBlVXJsOiBcIi9rdWppcmEuY3J5cHRvLmF1dGhuLlB1YktleVwiLFxuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUHViS2V5LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uua2V5X2lkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5rZXlfaWQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmtleS5sZW5ndGggIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLmJ5dGVzKG1lc3NhZ2Uua2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFB1YktleSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVB1YktleSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5rZXlfaWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmtleSA9IHJlYWRlci5ieXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBQdWJLZXkge1xuICAgIGNvbnN0IG9iaiA9IGNyZWF0ZUJhc2VQdWJLZXkoKTtcbiAgICBpZiAoaXNTZXQob2JqZWN0LmtleV9pZCkpIG9iai5rZXlfaWQgPSBTdHJpbmcob2JqZWN0LmtleV9pZCk7XG4gICAgaWYgKGlzU2V0KG9iamVjdC5rZXkpKSBvYmoua2V5ID0gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5rZXkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIHRvSlNPTihtZXNzYWdlOiBQdWJLZXkpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uua2V5X2lkICE9PSB1bmRlZmluZWQgJiYgKG9iai5rZXlfaWQgPSBtZXNzYWdlLmtleV9pZCk7XG4gICAgbWVzc2FnZS5rZXkgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5rZXkgPSBiYXNlNjRGcm9tQnl0ZXMoXG4gICAgICAgIG1lc3NhZ2Uua2V5ICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLmtleSA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxQdWJLZXk+LCBJPj4oXG4gICAgb2JqZWN0OiBJXG4gICk6IFB1YktleSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VQdWJLZXkoKTtcbiAgICBtZXNzYWdlLmtleV9pZCA9IG9iamVjdC5rZXlfaWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmtleSA9IG9iamVjdC5rZXkgPz8gbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiUHViS2V5IiwicHJvdG9idWZQYWNrYWdlIiwiY3JlYXRlQmFzZVB1YktleSIsImtleV9pZCIsImtleSIsIlVpbnQ4QXJyYXkiLCJ0eXBlVXJsIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInN0cmluZyIsImxlbmd0aCIsImJ5dGVzIiwiZGVjb2RlIiwiaW5wdXQiLCJyZWFkZXIiLCJCaW5hcnlSZWFkZXIiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0Iiwib2JqIiwiaXNTZXQiLCJTdHJpbmciLCJieXRlc0Zyb21CYXNlNjQiLCJ0b0pTT04iLCJiYXNlNjRGcm9tQnl0ZXMiLCJmcm9tUGFydGlhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUE4QmFBLE1BQU07ZUFBTkE7O0lBckJBQyxlQUFlO2VBQWZBOzs7d0JBUjhCO3lCQUtwQztBQUdBLE1BQU1BLGtCQUFrQjtBQWMvQixTQUFTQztJQUNQLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxLQUFLLElBQUlDO0lBQ1g7QUFDRjtBQUVPLE1BQU1MLFNBQVM7SUFDcEJNLFNBQVM7SUFDVEMsUUFDRUMsT0FBZSxFQUNmQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLElBQUlILFFBQVFMLE1BQU0sS0FBSyxJQUFJO1lBQ3pCTSxPQUFPRyxNQUFNLENBQUMsSUFBSUMsTUFBTSxDQUFDTCxRQUFRTCxNQUFNO1FBQ3pDO1FBRUEsSUFBSUssUUFBUUosR0FBRyxDQUFDVSxNQUFNLEtBQUssR0FBRztZQUM1QkwsT0FBT0csTUFBTSxDQUFDLElBQUlHLEtBQUssQ0FBQ1AsUUFBUUosR0FBRztRQUNyQztRQUNBLE9BQU9LO0lBQ1Q7SUFFQU8sUUFBT0MsS0FBZ0MsRUFBRUgsTUFBZTtRQUN0RCxNQUFNSSxTQUNKRCxpQkFBaUJFLG9CQUFZLEdBQUdGLFFBQVEsSUFBSUUsb0JBQVksQ0FBQ0Y7UUFDM0QsSUFBSUcsTUFBTU4sV0FBV08sWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdUO1FBQzNELE1BQU1OLFVBQVVOO1FBQ2hCLE1BQU9nQixPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT04sTUFBTTtZQUN6QixPQUFRWSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hoQixRQUFRTCxNQUFNLEdBQUdlLE9BQU9MLE1BQU07b0JBQzlCO2dCQUNGLEtBQUs7b0JBQ0hMLFFBQVFKLEdBQUcsR0FBR2MsT0FBT0gsS0FBSztvQkFDMUI7Z0JBRUY7b0JBQ0VHLE9BQU9PLFFBQVEsQ0FBQ0QsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBQ0EsT0FBT2hCO0lBQ1Q7SUFDQWtCLFVBQVNDLE1BQVc7UUFDbEIsTUFBTUMsTUFBTTFCO1FBQ1osSUFBSTJCLElBQUFBLGNBQUssRUFBQ0YsT0FBT3hCLE1BQU0sR0FBR3lCLElBQUl6QixNQUFNLEdBQUcyQixPQUFPSCxPQUFPeEIsTUFBTTtRQUMzRCxJQUFJMEIsSUFBQUEsY0FBSyxFQUFDRixPQUFPdkIsR0FBRyxHQUFHd0IsSUFBSXhCLEdBQUcsR0FBRzJCLElBQUFBLHdCQUFlLEVBQUNKLE9BQU92QixHQUFHO1FBQzNELE9BQU93QjtJQUNUO0lBQ0FJLFFBQU94QixPQUFlO1FBQ3BCLE1BQU1vQixNQUFXLENBQUM7UUFDbEJwQixRQUFRTCxNQUFNLEtBQUtrQixhQUFjTyxDQUFBQSxJQUFJekIsTUFBTSxHQUFHSyxRQUFRTCxNQUFNLEFBQUQ7UUFDM0RLLFFBQVFKLEdBQUcsS0FBS2lCLGFBQ2JPLENBQUFBLElBQUl4QixHQUFHLEdBQUc2QixJQUFBQSx3QkFBZSxFQUN4QnpCLFFBQVFKLEdBQUcsS0FBS2lCLFlBQVliLFFBQVFKLEdBQUcsR0FBRyxJQUFJQyxhQUNoRDtRQUNGLE9BQU91QjtJQUNUO0lBQ0FNLGFBQ0VQLE1BQVM7UUFFVCxNQUFNbkIsVUFBVU47WUFDQ3lCO1FBQWpCbkIsUUFBUUwsTUFBTSxHQUFHd0IsQ0FBQUEsaUJBQUFBLE9BQU94QixNQUFNLGNBQWJ3Qiw0QkFBQUEsaUJBQWlCO1lBQ3BCQTtRQUFkbkIsUUFBUUosR0FBRyxHQUFHdUIsQ0FBQUEsY0FBQUEsT0FBT3ZCLEdBQUcsY0FBVnVCLHlCQUFBQSxjQUFjLElBQUl0QjtRQUNoQyxPQUFPRztJQUNUO0FBQ0YifQ==
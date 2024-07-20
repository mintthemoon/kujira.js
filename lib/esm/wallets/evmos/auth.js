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
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
export const protobufPackage = "cosmos.auth.v1beta1";
const baseEthAccount = {
    code_hash: ""
};
export const EthAccount = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.base_account !== undefined) {
            BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.code_hash !== "") {
            writer.uint32(18).string(message.code_hash);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseEthAccount);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.base_account = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.code_hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseEthAccount);
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = BaseAccount.fromJSON(object.base_account);
        } else {
            message.base_account = undefined;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.code_hash = String(object.code_hash);
        } else {
            message.code_hash = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.base_account !== undefined && (obj.base_account = message.base_account ? BaseAccount.toJSON(message.base_account) : undefined);
        message.code_hash !== undefined && (obj.code_hash = message.code_hash);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseEthAccount);
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = BaseAccount.fromPartial(object.base_account);
        } else {
            message.base_account = undefined;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.code_hash = object.code_hash;
        } else {
            message.code_hash = "";
        }
        return message;
    }
};
const baseParams = {
    max_memo_characters: 0,
    tx_sig_limit: 0,
    tx_size_cost_per_byte: 0,
    sig_verify_cost_ed25519: 0,
    sig_verify_cost_secp256k1: 0
};
export const Params = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.max_memo_characters !== 0) {
            writer.uint32(8).uint64(message.max_memo_characters);
        }
        if (message.tx_sig_limit !== 0) {
            writer.uint32(16).uint64(message.tx_sig_limit);
        }
        if (message.tx_size_cost_per_byte !== 0) {
            writer.uint32(24).uint64(message.tx_size_cost_per_byte);
        }
        if (message.sig_verify_cost_ed25519 !== 0) {
            writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
        }
        if (message.sig_verify_cost_secp256k1 !== 0) {
            writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseParams);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.max_memo_characters = Number(reader.uint64());
                    break;
                case 2:
                    message.tx_sig_limit = Number(reader.uint64());
                    break;
                case 3:
                    message.tx_size_cost_per_byte = Number(reader.uint64());
                    break;
                case 4:
                    message.sig_verify_cost_ed25519 = Number(reader.uint64());
                    break;
                case 5:
                    message.sig_verify_cost_secp256k1 = Number(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseParams);
        if (object.max_memo_characters !== undefined && object.max_memo_characters !== null) {
            message.max_memo_characters = Number(object.max_memo_characters);
        } else {
            message.max_memo_characters = 0;
        }
        if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
            message.tx_sig_limit = Number(object.tx_sig_limit);
        } else {
            message.tx_sig_limit = 0;
        }
        if (object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null) {
            message.tx_size_cost_per_byte = Number(object.tx_size_cost_per_byte);
        } else {
            message.tx_size_cost_per_byte = 0;
        }
        if (object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null) {
            message.sig_verify_cost_ed25519 = Number(object.sig_verify_cost_ed25519);
        } else {
            message.sig_verify_cost_ed25519 = 0;
        }
        if (object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null) {
            message.sig_verify_cost_secp256k1 = Number(object.sig_verify_cost_secp256k1);
        } else {
            message.sig_verify_cost_secp256k1 = 0;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.max_memo_characters !== undefined && (obj.max_memo_characters = message.max_memo_characters);
        message.tx_sig_limit !== undefined && (obj.tx_sig_limit = message.tx_sig_limit);
        message.tx_size_cost_per_byte !== undefined && (obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte);
        message.sig_verify_cost_ed25519 !== undefined && (obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519);
        message.sig_verify_cost_secp256k1 !== undefined && (obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseParams);
        if (object.max_memo_characters !== undefined && object.max_memo_characters !== null) {
            message.max_memo_characters = object.max_memo_characters;
        } else {
            message.max_memo_characters = 0;
        }
        if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
            message.tx_sig_limit = object.tx_sig_limit;
        } else {
            message.tx_sig_limit = 0;
        }
        if (object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null) {
            message.tx_size_cost_per_byte = object.tx_size_cost_per_byte;
        } else {
            message.tx_size_cost_per_byte = 0;
        }
        if (object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null) {
            message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519;
        } else {
            message.sig_verify_cost_ed25519 = 0;
        }
        if (object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null) {
            message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1;
        } else {
            message.sig_verify_cost_secp256k1 = 0;
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93YWxsZXRzL2V2bW9zL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQmFzZUFjY291bnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9hdXRoL3YxYmV0YTEvYXV0aFwiO1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiY29zbW9zLmF1dGgudjFiZXRhMVwiO1xuXG4vKiogRXRoQWNjb3VudCBkZWZpbmVzIGFuIGFjY291bnQgZm9yIG1vZHVsZXMgdGhhdCBob2xkcyBjb2lucyBvbiBhIHBvb2wuICovXG5leHBvcnQgaW50ZXJmYWNlIEV0aEFjY291bnQge1xuICBiYXNlX2FjY291bnQ6IEJhc2VBY2NvdW50IHwgdW5kZWZpbmVkO1xuICBjb2RlX2hhc2g6IHN0cmluZztcbn1cblxuLyoqIFBhcmFtcyBkZWZpbmVzIHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgYXV0aCBtb2R1bGUuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XG4gIG1heF9tZW1vX2NoYXJhY3RlcnM6IG51bWJlcjtcbiAgdHhfc2lnX2xpbWl0OiBudW1iZXI7XG4gIHR4X3NpemVfY29zdF9wZXJfYnl0ZTogbnVtYmVyO1xuICBzaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOTogbnVtYmVyO1xuICBzaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxOiBudW1iZXI7XG59XG5cbmNvbnN0IGJhc2VFdGhBY2NvdW50OiBvYmplY3QgPSB7IGNvZGVfaGFzaDogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgRXRoQWNjb3VudCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV0aEFjY291bnQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5iYXNlX2FjY291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgQmFzZUFjY291bnQuZW5jb2RlKFxuICAgICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5jb2RlX2hhc2ggIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmNvZGVfaGFzaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VFdGhBY2NvdW50IH0gYXMgRXRoQWNjb3VudDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYmFzZV9hY2NvdW50ID0gQmFzZUFjY291bnQuZGVjb2RlKFxuICAgICAgICAgICAgcmVhZGVyLFxuICAgICAgICAgICAgcmVhZGVyLnVpbnQzMigpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29kZV9oYXNoID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRXRoQWNjb3VudCB9IGFzIEV0aEFjY291bnQ7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmJhc2VfYWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYmFzZV9hY2NvdW50ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IEJhc2VBY2NvdW50LmZyb21KU09OKFxuICAgICAgICBvYmplY3QuYmFzZV9hY2NvdW50XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb2RlX2hhc2ggIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY29kZV9oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmNvZGVfaGFzaCA9IFN0cmluZyhvYmplY3QuY29kZV9oYXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5jb2RlX2hhc2ggPSBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdGhBY2NvdW50KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhc2VfYWNjb3VudCA9IG1lc3NhZ2UuYmFzZV9hY2NvdW50XG4gICAgICAgID8gQmFzZUFjY291bnQudG9KU09OKG1lc3NhZ2UuYmFzZV9hY2NvdW50KVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5jb2RlX2hhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5jb2RlX2hhc2ggPSBtZXNzYWdlLmNvZGVfaGFzaCk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8RXRoQWNjb3VudD4pOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRXRoQWNjb3VudCB9IGFzIEV0aEFjY291bnQ7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmJhc2VfYWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYmFzZV9hY2NvdW50ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IEJhc2VBY2NvdW50LmZyb21QYXJ0aWFsKFxuICAgICAgICBvYmplY3QuYmFzZV9hY2NvdW50XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb2RlX2hhc2ggIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY29kZV9oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmNvZGVfaGFzaCA9IG9iamVjdC5jb2RlX2hhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29kZV9oYXNoID0gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VQYXJhbXM6IG9iamVjdCA9IHtcbiAgbWF4X21lbW9fY2hhcmFjdGVyczogMCxcbiAgdHhfc2lnX2xpbWl0OiAwLFxuICB0eF9zaXplX2Nvc3RfcGVyX2J5dGU6IDAsXG4gIHNpZ192ZXJpZnlfY29zdF9lZDI1NTE5OiAwLFxuICBzaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhcmFtcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFBhcmFtcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UubWF4X21lbW9fY2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR4X3NpZ19saW1pdCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigxNikudWludDY0KG1lc3NhZ2UudHhfc2lnX2xpbWl0KTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI0KS51aW50NjQobWVzc2FnZS50eF9zaXplX2Nvc3RfcGVyX2J5dGUpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzMikudWludDY0KG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X2VkMjU1MTkpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQwKS51aW50NjQobWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFBhcmFtcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBhcmFtcyB9IGFzIFBhcmFtcztcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubWF4X21lbW9fY2hhcmFjdGVycyA9IE51bWJlcihyZWFkZXIudWludDY0KCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS50eF9zaWdfbGltaXQgPSBOdW1iZXIocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gTnVtYmVyKHJlYWRlci51aW50NjQoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ID0gTnVtYmVyKHJlYWRlci51aW50NjQoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgPSBOdW1iZXIocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUGFyYW1zIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGFyYW1zIH0gYXMgUGFyYW1zO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgPSBOdW1iZXIoXG4gICAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgPSAwO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QudHhfc2lnX2xpbWl0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC50eF9zaWdfbGltaXQgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudHhfc2lnX2xpbWl0ID0gTnVtYmVyKG9iamVjdC50eF9zaWdfbGltaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnR4X3NpZ19saW1pdCA9IDA7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC50eF9zaXplX2Nvc3RfcGVyX2J5dGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LnR4X3NpemVfY29zdF9wZXJfYnl0ZSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS50eF9zaXplX2Nvc3RfcGVyX2J5dGUgPSBOdW1iZXIoXG4gICAgICAgIG9iamVjdC50eF9zaXplX2Nvc3RfcGVyX2J5dGVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9IE51bWJlcihcbiAgICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSA9IE51bWJlcihcbiAgICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azFcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBQYXJhbXMpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWF4X21lbW9fY2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm1heF9tZW1vX2NoYXJhY3RlcnMgPSBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMpO1xuICAgIG1lc3NhZ2UudHhfc2lnX2xpbWl0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudHhfc2lnX2xpbWl0ID0gbWVzc2FnZS50eF9zaWdfbGltaXQpO1xuICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gbWVzc2FnZS50eF9zaXplX2Nvc3RfcGVyX2J5dGUpO1xuICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X2VkMjU1MTkgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9IG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X2VkMjU1MTkpO1xuICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgPVxuICAgICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxQYXJhbXM+KTogUGFyYW1zIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGFyYW1zIH0gYXMgUGFyYW1zO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgPSBvYmplY3QubWF4X21lbW9fY2hhcmFjdGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5tYXhfbWVtb19jaGFyYWN0ZXJzID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnR4X3NpZ19saW1pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudHhfc2lnX2xpbWl0ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnR4X3NpZ19saW1pdCA9IG9iamVjdC50eF9zaWdfbGltaXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudHhfc2lnX2xpbWl0ID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnR4X3NpemVfY29zdF9wZXJfYnl0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudHhfc2l6ZV9jb3N0X3Blcl9ieXRlICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnR4X3NpemVfY29zdF9wZXJfYnl0ZSA9IG9iamVjdC50eF9zaXplX2Nvc3RfcGVyX2J5dGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9XG4gICAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9IDA7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgPVxuICAgICAgICBvYmplY3Quc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJpbmFyeVJlYWRlciIsIkJpbmFyeVdyaXRlciIsIkJhc2VBY2NvdW50IiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZUV0aEFjY291bnQiLCJjb2RlX2hhc2giLCJFdGhBY2NvdW50IiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsImNyZWF0ZSIsImJhc2VfYWNjb3VudCIsInVuZGVmaW5lZCIsInVpbnQzMiIsImZvcmsiLCJsZGVsaW0iLCJzdHJpbmciLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJlbmQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwiZnJvbVBhcnRpYWwiLCJiYXNlUGFyYW1zIiwibWF4X21lbW9fY2hhcmFjdGVycyIsInR4X3NpZ19saW1pdCIsInR4X3NpemVfY29zdF9wZXJfYnl0ZSIsInNpZ192ZXJpZnlfY29zdF9lZDI1NTE5Iiwic2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSIsIlBhcmFtcyIsInVpbnQ2NCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUNqRSxTQUFTQyxXQUFXLFFBQVEsd0NBQXdDO0FBR3BFLE9BQU8sTUFBTUMsa0JBQWtCLHNCQUFzQjtBQWlCckQsTUFBTUMsaUJBQXlCO0lBQUVDLFdBQVc7QUFBRztBQUUvQyxPQUFPLE1BQU1DLGFBQWE7SUFDeEJDLFFBQ0VDLE9BQW1CLEVBQ25CQyxTQUF1QlIsYUFBYVMsTUFBTSxFQUFFO1FBRTVDLElBQUlGLFFBQVFHLFlBQVksS0FBS0MsV0FBVztZQUN0Q1YsWUFBWUssTUFBTSxDQUNoQkMsUUFBUUcsWUFBWSxFQUNwQkYsT0FBT0ksTUFBTSxDQUFDLElBQUlDLElBQUksSUFDdEJDLE1BQU07UUFDVjtRQUNBLElBQUlQLFFBQVFILFNBQVMsS0FBSyxJQUFJO1lBQzVCSSxPQUFPSSxNQUFNLENBQUMsSUFBSUcsTUFBTSxDQUFDUixRQUFRSCxTQUFTO1FBQzVDO1FB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
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
    Params: function() {
        return Params;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _auth = require("cosmjs-types/cosmos/auth/v1beta1/auth");
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
const protobufPackage = "cosmos.auth.v1beta1";
const baseEthAccount = {
    code_hash: ""
};
const EthAccount = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.base_account !== undefined) {
            _auth.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.code_hash !== "") {
            writer.uint32(18).string(message.code_hash);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseEthAccount);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.base_account = _auth.BaseAccount.decode(reader, reader.uint32());
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
            message.base_account = _auth.BaseAccount.fromJSON(object.base_account);
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
        message.base_account !== undefined && (obj.base_account = message.base_account ? _auth.BaseAccount.toJSON(message.base_account) : undefined);
        message.code_hash !== undefined && (obj.code_hash = message.code_hash);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseEthAccount);
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = _auth.BaseAccount.fromPartial(object.base_account);
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
const Params = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93YWxsZXRzL2V2bW9zL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQmFzZUFjY291bnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9hdXRoL3YxYmV0YTEvYXV0aFwiO1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2hlbHBlcnNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiY29zbW9zLmF1dGgudjFiZXRhMVwiO1xuXG4vKiogRXRoQWNjb3VudCBkZWZpbmVzIGFuIGFjY291bnQgZm9yIG1vZHVsZXMgdGhhdCBob2xkcyBjb2lucyBvbiBhIHBvb2wuICovXG5leHBvcnQgaW50ZXJmYWNlIEV0aEFjY291bnQge1xuICBiYXNlX2FjY291bnQ6IEJhc2VBY2NvdW50IHwgdW5kZWZpbmVkO1xuICBjb2RlX2hhc2g6IHN0cmluZztcbn1cblxuLyoqIFBhcmFtcyBkZWZpbmVzIHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgYXV0aCBtb2R1bGUuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XG4gIG1heF9tZW1vX2NoYXJhY3RlcnM6IG51bWJlcjtcbiAgdHhfc2lnX2xpbWl0OiBudW1iZXI7XG4gIHR4X3NpemVfY29zdF9wZXJfYnl0ZTogbnVtYmVyO1xuICBzaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOTogbnVtYmVyO1xuICBzaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxOiBudW1iZXI7XG59XG5cbmNvbnN0IGJhc2VFdGhBY2NvdW50OiBvYmplY3QgPSB7IGNvZGVfaGFzaDogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgRXRoQWNjb3VudCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV0aEFjY291bnQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5iYXNlX2FjY291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgQmFzZUFjY291bnQuZW5jb2RlKFxuICAgICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5jb2RlX2hhc2ggIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmNvZGVfaGFzaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV0aEFjY291bnQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VFdGhBY2NvdW50IH0gYXMgRXRoQWNjb3VudDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYmFzZV9hY2NvdW50ID0gQmFzZUFjY291bnQuZGVjb2RlKFxuICAgICAgICAgICAgcmVhZGVyLFxuICAgICAgICAgICAgcmVhZGVyLnVpbnQzMigpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29kZV9oYXNoID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRXRoQWNjb3VudCB9IGFzIEV0aEFjY291bnQ7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmJhc2VfYWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYmFzZV9hY2NvdW50ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IEJhc2VBY2NvdW50LmZyb21KU09OKFxuICAgICAgICBvYmplY3QuYmFzZV9hY2NvdW50XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb2RlX2hhc2ggIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY29kZV9oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmNvZGVfaGFzaCA9IFN0cmluZyhvYmplY3QuY29kZV9oYXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5jb2RlX2hhc2ggPSBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdGhBY2NvdW50KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhc2VfYWNjb3VudCA9IG1lc3NhZ2UuYmFzZV9hY2NvdW50XG4gICAgICAgID8gQmFzZUFjY291bnQudG9KU09OKG1lc3NhZ2UuYmFzZV9hY2NvdW50KVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5jb2RlX2hhc2ggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5jb2RlX2hhc2ggPSBtZXNzYWdlLmNvZGVfaGFzaCk7XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8RXRoQWNjb3VudD4pOiBFdGhBY2NvdW50IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRXRoQWNjb3VudCB9IGFzIEV0aEFjY291bnQ7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmJhc2VfYWNjb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYmFzZV9hY2NvdW50ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IEJhc2VBY2NvdW50LmZyb21QYXJ0aWFsKFxuICAgICAgICBvYmplY3QuYmFzZV9hY2NvdW50XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmJhc2VfYWNjb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb2RlX2hhc2ggIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY29kZV9oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmNvZGVfaGFzaCA9IG9iamVjdC5jb2RlX2hhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29kZV9oYXNoID0gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VQYXJhbXM6IG9iamVjdCA9IHtcbiAgbWF4X21lbW9fY2hhcmFjdGVyczogMCxcbiAgdHhfc2lnX2xpbWl0OiAwLFxuICB0eF9zaXplX2Nvc3RfcGVyX2J5dGU6IDAsXG4gIHNpZ192ZXJpZnlfY29zdF9lZDI1NTE5OiAwLFxuICBzaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhcmFtcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFBhcmFtcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UubWF4X21lbW9fY2hhcmFjdGVycyk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnR4X3NpZ19saW1pdCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigxNikudWludDY0KG1lc3NhZ2UudHhfc2lnX2xpbWl0KTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI0KS51aW50NjQobWVzc2FnZS50eF9zaXplX2Nvc3RfcGVyX2J5dGUpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzMikudWludDY0KG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X2VkMjU1MTkpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQwKS51aW50NjQobWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFBhcmFtcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBhcmFtcyB9IGFzIFBhcmFtcztcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubWF4X21lbW9fY2hhcmFjdGVycyA9IE51bWJlcihyZWFkZXIudWludDY0KCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS50eF9zaWdfbGltaXQgPSBOdW1iZXIocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gTnVtYmVyKHJlYWRlci51aW50NjQoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ID0gTnVtYmVyKHJlYWRlci51aW50NjQoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgPSBOdW1iZXIocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUGFyYW1zIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGFyYW1zIH0gYXMgUGFyYW1zO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgPSBOdW1iZXIoXG4gICAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgPSAwO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QudHhfc2lnX2xpbWl0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC50eF9zaWdfbGltaXQgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudHhfc2lnX2xpbWl0ID0gTnVtYmVyKG9iamVjdC50eF9zaWdfbGltaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnR4X3NpZ19saW1pdCA9IDA7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC50eF9zaXplX2Nvc3RfcGVyX2J5dGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LnR4X3NpemVfY29zdF9wZXJfYnl0ZSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS50eF9zaXplX2Nvc3RfcGVyX2J5dGUgPSBOdW1iZXIoXG4gICAgICAgIG9iamVjdC50eF9zaXplX2Nvc3RfcGVyX2J5dGVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9IE51bWJlcihcbiAgICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSA9IE51bWJlcihcbiAgICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azFcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBQYXJhbXMpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWF4X21lbW9fY2hhcmFjdGVycyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm1heF9tZW1vX2NoYXJhY3RlcnMgPSBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMpO1xuICAgIG1lc3NhZ2UudHhfc2lnX2xpbWl0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudHhfc2lnX2xpbWl0ID0gbWVzc2FnZS50eF9zaWdfbGltaXQpO1xuICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gbWVzc2FnZS50eF9zaXplX2Nvc3RfcGVyX2J5dGUpO1xuICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X2VkMjU1MTkgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9IG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X2VkMjU1MTkpO1xuICAgIG1lc3NhZ2Uuc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgPVxuICAgICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxQYXJhbXM+KTogUGFyYW1zIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGFyYW1zIH0gYXMgUGFyYW1zO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5tYXhfbWVtb19jaGFyYWN0ZXJzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLm1heF9tZW1vX2NoYXJhY3RlcnMgPSBvYmplY3QubWF4X21lbW9fY2hhcmFjdGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5tYXhfbWVtb19jaGFyYWN0ZXJzID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnR4X3NpZ19saW1pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudHhfc2lnX2xpbWl0ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnR4X3NpZ19saW1pdCA9IG9iamVjdC50eF9zaWdfbGltaXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudHhfc2lnX2xpbWl0ID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnR4X3NpemVfY29zdF9wZXJfYnl0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudHhfc2l6ZV9jb3N0X3Blcl9ieXRlICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnR4X3NpemVfY29zdF9wZXJfYnl0ZSA9IG9iamVjdC50eF9zaXplX2Nvc3RfcGVyX2J5dGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudHhfc2l6ZV9jb3N0X3Blcl9ieXRlID0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LnNpZ192ZXJpZnlfY29zdF9lZDI1NTE5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9XG4gICAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3RfZWQyNTUxOSA9IDA7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnNpZ192ZXJpZnlfY29zdF9zZWNwMjU2azEgPVxuICAgICAgICBvYmplY3Quc2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zaWdfdmVyaWZ5X2Nvc3Rfc2VjcDI1NmsxID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkV0aEFjY291bnQiLCJQYXJhbXMiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlRXRoQWNjb3VudCIsImNvZGVfaGFzaCIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJjcmVhdGUiLCJiYXNlX2FjY291bnQiLCJ1bmRlZmluZWQiLCJCYXNlQWNjb3VudCIsInVpbnQzMiIsImZvcmsiLCJsZGVsaW0iLCJzdHJpbmciLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJCaW5hcnlSZWFkZXIiLCJlbmQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwiZnJvbVBhcnRpYWwiLCJiYXNlUGFyYW1zIiwibWF4X21lbW9fY2hhcmFjdGVycyIsInR4X3NpZ19saW1pdCIsInR4X3NpemVfY29zdF9wZXJfYnl0ZSIsInNpZ192ZXJpZnlfY29zdF9lZDI1NTE5Iiwic2lnX3ZlcmlmeV9jb3N0X3NlY3AyNTZrMSIsInVpbnQ2NCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUF1QmFBLFVBQVU7ZUFBVkE7O0lBNkdBQyxNQUFNO2VBQU5BOztJQWhJQUMsZUFBZTtlQUFmQTs7O3dCQUo4QjtzQkFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHckIsTUFBTUEsa0JBQWtCO0FBaUIvQixNQUFNQyxpQkFBeUI7SUFBRUMsV0FBVztBQUFHO0FBRXhDLE1BQU1KLGFBQWE7SUFDeEJLLFFBQ0VDLE9BQW1CLEVBQ25CQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLElBQUlILFFBQVFJLFlBQVksS0FBS0MsV0FBVztZQUN0Q0MsaUJBQVcsQ0FBQ1AsTUFBTSxDQUNoQkMsUUFBUUksWUFBWSxFQUNwQkgsT0FBT00sTUFBTSxDQUFDLElBQUlDLElBQUksSUFDdEJDLE1BQU07UUFDVjtRQUNBLElBQUlULFFBQVFGLFNBQVMsS0FBSyxJQUFJO1lBQzVCRyxPQUFPTSxNQUFNLENBQUMsSUFBSUcsTUFBTSxDQUFDVixRQUFRRixTQUFT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
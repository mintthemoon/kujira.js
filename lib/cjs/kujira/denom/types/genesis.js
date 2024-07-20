/* eslint-disable */ "use strict";
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
    GenesisDenom: function() {
        return GenesisDenom;
    },
    GenesisState: function() {
        return GenesisState;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _authorityMetadata = require("./authorityMetadata");
const _params = require("./params");
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
const protobufPackage = "kujira.denom";
const baseGenesisState = {};
const GenesisState = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.params !== undefined) {
            _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factory_denoms){
            GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseGenesisState);
        message.factory_denoms = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = _params.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.factory_denoms.push(GenesisDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseGenesisState);
        message.factory_denoms = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = _params.Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        if (object.factory_denoms !== undefined && object.factory_denoms !== null) {
            for (const e of object.factory_denoms){
                message.factory_denoms.push(GenesisDenom.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? _params.Params.toJSON(message.params) : undefined);
        if (message.factory_denoms) {
            obj.factory_denoms = message.factory_denoms.map((e)=>e ? GenesisDenom.toJSON(e) : undefined);
        } else {
            obj.factory_denoms = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseGenesisState);
        message.factory_denoms = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = _params.Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        if (object.factory_denoms !== undefined && object.factory_denoms !== null) {
            for (const e of object.factory_denoms){
                message.factory_denoms.push(GenesisDenom.fromPartial(e));
            }
        }
        return message;
    }
};
const baseGenesisDenom = {
    denom: ""
};
const GenesisDenom = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authority_metadata !== undefined) {
            _authorityMetadata.DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseGenesisDenom);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authority_metadata = _authorityMetadata.DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseGenesisDenom);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = "";
        }
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authority_metadata = _authorityMetadata.DenomAuthorityMetadata.fromJSON(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? _authorityMetadata.DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseGenesisDenom);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = "";
        }
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authority_metadata = _authorityMetadata.DenomAuthorityMetadata.fromPartial(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvZ2VuZXNpcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBEZW5vbUF1dGhvcml0eU1ldGFkYXRhIH0gZnJvbSBcIi4vYXV0aG9yaXR5TWV0YWRhdGFcIjtcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gXCIuL3BhcmFtc1wiO1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmRlbm9tXCI7XG5cbi8qKiBHZW5lc2lzU3RhdGUgZGVmaW5lcyB0aGUgZGVub20gbW9kdWxlJ3MgZ2VuZXNpcyBzdGF0ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc1N0YXRlIHtcbiAgLyoqIHBhcmFtcyBkZWZpbmVzIHRoZSBwYXJhbWF0ZXJzIG9mIHRoZSBtb2R1bGUuICovXG4gIHBhcmFtczogUGFyYW1zIHwgdW5kZWZpbmVkO1xuICBmYWN0b3J5X2Rlbm9tczogR2VuZXNpc0Rlbm9tW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc0Rlbm9tIHtcbiAgZGVub206IHN0cmluZztcbiAgYXV0aG9yaXR5X21ldGFkYXRhOiBEZW5vbUF1dGhvcml0eU1ldGFkYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBiYXNlR2VuZXNpc1N0YXRlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IEdlbmVzaXNTdGF0ZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEdlbmVzaXNTdGF0ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYXJhbXMuZW5jb2RlKG1lc3NhZ2UucGFyYW1zLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcykge1xuICAgICAgR2VuZXNpc0Rlbm9tLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmZhY3RvcnlfZGVub21zID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcy5wdXNoKFxuICAgICAgICAgICAgR2VuZXNpc0Rlbm9tLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBHZW5lc2lzU3RhdGUge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VHZW5lc2lzU3RhdGUgfSBhcyBHZW5lc2lzU3RhdGU7XG4gICAgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcyA9IFtdO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbUpTT04ob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZhY3RvcnlfZGVub21zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZhY3RvcnlfZGVub21zICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmZhY3RvcnlfZGVub21zKSB7XG4gICAgICAgIG1lc3NhZ2UuZmFjdG9yeV9kZW5vbXMucHVzaChHZW5lc2lzRGVub20uZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2VuZXNpc1N0YXRlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnBhcmFtcyA9IG1lc3NhZ2UucGFyYW1zID8gUGFyYW1zLnRvSlNPTihtZXNzYWdlLnBhcmFtcykgOiB1bmRlZmluZWQpO1xuICAgIGlmIChtZXNzYWdlLmZhY3RvcnlfZGVub21zKSB7XG4gICAgICBvYmouZmFjdG9yeV9kZW5vbXMgPSBtZXNzYWdlLmZhY3RvcnlfZGVub21zLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEdlbmVzaXNEZW5vbS50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mYWN0b3J5X2Rlbm9tcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8R2VuZXNpc1N0YXRlPik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmZhY3RvcnlfZGVub21zID0gW107XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZmFjdG9yeV9kZW5vbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmFjdG9yeV9kZW5vbXMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZmFjdG9yeV9kZW5vbXMpIHtcbiAgICAgICAgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcy5wdXNoKEdlbmVzaXNEZW5vbS5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZUdlbmVzaXNEZW5vbTogb2JqZWN0ID0geyBkZW5vbTogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgR2VuZXNpc0Rlbm9tID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogR2VuZXNpc0Rlbm9tLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZGVub20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmRlbm9tKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIERlbm9tQXV0aG9yaXR5TWV0YWRhdGEuZW5jb2RlKFxuICAgICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogR2VuZXNpc0Rlbm9tIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc0Rlbm9tIH0gYXMgR2VuZXNpc0Rlbm9tO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gRGVub21BdXRob3JpdHlNZXRhZGF0YS5kZWNvZGUoXG4gICAgICAgICAgICByZWFkZXIsXG4gICAgICAgICAgICByZWFkZXIudWludDMyKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBHZW5lc2lzRGVub20ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VHZW5lc2lzRGVub20gfSBhcyBHZW5lc2lzRGVub207XG4gICAgaWYgKG9iamVjdC5kZW5vbSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZW5vbSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZW5vbSA9IFN0cmluZyhvYmplY3QuZGVub20pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSA9IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEuZnJvbUpTT04oXG4gICAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGFcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2VuZXNpc0Rlbm9tKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmRlbm9tICE9PSB1bmRlZmluZWQgJiYgKG9iai5kZW5vbSA9IG1lc3NhZ2UuZGVub20pO1xuICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYXV0aG9yaXR5X21ldGFkYXRhID0gbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGFcbiAgICAgICAgPyBEZW5vbUF1dGhvcml0eU1ldGFkYXRhLnRvSlNPTihtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSlcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxHZW5lc2lzRGVub20+KTogR2VuZXNpc0Rlbm9tIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc0Rlbm9tIH0gYXMgR2VuZXNpc0Rlbm9tO1xuICAgIGlmIChvYmplY3QuZGVub20gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVub20gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBvYmplY3QuZGVub207XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGEgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gRGVub21BdXRob3JpdHlNZXRhZGF0YS5mcm9tUGFydGlhbChcbiAgICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJHZW5lc2lzRGVub20iLCJHZW5lc2lzU3RhdGUiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlR2VuZXNpc1N0YXRlIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInBhcmFtcyIsInVuZGVmaW5lZCIsIlBhcmFtcyIsInVpbnQzMiIsImZvcmsiLCJsZGVsaW0iLCJ2IiwiZmFjdG9yeV9kZW5vbXMiLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJCaW5hcnlSZWFkZXIiLCJlbmQiLCJsZW4iLCJwb3MiLCJ0YWciLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsImUiLCJ0b0pTT04iLCJvYmoiLCJtYXAiLCJmcm9tUGFydGlhbCIsImJhc2VHZW5lc2lzRGVub20iLCJkZW5vbSIsInN0cmluZyIsImF1dGhvcml0eV9tZXRhZGF0YSIsIkRlbm9tQXV0aG9yaXR5TWV0YWRhdGEiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7Ozs7Ozs7Ozs7SUE2R0xBLFlBQVk7ZUFBWkE7O0lBeEZBQyxZQUFZO2VBQVpBOztJQWhCQUMsZUFBZTtlQUFmQTs7O3dCQUg4QjttQ0FDSjt3QkFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2hCLE1BQU1BLGtCQUFrQjtBQWMvQixNQUFNQyxtQkFBMkIsQ0FBQztBQUUzQixNQUFNRixlQUFlO0lBQzFCRyxRQUNFQyxPQUFxQixFQUNyQkMsU0FBdUJDLG9CQUFZLENBQUNDLE1BQU0sRUFBRTtRQUU1QyxJQUFJSCxRQUFRSSxNQUFNLEtBQUtDLFdBQVc7WUFDaENDLGNBQU0sQ0FBQ1AsTUFBTSxDQUFDQyxRQUFRSSxNQUFNLEVBQUVILE9BQU9NLE1BQU0sQ0FBQyxJQUFJQyxJQUFJLElBQUlDLE1BQU07UUFDaEU7UUFD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
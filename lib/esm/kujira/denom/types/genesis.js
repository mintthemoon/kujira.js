/* eslint-disable */ function _define_property(obj, key, value) {
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
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { Params } from "./params";
export const protobufPackage = "kujira.denom";
const baseGenesisState = {};
export const GenesisState = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factory_denoms){
            GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseGenesisState);
        message.factory_denoms = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            message.params = Params.fromJSON(object.params);
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
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
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
            message.params = Params.fromPartial(object.params);
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
export const GenesisDenom = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authority_metadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseGenesisDenom);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
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
            message.authority_metadata = DenomAuthorityMetadata.fromJSON(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
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
            message.authority_metadata = DenomAuthorityMetadata.fromPartial(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvZ2VuZXNpcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBEZW5vbUF1dGhvcml0eU1ldGFkYXRhIH0gZnJvbSBcIi4vYXV0aG9yaXR5TWV0YWRhdGFcIjtcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gXCIuL3BhcmFtc1wiO1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmRlbm9tXCI7XG5cbi8qKiBHZW5lc2lzU3RhdGUgZGVmaW5lcyB0aGUgZGVub20gbW9kdWxlJ3MgZ2VuZXNpcyBzdGF0ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc1N0YXRlIHtcbiAgLyoqIHBhcmFtcyBkZWZpbmVzIHRoZSBwYXJhbWF0ZXJzIG9mIHRoZSBtb2R1bGUuICovXG4gIHBhcmFtczogUGFyYW1zIHwgdW5kZWZpbmVkO1xuICBmYWN0b3J5X2Rlbm9tczogR2VuZXNpc0Rlbm9tW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc0Rlbm9tIHtcbiAgZGVub206IHN0cmluZztcbiAgYXV0aG9yaXR5X21ldGFkYXRhOiBEZW5vbUF1dGhvcml0eU1ldGFkYXRhIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBiYXNlR2VuZXNpc1N0YXRlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IEdlbmVzaXNTdGF0ZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEdlbmVzaXNTdGF0ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYXJhbXMuZW5jb2RlKG1lc3NhZ2UucGFyYW1zLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcykge1xuICAgICAgR2VuZXNpc0Rlbm9tLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmZhY3RvcnlfZGVub21zID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcy5wdXNoKFxuICAgICAgICAgICAgR2VuZXNpc0Rlbm9tLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBHZW5lc2lzU3RhdGUge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VHZW5lc2lzU3RhdGUgfSBhcyBHZW5lc2lzU3RhdGU7XG4gICAgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcyA9IFtdO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbUpTT04ob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZhY3RvcnlfZGVub21zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZhY3RvcnlfZGVub21zICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmZhY3RvcnlfZGVub21zKSB7XG4gICAgICAgIG1lc3NhZ2UuZmFjdG9yeV9kZW5vbXMucHVzaChHZW5lc2lzRGVub20uZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2VuZXNpc1N0YXRlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnBhcmFtcyA9IG1lc3NhZ2UucGFyYW1zID8gUGFyYW1zLnRvSlNPTihtZXNzYWdlLnBhcmFtcykgOiB1bmRlZmluZWQpO1xuICAgIGlmIChtZXNzYWdlLmZhY3RvcnlfZGVub21zKSB7XG4gICAgICBvYmouZmFjdG9yeV9kZW5vbXMgPSBtZXNzYWdlLmZhY3RvcnlfZGVub21zLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEdlbmVzaXNEZW5vbS50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mYWN0b3J5X2Rlbm9tcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8R2VuZXNpc1N0YXRlPik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmZhY3RvcnlfZGVub21zID0gW107XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZmFjdG9yeV9kZW5vbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmFjdG9yeV9kZW5vbXMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZmFjdG9yeV9kZW5vbXMpIHtcbiAgICAgICAgbWVzc2FnZS5mYWN0b3J5X2Rlbm9tcy5wdXNoKEdlbmVzaXNEZW5vbS5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZUdlbmVzaXNEZW5vbTogb2JqZWN0ID0geyBkZW5vbTogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgR2VuZXNpc0Rlbm9tID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogR2VuZXNpc0Rlbm9tLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZGVub20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmRlbm9tKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIERlbm9tQXV0aG9yaXR5TWV0YWRhdGEuZW5jb2RlKFxuICAgICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogR2VuZXNpc0Rlbm9tIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc0Rlbm9tIH0gYXMgR2VuZXNpc0Rlbm9tO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gRGVub21BdXRob3JpdHlNZXRhZGF0YS5kZWNvZGUoXG4gICAgICAgICAgICByZWFkZXIsXG4gICAgICAgICAgICByZWFkZXIudWludDMyKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBHZW5lc2lzRGVub20ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VHZW5lc2lzRGVub20gfSBhcyBHZW5lc2lzRGVub207XG4gICAgaWYgKG9iamVjdC5kZW5vbSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZW5vbSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZW5vbSA9IFN0cmluZyhvYmplY3QuZGVub20pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSA9IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEuZnJvbUpTT04oXG4gICAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGFcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2VuZXNpc0Rlbm9tKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmRlbm9tICE9PSB1bmRlZmluZWQgJiYgKG9iai5kZW5vbSA9IG1lc3NhZ2UuZGVub20pO1xuICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYXV0aG9yaXR5X21ldGFkYXRhID0gbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGFcbiAgICAgICAgPyBEZW5vbUF1dGhvcml0eU1ldGFkYXRhLnRvSlNPTihtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSlcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxHZW5lc2lzRGVub20+KTogR2VuZXNpc0Rlbm9tIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc0Rlbm9tIH0gYXMgR2VuZXNpc0Rlbm9tO1xuICAgIGlmIChvYmplY3QuZGVub20gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVub20gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBvYmplY3QuZGVub207XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGEgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gRGVub21BdXRob3JpdHlNZXRhZGF0YS5mcm9tUGFydGlhbChcbiAgICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJEZW5vbUF1dGhvcml0eU1ldGFkYXRhIiwiUGFyYW1zIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZUdlbmVzaXNTdGF0ZSIsIkdlbmVzaXNTdGF0ZSIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJjcmVhdGUiLCJwYXJhbXMiLCJ1bmRlZmluZWQiLCJ1aW50MzIiLCJmb3JrIiwibGRlbGltIiwidiIsImZhY3RvcnlfZGVub21zIiwiR2VuZXNpc0Rlbm9tIiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiZW5kIiwibGVuIiwicG9zIiwidGFnIiwicHVzaCIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJlIiwidG9KU09OIiwib2JqIiwibWFwIiwiZnJvbVBhcnRpYWwiLCJiYXNlR2VuZXNpc0Rlbm9tIiwiZGVub20iLCJzdHJpbmciLCJhdXRob3JpdHlfbWV0YWRhdGEiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixTQUFTQSxZQUFZLEVBQUVDLFlBQVksUUFBUSxzQkFBc0I7QUFDakUsU0FBU0Msc0JBQXNCLFFBQVEsc0JBQXNCO0FBQzdELFNBQVNDLE1BQU0sUUFBUSxXQUFXO0FBQ2xDLE9BQU8sTUFBTUMsa0JBQWtCLGVBQWU7QUFjOUMsTUFBTUMsbUJBQTJCLENBQUM7QUFFbEMsT0FBTyxNQUFNQyxlQUFlO0lBQzFCQyxRQUNFQyxPQUFxQixFQUNyQkMsU0FBdUJSLGFBQWFTLE1BQU0sRUFBRTtRQUU1QyxJQUFJRixRQUFRRyxNQUFNLEtBQUtDLFdBQVc7WUFDaENULE9BQU9JLE1BQU0sQ0FBQ0MsUUFBUUcsTUFBTSxFQUFFRixPQUFPSSxNQUFNLENBQUMsSUFBSUMsSUFBSSxJQUFJQyxN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
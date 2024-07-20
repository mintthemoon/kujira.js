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
import { Hook } from "./hook";
import { Params } from "./params";
export const protobufPackage = "kujira.scheduler";
const baseGenesisState = {
    hookCount: 0
};
export const GenesisState = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.hookList){
            Hook.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.hookCount !== BigInt(0)) {
            writer.uint32(24).uint64(message.hookCount);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseGenesisState);
        message.hookList = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hookList.push(Hook.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.hookCount = reader.uint64();
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
        message.hookList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList){
                message.hookList.push(Hook.fromJSON(e));
            }
        }
        if (object.hookCount !== undefined && object.hookCount !== null) {
            message.hookCount = BigInt(object.hookCount);
        } else {
            message.hookCount = BigInt(0);
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.hookList) {
            obj.hookList = message.hookList.map((e)=>e ? Hook.toJSON(e) : undefined);
        } else {
            obj.hookList = [];
        }
        message.hookCount !== undefined && (obj.hookCount = message.hookCount);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseGenesisState);
        message.hookList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList){
                message.hookList.push(Hook.fromPartial(e));
            }
        }
        if (object.hookCount !== undefined && object.hookCount !== null) {
            message.hookCount = object.hookCount;
        } else {
            message.hookCount = BigInt(0);
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL2dlbmVzaXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBIb29rIH0gZnJvbSBcIi4vaG9va1wiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vcGFyYW1zXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImt1amlyYS5zY2hlZHVsZXJcIjtcblxuLyoqIEdlbmVzaXNTdGF0ZSBkZWZpbmVzIHRoZSBzY2hlZHVsZXIgbW9kdWxlJ3MgZ2VuZXNpcyBzdGF0ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc1N0YXRlIHtcbiAgcGFyYW1zOiBQYXJhbXMgfCB1bmRlZmluZWQ7XG4gIGhvb2tMaXN0OiBIb29rW107XG4gIC8qKiB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZyAjIGdlbmVzaXMvcHJvdG8vc3RhdGUgKi9cbiAgaG9va0NvdW50OiBiaWdpbnQ7XG59XG5cbmNvbnN0IGJhc2VHZW5lc2lzU3RhdGU6IG9iamVjdCA9IHsgaG9va0NvdW50OiAwIH07XG5cbmV4cG9ydCBjb25zdCBHZW5lc2lzU3RhdGUgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBHZW5lc2lzU3RhdGUsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUGFyYW1zLmVuY29kZShtZXNzYWdlLnBhcmFtcywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuaG9va0xpc3QpIHtcbiAgICAgIEhvb2suZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5ob29rQ291bnQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNCkudWludDY0KG1lc3NhZ2UuaG9va0NvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmhvb2tMaXN0ID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5ob29rTGlzdC5wdXNoKEhvb2suZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmhvb2tDb3VudCA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogR2VuZXNpc1N0YXRlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc1N0YXRlIH0gYXMgR2VuZXNpc1N0YXRlO1xuICAgIG1lc3NhZ2UuaG9va0xpc3QgPSBbXTtcbiAgICBpZiAob2JqZWN0LnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYXJhbXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5ob29rTGlzdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ob29rTGlzdCAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5ob29rTGlzdCkge1xuICAgICAgICBtZXNzYWdlLmhvb2tMaXN0LnB1c2goSG9vay5mcm9tSlNPTihlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3QuaG9va0NvdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lmhvb2tDb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5ob29rQ291bnQgPSBCaWdJbnQob2JqZWN0Lmhvb2tDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaG9va0NvdW50ID0gQmlnSW50KDApO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2VuZXNpc1N0YXRlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnBhcmFtcyA9IG1lc3NhZ2UucGFyYW1zID8gUGFyYW1zLnRvSlNPTihtZXNzYWdlLnBhcmFtcykgOiB1bmRlZmluZWQpO1xuICAgIGlmIChtZXNzYWdlLmhvb2tMaXN0KSB7XG4gICAgICBvYmouaG9va0xpc3QgPSBtZXNzYWdlLmhvb2tMaXN0Lm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEhvb2sudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouaG9va0xpc3QgPSBbXTtcbiAgICB9XG4gICAgbWVzc2FnZS5ob29rQ291bnQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmhvb2tDb3VudCA9IG1lc3NhZ2UuaG9va0NvdW50KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8R2VuZXNpc1N0YXRlPik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmhvb2tMaXN0ID0gW107XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChvYmplY3QuaG9va0xpc3QgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaG9va0xpc3QgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuaG9va0xpc3QpIHtcbiAgICAgICAgbWVzc2FnZS5ob29rTGlzdC5wdXNoKEhvb2suZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2JqZWN0Lmhvb2tDb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ob29rQ291bnQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuaG9va0NvdW50ID0gb2JqZWN0Lmhvb2tDb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5ob29rQ291bnQgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJIb29rIiwiUGFyYW1zIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZUdlbmVzaXNTdGF0ZSIsImhvb2tDb3VudCIsIkdlbmVzaXNTdGF0ZSIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJjcmVhdGUiLCJwYXJhbXMiLCJ1bmRlZmluZWQiLCJ1aW50MzIiLCJmb3JrIiwibGRlbGltIiwidiIsImhvb2tMaXN0IiwiQmlnSW50IiwidWludDY0IiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiZW5kIiwibGVuIiwicG9zIiwidGFnIiwicHVzaCIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJlIiwidG9KU09OIiwib2JqIiwibWFwIiwiZnJvbVBhcnRpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxZQUFZLEVBQUVDLFlBQVksUUFBUSxzQkFBc0I7QUFDakUsU0FBU0MsSUFBSSxRQUFRLFNBQVM7QUFDOUIsU0FBU0MsTUFBTSxRQUFRLFdBQVc7QUFFbEMsT0FBTyxNQUFNQyxrQkFBa0IsbUJBQW1CO0FBVWxELE1BQU1DLG1CQUEyQjtJQUFFQyxXQUFXO0FBQUU7QUFFaEQsT0FBTyxNQUFNQyxlQUFlO0lBQzFCQyxRQUNF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
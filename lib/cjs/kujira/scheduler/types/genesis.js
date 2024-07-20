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
    GenesisState: function() {
        return GenesisState;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _hook = require("./hook");
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
const protobufPackage = "kujira.scheduler";
const baseGenesisState = {
    hookCount: 0
};
const GenesisState = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.params !== undefined) {
            _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.hookList){
            _hook.Hook.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.hookCount !== BigInt(0)) {
            writer.uint32(24).uint64(message.hookCount);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseGenesisState);
        message.hookList = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = _params.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.hookList.push(_hook.Hook.decode(reader, reader.uint32()));
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
            message.params = _params.Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList){
                message.hookList.push(_hook.Hook.fromJSON(e));
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
        message.params !== undefined && (obj.params = message.params ? _params.Params.toJSON(message.params) : undefined);
        if (message.hookList) {
            obj.hookList = message.hookList.map((e)=>e ? _hook.Hook.toJSON(e) : undefined);
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
            message.params = _params.Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        if (object.hookList !== undefined && object.hookList !== null) {
            for (const e of object.hookList){
                message.hookList.push(_hook.Hook.fromPartial(e));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL2dlbmVzaXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBIb29rIH0gZnJvbSBcIi4vaG9va1wiO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vcGFyYW1zXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImt1amlyYS5zY2hlZHVsZXJcIjtcblxuLyoqIEdlbmVzaXNTdGF0ZSBkZWZpbmVzIHRoZSBzY2hlZHVsZXIgbW9kdWxlJ3MgZ2VuZXNpcyBzdGF0ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc1N0YXRlIHtcbiAgcGFyYW1zOiBQYXJhbXMgfCB1bmRlZmluZWQ7XG4gIGhvb2tMaXN0OiBIb29rW107XG4gIC8qKiB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZyAjIGdlbmVzaXMvcHJvdG8vc3RhdGUgKi9cbiAgaG9va0NvdW50OiBiaWdpbnQ7XG59XG5cbmNvbnN0IGJhc2VHZW5lc2lzU3RhdGU6IG9iamVjdCA9IHsgaG9va0NvdW50OiAwIH07XG5cbmV4cG9ydCBjb25zdCBHZW5lc2lzU3RhdGUgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBHZW5lc2lzU3RhdGUsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUGFyYW1zLmVuY29kZShtZXNzYWdlLnBhcmFtcywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuaG9va0xpc3QpIHtcbiAgICAgIEhvb2suZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5ob29rQ291bnQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNCkudWludDY0KG1lc3NhZ2UuaG9va0NvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmhvb2tMaXN0ID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5ob29rTGlzdC5wdXNoKEhvb2suZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmhvb2tDb3VudCA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogR2VuZXNpc1N0YXRlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc1N0YXRlIH0gYXMgR2VuZXNpc1N0YXRlO1xuICAgIG1lc3NhZ2UuaG9va0xpc3QgPSBbXTtcbiAgICBpZiAob2JqZWN0LnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYXJhbXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5ob29rTGlzdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ob29rTGlzdCAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5ob29rTGlzdCkge1xuICAgICAgICBtZXNzYWdlLmhvb2tMaXN0LnB1c2goSG9vay5mcm9tSlNPTihlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3QuaG9va0NvdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lmhvb2tDb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5ob29rQ291bnQgPSBCaWdJbnQob2JqZWN0Lmhvb2tDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaG9va0NvdW50ID0gQmlnSW50KDApO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogR2VuZXNpc1N0YXRlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnBhcmFtcyA9IG1lc3NhZ2UucGFyYW1zID8gUGFyYW1zLnRvSlNPTihtZXNzYWdlLnBhcmFtcykgOiB1bmRlZmluZWQpO1xuICAgIGlmIChtZXNzYWdlLmhvb2tMaXN0KSB7XG4gICAgICBvYmouaG9va0xpc3QgPSBtZXNzYWdlLmhvb2tMaXN0Lm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEhvb2sudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouaG9va0xpc3QgPSBbXTtcbiAgICB9XG4gICAgbWVzc2FnZS5ob29rQ291bnQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmhvb2tDb3VudCA9IG1lc3NhZ2UuaG9va0NvdW50KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8R2VuZXNpc1N0YXRlPik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmhvb2tMaXN0ID0gW107XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChvYmplY3QuaG9va0xpc3QgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaG9va0xpc3QgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuaG9va0xpc3QpIHtcbiAgICAgICAgbWVzc2FnZS5ob29rTGlzdC5wdXNoKEhvb2suZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2JqZWN0Lmhvb2tDb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ob29rQ291bnQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuaG9va0NvdW50ID0gb2JqZWN0Lmhvb2tDb3VudDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5ob29rQ291bnQgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJHZW5lc2lzU3RhdGUiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlR2VuZXNpc1N0YXRlIiwiaG9va0NvdW50IiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInBhcmFtcyIsInVuZGVmaW5lZCIsIlBhcmFtcyIsInVpbnQzMiIsImZvcmsiLCJsZGVsaW0iLCJ2IiwiaG9va0xpc3QiLCJIb29rIiwiQmlnSW50IiwidWludDY0IiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwibGVuIiwicG9zIiwidGFnIiwicHVzaCIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJlIiwidG9KU09OIiwib2JqIiwibWFwIiwiZnJvbVBhcnRpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBaUJhQSxZQUFZO2VBQVpBOztJQVpBQyxlQUFlO2VBQWZBOzs7d0JBSjhCO3NCQUN0Qjt3QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsTUFBTUEsa0JBQWtCO0FBVS9CLE1BQU1DLG1CQUEyQjtJQUFFQyxXQUFXO0FBQUU7QUFFekMsTUFBTUgsZUFBZTtJQUMxQkksUUFDRUMsT0FBcUIsRUFDckJDLFNBQXVCQyxvQkFBWSxDQUFDQyxNQUFNLEVB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
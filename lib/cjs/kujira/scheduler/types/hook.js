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
    Hook: function() {
        return Hook;
    },
    base64FromBytes: function() {
        return base64FromBytes;
    },
    bytesFromBase64: function() {
        return bytesFromBase64;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _coin = require("cosmjs-types/cosmos/base/v1beta1/coin");
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
const baseHook = {
    id: 0,
    executor: "",
    contract: "",
    frequency: 0
};
const Hook = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        if (message.frequency !== BigInt(0)) {
            writer.uint32(40).int64(message.frequency);
        }
        for (const v of message.funds){
            _coin.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseHook);
        message.funds = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.executor = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 4:
                    message.msg = reader.bytes();
                    break;
                case 5:
                    message.frequency = reader.int64();
                    break;
                case 6:
                    message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseHook);
        message.funds = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        } else {
            message.id = BigInt(0);
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = String(object.executor);
        } else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        } else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = bytesFromBase64(object.msg);
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = BigInt(object.frequency);
        } else {
            message.frequency = BigInt(0);
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(_coin.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.executor !== undefined && (obj.executor = message.executor);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.frequency !== undefined && (obj.frequency = message.frequency);
        if (message.funds) {
            obj.funds = message.funds.map((e)=>e ? _coin.Coin.toJSON(e) : undefined);
        } else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseHook);
        message.funds = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = BigInt(0);
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = object.executor;
        } else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        } else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        } else {
            message.msg = new Uint8Array();
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = object.frequency;
        } else {
            message.frequency = BigInt(0);
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(_coin.Coin.fromPartial(e));
            }
        }
        return message;
    }
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for(let i = 0; i < bin.length; ++i){
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    } else {
        const bin = [];
        arr.forEach((byte)=>{
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL2hvb2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYmFzZS92MWJldGExL2NvaW5cIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLnNjaGVkdWxlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvb2sge1xuICBpZDogYmlnaW50O1xuICBleGVjdXRvcjogc3RyaW5nO1xuICBjb250cmFjdDogc3RyaW5nO1xuICBtc2c6IFVpbnQ4QXJyYXk7XG4gIGZyZXF1ZW5jeTogYmlnaW50O1xuICBmdW5kczogQ29pbltdO1xufVxuXG5jb25zdCBiYXNlSG9vazogb2JqZWN0ID0geyBpZDogMCwgZXhlY3V0b3I6IFwiXCIsIGNvbnRyYWN0OiBcIlwiLCBmcmVxdWVuY3k6IDAgfTtcblxuZXhwb3J0IGNvbnN0IEhvb2sgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBIb29rLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuaWQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5pZCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmV4ZWN1dG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5leGVjdXRvcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5jb250cmFjdCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm1zZy5sZW5ndGggIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLmJ5dGVzKG1lc3NhZ2UubXNnKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZnJlcXVlbmN5ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDApLmludDY0KG1lc3NhZ2UuZnJlcXVlbmN5KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuZnVuZHMpIHtcbiAgICAgIENvaW4uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDUwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogSG9vayB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUhvb2sgfSBhcyBIb29rO1xuICAgIG1lc3NhZ2UuZnVuZHMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuaWQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5jb250cmFjdCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UubXNnID0gcmVhZGVyLmJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IHJlYWRlci5pbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgbWVzc2FnZS5mdW5kcy5wdXNoKENvaW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEhvb2sge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VIb29rIH0gYXMgSG9vaztcbiAgICBtZXNzYWdlLmZ1bmRzID0gW107XG4gICAgaWYgKG9iamVjdC5pZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5pZCA9IEJpZ0ludChvYmplY3QuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmlkID0gQmlnSW50KDApO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmV4ZWN1dG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4ZWN1dG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gU3RyaW5nKG9iamVjdC5leGVjdXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZXhlY3V0b3IgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNvbnRyYWN0ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmNvbnRyYWN0ID0gU3RyaW5nKG9iamVjdC5jb250cmFjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1zZyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5tc2cgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubXNnID0gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5tc2cpO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mcmVxdWVuY3kgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gQmlnSW50KG9iamVjdC5mcmVxdWVuY3kpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IEJpZ0ludCgwKTtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5mdW5kcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mdW5kcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5mdW5kcykge1xuICAgICAgICBtZXNzYWdlLmZ1bmRzLnB1c2goQ29pbi5mcm9tSlNPTihlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBIb29rKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmlkICE9PSB1bmRlZmluZWQgJiYgKG9iai5pZCA9IG1lc3NhZ2UuaWQpO1xuICAgIG1lc3NhZ2UuZXhlY3V0b3IgIT09IHVuZGVmaW5lZCAmJiAob2JqLmV4ZWN1dG9yID0gbWVzc2FnZS5leGVjdXRvcik7XG4gICAgbWVzc2FnZS5jb250cmFjdCAhPT0gdW5kZWZpbmVkICYmIChvYmouY29udHJhY3QgPSBtZXNzYWdlLmNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLm1zZyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm1zZyA9IGJhc2U2NEZyb21CeXRlcyhcbiAgICAgICAgbWVzc2FnZS5tc2cgIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UubXNnIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgICAgKSk7XG4gICAgbWVzc2FnZS5mcmVxdWVuY3kgIT09IHVuZGVmaW5lZCAmJiAob2JqLmZyZXF1ZW5jeSA9IG1lc3NhZ2UuZnJlcXVlbmN5KTtcbiAgICBpZiAobWVzc2FnZS5mdW5kcykge1xuICAgICAgb2JqLmZ1bmRzID0gbWVzc2FnZS5mdW5kcy5tYXAoKGUpID0+IChlID8gQ29pbi50b0pTT04oZSkgOiB1bmRlZmluZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmZ1bmRzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxIb29rPik6IEhvb2sge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VIb29rIH0gYXMgSG9vaztcbiAgICBtZXNzYWdlLmZ1bmRzID0gW107XG4gICAgaWYgKG9iamVjdC5pZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5pZCA9IG9iamVjdC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5pZCA9IEJpZ0ludCgwKTtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGVjdXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGVjdXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IG9iamVjdC5leGVjdXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuY29udHJhY3QgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY29udHJhY3QgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBvYmplY3QuY29udHJhY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1zZyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5tc2cgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubXNnID0gb2JqZWN0Lm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5tc2cgPSBuZXcgVWludDhBcnJheSgpO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mcmVxdWVuY3kgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gb2JqZWN0LmZyZXF1ZW5jeTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZnVuZHMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZnVuZHMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZnVuZHMpIHtcbiAgICAgICAgbWVzc2FnZS5mdW5kcy5wdXNoKENvaW4uZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBieXRlc0Zyb21CYXNlNjQoYjY0OiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgaWYgKGdsb2JhbFRoaXMuQnVmZmVyKSB7XG4gICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKGI2NCwgXCJiYXNlNjRcIikpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJpbiA9IGdsb2JhbFRoaXMuYXRvYihiNjQpO1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KGJpbi5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluLmxlbmd0aDsgKytpKSB7XG4gICAgICBhcnJbaV0gPSBiaW4uY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0RnJvbUJ5dGVzKGFycjogVWludDhBcnJheSk6IHN0cmluZyB7XG4gIGlmIChnbG9iYWxUaGlzLkJ1ZmZlcikge1xuICAgIHJldHVybiBnbG9iYWxUaGlzLkJ1ZmZlci5mcm9tKGFycikudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYmluOiBzdHJpbmdbXSA9IFtdO1xuICAgIGFyci5mb3JFYWNoKChieXRlKSA9PiB7XG4gICAgICBiaW4ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5idG9hKGJpbi5qb2luKFwiXCIpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhvb2siLCJiYXNlNjRGcm9tQnl0ZXMiLCJieXRlc0Zyb21CYXNlNjQiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlSG9vayIsImlkIiwiZXhlY3V0b3IiLCJjb250cmFjdCIsImZyZXF1ZW5jeSIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJjcmVhdGUiLCJCaWdJbnQiLCJ1aW50MzIiLCJ1aW50NjQiLCJzdHJpbmciLCJtc2ciLCJsZW5ndGgiLCJieXRlcyIsImludDY0IiwidiIsImZ1bmRzIiwiQ29pbiIsImZvcmsiLCJsZGVsaW0iLCJkZWNvZGUiLCJpbnB1dCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJCaW5hcnlSZWFkZXIiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0YWciLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsIlN0cmluZyIsImUiLCJ0b0pTT04iLCJvYmoiLCJtYXAiLCJmcm9tUGFydGlhbCIsImI2NCIsImdsb2JhbFRoaXMiLCJCdWZmZXIiLCJmcm9tIiwiYmluIiwiYXRvYiIsImFyciIsImkiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJmb3JFYWNoIiwiYnl0ZSIsImZyb21DaGFyQ29kZSIsImJ0b2EiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7O0lBbUJMQSxJQUFJO2VBQUpBOztJQW1LR0MsZUFBZTtlQUFmQTs7SUFiQUMsZUFBZTtlQUFmQTs7SUFuS0hDLGVBQWU7ZUFBZkE7Ozt3QkFIOEI7c0JBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLE1BQU1BLGtCQUFrQjtBQVcvQixNQUFNQyxXQUFtQjtJQUFFQyxJQUFJO0lBQUdDLFVBQVU7SUFBSUMsVUFBVTtJQUFJQyxXQUFXO0FBQUU7QUFFcEUsTUFBTVIsT0FBTztJQUNsQlMsUUFDRUMsT0FBYSxFQUNiQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLElBQUlILFFBQVFMLEVBQUUsS0FBS1MsT0FBTyxJQUFJO1lBQzVCSCxPQUFPSSxNQUFNLENBQUMsR0FBR0MsTUFBTSxDQUFDTixRQUFRTCxFQUFFO1FBQ3BDO1FBQ0EsSUFBSUssUUFBUUosUUFBUSxLQUFLLElBQUk7WUFDM0JLLE9BQU9JLE1BQU0sQ0FBQyxJQUFJRSxNQUFNLENBQUNQLFFBQVFKLFFBQVE7UUFDM0M7UUFDQSxJQUFJSSxRQUFRSCxRQUFRLEtBQUssSUFBSTtZQUMzQkksT0FBT0ksTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ1AsUUFBUUgsUUFBUTtRQUMzQztRQUNBLElBQUlHLFFBQVFRLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7WUFDNUJSLE9BQU9JLE1BQU0sQ0FBQyxJQUFJSyxLQUFLLENBQUNWLFFBQVFRLEdBQUc7UUFDckM7UUFDQSxJQUFJUixRQUFRRixT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
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
import { Hook } from "./hook";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { PageRequest, PageResponse } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
export const protobufPackage = "kujira.scheduler";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryParamsRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (_) {
        const message = _object_spread({}, baseQueryParamsRequest);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseQueryParamsRequest);
        return message;
    }
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryParamsResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    }
};
const baseQueryGetHookRequest = {
    id: 0
};
export const QueryGetHookRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryGetHookRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryGetHookRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        } else {
            message.id = 0;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryGetHookRequest);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetHookResponse = {};
export const QueryGetHookResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.Hook !== undefined) {
            Hook.encode(message.Hook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryGetHookResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.Hook = Hook.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryGetHookResponse);
        if (object.Hook !== undefined && object.Hook !== null) {
            message.Hook = Hook.fromJSON(object.Hook);
        } else {
            message.Hook = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.Hook !== undefined && (obj.Hook = message.Hook ? Hook.toJSON(message.Hook) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryGetHookResponse);
        if (object.Hook !== undefined && object.Hook !== null) {
            message.Hook = Hook.fromPartial(object.Hook);
        } else {
            message.Hook = undefined;
        }
        return message;
    }
};
const baseQueryAllHookRequest = {};
export const QueryAllHookRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAllHookRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAllHookRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAllHookRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllHookResponse = {};
export const QueryAllHookResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.Hook){
            Hook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAllHookResponse);
        message.Hook = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.Hook.push(Hook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAllHookResponse);
        message.Hook = [];
        if (object.Hook !== undefined && object.Hook !== null) {
            for (const e of object.Hook){
                message.Hook.push(Hook.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.Hook) {
            obj.Hook = message.Hook.map((e)=>e ? Hook.toJSON(e) : undefined);
        } else {
            obj.Hook = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAllHookResponse);
        message.Hook = [];
        if (object.Hook !== undefined && object.Hook !== null) {
            for (const e of object.Hook){
                message.Hook.push(Hook.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "Params", data);
        return promise.then((data)=>QueryParamsResponse.decode(new BinaryReader(data)));
    }
    Hook(request) {
        const data = QueryGetHookRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "Hook", data);
        return promise.then((data)=>QueryGetHookResponse.decode(new BinaryReader(data)));
    }
    HookAll(request) {
        const data = QueryAllHookRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "HookAll", data);
        return promise.then((data)=>QueryAllHookResponse.decode(new BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL3F1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IEhvb2sgfSBmcm9tIFwiLi9ob29rXCI7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwiLi9wYXJhbXNcIjtcblxuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQge1xuICBQYWdlUmVxdWVzdCxcbiAgUGFnZVJlc3BvbnNlLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvcGFnaW5hdGlvblwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuc2NoZWR1bGVyXCI7XG5cbi8qKiBRdWVyeVBhcmFtc1JlcXVlc3QgaXMgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvUGFyYW1zIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zUmVxdWVzdCB7fVxuXG4vKiogUXVlcnlQYXJhbXNSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGUgUXVlcnkvUGFyYW1zIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAvKiogcGFyYW1zIGhvbGRzIGFsbCB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIG1vZHVsZS4gKi9cbiAgcGFyYW1zOiBQYXJhbXMgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlHZXRIb29rUmVxdWVzdCB7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlHZXRIb29rUmVzcG9uc2Uge1xuICBIb29rOiBIb29rIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWxsSG9va1JlcXVlc3Qge1xuICBwYWdpbmF0aW9uOiBQYWdlUmVxdWVzdCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUFsbEhvb2tSZXNwb25zZSB7XG4gIEhvb2s6IEhvb2tbXTtcbiAgcGFnaW5hdGlvbjogUGFnZVJlc3BvbnNlIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBiYXNlUXVlcnlQYXJhbXNSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGFyYW1zUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBEZWVwUGFydGlhbDxRdWVyeVBhcmFtc1JlcXVlc3Q+KTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IH0gYXMgUXVlcnlQYXJhbXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUGFyYW1zLmVuY29kZShtZXNzYWdlLnBhcmFtcywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYXJhbXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+KTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbVBhcnRpYWwob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0OiBvYmplY3QgPSB7IGlkOiAwIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUdldEhvb2tSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlHZXRIb29rUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmlkICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5R2V0SG9va1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0IH0gYXMgUXVlcnlHZXRIb29rUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuaWQgPSByZWFkZXIudWludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5R2V0SG9va1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0IH0gYXMgUXVlcnlHZXRIb29rUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmlkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmlkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmlkID0gTnVtYmVyKG9iamVjdC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlHZXRIb29rUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5pZCAhPT0gdW5kZWZpbmVkICYmIChvYmouaWQgPSBtZXNzYWdlLmlkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlHZXRIb29rUmVxdWVzdD4pOiBRdWVyeUdldEhvb2tSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlHZXRIb29rUmVxdWVzdCB9IGFzIFF1ZXJ5R2V0SG9va1JlcXVlc3Q7XG4gICAgaWYgKG9iamVjdC5pZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5pZCA9IG9iamVjdC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5pZCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5R2V0SG9va1Jlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5R2V0SG9va1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlHZXRIb29rUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5Ib29rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEhvb2suZW5jb2RlKG1lc3NhZ2UuSG9vaywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5R2V0SG9va1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlHZXRIb29rUmVzcG9uc2UgfSBhcyBRdWVyeUdldEhvb2tSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuSG9vayA9IEhvb2suZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlHZXRIb29rUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXNwb25zZSB9IGFzIFF1ZXJ5R2V0SG9va1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QuSG9vayAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5Ib29rICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLkhvb2sgPSBIb29rLmZyb21KU09OKG9iamVjdC5Ib29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5Ib29rID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlHZXRIb29rUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuSG9vayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLkhvb2sgPSBtZXNzYWdlLkhvb2sgPyBIb29rLnRvSlNPTihtZXNzYWdlLkhvb2spIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlHZXRIb29rUmVzcG9uc2U+KTogUXVlcnlHZXRIb29rUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXNwb25zZSB9IGFzIFF1ZXJ5R2V0SG9va1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QuSG9vayAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5Ib29rICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLkhvb2sgPSBIb29rLmZyb21QYXJ0aWFsKG9iamVjdC5Ib29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5Ib29rID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFsbEhvb2tSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWxsSG9va1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUFsbEhvb2tSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYWdlUmVxdWVzdC5lbmNvZGUobWVzc2FnZS5wYWdpbmF0aW9uLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBbGxIb29rUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1JlcXVlc3QgfSBhcyBRdWVyeUFsbEhvb2tSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wYWdpbmF0aW9uID0gUGFnZVJlcXVlc3QuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBbGxIb29rUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1JlcXVlc3QgfSBhcyBRdWVyeUFsbEhvb2tSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYWdpbmF0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhZ2luYXRpb24gPSBQYWdlUmVxdWVzdC5mcm9tSlNPTihvYmplY3QucGFnaW5hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWxsSG9va1JlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnBhZ2luYXRpb24gPSBtZXNzYWdlLnBhZ2luYXRpb25cbiAgICAgICAgPyBQYWdlUmVxdWVzdC50b0pTT04obWVzc2FnZS5wYWdpbmF0aW9uKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5QWxsSG9va1JlcXVlc3Q+KTogUXVlcnlBbGxIb29rUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1JlcXVlc3QgfSBhcyBRdWVyeUFsbEhvb2tSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYWdpbmF0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhZ2luYXRpb24gPSBQYWdlUmVxdWVzdC5mcm9tUGFydGlhbChvYmplY3QucGFnaW5hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBbGxIb29rUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBbGxIb29rUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUFsbEhvb2tSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLkhvb2spIHtcbiAgICAgIEhvb2suZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFBhZ2VSZXNwb25zZS5lbmNvZGUoXG4gICAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbixcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBbGxIb29rUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFsbEhvb2tSZXNwb25zZSB9IGFzIFF1ZXJ5QWxsSG9va1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuSG9vayA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5Ib29rLnB1c2goSG9vay5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IFBhZ2VSZXNwb25zZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUFsbEhvb2tSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1Jlc3BvbnNlIH0gYXMgUXVlcnlBbGxIb29rUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5Ib29rID0gW107XG4gICAgaWYgKG9iamVjdC5Ib29rICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lkhvb2sgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuSG9vaykge1xuICAgICAgICBtZXNzYWdlLkhvb2sucHVzaChIb29rLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9iamVjdC5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhZ2luYXRpb24gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IFBhZ2VSZXNwb25zZS5mcm9tSlNPTihvYmplY3QucGFnaW5hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWxsSG9va1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5Ib29rKSB7XG4gICAgICBvYmouSG9vayA9IG1lc3NhZ2UuSG9vay5tYXAoKGUpID0+IChlID8gSG9vay50b0pTT04oZSkgOiB1bmRlZmluZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLkhvb2sgPSBbXTtcbiAgICB9XG4gICAgbWVzc2FnZS5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFnaW5hdGlvbiA9IG1lc3NhZ2UucGFnaW5hdGlvblxuICAgICAgICA/IFBhZ2VSZXNwb25zZS50b0pTT04obWVzc2FnZS5wYWdpbmF0aW9uKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5QWxsSG9va1Jlc3BvbnNlPik6IFF1ZXJ5QWxsSG9va1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlBbGxIb29rUmVzcG9uc2UgfSBhcyBRdWVyeUFsbEhvb2tSZXNwb25zZTtcbiAgICBtZXNzYWdlLkhvb2sgPSBbXTtcbiAgICBpZiAob2JqZWN0Lkhvb2sgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuSG9vayAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5Ib29rKSB7XG4gICAgICAgIG1lc3NhZ2UuSG9vay5wdXNoKEhvb2suZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2JqZWN0LnBhZ2luYXRpb24gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFnaW5hdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYWdpbmF0aW9uID0gUGFnZVJlc3BvbnNlLmZyb21QYXJ0aWFsKG9iamVjdC5wYWdpbmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYWdpbmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbi8qKiBRdWVyeSBkZWZpbmVzIHRoZSBnUlBDIHF1ZXJpZXIgc2VydmljZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnkge1xuICAvKiogUGFyYW1ldGVycyBxdWVyaWVzIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBtb2R1bGUuICovXG4gIFBhcmFtcyhyZXF1ZXN0OiBRdWVyeVBhcmFtc1JlcXVlc3QpOiBQcm9taXNlPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+O1xuICAvKiogUXVlcmllcyBhIEhvb2sgYnkgaWQuICovXG4gIEhvb2socmVxdWVzdDogUXVlcnlHZXRIb29rUmVxdWVzdCk6IFByb21pc2U8UXVlcnlHZXRIb29rUmVzcG9uc2U+O1xuICAvKiogUXVlcmllcyBhIGxpc3Qgb2YgSG9vayBpdGVtcy4gKi9cbiAgSG9va0FsbChyZXF1ZXN0OiBRdWVyeUFsbEhvb2tSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUFsbEhvb2tSZXNwb25zZT47XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUNsaWVudEltcGwgaW1wbGVtZW50cyBRdWVyeSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcnBjOiBScGM7XG4gIGNvbnN0cnVjdG9yKHJwYzogUnBjKSB7XG4gICAgdGhpcy5ycGMgPSBycGM7XG4gIH1cbiAgUGFyYW1zKHJlcXVlc3Q6IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBhcmFtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwia3VqaXJhLnNjaGVkdWxlci5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlQYXJhbXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgSG9vayhyZXF1ZXN0OiBRdWVyeUdldEhvb2tSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUdldEhvb2tSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUdldEhvb2tSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5zY2hlZHVsZXIuUXVlcnlcIiwgXCJIb29rXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUdldEhvb2tSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgSG9va0FsbChyZXF1ZXN0OiBRdWVyeUFsbEhvb2tSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUFsbEhvb2tSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUFsbEhvb2tSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5zY2hlZHVsZXIuUXVlcnlcIiwgXCJIb29rQWxsXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUFsbEhvb2tSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBScGMge1xuICByZXF1ZXN0KFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBkYXRhOiBVaW50OEFycmF5XG4gICk6IFByb21pc2U8VWludDhBcnJheT47XG59XG4iXSwibmFtZXMiOlsiSG9vayIsIlBhcmFtcyIsIkJpbmFyeVJlYWRlciIsIkJpbmFyeVdyaXRlciIsIlBhZ2VSZXF1ZXN0IiwiUGFnZVJlc3BvbnNlIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCIsIlF1ZXJ5UGFyYW1zUmVxdWVzdCIsImVuY29kZSIsIl8iLCJ3cml0ZXIiLCJjcmVhdGUiLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJtZXNzYWdlIiwidGFnIiwidWludDMyIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsInRvSlNPTiIsIm9iaiIsImZyb21QYXJ0aWFsIiwiYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UiLCJRdWVyeVBhcmFtc1Jlc3BvbnNlIiwicGFyYW1zIiwiZm9yayIsImxkZWxpbSIsIm9iamVjdCIsImJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0IiwiaWQiLCJRdWVyeUdldEhvb2tSZXF1ZXN0IiwidWludDY0IiwiTnVtYmVyIiwiYmFzZVF1ZXJ5R2V0SG9va1Jlc3BvbnNlIiwiUXVlcnlHZXRIb29rUmVzcG9uc2UiLCJiYXNlUXVlcnlBbGxIb29rUmVxdWVzdCIsIlF1ZXJ5QWxsSG9va1JlcXVlc3QiLCJwYWdpbmF0aW9uIiwiYmFzZVF1ZXJ5QWxsSG9va1Jlc3BvbnNlIiwiUXVlcnlBbGxIb29rUmVzcG9uc2UiLCJ2IiwicHVzaCIsImUiLCJtYXAiLCJRdWVyeUNsaWVudEltcGwiLCJyZXF1ZXN0IiwiZGF0YSIsImZpbmlzaCIsInByb21pc2UiLCJycGMiLCJ0aGVuIiwiSG9va0FsbCIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsU0FBU0EsSUFBSSxRQUFRLFNBQVM7QUFDOUIsU0FBU0MsTUFBTSxRQUFRLFdBQVc7QUFHbEMsU0FBU0MsWUFBWSxFQUFFQyxZQUFZLFFBQVEs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
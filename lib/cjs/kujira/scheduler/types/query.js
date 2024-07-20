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
    QueryAllHookRequest: function() {
        return QueryAllHookRequest;
    },
    QueryAllHookResponse: function() {
        return QueryAllHookResponse;
    },
    QueryClientImpl: function() {
        return QueryClientImpl;
    },
    QueryGetHookRequest: function() {
        return QueryGetHookRequest;
    },
    QueryGetHookResponse: function() {
        return QueryGetHookResponse;
    },
    QueryParamsRequest: function() {
        return QueryParamsRequest;
    },
    QueryParamsResponse: function() {
        return QueryParamsResponse;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _hook = require("./hook");
const _params = require("./params");
const _binary = require("cosmjs-types/binary");
const _pagination = require("cosmjs-types/cosmos/base/query/v1beta1/pagination");
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
const baseQueryParamsRequest = {};
const QueryParamsRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryParamsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.params !== undefined) {
            _params.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryParamsResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = _params.Params.decode(reader, reader.uint32());
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
            message.params = _params.Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? _params.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = _params.Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    }
};
const baseQueryGetHookRequest = {
    id: 0
};
const QueryGetHookRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryGetHookResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.Hook !== undefined) {
            _hook.Hook.encode(message.Hook, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryGetHookResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.Hook = _hook.Hook.decode(reader, reader.uint32());
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
            message.Hook = _hook.Hook.fromJSON(object.Hook);
        } else {
            message.Hook = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.Hook !== undefined && (obj.Hook = message.Hook ? _hook.Hook.toJSON(message.Hook) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryGetHookResponse);
        if (object.Hook !== undefined && object.Hook !== null) {
            message.Hook = _hook.Hook.fromPartial(object.Hook);
        } else {
            message.Hook = undefined;
        }
        return message;
    }
};
const baseQueryAllHookRequest = {};
const QueryAllHookRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAllHookRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
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
            message.pagination = _pagination.PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAllHookRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = _pagination.PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllHookResponse = {};
const QueryAllHookResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.Hook){
            _hook.Hook.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAllHookResponse);
        message.Hook = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.Hook.push(_hook.Hook.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
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
                message.Hook.push(_hook.Hook.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = _pagination.PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.Hook) {
            obj.Hook = message.Hook.map((e)=>e ? _hook.Hook.toJSON(e) : undefined);
        } else {
            obj.Hook = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? _pagination.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAllHookResponse);
        message.Hook = [];
        if (object.Hook !== undefined && object.Hook !== null) {
            for (const e of object.Hook){
                message.Hook.push(_hook.Hook.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = _pagination.PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    }
};
class QueryClientImpl {
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "Params", data);
        return promise.then((data)=>QueryParamsResponse.decode(new _binary.BinaryReader(data)));
    }
    Hook(request) {
        const data = QueryGetHookRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "Hook", data);
        return promise.then((data)=>QueryGetHookResponse.decode(new _binary.BinaryReader(data)));
    }
    HookAll(request) {
        const data = QueryAllHookRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.scheduler.Query", "HookAll", data);
        return promise.then((data)=>QueryAllHookResponse.decode(new _binary.BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL3F1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IEhvb2sgfSBmcm9tIFwiLi9ob29rXCI7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwiLi9wYXJhbXNcIjtcblxuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQge1xuICBQYWdlUmVxdWVzdCxcbiAgUGFnZVJlc3BvbnNlLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvcGFnaW5hdGlvblwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuc2NoZWR1bGVyXCI7XG5cbi8qKiBRdWVyeVBhcmFtc1JlcXVlc3QgaXMgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvUGFyYW1zIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zUmVxdWVzdCB7fVxuXG4vKiogUXVlcnlQYXJhbXNSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGUgUXVlcnkvUGFyYW1zIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAvKiogcGFyYW1zIGhvbGRzIGFsbCB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIG1vZHVsZS4gKi9cbiAgcGFyYW1zOiBQYXJhbXMgfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlHZXRIb29rUmVxdWVzdCB7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlHZXRIb29rUmVzcG9uc2Uge1xuICBIb29rOiBIb29rIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWxsSG9va1JlcXVlc3Qge1xuICBwYWdpbmF0aW9uOiBQYWdlUmVxdWVzdCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUFsbEhvb2tSZXNwb25zZSB7XG4gIEhvb2s6IEhvb2tbXTtcbiAgcGFnaW5hdGlvbjogUGFnZVJlc3BvbnNlIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBiYXNlUXVlcnlQYXJhbXNSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGFyYW1zUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBEZWVwUGFydGlhbDxRdWVyeVBhcmFtc1JlcXVlc3Q+KTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IH0gYXMgUXVlcnlQYXJhbXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUGFyYW1zLmVuY29kZShtZXNzYWdlLnBhcmFtcywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYXJhbXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+KTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbVBhcnRpYWwob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0OiBvYmplY3QgPSB7IGlkOiAwIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUdldEhvb2tSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlHZXRIb29rUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmlkICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5R2V0SG9va1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0IH0gYXMgUXVlcnlHZXRIb29rUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuaWQgPSByZWFkZXIudWludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5R2V0SG9va1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0IH0gYXMgUXVlcnlHZXRIb29rUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmlkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmlkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmlkID0gTnVtYmVyKG9iamVjdC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlHZXRIb29rUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5pZCAhPT0gdW5kZWZpbmVkICYmIChvYmouaWQgPSBtZXNzYWdlLmlkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlHZXRIb29rUmVxdWVzdD4pOiBRdWVyeUdldEhvb2tSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlHZXRIb29rUmVxdWVzdCB9IGFzIFF1ZXJ5R2V0SG9va1JlcXVlc3Q7XG4gICAgaWYgKG9iamVjdC5pZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5pZCA9IG9iamVjdC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5pZCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5R2V0SG9va1Jlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5R2V0SG9va1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlHZXRIb29rUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5Ib29rICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEhvb2suZW5jb2RlKG1lc3NhZ2UuSG9vaywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5R2V0SG9va1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlHZXRIb29rUmVzcG9uc2UgfSBhcyBRdWVyeUdldEhvb2tSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuSG9vayA9IEhvb2suZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlHZXRIb29rUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXNwb25zZSB9IGFzIFF1ZXJ5R2V0SG9va1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QuSG9vayAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5Ib29rICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLkhvb2sgPSBIb29rLmZyb21KU09OKG9iamVjdC5Ib29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5Ib29rID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlHZXRIb29rUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuSG9vayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLkhvb2sgPSBtZXNzYWdlLkhvb2sgPyBIb29rLnRvSlNPTihtZXNzYWdlLkhvb2spIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlHZXRIb29rUmVzcG9uc2U+KTogUXVlcnlHZXRIb29rUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUdldEhvb2tSZXNwb25zZSB9IGFzIFF1ZXJ5R2V0SG9va1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QuSG9vayAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5Ib29rICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLkhvb2sgPSBIb29rLmZyb21QYXJ0aWFsKG9iamVjdC5Ib29rKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5Ib29rID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFsbEhvb2tSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWxsSG9va1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUFsbEhvb2tSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYWdlUmVxdWVzdC5lbmNvZGUobWVzc2FnZS5wYWdpbmF0aW9uLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBbGxIb29rUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1JlcXVlc3QgfSBhcyBRdWVyeUFsbEhvb2tSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wYWdpbmF0aW9uID0gUGFnZVJlcXVlc3QuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBbGxIb29rUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1JlcXVlc3QgfSBhcyBRdWVyeUFsbEhvb2tSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYWdpbmF0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhZ2luYXRpb24gPSBQYWdlUmVxdWVzdC5mcm9tSlNPTihvYmplY3QucGFnaW5hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWxsSG9va1JlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnBhZ2luYXRpb24gPSBtZXNzYWdlLnBhZ2luYXRpb25cbiAgICAgICAgPyBQYWdlUmVxdWVzdC50b0pTT04obWVzc2FnZS5wYWdpbmF0aW9uKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5QWxsSG9va1JlcXVlc3Q+KTogUXVlcnlBbGxIb29rUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1JlcXVlc3QgfSBhcyBRdWVyeUFsbEhvb2tSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QucGFnaW5hdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYWdpbmF0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhZ2luYXRpb24gPSBQYWdlUmVxdWVzdC5mcm9tUGFydGlhbChvYmplY3QucGFnaW5hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBbGxIb29rUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBbGxIb29rUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUFsbEhvb2tSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLkhvb2spIHtcbiAgICAgIEhvb2suZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFBhZ2VSZXNwb25zZS5lbmNvZGUoXG4gICAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbixcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBbGxIb29rUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFsbEhvb2tSZXNwb25zZSB9IGFzIFF1ZXJ5QWxsSG9va1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuSG9vayA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5Ib29rLnB1c2goSG9vay5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IFBhZ2VSZXNwb25zZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUFsbEhvb2tSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWxsSG9va1Jlc3BvbnNlIH0gYXMgUXVlcnlBbGxIb29rUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5Ib29rID0gW107XG4gICAgaWYgKG9iamVjdC5Ib29rICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lkhvb2sgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuSG9vaykge1xuICAgICAgICBtZXNzYWdlLkhvb2sucHVzaChIb29rLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9iamVjdC5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhZ2luYXRpb24gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IFBhZ2VSZXNwb25zZS5mcm9tSlNPTihvYmplY3QucGFnaW5hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFnaW5hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWxsSG9va1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5Ib29rKSB7XG4gICAgICBvYmouSG9vayA9IG1lc3NhZ2UuSG9vay5tYXAoKGUpID0+IChlID8gSG9vay50b0pTT04oZSkgOiB1bmRlZmluZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLkhvb2sgPSBbXTtcbiAgICB9XG4gICAgbWVzc2FnZS5wYWdpbmF0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFnaW5hdGlvbiA9IG1lc3NhZ2UucGFnaW5hdGlvblxuICAgICAgICA/IFBhZ2VSZXNwb25zZS50b0pTT04obWVzc2FnZS5wYWdpbmF0aW9uKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5QWxsSG9va1Jlc3BvbnNlPik6IFF1ZXJ5QWxsSG9va1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlBbGxIb29rUmVzcG9uc2UgfSBhcyBRdWVyeUFsbEhvb2tSZXNwb25zZTtcbiAgICBtZXNzYWdlLkhvb2sgPSBbXTtcbiAgICBpZiAob2JqZWN0Lkhvb2sgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuSG9vayAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5Ib29rKSB7XG4gICAgICAgIG1lc3NhZ2UuSG9vay5wdXNoKEhvb2suZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2JqZWN0LnBhZ2luYXRpb24gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFnaW5hdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYWdpbmF0aW9uID0gUGFnZVJlc3BvbnNlLmZyb21QYXJ0aWFsKG9iamVjdC5wYWdpbmF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYWdpbmF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbi8qKiBRdWVyeSBkZWZpbmVzIHRoZSBnUlBDIHF1ZXJpZXIgc2VydmljZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnkge1xuICAvKiogUGFyYW1ldGVycyBxdWVyaWVzIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBtb2R1bGUuICovXG4gIFBhcmFtcyhyZXF1ZXN0OiBRdWVyeVBhcmFtc1JlcXVlc3QpOiBQcm9taXNlPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+O1xuICAvKiogUXVlcmllcyBhIEhvb2sgYnkgaWQuICovXG4gIEhvb2socmVxdWVzdDogUXVlcnlHZXRIb29rUmVxdWVzdCk6IFByb21pc2U8UXVlcnlHZXRIb29rUmVzcG9uc2U+O1xuICAvKiogUXVlcmllcyBhIGxpc3Qgb2YgSG9vayBpdGVtcy4gKi9cbiAgSG9va0FsbChyZXF1ZXN0OiBRdWVyeUFsbEhvb2tSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUFsbEhvb2tSZXNwb25zZT47XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUNsaWVudEltcGwgaW1wbGVtZW50cyBRdWVyeSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcnBjOiBScGM7XG4gIGNvbnN0cnVjdG9yKHJwYzogUnBjKSB7XG4gICAgdGhpcy5ycGMgPSBycGM7XG4gIH1cbiAgUGFyYW1zKHJlcXVlc3Q6IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBhcmFtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwia3VqaXJhLnNjaGVkdWxlci5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlQYXJhbXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgSG9vayhyZXF1ZXN0OiBRdWVyeUdldEhvb2tSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUdldEhvb2tSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUdldEhvb2tSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5zY2hlZHVsZXIuUXVlcnlcIiwgXCJIb29rXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUdldEhvb2tSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgSG9va0FsbChyZXF1ZXN0OiBRdWVyeUFsbEhvb2tSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUFsbEhvb2tSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUFsbEhvb2tSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5zY2hlZHVsZXIuUXVlcnlcIiwgXCJIb29rQWxsXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUFsbEhvb2tSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBScGMge1xuICByZXF1ZXN0KFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBkYXRhOiBVaW50OEFycmF5XG4gICk6IFByb21pc2U8VWludDhBcnJheT47XG59XG4iXSwibmFtZXMiOlsiUXVlcnlBbGxIb29rUmVxdWVzdCIsIlF1ZXJ5QWxsSG9va1Jlc3BvbnNlIiwiUXVlcnlDbGllbnRJbXBsIiwiUXVlcnlHZXRIb29rUmVxdWVzdCIsIlF1ZXJ5R2V0SG9va1Jlc3BvbnNlIiwiUXVlcnlQYXJhbXNSZXF1ZXN0IiwiUXVlcnlQYXJhbXNSZXNwb25zZSIsInByb3RvYnVmUGFja2FnZSIsImJhc2VRdWVyeVBhcmFtc1JlcXVlc3QiLCJlbmNvZGUiLCJfIiwid3JpdGVyIiwiQmluYXJ5V3JpdGVyIiwiY3JlYXRlIiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwibWVzc2FnZSIsInRhZyIsInVpbnQzMiIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCIsImJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIiwicGFyYW1zIiwiUGFyYW1zIiwiZm9yayIsImxkZWxpbSIsIm9iamVjdCIsImJhc2VRdWVyeUdldEhvb2tSZXF1ZXN0IiwiaWQiLCJ1aW50NjQiLCJOdW1iZXIiLCJiYXNlUXVlcnlHZXRIb29rUmVzcG9uc2UiLCJIb29rIiwiYmFzZVF1ZXJ5QWxsSG9va1JlcXVlc3QiLCJwYWdpbmF0aW9uIiwiUGFnZVJlcXVlc3QiLCJiYXNlUXVlcnlBbGxIb29rUmVzcG9uc2UiLCJ2IiwiUGFnZVJlc3BvbnNlIiwicHVzaCIsImUiLCJtYXAiLCJyZXF1ZXN0IiwiZGF0YSIsImZpbmlzaCIsInByb21pc2UiLCJycGMiLCJ0aGVuIiwiSG9va0FsbCIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7O0lBbVJMQSxtQkFBbUI7ZUFBbkJBOztJQWlFQUMsb0JBQW9CO2VBQXBCQTs7SUFvR0FDLGVBQWU7ZUFBZkE7O0lBbFNBQyxtQkFBbUI7ZUFBbkJBOztJQThEQUMsb0JBQW9CO2VBQXBC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
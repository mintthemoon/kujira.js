/* eslint-disable */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { Params } from "./params";
export const protobufPackage = "kujira.denom";
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
const baseQueryDenomAuthorityMetadataRequest = {
    denom: ""
};
export const QueryDenomAuthorityMetadataRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = "";
        }
        return message;
    }
};
const baseQueryDenomAuthorityMetadataResponse = {};
export const QueryDenomAuthorityMetadataResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.authority_metadata !== undefined) {
            DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
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
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authority_metadata = DenomAuthorityMetadata.fromJSON(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authority_metadata = DenomAuthorityMetadata.fromPartial(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    }
};
const baseQueryDenomsFromCreatorRequest = {
    creator: ""
};
export const QueryDenomsFromCreatorRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryDenomsFromCreatorRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryDenomsFromCreatorRequest);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        } else {
            message.creator = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryDenomsFromCreatorRequest);
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        } else {
            message.creator = "";
        }
        return message;
    }
};
const baseQueryDenomsFromCreatorResponse = {
    denoms: ""
};
export const QueryDenomsFromCreatorResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.denoms){
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        if (object.denoms !== undefined && object.denoms !== null) {
            for (const e of object.denoms){
                message.denoms.push(String(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e)=>e);
        } else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryDenomsFromCreatorResponse);
        message.denoms = [];
        if (object.denoms !== undefined && object.denoms !== null) {
            for (const e of object.denoms){
                message.denoms.push(e);
            }
        }
        return message;
    }
};
export class QueryClientImpl {
    Params(request) {
        var _this = this;
        return _async_to_generator(function*() {
            const data = QueryParamsRequest.encode(request).finish();
            const promise = _this.rpc.request("kujira.denom.Query", "Params", data);
            const data_1 = yield promise;
            return QueryParamsResponse.decode(new BinaryReader(data_1));
        })();
    }
    DenomAuthorityMetadata(request) {
        var _this = this;
        return _async_to_generator(function*() {
            const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
            const promise = _this.rpc.request("kujira.denom.Query", "DenomAuthorityMetadata", data);
            const data_1 = yield promise;
            return QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data_1));
        })();
    }
    DenomsFromCreator(request) {
        var _this = this;
        return _async_to_generator(function*() {
            const data = QueryDenomsFromCreatorRequest.encode(request).finish();
            const promise = _this.rpc.request("kujira.denom.Query", "DenomsFromCreator", data);
            const data_1 = yield promise;
            return QueryDenomsFromCreatorResponse.decode(new BinaryReader(data_1));
        })();
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvcXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgRGVub21BdXRob3JpdHlNZXRhZGF0YSB9IGZyb20gXCIuL2F1dGhvcml0eU1ldGFkYXRhXCI7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwiLi9wYXJhbXNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmRlbm9tXCI7XG5cbi8qKiBRdWVyeVBhcmFtc1JlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L1BhcmFtcyBSUEMgbWV0aG9kLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBhcmFtc1JlcXVlc3Qge31cblxuLyoqIFF1ZXJ5UGFyYW1zUmVzcG9uc2UgaXMgdGhlIHJlc3BvbnNlIHR5cGUgZm9yIHRoZSBRdWVyeS9QYXJhbXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gIC8qKiBwYXJhbXMgZGVmaW5lcyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgbW9kdWxlLiAqL1xuICBwYXJhbXM6IFBhcmFtcyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0IHtcbiAgZGVub206IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSB7XG4gIGF1dGhvcml0eV9tZXRhZGF0YTogRGVub21BdXRob3JpdHlNZXRhZGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdCB7XG4gIGNyZWF0b3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2Uge1xuICBkZW5vbXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBiYXNlUXVlcnlQYXJhbXNSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGFyYW1zUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBEZWVwUGFydGlhbDxRdWVyeVBhcmFtc1JlcXVlc3Q+KTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IH0gYXMgUXVlcnlQYXJhbXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUGFyYW1zLmVuY29kZShtZXNzYWdlLnBhcmFtcywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYXJhbXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+KTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbVBhcnRpYWwob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0OiBvYmplY3QgPSB7IGRlbm9tOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmRlbm9tICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5kZW5vbSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmRlbm9tICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gU3RyaW5nKG9iamVjdC5kZW5vbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5kZW5vbSAhPT0gdW5kZWZpbmVkICYmIChvYmouZGVub20gPSBtZXNzYWdlLmRlbm9tKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdD5cbiAgKTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmRlbm9tICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gb2JqZWN0LmRlbm9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBEZW5vbUF1dGhvcml0eU1ldGFkYXRhLmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEsXG4gICAgICAgIHdyaXRlci51aW50MzIoMTApLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSA9IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEuZGVjb2RlKFxuICAgICAgICAgICAgcmVhZGVyLFxuICAgICAgICAgICAgcmVhZGVyLnVpbnQzMigpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGEgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gRGVub21BdXRob3JpdHlNZXRhZGF0YS5mcm9tSlNPTihcbiAgICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hdXRob3JpdHlfbWV0YWRhdGEgPSBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YVxuICAgICAgICA/IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEudG9KU09OKG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlPlxuICApOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGEgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgPSBEZW5vbUF1dGhvcml0eU1ldGFkYXRhLmZyb21QYXJ0aWFsKFxuICAgICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Q6IG9iamVjdCA9IHsgY3JlYXRvcjogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmNyZWF0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmNyZWF0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY3JlYXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmNyZWF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY3JlYXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jcmVhdG9yID0gU3RyaW5nKG9iamVjdC5jcmVhdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5jcmVhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmNyZWF0b3IgIT09IHVuZGVmaW5lZCAmJiAob2JqLmNyZWF0b3IgPSBtZXNzYWdlLmNyZWF0b3IpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdD5cbiAgKTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmNyZWF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY3JlYXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jcmVhdG9yID0gb2JqZWN0LmNyZWF0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY3JlYXRvciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZTogb2JqZWN0ID0geyBkZW5vbXM6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmRlbm9tcykge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKHYhKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5kZW5vbXMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZGVub21zLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZTtcbiAgICBtZXNzYWdlLmRlbm9tcyA9IFtdO1xuICAgIGlmIChvYmplY3QuZGVub21zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5kZW5vbXMpIHtcbiAgICAgICAgbWVzc2FnZS5kZW5vbXMucHVzaChTdHJpbmcoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5kZW5vbXMpIHtcbiAgICAgIG9iai5kZW5vbXMgPSBtZXNzYWdlLmRlbm9tcy5tYXAoKGUpID0+IGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouZGVub21zID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5kZW5vbXMgPSBbXTtcbiAgICBpZiAob2JqZWN0LmRlbm9tcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZW5vbXMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZGVub21zKSB7XG4gICAgICAgIG1lc3NhZ2UuZGVub21zLnB1c2goZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuLyoqIFF1ZXJ5IGRlZmluZXMgdGhlIGdSUEMgcXVlcmllciBzZXJ2aWNlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIC8qKiBQYXJhbXMgcmV0dXJucyB0aGUgdG90YWwgc2V0IG9mIG1pbnRpbmcgcGFyYW1ldGVycy4gKi9cbiAgUGFyYW1zKHJlcXVlc3Q6IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT47XG4gIERlbm9tQXV0aG9yaXR5TWV0YWRhdGEoXG4gICAgcmVxdWVzdDogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlPjtcbiAgRGVub21zRnJvbUNyZWF0b3IoXG4gICAgcmVxdWVzdDogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U+O1xufVxuXG5leHBvcnQgY2xhc3MgUXVlcnlDbGllbnRJbXBsIGltcGxlbWVudHMgUXVlcnkge1xuICBwcml2YXRlIHJlYWRvbmx5IHJwYzogUnBjO1xuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICB9XG4gIGFzeW5jIFBhcmFtcyhyZXF1ZXN0OiBRdWVyeVBhcmFtc1JlcXVlc3QpOiBQcm9taXNlPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlQYXJhbXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5kZW5vbS5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICBjb25zdCBkYXRhXzEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBRdWVyeVBhcmFtc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGFfMSkpO1xuICB9XG5cbiAgYXN5bmMgRGVub21BdXRob3JpdHlNZXRhZGF0YShcbiAgICByZXF1ZXN0OiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImt1amlyYS5kZW5vbS5RdWVyeVwiLFxuICAgICAgXCJEZW5vbUF1dGhvcml0eU1ldGFkYXRhXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICBjb25zdCBkYXRhXzEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhXzEpKTtcbiAgfVxuXG4gIGFzeW5jIERlbm9tc0Zyb21DcmVhdG9yKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwia3VqaXJhLmRlbm9tLlF1ZXJ5XCIsXG4gICAgICBcIkRlbm9tc0Zyb21DcmVhdG9yXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICBjb25zdCBkYXRhXzEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YV8xKSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFJwYyB7XG4gIHJlcXVlc3QoXG4gICAgc2VydmljZTogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGRhdGE6IFVpbnQ4QXJyYXlcbiAgKTogUHJvbWlzZTxVaW50OEFycmF5Pjtcbn1cbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJEZW5vbUF1dGhvcml0eU1ldGFkYXRhIiwiUGFyYW1zIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCIsIlF1ZXJ5UGFyYW1zUmVxdWVzdCIsImVuY29kZSIsIl8iLCJ3cml0ZXIiLCJjcmVhdGUiLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJtZXNzYWdlIiwidGFnIiwidWludDMyIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsInRvSlNPTiIsIm9iaiIsImZyb21QYXJ0aWFsIiwiYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UiLCJRdWVyeVBhcmFtc1Jlc3BvbnNlIiwicGFyYW1zIiwiZm9yayIsImxkZWxpbSIsIm9iamVjdCIsImJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0IiwiZGVub20iLCJRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0Iiwic3RyaW5nIiwiU3RyaW5nIiwiYmFzZVF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlIiwiUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2UiLCJhdXRob3JpdHlfbWV0YWRhdGEiLCJiYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QiLCJjcmVhdG9yIiwiUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QiLCJiYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlIiwiZGVub21zIiwiUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlIiwidiIsInB1c2giLCJlIiwibWFwIiwiUXVlcnlDbGllbnRJbXBsIiwicmVxdWVzdCIsImRhdGEiLCJmaW5pc2giLCJwcm9taXNlIiwicnBjIiwiZGF0YV8xIiwiRGVub21zRnJvbUNyZWF0b3IiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsU0FBU0EsWUFBWSxFQUFFQyxZQUFZLFFBQVEsc0JBQXNCO0FBQ2pFLFNBQVNDLHNCQUFzQixRQUFRLHNCQUFzQjtBQUM3RCxTQUFTQyxNQUFNLFFBQVEsV0FBVztBQUVsQyxPQUFPLE1BQU1DLGtCQUFrQixlQUFlO0FBMkI5QyxNQUFNQyx5QkFBaUMsQ0FBQztBQUV4QyxPQUFPLE1BQU1DLHFCQUFxQjtJQUNoQ0MsUUFDRUMsQ0FBcUIsRUFDckJDLFNBQXVCUixhQUFhUyxNQUFNLEVBQUU7UUFFNUMsT0FBT0Q7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQkcsYUFBYSxJQUFJZixhQUFhWSxTQUFTQTtRQUMxRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTU8sVUFBVSxtQkFBS2Y7UUFDckIsTUFBT1MsT0FBT0ssR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1QLE9BQU9RLE1BQU07WUFDekIsT0FBUUQsUUFBUTtnQkFDZDtvQkFDRVAsT0FBT1MsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFDQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNoQixDQUFNO1FBQ2IsTUFBTVksVUFBVSxtQkFBS2Y7UUFDckIsT0FBT2U7SUFDVDtJQUVBSyxRQUFPakIsQ0FBcUI7UUFDMUIsTUFBTWtCLE1BQVcsQ0FBQztRQUNsQixPQUFPQTtJQUNUO0lBRUFDLGFBQVluQixDQUFrQztRQUM1QyxNQUFNWSxVQUFVLG1CQUFLZjtRQUNyQixPQUFPZTtJQUNUO0FBQ0YsRUFBRTtBQUVGLE1BQU1RLDBCQUFrQyxDQUFDO0FBRXpDLE9BQU8sTUFBTUMsc0JBQXNCO0lBQ2pDdEIsUUFDRWEsT0FBNEIsRUFDNUJYLFNBQXVCUixhQUFhUyxNQUFNLEVBQUU7UUFFNUMsSUFBSVUsUUFBUVUsTUFBTSxLQUFLYixXQUFXO1lBQ2hDZCxPQUFPSSxNQUFNLENBQUNhLFFBQVFVLE1BQU0sRUFBRXJCLE9BQU9hLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQUlDLE1BQU07UUFDaEU7UUFDQSxPQUFPdkI7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQkcsYUFBYSxJQUFJZixhQUFhWSxTQUFTQTtRQUMxRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTU8sVUFBVSxtQkFBS1E7UUFDckIsTUFBT2QsT0FBT0ssR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1QLE9BQU9RLE1BQU07WUFDekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRVSxNQUFNLEdBQUczQixPQUFPUSxNQUFNLENBQUNHLFFBQVFBLE9BQU9RLE1BQU07b0JBQ3BEO2dCQUNGO29CQUNFUixPQUFPUyxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUNBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixNQUFNYixVQUFVLG1CQUFLUTtRQUNyQixJQUFJSyxPQUFPSCxNQUFNLEtBQUtiLGFBQWFnQixPQUFPSCxNQUFNLEtBQUssTUFBTTtZQUN6RFYsUUFBUVUsTUFBTSxHQUFHM0IsT0FBT3FCLFFBQVEsQ0FBQ1MsT0FBT0gsTUFBTTtRQUNoRCxPQUFPO1lBQ0xWLFFBQVFVLE1BQU0sR0FBR2I7UUFDbkI7UUFDQSxPQUFPRztJQUNUO0lBRUFLLFFBQU9MLE9BQTRCO1FBQ2pDLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUVUsTUFBTSxLQUFLYixhQUNoQlMsQ0FBQUEsSUFBSUksTUFBTSxHQUFHVixRQUFRVSxNQUFNLEdBQUczQixPQUFPc0IsTUFBTSxDQUFDTCxRQUFRVSxNQUFNLElBQUliLFNBQVE7UUFDekUsT0FBT1M7SUFDVDtJQUVBQyxhQUFZTSxNQUF3QztRQUNsRCxNQUFNYixVQUFVLG1CQUFLUTtRQUNyQixJQUFJSyxPQUFPSCxNQUFNLEtBQUtiLGFBQWFnQixPQUFPSCxNQUFNLEtBQUssTUFBTTtZQUN6RFYsUUFBUVUsTUFBTSxHQUFHM0IsT0FBT3dCLFdBQVcsQ0FBQ00sT0FBT0gsTUFBTTtRQUNuRCxPQUFPO1lBQ0xWLFFBQVFVLE1BQU0sR0FBR2I7UUFDbkI7UUFDQSxPQUFPRztJQUNUO0FBQ0YsRUFBRTtBQUVGLE1BQU1jLHlDQUFpRDtJQUFFQyxPQUFPO0FBQUc7QUFFbkUsT0FBTyxNQUFNQyxxQ0FBcUM7SUFDaEQ3QixRQUNFYSxPQUEyQyxFQUMzQ1gsU0FBdUJSLGFBQWFTLE1BQU0sRUFBRTtRQUU1QyxJQUFJVSxRQUFRZSxLQUFLLEtBQUssSUFBSTtZQUN4QjFCLE9BQU9hLE1BQU0sQ0FBQyxJQUFJZSxNQUFNLENBQUNqQixRQUFRZSxLQUFLO1FBQ3hDO1FBQ0EsT0FBTzFCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJHLGFBQWEsSUFBSWYsYUFBYVksU0FBU0E7UUFDMUQsSUFBSUksTUFBTUgsV0FBV0ksWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdOO1FBQzNELE1BQU1PLFVBQVUsbUJBQ1hjO1FBRUwsTUFBT3BCLE9BQU9LLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNUCxPQUFPUSxNQUFNO1lBQ3pCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUWUsS0FBSyxHQUFHckIsT0FBT3VCLE1BQU07b0JBQzdCO2dCQUNGO29CQUNFdkIsT0FBT1MsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFDQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsTUFBTWIsVUFBVSxtQkFDWGM7UUFFTCxJQUFJRCxPQUFPRSxLQUFLLEtBQUtsQixhQUFhZ0IsT0FBT0UsS0FBSyxLQUFLLE1BQU07WUFDdkRmLFFBQVFlLEtBQUssR0FBR0csT0FBT0wsT0FBT0UsS0FBSztRQUNyQyxPQUFPO1lBQ0xmLFFBQVFlLEtBQUssR0FBRztRQUNsQjtRQUNBLE9BQU9mO0lBQ1Q7SUFFQUssUUFBT0wsT0FBMkM7UUFDaEQsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRZSxLQUFLLEtBQUtsQixhQUFjUyxDQUFBQSxJQUFJUyxLQUFLLEdBQUdmLFFBQVFlLEtBQUssQUFBRDtRQUN4RCxPQUFPVDtJQUNUO0lBRUFDLGFBQ0VNLE1BQXVEO1FBRXZELE1BQU1iLFVBQVUsbUJBQ1hjO1FBRUwsSUFBSUQsT0FBT0UsS0FBSyxLQUFLbEIsYUFBYWdCLE9BQU9FLEtBQUssS0FBSyxNQUFNO1lBQ3ZEZixRQUFRZSxLQUFLLEdBQUdGLE9BQU9FLEtBQUs7UUFDOUIsT0FBTztZQUNMZixRQUFRZSxLQUFLLEdBQUc7UUFDbEI7UUFDQSxPQUFPZjtJQUNUO0FBQ0YsRUFBRTtBQUVGLE1BQU1tQiwwQ0FBa0QsQ0FBQztBQUV6RCxPQUFPLE1BQU1DLHNDQUFzQztJQUNqRGpDLFFBQ0VhLE9BQTRDLEVBQzVDWCxTQUF1QlIsYUFBYVMsTUFBTSxFQUFFO1FBRTVDLElBQUlVLFFBQVFxQixrQkFBa0IsS0FBS3hCLFdBQVc7WUFDNUNmLHVCQUF1QkssTUFBTSxDQUMzQmEsUUFBUXFCLGtCQUFrQixFQUMxQmhDLE9BQU9hLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQ3RCQyxNQUFNO1FBQ1Y7UUFDQSxPQUFPdkI7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQkcsYUFBYSxJQUFJZixhQUFhWSxTQUFTQTtRQUMxRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTU8sVUFBVSxtQkFDWG1CO1FBRUwsTUFBT3pCLE9BQU9LLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNUCxPQUFPUSxNQUFNO1lBQ3pCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUXFCLGtCQUFrQixHQUFHdkMsdUJBQXVCUyxNQUFNLENBQ3hERyxRQUNBQSxPQUFPUSxNQUFNO29CQUVmO2dCQUNGO29CQUNFUixPQUFPUyxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUNBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixNQUFNYixVQUFVLG1CQUNYbUI7UUFFTCxJQUNFTixPQUFPUSxrQkFBa0IsS0FBS3hCLGFBQzlCZ0IsT0FBT1Esa0JBQWtCLEtBQUssTUFDOUI7WUFDQXJCLFFBQVFxQixrQkFBa0IsR0FBR3ZDLHVCQUF1QnNCLFFBQVEsQ0FDMURTLE9BQU9RLGtCQUFrQjtRQUU3QixPQUFPO1lBQ0xyQixRQUFRcUIsa0JBQWtCLEdBQUd4QjtRQUMvQjtRQUNBLE9BQU9HO0lBQ1Q7SUFFQUssUUFBT0wsT0FBNEM7UUFDakQsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRcUIsa0JBQWtCLEtBQUt4QixhQUM1QlMsQ0FBQUEsSUFBSWUsa0JBQWtCLEdBQUdyQixRQUFRcUIsa0JBQWtCLEdBQ2hEdkMsdUJBQXVCdUIsTUFBTSxDQUFDTCxRQUFRcUIsa0JBQWtCLElBQ3hEeEIsU0FBUTtRQUNkLE9BQU9TO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBd0Q7UUFFeEQsTUFBTWIsVUFBVSxtQkFDWG1CO1FBRUwsSUFDRU4sT0FBT1Esa0JBQWtCLEtBQUt4QixhQUM5QmdCLE9BQU9RLGtCQUFrQixLQUFLLE1BQzlCO1lBQ0FyQixRQUFRcUIsa0JBQWtCLEdBQUd2Qyx1QkFBdUJ5QixXQUFXLENBQzdETSxPQUFPUSxrQkFBa0I7UUFFN0IsT0FBTztZQUNMckIsUUFBUXFCLGtCQUFrQixHQUFHeEI7UUFDL0I7UUFDQSxPQUFPRztJQUNUO0FBQ0YsRUFBRTtBQUVGLE1BQU1zQixvQ0FBNEM7SUFBRUMsU0FBUztBQUFHO0FBRWhFLE9BQU8sTUFBTUMsZ0NBQWdDO0lBQzNDckMsUUFDRWEsT0FBc0MsRUFDdENYLFNBQXVCUixhQUFhUyxNQUFNLEVBQUU7UUFFNUMsSUFBSVUsUUFBUXVCLE9BQU8sS0FBSyxJQUFJO1lBQzFCbEMsT0FBT2EsTUFBTSxDQUFDLElBQUllLE1BQU0sQ0FBQ2pCLFFBQVF1QixPQUFPO1FBQzFDO1FBQ0EsT0FBT2xDO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJHLGFBQWEsSUFBSWYsYUFBYVksU0FBU0E7UUFDMUQsSUFBSUksTUFBTUgsV0FBV0ksWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdOO1FBQzNELE1BQU1PLFVBQVUsbUJBQ1hzQjtRQUVMLE1BQU81QixPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTVAsT0FBT1EsTUFBTTtZQUN6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVF1QixPQUFPLEdBQUc3QixPQUFPdUIsTUFBTTtvQkFDL0I7Z0JBQ0Y7b0JBQ0V2QixPQUFPUyxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUNBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixNQUFNYixVQUFVLG1CQUNYc0I7UUFFTCxJQUFJVCxPQUFPVSxPQUFPLEtBQUsxQixhQUFhZ0IsT0FBT1UsT0FBTyxLQUFLLE1BQU07WUFDM0R2QixRQUFRdUIsT0FBTyxHQUFHTCxPQUFPTCxPQUFPVSxPQUFPO1FBQ3pDLE9BQU87WUFDTHZCLFFBQVF1QixPQUFPLEdBQUc7UUFDcEI7UUFDQSxPQUFPdkI7SUFDVDtJQUVBSyxRQUFPTCxPQUFzQztRQUMzQyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVF1QixPQUFPLEtBQUsxQixhQUFjUyxDQUFBQSxJQUFJaUIsT0FBTyxHQUFHdkIsUUFBUXVCLE9BQU8sQUFBRDtRQUM5RCxPQUFPakI7SUFDVDtJQUVBQyxhQUNFTSxNQUFrRDtRQUVsRCxNQUFNYixVQUFVLG1CQUNYc0I7UUFFTCxJQUFJVCxPQUFPVSxPQUFPLEtBQUsxQixhQUFhZ0IsT0FBT1UsT0FBTyxLQUFLLE1BQU07WUFDM0R2QixRQUFRdUIsT0FBTyxHQUFHVixPQUFPVSxPQUFPO1FBQ2xDLE9BQU87WUFDTHZCLFFBQVF1QixPQUFPLEdBQUc7UUFDcEI7UUFDQSxPQUFPdkI7SUFDVDtBQUNGLEVBQUU7QUFFRixNQUFNeUIscUNBQTZDO0lBQUVDLFFBQVE7QUFBRztBQUVoRSxPQUFPLE1BQU1DLGlDQUFpQztJQUM1Q3hDLFFBQ0VhLE9BQXVDLEVBQ3ZDWCxTQUF1QlIsYUFBYVMsTUFBTSxFQUFFO1FBRTVDLEtBQUssTUFBTXNDLEtBQUs1QixRQUFRMEIsTUFBTSxDQUFFO1lBQzlCckMsT0FBT2EsTUFBTSxDQUFDLElBQUllLE1BQU0sQ0FBQ1c7UUFDM0I7UUFDQSxPQUFPdkM7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQkcsYUFBYSxJQUFJZixhQUFhWSxTQUFTQTtRQUMxRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTU8sVUFBVSxtQkFDWHlCO1FBRUx6QixRQUFRMEIsTUFBTSxHQUFHLEVBQUU7UUFDbkIsTUFBT2hDLE9BQU9LLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNUCxPQUFPUSxNQUFNO1lBQ3pCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUTBCLE1BQU0sQ0FBQ0csSUFBSSxDQUFDbkMsT0FBT3VCLE1BQU07b0JBQ2pDO2dCQUNGO29CQUNFdkIsT0FBT1MsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFDQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsTUFBTWIsVUFBVSxtQkFDWHlCO1FBRUx6QixRQUFRMEIsTUFBTSxHQUFHLEVBQUU7UUFDbkIsSUFBSWIsT0FBT2EsTUFBTSxLQUFLN0IsYUFBYWdCLE9BQU9hLE1BQU0sS0FBSyxNQUFNO1lBQ3pELEtBQUssTUFBTUksS0FBS2pCLE9BQU9hLE1BQU0sQ0FBRTtnQkFDN0IxQixRQUFRMEIsTUFBTSxDQUFDRyxJQUFJLENBQUNYLE9BQU9ZO1lBQzdCO1FBQ0Y7UUFDQSxPQUFPOUI7SUFDVDtJQUVBSyxRQUFPTCxPQUF1QztRQUM1QyxNQUFNTSxNQUFXLENBQUM7UUFDbEIsSUFBSU4sUUFBUTBCLE1BQU0sRUFBRTtZQUNsQnBCLElBQUlvQixNQUFNLEdBQUcxQixRQUFRMEIsTUFBTSxDQUFDSyxHQUFHLENBQUMsQ0FBQ0QsSUFBTUE7UUFDekMsT0FBTztZQUNMeEIsSUFBSW9CLE1BQU0sR0FBRyxFQUFFO1FBQ2pCO1FBQ0EsT0FBT3BCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBbUQ7UUFFbkQsTUFBTWIsVUFBVSxtQkFDWHlCO1FBRUx6QixRQUFRMEIsTUFBTSxHQUFHLEVBQUU7UUFDbkIsSUFBSWIsT0FBT2EsTUFBTSxLQUFLN0IsYUFBYWdCLE9BQU9hLE1BQU0sS0FBSyxNQUFNO1lBQ3pELEtBQUssTUFBTUksS0FBS2pCLE9BQU9hLE1BQU0sQ0FBRTtnQkFDN0IxQixRQUFRMEIsTUFBTSxDQUFDRyxJQUFJLENBQUNDO1lBQ3RCO1FBQ0Y7UUFDQSxPQUFPOUI7SUFDVDtBQUNGLEVBQUU7QUFjRixPQUFPLE1BQU1nQztJQUtMakQsT0FBT2tELE9BQTJCOztlQUF4QyxvQkFBQTtZQUNFLE1BQU1DLE9BQU9oRCxtQkFBbUJDLE1BQU0sQ0FBQzhDLFNBQVNFLE1BQU07WUFDdEQsTUFBTUMsVUFBVSxNQUFLQyxHQUFHLENBQUNKLE9BQU8sQ0FBQyxzQkFBc0IsVUFBVUM7WUFDakUsTUFBTUksU0FBUyxNQUFNRjtZQUNyQixPQUFPM0Isb0JBQW9CbEIsTUFBTSxDQUFDLElBQUlYLGFBQWEwRDtRQUNyRDs7SUFFTXhELHVCQUNKbUQsT0FBMkM7O2VBRDdDLG9CQUFBO1lBR0UsTUFBTUMsT0FBT2xCLG1DQUFtQzdCLE1BQU0sQ0FBQzhDLFNBQVNFLE1BQU07WUFDdEUsTUFBTUMsVUFBVSxNQUFLQyxHQUFHLENBQUNKLE9BQU8sQ0FDOUIsc0JBQ0EsMEJBQ0FDO1lBRUYsTUFBTUksU0FBUyxNQUFNRjtZQUNyQixPQUFPaEIsb0NBQW9DN0IsTUFBTSxDQUFDLElBQUlYLGFBQWEwRDtRQUNyRTs7SUFFTUMsa0JBQ0pOLE9BQXNDOztlQUR4QyxvQkFBQTtZQUdFLE1BQU1DLE9BQU9WLDhCQUE4QnJDLE1BQU0sQ0FBQzhDLFNBQVNFLE1BQU07WUFDakUsTUFBTUMsVUFBVSxNQUFLQyxHQUFHLENBQUNKLE9BQU8sQ0FDOUIsc0JBQ0EscUJBQ0FDO1lBRUYsTUFBTUksU0FBUyxNQUFNRjtZQUNyQixPQUFPVCwrQkFBK0JwQyxNQUFNLENBQUMsSUFBSVgsYUFBYTBEO1FBQ2hFOztJQWxDQUUsWUFBWUgsR0FBUSxDQUFFO1FBRHRCLHVCQUFpQkEsT0FBakIsS0FBQTtRQUVFLElBQUksQ0FBQ0EsR0FBRyxHQUFHQTtJQUNiO0FBaUNGIn0=
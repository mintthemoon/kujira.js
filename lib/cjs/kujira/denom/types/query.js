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
    QueryClientImpl: function() {
        return QueryClientImpl;
    },
    QueryDenomAuthorityMetadataRequest: function() {
        return QueryDenomAuthorityMetadataRequest;
    },
    QueryDenomAuthorityMetadataResponse: function() {
        return QueryDenomAuthorityMetadataResponse;
    },
    QueryDenomsFromCreatorRequest: function() {
        return QueryDenomsFromCreatorRequest;
    },
    QueryDenomsFromCreatorResponse: function() {
        return QueryDenomsFromCreatorResponse;
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
const _binary = require("cosmjs-types/binary");
const _authorityMetadata = require("./authorityMetadata");
const _params = require("./params");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
const protobufPackage = "kujira.denom";
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
const baseQueryDenomAuthorityMetadataRequest = {
    denom: ""
};
const QueryDenomAuthorityMetadataRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryDenomAuthorityMetadataResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.authority_metadata !== undefined) {
            _authorityMetadata.DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
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
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authority_metadata = _authorityMetadata.DenomAuthorityMetadata.fromJSON(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.authority_metadata !== undefined && (obj.authority_metadata = message.authority_metadata ? _authorityMetadata.DenomAuthorityMetadata.toJSON(message.authority_metadata) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryDenomAuthorityMetadataResponse);
        if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
            message.authority_metadata = _authorityMetadata.DenomAuthorityMetadata.fromPartial(object.authority_metadata);
        } else {
            message.authority_metadata = undefined;
        }
        return message;
    }
};
const baseQueryDenomsFromCreatorRequest = {
    creator: ""
};
const QueryDenomsFromCreatorRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryDenomsFromCreatorResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.denoms){
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
class QueryClientImpl {
    Params(request) {
        var _this = this;
        return _async_to_generator(function*() {
            const data = QueryParamsRequest.encode(request).finish();
            const promise = _this.rpc.request("kujira.denom.Query", "Params", data);
            const data_1 = yield promise;
            return QueryParamsResponse.decode(new _binary.BinaryReader(data_1));
        })();
    }
    DenomAuthorityMetadata(request) {
        var _this = this;
        return _async_to_generator(function*() {
            const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
            const promise = _this.rpc.request("kujira.denom.Query", "DenomAuthorityMetadata", data);
            const data_1 = yield promise;
            return QueryDenomAuthorityMetadataResponse.decode(new _binary.BinaryReader(data_1));
        })();
    }
    DenomsFromCreator(request) {
        var _this = this;
        return _async_to_generator(function*() {
            const data = QueryDenomsFromCreatorRequest.encode(request).finish();
            const promise = _this.rpc.request("kujira.denom.Query", "DenomsFromCreator", data);
            const data_1 = yield promise;
            return QueryDenomsFromCreatorResponse.decode(new _binary.BinaryReader(data_1));
        })();
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvcXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgRGVub21BdXRob3JpdHlNZXRhZGF0YSB9IGZyb20gXCIuL2F1dGhvcml0eU1ldGFkYXRhXCI7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwiLi9wYXJhbXNcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmRlbm9tXCI7XG5cbi8qKiBRdWVyeVBhcmFtc1JlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L1BhcmFtcyBSUEMgbWV0aG9kLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBhcmFtc1JlcXVlc3Qge31cblxuLyoqIFF1ZXJ5UGFyYW1zUmVzcG9uc2UgaXMgdGhlIHJlc3BvbnNlIHR5cGUgZm9yIHRoZSBRdWVyeS9QYXJhbXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gIC8qKiBwYXJhbXMgZGVmaW5lcyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgbW9kdWxlLiAqL1xuICBwYXJhbXM6IFBhcmFtcyB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0IHtcbiAgZGVub206IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSB7XG4gIGF1dGhvcml0eV9tZXRhZGF0YTogRGVub21BdXRob3JpdHlNZXRhZGF0YSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdCB7XG4gIGNyZWF0b3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2Uge1xuICBkZW5vbXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBiYXNlUXVlcnlQYXJhbXNSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGFyYW1zUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBEZWVwUGFydGlhbDxRdWVyeVBhcmFtc1JlcXVlc3Q+KTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IH0gYXMgUXVlcnlQYXJhbXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUGFyYW1zLmVuY29kZShtZXNzYWdlLnBhcmFtcywgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gYXMgUXVlcnlQYXJhbXNSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LnBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5wYXJhbXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+KTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbVBhcnRpYWwob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0OiBvYmplY3QgPSB7IGRlbm9tOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmRlbm9tICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5kZW5vbSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmRlbm9tICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gU3RyaW5nKG9iamVjdC5kZW5vbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5kZW5vbSAhPT0gdW5kZWZpbmVkICYmIChvYmouZGVub20gPSBtZXNzYWdlLmRlbm9tKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdD5cbiAgKTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmRlbm9tICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gb2JqZWN0LmRlbm9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBEZW5vbUF1dGhvcml0eU1ldGFkYXRhLmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEsXG4gICAgICAgIHdyaXRlci51aW50MzIoMTApLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSA9IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEuZGVjb2RlKFxuICAgICAgICAgICAgcmVhZGVyLFxuICAgICAgICAgICAgcmVhZGVyLnVpbnQzMigpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGEgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhID0gRGVub21BdXRob3JpdHlNZXRhZGF0YS5mcm9tSlNPTihcbiAgICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hdXRob3JpdHlfbWV0YWRhdGEgPSBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YVxuICAgICAgICA/IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEudG9KU09OKG1lc3NhZ2UuYXV0aG9yaXR5X21ldGFkYXRhKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlPlxuICApOiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5hdXRob3JpdHlfbWV0YWRhdGEgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmF1dGhvcml0eV9tZXRhZGF0YSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5hdXRob3JpdHlfbWV0YWRhdGEgPSBEZW5vbUF1dGhvcml0eU1ldGFkYXRhLmZyb21QYXJ0aWFsKFxuICAgICAgICBvYmplY3QuYXV0aG9yaXR5X21ldGFkYXRhXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmF1dGhvcml0eV9tZXRhZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Q6IG9iamVjdCA9IHsgY3JlYXRvcjogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmNyZWF0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmNyZWF0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY3JlYXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmNyZWF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY3JlYXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jcmVhdG9yID0gU3RyaW5nKG9iamVjdC5jcmVhdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5jcmVhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmNyZWF0b3IgIT09IHVuZGVmaW5lZCAmJiAob2JqLmNyZWF0b3IgPSBtZXNzYWdlLmNyZWF0b3IpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdD5cbiAgKTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmNyZWF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY3JlYXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jcmVhdG9yID0gb2JqZWN0LmNyZWF0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY3JlYXRvciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZTogb2JqZWN0ID0geyBkZW5vbXM6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmRlbm9tcykge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKHYhKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5kZW5vbXMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZGVub21zLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZTtcbiAgICBtZXNzYWdlLmRlbm9tcyA9IFtdO1xuICAgIGlmIChvYmplY3QuZGVub21zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5kZW5vbXMpIHtcbiAgICAgICAgbWVzc2FnZS5kZW5vbXMucHVzaChTdHJpbmcoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5kZW5vbXMpIHtcbiAgICAgIG9iai5kZW5vbXMgPSBtZXNzYWdlLmRlbm9tcy5tYXAoKGUpID0+IGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouZGVub21zID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5kZW5vbXMgPSBbXTtcbiAgICBpZiAob2JqZWN0LmRlbm9tcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZW5vbXMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZGVub21zKSB7XG4gICAgICAgIG1lc3NhZ2UuZGVub21zLnB1c2goZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuLyoqIFF1ZXJ5IGRlZmluZXMgdGhlIGdSUEMgcXVlcmllciBzZXJ2aWNlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIC8qKiBQYXJhbXMgcmV0dXJucyB0aGUgdG90YWwgc2V0IG9mIG1pbnRpbmcgcGFyYW1ldGVycy4gKi9cbiAgUGFyYW1zKHJlcXVlc3Q6IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT47XG4gIERlbm9tQXV0aG9yaXR5TWV0YWRhdGEoXG4gICAgcmVxdWVzdDogUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlPjtcbiAgRGVub21zRnJvbUNyZWF0b3IoXG4gICAgcmVxdWVzdDogUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2U+O1xufVxuXG5leHBvcnQgY2xhc3MgUXVlcnlDbGllbnRJbXBsIGltcGxlbWVudHMgUXVlcnkge1xuICBwcml2YXRlIHJlYWRvbmx5IHJwYzogUnBjO1xuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICB9XG4gIGFzeW5jIFBhcmFtcyhyZXF1ZXN0OiBRdWVyeVBhcmFtc1JlcXVlc3QpOiBQcm9taXNlPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlQYXJhbXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5kZW5vbS5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICBjb25zdCBkYXRhXzEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBRdWVyeVBhcmFtc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGFfMSkpO1xuICB9XG5cbiAgYXN5bmMgRGVub21BdXRob3JpdHlNZXRhZGF0YShcbiAgICByZXF1ZXN0OiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImt1amlyYS5kZW5vbS5RdWVyeVwiLFxuICAgICAgXCJEZW5vbUF1dGhvcml0eU1ldGFkYXRhXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICBjb25zdCBkYXRhXzEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhXzEpKTtcbiAgfVxuXG4gIGFzeW5jIERlbm9tc0Zyb21DcmVhdG9yKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwia3VqaXJhLmRlbm9tLlF1ZXJ5XCIsXG4gICAgICBcIkRlbm9tc0Zyb21DcmVhdG9yXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICBjb25zdCBkYXRhXzEgPSBhd2FpdCBwcm9taXNlO1xuICAgIHJldHVybiBRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YV8xKSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFJwYyB7XG4gIHJlcXVlc3QoXG4gICAgc2VydmljZTogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGRhdGE6IFVpbnQ4QXJyYXlcbiAgKTogUHJvbWlzZTxVaW50OEFycmF5Pjtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudEltcGwiLCJRdWVyeURlbm9tQXV0aG9yaXR5TWV0YWRhdGFSZXF1ZXN0IiwiUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVzcG9uc2UiLCJRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdCIsIlF1ZXJ5RGVub21zRnJvbUNyZWF0b3JSZXNwb25zZSIsIlF1ZXJ5UGFyYW1zUmVxdWVzdCIsIlF1ZXJ5UGFyYW1zUmVzcG9uc2UiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IiwiZW5jb2RlIiwiXyIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiVWludDhBcnJheSIsIkJpbmFyeVJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsIm1lc3NhZ2UiLCJ0YWciLCJ1aW50MzIiLCJza2lwVHlwZSIsImZyb21KU09OIiwidG9KU09OIiwib2JqIiwiZnJvbVBhcnRpYWwiLCJiYXNlUXVlcnlQYXJhbXNSZXNwb25zZSIsInBhcmFtcyIsIlBhcmFtcyIsImZvcmsiLCJsZGVsaW0iLCJvYmplY3QiLCJiYXNlUXVlcnlEZW5vbUF1dGhvcml0eU1ldGFkYXRhUmVxdWVzdCIsImRlbm9tIiwic3RyaW5nIiwiU3RyaW5nIiwiYmFzZVF1ZXJ5RGVub21BdXRob3JpdHlNZXRhZGF0YVJlc3BvbnNlIiwiYXV0aG9yaXR5X21ldGFkYXRhIiwiRGVub21BdXRob3JpdHlNZXRhZGF0YSIsImJhc2VRdWVyeURlbm9tc0Zyb21DcmVhdG9yUmVxdWVzdCIsImNyZWF0b3IiLCJiYXNlUXVlcnlEZW5vbXNGcm9tQ3JlYXRvclJlc3BvbnNlIiwiZGVub21zIiwidiIsInB1c2giLCJlIiwibWFwIiwicmVxdWVzdCIsImRhdGEiLCJmaW5pc2giLCJwcm9taXNlIiwicnBjIiwiZGF0YV8xIiwiRGVub21zRnJvbUNyZWF0b3IiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQTJjTEEsZUFBZTtlQUFmQTs7SUE1VEFDLGtDQUFrQztlQUFsQ0E7O0lBc0VBQyxtQ0FBbUM7ZUFBbkNBOztJQXlGQUMsNkJBQTZCO2VBQTdCQTs7SUFzRUFDLDhCQUE4QjtlQUE5QkE7O0lBalZBQyxrQkFBa0I7ZUFBbEJBOztJQTZDQUMsbUJBQW1CO2VBQW5CQTs7SUExRUFDLGVBQWU7ZUFBZkE7Ozt3QkFKOEI7bUNBQ0o7d0JBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLE1BQU1BLGtCQUFrQjtBQTJCL0IsTUFBTUMseUJBQWlDLENBQUM7QUFFakMsTUFBTUgscUJBQXFCO0lBQ2hDSSxRQUNFQyxDQUFx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
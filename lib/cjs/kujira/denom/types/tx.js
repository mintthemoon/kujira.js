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
    MsgBurn: function() {
        return MsgBurn;
    },
    MsgBurnResponse: function() {
        return MsgBurnResponse;
    },
    MsgChangeAdmin: function() {
        return MsgChangeAdmin;
    },
    MsgChangeAdminResponse: function() {
        return MsgChangeAdminResponse;
    },
    MsgCreateDenom: function() {
        return MsgCreateDenom;
    },
    MsgCreateDenomResponse: function() {
        return MsgCreateDenomResponse;
    },
    MsgMint: function() {
        return MsgMint;
    },
    MsgMintResponse: function() {
        return MsgMintResponse;
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
const protobufPackage = "kujira.denom";
const baseMsgCreateDenom = {
    sender: "",
    nonce: ""
};
const MsgCreateDenom = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgCreateDenom);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgCreateDenom);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        } else {
            message.sender = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = String(object.nonce);
        } else {
            message.nonce = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgCreateDenom);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        } else {
            message.sender = "";
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        } else {
            message.nonce = "";
        }
        return message;
    }
};
const baseMsgCreateDenomResponse = {
    new_token_denom: ""
};
const MsgCreateDenomResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.new_token_denom !== "") {
            writer.uint32(10).string(message.new_token_denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgCreateDenomResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.new_token_denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgCreateDenomResponse);
        if (object.new_token_denom !== undefined && object.new_token_denom !== null) {
            message.new_token_denom = String(object.new_token_denom);
        } else {
            message.new_token_denom = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.new_token_denom !== undefined && (obj.new_token_denom = message.new_token_denom);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgCreateDenomResponse);
        if (object.new_token_denom !== undefined && object.new_token_denom !== null) {
            message.new_token_denom = object.new_token_denom;
        } else {
            message.new_token_denom = "";
        }
        return message;
    }
};
const baseMsgMint = {
    sender: "",
    recipient: ""
};
const MsgMint = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            _coin.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgMint);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = _coin.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgMint);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        } else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = _coin.Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        } else {
            message.recipient = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? _coin.Coin.toJSON(message.amount) : undefined);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgMint);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        } else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = _coin.Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        } else {
            message.recipient = "";
        }
        return message;
    }
};
const baseMsgMintResponse = {};
const MsgMintResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgMintResponse);
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
        const message = _object_spread({}, baseMsgMintResponse);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseMsgMintResponse);
        return message;
    }
};
const baseMsgBurn = {
    sender: ""
};
const MsgBurn = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            _coin.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgBurn);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = _coin.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgBurn);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        } else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = _coin.Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? _coin.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgBurn);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        } else {
            message.sender = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = _coin.Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        return message;
    }
};
const baseMsgBurnResponse = {};
const MsgBurnResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgBurnResponse);
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
        const message = _object_spread({}, baseMsgBurnResponse);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseMsgBurnResponse);
        return message;
    }
};
const baseMsgChangeAdmin = {
    sender: "",
    denom: "",
    newAdmin: ""
};
const MsgChangeAdmin = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgChangeAdmin);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgChangeAdmin);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        } else {
            message.sender = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = "";
        }
        if (object.newAdmin !== undefined && object.newAdmin !== null) {
            message.newAdmin = String(object.newAdmin);
        } else {
            message.newAdmin = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgChangeAdmin);
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        } else {
            message.sender = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = "";
        }
        if (object.newAdmin !== undefined && object.newAdmin !== null) {
            message.newAdmin = object.newAdmin;
        } else {
            message.newAdmin = "";
        }
        return message;
    }
};
const baseMsgChangeAdminResponse = {};
const MsgChangeAdminResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgChangeAdminResponse);
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
        const message = _object_spread({}, baseMsgChangeAdminResponse);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseMsgChangeAdminResponse);
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvdHgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYmFzZS92MWJldGExL2NvaW5cIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmRlbm9tXCI7XG5cbi8qKlxuICogTXNnQ3JlYXRlRGVub20gaXMgdGhlIHNkay5Nc2cgdHlwZSBmb3IgYWxsb3dpbmcgYW4gYWNjb3VudCB0byBjcmVhdGVcbiAqIGEgbmV3IGRlbm9tLiAgSXQgcmVxdWlyZXMgYSBzZW5kZXIgYWRkcmVzcyBhbmQgYSB1bmlxdWUgbm9uY2VcbiAqICh0byBhbGxvdyBhY2NvdW50cyB0byBjcmVhdGUgbXVsdGlwbGUgZGVub21zKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NyZWF0ZURlbm9tIHtcbiAgc2VuZGVyOiBzdHJpbmc7XG4gIG5vbmNlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogTXNnQ3JlYXRlRGVub21SZXNwb25zZSBpcyB0aGUgcmV0dXJuIHZhbHVlIG9mIE1zZ0NyZWF0ZURlbm9tXG4gKiBJdCByZXR1cm5zIHRoZSBmdWxsIHN0cmluZyBvZiB0aGUgbmV3bHkgY3JlYXRlZCBkZW5vbVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2Uge1xuICBuZXdfdG9rZW5fZGVub206IHN0cmluZztcbn1cblxuLyoqXG4gKiBNc2dNaW50IGlzIHRoZSBzZGsuTXNnIHR5cGUgZm9yIGFsbG93aW5nIGFuIGFkbWluIGFjY291bnQgdG8gbWludFxuICogbW9yZSBvZiBhIHRva2VuLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ01pbnQge1xuICBzZW5kZXI6IHN0cmluZztcbiAgYW1vdW50OiBDb2luIHwgdW5kZWZpbmVkO1xuICByZWNpcGllbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNc2dNaW50UmVzcG9uc2Uge31cblxuLyoqXG4gKiBNc2dCdXJuIGlzIHRoZSBzZGsuTXNnIHR5cGUgZm9yIGFsbG93aW5nIGFuIGFkbWluIGFjY291bnQgdG8gYnVyblxuICogYSB0b2tlbi4gIEZvciBub3csIHdlIG9ubHkgc3VwcG9ydCBidXJuaW5nIGZyb20gdGhlIHNlbmRlciBhY2NvdW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0J1cm4ge1xuICBzZW5kZXI6IHN0cmluZztcbiAgYW1vdW50OiBDb2luIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0J1cm5SZXNwb25zZSB7fVxuXG4vKipcbiAqIE1zZ0NoYW5nZUFkbWluIGlzIHRoZSBzZGsuTXNnIHR5cGUgZm9yIGFsbG93aW5nIGFuIGFkbWluIGFjY291bnQgdG8gcmVhc3NpZ25cbiAqIGFkbWluc2hpcCBvZiBhIGRlbm9tIHRvIGEgbmV3IGFjY291bnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2dDaGFuZ2VBZG1pbiB7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBkZW5vbTogc3RyaW5nO1xuICBuZXdBZG1pbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2Uge31cblxuY29uc3QgYmFzZU1zZ0NyZWF0ZURlbm9tOiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiwgbm9uY2U6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IE1zZ0NyZWF0ZURlbm9tID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQ3JlYXRlRGVub20sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5zZW5kZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnNlbmRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNc2dDcmVhdGVEZW5vbSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0NyZWF0ZURlbm9tIH0gYXMgTXNnQ3JlYXRlRGVub207XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ0NyZWF0ZURlbm9tIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ3JlYXRlRGVub20gfSBhcyBNc2dDcmVhdGVEZW5vbTtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gU3RyaW5nKG9iamVjdC5zZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3Qubm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qubm9uY2UgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uubm9uY2UgPSBTdHJpbmcob2JqZWN0Lm5vbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5ub25jZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dDcmVhdGVEZW5vbSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxNc2dDcmVhdGVEZW5vbT4pOiBNc2dDcmVhdGVEZW5vbSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0NyZWF0ZURlbm9tIH0gYXMgTXNnQ3JlYXRlRGVub207XG4gICAgaWYgKG9iamVjdC5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2VuZGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IG9iamVjdC5zZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5ub25jZSA9IG9iamVjdC5ub25jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5ub25jZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0NyZWF0ZURlbm9tUmVzcG9uc2U6IG9iamVjdCA9IHsgbmV3X3Rva2VuX2Rlbm9tOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dDcmVhdGVEZW5vbVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQ3JlYXRlRGVub21SZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5ld190b2tlbl9kZW5vbSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UubmV3X3Rva2VuX2Rlbm9tKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIH0gYXMgTXNnQ3JlYXRlRGVub21SZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubmV3X3Rva2VuX2Rlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ3JlYXRlRGVub21SZXNwb25zZSB9IGFzIE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2U7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0Lm5ld190b2tlbl9kZW5vbSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QubmV3X3Rva2VuX2Rlbm9tICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLm5ld190b2tlbl9kZW5vbSA9IFN0cmluZyhvYmplY3QubmV3X3Rva2VuX2Rlbm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5uZXdfdG9rZW5fZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogTXNnQ3JlYXRlRGVub21SZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5uZXdfdG9rZW5fZGVub20gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5uZXdfdG9rZW5fZGVub20gPSBtZXNzYWdlLm5ld190b2tlbl9kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2U+XG4gICk6IE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIH0gYXMgTXNnQ3JlYXRlRGVub21SZXNwb25zZTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QubmV3X3Rva2VuX2Rlbm9tICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5uZXdfdG9rZW5fZGVub20gIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UubmV3X3Rva2VuX2Rlbm9tID0gb2JqZWN0Lm5ld190b2tlbl9kZW5vbTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5uZXdfdG9rZW5fZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dNaW50OiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiwgcmVjaXBpZW50OiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dNaW50ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnTWludCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnNlbmRlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIENvaW4uZW5jb2RlKG1lc3NhZ2UuYW1vdW50LCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5yZWNpcGllbnQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLnJlY2lwaWVudCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNc2dNaW50IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnTWludCB9IGFzIE1zZ01pbnQ7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYW1vdW50ID0gQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5yZWNpcGllbnQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ01pbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dNaW50IH0gYXMgTXNnTWludDtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gU3RyaW5nKG9iamVjdC5zZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFtb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmZyb21KU09OKG9iamVjdC5hbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFtb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5yZWNpcGllbnQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucmVjaXBpZW50ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnJlY2lwaWVudCA9IFN0cmluZyhvYmplY3QucmVjaXBpZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5yZWNpcGllbnQgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogTXNnTWludCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICBtZXNzYWdlLmFtb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmFtb3VudCA9IG1lc3NhZ2UuYW1vdW50ID8gQ29pbi50b0pTT04obWVzc2FnZS5hbW91bnQpIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLnJlY2lwaWVudCAhPT0gdW5kZWZpbmVkICYmIChvYmoucmVjaXBpZW50ID0gbWVzc2FnZS5yZWNpcGllbnQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxNc2dNaW50Pik6IE1zZ01pbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dNaW50IH0gYXMgTXNnTWludDtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gb2JqZWN0LnNlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hbW91bnQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuYW1vdW50ID0gQ29pbi5mcm9tUGFydGlhbChvYmplY3QuYW1vdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChvYmplY3QucmVjaXBpZW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnJlY2lwaWVudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5yZWNpcGllbnQgPSBvYmplY3QucmVjaXBpZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnJlY2lwaWVudCA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ01pbnRSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBNc2dNaW50UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dNaW50UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogTXNnTWludFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnTWludFJlc3BvbnNlIH0gYXMgTXNnTWludFJlc3BvbnNlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnTWludFJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnTWludFJlc3BvbnNlIH0gYXMgTXNnTWludFJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBNc2dNaW50UmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXzogRGVlcFBhcnRpYWw8TXNnTWludFJlc3BvbnNlPik6IE1zZ01pbnRSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ01pbnRSZXNwb25zZSB9IGFzIE1zZ01pbnRSZXNwb25zZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dCdXJuOiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgTXNnQnVybiA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ0J1cm4sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5zZW5kZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnNlbmRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmFtb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBDb2luLmVuY29kZShtZXNzYWdlLmFtb3VudCwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IE1zZ0J1cm4ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuIH0gYXMgTXNnQnVybjtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ0J1cm4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuIH0gYXMgTXNnQnVybjtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gU3RyaW5nKG9iamVjdC5zZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFtb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmZyb21KU09OKG9iamVjdC5hbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFtb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0J1cm4pOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uuc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5zZW5kZXIgPSBtZXNzYWdlLnNlbmRlcik7XG4gICAgbWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hbW91bnQgPSBtZXNzYWdlLmFtb3VudCA/IENvaW4udG9KU09OKG1lc3NhZ2UuYW1vdW50KSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPE1zZ0J1cm4+KTogTXNnQnVybiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0J1cm4gfSBhcyBNc2dCdXJuO1xuICAgIGlmIChvYmplY3Quc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNlbmRlciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFtb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmZyb21QYXJ0aWFsKG9iamVjdC5hbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFtb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlTXNnQnVyblJlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IE1zZ0J1cm5SZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ0J1cm5SZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNc2dCdXJuUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuUmVzcG9uc2UgfSBhcyBNc2dCdXJuUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dCdXJuUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuUmVzcG9uc2UgfSBhcyBNc2dCdXJuUmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0J1cm5SZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBEZWVwUGFydGlhbDxNc2dCdXJuUmVzcG9uc2U+KTogTXNnQnVyblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQnVyblJlc3BvbnNlIH0gYXMgTXNnQnVyblJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0NoYW5nZUFkbWluOiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiwgZGVub206IFwiXCIsIG5ld0FkbWluOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dDaGFuZ2VBZG1pbiA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ0NoYW5nZUFkbWluLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5zZW5kZXIpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZW5vbSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVub20pO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5uZXdBZG1pbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UubmV3QWRtaW4pO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogTXNnQ2hhbmdlQWRtaW4ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDaGFuZ2VBZG1pbiB9IGFzIE1zZ0NoYW5nZUFkbWluO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmRlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5uZXdBZG1pbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnQ2hhbmdlQWRtaW4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDaGFuZ2VBZG1pbiB9IGFzIE1zZ0NoYW5nZUFkbWluO1xuICAgIGlmIChvYmplY3Quc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNlbmRlciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBTdHJpbmcob2JqZWN0LnNlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZW5vbSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZW5vbSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZW5vbSA9IFN0cmluZyhvYmplY3QuZGVub20pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5uZXdBZG1pbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5uZXdBZG1pbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5uZXdBZG1pbiA9IFN0cmluZyhvYmplY3QubmV3QWRtaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm5ld0FkbWluID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0NoYW5nZUFkbWluKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgbWVzc2FnZS5uZXdBZG1pbiAhPT0gdW5kZWZpbmVkICYmIChvYmoubmV3QWRtaW4gPSBtZXNzYWdlLm5ld0FkbWluKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8TXNnQ2hhbmdlQWRtaW4+KTogTXNnQ2hhbmdlQWRtaW4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDaGFuZ2VBZG1pbiB9IGFzIE1zZ0NoYW5nZUFkbWluO1xuICAgIGlmIChvYmplY3Quc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNlbmRlciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZGVub20gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVub20gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBvYmplY3QuZGVub207XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm5ld0FkbWluICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5ld0FkbWluICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm5ld0FkbWluID0gb2JqZWN0Lm5ld0FkbWluO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm5ld0FkbWluID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSB9IGFzIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSB9IGFzIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0NoYW5nZUFkbWluUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXzogRGVlcFBhcnRpYWw8TXNnQ2hhbmdlQWRtaW5SZXNwb25zZT4pOiBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSB9IGFzIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG4vKiogTXNnIGRlZmluZXMgdGhlIE1zZyBzZXJ2aWNlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2cge1xuICBDcmVhdGVEZW5vbShyZXF1ZXN0OiBNc2dDcmVhdGVEZW5vbSk6IFByb21pc2U8TXNnQ3JlYXRlRGVub21SZXNwb25zZT47XG4gIE1pbnQocmVxdWVzdDogTXNnTWludCk6IFByb21pc2U8TXNnTWludFJlc3BvbnNlPjtcbiAgQnVybihyZXF1ZXN0OiBNc2dCdXJuKTogUHJvbWlzZTxNc2dCdXJuUmVzcG9uc2U+O1xuICAvKipcbiAgICogRm9yY2VUcmFuc2ZlciBpcyBkZWFjdGl2YXRlZCBmb3Igbm93IGJlY2F1c2Ugd2UgbmVlZCB0byB0aGluayB0aHJvdWdoIGVkZ2VcbiAgICogY2FzZXMgcnBjIEZvcmNlVHJhbnNmZXIoTXNnRm9yY2VUcmFuc2ZlcikgcmV0dXJuc1xuICAgKiAoTXNnRm9yY2VUcmFuc2ZlclJlc3BvbnNlKTtcbiAgICovXG4gIENoYW5nZUFkbWluKHJlcXVlc3Q6IE1zZ0NoYW5nZUFkbWluKTogUHJvbWlzZTxNc2dDaGFuZ2VBZG1pblJlc3BvbnNlPjtcbn1cbiJdLCJuYW1lcyI6WyJNc2dCdXJuIiwiTXNnQnVyblJlc3BvbnNlIiwiTXNnQ2hhbmdlQWRtaW4iLCJNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIiwiTXNnQ3JlYXRlRGVub20iLCJNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIiwiTXNnTWludCIsIk1zZ01pbnRSZXNwb25zZSIsInByb3RvYnVmUGFja2FnZSIsImJhc2VNc2dDcmVhdGVEZW5vbSIsInNlbmRlciIsIm5vbmNlIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInN0cmluZyIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiVWludDhBcnJheSIsIkJpbmFyeVJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJTdHJpbmciLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCIsImJhc2VNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIiwibmV3X3Rva2VuX2Rlbm9tIiwiYmFzZU1zZ01pbnQiLCJyZWNpcGllbnQiLCJhbW91bnQiLCJDb2luIiwiZm9yayIsImxkZWxpbSIsImJhc2VNc2dNaW50UmVzcG9uc2UiLCJfIiwiYmFzZU1zZ0J1cm4iLCJiYXNlTXNnQnVyblJlc3BvbnNlIiwiYmFzZU1zZ0NoYW5nZUFkbWluIiwiZGVub20iLCJuZXdBZG1pbiIsImJhc2VNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7O0lBMFZMQSxPQUFPO2VBQVBBOztJQTZFQUMsZUFBZTtlQUFmQTs7SUEwQ0FDLGNBQWM7ZUFBZEE7O0lBNkZBQyxzQkFBc0I7ZUFBdEJBOztJQS9lQUMsY0FBYztlQUFkQTs7SUE0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
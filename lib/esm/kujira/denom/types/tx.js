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
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
export const protobufPackage = "kujira.denom";
const baseMsgCreateDenom = {
    sender: "",
    nonce: ""
};
export const MsgCreateDenom = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const MsgCreateDenomResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.new_token_denom !== "") {
            writer.uint32(10).string(message.new_token_denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const MsgMint = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgMint);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
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
            message.amount = Coin.fromJSON(object.amount);
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
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
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
            message.amount = Coin.fromPartial(object.amount);
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
export const MsgMintResponse = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const MsgBurn = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgBurn);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
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
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
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
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        return message;
    }
};
const baseMsgBurnResponse = {};
export const MsgBurnResponse = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const MsgChangeAdmin = {
    encode (message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const MsgChangeAdminResponse = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvdHgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYmFzZS92MWJldGExL2NvaW5cIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmRlbm9tXCI7XG5cbi8qKlxuICogTXNnQ3JlYXRlRGVub20gaXMgdGhlIHNkay5Nc2cgdHlwZSBmb3IgYWxsb3dpbmcgYW4gYWNjb3VudCB0byBjcmVhdGVcbiAqIGEgbmV3IGRlbm9tLiAgSXQgcmVxdWlyZXMgYSBzZW5kZXIgYWRkcmVzcyBhbmQgYSB1bmlxdWUgbm9uY2VcbiAqICh0byBhbGxvdyBhY2NvdW50cyB0byBjcmVhdGUgbXVsdGlwbGUgZGVub21zKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NyZWF0ZURlbm9tIHtcbiAgc2VuZGVyOiBzdHJpbmc7XG4gIG5vbmNlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogTXNnQ3JlYXRlRGVub21SZXNwb25zZSBpcyB0aGUgcmV0dXJuIHZhbHVlIG9mIE1zZ0NyZWF0ZURlbm9tXG4gKiBJdCByZXR1cm5zIHRoZSBmdWxsIHN0cmluZyBvZiB0aGUgbmV3bHkgY3JlYXRlZCBkZW5vbVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2Uge1xuICBuZXdfdG9rZW5fZGVub206IHN0cmluZztcbn1cblxuLyoqXG4gKiBNc2dNaW50IGlzIHRoZSBzZGsuTXNnIHR5cGUgZm9yIGFsbG93aW5nIGFuIGFkbWluIGFjY291bnQgdG8gbWludFxuICogbW9yZSBvZiBhIHRva2VuLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ01pbnQge1xuICBzZW5kZXI6IHN0cmluZztcbiAgYW1vdW50OiBDb2luIHwgdW5kZWZpbmVkO1xuICByZWNpcGllbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNc2dNaW50UmVzcG9uc2Uge31cblxuLyoqXG4gKiBNc2dCdXJuIGlzIHRoZSBzZGsuTXNnIHR5cGUgZm9yIGFsbG93aW5nIGFuIGFkbWluIGFjY291bnQgdG8gYnVyblxuICogYSB0b2tlbi4gIEZvciBub3csIHdlIG9ubHkgc3VwcG9ydCBidXJuaW5nIGZyb20gdGhlIHNlbmRlciBhY2NvdW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0J1cm4ge1xuICBzZW5kZXI6IHN0cmluZztcbiAgYW1vdW50OiBDb2luIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0J1cm5SZXNwb25zZSB7fVxuXG4vKipcbiAqIE1zZ0NoYW5nZUFkbWluIGlzIHRoZSBzZGsuTXNnIHR5cGUgZm9yIGFsbG93aW5nIGFuIGFkbWluIGFjY291bnQgdG8gcmVhc3NpZ25cbiAqIGFkbWluc2hpcCBvZiBhIGRlbm9tIHRvIGEgbmV3IGFjY291bnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2dDaGFuZ2VBZG1pbiB7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBkZW5vbTogc3RyaW5nO1xuICBuZXdBZG1pbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2Uge31cblxuY29uc3QgYmFzZU1zZ0NyZWF0ZURlbm9tOiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiwgbm9uY2U6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IE1zZ0NyZWF0ZURlbm9tID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQ3JlYXRlRGVub20sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5zZW5kZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnNlbmRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNc2dDcmVhdGVEZW5vbSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0NyZWF0ZURlbm9tIH0gYXMgTXNnQ3JlYXRlRGVub207XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ0NyZWF0ZURlbm9tIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ3JlYXRlRGVub20gfSBhcyBNc2dDcmVhdGVEZW5vbTtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gU3RyaW5nKG9iamVjdC5zZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3Qubm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qubm9uY2UgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uubm9uY2UgPSBTdHJpbmcob2JqZWN0Lm5vbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5ub25jZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dDcmVhdGVEZW5vbSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxNc2dDcmVhdGVEZW5vbT4pOiBNc2dDcmVhdGVEZW5vbSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0NyZWF0ZURlbm9tIH0gYXMgTXNnQ3JlYXRlRGVub207XG4gICAgaWYgKG9iamVjdC5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2VuZGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IG9iamVjdC5zZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5ub25jZSA9IG9iamVjdC5ub25jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5ub25jZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0NyZWF0ZURlbm9tUmVzcG9uc2U6IG9iamVjdCA9IHsgbmV3X3Rva2VuX2Rlbm9tOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dDcmVhdGVEZW5vbVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQ3JlYXRlRGVub21SZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5ld190b2tlbl9kZW5vbSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UubmV3X3Rva2VuX2Rlbm9tKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIH0gYXMgTXNnQ3JlYXRlRGVub21SZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubmV3X3Rva2VuX2Rlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ3JlYXRlRGVub21SZXNwb25zZSB9IGFzIE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2U7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0Lm5ld190b2tlbl9kZW5vbSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QubmV3X3Rva2VuX2Rlbm9tICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLm5ld190b2tlbl9kZW5vbSA9IFN0cmluZyhvYmplY3QubmV3X3Rva2VuX2Rlbm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5uZXdfdG9rZW5fZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogTXNnQ3JlYXRlRGVub21SZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5uZXdfdG9rZW5fZGVub20gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5uZXdfdG9rZW5fZGVub20gPSBtZXNzYWdlLm5ld190b2tlbl9kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2U+XG4gICk6IE1zZ0NyZWF0ZURlbm9tUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDcmVhdGVEZW5vbVJlc3BvbnNlIH0gYXMgTXNnQ3JlYXRlRGVub21SZXNwb25zZTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QubmV3X3Rva2VuX2Rlbm9tICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5uZXdfdG9rZW5fZGVub20gIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UubmV3X3Rva2VuX2Rlbm9tID0gb2JqZWN0Lm5ld190b2tlbl9kZW5vbTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5uZXdfdG9rZW5fZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dNaW50OiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiwgcmVjaXBpZW50OiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dNaW50ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnTWludCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnNlbmRlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIENvaW4uZW5jb2RlKG1lc3NhZ2UuYW1vdW50LCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5yZWNpcGllbnQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLnJlY2lwaWVudCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNc2dNaW50IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnTWludCB9IGFzIE1zZ01pbnQ7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYW1vdW50ID0gQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5yZWNpcGllbnQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ01pbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dNaW50IH0gYXMgTXNnTWludDtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gU3RyaW5nKG9iamVjdC5zZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFtb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmZyb21KU09OKG9iamVjdC5hbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFtb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5yZWNpcGllbnQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucmVjaXBpZW50ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnJlY2lwaWVudCA9IFN0cmluZyhvYmplY3QucmVjaXBpZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5yZWNpcGllbnQgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogTXNnTWludCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICBtZXNzYWdlLmFtb3VudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmFtb3VudCA9IG1lc3NhZ2UuYW1vdW50ID8gQ29pbi50b0pTT04obWVzc2FnZS5hbW91bnQpIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLnJlY2lwaWVudCAhPT0gdW5kZWZpbmVkICYmIChvYmoucmVjaXBpZW50ID0gbWVzc2FnZS5yZWNpcGllbnQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxNc2dNaW50Pik6IE1zZ01pbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dNaW50IH0gYXMgTXNnTWludDtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gb2JqZWN0LnNlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hbW91bnQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuYW1vdW50ID0gQ29pbi5mcm9tUGFydGlhbChvYmplY3QuYW1vdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChvYmplY3QucmVjaXBpZW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnJlY2lwaWVudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5yZWNpcGllbnQgPSBvYmplY3QucmVjaXBpZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnJlY2lwaWVudCA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ01pbnRSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBNc2dNaW50UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dNaW50UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogTXNnTWludFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnTWludFJlc3BvbnNlIH0gYXMgTXNnTWludFJlc3BvbnNlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnTWludFJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnTWludFJlc3BvbnNlIH0gYXMgTXNnTWludFJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBNc2dNaW50UmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXzogRGVlcFBhcnRpYWw8TXNnTWludFJlc3BvbnNlPik6IE1zZ01pbnRSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ01pbnRSZXNwb25zZSB9IGFzIE1zZ01pbnRSZXNwb25zZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dCdXJuOiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgTXNnQnVybiA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ0J1cm4sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5zZW5kZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnNlbmRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmFtb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBDb2luLmVuY29kZShtZXNzYWdlLmFtb3VudCwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IE1zZ0J1cm4ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuIH0gYXMgTXNnQnVybjtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ0J1cm4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuIH0gYXMgTXNnQnVybjtcbiAgICBpZiAob2JqZWN0LnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zZW5kZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gU3RyaW5nKG9iamVjdC5zZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFtb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmZyb21KU09OKG9iamVjdC5hbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFtb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0J1cm4pOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uuc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5zZW5kZXIgPSBtZXNzYWdlLnNlbmRlcik7XG4gICAgbWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hbW91bnQgPSBtZXNzYWdlLmFtb3VudCA/IENvaW4udG9KU09OKG1lc3NhZ2UuYW1vdW50KSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPE1zZ0J1cm4+KTogTXNnQnVybiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0J1cm4gfSBhcyBNc2dCdXJuO1xuICAgIGlmIChvYmplY3Quc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNlbmRlciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuYW1vdW50ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFtb3VudCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hbW91bnQgPSBDb2luLmZyb21QYXJ0aWFsKG9iamVjdC5hbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFtb3VudCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlTXNnQnVyblJlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IE1zZ0J1cm5SZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ0J1cm5SZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNc2dCdXJuUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuUmVzcG9uc2UgfSBhcyBNc2dCdXJuUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dCdXJuUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dCdXJuUmVzcG9uc2UgfSBhcyBNc2dCdXJuUmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0J1cm5SZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBEZWVwUGFydGlhbDxNc2dCdXJuUmVzcG9uc2U+KTogTXNnQnVyblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQnVyblJlc3BvbnNlIH0gYXMgTXNnQnVyblJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0NoYW5nZUFkbWluOiBvYmplY3QgPSB7IHNlbmRlcjogXCJcIiwgZGVub206IFwiXCIsIG5ld0FkbWluOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dDaGFuZ2VBZG1pbiA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ0NoYW5nZUFkbWluLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5zZW5kZXIpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZW5vbSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVub20pO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5uZXdBZG1pbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UubmV3QWRtaW4pO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogTXNnQ2hhbmdlQWRtaW4ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDaGFuZ2VBZG1pbiB9IGFzIE1zZ0NoYW5nZUFkbWluO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmRlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5uZXdBZG1pbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnQ2hhbmdlQWRtaW4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDaGFuZ2VBZG1pbiB9IGFzIE1zZ0NoYW5nZUFkbWluO1xuICAgIGlmIChvYmplY3Quc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNlbmRlciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBTdHJpbmcob2JqZWN0LnNlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZW5vbSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZW5vbSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZW5vbSA9IFN0cmluZyhvYmplY3QuZGVub20pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5uZXdBZG1pbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5uZXdBZG1pbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5uZXdBZG1pbiA9IFN0cmluZyhvYmplY3QubmV3QWRtaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm5ld0FkbWluID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0NoYW5nZUFkbWluKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgbWVzc2FnZS5uZXdBZG1pbiAhPT0gdW5kZWZpbmVkICYmIChvYmoubmV3QWRtaW4gPSBtZXNzYWdlLm5ld0FkbWluKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8TXNnQ2hhbmdlQWRtaW4+KTogTXNnQ2hhbmdlQWRtaW4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dDaGFuZ2VBZG1pbiB9IGFzIE1zZ0NoYW5nZUFkbWluO1xuICAgIGlmIChvYmplY3Quc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNlbmRlciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnNlbmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZGVub20gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVub20gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBvYmplY3QuZGVub207XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm5ld0FkbWluICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5ld0FkbWluICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm5ld0FkbWluID0gb2JqZWN0Lm5ld0FkbWluO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm5ld0FkbWluID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSB9IGFzIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSB9IGFzIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0NoYW5nZUFkbWluUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXzogRGVlcFBhcnRpYWw8TXNnQ2hhbmdlQWRtaW5SZXNwb25zZT4pOiBNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnQ2hhbmdlQWRtaW5SZXNwb25zZSB9IGFzIE1zZ0NoYW5nZUFkbWluUmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG4vKiogTXNnIGRlZmluZXMgdGhlIE1zZyBzZXJ2aWNlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2cge1xuICBDcmVhdGVEZW5vbShyZXF1ZXN0OiBNc2dDcmVhdGVEZW5vbSk6IFByb21pc2U8TXNnQ3JlYXRlRGVub21SZXNwb25zZT47XG4gIE1pbnQocmVxdWVzdDogTXNnTWludCk6IFByb21pc2U8TXNnTWludFJlc3BvbnNlPjtcbiAgQnVybihyZXF1ZXN0OiBNc2dCdXJuKTogUHJvbWlzZTxNc2dCdXJuUmVzcG9uc2U+O1xuICAvKipcbiAgICogRm9yY2VUcmFuc2ZlciBpcyBkZWFjdGl2YXRlZCBmb3Igbm93IGJlY2F1c2Ugd2UgbmVlZCB0byB0aGluayB0aHJvdWdoIGVkZ2VcbiAgICogY2FzZXMgcnBjIEZvcmNlVHJhbnNmZXIoTXNnRm9yY2VUcmFuc2ZlcikgcmV0dXJuc1xuICAgKiAoTXNnRm9yY2VUcmFuc2ZlclJlc3BvbnNlKTtcbiAgICovXG4gIENoYW5nZUFkbWluKHJlcXVlc3Q6IE1zZ0NoYW5nZUFkbWluKTogUHJvbWlzZTxNc2dDaGFuZ2VBZG1pblJlc3BvbnNlPjtcbn1cbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJDb2luIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZU1zZ0NyZWF0ZURlbm9tIiwic2VuZGVyIiwibm9uY2UiLCJNc2dDcmVhdGVEZW5vbSIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJjcmVhdGUiLCJ1aW50MzIiLCJzdHJpbmciLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwiZnJvbVBhcnRpYWwiLCJiYXNlTXNnQ3JlYXRlRGVub21SZXNwb25zZSIsIm5ld190b2tlbl9kZW5vbSIsIk1zZ0NyZWF0ZURlbm9tUmVzcG9uc2UiLCJiYXNlTXNnTWludCIsInJlY2lwaWVudCIsIk1zZ01pbnQiLCJhbW91bnQiLCJmb3JrIiwibGRlbGltIiwiYmFzZU1zZ01pbnRSZXNwb25zZSIsIk1zZ01pbnRSZXNwb25zZSIsIl8iLCJiYXNlTXNnQnVybiIsIk1zZ0J1cm4iLCJiYXNlTXNnQnVyblJlc3BvbnNlIiwiTXNnQnVyblJlc3BvbnNlIiwiYmFzZU1zZ0NoYW5nZUFkbWluIiwiZGVub20iLCJuZXdBZG1pbiIsIk1zZ0NoYW5nZUFkbWluIiwiYmFzZU1zZ0NoYW5nZUFkbWluUmVzcG9uc2UiLCJNc2dDaGFuZ2VBZG1pblJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEIsU0FBU0EsWUFBWSxFQUFFQyxZQUFZLFFBQVEsc0JBQXNCO0FBQ2pFLFNBQVNDLElBQUksUUFBUSx3Q0FBd0M7QUFFN0QsT0FBTyxNQUFN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
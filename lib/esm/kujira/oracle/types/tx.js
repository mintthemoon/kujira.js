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
export const protobufPackage = "kujira.oracle";
const baseMsgAggregateExchangeRatePrevote = {
    hash: "",
    feeder: "",
    validator: ""
};
export const MsgAggregateExchangeRatePrevote = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.feeder !== "") {
            writer.uint32(18).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgAggregateExchangeRatePrevote);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.feeder = reader.string();
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgAggregateExchangeRatePrevote);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        } else {
            message.hash = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = String(object.feeder);
        } else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        } else {
            message.validator = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        message.feeder !== undefined && (obj.feeder = message.feeder);
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgAggregateExchangeRatePrevote);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        } else {
            message.hash = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = object.feeder;
        } else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        } else {
            message.validator = "";
        }
        return message;
    }
};
const baseMsgAggregateExchangeRatePrevoteResponse = {};
export const MsgAggregateExchangeRatePrevoteResponse = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgAggregateExchangeRatePrevoteResponse);
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
        const message = _object_spread({}, baseMsgAggregateExchangeRatePrevoteResponse);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseMsgAggregateExchangeRatePrevoteResponse);
        return message;
    }
};
const baseMsgAggregateExchangeRateVote = {
    salt: "",
    exchange_rates: "",
    feeder: "",
    validator: ""
};
export const MsgAggregateExchangeRateVote = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.salt !== "") {
            writer.uint32(10).string(message.salt);
        }
        if (message.exchange_rates !== "") {
            writer.uint32(18).string(message.exchange_rates);
        }
        if (message.feeder !== "") {
            writer.uint32(26).string(message.feeder);
        }
        if (message.validator !== "") {
            writer.uint32(34).string(message.validator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgAggregateExchangeRateVote);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.salt = reader.string();
                    break;
                case 2:
                    message.exchange_rates = reader.string();
                    break;
                case 3:
                    message.feeder = reader.string();
                    break;
                case 4:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgAggregateExchangeRateVote);
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = String(object.salt);
        } else {
            message.salt = "";
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            message.exchange_rates = String(object.exchange_rates);
        } else {
            message.exchange_rates = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = String(object.feeder);
        } else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        } else {
            message.validator = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.salt !== undefined && (obj.salt = message.salt);
        message.exchange_rates !== undefined && (obj.exchange_rates = message.exchange_rates);
        message.feeder !== undefined && (obj.feeder = message.feeder);
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgAggregateExchangeRateVote);
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = object.salt;
        } else {
            message.salt = "";
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            message.exchange_rates = object.exchange_rates;
        } else {
            message.exchange_rates = "";
        }
        if (object.feeder !== undefined && object.feeder !== null) {
            message.feeder = object.feeder;
        } else {
            message.feeder = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        } else {
            message.validator = "";
        }
        return message;
    }
};
const baseMsgAggregateExchangeRateVoteResponse = {};
export const MsgAggregateExchangeRateVoteResponse = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgAggregateExchangeRateVoteResponse);
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
        const message = _object_spread({}, baseMsgAggregateExchangeRateVoteResponse);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseMsgAggregateExchangeRateVoteResponse);
        return message;
    }
};
const baseMsgDelegateFeedConsent = {
    operator: "",
    delegate: ""
};
export const MsgDelegateFeedConsent = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.operator !== "") {
            writer.uint32(10).string(message.operator);
        }
        if (message.delegate !== "") {
            writer.uint32(18).string(message.delegate);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgDelegateFeedConsent);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.operator = reader.string();
                    break;
                case 2:
                    message.delegate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMsgDelegateFeedConsent);
        if (object.operator !== undefined && object.operator !== null) {
            message.operator = String(object.operator);
        } else {
            message.operator = "";
        }
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = String(object.delegate);
        } else {
            message.delegate = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.operator !== undefined && (obj.operator = message.operator);
        message.delegate !== undefined && (obj.delegate = message.delegate);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMsgDelegateFeedConsent);
        if (object.operator !== undefined && object.operator !== null) {
            message.operator = object.operator;
        } else {
            message.operator = "";
        }
        if (object.delegate !== undefined && object.delegate !== null) {
            message.delegate = object.delegate;
        } else {
            message.delegate = "";
        }
        return message;
    }
};
const baseMsgDelegateFeedConsentResponse = {};
export const MsgDelegateFeedConsentResponse = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMsgDelegateFeedConsentResponse);
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
        const message = _object_spread({}, baseMsgDelegateFeedConsentResponse);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseMsgDelegateFeedConsentResponse);
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3R5cGVzL3R4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gXCJjb3NtanMtdHlwZXNcIjtcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLm9yYWNsZVwiO1xuXG4vKipcbiAqIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUgcmVwcmVzZW50cyBhIG1lc3NhZ2UgdG8gc3VibWl0XG4gKiBhZ2dyZWdhdGUgZXhjaGFuZ2UgcmF0ZSBwcmV2b3RlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUge1xuICBoYXNoOiBzdHJpbmc7XG4gIGZlZWRlcjogc3RyaW5nO1xuICB2YWxpZGF0b3I6IHN0cmluZztcbn1cblxuLyoqIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSBkZWZpbmVzIHRoZSBNc2cvQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSByZXNwb25zZSB0eXBlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlUmVzcG9uc2Uge31cblxuLyoqXG4gKiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIHJlcHJlc2VudHMgYSBtZXNzYWdlIHRvIHN1Ym1pdFxuICogYWdncmVnYXRlIGV4Y2hhbmdlIHJhdGUgdm90ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIHtcbiAgc2FsdDogc3RyaW5nO1xuICBleGNoYW5nZV9yYXRlczogc3RyaW5nO1xuICBmZWVkZXI6IHN0cmluZztcbiAgdmFsaWRhdG9yOiBzdHJpbmc7XG59XG5cbi8qKiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UgZGVmaW5lcyB0aGUgTXNnL0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUgcmVzcG9uc2UgdHlwZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlIHt9XG5cbi8qKlxuICogTXNnRGVsZWdhdGVGZWVkQ29uc2VudCByZXByZXNlbnRzIGEgbWVzc2FnZSB0b1xuICogZGVsZWdhdGUgb3JhY2xlIHZvdGluZyByaWdodHMgdG8gYW5vdGhlciBhZGRyZXNzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQge1xuICBvcGVyYXRvcjogc3RyaW5nO1xuICBkZWxlZ2F0ZTogc3RyaW5nO1xufVxuXG4vKiogTXNnRGVsZWdhdGVGZWVkQ29uc2VudFJlc3BvbnNlIGRlZmluZXMgdGhlIE1zZy9EZWxlZ2F0ZUZlZWRDb25zZW50IHJlc3BvbnNlIHR5cGUuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSB7fVxuXG5jb25zdCBiYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZTogb2JqZWN0ID0ge1xuICBoYXNoOiBcIlwiLFxuICBmZWVkZXI6IFwiXCIsXG4gIHZhbGlkYXRvcjogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmhhc2ggIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmhhc2gpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5mZWVkZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmZlZWRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGU7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmhhc2ggPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmZlZWRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUsXG4gICAgfSBhcyBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlO1xuICAgIGlmIChvYmplY3QuaGFzaCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBTdHJpbmcob2JqZWN0Lmhhc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZlZWRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyID0gU3RyaW5nKG9iamVjdC5mZWVkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZlZWRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QudmFsaWRhdG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbGlkYXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3IgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaGFzaCAhPT0gdW5kZWZpbmVkICYmIChvYmouaGFzaCA9IG1lc3NhZ2UuaGFzaCk7XG4gICAgbWVzc2FnZS5mZWVkZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLmZlZWRlciA9IG1lc3NhZ2UuZmVlZGVyKTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIChvYmoudmFsaWRhdG9yID0gbWVzc2FnZS52YWxpZGF0b3IpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlPlxuICApOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUsXG4gICAgfSBhcyBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlO1xuICAgIGlmIChvYmplY3QuaGFzaCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBvYmplY3QuaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5oYXNoID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5mZWVkZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmVlZGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmZlZWRlciA9IG9iamVjdC5mZWVkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC52YWxpZGF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvciA9IG9iamVjdC52YWxpZGF0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IERlZXBQYXJ0aWFsPE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZT5cbiAgKTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlOiBvYmplY3QgPSB7XG4gIHNhbHQ6IFwiXCIsXG4gIGV4Y2hhbmdlX3JhdGVzOiBcIlwiLFxuICBmZWVkZXI6IFwiXCIsXG4gIHZhbGlkYXRvcjogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnNhbHQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnNhbHQpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5leGNoYW5nZV9yYXRlcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5mZWVkZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmZlZWRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGU7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNhbHQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5mZWVkZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZTtcbiAgICBpZiAob2JqZWN0LnNhbHQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2FsdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zYWx0ID0gU3RyaW5nKG9iamVjdC5zYWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zYWx0ID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcyA9IFN0cmluZyhvYmplY3QuZXhjaGFuZ2VfcmF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5mZWVkZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmVlZGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmZlZWRlciA9IFN0cmluZyhvYmplY3QuZmVlZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3IgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gU3RyaW5nKG9iamVjdC52YWxpZGF0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnNhbHQgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNhbHQgPSBtZXNzYWdlLnNhbHQpO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5leGNoYW5nZV9yYXRlcyA9IG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMpO1xuICAgIG1lc3NhZ2UuZmVlZGVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5mZWVkZXIgPSBtZXNzYWdlLmZlZWRlcik7XG4gICAgbWVzc2FnZS52YWxpZGF0b3IgIT09IHVuZGVmaW5lZCAmJiAob2JqLnZhbGlkYXRvciA9IG1lc3NhZ2UudmFsaWRhdG9yKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8TXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZT5cbiAgKTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZTtcbiAgICBpZiAob2JqZWN0LnNhbHQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2FsdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zYWx0ID0gb2JqZWN0LnNhbHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2FsdCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBvYmplY3QuZXhjaGFuZ2VfcmF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZlZWRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyID0gb2JqZWN0LmZlZWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3IgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gb2JqZWN0LnZhbGlkYXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3IgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UsXG4gICAgfSBhcyBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgXzogRGVlcFBhcnRpYWw8TXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlPlxuICApOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnQ6IG9iamVjdCA9IHsgb3BlcmF0b3I6IFwiXCIsIGRlbGVnYXRlOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnRGVsZWdhdGVGZWVkQ29uc2VudCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm9wZXJhdG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5vcGVyYXRvcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmRlbGVnYXRlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5kZWxlZ2F0ZSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnRGVsZWdhdGVGZWVkQ29uc2VudCB9IGFzIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQ7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm9wZXJhdG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnRGVsZWdhdGVGZWVkQ29uc2VudCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnQgfSBhcyBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50O1xuICAgIGlmIChvYmplY3Qub3BlcmF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qub3BlcmF0b3IgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uub3BlcmF0b3IgPSBTdHJpbmcob2JqZWN0Lm9wZXJhdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5vcGVyYXRvciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZGVsZWdhdGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVsZWdhdGUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVsZWdhdGUgPSBTdHJpbmcob2JqZWN0LmRlbGVnYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm9wZXJhdG9yICE9PSB1bmRlZmluZWQgJiYgKG9iai5vcGVyYXRvciA9IG1lc3NhZ2Uub3BlcmF0b3IpO1xuICAgIG1lc3NhZ2UuZGVsZWdhdGUgIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbGVnYXRlID0gbWVzc2FnZS5kZWxlZ2F0ZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQ+XG4gICk6IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dEZWxlZ2F0ZUZlZWRDb25zZW50IH0gYXMgTXNnRGVsZWdhdGVGZWVkQ29uc2VudDtcbiAgICBpZiAob2JqZWN0Lm9wZXJhdG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm9wZXJhdG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm9wZXJhdG9yID0gb2JqZWN0Lm9wZXJhdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm9wZXJhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZWxlZ2F0ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZWxlZ2F0ZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IG9iamVjdC5kZWxlZ2F0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnRGVsZWdhdGVGZWVkQ29uc2VudFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSxcbiAgICB9IGFzIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UsXG4gICAgfSBhcyBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBEZWVwUGFydGlhbDxNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2U+XG4gICk6IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UsXG4gICAgfSBhcyBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG4vKiogTXNnIGRlZmluZXMgdGhlIG9yYWNsZSBNc2cgc2VydmljZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXNnIHtcbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUgZGVmaW5lcyBhIG1ldGhvZCBmb3Igc3VibWl0dGluZ1xuICAgKiBhZ2dyZWdhdGUgZXhjaGFuZ2UgcmF0ZSBwcmV2b3RlXG4gICAqL1xuICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlKFxuICAgIHJlcXVlc3Q6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVcbiAgKTogUHJvbWlzZTxNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlUmVzcG9uc2U+O1xuICAvKipcbiAgICogQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSBkZWZpbmVzIGEgbWV0aG9kIGZvciBzdWJtaXR0aW5nXG4gICAqIGFnZ3JlZ2F0ZSBleGNoYW5nZSByYXRlIHZvdGVcbiAgICovXG4gIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUoXG4gICAgcmVxdWVzdDogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVxuICApOiBQcm9taXNlPE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVSZXNwb25zZT47XG4gIC8qKiBEZWxlZ2F0ZUZlZWRDb25zZW50IGRlZmluZXMgYSBtZXRob2QgZm9yIHNldHRpbmcgdGhlIGZlZWRlciBkZWxlZ2F0aW9uICovXG4gIERlbGVnYXRlRmVlZENvbnNlbnQoXG4gICAgcmVxdWVzdDogTXNnRGVsZWdhdGVGZWVkQ29uc2VudFxuICApOiBQcm9taXNlPE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZT47XG59XG4iXSwibmFtZXMiOlsiQmluYXJ5UmVhZGVyIiwiQmluYXJ5V3JpdGVyIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUiLCJoYXNoIiwiZmVlZGVyIiwidmFsaWRhdG9yIiwiTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJjcmVhdGUiLCJ1aW50MzIiLCJzdHJpbmciLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwiZnJvbVBhcnRpYWwiLCJiYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlIiwiTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlIiwiXyIsImJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIiwic2FsdCIsImV4Y2hhbmdlX3JhdGVzIiwiTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSIsImJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UiLCJNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UiLCJiYXNlTXNnRGVsZWdhdGVGZWVkQ29uc2VudCIsIm9wZXJhdG9yIiwiZGVsZWdhdGUiLCJNc2dEZWxlZ2F0ZUZlZWRDb25zZW50IiwiYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSIsIk1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUVqRSxPQUFPLE1BQU1DLGtCQUFrQixnQkFBZ0I7QUF5Qy9DLE1BQU1DLHNDQUE4QztJ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
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
    MsgAggregateExchangeRatePrevote: function() {
        return MsgAggregateExchangeRatePrevote;
    },
    MsgAggregateExchangeRatePrevoteResponse: function() {
        return MsgAggregateExchangeRatePrevoteResponse;
    },
    MsgAggregateExchangeRateVote: function() {
        return MsgAggregateExchangeRateVote;
    },
    MsgAggregateExchangeRateVoteResponse: function() {
        return MsgAggregateExchangeRateVoteResponse;
    },
    MsgDelegateFeedConsent: function() {
        return MsgDelegateFeedConsent;
    },
    MsgDelegateFeedConsentResponse: function() {
        return MsgDelegateFeedConsentResponse;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
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
const protobufPackage = "kujira.oracle";
const baseMsgAggregateExchangeRatePrevote = {
    hash: "",
    feeder: "",
    validator: ""
};
const MsgAggregateExchangeRatePrevote = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const MsgAggregateExchangeRatePrevoteResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const MsgAggregateExchangeRateVote = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const MsgAggregateExchangeRateVoteResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const MsgDelegateFeedConsent = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.operator !== "") {
            writer.uint32(10).string(message.operator);
        }
        if (message.delegate !== "") {
            writer.uint32(18).string(message.delegate);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const MsgDelegateFeedConsentResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3R5cGVzL3R4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gXCJjb3NtanMtdHlwZXNcIjtcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLm9yYWNsZVwiO1xuXG4vKipcbiAqIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUgcmVwcmVzZW50cyBhIG1lc3NhZ2UgdG8gc3VibWl0XG4gKiBhZ2dyZWdhdGUgZXhjaGFuZ2UgcmF0ZSBwcmV2b3RlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUge1xuICBoYXNoOiBzdHJpbmc7XG4gIGZlZWRlcjogc3RyaW5nO1xuICB2YWxpZGF0b3I6IHN0cmluZztcbn1cblxuLyoqIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSBkZWZpbmVzIHRoZSBNc2cvQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSByZXNwb25zZSB0eXBlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlUmVzcG9uc2Uge31cblxuLyoqXG4gKiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIHJlcHJlc2VudHMgYSBtZXNzYWdlIHRvIHN1Ym1pdFxuICogYWdncmVnYXRlIGV4Y2hhbmdlIHJhdGUgdm90ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIHtcbiAgc2FsdDogc3RyaW5nO1xuICBleGNoYW5nZV9yYXRlczogc3RyaW5nO1xuICBmZWVkZXI6IHN0cmluZztcbiAgdmFsaWRhdG9yOiBzdHJpbmc7XG59XG5cbi8qKiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UgZGVmaW5lcyB0aGUgTXNnL0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUgcmVzcG9uc2UgdHlwZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlIHt9XG5cbi8qKlxuICogTXNnRGVsZWdhdGVGZWVkQ29uc2VudCByZXByZXNlbnRzIGEgbWVzc2FnZSB0b1xuICogZGVsZWdhdGUgb3JhY2xlIHZvdGluZyByaWdodHMgdG8gYW5vdGhlciBhZGRyZXNzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQge1xuICBvcGVyYXRvcjogc3RyaW5nO1xuICBkZWxlZ2F0ZTogc3RyaW5nO1xufVxuXG4vKiogTXNnRGVsZWdhdGVGZWVkQ29uc2VudFJlc3BvbnNlIGRlZmluZXMgdGhlIE1zZy9EZWxlZ2F0ZUZlZWRDb25zZW50IHJlc3BvbnNlIHR5cGUuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSB7fVxuXG5jb25zdCBiYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZTogb2JqZWN0ID0ge1xuICBoYXNoOiBcIlwiLFxuICBmZWVkZXI6IFwiXCIsXG4gIHZhbGlkYXRvcjogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmhhc2ggIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmhhc2gpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5mZWVkZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmZlZWRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGU7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmhhc2ggPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmZlZWRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUsXG4gICAgfSBhcyBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlO1xuICAgIGlmIChvYmplY3QuaGFzaCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBTdHJpbmcob2JqZWN0Lmhhc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZlZWRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyID0gU3RyaW5nKG9iamVjdC5mZWVkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZlZWRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QudmFsaWRhdG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbGlkYXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3IgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaGFzaCAhPT0gdW5kZWZpbmVkICYmIChvYmouaGFzaCA9IG1lc3NhZ2UuaGFzaCk7XG4gICAgbWVzc2FnZS5mZWVkZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLmZlZWRlciA9IG1lc3NhZ2UuZmVlZGVyKTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIChvYmoudmFsaWRhdG9yID0gbWVzc2FnZS52YWxpZGF0b3IpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlPlxuICApOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUsXG4gICAgfSBhcyBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlO1xuICAgIGlmIChvYmplY3QuaGFzaCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBvYmplY3QuaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5oYXNoID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5mZWVkZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmVlZGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmZlZWRlciA9IG9iamVjdC5mZWVkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC52YWxpZGF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvciA9IG9iamVjdC52YWxpZGF0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IERlZXBQYXJ0aWFsPE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZT5cbiAgKTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlOiBvYmplY3QgPSB7XG4gIHNhbHQ6IFwiXCIsXG4gIGV4Y2hhbmdlX3JhdGVzOiBcIlwiLFxuICBmZWVkZXI6IFwiXCIsXG4gIHZhbGlkYXRvcjogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnNhbHQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnNhbHQpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5leGNoYW5nZV9yYXRlcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5mZWVkZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmZlZWRlcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgICB9IGFzIE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGU7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNhbHQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5mZWVkZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZTtcbiAgICBpZiAob2JqZWN0LnNhbHQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2FsdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zYWx0ID0gU3RyaW5nKG9iamVjdC5zYWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zYWx0ID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcyA9IFN0cmluZyhvYmplY3QuZXhjaGFuZ2VfcmF0ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5mZWVkZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmVlZGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmZlZWRlciA9IFN0cmluZyhvYmplY3QuZmVlZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3IgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gU3RyaW5nKG9iamVjdC52YWxpZGF0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnNhbHQgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNhbHQgPSBtZXNzYWdlLnNhbHQpO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5leGNoYW5nZV9yYXRlcyA9IG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMpO1xuICAgIG1lc3NhZ2UuZmVlZGVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5mZWVkZXIgPSBtZXNzYWdlLmZlZWRlcik7XG4gICAgbWVzc2FnZS52YWxpZGF0b3IgIT09IHVuZGVmaW5lZCAmJiAob2JqLnZhbGlkYXRvciA9IG1lc3NhZ2UudmFsaWRhdG9yKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8TXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZT5cbiAgKTogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZTtcbiAgICBpZiAob2JqZWN0LnNhbHQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2FsdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zYWx0ID0gb2JqZWN0LnNhbHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2FsdCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBvYmplY3QuZXhjaGFuZ2VfcmF0ZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZlZWRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyID0gb2JqZWN0LmZlZWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3IgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gb2JqZWN0LnZhbGlkYXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3IgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UsXG4gICAgfSBhcyBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgXzogRGVlcFBhcnRpYWw8TXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlPlxuICApOiBNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnQ6IG9iamVjdCA9IHsgb3BlcmF0b3I6IFwiXCIsIGRlbGVnYXRlOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnRGVsZWdhdGVGZWVkQ29uc2VudCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm9wZXJhdG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5vcGVyYXRvcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmRlbGVnYXRlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5kZWxlZ2F0ZSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTXNnRGVsZWdhdGVGZWVkQ29uc2VudCB9IGFzIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQ7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm9wZXJhdG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnRGVsZWdhdGVGZWVkQ29uc2VudCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnQgfSBhcyBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50O1xuICAgIGlmIChvYmplY3Qub3BlcmF0b3IgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qub3BlcmF0b3IgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uub3BlcmF0b3IgPSBTdHJpbmcob2JqZWN0Lm9wZXJhdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5vcGVyYXRvciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZGVsZWdhdGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVsZWdhdGUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVsZWdhdGUgPSBTdHJpbmcob2JqZWN0LmRlbGVnYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm9wZXJhdG9yICE9PSB1bmRlZmluZWQgJiYgKG9iai5vcGVyYXRvciA9IG1lc3NhZ2Uub3BlcmF0b3IpO1xuICAgIG1lc3NhZ2UuZGVsZWdhdGUgIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbGVnYXRlID0gbWVzc2FnZS5kZWxlZ2F0ZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQ+XG4gICk6IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNc2dEZWxlZ2F0ZUZlZWRDb25zZW50IH0gYXMgTXNnRGVsZWdhdGVGZWVkQ29uc2VudDtcbiAgICBpZiAob2JqZWN0Lm9wZXJhdG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm9wZXJhdG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm9wZXJhdG9yID0gb2JqZWN0Lm9wZXJhdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm9wZXJhdG9yID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZWxlZ2F0ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZWxlZ2F0ZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IG9iamVjdC5kZWxlZ2F0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZWxlZ2F0ZSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnRGVsZWdhdGVGZWVkQ29uc2VudFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSxcbiAgICB9IGFzIE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UsXG4gICAgfSBhcyBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBEZWVwUGFydGlhbDxNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2U+XG4gICk6IE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2UsXG4gICAgfSBhcyBNc2dEZWxlZ2F0ZUZlZWRDb25zZW50UmVzcG9uc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG4vKiogTXNnIGRlZmluZXMgdGhlIG9yYWNsZSBNc2cgc2VydmljZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXNnIHtcbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUgZGVmaW5lcyBhIG1ldGhvZCBmb3Igc3VibWl0dGluZ1xuICAgKiBhZ2dyZWdhdGUgZXhjaGFuZ2UgcmF0ZSBwcmV2b3RlXG4gICAqL1xuICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlKFxuICAgIHJlcXVlc3Q6IE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVcbiAgKTogUHJvbWlzZTxNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlUmVzcG9uc2U+O1xuICAvKipcbiAgICogQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSBkZWZpbmVzIGEgbWV0aG9kIGZvciBzdWJtaXR0aW5nXG4gICAqIGFnZ3JlZ2F0ZSBleGNoYW5nZSByYXRlIHZvdGVcbiAgICovXG4gIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUoXG4gICAgcmVxdWVzdDogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVxuICApOiBQcm9taXNlPE1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVSZXNwb25zZT47XG4gIC8qKiBEZWxlZ2F0ZUZlZWRDb25zZW50IGRlZmluZXMgYSBtZXRob2QgZm9yIHNldHRpbmcgdGhlIGZlZWRlciBkZWxlZ2F0aW9uICovXG4gIERlbGVnYXRlRmVlZENvbnNlbnQoXG4gICAgcmVxdWVzdDogTXNnRGVsZWdhdGVGZWVkQ29uc2VudFxuICApOiBQcm9taXNlPE1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZT47XG59XG4iXSwibmFtZXMiOlsiTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSIsIk1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVSZXNwb25zZSIsIk1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUiLCJNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlUmVzcG9uc2UiLCJNc2dEZWxlZ2F0ZUZlZWRDb25zZW50IiwiTXNnRGVsZWdhdGVGZWVkQ29uc2VudFJlc3BvbnNlIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUiLCJoYXNoIiwiZmVlZGVyIiwidmFsaWRhdG9yIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInN0cmluZyIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiVWludDhBcnJheSIsIkJpbmFyeVJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJTdHJpbmciLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCIsImJhc2VNc2dBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlUmVzcG9uc2UiLCJfIiwiYmFzZU1zZ0FnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUiLCJzYWx0IiwiZXhjaGFuZ2VfcmF0ZXMiLCJiYXNlTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZVJlc3BvbnNlIiwiYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnQiLCJvcGVyYXRvciIsImRlbGVnYXRlIiwiYmFzZU1zZ0RlbGVnYXRlRmVlZENvbnNlbnRSZXNwb25zZSJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQW1ETEEsK0JBQStCO2VBQS9CQTs7SUF3R0FDLHVDQUF1QztlQUF2Q0E7O0lBMERBQyw0QkFBNEI7ZUFBNUJBOztJQTBIQUMsb0NBQW9DO2VBQXBDQTs7SUFxREFDLHNCQUFzQjtlQUF0QkE7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
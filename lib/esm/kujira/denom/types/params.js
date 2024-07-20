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
const baseParams = {};
export const Params = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.creation_fee){
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseParams);
        message.creation_fee = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creation_fee.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseParams);
        message.creation_fee = [];
        if (object.creation_fee !== undefined && object.creation_fee !== null) {
            for (const e of object.creation_fee){
                message.creation_fee.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.creation_fee) {
            obj.creation_fee = message.creation_fee.map((e)=>e ? Coin.toJSON(e) : undefined);
        } else {
            obj.creation_fee = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseParams);
        message.creation_fee = [];
        if (object.creation_fee !== undefined && object.creation_fee !== null) {
            for (const e of object.creation_fee){
                message.creation_fee.push(Coin.fromPartial(e));
            }
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvcGFyYW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gXCJjb3NtanMtdHlwZXNcIjtcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IENvaW4gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3YxYmV0YTEvY29pblwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuZGVub21cIjtcblxuLyoqIFBhcmFtcyBob2xkcyBwYXJhbWV0ZXJzIGZvciB0aGUgZGVub20gbW9kdWxlICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XG4gIGNyZWF0aW9uX2ZlZTogQ29pbltdO1xufVxuXG5jb25zdCBiYXNlUGFyYW1zOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFBhcmFtcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFBhcmFtcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmNyZWF0aW9uX2ZlZSkge1xuICAgICAgQ29pbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBQYXJhbXMge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VQYXJhbXMgfSBhcyBQYXJhbXM7XG4gICAgbWVzc2FnZS5jcmVhdGlvbl9mZWUgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY3JlYXRpb25fZmVlLnB1c2goQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUGFyYW1zIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGFyYW1zIH0gYXMgUGFyYW1zO1xuICAgIG1lc3NhZ2UuY3JlYXRpb25fZmVlID0gW107XG4gICAgaWYgKG9iamVjdC5jcmVhdGlvbl9mZWUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY3JlYXRpb25fZmVlICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmNyZWF0aW9uX2ZlZSkge1xuICAgICAgICBtZXNzYWdlLmNyZWF0aW9uX2ZlZS5wdXNoKENvaW4uZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUGFyYW1zKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5jcmVhdGlvbl9mZWUpIHtcbiAgICAgIG9iai5jcmVhdGlvbl9mZWUgPSBtZXNzYWdlLmNyZWF0aW9uX2ZlZS5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBDb2luLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmNyZWF0aW9uX2ZlZSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UGFyYW1zPik6IFBhcmFtcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBhcmFtcyB9IGFzIFBhcmFtcztcbiAgICBtZXNzYWdlLmNyZWF0aW9uX2ZlZSA9IFtdO1xuICAgIGlmIChvYmplY3QuY3JlYXRpb25fZmVlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNyZWF0aW9uX2ZlZSAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5jcmVhdGlvbl9mZWUpIHtcbiAgICAgICAgbWVzc2FnZS5jcmVhdGlvbl9mZWUucHVzaChDb2luLmZyb21QYXJ0aWFsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJpbmFyeVJlYWRlciIsIkJpbmFyeVdyaXRlciIsIkNvaW4iLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlUGFyYW1zIiwiUGFyYW1zIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsImNyZWF0ZSIsInYiLCJjcmVhdGlvbl9mZWUiLCJ1aW50MzIiLCJmb3JrIiwibGRlbGltIiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwicHVzaCIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJlIiwidG9KU09OIiwib2JqIiwi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
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
    Params: function() {
        return Params;
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
const baseParams = {};
const Params = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.creation_fee){
            _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseParams);
        message.creation_fee = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.creation_fee.push(_coin.Coin.decode(reader, reader.uint32()));
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
                message.creation_fee.push(_coin.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.creation_fee) {
            obj.creation_fee = message.creation_fee.map((e)=>e ? _coin.Coin.toJSON(e) : undefined);
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
                message.creation_fee.push(_coin.Coin.fromPartial(e));
            }
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvcGFyYW1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gXCJjb3NtanMtdHlwZXNcIjtcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IENvaW4gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3YxYmV0YTEvY29pblwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuZGVub21cIjtcblxuLyoqIFBhcmFtcyBob2xkcyBwYXJhbWV0ZXJzIGZvciB0aGUgZGVub20gbW9kdWxlICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XG4gIGNyZWF0aW9uX2ZlZTogQ29pbltdO1xufVxuXG5jb25zdCBiYXNlUGFyYW1zOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFBhcmFtcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFBhcmFtcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmNyZWF0aW9uX2ZlZSkge1xuICAgICAgQ29pbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBQYXJhbXMge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VQYXJhbXMgfSBhcyBQYXJhbXM7XG4gICAgbWVzc2FnZS5jcmVhdGlvbl9mZWUgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY3JlYXRpb25fZmVlLnB1c2goQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUGFyYW1zIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGFyYW1zIH0gYXMgUGFyYW1zO1xuICAgIG1lc3NhZ2UuY3JlYXRpb25fZmVlID0gW107XG4gICAgaWYgKG9iamVjdC5jcmVhdGlvbl9mZWUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY3JlYXRpb25fZmVlICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmNyZWF0aW9uX2ZlZSkge1xuICAgICAgICBtZXNzYWdlLmNyZWF0aW9uX2ZlZS5wdXNoKENvaW4uZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUGFyYW1zKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5jcmVhdGlvbl9mZWUpIHtcbiAgICAgIG9iai5jcmVhdGlvbl9mZWUgPSBtZXNzYWdlLmNyZWF0aW9uX2ZlZS5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBDb2luLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmNyZWF0aW9uX2ZlZSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UGFyYW1zPik6IFBhcmFtcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBhcmFtcyB9IGFzIFBhcmFtcztcbiAgICBtZXNzYWdlLmNyZWF0aW9uX2ZlZSA9IFtdO1xuICAgIGlmIChvYmplY3QuY3JlYXRpb25fZmVlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNyZWF0aW9uX2ZlZSAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5jcmVhdGlvbl9mZWUpIHtcbiAgICAgICAgbWVzc2FnZS5jcmVhdGlvbl9mZWUucHVzaChDb2luLmZyb21QYXJ0aWFsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIlBhcmFtcyIsInByb3RvYnVmUGFja2FnZSIsImJhc2VQYXJhbXMiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiQmluYXJ5V3JpdGVyIiwiY3JlYXRlIiwidiIsImNyZWF0aW9uX2ZlZSIsIkNvaW4iLCJ1aW50MzIiLCJmb3JrIiwibGRlbGltIiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwicHVzaCIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJlIiwidG9KU09OIiwib2JqIiwi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
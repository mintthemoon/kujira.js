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
    AggregateExchangeRatePrevote: function() {
        return AggregateExchangeRatePrevote;
    },
    AggregateExchangeRateVote: function() {
        return AggregateExchangeRateVote;
    },
    Denom: function() {
        return Denom;
    },
    ExchangeRateTuple: function() {
        return ExchangeRateTuple;
    },
    Params: function() {
        return Params;
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
const baseParams = {
    vote_period: 0,
    vote_threshold: "",
    reward_band: "",
    reward_distribution_window: 0,
    slash_fraction: "",
    slash_window: 0,
    min_valid_per_window: ""
};
const Params = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.vote_period !== BigInt(0)) {
            writer.uint32(8).uint64(message.vote_period);
        }
        if (message.vote_threshold !== "") {
            writer.uint32(18).string(message.vote_threshold);
        }
        if (message.reward_band !== "") {
            writer.uint32(26).string(message.reward_band);
        }
        if (message.reward_distribution_window !== BigInt(0)) {
            writer.uint32(32).uint64(message.reward_distribution_window);
        }
        for (const v of message.whitelist){
            Denom.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.slash_fraction !== "") {
            writer.uint32(50).string(message.slash_fraction);
        }
        if (message.slash_window !== BigInt(0)) {
            writer.uint32(56).uint64(message.slash_window);
        }
        if (message.min_valid_per_window !== "") {
            writer.uint32(66).string(message.min_valid_per_window);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseParams);
        message.whitelist = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.vote_period = reader.uint64();
                    break;
                case 2:
                    message.vote_threshold = reader.string();
                    break;
                case 3:
                    message.reward_band = reader.string();
                    break;
                case 4:
                    message.reward_distribution_window = reader.uint64();
                    break;
                case 5:
                    message.whitelist.push(Denom.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.slash_fraction = reader.string();
                    break;
                case 7:
                    message.slash_window = reader.uint64();
                    break;
                case 8:
                    message.min_valid_per_window = reader.string();
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
        message.whitelist = [];
        if (object.vote_period !== undefined && object.vote_period !== null) {
            message.vote_period = BigInt(object.vote_period);
        } else {
            message.vote_period = BigInt(0);
        }
        if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
            message.vote_threshold = String(object.vote_threshold);
        } else {
            message.vote_threshold = "";
        }
        if (object.reward_band !== undefined && object.reward_band !== null) {
            message.reward_band = String(object.reward_band);
        } else {
            message.reward_band = "";
        }
        if (object.reward_distribution_window !== undefined && object.reward_distribution_window !== null) {
            message.reward_distribution_window = BigInt(object.reward_distribution_window);
        } else {
            message.reward_distribution_window = BigInt(0);
        }
        if (object.whitelist !== undefined && object.whitelist !== null) {
            for (const e of object.whitelist){
                message.whitelist.push(Denom.fromJSON(e));
            }
        }
        if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
            message.slash_fraction = String(object.slash_fraction);
        } else {
            message.slash_fraction = "";
        }
        if (object.slash_window !== undefined && object.slash_window !== null) {
            message.slash_window = BigInt(object.slash_window);
        } else {
            message.slash_window = BigInt(0);
        }
        if (object.min_valid_per_window !== undefined && object.min_valid_per_window !== null) {
            message.min_valid_per_window = String(object.min_valid_per_window);
        } else {
            message.min_valid_per_window = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.vote_period !== undefined && (obj.vote_period = message.vote_period);
        message.vote_threshold !== undefined && (obj.vote_threshold = message.vote_threshold);
        message.reward_band !== undefined && (obj.reward_band = message.reward_band);
        message.reward_distribution_window !== undefined && (obj.reward_distribution_window = message.reward_distribution_window);
        if (message.whitelist) {
            obj.whitelist = message.whitelist.map((e)=>e ? Denom.toJSON(e) : undefined);
        } else {
            obj.whitelist = [];
        }
        message.slash_fraction !== undefined && (obj.slash_fraction = message.slash_fraction);
        message.slash_window !== undefined && (obj.slash_window = message.slash_window);
        message.min_valid_per_window !== undefined && (obj.min_valid_per_window = message.min_valid_per_window);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseParams);
        message.whitelist = [];
        if (object.vote_period !== undefined && object.vote_period !== null) {
            message.vote_period = object.vote_period;
        } else {
            message.vote_period = BigInt(0);
        }
        if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
            message.vote_threshold = object.vote_threshold;
        } else {
            message.vote_threshold = "";
        }
        if (object.reward_band !== undefined && object.reward_band !== null) {
            message.reward_band = object.reward_band;
        } else {
            message.reward_band = "";
        }
        if (object.reward_distribution_window !== undefined && object.reward_distribution_window !== null) {
            message.reward_distribution_window = object.reward_distribution_window;
        } else {
            message.reward_distribution_window = BigInt(0);
        }
        if (object.whitelist !== undefined && object.whitelist !== null) {
            for (const e of object.whitelist){
                message.whitelist.push(Denom.fromPartial(e));
            }
        }
        if (object.slash_fraction !== undefined && object.slash_fraction !== null) {
            message.slash_fraction = object.slash_fraction;
        } else {
            message.slash_fraction = "";
        }
        if (object.slash_window !== undefined && object.slash_window !== null) {
            message.slash_window = object.slash_window;
        } else {
            message.slash_window = BigInt(0);
        }
        if (object.min_valid_per_window !== undefined && object.min_valid_per_window !== null) {
            message.min_valid_per_window = object.min_valid_per_window;
        } else {
            message.min_valid_per_window = "";
        }
        return message;
    }
};
const baseDenom = {
    name: ""
};
const Denom = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseDenom);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseDenom);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseDenom);
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = "";
        }
        return message;
    }
};
const baseAggregateExchangeRatePrevote = {
    hash: "",
    voter: "",
    submit_block: 0
};
const AggregateExchangeRatePrevote = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.submit_block !== BigInt(0)) {
            writer.uint32(24).uint64(message.submit_block);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseAggregateExchangeRatePrevote);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.submit_block = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseAggregateExchangeRatePrevote);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        } else {
            message.hash = "";
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = String(object.voter);
        } else {
            message.voter = "";
        }
        if (object.submit_block !== undefined && object.submit_block !== null) {
            message.submit_block = BigInt(object.submit_block);
        } else {
            message.submit_block = BigInt(0);
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        message.voter !== undefined && (obj.voter = message.voter);
        message.submit_block !== undefined && (obj.submit_block = message.submit_block);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseAggregateExchangeRatePrevote);
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        } else {
            message.hash = "";
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        } else {
            message.voter = "";
        }
        if (object.submit_block !== undefined && object.submit_block !== null) {
            message.submit_block = object.submit_block;
        } else {
            message.submit_block = BigInt(0);
        }
        return message;
    }
};
const baseAggregateExchangeRateVote = {
    voter: ""
};
const AggregateExchangeRateVote = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.exchange_rate_tuples){
            ExchangeRateTuple.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseAggregateExchangeRateVote);
        message.exchange_rate_tuples = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.exchange_rate_tuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseAggregateExchangeRateVote);
        message.exchange_rate_tuples = [];
        if (object.exchange_rate_tuples !== undefined && object.exchange_rate_tuples !== null) {
            for (const e of object.exchange_rate_tuples){
                message.exchange_rate_tuples.push(ExchangeRateTuple.fromJSON(e));
            }
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = String(object.voter);
        } else {
            message.voter = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.exchange_rate_tuples) {
            obj.exchange_rate_tuples = message.exchange_rate_tuples.map((e)=>e ? ExchangeRateTuple.toJSON(e) : undefined);
        } else {
            obj.exchange_rate_tuples = [];
        }
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseAggregateExchangeRateVote);
        message.exchange_rate_tuples = [];
        if (object.exchange_rate_tuples !== undefined && object.exchange_rate_tuples !== null) {
            for (const e of object.exchange_rate_tuples){
                message.exchange_rate_tuples.push(ExchangeRateTuple.fromPartial(e));
            }
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        } else {
            message.voter = "";
        }
        return message;
    }
};
const baseExchangeRateTuple = {
    denom: "",
    exchange_rate: ""
};
const ExchangeRateTuple = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exchange_rate !== "") {
            writer.uint32(18).string(message.exchange_rate);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseExchangeRateTuple);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exchange_rate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseExchangeRateTuple);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = "";
        }
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchange_rate = String(object.exchange_rate);
        } else {
            message.exchange_rate = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.exchange_rate !== undefined && (obj.exchange_rate = message.exchange_rate);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseExchangeRateTuple);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = "";
        }
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchange_rate = object.exchange_rate;
        } else {
            message.exchange_rate = "";
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3R5cGVzL29yYWNsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImt1amlyYS5vcmFjbGVcIjtcblxuLyoqIFBhcmFtcyBkZWZpbmVzIHRoZSBwYXJhbWV0ZXJzIGZvciB0aGUgb3JhY2xlIG1vZHVsZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1zIHtcbiAgdm90ZV9wZXJpb2Q6IGJpZ2ludDtcbiAgdm90ZV90aHJlc2hvbGQ6IHN0cmluZztcbiAgcmV3YXJkX2JhbmQ6IHN0cmluZztcbiAgcmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3c6IGJpZ2ludDtcbiAgd2hpdGVsaXN0OiBEZW5vbVtdO1xuICBzbGFzaF9mcmFjdGlvbjogc3RyaW5nO1xuICBzbGFzaF93aW5kb3c6IGJpZ2ludDtcbiAgbWluX3ZhbGlkX3Blcl93aW5kb3c6IHN0cmluZztcbn1cblxuLyoqIERlbm9tIC0gdGhlIG9iamVjdCB0byBob2xkIGNvbmZpZ3VyYXRpb25zIG9mIGVhY2ggZGVub20gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVub20ge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogc3RydWN0IGZvciBhZ2dyZWdhdGUgcHJldm90aW5nIG9uIHRoZSBFeGNoYW5nZVJhdGVWb3RlLlxuICogVGhlIHB1cnBvc2Ugb2YgYWdncmVnYXRlIHByZXZvdGUgaXMgdG8gaGlkZSB2b3RlIGV4Y2hhbmdlIHJhdGVzIHdpdGggaGFzaFxuICogd2hpY2ggaXMgZm9ybWF0dGVkIGFzIGhleCBzdHJpbmcgaW4gU0hBMjU2KFwie3NhbHR9OntleGNoYW5nZSByYXRlfXtkZW5vbX0sLi4uLHtleGNoYW5nZSByYXRlfXtkZW5vbX06e3ZvdGVyfVwiKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUge1xuICBoYXNoOiBzdHJpbmc7XG4gIHZvdGVyOiBzdHJpbmc7XG4gIHN1Ym1pdF9ibG9jazogYmlnaW50O1xufVxuXG4vKiogTXNnQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSAtIHN0cnVjdCBmb3Igdm90aW5nIG9uIGV4Y2hhbmdlIHJhdGVzLiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIHtcbiAgZXhjaGFuZ2VfcmF0ZV90dXBsZXM6IEV4Y2hhbmdlUmF0ZVR1cGxlW107XG4gIHZvdGVyOiBzdHJpbmc7XG59XG5cbi8qKiBFeGNoYW5nZVJhdGVUdXBsZSAtIHN0cnVjdCB0byBzdG9yZSBpbnRlcnByZXRlZCBleGNoYW5nZSByYXRlcyBkYXRhIHRvIHN0b3JlICovXG5leHBvcnQgaW50ZXJmYWNlIEV4Y2hhbmdlUmF0ZVR1cGxlIHtcbiAgZGVub206IHN0cmluZztcbiAgZXhjaGFuZ2VfcmF0ZTogc3RyaW5nO1xufVxuXG5jb25zdCBiYXNlUGFyYW1zOiBvYmplY3QgPSB7XG4gIHZvdGVfcGVyaW9kOiAwLFxuICB2b3RlX3RocmVzaG9sZDogXCJcIixcbiAgcmV3YXJkX2JhbmQ6IFwiXCIsXG4gIHJld2FyZF9kaXN0cmlidXRpb25fd2luZG93OiAwLFxuICBzbGFzaF9mcmFjdGlvbjogXCJcIixcbiAgc2xhc2hfd2luZG93OiAwLFxuICBtaW5fdmFsaWRfcGVyX3dpbmRvdzogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBQYXJhbXMgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBQYXJhbXMsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS52b3RlX3BlcmlvZCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLnZvdGVfcGVyaW9kKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uudm90ZV90aHJlc2hvbGQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLnZvdGVfdGhyZXNob2xkKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UucmV3YXJkX2JhbmQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLnJld2FyZF9iYW5kKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzMikudWludDY0KG1lc3NhZ2UucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS53aGl0ZWxpc3QpIHtcbiAgICAgIERlbm9tLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMig0MikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uuc2xhc2hfZnJhY3Rpb24gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNTApLnN0cmluZyhtZXNzYWdlLnNsYXNoX2ZyYWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uuc2xhc2hfd2luZG93ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNTYpLnVpbnQ2NChtZXNzYWdlLnNsYXNoX3dpbmRvdyk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm1pbl92YWxpZF9wZXJfd2luZG93ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDY2KS5zdHJpbmcobWVzc2FnZS5taW5fdmFsaWRfcGVyX3dpbmRvdyk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBQYXJhbXMge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VQYXJhbXMgfSBhcyBQYXJhbXM7XG4gICAgbWVzc2FnZS53aGl0ZWxpc3QgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uudm90ZV9wZXJpb2QgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnZvdGVfdGhyZXNob2xkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5yZXdhcmRfYmFuZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLndoaXRlbGlzdC5wdXNoKERlbm9tLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgbWVzc2FnZS5zbGFzaF9mcmFjdGlvbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIG1lc3NhZ2Uuc2xhc2hfd2luZG93ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgbWVzc2FnZS5taW5fdmFsaWRfcGVyX3dpbmRvdyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUGFyYW1zIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGFyYW1zIH0gYXMgUGFyYW1zO1xuICAgIG1lc3NhZ2Uud2hpdGVsaXN0ID0gW107XG4gICAgaWYgKG9iamVjdC52b3RlX3BlcmlvZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52b3RlX3BlcmlvZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS52b3RlX3BlcmlvZCA9IEJpZ0ludChvYmplY3Qudm90ZV9wZXJpb2QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZvdGVfcGVyaW9kID0gQmlnSW50KDApO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnZvdGVfdGhyZXNob2xkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZvdGVfdGhyZXNob2xkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZvdGVfdGhyZXNob2xkID0gU3RyaW5nKG9iamVjdC52b3RlX3RocmVzaG9sZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uudm90ZV90aHJlc2hvbGQgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnJld2FyZF9iYW5kICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnJld2FyZF9iYW5kICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnJld2FyZF9iYW5kID0gU3RyaW5nKG9iamVjdC5yZXdhcmRfYmFuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucmV3YXJkX2JhbmQgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LnJld2FyZF9kaXN0cmlidXRpb25fd2luZG93ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnJld2FyZF9kaXN0cmlidXRpb25fd2luZG93ID0gQmlnSW50KFxuICAgICAgICBvYmplY3QucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3dcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIGlmIChvYmplY3Qud2hpdGVsaXN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LndoaXRlbGlzdCAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC53aGl0ZWxpc3QpIHtcbiAgICAgICAgbWVzc2FnZS53aGl0ZWxpc3QucHVzaChEZW5vbS5mcm9tSlNPTihlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3Quc2xhc2hfZnJhY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2xhc2hfZnJhY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2xhc2hfZnJhY3Rpb24gPSBTdHJpbmcob2JqZWN0LnNsYXNoX2ZyYWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zbGFzaF9mcmFjdGlvbiA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3Quc2xhc2hfd2luZG93ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNsYXNoX3dpbmRvdyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zbGFzaF93aW5kb3cgPSBCaWdJbnQob2JqZWN0LnNsYXNoX3dpbmRvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2xhc2hfd2luZG93ID0gQmlnSW50KDApO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QubWluX3ZhbGlkX3Blcl93aW5kb3cgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0Lm1pbl92YWxpZF9wZXJfd2luZG93ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLm1pbl92YWxpZF9wZXJfd2luZG93ID0gU3RyaW5nKG9iamVjdC5taW5fdmFsaWRfcGVyX3dpbmRvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UubWluX3ZhbGlkX3Blcl93aW5kb3cgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUGFyYW1zKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZvdGVfcGVyaW9kICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudm90ZV9wZXJpb2QgPSBtZXNzYWdlLnZvdGVfcGVyaW9kKTtcbiAgICBtZXNzYWdlLnZvdGVfdGhyZXNob2xkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudm90ZV90aHJlc2hvbGQgPSBtZXNzYWdlLnZvdGVfdGhyZXNob2xkKTtcbiAgICBtZXNzYWdlLnJld2FyZF9iYW5kICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucmV3YXJkX2JhbmQgPSBtZXNzYWdlLnJld2FyZF9iYW5kKTtcbiAgICBtZXNzYWdlLnJld2FyZF9kaXN0cmlidXRpb25fd2luZG93ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgPSBtZXNzYWdlLnJld2FyZF9kaXN0cmlidXRpb25fd2luZG93KTtcbiAgICBpZiAobWVzc2FnZS53aGl0ZWxpc3QpIHtcbiAgICAgIG9iai53aGl0ZWxpc3QgPSBtZXNzYWdlLndoaXRlbGlzdC5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBEZW5vbS50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai53aGl0ZWxpc3QgPSBbXTtcbiAgICB9XG4gICAgbWVzc2FnZS5zbGFzaF9mcmFjdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnNsYXNoX2ZyYWN0aW9uID0gbWVzc2FnZS5zbGFzaF9mcmFjdGlvbik7XG4gICAgbWVzc2FnZS5zbGFzaF93aW5kb3cgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5zbGFzaF93aW5kb3cgPSBtZXNzYWdlLnNsYXNoX3dpbmRvdyk7XG4gICAgbWVzc2FnZS5taW5fdmFsaWRfcGVyX3dpbmRvdyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm1pbl92YWxpZF9wZXJfd2luZG93ID0gbWVzc2FnZS5taW5fdmFsaWRfcGVyX3dpbmRvdyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFBhcmFtcz4pOiBQYXJhbXMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VQYXJhbXMgfSBhcyBQYXJhbXM7XG4gICAgbWVzc2FnZS53aGl0ZWxpc3QgPSBbXTtcbiAgICBpZiAob2JqZWN0LnZvdGVfcGVyaW9kICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZvdGVfcGVyaW9kICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZvdGVfcGVyaW9kID0gb2JqZWN0LnZvdGVfcGVyaW9kO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZvdGVfcGVyaW9kID0gQmlnSW50KDApO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnZvdGVfdGhyZXNob2xkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZvdGVfdGhyZXNob2xkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZvdGVfdGhyZXNob2xkID0gb2JqZWN0LnZvdGVfdGhyZXNob2xkO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZvdGVfdGhyZXNob2xkID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5yZXdhcmRfYmFuZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5yZXdhcmRfYmFuZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5yZXdhcmRfYmFuZCA9IG9iamVjdC5yZXdhcmRfYmFuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5yZXdhcmRfYmFuZCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5yZXdhcmRfZGlzdHJpYnV0aW9uX3dpbmRvdyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgPSBvYmplY3QucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucmV3YXJkX2Rpc3RyaWJ1dGlvbl93aW5kb3cgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIGlmIChvYmplY3Qud2hpdGVsaXN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LndoaXRlbGlzdCAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC53aGl0ZWxpc3QpIHtcbiAgICAgICAgbWVzc2FnZS53aGl0ZWxpc3QucHVzaChEZW5vbS5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3Quc2xhc2hfZnJhY3Rpb24gIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2xhc2hfZnJhY3Rpb24gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2xhc2hfZnJhY3Rpb24gPSBvYmplY3Quc2xhc2hfZnJhY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uuc2xhc2hfZnJhY3Rpb24gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnNsYXNoX3dpbmRvdyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zbGFzaF93aW5kb3cgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc2xhc2hfd2luZG93ID0gb2JqZWN0LnNsYXNoX3dpbmRvdztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zbGFzaF93aW5kb3cgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5taW5fdmFsaWRfcGVyX3dpbmRvdyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QubWluX3ZhbGlkX3Blcl93aW5kb3cgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UubWluX3ZhbGlkX3Blcl93aW5kb3cgPSBvYmplY3QubWluX3ZhbGlkX3Blcl93aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UubWluX3ZhbGlkX3Blcl93aW5kb3cgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VEZW5vbTogb2JqZWN0ID0geyBuYW1lOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBEZW5vbSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IERlbm9tLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UubmFtZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBEZW5vbSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZURlbm9tIH0gYXMgRGVub207XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm5hbWUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IERlbm9tIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRGVub20gfSBhcyBEZW5vbTtcbiAgICBpZiAob2JqZWN0Lm5hbWUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubmFtZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5uYW1lID0gU3RyaW5nKG9iamVjdC5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5uYW1lID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IERlbm9tKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5hbWUgIT09IHVuZGVmaW5lZCAmJiAob2JqLm5hbWUgPSBtZXNzYWdlLm5hbWUpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBEZWVwUGFydGlhbDxEZW5vbT4pOiBEZW5vbSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZURlbm9tIH0gYXMgRGVub207XG4gICAgaWYgKG9iamVjdC5uYW1lICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5hbWUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubmFtZSA9IG9iamVjdC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm5hbWUgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlOiBvYmplY3QgPSB7XG4gIGhhc2g6IFwiXCIsXG4gIHZvdGVyOiBcIlwiLFxuICBzdWJtaXRfYmxvY2s6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5oYXNoICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5oYXNoKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uudm90ZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLnZvdGVyKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uuc3VibWl0X2Jsb2NrICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjQpLnVpbnQ2NChtZXNzYWdlLnN1Ym1pdF9ibG9jayk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUsXG4gICAgfSBhcyBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5oYXNoID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS52b3RlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2Uuc3VibWl0X2Jsb2NrID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUsXG4gICAgfSBhcyBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlO1xuICAgIGlmIChvYmplY3QuaGFzaCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5oYXNoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBTdHJpbmcob2JqZWN0Lmhhc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmhhc2ggPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnZvdGVyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZvdGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZvdGVyID0gU3RyaW5nKG9iamVjdC52b3Rlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uudm90ZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnN1Ym1pdF9ibG9jayAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zdWJtaXRfYmxvY2sgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc3VibWl0X2Jsb2NrID0gQmlnSW50KG9iamVjdC5zdWJtaXRfYmxvY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnN1Ym1pdF9ibG9jayA9IEJpZ0ludCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaGFzaCAhPT0gdW5kZWZpbmVkICYmIChvYmouaGFzaCA9IG1lc3NhZ2UuaGFzaCk7XG4gICAgbWVzc2FnZS52b3RlciAhPT0gdW5kZWZpbmVkICYmIChvYmoudm90ZXIgPSBtZXNzYWdlLnZvdGVyKTtcbiAgICBtZXNzYWdlLnN1Ym1pdF9ibG9jayAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnN1Ym1pdF9ibG9jayA9IG1lc3NhZ2Uuc3VibWl0X2Jsb2NrKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8QWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZT5cbiAgKTogQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLFxuICAgIH0gYXMgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZTtcbiAgICBpZiAob2JqZWN0Lmhhc2ggIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaGFzaCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5oYXNoID0gb2JqZWN0Lmhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaGFzaCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3Qudm90ZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qudm90ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uudm90ZXIgPSBvYmplY3Qudm90ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uudm90ZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LnN1Ym1pdF9ibG9jayAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zdWJtaXRfYmxvY2sgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uuc3VibWl0X2Jsb2NrID0gb2JqZWN0LnN1Ym1pdF9ibG9jaztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zdWJtaXRfYmxvY2sgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZUFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGU6IG9iamVjdCA9IHsgdm90ZXI6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZV90dXBsZXMpIHtcbiAgICAgIEV4Y2hhbmdlUmF0ZVR1cGxlLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2Uudm90ZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLnZvdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgICB9IGFzIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGU7XG4gICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlX3R1cGxlcyA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlX3R1cGxlcy5wdXNoKFxuICAgICAgICAgICAgRXhjaGFuZ2VSYXRlVHVwbGUuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnZvdGVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUsXG4gICAgfSBhcyBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZV90dXBsZXMgPSBbXTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QuZXhjaGFuZ2VfcmF0ZV90dXBsZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmV4Y2hhbmdlX3JhdGVfdHVwbGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmV4Y2hhbmdlX3JhdGVfdHVwbGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZV90dXBsZXMucHVzaChFeGNoYW5nZVJhdGVUdXBsZS5mcm9tSlNPTihlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3Qudm90ZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qudm90ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uudm90ZXIgPSBTdHJpbmcob2JqZWN0LnZvdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52b3RlciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5leGNoYW5nZV9yYXRlX3R1cGxlcykge1xuICAgICAgb2JqLmV4Y2hhbmdlX3JhdGVfdHVwbGVzID0gbWVzc2FnZS5leGNoYW5nZV9yYXRlX3R1cGxlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBFeGNoYW5nZVJhdGVUdXBsZS50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5leGNoYW5nZV9yYXRlX3R1cGxlcyA9IFtdO1xuICAgIH1cbiAgICBtZXNzYWdlLnZvdGVyICE9PSB1bmRlZmluZWQgJiYgKG9iai52b3RlciA9IG1lc3NhZ2Uudm90ZXIpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlPlxuICApOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUsXG4gICAgfSBhcyBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZV90dXBsZXMgPSBbXTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QuZXhjaGFuZ2VfcmF0ZV90dXBsZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmV4Y2hhbmdlX3JhdGVfdHVwbGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmV4Y2hhbmdlX3JhdGVfdHVwbGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZV90dXBsZXMucHVzaChFeGNoYW5nZVJhdGVUdXBsZS5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3Qudm90ZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qudm90ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2Uudm90ZXIgPSBvYmplY3Qudm90ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2Uudm90ZXIgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VFeGNoYW5nZVJhdGVUdXBsZTogb2JqZWN0ID0geyBkZW5vbTogXCJcIiwgZXhjaGFuZ2VfcmF0ZTogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgRXhjaGFuZ2VSYXRlVHVwbGUgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFeGNoYW5nZVJhdGVUdXBsZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmRlbm9tICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5kZW5vbSk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmV4Y2hhbmdlX3JhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogRXhjaGFuZ2VSYXRlVHVwbGUge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VFeGNoYW5nZVJhdGVUdXBsZSB9IGFzIEV4Y2hhbmdlUmF0ZVR1cGxlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRXhjaGFuZ2VSYXRlVHVwbGUge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VFeGNoYW5nZVJhdGVUdXBsZSB9IGFzIEV4Y2hhbmdlUmF0ZVR1cGxlO1xuICAgIGlmIChvYmplY3QuZGVub20gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVub20gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBTdHJpbmcob2JqZWN0LmRlbm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZW5vbSA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZXhjaGFuZ2VfcmF0ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgPSBTdHJpbmcob2JqZWN0LmV4Y2hhbmdlX3JhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRXhjaGFuZ2VSYXRlVHVwbGUpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXhjaGFuZ2VfcmF0ZSA9IG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPEV4Y2hhbmdlUmF0ZVR1cGxlPik6IEV4Y2hhbmdlUmF0ZVR1cGxlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRXhjaGFuZ2VSYXRlVHVwbGUgfSBhcyBFeGNoYW5nZVJhdGVUdXBsZTtcbiAgICBpZiAob2JqZWN0LmRlbm9tICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gb2JqZWN0LmRlbm9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGNoYW5nZV9yYXRlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4Y2hhbmdlX3JhdGUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZSA9IG9iamVjdC5leGNoYW5nZV9yYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSIsIkFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUiLCJEZW5vbSIsIkV4Y2hhbmdlUmF0ZVR1cGxlIiwiUGFyYW1zIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZVBhcmFtcyIsInZvdGVfcGVyaW9kIiwidm90ZV90aHJlc2hvbGQiLCJyZXdhcmRfYmFuZCIsInJld2FyZF9kaXN0cmlidXRpb25fd2luZG93Iiwic2xhc2hfZnJhY3Rpb24iLCJzbGFzaF93aW5kb3ciLCJtaW5fdmFsaWRfcGVyX3dpbmRvdyIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJjcmVhdGUiLCJCaWdJbnQiLCJ1aW50MzIiLCJ1aW50NjQiLCJzdHJpbmciLCJ2Iiwid2hpdGVsaXN0IiwiZm9yayIsImxkZWxpbSIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiVWludDhBcnJheSIsIkJpbmFyeVJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInB1c2giLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiU3RyaW5nIiwiZSIsInRvSlNPTiIsIm9iaiIsIm1hcCIsImZyb21QYXJ0aWFsIiwiYmFzZURlbm9tIiwibmFtZSIsImJhc2VBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIiwiaGFzaCIsInZvdGVyIiwic3VibWl0X2Jsb2NrIiwiYmFzZUFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUiLCJleGNoYW5nZV9yYXRlX3R1cGxlcyIsImJhc2VFeGNoYW5nZVJhdGVUdXBsZSIsImRlbm9tIiwiZXhjaGFuZ2VfcmF0ZSJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQXVVTEEsNEJBQTRCO2VBQTVCQTs7SUF5R0FDLHlCQUF5Qjtl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
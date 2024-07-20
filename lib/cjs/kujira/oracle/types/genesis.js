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
    FeederDelegation: function() {
        return FeederDelegation;
    },
    GenesisState: function() {
        return GenesisState;
    },
    MissCounter: function() {
        return MissCounter;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _oracle = require("./oracle");
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
const baseGenesisState = {};
const GenesisState = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.params !== undefined) {
            _oracle.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feeder_delegations){
            FeederDelegation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.exchange_rates){
            _oracle.ExchangeRateTuple.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.miss_counters){
            MissCounter.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.aggregate_exchange_rate_prevotes){
            _oracle.AggregateExchangeRatePrevote.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.aggregate_exchange_rate_votes){
            _oracle.AggregateExchangeRateVote.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseGenesisState);
        message.feeder_delegations = [];
        message.exchange_rates = [];
        message.miss_counters = [];
        message.aggregate_exchange_rate_prevotes = [];
        message.aggregate_exchange_rate_votes = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = _oracle.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feeder_delegations.push(FeederDelegation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.exchange_rates.push(_oracle.ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.miss_counters.push(MissCounter.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.aggregate_exchange_rate_prevotes.push(_oracle.AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.aggregate_exchange_rate_votes.push(_oracle.AggregateExchangeRateVote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseGenesisState);
        message.feeder_delegations = [];
        message.exchange_rates = [];
        message.miss_counters = [];
        message.aggregate_exchange_rate_prevotes = [];
        message.aggregate_exchange_rate_votes = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = _oracle.Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        if (object.feeder_delegations !== undefined && object.feeder_delegations !== null) {
            for (const e of object.feeder_delegations){
                message.feeder_delegations.push(FeederDelegation.fromJSON(e));
            }
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates){
                message.exchange_rates.push(_oracle.ExchangeRateTuple.fromJSON(e));
            }
        }
        if (object.miss_counters !== undefined && object.miss_counters !== null) {
            for (const e of object.miss_counters){
                message.miss_counters.push(MissCounter.fromJSON(e));
            }
        }
        if (object.aggregate_exchange_rate_prevotes !== undefined && object.aggregate_exchange_rate_prevotes !== null) {
            for (const e of object.aggregate_exchange_rate_prevotes){
                message.aggregate_exchange_rate_prevotes.push(_oracle.AggregateExchangeRatePrevote.fromJSON(e));
            }
        }
        if (object.aggregate_exchange_rate_votes !== undefined && object.aggregate_exchange_rate_votes !== null) {
            for (const e of object.aggregate_exchange_rate_votes){
                message.aggregate_exchange_rate_votes.push(_oracle.AggregateExchangeRateVote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? _oracle.Params.toJSON(message.params) : undefined);
        if (message.feeder_delegations) {
            obj.feeder_delegations = message.feeder_delegations.map((e)=>e ? FeederDelegation.toJSON(e) : undefined);
        } else {
            obj.feeder_delegations = [];
        }
        if (message.exchange_rates) {
            obj.exchange_rates = message.exchange_rates.map((e)=>e ? _oracle.ExchangeRateTuple.toJSON(e) : undefined);
        } else {
            obj.exchange_rates = [];
        }
        if (message.miss_counters) {
            obj.miss_counters = message.miss_counters.map((e)=>e ? MissCounter.toJSON(e) : undefined);
        } else {
            obj.miss_counters = [];
        }
        if (message.aggregate_exchange_rate_prevotes) {
            obj.aggregate_exchange_rate_prevotes = message.aggregate_exchange_rate_prevotes.map((e)=>e ? _oracle.AggregateExchangeRatePrevote.toJSON(e) : undefined);
        } else {
            obj.aggregate_exchange_rate_prevotes = [];
        }
        if (message.aggregate_exchange_rate_votes) {
            obj.aggregate_exchange_rate_votes = message.aggregate_exchange_rate_votes.map((e)=>e ? _oracle.AggregateExchangeRateVote.toJSON(e) : undefined);
        } else {
            obj.aggregate_exchange_rate_votes = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseGenesisState);
        message.feeder_delegations = [];
        message.exchange_rates = [];
        message.miss_counters = [];
        message.aggregate_exchange_rate_prevotes = [];
        message.aggregate_exchange_rate_votes = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = _oracle.Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        if (object.feeder_delegations !== undefined && object.feeder_delegations !== null) {
            for (const e of object.feeder_delegations){
                message.feeder_delegations.push(FeederDelegation.fromPartial(e));
            }
        }
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates){
                message.exchange_rates.push(_oracle.ExchangeRateTuple.fromPartial(e));
            }
        }
        if (object.miss_counters !== undefined && object.miss_counters !== null) {
            for (const e of object.miss_counters){
                message.miss_counters.push(MissCounter.fromPartial(e));
            }
        }
        if (object.aggregate_exchange_rate_prevotes !== undefined && object.aggregate_exchange_rate_prevotes !== null) {
            for (const e of object.aggregate_exchange_rate_prevotes){
                message.aggregate_exchange_rate_prevotes.push(_oracle.AggregateExchangeRatePrevote.fromPartial(e));
            }
        }
        if (object.aggregate_exchange_rate_votes !== undefined && object.aggregate_exchange_rate_votes !== null) {
            for (const e of object.aggregate_exchange_rate_votes){
                message.aggregate_exchange_rate_votes.push(_oracle.AggregateExchangeRateVote.fromPartial(e));
            }
        }
        return message;
    }
};
const baseFeederDelegation = {
    feeder_address: "",
    validator_address: ""
};
const FeederDelegation = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.feeder_address !== "") {
            writer.uint32(10).string(message.feeder_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseFeederDelegation);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.feeder_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseFeederDelegation);
        if (object.feeder_address !== undefined && object.feeder_address !== null) {
            message.feeder_address = String(object.feeder_address);
        } else {
            message.feeder_address = "";
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        } else {
            message.validator_address = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.feeder_address !== undefined && (obj.feeder_address = message.feeder_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseFeederDelegation);
        if (object.feeder_address !== undefined && object.feeder_address !== null) {
            message.feeder_address = object.feeder_address;
        } else {
            message.feeder_address = "";
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        } else {
            message.validator_address = "";
        }
        return message;
    }
};
const baseMissCounter = {
    validator_address: "",
    miss_counter: 0
};
const MissCounter = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.miss_counter !== BigInt(0)) {
            writer.uint32(16).uint64(message.miss_counter);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseMissCounter);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.miss_counter = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseMissCounter);
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = String(object.validator_address);
        } else {
            message.validator_address = "";
        }
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = BigInt(object.miss_counter);
        } else {
            message.miss_counter = BigInt(0);
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.miss_counter !== undefined && (obj.miss_counter = message.miss_counter);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseMissCounter);
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        } else {
            message.validator_address = "";
        }
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = object.miss_counter;
        } else {
            message.miss_counter = BigInt(0);
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3R5cGVzL2dlbmVzaXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHtcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgRXhjaGFuZ2VSYXRlVHVwbGUsXG4gIFBhcmFtcyxcbn0gZnJvbSBcIi4vb3JhY2xlXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImt1amlyYS5vcmFjbGVcIjtcblxuLyoqIEdlbmVzaXNTdGF0ZSBkZWZpbmVzIHRoZSBvcmFjbGUgbW9kdWxlJ3MgZ2VuZXNpcyBzdGF0ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc1N0YXRlIHtcbiAgcGFyYW1zOiBQYXJhbXMgfCB1bmRlZmluZWQ7XG4gIGZlZWRlcl9kZWxlZ2F0aW9uczogRmVlZGVyRGVsZWdhdGlvbltdO1xuICBleGNoYW5nZV9yYXRlczogRXhjaGFuZ2VSYXRlVHVwbGVbXTtcbiAgbWlzc19jb3VudGVyczogTWlzc0NvdW50ZXJbXTtcbiAgYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXM6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVbXTtcbiAgYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXM6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVbXTtcbn1cblxuLyoqXG4gKiBGZWVkZXJEZWxlZ2F0aW9uIGlzIHRoZSBhZGRyZXNzIGZvciB3aGVyZSBvcmFjbGUgZmVlZGVyIGF1dGhvcml0eSBhcmVcbiAqIGRlbGVnYXRlZCB0by4gQnkgZGVmYXVsdCB0aGlzIHN0cnVjdCBpcyBvbmx5IHVzZWQgYXQgZ2VuZXNpcyB0byBmZWVkIGluXG4gKiBkZWZhdWx0IGZlZWRlciBhZGRyZXNzZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmVlZGVyRGVsZWdhdGlvbiB7XG4gIGZlZWRlcl9hZGRyZXNzOiBzdHJpbmc7XG4gIHZhbGlkYXRvcl9hZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8qKlxuICogTWlzc0NvdW50ZXIgZGVmaW5lcyBhbiBtaXNzIGNvdW50ZXIgYW5kIHZhbGlkYXRvciBhZGRyZXNzIHBhaXIgdXNlZCBpblxuICogb3JhY2xlIG1vZHVsZSdzIGdlbmVzaXMgc3RhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNaXNzQ291bnRlciB7XG4gIHZhbGlkYXRvcl9hZGRyZXNzOiBzdHJpbmc7XG4gIG1pc3NfY291bnRlcjogYmlnaW50O1xufVxuXG5jb25zdCBiYXNlR2VuZXNpc1N0YXRlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IEdlbmVzaXNTdGF0ZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEdlbmVzaXNTdGF0ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYXJhbXMuZW5jb2RlKG1lc3NhZ2UucGFyYW1zLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMpIHtcbiAgICAgIEZlZWRlckRlbGVnYXRpb24uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5leGNoYW5nZV9yYXRlcykge1xuICAgICAgRXhjaGFuZ2VSYXRlVHVwbGUuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDI2KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5taXNzX2NvdW50ZXJzKSB7XG4gICAgICBNaXNzQ291bnRlci5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMzQpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzKSB7XG4gICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmVuY29kZShcbiAgICAgICAgdiEsXG4gICAgICAgIHdyaXRlci51aW50MzIoNDIpLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXMpIHtcbiAgICAgIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDUwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogR2VuZXNpc1N0YXRlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc1N0YXRlIH0gYXMgR2VuZXNpc1N0YXRlO1xuICAgIG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zID0gW107XG4gICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcyA9IFtdO1xuICAgIG1lc3NhZ2UubWlzc19jb3VudGVycyA9IFtdO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMgPSBbXTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMucHVzaChcbiAgICAgICAgICAgIEZlZWRlckRlbGVnYXRpb24uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzLnB1c2goXG4gICAgICAgICAgICBFeGNoYW5nZVJhdGVUdXBsZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVycy5wdXNoKFxuICAgICAgICAgICAgTWlzc0NvdW50ZXIuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzLnB1c2goXG4gICAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcy5wdXNoKFxuICAgICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogR2VuZXNpc1N0YXRlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc1N0YXRlIH0gYXMgR2VuZXNpc1N0YXRlO1xuICAgIG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zID0gW107XG4gICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcyA9IFtdO1xuICAgIG1lc3NhZ2UubWlzc19jb3VudGVycyA9IFtdO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMgPSBbXTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzID0gW107XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tSlNPTihvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5mZWVkZXJfZGVsZWdhdGlvbnMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmZlZWRlcl9kZWxlZ2F0aW9ucyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5mZWVkZXJfZGVsZWdhdGlvbnMpIHtcbiAgICAgICAgbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMucHVzaChGZWVkZXJEZWxlZ2F0aW9uLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5leGNoYW5nZV9yYXRlcykge1xuICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzLnB1c2goRXhjaGFuZ2VSYXRlVHVwbGUuZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlcnMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubWlzc19jb3VudGVycyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5taXNzX2NvdW50ZXJzKSB7XG4gICAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVycy5wdXNoKE1pc3NDb3VudGVyLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3RlcyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzLnB1c2goXG4gICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5mcm9tSlNPTihlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXMucHVzaChcbiAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmZyb21KU09OKGUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBHZW5lc2lzU3RhdGUpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgaWYgKG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zKSB7XG4gICAgICBvYmouZmVlZGVyX2RlbGVnYXRpb25zID0gbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMubWFwKChlKSA9PlxuICAgICAgICBlID8gRmVlZGVyRGVsZWdhdGlvbi50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mZWVkZXJfZGVsZWdhdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMpIHtcbiAgICAgIG9iai5leGNoYW5nZV9yYXRlcyA9IG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMubWFwKChlKSA9PlxuICAgICAgICBlID8gRXhjaGFuZ2VSYXRlVHVwbGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UubWlzc19jb3VudGVycykge1xuICAgICAgb2JqLm1pc3NfY291bnRlcnMgPSBtZXNzYWdlLm1pc3NfY291bnRlcnMubWFwKChlKSA9PlxuICAgICAgICBlID8gTWlzc0NvdW50ZXIudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWlzc19jb3VudGVycyA9IFtdO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcykge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzID1cbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcy5tYXAoKGUpID0+XG4gICAgICAgICAgZSA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3RlcyA9IFtdO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcykge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzID1cbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcy5tYXAoKGUpID0+XG4gICAgICAgICAgZSA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3RlcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8R2VuZXNpc1N0YXRlPik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmZlZWRlcl9kZWxlZ2F0aW9ucyA9IFtdO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICBtZXNzYWdlLm1pc3NfY291bnRlcnMgPSBbXTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzID0gW107XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3RlcyA9IFtdO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbVBhcnRpYWwob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QuZmVlZGVyX2RlbGVnYXRpb25zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5mZWVkZXJfZGVsZWdhdGlvbnMgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZmVlZGVyX2RlbGVnYXRpb25zKSB7XG4gICAgICAgIG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zLnB1c2goRmVlZGVyRGVsZWdhdGlvbi5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZXhjaGFuZ2VfcmF0ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcy5wdXNoKEV4Y2hhbmdlUmF0ZVR1cGxlLmZyb21QYXJ0aWFsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9iamVjdC5taXNzX2NvdW50ZXJzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm1pc3NfY291bnRlcnMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QubWlzc19jb3VudGVycykge1xuICAgICAgICBtZXNzYWdlLm1pc3NfY291bnRlcnMucHVzaChNaXNzQ291bnRlci5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3RlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcy5wdXNoKFxuICAgICAgICAgIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUuZnJvbVBhcnRpYWwoZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3RlcyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzLnB1c2goXG4gICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS5mcm9tUGFydGlhbChlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VGZWVkZXJEZWxlZ2F0aW9uOiBvYmplY3QgPSB7XG4gIGZlZWRlcl9hZGRyZXNzOiBcIlwiLFxuICB2YWxpZGF0b3JfYWRkcmVzczogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBGZWVkZXJEZWxlZ2F0aW9uID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRmVlZGVyRGVsZWdhdGlvbixcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmZlZWRlcl9hZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5mZWVkZXJfYWRkcmVzcyk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS52YWxpZGF0b3JfYWRkcmVzcyk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBGZWVkZXJEZWxlZ2F0aW9uIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRmVlZGVyRGVsZWdhdGlvbiB9IGFzIEZlZWRlckRlbGVnYXRpb247XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmZlZWRlcl9hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRmVlZGVyRGVsZWdhdGlvbiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUZlZWRlckRlbGVnYXRpb24gfSBhcyBGZWVkZXJEZWxlZ2F0aW9uO1xuICAgIGlmIChvYmplY3QuZmVlZGVyX2FkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmVlZGVyX2FkZHJlc3MgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyX2FkZHJlc3MgPSBTdHJpbmcob2JqZWN0LmZlZWRlcl9hZGRyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkcmVzcyA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkcmVzcyA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBGZWVkZXJEZWxlZ2F0aW9uKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmZlZWRlcl9hZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZmVlZGVyX2FkZHJlc3MgPSBtZXNzYWdlLmZlZWRlcl9hZGRyZXNzKTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yX2FkZHJlc3MgPSBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8RmVlZGVyRGVsZWdhdGlvbj4pOiBGZWVkZXJEZWxlZ2F0aW9uIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRmVlZGVyRGVsZWdhdGlvbiB9IGFzIEZlZWRlckRlbGVnYXRpb247XG4gICAgaWYgKG9iamVjdC5mZWVkZXJfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXJfYWRkcmVzcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkcmVzcyA9IG9iamVjdC5mZWVkZXJfYWRkcmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkcmVzcyA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNaXNzQ291bnRlcjogb2JqZWN0ID0geyB2YWxpZGF0b3JfYWRkcmVzczogXCJcIiwgbWlzc19jb3VudGVyOiAwIH07XG5cbmV4cG9ydCBjb25zdCBNaXNzQ291bnRlciA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1pc3NDb3VudGVyLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UubWlzc19jb3VudGVyICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLnVpbnQ2NChtZXNzYWdlLm1pc3NfY291bnRlcik7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNaXNzQ291bnRlciB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1pc3NDb3VudGVyIH0gYXMgTWlzc0NvdW50ZXI7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5taXNzX2NvdW50ZXIgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1pc3NDb3VudGVyIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTWlzc0NvdW50ZXIgfSBhcyBNaXNzQ291bnRlcjtcbiAgICBpZiAoXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LnZhbGlkYXRvcl9hZGRyZXNzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzID0gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5taXNzX2NvdW50ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gQmlnSW50KG9iamVjdC5taXNzX2NvdW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IEJpZ0ludCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1pc3NDb3VudGVyKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yX2FkZHJlc3MgPSBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICBtZXNzYWdlLm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm1pc3NfY291bnRlciA9IG1lc3NhZ2UubWlzc19jb3VudGVyKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8TWlzc0NvdW50ZXI+KTogTWlzc0NvdW50ZXIge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNaXNzQ291bnRlciB9IGFzIE1pc3NDb3VudGVyO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5taXNzX2NvdW50ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gb2JqZWN0Lm1pc3NfY291bnRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5taXNzX2NvdW50ZXIgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJGZWVkZXJEZWxlZ2F0aW9uIiwiR2VuZXNpc1N0YXRlIiwiTWlzc0NvdW50ZXIiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlR2VuZXNpc1N0YXRlIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInBhcmFtcyIsInVuZGVmaW5lZCIsIlBhcmFtcyIsInVpbnQzMiIsImZvcmsiLCJsZGVsaW0iLCJ2IiwiZmVlZGVyX2RlbGVnYXRpb25zIiwiZXhjaGFuZ2VfcmF0ZXMiLCJFeGNoYW5nZVJhdGVUdXBsZSIsIm1pc3NfY291bnRlcnMiLCJhZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3RlcyIsIkFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUiLCJhZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3RlcyIsIkFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUiLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJCaW5hcnlSZWFkZXIiLCJlbmQiLCJsZW4iLCJwb3MiLCJ0YWciLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsImUiLCJ0b0pTT04iLCJvYmoiLCJtYXAiLCJmcm9tUGFydGlhbCIsImJhc2VGZWVkZXJEZWxlZ2F0aW9uIiwiZmVlZGVyX2FkZHJlc3MiLCJ2YWxpZGF0b3JfYWRkcmVzcyIsInN0cmluZyIsIlN0cmluZyIsImJhc2VNaXNzQ291bnRlciIsIm1pc3NfY291bnRlciIsIkJpZ0ludCIsInVpbnQ2NCJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQXFSTEEsZ0JBQWdCO2VBQWhCQTs7SUExT0FDLFlBQVk7ZUFBWkE7O0lBOFRBQyxXQUFXO2VBQVhBOztJQS9WQUMsZUFBZTtlQUFmQTs7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
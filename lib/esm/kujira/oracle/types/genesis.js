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
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, ExchangeRateTuple, Params } from "./oracle";
export const protobufPackage = "kujira.oracle";
const baseGenesisState = {};
export const GenesisState = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feeder_delegations){
            FeederDelegation.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.exchange_rates){
            ExchangeRateTuple.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.miss_counters){
            MissCounter.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.aggregate_exchange_rate_prevotes){
            AggregateExchangeRatePrevote.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.aggregate_exchange_rate_votes){
            AggregateExchangeRateVote.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feeder_delegations.push(FeederDelegation.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.exchange_rates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.miss_counters.push(MissCounter.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.aggregate_exchange_rate_prevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.aggregate_exchange_rate_votes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
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
            message.params = Params.fromJSON(object.params);
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
                message.exchange_rates.push(ExchangeRateTuple.fromJSON(e));
            }
        }
        if (object.miss_counters !== undefined && object.miss_counters !== null) {
            for (const e of object.miss_counters){
                message.miss_counters.push(MissCounter.fromJSON(e));
            }
        }
        if (object.aggregate_exchange_rate_prevotes !== undefined && object.aggregate_exchange_rate_prevotes !== null) {
            for (const e of object.aggregate_exchange_rate_prevotes){
                message.aggregate_exchange_rate_prevotes.push(AggregateExchangeRatePrevote.fromJSON(e));
            }
        }
        if (object.aggregate_exchange_rate_votes !== undefined && object.aggregate_exchange_rate_votes !== null) {
            for (const e of object.aggregate_exchange_rate_votes){
                message.aggregate_exchange_rate_votes.push(AggregateExchangeRateVote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.feeder_delegations) {
            obj.feeder_delegations = message.feeder_delegations.map((e)=>e ? FeederDelegation.toJSON(e) : undefined);
        } else {
            obj.feeder_delegations = [];
        }
        if (message.exchange_rates) {
            obj.exchange_rates = message.exchange_rates.map((e)=>e ? ExchangeRateTuple.toJSON(e) : undefined);
        } else {
            obj.exchange_rates = [];
        }
        if (message.miss_counters) {
            obj.miss_counters = message.miss_counters.map((e)=>e ? MissCounter.toJSON(e) : undefined);
        } else {
            obj.miss_counters = [];
        }
        if (message.aggregate_exchange_rate_prevotes) {
            obj.aggregate_exchange_rate_prevotes = message.aggregate_exchange_rate_prevotes.map((e)=>e ? AggregateExchangeRatePrevote.toJSON(e) : undefined);
        } else {
            obj.aggregate_exchange_rate_prevotes = [];
        }
        if (message.aggregate_exchange_rate_votes) {
            obj.aggregate_exchange_rate_votes = message.aggregate_exchange_rate_votes.map((e)=>e ? AggregateExchangeRateVote.toJSON(e) : undefined);
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
            message.params = Params.fromPartial(object.params);
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
                message.exchange_rates.push(ExchangeRateTuple.fromPartial(e));
            }
        }
        if (object.miss_counters !== undefined && object.miss_counters !== null) {
            for (const e of object.miss_counters){
                message.miss_counters.push(MissCounter.fromPartial(e));
            }
        }
        if (object.aggregate_exchange_rate_prevotes !== undefined && object.aggregate_exchange_rate_prevotes !== null) {
            for (const e of object.aggregate_exchange_rate_prevotes){
                message.aggregate_exchange_rate_prevotes.push(AggregateExchangeRatePrevote.fromPartial(e));
            }
        }
        if (object.aggregate_exchange_rate_votes !== undefined && object.aggregate_exchange_rate_votes !== null) {
            for (const e of object.aggregate_exchange_rate_votes){
                message.aggregate_exchange_rate_votes.push(AggregateExchangeRateVote.fromPartial(e));
            }
        }
        return message;
    }
};
const baseFeederDelegation = {
    feeder_address: "",
    validator_address: ""
};
export const FeederDelegation = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.feeder_address !== "") {
            writer.uint32(10).string(message.feeder_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const MissCounter = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.miss_counter !== BigInt(0)) {
            writer.uint32(16).uint64(message.miss_counter);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3R5cGVzL2dlbmVzaXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHtcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgRXhjaGFuZ2VSYXRlVHVwbGUsXG4gIFBhcmFtcyxcbn0gZnJvbSBcIi4vb3JhY2xlXCI7XG5cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImt1amlyYS5vcmFjbGVcIjtcblxuLyoqIEdlbmVzaXNTdGF0ZSBkZWZpbmVzIHRoZSBvcmFjbGUgbW9kdWxlJ3MgZ2VuZXNpcyBzdGF0ZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2VuZXNpc1N0YXRlIHtcbiAgcGFyYW1zOiBQYXJhbXMgfCB1bmRlZmluZWQ7XG4gIGZlZWRlcl9kZWxlZ2F0aW9uczogRmVlZGVyRGVsZWdhdGlvbltdO1xuICBleGNoYW5nZV9yYXRlczogRXhjaGFuZ2VSYXRlVHVwbGVbXTtcbiAgbWlzc19jb3VudGVyczogTWlzc0NvdW50ZXJbXTtcbiAgYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXM6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGVbXTtcbiAgYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXM6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGVbXTtcbn1cblxuLyoqXG4gKiBGZWVkZXJEZWxlZ2F0aW9uIGlzIHRoZSBhZGRyZXNzIGZvciB3aGVyZSBvcmFjbGUgZmVlZGVyIGF1dGhvcml0eSBhcmVcbiAqIGRlbGVnYXRlZCB0by4gQnkgZGVmYXVsdCB0aGlzIHN0cnVjdCBpcyBvbmx5IHVzZWQgYXQgZ2VuZXNpcyB0byBmZWVkIGluXG4gKiBkZWZhdWx0IGZlZWRlciBhZGRyZXNzZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmVlZGVyRGVsZWdhdGlvbiB7XG4gIGZlZWRlcl9hZGRyZXNzOiBzdHJpbmc7XG4gIHZhbGlkYXRvcl9hZGRyZXNzOiBzdHJpbmc7XG59XG5cbi8qKlxuICogTWlzc0NvdW50ZXIgZGVmaW5lcyBhbiBtaXNzIGNvdW50ZXIgYW5kIHZhbGlkYXRvciBhZGRyZXNzIHBhaXIgdXNlZCBpblxuICogb3JhY2xlIG1vZHVsZSdzIGdlbmVzaXMgc3RhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNaXNzQ291bnRlciB7XG4gIHZhbGlkYXRvcl9hZGRyZXNzOiBzdHJpbmc7XG4gIG1pc3NfY291bnRlcjogYmlnaW50O1xufVxuXG5jb25zdCBiYXNlR2VuZXNpc1N0YXRlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IEdlbmVzaXNTdGF0ZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEdlbmVzaXNTdGF0ZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYXJhbXMuZW5jb2RlKG1lc3NhZ2UucGFyYW1zLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMpIHtcbiAgICAgIEZlZWRlckRlbGVnYXRpb24uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5leGNoYW5nZV9yYXRlcykge1xuICAgICAgRXhjaGFuZ2VSYXRlVHVwbGUuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDI2KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5taXNzX2NvdW50ZXJzKSB7XG4gICAgICBNaXNzQ291bnRlci5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMzQpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzKSB7XG4gICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmVuY29kZShcbiAgICAgICAgdiEsXG4gICAgICAgIHdyaXRlci51aW50MzIoNDIpLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXMpIHtcbiAgICAgIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDUwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogR2VuZXNpc1N0YXRlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc1N0YXRlIH0gYXMgR2VuZXNpc1N0YXRlO1xuICAgIG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zID0gW107XG4gICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcyA9IFtdO1xuICAgIG1lc3NhZ2UubWlzc19jb3VudGVycyA9IFtdO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMgPSBbXTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMucHVzaChcbiAgICAgICAgICAgIEZlZWRlckRlbGVnYXRpb24uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzLnB1c2goXG4gICAgICAgICAgICBFeGNoYW5nZVJhdGVUdXBsZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVycy5wdXNoKFxuICAgICAgICAgICAgTWlzc0NvdW50ZXIuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzLnB1c2goXG4gICAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcy5wdXNoKFxuICAgICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogR2VuZXNpc1N0YXRlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlR2VuZXNpc1N0YXRlIH0gYXMgR2VuZXNpc1N0YXRlO1xuICAgIG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zID0gW107XG4gICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcyA9IFtdO1xuICAgIG1lc3NhZ2UubWlzc19jb3VudGVycyA9IFtdO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMgPSBbXTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzID0gW107XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tSlNPTihvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5mZWVkZXJfZGVsZWdhdGlvbnMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmZlZWRlcl9kZWxlZ2F0aW9ucyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5mZWVkZXJfZGVsZWdhdGlvbnMpIHtcbiAgICAgICAgbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMucHVzaChGZWVkZXJEZWxlZ2F0aW9uLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5leGNoYW5nZV9yYXRlcykge1xuICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzLnB1c2goRXhjaGFuZ2VSYXRlVHVwbGUuZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlcnMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubWlzc19jb3VudGVycyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5taXNzX2NvdW50ZXJzKSB7XG4gICAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVycy5wdXNoKE1pc3NDb3VudGVyLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3RlcyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzLnB1c2goXG4gICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5mcm9tSlNPTihlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXMucHVzaChcbiAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmZyb21KU09OKGUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBHZW5lc2lzU3RhdGUpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgaWYgKG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zKSB7XG4gICAgICBvYmouZmVlZGVyX2RlbGVnYXRpb25zID0gbWVzc2FnZS5mZWVkZXJfZGVsZWdhdGlvbnMubWFwKChlKSA9PlxuICAgICAgICBlID8gRmVlZGVyRGVsZWdhdGlvbi50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mZWVkZXJfZGVsZWdhdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMpIHtcbiAgICAgIG9iai5leGNoYW5nZV9yYXRlcyA9IG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMubWFwKChlKSA9PlxuICAgICAgICBlID8gRXhjaGFuZ2VSYXRlVHVwbGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UubWlzc19jb3VudGVycykge1xuICAgICAgb2JqLm1pc3NfY291bnRlcnMgPSBtZXNzYWdlLm1pc3NfY291bnRlcnMubWFwKChlKSA9PlxuICAgICAgICBlID8gTWlzc0NvdW50ZXIudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWlzc19jb3VudGVycyA9IFtdO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcykge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzID1cbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcy5tYXAoKGUpID0+XG4gICAgICAgICAgZSA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3RlcyA9IFtdO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcykge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzID1cbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcy5tYXAoKGUpID0+XG4gICAgICAgICAgZSA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3RlcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8R2VuZXNpc1N0YXRlPik6IEdlbmVzaXNTdGF0ZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUdlbmVzaXNTdGF0ZSB9IGFzIEdlbmVzaXNTdGF0ZTtcbiAgICBtZXNzYWdlLmZlZWRlcl9kZWxlZ2F0aW9ucyA9IFtdO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICBtZXNzYWdlLm1pc3NfY291bnRlcnMgPSBbXTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzID0gW107XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3RlcyA9IFtdO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbVBhcnRpYWwob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBvYmplY3QuZmVlZGVyX2RlbGVnYXRpb25zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5mZWVkZXJfZGVsZWdhdGlvbnMgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZmVlZGVyX2RlbGVnYXRpb25zKSB7XG4gICAgICAgIG1lc3NhZ2UuZmVlZGVyX2RlbGVnYXRpb25zLnB1c2goRmVlZGVyRGVsZWdhdGlvbi5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXhjaGFuZ2VfcmF0ZXMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZXhjaGFuZ2VfcmF0ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlcy5wdXNoKEV4Y2hhbmdlUmF0ZVR1cGxlLmZyb21QYXJ0aWFsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9iamVjdC5taXNzX2NvdW50ZXJzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm1pc3NfY291bnRlcnMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QubWlzc19jb3VudGVycykge1xuICAgICAgICBtZXNzYWdlLm1pc3NfY291bnRlcnMucHVzaChNaXNzQ291bnRlci5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3RlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfcHJldm90ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV9wcmV2b3Rlcy5wdXNoKFxuICAgICAgICAgIEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUuZnJvbVBhcnRpYWwoZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3RlcyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5hZ2dyZWdhdGVfZXhjaGFuZ2VfcmF0ZV92b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ZvdGVzLnB1c2goXG4gICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS5mcm9tUGFydGlhbChlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VGZWVkZXJEZWxlZ2F0aW9uOiBvYmplY3QgPSB7XG4gIGZlZWRlcl9hZGRyZXNzOiBcIlwiLFxuICB2YWxpZGF0b3JfYWRkcmVzczogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBGZWVkZXJEZWxlZ2F0aW9uID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRmVlZGVyRGVsZWdhdGlvbixcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmZlZWRlcl9hZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5mZWVkZXJfYWRkcmVzcyk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS52YWxpZGF0b3JfYWRkcmVzcyk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBGZWVkZXJEZWxlZ2F0aW9uIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRmVlZGVyRGVsZWdhdGlvbiB9IGFzIEZlZWRlckRlbGVnYXRpb247XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmZlZWRlcl9hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRmVlZGVyRGVsZWdhdGlvbiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZUZlZWRlckRlbGVnYXRpb24gfSBhcyBGZWVkZXJEZWxlZ2F0aW9uO1xuICAgIGlmIChvYmplY3QuZmVlZGVyX2FkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZmVlZGVyX2FkZHJlc3MgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZmVlZGVyX2FkZHJlc3MgPSBTdHJpbmcob2JqZWN0LmZlZWRlcl9hZGRyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkcmVzcyA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkcmVzcyA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBGZWVkZXJEZWxlZ2F0aW9uKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmZlZWRlcl9hZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZmVlZGVyX2FkZHJlc3MgPSBtZXNzYWdlLmZlZWRlcl9hZGRyZXNzKTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yX2FkZHJlc3MgPSBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8RmVlZGVyRGVsZWdhdGlvbj4pOiBGZWVkZXJEZWxlZ2F0aW9uIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRmVlZGVyRGVsZWdhdGlvbiB9IGFzIEZlZWRlckRlbGVnYXRpb247XG4gICAgaWYgKG9iamVjdC5mZWVkZXJfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXJfYWRkcmVzcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkcmVzcyA9IG9iamVjdC5mZWVkZXJfYWRkcmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkcmVzcyA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VNaXNzQ291bnRlcjogb2JqZWN0ID0geyB2YWxpZGF0b3JfYWRkcmVzczogXCJcIiwgbWlzc19jb3VudGVyOiAwIH07XG5cbmV4cG9ydCBjb25zdCBNaXNzQ291bnRlciA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1pc3NDb3VudGVyLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UubWlzc19jb3VudGVyICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLnVpbnQ2NChtZXNzYWdlLm1pc3NfY291bnRlcik7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNaXNzQ291bnRlciB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZU1pc3NDb3VudGVyIH0gYXMgTWlzc0NvdW50ZXI7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5taXNzX2NvdW50ZXIgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1pc3NDb3VudGVyIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlTWlzc0NvdW50ZXIgfSBhcyBNaXNzQ291bnRlcjtcbiAgICBpZiAoXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LnZhbGlkYXRvcl9hZGRyZXNzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzID0gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5taXNzX2NvdW50ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gQmlnSW50KG9iamVjdC5taXNzX2NvdW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IEJpZ0ludCgwKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1pc3NDb3VudGVyKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yX2FkZHJlc3MgPSBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyZXNzKTtcbiAgICBtZXNzYWdlLm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm1pc3NfY291bnRlciA9IG1lc3NhZ2UubWlzc19jb3VudGVyKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8TWlzc0NvdW50ZXI+KTogTWlzc0NvdW50ZXIge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VNaXNzQ291bnRlciB9IGFzIE1pc3NDb3VudGVyO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC52YWxpZGF0b3JfYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3MgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBvYmplY3QudmFsaWRhdG9yX2FkZHJlc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHJlc3MgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5taXNzX2NvdW50ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gb2JqZWN0Lm1pc3NfY291bnRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5taXNzX2NvdW50ZXIgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlIiwiQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSIsIkV4Y2hhbmdlUmF0ZVR1cGxlIiwiUGFyYW1zIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZUdlbmVzaXNTdGF0ZSIsIkdlbmVzaXNTdGF0ZSIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJjcmVhdGUiLCJwYXJhbXMiLCJ1bmRlZmluZWQiLCJ1aW50MzIiLCJmb3JrIiwibGRlbGltIiwidiIsImZlZWRlcl9kZWxlZ2F0aW9ucyIsIkZlZWRlckRlbGVnYXRpb24iLCJleGNoYW5nZV9yYXRlcyIsIm1pc3NfY291bnRlcnMiLCJNaXNzQ291bnRlciIsImFnZ3JlZ2F0ZV9leGNoYW5nZV9yYXRlX3ByZXZvdGVzIiwiYWdncmVnYXRlX2V4Y2hhbmdlX3JhdGVfdm90ZXMiLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJlbmQiLCJsZW4iLCJwb3MiLCJ0YWciLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsImUiLCJ0b0pTT04iLCJvYmoiLCJtYXAiLCJmcm9tUGFydGlhbCIsImJhc2VGZWVkZXJEZWxlZ2F0aW9uIiwiZmVlZGVyX2FkZHJlc3MiLCJ2YWxpZGF0b3JfYWRkcmVzcyIsInN0cmluZyIsIlN0cmluZyIsImJhc2VNaXNzQ291bnRlciIsIm1pc3NfY291bnRlciIsIkJpZ0ludCIsInVpbnQ2NCJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUNqRSxTQUNFQyw0QkFBNEIsRUFD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
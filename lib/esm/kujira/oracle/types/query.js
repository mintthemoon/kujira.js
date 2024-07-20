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
import { DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params } from "./oracle";
export const protobufPackage = "kujira.oracle";
const baseQueryExchangeRateRequest = {
    denom: ""
};
export const QueryExchangeRateRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryExchangeRateRequest);
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
        const message = _object_spread({}, baseQueryExchangeRateRequest);
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
        const message = _object_spread({}, baseQueryExchangeRateRequest);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = "";
        }
        return message;
    }
};
const baseQueryExchangeRateResponse = {
    exchange_rate: ""
};
export const QueryExchangeRateResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.exchange_rate !== "") {
            writer.uint32(10).string(message.exchange_rate);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryExchangeRateResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
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
        const message = _object_spread({}, baseQueryExchangeRateResponse);
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchange_rate = String(object.exchange_rate);
        } else {
            message.exchange_rate = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.exchange_rate !== undefined && (obj.exchange_rate = message.exchange_rate);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryExchangeRateResponse);
        if (object.exchange_rate !== undefined && object.exchange_rate !== null) {
            message.exchange_rate = object.exchange_rate;
        } else {
            message.exchange_rate = "";
        }
        return message;
    }
};
const baseQueryExchangeRatesRequest = {};
export const QueryExchangeRatesRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryExchangeRatesRequest);
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
        const message = _object_spread({}, baseQueryExchangeRatesRequest);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseQueryExchangeRatesRequest);
        return message;
    }
};
const baseQueryExchangeRatesResponse = {};
export const QueryExchangeRatesResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.exchange_rates){
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.exchange_rates.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates){
                message.exchange_rates.push(DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.exchange_rates) {
            obj.exchange_rates = message.exchange_rates.map((e)=>e ? DecCoin.toJSON(e) : undefined);
        } else {
            obj.exchange_rates = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        if (object.exchange_rates !== undefined && object.exchange_rates !== null) {
            for (const e of object.exchange_rates){
                message.exchange_rates.push(DecCoin.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryActivesRequest = {};
export const QueryActivesRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryActivesRequest);
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
        const message = _object_spread({}, baseQueryActivesRequest);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseQueryActivesRequest);
        return message;
    }
};
const baseQueryActivesResponse = {
    actives: ""
};
export const QueryActivesResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.actives){
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryActivesResponse);
        message.actives = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.actives.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryActivesResponse);
        message.actives = [];
        if (object.actives !== undefined && object.actives !== null) {
            for (const e of object.actives){
                message.actives.push(String(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.actives) {
            obj.actives = message.actives.map((e)=>e);
        } else {
            obj.actives = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryActivesResponse);
        message.actives = [];
        if (object.actives !== undefined && object.actives !== null) {
            for (const e of object.actives){
                message.actives.push(e);
            }
        }
        return message;
    }
};
const baseQueryVoteTargetsRequest = {};
export const QueryVoteTargetsRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryVoteTargetsRequest);
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
        const message = _object_spread({}, baseQueryVoteTargetsRequest);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseQueryVoteTargetsRequest);
        return message;
    }
};
const baseQueryVoteTargetsResponse = {
    vote_targets: ""
};
export const QueryVoteTargetsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.vote_targets){
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryVoteTargetsResponse);
        message.vote_targets = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.vote_targets.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryVoteTargetsResponse);
        message.vote_targets = [];
        if (object.vote_targets !== undefined && object.vote_targets !== null) {
            for (const e of object.vote_targets){
                message.vote_targets.push(String(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.vote_targets) {
            obj.vote_targets = message.vote_targets.map((e)=>e);
        } else {
            obj.vote_targets = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryVoteTargetsResponse);
        message.vote_targets = [];
        if (object.vote_targets !== undefined && object.vote_targets !== null) {
            for (const e of object.vote_targets){
                message.vote_targets.push(e);
            }
        }
        return message;
    }
};
const baseQueryFeederDelegationRequest = {
    validator_addr: ""
};
export const QueryFeederDelegationRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryFeederDelegationRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryFeederDelegationRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        } else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryFeederDelegationRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        } else {
            message.validator_addr = "";
        }
        return message;
    }
};
const baseQueryFeederDelegationResponse = {
    feeder_addr: ""
};
export const QueryFeederDelegationResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.feeder_addr !== "") {
            writer.uint32(10).string(message.feeder_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryFeederDelegationResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.feeder_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryFeederDelegationResponse);
        if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
            message.feeder_addr = String(object.feeder_addr);
        } else {
            message.feeder_addr = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.feeder_addr !== undefined && (obj.feeder_addr = message.feeder_addr);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryFeederDelegationResponse);
        if (object.feeder_addr !== undefined && object.feeder_addr !== null) {
            message.feeder_addr = object.feeder_addr;
        } else {
            message.feeder_addr = "";
        }
        return message;
    }
};
const baseQueryMissCounterRequest = {
    validator_addr: ""
};
export const QueryMissCounterRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryMissCounterRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryMissCounterRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        } else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryMissCounterRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        } else {
            message.validator_addr = "";
        }
        return message;
    }
};
const baseQueryMissCounterResponse = {
    miss_counter: 0
};
export const QueryMissCounterResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.miss_counter !== 0) {
            writer.uint32(8).uint64(message.miss_counter);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryMissCounterResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.miss_counter = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryMissCounterResponse);
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = Number(object.miss_counter);
        } else {
            message.miss_counter = 0;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.miss_counter !== undefined && (obj.miss_counter = message.miss_counter);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryMissCounterResponse);
        if (object.miss_counter !== undefined && object.miss_counter !== null) {
            message.miss_counter = object.miss_counter;
        } else {
            message.miss_counter = 0;
        }
        return message;
    }
};
const baseQueryAggregatePrevoteRequest = {
    validator_addr: ""
};
export const QueryAggregatePrevoteRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregatePrevoteRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAggregatePrevoteRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        } else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregatePrevoteRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        } else {
            message.validator_addr = "";
        }
        return message;
    }
};
const baseQueryAggregatePrevoteResponse = {};
export const QueryAggregatePrevoteResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.aggregate_prevote !== undefined) {
            AggregateExchangeRatePrevote.encode(message.aggregate_prevote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregatePrevoteResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_prevote = AggregateExchangeRatePrevote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAggregatePrevoteResponse);
        if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
            message.aggregate_prevote = AggregateExchangeRatePrevote.fromJSON(object.aggregate_prevote);
        } else {
            message.aggregate_prevote = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.aggregate_prevote !== undefined && (obj.aggregate_prevote = message.aggregate_prevote ? AggregateExchangeRatePrevote.toJSON(message.aggregate_prevote) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregatePrevoteResponse);
        if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
            message.aggregate_prevote = AggregateExchangeRatePrevote.fromPartial(object.aggregate_prevote);
        } else {
            message.aggregate_prevote = undefined;
        }
        return message;
    }
};
const baseQueryAggregatePrevotesRequest = {};
export const QueryAggregatePrevotesRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregatePrevotesRequest);
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
        const message = _object_spread({}, baseQueryAggregatePrevotesRequest);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseQueryAggregatePrevotesRequest);
        return message;
    }
};
const baseQueryAggregatePrevotesResponse = {};
export const QueryAggregatePrevotesResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.aggregate_prevotes){
            AggregateExchangeRatePrevote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_prevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        if (object.aggregate_prevotes !== undefined && object.aggregate_prevotes !== null) {
            for (const e of object.aggregate_prevotes){
                message.aggregate_prevotes.push(AggregateExchangeRatePrevote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.aggregate_prevotes) {
            obj.aggregate_prevotes = message.aggregate_prevotes.map((e)=>e ? AggregateExchangeRatePrevote.toJSON(e) : undefined);
        } else {
            obj.aggregate_prevotes = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        if (object.aggregate_prevotes !== undefined && object.aggregate_prevotes !== null) {
            for (const e of object.aggregate_prevotes){
                message.aggregate_prevotes.push(AggregateExchangeRatePrevote.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryAggregateVoteRequest = {
    validator_addr: ""
};
export const QueryAggregateVoteRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregateVoteRequest);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validator_addr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAggregateVoteRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = String(object.validator_addr);
        } else {
            message.validator_addr = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregateVoteRequest);
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        } else {
            message.validator_addr = "";
        }
        return message;
    }
};
const baseQueryAggregateVoteResponse = {};
export const QueryAggregateVoteResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.aggregate_vote !== undefined) {
            AggregateExchangeRateVote.encode(message.aggregate_vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregateVoteResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_vote = AggregateExchangeRateVote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAggregateVoteResponse);
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregate_vote = AggregateExchangeRateVote.fromJSON(object.aggregate_vote);
        } else {
            message.aggregate_vote = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.aggregate_vote !== undefined && (obj.aggregate_vote = message.aggregate_vote ? AggregateExchangeRateVote.toJSON(message.aggregate_vote) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregateVoteResponse);
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregate_vote = AggregateExchangeRateVote.fromPartial(object.aggregate_vote);
        } else {
            message.aggregate_vote = undefined;
        }
        return message;
    }
};
const baseQueryAggregateVotesRequest = {};
export const QueryAggregateVotesRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregateVotesRequest);
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
        const message = _object_spread({}, baseQueryAggregateVotesRequest);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseQueryAggregateVotesRequest);
        return message;
    }
};
const baseQueryAggregateVotesResponse = {};
export const QueryAggregateVotesResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.aggregate_votes){
            AggregateExchangeRateVote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_votes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        if (object.aggregate_votes !== undefined && object.aggregate_votes !== null) {
            for (const e of object.aggregate_votes){
                message.aggregate_votes.push(AggregateExchangeRateVote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.aggregate_votes) {
            obj.aggregate_votes = message.aggregate_votes.map((e)=>e ? AggregateExchangeRateVote.toJSON(e) : undefined);
        } else {
            obj.aggregate_votes = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        if (object.aggregate_votes !== undefined && object.aggregate_votes !== null) {
            for (const e of object.aggregate_votes){
                message.aggregate_votes.push(AggregateExchangeRateVote.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
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
export const QueryParamsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryParamsResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            message.params = Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    ExchangeRate(request) {
        const data = QueryExchangeRateRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRate", data);
        return promise.then((data)=>QueryExchangeRateResponse.decode(new BinaryReader(data)));
    }
    ExchangeRates(request) {
        const data = QueryExchangeRatesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRates", data);
        return promise.then((data)=>QueryExchangeRatesResponse.decode(new BinaryReader(data)));
    }
    Actives(request) {
        const data = QueryActivesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Actives", data);
        return promise.then((data)=>QueryActivesResponse.decode(new BinaryReader(data)));
    }
    FeederDelegation(request) {
        const data = QueryFeederDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "FeederDelegation", data);
        return promise.then((data)=>QueryFeederDelegationResponse.decode(new BinaryReader(data)));
    }
    MissCounter(request) {
        const data = QueryMissCounterRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "MissCounter", data);
        return promise.then((data)=>QueryMissCounterResponse.decode(new BinaryReader(data)));
    }
    AggregatePrevote(request) {
        const data = QueryAggregatePrevoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevote", data);
        return promise.then((data)=>QueryAggregatePrevoteResponse.decode(new BinaryReader(data)));
    }
    AggregatePrevotes(request) {
        const data = QueryAggregatePrevotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevotes", data);
        return promise.then((data)=>QueryAggregatePrevotesResponse.decode(new BinaryReader(data)));
    }
    AggregateVote(request) {
        const data = QueryAggregateVoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVote", data);
        return promise.then((data)=>QueryAggregateVoteResponse.decode(new BinaryReader(data)));
    }
    AggregateVotes(request) {
        const data = QueryAggregateVotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVotes", data);
        return promise.then((data)=>QueryAggregateVotesResponse.decode(new BinaryReader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Params", data);
        return promise.then((data)=>QueryParamsResponse.decode(new BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3R5cGVzL3F1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gXCJjb3NtanMtdHlwZXNcIjtcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IERlY0NvaW4gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3YxYmV0YTEvY29pblwiO1xuaW1wb3J0IHtcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgUGFyYW1zLFxufSBmcm9tIFwiLi9vcmFjbGVcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLm9yYWNsZVwiO1xuXG4vKiogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9FeGNoYW5nZVJhdGUgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0IHtcbiAgLyoqIGRlbm9tIGRlZmluZXMgdGhlIGRlbm9taW5hdGlvbiB0byBxdWVyeSBmb3IuICovXG4gIGRlbm9tOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0V4Y2hhbmdlUmF0ZSBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2Uge1xuICAvKiogZXhjaGFuZ2VfcmF0ZSBkZWZpbmVzIHRoZSBleGNoYW5nZSByYXRlIG9mIHdoaXRlbGlzdGVkIGFzc2V0cyAqL1xuICBleGNoYW5nZV9yYXRlOiBzdHJpbmc7XG59XG5cbi8qKiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9FeGNoYW5nZVJhdGVzIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0V4Y2hhbmdlUmF0ZXMgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSB7XG4gIC8qKiBleGNoYW5nZV9yYXRlcyBkZWZpbmVzIGEgbGlzdCBvZiB0aGUgZXhjaGFuZ2UgcmF0ZSBmb3IgYWxsIHdoaXRlbGlzdGVkIGRlbm9tcy4gKi9cbiAgZXhjaGFuZ2VfcmF0ZXM6IERlY0NvaW5bXTtcbn1cblxuLyoqIFF1ZXJ5QWN0aXZlc1JlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L0FjdGl2ZXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBY3RpdmVzUmVxdWVzdCB7fVxuXG4vKipcbiAqIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlIGlzIHJlc3BvbnNlIHR5cGUgZm9yIHRoZVxuICogUXVlcnkvQWN0aXZlcyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlIHtcbiAgLyoqIGFjdGl2ZXMgZGVmaW5lcyBhIGxpc3Qgb2YgdGhlIGRlbm9taW5hdGlvbiB3aGljaCBvcmFjbGUgcHJpY2VzIGFnZ3JlZWQgdXBvbi4gKi9cbiAgYWN0aXZlczogc3RyaW5nW107XG59XG5cbi8qKiBRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCBpcyB0aGUgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvVm90ZVRhcmdldHMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UgaXMgcmVzcG9uc2UgdHlwZSBmb3IgdGhlXG4gKiBRdWVyeS9Wb3RlVGFyZ2V0cyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiB2b3RlX3RhcmdldHMgZGVmaW5lcyBhIGxpc3Qgb2YgdGhlIGRlbm9taW5hdGlvbiBpbiB3aGljaCBldmVyeW9uZVxuICAgKiBzaG91bGQgdm90ZSBpbiB0aGUgY3VycmVudCB2b3RlIHBlcmlvZC5cbiAgICovXG4gIHZvdGVfdGFyZ2V0czogc3RyaW5nW107XG59XG5cbi8qKiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9GZWVkZXJEZWxlZ2F0aW9uIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Qge1xuICAvKiogdmFsaWRhdG9yIGRlZmluZXMgdGhlIHZhbGlkYXRvciBhZGRyZXNzIHRvIHF1ZXJ5IGZvci4gKi9cbiAgdmFsaWRhdG9yX2FkZHI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0ZlZWRlckRlbGVnYXRpb24gUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZSB7XG4gIC8qKiBmZWVkZXJfYWRkciBkZWZpbmVzIHRoZSBmZWVkZXIgZGVsZWdhdGlvbiBvZiBhIHZhbGlkYXRvciAqL1xuICBmZWVkZXJfYWRkcjogc3RyaW5nO1xufVxuXG4vKiogUXVlcnlNaXNzQ291bnRlclJlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L01pc3NDb3VudGVyIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0IHtcbiAgLyoqIHZhbGlkYXRvciBkZWZpbmVzIHRoZSB2YWxpZGF0b3IgYWRkcmVzcyB0byBxdWVyeSBmb3IuICovXG4gIHZhbGlkYXRvcl9hZGRyOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUXVlcnlNaXNzQ291bnRlclJlc3BvbnNlIGlzIHJlc3BvbnNlIHR5cGUgZm9yIHRoZVxuICogUXVlcnkvTWlzc0NvdW50ZXIgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2Uge1xuICAvKiogbWlzc19jb3VudGVyIGRlZmluZXMgdGhlIG9yYWNsZSBtaXNzIGNvdW50ZXIgb2YgYSB2YWxpZGF0b3IgKi9cbiAgbWlzc19jb3VudGVyOiBudW1iZXI7XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9BZ2dyZWdhdGVQcmV2b3RlIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3Qge1xuICAvKiogdmFsaWRhdG9yIGRlZmluZXMgdGhlIHZhbGlkYXRvciBhZGRyZXNzIHRvIHF1ZXJ5IGZvci4gKi9cbiAgdmFsaWRhdG9yX2FkZHI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0FnZ3JlZ2F0ZVByZXZvdGUgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfcHJldm90ZSBkZWZpbmVzIG9yYWNsZSBhZ2dyZWdhdGUgcHJldm90ZSBzdWJtaXR0ZWQgYnkgYSB2YWxpZGF0b3IgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ByZXZvdGU6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUgfCB1bmRlZmluZWQ7XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCBpcyB0aGUgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvQWdncmVnYXRlUHJldm90ZXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UgaXMgcmVzcG9uc2UgdHlwZSBmb3IgdGhlXG4gKiBRdWVyeS9BZ2dyZWdhdGVQcmV2b3RlcyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfcHJldm90ZXMgZGVmaW5lcyBhbGwgb3JhY2xlIGFnZ3JlZ2F0ZSBwcmV2b3RlcyBzdWJtaXR0ZWQgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ByZXZvdGVzOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlW107XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9BZ2dyZWdhdGVWb3RlIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Qge1xuICAvKiogdmFsaWRhdG9yIGRlZmluZXMgdGhlIHZhbGlkYXRvciBhZGRyZXNzIHRvIHF1ZXJ5IGZvci4gKi9cbiAgdmFsaWRhdG9yX2FkZHI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0FnZ3JlZ2F0ZVZvdGUgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfdm90ZSBkZWZpbmVzIG9yYWNsZSBhZ2dyZWdhdGUgdm90ZSBzdWJtaXR0ZWQgYnkgYSB2YWxpZGF0b3IgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ZvdGU6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUgfCB1bmRlZmluZWQ7XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCBpcyB0aGUgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvQWdncmVnYXRlVm90ZXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2UgaXMgcmVzcG9uc2UgdHlwZSBmb3IgdGhlXG4gKiBRdWVyeS9BZ2dyZWdhdGVWb3RlcyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfdm90ZXMgZGVmaW5lcyBhbGwgb3JhY2xlIGFnZ3JlZ2F0ZSB2b3RlcyBzdWJtaXR0ZWQgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ZvdGVzOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlW107XG59XG5cbi8qKiBRdWVyeVBhcmFtc1JlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L1BhcmFtcyBSUEMgbWV0aG9kLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBhcmFtc1JlcXVlc3Qge31cblxuLyoqIFF1ZXJ5UGFyYW1zUmVzcG9uc2UgaXMgdGhlIHJlc3BvbnNlIHR5cGUgZm9yIHRoZSBRdWVyeS9QYXJhbXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gIC8qKiBwYXJhbXMgZGVmaW5lcyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgbW9kdWxlLiAqL1xuICBwYXJhbXM6IFBhcmFtcyB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdDogb2JqZWN0ID0geyBkZW5vbTogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZGVub20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmRlbm9tKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmRlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QuZGVub20gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVub20gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBTdHJpbmcob2JqZWN0LmRlbm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZW5vbSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdD5cbiAgKTogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmRlbm9tICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gb2JqZWN0LmRlbm9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZTogb2JqZWN0ID0geyBleGNoYW5nZV9yYXRlOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmV4Y2hhbmdlX3JhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LmV4Y2hhbmdlX3JhdGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXhjaGFuZ2VfcmF0ZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlID0gU3RyaW5nKG9iamVjdC5leGNoYW5nZV9yYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmV4Y2hhbmdlX3JhdGUgPSBtZXNzYWdlLmV4Y2hhbmdlX3JhdGUpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlPlxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlO1xuICAgIGlmIChvYmplY3QuZXhjaGFuZ2VfcmF0ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgPSBvYmplY3QuZXhjaGFuZ2VfcmF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdDogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBEZWVwUGFydGlhbDxRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0PlxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5leGNoYW5nZV9yYXRlcykge1xuICAgICAgRGVjQ29pbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMucHVzaChEZWNDb2luLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICBpZiAob2JqZWN0LmV4Y2hhbmdlX3JhdGVzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4Y2hhbmdlX3JhdGVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmV4Y2hhbmdlX3JhdGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMucHVzaChEZWNDb2luLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5leGNoYW5nZV9yYXRlcykge1xuICAgICAgb2JqLmV4Y2hhbmdlX3JhdGVzID0gbWVzc2FnZS5leGNoYW5nZV9yYXRlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBEZWNDb2luLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmV4Y2hhbmdlX3JhdGVzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZT5cbiAgKTogUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZTtcbiAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzID0gW107XG4gICAgaWYgKG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5leGNoYW5nZV9yYXRlcykge1xuICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzLnB1c2goRGVjQ29pbi5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3Q6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBY3RpdmVzUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5QWN0aXZlc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBY3RpdmVzUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3QgfSBhcyBRdWVyeUFjdGl2ZXNSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlBY3RpdmVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3QgfSBhcyBRdWVyeUFjdGl2ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUFjdGl2ZXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKF86IERlZXBQYXJ0aWFsPFF1ZXJ5QWN0aXZlc1JlcXVlc3Q+KTogUXVlcnlBY3RpdmVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3QgfSBhcyBRdWVyeUFjdGl2ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5QWN0aXZlc1Jlc3BvbnNlOiBvYmplY3QgPSB7IGFjdGl2ZXM6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBY3RpdmVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5hY3RpdmVzKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcodiEpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBY3RpdmVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFjdGl2ZXNSZXNwb25zZSB9IGFzIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWN0aXZlcyA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5hY3RpdmVzLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBY3RpdmVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFjdGl2ZXNSZXNwb25zZSB9IGFzIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWN0aXZlcyA9IFtdO1xuICAgIGlmIChvYmplY3QuYWN0aXZlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY3RpdmVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFjdGl2ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hY3RpdmVzLnB1c2goU3RyaW5nKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5hY3RpdmVzKSB7XG4gICAgICBvYmouYWN0aXZlcyA9IG1lc3NhZ2UuYWN0aXZlcy5tYXAoKGUpID0+IGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYWN0aXZlcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlBY3RpdmVzUmVzcG9uc2U+KTogUXVlcnlBY3RpdmVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFjdGl2ZXNSZXNwb25zZSB9IGFzIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWN0aXZlcyA9IFtdO1xuICAgIGlmIChvYmplY3QuYWN0aXZlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY3RpdmVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFjdGl2ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hY3RpdmVzLnB1c2goZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IERlZXBQYXJ0aWFsPFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0PlxuICApOiBRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZTogb2JqZWN0ID0geyB2b3RlX3RhcmdldHM6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnZvdGVfdGFyZ2V0cykge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKHYhKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS52b3RlX3RhcmdldHMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uudm90ZV90YXJnZXRzLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlWb3RlVGFyZ2V0c1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZTtcbiAgICBtZXNzYWdlLnZvdGVfdGFyZ2V0cyA9IFtdO1xuICAgIGlmIChvYmplY3Qudm90ZV90YXJnZXRzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZvdGVfdGFyZ2V0cyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC52b3RlX3RhcmdldHMpIHtcbiAgICAgICAgbWVzc2FnZS52b3RlX3RhcmdldHMucHVzaChTdHJpbmcoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlWb3RlVGFyZ2V0c1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS52b3RlX3RhcmdldHMpIHtcbiAgICAgIG9iai52b3RlX3RhcmdldHMgPSBtZXNzYWdlLnZvdGVfdGFyZ2V0cy5tYXAoKGUpID0+IGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudm90ZV90YXJnZXRzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS52b3RlX3RhcmdldHMgPSBbXTtcbiAgICBpZiAob2JqZWN0LnZvdGVfdGFyZ2V0cyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52b3RlX3RhcmdldHMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3Qudm90ZV90YXJnZXRzKSB7XG4gICAgICAgIG1lc3NhZ2Uudm90ZV90YXJnZXRzLnB1c2goZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Q6IG9iamVjdCA9IHsgdmFsaWRhdG9yX2FkZHI6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yX2FkZHIgPSBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdD5cbiAgKTogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gb2JqZWN0LnZhbGlkYXRvcl9hZGRyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U6IG9iamVjdCA9IHsgZmVlZGVyX2FkZHI6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5mZWVkZXJfYWRkciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZmVlZGVyX2FkZHIpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZmVlZGVyX2FkZHIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5mZWVkZXJfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXJfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkciA9IFN0cmluZyhvYmplY3QuZmVlZGVyX2FkZHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZlZWRlcl9hZGRyID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmZlZWRlcl9hZGRyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZmVlZGVyX2FkZHIgPSBtZXNzYWdlLmZlZWRlcl9hZGRyKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5mZWVkZXJfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXJfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkciA9IG9iamVjdC5mZWVkZXJfYWRkcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0OiBvYmplY3QgPSB7IHZhbGlkYXRvcl9hZGRyOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlNaXNzQ291bnRlclJlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnZhbGlkYXRvcl9hZGRyID0gbWVzc2FnZS52YWxpZGF0b3JfYWRkcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0PlxuICApOiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBvYmplY3QudmFsaWRhdG9yX2FkZHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U6IG9iamVjdCA9IHsgbWlzc19jb3VudGVyOiAwIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5taXNzX2NvdW50ZXIgIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UubWlzc19jb3VudGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlNaXNzQ291bnRlclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5taXNzX2NvdW50ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gTnVtYmVyKG9iamVjdC5taXNzX2NvdW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWlzc19jb3VudGVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubWlzc19jb3VudGVyID0gbWVzc2FnZS5taXNzX2NvdW50ZXIpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5taXNzX2NvdW50ZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubWlzc19jb3VudGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IG9iamVjdC5taXNzX2NvdW50ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdDogb2JqZWN0ID0geyB2YWxpZGF0b3JfYWRkcjogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS52YWxpZGF0b3JfYWRkciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3Q7XG4gICAgaWYgKG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFN0cmluZyhvYmplY3QudmFsaWRhdG9yX2FkZHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxpZGF0b3JfYWRkciA9IG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0PlxuICApOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBvYmplY3QudmFsaWRhdG9yX2FkZHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5lbmNvZGUoXG4gICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUsXG4gICAgICAgIHdyaXRlci51aW50MzIoMTApLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3RlID0gQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5kZWNvZGUoXG4gICAgICAgICAgICByZWFkZXIsXG4gICAgICAgICAgICByZWFkZXIudWludDMyKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGUgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUgPSBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmZyb21KU09OKFxuICAgICAgICBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmFnZ3JlZ2F0ZV9wcmV2b3RlID0gbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZVxuICAgICAgICA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUudG9KU09OKG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUpXG4gICAgICAgIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U+XG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9wcmV2b3RlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZSA9IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUuZnJvbVBhcnRpYWwoXG4gICAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Q6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBfOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgXzogRGVlcFBhcnRpYWw8UXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Q+XG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3Rlcykge1xuICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5lbmNvZGUoXG4gICAgICAgIHYhLFxuICAgICAgICB3cml0ZXIudWludDMyKDEwKS5mb3JrKClcbiAgICAgICkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGVzID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3Rlcy5wdXNoKFxuICAgICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3RlcyA9IFtdO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9wcmV2b3RlcyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZXMucHVzaChcbiAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmZyb21KU09OKGUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIGlmIChtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3Rlcykge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV9wcmV2b3RlcyA9IG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGVzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYWdncmVnYXRlX3ByZXZvdGVzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZXMgPSBbXTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZXMgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGVzLnB1c2goXG4gICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5mcm9tUGFydGlhbChlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0OiBvYmplY3QgPSB7IHZhbGlkYXRvcl9hZGRyOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvcl9hZGRyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS52YWxpZGF0b3JfYWRkcik7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JfYWRkcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnZhbGlkYXRvcl9hZGRyID0gbWVzc2FnZS52YWxpZGF0b3JfYWRkcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Q+XG4gICk6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Q7XG4gICAgaWYgKG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IG9iamVjdC52YWxpZGF0b3JfYWRkcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGUgPSBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmRlY29kZShcbiAgICAgICAgICAgIHJlYWRlcixcbiAgICAgICAgICAgIHJlYWRlci51aW50MzIoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5hZ2dyZWdhdGVfdm90ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hZ2dyZWdhdGVfdm90ZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSA9IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZnJvbUpTT04oXG4gICAgICAgIG9iamVjdC5hZ2dyZWdhdGVfdm90ZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYWdncmVnYXRlX3ZvdGUgPSBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlXG4gICAgICAgID8gQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS50b0pTT04obWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSlcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZT5cbiAgKTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LmFnZ3JlZ2F0ZV92b3RlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlID0gQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS5mcm9tUGFydGlhbChcbiAgICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdDogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdD5cbiAgKTogUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzKSB7XG4gICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZXMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzLnB1c2goXG4gICAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzID0gW107XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ZvdGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFnZ3JlZ2F0ZV92b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3Rlcy5wdXNoKEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfdm90ZXMpIHtcbiAgICAgIG9iai5hZ2dyZWdhdGVfdm90ZXMgPSBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3Rlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV92b3RlcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlPlxuICApOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzID0gW107XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ZvdGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFnZ3JlZ2F0ZV92b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3Rlcy5wdXNoKEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeVBhcmFtc1JlcXVlc3Q6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlQYXJhbXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCB9IGFzIFF1ZXJ5UGFyYW1zUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IFF1ZXJ5UGFyYW1zUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCB9IGFzIFF1ZXJ5UGFyYW1zUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlQYXJhbXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKF86IERlZXBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVxdWVzdD4pOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlQYXJhbXNSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeVBhcmFtc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQYXJhbXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYXJhbXMuZW5jb2RlKG1lc3NhZ2UucGFyYW1zLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbUpTT04ob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlQYXJhbXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5wYXJhbXMgPSBtZXNzYWdlLnBhcmFtcyA/IFBhcmFtcy50b0pTT04obWVzc2FnZS5wYXJhbXMpIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlQYXJhbXNSZXNwb25zZT4pOiBRdWVyeVBhcmFtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlQYXJhbXNSZXNwb25zZSB9IGFzIFF1ZXJ5UGFyYW1zUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuLyoqIFF1ZXJ5IGRlZmluZXMgdGhlIGdSUEMgcXVlcmllciBzZXJ2aWNlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIC8qKiBFeGNoYW5nZVJhdGUgcmV0dXJucyBleGNoYW5nZSByYXRlIG9mIGEgZGVub20gKi9cbiAgRXhjaGFuZ2VSYXRlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2U+O1xuICAvKiogRXhjaGFuZ2VSYXRlcyByZXR1cm5zIGV4Y2hhbmdlIHJhdGVzIG9mIGFsbCBkZW5vbXMgKi9cbiAgRXhjaGFuZ2VSYXRlcyhcbiAgICByZXF1ZXN0OiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2U+O1xuICAvKiogQWN0aXZlcyByZXR1cm5zIGFsbCBhY3RpdmUgZGVub21zICovXG4gIEFjdGl2ZXMocmVxdWVzdDogUXVlcnlBY3RpdmVzUmVxdWVzdCk6IFByb21pc2U8UXVlcnlBY3RpdmVzUmVzcG9uc2U+O1xuICAvKiogRmVlZGVyRGVsZWdhdGlvbiByZXR1cm5zIGZlZWRlciBkZWxlZ2F0aW9uIG9mIGEgdmFsaWRhdG9yICovXG4gIEZlZWRlckRlbGVnYXRpb24oXG4gICAgcmVxdWVzdDogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlPjtcbiAgLyoqIE1pc3NDb3VudGVyIHJldHVybnMgb3JhY2xlIG1pc3MgY291bnRlciBvZiBhIHZhbGlkYXRvciAqL1xuICBNaXNzQ291bnRlcihcbiAgICByZXF1ZXN0OiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZT47XG4gIC8qKiBBZ2dyZWdhdGVQcmV2b3RlIHJldHVybnMgYW4gYWdncmVnYXRlIHByZXZvdGUgb2YgYSB2YWxpZGF0b3IgKi9cbiAgQWdncmVnYXRlUHJldm90ZShcbiAgICByZXF1ZXN0OiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U+O1xuICAvKiogQWdncmVnYXRlUHJldm90ZXMgcmV0dXJucyBhZ2dyZWdhdGUgcHJldm90ZXMgb2YgYWxsIHZhbGlkYXRvcnMgKi9cbiAgQWdncmVnYXRlUHJldm90ZXMoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U+O1xuICAvKiogQWdncmVnYXRlVm90ZSByZXR1cm5zIGFuIGFnZ3JlZ2F0ZSB2b3RlIG9mIGEgdmFsaWRhdG9yICovXG4gIEFnZ3JlZ2F0ZVZvdGUoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlPjtcbiAgLyoqIEFnZ3JlZ2F0ZVZvdGVzIHJldHVybnMgYWdncmVnYXRlIHZvdGVzIG9mIGFsbCB2YWxpZGF0b3JzICovXG4gIEFnZ3JlZ2F0ZVZvdGVzKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlPjtcbiAgLyoqIFBhcmFtcyBxdWVyaWVzIGFsbCBwYXJhbWV0ZXJzLiAqL1xuICBQYXJhbXMocmVxdWVzdDogUXVlcnlQYXJhbXNSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeVBhcmFtc1Jlc3BvbnNlPjtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q2xpZW50SW1wbCBpbXBsZW1lbnRzIFF1ZXJ5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBycGM6IFJwYztcbiAgY29uc3RydWN0b3IocnBjOiBScGMpIHtcbiAgICB0aGlzLnJwYyA9IHJwYztcbiAgfVxuICBFeGNoYW5nZVJhdGUoXG4gICAgcmVxdWVzdDogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkV4Y2hhbmdlUmF0ZVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEV4Y2hhbmdlUmF0ZXMoXG4gICAgcmVxdWVzdDogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkV4Y2hhbmdlUmF0ZXNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQWN0aXZlcyhyZXF1ZXN0OiBRdWVyeUFjdGl2ZXNSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUFjdGl2ZXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUFjdGl2ZXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5vcmFjbGUuUXVlcnlcIiwgXCJBY3RpdmVzXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUFjdGl2ZXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgRmVlZGVyRGVsZWdhdGlvbihcbiAgICByZXF1ZXN0OiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImt1amlyYS5vcmFjbGUuUXVlcnlcIixcbiAgICAgIFwiRmVlZGVyRGVsZWdhdGlvblwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBNaXNzQ291bnRlcihcbiAgICByZXF1ZXN0OiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImt1amlyYS5vcmFjbGUuUXVlcnlcIixcbiAgICAgIFwiTWlzc0NvdW50ZXJcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEFnZ3JlZ2F0ZVByZXZvdGUoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkFnZ3JlZ2F0ZVByZXZvdGVcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQWdncmVnYXRlUHJldm90ZXMoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkFnZ3JlZ2F0ZVByZXZvdGVzXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBBZ2dyZWdhdGVWb3RlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwia3VqaXJhLm9yYWNsZS5RdWVyeVwiLFxuICAgICAgXCJBZ2dyZWdhdGVWb3RlXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEFnZ3JlZ2F0ZVZvdGVzKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwia3VqaXJhLm9yYWNsZS5RdWVyeVwiLFxuICAgICAgXCJBZ2dyZWdhdGVWb3Rlc1wiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgUGFyYW1zKHJlcXVlc3Q6IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBhcmFtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwia3VqaXJhLm9yYWNsZS5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlQYXJhbXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBScGMge1xuICByZXF1ZXN0KFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBkYXRhOiBVaW50OEFycmF5XG4gICk6IFByb21pc2U8VWludDhBcnJheT47XG59XG4iXSwibmFtZXMiOlsiQmluYXJ5UmVhZGVyIiwiQmluYXJ5V3JpdGVyIiwiRGVjQ29pbiIsIkFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUiLCJBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlIiwiUGFyYW1zIiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdCIsImRlbm9tIiwiUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0IiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInN0cmluZyIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiVWludDhBcnJheSIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJTdHJpbmciLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCIsImJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlIiwiZXhjaGFuZ2VfcmF0ZSIsIlF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UiLCJiYXNlUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCIsIlF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3QiLCJfIiwiYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlIiwiUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2UiLCJ2IiwiZXhjaGFuZ2VfcmF0ZXMiLCJmb3JrIiwibGRlbGltIiwicHVzaCIsImUiLCJtYXAiLCJiYXNlUXVlcnlBY3RpdmVzUmVxdWVzdCIsIlF1ZXJ5QWN0aXZlc1JlcXVlc3QiLCJiYXNlUXVlcnlBY3RpdmVzUmVzcG9uc2UiLCJhY3RpdmVzIiwiUXVlcnlBY3RpdmVzUmVzcG9uc2UiLCJiYXNlUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3QiLCJRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCIsImJhc2VRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UiLCJ2b3RlX3RhcmdldHMiLCJRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UiLCJiYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdCIsInZhbGlkYXRvcl9hZGRyIiwiUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdCIsImJhc2VRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZSIsImZlZWRlcl9hZGRyIiwiUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2UiLCJiYXNlUXVlcnlNaXNzQ291bnRlclJlcXVlc3QiLCJRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCIsImJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UiLCJtaXNzX2NvdW50ZXIiLCJRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UiLCJ1aW50NjQiLCJOdW1iZXIiLCJiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCIsIlF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QiLCJiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2UiLCJRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSIsImFnZ3JlZ2F0ZV9wcmV2b3RlIiwiYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXF1ZXN0IiwiUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QiLCJiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlIiwiUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlIiwiYWdncmVnYXRlX3ByZXZvdGVzIiwiYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3QiLCJRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0IiwiYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlIiwiUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UiLCJhZ2dyZWdhdGVfdm90ZSIsImJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCIsIlF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0IiwiYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZSIsIlF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZSIsImFnZ3JlZ2F0ZV92b3RlcyIsImJhc2VRdWVyeVBhcmFtc1JlcXVlc3QiLCJRdWVyeVBhcmFtc1JlcXVlc3QiLCJiYXNlUXVlcnlQYXJhbXNSZXNwb25zZSIsIlF1ZXJ5UGFyYW1zUmVzcG9uc2UiLCJwYXJhbXMiLCJRdWVyeUNsaWVudEltcGwiLCJFeGNoYW5nZVJhdGUiLCJyZXF1ZXN0IiwiZGF0YSIsImZpbmlzaCIsInByb21pc2UiLCJycGMiLCJ0aGVuIiwiRXhjaGFuZ2VSYXRlcyIsIkFjdGl2ZXMiLCJGZWVkZXJEZWxlZ2F0aW9uIiwiTWlzc0NvdW50ZXIiLCJBZ2dyZWdhdGVQcmV2b3RlIiwiQWdncmVnYXRlUHJldm90ZXMiLCJBZ2dyZWdhdGVWb3RlIiwiQWdncmVnYXRlVm90ZXMiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUNqRSxTQUFTQyxPQUFPLFFBQVEsd0NBQXdDO0FBQ2hFLFNBQ0VDLDRCQUE0QixFQUM1QkMseUJBQXlCLEVBQ3pCQyxNQUFNLFFBQ0QsV0FBVztBQUVsQixPQUFPLE1BQU1DLGtCQUFrQixnQkFBZ0I7QUFxSi9DLE1BQU1DLCtCQUF1QztJQUFFQyxPQUFPO0FBQUc7QUFFekQsT0FBTyxNQUFNQywyQkFBMkI7SUFDdENDLFFBQ0VDLE9BQWlDLEVBQ2pDQyxTQUF1QlgsYUFBYVksTUFBTSxFQUFFO1FBRTVDLElBQUlGLFFBQVFILEtBQUssS0FBSyxJQUFJO1lBQ3hCSSxPQUFPRSxNQUFNLENBQUMsSUFBSUMsTUFBTSxDQUFDSixRQUFRSCxLQUFLO1FBQ3hDO1FBQ0EsT0FBT0k7SUFDVDtJ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
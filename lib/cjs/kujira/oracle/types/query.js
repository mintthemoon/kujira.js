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
    QueryActivesRequest: function() {
        return QueryActivesRequest;
    },
    QueryActivesResponse: function() {
        return QueryActivesResponse;
    },
    QueryAggregatePrevoteRequest: function() {
        return QueryAggregatePrevoteRequest;
    },
    QueryAggregatePrevoteResponse: function() {
        return QueryAggregatePrevoteResponse;
    },
    QueryAggregatePrevotesRequest: function() {
        return QueryAggregatePrevotesRequest;
    },
    QueryAggregatePrevotesResponse: function() {
        return QueryAggregatePrevotesResponse;
    },
    QueryAggregateVoteRequest: function() {
        return QueryAggregateVoteRequest;
    },
    QueryAggregateVoteResponse: function() {
        return QueryAggregateVoteResponse;
    },
    QueryAggregateVotesRequest: function() {
        return QueryAggregateVotesRequest;
    },
    QueryAggregateVotesResponse: function() {
        return QueryAggregateVotesResponse;
    },
    QueryClientImpl: function() {
        return QueryClientImpl;
    },
    QueryExchangeRateRequest: function() {
        return QueryExchangeRateRequest;
    },
    QueryExchangeRateResponse: function() {
        return QueryExchangeRateResponse;
    },
    QueryExchangeRatesRequest: function() {
        return QueryExchangeRatesRequest;
    },
    QueryExchangeRatesResponse: function() {
        return QueryExchangeRatesResponse;
    },
    QueryFeederDelegationRequest: function() {
        return QueryFeederDelegationRequest;
    },
    QueryFeederDelegationResponse: function() {
        return QueryFeederDelegationResponse;
    },
    QueryMissCounterRequest: function() {
        return QueryMissCounterRequest;
    },
    QueryMissCounterResponse: function() {
        return QueryMissCounterResponse;
    },
    QueryParamsRequest: function() {
        return QueryParamsRequest;
    },
    QueryParamsResponse: function() {
        return QueryParamsResponse;
    },
    QueryVoteTargetsRequest: function() {
        return QueryVoteTargetsRequest;
    },
    QueryVoteTargetsResponse: function() {
        return QueryVoteTargetsResponse;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _coin = require("cosmjs-types/cosmos/base/v1beta1/coin");
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
const baseQueryExchangeRateRequest = {
    denom: ""
};
const QueryExchangeRateRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryExchangeRateResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.exchange_rate !== "") {
            writer.uint32(10).string(message.exchange_rate);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryExchangeRatesRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryExchangeRatesResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.exchange_rates){
            _coin.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryExchangeRatesResponse);
        message.exchange_rates = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.exchange_rates.push(_coin.DecCoin.decode(reader, reader.uint32()));
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
                message.exchange_rates.push(_coin.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.exchange_rates) {
            obj.exchange_rates = message.exchange_rates.map((e)=>e ? _coin.DecCoin.toJSON(e) : undefined);
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
                message.exchange_rates.push(_coin.DecCoin.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryActivesRequest = {};
const QueryActivesRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryActivesResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.actives){
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryVoteTargetsRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryVoteTargetsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.vote_targets){
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryFeederDelegationRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryFeederDelegationResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.feeder_addr !== "") {
            writer.uint32(10).string(message.feeder_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryMissCounterRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryMissCounterResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.miss_counter !== 0) {
            writer.uint32(8).uint64(message.miss_counter);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryAggregatePrevoteRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryAggregatePrevoteResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.aggregate_prevote !== undefined) {
            _oracle.AggregateExchangeRatePrevote.encode(message.aggregate_prevote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregatePrevoteResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_prevote = _oracle.AggregateExchangeRatePrevote.decode(reader, reader.uint32());
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
            message.aggregate_prevote = _oracle.AggregateExchangeRatePrevote.fromJSON(object.aggregate_prevote);
        } else {
            message.aggregate_prevote = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.aggregate_prevote !== undefined && (obj.aggregate_prevote = message.aggregate_prevote ? _oracle.AggregateExchangeRatePrevote.toJSON(message.aggregate_prevote) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregatePrevoteResponse);
        if (object.aggregate_prevote !== undefined && object.aggregate_prevote !== null) {
            message.aggregate_prevote = _oracle.AggregateExchangeRatePrevote.fromPartial(object.aggregate_prevote);
        } else {
            message.aggregate_prevote = undefined;
        }
        return message;
    }
};
const baseQueryAggregatePrevotesRequest = {};
const QueryAggregatePrevotesRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryAggregatePrevotesResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.aggregate_prevotes){
            _oracle.AggregateExchangeRatePrevote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregatePrevotesResponse);
        message.aggregate_prevotes = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_prevotes.push(_oracle.AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
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
                message.aggregate_prevotes.push(_oracle.AggregateExchangeRatePrevote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.aggregate_prevotes) {
            obj.aggregate_prevotes = message.aggregate_prevotes.map((e)=>e ? _oracle.AggregateExchangeRatePrevote.toJSON(e) : undefined);
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
                message.aggregate_prevotes.push(_oracle.AggregateExchangeRatePrevote.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryAggregateVoteRequest = {
    validator_addr: ""
};
const QueryAggregateVoteRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryAggregateVoteResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.aggregate_vote !== undefined) {
            _oracle.AggregateExchangeRateVote.encode(message.aggregate_vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregateVoteResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_vote = _oracle.AggregateExchangeRateVote.decode(reader, reader.uint32());
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
            message.aggregate_vote = _oracle.AggregateExchangeRateVote.fromJSON(object.aggregate_vote);
        } else {
            message.aggregate_vote = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.aggregate_vote !== undefined && (obj.aggregate_vote = message.aggregate_vote ? _oracle.AggregateExchangeRateVote.toJSON(message.aggregate_vote) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryAggregateVoteResponse);
        if (object.aggregate_vote !== undefined && object.aggregate_vote !== null) {
            message.aggregate_vote = _oracle.AggregateExchangeRateVote.fromPartial(object.aggregate_vote);
        } else {
            message.aggregate_vote = undefined;
        }
        return message;
    }
};
const baseQueryAggregateVotesRequest = {};
const QueryAggregateVotesRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryAggregateVotesResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.aggregate_votes){
            _oracle.AggregateExchangeRateVote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryAggregateVotesResponse);
        message.aggregate_votes = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.aggregate_votes.push(_oracle.AggregateExchangeRateVote.decode(reader, reader.uint32()));
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
                message.aggregate_votes.push(_oracle.AggregateExchangeRateVote.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        if (message.aggregate_votes) {
            obj.aggregate_votes = message.aggregate_votes.map((e)=>e ? _oracle.AggregateExchangeRateVote.toJSON(e) : undefined);
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
                message.aggregate_votes.push(_oracle.AggregateExchangeRateVote.fromPartial(e));
            }
        }
        return message;
    }
};
const baseQueryParamsRequest = {};
const QueryParamsRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
const QueryParamsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.params !== undefined) {
            _oracle.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseQueryParamsResponse);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = _oracle.Params.decode(reader, reader.uint32());
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
            message.params = _oracle.Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? _oracle.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = _oracle.Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    }
};
class QueryClientImpl {
    ExchangeRate(request) {
        const data = QueryExchangeRateRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRate", data);
        return promise.then((data)=>QueryExchangeRateResponse.decode(new _binary.BinaryReader(data)));
    }
    ExchangeRates(request) {
        const data = QueryExchangeRatesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "ExchangeRates", data);
        return promise.then((data)=>QueryExchangeRatesResponse.decode(new _binary.BinaryReader(data)));
    }
    Actives(request) {
        const data = QueryActivesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Actives", data);
        return promise.then((data)=>QueryActivesResponse.decode(new _binary.BinaryReader(data)));
    }
    FeederDelegation(request) {
        const data = QueryFeederDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "FeederDelegation", data);
        return promise.then((data)=>QueryFeederDelegationResponse.decode(new _binary.BinaryReader(data)));
    }
    MissCounter(request) {
        const data = QueryMissCounterRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "MissCounter", data);
        return promise.then((data)=>QueryMissCounterResponse.decode(new _binary.BinaryReader(data)));
    }
    AggregatePrevote(request) {
        const data = QueryAggregatePrevoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevote", data);
        return promise.then((data)=>QueryAggregatePrevoteResponse.decode(new _binary.BinaryReader(data)));
    }
    AggregatePrevotes(request) {
        const data = QueryAggregatePrevotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregatePrevotes", data);
        return promise.then((data)=>QueryAggregatePrevotesResponse.decode(new _binary.BinaryReader(data)));
    }
    AggregateVote(request) {
        const data = QueryAggregateVoteRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVote", data);
        return promise.then((data)=>QueryAggregateVoteResponse.decode(new _binary.BinaryReader(data)));
    }
    AggregateVotes(request) {
        const data = QueryAggregateVotesRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "AggregateVotes", data);
        return promise.then((data)=>QueryAggregateVotesResponse.decode(new _binary.BinaryReader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.oracle.Query", "Params", data);
        return promise.then((data)=>QueryParamsResponse.decode(new _binary.BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvb3JhY2xlL3R5cGVzL3F1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gXCJjb3NtanMtdHlwZXNcIjtcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IERlY0NvaW4gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3YxYmV0YTEvY29pblwiO1xuaW1wb3J0IHtcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSxcbiAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSxcbiAgUGFyYW1zLFxufSBmcm9tIFwiLi9vcmFjbGVcIjtcblxuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLm9yYWNsZVwiO1xuXG4vKiogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9FeGNoYW5nZVJhdGUgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0IHtcbiAgLyoqIGRlbm9tIGRlZmluZXMgdGhlIGRlbm9taW5hdGlvbiB0byBxdWVyeSBmb3IuICovXG4gIGRlbm9tOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0V4Y2hhbmdlUmF0ZSBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2Uge1xuICAvKiogZXhjaGFuZ2VfcmF0ZSBkZWZpbmVzIHRoZSBleGNoYW5nZSByYXRlIG9mIHdoaXRlbGlzdGVkIGFzc2V0cyAqL1xuICBleGNoYW5nZV9yYXRlOiBzdHJpbmc7XG59XG5cbi8qKiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9FeGNoYW5nZVJhdGVzIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0V4Y2hhbmdlUmF0ZXMgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSB7XG4gIC8qKiBleGNoYW5nZV9yYXRlcyBkZWZpbmVzIGEgbGlzdCBvZiB0aGUgZXhjaGFuZ2UgcmF0ZSBmb3IgYWxsIHdoaXRlbGlzdGVkIGRlbm9tcy4gKi9cbiAgZXhjaGFuZ2VfcmF0ZXM6IERlY0NvaW5bXTtcbn1cblxuLyoqIFF1ZXJ5QWN0aXZlc1JlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L0FjdGl2ZXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBY3RpdmVzUmVxdWVzdCB7fVxuXG4vKipcbiAqIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlIGlzIHJlc3BvbnNlIHR5cGUgZm9yIHRoZVxuICogUXVlcnkvQWN0aXZlcyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlIHtcbiAgLyoqIGFjdGl2ZXMgZGVmaW5lcyBhIGxpc3Qgb2YgdGhlIGRlbm9taW5hdGlvbiB3aGljaCBvcmFjbGUgcHJpY2VzIGFnZ3JlZWQgdXBvbi4gKi9cbiAgYWN0aXZlczogc3RyaW5nW107XG59XG5cbi8qKiBRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCBpcyB0aGUgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvVm90ZVRhcmdldHMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UgaXMgcmVzcG9uc2UgdHlwZSBmb3IgdGhlXG4gKiBRdWVyeS9Wb3RlVGFyZ2V0cyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSB7XG4gIC8qKlxuICAgKiB2b3RlX3RhcmdldHMgZGVmaW5lcyBhIGxpc3Qgb2YgdGhlIGRlbm9taW5hdGlvbiBpbiB3aGljaCBldmVyeW9uZVxuICAgKiBzaG91bGQgdm90ZSBpbiB0aGUgY3VycmVudCB2b3RlIHBlcmlvZC5cbiAgICovXG4gIHZvdGVfdGFyZ2V0czogc3RyaW5nW107XG59XG5cbi8qKiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9GZWVkZXJEZWxlZ2F0aW9uIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Qge1xuICAvKiogdmFsaWRhdG9yIGRlZmluZXMgdGhlIHZhbGlkYXRvciBhZGRyZXNzIHRvIHF1ZXJ5IGZvci4gKi9cbiAgdmFsaWRhdG9yX2FkZHI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0ZlZWRlckRlbGVnYXRpb24gUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZSB7XG4gIC8qKiBmZWVkZXJfYWRkciBkZWZpbmVzIHRoZSBmZWVkZXIgZGVsZWdhdGlvbiBvZiBhIHZhbGlkYXRvciAqL1xuICBmZWVkZXJfYWRkcjogc3RyaW5nO1xufVxuXG4vKiogUXVlcnlNaXNzQ291bnRlclJlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L01pc3NDb3VudGVyIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0IHtcbiAgLyoqIHZhbGlkYXRvciBkZWZpbmVzIHRoZSB2YWxpZGF0b3IgYWRkcmVzcyB0byBxdWVyeSBmb3IuICovXG4gIHZhbGlkYXRvcl9hZGRyOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUXVlcnlNaXNzQ291bnRlclJlc3BvbnNlIGlzIHJlc3BvbnNlIHR5cGUgZm9yIHRoZVxuICogUXVlcnkvTWlzc0NvdW50ZXIgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2Uge1xuICAvKiogbWlzc19jb3VudGVyIGRlZmluZXMgdGhlIG9yYWNsZSBtaXNzIGNvdW50ZXIgb2YgYSB2YWxpZGF0b3IgKi9cbiAgbWlzc19jb3VudGVyOiBudW1iZXI7XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9BZ2dyZWdhdGVQcmV2b3RlIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3Qge1xuICAvKiogdmFsaWRhdG9yIGRlZmluZXMgdGhlIHZhbGlkYXRvciBhZGRyZXNzIHRvIHF1ZXJ5IGZvci4gKi9cbiAgdmFsaWRhdG9yX2FkZHI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0FnZ3JlZ2F0ZVByZXZvdGUgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfcHJldm90ZSBkZWZpbmVzIG9yYWNsZSBhZ2dyZWdhdGUgcHJldm90ZSBzdWJtaXR0ZWQgYnkgYSB2YWxpZGF0b3IgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ByZXZvdGU6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUgfCB1bmRlZmluZWQ7XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCBpcyB0aGUgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvQWdncmVnYXRlUHJldm90ZXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UgaXMgcmVzcG9uc2UgdHlwZSBmb3IgdGhlXG4gKiBRdWVyeS9BZ2dyZWdhdGVQcmV2b3RlcyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfcHJldm90ZXMgZGVmaW5lcyBhbGwgb3JhY2xlIGFnZ3JlZ2F0ZSBwcmV2b3RlcyBzdWJtaXR0ZWQgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ByZXZvdGVzOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlW107XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0IGlzIHRoZSByZXF1ZXN0IHR5cGUgZm9yIHRoZSBRdWVyeS9BZ2dyZWdhdGVWb3RlIFJQQyBtZXRob2QuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Qge1xuICAvKiogdmFsaWRhdG9yIGRlZmluZXMgdGhlIHZhbGlkYXRvciBhZGRyZXNzIHRvIHF1ZXJ5IGZvci4gKi9cbiAgdmFsaWRhdG9yX2FkZHI6IHN0cmluZztcbn1cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZSBpcyByZXNwb25zZSB0eXBlIGZvciB0aGVcbiAqIFF1ZXJ5L0FnZ3JlZ2F0ZVZvdGUgUlBDIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfdm90ZSBkZWZpbmVzIG9yYWNsZSBhZ2dyZWdhdGUgdm90ZSBzdWJtaXR0ZWQgYnkgYSB2YWxpZGF0b3IgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ZvdGU6IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUgfCB1bmRlZmluZWQ7XG59XG5cbi8qKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCBpcyB0aGUgcmVxdWVzdCB0eXBlIGZvciB0aGUgUXVlcnkvQWdncmVnYXRlVm90ZXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3Qge31cblxuLyoqXG4gKiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2UgaXMgcmVzcG9uc2UgdHlwZSBmb3IgdGhlXG4gKiBRdWVyeS9BZ2dyZWdhdGVWb3RlcyBSUEMgbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZSB7XG4gIC8qKiBhZ2dyZWdhdGVfdm90ZXMgZGVmaW5lcyBhbGwgb3JhY2xlIGFnZ3JlZ2F0ZSB2b3RlcyBzdWJtaXR0ZWQgaW4gdGhlIGN1cnJlbnQgdm90ZSBwZXJpb2QgKi9cbiAgYWdncmVnYXRlX3ZvdGVzOiBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlW107XG59XG5cbi8qKiBRdWVyeVBhcmFtc1JlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L1BhcmFtcyBSUEMgbWV0aG9kLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBhcmFtc1JlcXVlc3Qge31cblxuLyoqIFF1ZXJ5UGFyYW1zUmVzcG9uc2UgaXMgdGhlIHJlc3BvbnNlIHR5cGUgZm9yIHRoZSBRdWVyeS9QYXJhbXMgUlBDIG1ldGhvZC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gIC8qKiBwYXJhbXMgZGVmaW5lcyB0aGUgcGFyYW1ldGVycyBvZiB0aGUgbW9kdWxlLiAqL1xuICBwYXJhbXM6IFBhcmFtcyB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdDogb2JqZWN0ID0geyBkZW5vbTogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZGVub20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmRlbm9tKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmRlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QuZGVub20gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVub20gIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZGVub20gPSBTdHJpbmcob2JqZWN0LmRlbm9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZW5vbSA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdD5cbiAgKTogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LmRlbm9tICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlbm9tICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gb2JqZWN0LmRlbm9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlbm9tID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZTogb2JqZWN0ID0geyBleGNoYW5nZV9yYXRlOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmV4Y2hhbmdlX3JhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LmV4Y2hhbmdlX3JhdGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXhjaGFuZ2VfcmF0ZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlID0gU3RyaW5nKG9iamVjdC5leGNoYW5nZV9yYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmV4Y2hhbmdlX3JhdGUgPSBtZXNzYWdlLmV4Y2hhbmdlX3JhdGUpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlPlxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZVJlc3BvbnNlO1xuICAgIGlmIChvYmplY3QuZXhjaGFuZ2VfcmF0ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGUgPSBvYmplY3QuZXhjaGFuZ2VfcmF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5leGNoYW5nZV9yYXRlID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdDogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBEZWVwUGFydGlhbDxRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0PlxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5leGNoYW5nZV9yYXRlcykge1xuICAgICAgRGVjQ29pbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMucHVzaChEZWNDb2luLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMgPSBbXTtcbiAgICBpZiAob2JqZWN0LmV4Y2hhbmdlX3JhdGVzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4Y2hhbmdlX3JhdGVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmV4Y2hhbmdlX3JhdGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuZXhjaGFuZ2VfcmF0ZXMucHVzaChEZWNDb2luLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5leGNoYW5nZV9yYXRlcykge1xuICAgICAgb2JqLmV4Y2hhbmdlX3JhdGVzID0gbWVzc2FnZS5leGNoYW5nZV9yYXRlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBEZWNDb2luLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmV4Y2hhbmdlX3JhdGVzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZT5cbiAgKTogUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZTtcbiAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzID0gW107XG4gICAgaWYgKG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGNoYW5nZV9yYXRlcyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5leGNoYW5nZV9yYXRlcykge1xuICAgICAgICBtZXNzYWdlLmV4Y2hhbmdlX3JhdGVzLnB1c2goRGVjQ29pbi5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3Q6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBY3RpdmVzUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5QWN0aXZlc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBY3RpdmVzUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3QgfSBhcyBRdWVyeUFjdGl2ZXNSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlBY3RpdmVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3QgfSBhcyBRdWVyeUFjdGl2ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUFjdGl2ZXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKF86IERlZXBQYXJ0aWFsPFF1ZXJ5QWN0aXZlc1JlcXVlc3Q+KTogUXVlcnlBY3RpdmVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3QgfSBhcyBRdWVyeUFjdGl2ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5QWN0aXZlc1Jlc3BvbnNlOiBvYmplY3QgPSB7IGFjdGl2ZXM6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBY3RpdmVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5hY3RpdmVzKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcodiEpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBY3RpdmVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFjdGl2ZXNSZXNwb25zZSB9IGFzIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWN0aXZlcyA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5hY3RpdmVzLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBY3RpdmVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFjdGl2ZXNSZXNwb25zZSB9IGFzIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWN0aXZlcyA9IFtdO1xuICAgIGlmIChvYmplY3QuYWN0aXZlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY3RpdmVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFjdGl2ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hY3RpdmVzLnB1c2goU3RyaW5nKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5hY3RpdmVzKSB7XG4gICAgICBvYmouYWN0aXZlcyA9IG1lc3NhZ2UuYWN0aXZlcy5tYXAoKGUpID0+IGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYWN0aXZlcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlBY3RpdmVzUmVzcG9uc2U+KTogUXVlcnlBY3RpdmVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeUFjdGl2ZXNSZXNwb25zZSB9IGFzIFF1ZXJ5QWN0aXZlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWN0aXZlcyA9IFtdO1xuICAgIGlmIChvYmplY3QuYWN0aXZlcyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY3RpdmVzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFjdGl2ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hY3RpdmVzLnB1c2goZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0OiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlWb3RlVGFyZ2V0c1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IERlZXBQYXJ0aWFsPFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0PlxuICApOiBRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZTogb2JqZWN0ID0geyB2b3RlX3RhcmdldHM6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnZvdGVfdGFyZ2V0cykge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKHYhKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS52b3RlX3RhcmdldHMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uudm90ZV90YXJnZXRzLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlWb3RlVGFyZ2V0c1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZTtcbiAgICBtZXNzYWdlLnZvdGVfdGFyZ2V0cyA9IFtdO1xuICAgIGlmIChvYmplY3Qudm90ZV90YXJnZXRzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZvdGVfdGFyZ2V0cyAhPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC52b3RlX3RhcmdldHMpIHtcbiAgICAgICAgbWVzc2FnZS52b3RlX3RhcmdldHMucHVzaChTdHJpbmcoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlWb3RlVGFyZ2V0c1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS52b3RlX3RhcmdldHMpIHtcbiAgICAgIG9iai52b3RlX3RhcmdldHMgPSBtZXNzYWdlLnZvdGVfdGFyZ2V0cy5tYXAoKGUpID0+IGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudm90ZV90YXJnZXRzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeVZvdGVUYXJnZXRzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS52b3RlX3RhcmdldHMgPSBbXTtcbiAgICBpZiAob2JqZWN0LnZvdGVfdGFyZ2V0cyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52b3RlX3RhcmdldHMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3Qudm90ZV90YXJnZXRzKSB7XG4gICAgICAgIG1lc3NhZ2Uudm90ZV90YXJnZXRzLnB1c2goZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Q6IG9iamVjdCA9IHsgdmFsaWRhdG9yX2FkZHI6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yX2FkZHIgPSBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdD5cbiAgKTogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gb2JqZWN0LnZhbGlkYXRvcl9hZGRyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U6IG9iamVjdCA9IHsgZmVlZGVyX2FkZHI6IFwiXCIgfTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5mZWVkZXJfYWRkciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZmVlZGVyX2FkZHIpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZmVlZGVyX2FkZHIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5mZWVkZXJfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXJfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkciA9IFN0cmluZyhvYmplY3QuZmVlZGVyX2FkZHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZlZWRlcl9hZGRyID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmZlZWRlcl9hZGRyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZmVlZGVyX2FkZHIgPSBtZXNzYWdlLmZlZWRlcl9hZGRyKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5mZWVkZXJfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mZWVkZXJfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkciA9IG9iamVjdC5mZWVkZXJfYWRkcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mZWVkZXJfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0OiBvYmplY3QgPSB7IHZhbGlkYXRvcl9hZGRyOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlNaXNzQ291bnRlclJlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcl9hZGRyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnZhbGlkYXRvcl9hZGRyID0gbWVzc2FnZS52YWxpZGF0b3JfYWRkcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0PlxuICApOiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5TWlzc0NvdW50ZXJSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBvYmplY3QudmFsaWRhdG9yX2FkZHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U6IG9iamVjdCA9IHsgbWlzc19jb3VudGVyOiAwIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5taXNzX2NvdW50ZXIgIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UubWlzc19jb3VudGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlNaXNzQ291bnRlclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0Lm1pc3NfY291bnRlciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5taXNzX2NvdW50ZXIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gTnVtYmVyKG9iamVjdC5taXNzX2NvdW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWlzc19jb3VudGVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubWlzc19jb3VudGVyID0gbWVzc2FnZS5taXNzX2NvdW50ZXIpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5taXNzX2NvdW50ZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubWlzc19jb3VudGVyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm1pc3NfY291bnRlciA9IG9iamVjdC5taXNzX2NvdW50ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UubWlzc19jb3VudGVyID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdDogb2JqZWN0ID0geyB2YWxpZGF0b3JfYWRkcjogXCJcIiB9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS52YWxpZGF0b3JfYWRkciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3Q7XG4gICAgaWYgKG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFN0cmluZyhvYmplY3QudmFsaWRhdG9yX2FkZHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxpZGF0b3JfYWRkciA9IG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0PlxuICApOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0O1xuICAgIGlmIChvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudmFsaWRhdG9yX2FkZHIgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBvYmplY3QudmFsaWRhdG9yX2FkZHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5lbmNvZGUoXG4gICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUsXG4gICAgICAgIHdyaXRlci51aW50MzIoMTApLmZvcmsoKVxuICAgICAgKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3RlID0gQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5kZWNvZGUoXG4gICAgICAgICAgICByZWFkZXIsXG4gICAgICAgICAgICByZWFkZXIudWludDMyKClcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGUgIT09IG51bGxcbiAgICApIHtcbiAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUgPSBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmZyb21KU09OKFxuICAgICAgICBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGVcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmFnZ3JlZ2F0ZV9wcmV2b3RlID0gbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZVxuICAgICAgICA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUudG9KU09OKG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGUpXG4gICAgICAgIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U+XG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U7XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9wcmV2b3RlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZSAhPT0gbnVsbFxuICAgICkge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZSA9IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUuZnJvbVBhcnRpYWwoXG4gICAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Q6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBfOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgXzogRGVlcFBhcnRpYWw8UXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Q+XG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3Rlcykge1xuICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5lbmNvZGUoXG4gICAgICAgIHYhLFxuICAgICAgICB3cml0ZXIudWludDMyKDEwKS5mb3JrKClcbiAgICAgICkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGVzID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3Rlcy5wdXNoKFxuICAgICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3RlcyA9IFtdO1xuICAgIGlmIChcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV9wcmV2b3RlcyAhPT0gbnVsbFxuICAgICkge1xuICAgICAgZm9yIChjb25zdCBlIG9mIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZXMpIHtcbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZXMucHVzaChcbiAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVQcmV2b3RlLmZyb21KU09OKGUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIGlmIChtZXNzYWdlLmFnZ3JlZ2F0ZV9wcmV2b3Rlcykge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV9wcmV2b3RlcyA9IG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGVzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVByZXZvdGUudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYWdncmVnYXRlX3ByZXZvdGVzID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5QWdncmVnYXRlUHJldm90ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfcHJldm90ZXMgPSBbXTtcbiAgICBpZiAoXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGVzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5hZ2dyZWdhdGVfcHJldm90ZXMgIT09IG51bGxcbiAgICApIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuYWdncmVnYXRlX3ByZXZvdGVzKSB7XG4gICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ByZXZvdGVzLnB1c2goXG4gICAgICAgICAgQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZS5mcm9tUGFydGlhbChlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0OiBvYmplY3QgPSB7IHZhbGlkYXRvcl9hZGRyOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvcl9hZGRyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS52YWxpZGF0b3JfYWRkcik7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0O1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdDtcbiAgICBpZiAob2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbGlkYXRvcl9hZGRyICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnZhbGlkYXRvcl9hZGRyID0gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JfYWRkcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudmFsaWRhdG9yX2FkZHIgPSBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnZhbGlkYXRvcl9hZGRyID0gbWVzc2FnZS52YWxpZGF0b3JfYWRkcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Q+XG4gICk6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3Q7XG4gICAgaWYgKG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC52YWxpZGF0b3JfYWRkciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IG9iamVjdC52YWxpZGF0b3JfYWRkcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS52YWxpZGF0b3JfYWRkciA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuY29uc3QgYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlOiBvYmplY3QgPSB7fTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSxcbiAgICAgICAgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpXG4gICAgICApLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgPyBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KSA6IGlucHV0O1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGUgPSBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmRlY29kZShcbiAgICAgICAgICAgIHJlYWRlcixcbiAgICAgICAgICAgIHJlYWRlci51aW50MzIoKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5hZ2dyZWdhdGVfdm90ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hZ2dyZWdhdGVfdm90ZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSA9IEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZnJvbUpTT04oXG4gICAgICAgIG9iamVjdC5hZ2dyZWdhdGVfdm90ZVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYWdncmVnYXRlX3ZvdGUgPSBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlXG4gICAgICAgID8gQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS50b0pTT04obWVzc2FnZS5hZ2dyZWdhdGVfdm90ZSlcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZT5cbiAgKTogUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZTtcbiAgICBpZiAob2JqZWN0LmFnZ3JlZ2F0ZV92b3RlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlID0gQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZS5mcm9tUGFydGlhbChcbiAgICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3RlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdDogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZVF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0LFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3Q7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCxcbiAgICB9IGFzIFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0O1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBEZWVwUGFydGlhbDxRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdD5cbiAgKTogUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3Rlc1JlcXVlc3QsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2U6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzKSB7XG4gICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2UsXG4gICAgfSBhcyBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2U7XG4gICAgbWVzc2FnZS5hZ2dyZWdhdGVfdm90ZXMgPSBbXTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzLnB1c2goXG4gICAgICAgICAgICBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzID0gW107XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ZvdGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFnZ3JlZ2F0ZV92b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3Rlcy5wdXNoKEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBpZiAobWVzc2FnZS5hZ2dyZWdhdGVfdm90ZXMpIHtcbiAgICAgIG9iai5hZ2dyZWdhdGVfdm90ZXMgPSBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3Rlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBBZ2dyZWdhdGVFeGNoYW5nZVJhdGVWb3RlLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmFnZ3JlZ2F0ZV92b3RlcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlPlxuICApOiBRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlLFxuICAgIH0gYXMgUXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlO1xuICAgIG1lc3NhZ2UuYWdncmVnYXRlX3ZvdGVzID0gW107XG4gICAgaWYgKFxuICAgICAgb2JqZWN0LmFnZ3JlZ2F0ZV92b3RlcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuYWdncmVnYXRlX3ZvdGVzICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmFnZ3JlZ2F0ZV92b3Rlcykge1xuICAgICAgICBtZXNzYWdlLmFnZ3JlZ2F0ZV92b3Rlcy5wdXNoKEFnZ3JlZ2F0ZUV4Y2hhbmdlUmF0ZVZvdGUuZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VRdWVyeVBhcmFtc1JlcXVlc3Q6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlQYXJhbXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCB9IGFzIFF1ZXJ5UGFyYW1zUmVxdWVzdDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IFF1ZXJ5UGFyYW1zUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCB9IGFzIFF1ZXJ5UGFyYW1zUmVxdWVzdDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlQYXJhbXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKF86IERlZXBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVxdWVzdD4pOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VRdWVyeVBhcmFtc1JlcXVlc3QgfSBhcyBRdWVyeVBhcmFtc1JlcXVlc3Q7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlUXVlcnlQYXJhbXNSZXNwb25zZTogb2JqZWN0ID0ge307XG5cbmV4cG9ydCBjb25zdCBRdWVyeVBhcmFtc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQYXJhbXNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQYXJhbXMuZW5jb2RlKG1lc3NhZ2UucGFyYW1zLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlQYXJhbXNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UgfSBhcyBRdWVyeVBhcmFtc1Jlc3BvbnNlO1xuICAgIGlmIChvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZnJvbUpTT04ob2JqZWN0LnBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UucGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlQYXJhbXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5wYXJhbXMgPSBtZXNzYWdlLnBhcmFtcyA/IFBhcmFtcy50b0pTT04obWVzc2FnZS5wYXJhbXMpIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UXVlcnlQYXJhbXNSZXNwb25zZT4pOiBRdWVyeVBhcmFtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUXVlcnlQYXJhbXNSZXNwb25zZSB9IGFzIFF1ZXJ5UGFyYW1zUmVzcG9uc2U7XG4gICAgaWYgKG9iamVjdC5wYXJhbXMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucGFyYW1zICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnBhcmFtcyA9IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuLyoqIFF1ZXJ5IGRlZmluZXMgdGhlIGdSUEMgcXVlcmllciBzZXJ2aWNlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIC8qKiBFeGNoYW5nZVJhdGUgcmV0dXJucyBleGNoYW5nZSByYXRlIG9mIGEgZGVub20gKi9cbiAgRXhjaGFuZ2VSYXRlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2U+O1xuICAvKiogRXhjaGFuZ2VSYXRlcyByZXR1cm5zIGV4Y2hhbmdlIHJhdGVzIG9mIGFsbCBkZW5vbXMgKi9cbiAgRXhjaGFuZ2VSYXRlcyhcbiAgICByZXF1ZXN0OiBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2U+O1xuICAvKiogQWN0aXZlcyByZXR1cm5zIGFsbCBhY3RpdmUgZGVub21zICovXG4gIEFjdGl2ZXMocmVxdWVzdDogUXVlcnlBY3RpdmVzUmVxdWVzdCk6IFByb21pc2U8UXVlcnlBY3RpdmVzUmVzcG9uc2U+O1xuICAvKiogRmVlZGVyRGVsZWdhdGlvbiByZXR1cm5zIGZlZWRlciBkZWxlZ2F0aW9uIG9mIGEgdmFsaWRhdG9yICovXG4gIEZlZWRlckRlbGVnYXRpb24oXG4gICAgcmVxdWVzdDogUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlPjtcbiAgLyoqIE1pc3NDb3VudGVyIHJldHVybnMgb3JhY2xlIG1pc3MgY291bnRlciBvZiBhIHZhbGlkYXRvciAqL1xuICBNaXNzQ291bnRlcihcbiAgICByZXF1ZXN0OiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZT47XG4gIC8qKiBBZ2dyZWdhdGVQcmV2b3RlIHJldHVybnMgYW4gYWdncmVnYXRlIHByZXZvdGUgb2YgYSB2YWxpZGF0b3IgKi9cbiAgQWdncmVnYXRlUHJldm90ZShcbiAgICByZXF1ZXN0OiBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVzcG9uc2U+O1xuICAvKiogQWdncmVnYXRlUHJldm90ZXMgcmV0dXJucyBhZ2dyZWdhdGUgcHJldm90ZXMgb2YgYWxsIHZhbGlkYXRvcnMgKi9cbiAgQWdncmVnYXRlUHJldm90ZXMoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U+O1xuICAvKiogQWdncmVnYXRlVm90ZSByZXR1cm5zIGFuIGFnZ3JlZ2F0ZSB2b3RlIG9mIGEgdmFsaWRhdG9yICovXG4gIEFnZ3JlZ2F0ZVZvdGUoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QWdncmVnYXRlVm90ZVJlc3BvbnNlPjtcbiAgLyoqIEFnZ3JlZ2F0ZVZvdGVzIHJldHVybnMgYWdncmVnYXRlIHZvdGVzIG9mIGFsbCB2YWxpZGF0b3JzICovXG4gIEFnZ3JlZ2F0ZVZvdGVzKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlPjtcbiAgLyoqIFBhcmFtcyBxdWVyaWVzIGFsbCBwYXJhbWV0ZXJzLiAqL1xuICBQYXJhbXMocmVxdWVzdDogUXVlcnlQYXJhbXNSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeVBhcmFtc1Jlc3BvbnNlPjtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q2xpZW50SW1wbCBpbXBsZW1lbnRzIFF1ZXJ5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBycGM6IFJwYztcbiAgY29uc3RydWN0b3IocnBjOiBScGMpIHtcbiAgICB0aGlzLnJwYyA9IHJwYztcbiAgfVxuICBFeGNoYW5nZVJhdGUoXG4gICAgcmVxdWVzdDogUXVlcnlFeGNoYW5nZVJhdGVSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkV4Y2hhbmdlUmF0ZVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEV4Y2hhbmdlUmF0ZXMoXG4gICAgcmVxdWVzdDogUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RXhjaGFuZ2VSYXRlc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RXhjaGFuZ2VSYXRlc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkV4Y2hhbmdlUmF0ZXNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUV4Y2hhbmdlUmF0ZXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQWN0aXZlcyhyZXF1ZXN0OiBRdWVyeUFjdGl2ZXNSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUFjdGl2ZXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUFjdGl2ZXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImt1amlyYS5vcmFjbGUuUXVlcnlcIiwgXCJBY3RpdmVzXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUFjdGl2ZXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgRmVlZGVyRGVsZWdhdGlvbihcbiAgICByZXF1ZXN0OiBRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImt1amlyYS5vcmFjbGUuUXVlcnlcIixcbiAgICAgIFwiRmVlZGVyRGVsZWdhdGlvblwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RmVlZGVyRGVsZWdhdGlvblJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBNaXNzQ291bnRlcihcbiAgICByZXF1ZXN0OiBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeU1pc3NDb3VudGVyUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImt1amlyYS5vcmFjbGUuUXVlcnlcIixcbiAgICAgIFwiTWlzc0NvdW50ZXJcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEFnZ3JlZ2F0ZVByZXZvdGUoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkFnZ3JlZ2F0ZVByZXZvdGVcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQWdncmVnYXRlUHJldm90ZXMoXG4gICAgcmVxdWVzdDogUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJrdWppcmEub3JhY2xlLlF1ZXJ5XCIsXG4gICAgICBcIkFnZ3JlZ2F0ZVByZXZvdGVzXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBBZ2dyZWdhdGVWb3RlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QWdncmVnYXRlVm90ZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwia3VqaXJhLm9yYWNsZS5RdWVyeVwiLFxuICAgICAgXCJBZ2dyZWdhdGVWb3RlXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEFnZ3JlZ2F0ZVZvdGVzKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlBZ2dyZWdhdGVWb3Rlc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwia3VqaXJhLm9yYWNsZS5RdWVyeVwiLFxuICAgICAgXCJBZ2dyZWdhdGVWb3Rlc1wiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgUGFyYW1zKHJlcXVlc3Q6IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBhcmFtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwia3VqaXJhLm9yYWNsZS5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlQYXJhbXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBScGMge1xuICByZXF1ZXN0KFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBkYXRhOiBVaW50OEFycmF5XG4gICk6IFByb21pc2U8VWludDhBcnJheT47XG59XG4iXSwibmFtZXMiOlsiUXVlcnlBY3RpdmVzUmVxdWVzdCIsIlF1ZXJ5QWN0aXZlc1Jlc3BvbnNlIiwiUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCIsIlF1ZXJ5QWdncmVnYXRlUHJldm90ZVJlc3BvbnNlIiwiUXVlcnlBZ2dyZWdhdGVQcmV2b3Rlc1JlcXVlc3QiLCJRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UiLCJRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXF1ZXN0IiwiUXVlcnlBZ2dyZWdhdGVWb3RlUmVzcG9uc2UiLCJRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCIsIlF1ZXJ5QWdncmVnYXRlVm90ZXNSZXNwb25zZSIsIlF1ZXJ5Q2xpZW50SW1wbCIsIlF1ZXJ5RXhjaGFuZ2VSYXRlUmVxdWVzdCIsIlF1ZXJ5RXhjaGFuZ2VSYXRlUmVzcG9uc2UiLCJRdWVyeUV4Y2hhbmdlUmF0ZXNSZXF1ZXN0IiwiUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2UiLCJRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0IiwiUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2UiLCJRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCIsIlF1ZXJ5TWlzc0NvdW50ZXJSZXNwb25zZSIsIlF1ZXJ5UGFyYW1zUmVxdWVzdCIsIlF1ZXJ5UGFyYW1zUmVzcG9uc2UiLCJRdWVyeVZvdGVUYXJnZXRzUmVxdWVzdCIsIlF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSIsInByb3RvYnVmUGFja2FnZSIsImJhc2VRdWVyeUV4Y2hhbmdlUmF0ZVJlcXVlc3QiLCJkZW5vbSIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJjcmVhdGUiLCJ1aW50MzIiLCJzdHJpbmciLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIlVpbnQ4QXJyYXkiLCJCaW5hcnlSZWFkZXIiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwiZnJvbVBhcnRpYWwiLCJiYXNlUXVlcnlFeGNoYW5nZVJhdGVSZXNwb25zZSIsImV4Y2hhbmdlX3JhdGUiLCJiYXNlUXVlcnlFeGNoYW5nZVJhdGVzUmVxdWVzdCIsIl8iLCJiYXNlUXVlcnlFeGNoYW5nZVJhdGVzUmVzcG9uc2UiLCJ2IiwiZXhjaGFuZ2VfcmF0ZXMiLCJEZWNDb2luIiwiZm9yayIsImxkZWxpbSIsInB1c2giLCJlIiwibWFwIiwiYmFzZVF1ZXJ5QWN0aXZlc1JlcXVlc3QiLCJiYXNlUXVlcnlBY3RpdmVzUmVzcG9uc2UiLCJhY3RpdmVzIiwiYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXF1ZXN0IiwiYmFzZVF1ZXJ5Vm90ZVRhcmdldHNSZXNwb25zZSIsInZvdGVfdGFyZ2V0cyIsImJhc2VRdWVyeUZlZWRlckRlbGVnYXRpb25SZXF1ZXN0IiwidmFsaWRhdG9yX2FkZHIiLCJiYXNlUXVlcnlGZWVkZXJEZWxlZ2F0aW9uUmVzcG9uc2UiLCJmZWVkZXJfYWRkciIsImJhc2VRdWVyeU1pc3NDb3VudGVyUmVxdWVzdCIsImJhc2VRdWVyeU1pc3NDb3VudGVyUmVzcG9uc2UiLCJtaXNzX2NvdW50ZXIiLCJ1aW50NjQiLCJOdW1iZXIiLCJiYXNlUXVlcnlBZ2dyZWdhdGVQcmV2b3RlUmVxdWVzdCIsImJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVSZXNwb25zZSIsImFnZ3JlZ2F0ZV9wcmV2b3RlIiwiQWdncmVnYXRlRXhjaGFuZ2VSYXRlUHJldm90ZSIsImJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVxdWVzdCIsImJhc2VRdWVyeUFnZ3JlZ2F0ZVByZXZvdGVzUmVzcG9uc2UiLCJhZ2dyZWdhdGVfcHJldm90ZXMiLCJiYXNlUXVlcnlBZ2dyZWdhdGVWb3RlUmVxdWVzdCIsImJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVSZXNwb25zZSIsImFnZ3JlZ2F0ZV92b3RlIiwiQWdncmVnYXRlRXhjaGFuZ2VSYXRlVm90ZSIsImJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVxdWVzdCIsImJhc2VRdWVyeUFnZ3JlZ2F0ZVZvdGVzUmVzcG9uc2UiLCJhZ2dyZWdhdGVfdm90ZXMiLCJiYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IiwiYmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UiLCJwYXJhbXMiLCJQYXJhbXMiLCJFeGNoYW5nZVJhdGUiLCJyZXF1ZXN0IiwiZGF0YSIsImZpbmlzaCIsInByb21pc2UiLCJycGMiLCJ0aGVuIiwiRXhjaGFuZ2VSYXRlcyIsIkFjdGl2ZXMiLCJGZWVkZXJEZWxlZ2F0aW9uIiwiTWlzc0NvdW50ZXIiLCJBZ2dyZWdhdGVQcmV2b3RlIiwiQWdncmVnYXRlUHJldm90ZXMiLCJBZ2dyZWdhdGVWb3RlIiwiQWdncmVnYXRlVm90ZXMiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQWtiTEEsbUJBQW1CO2VBQW5CQTs7SUE2Q0FDLG9CQUFvQjtlQUFwQkE7O0lBbWVBQyw0QkFBNEI7ZUFBNUJBOztJQXVFQUMsNkJBQTZCO2VBQTdCQTs7SUF5RkFDLDZCQUE2QjtlQUE3QkE7O0lBcURBQyw4QkFBOEI7ZUFBOUJBOztJQThGQUMseUJBQXlCO2VBQXpCQTs7SUF1RUFDLDBCQUEwQjtlQUExQkE7O0lBbUZBQywwQkFBMEI7ZUFBMUJBOztJQXFEQUMsMkJBQTJCO2VBQTNCQTs7SUF5T0FDLGVBQWU7ZUFBZkE7O0lBNWdEQUMsd0JBQXdCO2VBQXhCQTs7SUFzRUFDLHlCQUF5QjtlQUF6QkE7O0lBdUVBQyx5QkFBeUI7ZUFBekJBOztJQXFEQUMsMEJBQTBCO2VBQTFCQTs7SUFtVUFDLDRCQUE0QjtlQUE1QkE7O0lBdUVBQyw2QkFBNkI7ZUFBN0JBOztJQXVFQUMsdUJBQXVCO2VB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
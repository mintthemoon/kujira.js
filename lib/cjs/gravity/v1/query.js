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
    QueryAttestationsRequest: function() {
        return QueryAttestationsRequest;
    },
    QueryAttestationsResponse: function() {
        return QueryAttestationsResponse;
    },
    QueryBatchConfirmsRequest: function() {
        return QueryBatchConfirmsRequest;
    },
    QueryBatchConfirmsResponse: function() {
        return QueryBatchConfirmsResponse;
    },
    QueryBatchFeeRequest: function() {
        return QueryBatchFeeRequest;
    },
    QueryBatchFeeResponse: function() {
        return QueryBatchFeeResponse;
    },
    QueryBatchRequestByNonceRequest: function() {
        return QueryBatchRequestByNonceRequest;
    },
    QueryBatchRequestByNonceResponse: function() {
        return QueryBatchRequestByNonceResponse;
    },
    QueryClientImpl: function() {
        return QueryClientImpl;
    },
    QueryCurrentValsetRequest: function() {
        return QueryCurrentValsetRequest;
    },
    QueryCurrentValsetResponse: function() {
        return QueryCurrentValsetResponse;
    },
    QueryDelegateKeysByEthAddress: function() {
        return QueryDelegateKeysByEthAddress;
    },
    QueryDelegateKeysByEthAddressResponse: function() {
        return QueryDelegateKeysByEthAddressResponse;
    },
    QueryDelegateKeysByOrchestratorAddress: function() {
        return QueryDelegateKeysByOrchestratorAddress;
    },
    QueryDelegateKeysByOrchestratorAddressResponse: function() {
        return QueryDelegateKeysByOrchestratorAddressResponse;
    },
    QueryDelegateKeysByValidatorAddress: function() {
        return QueryDelegateKeysByValidatorAddress;
    },
    QueryDelegateKeysByValidatorAddressResponse: function() {
        return QueryDelegateKeysByValidatorAddressResponse;
    },
    QueryDenomToERC20Request: function() {
        return QueryDenomToERC20Request;
    },
    QueryDenomToERC20Response: function() {
        return QueryDenomToERC20Response;
    },
    QueryERC20ToDenomRequest: function() {
        return QueryERC20ToDenomRequest;
    },
    QueryERC20ToDenomResponse: function() {
        return QueryERC20ToDenomResponse;
    },
    QueryLastEventNonceByAddrRequest: function() {
        return QueryLastEventNonceByAddrRequest;
    },
    QueryLastEventNonceByAddrResponse: function() {
        return QueryLastEventNonceByAddrResponse;
    },
    QueryLastObservedEthBlockRequest: function() {
        return QueryLastObservedEthBlockRequest;
    },
    QueryLastObservedEthBlockResponse: function() {
        return QueryLastObservedEthBlockResponse;
    },
    QueryLastObservedEthNonceRequest: function() {
        return QueryLastObservedEthNonceRequest;
    },
    QueryLastObservedEthNonceResponse: function() {
        return QueryLastObservedEthNonceResponse;
    },
    QueryLastPendingBatchRequestByAddrRequest: function() {
        return QueryLastPendingBatchRequestByAddrRequest;
    },
    QueryLastPendingBatchRequestByAddrResponse: function() {
        return QueryLastPendingBatchRequestByAddrResponse;
    },
    QueryLastPendingLogicCallByAddrRequest: function() {
        return QueryLastPendingLogicCallByAddrRequest;
    },
    QueryLastPendingLogicCallByAddrResponse: function() {
        return QueryLastPendingLogicCallByAddrResponse;
    },
    QueryLastPendingValsetRequestByAddrRequest: function() {
        return QueryLastPendingValsetRequestByAddrRequest;
    },
    QueryLastPendingValsetRequestByAddrResponse: function() {
        return QueryLastPendingValsetRequestByAddrResponse;
    },
    QueryLastValsetRequestsRequest: function() {
        return QueryLastValsetRequestsRequest;
    },
    QueryLastValsetRequestsResponse: function() {
        return QueryLastValsetRequestsResponse;
    },
    QueryLogicConfirmsRequest: function() {
        return QueryLogicConfirmsRequest;
    },
    QueryLogicConfirmsResponse: function() {
        return QueryLogicConfirmsResponse;
    },
    QueryOutgoingLogicCallsRequest: function() {
        return QueryOutgoingLogicCallsRequest;
    },
    QueryOutgoingLogicCallsResponse: function() {
        return QueryOutgoingLogicCallsResponse;
    },
    QueryOutgoingTxBatchesRequest: function() {
        return QueryOutgoingTxBatchesRequest;
    },
    QueryOutgoingTxBatchesResponse: function() {
        return QueryOutgoingTxBatchesResponse;
    },
    QueryParamsRequest: function() {
        return QueryParamsRequest;
    },
    QueryParamsResponse: function() {
        return QueryParamsResponse;
    },
    QueryPendingIbcAutoForwards: function() {
        return QueryPendingIbcAutoForwards;
    },
    QueryPendingIbcAutoForwardsResponse: function() {
        return QueryPendingIbcAutoForwardsResponse;
    },
    QueryPendingSendToEth: function() {
        return QueryPendingSendToEth;
    },
    QueryPendingSendToEthResponse: function() {
        return QueryPendingSendToEthResponse;
    },
    QueryValsetConfirmRequest: function() {
        return QueryValsetConfirmRequest;
    },
    QueryValsetConfirmResponse: function() {
        return QueryValsetConfirmResponse;
    },
    QueryValsetConfirmsByNonceRequest: function() {
        return QueryValsetConfirmsByNonceRequest;
    },
    QueryValsetConfirmsByNonceResponse: function() {
        return QueryValsetConfirmsByNonceResponse;
    },
    QueryValsetRequestRequest: function() {
        return QueryValsetRequestRequest;
    },
    QueryValsetRequestResponse: function() {
        return QueryValsetRequestResponse;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _attestation = require("./attestation");
const _batch = require("./batch");
const _genesis = require("./genesis");
const _helpers = require("./helpers");
const _msgs = require("./msgs");
const _pool = require("./pool");
const _types = require("./types");
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
const protobufPackage = "gravity.v1";
function createBaseQueryParamsRequest() {
    return {};
}
const QueryParamsRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
const QueryParamsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.params !== undefined) {
            _genesis.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.params = _genesis.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            params: (0, _helpers.isSet)(object.params) ? _genesis.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? _genesis.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? _genesis.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
const QueryCurrentValsetRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetRequest();
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
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = createBaseQueryCurrentValsetRequest();
        return message;
    }
};
function createBaseQueryCurrentValsetResponse() {
    return {
        valset: undefined
    };
}
const QueryCurrentValsetResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.valset !== undefined) {
            _types.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valset = _types.Valset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            valset: (0, _helpers.isSet)(object.valset) ? _types.Valset.fromJSON(object.valset) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? _types.Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? _types.Valset.fromPartial(object.valset) : undefined;
        return message;
    }
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: BigInt(0)
    };
}
const QueryValsetRequestRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            nonce: (0, _helpers.isSet)(object.nonce) ? BigInt(object.nonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryValsetRequestRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        return message;
    }
};
function createBaseQueryValsetRequestResponse() {
    return {
        valset: undefined
    };
}
const QueryValsetRequestResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.valset !== undefined) {
            _types.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valset = _types.Valset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            valset: (0, _helpers.isSet)(object.valset) ? _types.Valset.fromJSON(object.valset) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? _types.Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? _types.Valset.fromPartial(object.valset) : undefined;
        return message;
    }
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: BigInt(0),
        address: ""
    };
}
const QueryValsetConfirmRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            nonce: (0, _helpers.isSet)(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryValsetConfirmRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseQueryValsetConfirmResponse() {
    return {
        confirm: undefined
    };
}
const QueryValsetConfirmResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.confirm !== undefined) {
            _msgs.MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirm = _msgs.MsgValsetConfirm.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            confirm: (0, _helpers.isSet)(object.confirm) ? _msgs.MsgValsetConfirm.fromJSON(object.confirm) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.confirm !== undefined && (obj.confirm = message.confirm ? _msgs.MsgValsetConfirm.toJSON(message.confirm) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm = object.confirm !== undefined && object.confirm !== null ? _msgs.MsgValsetConfirm.fromPartial(object.confirm) : undefined;
        return message;
    }
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: BigInt(0)
    };
}
const QueryValsetConfirmsByNonceRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            nonce: (0, _helpers.isSet)(object.nonce) ? BigInt(object.nonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        return message;
    }
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return {
        confirms: []
    };
}
const QueryValsetConfirmsByNonceResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.confirms){
            _msgs.MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirms.push(_msgs.MsgValsetConfirm.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e)=>_msgs.MsgValsetConfirm.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e)=>e ? _msgs.MsgValsetConfirm.toJSON(e) : undefined);
        } else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_confirms;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = ((_object_confirms = object.confirms) === null || _object_confirms === void 0 ? void 0 : _object_confirms.map((e)=>_msgs.MsgValsetConfirm.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
const QueryLastValsetRequestsRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsRequest();
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
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = createBaseQueryLastValsetRequestsRequest();
        return message;
    }
};
function createBaseQueryLastValsetRequestsResponse() {
    return {
        valsets: []
    };
}
const QueryLastValsetRequestsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.valsets){
            _types.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valsets.push(_types.Valset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e)=>_types.Valset.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e)=>e ? _types.Valset.toJSON(e) : undefined);
        } else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_valsets;
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = ((_object_valsets = object.valsets) === null || _object_valsets === void 0 ? void 0 : _object_valsets.map((e)=>_types.Valset.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: ""
    };
}
const QueryLastPendingValsetRequestByAddrRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse() {
    return {
        valsets: []
    };
}
const QueryLastPendingValsetRequestByAddrResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.valsets){
            _types.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valsets.push(_types.Valset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e)=>_types.Valset.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e)=>e ? _types.Valset.toJSON(e) : undefined);
        } else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_valsets;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = ((_object_valsets = object.valsets) === null || _object_valsets === void 0 ? void 0 : _object_valsets.map((e)=>_types.Valset.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
const QueryBatchFeeRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeRequest();
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
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = createBaseQueryBatchFeeRequest();
        return message;
    }
};
function createBaseQueryBatchFeeResponse() {
    return {
        batchFees: []
    };
}
const QueryBatchFeeResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.batchFees){
            _pool.BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batchFees.push(_pool.BatchFees.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            batchFees: Array.isArray(object === null || object === void 0 ? void 0 : object.batchFees) ? object.batchFees.map((e)=>_pool.BatchFees.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map((e)=>e ? _pool.BatchFees.toJSON(e) : undefined);
        } else {
            obj.batchFees = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_batchFees;
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = ((_object_batchFees = object.batchFees) === null || _object_batchFees === void 0 ? void 0 : _object_batchFees.map((e)=>_pool.BatchFees.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: ""
    };
}
const QueryLastPendingBatchRequestByAddrRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse() {
    return {
        batch: []
    };
}
const QueryLastPendingBatchRequestByAddrResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.batch){
            _batch.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batch.push(_batch.OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            batch: Array.isArray(object === null || object === void 0 ? void 0 : object.batch) ? object.batch.map((e)=>_batch.OutgoingTxBatch.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.batch) {
            obj.batch = message.batch.map((e)=>e ? _batch.OutgoingTxBatch.toJSON(e) : undefined);
        } else {
            obj.batch = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_batch;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        message.batch = ((_object_batch = object.batch) === null || _object_batch === void 0 ? void 0 : _object_batch.map((e)=>_batch.OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastPendingLogicCallByAddrRequest() {
    return {
        address: ""
    };
}
const QueryLastPendingLogicCallByAddrRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastPendingLogicCallByAddrRequest();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseQueryLastPendingLogicCallByAddrResponse() {
    return {
        call: []
    };
}
const QueryLastPendingLogicCallByAddrResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.call){
            _batch.OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.call.push(_batch.OutgoingLogicCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            call: Array.isArray(object === null || object === void 0 ? void 0 : object.call) ? object.call.map((e)=>_batch.OutgoingLogicCall.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.call) {
            obj.call = message.call.map((e)=>e ? _batch.OutgoingLogicCall.toJSON(e) : undefined);
        } else {
            obj.call = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_call;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        message.call = ((_object_call = object.call) === null || _object_call === void 0 ? void 0 : _object_call.map((e)=>_batch.OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
const QueryOutgoingTxBatchesRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesRequest();
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
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = createBaseQueryOutgoingTxBatchesRequest();
        return message;
    }
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return {
        batches: []
    };
}
const QueryOutgoingTxBatchesResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.batches){
            _batch.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batches.push(_batch.OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            batches: Array.isArray(object === null || object === void 0 ? void 0 : object.batches) ? object.batches.map((e)=>_batch.OutgoingTxBatch.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map((e)=>e ? _batch.OutgoingTxBatch.toJSON(e) : undefined);
        } else {
            obj.batches = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_batches;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = ((_object_batches = object.batches) === null || _object_batches === void 0 ? void 0 : _object_batches.map((e)=>_batch.OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryOutgoingLogicCallsRequest() {
    return {};
}
const QueryOutgoingLogicCallsRequest = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsRequest();
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
        return {};
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = createBaseQueryOutgoingLogicCallsRequest();
        return message;
    }
};
function createBaseQueryOutgoingLogicCallsResponse() {
    return {
        calls: []
    };
}
const QueryOutgoingLogicCallsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.calls){
            _batch.OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.calls.push(_batch.OutgoingLogicCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            calls: Array.isArray(object === null || object === void 0 ? void 0 : object.calls) ? object.calls.map((e)=>_batch.OutgoingLogicCall.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.calls) {
            obj.calls = message.calls.map((e)=>e ? _batch.OutgoingLogicCall.toJSON(e) : undefined);
        } else {
            obj.calls = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_calls;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        message.calls = ((_object_calls = object.calls) === null || _object_calls === void 0 ? void 0 : _object_calls.map((e)=>_batch.OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
const QueryBatchRequestByNonceRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            nonce: (0, _helpers.isSet)(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            contractAddress: (0, _helpers.isSet)(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryBatchRequestByNonceRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        var _object_contractAddress;
        message.contractAddress = (_object_contractAddress = object.contractAddress) !== null && _object_contractAddress !== void 0 ? _object_contractAddress : "";
        return message;
    }
};
function createBaseQueryBatchRequestByNonceResponse() {
    return {
        batch: undefined
    };
}
const QueryBatchRequestByNonceResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.batch !== undefined) {
            _batch.OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batch = _batch.OutgoingTxBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            batch: (0, _helpers.isSet)(object.batch) ? _batch.OutgoingTxBatch.fromJSON(object.batch) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.batch !== undefined && (obj.batch = message.batch ? _batch.OutgoingTxBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch = object.batch !== undefined && object.batch !== null ? _batch.OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    }
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
const QueryBatchConfirmsRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            nonce: (0, _helpers.isSet)(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            contractAddress: (0, _helpers.isSet)(object.contractAddress) ? String(object.contractAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryBatchConfirmsRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        var _object_contractAddress;
        message.contractAddress = (_object_contractAddress = object.contractAddress) !== null && _object_contractAddress !== void 0 ? _object_contractAddress : "";
        return message;
    }
};
function createBaseQueryBatchConfirmsResponse() {
    return {
        confirms: []
    };
}
const QueryBatchConfirmsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.confirms){
            _msgs.MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirms.push(_msgs.MsgConfirmBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e)=>_msgs.MsgConfirmBatch.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e)=>e ? _msgs.MsgConfirmBatch.toJSON(e) : undefined);
        } else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_confirms;
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = ((_object_confirms = object.confirms) === null || _object_confirms === void 0 ? void 0 : _object_confirms.map((e)=>_msgs.MsgConfirmBatch.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLogicConfirmsRequest() {
    return {
        invalidationId: new Uint8Array(),
        invalidationNonce: BigInt(0)
    };
}
const QueryLogicConfirmsRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.invalidationId.length !== 0) {
            writer.uint32(10).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.invalidationId = reader.bytes();
                    break;
                case 2:
                    message.invalidationNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            invalidationId: (0, _helpers.isSet)(object.invalidationId) ? (0, _helpers.bytesFromBase64)(object.invalidationId) : new Uint8Array(),
            invalidationNonce: (0, _helpers.isSet)(object.invalidationNonce) ? BigInt(object.invalidationNonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.invalidationId !== undefined && (obj.invalidationId = (0, _helpers.base64FromBytes)(message.invalidationId !== undefined ? message.invalidationId : new Uint8Array()));
        message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLogicConfirmsRequest();
        var _object_invalidationId;
        message.invalidationId = (_object_invalidationId = object.invalidationId) !== null && _object_invalidationId !== void 0 ? _object_invalidationId : new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce) : BigInt(0);
        return message;
    }
};
function createBaseQueryLogicConfirmsResponse() {
    return {
        confirms: []
    };
}
const QueryLogicConfirmsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.confirms){
            _msgs.MsgConfirmLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirms.push(_msgs.MsgConfirmLogicCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e)=>_msgs.MsgConfirmLogicCall.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e)=>e ? _msgs.MsgConfirmLogicCall.toJSON(e) : undefined);
        } else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_confirms;
        const message = createBaseQueryLogicConfirmsResponse();
        message.confirms = ((_object_confirms = object.confirms) === null || _object_confirms === void 0 ? void 0 : _object_confirms.map((e)=>_msgs.MsgConfirmLogicCall.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastEventNonceByAddrRequest() {
    return {
        address: ""
    };
}
const QueryLastEventNonceByAddrRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventNonceByAddrRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastEventNonceByAddrRequest();
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseQueryLastEventNonceByAddrResponse() {
    return {
        eventNonce: BigInt(0)
    };
}
const QueryLastEventNonceByAddrResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventNonceByAddrResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            eventNonce: (0, _helpers.isSet)(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastEventNonceByAddrResponse();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce) : BigInt(0);
        return message;
    }
};
function createBaseQueryERC20ToDenomRequest() {
    return {
        erc20: ""
    };
}
const QueryERC20ToDenomRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.erc20 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            erc20: (0, _helpers.isSet)(object.erc20) ? String(object.erc20) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryERC20ToDenomRequest();
        var _object_erc20;
        message.erc20 = (_object_erc20 = object.erc20) !== null && _object_erc20 !== void 0 ? _object_erc20 : "";
        return message;
    }
};
function createBaseQueryERC20ToDenomResponse() {
    return {
        denom: "",
        cosmosOriginated: false
    };
}
const QueryERC20ToDenomResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : "",
            cosmosOriginated: (0, _helpers.isSet)(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
        };
    },
    toJSON (message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryERC20ToDenomResponse();
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        var _object_cosmosOriginated;
        message.cosmosOriginated = (_object_cosmosOriginated = object.cosmosOriginated) !== null && _object_cosmosOriginated !== void 0 ? _object_cosmosOriginated : false;
        return message;
    }
};
function createBaseQueryDenomToERC20Request() {
    return {
        denom: ""
    };
}
const QueryDenomToERC20Request = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Request();
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
        return {
            denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDenomToERC20Request();
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        return message;
    }
};
function createBaseQueryDenomToERC20Response() {
    return {
        erc20: "",
        cosmosOriginated: false
    };
}
const QueryDenomToERC20Response = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Response();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            erc20: (0, _helpers.isSet)(object.erc20) ? String(object.erc20) : "",
            cosmosOriginated: (0, _helpers.isSet)(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
        };
    },
    toJSON (message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDenomToERC20Response();
        var _object_erc20;
        message.erc20 = (_object_erc20 = object.erc20) !== null && _object_erc20 !== void 0 ? _object_erc20 : "";
        var _object_cosmosOriginated;
        message.cosmosOriginated = (_object_cosmosOriginated = object.cosmosOriginated) !== null && _object_cosmosOriginated !== void 0 ? _object_cosmosOriginated : false;
        return message;
    }
};
function createBaseQueryLastObservedEthBlockRequest() {
    return {
        useV1Key: false
    };
}
const QueryLastObservedEthBlockRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthBlockRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.useV1Key = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            useV1Key: (0, _helpers.isSet)(object.useV1Key) ? Boolean(object.useV1Key) : false
        };
    },
    toJSON (message) {
        const obj = {};
        message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastObservedEthBlockRequest();
        var _object_useV1Key;
        message.useV1Key = (_object_useV1Key = object.useV1Key) !== null && _object_useV1Key !== void 0 ? _object_useV1Key : false;
        return message;
    }
};
function createBaseQueryLastObservedEthBlockResponse() {
    return {
        block: BigInt(0)
    };
}
const QueryLastObservedEthBlockResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.block !== BigInt(0)) {
            writer.uint32(8).uint64(message.block);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthBlockResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.block = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            block: (0, _helpers.isSet)(object.block) ? BigInt(object.block) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastObservedEthBlockResponse();
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block) : BigInt(0);
        return message;
    }
};
function createBaseQueryLastObservedEthNonceRequest() {
    return {
        useV1Key: false
    };
}
const QueryLastObservedEthNonceRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthNonceRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.useV1Key = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            useV1Key: (0, _helpers.isSet)(object.useV1Key) ? Boolean(object.useV1Key) : false
        };
    },
    toJSON (message) {
        const obj = {};
        message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastObservedEthNonceRequest();
        var _object_useV1Key;
        message.useV1Key = (_object_useV1Key = object.useV1Key) !== null && _object_useV1Key !== void 0 ? _object_useV1Key : false;
        return message;
    }
};
function createBaseQueryLastObservedEthNonceResponse() {
    return {
        nonce: BigInt(0)
    };
}
const QueryLastObservedEthNonceResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastObservedEthNonceResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            nonce: (0, _helpers.isSet)(object.nonce) ? BigInt(object.nonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryLastObservedEthNonceResponse();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        return message;
    }
};
function createBaseQueryAttestationsRequest() {
    return {
        limit: BigInt(0),
        orderBy: "",
        claimType: "",
        nonce: BigInt(0),
        height: BigInt(0),
        useV1Key: false
    };
}
const QueryAttestationsRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.limit !== BigInt(0)) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.orderBy !== "") {
            writer.uint32(18).string(message.orderBy);
        }
        if (message.claimType !== "") {
            writer.uint32(26).string(message.claimType);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.nonce);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).uint64(message.height);
        }
        if (message.useV1Key === true) {
            writer.uint32(48).bool(message.useV1Key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.limit = reader.uint64();
                    break;
                case 2:
                    message.orderBy = reader.string();
                    break;
                case 3:
                    message.claimType = reader.string();
                    break;
                case 4:
                    message.nonce = reader.uint64();
                    break;
                case 5:
                    message.height = reader.uint64();
                    break;
                case 6:
                    message.useV1Key = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            limit: (0, _helpers.isSet)(object.limit) ? BigInt(object.limit) : BigInt(0),
            orderBy: (0, _helpers.isSet)(object.orderBy) ? String(object.orderBy) : "",
            claimType: (0, _helpers.isSet)(object.claimType) ? String(object.claimType) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            height: (0, _helpers.isSet)(object.height) ? BigInt(object.height) : BigInt(0),
            useV1Key: (0, _helpers.isSet)(object.useV1Key) ? Boolean(object.useV1Key) : false
        };
    },
    toJSON (message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        message.orderBy !== undefined && (obj.orderBy = message.orderBy);
        message.claimType !== undefined && (obj.claimType = message.claimType);
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryAttestationsRequest();
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit) : BigInt(0);
        var _object_orderBy;
        message.orderBy = (_object_orderBy = object.orderBy) !== null && _object_orderBy !== void 0 ? _object_orderBy : "";
        var _object_claimType;
        message.claimType = (_object_claimType = object.claimType) !== null && _object_claimType !== void 0 ? _object_claimType : "";
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height) : BigInt(0);
        var _object_useV1Key;
        message.useV1Key = (_object_useV1Key = object.useV1Key) !== null && _object_useV1Key !== void 0 ? _object_useV1Key : false;
        return message;
    }
};
function createBaseQueryAttestationsResponse() {
    return {
        attestations: []
    };
}
const QueryAttestationsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.attestations){
            _attestation.Attestation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.attestations.push(_attestation.Attestation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            attestations: Array.isArray(object === null || object === void 0 ? void 0 : object.attestations) ? object.attestations.map((e)=>_attestation.Attestation.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map((e)=>e ? _attestation.Attestation.toJSON(e) : undefined);
        } else {
            obj.attestations = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_attestations;
        const message = createBaseQueryAttestationsResponse();
        message.attestations = ((_object_attestations = object.attestations) === null || _object_attestations === void 0 ? void 0 : _object_attestations.map((e)=>_attestation.Attestation.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: ""
    };
}
const QueryDelegateKeysByValidatorAddress = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        return message;
    }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse() {
    return {
        ethAddress: "",
        orchestratorAddress: ""
    };
}
const QueryDelegateKeysByValidatorAddressResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.ethAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            ethAddress: (0, _helpers.isSet)(object.ethAddress) ? String(object.ethAddress) : "",
            orchestratorAddress: (0, _helpers.isSet)(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        var _object_ethAddress;
        message.ethAddress = (_object_ethAddress = object.ethAddress) !== null && _object_ethAddress !== void 0 ? _object_ethAddress : "";
        var _object_orchestratorAddress;
        message.orchestratorAddress = (_object_orchestratorAddress = object.orchestratorAddress) !== null && _object_orchestratorAddress !== void 0 ? _object_orchestratorAddress : "";
        return message;
    }
};
function createBaseQueryDelegateKeysByEthAddress() {
    return {
        ethAddress: ""
    };
}
const QueryDelegateKeysByEthAddress = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddress();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            ethAddress: (0, _helpers.isSet)(object.ethAddress) ? String(object.ethAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDelegateKeysByEthAddress();
        var _object_ethAddress;
        message.ethAddress = (_object_ethAddress = object.ethAddress) !== null && _object_ethAddress !== void 0 ? _object_ethAddress : "";
        return message;
    }
};
function createBaseQueryDelegateKeysByEthAddressResponse() {
    return {
        validatorAddress: "",
        orchestratorAddress: ""
    };
}
const QueryDelegateKeysByEthAddressResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            orchestratorAddress: (0, _helpers.isSet)(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        var _object_orchestratorAddress;
        message.orchestratorAddress = (_object_orchestratorAddress = object.orchestratorAddress) !== null && _object_orchestratorAddress !== void 0 ? _object_orchestratorAddress : "";
        return message;
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddress() {
    return {
        orchestratorAddress: ""
    };
}
const QueryDelegateKeysByOrchestratorAddress = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            orchestratorAddress: (0, _helpers.isSet)(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        var _object_orchestratorAddress;
        message.orchestratorAddress = (_object_orchestratorAddress = object.orchestratorAddress) !== null && _object_orchestratorAddress !== void 0 ? _object_orchestratorAddress : "";
        return message;
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse() {
    return {
        validatorAddress: "",
        ethAddress: ""
    };
}
const QueryDelegateKeysByOrchestratorAddressResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            validatorAddress: (0, _helpers.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            ethAddress: (0, _helpers.isSet)(object.ethAddress) ? String(object.ethAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        var _object_validatorAddress;
        message.validatorAddress = (_object_validatorAddress = object.validatorAddress) !== null && _object_validatorAddress !== void 0 ? _object_validatorAddress : "";
        var _object_ethAddress;
        message.ethAddress = (_object_ethAddress = object.ethAddress) !== null && _object_ethAddress !== void 0 ? _object_ethAddress : "";
        return message;
    }
};
function createBaseQueryPendingSendToEth() {
    return {
        senderAddress: ""
    };
}
const QueryPendingSendToEth = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEth();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.senderAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            senderAddress: (0, _helpers.isSet)(object.senderAddress) ? String(object.senderAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryPendingSendToEth();
        var _object_senderAddress;
        message.senderAddress = (_object_senderAddress = object.senderAddress) !== null && _object_senderAddress !== void 0 ? _object_senderAddress : "";
        return message;
    }
};
function createBaseQueryPendingSendToEthResponse() {
    return {
        transfersInBatches: [],
        unbatchedTransfers: []
    };
}
const QueryPendingSendToEthResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.transfersInBatches){
            _batch.OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers){
            _batch.OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.transfersInBatches.push(_batch.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(_batch.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            transfersInBatches: Array.isArray(object === null || object === void 0 ? void 0 : object.transfersInBatches) ? object.transfersInBatches.map((e)=>_batch.OutgoingTransferTx.fromJSON(e)) : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers) ? object.unbatchedTransfers.map((e)=>_batch.OutgoingTransferTx.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfersInBatches = message.transfersInBatches.map((e)=>e ? _batch.OutgoingTransferTx.toJSON(e) : undefined);
        } else {
            obj.transfersInBatches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e)=>e ? _batch.OutgoingTransferTx.toJSON(e) : undefined);
        } else {
            obj.unbatchedTransfers = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_transfersInBatches, _object_unbatchedTransfers;
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = ((_object_transfersInBatches = object.transfersInBatches) === null || _object_transfersInBatches === void 0 ? void 0 : _object_transfersInBatches.map((e)=>_batch.OutgoingTransferTx.fromPartial(e))) || [];
        message.unbatchedTransfers = ((_object_unbatchedTransfers = object.unbatchedTransfers) === null || _object_unbatchedTransfers === void 0 ? void 0 : _object_unbatchedTransfers.map((e)=>_batch.OutgoingTransferTx.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryPendingIbcAutoForwards() {
    return {
        limit: BigInt(0)
    };
}
const QueryPendingIbcAutoForwards = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.limit !== BigInt(0)) {
            writer.uint32(8).uint64(message.limit);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingIbcAutoForwards();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.limit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            limit: (0, _helpers.isSet)(object.limit) ? BigInt(object.limit) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryPendingIbcAutoForwards();
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit) : BigInt(0);
        return message;
    }
};
function createBaseQueryPendingIbcAutoForwardsResponse() {
    return {
        pendingIbcAutoForwards: []
    };
}
const QueryPendingIbcAutoForwardsResponse = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.pendingIbcAutoForwards){
            _types.PendingIbcAutoForward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingIbcAutoForwardsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pendingIbcAutoForwards.push(_types.PendingIbcAutoForward.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        return {
            pendingIbcAutoForwards: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingIbcAutoForwards) ? object.pendingIbcAutoForwards.map((e)=>_types.PendingIbcAutoForward.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.pendingIbcAutoForwards) {
            obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map((e)=>e ? _types.PendingIbcAutoForward.toJSON(e) : undefined);
        } else {
            obj.pendingIbcAutoForwards = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_pendingIbcAutoForwards;
        const message = createBaseQueryPendingIbcAutoForwardsResponse();
        message.pendingIbcAutoForwards = ((_object_pendingIbcAutoForwards = object.pendingIbcAutoForwards) === null || _object_pendingIbcAutoForwards === void 0 ? void 0 : _object_pendingIbcAutoForwards.map((e)=>_types.PendingIbcAutoForward.fromPartial(e))) || [];
        return message;
    }
};
class QueryClientImpl {
    Params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Params", data);
        return promise.then((data)=>QueryParamsResponse.decode(new _binary.BinaryReader(data)));
    }
    CurrentValset(request = {}) {
        const data = QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
        return promise.then((data)=>QueryCurrentValsetResponse.decode(new _binary.BinaryReader(data)));
    }
    ValsetRequest(request) {
        const data = QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
        return promise.then((data)=>QueryValsetRequestResponse.decode(new _binary.BinaryReader(data)));
    }
    ValsetConfirm(request) {
        const data = QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
        return promise.then((data)=>QueryValsetConfirmResponse.decode(new _binary.BinaryReader(data)));
    }
    ValsetConfirmsByNonce(request) {
        const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then((data)=>QueryValsetConfirmsByNonceResponse.decode(new _binary.BinaryReader(data)));
    }
    LastValsetRequests(request = {}) {
        const data = QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastValsetRequests", data);
        return promise.then((data)=>QueryLastValsetRequestsResponse.decode(new _binary.BinaryReader(data)));
    }
    LastPendingValsetRequestByAddr(request) {
        const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then((data)=>QueryLastPendingValsetRequestByAddrResponse.decode(new _binary.BinaryReader(data)));
    }
    LastPendingBatchRequestByAddr(request) {
        const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then((data)=>QueryLastPendingBatchRequestByAddrResponse.decode(new _binary.BinaryReader(data)));
    }
    LastPendingLogicCallByAddr(request) {
        const data = QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingLogicCallByAddr", data);
        return promise.then((data)=>QueryLastPendingLogicCallByAddrResponse.decode(new _binary.BinaryReader(data)));
    }
    LastEventNonceByAddr(request) {
        const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastEventNonceByAddr", data);
        return promise.then((data)=>QueryLastEventNonceByAddrResponse.decode(new _binary.BinaryReader(data)));
    }
    BatchFees(request = {}) {
        const data = QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
        return promise.then((data)=>QueryBatchFeeResponse.decode(new _binary.BinaryReader(data)));
    }
    OutgoingTxBatches(request = {}) {
        const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingTxBatches", data);
        return promise.then((data)=>QueryOutgoingTxBatchesResponse.decode(new _binary.BinaryReader(data)));
    }
    OutgoingLogicCalls(request = {}) {
        const data = QueryOutgoingLogicCallsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingLogicCalls", data);
        return promise.then((data)=>QueryOutgoingLogicCallsResponse.decode(new _binary.BinaryReader(data)));
    }
    BatchRequestByNonce(request) {
        const data = QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchRequestByNonce", data);
        return promise.then((data)=>QueryBatchRequestByNonceResponse.decode(new _binary.BinaryReader(data)));
    }
    BatchConfirms(request) {
        const data = QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
        return promise.then((data)=>QueryBatchConfirmsResponse.decode(new _binary.BinaryReader(data)));
    }
    LogicConfirms(request) {
        const data = QueryLogicConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
        return promise.then((data)=>QueryLogicConfirmsResponse.decode(new _binary.BinaryReader(data)));
    }
    ERC20ToDenom(request) {
        const data = QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ERC20ToDenom", data);
        return promise.then((data)=>QueryERC20ToDenomResponse.decode(new _binary.BinaryReader(data)));
    }
    DenomToERC20(request) {
        const data = QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "DenomToERC20", data);
        return promise.then((data)=>QueryDenomToERC20Response.decode(new _binary.BinaryReader(data)));
    }
    GetLastObservedEthBlock(request) {
        const data = QueryLastObservedEthBlockRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthBlock", data);
        return promise.then((data)=>QueryLastObservedEthBlockResponse.decode(new _binary.BinaryReader(data)));
    }
    GetLastObservedEthNonce(request) {
        const data = QueryLastObservedEthNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthNonce", data);
        return promise.then((data)=>QueryLastObservedEthNonceResponse.decode(new _binary.BinaryReader(data)));
    }
    GetAttestations(request) {
        const data = QueryAttestationsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetAttestations", data);
        return promise.then((data)=>QueryAttestationsResponse.decode(new _binary.BinaryReader(data)));
    }
    GetDelegateKeyByValidator(request) {
        const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then((data)=>QueryDelegateKeysByValidatorAddressResponse.decode(new _binary.BinaryReader(data)));
    }
    GetDelegateKeyByEth(request) {
        const data = QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then((data)=>QueryDelegateKeysByEthAddressResponse.decode(new _binary.BinaryReader(data)));
    }
    GetDelegateKeyByOrchestrator(request) {
        const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then((data)=>QueryDelegateKeysByOrchestratorAddressResponse.decode(new _binary.BinaryReader(data)));
    }
    GetPendingSendToEth(request) {
        const data = QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingSendToEth", data);
        return promise.then((data)=>QueryPendingSendToEthResponse.decode(new _binary.BinaryReader(data)));
    }
    GetPendingIbcAutoForwards(request) {
        const data = QueryPendingIbcAutoForwards.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingIbcAutoForwards", data);
        return promise.then((data)=>QueryPendingIbcAutoForwardsResponse.decode(new _binary.BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.CurrentValset = this.CurrentValset.bind(this);
        this.ValsetRequest = this.ValsetRequest.bind(this);
        this.ValsetConfirm = this.ValsetConfirm.bind(this);
        this.ValsetConfirmsByNonce = this.ValsetConfirmsByNonce.bind(this);
        this.LastValsetRequests = this.LastValsetRequests.bind(this);
        this.LastPendingValsetRequestByAddr = this.LastPendingValsetRequestByAddr.bind(this);
        this.LastPendingBatchRequestByAddr = this.LastPendingBatchRequestByAddr.bind(this);
        this.LastPendingLogicCallByAddr = this.LastPendingLogicCallByAddr.bind(this);
        this.LastEventNonceByAddr = this.LastEventNonceByAddr.bind(this);
        this.BatchFees = this.BatchFees.bind(this);
        this.OutgoingTxBatches = this.OutgoingTxBatches.bind(this);
        this.OutgoingLogicCalls = this.OutgoingLogicCalls.bind(this);
        this.BatchRequestByNonce = this.BatchRequestByNonce.bind(this);
        this.BatchConfirms = this.BatchConfirms.bind(this);
        this.LogicConfirms = this.LogicConfirms.bind(this);
        this.ERC20ToDenom = this.ERC20ToDenom.bind(this);
        this.DenomToERC20 = this.DenomToERC20.bind(this);
        this.GetLastObservedEthBlock = this.GetLastObservedEthBlock.bind(this);
        this.GetLastObservedEthNonce = this.GetLastObservedEthNonce.bind(this);
        this.GetAttestations = this.GetAttestations.bind(this);
        this.GetDelegateKeyByValidator = this.GetDelegateKeyByValidator.bind(this);
        this.GetDelegateKeyByEth = this.GetDelegateKeyByEth.bind(this);
        this.GetDelegateKeyByOrchestrator = this.GetDelegateKeyByOrchestrator.bind(this);
        this.GetPendingSendToEth = this.GetPendingSendToEth.bind(this);
        this.GetPendingIbcAutoForwards = this.GetPendingIbcAutoForwards.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL3F1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBBdHRlc3RhdGlvbiB9IGZyb20gXCIuL2F0dGVzdGF0aW9uXCI7XG5pbXBvcnQge1xuICBPdXRnb2luZ0xvZ2ljQ2FsbCxcbiAgT3V0Z29pbmdUcmFuc2ZlclR4LFxuICBPdXRnb2luZ1R4QmF0Y2gsXG59IGZyb20gXCIuL2JhdGNoXCI7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwiLi9nZW5lc2lzXCI7XG5pbXBvcnQgeyBScGMsIGJhc2U2NEZyb21CeXRlcywgYnl0ZXNGcm9tQmFzZTY0LCBpc1NldCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IE1zZ0NvbmZpcm1CYXRjaCwgTXNnQ29uZmlybUxvZ2ljQ2FsbCwgTXNnVmFsc2V0Q29uZmlybSB9IGZyb20gXCIuL21zZ3NcIjtcbmltcG9ydCB7IEJhdGNoRmVlcyB9IGZyb20gXCIuL3Bvb2xcIjtcbmltcG9ydCB7IFBlbmRpbmdJYmNBdXRvRm9yd2FyZCwgVmFsc2V0IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImdyYXZpdHkudjFcIjtcbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXNSZXF1ZXN0IHt9XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICBwYXJhbXM/OiBQYXJhbXM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5Q3VycmVudFZhbHNldFJlcXVlc3Qge31cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2Uge1xuICB2YWxzZXQ/OiBWYWxzZXQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Qge1xuICBub25jZTogYmlnaW50O1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSB7XG4gIHZhbHNldD86IFZhbHNldDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdCB7XG4gIG5vbmNlOiBiaWdpbnQ7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2Uge1xuICBjb25maXJtPzogTXNnVmFsc2V0Q29uZmlybTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0IHtcbiAgbm9uY2U6IGJpZ2ludDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZSB7XG4gIGNvbmZpcm1zOiBNc2dWYWxzZXRDb25maXJtW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCB7fVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlIHtcbiAgdmFsc2V0czogVmFsc2V0W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gIHZhbHNldHM6IFZhbHNldFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUJhdGNoRmVlUmVxdWVzdCB7fVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUJhdGNoRmVlUmVzcG9uc2Uge1xuICBiYXRjaEZlZXM6IEJhdGNoRmVlc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlIHtcbiAgYmF0Y2g6IE91dGdvaW5nVHhCYXRjaFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlIHtcbiAgY2FsbDogT3V0Z29pbmdMb2dpY0NhbGxbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3Qge31cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1Jlc3BvbnNlIHtcbiAgYmF0Y2hlczogT3V0Z29pbmdUeEJhdGNoW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdCB7fVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlIHtcbiAgY2FsbHM6IE91dGdvaW5nTG9naWNDYWxsW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3Qge1xuICBub25jZTogYmlnaW50O1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2Uge1xuICBiYXRjaD86IE91dGdvaW5nVHhCYXRjaDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCB7XG4gIG5vbmNlOiBiaWdpbnQ7XG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSB7XG4gIGNvbmZpcm1zOiBNc2dDb25maXJtQmF0Y2hbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMb2dpY0NvbmZpcm1zUmVxdWVzdCB7XG4gIGludmFsaWRhdGlvbklkOiBVaW50OEFycmF5O1xuICBpbnZhbGlkYXRpb25Ob25jZTogYmlnaW50O1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZSB7XG4gIGNvbmZpcm1zOiBNc2dDb25maXJtTG9naWNDYWxsW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2Uge1xuICBldmVudE5vbmNlOiBiaWdpbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdCB7XG4gIGVyYzIwOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2Uge1xuICBkZW5vbTogc3RyaW5nO1xuICBjb3Ntb3NPcmlnaW5hdGVkOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3Qge1xuICBkZW5vbTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlIHtcbiAgZXJjMjA6IHN0cmluZztcbiAgY29zbW9zT3JpZ2luYXRlZDogYm9vbGVhbjtcbn1cbi8qKlxuICogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3QgZGVmaW5lcyB0aGUgcmVxdWVzdCBmb3IgZ2V0dGluZyB0aGUgaGVpZ2h0IG9mIHRoZVxuICogbGFzdCBhcHBsaWVkIEV0aGVyZXVtIEV2ZW50IG9uIHRoZSBicmlkZ2UuIFRoaXMgaXMgZXhwZWN0ZWQgdG8gbGFnIHRoZSBhY3R1YWxcbiAqIEV0aGVyZXVtIGJsb2NrIGhlaWdodCBzaWduaWZpY2FudGx5IGR1ZSB0byAxLiBFdGhlcmV1bSBGaW5hbGl0eSBhbmRcbiAqICAyLiBDb25zZW5zdXMgbWlycm9yaW5nIHRoZSBzdGF0ZSBvbiBFdGhlcmV1bVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3Qge1xuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdG8gc2VhcmNoIGZvciBzdG9yZSBkYXRhIHVzaW5nIHRoZSBvbGQgR3Jhdml0eSB2MSBrZXkgXCJMYXN0T2JzZXJ2ZWRFdGhlcmV1bUJsb2NrSGVpZ2h0S2V5XCJcbiAgICogTm90ZSB0aGF0IHF1ZXJpZXMgYmVmb3JlIHRoZSBNZXJjdXJ5IHVwZ3JhZGUgYXQgaGVpZ2h0IDEyODIwMTMgbXVzdCBzZXQgdGhpcyB0byB0cnVlXG4gICAqL1xuICB1c2VWMUtleTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIGEgcmVzcG9uc2Ugb2YgMCBpbmRpY2F0ZXMgdGhhdCBubyBFdGhlcmV1bSBldmVudHMgaGF2ZSBiZWVuIG9ic2VydmVkLCBhbmQgdGh1c1xuICAgKiB0aGUgYnJpZGdlIGlzIGluYWN0aXZlXG4gICAqL1xuICBibG9jazogYmlnaW50O1xufVxuLyoqXG4gKiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCBkZWZpbmVzIHRoZSByZXF1ZXN0IGZvciBnZXR0aW5nIHRoZSBldmVudCBub25jZVxuICogb2YgdGhlIGxhc3QgYXBwbGllZCBFdGhlcmV1bSBFdmVudCBvbiB0aGUgYnJpZGdlLlxuICogTm90ZSB0aGF0IHRoaXMgaXMgbGlrZWx5IHRvIGxhZyB0aGUgbGFzdCBleGVjdXRlZCBldmVudCBhIGxpdHRsZVxuICogZHVlIHRvIDEuIEV0aGVyZXVtIEZpbmFsaXR5IGFuZCAyLiBDb25zZW5zdXMgbWlycm9yaW5nIHRoZSBFdGhlcmV1bSBzdGF0ZVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3Qge1xuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdG8gc2VhcmNoIGZvciBzdG9yZSBkYXRhIHVzaW5nIHRoZSBvbGQgR3Jhdml0eSB2MSBrZXkgXCJMYXN0T2JzZXJ2ZWRFdmVudE5vbmNlS2V5XCJcbiAgICogTm90ZSB0aGF0IHF1ZXJpZXMgYmVmb3JlIHRoZSBNZXJjdXJ5IHVwZ3JhZGUgYXQgaGVpZ2h0IDEyODIwMTMgbXVzdCBzZXQgdGhpcyB0byB0cnVlXG4gICAqL1xuICB1c2VWMUtleTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIGEgcmVzcG9uc2Ugb2YgMCBpbmRpY2F0ZXMgdGhhdCBubyBFdGhlcmV1bSBldmVudHMgaGF2ZSBiZWVuIG9ic2VydmVkLCBhbmQgdGh1c1xuICAgKiB0aGUgYnJpZGdlIGlzIGluYWN0aXZlXG4gICAqL1xuICBub25jZTogYmlnaW50O1xufVxuLyoqXG4gKiBRdWVyeUF0dGVzdGF0aW9uc1JlcXVlc3QgZGVmaW5lcyB0aGUgcmVxdWVzdCBzdHJ1Y3R1cmUgZm9yIGdldHRpbmcgcmVjZW50XG4gKiBhdHRlc3RhdGlvbnMgd2l0aCBvcHRpb25hbCBxdWVyeSBwYXJhbWV0ZXJzLiBCeSBkZWZhdWx0LCBhIGxpbWl0ZWQgc2V0IG9mXG4gKiByZWNlbnQgYXR0ZXN0YXRpb25zIHdpbGwgYmUgcmV0dXJuZWQsIGRlZmluZWQgYnkgJ2xpbWl0Jy4gVGhlc2UgYXR0ZXN0YXRpb25zXG4gKiBjYW4gYmUgb3JkZXJlZCBhc2NlbmRpbmcgb3IgZGVzY2VuZGluZyBieSBub25jZSwgdGhhdCBkZWZhdWx0cyB0byBhc2NlbmRpbmcuXG4gKiBGaWx0ZXJpbmcgY3JpdGVyaWEgbWF5IGFsc28gYmUgcHJvdmlkZWQsIGluY2x1ZGluZyBub25jZSwgY2xhaW0gdHlwZSwgYW5kXG4gKiBoZWlnaHQuIE5vdGUsIHRoYXQgYW4gYXR0ZXN0YXRpb24gd2lsbCBiZSByZXR1cm5lZCBpZiBpdCBtYXRjaGVzIEFOWSBvZiB0aGVcbiAqIGZpbHRlciBxdWVyeSBwYXJhbWV0ZXJzIHByb3ZpZGVkLlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0IHtcbiAgLyoqIGxpbWl0IGRlZmluZXMgaG93IG1hbnkgYXR0ZXN0YXRpb25zIHRvIGxpbWl0IGluIHRoZSByZXNwb25zZS4gKi9cbiAgbGltaXQ6IGJpZ2ludDtcbiAgLyoqXG4gICAqIG9yZGVyX2J5IHByb3ZpZGVzIG9yZGVyaW5nIG9mIGF0dGVzdHN0aW9ucyBieSBub25jZSBpbiB0aGUgcmVzcG9uc2UuIEVpdGhlclxuICAgKiAnYXNjJyBvciAnZGVzYycgY2FuIGJlIHByb3ZpZGVkLiBJZiBubyB2YWx1ZSBpcyBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG9cbiAgICogJ2FzYycuXG4gICAqL1xuXG4gIG9yZGVyQnk6IHN0cmluZztcbiAgLyoqIGNsYWltX3R5cGUgYWxsb3dzIGZpbHRlcmluZyBhdHRlc3RhdGlvbnMgYnkgRXRoZXJldW0gY2xhaW0gdHlwZS4gKi9cblxuICBjbGFpbVR5cGU6IHN0cmluZztcbiAgLyoqIG5vbmNlIGFsbG93cyBmaWx0ZXJpbmcgYXR0ZXN0YXRpb25zIGJ5IEV0aGVyZXVtIGNsYWltIG5vbmNlLiAqL1xuXG4gIG5vbmNlOiBiaWdpbnQ7XG4gIC8qKiBoZWlnaHQgYWxsb3dzIGZpbHRlcmluZyBhdHRlc3RhdGlvbnMgYnkgRXRoZXJldW0gY2xhaW0gaGVpZ2h0LiAqL1xuXG4gIGhlaWdodDogYmlnaW50O1xuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdG8gc2VhcmNoIGZvciBzdG9yZSBkYXRhIHVzaW5nIHRoZSBvbGQgR3Jhdml0eSB2MSBrZXkgXCJPcmFjbGVBdHRlc3RhdGlvbktleVwiXG4gICAqIE5vdGUgdGhhdCBxdWVyaWVzIGJlZm9yZSB0aGUgTWVyY3VyeSB1cGdyYWRlIGF0IGhlaWdodCAxMjgyMDEzIG11c3Qgc2V0IHRoaXMgdG8gdHJ1ZVxuICAgKi9cblxuICB1c2VWMUtleTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSB7XG4gIGF0dGVzdGF0aW9uczogQXR0ZXN0YXRpb25bXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3Mge1xuICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICBldGhBZGRyZXNzOiBzdHJpbmc7XG4gIG9yY2hlc3RyYXRvckFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3Mge1xuICBldGhBZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzUmVzcG9uc2Uge1xuICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7XG4gIG9yY2hlc3RyYXRvckFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3Mge1xuICBvcmNoZXN0cmF0b3JBZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7XG4gIGV0aEFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQZW5kaW5nU2VuZFRvRXRoIHtcbiAgc2VuZGVyQWRkcmVzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSB7XG4gIHRyYW5zZmVyc0luQmF0Y2hlczogT3V0Z29pbmdUcmFuc2ZlclR4W107XG4gIHVuYmF0Y2hlZFRyYW5zZmVyczogT3V0Z29pbmdUcmFuc2ZlclR4W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyB7XG4gIC8qKiBsaW1pdCBkZWZpbmVzIHRoZSBudW1iZXIgb2YgcGVuZGluZyBmb3J3YXJkcyB0byByZXR1cm4sIGluIG9yZGVyIG9mIHRoZWlyIFNlbmRUb0Nvc21vcy5FdmVudE5vbmNlICovXG4gIGxpbWl0OiBiaWdpbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHtcbiAgcGVuZGluZ0liY0F1dG9Gb3J3YXJkczogUGVuZGluZ0liY0F1dG9Gb3J3YXJkW107XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVBhcmFtc1JlcXVlc3QoKTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlQYXJhbXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVxdWVzdD4pOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlQYXJhbXNSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlQYXJhbXNSZXNwb25zZSgpOiBRdWVyeVBhcmFtc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXM6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGFyYW1zUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeVBhcmFtc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFBhcmFtcy5lbmNvZGUobWVzc2FnZS5wYXJhbXMsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IGlzU2V0KG9iamVjdC5wYXJhbXMpID8gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8UXVlcnlQYXJhbXNSZXNwb25zZT4pOiBRdWVyeVBhcmFtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnBhcmFtcyA9XG4gICAgICBvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbFxuICAgICAgICA/IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0KCk6IFF1ZXJ5Q3VycmVudFZhbHNldFJlcXVlc3Qge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8UXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdD5cbiAgKTogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UoKTogUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbHNldDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbHNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBWYWxzZXQuZW5jb2RlKG1lc3NhZ2UudmFsc2V0LCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5Q3VycmVudFZhbHNldFJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxzZXQgPSBWYWxzZXQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5Q3VycmVudFZhbHNldFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsc2V0OiBpc1NldChvYmplY3QudmFsc2V0KSA/IFZhbHNldC5mcm9tSlNPTihvYmplY3QudmFsc2V0KSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxzZXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxzZXQgPSBtZXNzYWdlLnZhbHNldCA/IFZhbHNldC50b0pTT04obWVzc2FnZS52YWxzZXQpIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZT5cbiAgKTogUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnZhbHNldCA9XG4gICAgICBvYmplY3QudmFsc2V0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbHNldCAhPT0gbnVsbFxuICAgICAgICA/IFZhbHNldC5mcm9tUGFydGlhbChvYmplY3QudmFsc2V0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0KCk6IFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIG5vbmNlOiBCaWdJbnQoMCksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKSA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Q+XG4gICk6IFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdCgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UoKTogUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbHNldDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbHNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBWYWxzZXQuZW5jb2RlKG1lc3NhZ2UudmFsc2V0LCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0UmVxdWVzdFJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxzZXQgPSBWYWxzZXQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5VmFsc2V0UmVxdWVzdFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsc2V0OiBpc1NldChvYmplY3QudmFsc2V0KSA/IFZhbHNldC5mcm9tSlNPTihvYmplY3QudmFsc2V0KSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxzZXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxzZXQgPSBtZXNzYWdlLnZhbHNldCA/IFZhbHNldC50b0pTT04obWVzc2FnZS52YWxzZXQpIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZT5cbiAgKTogUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnZhbHNldCA9XG4gICAgICBvYmplY3QudmFsc2V0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbHNldCAhPT0gbnVsbFxuICAgICAgICA/IFZhbHNldC5mcm9tUGFydGlhbChvYmplY3QudmFsc2V0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KCk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIG5vbmNlOiBCaWdJbnQoMCksXG4gICAgYWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gQmlnSW50KG9iamVjdC5ub25jZSkgOiBCaWdJbnQoMCksXG4gICAgICBhZGRyZXNzOiBpc1NldChvYmplY3QuYWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIChvYmouYWRkcmVzcyA9IG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdD5cbiAgKTogUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5ub25jZSA9XG4gICAgICBvYmplY3Qubm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qubm9uY2UgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgPSBvYmplY3QuYWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlKCk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBjb25maXJtOiB1bmRlZmluZWQsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVZhbHNldENvbmZpcm1SZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuY29uZmlybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBNc2dWYWxzZXRDb25maXJtLmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5jb25maXJtLFxuICAgICAgICB3cml0ZXIudWludDMyKDEwKS5mb3JrKClcbiAgICAgICkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmNvbmZpcm0gPSBNc2dWYWxzZXRDb25maXJtLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVZhbHNldENvbmZpcm1SZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpcm06IGlzU2V0KG9iamVjdC5jb25maXJtKVxuICAgICAgICA/IE1zZ1ZhbHNldENvbmZpcm0uZnJvbUpTT04ob2JqZWN0LmNvbmZpcm0pXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmNvbmZpcm0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5jb25maXJtID0gbWVzc2FnZS5jb25maXJtXG4gICAgICAgID8gTXNnVmFsc2V0Q29uZmlybS50b0pTT04obWVzc2FnZS5jb25maXJtKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2U+XG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5jb25maXJtID1cbiAgICAgIG9iamVjdC5jb25maXJtICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNvbmZpcm0gIT09IG51bGxcbiAgICAgICAgPyBNc2dWYWxzZXRDb25maXJtLmZyb21QYXJ0aWFsKG9iamVjdC5jb25maXJtKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3QoKTogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub25jZTogaXNTZXQob2JqZWN0Lm5vbmNlKSA/IEJpZ0ludChvYmplY3Qubm9uY2UpIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vbmNlID0gKG1lc3NhZ2Uubm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3Q+XG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLm5vbmNlID1cbiAgICAgIG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3Qubm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UoKTogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgY29uZmlybXM6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5jb25maXJtcykge1xuICAgICAgTXNnVmFsc2V0Q29uZmlybS5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5jb25maXJtcy5wdXNoKFxuICAgICAgICAgICAgTXNnVmFsc2V0Q29uZmlybS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maXJtczogQXJyYXkuaXNBcnJheShvYmplY3Q/LmNvbmZpcm1zKVxuICAgICAgICA/IG9iamVjdC5jb25maXJtcy5tYXAoKGU6IGFueSkgPT4gTXNnVmFsc2V0Q29uZmlybS5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLmNvbmZpcm1zKSB7XG4gICAgICBvYmouY29uZmlybXMgPSBtZXNzYWdlLmNvbmZpcm1zLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IE1zZ1ZhbHNldENvbmZpcm0udG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouY29uZmlybXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlPlxuICApOiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmNvbmZpcm1zID1cbiAgICAgIG9iamVjdC5jb25maXJtcz8ubWFwKChlKSA9PiBNc2dWYWxzZXRDb25maXJtLmZyb21QYXJ0aWFsKGUpKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1JlcXVlc3QoKTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBQYXJ0aWFsPFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdD5cbiAgKTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2UoKTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgdmFsc2V0czogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnZhbHNldHMpIHtcbiAgICAgIFZhbHNldC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxzZXRzLnB1c2goVmFsc2V0LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHNldHM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py52YWxzZXRzKVxuICAgICAgICA/IG9iamVjdC52YWxzZXRzLm1hcCgoZTogYW55KSA9PiBWYWxzZXQuZnJvbUpTT04oZSkpXG4gICAgICAgIDogW10sXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS52YWxzZXRzKSB7XG4gICAgICBvYmoudmFsc2V0cyA9IG1lc3NhZ2UudmFsc2V0cy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBWYWxzZXQudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudmFsc2V0cyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UudmFsc2V0cyA9IG9iamVjdC52YWxzZXRzPy5tYXAoKGUpID0+IFZhbHNldC5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0KCk6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgYWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBpc1NldChvYmplY3QuYWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIChvYmouYWRkcmVzcyA9IG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5hZGRyZXNzID0gb2JqZWN0LmFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlKCk6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbHNldHM6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS52YWxzZXRzKSB7XG4gICAgICBWYWxzZXQuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsc2V0cy5wdXNoKFZhbHNldC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICB2YWxzZXRzOiBBcnJheS5pc0FycmF5KG9iamVjdD8udmFsc2V0cylcbiAgICAgICAgPyBvYmplY3QudmFsc2V0cy5tYXAoKGU6IGFueSkgPT4gVmFsc2V0LmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuXG4gICAgaWYgKG1lc3NhZ2UudmFsc2V0cykge1xuICAgICAgb2JqLnZhbHNldHMgPSBtZXNzYWdlLnZhbHNldHMubWFwKChlKSA9PlxuICAgICAgICBlID8gVmFsc2V0LnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnZhbHNldHMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlPlxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnZhbHNldHMgPSBvYmplY3QudmFsc2V0cz8ubWFwKChlKSA9PiBWYWxzZXQuZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KCk6IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlCYXRjaEZlZVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBfOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBQYXJ0aWFsPFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0Pik6IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlCYXRjaEZlZVJlc3BvbnNlKCk6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmF0Y2hGZWVzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmJhdGNoRmVlcykge1xuICAgICAgQmF0Y2hGZWVzLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaEZlZVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaEZlZVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5iYXRjaEZlZXMucHVzaChCYXRjaEZlZXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUJhdGNoRmVlUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaEZlZXM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5iYXRjaEZlZXMpXG4gICAgICAgID8gb2JqZWN0LmJhdGNoRmVlcy5tYXAoKGU6IGFueSkgPT4gQmF0Y2hGZWVzLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaEZlZXMpIHtcbiAgICAgIG9iai5iYXRjaEZlZXMgPSBtZXNzYWdlLmJhdGNoRmVlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBCYXRjaEZlZXMudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYmF0Y2hGZWVzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8UXVlcnlCYXRjaEZlZVJlc3BvbnNlPik6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoRmVlUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmJhdGNoRmVlcyA9XG4gICAgICBvYmplY3QuYmF0Y2hGZWVzPy5tYXAoKGUpID0+IEJhdGNoRmVlcy5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QoKTogUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6IGlzU2V0KG9iamVjdC5hZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuYWRkcmVzcykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFkZHJlc3MgPSBtZXNzYWdlLmFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UuYWRkcmVzcyA9IG9iamVjdC5hZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlKCk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmF0Y2g6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYmF0Y2gpIHtcbiAgICAgIE91dGdvaW5nVHhCYXRjaC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2gucHVzaChPdXRnb2luZ1R4QmF0Y2guZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaDogQXJyYXkuaXNBcnJheShvYmplY3Q/LmJhdGNoKVxuICAgICAgICA/IG9iamVjdC5iYXRjaC5tYXAoKGU6IGFueSkgPT4gT3V0Z29pbmdUeEJhdGNoLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaCkge1xuICAgICAgb2JqLmJhdGNoID0gbWVzc2FnZS5iYXRjaC5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBPdXRnb2luZ1R4QmF0Y2gudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYmF0Y2ggPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmJhdGNoID1cbiAgICAgIG9iamVjdC5iYXRjaD8ubWFwKChlKSA9PiBPdXRnb2luZ1R4QmF0Y2guZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0KCk6IFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBpc1NldChvYmplY3QuYWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgKG9iai5hZGRyZXNzID0gbWVzc2FnZS5hZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdD5cbiAgKTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgPSBvYmplY3QuYWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZSgpOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGNhbGw6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuY2FsbCkge1xuICAgICAgT3V0Z29pbmdMb2dpY0NhbGwuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmNhbGwucHVzaChPdXRnb2luZ0xvZ2ljQ2FsbC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbGw6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5jYWxsKVxuICAgICAgICA/IG9iamVjdC5jYWxsLm1hcCgoZTogYW55KSA9PiBPdXRnb2luZ0xvZ2ljQ2FsbC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuXG4gICAgaWYgKG1lc3NhZ2UuY2FsbCkge1xuICAgICAgb2JqLmNhbGwgPSBtZXNzYWdlLmNhbGwubWFwKChlKSA9PlxuICAgICAgICBlID8gT3V0Z29pbmdMb2dpY0NhbGwudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouY2FsbCA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZT5cbiAgKTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuY2FsbCA9XG4gICAgICBvYmplY3QuY2FsbD8ubWFwKChlKSA9PiBPdXRnb2luZ0xvZ2ljQ2FsbC5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QoKTogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3Qge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8UXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3Q+XG4gICk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1Jlc3BvbnNlKCk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmF0Y2hlczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5iYXRjaGVzKSB7XG4gICAgICBPdXRnb2luZ1R4QmF0Y2guZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoZXMucHVzaChPdXRnb2luZ1R4QmF0Y2guZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaGVzOiBBcnJheS5pc0FycmF5KG9iamVjdD8uYmF0Y2hlcylcbiAgICAgICAgPyBvYmplY3QuYmF0Y2hlcy5tYXAoKGU6IGFueSkgPT4gT3V0Z29pbmdUeEJhdGNoLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaGVzKSB7XG4gICAgICBvYmouYmF0Y2hlcyA9IG1lc3NhZ2UuYmF0Y2hlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBPdXRnb2luZ1R4QmF0Y2gudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYmF0Y2hlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZT5cbiAgKTogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuYmF0Y2hlcyA9XG4gICAgICBvYmplY3QuYmF0Y2hlcz8ubWFwKChlKSA9PiBPdXRnb2luZ1R4QmF0Y2guZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdCgpOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3Qge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBfOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3Qge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8UXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0PlxuICApOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSgpOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBjYWxsczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmNhbGxzKSB7XG4gICAgICBPdXRnb2luZ0xvZ2ljQ2FsbC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5jYWxscy5wdXNoKE91dGdvaW5nTG9naWNDYWxsLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbGxzOiBBcnJheS5pc0FycmF5KG9iamVjdD8uY2FsbHMpXG4gICAgICAgID8gb2JqZWN0LmNhbGxzLm1hcCgoZTogYW55KSA9PiBPdXRnb2luZ0xvZ2ljQ2FsbC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLmNhbGxzKSB7XG4gICAgICBvYmouY2FsbHMgPSBtZXNzYWdlLmNhbGxzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IE91dGdvaW5nTG9naWNDYWxsLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmNhbGxzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZT5cbiAgKTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5jYWxscyA9XG4gICAgICBvYmplY3QuY2FsbHM/Lm1hcCgoZSkgPT4gT3V0Z29pbmdMb2dpY0NhbGwuZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3QoKTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgbm9uY2U6IEJpZ0ludCgwKSxcbiAgICBjb250cmFjdEFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvbnRyYWN0QWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmNvbnRyYWN0QWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub25jZTogaXNTZXQob2JqZWN0Lm5vbmNlKSA/IEJpZ0ludChvYmplY3Qubm9uY2UpIDogQmlnSW50KDApLFxuICAgICAgY29udHJhY3RBZGRyZXNzOiBpc1NldChvYmplY3QuY29udHJhY3RBZGRyZXNzKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuY29udHJhY3RBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vbmNlID0gKG1lc3NhZ2Uubm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLmNvbnRyYWN0QWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNvbnRyYWN0QWRkcmVzcyA9IG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0PlxuICApOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLm5vbmNlID1cbiAgICAgIG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3Qubm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzID0gb2JqZWN0LmNvbnRyYWN0QWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlKCk6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBiYXRjaDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmJhdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE91dGdvaW5nVHhCYXRjaC5lbmNvZGUobWVzc2FnZS5iYXRjaCwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2ggPSBPdXRnb2luZ1R4QmF0Y2guZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2g6IGlzU2V0KG9iamVjdC5iYXRjaClcbiAgICAgICAgPyBPdXRnb2luZ1R4QmF0Y2guZnJvbUpTT04ob2JqZWN0LmJhdGNoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5iYXRjaCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhdGNoID0gbWVzc2FnZS5iYXRjaFxuICAgICAgICA/IE91dGdvaW5nVHhCYXRjaC50b0pTT04obWVzc2FnZS5iYXRjaClcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlPlxuICApOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuYmF0Y2ggPVxuICAgICAgb2JqZWN0LmJhdGNoICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmJhdGNoICE9PSBudWxsXG4gICAgICAgID8gT3V0Z29pbmdUeEJhdGNoLmZyb21QYXJ0aWFsKG9iamVjdC5iYXRjaClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCgpOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogQmlnSW50KDApLFxuICAgIGNvbnRyYWN0QWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5jb250cmFjdEFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gQmlnSW50KG9iamVjdC5ub25jZSkgOiBCaWdJbnQoMCksXG4gICAgICBjb250cmFjdEFkZHJlc3M6IGlzU2V0KG9iamVjdC5jb250cmFjdEFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5jb250cmFjdEFkZHJlc3MpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29udHJhY3RBZGRyZXNzID0gbWVzc2FnZS5jb250cmFjdEFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3Q+XG4gICk6IFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5jb250cmFjdEFkZHJlc3MgPSBvYmplY3QuY29udHJhY3RBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UoKTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGNvbmZpcm1zOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5jb25maXJtcykge1xuICAgICAgTXNnQ29uZmlybUJhdGNoLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY29uZmlybXMucHVzaChcbiAgICAgICAgICAgIE1zZ0NvbmZpcm1CYXRjaC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlybXM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5jb25maXJtcylcbiAgICAgICAgPyBvYmplY3QuY29uZmlybXMubWFwKChlOiBhbnkpID0+IE1zZ0NvbmZpcm1CYXRjaC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5jb25maXJtcykge1xuICAgICAgb2JqLmNvbmZpcm1zID0gbWVzc2FnZS5jb25maXJtcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBNc2dDb25maXJtQmF0Y2gudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouY29uZmlybXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZT5cbiAgKTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmNvbmZpcm1zID1cbiAgICAgIG9iamVjdC5jb25maXJtcz8ubWFwKChlKSA9PiBNc2dDb25maXJtQmF0Y2guZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3QoKTogUXVlcnlMb2dpY0NvbmZpcm1zUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgaW52YWxpZGF0aW9uSWQ6IG5ldyBVaW50OEFycmF5KCksXG4gICAgaW52YWxpZGF0aW9uTm9uY2U6IEJpZ0ludCgwKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5ieXRlcyhtZXNzYWdlLmludmFsaWRhdGlvbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE2KS51aW50NjQobWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5pbnZhbGlkYXRpb25JZCA9IHJlYWRlci5ieXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmludmFsaWRhdGlvbk5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMb2dpY0NvbmZpcm1zUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludmFsaWRhdGlvbklkOiBpc1NldChvYmplY3QuaW52YWxpZGF0aW9uSWQpXG4gICAgICAgID8gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5pbnZhbGlkYXRpb25JZClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpLFxuICAgICAgaW52YWxpZGF0aW9uTm9uY2U6IGlzU2V0KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmludmFsaWRhdGlvbk5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaW52YWxpZGF0aW9uSWQgPSBiYXNlNjRGcm9tQnl0ZXMoXG4gICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gbWVzc2FnZS5pbnZhbGlkYXRpb25JZFxuICAgICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgICAgKSk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmludmFsaWRhdGlvbk5vbmNlID0gKFxuICAgICAgICBtZXNzYWdlLmludmFsaWRhdGlvbk5vbmNlIHx8IEJpZ0ludCgwKVxuICAgICAgKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0PlxuICApOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3QoKTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkID0gb2JqZWN0LmludmFsaWRhdGlvbklkID8/IG5ldyBVaW50OEFycmF5KCk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSA9XG4gICAgICBvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmludmFsaWRhdGlvbk5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UoKTogUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGNvbmZpcm1zOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5jb25maXJtcykge1xuICAgICAgTXNnQ29uZmlybUxvZ2ljQ2FsbC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmNvbmZpcm1zLnB1c2goXG4gICAgICAgICAgICBNc2dDb25maXJtTG9naWNDYWxsLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maXJtczogQXJyYXkuaXNBcnJheShvYmplY3Q/LmNvbmZpcm1zKVxuICAgICAgICA/IG9iamVjdC5jb25maXJtcy5tYXAoKGU6IGFueSkgPT4gTXNnQ29uZmlybUxvZ2ljQ2FsbC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5jb25maXJtcykge1xuICAgICAgb2JqLmNvbmZpcm1zID0gbWVzc2FnZS5jb25maXJtcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBNc2dDb25maXJtTG9naWNDYWxsLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmNvbmZpcm1zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5jb25maXJtcyA9XG4gICAgICBvYmplY3QuY29uZmlybXM/Lm1hcCgoZSkgPT4gTXNnQ29uZmlybUxvZ2ljQ2FsbC5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3QoKTogUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6IGlzU2V0KG9iamVjdC5hZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuYWRkcmVzcykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFkZHJlc3MgPSBtZXNzYWdlLmFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UuYWRkcmVzcyA9IG9iamVjdC5hZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlc3BvbnNlKCk6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgZXZlbnROb25jZTogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZXZlbnROb25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLmV2ZW50Tm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudE5vbmNlOiBpc1NldChvYmplY3QuZXZlbnROb25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ldmVudE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXZlbnROb25jZSA9IChtZXNzYWdlLmV2ZW50Tm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgPVxuICAgICAgb2JqZWN0LmV2ZW50Tm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXZlbnROb25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuZXZlbnROb25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0KCk6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgZXJjMjA6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5lcmMyMCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZXJjMjApO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmVyYzIwID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjA6IGlzU2V0KG9iamVjdC5lcmMyMCkgPyBTdHJpbmcob2JqZWN0LmVyYzIwKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmVyYzIwICE9PSB1bmRlZmluZWQgJiYgKG9iai5lcmMyMCA9IG1lc3NhZ2UuZXJjMjApO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdD5cbiAgKTogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UuZXJjMjAgPSBvYmplY3QuZXJjMjAgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUVSQzIwVG9EZW5vbVJlc3BvbnNlKCk6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGRlbm9tOiBcIlwiLFxuICAgIGNvc21vc09yaWdpbmF0ZWQ6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5kZW5vbSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZGVub20pO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQgPT09IHRydWUpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLmJvb2wobWVzc2FnZS5jb3Ntb3NPcmlnaW5hdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmRlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQgPSByZWFkZXIuYm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbm9tOiBpc1NldChvYmplY3QuZGVub20pID8gU3RyaW5nKG9iamVjdC5kZW5vbSkgOiBcIlwiLFxuICAgICAgY29zbW9zT3JpZ2luYXRlZDogaXNTZXQob2JqZWN0LmNvc21vc09yaWdpbmF0ZWQpXG4gICAgICAgID8gQm9vbGVhbihvYmplY3QuY29zbW9zT3JpZ2luYXRlZClcbiAgICAgICAgOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUVSQzIwVG9EZW5vbVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmRlbm9tICE9PSB1bmRlZmluZWQgJiYgKG9iai5kZW5vbSA9IG1lc3NhZ2UuZGVub20pO1xuICAgIG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNvc21vc09yaWdpbmF0ZWQgPSBtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuZGVub20gPSBvYmplY3QuZGVub20gPz8gXCJcIjtcbiAgICBtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQgPSBvYmplY3QuY29zbW9zT3JpZ2luYXRlZCA/PyBmYWxzZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3QoKTogUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBkZW5vbTogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmRlbm9tICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5kZW5vbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZGVub20gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBkZW5vbTogaXNTZXQob2JqZWN0LmRlbm9tKSA/IFN0cmluZyhvYmplY3QuZGVub20pIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0PlxuICApOiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5kZW5vbSA9IG9iamVjdC5kZW5vbSA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5RGVub21Ub0VSQzIwUmVzcG9uc2UoKTogUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgZXJjMjA6IFwiXCIsXG4gICAgY29zbW9zT3JpZ2luYXRlZDogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmVyYzIwICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5lcmMyMCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigxNikuYm9vbChtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXJjMjAgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCA9IHJlYWRlci5ib29sKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjA6IGlzU2V0KG9iamVjdC5lcmMyMCkgPyBTdHJpbmcob2JqZWN0LmVyYzIwKSA6IFwiXCIsXG4gICAgICBjb3Ntb3NPcmlnaW5hdGVkOiBpc1NldChvYmplY3QuY29zbW9zT3JpZ2luYXRlZClcbiAgICAgICAgPyBCb29sZWFuKG9iamVjdC5jb3Ntb3NPcmlnaW5hdGVkKVxuICAgICAgICA6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RGVub21Ub0VSQzIwUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZXJjMjAgIT09IHVuZGVmaW5lZCAmJiAob2JqLmVyYzIwID0gbWVzc2FnZS5lcmMyMCk7XG4gICAgbWVzc2FnZS5jb3Ntb3NPcmlnaW5hdGVkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zT3JpZ2luYXRlZCA9IG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZT5cbiAgKTogUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5lcmMyMCA9IG9iamVjdC5lcmMyMCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCA9IG9iamVjdC5jb3Ntb3NPcmlnaW5hdGVkID8/IGZhbHNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0KCk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VWMUtleTogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudXNlVjFLZXkgPT09IHRydWUpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkuYm9vbChtZXNzYWdlLnVzZVYxS2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudXNlVjFLZXkgPSByZWFkZXIuYm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VWMUtleTogaXNTZXQob2JqZWN0LnVzZVYxS2V5KSA/IEJvb2xlYW4ob2JqZWN0LnVzZVYxS2V5KSA6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnVzZVYxS2V5ICE9PSB1bmRlZmluZWQgJiYgKG9iai51c2VWMUtleSA9IG1lc3NhZ2UudXNlVjFLZXkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UudXNlVjFLZXkgPSBvYmplY3QudXNlVjFLZXkgPz8gZmFsc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlKCk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmxvY2s6IEJpZ0ludCgwKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmJsb2NrICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UuYmxvY2spO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJsb2NrID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxvY2s6IGlzU2V0KG9iamVjdC5ibG9jaykgPyBCaWdJbnQob2JqZWN0LmJsb2NrKSA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuYmxvY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ibG9jayA9IChtZXNzYWdlLmJsb2NrIHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlPlxuICApOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5ibG9jayA9XG4gICAgICBvYmplY3QuYmxvY2sgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuYmxvY2sgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmJsb2NrKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCgpOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgdXNlVjFLZXk6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnVzZVYxS2V5ID09PSB0cnVlKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLmJvb2wobWVzc2FnZS51c2VWMUtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnVzZVYxS2V5ID0gcmVhZGVyLmJvb2woKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlVjFLZXk6IGlzU2V0KG9iamVjdC51c2VWMUtleSkgPyBCb29sZWFuKG9iamVjdC51c2VWMUtleSkgOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS51c2VWMUtleSAhPT0gdW5kZWZpbmVkICYmIChvYmoudXNlVjFLZXkgPSBtZXNzYWdlLnVzZVYxS2V5KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdD5cbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLnVzZVYxS2V5ID0gb2JqZWN0LnVzZVYxS2V5ID8/IGZhbHNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZSgpOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIG5vbmNlOiBCaWdJbnQoMCksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gQmlnSW50KG9iamVjdC5ub25jZSkgOiBCaWdJbnQoMCksXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZT5cbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0KCk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgbGltaXQ6IEJpZ0ludCgwKSxcbiAgICBvcmRlckJ5OiBcIlwiLFxuICAgIGNsYWltVHlwZTogXCJcIixcbiAgICBub25jZTogQmlnSW50KDApLFxuICAgIGhlaWdodDogQmlnSW50KDApLFxuICAgIHVzZVYxS2V5OiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmxpbWl0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UubGltaXQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yZGVyQnkgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm9yZGVyQnkpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNsYWltVHlwZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UuY2xhaW1UeXBlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDMyKS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuaGVpZ2h0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDApLnVpbnQ2NChtZXNzYWdlLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudXNlVjFLZXkgPT09IHRydWUpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDgpLmJvb2wobWVzc2FnZS51c2VWMUtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubGltaXQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2Uub3JkZXJCeSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5jbGFpbVR5cGUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2UuaGVpZ2h0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBtZXNzYWdlLnVzZVYxS2V5ID0gcmVhZGVyLmJvb2woKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbWl0OiBpc1NldChvYmplY3QubGltaXQpID8gQmlnSW50KG9iamVjdC5saW1pdCkgOiBCaWdJbnQoMCksXG4gICAgICBvcmRlckJ5OiBpc1NldChvYmplY3Qub3JkZXJCeSkgPyBTdHJpbmcob2JqZWN0Lm9yZGVyQnkpIDogXCJcIixcbiAgICAgIGNsYWltVHlwZTogaXNTZXQob2JqZWN0LmNsYWltVHlwZSkgPyBTdHJpbmcob2JqZWN0LmNsYWltVHlwZSkgOiBcIlwiLFxuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKSA6IEJpZ0ludCgwKSxcbiAgICAgIGhlaWdodDogaXNTZXQob2JqZWN0LmhlaWdodCkgPyBCaWdJbnQob2JqZWN0LmhlaWdodCkgOiBCaWdJbnQoMCksXG4gICAgICB1c2VWMUtleTogaXNTZXQob2JqZWN0LnVzZVYxS2V5KSA/IEJvb2xlYW4ob2JqZWN0LnVzZVYxS2V5KSA6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5saW1pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmxpbWl0ID0gKG1lc3NhZ2UubGltaXQgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLm9yZGVyQnkgIT09IHVuZGVmaW5lZCAmJiAob2JqLm9yZGVyQnkgPSBtZXNzYWdlLm9yZGVyQnkpO1xuICAgIG1lc3NhZ2UuY2xhaW1UeXBlICE9PSB1bmRlZmluZWQgJiYgKG9iai5jbGFpbVR5cGUgPSBtZXNzYWdlLmNsYWltVHlwZSk7XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vbmNlID0gKG1lc3NhZ2Uubm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLmhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmhlaWdodCA9IChtZXNzYWdlLmhlaWdodCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UudXNlVjFLZXkgIT09IHVuZGVmaW5lZCAmJiAob2JqLnVzZVYxS2V5ID0gbWVzc2FnZS51c2VWMUtleSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0PlxuICApOiBRdWVyeUF0dGVzdGF0aW9uc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5saW1pdCA9XG4gICAgICBvYmplY3QubGltaXQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubGltaXQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmxpbWl0KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLm9yZGVyQnkgPSBvYmplY3Qub3JkZXJCeSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuY2xhaW1UeXBlID0gb2JqZWN0LmNsYWltVHlwZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5oZWlnaHQgPVxuICAgICAgb2JqZWN0LmhlaWdodCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5oZWlnaHQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmhlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS51c2VWMUtleSA9IG9iamVjdC51c2VWMUtleSA/PyBmYWxzZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlKCk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGF0dGVzdGF0aW9uczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmF0dGVzdGF0aW9ucykge1xuICAgICAgQXR0ZXN0YXRpb24uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYXR0ZXN0YXRpb25zLnB1c2goXG4gICAgICAgICAgICBBdHRlc3RhdGlvbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRlc3RhdGlvbnM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5hdHRlc3RhdGlvbnMpXG4gICAgICAgID8gb2JqZWN0LmF0dGVzdGF0aW9ucy5tYXAoKGU6IGFueSkgPT4gQXR0ZXN0YXRpb24uZnJvbUpTT04oZSkpXG4gICAgICAgIDogW10sXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5hdHRlc3RhdGlvbnMpIHtcbiAgICAgIG9iai5hdHRlc3RhdGlvbnMgPSBtZXNzYWdlLmF0dGVzdGF0aW9ucy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBBdHRlc3RhdGlvbi50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hdHRlc3RhdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlPlxuICApOiBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmF0dGVzdGF0aW9ucyA9XG4gICAgICBvYmplY3QuYXR0ZXN0YXRpb25zPy5tYXAoKGUpID0+IEF0dGVzdGF0aW9uLmZyb21QYXJ0aWFsKGUpKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcygpOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcyB7XG4gIHJldHVybiB7XG4gICAgdmFsaWRhdG9yQWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3MsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3Mge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0LnZhbGlkYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3MpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnZhbGlkYXRvckFkZHJlc3MgPSBtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzPlxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcygpO1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IG9iamVjdC52YWxpZGF0b3JBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSgpOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBldGhBZGRyZXNzOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvckFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmV0aEFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmV0aEFkZHJlc3MpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXRoQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV0aEFkZHJlc3M6IGlzU2V0KG9iamVjdC5ldGhBZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuZXRoQWRkcmVzcykgOiBcIlwiLFxuICAgICAgb3JjaGVzdHJhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ldGhBZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgKG9iai5ldGhBZGRyZXNzID0gbWVzc2FnZS5ldGhBZGRyZXNzKTtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5vcmNoZXN0cmF0b3JBZGRyZXNzID0gbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlPlxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmV0aEFkZHJlc3MgPSBvYmplY3QuZXRoQWRkcmVzcyA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yQWRkcmVzcyA9IG9iamVjdC5vcmNoZXN0cmF0b3JBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3MoKTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3Mge1xuICByZXR1cm4ge1xuICAgIGV0aEFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZXRoQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZXRoQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3MoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmV0aEFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV0aEFkZHJlc3M6IGlzU2V0KG9iamVjdC5ldGhBZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuZXRoQWRkcmVzcykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmV0aEFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmV0aEFkZHJlc3MgPSBtZXNzYWdlLmV0aEFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzPlxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcygpO1xuICAgIG1lc3NhZ2UuZXRoQWRkcmVzcyA9IG9iamVjdC5ldGhBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSgpOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICB2YWxpZGF0b3JBZGRyZXNzOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvckFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkYXRvckFkZHJlc3M6IGlzU2V0KG9iamVjdC52YWxpZGF0b3JBZGRyZXNzKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QudmFsaWRhdG9yQWRkcmVzcylcbiAgICAgICAgOiBcIlwiLFxuICAgICAgb3JjaGVzdHJhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yQWRkcmVzcyA9IG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyk7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yQWRkcmVzcyA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yQWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZT5cbiAgKTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzID0gb2JqZWN0LnZhbGlkYXRvckFkZHJlc3MgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgPSBvYmplY3Qub3JjaGVzdHJhdG9yQWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzKCk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzIHtcbiAgcmV0dXJuIHtcbiAgICBvcmNoZXN0cmF0b3JBZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3MgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3Mge1xuICAgIHJldHVybiB7XG4gICAgICBvcmNoZXN0cmF0b3JBZGRyZXNzOiBpc1NldChvYmplY3Qub3JjaGVzdHJhdG9yQWRkcmVzcylcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzcyk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yQWRkcmVzcyA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yQWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3M+XG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzKCk7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gb2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlKCk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbGlkYXRvckFkZHJlc3M6IFwiXCIsXG4gICAgZXRoQWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXRoQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZXRoQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV0aEFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0LnZhbGlkYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBldGhBZGRyZXNzOiBpc1NldChvYmplY3QuZXRoQWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmV0aEFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxpZGF0b3JBZGRyZXNzID0gbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzKTtcbiAgICBtZXNzYWdlLmV0aEFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmV0aEFkZHJlc3MgPSBtZXNzYWdlLmV0aEFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IG9iamVjdC52YWxpZGF0b3JBZGRyZXNzID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ldGhBZGRyZXNzID0gb2JqZWN0LmV0aEFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGgoKTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoIHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kZXJBZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlQZW5kaW5nU2VuZFRvRXRoID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbmRlckFkZHJlc3M6IGlzU2V0KG9iamVjdC5zZW5kZXJBZGRyZXNzKVxuICAgICAgICA/IFN0cmluZyhvYmplY3Quc2VuZGVyQWRkcmVzcylcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXJBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouc2VuZGVyQWRkcmVzcyA9IG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8UXVlcnlQZW5kaW5nU2VuZFRvRXRoPik6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGgoKTtcbiAgICBtZXNzYWdlLnNlbmRlckFkZHJlc3MgPSBvYmplY3Quc2VuZGVyQWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlKCk6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2ZlcnNJbkJhdGNoZXM6IFtdLFxuICAgIHVuYmF0Y2hlZFRyYW5zZmVyczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UudHJhbnNmZXJzSW5CYXRjaGVzKSB7XG4gICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnVuYmF0Y2hlZFRyYW5zZmVycykge1xuICAgICAgT3V0Z29pbmdUcmFuc2ZlclR4LmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudHJhbnNmZXJzSW5CYXRjaGVzLnB1c2goXG4gICAgICAgICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UudW5iYXRjaGVkVHJhbnNmZXJzLnB1c2goXG4gICAgICAgICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZmVyc0luQmF0Y2hlczogQXJyYXkuaXNBcnJheShvYmplY3Q/LnRyYW5zZmVyc0luQmF0Y2hlcylcbiAgICAgICAgPyBvYmplY3QudHJhbnNmZXJzSW5CYXRjaGVzLm1hcCgoZTogYW55KSA9PlxuICAgICAgICAgICAgT3V0Z29pbmdUcmFuc2ZlclR4LmZyb21KU09OKGUpXG4gICAgICAgICAgKVxuICAgICAgICA6IFtdLFxuICAgICAgdW5iYXRjaGVkVHJhbnNmZXJzOiBBcnJheS5pc0FycmF5KG9iamVjdD8udW5iYXRjaGVkVHJhbnNmZXJzKVxuICAgICAgICA/IG9iamVjdC51bmJhdGNoZWRUcmFuc2ZlcnMubWFwKChlOiBhbnkpID0+XG4gICAgICAgICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZnJvbUpTT04oZSlcbiAgICAgICAgICApXG4gICAgICAgIDogW10sXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuXG4gICAgaWYgKG1lc3NhZ2UudHJhbnNmZXJzSW5CYXRjaGVzKSB7XG4gICAgICBvYmoudHJhbnNmZXJzSW5CYXRjaGVzID0gbWVzc2FnZS50cmFuc2ZlcnNJbkJhdGNoZXMubWFwKChlKSA9PlxuICAgICAgICBlID8gT3V0Z29pbmdUcmFuc2ZlclR4LnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnRyYW5zZmVyc0luQmF0Y2hlcyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnVuYmF0Y2hlZFRyYW5zZmVycykge1xuICAgICAgb2JqLnVuYmF0Y2hlZFRyYW5zZmVycyA9IG1lc3NhZ2UudW5iYXRjaGVkVHJhbnNmZXJzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IE91dGdvaW5nVHJhbnNmZXJUeC50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai51bmJhdGNoZWRUcmFuc2ZlcnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZT5cbiAgKTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnRyYW5zZmVyc0luQmF0Y2hlcyA9XG4gICAgICBvYmplY3QudHJhbnNmZXJzSW5CYXRjaGVzPy5tYXAoKGUpID0+XG4gICAgICAgIE91dGdvaW5nVHJhbnNmZXJUeC5mcm9tUGFydGlhbChlKVxuICAgICAgKSB8fCBbXTtcbiAgICBtZXNzYWdlLnVuYmF0Y2hlZFRyYW5zZmVycyA9XG4gICAgICBvYmplY3QudW5iYXRjaGVkVHJhbnNmZXJzPy5tYXAoKGUpID0+XG4gICAgICAgIE91dGdvaW5nVHJhbnNmZXJUeC5mcm9tUGFydGlhbChlKVxuICAgICAgKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMoKTogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzIHtcbiAgcmV0dXJuIHtcbiAgICBsaW1pdDogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UubGltaXQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5saW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubGltaXQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMge1xuICAgIHJldHVybiB7XG4gICAgICBsaW1pdDogaXNTZXQob2JqZWN0LmxpbWl0KSA/IEJpZ0ludChvYmplY3QubGltaXQpIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5saW1pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmxpbWl0ID0gKG1lc3NhZ2UubGltaXQgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHM+XG4gICk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMoKTtcbiAgICBtZXNzYWdlLmxpbWl0ID1cbiAgICAgIG9iamVjdC5saW1pdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5saW1pdCAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QubGltaXQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBwZW5kaW5nSWJjQXV0b0ZvcndhcmRzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzKSB7XG4gICAgICBQZW5kaW5nSWJjQXV0b0ZvcndhcmQuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzLnB1c2goXG4gICAgICAgICAgICBQZW5kaW5nSWJjQXV0b0ZvcndhcmQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBlbmRpbmdJYmNBdXRvRm9yd2FyZHM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzKVxuICAgICAgICA/IG9iamVjdC5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzLm1hcCgoZTogYW55KSA9PlxuICAgICAgICAgICAgUGVuZGluZ0liY0F1dG9Gb3J3YXJkLmZyb21KU09OKGUpXG4gICAgICAgICAgKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLnBlbmRpbmdJYmNBdXRvRm9yd2FyZHMpIHtcbiAgICAgIG9iai5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzID0gbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IFBlbmRpbmdJYmNBdXRvRm9yd2FyZC50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzID1cbiAgICAgIG9iamVjdC5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzPy5tYXAoKGUpID0+XG4gICAgICAgIFBlbmRpbmdJYmNBdXRvRm9yd2FyZC5mcm9tUGFydGlhbChlKVxuICAgICAgKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG4vKiogUXVlcnkgZGVmaW5lcyB0aGUgZ1JQQyBxdWVyaWVyIHNlcnZpY2UgKi9cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIC8qKiBEZXBsb3ltZW50cyBxdWVyaWVzIGRlcGxveW1lbnRzICovXG4gIFBhcmFtcyhyZXF1ZXN0PzogUXVlcnlQYXJhbXNSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeVBhcmFtc1Jlc3BvbnNlPjtcbiAgQ3VycmVudFZhbHNldChcbiAgICByZXF1ZXN0PzogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5Q3VycmVudFZhbHNldFJlc3BvbnNlPjtcbiAgVmFsc2V0UmVxdWVzdChcbiAgICByZXF1ZXN0OiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2U+O1xuICBWYWxzZXRDb25maXJtKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeVZhbHNldENvbmZpcm1SZXNwb25zZT47XG4gIFZhbHNldENvbmZpcm1zQnlOb25jZShcbiAgICByZXF1ZXN0OiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlPjtcbiAgTGFzdFZhbHNldFJlcXVlc3RzKFxuICAgIHJlcXVlc3Q/OiBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlPjtcbiAgTGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2U+O1xuICBMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZT47XG4gIExhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlPjtcbiAgTGFzdEV2ZW50Tm9uY2VCeUFkZHIoXG4gICAgcmVxdWVzdDogUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2U+O1xuICBCYXRjaEZlZXMocmVxdWVzdD86IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUJhdGNoRmVlUmVzcG9uc2U+O1xuICBPdXRnb2luZ1R4QmF0Y2hlcyhcbiAgICByZXF1ZXN0PzogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2U+O1xuICBPdXRnb2luZ0xvZ2ljQ2FsbHMoXG4gICAgcmVxdWVzdD86IFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVzcG9uc2U+O1xuICBCYXRjaFJlcXVlc3RCeU5vbmNlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZT47XG4gIEJhdGNoQ29uZmlybXMoXG4gICAgcmVxdWVzdDogUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlPjtcbiAgTG9naWNDb25maXJtcyhcbiAgICByZXF1ZXN0OiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2U+O1xuICBFUkMyMFRvRGVub20oXG4gICAgcmVxdWVzdDogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlFUkMyMFRvRGVub21SZXNwb25zZT47XG4gIERlbm9tVG9FUkMyMChcbiAgICByZXF1ZXN0OiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlPjtcbiAgR2V0TGFzdE9ic2VydmVkRXRoQmxvY2soXG4gICAgcmVxdWVzdDogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2U+O1xuICBHZXRMYXN0T2JzZXJ2ZWRFdGhOb25jZShcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZT47XG4gIEdldEF0dGVzdGF0aW9ucyhcbiAgICByZXF1ZXN0OiBRdWVyeUF0dGVzdGF0aW9uc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlPjtcbiAgR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvcihcbiAgICByZXF1ZXN0OiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1xuICApOiBQcm9taXNlPFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2U+O1xuICBHZXREZWxlZ2F0ZUtleUJ5RXRoKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzXG4gICk6IFByb21pc2U8UXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZT47XG4gIEdldERlbGVnYXRlS2V5QnlPcmNoZXN0cmF0b3IoXG4gICAgcmVxdWVzdDogUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3NcbiAgKTogUHJvbWlzZTxRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlPjtcbiAgR2V0UGVuZGluZ1NlbmRUb0V0aChcbiAgICByZXF1ZXN0OiBRdWVyeVBlbmRpbmdTZW5kVG9FdGhcbiAgKTogUHJvbWlzZTxRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZT47XG4gIEdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHMoXG4gICAgcmVxdWVzdDogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzXG4gICk6IFByb21pc2U8UXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2U+O1xufVxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q2xpZW50SW1wbCBpbXBsZW1lbnRzIFF1ZXJ5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBycGM6IFJwYztcblxuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICAgIHRoaXMuUGFyYW1zID0gdGhpcy5QYXJhbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLkN1cnJlbnRWYWxzZXQgPSB0aGlzLkN1cnJlbnRWYWxzZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLlZhbHNldFJlcXVlc3QgPSB0aGlzLlZhbHNldFJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLlZhbHNldENvbmZpcm0gPSB0aGlzLlZhbHNldENvbmZpcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLlZhbHNldENvbmZpcm1zQnlOb25jZSA9IHRoaXMuVmFsc2V0Q29uZmlybXNCeU5vbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0VmFsc2V0UmVxdWVzdHMgPSB0aGlzLkxhc3RWYWxzZXRSZXF1ZXN0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuTGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyID1cbiAgICAgIHRoaXMuTGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkciA9XG4gICAgICB0aGlzLkxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkciA9XG4gICAgICB0aGlzLkxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0RXZlbnROb25jZUJ5QWRkciA9IHRoaXMuTGFzdEV2ZW50Tm9uY2VCeUFkZHIuYmluZCh0aGlzKTtcbiAgICB0aGlzLkJhdGNoRmVlcyA9IHRoaXMuQmF0Y2hGZWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5PdXRnb2luZ1R4QmF0Y2hlcyA9IHRoaXMuT3V0Z29pbmdUeEJhdGNoZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLk91dGdvaW5nTG9naWNDYWxscyA9IHRoaXMuT3V0Z29pbmdMb2dpY0NhbGxzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5CYXRjaFJlcXVlc3RCeU5vbmNlID0gdGhpcy5CYXRjaFJlcXVlc3RCeU5vbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5CYXRjaENvbmZpcm1zID0gdGhpcy5CYXRjaENvbmZpcm1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5Mb2dpY0NvbmZpcm1zID0gdGhpcy5Mb2dpY0NvbmZpcm1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5FUkMyMFRvRGVub20gPSB0aGlzLkVSQzIwVG9EZW5vbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuRGVub21Ub0VSQzIwID0gdGhpcy5EZW5vbVRvRVJDMjAuYmluZCh0aGlzKTtcbiAgICB0aGlzLkdldExhc3RPYnNlcnZlZEV0aEJsb2NrID0gdGhpcy5HZXRMYXN0T2JzZXJ2ZWRFdGhCbG9jay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0TGFzdE9ic2VydmVkRXRoTm9uY2UgPSB0aGlzLkdldExhc3RPYnNlcnZlZEV0aE5vbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5HZXRBdHRlc3RhdGlvbnMgPSB0aGlzLkdldEF0dGVzdGF0aW9ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvciA9IHRoaXMuR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0RGVsZWdhdGVLZXlCeUV0aCA9IHRoaXMuR2V0RGVsZWdhdGVLZXlCeUV0aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0RGVsZWdhdGVLZXlCeU9yY2hlc3RyYXRvciA9XG4gICAgICB0aGlzLkdldERlbGVnYXRlS2V5QnlPcmNoZXN0cmF0b3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLkdldFBlbmRpbmdTZW5kVG9FdGggPSB0aGlzLkdldFBlbmRpbmdTZW5kVG9FdGguYmluZCh0aGlzKTtcbiAgICB0aGlzLkdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHMgPSB0aGlzLkdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFBhcmFtcyhyZXF1ZXN0OiBRdWVyeVBhcmFtc1JlcXVlc3QgPSB7fSk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBhcmFtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwiZ3Jhdml0eS52MS5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlQYXJhbXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQ3VycmVudFZhbHNldChcbiAgICByZXF1ZXN0OiBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0ID0ge31cbiAgKTogUHJvbWlzZTxRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJDdXJyZW50VmFsc2V0XCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgVmFsc2V0UmVxdWVzdChcbiAgICByZXF1ZXN0OiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXCJncmF2aXR5LnYxLlF1ZXJ5XCIsIFwiVmFsc2V0UmVxdWVzdFwiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIFZhbHNldENvbmZpcm0oXG4gICAgcmVxdWVzdDogUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwiZ3Jhdml0eS52MS5RdWVyeVwiLCBcIlZhbHNldENvbmZpcm1cIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBWYWxzZXRDb25maXJtc0J5Tm9uY2UoXG4gICAgcmVxdWVzdDogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIlZhbHNldENvbmZpcm1zQnlOb25jZVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIExhc3RWYWxzZXRSZXF1ZXN0cyhcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1JlcXVlc3QgPSB7fVxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJMYXN0VmFsc2V0UmVxdWVzdHNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHIoXG4gICAgcmVxdWVzdDogUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0RXZlbnROb25jZUJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiTGFzdEV2ZW50Tm9uY2VCeUFkZHJcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEJhdGNoRmVlcyhcbiAgICByZXF1ZXN0OiBRdWVyeUJhdGNoRmVlUmVxdWVzdCA9IHt9XG4gICk6IFByb21pc2U8UXVlcnlCYXRjaEZlZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJCYXRjaEZlZXNcIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgT3V0Z29pbmdUeEJhdGNoZXMoXG4gICAgcmVxdWVzdDogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QgPSB7fVxuICApOiBQcm9taXNlPFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiT3V0Z29pbmdUeEJhdGNoZXNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIE91dGdvaW5nTG9naWNDYWxscyhcbiAgICByZXF1ZXN0OiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3QgPSB7fVxuICApOiBQcm9taXNlPFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJPdXRnb2luZ0xvZ2ljQ2FsbHNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBCYXRjaFJlcXVlc3RCeU5vbmNlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJCYXRjaFJlcXVlc3RCeU5vbmNlXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEJhdGNoQ29uZmlybXMoXG4gICAgcmVxdWVzdDogUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwiZ3Jhdml0eS52MS5RdWVyeVwiLCBcIkJhdGNoQ29uZmlybXNcIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMb2dpY0NvbmZpcm1zKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJMb2dpY0NvbmZpcm1zXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgRVJDMjBUb0Rlbm9tKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJFUkMyMFRvRGVub21cIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIERlbm9tVG9FUkMyMChcbiAgICByZXF1ZXN0OiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXCJncmF2aXR5LnYxLlF1ZXJ5XCIsIFwiRGVub21Ub0VSQzIwXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBHZXRMYXN0T2JzZXJ2ZWRFdGhCbG9jayhcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiR2V0TGFzdE9ic2VydmVkRXRoQmxvY2tcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEdldExhc3RPYnNlcnZlZEV0aE5vbmNlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXRMYXN0T2JzZXJ2ZWRFdGhOb25jZVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgR2V0QXR0ZXN0YXRpb25zKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXRBdHRlc3RhdGlvbnNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBHZXREZWxlZ2F0ZUtleUJ5VmFsaWRhdG9yKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzXG4gICk6IFByb21pc2U8UXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcy5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvclwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEdldERlbGVnYXRlS2V5QnlFdGgoXG4gICAgcmVxdWVzdDogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NcbiAgKTogUHJvbWlzZTxRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXREZWxlZ2F0ZUtleUJ5RXRoXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgR2V0RGVsZWdhdGVLZXlCeU9yY2hlc3RyYXRvcihcbiAgICByZXF1ZXN0OiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1xuICApOiBQcm9taXNlPFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID1cbiAgICAgIFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXREZWxlZ2F0ZUtleUJ5T3JjaGVzdHJhdG9yXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZS5kZWNvZGUoXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoZGF0YSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgR2V0UGVuZGluZ1NlbmRUb0V0aChcbiAgICByZXF1ZXN0OiBRdWVyeVBlbmRpbmdTZW5kVG9FdGhcbiAgKTogUHJvbWlzZTxRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBlbmRpbmdTZW5kVG9FdGguZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkdldFBlbmRpbmdTZW5kVG9FdGhcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgR2V0UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyhcbiAgICByZXF1ZXN0OiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNcbiAgKTogUHJvbWlzZTxRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0IiwiUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSIsIlF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3QiLCJRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSIsIlF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0IiwiUXVlcnlCYXRjaEZlZVJlc3BvbnNlIiwiUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCIsIlF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlIiwiUXVlcnlDbGllbnRJbXBsIiwiUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCIsIlF1ZXJ5Q3VycmVudFZhbHNldFJlc3BvbnNlIiwiUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3MiLCJRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlIiwiUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3MiLCJRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlIiwiUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3MiLCJRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIiwiUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0IiwiUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSIsIlF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdCIsIlF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UiLCJRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCIsIlF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSIsIlF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0IiwiUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlIiwiUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QiLCJRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVzcG9uc2UiLCJRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCIsIlF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSIsIlF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0IiwiUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlIiwiUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0IiwiUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSIsIlF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCIsIlF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2UiLCJRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0IiwiUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UiLCJRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3QiLCJRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlIiwiUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QiLCJRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UiLCJRdWVyeVBhcmFtc1JlcXVlc3QiLCJRdWVyeVBhcmFtc1Jlc3BvbnNlIiwiUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzIiwiUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2UiLCJRdWVyeVBlbmRpbmdTZW5kVG9FdGgiLCJRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSIsIlF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3QiLCJRdWVyeVZhbHNldENvbmZpcm1SZXNwb25zZSIsIlF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCIsIlF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UiLCJRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0IiwiUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UiLCJwcm90b2J1ZlBhY2thZ2UiLCJjcmVhdGVCYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IiwiZW5jb2RlIiwiXyIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwibWVzc2FnZSIsInRhZyIsInVpbnQzMiIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCIsImNyZWF0ZUJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIiwicGFyYW1zIiwiUGFyYW1zIiwiZm9yayIsImxkZWxpbSIsIm9iamVjdCIsImlzU2V0IiwiY3JlYXRlQmFzZVF1ZXJ5Q3VycmVudFZhbHNldFJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UiLCJ2YWxzZXQiLCJWYWxzZXQiLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdCIsIm5vbmNlIiwiQmlnSW50IiwidWludDY0IiwidG9TdHJpbmciLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdCIsImFkZHJlc3MiLCJzdHJpbmciLCJTdHJpbmciLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2UiLCJjb25maXJtIiwiTXNnVmFsc2V0Q29uZmlybSIsImNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZSIsImNvbmZpcm1zIiwidiIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJlIiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlIiwidmFsc2V0cyIsImNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeUJhdGNoRmVlUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeUJhdGNoRmVlUmVzcG9uc2UiLCJiYXRjaEZlZXMiLCJCYXRjaEZlZXMiLCJjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlIiwiYmF0Y2giLCJPdXRnb2luZ1R4QmF0Y2giLCJjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlIiwiY2FsbCIsIk91dGdvaW5nTG9naWNDYWxsIiwiY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZSIsImJhdGNoZXMiLCJjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVzcG9uc2UiLCJjYWxscyIsImNyZWF0ZUJhc2VRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0IiwiY29udHJhY3RBZGRyZXNzIiwiY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UiLCJNc2dDb25maXJtQmF0Y2giLCJjcmVhdGVCYXNlUXVlcnlMb2dpY0NvbmZpcm1zUmVxdWVzdCIsImludmFsaWRhdGlvbklkIiwiVWludDhBcnJheSIsImludmFsaWRhdGlvbk5vbmNlIiwiYnl0ZXMiLCJieXRlc0Zyb21CYXNlNjQiLCJiYXNlNjRGcm9tQnl0ZXMiLCJjcmVhdGVCYXNlUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UiLCJNc2dDb25maXJtTG9naWNDYWxsIiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSIsImV2ZW50Tm9uY2UiLCJjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0IiwiZXJjMjAiLCJjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSIsImRlbm9tIiwiY29zbW9zT3JpZ2luYXRlZCIsImJvb2wiLCJCb29sZWFuIiwiY3JlYXRlQmFzZVF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0IiwidXNlVjFLZXkiLCJjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlIiwiYmxvY2siLCJjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCIsImxpbWl0Iiwib3JkZXJCeSIsImNsYWltVHlwZSIsImhlaWdodCIsImNyZWF0ZUJhc2VRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlIiwiYXR0ZXN0YXRpb25zIiwiQXR0ZXN0YXRpb24iLCJjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3MiLCJ2YWxpZGF0b3JBZGRyZXNzIiwiY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2UiLCJldGhBZGRyZXNzIiwib3JjaGVzdHJhdG9yQWRkcmVzcyIsImNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcyIsImNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzIiwiY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlQZW5kaW5nU2VuZFRvRXRoIiwic2VuZGVyQWRkcmVzcyIsImNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSIsInRyYW5zZmVyc0luQmF0Y2hlcyIsInVuYmF0Y2hlZFRyYW5zZmVycyIsIk91dGdvaW5nVHJhbnNmZXJUeCIsImNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMiLCJjcmVhdGVCYXNlUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2UiLCJwZW5kaW5nSWJjQXV0b0ZvcndhcmRzIiwiUGVuZGluZ0liY0F1dG9Gb3J3YXJkIiwicmVxdWVzdCIsImRhdGEiLCJmaW5pc2giLCJwcm9taXNlIiwicnBjIiwidGhlbiIsIkN1cnJlbnRWYWxzZXQiLCJWYWxzZXRSZXF1ZXN0IiwiVmFsc2V0Q29uZmlybSIsIlZhbHNldENvbmZpcm1zQnlOb25jZSIsIkxhc3RWYWxzZXRSZXF1ZXN0cyIsIkxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkciIsIkxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyIiwiTGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHIiLCJMYXN0RXZlbnROb25jZUJ5QWRkciIsIk91dGdvaW5nVHhCYXRjaGVzIiwiT3V0Z29pbmdMb2dpY0NhbGxzIiwiQmF0Y2hSZXF1ZXN0QnlOb25jZSIsIkJhdGNoQ29uZmlybXMiLCJMb2dpY0NvbmZpcm1zIiwiRVJDMjBUb0Rlbm9tIiwiRGVub21Ub0VSQzIwIiwiR2V0TGFzdE9ic2VydmVkRXRoQmxvY2siLCJHZXRMYXN0T2JzZXJ2ZWRFdGhOb25jZSIsIkdldEF0dGVzdGF0aW9ucyIsIkdldERlbGVnYXRlS2V5QnlWYWxpZGF0b3IiLCJHZXREZWxlZ2F0ZUtleUJ5RXRoIiwiR2V0RGVsZWdhdGVLZXlCeU9yY2hlc3RyYXRvciIsIkdldFBlbmRpbmdTZW5kVG9FdGgiLCJHZXRQZW5kaW5nSWJjQXV0b0ZvcndhcmRzIiwiY29uc3RydWN0b3IiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7O0lBdTlGTEEsd0JBQXdCO2VBQXhCQTs7SUFvSUFDLHlCQUF5QjtlQUF6QkE7O0lBM29DQUMseUJBQXlCO2VBQXpCQTs7SUFtRkFDLDBCQUEwQjtlQUExQkE7O0lBdDRCQUMsb0JBQW9CO2VBQXBCQTs7SUFtREFDLHFCQUFxQjtlQUFyQkE7O0lBbW1CQUMsK0JBQStCO2VBQS9CQTs7SUFtRkFDLGdDQUFnQztlQUFoQ0E7O0lBOG1FQUMsZUFBZTtlQUFmQTs7SUFucEhBQyx5QkFBeUI7ZUFBekJBOztJQXFEQUMsMEJBQTBCO2VBQTFCQTs7SUF1NkZBQyw2QkFBNkI7ZUFBN0JBOztJQWtFQUMscUNBQXFDO2VBQXJDQTs7SUFrRkFDLHNDQUFzQztlQUF0Q0E7O0lBcUVBQyw4Q0FBOEM7ZUFBOUNBOztJQTdXQUMsbUNBQW1DO2VBQW5DQTs7SUFxRUFDLDJDQUEyQztlQUEzQ0E7O0lBenJCQUMsd0JBQXdC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
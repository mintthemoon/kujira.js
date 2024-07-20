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
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Attestation } from "./attestation";
import { OutgoingLogicCall, OutgoingTransferTx, OutgoingTxBatch } from "./batch";
import { Params } from "./genesis";
import { base64FromBytes, bytesFromBase64, isSet } from "./helpers";
import { MsgConfirmBatch, MsgConfirmLogicCall, MsgValsetConfirm } from "./msgs";
import { BatchFees } from "./pool";
import { PendingIbcAutoForward, Valset } from "./types";
export const protobufPackage = "gravity.v1";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryParamsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
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
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
export const QueryCurrentValsetRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryCurrentValsetResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
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
            valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
        return message;
    }
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: BigInt(0)
    };
}
export const QueryValsetRequestRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0)
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
export const QueryValsetRequestResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valset = Valset.decode(reader, reader.uint32());
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
            valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
        return message;
    }
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: BigInt(0),
        address: ""
    };
}
export const QueryValsetConfirmRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            address: isSet(object.address) ? String(object.address) : ""
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
export const QueryValsetConfirmResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.confirm !== undefined) {
            MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
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
            confirm: isSet(object.confirm) ? MsgValsetConfirm.fromJSON(object.confirm) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.confirm !== undefined && (obj.confirm = message.confirm ? MsgValsetConfirm.toJSON(message.confirm) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm = object.confirm !== undefined && object.confirm !== null ? MsgValsetConfirm.fromPartial(object.confirm) : undefined;
        return message;
    }
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: BigInt(0)
    };
}
export const QueryValsetConfirmsByNonceRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0)
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
export const QueryValsetConfirmsByNonceResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.confirms){
            MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e)=>MsgValsetConfirm.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e)=>e ? MsgValsetConfirm.toJSON(e) : undefined);
        } else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_confirms;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = ((_object_confirms = object.confirms) === null || _object_confirms === void 0 ? void 0 : _object_confirms.map((e)=>MsgValsetConfirm.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
export const QueryLastValsetRequestsRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryLastValsetRequestsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.valsets){
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e)=>Valset.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e)=>e ? Valset.toJSON(e) : undefined);
        } else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_valsets;
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = ((_object_valsets = object.valsets) === null || _object_valsets === void 0 ? void 0 : _object_valsets.map((e)=>Valset.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : ""
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
export const QueryLastPendingValsetRequestByAddrResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.valsets){
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
            valsets: Array.isArray(object === null || object === void 0 ? void 0 : object.valsets) ? object.valsets.map((e)=>Valset.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map((e)=>e ? Valset.toJSON(e) : undefined);
        } else {
            obj.valsets = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_valsets;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = ((_object_valsets = object.valsets) === null || _object_valsets === void 0 ? void 0 : _object_valsets.map((e)=>Valset.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
export const QueryBatchFeeRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryBatchFeeResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.batchFees){
            BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
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
            batchFees: Array.isArray(object === null || object === void 0 ? void 0 : object.batchFees) ? object.batchFees.map((e)=>BatchFees.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.batchFees) {
            obj.batchFees = message.batchFees.map((e)=>e ? BatchFees.toJSON(e) : undefined);
        } else {
            obj.batchFees = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_batchFees;
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = ((_object_batchFees = object.batchFees) === null || _object_batchFees === void 0 ? void 0 : _object_batchFees.map((e)=>BatchFees.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : ""
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
export const QueryLastPendingBatchRequestByAddrResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.batch){
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batch.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
            batch: Array.isArray(object === null || object === void 0 ? void 0 : object.batch) ? object.batch.map((e)=>OutgoingTxBatch.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.batch) {
            obj.batch = message.batch.map((e)=>e ? OutgoingTxBatch.toJSON(e) : undefined);
        } else {
            obj.batch = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_batch;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        message.batch = ((_object_batch = object.batch) === null || _object_batch === void 0 ? void 0 : _object_batch.map((e)=>OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastPendingLogicCallByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingLogicCallByAddrRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : ""
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
export const QueryLastPendingLogicCallByAddrResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.call){
            OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.call.push(OutgoingLogicCall.decode(reader, reader.uint32()));
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
            call: Array.isArray(object === null || object === void 0 ? void 0 : object.call) ? object.call.map((e)=>OutgoingLogicCall.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.call) {
            obj.call = message.call.map((e)=>e ? OutgoingLogicCall.toJSON(e) : undefined);
        } else {
            obj.call = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_call;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        message.call = ((_object_call = object.call) === null || _object_call === void 0 ? void 0 : _object_call.map((e)=>OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
export const QueryOutgoingTxBatchesRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryOutgoingTxBatchesResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.batches){
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
            batches: Array.isArray(object === null || object === void 0 ? void 0 : object.batches) ? object.batches.map((e)=>OutgoingTxBatch.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map((e)=>e ? OutgoingTxBatch.toJSON(e) : undefined);
        } else {
            obj.batches = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_batches;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = ((_object_batches = object.batches) === null || _object_batches === void 0 ? void 0 : _object_batches.map((e)=>OutgoingTxBatch.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryOutgoingLogicCallsRequest() {
    return {};
}
export const QueryOutgoingLogicCallsRequest = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
export const QueryOutgoingLogicCallsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.calls){
            OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.calls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
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
            calls: Array.isArray(object === null || object === void 0 ? void 0 : object.calls) ? object.calls.map((e)=>OutgoingLogicCall.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.calls) {
            obj.calls = message.calls.map((e)=>e ? OutgoingLogicCall.toJSON(e) : undefined);
        } else {
            obj.calls = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_calls;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        message.calls = ((_object_calls = object.calls) === null || _object_calls === void 0 ? void 0 : _object_calls.map((e)=>OutgoingLogicCall.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
export const QueryBatchRequestByNonceRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
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
export const QueryBatchRequestByNonceResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
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
            batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.batch !== undefined && (obj.batch = message.batch ? OutgoingTxBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    }
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: BigInt(0),
        contractAddress: ""
    };
}
export const QueryBatchConfirmsRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
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
export const QueryBatchConfirmsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.confirms){
            MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e)=>MsgConfirmBatch.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e)=>e ? MsgConfirmBatch.toJSON(e) : undefined);
        } else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_confirms;
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = ((_object_confirms = object.confirms) === null || _object_confirms === void 0 ? void 0 : _object_confirms.map((e)=>MsgConfirmBatch.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLogicConfirmsRequest() {
    return {
        invalidationId: new Uint8Array(),
        invalidationNonce: BigInt(0)
    };
}
export const QueryLogicConfirmsRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.invalidationId.length !== 0) {
            writer.uint32(10).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
            invalidationNonce: isSet(object.invalidationNonce) ? BigInt(object.invalidationNonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.invalidationId !== undefined && (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined ? message.invalidationId : new Uint8Array()));
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
export const QueryLogicConfirmsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.confirms){
            MsgConfirmLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.confirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
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
            confirms: Array.isArray(object === null || object === void 0 ? void 0 : object.confirms) ? object.confirms.map((e)=>MsgConfirmLogicCall.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map((e)=>e ? MsgConfirmLogicCall.toJSON(e) : undefined);
        } else {
            obj.confirms = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_confirms;
        const message = createBaseQueryLogicConfirmsResponse();
        message.confirms = ((_object_confirms = object.confirms) === null || _object_confirms === void 0 ? void 0 : _object_confirms.map((e)=>MsgConfirmLogicCall.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryLastEventNonceByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastEventNonceByAddrRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : ""
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
export const QueryLastEventNonceByAddrResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            eventNonce: isSet(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0)
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
export const QueryERC20ToDenomRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            erc20: isSet(object.erc20) ? String(object.erc20) : ""
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
export const QueryERC20ToDenomResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
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
export const QueryDenomToERC20Request = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            denom: isSet(object.denom) ? String(object.denom) : ""
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
export const QueryDenomToERC20Response = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            erc20: isSet(object.erc20) ? String(object.erc20) : "",
            cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
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
export const QueryLastObservedEthBlockRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
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
export const QueryLastObservedEthBlockResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.block !== BigInt(0)) {
            writer.uint32(8).uint64(message.block);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            block: isSet(object.block) ? BigInt(object.block) : BigInt(0)
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
export const QueryLastObservedEthNonceRequest = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.useV1Key === true) {
            writer.uint32(8).bool(message.useV1Key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
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
export const QueryLastObservedEthNonceResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0)
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
export const QueryAttestationsRequest = {
    encode (message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            limit: isSet(object.limit) ? BigInt(object.limit) : BigInt(0),
            orderBy: isSet(object.orderBy) ? String(object.orderBy) : "",
            claimType: isSet(object.claimType) ? String(object.claimType) : "",
            nonce: isSet(object.nonce) ? BigInt(object.nonce) : BigInt(0),
            height: isSet(object.height) ? BigInt(object.height) : BigInt(0),
            useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
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
export const QueryAttestationsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.attestations){
            Attestation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.attestations.push(Attestation.decode(reader, reader.uint32()));
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
            attestations: Array.isArray(object === null || object === void 0 ? void 0 : object.attestations) ? object.attestations.map((e)=>Attestation.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map((e)=>e ? Attestation.toJSON(e) : undefined);
        } else {
            obj.attestations = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_attestations;
        const message = createBaseQueryAttestationsResponse();
        message.attestations = ((_object_attestations = object.attestations) === null || _object_attestations === void 0 ? void 0 : _object_attestations.map((e)=>Attestation.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: ""
    };
}
export const QueryDelegateKeysByValidatorAddress = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
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
export const QueryDelegateKeysByValidatorAddressResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
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
export const QueryDelegateKeysByEthAddress = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : ""
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
export const QueryDelegateKeysByEthAddressResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
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
export const QueryDelegateKeysByOrchestratorAddress = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
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
export const QueryDelegateKeysByOrchestratorAddressResponse = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : ""
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
export const QueryPendingSendToEth = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : ""
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
export const QueryPendingSendToEthResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.transfersInBatches){
            OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers){
            OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
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
            transfersInBatches: Array.isArray(object === null || object === void 0 ? void 0 : object.transfersInBatches) ? object.transfersInBatches.map((e)=>OutgoingTransferTx.fromJSON(e)) : [],
            unbatchedTransfers: Array.isArray(object === null || object === void 0 ? void 0 : object.unbatchedTransfers) ? object.unbatchedTransfers.map((e)=>OutgoingTransferTx.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfersInBatches = message.transfersInBatches.map((e)=>e ? OutgoingTransferTx.toJSON(e) : undefined);
        } else {
            obj.transfersInBatches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatchedTransfers = message.unbatchedTransfers.map((e)=>e ? OutgoingTransferTx.toJSON(e) : undefined);
        } else {
            obj.unbatchedTransfers = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_transfersInBatches, _object_unbatchedTransfers;
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = ((_object_transfersInBatches = object.transfersInBatches) === null || _object_transfersInBatches === void 0 ? void 0 : _object_transfersInBatches.map((e)=>OutgoingTransferTx.fromPartial(e))) || [];
        message.unbatchedTransfers = ((_object_unbatchedTransfers = object.unbatchedTransfers) === null || _object_unbatchedTransfers === void 0 ? void 0 : _object_unbatchedTransfers.map((e)=>OutgoingTransferTx.fromPartial(e))) || [];
        return message;
    }
};
function createBaseQueryPendingIbcAutoForwards() {
    return {
        limit: BigInt(0)
    };
}
export const QueryPendingIbcAutoForwards = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.limit !== BigInt(0)) {
            writer.uint32(8).uint64(message.limit);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            limit: isSet(object.limit) ? BigInt(object.limit) : BigInt(0)
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
export const QueryPendingIbcAutoForwardsResponse = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.pendingIbcAutoForwards){
            PendingIbcAutoForward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingIbcAutoForwardsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.pendingIbcAutoForwards.push(PendingIbcAutoForward.decode(reader, reader.uint32()));
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
            pendingIbcAutoForwards: Array.isArray(object === null || object === void 0 ? void 0 : object.pendingIbcAutoForwards) ? object.pendingIbcAutoForwards.map((e)=>PendingIbcAutoForward.fromJSON(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.pendingIbcAutoForwards) {
            obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map((e)=>e ? PendingIbcAutoForward.toJSON(e) : undefined);
        } else {
            obj.pendingIbcAutoForwards = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_pendingIbcAutoForwards;
        const message = createBaseQueryPendingIbcAutoForwardsResponse();
        message.pendingIbcAutoForwards = ((_object_pendingIbcAutoForwards = object.pendingIbcAutoForwards) === null || _object_pendingIbcAutoForwards === void 0 ? void 0 : _object_pendingIbcAutoForwards.map((e)=>PendingIbcAutoForward.fromPartial(e))) || [];
        return message;
    }
};
export class QueryClientImpl {
    Params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "Params", data);
        return promise.then((data)=>QueryParamsResponse.decode(new BinaryReader(data)));
    }
    CurrentValset(request = {}) {
        const data = QueryCurrentValsetRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "CurrentValset", data);
        return promise.then((data)=>QueryCurrentValsetResponse.decode(new BinaryReader(data)));
    }
    ValsetRequest(request) {
        const data = QueryValsetRequestRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetRequest", data);
        return promise.then((data)=>QueryValsetRequestResponse.decode(new BinaryReader(data)));
    }
    ValsetConfirm(request) {
        const data = QueryValsetConfirmRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirm", data);
        return promise.then((data)=>QueryValsetConfirmResponse.decode(new BinaryReader(data)));
    }
    ValsetConfirmsByNonce(request) {
        const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ValsetConfirmsByNonce", data);
        return promise.then((data)=>QueryValsetConfirmsByNonceResponse.decode(new BinaryReader(data)));
    }
    LastValsetRequests(request = {}) {
        const data = QueryLastValsetRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastValsetRequests", data);
        return promise.then((data)=>QueryLastValsetRequestsResponse.decode(new BinaryReader(data)));
    }
    LastPendingValsetRequestByAddr(request) {
        const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingValsetRequestByAddr", data);
        return promise.then((data)=>QueryLastPendingValsetRequestByAddrResponse.decode(new BinaryReader(data)));
    }
    LastPendingBatchRequestByAddr(request) {
        const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingBatchRequestByAddr", data);
        return promise.then((data)=>QueryLastPendingBatchRequestByAddrResponse.decode(new BinaryReader(data)));
    }
    LastPendingLogicCallByAddr(request) {
        const data = QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastPendingLogicCallByAddr", data);
        return promise.then((data)=>QueryLastPendingLogicCallByAddrResponse.decode(new BinaryReader(data)));
    }
    LastEventNonceByAddr(request) {
        const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LastEventNonceByAddr", data);
        return promise.then((data)=>QueryLastEventNonceByAddrResponse.decode(new BinaryReader(data)));
    }
    BatchFees(request = {}) {
        const data = QueryBatchFeeRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchFees", data);
        return promise.then((data)=>QueryBatchFeeResponse.decode(new BinaryReader(data)));
    }
    OutgoingTxBatches(request = {}) {
        const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingTxBatches", data);
        return promise.then((data)=>QueryOutgoingTxBatchesResponse.decode(new BinaryReader(data)));
    }
    OutgoingLogicCalls(request = {}) {
        const data = QueryOutgoingLogicCallsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "OutgoingLogicCalls", data);
        return promise.then((data)=>QueryOutgoingLogicCallsResponse.decode(new BinaryReader(data)));
    }
    BatchRequestByNonce(request) {
        const data = QueryBatchRequestByNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchRequestByNonce", data);
        return promise.then((data)=>QueryBatchRequestByNonceResponse.decode(new BinaryReader(data)));
    }
    BatchConfirms(request) {
        const data = QueryBatchConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "BatchConfirms", data);
        return promise.then((data)=>QueryBatchConfirmsResponse.decode(new BinaryReader(data)));
    }
    LogicConfirms(request) {
        const data = QueryLogicConfirmsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "LogicConfirms", data);
        return promise.then((data)=>QueryLogicConfirmsResponse.decode(new BinaryReader(data)));
    }
    ERC20ToDenom(request) {
        const data = QueryERC20ToDenomRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "ERC20ToDenom", data);
        return promise.then((data)=>QueryERC20ToDenomResponse.decode(new BinaryReader(data)));
    }
    DenomToERC20(request) {
        const data = QueryDenomToERC20Request.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "DenomToERC20", data);
        return promise.then((data)=>QueryDenomToERC20Response.decode(new BinaryReader(data)));
    }
    GetLastObservedEthBlock(request) {
        const data = QueryLastObservedEthBlockRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthBlock", data);
        return promise.then((data)=>QueryLastObservedEthBlockResponse.decode(new BinaryReader(data)));
    }
    GetLastObservedEthNonce(request) {
        const data = QueryLastObservedEthNonceRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetLastObservedEthNonce", data);
        return promise.then((data)=>QueryLastObservedEthNonceResponse.decode(new BinaryReader(data)));
    }
    GetAttestations(request) {
        const data = QueryAttestationsRequest.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetAttestations", data);
        return promise.then((data)=>QueryAttestationsResponse.decode(new BinaryReader(data)));
    }
    GetDelegateKeyByValidator(request) {
        const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByValidator", data);
        return promise.then((data)=>QueryDelegateKeysByValidatorAddressResponse.decode(new BinaryReader(data)));
    }
    GetDelegateKeyByEth(request) {
        const data = QueryDelegateKeysByEthAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByEth", data);
        return promise.then((data)=>QueryDelegateKeysByEthAddressResponse.decode(new BinaryReader(data)));
    }
    GetDelegateKeyByOrchestrator(request) {
        const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
        return promise.then((data)=>QueryDelegateKeysByOrchestratorAddressResponse.decode(new BinaryReader(data)));
    }
    GetPendingSendToEth(request) {
        const data = QueryPendingSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingSendToEth", data);
        return promise.then((data)=>QueryPendingSendToEthResponse.decode(new BinaryReader(data)));
    }
    GetPendingIbcAutoForwards(request) {
        const data = QueryPendingIbcAutoForwards.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Query", "GetPendingIbcAutoForwards", data);
        return promise.then((data)=>QueryPendingIbcAutoForwardsResponse.decode(new BinaryReader(data)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL3F1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBBdHRlc3RhdGlvbiB9IGZyb20gXCIuL2F0dGVzdGF0aW9uXCI7XG5pbXBvcnQge1xuICBPdXRnb2luZ0xvZ2ljQ2FsbCxcbiAgT3V0Z29pbmdUcmFuc2ZlclR4LFxuICBPdXRnb2luZ1R4QmF0Y2gsXG59IGZyb20gXCIuL2JhdGNoXCI7XG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwiLi9nZW5lc2lzXCI7XG5pbXBvcnQgeyBScGMsIGJhc2U2NEZyb21CeXRlcywgYnl0ZXNGcm9tQmFzZTY0LCBpc1NldCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IE1zZ0NvbmZpcm1CYXRjaCwgTXNnQ29uZmlybUxvZ2ljQ2FsbCwgTXNnVmFsc2V0Q29uZmlybSB9IGZyb20gXCIuL21zZ3NcIjtcbmltcG9ydCB7IEJhdGNoRmVlcyB9IGZyb20gXCIuL3Bvb2xcIjtcbmltcG9ydCB7IFBlbmRpbmdJYmNBdXRvRm9yd2FyZCwgVmFsc2V0IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImdyYXZpdHkudjFcIjtcbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXNSZXF1ZXN0IHt9XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICBwYXJhbXM/OiBQYXJhbXM7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5Q3VycmVudFZhbHNldFJlcXVlc3Qge31cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2Uge1xuICB2YWxzZXQ/OiBWYWxzZXQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Qge1xuICBub25jZTogYmlnaW50O1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSB7XG4gIHZhbHNldD86IFZhbHNldDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdCB7XG4gIG5vbmNlOiBiaWdpbnQ7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2Uge1xuICBjb25maXJtPzogTXNnVmFsc2V0Q29uZmlybTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0IHtcbiAgbm9uY2U6IGJpZ2ludDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZSB7XG4gIGNvbmZpcm1zOiBNc2dWYWxzZXRDb25maXJtW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCB7fVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlIHtcbiAgdmFsc2V0czogVmFsc2V0W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gIHZhbHNldHM6IFZhbHNldFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUJhdGNoRmVlUmVxdWVzdCB7fVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUJhdGNoRmVlUmVzcG9uc2Uge1xuICBiYXRjaEZlZXM6IEJhdGNoRmVlc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlIHtcbiAgYmF0Y2g6IE91dGdvaW5nVHhCYXRjaFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlIHtcbiAgY2FsbDogT3V0Z29pbmdMb2dpY0NhbGxbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3Qge31cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1Jlc3BvbnNlIHtcbiAgYmF0Y2hlczogT3V0Z29pbmdUeEJhdGNoW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdCB7fVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlIHtcbiAgY2FsbHM6IE91dGdvaW5nTG9naWNDYWxsW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3Qge1xuICBub25jZTogYmlnaW50O1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2Uge1xuICBiYXRjaD86IE91dGdvaW5nVHhCYXRjaDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCB7XG4gIG5vbmNlOiBiaWdpbnQ7XG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSB7XG4gIGNvbmZpcm1zOiBNc2dDb25maXJtQmF0Y2hbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMb2dpY0NvbmZpcm1zUmVxdWVzdCB7XG4gIGludmFsaWRhdGlvbklkOiBVaW50OEFycmF5O1xuICBpbnZhbGlkYXRpb25Ob25jZTogYmlnaW50O1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZSB7XG4gIGNvbmZpcm1zOiBNc2dDb25maXJtTG9naWNDYWxsW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2Uge1xuICBldmVudE5vbmNlOiBiaWdpbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdCB7XG4gIGVyYzIwOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2Uge1xuICBkZW5vbTogc3RyaW5nO1xuICBjb3Ntb3NPcmlnaW5hdGVkOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3Qge1xuICBkZW5vbTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlIHtcbiAgZXJjMjA6IHN0cmluZztcbiAgY29zbW9zT3JpZ2luYXRlZDogYm9vbGVhbjtcbn1cbi8qKlxuICogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3QgZGVmaW5lcyB0aGUgcmVxdWVzdCBmb3IgZ2V0dGluZyB0aGUgaGVpZ2h0IG9mIHRoZVxuICogbGFzdCBhcHBsaWVkIEV0aGVyZXVtIEV2ZW50IG9uIHRoZSBicmlkZ2UuIFRoaXMgaXMgZXhwZWN0ZWQgdG8gbGFnIHRoZSBhY3R1YWxcbiAqIEV0aGVyZXVtIGJsb2NrIGhlaWdodCBzaWduaWZpY2FudGx5IGR1ZSB0byAxLiBFdGhlcmV1bSBGaW5hbGl0eSBhbmRcbiAqICAyLiBDb25zZW5zdXMgbWlycm9yaW5nIHRoZSBzdGF0ZSBvbiBFdGhlcmV1bVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3Qge1xuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdG8gc2VhcmNoIGZvciBzdG9yZSBkYXRhIHVzaW5nIHRoZSBvbGQgR3Jhdml0eSB2MSBrZXkgXCJMYXN0T2JzZXJ2ZWRFdGhlcmV1bUJsb2NrSGVpZ2h0S2V5XCJcbiAgICogTm90ZSB0aGF0IHF1ZXJpZXMgYmVmb3JlIHRoZSBNZXJjdXJ5IHVwZ3JhZGUgYXQgaGVpZ2h0IDEyODIwMTMgbXVzdCBzZXQgdGhpcyB0byB0cnVlXG4gICAqL1xuICB1c2VWMUtleTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlIHtcbiAgLyoqXG4gICAqIGEgcmVzcG9uc2Ugb2YgMCBpbmRpY2F0ZXMgdGhhdCBubyBFdGhlcmV1bSBldmVudHMgaGF2ZSBiZWVuIG9ic2VydmVkLCBhbmQgdGh1c1xuICAgKiB0aGUgYnJpZGdlIGlzIGluYWN0aXZlXG4gICAqL1xuICBibG9jazogYmlnaW50O1xufVxuLyoqXG4gKiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCBkZWZpbmVzIHRoZSByZXF1ZXN0IGZvciBnZXR0aW5nIHRoZSBldmVudCBub25jZVxuICogb2YgdGhlIGxhc3QgYXBwbGllZCBFdGhlcmV1bSBFdmVudCBvbiB0aGUgYnJpZGdlLlxuICogTm90ZSB0aGF0IHRoaXMgaXMgbGlrZWx5IHRvIGxhZyB0aGUgbGFzdCBleGVjdXRlZCBldmVudCBhIGxpdHRsZVxuICogZHVlIHRvIDEuIEV0aGVyZXVtIEZpbmFsaXR5IGFuZCAyLiBDb25zZW5zdXMgbWlycm9yaW5nIHRoZSBFdGhlcmV1bSBzdGF0ZVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3Qge1xuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdG8gc2VhcmNoIGZvciBzdG9yZSBkYXRhIHVzaW5nIHRoZSBvbGQgR3Jhdml0eSB2MSBrZXkgXCJMYXN0T2JzZXJ2ZWRFdmVudE5vbmNlS2V5XCJcbiAgICogTm90ZSB0aGF0IHF1ZXJpZXMgYmVmb3JlIHRoZSBNZXJjdXJ5IHVwZ3JhZGUgYXQgaGVpZ2h0IDEyODIwMTMgbXVzdCBzZXQgdGhpcyB0byB0cnVlXG4gICAqL1xuICB1c2VWMUtleTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIGEgcmVzcG9uc2Ugb2YgMCBpbmRpY2F0ZXMgdGhhdCBubyBFdGhlcmV1bSBldmVudHMgaGF2ZSBiZWVuIG9ic2VydmVkLCBhbmQgdGh1c1xuICAgKiB0aGUgYnJpZGdlIGlzIGluYWN0aXZlXG4gICAqL1xuICBub25jZTogYmlnaW50O1xufVxuLyoqXG4gKiBRdWVyeUF0dGVzdGF0aW9uc1JlcXVlc3QgZGVmaW5lcyB0aGUgcmVxdWVzdCBzdHJ1Y3R1cmUgZm9yIGdldHRpbmcgcmVjZW50XG4gKiBhdHRlc3RhdGlvbnMgd2l0aCBvcHRpb25hbCBxdWVyeSBwYXJhbWV0ZXJzLiBCeSBkZWZhdWx0LCBhIGxpbWl0ZWQgc2V0IG9mXG4gKiByZWNlbnQgYXR0ZXN0YXRpb25zIHdpbGwgYmUgcmV0dXJuZWQsIGRlZmluZWQgYnkgJ2xpbWl0Jy4gVGhlc2UgYXR0ZXN0YXRpb25zXG4gKiBjYW4gYmUgb3JkZXJlZCBhc2NlbmRpbmcgb3IgZGVzY2VuZGluZyBieSBub25jZSwgdGhhdCBkZWZhdWx0cyB0byBhc2NlbmRpbmcuXG4gKiBGaWx0ZXJpbmcgY3JpdGVyaWEgbWF5IGFsc28gYmUgcHJvdmlkZWQsIGluY2x1ZGluZyBub25jZSwgY2xhaW0gdHlwZSwgYW5kXG4gKiBoZWlnaHQuIE5vdGUsIHRoYXQgYW4gYXR0ZXN0YXRpb24gd2lsbCBiZSByZXR1cm5lZCBpZiBpdCBtYXRjaGVzIEFOWSBvZiB0aGVcbiAqIGZpbHRlciBxdWVyeSBwYXJhbWV0ZXJzIHByb3ZpZGVkLlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0IHtcbiAgLyoqIGxpbWl0IGRlZmluZXMgaG93IG1hbnkgYXR0ZXN0YXRpb25zIHRvIGxpbWl0IGluIHRoZSByZXNwb25zZS4gKi9cbiAgbGltaXQ6IGJpZ2ludDtcbiAgLyoqXG4gICAqIG9yZGVyX2J5IHByb3ZpZGVzIG9yZGVyaW5nIG9mIGF0dGVzdHN0aW9ucyBieSBub25jZSBpbiB0aGUgcmVzcG9uc2UuIEVpdGhlclxuICAgKiAnYXNjJyBvciAnZGVzYycgY2FuIGJlIHByb3ZpZGVkLiBJZiBubyB2YWx1ZSBpcyBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG9cbiAgICogJ2FzYycuXG4gICAqL1xuXG4gIG9yZGVyQnk6IHN0cmluZztcbiAgLyoqIGNsYWltX3R5cGUgYWxsb3dzIGZpbHRlcmluZyBhdHRlc3RhdGlvbnMgYnkgRXRoZXJldW0gY2xhaW0gdHlwZS4gKi9cblxuICBjbGFpbVR5cGU6IHN0cmluZztcbiAgLyoqIG5vbmNlIGFsbG93cyBmaWx0ZXJpbmcgYXR0ZXN0YXRpb25zIGJ5IEV0aGVyZXVtIGNsYWltIG5vbmNlLiAqL1xuXG4gIG5vbmNlOiBiaWdpbnQ7XG4gIC8qKiBoZWlnaHQgYWxsb3dzIGZpbHRlcmluZyBhdHRlc3RhdGlvbnMgYnkgRXRoZXJldW0gY2xhaW0gaGVpZ2h0LiAqL1xuXG4gIGhlaWdodDogYmlnaW50O1xuICAvKipcbiAgICogaW5kaWNhdGVzIHdoZXRoZXIgdG8gc2VhcmNoIGZvciBzdG9yZSBkYXRhIHVzaW5nIHRoZSBvbGQgR3Jhdml0eSB2MSBrZXkgXCJPcmFjbGVBdHRlc3RhdGlvbktleVwiXG4gICAqIE5vdGUgdGhhdCBxdWVyaWVzIGJlZm9yZSB0aGUgTWVyY3VyeSB1cGdyYWRlIGF0IGhlaWdodCAxMjgyMDEzIG11c3Qgc2V0IHRoaXMgdG8gdHJ1ZVxuICAgKi9cblxuICB1c2VWMUtleTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSB7XG4gIGF0dGVzdGF0aW9uczogQXR0ZXN0YXRpb25bXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3Mge1xuICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICBldGhBZGRyZXNzOiBzdHJpbmc7XG4gIG9yY2hlc3RyYXRvckFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3Mge1xuICBldGhBZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzUmVzcG9uc2Uge1xuICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7XG4gIG9yY2hlc3RyYXRvckFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3Mge1xuICBvcmNoZXN0cmF0b3JBZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmc7XG4gIGV0aEFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQZW5kaW5nU2VuZFRvRXRoIHtcbiAgc2VuZGVyQWRkcmVzczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSB7XG4gIHRyYW5zZmVyc0luQmF0Y2hlczogT3V0Z29pbmdUcmFuc2ZlclR4W107XG4gIHVuYmF0Y2hlZFRyYW5zZmVyczogT3V0Z29pbmdUcmFuc2ZlclR4W107XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyB7XG4gIC8qKiBsaW1pdCBkZWZpbmVzIHRoZSBudW1iZXIgb2YgcGVuZGluZyBmb3J3YXJkcyB0byByZXR1cm4sIGluIG9yZGVyIG9mIHRoZWlyIFNlbmRUb0Nvc21vcy5FdmVudE5vbmNlICovXG4gIGxpbWl0OiBiaWdpbnQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHtcbiAgcGVuZGluZ0liY0F1dG9Gb3J3YXJkczogUGVuZGluZ0liY0F1dG9Gb3J3YXJkW107XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVBhcmFtc1JlcXVlc3QoKTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlQYXJhbXNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlQYXJhbXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGFyYW1zUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlQYXJhbXNSZXF1ZXN0IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5UGFyYW1zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBQYXJ0aWFsPFF1ZXJ5UGFyYW1zUmVxdWVzdD4pOiBRdWVyeVBhcmFtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlQYXJhbXNSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlQYXJhbXNSZXNwb25zZSgpOiBRdWVyeVBhcmFtc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXM6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGFyYW1zUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeVBhcmFtc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFBhcmFtcy5lbmNvZGUobWVzc2FnZS5wYXJhbXMsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wYXJhbXMgPSBQYXJhbXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGFyYW1zUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IGlzU2V0KG9iamVjdC5wYXJhbXMpID8gUGFyYW1zLmZyb21KU09OKG9iamVjdC5wYXJhbXMpIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGFyYW1zUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UucGFyYW1zICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGFyYW1zID0gbWVzc2FnZS5wYXJhbXMgPyBQYXJhbXMudG9KU09OKG1lc3NhZ2UucGFyYW1zKSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8UXVlcnlQYXJhbXNSZXNwb25zZT4pOiBRdWVyeVBhcmFtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGFyYW1zUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnBhcmFtcyA9XG4gICAgICBvYmplY3QucGFyYW1zICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnBhcmFtcyAhPT0gbnVsbFxuICAgICAgICA/IFBhcmFtcy5mcm9tUGFydGlhbChvYmplY3QucGFyYW1zKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0KCk6IFF1ZXJ5Q3VycmVudFZhbHNldFJlcXVlc3Qge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8UXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdD5cbiAgKTogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UoKTogUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbHNldDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbHNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBWYWxzZXQuZW5jb2RlKG1lc3NhZ2UudmFsc2V0LCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5Q3VycmVudFZhbHNldFJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxzZXQgPSBWYWxzZXQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5Q3VycmVudFZhbHNldFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsc2V0OiBpc1NldChvYmplY3QudmFsc2V0KSA/IFZhbHNldC5mcm9tSlNPTihvYmplY3QudmFsc2V0KSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxzZXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxzZXQgPSBtZXNzYWdlLnZhbHNldCA/IFZhbHNldC50b0pTT04obWVzc2FnZS52YWxzZXQpIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZT5cbiAgKTogUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnZhbHNldCA9XG4gICAgICBvYmplY3QudmFsc2V0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbHNldCAhPT0gbnVsbFxuICAgICAgICA/IFZhbHNldC5mcm9tUGFydGlhbChvYmplY3QudmFsc2V0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0KCk6IFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIG5vbmNlOiBCaWdJbnQoMCksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKSA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Q+XG4gICk6IFF1ZXJ5VmFsc2V0UmVxdWVzdFJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdCgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UoKTogUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbHNldDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbHNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBWYWxzZXQuZW5jb2RlKG1lc3NhZ2UudmFsc2V0LCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0UmVxdWVzdFJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxzZXQgPSBWYWxzZXQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5VmFsc2V0UmVxdWVzdFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsc2V0OiBpc1NldChvYmplY3QudmFsc2V0KSA/IFZhbHNldC5mcm9tSlNPTihvYmplY3QudmFsc2V0KSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxzZXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxzZXQgPSBtZXNzYWdlLnZhbHNldCA/IFZhbHNldC50b0pTT04obWVzc2FnZS52YWxzZXQpIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZT5cbiAgKTogUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnZhbHNldCA9XG4gICAgICBvYmplY3QudmFsc2V0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbHNldCAhPT0gbnVsbFxuICAgICAgICA/IFZhbHNldC5mcm9tUGFydGlhbChvYmplY3QudmFsc2V0KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KCk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIG5vbmNlOiBCaWdJbnQoMCksXG4gICAgYWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gQmlnSW50KG9iamVjdC5ub25jZSkgOiBCaWdJbnQoMCksXG4gICAgICBhZGRyZXNzOiBpc1NldChvYmplY3QuYWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIChvYmouYWRkcmVzcyA9IG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdD5cbiAgKTogUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5ub25jZSA9XG4gICAgICBvYmplY3Qubm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Qubm9uY2UgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgPSBvYmplY3QuYWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlKCk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBjb25maXJtOiB1bmRlZmluZWQsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVZhbHNldENvbmZpcm1SZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuY29uZmlybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBNc2dWYWxzZXRDb25maXJtLmVuY29kZShcbiAgICAgICAgbWVzc2FnZS5jb25maXJtLFxuICAgICAgICB3cml0ZXIudWludDMyKDEwKS5mb3JrKClcbiAgICAgICkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmNvbmZpcm0gPSBNc2dWYWxzZXRDb25maXJtLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVZhbHNldENvbmZpcm1SZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpcm06IGlzU2V0KG9iamVjdC5jb25maXJtKVxuICAgICAgICA/IE1zZ1ZhbHNldENvbmZpcm0uZnJvbUpTT04ob2JqZWN0LmNvbmZpcm0pXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmNvbmZpcm0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5jb25maXJtID0gbWVzc2FnZS5jb25maXJtXG4gICAgICAgID8gTXNnVmFsc2V0Q29uZmlybS50b0pTT04obWVzc2FnZS5jb25maXJtKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2U+XG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5jb25maXJtID1cbiAgICAgIG9iamVjdC5jb25maXJtICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNvbmZpcm0gIT09IG51bGxcbiAgICAgICAgPyBNc2dWYWxzZXRDb25maXJtLmZyb21QYXJ0aWFsKG9iamVjdC5jb25maXJtKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3QoKTogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub25jZTogaXNTZXQob2JqZWN0Lm5vbmNlKSA/IEJpZ0ludChvYmplY3Qubm9uY2UpIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vbmNlID0gKG1lc3NhZ2Uubm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3Q+XG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLm5vbmNlID1cbiAgICAgIG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3Qubm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UoKTogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgY29uZmlybXM6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5jb25maXJtcykge1xuICAgICAgTXNnVmFsc2V0Q29uZmlybS5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5jb25maXJtcy5wdXNoKFxuICAgICAgICAgICAgTXNnVmFsc2V0Q29uZmlybS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maXJtczogQXJyYXkuaXNBcnJheShvYmplY3Q/LmNvbmZpcm1zKVxuICAgICAgICA/IG9iamVjdC5jb25maXJtcy5tYXAoKGU6IGFueSkgPT4gTXNnVmFsc2V0Q29uZmlybS5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLmNvbmZpcm1zKSB7XG4gICAgICBvYmouY29uZmlybXMgPSBtZXNzYWdlLmNvbmZpcm1zLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IE1zZ1ZhbHNldENvbmZpcm0udG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouY29uZmlybXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlPlxuICApOiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmNvbmZpcm1zID1cbiAgICAgIG9iamVjdC5jb25maXJtcz8ubWFwKChlKSA9PiBNc2dWYWxzZXRDb25maXJtLmZyb21QYXJ0aWFsKGUpKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1JlcXVlc3QoKTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgXzogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBQYXJ0aWFsPFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdD5cbiAgKTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVxdWVzdCgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2UoKTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgdmFsc2V0czogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnZhbHNldHMpIHtcbiAgICAgIFZhbHNldC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxzZXRzLnB1c2goVmFsc2V0LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHNldHM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py52YWxzZXRzKVxuICAgICAgICA/IG9iamVjdC52YWxzZXRzLm1hcCgoZTogYW55KSA9PiBWYWxzZXQuZnJvbUpTT04oZSkpXG4gICAgICAgIDogW10sXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS52YWxzZXRzKSB7XG4gICAgICBvYmoudmFsc2V0cyA9IG1lc3NhZ2UudmFsc2V0cy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBWYWxzZXQudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudmFsc2V0cyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UudmFsc2V0cyA9IG9iamVjdC52YWxzZXRzPy5tYXAoKGUpID0+IFZhbHNldC5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0KCk6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgYWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBpc1NldChvYmplY3QuYWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuYWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIChvYmouYWRkcmVzcyA9IG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5hZGRyZXNzID0gb2JqZWN0LmFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlKCk6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbHNldHM6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS52YWxzZXRzKSB7XG4gICAgICBWYWxzZXQuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsc2V0cy5wdXNoKFZhbHNldC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICB2YWxzZXRzOiBBcnJheS5pc0FycmF5KG9iamVjdD8udmFsc2V0cylcbiAgICAgICAgPyBvYmplY3QudmFsc2V0cy5tYXAoKGU6IGFueSkgPT4gVmFsc2V0LmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuXG4gICAgaWYgKG1lc3NhZ2UudmFsc2V0cykge1xuICAgICAgb2JqLnZhbHNldHMgPSBtZXNzYWdlLnZhbHNldHMubWFwKChlKSA9PlxuICAgICAgICBlID8gVmFsc2V0LnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnZhbHNldHMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlPlxuICApOiBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnZhbHNldHMgPSBvYmplY3QudmFsc2V0cz8ubWFwKChlKSA9PiBWYWxzZXQuZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KCk6IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0IHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlCYXRjaEZlZVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBfOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBRdWVyeUJhdGNoRmVlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBQYXJ0aWFsPFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0Pik6IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlCYXRjaEZlZVJlc3BvbnNlKCk6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmF0Y2hGZWVzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmJhdGNoRmVlcykge1xuICAgICAgQmF0Y2hGZWVzLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaEZlZVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaEZlZVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5iYXRjaEZlZXMucHVzaChCYXRjaEZlZXMuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUJhdGNoRmVlUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaEZlZXM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5iYXRjaEZlZXMpXG4gICAgICAgID8gb2JqZWN0LmJhdGNoRmVlcy5tYXAoKGU6IGFueSkgPT4gQmF0Y2hGZWVzLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaEZlZXMpIHtcbiAgICAgIG9iai5iYXRjaEZlZXMgPSBtZXNzYWdlLmJhdGNoRmVlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBCYXRjaEZlZXMudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYmF0Y2hGZWVzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8UXVlcnlCYXRjaEZlZVJlc3BvbnNlPik6IFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoRmVlUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmJhdGNoRmVlcyA9XG4gICAgICBvYmplY3QuYmF0Y2hGZWVzPy5tYXAoKGUpID0+IEJhdGNoRmVlcy5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QoKTogUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6IGlzU2V0KG9iamVjdC5hZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuYWRkcmVzcykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFkZHJlc3MgPSBtZXNzYWdlLmFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UuYWRkcmVzcyA9IG9iamVjdC5hZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlKCk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmF0Y2g6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYmF0Y2gpIHtcbiAgICAgIE91dGdvaW5nVHhCYXRjaC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2gucHVzaChPdXRnb2luZ1R4QmF0Y2guZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaDogQXJyYXkuaXNBcnJheShvYmplY3Q/LmJhdGNoKVxuICAgICAgICA/IG9iamVjdC5iYXRjaC5tYXAoKGU6IGFueSkgPT4gT3V0Z29pbmdUeEJhdGNoLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaCkge1xuICAgICAgb2JqLmJhdGNoID0gbWVzc2FnZS5iYXRjaC5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBPdXRnb2luZ1R4QmF0Y2gudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYmF0Y2ggPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmJhdGNoID1cbiAgICAgIG9iamVjdC5iYXRjaD8ubWFwKChlKSA9PiBPdXRnb2luZ1R4QmF0Y2guZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0KCk6IFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5hZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBpc1NldChvYmplY3QuYWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgKG9iai5hZGRyZXNzID0gbWVzc2FnZS5hZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdD5cbiAgKTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgPSBvYmplY3QuYWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZSgpOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGNhbGw6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuY2FsbCkge1xuICAgICAgT3V0Z29pbmdMb2dpY0NhbGwuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmNhbGwucHVzaChPdXRnb2luZ0xvZ2ljQ2FsbC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbGw6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5jYWxsKVxuICAgICAgICA/IG9iamVjdC5jYWxsLm1hcCgoZTogYW55KSA9PiBPdXRnb2luZ0xvZ2ljQ2FsbC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuXG4gICAgaWYgKG1lc3NhZ2UuY2FsbCkge1xuICAgICAgb2JqLmNhbGwgPSBtZXNzYWdlLmNhbGwubWFwKChlKSA9PlxuICAgICAgICBlID8gT3V0Z29pbmdMb2dpY0NhbGwudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouY2FsbCA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZT5cbiAgKTogUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuY2FsbCA9XG4gICAgICBvYmplY3QuY2FsbD8ubWFwKChlKSA9PiBPdXRnb2luZ0xvZ2ljQ2FsbC5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QoKTogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3Qge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIF86IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8UXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3Q+XG4gICk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1Jlc3BvbnNlKCk6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmF0Y2hlczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5iYXRjaGVzKSB7XG4gICAgICBPdXRnb2luZ1R4QmF0Y2guZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoZXMucHVzaChPdXRnb2luZ1R4QmF0Y2guZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBiYXRjaGVzOiBBcnJheS5pc0FycmF5KG9iamVjdD8uYmF0Y2hlcylcbiAgICAgICAgPyBvYmplY3QuYmF0Y2hlcy5tYXAoKGU6IGFueSkgPT4gT3V0Z29pbmdUeEJhdGNoLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaGVzKSB7XG4gICAgICBvYmouYmF0Y2hlcyA9IG1lc3NhZ2UuYmF0Y2hlcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBPdXRnb2luZ1R4QmF0Y2gudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYmF0Y2hlcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZT5cbiAgKTogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuYmF0Y2hlcyA9XG4gICAgICBvYmplY3QuYmF0Y2hlcz8ubWFwKChlKSA9PiBPdXRnb2luZ1R4QmF0Y2guZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdCgpOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3Qge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBfOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3Qge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8UXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0PlxuICApOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSgpOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBjYWxsczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmNhbGxzKSB7XG4gICAgICBPdXRnb2luZ0xvZ2ljQ2FsbC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5jYWxscy5wdXNoKE91dGdvaW5nTG9naWNDYWxsLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbGxzOiBBcnJheS5pc0FycmF5KG9iamVjdD8uY2FsbHMpXG4gICAgICAgID8gb2JqZWN0LmNhbGxzLm1hcCgoZTogYW55KSA9PiBPdXRnb2luZ0xvZ2ljQ2FsbC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLmNhbGxzKSB7XG4gICAgICBvYmouY2FsbHMgPSBtZXNzYWdlLmNhbGxzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IE91dGdvaW5nTG9naWNDYWxsLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmNhbGxzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZT5cbiAgKTogUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5jYWxscyA9XG4gICAgICBvYmplY3QuY2FsbHM/Lm1hcCgoZSkgPT4gT3V0Z29pbmdMb2dpY0NhbGwuZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3QoKTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgbm9uY2U6IEJpZ0ludCgwKSxcbiAgICBjb250cmFjdEFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvbnRyYWN0QWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmNvbnRyYWN0QWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBub25jZTogaXNTZXQob2JqZWN0Lm5vbmNlKSA/IEJpZ0ludChvYmplY3Qubm9uY2UpIDogQmlnSW50KDApLFxuICAgICAgY29udHJhY3RBZGRyZXNzOiBpc1NldChvYmplY3QuY29udHJhY3RBZGRyZXNzKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuY29udHJhY3RBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vbmNlID0gKG1lc3NhZ2Uubm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLmNvbnRyYWN0QWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNvbnRyYWN0QWRkcmVzcyA9IG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0PlxuICApOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLm5vbmNlID1cbiAgICAgIG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3Qubm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzID0gb2JqZWN0LmNvbnRyYWN0QWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlKCk6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBiYXRjaDogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmJhdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE91dGdvaW5nVHhCYXRjaC5lbmNvZGUobWVzc2FnZS5iYXRjaCwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2ggPSBPdXRnb2luZ1R4QmF0Y2guZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2g6IGlzU2V0KG9iamVjdC5iYXRjaClcbiAgICAgICAgPyBPdXRnb2luZ1R4QmF0Y2guZnJvbUpTT04ob2JqZWN0LmJhdGNoKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5iYXRjaCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhdGNoID0gbWVzc2FnZS5iYXRjaFxuICAgICAgICA/IE91dGdvaW5nVHhCYXRjaC50b0pTT04obWVzc2FnZS5iYXRjaClcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlPlxuICApOiBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuYmF0Y2ggPVxuICAgICAgb2JqZWN0LmJhdGNoICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmJhdGNoICE9PSBudWxsXG4gICAgICAgID8gT3V0Z29pbmdUeEJhdGNoLmZyb21QYXJ0aWFsKG9iamVjdC5iYXRjaClcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCgpOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogQmlnSW50KDApLFxuICAgIGNvbnRyYWN0QWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5jb250cmFjdEFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gQmlnSW50KG9iamVjdC5ub25jZSkgOiBCaWdJbnQoMCksXG4gICAgICBjb250cmFjdEFkZHJlc3M6IGlzU2V0KG9iamVjdC5jb250cmFjdEFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5jb250cmFjdEFkZHJlc3MpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUJhdGNoQ29uZmlybXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuY29udHJhY3RBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29udHJhY3RBZGRyZXNzID0gbWVzc2FnZS5jb250cmFjdEFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3Q+XG4gICk6IFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5jb250cmFjdEFkZHJlc3MgPSBvYmplY3QuY29udHJhY3RBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UoKTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGNvbmZpcm1zOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5jb25maXJtcykge1xuICAgICAgTXNnQ29uZmlybUJhdGNoLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxMCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY29uZmlybXMucHVzaChcbiAgICAgICAgICAgIE1zZ0NvbmZpcm1CYXRjaC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlybXM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5jb25maXJtcylcbiAgICAgICAgPyBvYmplY3QuY29uZmlybXMubWFwKChlOiBhbnkpID0+IE1zZ0NvbmZpcm1CYXRjaC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5jb25maXJtcykge1xuICAgICAgb2JqLmNvbmZpcm1zID0gbWVzc2FnZS5jb25maXJtcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBNc2dDb25maXJtQmF0Y2gudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouY29uZmlybXMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZT5cbiAgKTogUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmNvbmZpcm1zID1cbiAgICAgIG9iamVjdC5jb25maXJtcz8ubWFwKChlKSA9PiBNc2dDb25maXJtQmF0Y2guZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3QoKTogUXVlcnlMb2dpY0NvbmZpcm1zUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgaW52YWxpZGF0aW9uSWQ6IG5ldyBVaW50OEFycmF5KCksXG4gICAgaW52YWxpZGF0aW9uTm9uY2U6IEJpZ0ludCgwKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5ieXRlcyhtZXNzYWdlLmludmFsaWRhdGlvbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE2KS51aW50NjQobWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5pbnZhbGlkYXRpb25JZCA9IHJlYWRlci5ieXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmludmFsaWRhdGlvbk5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMb2dpY0NvbmZpcm1zUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludmFsaWRhdGlvbklkOiBpc1NldChvYmplY3QuaW52YWxpZGF0aW9uSWQpXG4gICAgICAgID8gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5pbnZhbGlkYXRpb25JZClcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpLFxuICAgICAgaW52YWxpZGF0aW9uTm9uY2U6IGlzU2V0KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmludmFsaWRhdGlvbk5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaW52YWxpZGF0aW9uSWQgPSBiYXNlNjRGcm9tQnl0ZXMoXG4gICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gbWVzc2FnZS5pbnZhbGlkYXRpb25JZFxuICAgICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKVxuICAgICAgKSk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmludmFsaWRhdGlvbk5vbmNlID0gKFxuICAgICAgICBtZXNzYWdlLmludmFsaWRhdGlvbk5vbmNlIHx8IEJpZ0ludCgwKVxuICAgICAgKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0PlxuICApOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3QoKTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkID0gb2JqZWN0LmludmFsaWRhdGlvbklkID8/IG5ldyBVaW50OEFycmF5KCk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSA9XG4gICAgICBvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmludmFsaWRhdGlvbk5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UoKTogUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGNvbmZpcm1zOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5jb25maXJtcykge1xuICAgICAgTXNnQ29uZmlybUxvZ2ljQ2FsbC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmNvbmZpcm1zLnB1c2goXG4gICAgICAgICAgICBNc2dDb25maXJtTG9naWNDYWxsLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBjb25maXJtczogQXJyYXkuaXNBcnJheShvYmplY3Q/LmNvbmZpcm1zKVxuICAgICAgICA/IG9iamVjdC5jb25maXJtcy5tYXAoKGU6IGFueSkgPT4gTXNnQ29uZmlybUxvZ2ljQ2FsbC5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5jb25maXJtcykge1xuICAgICAgb2JqLmNvbmZpcm1zID0gbWVzc2FnZS5jb25maXJtcy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBNc2dDb25maXJtTG9naWNDYWxsLnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmNvbmZpcm1zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TG9naWNDb25maXJtc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5jb25maXJtcyA9XG4gICAgICBvYmplY3QuY29uZmlybXM/Lm1hcCgoZSkgPT4gTXNnQ29uZmlybUxvZ2ljQ2FsbC5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3QoKTogUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3Qge1xuICByZXR1cm4ge1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFkZHJlc3M6IGlzU2V0KG9iamVjdC5hZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuYWRkcmVzcykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFkZHJlc3MgPSBtZXNzYWdlLmFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UuYWRkcmVzcyA9IG9iamVjdC5hZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlc3BvbnNlKCk6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgZXZlbnROb25jZTogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZXZlbnROb25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLmV2ZW50Tm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudE5vbmNlOiBpc1NldChvYmplY3QuZXZlbnROb25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ldmVudE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXZlbnROb25jZSA9IChtZXNzYWdlLmV2ZW50Tm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2U+XG4gICk6IFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgPVxuICAgICAgb2JqZWN0LmV2ZW50Tm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXZlbnROb25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuZXZlbnROb25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0KCk6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgZXJjMjA6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5lcmMyMCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZXJjMjApO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmVyYzIwID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjA6IGlzU2V0KG9iamVjdC5lcmMyMCkgPyBTdHJpbmcob2JqZWN0LmVyYzIwKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmVyYzIwICE9PSB1bmRlZmluZWQgJiYgKG9iai5lcmMyMCA9IG1lc3NhZ2UuZXJjMjApO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdD5cbiAgKTogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UuZXJjMjAgPSBvYmplY3QuZXJjMjAgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUVSQzIwVG9EZW5vbVJlc3BvbnNlKCk6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGRlbm9tOiBcIlwiLFxuICAgIGNvc21vc09yaWdpbmF0ZWQ6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5kZW5vbSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZGVub20pO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQgPT09IHRydWUpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLmJvb2wobWVzc2FnZS5jb3Ntb3NPcmlnaW5hdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmRlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQgPSByZWFkZXIuYm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbm9tOiBpc1NldChvYmplY3QuZGVub20pID8gU3RyaW5nKG9iamVjdC5kZW5vbSkgOiBcIlwiLFxuICAgICAgY29zbW9zT3JpZ2luYXRlZDogaXNTZXQob2JqZWN0LmNvc21vc09yaWdpbmF0ZWQpXG4gICAgICAgID8gQm9vbGVhbihvYmplY3QuY29zbW9zT3JpZ2luYXRlZClcbiAgICAgICAgOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUVSQzIwVG9EZW5vbVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmRlbm9tICE9PSB1bmRlZmluZWQgJiYgKG9iai5kZW5vbSA9IG1lc3NhZ2UuZGVub20pO1xuICAgIG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNvc21vc09yaWdpbmF0ZWQgPSBtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuZGVub20gPSBvYmplY3QuZGVub20gPz8gXCJcIjtcbiAgICBtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQgPSBvYmplY3QuY29zbW9zT3JpZ2luYXRlZCA/PyBmYWxzZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3QoKTogUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICBkZW5vbTogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmRlbm9tICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5kZW5vbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZGVub20gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBkZW5vbTogaXNTZXQob2JqZWN0LmRlbm9tKSA/IFN0cmluZyhvYmplY3QuZGVub20pIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0PlxuICApOiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZW5vbVRvRVJDMjBSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5kZW5vbSA9IG9iamVjdC5kZW5vbSA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5RGVub21Ub0VSQzIwUmVzcG9uc2UoKTogUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgZXJjMjA6IFwiXCIsXG4gICAgY29zbW9zT3JpZ2luYXRlZDogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmVyYzIwICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5lcmMyMCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigxNikuYm9vbChtZXNzYWdlLmNvc21vc09yaWdpbmF0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXJjMjAgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCA9IHJlYWRlci5ib29sKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJjMjA6IGlzU2V0KG9iamVjdC5lcmMyMCkgPyBTdHJpbmcob2JqZWN0LmVyYzIwKSA6IFwiXCIsXG4gICAgICBjb3Ntb3NPcmlnaW5hdGVkOiBpc1NldChvYmplY3QuY29zbW9zT3JpZ2luYXRlZClcbiAgICAgICAgPyBCb29sZWFuKG9iamVjdC5jb3Ntb3NPcmlnaW5hdGVkKVxuICAgICAgICA6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RGVub21Ub0VSQzIwUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZXJjMjAgIT09IHVuZGVmaW5lZCAmJiAob2JqLmVyYzIwID0gbWVzc2FnZS5lcmMyMCk7XG4gICAgbWVzc2FnZS5jb3Ntb3NPcmlnaW5hdGVkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zT3JpZ2luYXRlZCA9IG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZT5cbiAgKTogUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5lcmMyMCA9IG9iamVjdC5lcmMyMCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuY29zbW9zT3JpZ2luYXRlZCA9IG9iamVjdC5jb3Ntb3NPcmlnaW5hdGVkID8/IGZhbHNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0KCk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VWMUtleTogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudXNlVjFLZXkgPT09IHRydWUpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkuYm9vbChtZXNzYWdlLnVzZVYxS2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudXNlVjFLZXkgPSByZWFkZXIuYm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VWMUtleTogaXNTZXQob2JqZWN0LnVzZVYxS2V5KSA/IEJvb2xlYW4ob2JqZWN0LnVzZVYxS2V5KSA6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnVzZVYxS2V5ICE9PSB1bmRlZmluZWQgJiYgKG9iai51c2VWMUtleSA9IG1lc3NhZ2UudXNlVjFLZXkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0PlxuICApOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UudXNlVjFLZXkgPSBvYmplY3QudXNlVjFLZXkgPz8gZmFsc2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlKCk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZSB7XG4gIHJldHVybiB7XG4gICAgYmxvY2s6IEJpZ0ludCgwKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmJsb2NrICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UuYmxvY2spO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJsb2NrID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxvY2s6IGlzU2V0KG9iamVjdC5ibG9jaykgPyBCaWdJbnQob2JqZWN0LmJsb2NrKSA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuYmxvY2sgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ibG9jayA9IChtZXNzYWdlLmJsb2NrIHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlPlxuICApOiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5ibG9jayA9XG4gICAgICBvYmplY3QuYmxvY2sgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuYmxvY2sgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmJsb2NrKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCgpOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgdXNlVjFLZXk6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnVzZVYxS2V5ID09PSB0cnVlKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLmJvb2wobWVzc2FnZS51c2VWMUtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnVzZVYxS2V5ID0gcmVhZGVyLmJvb2woKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlVjFLZXk6IGlzU2V0KG9iamVjdC51c2VWMUtleSkgPyBCb29sZWFuKG9iamVjdC51c2VWMUtleSkgOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS51c2VWMUtleSAhPT0gdW5kZWZpbmVkICYmIChvYmoudXNlVjFLZXkgPSBtZXNzYWdlLnVzZVYxS2V5KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdD5cbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QoKTtcbiAgICBtZXNzYWdlLnVzZVYxS2V5ID0gb2JqZWN0LnVzZVYxS2V5ID8/IGZhbHNlO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZSgpOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIG5vbmNlOiBCaWdJbnQoMCksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gQmlnSW50KG9iamVjdC5ub25jZSkgOiBCaWdJbnQoMCksXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZT5cbiAgKTogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0KCk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgbGltaXQ6IEJpZ0ludCgwKSxcbiAgICBvcmRlckJ5OiBcIlwiLFxuICAgIGNsYWltVHlwZTogXCJcIixcbiAgICBub25jZTogQmlnSW50KDApLFxuICAgIGhlaWdodDogQmlnSW50KDApLFxuICAgIHVzZVYxS2V5OiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmxpbWl0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UubGltaXQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yZGVyQnkgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm9yZGVyQnkpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNsYWltVHlwZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UuY2xhaW1UeXBlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDMyKS51aW50NjQobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuaGVpZ2h0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDApLnVpbnQ2NChtZXNzYWdlLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudXNlVjFLZXkgPT09IHRydWUpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDgpLmJvb2wobWVzc2FnZS51c2VWMUtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubGltaXQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2Uub3JkZXJCeSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5jbGFpbVR5cGUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2UuaGVpZ2h0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBtZXNzYWdlLnVzZVYxS2V5ID0gcmVhZGVyLmJvb2woKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbWl0OiBpc1NldChvYmplY3QubGltaXQpID8gQmlnSW50KG9iamVjdC5saW1pdCkgOiBCaWdJbnQoMCksXG4gICAgICBvcmRlckJ5OiBpc1NldChvYmplY3Qub3JkZXJCeSkgPyBTdHJpbmcob2JqZWN0Lm9yZGVyQnkpIDogXCJcIixcbiAgICAgIGNsYWltVHlwZTogaXNTZXQob2JqZWN0LmNsYWltVHlwZSkgPyBTdHJpbmcob2JqZWN0LmNsYWltVHlwZSkgOiBcIlwiLFxuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKSA6IEJpZ0ludCgwKSxcbiAgICAgIGhlaWdodDogaXNTZXQob2JqZWN0LmhlaWdodCkgPyBCaWdJbnQob2JqZWN0LmhlaWdodCkgOiBCaWdJbnQoMCksXG4gICAgICB1c2VWMUtleTogaXNTZXQob2JqZWN0LnVzZVYxS2V5KSA/IEJvb2xlYW4ob2JqZWN0LnVzZVYxS2V5KSA6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5saW1pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmxpbWl0ID0gKG1lc3NhZ2UubGltaXQgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLm9yZGVyQnkgIT09IHVuZGVmaW5lZCAmJiAob2JqLm9yZGVyQnkgPSBtZXNzYWdlLm9yZGVyQnkpO1xuICAgIG1lc3NhZ2UuY2xhaW1UeXBlICE9PSB1bmRlZmluZWQgJiYgKG9iai5jbGFpbVR5cGUgPSBtZXNzYWdlLmNsYWltVHlwZSk7XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vbmNlID0gKG1lc3NhZ2Uubm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLmhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmhlaWdodCA9IChtZXNzYWdlLmhlaWdodCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UudXNlVjFLZXkgIT09IHVuZGVmaW5lZCAmJiAob2JqLnVzZVYxS2V5ID0gbWVzc2FnZS51c2VWMUtleSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0PlxuICApOiBRdWVyeUF0dGVzdGF0aW9uc1JlcXVlc3Qge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5saW1pdCA9XG4gICAgICBvYmplY3QubGltaXQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubGltaXQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmxpbWl0KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLm9yZGVyQnkgPSBvYmplY3Qub3JkZXJCeSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuY2xhaW1UeXBlID0gb2JqZWN0LmNsYWltVHlwZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5oZWlnaHQgPVxuICAgICAgb2JqZWN0LmhlaWdodCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5oZWlnaHQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmhlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS51c2VWMUtleSA9IG9iamVjdC51c2VWMUtleSA/PyBmYWxzZTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlKCk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGF0dGVzdGF0aW9uczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmF0dGVzdGF0aW9ucykge1xuICAgICAgQXR0ZXN0YXRpb24uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYXR0ZXN0YXRpb25zLnB1c2goXG4gICAgICAgICAgICBBdHRlc3RhdGlvbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2Uge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRlc3RhdGlvbnM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5hdHRlc3RhdGlvbnMpXG4gICAgICAgID8gb2JqZWN0LmF0dGVzdGF0aW9ucy5tYXAoKGU6IGFueSkgPT4gQXR0ZXN0YXRpb24uZnJvbUpTT04oZSkpXG4gICAgICAgIDogW10sXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG5cbiAgICBpZiAobWVzc2FnZS5hdHRlc3RhdGlvbnMpIHtcbiAgICAgIG9iai5hdHRlc3RhdGlvbnMgPSBtZXNzYWdlLmF0dGVzdGF0aW9ucy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBBdHRlc3RhdGlvbi50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hdHRlc3RhdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlPlxuICApOiBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmF0dGVzdGF0aW9ucyA9XG4gICAgICBvYmplY3QuYXR0ZXN0YXRpb25zPy5tYXAoKGUpID0+IEF0dGVzdGF0aW9uLmZyb21QYXJ0aWFsKGUpKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcygpOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcyB7XG4gIHJldHVybiB7XG4gICAgdmFsaWRhdG9yQWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3MsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3Mge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0LnZhbGlkYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3MpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnZhbGlkYXRvckFkZHJlc3MgPSBtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzPlxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcygpO1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IG9iamVjdC52YWxpZGF0b3JBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSgpOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBldGhBZGRyZXNzOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvckFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmV0aEFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmV0aEFkZHJlc3MpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXRoQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV0aEFkZHJlc3M6IGlzU2V0KG9iamVjdC5ldGhBZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuZXRoQWRkcmVzcykgOiBcIlwiLFxuICAgICAgb3JjaGVzdHJhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ldGhBZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgKG9iai5ldGhBZGRyZXNzID0gbWVzc2FnZS5ldGhBZGRyZXNzKTtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5vcmNoZXN0cmF0b3JBZGRyZXNzID0gbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlPlxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmV0aEFkZHJlc3MgPSBvYmplY3QuZXRoQWRkcmVzcyA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yQWRkcmVzcyA9IG9iamVjdC5vcmNoZXN0cmF0b3JBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3MoKTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3Mge1xuICByZXR1cm4ge1xuICAgIGV0aEFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZXRoQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZXRoQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3MoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmV0aEFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGV0aEFkZHJlc3M6IGlzU2V0KG9iamVjdC5ldGhBZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuZXRoQWRkcmVzcykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmV0aEFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmV0aEFkZHJlc3MgPSBtZXNzYWdlLmV0aEFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzPlxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzcygpO1xuICAgIG1lc3NhZ2UuZXRoQWRkcmVzcyA9IG9iamVjdC5ldGhBZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSgpOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICB2YWxpZGF0b3JBZGRyZXNzOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvckFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkYXRvckFkZHJlc3M6IGlzU2V0KG9iamVjdC52YWxpZGF0b3JBZGRyZXNzKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QudmFsaWRhdG9yQWRkcmVzcylcbiAgICAgICAgOiBcIlwiLFxuICAgICAgb3JjaGVzdHJhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsaWRhdG9yQWRkcmVzcyA9IG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyk7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yQWRkcmVzcyA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yQWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZT5cbiAgKTogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzID0gb2JqZWN0LnZhbGlkYXRvckFkZHJlc3MgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgPSBvYmplY3Qub3JjaGVzdHJhdG9yQWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzKCk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzIHtcbiAgcmV0dXJuIHtcbiAgICBvcmNoZXN0cmF0b3JBZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3MgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvckFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3Mge1xuICAgIHJldHVybiB7XG4gICAgICBvcmNoZXN0cmF0b3JBZGRyZXNzOiBpc1NldChvYmplY3Qub3JjaGVzdHJhdG9yQWRkcmVzcylcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzcyk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yQWRkcmVzcyA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yQWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3M+XG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzKCk7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3JBZGRyZXNzID0gb2JqZWN0Lm9yY2hlc3RyYXRvckFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlKCk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIHZhbGlkYXRvckFkZHJlc3M6IFwiXCIsXG4gICAgZXRoQWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXRoQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZXRoQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV0aEFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRhdG9yQWRkcmVzczogaXNTZXQob2JqZWN0LnZhbGlkYXRvckFkZHJlc3MpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC52YWxpZGF0b3JBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBldGhBZGRyZXNzOiBpc1NldChvYmplY3QuZXRoQWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmV0aEFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvckFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai52YWxpZGF0b3JBZGRyZXNzID0gbWVzc2FnZS52YWxpZGF0b3JBZGRyZXNzKTtcbiAgICBtZXNzYWdlLmV0aEFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJiAob2JqLmV0aEFkZHJlc3MgPSBtZXNzYWdlLmV0aEFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UudmFsaWRhdG9yQWRkcmVzcyA9IG9iamVjdC52YWxpZGF0b3JBZGRyZXNzID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ldGhBZGRyZXNzID0gb2JqZWN0LmV0aEFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGgoKTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoIHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kZXJBZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlQZW5kaW5nU2VuZFRvRXRoID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbmRlckFkZHJlc3M6IGlzU2V0KG9iamVjdC5zZW5kZXJBZGRyZXNzKVxuICAgICAgICA/IFN0cmluZyhvYmplY3Quc2VuZGVyQWRkcmVzcylcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXJBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouc2VuZGVyQWRkcmVzcyA9IG1lc3NhZ2Uuc2VuZGVyQWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8UXVlcnlQZW5kaW5nU2VuZFRvRXRoPik6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGgoKTtcbiAgICBtZXNzYWdlLnNlbmRlckFkZHJlc3MgPSBvYmplY3Quc2VuZGVyQWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlKCk6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2ZlcnNJbkJhdGNoZXM6IFtdLFxuICAgIHVuYmF0Y2hlZFRyYW5zZmVyczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UudHJhbnNmZXJzSW5CYXRjaGVzKSB7XG4gICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnVuYmF0Y2hlZFRyYW5zZmVycykge1xuICAgICAgT3V0Z29pbmdUcmFuc2ZlclR4LmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigxOCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudHJhbnNmZXJzSW5CYXRjaGVzLnB1c2goXG4gICAgICAgICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UudW5iYXRjaGVkVHJhbnNmZXJzLnB1c2goXG4gICAgICAgICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZmVyc0luQmF0Y2hlczogQXJyYXkuaXNBcnJheShvYmplY3Q/LnRyYW5zZmVyc0luQmF0Y2hlcylcbiAgICAgICAgPyBvYmplY3QudHJhbnNmZXJzSW5CYXRjaGVzLm1hcCgoZTogYW55KSA9PlxuICAgICAgICAgICAgT3V0Z29pbmdUcmFuc2ZlclR4LmZyb21KU09OKGUpXG4gICAgICAgICAgKVxuICAgICAgICA6IFtdLFxuICAgICAgdW5iYXRjaGVkVHJhbnNmZXJzOiBBcnJheS5pc0FycmF5KG9iamVjdD8udW5iYXRjaGVkVHJhbnNmZXJzKVxuICAgICAgICA/IG9iamVjdC51bmJhdGNoZWRUcmFuc2ZlcnMubWFwKChlOiBhbnkpID0+XG4gICAgICAgICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZnJvbUpTT04oZSlcbiAgICAgICAgICApXG4gICAgICAgIDogW10sXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuXG4gICAgaWYgKG1lc3NhZ2UudHJhbnNmZXJzSW5CYXRjaGVzKSB7XG4gICAgICBvYmoudHJhbnNmZXJzSW5CYXRjaGVzID0gbWVzc2FnZS50cmFuc2ZlcnNJbkJhdGNoZXMubWFwKChlKSA9PlxuICAgICAgICBlID8gT3V0Z29pbmdUcmFuc2ZlclR4LnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnRyYW5zZmVyc0luQmF0Y2hlcyA9IFtdO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnVuYmF0Y2hlZFRyYW5zZmVycykge1xuICAgICAgb2JqLnVuYmF0Y2hlZFRyYW5zZmVycyA9IG1lc3NhZ2UudW5iYXRjaGVkVHJhbnNmZXJzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IE91dGdvaW5nVHJhbnNmZXJUeC50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai51bmJhdGNoZWRUcmFuc2ZlcnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZT5cbiAgKTogUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLnRyYW5zZmVyc0luQmF0Y2hlcyA9XG4gICAgICBvYmplY3QudHJhbnNmZXJzSW5CYXRjaGVzPy5tYXAoKGUpID0+XG4gICAgICAgIE91dGdvaW5nVHJhbnNmZXJUeC5mcm9tUGFydGlhbChlKVxuICAgICAgKSB8fCBbXTtcbiAgICBtZXNzYWdlLnVuYmF0Y2hlZFRyYW5zZmVycyA9XG4gICAgICBvYmplY3QudW5iYXRjaGVkVHJhbnNmZXJzPy5tYXAoKGUpID0+XG4gICAgICAgIE91dGdvaW5nVHJhbnNmZXJUeC5mcm9tUGFydGlhbChlKVxuICAgICAgKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMoKTogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzIHtcbiAgcmV0dXJuIHtcbiAgICBsaW1pdDogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UubGltaXQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5saW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubGltaXQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMge1xuICAgIHJldHVybiB7XG4gICAgICBsaW1pdDogaXNTZXQob2JqZWN0LmxpbWl0KSA/IEJpZ0ludChvYmplY3QubGltaXQpIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5saW1pdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmxpbWl0ID0gKG1lc3NhZ2UubGltaXQgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHM+XG4gICk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMoKTtcbiAgICBtZXNzYWdlLmxpbWl0ID1cbiAgICAgIG9iamVjdC5saW1pdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5saW1pdCAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QubGltaXQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBwZW5kaW5nSWJjQXV0b0ZvcndhcmRzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzKSB7XG4gICAgICBQZW5kaW5nSWJjQXV0b0ZvcndhcmQuZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDEwKS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzLnB1c2goXG4gICAgICAgICAgICBQZW5kaW5nSWJjQXV0b0ZvcndhcmQuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBlbmRpbmdJYmNBdXRvRm9yd2FyZHM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzKVxuICAgICAgICA/IG9iamVjdC5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzLm1hcCgoZTogYW55KSA9PlxuICAgICAgICAgICAgUGVuZGluZ0liY0F1dG9Gb3J3YXJkLmZyb21KU09OKGUpXG4gICAgICAgICAgKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLnBlbmRpbmdJYmNBdXRvRm9yd2FyZHMpIHtcbiAgICAgIG9iai5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzID0gbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IFBlbmRpbmdJYmNBdXRvRm9yd2FyZC50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8UXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2U+XG4gICk6IFF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk7XG4gICAgbWVzc2FnZS5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzID1cbiAgICAgIG9iamVjdC5wZW5kaW5nSWJjQXV0b0ZvcndhcmRzPy5tYXAoKGUpID0+XG4gICAgICAgIFBlbmRpbmdJYmNBdXRvRm9yd2FyZC5mcm9tUGFydGlhbChlKVxuICAgICAgKSB8fCBbXTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG4vKiogUXVlcnkgZGVmaW5lcyB0aGUgZ1JQQyBxdWVyaWVyIHNlcnZpY2UgKi9cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeSB7XG4gIC8qKiBEZXBsb3ltZW50cyBxdWVyaWVzIGRlcGxveW1lbnRzICovXG4gIFBhcmFtcyhyZXF1ZXN0PzogUXVlcnlQYXJhbXNSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeVBhcmFtc1Jlc3BvbnNlPjtcbiAgQ3VycmVudFZhbHNldChcbiAgICByZXF1ZXN0PzogUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5Q3VycmVudFZhbHNldFJlc3BvbnNlPjtcbiAgVmFsc2V0UmVxdWVzdChcbiAgICByZXF1ZXN0OiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2U+O1xuICBWYWxzZXRDb25maXJtKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeVZhbHNldENvbmZpcm1SZXNwb25zZT47XG4gIFZhbHNldENvbmZpcm1zQnlOb25jZShcbiAgICByZXF1ZXN0OiBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlc3BvbnNlPjtcbiAgTGFzdFZhbHNldFJlcXVlc3RzKFxuICAgIHJlcXVlc3Q/OiBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlPjtcbiAgTGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2U+O1xuICBMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZT47XG4gIExhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlPjtcbiAgTGFzdEV2ZW50Tm9uY2VCeUFkZHIoXG4gICAgcmVxdWVzdDogUXVlcnlMYXN0RXZlbnROb25jZUJ5QWRkclJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2U+O1xuICBCYXRjaEZlZXMocmVxdWVzdD86IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0KTogUHJvbWlzZTxRdWVyeUJhdGNoRmVlUmVzcG9uc2U+O1xuICBPdXRnb2luZ1R4QmF0Y2hlcyhcbiAgICByZXF1ZXN0PzogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2U+O1xuICBPdXRnb2luZ0xvZ2ljQ2FsbHMoXG4gICAgcmVxdWVzdD86IFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVzcG9uc2U+O1xuICBCYXRjaFJlcXVlc3RCeU5vbmNlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZT47XG4gIEJhdGNoQ29uZmlybXMoXG4gICAgcmVxdWVzdDogUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlPjtcbiAgTG9naWNDb25maXJtcyhcbiAgICByZXF1ZXN0OiBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2U+O1xuICBFUkMyMFRvRGVub20oXG4gICAgcmVxdWVzdDogUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlFUkMyMFRvRGVub21SZXNwb25zZT47XG4gIERlbm9tVG9FUkMyMChcbiAgICByZXF1ZXN0OiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlPjtcbiAgR2V0TGFzdE9ic2VydmVkRXRoQmxvY2soXG4gICAgcmVxdWVzdDogUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2U+O1xuICBHZXRMYXN0T2JzZXJ2ZWRFdGhOb25jZShcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RPYnNlcnZlZEV0aE5vbmNlUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZT47XG4gIEdldEF0dGVzdGF0aW9ucyhcbiAgICByZXF1ZXN0OiBRdWVyeUF0dGVzdGF0aW9uc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlPjtcbiAgR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvcihcbiAgICByZXF1ZXN0OiBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1xuICApOiBQcm9taXNlPFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2U+O1xuICBHZXREZWxlZ2F0ZUtleUJ5RXRoKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzXG4gICk6IFByb21pc2U8UXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZT47XG4gIEdldERlbGVnYXRlS2V5QnlPcmNoZXN0cmF0b3IoXG4gICAgcmVxdWVzdDogUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3NcbiAgKTogUHJvbWlzZTxRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlPjtcbiAgR2V0UGVuZGluZ1NlbmRUb0V0aChcbiAgICByZXF1ZXN0OiBRdWVyeVBlbmRpbmdTZW5kVG9FdGhcbiAgKTogUHJvbWlzZTxRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZT47XG4gIEdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHMoXG4gICAgcmVxdWVzdDogUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzXG4gICk6IFByb21pc2U8UXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2U+O1xufVxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q2xpZW50SW1wbCBpbXBsZW1lbnRzIFF1ZXJ5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBycGM6IFJwYztcblxuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICAgIHRoaXMuUGFyYW1zID0gdGhpcy5QYXJhbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLkN1cnJlbnRWYWxzZXQgPSB0aGlzLkN1cnJlbnRWYWxzZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLlZhbHNldFJlcXVlc3QgPSB0aGlzLlZhbHNldFJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLlZhbHNldENvbmZpcm0gPSB0aGlzLlZhbHNldENvbmZpcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLlZhbHNldENvbmZpcm1zQnlOb25jZSA9IHRoaXMuVmFsc2V0Q29uZmlybXNCeU5vbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0VmFsc2V0UmVxdWVzdHMgPSB0aGlzLkxhc3RWYWxzZXRSZXF1ZXN0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuTGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyID1cbiAgICAgIHRoaXMuTGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkciA9XG4gICAgICB0aGlzLkxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkciA9XG4gICAgICB0aGlzLkxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5MYXN0RXZlbnROb25jZUJ5QWRkciA9IHRoaXMuTGFzdEV2ZW50Tm9uY2VCeUFkZHIuYmluZCh0aGlzKTtcbiAgICB0aGlzLkJhdGNoRmVlcyA9IHRoaXMuQmF0Y2hGZWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5PdXRnb2luZ1R4QmF0Y2hlcyA9IHRoaXMuT3V0Z29pbmdUeEJhdGNoZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLk91dGdvaW5nTG9naWNDYWxscyA9IHRoaXMuT3V0Z29pbmdMb2dpY0NhbGxzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5CYXRjaFJlcXVlc3RCeU5vbmNlID0gdGhpcy5CYXRjaFJlcXVlc3RCeU5vbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5CYXRjaENvbmZpcm1zID0gdGhpcy5CYXRjaENvbmZpcm1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5Mb2dpY0NvbmZpcm1zID0gdGhpcy5Mb2dpY0NvbmZpcm1zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5FUkMyMFRvRGVub20gPSB0aGlzLkVSQzIwVG9EZW5vbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuRGVub21Ub0VSQzIwID0gdGhpcy5EZW5vbVRvRVJDMjAuYmluZCh0aGlzKTtcbiAgICB0aGlzLkdldExhc3RPYnNlcnZlZEV0aEJsb2NrID0gdGhpcy5HZXRMYXN0T2JzZXJ2ZWRFdGhCbG9jay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0TGFzdE9ic2VydmVkRXRoTm9uY2UgPSB0aGlzLkdldExhc3RPYnNlcnZlZEV0aE5vbmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5HZXRBdHRlc3RhdGlvbnMgPSB0aGlzLkdldEF0dGVzdGF0aW9ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvciA9IHRoaXMuR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0RGVsZWdhdGVLZXlCeUV0aCA9IHRoaXMuR2V0RGVsZWdhdGVLZXlCeUV0aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuR2V0RGVsZWdhdGVLZXlCeU9yY2hlc3RyYXRvciA9XG4gICAgICB0aGlzLkdldERlbGVnYXRlS2V5QnlPcmNoZXN0cmF0b3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLkdldFBlbmRpbmdTZW5kVG9FdGggPSB0aGlzLkdldFBlbmRpbmdTZW5kVG9FdGguYmluZCh0aGlzKTtcbiAgICB0aGlzLkdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHMgPSB0aGlzLkdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFBhcmFtcyhyZXF1ZXN0OiBRdWVyeVBhcmFtc1JlcXVlc3QgPSB7fSk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBhcmFtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwiZ3Jhdml0eS52MS5RdWVyeVwiLCBcIlBhcmFtc1wiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlQYXJhbXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQ3VycmVudFZhbHNldChcbiAgICByZXF1ZXN0OiBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0ID0ge31cbiAgKTogUHJvbWlzZTxRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUN1cnJlbnRWYWxzZXRSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJDdXJyZW50VmFsc2V0XCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgVmFsc2V0UmVxdWVzdChcbiAgICByZXF1ZXN0OiBRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlWYWxzZXRSZXF1ZXN0UmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXCJncmF2aXR5LnYxLlF1ZXJ5XCIsIFwiVmFsc2V0UmVxdWVzdFwiLCBkYXRhKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIFZhbHNldENvbmZpcm0oXG4gICAgcmVxdWVzdDogUXVlcnlWYWxzZXRDb25maXJtUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwiZ3Jhdml0eS52MS5RdWVyeVwiLCBcIlZhbHNldENvbmZpcm1cIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5VmFsc2V0Q29uZmlybVJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBWYWxzZXRDb25maXJtc0J5Tm9uY2UoXG4gICAgcmVxdWVzdDogUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVZhbHNldENvbmZpcm1zQnlOb25jZVJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIlZhbHNldENvbmZpcm1zQnlOb25jZVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIExhc3RWYWxzZXRSZXF1ZXN0cyhcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1JlcXVlc3QgPSB7fVxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJMYXN0VmFsc2V0UmVxdWVzdHNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RWYWxzZXRSZXF1ZXN0c1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHIoXG4gICAgcmVxdWVzdDogUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlMYXN0UGVuZGluZ0xvZ2ljQ2FsbEJ5QWRkclJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMYXN0RXZlbnROb25jZUJ5QWRkcihcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiTGFzdEV2ZW50Tm9uY2VCeUFkZHJcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEJhdGNoRmVlcyhcbiAgICByZXF1ZXN0OiBRdWVyeUJhdGNoRmVlUmVxdWVzdCA9IHt9XG4gICk6IFByb21pc2U8UXVlcnlCYXRjaEZlZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QmF0Y2hGZWVSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJCYXRjaEZlZXNcIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5QmF0Y2hGZWVSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgT3V0Z29pbmdUeEJhdGNoZXMoXG4gICAgcmVxdWVzdDogUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QgPSB7fVxuICApOiBQcm9taXNlPFF1ZXJ5T3V0Z29pbmdUeEJhdGNoZXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiT3V0Z29pbmdUeEJhdGNoZXNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIE91dGdvaW5nTG9naWNDYWxscyhcbiAgICByZXF1ZXN0OiBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1JlcXVlc3QgPSB7fVxuICApOiBQcm9taXNlPFF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlPdXRnb2luZ0xvZ2ljQ2FsbHNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJPdXRnb2luZ0xvZ2ljQ2FsbHNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBCYXRjaFJlcXVlc3RCeU5vbmNlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJCYXRjaFJlcXVlc3RCeU5vbmNlXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEJhdGNoQ29uZmlybXMoXG4gICAgcmVxdWVzdDogUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3QuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFwiZ3Jhdml0eS52MS5RdWVyeVwiLCBcIkJhdGNoQ29uZmlybXNcIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5QmF0Y2hDb25maXJtc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBMb2dpY0NvbmZpcm1zKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TG9naWNDb25maXJtc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJMb2dpY0NvbmZpcm1zXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgRVJDMjBUb0Rlbm9tKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RVJDMjBUb0Rlbm9tUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuUXVlcnlcIiwgXCJFUkMyMFRvRGVub21cIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIERlbm9tVG9FUkMyMChcbiAgICByZXF1ZXN0OiBRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RGVub21Ub0VSQzIwUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXCJncmF2aXR5LnYxLlF1ZXJ5XCIsIFwiRGVub21Ub0VSQzIwXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeURlbm9tVG9FUkMyMFJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBHZXRMYXN0T2JzZXJ2ZWRFdGhCbG9jayhcbiAgICByZXF1ZXN0OiBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVxdWVzdC5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiR2V0TGFzdE9ic2VydmVkRXRoQmxvY2tcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUxhc3RPYnNlcnZlZEV0aEJsb2NrUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEdldExhc3RPYnNlcnZlZEV0aE5vbmNlKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXRMYXN0T2JzZXJ2ZWRFdGhOb25jZVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgR2V0QXR0ZXN0YXRpb25zKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdFxuICApOiBQcm9taXNlPFF1ZXJ5QXR0ZXN0YXRpb25zUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gUXVlcnlBdHRlc3RhdGlvbnNSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXRBdHRlc3RhdGlvbnNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBHZXREZWxlZ2F0ZUtleUJ5VmFsaWRhdG9yKFxuICAgIHJlcXVlc3Q6IFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzXG4gICk6IFByb21pc2U8UXVlcnlEZWxlZ2F0ZUtleXNCeVZhbGlkYXRvckFkZHJlc3NSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcy5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXG4gICAgICBcImdyYXZpdHkudjEuUXVlcnlcIixcbiAgICAgIFwiR2V0RGVsZWdhdGVLZXlCeVZhbGlkYXRvclwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIFF1ZXJ5RGVsZWdhdGVLZXlzQnlWYWxpZGF0b3JBZGRyZXNzUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEdldERlbGVnYXRlS2V5QnlFdGgoXG4gICAgcmVxdWVzdDogUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NcbiAgKTogUHJvbWlzZTxRdWVyeURlbGVnYXRlS2V5c0J5RXRoQWRkcmVzc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXREZWxlZ2F0ZUtleUJ5RXRoXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgR2V0RGVsZWdhdGVLZXlCeU9yY2hlc3RyYXRvcihcbiAgICByZXF1ZXN0OiBRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1xuICApOiBQcm9taXNlPFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID1cbiAgICAgIFF1ZXJ5RGVsZWdhdGVLZXlzQnlPcmNoZXN0cmF0b3JBZGRyZXNzLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5RdWVyeVwiLFxuICAgICAgXCJHZXREZWxlZ2F0ZUtleUJ5T3JjaGVzdHJhdG9yXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZS5kZWNvZGUoXG4gICAgICAgIG5ldyBCaW5hcnlSZWFkZXIoZGF0YSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgR2V0UGVuZGluZ1NlbmRUb0V0aChcbiAgICByZXF1ZXN0OiBRdWVyeVBlbmRpbmdTZW5kVG9FdGhcbiAgKTogUHJvbWlzZTxRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBlbmRpbmdTZW5kVG9FdGguZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkdldFBlbmRpbmdTZW5kVG9FdGhcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeVBlbmRpbmdTZW5kVG9FdGhSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgR2V0UGVuZGluZ0liY0F1dG9Gb3J3YXJkcyhcbiAgICByZXF1ZXN0OiBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNcbiAgKTogUHJvbWlzZTxRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHMuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLlF1ZXJ5XCIsXG4gICAgICBcIkdldFBlbmRpbmdJYmNBdXRvRm9yd2FyZHNcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBRdWVyeVBlbmRpbmdJYmNBdXRvRm9yd2FyZHNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmluYXJ5UmVhZGVyIiwiQmluYXJ5V3JpdGVyIiwiQXR0ZXN0YXRpb24iLCJPdXRnb2luZ0xvZ2ljQ2FsbCIsIk91dGdvaW5nVHJhbnNmZXJUeCIsIk91dGdvaW5nVHhCYXRjaCIsIlBhcmFtcyIsImJhc2U2NEZyb21CeXRlcyIsImJ5dGVzRnJvbUJhc2U2NCIsImlzU2V0IiwiTXNnQ29uZmlybUJhdGNoIiwiTXNnQ29uZmlybUxvZ2ljQ2FsbCIsIk1zZ1ZhbHNldENvbmZpcm0iLCJCYXRjaEZlZXMiLCJQZW5kaW5nSWJjQXV0b0ZvcndhcmQiLCJWYWxzZXQiLCJwcm90b2J1ZlBhY2thZ2UiLCJjcmVhdGVCYXNlUXVlcnlQYXJhbXNSZXF1ZXN0IiwiUXVlcnlQYXJhbXNSZXF1ZXN0IiwiZW5jb2RlIiwiXyIsIndyaXRlciIsImNyZWF0ZSIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwibWVzc2FnZSIsInRhZyIsInVpbnQzMiIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCIsImNyZWF0ZUJhc2VRdWVyeVBhcmFtc1Jlc3BvbnNlIiwicGFyYW1zIiwiUXVlcnlQYXJhbXNSZXNwb25zZSIsImZvcmsiLCJsZGVsaW0iLCJvYmplY3QiLCJjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVxdWVzdCIsIlF1ZXJ5Q3VycmVudFZhbHNldFJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlDdXJyZW50VmFsc2V0UmVzcG9uc2UiLCJ2YWxzZXQiLCJRdWVyeUN1cnJlbnRWYWxzZXRSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0Iiwibm9uY2UiLCJCaWdJbnQiLCJRdWVyeVZhbHNldFJlcXVlc3RSZXF1ZXN0IiwidWludDY0IiwidG9TdHJpbmciLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRSZXF1ZXN0UmVzcG9uc2UiLCJRdWVyeVZhbHNldFJlcXVlc3RSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeVZhbHNldENvbmZpcm1SZXF1ZXN0IiwiYWRkcmVzcyIsIlF1ZXJ5VmFsc2V0Q29uZmlybVJlcXVlc3QiLCJzdHJpbmciLCJTdHJpbmciLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2UiLCJjb25maXJtIiwiUXVlcnlWYWxzZXRDb25maXJtUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0IiwiUXVlcnlWYWxzZXRDb25maXJtc0J5Tm9uY2VSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UiLCJjb25maXJtcyIsIlF1ZXJ5VmFsc2V0Q29uZmlybXNCeU5vbmNlUmVzcG9uc2UiLCJ2IiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImUiLCJjcmVhdGVCYXNlUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IiwiUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdFZhbHNldFJlcXVlc3RzUmVzcG9uc2UiLCJ2YWxzZXRzIiwiUXVlcnlMYXN0VmFsc2V0UmVxdWVzdHNSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3QiLCJRdWVyeUxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkclJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ1ZhbHNldFJlcXVlc3RCeUFkZHJSZXNwb25zZSIsIlF1ZXJ5TGFzdFBlbmRpbmdWYWxzZXRSZXF1ZXN0QnlBZGRyUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlCYXRjaEZlZVJlcXVlc3QiLCJRdWVyeUJhdGNoRmVlUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeUJhdGNoRmVlUmVzcG9uc2UiLCJiYXRjaEZlZXMiLCJRdWVyeUJhdGNoRmVlUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlMYXN0UGVuZGluZ0JhdGNoUmVxdWVzdEJ5QWRkclJlcXVlc3QiLCJRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyUmVzcG9uc2UiLCJiYXRjaCIsIlF1ZXJ5TGFzdFBlbmRpbmdCYXRjaFJlcXVlc3RCeUFkZHJSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVxdWVzdCIsIlF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHJSZXNwb25zZSIsImNhbGwiLCJRdWVyeUxhc3RQZW5kaW5nTG9naWNDYWxsQnlBZGRyUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1JlcXVlc3QiLCJRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nVHhCYXRjaGVzUmVzcG9uc2UiLCJiYXRjaGVzIiwiUXVlcnlPdXRnb2luZ1R4QmF0Y2hlc1Jlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdCIsIlF1ZXJ5T3V0Z29pbmdMb2dpY0NhbGxzUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlIiwiY2FsbHMiLCJRdWVyeU91dGdvaW5nTG9naWNDYWxsc1Jlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlcXVlc3QiLCJjb250cmFjdEFkZHJlc3MiLCJRdWVyeUJhdGNoUmVxdWVzdEJ5Tm9uY2VSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5QmF0Y2hSZXF1ZXN0QnlOb25jZVJlc3BvbnNlIiwiUXVlcnlCYXRjaFJlcXVlc3RCeU5vbmNlUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVxdWVzdCIsIlF1ZXJ5QmF0Y2hDb25maXJtc1JlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlCYXRjaENvbmZpcm1zUmVzcG9uc2UiLCJRdWVyeUJhdGNoQ29uZmlybXNSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0IiwiaW52YWxpZGF0aW9uSWQiLCJVaW50OEFycmF5IiwiaW52YWxpZGF0aW9uTm9uY2UiLCJRdWVyeUxvZ2ljQ29uZmlybXNSZXF1ZXN0IiwiYnl0ZXMiLCJjcmVhdGVCYXNlUXVlcnlMb2dpY0NvbmZpcm1zUmVzcG9uc2UiLCJRdWVyeUxvZ2ljQ29uZmlybXNSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVxdWVzdCIsIlF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdEV2ZW50Tm9uY2VCeUFkZHJSZXNwb25zZSIsImV2ZW50Tm9uY2UiLCJRdWVyeUxhc3RFdmVudE5vbmNlQnlBZGRyUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXF1ZXN0IiwiZXJjMjAiLCJRdWVyeUVSQzIwVG9EZW5vbVJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlFUkMyMFRvRGVub21SZXNwb25zZSIsImRlbm9tIiwiY29zbW9zT3JpZ2luYXRlZCIsIlF1ZXJ5RVJDMjBUb0Rlbm9tUmVzcG9uc2UiLCJib29sIiwiQm9vbGVhbiIsImNyZWF0ZUJhc2VRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3QiLCJRdWVyeURlbm9tVG9FUkMyMFJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlEZW5vbVRvRVJDMjBSZXNwb25zZSIsIlF1ZXJ5RGVub21Ub0VSQzIwUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1JlcXVlc3QiLCJ1c2VWMUtleSIsIlF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXF1ZXN0IiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoQmxvY2tSZXNwb25zZSIsImJsb2NrIiwiUXVlcnlMYXN0T2JzZXJ2ZWRFdGhCbG9ja1Jlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5TGFzdE9ic2VydmVkRXRoTm9uY2VSZXF1ZXN0IiwiUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlcXVlc3QiLCJjcmVhdGVCYXNlUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIiwiUXVlcnlMYXN0T2JzZXJ2ZWRFdGhOb25jZVJlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCIsImxpbWl0Iiwib3JkZXJCeSIsImNsYWltVHlwZSIsImhlaWdodCIsIlF1ZXJ5QXR0ZXN0YXRpb25zUmVxdWVzdCIsImNyZWF0ZUJhc2VRdWVyeUF0dGVzdGF0aW9uc1Jlc3BvbnNlIiwiYXR0ZXN0YXRpb25zIiwiUXVlcnlBdHRlc3RhdGlvbnNSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcyIsInZhbGlkYXRvckFkZHJlc3MiLCJRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzcyIsImNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIiwiZXRoQWRkcmVzcyIsIm9yY2hlc3RyYXRvckFkZHJlc3MiLCJRdWVyeURlbGVnYXRlS2V5c0J5VmFsaWRhdG9yQWRkcmVzc1Jlc3BvbnNlIiwiY3JlYXRlQmFzZVF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzIiwiUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3MiLCJjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeUV0aEFkZHJlc3NSZXNwb25zZSIsIlF1ZXJ5RGVsZWdhdGVLZXlzQnlFdGhBZGRyZXNzUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3MiLCJRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzcyIsImNyZWF0ZUJhc2VRdWVyeURlbGVnYXRlS2V5c0J5T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlIiwiUXVlcnlEZWxlZ2F0ZUtleXNCeU9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSIsImNyZWF0ZUJhc2VRdWVyeVBlbmRpbmdTZW5kVG9FdGgiLCJzZW5kZXJBZGRyZXNzIiwiUXVlcnlQZW5kaW5nU2VuZFRvRXRoIiwiY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ1NlbmRUb0V0aFJlc3BvbnNlIiwidHJhbnNmZXJzSW5CYXRjaGVzIiwidW5iYXRjaGVkVHJhbnNmZXJzIiwiUXVlcnlQZW5kaW5nU2VuZFRvRXRoUmVzcG9uc2UiLCJjcmVhdGVCYXNlUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzIiwiUXVlcnlQZW5kaW5nSWJjQXV0b0ZvcndhcmRzIiwiY3JlYXRlQmFzZVF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIiwicGVuZGluZ0liY0F1dG9Gb3J3YXJkcyIsIlF1ZXJ5UGVuZGluZ0liY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIiwiUXVlcnlDbGllbnRJbXBsIiwicmVxdWVzdCIsImRhdGEiLCJmaW5pc2giLCJwcm9taXNlIiwicnBjIiwidGhlbiIsIkN1cnJlbnRWYWxzZXQiLCJWYWxzZXRSZXF1ZXN0IiwiVmFsc2V0Q29uZmlybSIsIlZhbHNldENvbmZpcm1zQnlOb25jZSIsIkxhc3RWYWxzZXRSZXF1ZXN0cyIsIkxhc3RQZW5kaW5nVmFsc2V0UmVxdWVzdEJ5QWRkciIsIkxhc3RQZW5kaW5nQmF0Y2hSZXF1ZXN0QnlBZGRyIiwiTGFzdFBlbmRpbmdMb2dpY0NhbGxCeUFkZHIiLCJMYXN0RXZlbnROb25jZUJ5QWRkciIsIk91dGdvaW5nVHhCYXRjaGVzIiwiT3V0Z29pbmdMb2dpY0NhbGxzIiwiQmF0Y2hSZXF1ZXN0QnlOb25jZSIsIkJhdGNoQ29uZmlybXMiLCJMb2dpY0NvbmZpcm1zIiwiRVJDMjBUb0Rlbm9tIiwiRGVub21Ub0VSQzIwIiwiR2V0TGFzdE9ic2VydmVkRXRoQmxvY2siLCJHZXRMYXN0T2JzZXJ2ZWRFdGhOb25jZSIsIkdldEF0dGVzdGF0aW9ucyIsIkdldERlbGVnYXRlS2V5QnlWYWxpZGF0b3IiLCJHZXREZWxlZ2F0ZUtleUJ5RXRoIiwiR2V0RGVsZWdhdGVLZXlCeU9yY2hlc3RyYXRvciIsIkdldFBlbmRpbmdTZW5kVG9FdGgiLCJHZXRQZW5kaW5nSWJjQXV0b0ZvcndhcmRzIiwiY29uc3RydWN0b3IiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7QUFDbEIsU0FBU0EsWUFBWSxFQUFFQyxZQUFZLFFBQVEsc0JBQXNCO0FBQ2pFLFNBQVNDLFdBQVcsUUFBUSxnQkFBZ0I7QUFDNUMsU0FDRUMsaUJBQWlCLEVBQ2pCQyxrQkFBa0IsRUFDbEJDLGVBQWUsUUFDVixVQUFVO0FBQ2pCLFNBQVNDLE1BQU0sUUFBUSxZQUFZO0FBQ25DLFNBQWNDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxLQUFLLFFBQVEsWUFBWTtBQUN6RSxTQUFTQyxlQUFlLEVBQUVDLG1CQUFtQixFQUFFQyxnQkFBZ0IsUUFBUSxTQUFTO0FBQ2hGLFNBQVNDLFNBQVMsUUFBUSxTQUFTO0FBQ25DLFNBQVNDLHFCQUFxQixFQUFFQyxNQUFNLFFBQVEsVUFBVTtBQUN4RCxPQUFPLE1BQU1DLGtCQUFrQixhQUFhO0FBNE41QyxTQUFTQztJQUNQLE9BQU8sQ0FBQztBQUNWO0FBRUEsT0FBTyxNQUFNQyxxQkFBcUI7SUFDaENDLFFBQ0VDLENBQXFCLEVBQ3JCQyxTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsT0FBT0Q7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVkO1FBRWhCLE1BQU9TLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2Q7b0JBQ0VOLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTZixDQUFNO1FBQ2IsT0FBTyxDQUFDO0lBQ1Y7SUFFQWdCLFFBQU9oQixDQUFxQjtRQUMxQixNQUFNaUIsTUFBVyxDQUFDO1FBQ2xCLE9BQU9BO0lBQ1Q7SUFFQUMsYUFBWWxCLENBQThCO1FBQ3hDLE1BQU1XLFVBQVVkO1FBQ2hCLE9BQU9jO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU1E7SUFDUCxPQUFPO1FBQ0xDLFFBQVFaO0lBQ1Y7QUFDRjtBQUVBLE9BQU8sTUFBTWEsc0JBQXNCO0lBQ2pDdEIsUUFDRVksT0FBNEIsRUFDNUJWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRUyxNQUFNLEtBQUtaLFdBQVc7WUFDaEN0QixPQUFPYSxNQUFNLENBQUNZLFFBQVFTLE1BQU0sRUFBRW5CLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQUlDLE1BQU07UUFDaEU7UUFFQSxPQUFPdEI7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVRO1FBRWhCLE1BQU9iLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUVMsTUFBTSxHQUFHbEMsT0FBT2lCLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFDcEQ7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTEosUUFBUS9CLE1BQU1tQyxPQUFPSixNQUFNLElBQUlsQyxPQUFPNkIsUUFBUSxDQUFDUyxPQUFPSixNQUFNLElBQUlaO1FBQ2xFO0lBQ0Y7SUFFQVEsUUFBT0wsT0FBNEI7UUFDakMsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRUyxNQUFNLEtBQUtaLGFBQ2hCUyxDQUFBQSxJQUFJRyxNQUFNLEdBQUdULFFBQVFTLE1BQU0sR0FBR2xDLE9BQU84QixNQUFNLENBQUNMLFFBQVFTLE1BQU0sSUFBSVosU0FBUTtRQUN6RSxPQUFPUztJQUNUO0lBRUFDLGFBQVlNLE1BQW9DO1FBQzlDLE1BQU1iLFVBQVVRO1FBQ2hCUixRQUFRUyxNQUFNLEdBQ1pJLE9BQU9KLE1BQU0sS0FBS1osYUFBYWdCLE9BQU9KLE1BQU0sS0FBSyxPQUM3Q2xDLE9BQU9nQyxXQUFXLENBQUNNLE9BQU9KLE1BQU0sSUFDaENaO1FBQ04sT0FBT0c7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTYztJQUNQLE9BQU8sQ0FBQztBQUNWO0FBRUEsT0FBTyxNQUFNQyw0QkFBNEI7SUFDdkMzQixRQUNFQyxDQUE0QixFQUM1QkMsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLE9BQU9EO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVYztRQUVoQixNQUFPbkIsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZDtvQkFDRU4sT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNmLENBQU07UUFDYixPQUFPLENBQUM7SUFDVjtJQUVBZ0IsUUFBT2hCLENBQTRCO1FBQ2pDLE1BQU1pQixNQUFXLENBQUM7UUFDbEIsT0FBT0E7SUFDVDtJQUVBQyxhQUNFbEIsQ0FBcUM7UUFFckMsTUFBTVcsVUFBVWM7UUFDaEIsT0FBT2Q7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTZ0I7SUFDUCxPQUFPO1FBQ0xDLFFBQVFwQjtJQUNWO0FBQ0Y7QUFFQSxPQUFPLE1BQU1xQiw2QkFBNkI7SUFDeEM5QixRQUNFWSxPQUFtQyxFQUNuQ1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVFpQixNQUFNLEtBQUtwQixXQUFXO1lBQ2hDYixPQUFPSSxNQUFNLENBQUNZLFFBQVFpQixNQUFNLEVBQUUzQixPQUFPWSxNQUFNLENBQUMsSUFBSVMsSUFBSSxJQUFJQyxNQUFNO1FBQ2hFO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVZ0I7UUFFaEIsTUFBT3JCLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUWlCLE1BQU0sR0FBR2pDLE9BQU9RLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFDcEQ7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTEksUUFBUXZDLE1BQU1tQyxPQUFPSSxNQUFNLElBQUlqQyxPQUFPb0IsUUFBUSxDQUFDUyxPQUFPSSxNQUFNLElBQUlwQjtRQUNsRTtJQUNGO0lBRUFRLFFBQU9MLE9BQW1DO1FBQ3hDLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUWlCLE1BQU0sS0FBS3BCLGFBQ2hCUyxDQUFBQSxJQUFJVyxNQUFNLEdBQUdqQixRQUFRaUIsTUFBTSxHQUFHakMsT0FBT3FCLE1BQU0sQ0FBQ0wsUUFBUWlCLE1BQU0sSUFBSXBCLFNBQVE7UUFDekUsT0FBT1M7SUFDVDtJQUVBQyxhQUNFTSxNQUEyQztRQUUzQyxNQUFNYixVQUFVZ0I7UUFDaEJoQixRQUFRaUIsTUFBTSxHQUNaSixPQUFPSSxNQUFNLEtBQUtwQixhQUFhZ0IsT0FBT0ksTUFBTSxLQUFLLE9BQzdDakMsT0FBT3VCLFdBQVcsQ0FBQ00sT0FBT0ksTUFBTSxJQUNoQ3BCO1FBQ04sT0FBT0c7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTbUI7SUFDUCxPQUFPO1FBQ0xDLE9BQU9DLE9BQU87SUFDaEI7QUFDRjtBQUVBLE9BQU8sTUFBTUMsNEJBQTRCO0lBQ3ZDbEMsUUFDRVksT0FBa0MsRUFDbENWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRb0IsS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVFvQixLQUFLO1FBQ3ZDO1FBRUEsT0FBTzlCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVbUI7UUFFaEIsTUFBT3hCLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUW9CLEtBQUssR0FBR3pCLE9BQU80QixNQUFNO29CQUM3QjtnQkFFRjtvQkFDRTVCLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTE8sT0FBTzFDLE1BQU1tQyxPQUFPTyxLQUFLLElBQUlDLE9BQU9SLE9BQU9PLEtBQUssSUFBSUMsT0FBTztRQUM3RDtJQUNGO0lBRUFoQixRQUFPTCxPQUFrQztRQUN2QyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVFvQixLQUFLLEtBQUt2QixhQUNmUyxDQUFBQSxJQUFJYyxLQUFLLEdBQUcsQUFBQ3BCLENBQUFBLFFBQVFvQixLQUFLLElBQUlDLE9BQU8sRUFBQyxFQUFHRyxRQUFRLEVBQUM7UUFDckQsT0FBT2xCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBMEM7UUFFMUMsTUFBTWIsVUFBVW1CO1FBQ2hCbkIsUUFBUW9CLEtBQUssR0FDWFAsT0FBT08sS0FBSyxLQUFLdkIsYUFBYWdCLE9BQU9PLEtBQUssS0FBSyxPQUMzQ0MsT0FBT1IsT0FBT08sS0FBSyxJQUNuQkMsT0FBTztRQUNiLE9BQU9yQjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVN5QjtJQUNQLE9BQU87UUFDTFIsUUFBUXBCO0lBQ1Y7QUFDRjtBQUVBLE9BQU8sTUFBTTZCLDZCQUE2QjtJQUN4Q3RDLFFBQ0VZLE9BQW1DLEVBQ25DVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUWlCLE1BQU0sS0FBS3BCLFdBQVc7WUFDaENiLE9BQU9JLE1BQU0sQ0FBQ1ksUUFBUWlCLE1BQU0sRUFBRTNCLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQUlDLE1BQU07UUFDaEU7UUFFQSxPQUFPdEI7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVV5QjtRQUVoQixNQUFPOUIsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRaUIsTUFBTSxHQUFHakMsT0FBT1EsTUFBTSxDQUFDRyxRQUFRQSxPQUFPTyxNQUFNO29CQUNwRDtnQkFFRjtvQkFDRVAsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMSSxRQUFRdkMsTUFBTW1DLE9BQU9JLE1BQU0sSUFBSWpDLE9BQU9vQixRQUFRLENBQUNTLE9BQU9JLE1BQU0sSUFBSXBCO1FBQ2xFO0lBQ0Y7SUFFQVEsUUFBT0wsT0FBbUM7UUFDeEMsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRaUIsTUFBTSxLQUFLcEIsYUFDaEJTLENBQUFBLElBQUlXLE1BQU0sR0FBR2pCLFFBQVFpQixNQUFNLEdBQUdqQyxPQUFPcUIsTUFBTSxDQUFDTCxRQUFRaUIsTUFBTSxJQUFJcEIsU0FBUTtRQUN6RSxPQUFPUztJQUNUO0lBRUFDLGFBQ0VNLE1BQTJDO1FBRTNDLE1BQU1iLFVBQVV5QjtRQUNoQnpCLFFBQVFpQixNQUFNLEdBQ1pKLE9BQU9JLE1BQU0sS0FBS3BCLGFBQWFnQixPQUFPSSxNQUFNLEtBQUssT0FDN0NqQyxPQUFPdUIsV0FBVyxDQUFDTSxPQUFPSSxNQUFNLElBQ2hDcEI7UUFDTixPQUFPRztJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVMyQjtJQUNQLE9BQU87UUFDTFAsT0FBT0MsT0FBTztRQUNkTyxTQUFTO0lBQ1g7QUFDRjtBQUVBLE9BQU8sTUFBTUMsNEJBQTRCO0lBQ3ZDekMsUUFDRVksT0FBa0MsRUFDbENWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRb0IsS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVFvQixLQUFLO1FBQ3ZDO1FBRUEsSUFBSXBCLFFBQVE0QixPQUFPLEtBQUssSUFBSTtZQUMxQnRDLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUTRCLE9BQU87UUFDMUM7UUFFQSxPQUFPdEM7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVUyQjtRQUVoQixNQUFPaEMsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRb0IsS0FBSyxHQUFHekIsT0FBTzRCLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0h2QixRQUFRNEIsT0FBTyxHQUFHakMsT0FBT21DLE1BQU07b0JBQy9CO2dCQUVGO29CQUNFbkMsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMTyxPQUFPMUMsTUFBTW1DLE9BQU9PLEtBQUssSUFBSUMsT0FBT1IsT0FBT08sS0FBSyxJQUFJQyxPQUFPO1lBQzNETyxTQUFTbEQsTUFBTW1DLE9BQU9lLE9BQU8sSUFBSUcsT0FBT2xCLE9BQU9lLE9BQU8sSUFBSTtRQUM1RDtJQUNGO0lBRUF2QixRQUFPTCxPQUFrQztRQUN2QyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVFvQixLQUFLLEtBQUt2QixhQUNmUyxDQUFBQSxJQUFJYyxLQUFLLEdBQUcsQUFBQ3BCLENBQUFBLFFBQVFvQixLQUFLLElBQUlDLE9BQU8sRUFBQyxFQUFHRyxRQUFRLEVBQUM7UUFDckR4QixRQUFRNEIsT0FBTyxLQUFLL0IsYUFBY1MsQ0FBQUEsSUFBSXNCLE9BQU8sR0FBRzVCLFFBQVE0QixPQUFPLEFBQUQ7UUFDOUQsT0FBT3RCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBMEM7UUFFMUMsTUFBTWIsVUFBVTJCO1FBQ2hCM0IsUUFBUW9CLEtBQUssR0FDWFAsT0FBT08sS0FBSyxLQUFLdkIsYUFBYWdCLE9BQU9PLEtBQUssS0FBSyxPQUMzQ0MsT0FBT1IsT0FBT08sS0FBSyxJQUNuQkMsT0FBTztZQUNLUjtRQUFsQmIsUUFBUTRCLE9BQU8sR0FBR2YsQ0FBQUEsa0JBQUFBLE9BQU9lLE9BQU8sY0FBZGYsNkJBQUFBLGtCQUFrQjtRQUNwQyxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNnQztJQUNQLE9BQU87UUFDTEMsU0FBU3BDO0lBQ1g7QUFDRjtBQUVBLE9BQU8sTUFBTXFDLDZCQUE2QjtJQUN4QzlDLFFBQ0VZLE9BQW1DLEVBQ25DVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUWlDLE9BQU8sS0FBS3BDLFdBQVc7WUFDakNoQixpQkFBaUJPLE1BQU0sQ0FDckJZLFFBQVFpQyxPQUFPLEVBQ2YzQyxPQUFPWSxNQUFNLENBQUMsSUFBSVMsSUFBSSxJQUN0QkMsTUFBTTtRQUNWO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVZ0M7UUFFaEIsTUFBT3JDLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUWlDLE9BQU8sR0FBR3BELGlCQUFpQlcsTUFBTSxDQUFDRyxRQUFRQSxPQUFPTyxNQUFNO29CQUMvRDtnQkFFRjtvQkFDRVAsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMb0IsU0FBU3ZELE1BQU1tQyxPQUFPb0IsT0FBTyxJQUN6QnBELGlCQUFpQnVCLFFBQVEsQ0FBQ1MsT0FBT29CLE9BQU8sSUFDeENwQztRQUNOO0lBQ0Y7SUFFQVEsUUFBT0wsT0FBbUM7UUFDeEMsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRaUMsT0FBTyxLQUFLcEMsYUFDakJTLENBQUFBLElBQUkyQixPQUFPLEdBQUdqQyxRQUFRaUMsT0FBTyxHQUMxQnBELGlCQUFpQndCLE1BQU0sQ0FBQ0wsUUFBUWlDLE9BQU8sSUFDdkNwQyxTQUFRO1FBQ2QsT0FBT1M7SUFDVDtJQUVBQyxhQUNFTSxNQUEyQztRQUUzQyxNQUFNYixVQUFVZ0M7UUFDaEJoQyxRQUFRaUMsT0FBTyxHQUNicEIsT0FBT29CLE9BQU8sS0FBS3BDLGFBQWFnQixPQUFPb0IsT0FBTyxLQUFLLE9BQy9DcEQsaUJBQWlCMEIsV0FBVyxDQUFDTSxPQUFPb0IsT0FBTyxJQUMzQ3BDO1FBQ04sT0FBT0c7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTbUM7SUFDUCxPQUFPO1FBQ0xmLE9BQU9DLE9BQU87SUFDaEI7QUFDRjtBQUVBLE9BQU8sTUFBTWUsb0NBQW9DO0lBQy9DaEQsUUFDRVksT0FBMEMsRUFDMUNWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRb0IsS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVFvQixLQUFLO1FBQ3ZDO1FBRUEsT0FBTzlCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVbUM7UUFFaEIsTUFBT3hDLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUW9CLEtBQUssR0FBR3pCLE9BQU80QixNQUFNO29CQUM3QjtnQkFFRjtvQkFDRTVCLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTE8sT0FBTzFDLE1BQU1tQyxPQUFPTyxLQUFLLElBQUlDLE9BQU9SLE9BQU9PLEtBQUssSUFBSUMsT0FBTztRQUM3RDtJQUNGO0lBRUFoQixRQUFPTCxPQUEwQztRQUMvQyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVFvQixLQUFLLEtBQUt2QixhQUNmUyxDQUFBQSxJQUFJYyxLQUFLLEdBQUcsQUFBQ3BCLENBQUFBLFFBQVFvQixLQUFLLElBQUlDLE9BQU8sRUFBQyxFQUFHRyxRQUFRLEVBQUM7UUFDckQsT0FBT2xCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBa0Q7UUFFbEQsTUFBTWIsVUFBVW1DO1FBQ2hCbkMsUUFBUW9CLEtBQUssR0FDWFAsT0FBT08sS0FBSyxLQUFLdkIsYUFBYWdCLE9BQU9PLEtBQUssS0FBSyxPQUMzQ0MsT0FBT1IsT0FBT08sS0FBSyxJQUNuQkMsT0FBTztRQUNiLE9BQU9yQjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNxQztJQUNQLE9BQU87UUFDTEMsVUFBVSxFQUFFO0lBQ2Q7QUFDRjtBQUVBLE9BQU8sTUFBTUMscUNBQXFDO0lBQ2hEbkQsUUFDRVksT0FBMkMsRUFDM0NWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxLQUFLLE1BQU1pRCxLQUFLeEMsUUFBUXNDLFFBQVEsQ0FBRTtZQUNoQ3pELGlCQUFpQk8sTUFBTSxDQUFDb0QsR0FBSWxELE9BQU9ZLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQUlDLE1BQU07UUFDOUQ7UUFFQSxPQUFPdEI7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVxQztRQUVoQixNQUFPMUMsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRc0MsUUFBUSxDQUFDRyxJQUFJLENBQ25CNUQsaUJBQWlCVyxNQUFNLENBQUNHLFFBQVFBLE9BQU9PLE1BQU07b0JBRS9DO2dCQUVGO29CQUNFUCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0x5QixVQUFVSSxNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVF5QixRQUFRLElBQ3BDekIsT0FBT3lCLFFBQVEsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQVdoRSxpQkFBaUJ1QixRQUFRLENBQUN5QyxNQUMxRCxFQUFFO1FBQ1I7SUFDRjtJQUVBeEMsUUFBT0wsT0FBMkM7UUFDaEQsTUFBTU0sTUFBVyxDQUFDO1FBRWxCLElBQUlOLFFBQVFzQyxRQUFRLEVBQUU7WUFDcEJoQyxJQUFJZ0MsUUFBUSxHQUFHdEMsUUFBUXNDLFFBQVEsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQ25DQSxJQUFJaEUsaUJBQWlCd0IsTUFBTSxDQUFDd0MsS0FBS2hEO1FBRXJDLE9BQU87WUFDTFMsSUFBSWdDLFFBQVEsR0FBRyxFQUFFO1FBQ25CO1FBRUEsT0FBT2hDO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBbUQ7WUFJakRBO1FBRkYsTUFBTWIsVUFBVXFDO1FBQ2hCckMsUUFBUXNDLFFBQVEsR0FDZHpCLEVBQUFBLG1CQUFBQSxPQUFPeUIsUUFBUSxjQUFmekIsdUNBQUFBLGlCQUFpQitCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNaEUsaUJBQWlCMEIsV0FBVyxDQUFDc0MsUUFBTyxFQUFFO1FBQ3BFLE9BQU83QztJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVM4QztJQUNQLE9BQU8sQ0FBQztBQUNWO0FBRUEsT0FBTyxNQUFNQyxpQ0FBaUM7SUFDNUMzRCxRQUNFQyxDQUFpQyxFQUNqQ0MsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLE9BQU9EO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVOEM7UUFFaEIsTUFBT25ELE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2Q7b0JBQ0VOLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTZixDQUFNO1FBQ2IsT0FBTyxDQUFDO0lBQ1Y7SUFFQWdCLFFBQU9oQixDQUFpQztRQUN0QyxNQUFNaUIsTUFBVyxDQUFDO1FBQ2xCLE9BQU9BO0lBQ1Q7SUFFQUMsYUFDRWxCLENBQTBDO1FBRTFDLE1BQU1XLFVBQVU4QztRQUNoQixPQUFPOUM7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTZ0Q7SUFDUCxPQUFPO1FBQ0xDLFNBQVMsRUFBRTtJQUNiO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLGtDQUFrQztJQUM3QzlELFFBQ0VZLE9BQXdDLEVBQ3hDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsS0FBSyxNQUFNaUQsS0FBS3hDLFFBQVFpRCxPQUFPLENBQUU7WUFDL0JqRSxPQUFPSSxNQUFNLENBQUNvRCxHQUFJbEQsT0FBT1ksTUFBTSxDQUFDLElBQUlTLElBQUksSUFBSUMsTUFBTTtRQUNwRDtRQUVBLE9BQU90QjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVWdEO1FBRWhCLE1BQU9yRCxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVFpRCxPQUFPLENBQUNSLElBQUksQ0FBQ3pELE9BQU9RLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFDeEQ7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTG9DLFNBQVNQLE1BQU1DLE9BQU8sQ0FBQzlCLG1CQUFBQSw2QkFBQUEsT0FBUW9DLE9BQU8sSUFDbENwQyxPQUFPb0MsT0FBTyxDQUFDTCxHQUFHLENBQUMsQ0FBQ0MsSUFBVzdELE9BQU9vQixRQUFRLENBQUN5QyxNQUMvQyxFQUFFO1FBQ1I7SUFDRjtJQUVBeEMsUUFBT0wsT0FBd0M7UUFDN0MsTUFBTU0sTUFBVyxDQUFDO1FBRWxCLElBQUlOLFFBQVFpRCxPQUFPLEVBQUU7WUFDbkIzQyxJQUFJMkMsT0FBTyxHQUFHakQsUUFBUWlELE9BQU8sQ0FBQ0wsR0FBRyxDQUFDLENBQUNDLElBQ2pDQSxJQUFJN0QsT0FBT3FCLE1BQU0sQ0FBQ3dDLEtBQUtoRDtRQUUzQixPQUFPO1lBQ0xTLElBQUkyQyxPQUFPLEdBQUcsRUFBRTtRQUNsQjtRQUVBLE9BQU8zQztJQUNUO0lBRUFDLGFBQ0VNLE1BQWdEO1lBRzlCQTtRQURsQixNQUFNYixVQUFVZ0Q7UUFDaEJoRCxRQUFRaUQsT0FBTyxHQUFHcEMsRUFBQUEsa0JBQUFBLE9BQU9vQyxPQUFPLGNBQWRwQyxzQ0FBQUEsZ0JBQWdCK0IsR0FBRyxDQUFDLENBQUNDLElBQU03RCxPQUFPdUIsV0FBVyxDQUFDc0MsUUFBTyxFQUFFO1FBQ3pFLE9BQU83QztJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNtRDtJQUNQLE9BQU87UUFDTHZCLFNBQVM7SUFDWDtBQUNGO0FBRUEsT0FBTyxNQUFNd0IsNkNBQTZDO0lBQ3hEaEUsUUFDRVksT0FBbUQsRUFDbkRWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRNEIsT0FBTyxLQUFLLElBQUk7WUFDMUJ0QyxPQUFPWSxNQUFNLENBQUMsSUFBSTRCLE1BQU0sQ0FBQzlCLFFBQVE0QixPQUFPO1FBQzFDO1FBRUEsT0FBT3RDO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVbUQ7UUFFaEIsTUFBT3hELE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUTRCLE9BQU8sR0FBR2pDLE9BQU9tQyxNQUFNO29CQUMvQjtnQkFFRjtvQkFDRW5DLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTGUsU0FBU2xELE1BQU1tQyxPQUFPZSxPQUFPLElBQUlHLE9BQU9sQixPQUFPZSxPQUFPLElBQUk7UUFDNUQ7SUFDRjtJQUVBdkIsUUFBT0wsT0FBbUQ7UUFDeEQsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRNEIsT0FBTyxLQUFLL0IsYUFBY1MsQ0FBQUEsSUFBSXNCLE9BQU8sR0FBRzVCLFFBQVE0QixPQUFPLEFBQUQ7UUFDOUQsT0FBT3RCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBMkQ7UUFFM0QsTUFBTWIsVUFBVW1EO1lBQ0V0QztRQUFsQmIsUUFBUTRCLE9BQU8sR0FBR2YsQ0FBQUEsa0JBQUFBLE9BQU9lLE9BQU8sY0FBZGYsNkJBQUFBLGtCQUFrQjtRQUNwQyxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNxRDtJQUNQLE9BQU87UUFDTEosU0FBUyxFQUFFO0lBQ2I7QUFDRjtBQUVBLE9BQU8sTUFBTUssOENBQThDO0lBQ3pEbEUsUUFDRVksT0FBb0QsRUFDcERWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxLQUFLLE1BQU1pRCxLQUFLeEMsUUFBUWlELE9BQU8sQ0FBRTtZQUMvQmpFLE9BQU9JLE1BQU0sQ0FBQ29ELEdBQUlsRCxPQUFPWSxNQUFNLENBQUMsSUFBSVMsSUFBSSxJQUFJQyxNQUFNO1FBQ3BEO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVcUQ7UUFFaEIsTUFBTzFELE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUWlELE9BQU8sQ0FBQ1IsSUFBSSxDQUFDekQsT0FBT1EsTUFBTSxDQUFDRyxRQUFRQSxPQUFPTyxNQUFNO29CQUN4RDtnQkFFRjtvQkFDRVAsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMb0MsU0FBU1AsTUFBTUMsT0FBTyxDQUFDOUIsbUJBQUFBLDZCQUFBQSxPQUFRb0MsT0FBTyxJQUNsQ3BDLE9BQU9vQyxPQUFPLENBQUNMLEdBQUcsQ0FBQyxDQUFDQyxJQUFXN0QsT0FBT29CLFFBQVEsQ0FBQ3lDLE1BQy9DLEVBQUU7UUFDUjtJQUNGO0lBRUF4QyxRQUFPTCxPQUFvRDtRQUN6RCxNQUFNTSxNQUFXLENBQUM7UUFFbEIsSUFBSU4sUUFBUWlELE9BQU8sRUFBRTtZQUNuQjNDLElBQUkyQyxPQUFPLEdBQUdqRCxRQUFRaUQsT0FBTyxDQUFDTCxHQUFHLENBQUMsQ0FBQ0MsSUFDakNBLElBQUk3RCxPQUFPcUIsTUFBTSxDQUFDd0MsS0FBS2hEO1FBRTNCLE9BQU87WUFDTFMsSUFBSTJDLE9BQU8sR0FBRyxFQUFFO1FBQ2xCO1FBRUEsT0FBTzNDO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBNEQ7WUFHMUNBO1FBRGxCLE1BQU1iLFVBQVVxRDtRQUNoQnJELFFBQVFpRCxPQUFPLEdBQUdwQyxFQUFBQSxrQkFBQUEsT0FBT29DLE9BQU8sY0FBZHBDLHNDQUFBQSxnQkFBZ0IrQixHQUFHLENBQUMsQ0FBQ0MsSUFBTTdELE9BQU91QixXQUFXLENBQUNzQyxRQUFPLEVBQUU7UUFDekUsT0FBTzdDO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU3VEO0lBQ1AsT0FBTyxDQUFDO0FBQ1Y7QUFFQSxPQUFPLE1BQU1DLHVCQUF1QjtJQUNsQ3BFLFFBQ0VDLENBQXVCLEVBQ3ZCQyxTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsT0FBT0Q7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVV1RDtRQUVoQixNQUFPNUQsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZDtvQkFDRU4sT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNmLENBQU07UUFDYixPQUFPLENBQUM7SUFDVjtJQUVBZ0IsUUFBT2hCLENBQXVCO1FBQzVCLE1BQU1pQixNQUFXLENBQUM7UUFDbEIsT0FBT0E7SUFDVDtJQUVBQyxhQUFZbEIsQ0FBZ0M7UUFDMUMsTUFBTVcsVUFBVXVEO1FBQ2hCLE9BQU92RDtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVN5RDtJQUNQLE9BQU87UUFDTEMsV0FBVyxFQUFFO0lBQ2Y7QUFDRjtBQUVBLE9BQU8sTUFBTUMsd0JBQXdCO0lBQ25DdkUsUUFDRVksT0FBOEIsRUFDOUJWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxLQUFLLE1BQU1pRCxLQUFLeEMsUUFBUTBELFNBQVMsQ0FBRTtZQUNqQzVFLFVBQVVNLE1BQU0sQ0FBQ29ELEdBQUlsRCxPQUFPWSxNQUFNLENBQUMsSUFBSVMsSUFBSSxJQUFJQyxNQUFNO1FBQ3ZEO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVeUQ7UUFFaEIsTUFBTzlELE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUTBELFNBQVMsQ0FBQ2pCLElBQUksQ0FBQzNELFVBQVVVLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFDN0Q7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTDZDLFdBQVdoQixNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVE2QyxTQUFTLElBQ3RDN0MsT0FBTzZDLFNBQVMsQ0FBQ2QsR0FBRyxDQUFDLENBQUNDLElBQVcvRCxVQUFVc0IsUUFBUSxDQUFDeUMsTUFDcEQsRUFBRTtRQUNSO0lBQ0Y7SUFFQXhDLFFBQU9MLE9BQThCO1FBQ25DLE1BQU1NLE1BQVcsQ0FBQztRQUVsQixJQUFJTixRQUFRMEQsU0FBUyxFQUFFO1lBQ3JCcEQsSUFBSW9ELFNBQVMsR0FBRzFELFFBQVEwRCxTQUFTLENBQUNkLEdBQUcsQ0FBQyxDQUFDQyxJQUNyQ0EsSUFBSS9ELFVBQVV1QixNQUFNLENBQUN3QyxLQUFLaEQ7UUFFOUIsT0FBTztZQUNMUyxJQUFJb0QsU0FBUyxHQUFHLEVBQUU7UUFDcEI7UUFFQSxPQUFPcEQ7SUFDVDtJQUVBQyxhQUFZTSxNQUFzQztZQUc5Q0E7UUFGRixNQUFNYixVQUFVeUQ7UUFDaEJ6RCxRQUFRMEQsU0FBUyxHQUNmN0MsRUFBQUEsb0JBQUFBLE9BQU82QyxTQUFTLGNBQWhCN0Msd0NBQUFBLGtCQUFrQitCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNL0QsVUFBVXlCLFdBQVcsQ0FBQ3NDLFFBQU8sRUFBRTtRQUM5RCxPQUFPN0M7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTNEQ7SUFDUCxPQUFPO1FBQ0xoQyxTQUFTO0lBQ1g7QUFDRjtBQUVBLE9BQU8sTUFBTWlDLDRDQUE0QztJQUN2RHpFLFFBQ0VZLE9BQWtELEVBQ2xEVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUTRCLE9BQU8sS0FBSyxJQUFJO1lBQzFCdEMsT0FBT1ksTUFBTSxDQUFDLElBQUk0QixNQUFNLENBQUM5QixRQUFRNEIsT0FBTztRQUMxQztRQUVBLE9BQU90QztJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVTREO1FBRWhCLE1BQU9qRSxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVE0QixPQUFPLEdBQUdqQyxPQUFPbUMsTUFBTTtvQkFDL0I7Z0JBRUY7b0JBQ0VuQyxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0xlLFNBQVNsRCxNQUFNbUMsT0FBT2UsT0FBTyxJQUFJRyxPQUFPbEIsT0FBT2UsT0FBTyxJQUFJO1FBQzVEO0lBQ0Y7SUFFQXZCLFFBQU9MLE9BQWtEO1FBQ3ZELE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUTRCLE9BQU8sS0FBSy9CLGFBQWNTLENBQUFBLElBQUlzQixPQUFPLEdBQUc1QixRQUFRNEIsT0FBTyxBQUFEO1FBQzlELE9BQU90QjtJQUNUO0lBRUFDLGFBQ0VNLE1BQTBEO1FBRTFELE1BQU1iLFVBQVU0RDtZQUNFL0M7UUFBbEJiLFFBQVE0QixPQUFPLEdBQUdmLENBQUFBLGtCQUFBQSxPQUFPZSxPQUFPLGNBQWRmLDZCQUFBQSxrQkFBa0I7UUFDcEMsT0FBT2I7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTOEQ7SUFDUCxPQUFPO1FBQ0xDLE9BQU8sRUFBRTtJQUNYO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLDZDQUE2QztJQUN4RDVFLFFBQ0VZLE9BQW1ELEVBQ25EVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsS0FBSyxNQUFNaUQsS0FBS3hDLFFBQVErRCxLQUFLLENBQUU7WUFDN0J6RixnQkFBZ0JjLE1BQU0sQ0FBQ29ELEdBQUlsRCxPQUFPWSxNQUFNLENBQUMsSUFBSVMsSUFBSSxJQUFJQyxNQUFNO1FBQzdEO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVOEQ7UUFFaEIsTUFBT25FLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUStELEtBQUssQ0FBQ3RCLElBQUksQ0FBQ25FLGdCQUFnQmtCLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFDL0Q7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTGtELE9BQU9yQixNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVFrRCxLQUFLLElBQzlCbEQsT0FBT2tELEtBQUssQ0FBQ25CLEdBQUcsQ0FBQyxDQUFDQyxJQUFXdkUsZ0JBQWdCOEIsUUFBUSxDQUFDeUMsTUFDdEQsRUFBRTtRQUNSO0lBQ0Y7SUFFQXhDLFFBQU9MLE9BQW1EO1FBQ3hELE1BQU1NLE1BQVcsQ0FBQztRQUVsQixJQUFJTixRQUFRK0QsS0FBSyxFQUFFO1lBQ2pCekQsSUFBSXlELEtBQUssR0FBRy9ELFFBQVErRCxLQUFLLENBQUNuQixHQUFHLENBQUMsQ0FBQ0MsSUFDN0JBLElBQUl2RSxnQkFBZ0IrQixNQUFNLENBQUN3QyxLQUFLaEQ7UUFFcEMsT0FBTztZQUNMUyxJQUFJeUQsS0FBSyxHQUFHLEVBQUU7UUFDaEI7UUFFQSxPQUFPekQ7SUFDVDtJQUVBQyxhQUNFTSxNQUEyRDtZQUl6REE7UUFGRixNQUFNYixVQUFVOEQ7UUFDaEI5RCxRQUFRK0QsS0FBSyxHQUNYbEQsRUFBQUEsZ0JBQUFBLE9BQU9rRCxLQUFLLGNBQVpsRCxvQ0FBQUEsY0FBYytCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNdkUsZ0JBQWdCaUMsV0FBVyxDQUFDc0MsUUFBTyxFQUFFO1FBQ2hFLE9BQU83QztJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNpRTtJQUNQLE9BQU87UUFDTHJDLFNBQVM7SUFDWDtBQUNGO0FBRUEsT0FBTyxNQUFNc0MseUNBQXlDO0lBQ3BEOUUsUUFDRVksT0FBK0MsRUFDL0NWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRNEIsT0FBTyxLQUFLLElBQUk7WUFDMUJ0QyxPQUFPWSxNQUFNLENBQUMsSUFBSTRCLE1BQU0sQ0FBQzlCLFFBQVE0QixPQUFPO1FBQzFDO1FBRUEsT0FBT3RDO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVaUU7UUFFaEIsTUFBT3RFLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUTRCLE9BQU8sR0FBR2pDLE9BQU9tQyxNQUFNO29CQUMvQjtnQkFFRjtvQkFDRW5DLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTGUsU0FBU2xELE1BQU1tQyxPQUFPZSxPQUFPLElBQUlHLE9BQU9sQixPQUFPZSxPQUFPLElBQUk7UUFDNUQ7SUFDRjtJQUVBdkIsUUFBT0wsT0FBK0M7UUFDcEQsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRNEIsT0FBTyxLQUFLL0IsYUFBY1MsQ0FBQUEsSUFBSXNCLE9BQU8sR0FBRzVCLFFBQVE0QixPQUFPLEFBQUQ7UUFDOUQsT0FBT3RCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBdUQ7UUFFdkQsTUFBTWIsVUFBVWlFO1lBQ0VwRDtRQUFsQmIsUUFBUTRCLE9BQU8sR0FBR2YsQ0FBQUEsa0JBQUFBLE9BQU9lLE9BQU8sY0FBZGYsNkJBQUFBLGtCQUFrQjtRQUNwQyxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNtRTtJQUNQLE9BQU87UUFDTEMsTUFBTSxFQUFFO0lBQ1Y7QUFDRjtBQUVBLE9BQU8sTUFBTUMsMENBQTBDO0lBQ3JEakYsUUFDRVksT0FBZ0QsRUFDaERWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxLQUFLLE1BQU1pRCxLQUFLeEMsUUFBUW9FLElBQUksQ0FBRTtZQUM1QmhHLGtCQUFrQmdCLE1BQU0sQ0FBQ29ELEdBQUlsRCxPQUFPWSxNQUFNLENBQUMsSUFBSVMsSUFBSSxJQUFJQyxNQUFNO1FBQy9EO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVbUU7UUFFaEIsTUFBT3hFLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUW9FLElBQUksQ0FBQzNCLElBQUksQ0FBQ3JFLGtCQUFrQm9CLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFDaEU7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTHVELE1BQU0xQixNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVF1RCxJQUFJLElBQzVCdkQsT0FBT3VELElBQUksQ0FBQ3hCLEdBQUcsQ0FBQyxDQUFDQyxJQUFXekUsa0JBQWtCZ0MsUUFBUSxDQUFDeUMsTUFDdkQsRUFBRTtRQUNSO0lBQ0Y7SUFFQXhDLFFBQU9MLE9BQWdEO1FBQ3JELE1BQU1NLE1BQVcsQ0FBQztRQUVsQixJQUFJTixRQUFRb0UsSUFBSSxFQUFFO1lBQ2hCOUQsSUFBSThELElBQUksR0FBR3BFLFFBQVFvRSxJQUFJLENBQUN4QixHQUFHLENBQUMsQ0FBQ0MsSUFDM0JBLElBQUl6RSxrQkFBa0JpQyxNQUFNLENBQUN3QyxLQUFLaEQ7UUFFdEMsT0FBTztZQUNMUyxJQUFJOEQsSUFBSSxHQUFHLEVBQUU7UUFDZjtRQUVBLE9BQU85RDtJQUNUO0lBRUFDLGFBQ0VNLE1BQXdEO1lBSXREQTtRQUZGLE1BQU1iLFVBQVVtRTtRQUNoQm5FLFFBQVFvRSxJQUFJLEdBQ1Z2RCxFQUFBQSxlQUFBQSxPQUFPdUQsSUFBSSxjQUFYdkQsbUNBQUFBLGFBQWErQixHQUFHLENBQUMsQ0FBQ0MsSUFBTXpFLGtCQUFrQm1DLFdBQVcsQ0FBQ3NDLFFBQU8sRUFBRTtRQUNqRSxPQUFPN0M7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTc0U7SUFDUCxPQUFPLENBQUM7QUFDVjtBQUVBLE9BQU8sTUFBTUMsZ0NBQWdDO0lBQzNDbkYsUUFDRUMsQ0FBZ0MsRUFDaENDLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxPQUFPRDtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVXNFO1FBRWhCLE1BQU8zRSxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkO29CQUNFTixPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU2YsQ0FBTTtRQUNiLE9BQU8sQ0FBQztJQUNWO0lBRUFnQixRQUFPaEIsQ0FBZ0M7UUFDckMsTUFBTWlCLE1BQVcsQ0FBQztRQUNsQixPQUFPQTtJQUNUO0lBRUFDLGFBQ0VsQixDQUF5QztRQUV6QyxNQUFNVyxVQUFVc0U7UUFDaEIsT0FBT3RFO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU3dFO0lBQ1AsT0FBTztRQUNMQyxTQUFTLEVBQUU7SUFDYjtBQUNGO0FBRUEsT0FBTyxNQUFNQyxpQ0FBaUM7SUFDNUN0RixRQUNFWSxPQUF1QyxFQUN2Q1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLEtBQUssTUFBTWlELEtBQUt4QyxRQUFReUUsT0FBTyxDQUFFO1lBQy9CbkcsZ0JBQWdCYyxNQUFNLENBQUNvRCxHQUFJbEQsT0FBT1ksTUFBTSxDQUFDLElBQUlTLElBQUksSUFBSUMsTUFBTTtRQUM3RDtRQUVBLE9BQU90QjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVXdFO1FBRWhCLE1BQU83RSxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVF5RSxPQUFPLENBQUNoQyxJQUFJLENBQUNuRSxnQkFBZ0JrQixNQUFNLENBQUNHLFFBQVFBLE9BQU9PLE1BQU07b0JBQ2pFO2dCQUVGO29CQUNFUCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0w0RCxTQUFTL0IsTUFBTUMsT0FBTyxDQUFDOUIsbUJBQUFBLDZCQUFBQSxPQUFRNEQsT0FBTyxJQUNsQzVELE9BQU80RCxPQUFPLENBQUM3QixHQUFHLENBQUMsQ0FBQ0MsSUFBV3ZFLGdCQUFnQjhCLFFBQVEsQ0FBQ3lDLE1BQ3hELEVBQUU7UUFDUjtJQUNGO0lBRUF4QyxRQUFPTCxPQUF1QztRQUM1QyxNQUFNTSxNQUFXLENBQUM7UUFFbEIsSUFBSU4sUUFBUXlFLE9BQU8sRUFBRTtZQUNuQm5FLElBQUltRSxPQUFPLEdBQUd6RSxRQUFReUUsT0FBTyxDQUFDN0IsR0FBRyxDQUFDLENBQUNDLElBQ2pDQSxJQUFJdkUsZ0JBQWdCK0IsTUFBTSxDQUFDd0MsS0FBS2hEO1FBRXBDLE9BQU87WUFDTFMsSUFBSW1FLE9BQU8sR0FBRyxFQUFFO1FBQ2xCO1FBRUEsT0FBT25FO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBK0M7WUFJN0NBO1FBRkYsTUFBTWIsVUFBVXdFO1FBQ2hCeEUsUUFBUXlFLE9BQU8sR0FDYjVELEVBQUFBLGtCQUFBQSxPQUFPNEQsT0FBTyxjQUFkNUQsc0NBQUFBLGdCQUFnQitCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNdkUsZ0JBQWdCaUMsV0FBVyxDQUFDc0MsUUFBTyxFQUFFO1FBQ2xFLE9BQU83QztJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVMyRTtJQUNQLE9BQU8sQ0FBQztBQUNWO0FBRUEsT0FBTyxNQUFNQyxpQ0FBaUM7SUFDNUN4RixRQUNFQyxDQUFpQyxFQUNqQ0MsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLE9BQU9EO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVMkU7UUFFaEIsTUFBT2hGLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2Q7b0JBQ0VOLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTZixDQUFNO1FBQ2IsT0FBTyxDQUFDO0lBQ1Y7SUFFQWdCLFFBQU9oQixDQUFpQztRQUN0QyxNQUFNaUIsTUFBVyxDQUFDO1FBQ2xCLE9BQU9BO0lBQ1Q7SUFFQUMsYUFDRWxCLENBQTBDO1FBRTFDLE1BQU1XLFVBQVUyRTtRQUNoQixPQUFPM0U7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTNkU7SUFDUCxPQUFPO1FBQ0xDLE9BQU8sRUFBRTtJQUNYO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLGtDQUFrQztJQUM3QzNGLFFBQ0VZLE9BQXdDLEVBQ3hDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsS0FBSyxNQUFNaUQsS0FBS3hDLFFBQVE4RSxLQUFLLENBQUU7WUFDN0IxRyxrQkFBa0JnQixNQUFNLENBQUNvRCxHQUFJbEQsT0FBT1ksTUFBTSxDQUFDLElBQUlTLElBQUksSUFBSUMsTUFBTTtRQUMvRDtRQUVBLE9BQU90QjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVTZFO1FBRWhCLE1BQU9sRixPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVE4RSxLQUFLLENBQUNyQyxJQUFJLENBQUNyRSxrQkFBa0JvQixNQUFNLENBQUNHLFFBQVFBLE9BQU9PLE1BQU07b0JBQ2pFO2dCQUVGO29CQUNFUCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0xpRSxPQUFPcEMsTUFBTUMsT0FBTyxDQUFDOUIsbUJBQUFBLDZCQUFBQSxPQUFRaUUsS0FBSyxJQUM5QmpFLE9BQU9pRSxLQUFLLENBQUNsQyxHQUFHLENBQUMsQ0FBQ0MsSUFBV3pFLGtCQUFrQmdDLFFBQVEsQ0FBQ3lDLE1BQ3hELEVBQUU7UUFDUjtJQUNGO0lBRUF4QyxRQUFPTCxPQUF3QztRQUM3QyxNQUFNTSxNQUFXLENBQUM7UUFFbEIsSUFBSU4sUUFBUThFLEtBQUssRUFBRTtZQUNqQnhFLElBQUl3RSxLQUFLLEdBQUc5RSxRQUFROEUsS0FBSyxDQUFDbEMsR0FBRyxDQUFDLENBQUNDLElBQzdCQSxJQUFJekUsa0JBQWtCaUMsTUFBTSxDQUFDd0MsS0FBS2hEO1FBRXRDLE9BQU87WUFDTFMsSUFBSXdFLEtBQUssR0FBRyxFQUFFO1FBQ2hCO1FBRUEsT0FBT3hFO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBZ0Q7WUFJOUNBO1FBRkYsTUFBTWIsVUFBVTZFO1FBQ2hCN0UsUUFBUThFLEtBQUssR0FDWGpFLEVBQUFBLGdCQUFBQSxPQUFPaUUsS0FBSyxjQUFaakUsb0NBQUFBLGNBQWMrQixHQUFHLENBQUMsQ0FBQ0MsSUFBTXpFLGtCQUFrQm1DLFdBQVcsQ0FBQ3NDLFFBQU8sRUFBRTtRQUNsRSxPQUFPN0M7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTZ0Y7SUFDUCxPQUFPO1FBQ0w1RCxPQUFPQyxPQUFPO1FBQ2Q0RCxpQkFBaUI7SUFDbkI7QUFDRjtBQUVBLE9BQU8sTUFBTUMsa0NBQWtDO0lBQzdDOUYsUUFDRVksT0FBd0MsRUFDeENWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRb0IsS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVFvQixLQUFLO1FBQ3ZDO1FBRUEsSUFBSXBCLFFBQVFpRixlQUFlLEtBQUssSUFBSTtZQUNsQzNGLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUWlGLGVBQWU7UUFDbEQ7UUFFQSxPQUFPM0Y7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVnRjtRQUVoQixNQUFPckYsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRb0IsS0FBSyxHQUFHekIsT0FBTzRCLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0h2QixRQUFRaUYsZUFBZSxHQUFHdEYsT0FBT21DLE1BQU07b0JBQ3ZDO2dCQUVGO29CQUNFbkMsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMTyxPQUFPMUMsTUFBTW1DLE9BQU9PLEtBQUssSUFBSUMsT0FBT1IsT0FBT08sS0FBSyxJQUFJQyxPQUFPO1lBQzNENEQsaUJBQWlCdkcsTUFBTW1DLE9BQU9vRSxlQUFlLElBQ3pDbEQsT0FBT2xCLE9BQU9vRSxlQUFlLElBQzdCO1FBQ047SUFDRjtJQUVBNUUsUUFBT0wsT0FBd0M7UUFDN0MsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRb0IsS0FBSyxLQUFLdkIsYUFDZlMsQ0FBQUEsSUFBSWMsS0FBSyxHQUFHLEFBQUNwQixDQUFBQSxRQUFRb0IsS0FBSyxJQUFJQyxPQUFPLEVBQUMsRUFBR0csUUFBUSxFQUFDO1FBQ3JEeEIsUUFBUWlGLGVBQWUsS0FBS3BGLGFBQ3pCUyxDQUFBQSxJQUFJMkUsZUFBZSxHQUFHakYsUUFBUWlGLGVBQWUsQUFBRDtRQUMvQyxPQUFPM0U7SUFDVDtJQUVBQyxhQUNFTSxNQUFnRDtRQUVoRCxNQUFNYixVQUFVZ0Y7UUFDaEJoRixRQUFRb0IsS0FBSyxHQUNYUCxPQUFPTyxLQUFLLEtBQUt2QixhQUFhZ0IsT0FBT08sS0FBSyxLQUFLLE9BQzNDQyxPQUFPUixPQUFPTyxLQUFLLElBQ25CQyxPQUFPO1lBQ2FSO1FBQTFCYixRQUFRaUYsZUFBZSxHQUFHcEUsQ0FBQUEsMEJBQUFBLE9BQU9vRSxlQUFlLGNBQXRCcEUscUNBQUFBLDBCQUEwQjtRQUNwRCxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNtRjtJQUNQLE9BQU87UUFDTHBCLE9BQU9sRTtJQUNUO0FBQ0Y7QUFFQSxPQUFPLE1BQU11RixtQ0FBbUM7SUFDOUNoRyxRQUNFWSxPQUF5QyxFQUN6Q1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVErRCxLQUFLLEtBQUtsRSxXQUFXO1lBQy9CdkIsZ0JBQWdCYyxNQUFNLENBQUNZLFFBQVErRCxLQUFLLEVBQUV6RSxPQUFPWSxNQUFNLENBQUMsSUFBSVMsSUFBSSxJQUFJQyxNQUFNO1FBQ3hFO1FBRUEsT0FBT3RCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVbUY7UUFFaEIsTUFBT3hGLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUStELEtBQUssR0FBR3pGLGdCQUFnQmtCLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFDNUQ7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTGtELE9BQU9yRixNQUFNbUMsT0FBT2tELEtBQUssSUFDckJ6RixnQkFBZ0I4QixRQUFRLENBQUNTLE9BQU9rRCxLQUFLLElBQ3JDbEU7UUFDTjtJQUNGO0lBRUFRLFFBQU9MLE9BQXlDO1FBQzlDLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUStELEtBQUssS0FBS2xFLGFBQ2ZTLENBQUFBLElBQUl5RCxLQUFLLEdBQUcvRCxRQUFRK0QsS0FBSyxHQUN0QnpGLGdCQUFnQitCLE1BQU0sQ0FBQ0wsUUFBUStELEtBQUssSUFDcENsRSxTQUFRO1FBQ2QsT0FBT1M7SUFDVDtJQUVBQyxhQUNFTSxNQUFpRDtRQUVqRCxNQUFNYixVQUFVbUY7UUFDaEJuRixRQUFRK0QsS0FBSyxHQUNYbEQsT0FBT2tELEtBQUssS0FBS2xFLGFBQWFnQixPQUFPa0QsS0FBSyxLQUFLLE9BQzNDekYsZ0JBQWdCaUMsV0FBVyxDQUFDTSxPQUFPa0QsS0FBSyxJQUN4Q2xFO1FBQ04sT0FBT0c7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTcUY7SUFDUCxPQUFPO1FBQ0xqRSxPQUFPQyxPQUFPO1FBQ2Q0RCxpQkFBaUI7SUFDbkI7QUFDRjtBQUVBLE9BQU8sTUFBTUssNEJBQTRCO0lBQ3ZDbEcsUUFDRVksT0FBa0MsRUFDbENWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRb0IsS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVFvQixLQUFLO1FBQ3ZDO1FBRUEsSUFBSXBCLFFBQVFpRixlQUFlLEtBQUssSUFBSTtZQUNsQzNGLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUWlGLGVBQWU7UUFDbEQ7UUFFQSxPQUFPM0Y7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVxRjtRQUVoQixNQUFPMUYsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRb0IsS0FBSyxHQUFHekIsT0FBTzRCLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0h2QixRQUFRaUYsZUFBZSxHQUFHdEYsT0FBT21DLE1BQU07b0JBQ3ZDO2dCQUVGO29CQUNFbkMsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMTyxPQUFPMUMsTUFBTW1DLE9BQU9PLEtBQUssSUFBSUMsT0FBT1IsT0FBT08sS0FBSyxJQUFJQyxPQUFPO1lBQzNENEQsaUJBQWlCdkcsTUFBTW1DLE9BQU9vRSxlQUFlLElBQ3pDbEQsT0FBT2xCLE9BQU9vRSxlQUFlLElBQzdCO1FBQ047SUFDRjtJQUVBNUUsUUFBT0wsT0FBa0M7UUFDdkMsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRb0IsS0FBSyxLQUFLdkIsYUFDZlMsQ0FBQUEsSUFBSWMsS0FBSyxHQUFHLEFBQUNwQixDQUFBQSxRQUFRb0IsS0FBSyxJQUFJQyxPQUFPLEVBQUMsRUFBR0csUUFBUSxFQUFDO1FBQ3JEeEIsUUFBUWlGLGVBQWUsS0FBS3BGLGFBQ3pCUyxDQUFBQSxJQUFJMkUsZUFBZSxHQUFHakYsUUFBUWlGLGVBQWUsQUFBRDtRQUMvQyxPQUFPM0U7SUFDVDtJQUVBQyxhQUNFTSxNQUEwQztRQUUxQyxNQUFNYixVQUFVcUY7UUFDaEJyRixRQUFRb0IsS0FBSyxHQUNYUCxPQUFPTyxLQUFLLEtBQUt2QixhQUFhZ0IsT0FBT08sS0FBSyxLQUFLLE9BQzNDQyxPQUFPUixPQUFPTyxLQUFLLElBQ25CQyxPQUFPO1lBQ2FSO1FBQTFCYixRQUFRaUYsZUFBZSxHQUFHcEUsQ0FBQUEsMEJBQUFBLE9BQU9vRSxlQUFlLGNBQXRCcEUscUNBQUFBLDBCQUEwQjtRQUNwRCxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVN1RjtJQUNQLE9BQU87UUFDTGpELFVBQVUsRUFBRTtJQUNkO0FBQ0Y7QUFFQSxPQUFPLE1BQU1rRCw2QkFBNkI7SUFDeENwRyxRQUNFWSxPQUFtQyxFQUNuQ1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLEtBQUssTUFBTWlELEtBQUt4QyxRQUFRc0MsUUFBUSxDQUFFO1lBQ2hDM0QsZ0JBQWdCUyxNQUFNLENBQUNvRCxHQUFJbEQsT0FBT1ksTUFBTSxDQUFDLElBQUlTLElBQUksSUFBSUMsTUFBTTtRQUM3RDtRQUVBLE9BQU90QjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVXVGO1FBRWhCLE1BQU81RixPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVFzQyxRQUFRLENBQUNHLElBQUksQ0FDbkI5RCxnQkFBZ0JhLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFFOUM7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTHlCLFVBQVVJLE1BQU1DLE9BQU8sQ0FBQzlCLG1CQUFBQSw2QkFBQUEsT0FBUXlCLFFBQVEsSUFDcEN6QixPQUFPeUIsUUFBUSxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsSUFBV2xFLGdCQUFnQnlCLFFBQVEsQ0FBQ3lDLE1BQ3pELEVBQUU7UUFDUjtJQUNGO0lBRUF4QyxRQUFPTCxPQUFtQztRQUN4QyxNQUFNTSxNQUFXLENBQUM7UUFFbEIsSUFBSU4sUUFBUXNDLFFBQVEsRUFBRTtZQUNwQmhDLElBQUlnQyxRQUFRLEdBQUd0QyxRQUFRc0MsUUFBUSxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsSUFDbkNBLElBQUlsRSxnQkFBZ0IwQixNQUFNLENBQUN3QyxLQUFLaEQ7UUFFcEMsT0FBTztZQUNMUyxJQUFJZ0MsUUFBUSxHQUFHLEVBQUU7UUFDbkI7UUFFQSxPQUFPaEM7SUFDVDtJQUVBQyxhQUNFTSxNQUEyQztZQUl6Q0E7UUFGRixNQUFNYixVQUFVdUY7UUFDaEJ2RixRQUFRc0MsUUFBUSxHQUNkekIsRUFBQUEsbUJBQUFBLE9BQU95QixRQUFRLGNBQWZ6Qix1Q0FBQUEsaUJBQWlCK0IsR0FBRyxDQUFDLENBQUNDLElBQU1sRSxnQkFBZ0I0QixXQUFXLENBQUNzQyxRQUFPLEVBQUU7UUFDbkUsT0FBTzdDO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU3lGO0lBQ1AsT0FBTztRQUNMQyxnQkFBZ0IsSUFBSUM7UUFDcEJDLG1CQUFtQnZFLE9BQU87SUFDNUI7QUFDRjtBQUVBLE9BQU8sTUFBTXdFLDRCQUE0QjtJQUN2Q3pHLFFBQ0VZLE9BQWtDLEVBQ2xDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUTBGLGNBQWMsQ0FBQ2hHLE1BQU0sS0FBSyxHQUFHO1lBQ3ZDSixPQUFPWSxNQUFNLENBQUMsSUFBSTRGLEtBQUssQ0FBQzlGLFFBQVEwRixjQUFjO1FBQ2hEO1FBRUEsSUFBSTFGLFFBQVE0RixpQkFBaUIsS0FBS3ZFLE9BQU8sSUFBSTtZQUMzQy9CLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJcUIsTUFBTSxDQUFDdkIsUUFBUTRGLGlCQUFpQjtRQUNwRDtRQUVBLE9BQU90RztJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVXlGO1FBRWhCLE1BQU85RixPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVEwRixjQUFjLEdBQUcvRixPQUFPbUcsS0FBSztvQkFDckM7Z0JBRUYsS0FBSztvQkFDSDlGLFFBQVE0RixpQkFBaUIsR0FBR2pHLE9BQU80QixNQUFNO29CQUN6QztnQkFFRjtvQkFDRTVCLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTDZFLGdCQUFnQmhILE1BQU1tQyxPQUFPNkUsY0FBYyxJQUN2Q2pILGdCQUFnQm9DLE9BQU82RSxjQUFjLElBQ3JDLElBQUlDO1lBQ1JDLG1CQUFtQmxILE1BQU1tQyxPQUFPK0UsaUJBQWlCLElBQzdDdkUsT0FBT1IsT0FBTytFLGlCQUFpQixJQUMvQnZFLE9BQU87UUFDYjtJQUNGO0lBRUFoQixRQUFPTCxPQUFrQztRQUN2QyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVEwRixjQUFjLEtBQUs3RixhQUN4QlMsQ0FBQUEsSUFBSW9GLGNBQWMsR0FBR2xILGdCQUNwQndCLFFBQVEwRixjQUFjLEtBQUs3RixZQUN2QkcsUUFBUTBGLGNBQWMsR0FDdEIsSUFBSUMsYUFDVjtRQUNGM0YsUUFBUTRGLGlCQUFpQixLQUFLL0YsYUFDM0JTLENBQUFBLElBQUlzRixpQkFBaUIsR0FBRyxBQUN2QjVGLENBQUFBLFFBQVE0RixpQkFBaUIsSUFBSXZFLE9BQU8sRUFBQyxFQUNyQ0csUUFBUSxFQUFDO1FBQ2IsT0FBT2xCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBMEM7UUFFMUMsTUFBTWIsVUFBVXlGO1lBQ1M1RTtRQUF6QmIsUUFBUTBGLGNBQWMsR0FBRzdFLENBQUFBLHlCQUFBQSxPQUFPNkUsY0FBYyxjQUFyQjdFLG9DQUFBQSx5QkFBeUIsSUFBSThFO1FBQ3REM0YsUUFBUTRGLGlCQUFpQixHQUN2Qi9FLE9BQU8rRSxpQkFBaUIsS0FBSy9GLGFBQzdCZ0IsT0FBTytFLGlCQUFpQixLQUFLLE9BQ3pCdkUsT0FBT1IsT0FBTytFLGlCQUFpQixJQUMvQnZFLE9BQU87UUFDYixPQUFPckI7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTK0Y7SUFDUCxPQUFPO1FBQ0x6RCxVQUFVLEVBQUU7SUFDZDtBQUNGO0FBRUEsT0FBTyxNQUFNMEQsNkJBQTZCO0lBQ3hDNUcsUUFDRVksT0FBbUMsRUFDbkNWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxLQUFLLE1BQU1pRCxLQUFLeEMsUUFBUXNDLFFBQVEsQ0FBRTtZQUNoQzFELG9CQUFvQlEsTUFBTSxDQUFDb0QsR0FBSWxELE9BQU9ZLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQUlDLE1BQU07UUFDakU7UUFFQSxPQUFPdEI7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVUrRjtRQUVoQixNQUFPcEcsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRc0MsUUFBUSxDQUFDRyxJQUFJLENBQ25CN0Qsb0JBQW9CWSxNQUFNLENBQUNHLFFBQVFBLE9BQU9PLE1BQU07b0JBRWxEO2dCQUVGO29CQUNFUCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0x5QixVQUFVSSxNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVF5QixRQUFRLElBQ3BDekIsT0FBT3lCLFFBQVEsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQVdqRSxvQkFBb0J3QixRQUFRLENBQUN5QyxNQUM3RCxFQUFFO1FBQ1I7SUFDRjtJQUVBeEMsUUFBT0wsT0FBbUM7UUFDeEMsTUFBTU0sTUFBVyxDQUFDO1FBRWxCLElBQUlOLFFBQVFzQyxRQUFRLEVBQUU7WUFDcEJoQyxJQUFJZ0MsUUFBUSxHQUFHdEMsUUFBUXNDLFFBQVEsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLElBQ25DQSxJQUFJakUsb0JBQW9CeUIsTUFBTSxDQUFDd0MsS0FBS2hEO1FBRXhDLE9BQU87WUFDTFMsSUFBSWdDLFFBQVEsR0FBRyxFQUFFO1FBQ25CO1FBRUEsT0FBT2hDO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBMkM7WUFJekNBO1FBRkYsTUFBTWIsVUFBVStGO1FBQ2hCL0YsUUFBUXNDLFFBQVEsR0FDZHpCLEVBQUFBLG1CQUFBQSxPQUFPeUIsUUFBUSxjQUFmekIsdUNBQUFBLGlCQUFpQitCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNakUsb0JBQW9CMkIsV0FBVyxDQUFDc0MsUUFBTyxFQUFFO1FBQ3ZFLE9BQU83QztJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNpRztJQUNQLE9BQU87UUFDTHJFLFNBQVM7SUFDWDtBQUNGO0FBRUEsT0FBTyxNQUFNc0UsbUNBQW1DO0lBQzlDOUcsUUFDRVksT0FBeUMsRUFDekNWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRNEIsT0FBTyxLQUFLLElBQUk7WUFDMUJ0QyxPQUFPWSxNQUFNLENBQUMsSUFBSTRCLE1BQU0sQ0FBQzlCLFFBQVE0QixPQUFPO1FBQzFDO1FBRUEsT0FBT3RDO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVaUc7UUFFaEIsTUFBT3RHLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUTRCLE9BQU8sR0FBR2pDLE9BQU9tQyxNQUFNO29CQUMvQjtnQkFFRjtvQkFDRW5DLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTGUsU0FBU2xELE1BQU1tQyxPQUFPZSxPQUFPLElBQUlHLE9BQU9sQixPQUFPZSxPQUFPLElBQUk7UUFDNUQ7SUFDRjtJQUVBdkIsUUFBT0wsT0FBeUM7UUFDOUMsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRNEIsT0FBTyxLQUFLL0IsYUFBY1MsQ0FBQUEsSUFBSXNCLE9BQU8sR0FBRzVCLFFBQVE0QixPQUFPLEFBQUQ7UUFDOUQsT0FBT3RCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBaUQ7UUFFakQsTUFBTWIsVUFBVWlHO1lBQ0VwRjtRQUFsQmIsUUFBUTRCLE9BQU8sR0FBR2YsQ0FBQUEsa0JBQUFBLE9BQU9lLE9BQU8sY0FBZGYsNkJBQUFBLGtCQUFrQjtRQUNwQyxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNtRztJQUNQLE9BQU87UUFDTEMsWUFBWS9FLE9BQU87SUFDckI7QUFDRjtBQUVBLE9BQU8sTUFBTWdGLG9DQUFvQztJQUMvQ2pILFFBQ0VZLE9BQTBDLEVBQzFDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUW9HLFVBQVUsS0FBSy9FLE9BQU8sSUFBSTtZQUNwQy9CLE9BQU9ZLE1BQU0sQ0FBQyxHQUFHcUIsTUFBTSxDQUFDdkIsUUFBUW9HLFVBQVU7UUFDNUM7UUFFQSxPQUFPOUc7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVtRztRQUVoQixNQUFPeEcsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRb0csVUFBVSxHQUFHekcsT0FBTzRCLE1BQU07b0JBQ2xDO2dCQUVGO29CQUNFNUIsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMdUYsWUFBWTFILE1BQU1tQyxPQUFPdUYsVUFBVSxJQUMvQi9FLE9BQU9SLE9BQU91RixVQUFVLElBQ3hCL0UsT0FBTztRQUNiO0lBQ0Y7SUFFQWhCLFFBQU9MLE9BQTBDO1FBQy9DLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUW9HLFVBQVUsS0FBS3ZHLGFBQ3BCUyxDQUFBQSxJQUFJOEYsVUFBVSxHQUFHLEFBQUNwRyxDQUFBQSxRQUFRb0csVUFBVSxJQUFJL0UsT0FBTyxFQUFDLEVBQUdHLFFBQVEsRUFBQztRQUMvRCxPQUFPbEI7SUFDVDtJQUVBQyxhQUNFTSxNQUFrRDtRQUVsRCxNQUFNYixVQUFVbUc7UUFDaEJuRyxRQUFRb0csVUFBVSxHQUNoQnZGLE9BQU91RixVQUFVLEtBQUt2RyxhQUFhZ0IsT0FBT3VGLFVBQVUsS0FBSyxPQUNyRC9FLE9BQU9SLE9BQU91RixVQUFVLElBQ3hCL0UsT0FBTztRQUNiLE9BQU9yQjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNzRztJQUNQLE9BQU87UUFDTEMsT0FBTztJQUNUO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLDJCQUEyQjtJQUN0Q3BILFFBQ0VZLE9BQWlDLEVBQ2pDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUXVHLEtBQUssS0FBSyxJQUFJO1lBQ3hCakgsT0FBT1ksTUFBTSxDQUFDLElBQUk0QixNQUFNLENBQUM5QixRQUFRdUcsS0FBSztRQUN4QztRQUVBLE9BQU9qSDtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVXNHO1FBRWhCLE1BQU8zRyxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVF1RyxLQUFLLEdBQUc1RyxPQUFPbUMsTUFBTTtvQkFDN0I7Z0JBRUY7b0JBQ0VuQyxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0wwRixPQUFPN0gsTUFBTW1DLE9BQU8wRixLQUFLLElBQUl4RSxPQUFPbEIsT0FBTzBGLEtBQUssSUFBSTtRQUN0RDtJQUNGO0lBRUFsRyxRQUFPTCxPQUFpQztRQUN0QyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVF1RyxLQUFLLEtBQUsxRyxhQUFjUyxDQUFBQSxJQUFJaUcsS0FBSyxHQUFHdkcsUUFBUXVHLEtBQUssQUFBRDtRQUN4RCxPQUFPakc7SUFDVDtJQUVBQyxhQUNFTSxNQUF5QztRQUV6QyxNQUFNYixVQUFVc0c7WUFDQXpGO1FBQWhCYixRQUFRdUcsS0FBSyxHQUFHMUYsQ0FBQUEsZ0JBQUFBLE9BQU8wRixLQUFLLGNBQVoxRiwyQkFBQUEsZ0JBQWdCO1FBQ2hDLE9BQU9iO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU3lHO0lBQ1AsT0FBTztRQUNMQyxPQUFPO1FBQ1BDLGtCQUFrQjtJQUNwQjtBQUNGO0FBRUEsT0FBTyxNQUFNQyw0QkFBNEI7SUFDdkN4SCxRQUNFWSxPQUFrQyxFQUNsQ1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVEwRyxLQUFLLEtBQUssSUFBSTtZQUN4QnBILE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUTBHLEtBQUs7UUFDeEM7UUFFQSxJQUFJMUcsUUFBUTJHLGdCQUFnQixLQUFLLE1BQU07WUFDckNySCxPQUFPWSxNQUFNLENBQUMsSUFBSTJHLElBQUksQ0FBQzdHLFFBQVEyRyxnQkFBZ0I7UUFDakQ7UUFFQSxPQUFPckg7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVV5RztRQUVoQixNQUFPOUcsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRMEcsS0FBSyxHQUFHL0csT0FBT21DLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0g5QixRQUFRMkcsZ0JBQWdCLEdBQUdoSCxPQUFPa0gsSUFBSTtvQkFDdEM7Z0JBRUY7b0JBQ0VsSCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0w2RixPQUFPaEksTUFBTW1DLE9BQU82RixLQUFLLElBQUkzRSxPQUFPbEIsT0FBTzZGLEtBQUssSUFBSTtZQUNwREMsa0JBQWtCakksTUFBTW1DLE9BQU84RixnQkFBZ0IsSUFDM0NHLFFBQVFqRyxPQUFPOEYsZ0JBQWdCLElBQy9CO1FBQ047SUFDRjtJQUVBdEcsUUFBT0wsT0FBa0M7UUFDdkMsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRMEcsS0FBSyxLQUFLN0csYUFBY1MsQ0FBQUEsSUFBSW9HLEtBQUssR0FBRzFHLFFBQVEwRyxLQUFLLEFBQUQ7UUFDeEQxRyxRQUFRMkcsZ0JBQWdCLEtBQUs5RyxhQUMxQlMsQ0FBQUEsSUFBSXFHLGdCQUFnQixHQUFHM0csUUFBUTJHLGdCQUFnQixBQUFEO1FBQ2pELE9BQU9yRztJQUNUO0lBRUFDLGFBQ0VNLE1BQTBDO1FBRTFDLE1BQU1iLFVBQVV5RztZQUNBNUY7UUFBaEJiLFFBQVEwRyxLQUFLLEdBQUc3RixDQUFBQSxnQkFBQUEsT0FBTzZGLEtBQUssY0FBWjdGLDJCQUFBQSxnQkFBZ0I7WUFDTEE7UUFBM0JiLFFBQVEyRyxnQkFBZ0IsR0FBRzlGLENBQUFBLDJCQUFBQSxPQUFPOEYsZ0JBQWdCLGNBQXZCOUYsc0NBQUFBLDJCQUEyQjtRQUN0RCxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVMrRztJQUNQLE9BQU87UUFDTEwsT0FBTztJQUNUO0FBQ0Y7QUFFQSxPQUFPLE1BQU1NLDJCQUEyQjtJQUN0QzVILFFBQ0VZLE9BQWlDLEVBQ2pDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUTBHLEtBQUssS0FBSyxJQUFJO1lBQ3hCcEgsT0FBT1ksTUFBTSxDQUFDLElBQUk0QixNQUFNLENBQUM5QixRQUFRMEcsS0FBSztRQUN4QztRQUVBLE9BQU9wSDtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVStHO1FBRWhCLE1BQU9wSCxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVEwRyxLQUFLLEdBQUcvRyxPQUFPbUMsTUFBTTtvQkFDN0I7Z0JBRUY7b0JBQ0VuQyxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0w2RixPQUFPaEksTUFBTW1DLE9BQU82RixLQUFLLElBQUkzRSxPQUFPbEIsT0FBTzZGLEtBQUssSUFBSTtRQUN0RDtJQUNGO0lBRUFyRyxRQUFPTCxPQUFpQztRQUN0QyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVEwRyxLQUFLLEtBQUs3RyxhQUFjUyxDQUFBQSxJQUFJb0csS0FBSyxHQUFHMUcsUUFBUTBHLEtBQUssQUFBRDtRQUN4RCxPQUFPcEc7SUFDVDtJQUVBQyxhQUNFTSxNQUF5QztRQUV6QyxNQUFNYixVQUFVK0c7WUFDQWxHO1FBQWhCYixRQUFRMEcsS0FBSyxHQUFHN0YsQ0FBQUEsZ0JBQUFBLE9BQU82RixLQUFLLGNBQVo3RiwyQkFBQUEsZ0JBQWdCO1FBQ2hDLE9BQU9iO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU2lIO0lBQ1AsT0FBTztRQUNMVixPQUFPO1FBQ1BJLGtCQUFrQjtJQUNwQjtBQUNGO0FBRUEsT0FBTyxNQUFNTyw0QkFBNEI7SUFDdkM5SCxRQUNFWSxPQUFrQyxFQUNsQ1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVF1RyxLQUFLLEtBQUssSUFBSTtZQUN4QmpILE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUXVHLEtBQUs7UUFDeEM7UUFFQSxJQUFJdkcsUUFBUTJHLGdCQUFnQixLQUFLLE1BQU07WUFDckNySCxPQUFPWSxNQUFNLENBQUMsSUFBSTJHLElBQUksQ0FBQzdHLFFBQVEyRyxnQkFBZ0I7UUFDakQ7UUFFQSxPQUFPckg7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVpSDtRQUVoQixNQUFPdEgsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRdUcsS0FBSyxHQUFHNUcsT0FBT21DLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0g5QixRQUFRMkcsZ0JBQWdCLEdBQUdoSCxPQUFPa0gsSUFBSTtvQkFDdEM7Z0JBRUY7b0JBQ0VsSCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0wwRixPQUFPN0gsTUFBTW1DLE9BQU8wRixLQUFLLElBQUl4RSxPQUFPbEIsT0FBTzBGLEtBQUssSUFBSTtZQUNwREksa0JBQWtCakksTUFBTW1DLE9BQU84RixnQkFBZ0IsSUFDM0NHLFFBQVFqRyxPQUFPOEYsZ0JBQWdCLElBQy9CO1FBQ047SUFDRjtJQUVBdEcsUUFBT0wsT0FBa0M7UUFDdkMsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRdUcsS0FBSyxLQUFLMUcsYUFBY1MsQ0FBQUEsSUFBSWlHLEtBQUssR0FBR3ZHLFFBQVF1RyxLQUFLLEFBQUQ7UUFDeER2RyxRQUFRMkcsZ0JBQWdCLEtBQUs5RyxhQUMxQlMsQ0FBQUEsSUFBSXFHLGdCQUFnQixHQUFHM0csUUFBUTJHLGdCQUFnQixBQUFEO1FBQ2pELE9BQU9yRztJQUNUO0lBRUFDLGFBQ0VNLE1BQTBDO1FBRTFDLE1BQU1iLFVBQVVpSDtZQUNBcEc7UUFBaEJiLFFBQVF1RyxLQUFLLEdBQUcxRixDQUFBQSxnQkFBQUEsT0FBTzBGLEtBQUssY0FBWjFGLDJCQUFBQSxnQkFBZ0I7WUFDTEE7UUFBM0JiLFFBQVEyRyxnQkFBZ0IsR0FBRzlGLENBQUFBLDJCQUFBQSxPQUFPOEYsZ0JBQWdCLGNBQXZCOUYsc0NBQUFBLDJCQUEyQjtRQUN0RCxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNtSDtJQUNQLE9BQU87UUFDTEMsVUFBVTtJQUNaO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLG1DQUFtQztJQUM5Q2pJLFFBQ0VZLE9BQXlDLEVBQ3pDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUW9ILFFBQVEsS0FBSyxNQUFNO1lBQzdCOUgsT0FBT1ksTUFBTSxDQUFDLEdBQUcyRyxJQUFJLENBQUM3RyxRQUFRb0gsUUFBUTtRQUN4QztRQUVBLE9BQU85SDtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVW1IO1FBRWhCLE1BQU94SCxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVFvSCxRQUFRLEdBQUd6SCxPQUFPa0gsSUFBSTtvQkFDOUI7Z0JBRUY7b0JBQ0VsSCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0x1RyxVQUFVMUksTUFBTW1DLE9BQU91RyxRQUFRLElBQUlOLFFBQVFqRyxPQUFPdUcsUUFBUSxJQUFJO1FBQ2hFO0lBQ0Y7SUFFQS9HLFFBQU9MLE9BQXlDO1FBQzlDLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUW9ILFFBQVEsS0FBS3ZILGFBQWNTLENBQUFBLElBQUk4RyxRQUFRLEdBQUdwSCxRQUFRb0gsUUFBUSxBQUFEO1FBQ2pFLE9BQU85RztJQUNUO0lBRUFDLGFBQ0VNLE1BQWlEO1FBRWpELE1BQU1iLFVBQVVtSDtZQUNHdEc7UUFBbkJiLFFBQVFvSCxRQUFRLEdBQUd2RyxDQUFBQSxtQkFBQUEsT0FBT3VHLFFBQVEsY0FBZnZHLDhCQUFBQSxtQkFBbUI7UUFDdEMsT0FBT2I7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTc0g7SUFDUCxPQUFPO1FBQ0xDLE9BQU9sRyxPQUFPO0lBQ2hCO0FBQ0Y7QUFFQSxPQUFPLE1BQU1tRyxvQ0FBb0M7SUFDL0NwSSxRQUNFWSxPQUEwQyxFQUMxQ1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVF1SCxLQUFLLEtBQUtsRyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVF1SCxLQUFLO1FBQ3ZDO1FBRUEsT0FBT2pJO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVc0g7UUFFaEIsTUFBTzNILE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUXVILEtBQUssR0FBRzVILE9BQU80QixNQUFNO29CQUM3QjtnQkFFRjtvQkFDRTVCLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTDBHLE9BQU83SSxNQUFNbUMsT0FBTzBHLEtBQUssSUFBSWxHLE9BQU9SLE9BQU8wRyxLQUFLLElBQUlsRyxPQUFPO1FBQzdEO0lBQ0Y7SUFFQWhCLFFBQU9MLE9BQTBDO1FBQy9DLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUXVILEtBQUssS0FBSzFILGFBQ2ZTLENBQUFBLElBQUlpSCxLQUFLLEdBQUcsQUFBQ3ZILENBQUFBLFFBQVF1SCxLQUFLLElBQUlsRyxPQUFPLEVBQUMsRUFBR0csUUFBUSxFQUFDO1FBQ3JELE9BQU9sQjtJQUNUO0lBRUFDLGFBQ0VNLE1BQWtEO1FBRWxELE1BQU1iLFVBQVVzSDtRQUNoQnRILFFBQVF1SCxLQUFLLEdBQ1gxRyxPQUFPMEcsS0FBSyxLQUFLMUgsYUFBYWdCLE9BQU8wRyxLQUFLLEtBQUssT0FDM0NsRyxPQUFPUixPQUFPMEcsS0FBSyxJQUNuQmxHLE9BQU87UUFDYixPQUFPckI7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTeUg7SUFDUCxPQUFPO1FBQ0xMLFVBQVU7SUFDWjtBQUNGO0FBRUEsT0FBTyxNQUFNTSxtQ0FBbUM7SUFDOUN0SSxRQUNFWSxPQUF5QyxFQUN6Q1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVFvSCxRQUFRLEtBQUssTUFBTTtZQUM3QjlILE9BQU9ZLE1BQU0sQ0FBQyxHQUFHMkcsSUFBSSxDQUFDN0csUUFBUW9ILFFBQVE7UUFDeEM7UUFFQSxPQUFPOUg7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVV5SDtRQUVoQixNQUFPOUgsT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRb0gsUUFBUSxHQUFHekgsT0FBT2tILElBQUk7b0JBQzlCO2dCQUVGO29CQUNFbEgsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMdUcsVUFBVTFJLE1BQU1tQyxPQUFPdUcsUUFBUSxJQUFJTixRQUFRakcsT0FBT3VHLFFBQVEsSUFBSTtRQUNoRTtJQUNGO0lBRUEvRyxRQUFPTCxPQUF5QztRQUM5QyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVFvSCxRQUFRLEtBQUt2SCxhQUFjUyxDQUFBQSxJQUFJOEcsUUFBUSxHQUFHcEgsUUFBUW9ILFFBQVEsQUFBRDtRQUNqRSxPQUFPOUc7SUFDVDtJQUVBQyxhQUNFTSxNQUFpRDtRQUVqRCxNQUFNYixVQUFVeUg7WUFDRzVHO1FBQW5CYixRQUFRb0gsUUFBUSxHQUFHdkcsQ0FBQUEsbUJBQUFBLE9BQU91RyxRQUFRLGNBQWZ2Ryw4QkFBQUEsbUJBQW1CO1FBQ3RDLE9BQU9iO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBUzJIO0lBQ1AsT0FBTztRQUNMdkcsT0FBT0MsT0FBTztJQUNoQjtBQUNGO0FBRUEsT0FBTyxNQUFNdUcsb0NBQW9DO0lBQy9DeEksUUFDRVksT0FBMEMsRUFDMUNWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRb0IsS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVFvQixLQUFLO1FBQ3ZDO1FBRUEsT0FBTzlCO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVMkg7UUFFaEIsTUFBT2hJLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUW9CLEtBQUssR0FBR3pCLE9BQU80QixNQUFNO29CQUM3QjtnQkFFRjtvQkFDRTVCLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTE8sT0FBTzFDLE1BQU1tQyxPQUFPTyxLQUFLLElBQUlDLE9BQU9SLE9BQU9PLEtBQUssSUFBSUMsT0FBTztRQUM3RDtJQUNGO0lBRUFoQixRQUFPTCxPQUEwQztRQUMvQyxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVFvQixLQUFLLEtBQUt2QixhQUNmUyxDQUFBQSxJQUFJYyxLQUFLLEdBQUcsQUFBQ3BCLENBQUFBLFFBQVFvQixLQUFLLElBQUlDLE9BQU8sRUFBQyxFQUFHRyxRQUFRLEVBQUM7UUFDckQsT0FBT2xCO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBa0Q7UUFFbEQsTUFBTWIsVUFBVTJIO1FBQ2hCM0gsUUFBUW9CLEtBQUssR0FDWFAsT0FBT08sS0FBSyxLQUFLdkIsYUFBYWdCLE9BQU9PLEtBQUssS0FBSyxPQUMzQ0MsT0FBT1IsT0FBT08sS0FBSyxJQUNuQkMsT0FBTztRQUNiLE9BQU9yQjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVM2SDtJQUNQLE9BQU87UUFDTEMsT0FBT3pHLE9BQU87UUFDZDBHLFNBQVM7UUFDVEMsV0FBVztRQUNYNUcsT0FBT0MsT0FBTztRQUNkNEcsUUFBUTVHLE9BQU87UUFDZitGLFVBQVU7SUFDWjtBQUNGO0FBRUEsT0FBTyxNQUFNYywyQkFBMkI7SUFDdEM5SSxRQUNFWSxPQUFpQyxFQUNqQ1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVE4SCxLQUFLLEtBQUt6RyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVE4SCxLQUFLO1FBQ3ZDO1FBRUEsSUFBSTlILFFBQVErSCxPQUFPLEtBQUssSUFBSTtZQUMxQnpJLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUStILE9BQU87UUFDMUM7UUFFQSxJQUFJL0gsUUFBUWdJLFNBQVMsS0FBSyxJQUFJO1lBQzVCMUksT0FBT1ksTUFBTSxDQUFDLElBQUk0QixNQUFNLENBQUM5QixRQUFRZ0ksU0FBUztRQUM1QztRQUVBLElBQUloSSxRQUFRb0IsS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsSUFBSXFCLE1BQU0sQ0FBQ3ZCLFFBQVFvQixLQUFLO1FBQ3hDO1FBRUEsSUFBSXBCLFFBQVFpSSxNQUFNLEtBQUs1RyxPQUFPLElBQUk7WUFDaEMvQixPQUFPWSxNQUFNLENBQUMsSUFBSXFCLE1BQU0sQ0FBQ3ZCLFFBQVFpSSxNQUFNO1FBQ3pDO1FBRUEsSUFBSWpJLFFBQVFvSCxRQUFRLEtBQUssTUFBTTtZQUM3QjlILE9BQU9ZLE1BQU0sQ0FBQyxJQUFJMkcsSUFBSSxDQUFDN0csUUFBUW9ILFFBQVE7UUFDekM7UUFFQSxPQUFPOUg7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVU2SDtRQUVoQixNQUFPbEksT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFROEgsS0FBSyxHQUFHbkksT0FBTzRCLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0h2QixRQUFRK0gsT0FBTyxHQUFHcEksT0FBT21DLE1BQU07b0JBQy9CO2dCQUVGLEtBQUs7b0JBQ0g5QixRQUFRZ0ksU0FBUyxHQUFHckksT0FBT21DLE1BQU07b0JBQ2pDO2dCQUVGLEtBQUs7b0JBQ0g5QixRQUFRb0IsS0FBSyxHQUFHekIsT0FBTzRCLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0h2QixRQUFRaUksTUFBTSxHQUFHdEksT0FBTzRCLE1BQU07b0JBQzlCO2dCQUVGLEtBQUs7b0JBQ0h2QixRQUFRb0gsUUFBUSxHQUFHekgsT0FBT2tILElBQUk7b0JBQzlCO2dCQUVGO29CQUNFbEgsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMaUgsT0FBT3BKLE1BQU1tQyxPQUFPaUgsS0FBSyxJQUFJekcsT0FBT1IsT0FBT2lILEtBQUssSUFBSXpHLE9BQU87WUFDM0QwRyxTQUFTckosTUFBTW1DLE9BQU9rSCxPQUFPLElBQUloRyxPQUFPbEIsT0FBT2tILE9BQU8sSUFBSTtZQUMxREMsV0FBV3RKLE1BQU1tQyxPQUFPbUgsU0FBUyxJQUFJakcsT0FBT2xCLE9BQU9tSCxTQUFTLElBQUk7WUFDaEU1RyxPQUFPMUMsTUFBTW1DLE9BQU9PLEtBQUssSUFBSUMsT0FBT1IsT0FBT08sS0FBSyxJQUFJQyxPQUFPO1lBQzNENEcsUUFBUXZKLE1BQU1tQyxPQUFPb0gsTUFBTSxJQUFJNUcsT0FBT1IsT0FBT29ILE1BQU0sSUFBSTVHLE9BQU87WUFDOUQrRixVQUFVMUksTUFBTW1DLE9BQU91RyxRQUFRLElBQUlOLFFBQVFqRyxPQUFPdUcsUUFBUSxJQUFJO1FBQ2hFO0lBQ0Y7SUFFQS9HLFFBQU9MLE9BQWlDO1FBQ3RDLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUThILEtBQUssS0FBS2pJLGFBQ2ZTLENBQUFBLElBQUl3SCxLQUFLLEdBQUcsQUFBQzlILENBQUFBLFFBQVE4SCxLQUFLLElBQUl6RyxPQUFPLEVBQUMsRUFBR0csUUFBUSxFQUFDO1FBQ3JEeEIsUUFBUStILE9BQU8sS0FBS2xJLGFBQWNTLENBQUFBLElBQUl5SCxPQUFPLEdBQUcvSCxRQUFRK0gsT0FBTyxBQUFEO1FBQzlEL0gsUUFBUWdJLFNBQVMsS0FBS25JLGFBQWNTLENBQUFBLElBQUkwSCxTQUFTLEdBQUdoSSxRQUFRZ0ksU0FBUyxBQUFEO1FBQ3BFaEksUUFBUW9CLEtBQUssS0FBS3ZCLGFBQ2ZTLENBQUFBLElBQUljLEtBQUssR0FBRyxBQUFDcEIsQ0FBQUEsUUFBUW9CLEtBQUssSUFBSUMsT0FBTyxFQUFDLEVBQUdHLFFBQVEsRUFBQztRQUNyRHhCLFFBQVFpSSxNQUFNLEtBQUtwSSxhQUNoQlMsQ0FBQUEsSUFBSTJILE1BQU0sR0FBRyxBQUFDakksQ0FBQUEsUUFBUWlJLE1BQU0sSUFBSTVHLE9BQU8sRUFBQyxFQUFHRyxRQUFRLEVBQUM7UUFDdkR4QixRQUFRb0gsUUFBUSxLQUFLdkgsYUFBY1MsQ0FBQUEsSUFBSThHLFFBQVEsR0FBR3BILFFBQVFvSCxRQUFRLEFBQUQ7UUFDakUsT0FBTzlHO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBeUM7UUFFekMsTUFBTWIsVUFBVTZIO1FBQ2hCN0gsUUFBUThILEtBQUssR0FDWGpILE9BQU9pSCxLQUFLLEtBQUtqSSxhQUFhZ0IsT0FBT2lILEtBQUssS0FBSyxPQUMzQ3pHLE9BQU9SLE9BQU9pSCxLQUFLLElBQ25CekcsT0FBTztZQUNLUjtRQUFsQmIsUUFBUStILE9BQU8sR0FBR2xILENBQUFBLGtCQUFBQSxPQUFPa0gsT0FBTyxjQUFkbEgsNkJBQUFBLGtCQUFrQjtZQUNoQkE7UUFBcEJiLFFBQVFnSSxTQUFTLEdBQUduSCxDQUFBQSxvQkFBQUEsT0FBT21ILFNBQVMsY0FBaEJuSCwrQkFBQUEsb0JBQW9CO1FBQ3hDYixRQUFRb0IsS0FBSyxHQUNYUCxPQUFPTyxLQUFLLEtBQUt2QixhQUFhZ0IsT0FBT08sS0FBSyxLQUFLLE9BQzNDQyxPQUFPUixPQUFPTyxLQUFLLElBQ25CQyxPQUFPO1FBQ2JyQixRQUFRaUksTUFBTSxHQUNacEgsT0FBT29ILE1BQU0sS0FBS3BJLGFBQWFnQixPQUFPb0gsTUFBTSxLQUFLLE9BQzdDNUcsT0FBT1IsT0FBT29ILE1BQU0sSUFDcEI1RyxPQUFPO1lBQ01SO1FBQW5CYixRQUFRb0gsUUFBUSxHQUFHdkcsQ0FBQUEsbUJBQUFBLE9BQU91RyxRQUFRLGNBQWZ2Ryw4QkFBQUEsbUJBQW1CO1FBQ3RDLE9BQU9iO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU21JO0lBQ1AsT0FBTztRQUNMQyxjQUFjLEVBQUU7SUFDbEI7QUFDRjtBQUVBLE9BQU8sTUFBTUMsNEJBQTRCO0lBQ3ZDakosUUFDRVksT0FBa0MsRUFDbENWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxLQUFLLE1BQU1pRCxLQUFLeEMsUUFBUW9JLFlBQVksQ0FBRTtZQUNwQ2pLLFlBQVlpQixNQUFNLENBQUNvRCxHQUFJbEQsT0FBT1ksTUFBTSxDQUFDLElBQUlTLElBQUksSUFBSUMsTUFBTTtRQUN6RDtRQUVBLE9BQU90QjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVW1JO1FBRWhCLE1BQU94SSxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVFvSSxZQUFZLENBQUMzRixJQUFJLENBQ3ZCdEUsWUFBWXFCLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT08sTUFBTTtvQkFFMUM7Z0JBRUY7b0JBQ0VQLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTHVILGNBQWMxRixNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVF1SCxZQUFZLElBQzVDdkgsT0FBT3VILFlBQVksQ0FBQ3hGLEdBQUcsQ0FBQyxDQUFDQyxJQUFXMUUsWUFBWWlDLFFBQVEsQ0FBQ3lDLE1BQ3pELEVBQUU7UUFDUjtJQUNGO0lBRUF4QyxRQUFPTCxPQUFrQztRQUN2QyxNQUFNTSxNQUFXLENBQUM7UUFFbEIsSUFBSU4sUUFBUW9JLFlBQVksRUFBRTtZQUN4QjlILElBQUk4SCxZQUFZLEdBQUdwSSxRQUFRb0ksWUFBWSxDQUFDeEYsR0FBRyxDQUFDLENBQUNDLElBQzNDQSxJQUFJMUUsWUFBWWtDLE1BQU0sQ0FBQ3dDLEtBQUtoRDtRQUVoQyxPQUFPO1lBQ0xTLElBQUk4SCxZQUFZLEdBQUcsRUFBRTtRQUN2QjtRQUVBLE9BQU85SDtJQUNUO0lBRUFDLGFBQ0VNLE1BQTBDO1lBSXhDQTtRQUZGLE1BQU1iLFVBQVVtSTtRQUNoQm5JLFFBQVFvSSxZQUFZLEdBQ2xCdkgsRUFBQUEsdUJBQUFBLE9BQU91SCxZQUFZLGNBQW5CdkgsMkNBQUFBLHFCQUFxQitCLEdBQUcsQ0FBQyxDQUFDQyxJQUFNMUUsWUFBWW9DLFdBQVcsQ0FBQ3NDLFFBQU8sRUFBRTtRQUNuRSxPQUFPN0M7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTc0k7SUFDUCxPQUFPO1FBQ0xDLGtCQUFrQjtJQUNwQjtBQUNGO0FBRUEsT0FBTyxNQUFNQyxzQ0FBc0M7SUFDakRwSixRQUNFWSxPQUE0QyxFQUM1Q1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVF1SSxnQkFBZ0IsS0FBSyxJQUFJO1lBQ25DakosT0FBT1ksTUFBTSxDQUFDLElBQUk0QixNQUFNLENBQUM5QixRQUFRdUksZ0JBQWdCO1FBQ25EO1FBRUEsT0FBT2pKO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVc0k7UUFFaEIsTUFBTzNJLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUXVJLGdCQUFnQixHQUFHNUksT0FBT21DLE1BQU07b0JBQ3hDO2dCQUVGO29CQUNFbkMsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMMEgsa0JBQWtCN0osTUFBTW1DLE9BQU8wSCxnQkFBZ0IsSUFDM0N4RyxPQUFPbEIsT0FBTzBILGdCQUFnQixJQUM5QjtRQUNOO0lBQ0Y7SUFFQWxJLFFBQU9MLE9BQTRDO1FBQ2pELE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUXVJLGdCQUFnQixLQUFLMUksYUFDMUJTLENBQUFBLElBQUlpSSxnQkFBZ0IsR0FBR3ZJLFFBQVF1SSxnQkFBZ0IsQUFBRDtRQUNqRCxPQUFPakk7SUFDVDtJQUVBQyxhQUNFTSxNQUFvRDtRQUVwRCxNQUFNYixVQUFVc0k7WUFDV3pIO1FBQTNCYixRQUFRdUksZ0JBQWdCLEdBQUcxSCxDQUFBQSwyQkFBQUEsT0FBTzBILGdCQUFnQixjQUF2QjFILHNDQUFBQSwyQkFBMkI7UUFDdEQsT0FBT2I7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTeUk7SUFDUCxPQUFPO1FBQ0xDLFlBQVk7UUFDWkMscUJBQXFCO0lBQ3ZCO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLDhDQUE4QztJQUN6RHhKLFFBQ0VZLE9BQW9ELEVBQ3BEVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUTBJLFVBQVUsS0FBSyxJQUFJO1lBQzdCcEosT0FBT1ksTUFBTSxDQUFDLElBQUk0QixNQUFNLENBQUM5QixRQUFRMEksVUFBVTtRQUM3QztRQUVBLElBQUkxSSxRQUFRMkksbUJBQW1CLEtBQUssSUFBSTtZQUN0Q3JKLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUTJJLG1CQUFtQjtRQUN0RDtRQUVBLE9BQU9ySjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVXlJO1FBRWhCLE1BQU85SSxPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVEwSSxVQUFVLEdBQUcvSSxPQUFPbUMsTUFBTTtvQkFDbEM7Z0JBRUYsS0FBSztvQkFDSDlCLFFBQVEySSxtQkFBbUIsR0FBR2hKLE9BQU9tQyxNQUFNO29CQUMzQztnQkFFRjtvQkFDRW5DLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTDZILFlBQVloSyxNQUFNbUMsT0FBTzZILFVBQVUsSUFBSTNHLE9BQU9sQixPQUFPNkgsVUFBVSxJQUFJO1lBQ25FQyxxQkFBcUJqSyxNQUFNbUMsT0FBTzhILG1CQUFtQixJQUNqRDVHLE9BQU9sQixPQUFPOEgsbUJBQW1CLElBQ2pDO1FBQ047SUFDRjtJQUVBdEksUUFBT0wsT0FBb0Q7UUFDekQsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRMEksVUFBVSxLQUFLN0ksYUFBY1MsQ0FBQUEsSUFBSW9JLFVBQVUsR0FBRzFJLFFBQVEwSSxVQUFVLEFBQUQ7UUFDdkUxSSxRQUFRMkksbUJBQW1CLEtBQUs5SSxhQUM3QlMsQ0FBQUEsSUFBSXFJLG1CQUFtQixHQUFHM0ksUUFBUTJJLG1CQUFtQixBQUFEO1FBQ3ZELE9BQU9ySTtJQUNUO0lBRUFDLGFBQ0VNLE1BQTREO1FBRTVELE1BQU1iLFVBQVV5STtZQUNLNUg7UUFBckJiLFFBQVEwSSxVQUFVLEdBQUc3SCxDQUFBQSxxQkFBQUEsT0FBTzZILFVBQVUsY0FBakI3SCxnQ0FBQUEscUJBQXFCO1lBQ1pBO1FBQTlCYixRQUFRMkksbUJBQW1CLEdBQUc5SCxDQUFBQSw4QkFBQUEsT0FBTzhILG1CQUFtQixjQUExQjlILHlDQUFBQSw4QkFBOEI7UUFDNUQsT0FBT2I7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTNkk7SUFDUCxPQUFPO1FBQ0xILFlBQVk7SUFDZDtBQUNGO0FBRUEsT0FBTyxNQUFNSSxnQ0FBZ0M7SUFDM0MxSixRQUNFWSxPQUFzQyxFQUN0Q1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVEwSSxVQUFVLEtBQUssSUFBSTtZQUM3QnBKLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUTBJLFVBQVU7UUFDN0M7UUFFQSxPQUFPcEo7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVU2STtRQUVoQixNQUFPbEosT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRMEksVUFBVSxHQUFHL0ksT0FBT21DLE1BQU07b0JBQ2xDO2dCQUVGO29CQUNFbkMsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMNkgsWUFBWWhLLE1BQU1tQyxPQUFPNkgsVUFBVSxJQUFJM0csT0FBT2xCLE9BQU82SCxVQUFVLElBQUk7UUFDckU7SUFDRjtJQUVBckksUUFBT0wsT0FBc0M7UUFDM0MsTUFBTU0sTUFBVyxDQUFDO1FBQ2xCTixRQUFRMEksVUFBVSxLQUFLN0ksYUFBY1MsQ0FBQUEsSUFBSW9JLFVBQVUsR0FBRzFJLFFBQVEwSSxVQUFVLEFBQUQ7UUFDdkUsT0FBT3BJO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBOEM7UUFFOUMsTUFBTWIsVUFBVTZJO1lBQ0toSTtRQUFyQmIsUUFBUTBJLFVBQVUsR0FBRzdILENBQUFBLHFCQUFBQSxPQUFPNkgsVUFBVSxjQUFqQjdILGdDQUFBQSxxQkFBcUI7UUFDMUMsT0FBT2I7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTK0k7SUFDUCxPQUFPO1FBQ0xSLGtCQUFrQjtRQUNsQkkscUJBQXFCO0lBQ3ZCO0FBQ0Y7QUFFQSxPQUFPLE1BQU1LLHdDQUF3QztJQUNuRDVKLFFBQ0VZLE9BQThDLEVBQzlDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsSUFBSVMsUUFBUXVJLGdCQUFnQixLQUFLLElBQUk7WUFDbkNqSixPQUFPWSxNQUFNLENBQUMsSUFBSTRCLE1BQU0sQ0FBQzlCLFFBQVF1SSxnQkFBZ0I7UUFDbkQ7UUFFQSxJQUFJdkksUUFBUTJJLG1CQUFtQixLQUFLLElBQUk7WUFDdENySixPQUFPWSxNQUFNLENBQUMsSUFBSTRCLE1BQU0sQ0FBQzlCLFFBQVEySSxtQkFBbUI7UUFDdEQ7UUFFQSxPQUFPcko7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVUrSTtRQUVoQixNQUFPcEosT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRdUksZ0JBQWdCLEdBQUc1SSxPQUFPbUMsTUFBTTtvQkFDeEM7Z0JBRUYsS0FBSztvQkFDSDlCLFFBQVEySSxtQkFBbUIsR0FBR2hKLE9BQU9tQyxNQUFNO29CQUMzQztnQkFFRjtvQkFDRW5DLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTDBILGtCQUFrQjdKLE1BQU1tQyxPQUFPMEgsZ0JBQWdCLElBQzNDeEcsT0FBT2xCLE9BQU8wSCxnQkFBZ0IsSUFDOUI7WUFDSkkscUJBQXFCakssTUFBTW1DLE9BQU84SCxtQkFBbUIsSUFDakQ1RyxPQUFPbEIsT0FBTzhILG1CQUFtQixJQUNqQztRQUNOO0lBQ0Y7SUFFQXRJLFFBQU9MLE9BQThDO1FBQ25ELE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUXVJLGdCQUFnQixLQUFLMUksYUFDMUJTLENBQUFBLElBQUlpSSxnQkFBZ0IsR0FBR3ZJLFFBQVF1SSxnQkFBZ0IsQUFBRDtRQUNqRHZJLFFBQVEySSxtQkFBbUIsS0FBSzlJLGFBQzdCUyxDQUFBQSxJQUFJcUksbUJBQW1CLEdBQUczSSxRQUFRMkksbUJBQW1CLEFBQUQ7UUFDdkQsT0FBT3JJO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBc0Q7UUFFdEQsTUFBTWIsVUFBVStJO1lBQ1dsSTtRQUEzQmIsUUFBUXVJLGdCQUFnQixHQUFHMUgsQ0FBQUEsMkJBQUFBLE9BQU8wSCxnQkFBZ0IsY0FBdkIxSCxzQ0FBQUEsMkJBQTJCO1lBQ3hCQTtRQUE5QmIsUUFBUTJJLG1CQUFtQixHQUFHOUgsQ0FBQUEsOEJBQUFBLE9BQU84SCxtQkFBbUIsY0FBMUI5SCx5Q0FBQUEsOEJBQThCO1FBQzVELE9BQU9iO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU2lKO0lBQ1AsT0FBTztRQUNMTixxQkFBcUI7SUFDdkI7QUFDRjtBQUVBLE9BQU8sTUFBTU8seUNBQXlDO0lBQ3BEOUosUUFDRVksT0FBK0MsRUFDL0NWLFNBQXVCcEIsYUFBYXFCLE1BQU0sRUFBRTtRQUU1QyxJQUFJUyxRQUFRMkksbUJBQW1CLEtBQUssSUFBSTtZQUN0Q3JKLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUTJJLG1CQUFtQjtRQUN0RDtRQUVBLE9BQU9ySjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVWlKO1FBRWhCLE1BQU90SixPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVEySSxtQkFBbUIsR0FBR2hKLE9BQU9tQyxNQUFNO29CQUMzQztnQkFFRjtvQkFDRW5DLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTDhILHFCQUFxQmpLLE1BQU1tQyxPQUFPOEgsbUJBQW1CLElBQ2pENUcsT0FBT2xCLE9BQU84SCxtQkFBbUIsSUFDakM7UUFDTjtJQUNGO0lBRUF0SSxRQUFPTCxPQUErQztRQUNwRCxNQUFNTSxNQUFXLENBQUM7UUFDbEJOLFFBQVEySSxtQkFBbUIsS0FBSzlJLGFBQzdCUyxDQUFBQSxJQUFJcUksbUJBQW1CLEdBQUczSSxRQUFRMkksbUJBQW1CLEFBQUQ7UUFDdkQsT0FBT3JJO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBdUQ7UUFFdkQsTUFBTWIsVUFBVWlKO1lBQ2NwSTtRQUE5QmIsUUFBUTJJLG1CQUFtQixHQUFHOUgsQ0FBQUEsOEJBQUFBLE9BQU84SCxtQkFBbUIsY0FBMUI5SCx5Q0FBQUEsOEJBQThCO1FBQzVELE9BQU9iO0lBQ1Q7QUFDRixFQUFFO0FBRUYsU0FBU21KO0lBQ1AsT0FBTztRQUNMWixrQkFBa0I7UUFDbEJHLFlBQVk7SUFDZDtBQUNGO0FBRUEsT0FBTyxNQUFNVSxpREFBaUQ7SUFDNURoSyxRQUNFWSxPQUF1RCxFQUN2RFYsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVF1SSxnQkFBZ0IsS0FBSyxJQUFJO1lBQ25DakosT0FBT1ksTUFBTSxDQUFDLElBQUk0QixNQUFNLENBQUM5QixRQUFRdUksZ0JBQWdCO1FBQ25EO1FBRUEsSUFBSXZJLFFBQVEwSSxVQUFVLEtBQUssSUFBSTtZQUM3QnBKLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUTBJLFVBQVU7UUFDN0M7UUFFQSxPQUFPcEo7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVtSjtRQUVoQixNQUFPeEosT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRdUksZ0JBQWdCLEdBQUc1SSxPQUFPbUMsTUFBTTtvQkFDeEM7Z0JBRUYsS0FBSztvQkFDSDlCLFFBQVEwSSxVQUFVLEdBQUcvSSxPQUFPbUMsTUFBTTtvQkFDbEM7Z0JBRUY7b0JBQ0VuQyxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0wwSCxrQkFBa0I3SixNQUFNbUMsT0FBTzBILGdCQUFnQixJQUMzQ3hHLE9BQU9sQixPQUFPMEgsZ0JBQWdCLElBQzlCO1lBQ0pHLFlBQVloSyxNQUFNbUMsT0FBTzZILFVBQVUsSUFBSTNHLE9BQU9sQixPQUFPNkgsVUFBVSxJQUFJO1FBQ3JFO0lBQ0Y7SUFFQXJJLFFBQU9MLE9BQXVEO1FBQzVELE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUXVJLGdCQUFnQixLQUFLMUksYUFDMUJTLENBQUFBLElBQUlpSSxnQkFBZ0IsR0FBR3ZJLFFBQVF1SSxnQkFBZ0IsQUFBRDtRQUNqRHZJLFFBQVEwSSxVQUFVLEtBQUs3SSxhQUFjUyxDQUFBQSxJQUFJb0ksVUFBVSxHQUFHMUksUUFBUTBJLFVBQVUsQUFBRDtRQUN2RSxPQUFPcEk7SUFDVDtJQUVBQyxhQUNFTSxNQUErRDtRQUUvRCxNQUFNYixVQUFVbUo7WUFDV3RJO1FBQTNCYixRQUFRdUksZ0JBQWdCLEdBQUcxSCxDQUFBQSwyQkFBQUEsT0FBTzBILGdCQUFnQixjQUF2QjFILHNDQUFBQSwyQkFBMkI7WUFDakNBO1FBQXJCYixRQUFRMEksVUFBVSxHQUFHN0gsQ0FBQUEscUJBQUFBLE9BQU82SCxVQUFVLGNBQWpCN0gsZ0NBQUFBLHFCQUFxQjtRQUMxQyxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVNxSjtJQUNQLE9BQU87UUFDTEMsZUFBZTtJQUNqQjtBQUNGO0FBRUEsT0FBTyxNQUFNQyx3QkFBd0I7SUFDbkNuSyxRQUNFWSxPQUE4QixFQUM5QlYsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVFzSixhQUFhLEtBQUssSUFBSTtZQUNoQ2hLLE9BQU9ZLE1BQU0sQ0FBQyxJQUFJNEIsTUFBTSxDQUFDOUIsUUFBUXNKLGFBQWE7UUFDaEQ7UUFFQSxPQUFPaEs7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVVxSjtRQUVoQixNQUFPMUosT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRc0osYUFBYSxHQUFHM0osT0FBT21DLE1BQU07b0JBQ3JDO2dCQUVGO29CQUNFbkMsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPRDtJQUNUO0lBRUFJLFVBQVNTLE1BQVc7UUFDbEIsT0FBTztZQUNMeUksZUFBZTVLLE1BQU1tQyxPQUFPeUksYUFBYSxJQUNyQ3ZILE9BQU9sQixPQUFPeUksYUFBYSxJQUMzQjtRQUNOO0lBQ0Y7SUFFQWpKLFFBQU9MLE9BQThCO1FBQ25DLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUXNKLGFBQWEsS0FBS3pKLGFBQ3ZCUyxDQUFBQSxJQUFJZ0osYUFBYSxHQUFHdEosUUFBUXNKLGFBQWEsQUFBRDtRQUMzQyxPQUFPaEo7SUFDVDtJQUVBQyxhQUFZTSxNQUFzQztRQUNoRCxNQUFNYixVQUFVcUo7WUFDUXhJO1FBQXhCYixRQUFRc0osYUFBYSxHQUFHekksQ0FBQUEsd0JBQUFBLE9BQU95SSxhQUFhLGNBQXBCekksbUNBQUFBLHdCQUF3QjtRQUNoRCxPQUFPYjtJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVN3SjtJQUNQLE9BQU87UUFDTEMsb0JBQW9CLEVBQUU7UUFDdEJDLG9CQUFvQixFQUFFO0lBQ3hCO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLGdDQUFnQztJQUMzQ3ZLLFFBQ0VZLE9BQXNDLEVBQ3RDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsS0FBSyxNQUFNaUQsS0FBS3hDLFFBQVF5SixrQkFBa0IsQ0FBRTtZQUMxQ3BMLG1CQUFtQmUsTUFBTSxDQUFDb0QsR0FBSWxELE9BQU9ZLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQUlDLE1BQU07UUFDaEU7UUFFQSxLQUFLLE1BQU00QixLQUFLeEMsUUFBUTBKLGtCQUFrQixDQUFFO1lBQzFDckwsbUJBQW1CZSxNQUFNLENBQUNvRCxHQUFJbEQsT0FBT1ksTUFBTSxDQUFDLElBQUlTLElBQUksSUFBSUMsTUFBTTtRQUNoRTtRQUVBLE9BQU90QjtJQUNUO0lBRUFFLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCeEIsZUFBZXdCLFFBQVEsSUFBSXhCLGFBQWF3QjtRQUMzRCxJQUFJRyxNQUFNRixXQUFXRyxZQUFZRixPQUFPRyxHQUFHLEdBQUdILE9BQU9JLEdBQUcsR0FBR0w7UUFDM0QsTUFBTU0sVUFBVXdKO1FBRWhCLE1BQU83SixPQUFPSSxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTU4sT0FBT08sTUFBTTtZQUV6QixPQUFRRCxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hELFFBQVF5SixrQkFBa0IsQ0FBQ2hILElBQUksQ0FDN0JwRSxtQkFBbUJtQixNQUFNLENBQUNHLFFBQVFBLE9BQU9PLE1BQU07b0JBRWpEO2dCQUVGLEtBQUs7b0JBQ0hGLFFBQVEwSixrQkFBa0IsQ0FBQ2pILElBQUksQ0FDN0JwRSxtQkFBbUJtQixNQUFNLENBQUNHLFFBQVFBLE9BQU9PLE1BQU07b0JBRWpEO2dCQUVGO29CQUNFUCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0w0SSxvQkFBb0IvRyxNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVE0SSxrQkFBa0IsSUFDeEQ1SSxPQUFPNEksa0JBQWtCLENBQUM3RyxHQUFHLENBQUMsQ0FBQ0MsSUFDN0J4RSxtQkFBbUIrQixRQUFRLENBQUN5QyxNQUU5QixFQUFFO1lBQ042RyxvQkFBb0JoSCxNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVE2SSxrQkFBa0IsSUFDeEQ3SSxPQUFPNkksa0JBQWtCLENBQUM5RyxHQUFHLENBQUMsQ0FBQ0MsSUFDN0J4RSxtQkFBbUIrQixRQUFRLENBQUN5QyxNQUU5QixFQUFFO1FBQ1I7SUFDRjtJQUVBeEMsUUFBT0wsT0FBc0M7UUFDM0MsTUFBTU0sTUFBVyxDQUFDO1FBRWxCLElBQUlOLFFBQVF5SixrQkFBa0IsRUFBRTtZQUM5Qm5KLElBQUltSixrQkFBa0IsR0FBR3pKLFFBQVF5SixrQkFBa0IsQ0FBQzdHLEdBQUcsQ0FBQyxDQUFDQyxJQUN2REEsSUFBSXhFLG1CQUFtQmdDLE1BQU0sQ0FBQ3dDLEtBQUtoRDtRQUV2QyxPQUFPO1lBQ0xTLElBQUltSixrQkFBa0IsR0FBRyxFQUFFO1FBQzdCO1FBRUEsSUFBSXpKLFFBQVEwSixrQkFBa0IsRUFBRTtZQUM5QnBKLElBQUlvSixrQkFBa0IsR0FBRzFKLFFBQVEwSixrQkFBa0IsQ0FBQzlHLEdBQUcsQ0FBQyxDQUFDQyxJQUN2REEsSUFBSXhFLG1CQUFtQmdDLE1BQU0sQ0FBQ3dDLEtBQUtoRDtRQUV2QyxPQUFPO1lBQ0xTLElBQUlvSixrQkFBa0IsR0FBRyxFQUFFO1FBQzdCO1FBRUEsT0FBT3BKO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBOEM7WUFJNUNBLDRCQUlBQTtRQU5GLE1BQU1iLFVBQVV3SjtRQUNoQnhKLFFBQVF5SixrQkFBa0IsR0FDeEI1SSxFQUFBQSw2QkFBQUEsT0FBTzRJLGtCQUFrQixjQUF6QjVJLGlEQUFBQSwyQkFBMkIrQixHQUFHLENBQUMsQ0FBQ0MsSUFDOUJ4RSxtQkFBbUJrQyxXQUFXLENBQUNzQyxRQUM1QixFQUFFO1FBQ1Q3QyxRQUFRMEosa0JBQWtCLEdBQ3hCN0ksRUFBQUEsNkJBQUFBLE9BQU82SSxrQkFBa0IsY0FBekI3SSxpREFBQUEsMkJBQTJCK0IsR0FBRyxDQUFDLENBQUNDLElBQzlCeEUsbUJBQW1Ca0MsV0FBVyxDQUFDc0MsUUFDNUIsRUFBRTtRQUNULE9BQU83QztJQUNUO0FBQ0YsRUFBRTtBQUVGLFNBQVM0SjtJQUNQLE9BQU87UUFDTDlCLE9BQU96RyxPQUFPO0lBQ2hCO0FBQ0Y7QUFFQSxPQUFPLE1BQU13SSw4QkFBOEI7SUFDekN6SyxRQUNFWSxPQUFvQyxFQUNwQ1YsU0FBdUJwQixhQUFhcUIsTUFBTSxFQUFFO1FBRTVDLElBQUlTLFFBQVE4SCxLQUFLLEtBQUt6RyxPQUFPLElBQUk7WUFDL0IvQixPQUFPWSxNQUFNLENBQUMsR0FBR3FCLE1BQU0sQ0FBQ3ZCLFFBQVE4SCxLQUFLO1FBQ3ZDO1FBRUEsT0FBT3hJO0lBQ1Q7SUFFQUUsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJ4QixlQUFld0IsUUFBUSxJQUFJeEIsYUFBYXdCO1FBQzNELElBQUlHLE1BQU1GLFdBQVdHLFlBQVlGLE9BQU9HLEdBQUcsR0FBR0gsT0FBT0ksR0FBRyxHQUFHTDtRQUMzRCxNQUFNTSxVQUFVNEo7UUFFaEIsTUFBT2pLLE9BQU9JLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSyxNQUFNTixPQUFPTyxNQUFNO1lBRXpCLE9BQVFELFFBQVE7Z0JBQ2QsS0FBSztvQkFDSEQsUUFBUThILEtBQUssR0FBR25JLE9BQU80QixNQUFNO29CQUM3QjtnQkFFRjtvQkFDRTVCLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBSSxVQUFTUyxNQUFXO1FBQ2xCLE9BQU87WUFDTGlILE9BQU9wSixNQUFNbUMsT0FBT2lILEtBQUssSUFBSXpHLE9BQU9SLE9BQU9pSCxLQUFLLElBQUl6RyxPQUFPO1FBQzdEO0lBQ0Y7SUFFQWhCLFFBQU9MLE9BQW9DO1FBQ3pDLE1BQU1NLE1BQVcsQ0FBQztRQUNsQk4sUUFBUThILEtBQUssS0FBS2pJLGFBQ2ZTLENBQUFBLElBQUl3SCxLQUFLLEdBQUcsQUFBQzlILENBQUFBLFFBQVE4SCxLQUFLLElBQUl6RyxPQUFPLEVBQUMsRUFBR0csUUFBUSxFQUFDO1FBQ3JELE9BQU9sQjtJQUNUO0lBRUFDLGFBQ0VNLE1BQTRDO1FBRTVDLE1BQU1iLFVBQVU0SjtRQUNoQjVKLFFBQVE4SCxLQUFLLEdBQ1hqSCxPQUFPaUgsS0FBSyxLQUFLakksYUFBYWdCLE9BQU9pSCxLQUFLLEtBQUssT0FDM0N6RyxPQUFPUixPQUFPaUgsS0FBSyxJQUNuQnpHLE9BQU87UUFDYixPQUFPckI7SUFDVDtBQUNGLEVBQUU7QUFFRixTQUFTOEo7SUFDUCxPQUFPO1FBQ0xDLHdCQUF3QixFQUFFO0lBQzVCO0FBQ0Y7QUFFQSxPQUFPLE1BQU1DLHNDQUFzQztJQUNqRDVLLFFBQ0VZLE9BQTRDLEVBQzVDVixTQUF1QnBCLGFBQWFxQixNQUFNLEVBQUU7UUFFNUMsS0FBSyxNQUFNaUQsS0FBS3hDLFFBQVErSixzQkFBc0IsQ0FBRTtZQUM5Q2hMLHNCQUFzQkssTUFBTSxDQUFDb0QsR0FBSWxELE9BQU9ZLE1BQU0sQ0FBQyxJQUFJUyxJQUFJLElBQUlDLE1BQU07UUFDbkU7UUFFQSxPQUFPdEI7SUFDVDtJQUVBRSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQnhCLGVBQWV3QixRQUFRLElBQUl4QixhQUFhd0I7UUFDM0QsSUFBSUcsTUFBTUYsV0FBV0csWUFBWUYsT0FBT0csR0FBRyxHQUFHSCxPQUFPSSxHQUFHLEdBQUdMO1FBQzNELE1BQU1NLFVBQVU4SjtRQUVoQixNQUFPbkssT0FBT0ksR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1LLE1BQU1OLE9BQU9PLE1BQU07WUFFekIsT0FBUUQsUUFBUTtnQkFDZCxLQUFLO29CQUNIRCxRQUFRK0osc0JBQXNCLENBQUN0SCxJQUFJLENBQ2pDMUQsc0JBQXNCUyxNQUFNLENBQUNHLFFBQVFBLE9BQU9PLE1BQU07b0JBRXBEO2dCQUVGO29CQUNFUCxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU1MsTUFBVztRQUNsQixPQUFPO1lBQ0xrSix3QkFBd0JySCxNQUFNQyxPQUFPLENBQUM5QixtQkFBQUEsNkJBQUFBLE9BQVFrSixzQkFBc0IsSUFDaEVsSixPQUFPa0osc0JBQXNCLENBQUNuSCxHQUFHLENBQUMsQ0FBQ0MsSUFDakM5RCxzQkFBc0JxQixRQUFRLENBQUN5QyxNQUVqQyxFQUFFO1FBQ1I7SUFDRjtJQUVBeEMsUUFBT0wsT0FBNEM7UUFDakQsTUFBTU0sTUFBVyxDQUFDO1FBRWxCLElBQUlOLFFBQVErSixzQkFBc0IsRUFBRTtZQUNsQ3pKLElBQUl5SixzQkFBc0IsR0FBRy9KLFFBQVErSixzQkFBc0IsQ0FBQ25ILEdBQUcsQ0FBQyxDQUFDQyxJQUMvREEsSUFBSTlELHNCQUFzQnNCLE1BQU0sQ0FBQ3dDLEtBQUtoRDtRQUUxQyxPQUFPO1lBQ0xTLElBQUl5SixzQkFBc0IsR0FBRyxFQUFFO1FBQ2pDO1FBRUEsT0FBT3pKO0lBQ1Q7SUFFQUMsYUFDRU0sTUFBb0Q7WUFJbERBO1FBRkYsTUFBTWIsVUFBVThKO1FBQ2hCOUosUUFBUStKLHNCQUFzQixHQUM1QmxKLEVBQUFBLGlDQUFBQSxPQUFPa0osc0JBQXNCLGNBQTdCbEoscURBQUFBLCtCQUErQitCLEdBQUcsQ0FBQyxDQUFDQyxJQUNsQzlELHNCQUFzQndCLFdBQVcsQ0FBQ3NDLFFBQy9CLEVBQUU7UUFDVCxPQUFPN0M7SUFDVDtBQUNGLEVBQUU7QUFnRkYsT0FBTyxNQUFNaUs7SUFxQ1gxTCxPQUFPMkwsVUFBOEIsQ0FBQyxDQUFDLEVBQWdDO1FBQ3JFLE1BQU1DLE9BQU9oTCxtQkFBbUJDLE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDdEQsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLG9CQUFvQixVQUFVQztRQUMvRCxPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJ6SixvQkFBb0JsQixNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUVoRDtJQUVBSyxjQUNFTixVQUFxQyxDQUFDLENBQUMsRUFDRjtRQUNyQyxNQUFNQyxPQUFPcEosMEJBQTBCM0IsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUM3RCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUMsb0JBQW9CLGlCQUFpQkM7UUFDdEUsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CakosMkJBQTJCMUIsTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFdkQ7SUFFQU0sY0FDRVAsT0FBa0MsRUFDRztRQUNyQyxNQUFNQyxPQUFPN0ksMEJBQTBCbEMsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUM3RCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUMsb0JBQW9CLGlCQUFpQkM7UUFDdEUsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CekksMkJBQTJCbEMsTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFdkQ7SUFFQU8sY0FDRVIsT0FBa0MsRUFDRztRQUNyQyxNQUFNQyxPQUFPdEksMEJBQTBCekMsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUM3RCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUMsb0JBQW9CLGlCQUFpQkM7UUFDdEUsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CakksMkJBQTJCMUMsTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFdkQ7SUFFQVEsc0JBQ0VULE9BQTBDLEVBQ0c7UUFDN0MsTUFBTUMsT0FBTy9ILGtDQUFrQ2hELE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDckUsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUM5QixvQkFDQSx5QkFDQUM7UUFFRixPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkI1SCxtQ0FBbUMvQyxNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUUvRDtJQUVBUyxtQkFDRVYsVUFBMEMsQ0FBQyxDQUFDLEVBQ0Y7UUFDMUMsTUFBTUMsT0FBT3BILCtCQUErQjNELE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDbEUsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUM5QixvQkFDQSxzQkFDQUM7UUFFRixPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJqSCxnQ0FBZ0MxRCxNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUU1RDtJQUVBVSwrQkFDRVgsT0FBbUQsRUFDRztRQUN0RCxNQUFNQyxPQUNKL0csMkNBQTJDaEUsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUNuRSxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQzlCLG9CQUNBLGtDQUNBQztRQUVGLE9BQU9FLFFBQVFFLElBQUksQ0FBQyxDQUFDSixPQUNuQjdHLDRDQUE0QzlELE1BQU0sQ0FBQyxJQUFJdkIsYUFBYWtNO0lBRXhFO0lBRUFXLDhCQUNFWixPQUFrRCxFQUNHO1FBQ3JELE1BQU1DLE9BQ0p0RywwQ0FBMEN6RSxNQUFNLENBQUM4SyxTQUFTRSxNQUFNO1FBQ2xFLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FDOUIsb0JBQ0EsaUNBQ0FDO1FBRUYsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CbkcsMkNBQTJDeEUsTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFdkU7SUFFQVksMkJBQ0ViLE9BQStDLEVBQ0c7UUFDbEQsTUFBTUMsT0FDSmpHLHVDQUF1QzlFLE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDL0QsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUM5QixvQkFDQSw4QkFDQUM7UUFFRixPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkI5Rix3Q0FBd0M3RSxNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUVwRTtJQUVBYSxxQkFDRWQsT0FBeUMsRUFDRztRQUM1QyxNQUFNQyxPQUFPakUsaUNBQWlDOUcsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUNwRSxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQzlCLG9CQUNBLHdCQUNBQztRQUVGLE9BQU9FLFFBQVFFLElBQUksQ0FBQyxDQUFDSixPQUNuQjlELGtDQUFrQzdHLE1BQU0sQ0FBQyxJQUFJdkIsYUFBYWtNO0lBRTlEO0lBRUFyTCxVQUNFb0wsVUFBZ0MsQ0FBQyxDQUFDLEVBQ0Y7UUFDaEMsTUFBTUMsT0FBTzNHLHFCQUFxQnBFLE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDeEQsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLG9CQUFvQixhQUFhQztRQUNsRSxPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJ4RyxzQkFBc0JuRSxNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUVsRDtJQUVBYyxrQkFDRWYsVUFBeUMsQ0FBQyxDQUFDLEVBQ0Y7UUFDekMsTUFBTUMsT0FBTzVGLDhCQUE4Qm5GLE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDakUsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUM5QixvQkFDQSxxQkFDQUM7UUFFRixPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJ6RiwrQkFBK0JsRixNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUUzRDtJQUVBZSxtQkFDRWhCLFVBQTBDLENBQUMsQ0FBQyxFQUNGO1FBQzFDLE1BQU1DLE9BQU92RiwrQkFBK0J4RixNQUFNLENBQUM4SyxTQUFTRSxNQUFNO1FBQ2xFLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FDOUIsb0JBQ0Esc0JBQ0FDO1FBRUYsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CcEYsZ0NBQWdDdkYsTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFNUQ7SUFFQWdCLG9CQUNFakIsT0FBd0MsRUFDRztRQUMzQyxNQUFNQyxPQUFPakYsZ0NBQWdDOUYsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUNuRSxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQzlCLG9CQUNBLHVCQUNBQztRQUVGLE9BQU9FLFFBQVFFLElBQUksQ0FBQyxDQUFDSixPQUNuQi9FLGlDQUFpQzVGLE1BQU0sQ0FBQyxJQUFJdkIsYUFBYWtNO0lBRTdEO0lBRUFpQixjQUNFbEIsT0FBa0MsRUFDRztRQUNyQyxNQUFNQyxPQUFPN0UsMEJBQTBCbEcsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUM3RCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUMsb0JBQW9CLGlCQUFpQkM7UUFDdEUsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CM0UsMkJBQTJCaEcsTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFdkQ7SUFFQWtCLGNBQ0VuQixPQUFrQyxFQUNHO1FBQ3JDLE1BQU1DLE9BQU90RSwwQkFBMEJ6RyxNQUFNLENBQUM4SyxTQUFTRSxNQUFNO1FBQzdELE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQyxvQkFBb0IsaUJBQWlCQztRQUN0RSxPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJuRSwyQkFBMkJ4RyxNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUV2RDtJQUVBbUIsYUFDRXBCLE9BQWlDLEVBQ0c7UUFDcEMsTUFBTUMsT0FBTzNELHlCQUF5QnBILE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDNUQsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUFDLG9CQUFvQixnQkFBZ0JDO1FBQ3JFLE9BQU9FLFFBQVFFLElBQUksQ0FBQyxDQUFDSixPQUNuQnZELDBCQUEwQnBILE1BQU0sQ0FBQyxJQUFJdkIsYUFBYWtNO0lBRXREO0lBRUFvQixhQUNFckIsT0FBaUMsRUFDRztRQUNwQyxNQUFNQyxPQUFPbkQseUJBQXlCNUgsTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUM1RCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQUMsb0JBQW9CLGdCQUFnQkM7UUFDckUsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CakQsMEJBQTBCMUgsTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFdEQ7SUFFQXFCLHdCQUNFdEIsT0FBeUMsRUFDRztRQUM1QyxNQUFNQyxPQUFPOUMsaUNBQWlDakksTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUNwRSxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQzlCLG9CQUNBLDJCQUNBQztRQUVGLE9BQU9FLFFBQVFFLElBQUksQ0FBQyxDQUFDSixPQUNuQjNDLGtDQUFrQ2hJLE1BQU0sQ0FBQyxJQUFJdkIsYUFBYWtNO0lBRTlEO0lBRUFzQix3QkFDRXZCLE9BQXlDLEVBQ0c7UUFDNUMsTUFBTUMsT0FBT3pDLGlDQUFpQ3RJLE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDcEUsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUM5QixvQkFDQSwyQkFDQUM7UUFFRixPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJ2QyxrQ0FBa0NwSSxNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUU5RDtJQUVBdUIsZ0JBQ0V4QixPQUFpQyxFQUNHO1FBQ3BDLE1BQU1DLE9BQU9qQyx5QkFBeUI5SSxNQUFNLENBQUM4SyxTQUFTRSxNQUFNO1FBQzVELE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FDOUIsb0JBQ0EsbUJBQ0FDO1FBRUYsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25COUIsMEJBQTBCN0ksTUFBTSxDQUFDLElBQUl2QixhQUFha007SUFFdEQ7SUFFQXdCLDBCQUNFekIsT0FBNEMsRUFDVTtRQUN0RCxNQUFNQyxPQUFPM0Isb0NBQW9DcEosTUFBTSxDQUFDOEssU0FBU0UsTUFBTTtRQUN2RSxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsR0FBRyxDQUFDSixPQUFPLENBQzlCLG9CQUNBLDZCQUNBQztRQUVGLE9BQU9FLFFBQVFFLElBQUksQ0FBQyxDQUFDSixPQUNuQnZCLDRDQUE0Q3BKLE1BQU0sQ0FBQyxJQUFJdkIsYUFBYWtNO0lBRXhFO0lBRUF5QixvQkFDRTFCLE9BQXNDLEVBQ1U7UUFDaEQsTUFBTUMsT0FBT3JCLDhCQUE4QjFKLE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDakUsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUM5QixvQkFDQSx1QkFDQUM7UUFFRixPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJuQixzQ0FBc0N4SixNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUVsRTtJQUVBMEIsNkJBQ0UzQixPQUErQyxFQUNVO1FBQ3pELE1BQU1DLE9BQ0pqQix1Q0FBdUM5SixNQUFNLENBQUM4SyxTQUFTRSxNQUFNO1FBQy9ELE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FDOUIsb0JBQ0EsZ0NBQ0FDO1FBRUYsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CZiwrQ0FBK0M1SixNQUFNLENBQ25ELElBQUl2QixhQUFha007SUFHdkI7SUFFQTJCLG9CQUNFNUIsT0FBOEIsRUFDVTtRQUN4QyxNQUFNQyxPQUFPWixzQkFBc0JuSyxNQUFNLENBQUM4SyxTQUFTRSxNQUFNO1FBQ3pELE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FDOUIsb0JBQ0EsdUJBQ0FDO1FBRUYsT0FBT0UsUUFBUUUsSUFBSSxDQUFDLENBQUNKLE9BQ25CUiw4QkFBOEJuSyxNQUFNLENBQUMsSUFBSXZCLGFBQWFrTTtJQUUxRDtJQUVBNEIsMEJBQ0U3QixPQUFvQyxFQUNVO1FBQzlDLE1BQU1DLE9BQU9OLDRCQUE0QnpLLE1BQU0sQ0FBQzhLLFNBQVNFLE1BQU07UUFDL0QsTUFBTUMsVUFBVSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osT0FBTyxDQUM5QixvQkFDQSw2QkFDQUM7UUFFRixPQUFPRSxRQUFRRSxJQUFJLENBQUMsQ0FBQ0osT0FDbkJILG9DQUFvQ3hLLE1BQU0sQ0FBQyxJQUFJdkIsYUFBYWtNO0lBRWhFO0lBNVdBNkIsWUFBWTFCLEdBQVEsQ0FBRTtRQUZ0Qix1QkFBaUJBLE9BQWpCLEtBQUE7UUFHRSxJQUFJLENBQUNBLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUMvTCxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUMwTixJQUFJLENBQUMsSUFBSTtRQUNuQyxJQUFJLENBQUN6QixhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUN5QixJQUFJLENBQUMsSUFBSTtRQUNqRCxJQUFJLENBQUN4QixhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUN3QixJQUFJLENBQUMsSUFBSTtRQUNqRCxJQUFJLENBQUN2QixhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUN1QixJQUFJLENBQUMsSUFBSTtRQUNqRCxJQUFJLENBQUN0QixxQkFBcUIsR0FBRyxJQUFJLENBQUNBLHFCQUFxQixDQUFDc0IsSUFBSSxDQUFDLElBQUk7UUFDakUsSUFBSSxDQUFDckIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ3FCLElBQUksQ0FBQyxJQUFJO1FBQzNELElBQUksQ0FBQ3BCLDhCQUE4QixHQUNqQyxJQUFJLENBQUNBLDhCQUE4QixDQUFDb0IsSUFBSSxDQUFDLElBQUk7UUFDL0MsSUFBSSxDQUFDbkIsNkJBQTZCLEdBQ2hDLElBQUksQ0FBQ0EsNkJBQTZCLENBQUNtQixJQUFJLENBQUMsSUFBSTtRQUM5QyxJQUFJLENBQUNsQiwwQkFBMEIsR0FDN0IsSUFBSSxDQUFDQSwwQkFBMEIsQ0FBQ2tCLElBQUksQ0FBQyxJQUFJO1FBQzNDLElBQUksQ0FBQ2pCLG9CQUFvQixHQUFHLElBQUksQ0FBQ0Esb0JBQW9CLENBQUNpQixJQUFJLENBQUMsSUFBSTtRQUMvRCxJQUFJLENBQUNuTixTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUNtTixJQUFJLENBQUMsSUFBSTtRQUN6QyxJQUFJLENBQUNoQixpQkFBaUIsR0FBRyxJQUFJLENBQUNBLGlCQUFpQixDQUFDZ0IsSUFBSSxDQUFDLElBQUk7UUFDekQsSUFBSSxDQUFDZixrQkFBa0IsR0FBRyxJQUFJLENBQUNBLGtCQUFrQixDQUFDZSxJQUFJLENBQUMsSUFBSTtRQUMzRCxJQUFJLENBQUNkLG1CQUFtQixHQUFHLElBQUksQ0FBQ0EsbUJBQW1CLENBQUNjLElBQUksQ0FBQyxJQUFJO1FBQzdELElBQUksQ0FBQ2IsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDYSxJQUFJLENBQUMsSUFBSTtRQUNqRCxJQUFJLENBQUNaLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ1ksSUFBSSxDQUFDLElBQUk7UUFDakQsSUFBSSxDQUFDWCxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNXLElBQUksQ0FBQyxJQUFJO1FBQy9DLElBQUksQ0FBQ1YsWUFBWSxHQUFHLElBQUksQ0FBQ0EsWUFBWSxDQUFDVSxJQUFJLENBQUMsSUFBSTtRQUMvQyxJQUFJLENBQUNULHVCQUF1QixHQUFHLElBQUksQ0FBQ0EsdUJBQXVCLENBQUNTLElBQUksQ0FBQyxJQUFJO1FBQ3JFLElBQUksQ0FBQ1IsdUJBQXVCLEdBQUcsSUFBSSxDQUFDQSx1QkFBdUIsQ0FBQ1EsSUFBSSxDQUFDLElBQUk7UUFDckUsSUFBSSxDQUFDUCxlQUFlLEdBQUcsSUFBSSxDQUFDQSxlQUFlLENBQUNPLElBQUksQ0FBQyxJQUFJO1FBQ3JELElBQUksQ0FBQ04seUJBQXlCLEdBQUcsSUFBSSxDQUFDQSx5QkFBeUIsQ0FBQ00sSUFBSSxDQUFDLElBQUk7UUFDekUsSUFBSSxDQUFDTCxtQkFBbUIsR0FBRyxJQUFJLENBQUNBLG1CQUFtQixDQUFDSyxJQUFJLENBQUMsSUFBSTtRQUM3RCxJQUFJLENBQUNKLDRCQUE0QixHQUMvQixJQUFJLENBQUNBLDRCQUE0QixDQUFDSSxJQUFJLENBQUMsSUFBSTtRQUM3QyxJQUFJLENBQUNILG1CQUFtQixHQUFHLElBQUksQ0FBQ0EsbUJBQW1CLENBQUNHLElBQUksQ0FBQyxJQUFJO1FBQzdELElBQUksQ0FBQ0YseUJBQXlCLEdBQUcsSUFBSSxDQUFDQSx5QkFBeUIsQ0FBQ0UsSUFBSSxDQUFDLElBQUk7SUFDM0U7QUE2VUYifQ==
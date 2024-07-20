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
    EventBadSignatureEvidence: function() {
        return EventBadSignatureEvidence;
    },
    EventBatchConfirmKey: function() {
        return EventBatchConfirmKey;
    },
    EventBatchCreated: function() {
        return EventBatchCreated;
    },
    EventBatchSendToEthClaim: function() {
        return EventBatchSendToEthClaim;
    },
    EventClaim: function() {
        return EventClaim;
    },
    EventERC20DeployedClaim: function() {
        return EventERC20DeployedClaim;
    },
    EventMultisigUpdateRequest: function() {
        return EventMultisigUpdateRequest;
    },
    EventOutgoingLogicCallCanceled: function() {
        return EventOutgoingLogicCallCanceled;
    },
    EventOutgoingTxId: function() {
        return EventOutgoingTxId;
    },
    EventSendToEthFeeCollected: function() {
        return EventSendToEthFeeCollected;
    },
    EventSetOperatorAddress: function() {
        return EventSetOperatorAddress;
    },
    EventSignatureSlashing: function() {
        return EventSignatureSlashing;
    },
    EventValsetConfirmKey: function() {
        return EventValsetConfirmKey;
    },
    EventValsetUpdatedClaim: function() {
        return EventValsetUpdatedClaim;
    },
    MsgBatchSendToEthClaim: function() {
        return MsgBatchSendToEthClaim;
    },
    MsgBatchSendToEthClaimResponse: function() {
        return MsgBatchSendToEthClaimResponse;
    },
    MsgCancelSendToEth: function() {
        return MsgCancelSendToEth;
    },
    MsgCancelSendToEthResponse: function() {
        return MsgCancelSendToEthResponse;
    },
    MsgClientImpl: function() {
        return MsgClientImpl;
    },
    MsgConfirmBatch: function() {
        return MsgConfirmBatch;
    },
    MsgConfirmBatchResponse: function() {
        return MsgConfirmBatchResponse;
    },
    MsgConfirmLogicCall: function() {
        return MsgConfirmLogicCall;
    },
    MsgConfirmLogicCallResponse: function() {
        return MsgConfirmLogicCallResponse;
    },
    MsgERC20DeployedClaim: function() {
        return MsgERC20DeployedClaim;
    },
    MsgERC20DeployedClaimResponse: function() {
        return MsgERC20DeployedClaimResponse;
    },
    MsgExecuteIbcAutoForwards: function() {
        return MsgExecuteIbcAutoForwards;
    },
    MsgExecuteIbcAutoForwardsResponse: function() {
        return MsgExecuteIbcAutoForwardsResponse;
    },
    MsgLogicCallExecutedClaim: function() {
        return MsgLogicCallExecutedClaim;
    },
    MsgLogicCallExecutedClaimResponse: function() {
        return MsgLogicCallExecutedClaimResponse;
    },
    MsgRequestBatch: function() {
        return MsgRequestBatch;
    },
    MsgRequestBatchResponse: function() {
        return MsgRequestBatchResponse;
    },
    MsgSendToCosmosClaim: function() {
        return MsgSendToCosmosClaim;
    },
    MsgSendToCosmosClaimResponse: function() {
        return MsgSendToCosmosClaimResponse;
    },
    MsgSendToEth: function() {
        return MsgSendToEth;
    },
    MsgSendToEthResponse: function() {
        return MsgSendToEthResponse;
    },
    MsgSetOrchestratorAddress: function() {
        return MsgSetOrchestratorAddress;
    },
    MsgSetOrchestratorAddressResponse: function() {
        return MsgSetOrchestratorAddressResponse;
    },
    MsgSubmitBadSignatureEvidence: function() {
        return MsgSubmitBadSignatureEvidence;
    },
    MsgSubmitBadSignatureEvidenceResponse: function() {
        return MsgSubmitBadSignatureEvidenceResponse;
    },
    MsgValsetConfirm: function() {
        return MsgValsetConfirm;
    },
    MsgValsetConfirmResponse: function() {
        return MsgValsetConfirmResponse;
    },
    MsgValsetUpdatedClaim: function() {
        return MsgValsetUpdatedClaim;
    },
    MsgValsetUpdatedClaimResponse: function() {
        return MsgValsetUpdatedClaimResponse;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _coin = require("cosmjs-types/cosmos/base/v1beta1/coin");
const _any = require("cosmjs-types/google/protobuf/any");
const _helpers = require("./helpers");
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
function createBaseMsgSetOrchestratorAddress() {
    return {
        validator: "",
        orchestrator: "",
        ethAddress: ""
    };
}
const MsgSetOrchestratorAddress = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddress();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
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
            validator: (0, _helpers.isSet)(object.validator) ? String(object.validator) : "",
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : "",
            ethAddress: (0, _helpers.isSet)(object.ethAddress) ? String(object.ethAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgSetOrchestratorAddress();
        var _object_validator;
        message.validator = (_object_validator = object.validator) !== null && _object_validator !== void 0 ? _object_validator : "";
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        var _object_ethAddress;
        message.ethAddress = (_object_ethAddress = object.ethAddress) !== null && _object_ethAddress !== void 0 ? _object_ethAddress : "";
        return message;
    }
};
function createBaseMsgSetOrchestratorAddressResponse() {
    return {};
}
const MsgSetOrchestratorAddressResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddressResponse();
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
        const message = createBaseMsgSetOrchestratorAddressResponse();
        return message;
    }
};
function createBaseMsgValsetConfirm() {
    return {
        nonce: BigInt(0),
        orchestrator: "",
        ethAddress: "",
        signature: ""
    };
}
const MsgValsetConfirm = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        if (message.signature !== "") {
            writer.uint32(34).string(message.signature);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirm();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
                    message.ethAddress = reader.string();
                    break;
                case 4:
                    message.signature = reader.string();
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
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : "",
            ethAddress: (0, _helpers.isSet)(object.ethAddress) ? String(object.ethAddress) : "",
            signature: (0, _helpers.isSet)(object.signature) ? String(object.signature) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgValsetConfirm();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        var _object_ethAddress;
        message.ethAddress = (_object_ethAddress = object.ethAddress) !== null && _object_ethAddress !== void 0 ? _object_ethAddress : "";
        var _object_signature;
        message.signature = (_object_signature = object.signature) !== null && _object_signature !== void 0 ? _object_signature : "";
        return message;
    }
};
function createBaseMsgValsetConfirmResponse() {
    return {};
}
const MsgValsetConfirmResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirmResponse();
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
        const message = createBaseMsgValsetConfirmResponse();
        return message;
    }
};
function createBaseMsgSendToEth() {
    return {
        sender: "",
        ethDest: "",
        amount: undefined,
        bridgeFee: undefined,
        chainFee: undefined
    };
}
const MsgSendToEth = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ethDest !== "") {
            writer.uint32(18).string(message.ethDest);
        }
        if (message.amount !== undefined) {
            _coin.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.bridgeFee !== undefined) {
            _coin.Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
        }
        if (message.chainFee !== undefined) {
            _coin.Coin.encode(message.chainFee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEth();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ethDest = reader.string();
                    break;
                case 3:
                    message.amount = _coin.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bridgeFee = _coin.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.chainFee = _coin.Coin.decode(reader, reader.uint32());
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
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
            ethDest: (0, _helpers.isSet)(object.ethDest) ? String(object.ethDest) : "",
            amount: (0, _helpers.isSet)(object.amount) ? _coin.Coin.fromJSON(object.amount) : undefined,
            bridgeFee: (0, _helpers.isSet)(object.bridgeFee) ? _coin.Coin.fromJSON(object.bridgeFee) : undefined,
            chainFee: (0, _helpers.isSet)(object.chainFee) ? _coin.Coin.fromJSON(object.chainFee) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.ethDest !== undefined && (obj.ethDest = message.ethDest);
        message.amount !== undefined && (obj.amount = message.amount ? _coin.Coin.toJSON(message.amount) : undefined);
        message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee ? _coin.Coin.toJSON(message.bridgeFee) : undefined);
        message.chainFee !== undefined && (obj.chainFee = message.chainFee ? _coin.Coin.toJSON(message.chainFee) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgSendToEth();
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        var _object_ethDest;
        message.ethDest = (_object_ethDest = object.ethDest) !== null && _object_ethDest !== void 0 ? _object_ethDest : "";
        message.amount = object.amount !== undefined && object.amount !== null ? _coin.Coin.fromPartial(object.amount) : undefined;
        message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? _coin.Coin.fromPartial(object.bridgeFee) : undefined;
        message.chainFee = object.chainFee !== undefined && object.chainFee !== null ? _coin.Coin.fromPartial(object.chainFee) : undefined;
        return message;
    }
};
function createBaseMsgSendToEthResponse() {
    return {};
}
const MsgSendToEthResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEthResponse();
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
        const message = createBaseMsgSendToEthResponse();
        return message;
    }
};
function createBaseMsgRequestBatch() {
    return {
        sender: "",
        denom: ""
    };
}
const MsgRequestBatch = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatch();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
            denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgRequestBatch();
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        return message;
    }
};
function createBaseMsgRequestBatchResponse() {
    return {};
}
const MsgRequestBatchResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatchResponse();
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
        const message = createBaseMsgRequestBatchResponse();
        return message;
    }
};
function createBaseMsgConfirmBatch() {
    return {
        nonce: BigInt(0),
        tokenContract: "",
        ethSigner: "",
        orchestrator: "",
        signature: ""
    };
}
const MsgConfirmBatch = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(18).string(message.tokenContract);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatch();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.tokenContract = reader.string();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
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
            tokenContract: (0, _helpers.isSet)(object.tokenContract) ? String(object.tokenContract) : "",
            ethSigner: (0, _helpers.isSet)(object.ethSigner) ? String(object.ethSigner) : "",
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : "",
            signature: (0, _helpers.isSet)(object.signature) ? String(object.signature) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgConfirmBatch();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        var _object_tokenContract;
        message.tokenContract = (_object_tokenContract = object.tokenContract) !== null && _object_tokenContract !== void 0 ? _object_tokenContract : "";
        var _object_ethSigner;
        message.ethSigner = (_object_ethSigner = object.ethSigner) !== null && _object_ethSigner !== void 0 ? _object_ethSigner : "";
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        var _object_signature;
        message.signature = (_object_signature = object.signature) !== null && _object_signature !== void 0 ? _object_signature : "";
        return message;
    }
};
function createBaseMsgConfirmBatchResponse() {
    return {};
}
const MsgConfirmBatchResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatchResponse();
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
        const message = createBaseMsgConfirmBatchResponse();
        return message;
    }
};
function createBaseMsgConfirmLogicCall() {
    return {
        invalidationId: "",
        invalidationNonce: BigInt(0),
        ethSigner: "",
        orchestrator: "",
        signature: ""
    };
}
const MsgConfirmLogicCall = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.invalidationId !== "") {
            writer.uint32(10).string(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmLogicCall();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.invalidationId = reader.string();
                    break;
                case 2:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
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
            invalidationId: (0, _helpers.isSet)(object.invalidationId) ? String(object.invalidationId) : "",
            invalidationNonce: (0, _helpers.isSet)(object.invalidationNonce) ? BigInt(object.invalidationNonce) : BigInt(0),
            ethSigner: (0, _helpers.isSet)(object.ethSigner) ? String(object.ethSigner) : "",
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : "",
            signature: (0, _helpers.isSet)(object.signature) ? String(object.signature) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.invalidationId !== undefined && (obj.invalidationId = message.invalidationId);
        message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgConfirmLogicCall();
        var _object_invalidationId;
        message.invalidationId = (_object_invalidationId = object.invalidationId) !== null && _object_invalidationId !== void 0 ? _object_invalidationId : "";
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce) : BigInt(0);
        var _object_ethSigner;
        message.ethSigner = (_object_ethSigner = object.ethSigner) !== null && _object_ethSigner !== void 0 ? _object_ethSigner : "";
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        var _object_signature;
        message.signature = (_object_signature = object.signature) !== null && _object_signature !== void 0 ? _object_signature : "";
        return message;
    }
};
function createBaseMsgConfirmLogicCallResponse() {
    return {};
}
const MsgConfirmLogicCallResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmLogicCallResponse();
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
        const message = createBaseMsgConfirmLogicCallResponse();
        return message;
    }
};
function createBaseMsgSendToCosmosClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        tokenContract: "",
        amount: "",
        ethereumSender: "",
        cosmosReceiver: "",
        orchestrator: ""
    };
}
const MsgSendToCosmosClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.tokenContract !== "") {
            writer.uint32(26).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(42).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(50).string(message.cosmosReceiver);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToCosmosClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.tokenContract = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.ethereumSender = reader.string();
                    break;
                case 6:
                    message.cosmosReceiver = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
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
            eventNonce: (0, _helpers.isSet)(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0),
            ethBlockHeight: (0, _helpers.isSet)(object.ethBlockHeight) ? BigInt(object.ethBlockHeight) : BigInt(0),
            tokenContract: (0, _helpers.isSet)(object.tokenContract) ? String(object.tokenContract) : "",
            amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : "",
            ethereumSender: (0, _helpers.isSet)(object.ethereumSender) ? String(object.ethereumSender) : "",
            cosmosReceiver: (0, _helpers.isSet)(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined && (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.amount !== undefined && (obj.amount = message.amount);
        message.ethereumSender !== undefined && (obj.ethereumSender = message.ethereumSender);
        message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgSendToCosmosClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce) : BigInt(0);
        message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight) : BigInt(0);
        var _object_tokenContract;
        message.tokenContract = (_object_tokenContract = object.tokenContract) !== null && _object_tokenContract !== void 0 ? _object_tokenContract : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_ethereumSender;
        message.ethereumSender = (_object_ethereumSender = object.ethereumSender) !== null && _object_ethereumSender !== void 0 ? _object_ethereumSender : "";
        var _object_cosmosReceiver;
        message.cosmosReceiver = (_object_cosmosReceiver = object.cosmosReceiver) !== null && _object_cosmosReceiver !== void 0 ? _object_cosmosReceiver : "";
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        return message;
    }
};
function createBaseMsgSendToCosmosClaimResponse() {
    return {};
}
const MsgSendToCosmosClaimResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToCosmosClaimResponse();
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
        const message = createBaseMsgSendToCosmosClaimResponse();
        return message;
    }
};
function createBaseMsgExecuteIbcAutoForwards() {
    return {
        forwardsToClear: BigInt(0),
        executor: ""
    };
}
const MsgExecuteIbcAutoForwards = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.forwardsToClear !== BigInt(0)) {
            writer.uint32(8).uint64(message.forwardsToClear);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteIbcAutoForwards();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.forwardsToClear = reader.uint64();
                    break;
                case 2:
                    message.executor = reader.string();
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
            forwardsToClear: (0, _helpers.isSet)(object.forwardsToClear) ? BigInt(object.forwardsToClear) : BigInt(0),
            executor: (0, _helpers.isSet)(object.executor) ? String(object.executor) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.forwardsToClear !== undefined && (obj.forwardsToClear = (message.forwardsToClear || BigInt(0)).toString());
        message.executor !== undefined && (obj.executor = message.executor);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgExecuteIbcAutoForwards();
        message.forwardsToClear = object.forwardsToClear !== undefined && object.forwardsToClear !== null ? BigInt(object.forwardsToClear) : BigInt(0);
        var _object_executor;
        message.executor = (_object_executor = object.executor) !== null && _object_executor !== void 0 ? _object_executor : "";
        return message;
    }
};
function createBaseMsgExecuteIbcAutoForwardsResponse() {
    return {};
}
const MsgExecuteIbcAutoForwardsResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteIbcAutoForwardsResponse();
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
        const message = createBaseMsgExecuteIbcAutoForwardsResponse();
        return message;
    }
};
function createBaseMsgBatchSendToEthClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        batchNonce: BigInt(0),
        tokenContract: "",
        orchestrator: ""
    };
}
const MsgBatchSendToEthClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchSendToEthClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.batchNonce = reader.uint64();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.orchestrator = reader.string();
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
            eventNonce: (0, _helpers.isSet)(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0),
            ethBlockHeight: (0, _helpers.isSet)(object.ethBlockHeight) ? BigInt(object.ethBlockHeight) : BigInt(0),
            batchNonce: (0, _helpers.isSet)(object.batchNonce) ? BigInt(object.batchNonce) : BigInt(0),
            tokenContract: (0, _helpers.isSet)(object.tokenContract) ? String(object.tokenContract) : "",
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined && (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || BigInt(0)).toString());
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgBatchSendToEthClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce) : BigInt(0);
        message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight) : BigInt(0);
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce) : BigInt(0);
        var _object_tokenContract;
        message.tokenContract = (_object_tokenContract = object.tokenContract) !== null && _object_tokenContract !== void 0 ? _object_tokenContract : "";
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        return message;
    }
};
function createBaseMsgBatchSendToEthClaimResponse() {
    return {};
}
const MsgBatchSendToEthClaimResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchSendToEthClaimResponse();
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
        const message = createBaseMsgBatchSendToEthClaimResponse();
        return message;
    }
};
function createBaseMsgERC20DeployedClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: BigInt(0),
        orchestrator: ""
    };
}
const MsgERC20DeployedClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(26).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(56).uint64(message.decimals);
        }
        if (message.orchestrator !== "") {
            writer.uint32(66).string(message.orchestrator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.cosmosDenom = reader.string();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.decimals = reader.uint64();
                    break;
                case 8:
                    message.orchestrator = reader.string();
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
            eventNonce: (0, _helpers.isSet)(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0),
            ethBlockHeight: (0, _helpers.isSet)(object.ethBlockHeight) ? BigInt(object.ethBlockHeight) : BigInt(0),
            cosmosDenom: (0, _helpers.isSet)(object.cosmosDenom) ? String(object.cosmosDenom) : "",
            tokenContract: (0, _helpers.isSet)(object.tokenContract) ? String(object.tokenContract) : "",
            name: (0, _helpers.isSet)(object.name) ? String(object.name) : "",
            symbol: (0, _helpers.isSet)(object.symbol) ? String(object.symbol) : "",
            decimals: (0, _helpers.isSet)(object.decimals) ? BigInt(object.decimals) : BigInt(0),
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined && (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.cosmosDenom !== undefined && (obj.cosmosDenom = message.cosmosDenom);
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.decimals !== undefined && (obj.decimals = (message.decimals || BigInt(0)).toString());
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgERC20DeployedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce) : BigInt(0);
        message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight) : BigInt(0);
        var _object_cosmosDenom;
        message.cosmosDenom = (_object_cosmosDenom = object.cosmosDenom) !== null && _object_cosmosDenom !== void 0 ? _object_cosmosDenom : "";
        var _object_tokenContract;
        message.tokenContract = (_object_tokenContract = object.tokenContract) !== null && _object_tokenContract !== void 0 ? _object_tokenContract : "";
        var _object_name;
        message.name = (_object_name = object.name) !== null && _object_name !== void 0 ? _object_name : "";
        var _object_symbol;
        message.symbol = (_object_symbol = object.symbol) !== null && _object_symbol !== void 0 ? _object_symbol : "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals) : BigInt(0);
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        return message;
    }
};
function createBaseMsgERC20DeployedClaimResponse() {
    return {};
}
const MsgERC20DeployedClaimResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaimResponse();
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
        const message = createBaseMsgERC20DeployedClaimResponse();
        return message;
    }
};
function createBaseMsgLogicCallExecutedClaim() {
    return {
        eventNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        invalidationId: new Uint8Array(),
        invalidationNonce: BigInt(0),
        orchestrator: ""
    };
}
const MsgLogicCallExecutedClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethBlockHeight);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(26).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.invalidationNonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLogicCallExecutedClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 3:
                    message.invalidationId = reader.bytes();
                    break;
                case 4:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 5:
                    message.orchestrator = reader.string();
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
            eventNonce: (0, _helpers.isSet)(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0),
            ethBlockHeight: (0, _helpers.isSet)(object.ethBlockHeight) ? BigInt(object.ethBlockHeight) : BigInt(0),
            invalidationId: (0, _helpers.isSet)(object.invalidationId) ? (0, _helpers.bytesFromBase64)(object.invalidationId) : new Uint8Array(),
            invalidationNonce: (0, _helpers.isSet)(object.invalidationNonce) ? BigInt(object.invalidationNonce) : BigInt(0),
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined && (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        message.invalidationId !== undefined && (obj.invalidationId = (0, _helpers.base64FromBytes)(message.invalidationId !== undefined ? message.invalidationId : new Uint8Array()));
        message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgLogicCallExecutedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce) : BigInt(0);
        message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight) : BigInt(0);
        var _object_invalidationId;
        message.invalidationId = (_object_invalidationId = object.invalidationId) !== null && _object_invalidationId !== void 0 ? _object_invalidationId : new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce) : BigInt(0);
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        return message;
    }
};
function createBaseMsgLogicCallExecutedClaimResponse() {
    return {};
}
const MsgLogicCallExecutedClaimResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLogicCallExecutedClaimResponse();
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
        const message = createBaseMsgLogicCallExecutedClaimResponse();
        return message;
    }
};
function createBaseMsgValsetUpdatedClaim() {
    return {
        eventNonce: BigInt(0),
        valsetNonce: BigInt(0),
        ethBlockHeight: BigInt(0),
        members: [],
        rewardAmount: "",
        rewardToken: "",
        orchestrator: ""
    };
}
const MsgValsetUpdatedClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (message.valsetNonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.valsetNonce);
        }
        if (message.ethBlockHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.ethBlockHeight);
        }
        for (const v of message.members){
            _types.BridgeValidator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(42).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(50).string(message.rewardToken);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.valsetNonce = reader.uint64();
                    break;
                case 3:
                    message.ethBlockHeight = reader.uint64();
                    break;
                case 4:
                    message.members.push(_types.BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.rewardAmount = reader.string();
                    break;
                case 6:
                    message.rewardToken = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
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
            eventNonce: (0, _helpers.isSet)(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0),
            valsetNonce: (0, _helpers.isSet)(object.valsetNonce) ? BigInt(object.valsetNonce) : BigInt(0),
            ethBlockHeight: (0, _helpers.isSet)(object.ethBlockHeight) ? BigInt(object.ethBlockHeight) : BigInt(0),
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e)=>_types.BridgeValidator.fromJSON(e)) : [],
            rewardAmount: (0, _helpers.isSet)(object.rewardAmount) ? String(object.rewardAmount) : "",
            rewardToken: (0, _helpers.isSet)(object.rewardToken) ? String(object.rewardToken) : "",
            orchestrator: (0, _helpers.isSet)(object.orchestrator) ? String(object.orchestrator) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        message.valsetNonce !== undefined && (obj.valsetNonce = (message.valsetNonce || BigInt(0)).toString());
        message.ethBlockHeight !== undefined && (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
        if (message.members) {
            obj.members = message.members.map((e)=>e ? _types.BridgeValidator.toJSON(e) : undefined);
        } else {
            obj.members = [];
        }
        message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
        message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
        return obj;
    },
    fromPartial (object) {
        var _object_members;
        const message = createBaseMsgValsetUpdatedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce) : BigInt(0);
        message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? BigInt(object.valsetNonce) : BigInt(0);
        message.ethBlockHeight = object.ethBlockHeight !== undefined && object.ethBlockHeight !== null ? BigInt(object.ethBlockHeight) : BigInt(0);
        message.members = ((_object_members = object.members) === null || _object_members === void 0 ? void 0 : _object_members.map((e)=>_types.BridgeValidator.fromPartial(e))) || [];
        var _object_rewardAmount;
        message.rewardAmount = (_object_rewardAmount = object.rewardAmount) !== null && _object_rewardAmount !== void 0 ? _object_rewardAmount : "";
        var _object_rewardToken;
        message.rewardToken = (_object_rewardToken = object.rewardToken) !== null && _object_rewardToken !== void 0 ? _object_rewardToken : "";
        var _object_orchestrator;
        message.orchestrator = (_object_orchestrator = object.orchestrator) !== null && _object_orchestrator !== void 0 ? _object_orchestrator : "";
        return message;
    }
};
function createBaseMsgValsetUpdatedClaimResponse() {
    return {};
}
const MsgValsetUpdatedClaimResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaimResponse();
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
        const message = createBaseMsgValsetUpdatedClaimResponse();
        return message;
    }
};
function createBaseMsgCancelSendToEth() {
    return {
        transactionId: BigInt(0),
        sender: ""
    };
}
const MsgCancelSendToEth = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.transactionId !== BigInt(0)) {
            writer.uint32(8).uint64(message.transactionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEth();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.transactionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
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
            transactionId: (0, _helpers.isSet)(object.transactionId) ? BigInt(object.transactionId) : BigInt(0),
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.transactionId !== undefined && (obj.transactionId = (message.transactionId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgCancelSendToEth();
        message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? BigInt(object.transactionId) : BigInt(0);
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        return message;
    }
};
function createBaseMsgCancelSendToEthResponse() {
    return {};
}
const MsgCancelSendToEthResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEthResponse();
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
        const message = createBaseMsgCancelSendToEthResponse();
        return message;
    }
};
function createBaseMsgSubmitBadSignatureEvidence() {
    return {
        subject: undefined,
        signature: "",
        sender: ""
    };
}
const MsgSubmitBadSignatureEvidence = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.subject !== undefined) {
            _any.Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidence();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.subject = _any.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signature = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
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
            subject: (0, _helpers.isSet)(object.subject) ? _any.Any.fromJSON(object.subject) : undefined,
            signature: (0, _helpers.isSet)(object.signature) ? String(object.signature) : "",
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.subject !== undefined && (obj.subject = message.subject ? _any.Any.toJSON(message.subject) : undefined);
        message.signature !== undefined && (obj.signature = message.signature);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgSubmitBadSignatureEvidence();
        message.subject = object.subject !== undefined && object.subject !== null ? _any.Any.fromPartial(object.subject) : undefined;
        var _object_signature;
        message.signature = (_object_signature = object.signature) !== null && _object_signature !== void 0 ? _object_signature : "";
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        return message;
    }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse() {
    return {};
}
const MsgSubmitBadSignatureEvidenceResponse = {
    encode (_, writer = _binary.BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
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
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
        return message;
    }
};
function createBaseEventSetOperatorAddress() {
    return {
        message: "",
        address: ""
    };
}
const EventSetOperatorAddress = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSetOperatorAddress();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.message = reader.string();
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
            message: (0, _helpers.isSet)(object.message) ? String(object.message) : "",
            address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventSetOperatorAddress();
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseEventValsetConfirmKey() {
    return {
        message: "",
        key: ""
    };
}
const EventValsetConfirmKey = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetConfirmKey();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
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
            message: (0, _helpers.isSet)(object.message) ? String(object.message) : "",
            key: (0, _helpers.isSet)(object.key) ? String(object.key) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventValsetConfirmKey();
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_key;
        message.key = (_object_key = object.key) !== null && _object_key !== void 0 ? _object_key : "";
        return message;
    }
};
function createBaseEventBatchCreated() {
    return {
        message: "",
        batchNonce: ""
    };
}
const EventBatchCreated = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.batchNonce !== "") {
            writer.uint32(18).string(message.batchNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchCreated();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.batchNonce = reader.string();
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
            message: (0, _helpers.isSet)(object.message) ? String(object.message) : "",
            batchNonce: (0, _helpers.isSet)(object.batchNonce) ? String(object.batchNonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventBatchCreated();
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_batchNonce;
        message.batchNonce = (_object_batchNonce = object.batchNonce) !== null && _object_batchNonce !== void 0 ? _object_batchNonce : "";
        return message;
    }
};
function createBaseEventBatchConfirmKey() {
    return {
        message: "",
        batchConfirmKey: ""
    };
}
const EventBatchConfirmKey = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.batchConfirmKey !== "") {
            writer.uint32(18).string(message.batchConfirmKey);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchConfirmKey();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.batchConfirmKey = reader.string();
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
            message: (0, _helpers.isSet)(object.message) ? String(object.message) : "",
            batchConfirmKey: (0, _helpers.isSet)(object.batchConfirmKey) ? String(object.batchConfirmKey) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.batchConfirmKey !== undefined && (obj.batchConfirmKey = message.batchConfirmKey);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventBatchConfirmKey();
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_batchConfirmKey;
        message.batchConfirmKey = (_object_batchConfirmKey = object.batchConfirmKey) !== null && _object_batchConfirmKey !== void 0 ? _object_batchConfirmKey : "";
        return message;
    }
};
function createBaseEventBatchSendToEthClaim() {
    return {
        nonce: ""
    };
}
const EventBatchSendToEthClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBatchSendToEthClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.string();
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
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventBatchSendToEthClaim();
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};
function createBaseEventClaim() {
    return {
        message: "",
        claimHash: "",
        attestationId: ""
    };
}
const EventClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.claimHash !== "") {
            writer.uint32(18).string(message.claimHash);
        }
        if (message.attestationId !== "") {
            writer.uint32(26).string(message.attestationId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.claimHash = reader.string();
                    break;
                case 3:
                    message.attestationId = reader.string();
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
            message: (0, _helpers.isSet)(object.message) ? String(object.message) : "",
            claimHash: (0, _helpers.isSet)(object.claimHash) ? String(object.claimHash) : "",
            attestationId: (0, _helpers.isSet)(object.attestationId) ? String(object.attestationId) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.claimHash !== undefined && (obj.claimHash = message.claimHash);
        message.attestationId !== undefined && (obj.attestationId = message.attestationId);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventClaim();
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_claimHash;
        message.claimHash = (_object_claimHash = object.claimHash) !== null && _object_claimHash !== void 0 ? _object_claimHash : "";
        var _object_attestationId;
        message.attestationId = (_object_attestationId = object.attestationId) !== null && _object_attestationId !== void 0 ? _object_attestationId : "";
        return message;
    }
};
function createBaseEventBadSignatureEvidence() {
    return {
        message: "",
        badEthSignature: "",
        badEthSignatureSubject: ""
    };
}
const EventBadSignatureEvidence = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.badEthSignature !== "") {
            writer.uint32(18).string(message.badEthSignature);
        }
        if (message.badEthSignatureSubject !== "") {
            writer.uint32(26).string(message.badEthSignatureSubject);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBadSignatureEvidence();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.badEthSignature = reader.string();
                    break;
                case 3:
                    message.badEthSignatureSubject = reader.string();
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
            message: (0, _helpers.isSet)(object.message) ? String(object.message) : "",
            badEthSignature: (0, _helpers.isSet)(object.badEthSignature) ? String(object.badEthSignature) : "",
            badEthSignatureSubject: (0, _helpers.isSet)(object.badEthSignatureSubject) ? String(object.badEthSignatureSubject) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.badEthSignature !== undefined && (obj.badEthSignature = message.badEthSignature);
        message.badEthSignatureSubject !== undefined && (obj.badEthSignatureSubject = message.badEthSignatureSubject);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventBadSignatureEvidence();
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_badEthSignature;
        message.badEthSignature = (_object_badEthSignature = object.badEthSignature) !== null && _object_badEthSignature !== void 0 ? _object_badEthSignature : "";
        var _object_badEthSignatureSubject;
        message.badEthSignatureSubject = (_object_badEthSignatureSubject = object.badEthSignatureSubject) !== null && _object_badEthSignatureSubject !== void 0 ? _object_badEthSignatureSubject : "";
        return message;
    }
};
function createBaseEventERC20DeployedClaim() {
    return {
        token: "",
        nonce: ""
    };
}
const EventERC20DeployedClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventERC20DeployedClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
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
            token: (0, _helpers.isSet)(object.token) ? String(object.token) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventERC20DeployedClaim();
        var _object_token;
        message.token = (_object_token = object.token) !== null && _object_token !== void 0 ? _object_token : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};
function createBaseEventValsetUpdatedClaim() {
    return {
        nonce: ""
    };
}
const EventValsetUpdatedClaim = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventValsetUpdatedClaim();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.string();
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
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventValsetUpdatedClaim();
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};
function createBaseEventMultisigUpdateRequest() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        multisigId: "",
        nonce: ""
    };
}
const EventMultisigUpdateRequest = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.multisigId !== "") {
            writer.uint32(26).string(message.multisigId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMultisigUpdateRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.bridgeContract = reader.string();
                    break;
                case 2:
                    message.bridgeChainId = reader.string();
                    break;
                case 3:
                    message.multisigId = reader.string();
                    break;
                case 4:
                    message.nonce = reader.string();
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
            bridgeContract: (0, _helpers.isSet)(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: (0, _helpers.isSet)(object.bridgeChainId) ? String(object.bridgeChainId) : "",
            multisigId: (0, _helpers.isSet)(object.multisigId) ? String(object.multisigId) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.multisigId !== undefined && (obj.multisigId = message.multisigId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventMultisigUpdateRequest();
        var _object_bridgeContract;
        message.bridgeContract = (_object_bridgeContract = object.bridgeContract) !== null && _object_bridgeContract !== void 0 ? _object_bridgeContract : "";
        var _object_bridgeChainId;
        message.bridgeChainId = (_object_bridgeChainId = object.bridgeChainId) !== null && _object_bridgeChainId !== void 0 ? _object_bridgeChainId : "";
        var _object_multisigId;
        message.multisigId = (_object_multisigId = object.multisigId) !== null && _object_multisigId !== void 0 ? _object_multisigId : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};
function createBaseEventOutgoingLogicCallCanceled() {
    return {
        logicCallInvalidationId: "",
        logicCallInvalidationNonce: ""
    };
}
const EventOutgoingLogicCallCanceled = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.logicCallInvalidationId !== "") {
            writer.uint32(10).string(message.logicCallInvalidationId);
        }
        if (message.logicCallInvalidationNonce !== "") {
            writer.uint32(18).string(message.logicCallInvalidationNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingLogicCallCanceled();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.logicCallInvalidationId = reader.string();
                    break;
                case 2:
                    message.logicCallInvalidationNonce = reader.string();
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
            logicCallInvalidationId: (0, _helpers.isSet)(object.logicCallInvalidationId) ? String(object.logicCallInvalidationId) : "",
            logicCallInvalidationNonce: (0, _helpers.isSet)(object.logicCallInvalidationNonce) ? String(object.logicCallInvalidationNonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.logicCallInvalidationId !== undefined && (obj.logicCallInvalidationId = message.logicCallInvalidationId);
        message.logicCallInvalidationNonce !== undefined && (obj.logicCallInvalidationNonce = message.logicCallInvalidationNonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventOutgoingLogicCallCanceled();
        var _object_logicCallInvalidationId;
        message.logicCallInvalidationId = (_object_logicCallInvalidationId = object.logicCallInvalidationId) !== null && _object_logicCallInvalidationId !== void 0 ? _object_logicCallInvalidationId : "";
        var _object_logicCallInvalidationNonce;
        message.logicCallInvalidationNonce = (_object_logicCallInvalidationNonce = object.logicCallInvalidationNonce) !== null && _object_logicCallInvalidationNonce !== void 0 ? _object_logicCallInvalidationNonce : "";
        return message;
    }
};
function createBaseEventSignatureSlashing() {
    return {
        type: "",
        address: ""
    };
}
const EventSignatureSlashing = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSignatureSlashing();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.type = reader.string();
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
            type: (0, _helpers.isSet)(object.type) ? String(object.type) : "",
            address: (0, _helpers.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventSignatureSlashing();
        var _object_type;
        message.type = (_object_type = object.type) !== null && _object_type !== void 0 ? _object_type : "";
        var _object_address;
        message.address = (_object_address = object.address) !== null && _object_address !== void 0 ? _object_address : "";
        return message;
    }
};
function createBaseEventOutgoingTxId() {
    return {
        message: "",
        txId: ""
    };
}
const EventOutgoingTxId = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.txId !== "") {
            writer.uint32(18).string(message.txId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingTxId();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.message = reader.string();
                    break;
                case 2:
                    message.txId = reader.string();
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
            message: (0, _helpers.isSet)(object.message) ? String(object.message) : "",
            txId: (0, _helpers.isSet)(object.txId) ? String(object.txId) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.txId !== undefined && (obj.txId = message.txId);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventOutgoingTxId();
        var _object_message;
        message.message = (_object_message = object.message) !== null && _object_message !== void 0 ? _object_message : "";
        var _object_txId;
        message.txId = (_object_txId = object.txId) !== null && _object_txId !== void 0 ? _object_txId : "";
        return message;
    }
};
function createBaseEventSendToEthFeeCollected() {
    return {
        sender: "",
        sendAmount: "",
        feeAmount: ""
    };
}
const EventSendToEthFeeCollected = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.sendAmount !== "") {
            writer.uint32(18).string(message.sendAmount);
        }
        if (message.feeAmount !== "") {
            writer.uint32(26).string(message.feeAmount);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToEthFeeCollected();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.sendAmount = reader.string();
                    break;
                case 3:
                    message.feeAmount = reader.string();
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
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
            sendAmount: (0, _helpers.isSet)(object.sendAmount) ? String(object.sendAmount) : "",
            feeAmount: (0, _helpers.isSet)(object.feeAmount) ? String(object.feeAmount) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.sendAmount !== undefined && (obj.sendAmount = message.sendAmount);
        message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventSendToEthFeeCollected();
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        var _object_sendAmount;
        message.sendAmount = (_object_sendAmount = object.sendAmount) !== null && _object_sendAmount !== void 0 ? _object_sendAmount : "";
        var _object_feeAmount;
        message.feeAmount = (_object_feeAmount = object.feeAmount) !== null && _object_feeAmount !== void 0 ? _object_feeAmount : "";
        return message;
    }
};
class MsgClientImpl {
    ValsetConfirm(request) {
        const data = MsgValsetConfirm.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetConfirm", data);
        return promise.then((data)=>MsgValsetConfirmResponse.decode(new _binary.BinaryReader(data)));
    }
    SendToEth(request) {
        const data = MsgSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToEth", data);
        return promise.then((data)=>MsgSendToEthResponse.decode(new _binary.BinaryReader(data)));
    }
    RequestBatch(request) {
        const data = MsgRequestBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "RequestBatch", data);
        return promise.then((data)=>MsgRequestBatchResponse.decode(new _binary.BinaryReader(data)));
    }
    ConfirmBatch(request) {
        const data = MsgConfirmBatch.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmBatch", data);
        return promise.then((data)=>MsgConfirmBatchResponse.decode(new _binary.BinaryReader(data)));
    }
    ConfirmLogicCall(request) {
        const data = MsgConfirmLogicCall.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ConfirmLogicCall", data);
        return promise.then((data)=>MsgConfirmLogicCallResponse.decode(new _binary.BinaryReader(data)));
    }
    SendToCosmosClaim(request) {
        const data = MsgSendToCosmosClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SendToCosmosClaim", data);
        return promise.then((data)=>MsgSendToCosmosClaimResponse.decode(new _binary.BinaryReader(data)));
    }
    ExecuteIbcAutoForwards(request) {
        const data = MsgExecuteIbcAutoForwards.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ExecuteIbcAutoForwards", data);
        return promise.then((data)=>MsgExecuteIbcAutoForwardsResponse.decode(new _binary.BinaryReader(data)));
    }
    BatchSendToEthClaim(request) {
        const data = MsgBatchSendToEthClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "BatchSendToEthClaim", data);
        return promise.then((data)=>MsgBatchSendToEthClaimResponse.decode(new _binary.BinaryReader(data)));
    }
    ValsetUpdateClaim(request) {
        const data = MsgValsetUpdatedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ValsetUpdateClaim", data);
        return promise.then((data)=>MsgValsetUpdatedClaimResponse.decode(new _binary.BinaryReader(data)));
    }
    ERC20DeployedClaim(request) {
        const data = MsgERC20DeployedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "ERC20DeployedClaim", data);
        return promise.then((data)=>MsgERC20DeployedClaimResponse.decode(new _binary.BinaryReader(data)));
    }
    LogicCallExecutedClaim(request) {
        const data = MsgLogicCallExecutedClaim.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "LogicCallExecutedClaim", data);
        return promise.then((data)=>MsgLogicCallExecutedClaimResponse.decode(new _binary.BinaryReader(data)));
    }
    SetOrchestratorAddress(request) {
        const data = MsgSetOrchestratorAddress.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SetOrchestratorAddress", data);
        return promise.then((data)=>MsgSetOrchestratorAddressResponse.decode(new _binary.BinaryReader(data)));
    }
    CancelSendToEth(request) {
        const data = MsgCancelSendToEth.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "CancelSendToEth", data);
        return promise.then((data)=>MsgCancelSendToEthResponse.decode(new _binary.BinaryReader(data)));
    }
    SubmitBadSignatureEvidence(request) {
        const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
        const promise = this.rpc.request("gravity.v1.Msg", "SubmitBadSignatureEvidence", data);
        return promise.then((data)=>MsgSubmitBadSignatureEvidenceResponse.decode(new _binary.BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
        this.ValsetConfirm = this.ValsetConfirm.bind(this);
        this.SendToEth = this.SendToEth.bind(this);
        this.RequestBatch = this.RequestBatch.bind(this);
        this.ConfirmBatch = this.ConfirmBatch.bind(this);
        this.ConfirmLogicCall = this.ConfirmLogicCall.bind(this);
        this.SendToCosmosClaim = this.SendToCosmosClaim.bind(this);
        this.ExecuteIbcAutoForwards = this.ExecuteIbcAutoForwards.bind(this);
        this.BatchSendToEthClaim = this.BatchSendToEthClaim.bind(this);
        this.ValsetUpdateClaim = this.ValsetUpdateClaim.bind(this);
        this.ERC20DeployedClaim = this.ERC20DeployedClaim.bind(this);
        this.LogicCallExecutedClaim = this.LogicCallExecutedClaim.bind(this);
        this.SetOrchestratorAddress = this.SetOrchestratorAddress.bind(this);
        this.CancelSendToEth = this.CancelSendToEth.bind(this);
        this.SubmitBadSignatureEvidence = this.SubmitBadSignatureEvidence.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL21zZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IENvaW4gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3YxYmV0YTEvY29pblwiO1xuaW1wb3J0IHsgQW55IH0gZnJvbSBcImNvc21qcy10eXBlcy9nb29nbGUvcHJvdG9idWYvYW55XCI7XG5pbXBvcnQgeyBScGMsIGJhc2U2NEZyb21CeXRlcywgYnl0ZXNGcm9tQmFzZTY0LCBpc1NldCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7IEJyaWRnZVZhbGlkYXRvciB9IGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJncmF2aXR5LnYxXCI7XG4vKipcbiAqIE1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NcbiAqIHRoaXMgbWVzc2FnZSBhbGxvd3MgdmFsaWRhdG9ycyB0byBkZWxlZ2F0ZSB0aGVpciB2b3RpbmcgcmVzcG9uc2liaWxpdGllc1xuICogdG8gYSBnaXZlbiBrZXkuIFRoaXMga2V5IGlzIHRoZW4gdXNlZCBhcyBhbiBvcHRpb25hbCBhdXRoZW50aWNhdGlvbiBtZXRob2RcbiAqIGZvciBzaWdpbmluZyBvcmFjbGUgY2xhaW1zXG4gKiBWQUxJREFUT1JcbiAqIFRoZSB2YWxpZGF0b3IgZmllbGQgaXMgYSBjb3Ntb3N2YWxvcGVyMS4uLiBzdHJpbmcgKGkuZS4gc2RrLlZhbEFkZHJlc3MpXG4gKiB0aGF0IHJlZmVyZW5jZXMgYSB2YWxpZGF0b3IgaW4gdGhlIGFjdGl2ZSBzZXRcbiAqIE9SQ0hFU1RSQVRPUlxuICogVGhlIG9yY2hlc3RyYXRvciBmaWVsZCBpcyBhIGNvc21vczEuLi4gc3RyaW5nICAoaS5lLiBzZGsuQWNjQWRkcmVzcykgdGhhdFxuICogcmVmZXJlbmNlcyB0aGUga2V5IHRoYXQgaXMgYmVpbmcgZGVsZWdhdGVkIHRvXG4gKiBFVEhfQUREUkVTU1xuICogVGhpcyBpcyBhIGhleCBlbmNvZGVkIDB4IEV0aGVyZXVtIHB1YmxpYyBrZXkgdGhhdCB3aWxsIGJlIHVzZWQgYnkgdGhpcyB2YWxpZGF0b3JcbiAqIG9uIEV0aGVyZXVtXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzIHtcbiAgdmFsaWRhdG9yOiBzdHJpbmc7XG4gIG9yY2hlc3RyYXRvcjogc3RyaW5nO1xuICBldGhBZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSB7fVxuLyoqXG4gKiBNc2dWYWxzZXRDb25maXJtXG4gKiB0aGlzIGlzIHRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIHZhbGlkYXRvcnMgd2hlbiB0aGV5IHdpc2ggdG8gc3VibWl0IHRoZWlyXG4gKiBzaWduYXR1cmVzIG92ZXIgdGhlIHZhbGlkYXRvciBzZXQgYXQgYSBnaXZlbiBibG9jayBoZWlnaHQuIEEgdmFsaWRhdG9yIG11c3RcbiAqIGZpcnN0IGNhbGwgTXNnU2V0RXRoQWRkcmVzcyB0byBzZXQgdGhlaXIgRXRoZXJldW0gYWRkcmVzcyB0byBiZSB1c2VkIGZvclxuICogc2lnbmluZy4gVGhlbiBzb21lb25lIChhbnlvbmUpIG11c3QgbWFrZSBhIFZhbHNldFJlcXVlc3QsIHRoZSByZXF1ZXN0IGlzXG4gKiBlc3NlbnRpYWxseSBhIG1lc3NhZ2luZyBtZWNoYW5pc20gdG8gZGV0ZXJtaW5lIHdoaWNoIGJsb2NrIGFsbCB2YWxpZGF0b3JzXG4gKiBzaG91bGQgc3VibWl0IHNpZ25hdHVyZXMgb3Zlci4gRmluYWxseSB2YWxpZGF0b3JzIHNpZ24gdGhlIHZhbGlkYXRvciBzZXQsXG4gKiBwb3dlcnMsIGFuZCBFdGhlcmV1bSBhZGRyZXNzZXMgb2YgdGhlIGVudGlyZSB2YWxpZGF0b3Igc2V0IGF0IHRoZSBoZWlnaHQgb2YgYVxuICogVmFsc2V0UmVxdWVzdCBhbmQgc3VibWl0IHRoYXQgc2lnbmF0dXJlIHdpdGggdGhpcyBtZXNzYWdlLlxuICpcbiAqIElmIGEgc3VmZmljaWVudCBudW1iZXIgb2YgdmFsaWRhdG9ycyAoNjYlIG9mIHZvdGluZyBwb3dlcikgKEEpIGhhdmUgc2V0XG4gKiBFdGhlcmV1bSBhZGRyZXNzZXMgYW5kIChCKSBzdWJtaXQgVmFsc2V0Q29uZmlybSBtZXNzYWdlcyB3aXRoIHRoZWlyXG4gKiBzaWduYXR1cmVzIGl0IGlzIHRoZW4gcG9zc2libGUgZm9yIGFueW9uZSB0byB2aWV3IHRoZXNlIHNpZ25hdHVyZXMgaW4gdGhlXG4gKiBjaGFpbiBzdG9yZSBhbmQgc3VibWl0IHRoZW0gdG8gRXRoZXJldW0gdG8gdXBkYXRlIHRoZSB2YWxpZGF0b3Igc2V0XG4gKiAtLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dWYWxzZXRDb25maXJtIHtcbiAgbm9uY2U6IGJpZ2ludDtcbiAgb3JjaGVzdHJhdG9yOiBzdHJpbmc7XG4gIGV0aEFkZHJlc3M6IHN0cmluZztcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1zZ1ZhbHNldENvbmZpcm1SZXNwb25zZSB7fVxuLyoqXG4gKiBNc2dTZW5kVG9FdGhcbiAqIFRoaXMgaXMgdGhlIG1lc3NhZ2UgdGhhdCBhIHVzZXIgY2FsbHMgd2hlbiB0aGV5IHdhbnQgdG8gYnJpZGdlIGFuIGFzc2V0XG4gKiBpdCB3aWxsIGxhdGVyIGJlIHJlbW92ZWQgd2hlbiBpdCBpcyBpbmNsdWRlZCBpbiBhIGJhdGNoIGFuZCBzdWNjZXNzZnVsbHlcbiAqIHN1Ym1pdHRlZCB0b2tlbnMgYXJlIHJlbW92ZWQgZnJvbSB0aGUgdXNlcnMgYmFsYW5jZSBpbW1lZGlhdGVseVxuICogLS0tLS0tLS0tLS0tLVxuICogQU1PVU5UOlxuICogdGhlIGNvaW4gdG8gc2VuZCBhY3Jvc3MgdGhlIGJyaWRnZSwgbm90ZSB0aGUgcmVzdHJpY3Rpb24gdGhhdCB0aGlzIGlzIGFcbiAqIHNpbmdsZSBjb2luIG5vdCBhIHNldCBvZiBjb2lucyB0aGF0IGlzIG5vcm1hbCBpbiBvdGhlciBDb3Ntb3MgbWVzc2FnZXNcbiAqIEJSSURHRV9GRUU6XG4gKiB0aGUgZmVlIHBhaWQgZm9yIHRoZSBicmlkZ2UsIGRpc3RpbmN0IGZyb20gdGhlIGZlZSBwYWlkIHRvIHRoZSBjaGFpbiB0b1xuICogYWN0dWFsbHkgc2VuZCB0aGlzIG1lc3NhZ2UgaW4gdGhlIGZpcnN0IHBsYWNlLiBTbyBhIHN1Y2Nlc3NmdWwgc2VuZCBoYXNcbiAqIHR3byBsYXllcnMgb2YgZmVlcyBmb3IgdGhlIHVzZXJcbiAqIENIQUlOX0ZFRTpcbiAqIHRoZSBmZWUgcGFpZCB0byB0aGUgY2hhaW4gZm9yIGhhbmRsaW5nIHRoZSByZXF1ZXN0LCB3aGljaCBtdXN0IGJlIGFcbiAqIGNlcnRhaW4gcGVyY2VudGFnZSBvZiB0aGUgQU1PVU5ULCBhcyBkZXRlcm1pbmVkIGJ5IGdvdmVybmFuY2UuXG4gKiBUaGlzIE1zZyB3aWxsIGJlIHJlamVjdGVkIGlmIENIQUlOX0ZFRSBpcyBpbnN1ZmZpY2llbnQuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dTZW5kVG9FdGgge1xuICBzZW5kZXI6IHN0cmluZztcbiAgZXRoRGVzdDogc3RyaW5nO1xuICBhbW91bnQ/OiBDb2luO1xuICBicmlkZ2VGZWU/OiBDb2luO1xuICBjaGFpbkZlZT86IENvaW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE1zZ1NlbmRUb0V0aFJlc3BvbnNlIHt9XG4vKipcbiAqIE1zZ1JlcXVlc3RCYXRjaFxuICogdGhpcyBpcyBhIG1lc3NhZ2UgYW55b25lIGNhbiBzZW5kIHRoYXQgcmVxdWVzdHMgYSBiYXRjaCBvZiB0cmFuc2FjdGlvbnMgdG9cbiAqIHNlbmQgYWNyb3NzIHRoZSBicmlkZ2UgYmUgY3JlYXRlZCBmb3Igd2hhdGV2ZXIgYmxvY2sgaGVpZ2h0IHRoaXMgbWVzc2FnZSBpc1xuICogaW5jbHVkZWQgaW4uIFRoaXMgYWN0cyBhcyBhIGNvb3JkaW5hdGlvbiBwb2ludCwgdGhlIGhhbmRsZXIgZm9yIHRoaXMgbWVzc2FnZVxuICogbG9va3MgYXQgdGhlIEFkZFRvT3V0Z29pbmdQb29sIHR4J3MgaW4gdGhlIHN0b3JlIGFuZCBnZW5lcmF0ZXMgYSBiYXRjaCwgYWxzb1xuICogYXZhaWxhYmxlIGluIHRoZSBzdG9yZSB0aWVkIHRvIHRoaXMgbWVzc2FnZS4gVGhlIHZhbGlkYXRvcnMgdGhlbiBncmFiIHRoaXNcbiAqIGJhdGNoLCBzaWduIGl0LCBzdWJtaXQgdGhlIHNpZ25hdHVyZXMgd2l0aCBhIE1zZ0NvbmZpcm1CYXRjaCBiZWZvcmUgYSByZWxheWVyXG4gKiBjYW4gZmluYWxseSBzdWJtaXQgdGhlIGJhdGNoXG4gKiAtLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dSZXF1ZXN0QmF0Y2gge1xuICBzZW5kZXI6IHN0cmluZztcbiAgZGVub206IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnUmVxdWVzdEJhdGNoUmVzcG9uc2Uge31cbi8qKlxuICogTXNnQ29uZmlybUJhdGNoXG4gKiBXaGVuIHZhbGlkYXRvcnMgb2JzZXJ2ZSBhIE1zZ1JlcXVlc3RCYXRjaCB0aGV5IGZvcm0gYSBiYXRjaCBieSBvcmRlcmluZ1xuICogdHJhbnNhY3Rpb25zIGN1cnJlbnRseSBpbiB0aGUgdHhxdWV1ZSBpbiBvcmRlciBvZiBoaWdoZXN0IHRvIGxvd2VzdCBmZWUsXG4gKiBjdXR0aW5nIG9mZiB3aGVuIHRoZSBiYXRjaCBlaXRoZXIgcmVhY2hlcyBhIGhhcmRjb2RlZCBtYXhpbXVtIHNpemUgKHRvIGJlXG4gKiBkZWNpZGVkLCBwcm9iYWJseSBhcm91bmQgMTAwKSBvciB3aGVuIHRyYW5zYWN0aW9ucyBzdG9wIGJlaW5nIHByb2ZpdGFibGVcbiAqIChUT0RPIGRldGVybWluZSB0aGlzIHdpdGhvdXQgbm9uZGV0ZXJtaW5pc20pIFRoaXMgbWVzc2FnZSBpbmNsdWRlcyB0aGUgYmF0Y2hcbiAqIGFzIHdlbGwgYXMgYW4gRXRoZXJldW0gc2lnbmF0dXJlIG92ZXIgdGhpcyBiYXRjaCBieSB0aGUgdmFsaWRhdG9yXG4gKiAtLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dDb25maXJtQmF0Y2gge1xuICBub25jZTogYmlnaW50O1xuICB0b2tlbkNvbnRyYWN0OiBzdHJpbmc7XG4gIGV0aFNpZ25lcjogc3RyaW5nO1xuICBvcmNoZXN0cmF0b3I6IHN0cmluZztcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NvbmZpcm1CYXRjaFJlc3BvbnNlIHt9XG4vKipcbiAqIE1zZ0NvbmZpcm1Mb2dpY0NhbGxcbiAqIFdoZW4gdmFsaWRhdG9ycyBvYnNlcnZlIGEgTXNnUmVxdWVzdEJhdGNoIHRoZXkgZm9ybSBhIGJhdGNoIGJ5IG9yZGVyaW5nXG4gKiB0cmFuc2FjdGlvbnMgY3VycmVudGx5IGluIHRoZSB0eHF1ZXVlIGluIG9yZGVyIG9mIGhpZ2hlc3QgdG8gbG93ZXN0IGZlZSxcbiAqIGN1dHRpbmcgb2ZmIHdoZW4gdGhlIGJhdGNoIGVpdGhlciByZWFjaGVzIGEgaGFyZGNvZGVkIG1heGltdW0gc2l6ZSAodG8gYmVcbiAqIGRlY2lkZWQsIHByb2JhYmx5IGFyb3VuZCAxMDApIG9yIHdoZW4gdHJhbnNhY3Rpb25zIHN0b3AgYmVpbmcgcHJvZml0YWJsZVxuICogKFRPRE8gZGV0ZXJtaW5lIHRoaXMgd2l0aG91dCBub25kZXRlcm1pbmlzbSkgVGhpcyBtZXNzYWdlIGluY2x1ZGVzIHRoZSBiYXRjaFxuICogYXMgd2VsbCBhcyBhbiBFdGhlcmV1bSBzaWduYXR1cmUgb3ZlciB0aGlzIGJhdGNoIGJ5IHRoZSB2YWxpZGF0b3JcbiAqIC0tLS0tLS0tLS0tLS1cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0NvbmZpcm1Mb2dpY0NhbGwge1xuICBpbnZhbGlkYXRpb25JZDogc3RyaW5nO1xuICBpbnZhbGlkYXRpb25Ob25jZTogYmlnaW50O1xuICBldGhTaWduZXI6IHN0cmluZztcbiAgb3JjaGVzdHJhdG9yOiBzdHJpbmc7XG4gIHNpZ25hdHVyZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNc2dDb25maXJtTG9naWNDYWxsUmVzcG9uc2Uge31cbi8qKlxuICogTXNnU2VuZFRvQ29zbW9zQ2xhaW1cbiAqIFdoZW4gbW9yZSB0aGFuIDY2JSBvZiB0aGUgYWN0aXZlIHZhbGlkYXRvciBzZXQgaGFzXG4gKiBjbGFpbWVkIHRvIGhhdmUgc2VlbiB0aGUgZGVwb3NpdCBlbnRlciB0aGUgZXRoZXJldW0gYmxvY2tjaGFpbiBjb2lucyBhcmVcbiAqIGlzc3VlZCB0byB0aGUgQ29zbW9zIGFkZHJlc3MgaW4gcXVlc3Rpb25cbiAqIC0tLS0tLS0tLS0tLS1cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ1NlbmRUb0Nvc21vc0NsYWltIHtcbiAgZXZlbnROb25jZTogYmlnaW50O1xuICBldGhCbG9ja0hlaWdodDogYmlnaW50O1xuICB0b2tlbkNvbnRyYWN0OiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xuICBldGhlcmV1bVNlbmRlcjogc3RyaW5nO1xuICBjb3Ntb3NSZWNlaXZlcjogc3RyaW5nO1xuICBvcmNoZXN0cmF0b3I6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZSB7fVxuLyoqXG4gKiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzXG4gKiBQcm9tcHRzIHRoZSBmb3J3YXJkaW5nIG9mIFBlbmRpbmcgSUJDIEF1dG8tRm9yd2FyZHMgaW4gdGhlIHF1ZXVlXG4gKiBUaGUgUGVuZGluZyBmb3J3YXJkcyB3aWxsIGJlIGV4ZWN1dGVkIGluIG9yZGVyIG9mIHRoZWlyIG9yaWdpbmFsIFNlbmRUb0Nvc21vcy5FdmVudE5vbmNlXG4gKiBUaGUgZnVuZHMgaW4gdGhlIHF1ZXVlIHdpbGwgYmUgc2VudCB0byBhIGxvY2FsIGdyYXZpdHktcHJlZml4ZWQgYWRkcmVzcyBpZiBJQkMgdHJhbnNmZXIgaXMgbm90IHBvc3NpYmxlXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzIHtcbiAgLyoqIEhvdyBtYW55IHF1ZXVlZCBmb3J3YXJkcyB0byBjbGVhciwgYmUgY2FyZWZ1bCBhYm91dCBnYXMgbGltaXRzICovXG4gIGZvcndhcmRzVG9DbGVhcjogYmlnaW50O1xuICAvKiogVGhpcyBtZXNzYWdlJ3Mgc2VuZGVyICovXG5cbiAgZXhlY3V0b3I6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHt9XG4vKipcbiAqIEJhdGNoU2VuZFRvRXRoQ2xhaW0gY2xhaW1zIHRoYXQgYSBiYXRjaCBvZiBzZW5kIHRvIGV0aFxuICogb3BlcmF0aW9ucyBvbiB0aGUgYnJpZGdlIGNvbnRyYWN0IHdhcyBleGVjdXRlZC5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0JhdGNoU2VuZFRvRXRoQ2xhaW0ge1xuICBldmVudE5vbmNlOiBiaWdpbnQ7XG4gIGV0aEJsb2NrSGVpZ2h0OiBiaWdpbnQ7XG4gIGJhdGNoTm9uY2U6IGJpZ2ludDtcbiAgdG9rZW5Db250cmFjdDogc3RyaW5nO1xuICBvcmNoZXN0cmF0b3I6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlIHt9XG4vKipcbiAqIEVSQzIwRGVwbG95ZWRDbGFpbSBhbGxvd3MgdGhlIENvc21vcyBtb2R1bGVcbiAqIHRvIGxlYXJuIGFib3V0IGFuIEVSQzIwIHRoYXQgc29tZW9uZSBkZXBsb3llZFxuICogdG8gcmVwcmVzZW50IGEgQ29zbW9zIGFzc2V0XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dFUkMyMERlcGxveWVkQ2xhaW0ge1xuICBldmVudE5vbmNlOiBiaWdpbnQ7XG4gIGV0aEJsb2NrSGVpZ2h0OiBiaWdpbnQ7XG4gIGNvc21vc0Rlbm9tOiBzdHJpbmc7XG4gIHRva2VuQ29udHJhY3Q6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzeW1ib2w6IHN0cmluZztcbiAgZGVjaW1hbHM6IGJpZ2ludDtcbiAgb3JjaGVzdHJhdG9yOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1zZ0VSQzIwRGVwbG95ZWRDbGFpbVJlc3BvbnNlIHt9XG4vKipcbiAqIFRoaXMgaW5mb3JtcyB0aGUgQ29zbW9zIG1vZHVsZSB0aGF0IGEgbG9naWNcbiAqIGNhbGwgaGFzIGJlZW4gZXhlY3V0ZWRcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW0ge1xuICBldmVudE5vbmNlOiBiaWdpbnQ7XG4gIGV0aEJsb2NrSGVpZ2h0OiBiaWdpbnQ7XG4gIGludmFsaWRhdGlvbklkOiBVaW50OEFycmF5O1xuICBpbnZhbGlkYXRpb25Ob25jZTogYmlnaW50O1xuICBvcmNoZXN0cmF0b3I6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlIHt9XG4vKipcbiAqIFRoaXMgaW5mb3JtcyB0aGUgQ29zbW9zIG1vZHVsZSB0aGF0IGEgdmFsaWRhdG9yXG4gKiBzZXQgaGFzIGJlZW4gdXBkYXRlZC5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbSB7XG4gIGV2ZW50Tm9uY2U6IGJpZ2ludDtcbiAgdmFsc2V0Tm9uY2U6IGJpZ2ludDtcbiAgZXRoQmxvY2tIZWlnaHQ6IGJpZ2ludDtcbiAgbWVtYmVyczogQnJpZGdlVmFsaWRhdG9yW107XG4gIHJld2FyZEFtb3VudDogc3RyaW5nO1xuICByZXdhcmRUb2tlbjogc3RyaW5nO1xuICBvcmNoZXN0cmF0b3I6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnVmFsc2V0VXBkYXRlZENsYWltUmVzcG9uc2Uge31cbi8qKlxuICogVGhpcyBjYWxsIGFsbG93cyB0aGUgc2VuZGVyIChhbmQgb25seSB0aGUgc2VuZGVyKVxuICogdG8gY2FuY2VsIGEgZ2l2ZW4gTXNnU2VuZFRvRXRoIGFuZCByZWNpZXZlIGEgcmVmdW5kXG4gKiBvZiB0aGUgdG9rZW5zXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2dDYW5jZWxTZW5kVG9FdGgge1xuICB0cmFuc2FjdGlvbklkOiBiaWdpbnQ7XG4gIHNlbmRlcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNc2dDYW5jZWxTZW5kVG9FdGhSZXNwb25zZSB7fVxuLyoqXG4gKiBUaGlzIGNhbGwgYWxsb3dzIGFueW9uZSB0byBzdWJtaXQgZXZpZGVuY2UgdGhhdCBhXG4gKiB2YWxpZGF0b3IgaGFzIHNpZ25lZCBhIHZhbHNldCwgYmF0Y2gsIG9yIGxvZ2ljIGNhbGwgdGhhdCBuZXZlclxuICogZXhpc3RlZCBvbiB0aGUgQ29zbW9zIGNoYWluLlxuICogU3ViamVjdCBjb250YWlucyB0aGUgYmF0Y2gsIHZhbHNldCwgb3IgbG9naWMgY2FsbC5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlIHtcbiAgc3ViamVjdD86IEFueTtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG4gIHNlbmRlcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlIHt9XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2V0T3BlcmF0b3JBZGRyZXNzIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50VmFsc2V0Q29uZmlybUtleSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QmF0Y2hDcmVhdGVkIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBiYXRjaE5vbmNlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QmF0Y2hDb25maXJtS2V5IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBiYXRjaENvbmZpcm1LZXk6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRCYXRjaFNlbmRUb0V0aENsYWltIHtcbiAgbm9uY2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRDbGFpbSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY2xhaW1IYXNoOiBzdHJpbmc7XG4gIGF0dGVzdGF0aW9uSWQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRCYWRTaWduYXR1cmVFdmlkZW5jZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgYmFkRXRoU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGJhZEV0aFNpZ25hdHVyZVN1YmplY3Q6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRFUkMyMERlcGxveWVkQ2xhaW0ge1xuICB0b2tlbjogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSB7XG4gIG5vbmNlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50TXVsdGlzaWdVcGRhdGVSZXF1ZXN0IHtcbiAgYnJpZGdlQ29udHJhY3Q6IHN0cmluZztcbiAgYnJpZGdlQ2hhaW5JZDogc3RyaW5nO1xuICBtdWx0aXNpZ0lkOiBzdHJpbmc7XG4gIG5vbmNlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50T3V0Z29pbmdMb2dpY0NhbGxDYW5jZWxlZCB7XG4gIGxvZ2ljQ2FsbEludmFsaWRhdGlvbklkOiBzdHJpbmc7XG4gIGxvZ2ljQ2FsbEludmFsaWRhdGlvbk5vbmNlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2lnbmF0dXJlU2xhc2hpbmcge1xuICB0eXBlOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRPdXRnb2luZ1R4SWQge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHR4SWQ6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTZW5kVG9FdGhGZWVDb2xsZWN0ZWQge1xuICBzZW5kZXI6IHN0cmluZztcbiAgc2VuZEFtb3VudDogc3RyaW5nO1xuICBmZWVBbW91bnQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3MoKTogTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzcyB7XG4gIHJldHVybiB7XG4gICAgdmFsaWRhdG9yOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvcjogXCJcIixcbiAgICBldGhBZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3MsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS52YWxpZGF0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnZhbGlkYXRvcik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uub3JjaGVzdHJhdG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5vcmNoZXN0cmF0b3IpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmV0aEFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmV0aEFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudmFsaWRhdG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5ldGhBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkYXRvcjogaXNTZXQob2JqZWN0LnZhbGlkYXRvcikgPyBTdHJpbmcob2JqZWN0LnZhbGlkYXRvcikgOiBcIlwiLFxuICAgICAgb3JjaGVzdHJhdG9yOiBpc1NldChvYmplY3Qub3JjaGVzdHJhdG9yKVxuICAgICAgICA/IFN0cmluZyhvYmplY3Qub3JjaGVzdHJhdG9yKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBldGhBZGRyZXNzOiBpc1NldChvYmplY3QuZXRoQWRkcmVzcykgPyBTdHJpbmcob2JqZWN0LmV0aEFkZHJlc3MpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnZhbGlkYXRvciAhPT0gdW5kZWZpbmVkICYmIChvYmoudmFsaWRhdG9yID0gbWVzc2FnZS52YWxpZGF0b3IpO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yID0gbWVzc2FnZS5vcmNoZXN0cmF0b3IpO1xuICAgIG1lc3NhZ2UuZXRoQWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIChvYmouZXRoQWRkcmVzcyA9IG1lc3NhZ2UuZXRoQWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8TXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzcz5cbiAgKTogTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzKCk7XG4gICAgbWVzc2FnZS52YWxpZGF0b3IgPSBvYmplY3QudmFsaWRhdG9yID8/IFwiXCI7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSBvYmplY3Qub3JjaGVzdHJhdG9yID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ldGhBZGRyZXNzID0gb2JqZWN0LmV0aEFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzUmVzcG9uc2UoKTogTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBfOiBQYXJ0aWFsPE1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZT5cbiAgKTogTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ1ZhbHNldENvbmZpcm0oKTogTXNnVmFsc2V0Q29uZmlybSB7XG4gIHJldHVybiB7XG4gICAgbm9uY2U6IEJpZ0ludCgwKSxcbiAgICBvcmNoZXN0cmF0b3I6IFwiXCIsXG4gICAgZXRoQWRkcmVzczogXCJcIixcbiAgICBzaWduYXR1cmU6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBNc2dWYWxzZXRDb25maXJtID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnVmFsc2V0Q29uZmlybSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2Uub3JjaGVzdHJhdG9yKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5ldGhBZGRyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5zaWduYXR1cmUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLnNpZ25hdHVyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IE1zZ1ZhbHNldENvbmZpcm0ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dWYWxzZXRDb25maXJtKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuZXRoQWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5zaWduYXR1cmUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dWYWxzZXRDb25maXJtIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKSA6IEJpZ0ludCgwKSxcbiAgICAgIG9yY2hlc3RyYXRvcjogaXNTZXQob2JqZWN0Lm9yY2hlc3RyYXRvcilcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0Lm9yY2hlc3RyYXRvcilcbiAgICAgICAgOiBcIlwiLFxuICAgICAgZXRoQWRkcmVzczogaXNTZXQob2JqZWN0LmV0aEFkZHJlc3MpID8gU3RyaW5nKG9iamVjdC5ldGhBZGRyZXNzKSA6IFwiXCIsXG4gICAgICBzaWduYXR1cmU6IGlzU2V0KG9iamVjdC5zaWduYXR1cmUpID8gU3RyaW5nKG9iamVjdC5zaWduYXR1cmUpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dWYWxzZXRDb25maXJtKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubm9uY2UgPSAobWVzc2FnZS5ub25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yID0gbWVzc2FnZS5vcmNoZXN0cmF0b3IpO1xuICAgIG1lc3NhZ2UuZXRoQWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmIChvYmouZXRoQWRkcmVzcyA9IG1lc3NhZ2UuZXRoQWRkcmVzcyk7XG4gICAgbWVzc2FnZS5zaWduYXR1cmUgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNpZ25hdHVyZSA9IG1lc3NhZ2Uuc2lnbmF0dXJlKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxNc2dWYWxzZXRDb25maXJtPik6IE1zZ1ZhbHNldENvbmZpcm0ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnVmFsc2V0Q29uZmlybSgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPVxuICAgICAgb2JqZWN0Lm5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ub25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSBvYmplY3Qub3JjaGVzdHJhdG9yID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ldGhBZGRyZXNzID0gb2JqZWN0LmV0aEFkZHJlc3MgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnNpZ25hdHVyZSA9IG9iamVjdC5zaWduYXR1cmUgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dWYWxzZXRDb25maXJtUmVzcG9uc2UoKTogTXNnVmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgY29uc3QgTXNnVmFsc2V0Q29uZmlybVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnVmFsc2V0Q29uZmlybVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ1ZhbHNldENvbmZpcm1SZXNwb25zZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1ZhbHNldENvbmZpcm1SZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnVmFsc2V0Q29uZmlybVJlc3BvbnNlIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ1ZhbHNldENvbmZpcm1SZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChfOiBQYXJ0aWFsPE1zZ1ZhbHNldENvbmZpcm1SZXNwb25zZT4pOiBNc2dWYWxzZXRDb25maXJtUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnVmFsc2V0Q29uZmlybVJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnU2VuZFRvRXRoKCk6IE1zZ1NlbmRUb0V0aCB7XG4gIHJldHVybiB7XG4gICAgc2VuZGVyOiBcIlwiLFxuICAgIGV0aERlc3Q6IFwiXCIsXG4gICAgYW1vdW50OiB1bmRlZmluZWQsXG4gICAgYnJpZGdlRmVlOiB1bmRlZmluZWQsXG4gICAgY2hhaW5GZWU6IHVuZGVmaW5lZCxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ1NlbmRUb0V0aCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ1NlbmRUb0V0aCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnNlbmRlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhEZXN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5ldGhEZXN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgQ29pbi5lbmNvZGUobWVzc2FnZS5hbW91bnQsIHdyaXRlci51aW50MzIoMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlRmVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIENvaW4uZW5jb2RlKG1lc3NhZ2UuYnJpZGdlRmVlLCB3cml0ZXIudWludDMyKDM0KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNoYWluRmVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIENvaW4uZW5jb2RlKG1lc3NhZ2UuY2hhaW5GZWUsIHdyaXRlci51aW50MzIoNDIpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IE1zZ1NlbmRUb0V0aCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1NlbmRUb0V0aCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV0aERlc3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuYW1vdW50ID0gQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLmJyaWRnZUZlZSA9IENvaW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5jaGFpbkZlZSA9IENvaW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ1NlbmRUb0V0aCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbmRlcjogaXNTZXQob2JqZWN0LnNlbmRlcikgPyBTdHJpbmcob2JqZWN0LnNlbmRlcikgOiBcIlwiLFxuICAgICAgZXRoRGVzdDogaXNTZXQob2JqZWN0LmV0aERlc3QpID8gU3RyaW5nKG9iamVjdC5ldGhEZXN0KSA6IFwiXCIsXG4gICAgICBhbW91bnQ6IGlzU2V0KG9iamVjdC5hbW91bnQpID8gQ29pbi5mcm9tSlNPTihvYmplY3QuYW1vdW50KSA6IHVuZGVmaW5lZCxcbiAgICAgIGJyaWRnZUZlZTogaXNTZXQob2JqZWN0LmJyaWRnZUZlZSlcbiAgICAgICAgPyBDb2luLmZyb21KU09OKG9iamVjdC5icmlkZ2VGZWUpXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgY2hhaW5GZWU6IGlzU2V0KG9iamVjdC5jaGFpbkZlZSlcbiAgICAgICAgPyBDb2luLmZyb21KU09OKG9iamVjdC5jaGFpbkZlZSlcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogTXNnU2VuZFRvRXRoKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIG1lc3NhZ2UuZXRoRGVzdCAhPT0gdW5kZWZpbmVkICYmIChvYmouZXRoRGVzdCA9IG1lc3NhZ2UuZXRoRGVzdCk7XG4gICAgbWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hbW91bnQgPSBtZXNzYWdlLmFtb3VudCA/IENvaW4udG9KU09OKG1lc3NhZ2UuYW1vdW50KSA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5icmlkZ2VGZWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VGZWUgPSBtZXNzYWdlLmJyaWRnZUZlZVxuICAgICAgICA/IENvaW4udG9KU09OKG1lc3NhZ2UuYnJpZGdlRmVlKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5jaGFpbkZlZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNoYWluRmVlID0gbWVzc2FnZS5jaGFpbkZlZVxuICAgICAgICA/IENvaW4udG9KU09OKG1lc3NhZ2UuY2hhaW5GZWUpXG4gICAgICAgIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxNc2dTZW5kVG9FdGg+KTogTXNnU2VuZFRvRXRoIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1NlbmRUb0V0aCgpO1xuICAgIG1lc3NhZ2Uuc2VuZGVyID0gb2JqZWN0LnNlbmRlciA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuZXRoRGVzdCA9IG9iamVjdC5ldGhEZXN0ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5hbW91bnQgPVxuICAgICAgb2JqZWN0LmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hbW91bnQgIT09IG51bGxcbiAgICAgICAgPyBDb2luLmZyb21QYXJ0aWFsKG9iamVjdC5hbW91bnQpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2UuYnJpZGdlRmVlID1cbiAgICAgIG9iamVjdC5icmlkZ2VGZWUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuYnJpZGdlRmVlICE9PSBudWxsXG4gICAgICAgID8gQ29pbi5mcm9tUGFydGlhbChvYmplY3QuYnJpZGdlRmVlKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLmNoYWluRmVlID1cbiAgICAgIG9iamVjdC5jaGFpbkZlZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5jaGFpbkZlZSAhPT0gbnVsbFxuICAgICAgICA/IENvaW4uZnJvbVBhcnRpYWwob2JqZWN0LmNoYWluRmVlKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dTZW5kVG9FdGhSZXNwb25zZSgpOiBNc2dTZW5kVG9FdGhSZXNwb25zZSB7XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ1NlbmRUb0V0aFJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnU2VuZFRvRXRoUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnU2VuZFRvRXRoUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dTZW5kVG9FdGhSZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnU2VuZFRvRXRoUmVzcG9uc2Uge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnU2VuZFRvRXRoUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXzogUGFydGlhbDxNc2dTZW5kVG9FdGhSZXNwb25zZT4pOiBNc2dTZW5kVG9FdGhSZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dTZW5kVG9FdGhSZXNwb25zZSgpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ1JlcXVlc3RCYXRjaCgpOiBNc2dSZXF1ZXN0QmF0Y2gge1xuICByZXR1cm4ge1xuICAgIHNlbmRlcjogXCJcIixcbiAgICBkZW5vbTogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ1JlcXVlc3RCYXRjaCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ1JlcXVlc3RCYXRjaCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnNlbmRlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5kZW5vbSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVub20pO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBNc2dSZXF1ZXN0QmF0Y2gge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dSZXF1ZXN0QmF0Y2goKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ1JlcXVlc3RCYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbmRlcjogaXNTZXQob2JqZWN0LnNlbmRlcikgPyBTdHJpbmcob2JqZWN0LnNlbmRlcikgOiBcIlwiLFxuICAgICAgZGVub206IGlzU2V0KG9iamVjdC5kZW5vbSkgPyBTdHJpbmcob2JqZWN0LmRlbm9tKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogTXNnUmVxdWVzdEJhdGNoKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8TXNnUmVxdWVzdEJhdGNoPik6IE1zZ1JlcXVlc3RCYXRjaCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dSZXF1ZXN0QmF0Y2goKTtcbiAgICBtZXNzYWdlLnNlbmRlciA9IG9iamVjdC5zZW5kZXIgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmRlbm9tID0gb2JqZWN0LmRlbm9tID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnUmVxdWVzdEJhdGNoUmVzcG9uc2UoKTogTXNnUmVxdWVzdEJhdGNoUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dSZXF1ZXN0QmF0Y2hSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ1JlcXVlc3RCYXRjaFJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ1JlcXVlc3RCYXRjaFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnUmVxdWVzdEJhdGNoUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IE1zZ1JlcXVlc3RCYXRjaFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ1JlcXVlc3RCYXRjaFJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKF86IFBhcnRpYWw8TXNnUmVxdWVzdEJhdGNoUmVzcG9uc2U+KTogTXNnUmVxdWVzdEJhdGNoUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnUmVxdWVzdEJhdGNoUmVzcG9uc2UoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dDb25maXJtQmF0Y2goKTogTXNnQ29uZmlybUJhdGNoIHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogQmlnSW50KDApLFxuICAgIHRva2VuQ29udHJhY3Q6IFwiXCIsXG4gICAgZXRoU2lnbmVyOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvcjogXCJcIixcbiAgICBzaWduYXR1cmU6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBNc2dDb25maXJtQmF0Y2ggPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBNc2dDb25maXJtQmF0Y2gsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50b2tlbkNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS50b2tlbkNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhTaWduZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmV0aFNpZ25lcik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uub3JjaGVzdHJhdG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS5vcmNoZXN0cmF0b3IpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnNpZ25hdHVyZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMig0Mikuc3RyaW5nKG1lc3NhZ2Uuc2lnbmF0dXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogTXNnQ29uZmlybUJhdGNoIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQ29uZmlybUJhdGNoKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS50b2tlbkNvbnRyYWN0ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmV0aFNpZ25lciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2Uuc2lnbmF0dXJlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnQ29uZmlybUJhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKSA6IEJpZ0ludCgwKSxcbiAgICAgIHRva2VuQ29udHJhY3Q6IGlzU2V0KG9iamVjdC50b2tlbkNvbnRyYWN0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QudG9rZW5Db250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgZXRoU2lnbmVyOiBpc1NldChvYmplY3QuZXRoU2lnbmVyKSA/IFN0cmluZyhvYmplY3QuZXRoU2lnbmVyKSA6IFwiXCIsXG4gICAgICBvcmNoZXN0cmF0b3I6IGlzU2V0KG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgIDogXCJcIixcbiAgICAgIHNpZ25hdHVyZTogaXNTZXQob2JqZWN0LnNpZ25hdHVyZSkgPyBTdHJpbmcob2JqZWN0LnNpZ25hdHVyZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0NvbmZpcm1CYXRjaCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm5vbmNlID0gKG1lc3NhZ2Uubm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50b2tlbkNvbnRyYWN0ID0gbWVzc2FnZS50b2tlbkNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLmV0aFNpZ25lciAhPT0gdW5kZWZpbmVkICYmIChvYmouZXRoU2lnbmVyID0gbWVzc2FnZS5ldGhTaWduZXIpO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yID0gbWVzc2FnZS5vcmNoZXN0cmF0b3IpO1xuICAgIG1lc3NhZ2Uuc2lnbmF0dXJlICE9PSB1bmRlZmluZWQgJiYgKG9iai5zaWduYXR1cmUgPSBtZXNzYWdlLnNpZ25hdHVyZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8TXNnQ29uZmlybUJhdGNoPik6IE1zZ0NvbmZpcm1CYXRjaCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dDb25maXJtQmF0Y2goKTtcbiAgICBtZXNzYWdlLm5vbmNlID1cbiAgICAgIG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3Qubm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UudG9rZW5Db250cmFjdCA9IG9iamVjdC50b2tlbkNvbnRyYWN0ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ldGhTaWduZXIgPSBvYmplY3QuZXRoU2lnbmVyID8/IFwiXCI7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSBvYmplY3Qub3JjaGVzdHJhdG9yID8/IFwiXCI7XG4gICAgbWVzc2FnZS5zaWduYXR1cmUgPSBvYmplY3Quc2lnbmF0dXJlID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnQ29uZmlybUJhdGNoUmVzcG9uc2UoKTogTXNnQ29uZmlybUJhdGNoUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dDb25maXJtQmF0Y2hSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ0NvbmZpcm1CYXRjaFJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0NvbmZpcm1CYXRjaFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQ29uZmlybUJhdGNoUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IE1zZ0NvbmZpcm1CYXRjaFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0NvbmZpcm1CYXRjaFJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKF86IFBhcnRpYWw8TXNnQ29uZmlybUJhdGNoUmVzcG9uc2U+KTogTXNnQ29uZmlybUJhdGNoUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQ29uZmlybUJhdGNoUmVzcG9uc2UoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dDb25maXJtTG9naWNDYWxsKCk6IE1zZ0NvbmZpcm1Mb2dpY0NhbGwge1xuICByZXR1cm4ge1xuICAgIGludmFsaWRhdGlvbklkOiBcIlwiLFxuICAgIGludmFsaWRhdGlvbk5vbmNlOiBCaWdJbnQoMCksXG4gICAgZXRoU2lnbmVyOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvcjogXCJcIixcbiAgICBzaWduYXR1cmU6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBNc2dDb25maXJtTG9naWNDYWxsID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQ29uZmlybUxvZ2ljQ2FsbCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmludmFsaWRhdGlvbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5pbnZhbGlkYXRpb25JZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigxNikudWludDY0KG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmV0aFNpZ25lciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UuZXRoU2lnbmVyKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5vcmNoZXN0cmF0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvcik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uuc2lnbmF0dXJlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQyKS5zdHJpbmcobWVzc2FnZS5zaWduYXR1cmUpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dDb25maXJtTG9naWNDYWxsIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQ29uZmlybUxvZ2ljQ2FsbCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuZXRoU2lnbmVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5zaWduYXR1cmUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dDb25maXJtTG9naWNDYWxsIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW52YWxpZGF0aW9uSWQ6IGlzU2V0KG9iamVjdC5pbnZhbGlkYXRpb25JZClcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0LmludmFsaWRhdGlvbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBpbnZhbGlkYXRpb25Ob25jZTogaXNTZXQob2JqZWN0LmludmFsaWRhdGlvbk5vbmNlKVxuICAgICAgICA/IEJpZ0ludChvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgICAgZXRoU2lnbmVyOiBpc1NldChvYmplY3QuZXRoU2lnbmVyKSA/IFN0cmluZyhvYmplY3QuZXRoU2lnbmVyKSA6IFwiXCIsXG4gICAgICBvcmNoZXN0cmF0b3I6IGlzU2V0KG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgIDogXCJcIixcbiAgICAgIHNpZ25hdHVyZTogaXNTZXQob2JqZWN0LnNpZ25hdHVyZSkgPyBTdHJpbmcob2JqZWN0LnNpZ25hdHVyZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ0NvbmZpcm1Mb2dpY0NhbGwpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5pbnZhbGlkYXRpb25JZCA9IG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQpO1xuICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5pbnZhbGlkYXRpb25Ob25jZSA9IChcbiAgICAgICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSB8fCBCaWdJbnQoMClcbiAgICAgICkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS5ldGhTaWduZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLmV0aFNpZ25lciA9IG1lc3NhZ2UuZXRoU2lnbmVyKTtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm9yY2hlc3RyYXRvciA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yKTtcbiAgICBtZXNzYWdlLnNpZ25hdHVyZSAhPT0gdW5kZWZpbmVkICYmIChvYmouc2lnbmF0dXJlID0gbWVzc2FnZS5zaWduYXR1cmUpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPE1zZ0NvbmZpcm1Mb2dpY0NhbGw+KTogTXNnQ29uZmlybUxvZ2ljQ2FsbCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dDb25maXJtTG9naWNDYWxsKCk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25JZCA9IG9iamVjdC5pbnZhbGlkYXRpb25JZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgPVxuICAgICAgb2JqZWN0LmludmFsaWRhdGlvbk5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UuZXRoU2lnbmVyID0gb2JqZWN0LmV0aFNpZ25lciA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yID0gb2JqZWN0Lm9yY2hlc3RyYXRvciA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uuc2lnbmF0dXJlID0gb2JqZWN0LnNpZ25hdHVyZSA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ0NvbmZpcm1Mb2dpY0NhbGxSZXNwb25zZSgpOiBNc2dDb25maXJtTG9naWNDYWxsUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dDb25maXJtTG9naWNDYWxsUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dDb25maXJtTG9naWNDYWxsUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dDb25maXJtTG9naWNDYWxsUmVzcG9uc2Uge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8TXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlPlxuICApOiBNc2dDb25maXJtTG9naWNDYWxsUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnU2VuZFRvQ29zbW9zQ2xhaW0oKTogTXNnU2VuZFRvQ29zbW9zQ2xhaW0ge1xuICByZXR1cm4ge1xuICAgIGV2ZW50Tm9uY2U6IEJpZ0ludCgwKSxcbiAgICBldGhCbG9ja0hlaWdodDogQmlnSW50KDApLFxuICAgIHRva2VuQ29udHJhY3Q6IFwiXCIsXG4gICAgYW1vdW50OiBcIlwiLFxuICAgIGV0aGVyZXVtU2VuZGVyOiBcIlwiLFxuICAgIGNvc21vc1JlY2VpdmVyOiBcIlwiLFxuICAgIG9yY2hlc3RyYXRvcjogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ1NlbmRUb0Nvc21vc0NsYWltID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnU2VuZFRvQ29zbW9zQ2xhaW0sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ldmVudE5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UuZXZlbnROb25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigxNikudWludDY0KG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnRva2VuQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLnRva2VuQ29udHJhY3QpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmFtb3VudCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2UuYW1vdW50KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhlcmV1bVNlbmRlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMig0Mikuc3RyaW5nKG1lc3NhZ2UuZXRoZXJldW1TZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvc21vc1JlY2VpdmVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDUwKS5zdHJpbmcobWVzc2FnZS5jb3Ntb3NSZWNlaXZlcik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uub3JjaGVzdHJhdG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDU4KS5zdHJpbmcobWVzc2FnZS5vcmNoZXN0cmF0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dTZW5kVG9Db3Ntb3NDbGFpbSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1NlbmRUb0Nvc21vc0NsYWltKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ldmVudE5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuYW1vdW50ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLmV0aGVyZXVtU2VuZGVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBtZXNzYWdlLmNvc21vc1JlY2VpdmVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ1NlbmRUb0Nvc21vc0NsYWltIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnROb25jZTogaXNTZXQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICAgIGV0aEJsb2NrSGVpZ2h0OiBpc1NldChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhCbG9ja0hlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICB0b2tlbkNvbnRyYWN0OiBpc1NldChvYmplY3QudG9rZW5Db250cmFjdClcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0LnRva2VuQ29udHJhY3QpXG4gICAgICAgIDogXCJcIixcbiAgICAgIGFtb3VudDogaXNTZXQob2JqZWN0LmFtb3VudCkgPyBTdHJpbmcob2JqZWN0LmFtb3VudCkgOiBcIlwiLFxuICAgICAgZXRoZXJldW1TZW5kZXI6IGlzU2V0KG9iamVjdC5ldGhlcmV1bVNlbmRlcilcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0LmV0aGVyZXVtU2VuZGVyKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBjb3Ntb3NSZWNlaXZlcjogaXNTZXQob2JqZWN0LmNvc21vc1JlY2VpdmVyKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuY29zbW9zUmVjZWl2ZXIpXG4gICAgICAgIDogXCJcIixcbiAgICAgIG9yY2hlc3RyYXRvcjogaXNTZXQob2JqZWN0Lm9yY2hlc3RyYXRvcilcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0Lm9yY2hlc3RyYXRvcilcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ1NlbmRUb0Nvc21vc0NsYWltKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ldmVudE5vbmNlID0gKG1lc3NhZ2UuZXZlbnROb25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ldGhCbG9ja0hlaWdodCA9IChtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0IHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS50b2tlbkNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudG9rZW5Db250cmFjdCA9IG1lc3NhZ2UudG9rZW5Db250cmFjdCk7XG4gICAgbWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFtb3VudCA9IG1lc3NhZ2UuYW1vdW50KTtcbiAgICBtZXNzYWdlLmV0aGVyZXVtU2VuZGVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXRoZXJldW1TZW5kZXIgPSBtZXNzYWdlLmV0aGVyZXVtU2VuZGVyKTtcbiAgICBtZXNzYWdlLmNvc21vc1JlY2VpdmVyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zUmVjZWl2ZXIgPSBtZXNzYWdlLmNvc21vc1JlY2VpdmVyKTtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm9yY2hlc3RyYXRvciA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxNc2dTZW5kVG9Db3Ntb3NDbGFpbT4pOiBNc2dTZW5kVG9Db3Ntb3NDbGFpbSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dTZW5kVG9Db3Ntb3NDbGFpbSgpO1xuICAgIG1lc3NhZ2UuZXZlbnROb25jZSA9XG4gICAgICBvYmplY3QuZXZlbnROb25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ldmVudE5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0ID1cbiAgICAgIG9iamVjdC5ldGhCbG9ja0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ldGhCbG9ja0hlaWdodCAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UudG9rZW5Db250cmFjdCA9IG9iamVjdC50b2tlbkNvbnRyYWN0ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5hbW91bnQgPSBvYmplY3QuYW1vdW50ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ldGhlcmV1bVNlbmRlciA9IG9iamVjdC5ldGhlcmV1bVNlbmRlciA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuY29zbW9zUmVjZWl2ZXIgPSBvYmplY3QuY29zbW9zUmVjZWl2ZXIgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciA9IG9iamVjdC5vcmNoZXN0cmF0b3IgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dTZW5kVG9Db3Ntb3NDbGFpbVJlc3BvbnNlKCk6IE1zZ1NlbmRUb0Nvc21vc0NsYWltUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dTZW5kVG9Db3Ntb3NDbGFpbVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dTZW5kVG9Db3Ntb3NDbGFpbVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHRvSlNPTihfOiBNc2dTZW5kVG9Db3Ntb3NDbGFpbVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8TXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZT5cbiAgKTogTXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dTZW5kVG9Db3Ntb3NDbGFpbVJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkcygpOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzIHtcbiAgcmV0dXJuIHtcbiAgICBmb3J3YXJkc1RvQ2xlYXI6IEJpZ0ludCgwKSxcbiAgICBleGVjdXRvcjogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHMgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZm9yd2FyZHNUb0NsZWFyICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UuZm9yd2FyZHNUb0NsZWFyKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5leGVjdXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZXhlY3V0b3IpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZm9yd2FyZHNUb0NsZWFyID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcndhcmRzVG9DbGVhcjogaXNTZXQob2JqZWN0LmZvcndhcmRzVG9DbGVhcilcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmZvcndhcmRzVG9DbGVhcilcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBleGVjdXRvcjogaXNTZXQob2JqZWN0LmV4ZWN1dG9yKSA/IFN0cmluZyhvYmplY3QuZXhlY3V0b3IpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmZvcndhcmRzVG9DbGVhciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmZvcndhcmRzVG9DbGVhciA9IChtZXNzYWdlLmZvcndhcmRzVG9DbGVhciB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuZXhlY3V0b3IgIT09IHVuZGVmaW5lZCAmJiAob2JqLmV4ZWN1dG9yID0gbWVzc2FnZS5leGVjdXRvcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8TXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkcz5cbiAgKTogTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzKCk7XG4gICAgbWVzc2FnZS5mb3J3YXJkc1RvQ2xlYXIgPVxuICAgICAgb2JqZWN0LmZvcndhcmRzVG9DbGVhciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mb3J3YXJkc1RvQ2xlYXIgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmZvcndhcmRzVG9DbGVhcilcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5leGVjdXRvciA9IG9iamVjdC5leGVjdXRvciA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHNSZXNwb25zZSgpOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2Uge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8TXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlPlxuICApOiBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1Jlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbSgpOiBNc2dCYXRjaFNlbmRUb0V0aENsYWltIHtcbiAgcmV0dXJuIHtcbiAgICBldmVudE5vbmNlOiBCaWdJbnQoMCksXG4gICAgZXRoQmxvY2tIZWlnaHQ6IEJpZ0ludCgwKSxcbiAgICBiYXRjaE5vbmNlOiBCaWdJbnQoMCksXG4gICAgdG9rZW5Db250cmFjdDogXCJcIixcbiAgICBvcmNoZXN0cmF0b3I6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBNc2dCYXRjaFNlbmRUb0V0aENsYWltID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmV2ZW50Tm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ldmVudE5vbmNlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhCbG9ja0hlaWdodCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE2KS51aW50NjQobWVzc2FnZS5ldGhCbG9ja0hlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYmF0Y2hOb25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI0KS51aW50NjQobWVzc2FnZS5iYXRjaE5vbmNlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50b2tlbkNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS50b2tlbkNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5vcmNoZXN0cmF0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDIpLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0JhdGNoU2VuZFRvRXRoQ2xhaW0ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dCYXRjaFNlbmRUb0V0aENsYWltKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ldmVudE5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoTm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UudG9rZW5Db250cmFjdCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dCYXRjaFNlbmRUb0V0aENsYWltIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnROb25jZTogaXNTZXQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICAgIGV0aEJsb2NrSGVpZ2h0OiBpc1NldChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhCbG9ja0hlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBiYXRjaE5vbmNlOiBpc1NldChvYmplY3QuYmF0Y2hOb25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmJhdGNoTm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgICAgdG9rZW5Db250cmFjdDogaXNTZXQob2JqZWN0LnRva2VuQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC50b2tlbkNvbnRyYWN0KVxuICAgICAgICA6IFwiXCIsXG4gICAgICBvcmNoZXN0cmF0b3I6IGlzU2V0KG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dCYXRjaFNlbmRUb0V0aENsYWltKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ldmVudE5vbmNlID0gKG1lc3NhZ2UuZXZlbnROb25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ldGhCbG9ja0hlaWdodCA9IChtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0IHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS5iYXRjaE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYmF0Y2hOb25jZSA9IChtZXNzYWdlLmJhdGNoTm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50b2tlbkNvbnRyYWN0ID0gbWVzc2FnZS50b2tlbkNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm9yY2hlc3RyYXRvciA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxNc2dCYXRjaFNlbmRUb0V0aENsYWltPik6IE1zZ0JhdGNoU2VuZFRvRXRoQ2xhaW0ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbSgpO1xuICAgIG1lc3NhZ2UuZXZlbnROb25jZSA9XG4gICAgICBvYmplY3QuZXZlbnROb25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ldmVudE5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0ID1cbiAgICAgIG9iamVjdC5ldGhCbG9ja0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ldGhCbG9ja0hlaWdodCAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UuYmF0Y2hOb25jZSA9XG4gICAgICBvYmplY3QuYmF0Y2hOb25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5iYXRjaE5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5iYXRjaE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgPSBvYmplY3QudG9rZW5Db250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yID0gb2JqZWN0Lm9yY2hlc3RyYXRvciA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ0JhdGNoU2VuZFRvRXRoQ2xhaW1SZXNwb25zZSgpOiBNc2dCYXRjaFNlbmRUb0V0aENsYWltUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dCYXRjaFNlbmRUb0V0aENsYWltUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dCYXRjaFNlbmRUb0V0aENsYWltUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dCYXRjaFNlbmRUb0V0aENsYWltUmVzcG9uc2Uge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8TXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlPlxuICApOiBNc2dCYXRjaFNlbmRUb0V0aENsYWltUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnRVJDMjBEZXBsb3llZENsYWltKCk6IE1zZ0VSQzIwRGVwbG95ZWRDbGFpbSB7XG4gIHJldHVybiB7XG4gICAgZXZlbnROb25jZTogQmlnSW50KDApLFxuICAgIGV0aEJsb2NrSGVpZ2h0OiBCaWdJbnQoMCksXG4gICAgY29zbW9zRGVub206IFwiXCIsXG4gICAgdG9rZW5Db250cmFjdDogXCJcIixcbiAgICBuYW1lOiBcIlwiLFxuICAgIHN5bWJvbDogXCJcIixcbiAgICBkZWNpbWFsczogQmlnSW50KDApLFxuICAgIG9yY2hlc3RyYXRvcjogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ0VSQzIwRGVwbG95ZWRDbGFpbSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ0VSQzIwRGVwbG95ZWRDbGFpbSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmV2ZW50Tm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5ldmVudE5vbmNlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhCbG9ja0hlaWdodCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE2KS51aW50NjQobWVzc2FnZS5ldGhCbG9ja0hlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuY29zbW9zRGVub20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmNvc21vc0Rlbm9tKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50b2tlbkNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS50b2tlbkNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5uYW1lICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQyKS5zdHJpbmcobWVzc2FnZS5uYW1lKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5zeW1ib2wgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNTApLnN0cmluZyhtZXNzYWdlLnN5bWJvbCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZGVjaW1hbHMgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig1NikudWludDY0KG1lc3NhZ2UuZGVjaW1hbHMpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMig2Nikuc3RyaW5nKG1lc3NhZ2Uub3JjaGVzdHJhdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnRVJDMjBEZXBsb3llZENsYWltIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnRVJDMjBEZXBsb3llZENsYWltKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ldmVudE5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmNvc21vc0Rlbm9tID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2UubmFtZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgbWVzc2FnZS5zeW1ib2wgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIG1lc3NhZ2UuZGVjaW1hbHMgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnRVJDMjBEZXBsb3llZENsYWltIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnROb25jZTogaXNTZXQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICAgIGV0aEJsb2NrSGVpZ2h0OiBpc1NldChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhCbG9ja0hlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBjb3Ntb3NEZW5vbTogaXNTZXQob2JqZWN0LmNvc21vc0Rlbm9tKSA/IFN0cmluZyhvYmplY3QuY29zbW9zRGVub20pIDogXCJcIixcbiAgICAgIHRva2VuQ29udHJhY3Q6IGlzU2V0KG9iamVjdC50b2tlbkNvbnRyYWN0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QudG9rZW5Db250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgbmFtZTogaXNTZXQob2JqZWN0Lm5hbWUpID8gU3RyaW5nKG9iamVjdC5uYW1lKSA6IFwiXCIsXG4gICAgICBzeW1ib2w6IGlzU2V0KG9iamVjdC5zeW1ib2wpID8gU3RyaW5nKG9iamVjdC5zeW1ib2wpIDogXCJcIixcbiAgICAgIGRlY2ltYWxzOiBpc1NldChvYmplY3QuZGVjaW1hbHMpID8gQmlnSW50KG9iamVjdC5kZWNpbWFscykgOiBCaWdJbnQoMCksXG4gICAgICBvcmNoZXN0cmF0b3I6IGlzU2V0KG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dFUkMyMERlcGxveWVkQ2xhaW0pOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuZXZlbnROb25jZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmV2ZW50Tm9uY2UgPSAobWVzc2FnZS5ldmVudE5vbmNlIHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS5ldGhCbG9ja0hlaWdodCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmV0aEJsb2NrSGVpZ2h0ID0gKG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLmNvc21vc0Rlbm9tICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zRGVub20gPSBtZXNzYWdlLmNvc21vc0Rlbm9tKTtcbiAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50b2tlbkNvbnRyYWN0ID0gbWVzc2FnZS50b2tlbkNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLm5hbWUgIT09IHVuZGVmaW5lZCAmJiAob2JqLm5hbWUgPSBtZXNzYWdlLm5hbWUpO1xuICAgIG1lc3NhZ2Uuc3ltYm9sICE9PSB1bmRlZmluZWQgJiYgKG9iai5zeW1ib2wgPSBtZXNzYWdlLnN5bWJvbCk7XG4gICAgbWVzc2FnZS5kZWNpbWFscyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmRlY2ltYWxzID0gKG1lc3NhZ2UuZGVjaW1hbHMgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm9yY2hlc3RyYXRvciA9IG1lc3NhZ2Uub3JjaGVzdHJhdG9yKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxNc2dFUkMyMERlcGxveWVkQ2xhaW0+KTogTXNnRVJDMjBEZXBsb3llZENsYWltIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ0VSQzIwRGVwbG95ZWRDbGFpbSgpO1xuICAgIG1lc3NhZ2UuZXZlbnROb25jZSA9XG4gICAgICBvYmplY3QuZXZlbnROb25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ldmVudE5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0ID1cbiAgICAgIG9iamVjdC5ldGhCbG9ja0hlaWdodCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ldGhCbG9ja0hlaWdodCAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UuY29zbW9zRGVub20gPSBvYmplY3QuY29zbW9zRGVub20gPz8gXCJcIjtcbiAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgPSBvYmplY3QudG9rZW5Db250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UubmFtZSA9IG9iamVjdC5uYW1lID8/IFwiXCI7XG4gICAgbWVzc2FnZS5zeW1ib2wgPSBvYmplY3Quc3ltYm9sID8/IFwiXCI7XG4gICAgbWVzc2FnZS5kZWNpbWFscyA9XG4gICAgICBvYmplY3QuZGVjaW1hbHMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZGVjaW1hbHMgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmRlY2ltYWxzKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLm9yY2hlc3RyYXRvciA9IG9iamVjdC5vcmNoZXN0cmF0b3IgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dFUkMyMERlcGxveWVkQ2xhaW1SZXNwb25zZSgpOiBNc2dFUkMyMERlcGxveWVkQ2xhaW1SZXNwb25zZSB7XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ0VSQzIwRGVwbG95ZWRDbGFpbVJlc3BvbnNlID0ge1xuICBlbmNvZGUoXG4gICAgXzogTXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dFUkMyMERlcGxveWVkQ2xhaW1SZXNwb25zZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04oXzogYW55KTogTXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2Uge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgXzogUGFydGlhbDxNc2dFUkMyMERlcGxveWVkQ2xhaW1SZXNwb25zZT5cbiAgKTogTXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2UoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltKCk6IE1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW0ge1xuICByZXR1cm4ge1xuICAgIGV2ZW50Tm9uY2U6IEJpZ0ludCgwKSxcbiAgICBldGhCbG9ja0hlaWdodDogQmlnSW50KDApLFxuICAgIGludmFsaWRhdGlvbklkOiBuZXcgVWludDhBcnJheSgpLFxuICAgIGludmFsaWRhdGlvbk5vbmNlOiBCaWdJbnQoMCksXG4gICAgb3JjaGVzdHJhdG9yOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW0sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ldmVudE5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UuZXZlbnROb25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigxNikudWludDY0KG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmludmFsaWRhdGlvbklkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuYnl0ZXMobWVzc2FnZS5pbnZhbGlkYXRpb25JZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzMikudWludDY0KG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm9yY2hlc3RyYXRvciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMig0Mikuc3RyaW5nKG1lc3NhZ2Uub3JjaGVzdHJhdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW0oKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQgPSByZWFkZXIuYnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnROb25jZTogaXNTZXQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICAgIGV0aEJsb2NrSGVpZ2h0OiBpc1NldChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhCbG9ja0hlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBpbnZhbGlkYXRpb25JZDogaXNTZXQob2JqZWN0LmludmFsaWRhdGlvbklkKVxuICAgICAgICA/IGJ5dGVzRnJvbUJhc2U2NChvYmplY3QuaW52YWxpZGF0aW9uSWQpXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGludmFsaWRhdGlvbk5vbmNlOiBpc1NldChvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBvcmNoZXN0cmF0b3I6IGlzU2V0KG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vcmNoZXN0cmF0b3IpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmV2ZW50Tm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ldmVudE5vbmNlID0gKG1lc3NhZ2UuZXZlbnROb25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ldGhCbG9ja0hlaWdodCA9IChtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0IHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25JZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmludmFsaWRhdGlvbklkID0gYmFzZTY0RnJvbUJ5dGVzKFxuICAgICAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IG1lc3NhZ2UuaW52YWxpZGF0aW9uSWRcbiAgICAgICAgICA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5pbnZhbGlkYXRpb25Ob25jZSA9IChcbiAgICAgICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSB8fCBCaWdJbnQoMClcbiAgICAgICkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5vcmNoZXN0cmF0b3IgPSBtZXNzYWdlLm9yY2hlc3RyYXRvcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8TXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbT5cbiAgKTogTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltKCk7XG4gICAgbWVzc2FnZS5ldmVudE5vbmNlID1cbiAgICAgIG9iamVjdC5ldmVudE5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV2ZW50Tm9uY2UgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgPVxuICAgICAgb2JqZWN0LmV0aEJsb2NrSGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV0aEJsb2NrSGVpZ2h0ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhCbG9ja0hlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25JZCA9IG9iamVjdC5pbnZhbGlkYXRpb25JZCA/PyBuZXcgVWludDhBcnJheSgpO1xuICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgPVxuICAgICAgb2JqZWN0LmludmFsaWRhdGlvbk5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yID0gb2JqZWN0Lm9yY2hlc3RyYXRvciA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW1SZXNwb25zZSgpOiBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltUmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltUmVzcG9uc2Uge1xuICAgIHJldHVybiB7fTtcbiAgfSxcblxuICB0b0pTT04oXzogTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8TXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlPlxuICApOiBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnVmFsc2V0VXBkYXRlZENsYWltKCk6IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbSB7XG4gIHJldHVybiB7XG4gICAgZXZlbnROb25jZTogQmlnSW50KDApLFxuICAgIHZhbHNldE5vbmNlOiBCaWdJbnQoMCksXG4gICAgZXRoQmxvY2tIZWlnaHQ6IEJpZ0ludCgwKSxcbiAgICBtZW1iZXJzOiBbXSxcbiAgICByZXdhcmRBbW91bnQ6IFwiXCIsXG4gICAgcmV3YXJkVG9rZW46IFwiXCIsXG4gICAgb3JjaGVzdHJhdG9yOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTXNnVmFsc2V0VXBkYXRlZENsYWltID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnVmFsc2V0VXBkYXRlZENsYWltLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuZXZlbnROb25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLmV2ZW50Tm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnZhbHNldE5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLnVpbnQ2NChtZXNzYWdlLnZhbHNldE5vbmNlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhCbG9ja0hlaWdodCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI0KS51aW50NjQobWVzc2FnZS5ldGhCbG9ja0hlaWdodCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UubWVtYmVycykge1xuICAgICAgQnJpZGdlVmFsaWRhdG9yLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMigzNCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5yZXdhcmRBbW91bnQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDIpLnN0cmluZyhtZXNzYWdlLnJld2FyZEFtb3VudCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UucmV3YXJkVG9rZW4gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNTApLnN0cmluZyhtZXNzYWdlLnJld2FyZFRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5vcmNoZXN0cmF0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNTgpLnN0cmluZyhtZXNzYWdlLm9yY2hlc3RyYXRvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1ZhbHNldFVwZGF0ZWRDbGFpbSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZXZlbnROb25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS52YWxzZXROb25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5ldGhCbG9ja0hlaWdodCA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5tZW1iZXJzLnB1c2goQnJpZGdlVmFsaWRhdG9yLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLnJld2FyZEFtb3VudCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgbWVzc2FnZS5yZXdhcmRUb2tlbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dWYWxzZXRVcGRhdGVkQ2xhaW0ge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudE5vbmNlOiBpc1NldChvYmplY3QuZXZlbnROb25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgICAgdmFsc2V0Tm9uY2U6IGlzU2V0KG9iamVjdC52YWxzZXROb25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LnZhbHNldE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICAgIGV0aEJsb2NrSGVpZ2h0OiBpc1NldChvYmplY3QuZXRoQmxvY2tIZWlnaHQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhCbG9ja0hlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBtZW1iZXJzOiBBcnJheS5pc0FycmF5KG9iamVjdD8ubWVtYmVycylcbiAgICAgICAgPyBvYmplY3QubWVtYmVycy5tYXAoKGU6IGFueSkgPT4gQnJpZGdlVmFsaWRhdG9yLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgICAgcmV3YXJkQW1vdW50OiBpc1NldChvYmplY3QucmV3YXJkQW1vdW50KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QucmV3YXJkQW1vdW50KVxuICAgICAgICA6IFwiXCIsXG4gICAgICByZXdhcmRUb2tlbjogaXNTZXQob2JqZWN0LnJld2FyZFRva2VuKSA/IFN0cmluZyhvYmplY3QucmV3YXJkVG9rZW4pIDogXCJcIixcbiAgICAgIG9yY2hlc3RyYXRvcjogaXNTZXQob2JqZWN0Lm9yY2hlc3RyYXRvcilcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0Lm9yY2hlc3RyYXRvcilcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ldmVudE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXZlbnROb25jZSA9IChtZXNzYWdlLmV2ZW50Tm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLnZhbHNldE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudmFsc2V0Tm9uY2UgPSAobWVzc2FnZS52YWxzZXROb25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuZXRoQmxvY2tIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ldGhCbG9ja0hlaWdodCA9IChtZXNzYWdlLmV0aEJsb2NrSGVpZ2h0IHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAobWVzc2FnZS5tZW1iZXJzKSB7XG4gICAgICBvYmoubWVtYmVycyA9IG1lc3NhZ2UubWVtYmVycy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBCcmlkZ2VWYWxpZGF0b3IudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWVtYmVycyA9IFtdO1xuICAgIH1cblxuICAgIG1lc3NhZ2UucmV3YXJkQW1vdW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucmV3YXJkQW1vdW50ID0gbWVzc2FnZS5yZXdhcmRBbW91bnQpO1xuICAgIG1lc3NhZ2UucmV3YXJkVG9rZW4gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5yZXdhcmRUb2tlbiA9IG1lc3NhZ2UucmV3YXJkVG9rZW4pO1xuICAgIG1lc3NhZ2Uub3JjaGVzdHJhdG9yICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoub3JjaGVzdHJhdG9yID0gbWVzc2FnZS5vcmNoZXN0cmF0b3IpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbT4pOiBNc2dWYWxzZXRVcGRhdGVkQ2xhaW0ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnVmFsc2V0VXBkYXRlZENsYWltKCk7XG4gICAgbWVzc2FnZS5ldmVudE5vbmNlID1cbiAgICAgIG9iamVjdC5ldmVudE5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV2ZW50Tm9uY2UgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UudmFsc2V0Tm9uY2UgPVxuICAgICAgb2JqZWN0LnZhbHNldE5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnZhbHNldE5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC52YWxzZXROb25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5ldGhCbG9ja0hlaWdodCA9XG4gICAgICBvYmplY3QuZXRoQmxvY2tIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZXRoQmxvY2tIZWlnaHQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmV0aEJsb2NrSGVpZ2h0KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLm1lbWJlcnMgPVxuICAgICAgb2JqZWN0Lm1lbWJlcnM/Lm1hcCgoZSkgPT4gQnJpZGdlVmFsaWRhdG9yLmZyb21QYXJ0aWFsKGUpKSB8fCBbXTtcbiAgICBtZXNzYWdlLnJld2FyZEFtb3VudCA9IG9iamVjdC5yZXdhcmRBbW91bnQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnJld2FyZFRva2VuID0gb2JqZWN0LnJld2FyZFRva2VuID8/IFwiXCI7XG4gICAgbWVzc2FnZS5vcmNoZXN0cmF0b3IgPSBvYmplY3Qub3JjaGVzdHJhdG9yID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnVmFsc2V0VXBkYXRlZENsYWltUmVzcG9uc2UoKTogTXNnVmFsc2V0VXBkYXRlZENsYWltUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dWYWxzZXRVcGRhdGVkQ2xhaW1SZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnVmFsc2V0VXBkYXRlZENsYWltUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8TXNnVmFsc2V0VXBkYXRlZENsYWltUmVzcG9uc2U+XG4gICk6IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnQ2FuY2VsU2VuZFRvRXRoKCk6IE1zZ0NhbmNlbFNlbmRUb0V0aCB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNhY3Rpb25JZDogQmlnSW50KDApLFxuICAgIHNlbmRlcjogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ0NhbmNlbFNlbmRUb0V0aCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ0NhbmNlbFNlbmRUb0V0aCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnRyYW5zYWN0aW9uSWQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS50cmFuc2FjdGlvbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5zZW5kZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLnNlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0NhbmNlbFNlbmRUb0V0aCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ0NhbmNlbFNlbmRUb0V0aCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudHJhbnNhY3Rpb25JZCA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dDYW5jZWxTZW5kVG9FdGgge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2FjdGlvbklkOiBpc1NldChvYmplY3QudHJhbnNhY3Rpb25JZClcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LnRyYW5zYWN0aW9uSWQpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgICAgc2VuZGVyOiBpc1NldChvYmplY3Quc2VuZGVyKSA/IFN0cmluZyhvYmplY3Quc2VuZGVyKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogTXNnQ2FuY2VsU2VuZFRvRXRoKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnRyYW5zYWN0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50cmFuc2FjdGlvbklkID0gKG1lc3NhZ2UudHJhbnNhY3Rpb25JZCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2Uuc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5zZW5kZXIgPSBtZXNzYWdlLnNlbmRlcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8TXNnQ2FuY2VsU2VuZFRvRXRoPik6IE1zZ0NhbmNlbFNlbmRUb0V0aCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dDYW5jZWxTZW5kVG9FdGgoKTtcbiAgICBtZXNzYWdlLnRyYW5zYWN0aW9uSWQgPVxuICAgICAgb2JqZWN0LnRyYW5zYWN0aW9uSWQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudHJhbnNhY3Rpb25JZCAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QudHJhbnNhY3Rpb25JZClcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnQ2FuY2VsU2VuZFRvRXRoUmVzcG9uc2UoKTogTXNnQ2FuY2VsU2VuZFRvRXRoUmVzcG9uc2Uge1xuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBjb25zdCBNc2dDYW5jZWxTZW5kVG9FdGhSZXNwb25zZSA9IHtcbiAgZW5jb2RlKFxuICAgIF86IE1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQ2FuY2VsU2VuZFRvRXRoUmVzcG9uc2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IE1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIF86IFBhcnRpYWw8TXNnQ2FuY2VsU2VuZFRvRXRoUmVzcG9uc2U+XG4gICk6IE1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2UoKTogTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2Uge1xuICByZXR1cm4ge1xuICAgIHN1YmplY3Q6IHVuZGVmaW5lZCxcbiAgICBzaWduYXR1cmU6IFwiXCIsXG4gICAgc2VuZGVyOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2UgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnN1YmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgQW55LmVuY29kZShtZXNzYWdlLnN1YmplY3QsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uuc2lnbmF0dXJlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5zaWduYXR1cmUpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnNlbmRlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc3ViamVjdCA9IEFueS5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnNpZ25hdHVyZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1YmplY3Q6IGlzU2V0KG9iamVjdC5zdWJqZWN0KSA/IEFueS5mcm9tSlNPTihvYmplY3Quc3ViamVjdCkgOiB1bmRlZmluZWQsXG4gICAgICBzaWduYXR1cmU6IGlzU2V0KG9iamVjdC5zaWduYXR1cmUpID8gU3RyaW5nKG9iamVjdC5zaWduYXR1cmUpIDogXCJcIixcbiAgICAgIHNlbmRlcjogaXNTZXQob2JqZWN0LnNlbmRlcikgPyBTdHJpbmcob2JqZWN0LnNlbmRlcikgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnN1YmplY3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5zdWJqZWN0ID0gbWVzc2FnZS5zdWJqZWN0ID8gQW55LnRvSlNPTihtZXNzYWdlLnN1YmplY3QpIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLnNpZ25hdHVyZSAhPT0gdW5kZWZpbmVkICYmIChvYmouc2lnbmF0dXJlID0gbWVzc2FnZS5zaWduYXR1cmUpO1xuICAgIG1lc3NhZ2Uuc2VuZGVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5zZW5kZXIgPSBtZXNzYWdlLnNlbmRlcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8TXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2U+XG4gICk6IE1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlKCk7XG4gICAgbWVzc2FnZS5zdWJqZWN0ID1cbiAgICAgIG9iamVjdC5zdWJqZWN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnN1YmplY3QgIT09IG51bGxcbiAgICAgICAgPyBBbnkuZnJvbVBhcnRpYWwob2JqZWN0LnN1YmplY3QpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2Uuc2lnbmF0dXJlID0gb2JqZWN0LnNpZ25hdHVyZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uuc2VuZGVyID0gb2JqZWN0LnNlbmRlciA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlUmVzcG9uc2UoKTogTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2VSZXNwb25zZSB7XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGNvbnN0IE1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlUmVzcG9uc2UgPSB7XG4gIGVuY29kZShcbiAgICBfOiBNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihfOiBhbnkpOiBNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlIHtcbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgdG9KU09OKF86IE1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgXzogUGFydGlhbDxNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlPlxuICApOiBNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlUmVzcG9uc2UoKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFNldE9wZXJhdG9yQWRkcmVzcygpOiBFdmVudFNldE9wZXJhdG9yQWRkcmVzcyB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRTZXRPcGVyYXRvckFkZHJlc3MgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudFNldE9wZXJhdG9yQWRkcmVzcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm1lc3NhZ2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudFNldE9wZXJhdG9yQWRkcmVzcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50U2V0T3BlcmF0b3JBZGRyZXNzKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFNldE9wZXJhdG9yQWRkcmVzcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGlzU2V0KG9iamVjdC5tZXNzYWdlKSA/IFN0cmluZyhvYmplY3QubWVzc2FnZSkgOiBcIlwiLFxuICAgICAgYWRkcmVzczogaXNTZXQob2JqZWN0LmFkZHJlc3MpID8gU3RyaW5nKG9iamVjdC5hZGRyZXNzKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRXZlbnRTZXRPcGVyYXRvckFkZHJlc3MpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubWVzc2FnZSA9IG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgbWVzc2FnZS5hZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgKG9iai5hZGRyZXNzID0gbWVzc2FnZS5hZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxFdmVudFNldE9wZXJhdG9yQWRkcmVzcz5cbiAgKTogRXZlbnRTZXRPcGVyYXRvckFkZHJlc3Mge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRTZXRPcGVyYXRvckFkZHJlc3MoKTtcbiAgICBtZXNzYWdlLm1lc3NhZ2UgPSBvYmplY3QubWVzc2FnZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYWRkcmVzcyA9IG9iamVjdC5hZGRyZXNzID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnRWYWxzZXRDb25maXJtS2V5KCk6IEV2ZW50VmFsc2V0Q29uZmlybUtleSB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogXCJcIixcbiAgICBrZXk6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudFZhbHNldENvbmZpcm1LZXkgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudFZhbHNldENvbmZpcm1LZXksXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5tZXNzYWdlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5rZXkgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50VmFsc2V0Q29uZmlybUtleSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50VmFsc2V0Q29uZmlybUtleSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5rZXkgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFZhbHNldENvbmZpcm1LZXkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBpc1NldChvYmplY3QubWVzc2FnZSkgPyBTdHJpbmcob2JqZWN0Lm1lc3NhZ2UpIDogXCJcIixcbiAgICAgIGtleTogaXNTZXQob2JqZWN0LmtleSkgPyBTdHJpbmcob2JqZWN0LmtleSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50VmFsc2V0Q29uZmlybUtleSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5tZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgKG9iai5tZXNzYWdlID0gbWVzc2FnZS5tZXNzYWdlKTtcbiAgICBtZXNzYWdlLmtleSAhPT0gdW5kZWZpbmVkICYmIChvYmoua2V5ID0gbWVzc2FnZS5rZXkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEV2ZW50VmFsc2V0Q29uZmlybUtleT4pOiBFdmVudFZhbHNldENvbmZpcm1LZXkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRWYWxzZXRDb25maXJtS2V5KCk7XG4gICAgbWVzc2FnZS5tZXNzYWdlID0gb2JqZWN0Lm1lc3NhZ2UgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmtleSA9IG9iamVjdC5rZXkgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudEJhdGNoQ3JlYXRlZCgpOiBFdmVudEJhdGNoQ3JlYXRlZCB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogXCJcIixcbiAgICBiYXRjaE5vbmNlOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRCYXRjaENyZWF0ZWQgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudEJhdGNoQ3JlYXRlZCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm1lc3NhZ2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmJhdGNoTm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmJhdGNoTm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFdmVudEJhdGNoQ3JlYXRlZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50QmF0Y2hDcmVhdGVkKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoTm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudEJhdGNoQ3JlYXRlZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGlzU2V0KG9iamVjdC5tZXNzYWdlKSA/IFN0cmluZyhvYmplY3QubWVzc2FnZSkgOiBcIlwiLFxuICAgICAgYmF0Y2hOb25jZTogaXNTZXQob2JqZWN0LmJhdGNoTm9uY2UpID8gU3RyaW5nKG9iamVjdC5iYXRjaE5vbmNlKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRXZlbnRCYXRjaENyZWF0ZWQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubWVzc2FnZSA9IG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgbWVzc2FnZS5iYXRjaE5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5iYXRjaE5vbmNlID0gbWVzc2FnZS5iYXRjaE5vbmNlKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxFdmVudEJhdGNoQ3JlYXRlZD4pOiBFdmVudEJhdGNoQ3JlYXRlZCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudEJhdGNoQ3JlYXRlZCgpO1xuICAgIG1lc3NhZ2UubWVzc2FnZSA9IG9iamVjdC5tZXNzYWdlID8/IFwiXCI7XG4gICAgbWVzc2FnZS5iYXRjaE5vbmNlID0gb2JqZWN0LmJhdGNoTm9uY2UgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudEJhdGNoQ29uZmlybUtleSgpOiBFdmVudEJhdGNoQ29uZmlybUtleSB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogXCJcIixcbiAgICBiYXRjaENvbmZpcm1LZXk6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudEJhdGNoQ29uZmlybUtleSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50QmF0Y2hDb25maXJtS2V5LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UubWVzc2FnZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYmF0Y2hDb25maXJtS2V5ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5iYXRjaENvbmZpcm1LZXkpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudEJhdGNoQ29uZmlybUtleSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50QmF0Y2hDb25maXJtS2V5KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoQ29uZmlybUtleSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50QmF0Y2hDb25maXJtS2V5IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogaXNTZXQob2JqZWN0Lm1lc3NhZ2UpID8gU3RyaW5nKG9iamVjdC5tZXNzYWdlKSA6IFwiXCIsXG4gICAgICBiYXRjaENvbmZpcm1LZXk6IGlzU2V0KG9iamVjdC5iYXRjaENvbmZpcm1LZXkpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5iYXRjaENvbmZpcm1LZXkpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdmVudEJhdGNoQ29uZmlybUtleSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5tZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgKG9iai5tZXNzYWdlID0gbWVzc2FnZS5tZXNzYWdlKTtcbiAgICBtZXNzYWdlLmJhdGNoQ29uZmlybUtleSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhdGNoQ29uZmlybUtleSA9IG1lc3NhZ2UuYmF0Y2hDb25maXJtS2V5KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxFdmVudEJhdGNoQ29uZmlybUtleT4pOiBFdmVudEJhdGNoQ29uZmlybUtleSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudEJhdGNoQ29uZmlybUtleSgpO1xuICAgIG1lc3NhZ2UubWVzc2FnZSA9IG9iamVjdC5tZXNzYWdlID8/IFwiXCI7XG4gICAgbWVzc2FnZS5iYXRjaENvbmZpcm1LZXkgPSBvYmplY3QuYmF0Y2hDb25maXJtS2V5ID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnRCYXRjaFNlbmRUb0V0aENsYWltKCk6IEV2ZW50QmF0Y2hTZW5kVG9FdGhDbGFpbSB7XG4gIHJldHVybiB7XG4gICAgbm9uY2U6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudEJhdGNoU2VuZFRvRXRoQ2xhaW0gPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudEJhdGNoU2VuZFRvRXRoQ2xhaW0sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudEJhdGNoU2VuZFRvRXRoQ2xhaW0ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudEJhdGNoU2VuZFRvRXRoQ2xhaW0oKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm5vbmNlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRXZlbnRCYXRjaFNlbmRUb0V0aENsYWltIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBTdHJpbmcob2JqZWN0Lm5vbmNlKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRXZlbnRCYXRjaFNlbmRUb0V0aENsYWltKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50QmF0Y2hTZW5kVG9FdGhDbGFpbT5cbiAgKTogRXZlbnRCYXRjaFNlbmRUb0V0aENsYWltIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50QmF0Y2hTZW5kVG9FdGhDbGFpbSgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudENsYWltKCk6IEV2ZW50Q2xhaW0ge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgY2xhaW1IYXNoOiBcIlwiLFxuICAgIGF0dGVzdGF0aW9uSWQ6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudENsYWltID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRDbGFpbSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm1lc3NhZ2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNsYWltSGFzaCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuY2xhaW1IYXNoKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5hdHRlc3RhdGlvbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5hdHRlc3RhdGlvbklkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogRXZlbnRDbGFpbSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50Q2xhaW0oKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuY2xhaW1IYXNoID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmF0dGVzdGF0aW9uSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudENsYWltIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogaXNTZXQob2JqZWN0Lm1lc3NhZ2UpID8gU3RyaW5nKG9iamVjdC5tZXNzYWdlKSA6IFwiXCIsXG4gICAgICBjbGFpbUhhc2g6IGlzU2V0KG9iamVjdC5jbGFpbUhhc2gpID8gU3RyaW5nKG9iamVjdC5jbGFpbUhhc2gpIDogXCJcIixcbiAgICAgIGF0dGVzdGF0aW9uSWQ6IGlzU2V0KG9iamVjdC5hdHRlc3RhdGlvbklkKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYXR0ZXN0YXRpb25JZClcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50Q2xhaW0pOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubWVzc2FnZSA9IG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgbWVzc2FnZS5jbGFpbUhhc2ggIT09IHVuZGVmaW5lZCAmJiAob2JqLmNsYWltSGFzaCA9IG1lc3NhZ2UuY2xhaW1IYXNoKTtcbiAgICBtZXNzYWdlLmF0dGVzdGF0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hdHRlc3RhdGlvbklkID0gbWVzc2FnZS5hdHRlc3RhdGlvbklkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxFdmVudENsYWltPik6IEV2ZW50Q2xhaW0ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRDbGFpbSgpO1xuICAgIG1lc3NhZ2UubWVzc2FnZSA9IG9iamVjdC5tZXNzYWdlID8/IFwiXCI7XG4gICAgbWVzc2FnZS5jbGFpbUhhc2ggPSBvYmplY3QuY2xhaW1IYXNoID8/IFwiXCI7XG4gICAgbWVzc2FnZS5hdHRlc3RhdGlvbklkID0gb2JqZWN0LmF0dGVzdGF0aW9uSWQgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudEJhZFNpZ25hdHVyZUV2aWRlbmNlKCk6IEV2ZW50QmFkU2lnbmF0dXJlRXZpZGVuY2Uge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgYmFkRXRoU2lnbmF0dXJlOiBcIlwiLFxuICAgIGJhZEV0aFNpZ25hdHVyZVN1YmplY3Q6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudEJhZFNpZ25hdHVyZUV2aWRlbmNlID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRCYWRTaWduYXR1cmVFdmlkZW5jZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm1lc3NhZ2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmJhZEV0aFNpZ25hdHVyZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuYmFkRXRoU2lnbmF0dXJlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5iYWRFdGhTaWduYXR1cmVTdWJqZWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5iYWRFdGhTaWduYXR1cmVTdWJqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRXZlbnRCYWRTaWduYXR1cmVFdmlkZW5jZSB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50QmFkU2lnbmF0dXJlRXZpZGVuY2UoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYmFkRXRoU2lnbmF0dXJlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmJhZEV0aFNpZ25hdHVyZVN1YmplY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudEJhZFNpZ25hdHVyZUV2aWRlbmNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogaXNTZXQob2JqZWN0Lm1lc3NhZ2UpID8gU3RyaW5nKG9iamVjdC5tZXNzYWdlKSA6IFwiXCIsXG4gICAgICBiYWRFdGhTaWduYXR1cmU6IGlzU2V0KG9iamVjdC5iYWRFdGhTaWduYXR1cmUpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5iYWRFdGhTaWduYXR1cmUpXG4gICAgICAgIDogXCJcIixcbiAgICAgIGJhZEV0aFNpZ25hdHVyZVN1YmplY3Q6IGlzU2V0KG9iamVjdC5iYWRFdGhTaWduYXR1cmVTdWJqZWN0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYmFkRXRoU2lnbmF0dXJlU3ViamVjdClcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50QmFkU2lnbmF0dXJlRXZpZGVuY2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubWVzc2FnZSA9IG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgbWVzc2FnZS5iYWRFdGhTaWduYXR1cmUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5iYWRFdGhTaWduYXR1cmUgPSBtZXNzYWdlLmJhZEV0aFNpZ25hdHVyZSk7XG4gICAgbWVzc2FnZS5iYWRFdGhTaWduYXR1cmVTdWJqZWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYmFkRXRoU2lnbmF0dXJlU3ViamVjdCA9IG1lc3NhZ2UuYmFkRXRoU2lnbmF0dXJlU3ViamVjdCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8RXZlbnRCYWRTaWduYXR1cmVFdmlkZW5jZT5cbiAgKTogRXZlbnRCYWRTaWduYXR1cmVFdmlkZW5jZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudEJhZFNpZ25hdHVyZUV2aWRlbmNlKCk7XG4gICAgbWVzc2FnZS5tZXNzYWdlID0gb2JqZWN0Lm1lc3NhZ2UgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmJhZEV0aFNpZ25hdHVyZSA9IG9iamVjdC5iYWRFdGhTaWduYXR1cmUgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmJhZEV0aFNpZ25hdHVyZVN1YmplY3QgPSBvYmplY3QuYmFkRXRoU2lnbmF0dXJlU3ViamVjdCA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50RVJDMjBEZXBsb3llZENsYWltKCk6IEV2ZW50RVJDMjBEZXBsb3llZENsYWltIHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogXCJcIixcbiAgICBub25jZTogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50RVJDMjBEZXBsb3llZENsYWltID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRFUkMyMERlcGxveWVkQ2xhaW0sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS50b2tlbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudG9rZW4pO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50RVJDMjBEZXBsb3llZENsYWltIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRFUkMyMERlcGxveWVkQ2xhaW0oKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnRva2VuID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLm5vbmNlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRXZlbnRFUkMyMERlcGxveWVkQ2xhaW0ge1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbjogaXNTZXQob2JqZWN0LnRva2VuKSA/IFN0cmluZyhvYmplY3QudG9rZW4pIDogXCJcIixcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50RVJDMjBEZXBsb3llZENsYWltKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnRva2VuICE9PSB1bmRlZmluZWQgJiYgKG9iai50b2tlbiA9IG1lc3NhZ2UudG9rZW4pO1xuICAgIG1lc3NhZ2Uubm9uY2UgIT09IHVuZGVmaW5lZCAmJiAob2JqLm5vbmNlID0gbWVzc2FnZS5ub25jZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8RXZlbnRFUkMyMERlcGxveWVkQ2xhaW0+XG4gICk6IEV2ZW50RVJDMjBEZXBsb3llZENsYWltIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50RVJDMjBEZXBsb3llZENsYWltKCk7XG4gICAgbWVzc2FnZS50b2tlbiA9IG9iamVjdC50b2tlbiA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSgpOiBFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSB7XG4gIHJldHVybiB7XG4gICAgbm9uY2U6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50VmFsc2V0VXBkYXRlZENsYWltLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRXZlbnRWYWxzZXRVcGRhdGVkQ2xhaW0ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50VmFsc2V0VXBkYXRlZENsYWltKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50VmFsc2V0VXBkYXRlZENsYWltPlxuICApOiBFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCgpOiBFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgYnJpZGdlQ29udHJhY3Q6IFwiXCIsXG4gICAgYnJpZGdlQ2hhaW5JZDogXCJcIixcbiAgICBtdWx0aXNpZ0lkOiBcIlwiLFxuICAgIG5vbmNlOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRNdWx0aXNpZ1VwZGF0ZVJlcXVlc3QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDb250cmFjdCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubXVsdGlzaWdJZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UubXVsdGlzaWdJZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRXZlbnRNdWx0aXNpZ1VwZGF0ZVJlcXVlc3Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5tdWx0aXNpZ0lkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLm5vbmNlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRXZlbnRNdWx0aXNpZ1VwZGF0ZVJlcXVlc3Qge1xuICAgIHJldHVybiB7XG4gICAgICBicmlkZ2VDb250cmFjdDogaXNTZXQob2JqZWN0LmJyaWRnZUNvbnRyYWN0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgIDogXCJcIixcbiAgICAgIGJyaWRnZUNoYWluSWQ6IGlzU2V0KG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ2hhaW5JZClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgbXVsdGlzaWdJZDogaXNTZXQob2JqZWN0Lm11bHRpc2lnSWQpID8gU3RyaW5nKG9iamVjdC5tdWx0aXNpZ0lkKSA6IFwiXCIsXG4gICAgICBub25jZTogaXNTZXQob2JqZWN0Lm5vbmNlKSA/IFN0cmluZyhvYmplY3Qubm9uY2UpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJyaWRnZUNvbnRyYWN0ID0gbWVzc2FnZS5icmlkZ2VDb250cmFjdCk7XG4gICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ2hhaW5JZCA9IG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCk7XG4gICAgbWVzc2FnZS5tdWx0aXNpZ0lkICE9PSB1bmRlZmluZWQgJiYgKG9iai5tdWx0aXNpZ0lkID0gbWVzc2FnZS5tdWx0aXNpZ0lkKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50TXVsdGlzaWdVcGRhdGVSZXF1ZXN0PlxuICApOiBFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCgpO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSBvYmplY3QuYnJpZGdlQ29udHJhY3QgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgPSBvYmplY3QuYnJpZGdlQ2hhaW5JZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UubXVsdGlzaWdJZCA9IG9iamVjdC5tdWx0aXNpZ0lkID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ub25jZSA9IG9iamVjdC5ub25jZSA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdMb2dpY0NhbGxDYW5jZWxlZCgpOiBFdmVudE91dGdvaW5nTG9naWNDYWxsQ2FuY2VsZWQge1xuICByZXR1cm4ge1xuICAgIGxvZ2ljQ2FsbEludmFsaWRhdGlvbklkOiBcIlwiLFxuICAgIGxvZ2ljQ2FsbEludmFsaWRhdGlvbk5vbmNlOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRPdXRnb2luZ0xvZ2ljQ2FsbENhbmNlbGVkID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRPdXRnb2luZ0xvZ2ljQ2FsbENhbmNlbGVkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UubG9naWNDYWxsSW52YWxpZGF0aW9uSWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmxvZ2ljQ2FsbEludmFsaWRhdGlvbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5sb2dpY0NhbGxJbnZhbGlkYXRpb25Ob25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UubG9naWNDYWxsSW52YWxpZGF0aW9uTm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudE91dGdvaW5nTG9naWNDYWxsQ2FuY2VsZWQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudE91dGdvaW5nTG9naWNDYWxsQ2FuY2VsZWQoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmxvZ2ljQ2FsbEludmFsaWRhdGlvbklkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmxvZ2ljQ2FsbEludmFsaWRhdGlvbk5vbmNlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRXZlbnRPdXRnb2luZ0xvZ2ljQ2FsbENhbmNlbGVkIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9naWNDYWxsSW52YWxpZGF0aW9uSWQ6IGlzU2V0KG9iamVjdC5sb2dpY0NhbGxJbnZhbGlkYXRpb25JZClcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0LmxvZ2ljQ2FsbEludmFsaWRhdGlvbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBsb2dpY0NhbGxJbnZhbGlkYXRpb25Ob25jZTogaXNTZXQob2JqZWN0LmxvZ2ljQ2FsbEludmFsaWRhdGlvbk5vbmNlKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QubG9naWNDYWxsSW52YWxpZGF0aW9uTm9uY2UpXG4gICAgICAgIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdmVudE91dGdvaW5nTG9naWNDYWxsQ2FuY2VsZWQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubG9naWNDYWxsSW52YWxpZGF0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5sb2dpY0NhbGxJbnZhbGlkYXRpb25JZCA9IG1lc3NhZ2UubG9naWNDYWxsSW52YWxpZGF0aW9uSWQpO1xuICAgIG1lc3NhZ2UubG9naWNDYWxsSW52YWxpZGF0aW9uTm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5sb2dpY0NhbGxJbnZhbGlkYXRpb25Ob25jZSA9IG1lc3NhZ2UubG9naWNDYWxsSW52YWxpZGF0aW9uTm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50T3V0Z29pbmdMb2dpY0NhbGxDYW5jZWxlZD5cbiAgKTogRXZlbnRPdXRnb2luZ0xvZ2ljQ2FsbENhbmNlbGVkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdMb2dpY0NhbGxDYW5jZWxlZCgpO1xuICAgIG1lc3NhZ2UubG9naWNDYWxsSW52YWxpZGF0aW9uSWQgPSBvYmplY3QubG9naWNDYWxsSW52YWxpZGF0aW9uSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmxvZ2ljQ2FsbEludmFsaWRhdGlvbk5vbmNlID1cbiAgICAgIG9iamVjdC5sb2dpY0NhbGxJbnZhbGlkYXRpb25Ob25jZSA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50U2lnbmF0dXJlU2xhc2hpbmcoKTogRXZlbnRTaWduYXR1cmVTbGFzaGluZyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRTaWduYXR1cmVTbGFzaGluZyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50U2lnbmF0dXJlU2xhc2hpbmcsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS50eXBlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS50eXBlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5hZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5hZGRyZXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRXZlbnRTaWduYXR1cmVTbGFzaGluZyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50U2lnbmF0dXJlU2xhc2hpbmcoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnR5cGUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50U2lnbmF0dXJlU2xhc2hpbmcge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBpc1NldChvYmplY3QudHlwZSkgPyBTdHJpbmcob2JqZWN0LnR5cGUpIDogXCJcIixcbiAgICAgIGFkZHJlc3M6IGlzU2V0KG9iamVjdC5hZGRyZXNzKSA/IFN0cmluZyhvYmplY3QuYWRkcmVzcykgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50U2lnbmF0dXJlU2xhc2hpbmcpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudHlwZSAhPT0gdW5kZWZpbmVkICYmIChvYmoudHlwZSA9IG1lc3NhZ2UudHlwZSk7XG4gICAgbWVzc2FnZS5hZGRyZXNzICE9PSB1bmRlZmluZWQgJiYgKG9iai5hZGRyZXNzID0gbWVzc2FnZS5hZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxFdmVudFNpZ25hdHVyZVNsYXNoaW5nPik6IEV2ZW50U2lnbmF0dXJlU2xhc2hpbmcge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRTaWduYXR1cmVTbGFzaGluZygpO1xuICAgIG1lc3NhZ2UudHlwZSA9IG9iamVjdC50eXBlID8/IFwiXCI7XG4gICAgbWVzc2FnZS5hZGRyZXNzID0gb2JqZWN0LmFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudE91dGdvaW5nVHhJZCgpOiBFdmVudE91dGdvaW5nVHhJZCB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogXCJcIixcbiAgICB0eElkOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRPdXRnb2luZ1R4SWQgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudE91dGdvaW5nVHhJZCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm1lc3NhZ2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR4SWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLnR4SWQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFdmVudE91dGdvaW5nVHhJZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdUeElkKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5tZXNzYWdlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnR4SWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudE91dGdvaW5nVHhJZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IGlzU2V0KG9iamVjdC5tZXNzYWdlKSA/IFN0cmluZyhvYmplY3QubWVzc2FnZSkgOiBcIlwiLFxuICAgICAgdHhJZDogaXNTZXQob2JqZWN0LnR4SWQpID8gU3RyaW5nKG9iamVjdC50eElkKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRXZlbnRPdXRnb2luZ1R4SWQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UubWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubWVzc2FnZSA9IG1lc3NhZ2UubWVzc2FnZSk7XG4gICAgbWVzc2FnZS50eElkICE9PSB1bmRlZmluZWQgJiYgKG9iai50eElkID0gbWVzc2FnZS50eElkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxFdmVudE91dGdvaW5nVHhJZD4pOiBFdmVudE91dGdvaW5nVHhJZCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudE91dGdvaW5nVHhJZCgpO1xuICAgIG1lc3NhZ2UubWVzc2FnZSA9IG9iamVjdC5tZXNzYWdlID8/IFwiXCI7XG4gICAgbWVzc2FnZS50eElkID0gb2JqZWN0LnR4SWQgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFNlbmRUb0V0aEZlZUNvbGxlY3RlZCgpOiBFdmVudFNlbmRUb0V0aEZlZUNvbGxlY3RlZCB7XG4gIHJldHVybiB7XG4gICAgc2VuZGVyOiBcIlwiLFxuICAgIHNlbmRBbW91bnQ6IFwiXCIsXG4gICAgZmVlQW1vdW50OiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRTZW5kVG9FdGhGZWVDb2xsZWN0ZWQgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudFNlbmRUb0V0aEZlZUNvbGxlY3RlZCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnNlbmRlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5zZW5kQW1vdW50ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5zZW5kQW1vdW50KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5mZWVBbW91bnQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmZlZUFtb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50U2VuZFRvRXRoRmVlQ29sbGVjdGVkIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRTZW5kVG9FdGhGZWVDb2xsZWN0ZWQoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnNlbmRlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kQW1vdW50ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmZlZUFtb3VudCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50U2VuZFRvRXRoRmVlQ29sbGVjdGVkIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VuZGVyOiBpc1NldChvYmplY3Quc2VuZGVyKSA/IFN0cmluZyhvYmplY3Quc2VuZGVyKSA6IFwiXCIsXG4gICAgICBzZW5kQW1vdW50OiBpc1NldChvYmplY3Quc2VuZEFtb3VudCkgPyBTdHJpbmcob2JqZWN0LnNlbmRBbW91bnQpIDogXCJcIixcbiAgICAgIGZlZUFtb3VudDogaXNTZXQob2JqZWN0LmZlZUFtb3VudCkgPyBTdHJpbmcob2JqZWN0LmZlZUFtb3VudCkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50U2VuZFRvRXRoRmVlQ29sbGVjdGVkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIG1lc3NhZ2Uuc2VuZEFtb3VudCAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZEFtb3VudCA9IG1lc3NhZ2Uuc2VuZEFtb3VudCk7XG4gICAgbWVzc2FnZS5mZWVBbW91bnQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmZlZUFtb3VudCA9IG1lc3NhZ2UuZmVlQW1vdW50KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKFxuICAgIG9iamVjdDogUGFydGlhbDxFdmVudFNlbmRUb0V0aEZlZUNvbGxlY3RlZD5cbiAgKTogRXZlbnRTZW5kVG9FdGhGZWVDb2xsZWN0ZWQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRTZW5kVG9FdGhGZWVDb2xsZWN0ZWQoKTtcbiAgICBtZXNzYWdlLnNlbmRlciA9IG9iamVjdC5zZW5kZXIgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnNlbmRBbW91bnQgPSBvYmplY3Quc2VuZEFtb3VudCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuZmVlQW1vdW50ID0gb2JqZWN0LmZlZUFtb3VudCA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbi8qKiBNc2cgZGVmaW5lcyB0aGUgc3RhdGUgdHJhbnNpdGlvbnMgcG9zc2libGUgd2l0aGluIGdyYXZpdHkgKi9cblxuZXhwb3J0IGludGVyZmFjZSBNc2cge1xuICBWYWxzZXRDb25maXJtKHJlcXVlc3Q6IE1zZ1ZhbHNldENvbmZpcm0pOiBQcm9taXNlPE1zZ1ZhbHNldENvbmZpcm1SZXNwb25zZT47XG4gIFNlbmRUb0V0aChyZXF1ZXN0OiBNc2dTZW5kVG9FdGgpOiBQcm9taXNlPE1zZ1NlbmRUb0V0aFJlc3BvbnNlPjtcbiAgUmVxdWVzdEJhdGNoKHJlcXVlc3Q6IE1zZ1JlcXVlc3RCYXRjaCk6IFByb21pc2U8TXNnUmVxdWVzdEJhdGNoUmVzcG9uc2U+O1xuICBDb25maXJtQmF0Y2gocmVxdWVzdDogTXNnQ29uZmlybUJhdGNoKTogUHJvbWlzZTxNc2dDb25maXJtQmF0Y2hSZXNwb25zZT47XG4gIENvbmZpcm1Mb2dpY0NhbGwoXG4gICAgcmVxdWVzdDogTXNnQ29uZmlybUxvZ2ljQ2FsbFxuICApOiBQcm9taXNlPE1zZ0NvbmZpcm1Mb2dpY0NhbGxSZXNwb25zZT47XG4gIFNlbmRUb0Nvc21vc0NsYWltKFxuICAgIHJlcXVlc3Q6IE1zZ1NlbmRUb0Nvc21vc0NsYWltXG4gICk6IFByb21pc2U8TXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZT47XG4gIEV4ZWN1dGVJYmNBdXRvRm9yd2FyZHMoXG4gICAgcmVxdWVzdDogTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1xuICApOiBQcm9taXNlPE1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHNSZXNwb25zZT47XG4gIEJhdGNoU2VuZFRvRXRoQ2xhaW0oXG4gICAgcmVxdWVzdDogTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVxuICApOiBQcm9taXNlPE1zZ0JhdGNoU2VuZFRvRXRoQ2xhaW1SZXNwb25zZT47XG4gIFZhbHNldFVwZGF0ZUNsYWltKFxuICAgIHJlcXVlc3Q6IE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVxuICApOiBQcm9taXNlPE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlPjtcbiAgRVJDMjBEZXBsb3llZENsYWltKFxuICAgIHJlcXVlc3Q6IE1zZ0VSQzIwRGVwbG95ZWRDbGFpbVxuICApOiBQcm9taXNlPE1zZ0VSQzIwRGVwbG95ZWRDbGFpbVJlc3BvbnNlPjtcbiAgTG9naWNDYWxsRXhlY3V0ZWRDbGFpbShcbiAgICByZXF1ZXN0OiBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltXG4gICk6IFByb21pc2U8TXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlPjtcbiAgU2V0T3JjaGVzdHJhdG9yQWRkcmVzcyhcbiAgICByZXF1ZXN0OiBNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzXG4gICk6IFByb21pc2U8TXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlPjtcbiAgQ2FuY2VsU2VuZFRvRXRoKFxuICAgIHJlcXVlc3Q6IE1zZ0NhbmNlbFNlbmRUb0V0aFxuICApOiBQcm9taXNlPE1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlPjtcbiAgU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2UoXG4gICAgcmVxdWVzdDogTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2VcbiAgKTogUHJvbWlzZTxNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlPjtcbn1cbmV4cG9ydCBjbGFzcyBNc2dDbGllbnRJbXBsIGltcGxlbWVudHMgTXNnIHtcbiAgcHJpdmF0ZSByZWFkb25seSBycGM6IFJwYztcblxuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICAgIHRoaXMuVmFsc2V0Q29uZmlybSA9IHRoaXMuVmFsc2V0Q29uZmlybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuU2VuZFRvRXRoID0gdGhpcy5TZW5kVG9FdGguYmluZCh0aGlzKTtcbiAgICB0aGlzLlJlcXVlc3RCYXRjaCA9IHRoaXMuUmVxdWVzdEJhdGNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5Db25maXJtQmF0Y2ggPSB0aGlzLkNvbmZpcm1CYXRjaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuQ29uZmlybUxvZ2ljQ2FsbCA9IHRoaXMuQ29uZmlybUxvZ2ljQ2FsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuU2VuZFRvQ29zbW9zQ2xhaW0gPSB0aGlzLlNlbmRUb0Nvc21vc0NsYWltLmJpbmQodGhpcyk7XG4gICAgdGhpcy5FeGVjdXRlSWJjQXV0b0ZvcndhcmRzID0gdGhpcy5FeGVjdXRlSWJjQXV0b0ZvcndhcmRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5CYXRjaFNlbmRUb0V0aENsYWltID0gdGhpcy5CYXRjaFNlbmRUb0V0aENsYWltLmJpbmQodGhpcyk7XG4gICAgdGhpcy5WYWxzZXRVcGRhdGVDbGFpbSA9IHRoaXMuVmFsc2V0VXBkYXRlQ2xhaW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLkVSQzIwRGVwbG95ZWRDbGFpbSA9IHRoaXMuRVJDMjBEZXBsb3llZENsYWltLmJpbmQodGhpcyk7XG4gICAgdGhpcy5Mb2dpY0NhbGxFeGVjdXRlZENsYWltID0gdGhpcy5Mb2dpY0NhbGxFeGVjdXRlZENsYWltLmJpbmQodGhpcyk7XG4gICAgdGhpcy5TZXRPcmNoZXN0cmF0b3JBZGRyZXNzID0gdGhpcy5TZXRPcmNoZXN0cmF0b3JBZGRyZXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5DYW5jZWxTZW5kVG9FdGggPSB0aGlzLkNhbmNlbFNlbmRUb0V0aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2UgPVxuICAgICAgdGhpcy5TdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVmFsc2V0Q29uZmlybShyZXF1ZXN0OiBNc2dWYWxzZXRDb25maXJtKTogUHJvbWlzZTxNc2dWYWxzZXRDb25maXJtUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnVmFsc2V0Q29uZmlybS5lbmNvZGUocmVxdWVzdCkuZmluaXNoKCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucnBjLnJlcXVlc3QoXCJncmF2aXR5LnYxLk1zZ1wiLCBcIlZhbHNldENvbmZpcm1cIiwgZGF0YSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIE1zZ1ZhbHNldENvbmZpcm1SZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgU2VuZFRvRXRoKHJlcXVlc3Q6IE1zZ1NlbmRUb0V0aCk6IFByb21pc2U8TXNnU2VuZFRvRXRoUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnU2VuZFRvRXRoLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuTXNnXCIsIFwiU2VuZFRvRXRoXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBNc2dTZW5kVG9FdGhSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgUmVxdWVzdEJhdGNoKHJlcXVlc3Q6IE1zZ1JlcXVlc3RCYXRjaCk6IFByb21pc2U8TXNnUmVxdWVzdEJhdGNoUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnUmVxdWVzdEJhdGNoLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuTXNnXCIsIFwiUmVxdWVzdEJhdGNoXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBNc2dSZXF1ZXN0QmF0Y2hSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQ29uZmlybUJhdGNoKHJlcXVlc3Q6IE1zZ0NvbmZpcm1CYXRjaCk6IFByb21pc2U8TXNnQ29uZmlybUJhdGNoUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnQ29uZmlybUJhdGNoLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuTXNnXCIsIFwiQ29uZmlybUJhdGNoXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBNc2dDb25maXJtQmF0Y2hSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQ29uZmlybUxvZ2ljQ2FsbChcbiAgICByZXF1ZXN0OiBNc2dDb25maXJtTG9naWNDYWxsXG4gICk6IFByb21pc2U8TXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IE1zZ0NvbmZpcm1Mb2dpY0NhbGwuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLk1zZ1wiLFxuICAgICAgXCJDb25maXJtTG9naWNDYWxsXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgTXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBTZW5kVG9Db3Ntb3NDbGFpbShcbiAgICByZXF1ZXN0OiBNc2dTZW5kVG9Db3Ntb3NDbGFpbVxuICApOiBQcm9taXNlPE1zZ1NlbmRUb0Nvc21vc0NsYWltUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnU2VuZFRvQ29zbW9zQ2xhaW0uZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLk1zZ1wiLFxuICAgICAgXCJTZW5kVG9Db3Ntb3NDbGFpbVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIE1zZ1NlbmRUb0Nvc21vc0NsYWltUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIEV4ZWN1dGVJYmNBdXRvRm9yd2FyZHMoXG4gICAgcmVxdWVzdDogTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1xuICApOiBQcm9taXNlPE1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5Nc2dcIixcbiAgICAgIFwiRXhlY3V0ZUliY0F1dG9Gb3J3YXJkc1wiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIE1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHNSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgQmF0Y2hTZW5kVG9FdGhDbGFpbShcbiAgICByZXF1ZXN0OiBNc2dCYXRjaFNlbmRUb0V0aENsYWltXG4gICk6IFByb21pc2U8TXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IE1zZ0JhdGNoU2VuZFRvRXRoQ2xhaW0uZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLk1zZ1wiLFxuICAgICAgXCJCYXRjaFNlbmRUb0V0aENsYWltXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBWYWxzZXRVcGRhdGVDbGFpbShcbiAgICByZXF1ZXN0OiBNc2dWYWxzZXRVcGRhdGVkQ2xhaW1cbiAgKTogUHJvbWlzZTxNc2dWYWxzZXRVcGRhdGVkQ2xhaW1SZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBNc2dWYWxzZXRVcGRhdGVkQ2xhaW0uZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLk1zZ1wiLFxuICAgICAgXCJWYWxzZXRVcGRhdGVDbGFpbVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIE1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBFUkMyMERlcGxveWVkQ2xhaW0oXG4gICAgcmVxdWVzdDogTXNnRVJDMjBEZXBsb3llZENsYWltXG4gICk6IFByb21pc2U8TXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnRVJDMjBEZXBsb3llZENsYWltLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5Nc2dcIixcbiAgICAgIFwiRVJDMjBEZXBsb3llZENsYWltXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgTXNnRVJDMjBEZXBsb3llZENsYWltUmVzcG9uc2UuZGVjb2RlKG5ldyBCaW5hcnlSZWFkZXIoZGF0YSkpXG4gICAgKTtcbiAgfVxuXG4gIExvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW0oXG4gICAgcmVxdWVzdDogTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVxuICApOiBQcm9taXNlPE1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW1SZXNwb25zZT4ge1xuICAgIGNvbnN0IGRhdGEgPSBNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5Nc2dcIixcbiAgICAgIFwiTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVwiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIE1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW1SZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgU2V0T3JjaGVzdHJhdG9yQWRkcmVzcyhcbiAgICByZXF1ZXN0OiBNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzXG4gICk6IFByb21pc2U8TXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IE1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3MuZW5jb2RlKHJlcXVlc3QpLmZpbmlzaCgpO1xuICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnJwYy5yZXF1ZXN0KFxuICAgICAgXCJncmF2aXR5LnYxLk1zZ1wiLFxuICAgICAgXCJTZXRPcmNoZXN0cmF0b3JBZGRyZXNzXCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cblxuICBDYW5jZWxTZW5kVG9FdGgoXG4gICAgcmVxdWVzdDogTXNnQ2FuY2VsU2VuZFRvRXRoXG4gICk6IFByb21pc2U8TXNnQ2FuY2VsU2VuZFRvRXRoUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnQ2FuY2VsU2VuZFRvRXRoLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImdyYXZpdHkudjEuTXNnXCIsIFwiQ2FuY2VsU2VuZFRvRXRoXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBNc2dDYW5jZWxTZW5kVG9FdGhSZXNwb25zZS5kZWNvZGUobmV3IEJpbmFyeVJlYWRlcihkYXRhKSlcbiAgICApO1xuICB9XG5cbiAgU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2UoXG4gICAgcmVxdWVzdDogTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2VcbiAgKTogUHJvbWlzZTxNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IE1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiZ3Jhdml0eS52MS5Nc2dcIixcbiAgICAgIFwiU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2VcIixcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBNc2dTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZVJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFdmVudEJhZFNpZ25hdHVyZUV2aWRlbmNlIiwiRXZlbnRCYXRjaENvbmZpcm1LZXkiLCJFdmVudEJhdGNoQ3JlYXRlZCIsIkV2ZW50QmF0Y2hTZW5kVG9FdGhDbGFpbSIsIkV2ZW50Q2xhaW0iLCJFdmVudEVSQzIwRGVwbG95ZWRDbGFpbSIsIkV2ZW50TXVsdGlzaWdVcGRhdGVSZXF1ZXN0IiwiRXZlbnRPdXRnb2luZ0xvZ2ljQ2FsbENhbmNlbGVkIiwiRXZlbnRPdXRnb2luZ1R4SWQiLCJFdmVudFNlbmRUb0V0aEZlZUNvbGxlY3RlZCIsIkV2ZW50U2V0T3BlcmF0b3JBZGRyZXNzIiwiRXZlbnRTaWduYXR1cmVTbGFzaGluZyIsIkV2ZW50VmFsc2V0Q29uZmlybUtleSIsIkV2ZW50VmFsc2V0VXBkYXRlZENsYWltIiwiTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbSIsIk1zZ0JhdGNoU2VuZFRvRXRoQ2xhaW1SZXNwb25zZSIsIk1zZ0NhbmNlbFNlbmRUb0V0aCIsIk1zZ0NhbmNlbFNlbmRUb0V0aFJlc3BvbnNlIiwiTXNnQ2xpZW50SW1wbCIsIk1zZ0NvbmZpcm1CYXRjaCIsIk1zZ0NvbmZpcm1CYXRjaFJlc3BvbnNlIiwiTXNnQ29uZmlybUxvZ2ljQ2FsbCIsIk1zZ0NvbmZpcm1Mb2dpY0NhbGxSZXNwb25zZSIsIk1zZ0VSQzIwRGVwbG95ZWRDbGFpbSIsIk1zZ0VSQzIwRGVwbG95ZWRDbGFpbVJlc3BvbnNlIiwiTXNnRXhlY3V0ZUliY0F1dG9Gb3J3YXJkcyIsIk1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHNSZXNwb25zZSIsIk1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW0iLCJNc2dMb2dpY0NhbGxFeGVjdXRlZENsYWltUmVzcG9uc2UiLCJNc2dSZXF1ZXN0QmF0Y2giLCJNc2dSZXF1ZXN0QmF0Y2hSZXNwb25zZSIsIk1zZ1NlbmRUb0Nvc21vc0NsYWltIiwiTXNnU2VuZFRvQ29zbW9zQ2xhaW1SZXNwb25zZSIsIk1zZ1NlbmRUb0V0aCIsIk1zZ1NlbmRUb0V0aFJlc3BvbnNlIiwiTXNnU2V0T3JjaGVzdHJhdG9yQWRkcmVzcyIsIk1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSIsIk1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlIiwiTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2VSZXNwb25zZSIsIk1zZ1ZhbHNldENvbmZpcm0iLCJNc2dWYWxzZXRDb25maXJtUmVzcG9uc2UiLCJNc2dWYWxzZXRVcGRhdGVkQ2xhaW0iLCJNc2dWYWxzZXRVcGRhdGVkQ2xhaW1SZXNwb25zZSIsInByb3RvYnVmUGFja2FnZSIsImNyZWF0ZUJhc2VNc2dTZXRPcmNoZXN0cmF0b3JBZGRyZXNzIiwidmFsaWRhdG9yIiwib3JjaGVzdHJhdG9yIiwiZXRoQWRkcmVzcyIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJjcmVhdGUiLCJ1aW50MzIiLCJzdHJpbmciLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIkJpbmFyeVJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJpc1NldCIsIlN0cmluZyIsInRvSlNPTiIsIm9iaiIsImZyb21QYXJ0aWFsIiwiY3JlYXRlQmFzZU1zZ1NldE9yY2hlc3RyYXRvckFkZHJlc3NSZXNwb25zZSIsIl8iLCJjcmVhdGVCYXNlTXNnVmFsc2V0Q29uZmlybSIsIm5vbmNlIiwiQmlnSW50Iiwic2lnbmF0dXJlIiwidWludDY0IiwidG9TdHJpbmciLCJjcmVhdGVCYXNlTXNnVmFsc2V0Q29uZmlybVJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ1NlbmRUb0V0aCIsInNlbmRlciIsImV0aERlc3QiLCJhbW91bnQiLCJicmlkZ2VGZWUiLCJjaGFpbkZlZSIsIkNvaW4iLCJmb3JrIiwibGRlbGltIiwiY3JlYXRlQmFzZU1zZ1NlbmRUb0V0aFJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ1JlcXVlc3RCYXRjaCIsImRlbm9tIiwiY3JlYXRlQmFzZU1zZ1JlcXVlc3RCYXRjaFJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ0NvbmZpcm1CYXRjaCIsInRva2VuQ29udHJhY3QiLCJldGhTaWduZXIiLCJjcmVhdGVCYXNlTXNnQ29uZmlybUJhdGNoUmVzcG9uc2UiLCJjcmVhdGVCYXNlTXNnQ29uZmlybUxvZ2ljQ2FsbCIsImludmFsaWRhdGlvbklkIiwiaW52YWxpZGF0aW9uTm9uY2UiLCJjcmVhdGVCYXNlTXNnQ29uZmlybUxvZ2ljQ2FsbFJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ1NlbmRUb0Nvc21vc0NsYWltIiwiZXZlbnROb25jZSIsImV0aEJsb2NrSGVpZ2h0IiwiZXRoZXJldW1TZW5kZXIiLCJjb3Ntb3NSZWNlaXZlciIsImNyZWF0ZUJhc2VNc2dTZW5kVG9Db3Ntb3NDbGFpbVJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHMiLCJmb3J3YXJkc1RvQ2xlYXIiLCJleGVjdXRvciIsImNyZWF0ZUJhc2VNc2dFeGVjdXRlSWJjQXV0b0ZvcndhcmRzUmVzcG9uc2UiLCJjcmVhdGVCYXNlTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbSIsImJhdGNoTm9uY2UiLCJjcmVhdGVCYXNlTXNnQmF0Y2hTZW5kVG9FdGhDbGFpbVJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ0VSQzIwRGVwbG95ZWRDbGFpbSIsImNvc21vc0Rlbm9tIiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwiY3JlYXRlQmFzZU1zZ0VSQzIwRGVwbG95ZWRDbGFpbVJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ0xvZ2ljQ2FsbEV4ZWN1dGVkQ2xhaW0iLCJVaW50OEFycmF5IiwiYnl0ZXMiLCJieXRlc0Zyb21CYXNlNjQiLCJiYXNlNjRGcm9tQnl0ZXMiLCJjcmVhdGVCYXNlTXNnTG9naWNDYWxsRXhlY3V0ZWRDbGFpbVJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ1ZhbHNldFVwZGF0ZWRDbGFpbSIsInZhbHNldE5vbmNlIiwibWVtYmVycyIsInJld2FyZEFtb3VudCIsInJld2FyZFRva2VuIiwidiIsIkJyaWRnZVZhbGlkYXRvciIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJlIiwiY3JlYXRlQmFzZU1zZ1ZhbHNldFVwZGF0ZWRDbGFpbVJlc3BvbnNlIiwiY3JlYXRlQmFzZU1zZ0NhbmNlbFNlbmRUb0V0aCIsInRyYW5zYWN0aW9uSWQiLCJjcmVhdGVCYXNlTXNnQ2FuY2VsU2VuZFRvRXRoUmVzcG9uc2UiLCJjcmVhdGVCYXNlTXNnU3VibWl0QmFkU2lnbmF0dXJlRXZpZGVuY2UiLCJzdWJqZWN0IiwiQW55IiwiY3JlYXRlQmFzZU1zZ1N1Ym1pdEJhZFNpZ25hdHVyZUV2aWRlbmNlUmVzcG9uc2UiLCJjcmVhdGVCYXNlRXZlbnRTZXRPcGVyYXRvckFkZHJlc3MiLCJhZGRyZXNzIiwiY3JlYXRlQmFzZUV2ZW50VmFsc2V0Q29uZmlybUtleSIsImtleSIsImNyZWF0ZUJhc2VFdmVudEJhdGNoQ3JlYXRlZCIsImNyZWF0ZUJhc2VFdmVudEJhdGNoQ29uZmlybUtleSIsImJhdGNoQ29uZmlybUtleSIsImNyZWF0ZUJhc2VFdmVudEJhdGNoU2VuZFRvRXRoQ2xhaW0iLCJjcmVhdGVCYXNlRXZlbnRDbGFpbSIsImNsYWltSGFzaCIsImF0dGVzdGF0aW9uSWQiLCJjcmVhdGVCYXNlRXZlbnRCYWRTaWduYXR1cmVFdmlkZW5jZSIsImJhZEV0aFNpZ25hdHVyZSIsImJhZEV0aFNpZ25hdHVyZVN1YmplY3QiLCJjcmVhdGVCYXNlRXZlbnRFUkMyMERlcGxveWVkQ2xhaW0iLCJ0b2tlbiIsImNyZWF0ZUJhc2VFdmVudFZhbHNldFVwZGF0ZWRDbGFpbSIsImNyZWF0ZUJhc2VFdmVudE11bHRpc2lnVXBkYXRlUmVxdWVzdCIsImJyaWRnZUNvbnRyYWN0IiwiYnJpZGdlQ2hhaW5JZCIsIm11bHRpc2lnSWQiLCJjcmVhdGVCYXNlRXZlbnRPdXRnb2luZ0xvZ2ljQ2FsbENhbmNlbGVkIiwibG9naWNDYWxsSW52YWxpZGF0aW9uSWQiLCJsb2dpY0NhbGxJbnZhbGlkYXRpb25Ob25jZSIsImNyZWF0ZUJhc2VFdmVudFNpZ25hdHVyZVNsYXNoaW5nIiwidHlwZSIsImNyZWF0ZUJhc2VFdmVudE91dGdvaW5nVHhJZCIsInR4SWQiLCJjcmVhdGVCYXNlRXZlbnRTZW5kVG9FdGhGZWVDb2xsZWN0ZWQiLCJzZW5kQW1vdW50IiwiZmVlQW1vdW50IiwiVmFsc2V0Q29uZmlybSIsInJlcXVlc3QiLCJkYXRhIiwiZmluaXNoIiwicHJvbWlzZSIsInJwYyIsInRoZW4iLCJTZW5kVG9FdGgiLCJSZXF1ZXN0QmF0Y2giLCJDb25maXJtQmF0Y2giLCJDb25maXJtTG9naWNDYWxsIiwiU2VuZFRvQ29zbW9zQ2xhaW0iLCJFeGVjdXRlSWJjQXV0b0ZvcndhcmRzIiwiQmF0Y2hTZW5kVG9FdGhDbGFpbSIsIlZhbHNldFVwZGF0ZUNsYWltIiwiRVJDMjBEZXBsb3llZENsYWltIiwiTG9naWNDYWxsRXhlY3V0ZWRDbGFpbSIsIlNldE9yY2hlc3RyYXRvckFkZHJlc3MiLCJDYW5jZWxTZW5kVG9FdGgiLCJTdWJtaXRCYWRTaWduYXR1cmVFdmlkZW5jZSIsImNvbnN0cnVjdG9yIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQWtsR0xBLHlCQUF5QjtlQUF6QkE7O0lBdk9BQyxvQkFBb0I7ZUFBcEJBOztJQXhFQUMsaUJBQWlCO2VBQWpCQTs7SUFxSkFDLHdCQUF3QjtlQUF4QkE7O0lBbUVBQyxVQUFVO2VBQVZBOztJQXFMQUMsdUJBQXVCO2VBQXZCQTs7SUFnSkFDLDBCQUEwQjtlQUExQkE7O0lBeUdBQyw4QkFBOEI7ZUFBOUJBOztJQStKQUMsaUJBQWlCO2VBQWpCQTs7SUF5RUFDLDBCQUEwQjtlQUExQkE7O0lBdGdDQUMsdUJBQXVCO2VBQXZCQTs7SUFrM0JBQyxzQkFBc0I7ZUFBdEJBOztJQXJ5QkFDLHFCQUFxQjtlQUFyQkE7O0lBb2lCQUMsdUJBQXVCO2VBQXZCQTs7SUExckRBQyxzQkFBc0I7ZUFBdEJBOztJQWlJQUMsOEJBQThCO2VBQTlCQTs7SUFvckJBQyxrQkFBa0I7ZUFBbEJBOztJQThFQUMsMEJB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
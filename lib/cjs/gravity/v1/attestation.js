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
    Attestation: function() {
        return Attestation;
    },
    ClaimType: function() {
        return ClaimType;
    },
    ERC20Token: function() {
        return ERC20Token;
    },
    EventInvalidSendToCosmosReceiver: function() {
        return EventInvalidSendToCosmosReceiver;
    },
    EventObservation: function() {
        return EventObservation;
    },
    EventSendToCosmos: function() {
        return EventSendToCosmos;
    },
    EventSendToCosmosExecutedIbcAutoForward: function() {
        return EventSendToCosmosExecutedIbcAutoForward;
    },
    EventSendToCosmosLocal: function() {
        return EventSendToCosmosLocal;
    },
    EventSendToCosmosPendingIbcAutoForward: function() {
        return EventSendToCosmosPendingIbcAutoForward;
    },
    claimTypeFromJSON: function() {
        return claimTypeFromJSON;
    },
    claimTypeToJSON: function() {
        return claimTypeToJSON;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _any = require("cosmjs-types/google/protobuf/any");
const _helpers = require("./helpers");
const protobufPackage = "gravity.v1";
var ClaimType;
(function(ClaimType) {
    /** CLAIM_TYPE_UNSPECIFIED - An unspecified claim type */ ClaimType[ClaimType["CLAIM_TYPE_UNSPECIFIED"] = 0] = "CLAIM_TYPE_UNSPECIFIED";
    /** CLAIM_TYPE_SEND_TO_COSMOS - A claim for a SendToCosmos transaction */ ClaimType[ClaimType["CLAIM_TYPE_SEND_TO_COSMOS"] = 1] = "CLAIM_TYPE_SEND_TO_COSMOS";
    /** CLAIM_TYPE_BATCH_SEND_TO_ETH - A claim for when batches are relayed */ ClaimType[ClaimType["CLAIM_TYPE_BATCH_SEND_TO_ETH"] = 2] = "CLAIM_TYPE_BATCH_SEND_TO_ETH";
    /** CLAIM_TYPE_ERC20_DEPLOYED - A claim for when an erc20 contract has been deployed */ ClaimType[ClaimType["CLAIM_TYPE_ERC20_DEPLOYED"] = 3] = "CLAIM_TYPE_ERC20_DEPLOYED";
    /** CLAIM_TYPE_LOGIC_CALL_EXECUTED - A claim for when a logic call has been executed */ ClaimType[ClaimType["CLAIM_TYPE_LOGIC_CALL_EXECUTED"] = 4] = "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
    /** CLAIM_TYPE_VALSET_UPDATED - A claim for when a valset update has happened */ ClaimType[ClaimType["CLAIM_TYPE_VALSET_UPDATED"] = 5] = "CLAIM_TYPE_VALSET_UPDATED";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType || (ClaimType = {}));
function claimTypeFromJSON(object) {
    switch(object){
        case 0:
        case "CLAIM_TYPE_UNSPECIFIED":
            return 0;
        case 1:
        case "CLAIM_TYPE_SEND_TO_COSMOS":
            return 1;
        case 2:
        case "CLAIM_TYPE_BATCH_SEND_TO_ETH":
            return 2;
        case 3:
        case "CLAIM_TYPE_ERC20_DEPLOYED":
            return 3;
        case 4:
        case "CLAIM_TYPE_LOGIC_CALL_EXECUTED":
            return 4;
        case 5:
        case "CLAIM_TYPE_VALSET_UPDATED":
            return 5;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1;
    }
}
function claimTypeToJSON(object) {
    switch(object){
        case 0:
            return "CLAIM_TYPE_UNSPECIFIED";
        case 1:
            return "CLAIM_TYPE_SEND_TO_COSMOS";
        case 2:
            return "CLAIM_TYPE_BATCH_SEND_TO_ETH";
        case 3:
            return "CLAIM_TYPE_ERC20_DEPLOYED";
        case 4:
            return "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
        case 5:
            return "CLAIM_TYPE_VALSET_UPDATED";
        case -1:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAttestation() {
    return {
        observed: false,
        votes: [],
        height: BigInt(0),
        claim: undefined
    };
}
const Attestation = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.observed === true) {
            writer.uint32(8).bool(message.observed);
        }
        for (const v of message.votes){
            writer.uint32(18).string(v);
        }
        if (message.height != BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.claim !== undefined) {
            _any.Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttestation();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.observed = reader.bool();
                    break;
                case 2:
                    message.votes.push(reader.string());
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.claim = _any.Any.decode(reader, reader.uint32());
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
            observed: (0, _helpers.isSet)(object.observed) ? Boolean(object.observed) : false,
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e)=>String(e)) : [],
            height: (0, _helpers.isSet)(object.height) ? BigInt(object.height) : BigInt(0),
            claim: (0, _helpers.isSet)(object.claim) ? _any.Any.fromJSON(object.claim) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.observed !== undefined && (obj.observed = message.observed);
        if (message.votes) {
            obj.votes = message.votes.map((e)=>e);
        } else {
            obj.votes = [];
        }
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.claim !== undefined && (obj.claim = message.claim ? _any.Any.toJSON(message.claim) : undefined);
        return obj;
    },
    fromPartial (object) {
        var _object_votes;
        const message = createBaseAttestation();
        var _object_observed;
        message.observed = (_object_observed = object.observed) !== null && _object_observed !== void 0 ? _object_observed : false;
        message.votes = ((_object_votes = object.votes) === null || _object_votes === void 0 ? void 0 : _object_votes.map((e)=>e)) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height) : BigInt(0);
        message.claim = object.claim !== undefined && object.claim !== null ? _any.Any.fromPartial(object.claim) : undefined;
        return message;
    }
};
function createBaseERC20Token() {
    return {
        contract: "",
        amount: ""
    };
}
const ERC20Token = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20Token();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
            contract: (0, _helpers.isSet)(object.contract) ? String(object.contract) : "",
            amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseERC20Token();
        var _object_contract;
        message.contract = (_object_contract = object.contract) !== null && _object_contract !== void 0 ? _object_contract : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        return message;
    }
};
function createBaseEventObservation() {
    return {
        attestationType: "",
        bridgeContract: "",
        bridgeChainId: "",
        attestationId: "",
        nonce: ""
    };
}
const EventObservation = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.attestationType !== "") {
            writer.uint32(10).string(message.attestationType);
        }
        if (message.bridgeContract !== "") {
            writer.uint32(18).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(26).string(message.bridgeChainId);
        }
        if (message.attestationId !== "") {
            writer.uint32(34).string(message.attestationId);
        }
        if (message.nonce !== "") {
            writer.uint32(42).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventObservation();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.attestationType = reader.string();
                    break;
                case 2:
                    message.bridgeContract = reader.string();
                    break;
                case 3:
                    message.bridgeChainId = reader.string();
                    break;
                case 4:
                    message.attestationId = reader.string();
                    break;
                case 5:
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
            attestationType: (0, _helpers.isSet)(object.attestationType) ? String(object.attestationType) : "",
            bridgeContract: (0, _helpers.isSet)(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: (0, _helpers.isSet)(object.bridgeChainId) ? String(object.bridgeChainId) : "",
            attestationId: (0, _helpers.isSet)(object.attestationId) ? String(object.attestationId) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.attestationType !== undefined && (obj.attestationType = message.attestationType);
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.attestationId !== undefined && (obj.attestationId = message.attestationId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventObservation();
        var _object_attestationType;
        message.attestationType = (_object_attestationType = object.attestationType) !== null && _object_attestationType !== void 0 ? _object_attestationType : "";
        var _object_bridgeContract;
        message.bridgeContract = (_object_bridgeContract = object.bridgeContract) !== null && _object_bridgeContract !== void 0 ? _object_bridgeContract : "";
        var _object_bridgeChainId;
        message.bridgeChainId = (_object_bridgeChainId = object.bridgeChainId) !== null && _object_bridgeChainId !== void 0 ? _object_bridgeChainId : "";
        var _object_attestationId;
        message.attestationId = (_object_attestationId = object.attestationId) !== null && _object_attestationId !== void 0 ? _object_attestationId : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};
function createBaseEventInvalidSendToCosmosReceiver() {
    return {
        amount: "",
        nonce: "",
        token: "",
        sender: ""
    };
}
const EventInvalidSendToCosmosReceiver = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventInvalidSendToCosmosReceiver();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
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
            amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : "",
            token: (0, _helpers.isSet)(object.token) ? String(object.token) : "",
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.token !== undefined && (obj.token = message.token);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventInvalidSendToCosmosReceiver();
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        var _object_token;
        message.token = (_object_token = object.token) !== null && _object_token !== void 0 ? _object_token : "";
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        return message;
    }
};
function createBaseEventSendToCosmos() {
    return {
        amount: "",
        nonce: "",
        token: ""
    };
}
const EventSendToCosmos = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmos();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
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
            amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : "",
            token: (0, _helpers.isSet)(object.token) ? String(object.token) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventSendToCosmos();
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        var _object_token;
        message.token = (_object_token = object.token) !== null && _object_token !== void 0 ? _object_token : "";
        return message;
    }
};
function createBaseEventSendToCosmosLocal() {
    return {
        nonce: "",
        receiver: "",
        token: "",
        amount: ""
    };
}
const EventSendToCosmosLocal = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmosLocal();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
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
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : "",
            receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
            token: (0, _helpers.isSet)(object.token) ? String(object.token) : "",
            amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.token !== undefined && (obj.token = message.token);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventSendToCosmosLocal();
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        var _object_receiver;
        message.receiver = (_object_receiver = object.receiver) !== null && _object_receiver !== void 0 ? _object_receiver : "";
        var _object_token;
        message.token = (_object_token = object.token) !== null && _object_token !== void 0 ? _object_token : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        return message;
    }
};
function createBaseEventSendToCosmosPendingIbcAutoForward() {
    return {
        nonce: "",
        receiver: "",
        token: "",
        amount: "",
        channel: ""
    };
}
const EventSendToCosmosPendingIbcAutoForward = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.channel !== "") {
            writer.uint32(42).string(message.channel);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmosPendingIbcAutoForward();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.channel = reader.string();
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
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : "",
            receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
            token: (0, _helpers.isSet)(object.token) ? String(object.token) : "",
            amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : "",
            channel: (0, _helpers.isSet)(object.channel) ? String(object.channel) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.token !== undefined && (obj.token = message.token);
        message.amount !== undefined && (obj.amount = message.amount);
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventSendToCosmosPendingIbcAutoForward();
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        var _object_receiver;
        message.receiver = (_object_receiver = object.receiver) !== null && _object_receiver !== void 0 ? _object_receiver : "";
        var _object_token;
        message.token = (_object_token = object.token) !== null && _object_token !== void 0 ? _object_token : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_channel;
        message.channel = (_object_channel = object.channel) !== null && _object_channel !== void 0 ? _object_channel : "";
        return message;
    }
};
function createBaseEventSendToCosmosExecutedIbcAutoForward() {
    return {
        nonce: "",
        receiver: "",
        token: "",
        amount: "",
        channel: "",
        timeoutTime: "",
        timeoutHeight: ""
    };
}
const EventSendToCosmosExecutedIbcAutoForward = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== "") {
            writer.uint32(10).string(message.nonce);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.channel !== "") {
            writer.uint32(42).string(message.channel);
        }
        if (message.timeoutTime !== "") {
            writer.uint32(50).string(message.timeoutTime);
        }
        if (message.timeoutHeight !== "") {
            writer.uint32(58).string(message.timeoutHeight);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSendToCosmosExecutedIbcAutoForward();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.channel = reader.string();
                    break;
                case 6:
                    message.timeoutTime = reader.string();
                    break;
                case 7:
                    message.timeoutHeight = reader.string();
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
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : "",
            receiver: (0, _helpers.isSet)(object.receiver) ? String(object.receiver) : "",
            token: (0, _helpers.isSet)(object.token) ? String(object.token) : "",
            amount: (0, _helpers.isSet)(object.amount) ? String(object.amount) : "",
            channel: (0, _helpers.isSet)(object.channel) ? String(object.channel) : "",
            timeoutTime: (0, _helpers.isSet)(object.timeoutTime) ? String(object.timeoutTime) : "",
            timeoutHeight: (0, _helpers.isSet)(object.timeoutHeight) ? String(object.timeoutHeight) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.token !== undefined && (obj.token = message.token);
        message.amount !== undefined && (obj.amount = message.amount);
        message.channel !== undefined && (obj.channel = message.channel);
        message.timeoutTime !== undefined && (obj.timeoutTime = message.timeoutTime);
        message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventSendToCosmosExecutedIbcAutoForward();
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        var _object_receiver;
        message.receiver = (_object_receiver = object.receiver) !== null && _object_receiver !== void 0 ? _object_receiver : "";
        var _object_token;
        message.token = (_object_token = object.token) !== null && _object_token !== void 0 ? _object_token : "";
        var _object_amount;
        message.amount = (_object_amount = object.amount) !== null && _object_amount !== void 0 ? _object_amount : "";
        var _object_channel;
        message.channel = (_object_channel = object.channel) !== null && _object_channel !== void 0 ? _object_channel : "";
        var _object_timeoutTime;
        message.timeoutTime = (_object_timeoutTime = object.timeoutTime) !== null && _object_timeoutTime !== void 0 ? _object_timeoutTime : "";
        var _object_timeoutHeight;
        message.timeoutHeight = (_object_timeoutHeight = object.timeoutHeight) !== null && _object_timeoutHeight !== void 0 ? _object_timeoutHeight : "";
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL2F0dGVzdGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBBbnkgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2dvb2dsZS9wcm90b2J1Zi9hbnlcIjtcbmltcG9ydCB7IGlzU2V0IH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZ3Jhdml0eS52MVwiO1xuLyoqXG4gKiBDbGFpbVR5cGUgaXMgdGhlIGNvc21vcyB0eXBlIG9mIGFuIGV2ZW50IGZyb20gdGhlIGNvdW50ZXJwYXJ0IGNoYWluIHRoYXQgY2FuXG4gKiBiZSBoYW5kbGVkXG4gKi9cblxuZXhwb3J0IGVudW0gQ2xhaW1UeXBlIHtcbiAgLyoqIENMQUlNX1RZUEVfVU5TUEVDSUZJRUQgLSBBbiB1bnNwZWNpZmllZCBjbGFpbSB0eXBlICovXG4gIENMQUlNX1RZUEVfVU5TUEVDSUZJRUQgPSAwLFxuXG4gIC8qKiBDTEFJTV9UWVBFX1NFTkRfVE9fQ09TTU9TIC0gQSBjbGFpbSBmb3IgYSBTZW5kVG9Db3Ntb3MgdHJhbnNhY3Rpb24gKi9cbiAgQ0xBSU1fVFlQRV9TRU5EX1RPX0NPU01PUyA9IDEsXG5cbiAgLyoqIENMQUlNX1RZUEVfQkFUQ0hfU0VORF9UT19FVEggLSBBIGNsYWltIGZvciB3aGVuIGJhdGNoZXMgYXJlIHJlbGF5ZWQgKi9cbiAgQ0xBSU1fVFlQRV9CQVRDSF9TRU5EX1RPX0VUSCA9IDIsXG5cbiAgLyoqIENMQUlNX1RZUEVfRVJDMjBfREVQTE9ZRUQgLSBBIGNsYWltIGZvciB3aGVuIGFuIGVyYzIwIGNvbnRyYWN0IGhhcyBiZWVuIGRlcGxveWVkICovXG4gIENMQUlNX1RZUEVfRVJDMjBfREVQTE9ZRUQgPSAzLFxuXG4gIC8qKiBDTEFJTV9UWVBFX0xPR0lDX0NBTExfRVhFQ1VURUQgLSBBIGNsYWltIGZvciB3aGVuIGEgbG9naWMgY2FsbCBoYXMgYmVlbiBleGVjdXRlZCAqL1xuICBDTEFJTV9UWVBFX0xPR0lDX0NBTExfRVhFQ1VURUQgPSA0LFxuXG4gIC8qKiBDTEFJTV9UWVBFX1ZBTFNFVF9VUERBVEVEIC0gQSBjbGFpbSBmb3Igd2hlbiBhIHZhbHNldCB1cGRhdGUgaGFzIGhhcHBlbmVkICovXG4gIENMQUlNX1RZUEVfVkFMU0VUX1VQREFURUQgPSA1LFxuICBVTlJFQ09HTklaRUQgPSAtMSxcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGFpbVR5cGVGcm9tSlNPTihvYmplY3Q6IGFueSk6IENsYWltVHlwZSB7XG4gIHN3aXRjaCAob2JqZWN0KSB7XG4gICAgY2FzZSAwOlxuICAgIGNhc2UgXCJDTEFJTV9UWVBFX1VOU1BFQ0lGSUVEXCI6XG4gICAgICByZXR1cm4gQ2xhaW1UeXBlLkNMQUlNX1RZUEVfVU5TUEVDSUZJRUQ7XG5cbiAgICBjYXNlIDE6XG4gICAgY2FzZSBcIkNMQUlNX1RZUEVfU0VORF9UT19DT1NNT1NcIjpcbiAgICAgIHJldHVybiBDbGFpbVR5cGUuQ0xBSU1fVFlQRV9TRU5EX1RPX0NPU01PUztcblxuICAgIGNhc2UgMjpcbiAgICBjYXNlIFwiQ0xBSU1fVFlQRV9CQVRDSF9TRU5EX1RPX0VUSFwiOlxuICAgICAgcmV0dXJuIENsYWltVHlwZS5DTEFJTV9UWVBFX0JBVENIX1NFTkRfVE9fRVRIO1xuXG4gICAgY2FzZSAzOlxuICAgIGNhc2UgXCJDTEFJTV9UWVBFX0VSQzIwX0RFUExPWUVEXCI6XG4gICAgICByZXR1cm4gQ2xhaW1UeXBlLkNMQUlNX1RZUEVfRVJDMjBfREVQTE9ZRUQ7XG5cbiAgICBjYXNlIDQ6XG4gICAgY2FzZSBcIkNMQUlNX1RZUEVfTE9HSUNfQ0FMTF9FWEVDVVRFRFwiOlxuICAgICAgcmV0dXJuIENsYWltVHlwZS5DTEFJTV9UWVBFX0xPR0lDX0NBTExfRVhFQ1VURUQ7XG5cbiAgICBjYXNlIDU6XG4gICAgY2FzZSBcIkNMQUlNX1RZUEVfVkFMU0VUX1VQREFURURcIjpcbiAgICAgIHJldHVybiBDbGFpbVR5cGUuQ0xBSU1fVFlQRV9WQUxTRVRfVVBEQVRFRDtcblxuICAgIGNhc2UgLTE6XG4gICAgY2FzZSBcIlVOUkVDT0dOSVpFRFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gQ2xhaW1UeXBlLlVOUkVDT0dOSVpFRDtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNsYWltVHlwZVRvSlNPTihvYmplY3Q6IENsYWltVHlwZSk6IHN0cmluZyB7XG4gIHN3aXRjaCAob2JqZWN0KSB7XG4gICAgY2FzZSBDbGFpbVR5cGUuQ0xBSU1fVFlQRV9VTlNQRUNJRklFRDpcbiAgICAgIHJldHVybiBcIkNMQUlNX1RZUEVfVU5TUEVDSUZJRURcIjtcblxuICAgIGNhc2UgQ2xhaW1UeXBlLkNMQUlNX1RZUEVfU0VORF9UT19DT1NNT1M6XG4gICAgICByZXR1cm4gXCJDTEFJTV9UWVBFX1NFTkRfVE9fQ09TTU9TXCI7XG5cbiAgICBjYXNlIENsYWltVHlwZS5DTEFJTV9UWVBFX0JBVENIX1NFTkRfVE9fRVRIOlxuICAgICAgcmV0dXJuIFwiQ0xBSU1fVFlQRV9CQVRDSF9TRU5EX1RPX0VUSFwiO1xuXG4gICAgY2FzZSBDbGFpbVR5cGUuQ0xBSU1fVFlQRV9FUkMyMF9ERVBMT1lFRDpcbiAgICAgIHJldHVybiBcIkNMQUlNX1RZUEVfRVJDMjBfREVQTE9ZRURcIjtcblxuICAgIGNhc2UgQ2xhaW1UeXBlLkNMQUlNX1RZUEVfTE9HSUNfQ0FMTF9FWEVDVVRFRDpcbiAgICAgIHJldHVybiBcIkNMQUlNX1RZUEVfTE9HSUNfQ0FMTF9FWEVDVVRFRFwiO1xuXG4gICAgY2FzZSBDbGFpbVR5cGUuQ0xBSU1fVFlQRV9WQUxTRVRfVVBEQVRFRDpcbiAgICAgIHJldHVybiBcIkNMQUlNX1RZUEVfVkFMU0VUX1VQREFURURcIjtcblxuICAgIGNhc2UgQ2xhaW1UeXBlLlVOUkVDT0dOSVpFRDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiVU5SRUNPR05JWkVEXCI7XG4gIH1cbn1cbi8qKlxuICogQXR0ZXN0YXRpb24gaXMgYW4gYWdncmVnYXRlIG9mIGBjbGFpbXNgIHRoYXQgZXZlbnR1YWxseSBiZWNvbWVzIGBvYnNlcnZlZGAgYnlcbiAqIGFsbCBvcmNoZXN0cmF0b3JzXG4gKiBFVkVOVF9OT05DRTpcbiAqIEV2ZW50Tm9uY2UgYSBub25jZSBwcm92aWRlZCBieSB0aGUgZ3Jhdml0eSBjb250cmFjdCB0aGF0IGlzIHVuaXF1ZSBwZXIgZXZlbnQgZmlyZWRcbiAqIFRoZXNlIGV2ZW50IG5vbmNlcyBtdXN0IGJlIHJlbGF5ZWQgaW4gb3JkZXIuIFRoaXMgaXMgYSBjb3JyZWN0bmVzcyBpc3N1ZSxcbiAqIGlmIHJlbGF5aW5nIG91dCBvZiBvcmRlciB0cmFuc2FjdGlvbiByZXBsYXkgYXR0YWNrcyBiZWNvbWUgcG9zc2libGVcbiAqIE9CU0VSVkVEOlxuICogT2JzZXJ2ZWQgaW5kaWNhdGVzIHRoYXQgPjY3JSBvZiB2YWxpZGF0b3JzIGhhdmUgYXR0ZXN0ZWQgdG8gdGhlIGV2ZW50LFxuICogYW5kIHRoYXQgdGhlIGV2ZW50IHNob3VsZCBiZSBleGVjdXRlZCBieSB0aGUgZ3Jhdml0eSBzdGF0ZSBtYWNoaW5lXG4gKlxuICogVGhlIGFjdHVhbCBjb250ZW50IG9mIHRoZSBjbGFpbXMgaXMgcGFzc2VkIGluIHdpdGggdGhlIHRyYW5zYWN0aW9uIG1ha2luZyB0aGUgY2xhaW1cbiAqIGFuZCB0aGVuIHBhc3NlZCB0aHJvdWdoIHRoZSBjYWxsIHN0YWNrIGFsb25nc2lkZSB0aGUgYXR0ZXN0YXRpb24gd2hpbGUgaXQgaXMgcHJvY2Vzc2VkXG4gKiB0aGUga2V5IGluIHdoaWNoIHRoZSBhdHRlc3RhdGlvbiBpcyBzdG9yZWQgaXMga2V5ZWQgb24gdGhlIGV4YWN0IGRldGFpbHMgb2YgdGhlIGNsYWltXG4gKiBidXQgdGhlcmUgaXMgbm8gcmVhc29uIHRvIHN0b3JlIHRob3NlIGV4YWN0IGRldGFpbHMgYmVjdWF1c2UgdGhlIG5leHQgbWVzc2FnZSBzZW5kZXJcbiAqIHdpbGwga2luZGx5IHByb3ZpZGUgeW91IHdpdGggdGhlbS5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEF0dGVzdGF0aW9uIHtcbiAgb2JzZXJ2ZWQ6IGJvb2xlYW47XG4gIHZvdGVzOiBzdHJpbmdbXTtcbiAgaGVpZ2h0OiBiaWdpbnQ7XG4gIGNsYWltPzogQW55O1xufVxuLyoqXG4gKiBFUkMyMFRva2VuIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBhbiBFdGhlcmV1bSBFUkMyMCB0b2tlbi5cbiAqIENPTlRSQUNUOlxuICogVGhlIGNvbnRyYWN0IGFkZHJlc3Mgb24gRVRIIG9mIHRoZSB0b2tlbiwgdGhpcyBjb3VsZCBiZSBhIENvc21vc1xuICogb3JpZ2luYXRlZCB0b2tlbiwgaWYgc28gaXQgd2lsbCBiZSB0aGUgRVJDMjAgYWRkcmVzcyBvZiB0aGUgcmVwcmVzZW50YXRpb25cbiAqIChub3RlOiBkZXZlbG9wZXJzIHNob3VsZCBsb29rIHVwIHRoZSB0b2tlbiBzeW1ib2wgdXNpbmcgdGhlIGFkZHJlc3Mgb24gRVRIIHRvIGRpc3BsYXkgZm9yIFVJKVxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRVJDMjBUb2tlbiB7XG4gIGNvbnRyYWN0OiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudE9ic2VydmF0aW9uIHtcbiAgYXR0ZXN0YXRpb25UeXBlOiBzdHJpbmc7XG4gIGJyaWRnZUNvbnRyYWN0OiBzdHJpbmc7XG4gIGJyaWRnZUNoYWluSWQ6IHN0cmluZztcbiAgYXR0ZXN0YXRpb25JZDogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudEludmFsaWRTZW5kVG9Db3Ntb3NSZWNlaXZlciB7XG4gIGFtb3VudDogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICBzZW5kZXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTZW5kVG9Db3Ntb3Mge1xuICBhbW91bnQ6IHN0cmluZztcbiAgbm9uY2U6IHN0cmluZztcbiAgdG9rZW46IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRTZW5kVG9Db3Ntb3NMb2NhbCB7XG4gIG5vbmNlOiBzdHJpbmc7XG4gIHJlY2VpdmVyOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudFNlbmRUb0Nvc21vc1BlbmRpbmdJYmNBdXRvRm9yd2FyZCB7XG4gIG5vbmNlOiBzdHJpbmc7XG4gIHJlY2VpdmVyOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xuICBjaGFubmVsOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50U2VuZFRvQ29zbW9zRXhlY3V0ZWRJYmNBdXRvRm9yd2FyZCB7XG4gIG5vbmNlOiBzdHJpbmc7XG4gIHJlY2VpdmVyOiBzdHJpbmc7XG4gIHRva2VuOiBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xuICBjaGFubmVsOiBzdHJpbmc7XG4gIHRpbWVvdXRUaW1lOiBzdHJpbmc7XG4gIHRpbWVvdXRIZWlnaHQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzZUF0dGVzdGF0aW9uKCk6IEF0dGVzdGF0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICBvYnNlcnZlZDogZmFsc2UsXG4gICAgdm90ZXM6IFtdLFxuICAgIGhlaWdodDogQmlnSW50KDApLFxuICAgIGNsYWltOiB1bmRlZmluZWQsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBBdHRlc3RhdGlvbiA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEF0dGVzdGF0aW9uLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uub2JzZXJ2ZWQgPT09IHRydWUpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkuYm9vbChtZXNzYWdlLm9ic2VydmVkKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS52b3Rlcykge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKHYhKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5oZWlnaHQgIT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI0KS51aW50NjQobWVzc2FnZS5oZWlnaHQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNsYWltICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEFueS5lbmNvZGUobWVzc2FnZS5jbGFpbSwgd3JpdGVyLnVpbnQzMigzNCkuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogQXR0ZXN0YXRpb24ge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VBdHRlc3RhdGlvbigpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uub2JzZXJ2ZWQgPSByZWFkZXIuYm9vbCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnZvdGVzLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5oZWlnaHQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuY2xhaW0gPSBBbnkuZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEF0dGVzdGF0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2JzZXJ2ZWQ6IGlzU2V0KG9iamVjdC5vYnNlcnZlZCkgPyBCb29sZWFuKG9iamVjdC5vYnNlcnZlZCkgOiBmYWxzZSxcbiAgICAgIHZvdGVzOiBBcnJheS5pc0FycmF5KG9iamVjdD8udm90ZXMpXG4gICAgICAgID8gb2JqZWN0LnZvdGVzLm1hcCgoZTogYW55KSA9PiBTdHJpbmcoZSkpXG4gICAgICAgIDogW10sXG4gICAgICBoZWlnaHQ6IGlzU2V0KG9iamVjdC5oZWlnaHQpID8gQmlnSW50KG9iamVjdC5oZWlnaHQpIDogQmlnSW50KDApLFxuICAgICAgY2xhaW06IGlzU2V0KG9iamVjdC5jbGFpbSkgPyBBbnkuZnJvbUpTT04ob2JqZWN0LmNsYWltKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBBdHRlc3RhdGlvbik6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5vYnNlcnZlZCAhPT0gdW5kZWZpbmVkICYmIChvYmoub2JzZXJ2ZWQgPSBtZXNzYWdlLm9ic2VydmVkKTtcblxuICAgIGlmIChtZXNzYWdlLnZvdGVzKSB7XG4gICAgICBvYmoudm90ZXMgPSBtZXNzYWdlLnZvdGVzLm1hcCgoZSkgPT4gZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai52b3RlcyA9IFtdO1xuICAgIH1cblxuICAgIG1lc3NhZ2UuaGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaGVpZ2h0ID0gKG1lc3NhZ2UuaGVpZ2h0IHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS5jbGFpbSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmNsYWltID0gbWVzc2FnZS5jbGFpbSA/IEFueS50b0pTT04obWVzc2FnZS5jbGFpbSkgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEF0dGVzdGF0aW9uPik6IEF0dGVzdGF0aW9uIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUF0dGVzdGF0aW9uKCk7XG4gICAgbWVzc2FnZS5vYnNlcnZlZCA9IG9iamVjdC5vYnNlcnZlZCA/PyBmYWxzZTtcbiAgICBtZXNzYWdlLnZvdGVzID0gb2JqZWN0LnZvdGVzPy5tYXAoKGUpID0+IGUpIHx8IFtdO1xuICAgIG1lc3NhZ2UuaGVpZ2h0ID1cbiAgICAgIG9iamVjdC5oZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaGVpZ2h0ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5oZWlnaHQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UuY2xhaW0gPVxuICAgICAgb2JqZWN0LmNsYWltICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNsYWltICE9PSBudWxsXG4gICAgICAgID8gQW55LmZyb21QYXJ0aWFsKG9iamVjdC5jbGFpbSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRVJDMjBUb2tlbigpOiBFUkMyMFRva2VuIHtcbiAgcmV0dXJuIHtcbiAgICBjb250cmFjdDogXCJcIixcbiAgICBhbW91bnQ6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFUkMyMFRva2VuID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRVJDMjBUb2tlbixcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5jb250cmFjdCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5hbW91bnQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFUkMyMFRva2VuIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRVJDMjBUb2tlbigpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYW1vdW50ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRVJDMjBUb2tlbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRyYWN0OiBpc1NldChvYmplY3QuY29udHJhY3QpID8gU3RyaW5nKG9iamVjdC5jb250cmFjdCkgOiBcIlwiLFxuICAgICAgYW1vdW50OiBpc1NldChvYmplY3QuYW1vdW50KSA/IFN0cmluZyhvYmplY3QuYW1vdW50KSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRVJDMjBUb2tlbik6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5jb250cmFjdCAhPT0gdW5kZWZpbmVkICYmIChvYmouY29udHJhY3QgPSBtZXNzYWdlLmNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIChvYmouYW1vdW50ID0gbWVzc2FnZS5hbW91bnQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEVSQzIwVG9rZW4+KTogRVJDMjBUb2tlbiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFUkMyMFRva2VuKCk7XG4gICAgbWVzc2FnZS5jb250cmFjdCA9IG9iamVjdC5jb250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYW1vdW50ID0gb2JqZWN0LmFtb3VudCA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50T2JzZXJ2YXRpb24oKTogRXZlbnRPYnNlcnZhdGlvbiB7XG4gIHJldHVybiB7XG4gICAgYXR0ZXN0YXRpb25UeXBlOiBcIlwiLFxuICAgIGJyaWRnZUNvbnRyYWN0OiBcIlwiLFxuICAgIGJyaWRnZUNoYWluSWQ6IFwiXCIsXG4gICAgYXR0ZXN0YXRpb25JZDogXCJcIixcbiAgICBub25jZTogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50T2JzZXJ2YXRpb24gPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBFdmVudE9ic2VydmF0aW9uLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYXR0ZXN0YXRpb25UeXBlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5hdHRlc3RhdGlvblR5cGUpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDb250cmFjdCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYXR0ZXN0YXRpb25JZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2UuYXR0ZXN0YXRpb25JZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDIpLnN0cmluZyhtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogRXZlbnRPYnNlcnZhdGlvbiB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50T2JzZXJ2YXRpb24oKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmF0dGVzdGF0aW9uVHlwZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLmF0dGVzdGF0aW9uSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudE9ic2VydmF0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0ZXN0YXRpb25UeXBlOiBpc1NldChvYmplY3QuYXR0ZXN0YXRpb25UeXBlKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYXR0ZXN0YXRpb25UeXBlKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBicmlkZ2VDb250cmFjdDogaXNTZXQob2JqZWN0LmJyaWRnZUNvbnRyYWN0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgIDogXCJcIixcbiAgICAgIGJyaWRnZUNoYWluSWQ6IGlzU2V0KG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ2hhaW5JZClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgYXR0ZXN0YXRpb25JZDogaXNTZXQob2JqZWN0LmF0dGVzdGF0aW9uSWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5hdHRlc3RhdGlvbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBub25jZTogaXNTZXQob2JqZWN0Lm5vbmNlKSA/IFN0cmluZyhvYmplY3Qubm9uY2UpIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdmVudE9ic2VydmF0aW9uKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmF0dGVzdGF0aW9uVHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmF0dGVzdGF0aW9uVHlwZSA9IG1lc3NhZ2UuYXR0ZXN0YXRpb25UeXBlKTtcbiAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ29udHJhY3QgPSBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VDaGFpbklkID0gbWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICBtZXNzYWdlLmF0dGVzdGF0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5hdHRlc3RhdGlvbklkID0gbWVzc2FnZS5hdHRlc3RhdGlvbklkKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEV2ZW50T2JzZXJ2YXRpb24+KTogRXZlbnRPYnNlcnZhdGlvbiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudE9ic2VydmF0aW9uKCk7XG4gICAgbWVzc2FnZS5hdHRlc3RhdGlvblR5cGUgPSBvYmplY3QuYXR0ZXN0YXRpb25UeXBlID8/IFwiXCI7XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IG9iamVjdC5icmlkZ2VDb250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IG9iamVjdC5icmlkZ2VDaGFpbklkID8/IFwiXCI7XG4gICAgbWVzc2FnZS5hdHRlc3RhdGlvbklkID0gb2JqZWN0LmF0dGVzdGF0aW9uSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm5vbmNlID0gb2JqZWN0Lm5vbmNlID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnRJbnZhbGlkU2VuZFRvQ29zbW9zUmVjZWl2ZXIoKTogRXZlbnRJbnZhbGlkU2VuZFRvQ29zbW9zUmVjZWl2ZXIge1xuICByZXR1cm4ge1xuICAgIGFtb3VudDogXCJcIixcbiAgICBub25jZTogXCJcIixcbiAgICB0b2tlbjogXCJcIixcbiAgICBzZW5kZXI6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudEludmFsaWRTZW5kVG9Db3Ntb3NSZWNlaXZlciA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50SW52YWxpZFNlbmRUb0Nvc21vc1JlY2VpdmVyLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5hbW91bnQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5ub25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudG9rZW4gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLnRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5zZW5kZXIgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLnNlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50SW52YWxpZFNlbmRUb0Nvc21vc1JlY2VpdmVyIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRJbnZhbGlkU2VuZFRvQ29zbW9zUmVjZWl2ZXIoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmFtb3VudCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS50b2tlbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudEludmFsaWRTZW5kVG9Db3Ntb3NSZWNlaXZlciB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFtb3VudDogaXNTZXQob2JqZWN0LmFtb3VudCkgPyBTdHJpbmcob2JqZWN0LmFtb3VudCkgOiBcIlwiLFxuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBTdHJpbmcob2JqZWN0Lm5vbmNlKSA6IFwiXCIsXG4gICAgICB0b2tlbjogaXNTZXQob2JqZWN0LnRva2VuKSA/IFN0cmluZyhvYmplY3QudG9rZW4pIDogXCJcIixcbiAgICAgIHNlbmRlcjogaXNTZXQob2JqZWN0LnNlbmRlcikgPyBTdHJpbmcob2JqZWN0LnNlbmRlcikgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50SW52YWxpZFNlbmRUb0Nvc21vc1JlY2VpdmVyKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIChvYmouYW1vdW50ID0gbWVzc2FnZS5hbW91bnQpO1xuICAgIG1lc3NhZ2Uubm9uY2UgIT09IHVuZGVmaW5lZCAmJiAob2JqLm5vbmNlID0gbWVzc2FnZS5ub25jZSk7XG4gICAgbWVzc2FnZS50b2tlbiAhPT0gdW5kZWZpbmVkICYmIChvYmoudG9rZW4gPSBtZXNzYWdlLnRva2VuKTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50SW52YWxpZFNlbmRUb0Nvc21vc1JlY2VpdmVyPlxuICApOiBFdmVudEludmFsaWRTZW5kVG9Db3Ntb3NSZWNlaXZlciB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudEludmFsaWRTZW5kVG9Db3Ntb3NSZWNlaXZlcigpO1xuICAgIG1lc3NhZ2UuYW1vdW50ID0gb2JqZWN0LmFtb3VudCA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnRva2VuID0gb2JqZWN0LnRva2VuID8/IFwiXCI7XG4gICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnRTZW5kVG9Db3Ntb3MoKTogRXZlbnRTZW5kVG9Db3Ntb3Mge1xuICByZXR1cm4ge1xuICAgIGFtb3VudDogXCJcIixcbiAgICBub25jZTogXCJcIixcbiAgICB0b2tlbjogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50U2VuZFRvQ29zbW9zID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRTZW5kVG9Db3Ntb3MsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5hbW91bnQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmFtb3VudCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50b2tlbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKG1lc3NhZ2UudG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBFdmVudFNlbmRUb0Nvc21vcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50U2VuZFRvQ29zbW9zKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5hbW91bnQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UudG9rZW4gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFNlbmRUb0Nvc21vcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFtb3VudDogaXNTZXQob2JqZWN0LmFtb3VudCkgPyBTdHJpbmcob2JqZWN0LmFtb3VudCkgOiBcIlwiLFxuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBTdHJpbmcob2JqZWN0Lm5vbmNlKSA6IFwiXCIsXG4gICAgICB0b2tlbjogaXNTZXQob2JqZWN0LnRva2VuKSA/IFN0cmluZyhvYmplY3QudG9rZW4pIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBFdmVudFNlbmRUb0Nvc21vcyk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFtb3VudCA9IG1lc3NhZ2UuYW1vdW50KTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIG1lc3NhZ2UudG9rZW4gIT09IHVuZGVmaW5lZCAmJiAob2JqLnRva2VuID0gbWVzc2FnZS50b2tlbik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8RXZlbnRTZW5kVG9Db3Ntb3M+KTogRXZlbnRTZW5kVG9Db3Ntb3Mge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRTZW5kVG9Db3Ntb3MoKTtcbiAgICBtZXNzYWdlLmFtb3VudCA9IG9iamVjdC5hbW91bnQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm5vbmNlID0gb2JqZWN0Lm5vbmNlID8/IFwiXCI7XG4gICAgbWVzc2FnZS50b2tlbiA9IG9iamVjdC50b2tlbiA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50U2VuZFRvQ29zbW9zTG9jYWwoKTogRXZlbnRTZW5kVG9Db3Ntb3NMb2NhbCB7XG4gIHJldHVybiB7XG4gICAgbm9uY2U6IFwiXCIsXG4gICAgcmVjZWl2ZXI6IFwiXCIsXG4gICAgdG9rZW46IFwiXCIsXG4gICAgYW1vdW50OiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRTZW5kVG9Db3Ntb3NMb2NhbCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50U2VuZFRvQ29zbW9zTG9jYWwsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnJlY2VpdmVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5yZWNlaXZlcik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudG9rZW4gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLnRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5hbW91bnQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLmFtb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50U2VuZFRvQ29zbW9zTG9jYWwge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFNlbmRUb0Nvc21vc0xvY2FsKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5yZWNlaXZlciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS50b2tlbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5hbW91bnQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFNlbmRUb0Nvc21vc0xvY2FsIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBTdHJpbmcob2JqZWN0Lm5vbmNlKSA6IFwiXCIsXG4gICAgICByZWNlaXZlcjogaXNTZXQob2JqZWN0LnJlY2VpdmVyKSA/IFN0cmluZyhvYmplY3QucmVjZWl2ZXIpIDogXCJcIixcbiAgICAgIHRva2VuOiBpc1NldChvYmplY3QudG9rZW4pID8gU3RyaW5nKG9iamVjdC50b2tlbikgOiBcIlwiLFxuICAgICAgYW1vdW50OiBpc1NldChvYmplY3QuYW1vdW50KSA/IFN0cmluZyhvYmplY3QuYW1vdW50KSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRXZlbnRTZW5kVG9Db3Ntb3NMb2NhbCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubm9uY2UgPSBtZXNzYWdlLm5vbmNlKTtcbiAgICBtZXNzYWdlLnJlY2VpdmVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5yZWNlaXZlciA9IG1lc3NhZ2UucmVjZWl2ZXIpO1xuICAgIG1lc3NhZ2UudG9rZW4gIT09IHVuZGVmaW5lZCAmJiAob2JqLnRva2VuID0gbWVzc2FnZS50b2tlbik7XG4gICAgbWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFtb3VudCA9IG1lc3NhZ2UuYW1vdW50KTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxFdmVudFNlbmRUb0Nvc21vc0xvY2FsPik6IEV2ZW50U2VuZFRvQ29zbW9zTG9jYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRTZW5kVG9Db3Ntb3NMb2NhbCgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnJlY2VpdmVyID0gb2JqZWN0LnJlY2VpdmVyID8/IFwiXCI7XG4gICAgbWVzc2FnZS50b2tlbiA9IG9iamVjdC50b2tlbiA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYW1vdW50ID0gb2JqZWN0LmFtb3VudCA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkKCk6IEV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkIHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogXCJcIixcbiAgICByZWNlaXZlcjogXCJcIixcbiAgICB0b2tlbjogXCJcIixcbiAgICBhbW91bnQ6IFwiXCIsXG4gICAgY2hhbm5lbDogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRTZW5kVG9Db3Ntb3NQZW5kaW5nSWJjQXV0b0ZvcndhcmQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnJlY2VpdmVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5yZWNlaXZlcik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudG9rZW4gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLnRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5hbW91bnQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLmFtb3VudCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuY2hhbm5lbCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMig0Mikuc3RyaW5nKG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRTZW5kVG9Db3Ntb3NQZW5kaW5nSWJjQXV0b0ZvcndhcmQoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLm5vbmNlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnJlY2VpdmVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLnRva2VuID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLmFtb3VudCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5jaGFubmVsID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRXZlbnRTZW5kVG9Db3Ntb3NQZW5kaW5nSWJjQXV0b0ZvcndhcmQge1xuICAgIHJldHVybiB7XG4gICAgICBub25jZTogaXNTZXQob2JqZWN0Lm5vbmNlKSA/IFN0cmluZyhvYmplY3Qubm9uY2UpIDogXCJcIixcbiAgICAgIHJlY2VpdmVyOiBpc1NldChvYmplY3QucmVjZWl2ZXIpID8gU3RyaW5nKG9iamVjdC5yZWNlaXZlcikgOiBcIlwiLFxuICAgICAgdG9rZW46IGlzU2V0KG9iamVjdC50b2tlbikgPyBTdHJpbmcob2JqZWN0LnRva2VuKSA6IFwiXCIsXG4gICAgICBhbW91bnQ6IGlzU2V0KG9iamVjdC5hbW91bnQpID8gU3RyaW5nKG9iamVjdC5hbW91bnQpIDogXCJcIixcbiAgICAgIGNoYW5uZWw6IGlzU2V0KG9iamVjdC5jaGFubmVsKSA/IFN0cmluZyhvYmplY3QuY2hhbm5lbCkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIG1lc3NhZ2UucmVjZWl2ZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLnJlY2VpdmVyID0gbWVzc2FnZS5yZWNlaXZlcik7XG4gICAgbWVzc2FnZS50b2tlbiAhPT0gdW5kZWZpbmVkICYmIChvYmoudG9rZW4gPSBtZXNzYWdlLnRva2VuKTtcbiAgICBtZXNzYWdlLmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIChvYmouYW1vdW50ID0gbWVzc2FnZS5hbW91bnQpO1xuICAgIG1lc3NhZ2UuY2hhbm5lbCAhPT0gdW5kZWZpbmVkICYmIChvYmouY2hhbm5lbCA9IG1lc3NhZ2UuY2hhbm5lbCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8RXZlbnRTZW5kVG9Db3Ntb3NQZW5kaW5nSWJjQXV0b0ZvcndhcmQ+XG4gICk6IEV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkKCk7XG4gICAgbWVzc2FnZS5ub25jZSA9IG9iamVjdC5ub25jZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UucmVjZWl2ZXIgPSBvYmplY3QucmVjZWl2ZXIgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnRva2VuID0gb2JqZWN0LnRva2VuID8/IFwiXCI7XG4gICAgbWVzc2FnZS5hbW91bnQgPSBvYmplY3QuYW1vdW50ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5jaGFubmVsID0gb2JqZWN0LmNoYW5uZWwgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFNlbmRUb0Nvc21vc0V4ZWN1dGVkSWJjQXV0b0ZvcndhcmQoKTogRXZlbnRTZW5kVG9Db3Ntb3NFeGVjdXRlZEliY0F1dG9Gb3J3YXJkIHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogXCJcIixcbiAgICByZWNlaXZlcjogXCJcIixcbiAgICB0b2tlbjogXCJcIixcbiAgICBhbW91bnQ6IFwiXCIsXG4gICAgY2hhbm5lbDogXCJcIixcbiAgICB0aW1lb3V0VGltZTogXCJcIixcbiAgICB0aW1lb3V0SGVpZ2h0OiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRTZW5kVG9Db3Ntb3NFeGVjdXRlZEliY0F1dG9Gb3J3YXJkID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRTZW5kVG9Db3Ntb3NFeGVjdXRlZEliY0F1dG9Gb3J3YXJkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5yZWNlaXZlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UucmVjZWl2ZXIpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnRva2VuICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS50b2tlbik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS5hbW91bnQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNoYW5uZWwgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDIpLnN0cmluZyhtZXNzYWdlLmNoYW5uZWwpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnRpbWVvdXRUaW1lICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDUwKS5zdHJpbmcobWVzc2FnZS50aW1lb3V0VGltZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudGltZW91dEhlaWdodCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMig1OCkuc3RyaW5nKG1lc3NhZ2UudGltZW91dEhlaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50U2VuZFRvQ29zbW9zRXhlY3V0ZWRJYmNBdXRvRm9yd2FyZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50U2VuZFRvQ29zbW9zRXhlY3V0ZWRJYmNBdXRvRm9yd2FyZCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UucmVjZWl2ZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UudG9rZW4gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuYW1vdW50ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIG1lc3NhZ2UudGltZW91dFRpbWUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIG1lc3NhZ2UudGltZW91dEhlaWdodCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50U2VuZFRvQ29zbW9zRXhlY3V0ZWRJYmNBdXRvRm9yd2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgICAgcmVjZWl2ZXI6IGlzU2V0KG9iamVjdC5yZWNlaXZlcikgPyBTdHJpbmcob2JqZWN0LnJlY2VpdmVyKSA6IFwiXCIsXG4gICAgICB0b2tlbjogaXNTZXQob2JqZWN0LnRva2VuKSA/IFN0cmluZyhvYmplY3QudG9rZW4pIDogXCJcIixcbiAgICAgIGFtb3VudDogaXNTZXQob2JqZWN0LmFtb3VudCkgPyBTdHJpbmcob2JqZWN0LmFtb3VudCkgOiBcIlwiLFxuICAgICAgY2hhbm5lbDogaXNTZXQob2JqZWN0LmNoYW5uZWwpID8gU3RyaW5nKG9iamVjdC5jaGFubmVsKSA6IFwiXCIsXG4gICAgICB0aW1lb3V0VGltZTogaXNTZXQob2JqZWN0LnRpbWVvdXRUaW1lKSA/IFN0cmluZyhvYmplY3QudGltZW91dFRpbWUpIDogXCJcIixcbiAgICAgIHRpbWVvdXRIZWlnaHQ6IGlzU2V0KG9iamVjdC50aW1lb3V0SGVpZ2h0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QudGltZW91dEhlaWdodClcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50U2VuZFRvQ29zbW9zRXhlY3V0ZWRJYmNBdXRvRm9yd2FyZCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5ub25jZSAhPT0gdW5kZWZpbmVkICYmIChvYmoubm9uY2UgPSBtZXNzYWdlLm5vbmNlKTtcbiAgICBtZXNzYWdlLnJlY2VpdmVyICE9PSB1bmRlZmluZWQgJiYgKG9iai5yZWNlaXZlciA9IG1lc3NhZ2UucmVjZWl2ZXIpO1xuICAgIG1lc3NhZ2UudG9rZW4gIT09IHVuZGVmaW5lZCAmJiAob2JqLnRva2VuID0gbWVzc2FnZS50b2tlbik7XG4gICAgbWVzc2FnZS5hbW91bnQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFtb3VudCA9IG1lc3NhZ2UuYW1vdW50KTtcbiAgICBtZXNzYWdlLmNoYW5uZWwgIT09IHVuZGVmaW5lZCAmJiAob2JqLmNoYW5uZWwgPSBtZXNzYWdlLmNoYW5uZWwpO1xuICAgIG1lc3NhZ2UudGltZW91dFRpbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50aW1lb3V0VGltZSA9IG1lc3NhZ2UudGltZW91dFRpbWUpO1xuICAgIG1lc3NhZ2UudGltZW91dEhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnRpbWVvdXRIZWlnaHQgPSBtZXNzYWdlLnRpbWVvdXRIZWlnaHQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50U2VuZFRvQ29zbW9zRXhlY3V0ZWRJYmNBdXRvRm9yd2FyZD5cbiAgKTogRXZlbnRTZW5kVG9Db3Ntb3NFeGVjdXRlZEliY0F1dG9Gb3J3YXJkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50U2VuZFRvQ29zbW9zRXhlY3V0ZWRJYmNBdXRvRm9yd2FyZCgpO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnJlY2VpdmVyID0gb2JqZWN0LnJlY2VpdmVyID8/IFwiXCI7XG4gICAgbWVzc2FnZS50b2tlbiA9IG9iamVjdC50b2tlbiA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYW1vdW50ID0gb2JqZWN0LmFtb3VudCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuY2hhbm5lbCA9IG9iamVjdC5jaGFubmVsID8/IFwiXCI7XG4gICAgbWVzc2FnZS50aW1lb3V0VGltZSA9IG9iamVjdC50aW1lb3V0VGltZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UudGltZW91dEhlaWdodCA9IG9iamVjdC50aW1lb3V0SGVpZ2h0ID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkF0dGVzdGF0aW9uIiwiRVJDMjBUb2tlbiIsIkV2ZW50SW52YWxpZFNlbmRUb0Nvc21vc1JlY2VpdmVyIiwiRXZlbnRPYnNlcnZhdGlvbiIsIkV2ZW50U2VuZFRvQ29zbW9zIiwiRXZlbnRTZW5kVG9Db3Ntb3NFeGVjdXRlZEliY0F1dG9Gb3J3YXJkIiwiRXZlbnRTZW5kVG9Db3Ntb3NMb2NhbCIsIkV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkIiwiY2xhaW1UeXBlRnJvbUpTT04iLCJjbGFpbVR5cGVUb0pTT04iLCJwcm90b2J1ZlBhY2thZ2UiLCJDbGFpbVR5cGUiLCJvYmplY3QiLCJjcmVhdGVCYXNlQXR0ZXN0YXRpb24iLCJvYnNlcnZlZCIsInZvdGVzIiwiaGVpZ2h0IiwiQmlnSW50IiwiY2xhaW0iLCJ1bmRlZmluZWQiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiQmluYXJ5V3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwiYm9vbCIsInYiLCJzdHJpbmciLCJ1aW50NjQiLCJBbnkiLCJmb3JrIiwibGRlbGltIiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJCaW5hcnlSZWFkZXIiLCJlbmQiLCJsZW4iLCJwb3MiLCJ0YWciLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsImlzU2V0IiwiQm9vbGVhbiIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImUiLCJTdHJpbmciLCJ0b0pTT04iLCJvYmoiLCJ0b1N0cmluZyIsImZyb21QYXJ0aWFsIiwiY3JlYXRlQmFzZUVSQzIwVG9rZW4iLCJjb250cmFjdCIsImFtb3VudCIsImNyZWF0ZUJhc2VFdmVudE9ic2VydmF0aW9uIiwiYXR0ZXN0YXRpb25UeXBlIiwiYnJpZGdlQ29udHJhY3QiLCJicmlkZ2VDaGFpbklkIiwiYXR0ZXN0YXRpb25JZCIsIm5vbmNlIiwiY3JlYXRlQmFzZUV2ZW50SW52YWxpZFNlbmRUb0Nvc21vc1JlY2VpdmVyIiwidG9rZW4iLCJzZW5kZXIiLCJjcmVhdGVCYXNlRXZlbnRTZW5kVG9Db3Ntb3MiLCJjcmVhdGVCYXNlRXZlbnRTZW5kVG9Db3Ntb3NMb2NhbCIsInJlY2VpdmVyIiwiY3JlYXRlQmFzZUV2ZW50U2VuZFRvQ29zbW9zUGVuZGluZ0liY0F1dG9Gb3J3YXJkIiwiY2hhbm5lbCIsImNyZWF0ZUJhc2VFdmVudFNlbmRUb0Nvc21vc0V4ZWN1dGVkSWJjQXV0b0ZvcndhcmQiLCJ0aW1lb3V0VGltZSIsInRpbWVvdXRIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7Ozs7Ozs7Ozs7SUE2S0xBLFdBQVc7ZUFBWEE7Ozs7O0lBOEdBQyxVQUFVO2VB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
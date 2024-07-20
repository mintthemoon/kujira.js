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
    AirdropProposal: function() {
        return AirdropProposal;
    },
    BridgeValidator: function() {
        return BridgeValidator;
    },
    ERC20ToDenom: function() {
        return ERC20ToDenom;
    },
    IBCMetadataProposal: function() {
        return IBCMetadataProposal;
    },
    LastObservedEthereumBlockHeight: function() {
        return LastObservedEthereumBlockHeight;
    },
    PendingIbcAutoForward: function() {
        return PendingIbcAutoForward;
    },
    UnhaltBridgeProposal: function() {
        return UnhaltBridgeProposal;
    },
    Valset: function() {
        return Valset;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _bank = require("cosmjs-types/cosmos/bank/v1beta1/bank");
const _coin = require("cosmjs-types/cosmos/base/v1beta1/coin");
const _helpers = require("./helpers");
const protobufPackage = "gravity.v1";
function createBaseBridgeValidator() {
    return {
        power: BigInt(0),
        ethereumAddress: ""
    };
}
const BridgeValidator = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.power !== BigInt(0)) {
            writer.uint32(8).uint64(message.power);
        }
        if (message.ethereumAddress !== "") {
            writer.uint32(18).string(message.ethereumAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBridgeValidator();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.power = reader.uint64();
                    break;
                case 2:
                    message.ethereumAddress = reader.string();
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
            power: (0, _helpers.isSet)(object.power) ? BigInt(object.power) : BigInt(0),
            ethereumAddress: (0, _helpers.isSet)(object.ethereumAddress) ? String(object.ethereumAddress) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
        message.ethereumAddress !== undefined && (obj.ethereumAddress = message.ethereumAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseBridgeValidator();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power) : BigInt(0);
        var _object_ethereumAddress;
        message.ethereumAddress = (_object_ethereumAddress = object.ethereumAddress) !== null && _object_ethereumAddress !== void 0 ? _object_ethereumAddress : "";
        return message;
    }
};
function createBaseValset() {
    return {
        nonce: BigInt(0),
        members: [],
        height: BigInt(0),
        rewardAmount: "",
        rewardToken: ""
    };
}
const Valset = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        for (const v of message.members){
            BridgeValidator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.rewardAmount !== "") {
            writer.uint32(34).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(42).string(message.rewardToken);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValset();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.members.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.rewardAmount = reader.string();
                    break;
                case 5:
                    message.rewardToken = reader.string();
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
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e)=>BridgeValidator.fromJSON(e)) : [],
            height: (0, _helpers.isSet)(object.height) ? BigInt(object.height) : BigInt(0),
            rewardAmount: (0, _helpers.isSet)(object.rewardAmount) ? String(object.rewardAmount) : "",
            rewardToken: (0, _helpers.isSet)(object.rewardToken) ? String(object.rewardToken) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        if (message.members) {
            obj.members = message.members.map((e)=>e ? BridgeValidator.toJSON(e) : undefined);
        } else {
            obj.members = [];
        }
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
        message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
        return obj;
    },
    fromPartial (object) {
        var _object_members;
        const message = createBaseValset();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce) : BigInt(0);
        message.members = ((_object_members = object.members) === null || _object_members === void 0 ? void 0 : _object_members.map((e)=>BridgeValidator.fromPartial(e))) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height) : BigInt(0);
        var _object_rewardAmount;
        message.rewardAmount = (_object_rewardAmount = object.rewardAmount) !== null && _object_rewardAmount !== void 0 ? _object_rewardAmount : "";
        var _object_rewardToken;
        message.rewardToken = (_object_rewardToken = object.rewardToken) !== null && _object_rewardToken !== void 0 ? _object_rewardToken : "";
        return message;
    }
};
function createBaseLastObservedEthereumBlockHeight() {
    return {
        cosmosBlockHeight: BigInt(0),
        ethereumBlockHeight: BigInt(0)
    };
}
const LastObservedEthereumBlockHeight = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.cosmosBlockHeight !== BigInt(0)) {
            writer.uint32(8).uint64(message.cosmosBlockHeight);
        }
        if (message.ethereumBlockHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.ethereumBlockHeight);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastObservedEthereumBlockHeight();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.cosmosBlockHeight = reader.uint64();
                    break;
                case 2:
                    message.ethereumBlockHeight = reader.uint64();
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
            cosmosBlockHeight: (0, _helpers.isSet)(object.cosmosBlockHeight) ? BigInt(object.cosmosBlockHeight) : BigInt(0),
            ethereumBlockHeight: (0, _helpers.isSet)(object.ethereumBlockHeight) ? BigInt(object.ethereumBlockHeight) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.cosmosBlockHeight !== undefined && (obj.cosmosBlockHeight = (message.cosmosBlockHeight || BigInt(0)).toString());
        message.ethereumBlockHeight !== undefined && (obj.ethereumBlockHeight = (message.ethereumBlockHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseLastObservedEthereumBlockHeight();
        message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? BigInt(object.cosmosBlockHeight) : BigInt(0);
        message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? BigInt(object.ethereumBlockHeight) : BigInt(0);
        return message;
    }
};
function createBaseERC20ToDenom() {
    return {
        erc20: "",
        denom: ""
    };
}
const ERC20ToDenom = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20ToDenom();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.erc20 = reader.string();
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
            erc20: (0, _helpers.isSet)(object.erc20) ? String(object.erc20) : "",
            denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.erc20 !== undefined && (obj.erc20 = message.erc20);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseERC20ToDenom();
        var _object_erc20;
        message.erc20 = (_object_erc20 = object.erc20) !== null && _object_erc20 !== void 0 ? _object_erc20 : "";
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        return message;
    }
};
function createBaseUnhaltBridgeProposal() {
    return {
        title: "",
        description: "",
        targetNonce: BigInt(0)
    };
}
const UnhaltBridgeProposal = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.targetNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.targetNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnhaltBridgeProposal();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.targetNonce = reader.uint64();
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
            title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
            description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
            targetNonce: (0, _helpers.isSet)(object.targetNonce) ? BigInt(object.targetNonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.targetNonce !== undefined && (obj.targetNonce = (message.targetNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseUnhaltBridgeProposal();
        var _object_title;
        message.title = (_object_title = object.title) !== null && _object_title !== void 0 ? _object_title : "";
        var _object_description;
        message.description = (_object_description = object.description) !== null && _object_description !== void 0 ? _object_description : "";
        message.targetNonce = object.targetNonce !== undefined && object.targetNonce !== null ? BigInt(object.targetNonce) : BigInt(0);
        return message;
    }
};
function createBaseAirdropProposal() {
    return {
        title: "",
        description: "",
        denom: "",
        recipients: new Uint8Array(),
        amounts: []
    };
}
const AirdropProposal = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.recipients.length !== 0) {
            writer.uint32(34).bytes(message.recipients);
        }
        writer.uint32(42).fork();
        for (const v of message.amounts){
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAirdropProposal();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.recipients = reader.bytes();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while(reader.pos < end2){
                            message.amounts.push(reader.uint64());
                        }
                    } else {
                        message.amounts.push(reader.uint64());
                    }
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
            title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
            description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
            denom: (0, _helpers.isSet)(object.denom) ? String(object.denom) : "",
            recipients: (0, _helpers.isSet)(object.recipients) ? (0, _helpers.bytesFromBase64)(object.recipients) : new Uint8Array(),
            amounts: Array.isArray(object === null || object === void 0 ? void 0 : object.amounts) ? object.amounts.map((e)=>BigInt(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.denom !== undefined && (obj.denom = message.denom);
        message.recipients !== undefined && (obj.recipients = (0, _helpers.base64FromBytes)(message.recipients !== undefined ? message.recipients : new Uint8Array()));
        if (message.amounts) {
            obj.amounts = message.amounts.map((e)=>(e || BigInt(0)).toString());
        } else {
            obj.amounts = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_amounts;
        const message = createBaseAirdropProposal();
        var _object_title;
        message.title = (_object_title = object.title) !== null && _object_title !== void 0 ? _object_title : "";
        var _object_description;
        message.description = (_object_description = object.description) !== null && _object_description !== void 0 ? _object_description : "";
        var _object_denom;
        message.denom = (_object_denom = object.denom) !== null && _object_denom !== void 0 ? _object_denom : "";
        var _object_recipients;
        message.recipients = (_object_recipients = object.recipients) !== null && _object_recipients !== void 0 ? _object_recipients : new Uint8Array();
        message.amounts = ((_object_amounts = object.amounts) === null || _object_amounts === void 0 ? void 0 : _object_amounts.map((e)=>BigInt(e))) || [];
        return message;
    }
};
function createBaseIBCMetadataProposal() {
    return {
        title: "",
        description: "",
        metadata: undefined,
        ibcDenom: ""
    };
}
const IBCMetadataProposal = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.metadata !== undefined) {
            _bank.Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        if (message.ibcDenom !== "") {
            writer.uint32(34).string(message.ibcDenom);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCMetadataProposal();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.metadata = _bank.Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ibcDenom = reader.string();
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
            title: (0, _helpers.isSet)(object.title) ? String(object.title) : "",
            description: (0, _helpers.isSet)(object.description) ? String(object.description) : "",
            metadata: (0, _helpers.isSet)(object.metadata) ? _bank.Metadata.fromJSON(object.metadata) : undefined,
            ibcDenom: (0, _helpers.isSet)(object.ibcDenom) ? String(object.ibcDenom) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.metadata !== undefined && (obj.metadata = message.metadata ? _bank.Metadata.toJSON(message.metadata) : undefined);
        message.ibcDenom !== undefined && (obj.ibcDenom = message.ibcDenom);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseIBCMetadataProposal();
        var _object_title;
        message.title = (_object_title = object.title) !== null && _object_title !== void 0 ? _object_title : "";
        var _object_description;
        message.description = (_object_description = object.description) !== null && _object_description !== void 0 ? _object_description : "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? _bank.Metadata.fromPartial(object.metadata) : undefined;
        var _object_ibcDenom;
        message.ibcDenom = (_object_ibcDenom = object.ibcDenom) !== null && _object_ibcDenom !== void 0 ? _object_ibcDenom : "";
        return message;
    }
};
function createBasePendingIbcAutoForward() {
    return {
        foreignReceiver: "",
        token: undefined,
        ibcChannel: "",
        eventNonce: BigInt(0)
    };
}
const PendingIbcAutoForward = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.foreignReceiver !== "") {
            writer.uint32(10).string(message.foreignReceiver);
        }
        if (message.token !== undefined) {
            _coin.Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
        }
        if (message.ibcChannel !== "") {
            writer.uint32(26).string(message.ibcChannel);
        }
        if (message.eventNonce !== BigInt(0)) {
            writer.uint32(32).uint64(message.eventNonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingIbcAutoForward();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.foreignReceiver = reader.string();
                    break;
                case 2:
                    message.token = _coin.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ibcChannel = reader.string();
                    break;
                case 4:
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
            foreignReceiver: (0, _helpers.isSet)(object.foreignReceiver) ? String(object.foreignReceiver) : "",
            token: (0, _helpers.isSet)(object.token) ? _coin.Coin.fromJSON(object.token) : undefined,
            ibcChannel: (0, _helpers.isSet)(object.ibcChannel) ? String(object.ibcChannel) : "",
            eventNonce: (0, _helpers.isSet)(object.eventNonce) ? BigInt(object.eventNonce) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.foreignReceiver !== undefined && (obj.foreignReceiver = message.foreignReceiver);
        message.token !== undefined && (obj.token = message.token ? _coin.Coin.toJSON(message.token) : undefined);
        message.ibcChannel !== undefined && (obj.ibcChannel = message.ibcChannel);
        message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBasePendingIbcAutoForward();
        var _object_foreignReceiver;
        message.foreignReceiver = (_object_foreignReceiver = object.foreignReceiver) !== null && _object_foreignReceiver !== void 0 ? _object_foreignReceiver : "";
        message.token = object.token !== undefined && object.token !== null ? _coin.Coin.fromPartial(object.token) : undefined;
        var _object_ibcChannel;
        message.ibcChannel = (_object_ibcChannel = object.ibcChannel) !== null && _object_ibcChannel !== void 0 ? _object_ibcChannel : "";
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? BigInt(object.eventNonce) : BigInt(0);
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2JhbmsvdjFiZXRhMS9iYW5rXCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYmFzZS92MWJldGExL2NvaW5cIjtcbmltcG9ydCB7IGJhc2U2NEZyb21CeXRlcywgYnl0ZXNGcm9tQmFzZTY0LCBpc1NldCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImdyYXZpdHkudjFcIjtcbi8qKiBCcmlkZ2VWYWxpZGF0b3IgcmVwcmVzZW50cyBhIHZhbGlkYXRvcidzIEVUSCBhZGRyZXNzIGFuZCBpdHMgcG93ZXIgKi9cblxuZXhwb3J0IGludGVyZmFjZSBCcmlkZ2VWYWxpZGF0b3Ige1xuICBwb3dlcjogYmlnaW50O1xuICBldGhlcmV1bUFkZHJlc3M6IHN0cmluZztcbn1cbi8qKlxuICogVmFsc2V0IGlzIHRoZSBFdGhlcmV1bSBCcmlkZ2UgTXVsdHNpZyBTZXQsIGVhY2ggZ3Jhdml0eSB2YWxpZGF0b3IgYWxzb1xuICogbWFpbnRhaW5zIGFuIEVUSCBrZXkgdG8gc2lnbiBtZXNzYWdlcywgdGhlc2UgYXJlIHVzZWQgdG8gY2hlY2sgc2lnbmF0dXJlcyBvblxuICogRVRIIGJlY2F1c2Ugb2YgdGhlIHNpZ25pZmljYW50IGdhcyBzYXZpbmdzXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBWYWxzZXQge1xuICBub25jZTogYmlnaW50O1xuICBtZW1iZXJzOiBCcmlkZ2VWYWxpZGF0b3JbXTtcbiAgaGVpZ2h0OiBiaWdpbnQ7XG4gIHJld2FyZEFtb3VudDogc3RyaW5nO1xuICAvKiogdGhlIHJld2FyZCB0b2tlbiBpbiBpdCdzIEV0aGVyZXVtIGhleCBhZGRyZXNzIHJlcHJlc2VudGF0aW9uICovXG5cbiAgcmV3YXJkVG9rZW46IHN0cmluZztcbn1cbi8qKlxuICogTGFzdE9ic2VydmVkRXRoZXJldW1CbG9ja0hlaWdodCBzdG9yZXMgdGhlIGxhc3Qgb2JzZXJ2ZWRcbiAqIEV0aGVyZXVtIGJsb2NrIGhlaWdodCBhbG9uZyB3aXRoIHRoZSBDb3Ntb3MgYmxvY2sgaGVpZ2h0IHRoYXRcbiAqIGl0IHdhcyBvYnNlcnZlZCBhdC4gVGhlc2UgdHdvIG51bWJlcnMgY2FuIGJlIHVzZWQgdG8gcHJvamVjdFxuICogb3V0d2FyZCBhbmQgYWx3YXlzIHByb2R1Y2UgYmF0Y2hlcyB3aXRoIHRpbWVvdXRzIGluIHRoZSBmdXR1cmVcbiAqIGV2ZW4gaWYgbm8gRXRoZXJldW0gYmxvY2sgaGVpZ2h0IGhhcyBiZWVuIHJlbGF5ZWQgZm9yIGEgbG9uZyB0aW1lXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBMYXN0T2JzZXJ2ZWRFdGhlcmV1bUJsb2NrSGVpZ2h0IHtcbiAgY29zbW9zQmxvY2tIZWlnaHQ6IGJpZ2ludDtcbiAgZXRoZXJldW1CbG9ja0hlaWdodDogYmlnaW50O1xufVxuLyoqXG4gKiBUaGlzIHJlY29yZHMgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIGFuIEVSQzIwIHRva2VuIGFuZCB0aGUgZGVub21cbiAqIG9mIHRoZSBjb3JyZXNwb25kaW5nIENvc21vcyBvcmlnaW5hdGVkIGFzc2V0XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBFUkMyMFRvRGVub20ge1xuICBlcmMyMDogc3RyaW5nO1xuICBkZW5vbTogc3RyaW5nO1xufVxuLyoqXG4gKiBVbmhhbHRCcmlkZ2VQcm9wb3NhbCBkZWZpbmVzIGEgY3VzdG9tIGdvdmVybmFuY2UgcHJvcG9zYWwgdXNlZnVsIGZvciByZXN0b3JpbmdcbiAqIHRoZSBicmlkZ2UgYWZ0ZXIgYSBvcmFjbGUgZGlzYWdyZWVtZW50LiBPbmNlIHRoaXMgcHJvcG9zYWwgaXMgcGFzc2VkIGJyaWRnZSBzdGF0ZSB3aWxsIHJvbGwgYmFjayBldmVudHNcbiAqIHRvIHRoZSBub25jZSBwcm92aWRlZCBpbiB0YXJnZXRfbm9uY2UgaWYgYW5kIG9ubHkgaWYgdGhvc2UgZXZlbnRzIGhhdmUgbm90IHlldCBiZWVuIG9ic2VydmVkIChleGVjdXRlZCBvbiB0aGUgQ29zbW9zIGNoYWluKS4gVGhpcyBhbGxvd3MgZm9yIGVhc3lcbiAqIGhhbmRsaW5nIG9mIGNhc2VzIHdoZXJlIGZvciBleGFtcGxlIGFuIEV0aGVyZXVtIGhhcmRmb3JrIGhhcyBvY2N1cmVkIGFuZCBtb3JlIHRoYW4gMS8zIG9mIHRoZSB2bGFpZHRvciBzZXRcbiAqIGRpc2FncmVlcyB3aXRoIHRoZSByZXN0LiBOb3JtYWxseSB0aGlzIHdvdWxkIHJlcXVpcmUgYSBjaGFpbiBoYWx0LCBtYW51YWwgZ2VuZXNpcyBlZGl0aW5nIGFuZCByZXN0YXIgdG8gcmVzb2x2ZVxuICogd2l0aCB0aGlzIGZlYXR1cmUgYSBnb3Zlcm5hbmNlIHByb3Bvc2FsIGNhbiBiZSB1c2VkIGluc3RlYWRcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuaGFsdEJyaWRnZVByb3Bvc2FsIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdGFyZ2V0Tm9uY2U6IGJpZ2ludDtcbn1cbi8qKlxuICogQWlyZHJvcFByb3Bvc2FsIGRlZmluZXMgYSBjdXN0b20gZ292ZXJuYW5jZSBwcm9wb3NhbCB0eXBlIHRoYXQgYWxsb3dzIGFuIGFpcmRyb3AgdG8gb2NjdXIgaW4gYSBkZWNlbnRyYWxpemVkXG4gKiBmYXNoaW9uLiBBIGxpc3Qgb2YgZGVzdGluYXRpb24gYWRkcmVzc2VzIGFuZCBhbiBhbW91bnQgcGVyIGFpcmRyb3AgcmVjaXBpZW50IGlzIHByb3ZpZGVkLiBUaGUgZnVuZHMgZm9yIHRoaXNcbiAqIGFpcmRyb3AgYXJlIHJlbW92ZWQgZnJvbSB0aGUgQ29tbXVuaXR5IFBvb2wsIGlmIHRoZSBjb21tdW5pdHkgcG9vbCBkb2VzIG5vdCBoYXZlIHN1ZmZpY2llbnQgZnVuZGluZyB0byBwZXJmb3JtXG4gKiB0aGUgYWlyZHJvcCB0byBhbGwgcHJvdmlkZWQgcmVjaXBpZW50cyBub3RoaW5nIHdpbGwgb2NjdXJcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEFpcmRyb3BQcm9wb3NhbCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGRlbm9tOiBzdHJpbmc7XG4gIHJlY2lwaWVudHM6IFVpbnQ4QXJyYXk7XG4gIGFtb3VudHM6IGJpZ2ludFtdO1xufVxuLyoqXG4gKiBJQkNNZXRhZGF0YVByb3Bvc2FsIGRlZmluZXMgYSBjdXN0b20gZ292ZXJuYW5jZSBwcm9wb3NhbCB0eXBlIHRoYXQgYWxsb3dzIGdvdmVybmFuY2UgdG8gc2V0IHRoZVxuICogbWV0YWRhdGEgZm9yIGFuIElCQyB0b2tlbiwgdGhpcyB3aWxsIGFsbG93IEdyYXZpdHkgdG8gZGVwbG95IGFuIEVSQzIwIHJlcHJlc2VudGluZyB0aGlzIHRva2VuIG9uXG4gKiBFdGhlcmV1bVxuICogTmFtZTogdGhlIHRva2VuIG5hbWVcbiAqIFN5bWJvbDogdGhlIHRva2VuIHN5bWJvbFxuICogRGVzY3JpcHRpb246IHRoZSB0b2tlbiBkZXNjcmlwdGlvbiwgbm90IHNlbnQgdG8gRVRIIGF0IGFsbCwgb25seSB1c2VkIG9uIENvc21vc1xuICogRGlzcGxheTogdGhlIHRva2VuIGRpc3BsYXkgbmFtZSAob25seSB1c2VkIG9uIENvc21vcyB0byBkZWNpZGUgRVJDMjAgRGVjaW1hbHMpXG4gKiBEZWljbWFsczogdGhlIGRlY2ltYWxzIGZvciB0aGUgZGlzcGxheSB1bml0XG4gKiBpYmNfZGVub20gaXMgdGhlIGRlbm9tIG9mIHRoZSB0b2tlbiBpbiBxdWVzdGlvbiBvbiB0aGlzIGNoYWluXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJQkNNZXRhZGF0YVByb3Bvc2FsIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgbWV0YWRhdGE/OiBNZXRhZGF0YTtcbiAgaWJjRGVub206IHN0cmluZztcbn1cbi8qKlxuICogUGVuZGluZ0liY0F1dG9Gb3J3YXJkIHJlcHJlc2VudHMgYSBTZW5kVG9Db3Ntb3MgdHJhbnNhY3Rpb24gd2l0aCBhIGZvcmVpZ24gQ29zbW9zUmVjZWl2ZXIgd2hpY2ggd2lsbCBiZSBhZGRlZCB0byB0aGVcbiAqIFBlbmRpbmdJYmNBdXRvRm9yd2FyZCBxdWV1ZSBpbiBhdHRlc3RhdGlvbl9oYW5kbGVyIGFuZCBzZW50IG92ZXIgSUJDIG9uIHNvbWUgc3VibWlzc2lvbiBvZiBhIE1zZ0V4ZWN1dGVJYmNBdXRvRm9yd2FyZHNcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlbmRpbmdJYmNBdXRvRm9yd2FyZCB7XG4gIC8qKiB0aGUgZGVzdGluYXRpb24gYWRkcmVzcy4gc2RrLkFjY0FkZHJlc3MgZG9lcyBub3QgcHJlc2VydmUgZm9yZWlnbiBwcmVmaXhlcyAqL1xuICBmb3JlaWduUmVjZWl2ZXI6IHN0cmluZztcbiAgLyoqIHRoZSB0b2tlbiBzZW50IGZyb20gZXRoZXJldW0gdG8gdGhlIGliYy1lbmFibGVkIGNoYWluIG92ZXIgYEliY0NoYW5uZWxgICovXG5cbiAgdG9rZW4/OiBDb2luO1xuICAvKiogdGhlIElCQyBjaGFubmVsIHRvIHNlbmQgYEFtb3VudGAgb3ZlciB2aWEgaWJjLXRyYW5zZmVyIG1vZHVsZSAqL1xuXG4gIGliY0NoYW5uZWw6IHN0cmluZztcbiAgLyoqIHRoZSBFdmVudE5vbmNlIGZyb20gdGhlIE1zZ1NlbmRUb0Nvc21vc0NsYWltLCB1c2VkIGZvciBvcmRlcmluZyB0aGUgcXVldWUgKi9cblxuICBldmVudE5vbmNlOiBiaWdpbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VCcmlkZ2VWYWxpZGF0b3IoKTogQnJpZGdlVmFsaWRhdG9yIHtcbiAgcmV0dXJuIHtcbiAgICBwb3dlcjogQmlnSW50KDApLFxuICAgIGV0aGVyZXVtQWRkcmVzczogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEJyaWRnZVZhbGlkYXRvciA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEJyaWRnZVZhbGlkYXRvcixcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnBvd2VyICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UucG93ZXIpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmV0aGVyZXVtQWRkcmVzcyAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZXRoZXJldW1BZGRyZXNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogQnJpZGdlVmFsaWRhdG9yIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQnJpZGdlVmFsaWRhdG9yKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5wb3dlciA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5ldGhlcmV1bUFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBCcmlkZ2VWYWxpZGF0b3Ige1xuICAgIHJldHVybiB7XG4gICAgICBwb3dlcjogaXNTZXQob2JqZWN0LnBvd2VyKSA/IEJpZ0ludChvYmplY3QucG93ZXIpIDogQmlnSW50KDApLFxuICAgICAgZXRoZXJldW1BZGRyZXNzOiBpc1NldChvYmplY3QuZXRoZXJldW1BZGRyZXNzKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuZXRoZXJldW1BZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogQnJpZGdlVmFsaWRhdG9yKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnBvd2VyICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucG93ZXIgPSAobWVzc2FnZS5wb3dlciB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuZXRoZXJldW1BZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXRoZXJldW1BZGRyZXNzID0gbWVzc2FnZS5ldGhlcmV1bUFkZHJlc3MpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEJyaWRnZVZhbGlkYXRvcj4pOiBCcmlkZ2VWYWxpZGF0b3Ige1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQnJpZGdlVmFsaWRhdG9yKCk7XG4gICAgbWVzc2FnZS5wb3dlciA9XG4gICAgICBvYmplY3QucG93ZXIgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QucG93ZXIgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LnBvd2VyKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmV0aGVyZXVtQWRkcmVzcyA9IG9iamVjdC5ldGhlcmV1bUFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VWYWxzZXQoKTogVmFsc2V0IHtcbiAgcmV0dXJuIHtcbiAgICBub25jZTogQmlnSW50KDApLFxuICAgIG1lbWJlcnM6IFtdLFxuICAgIGhlaWdodDogQmlnSW50KDApLFxuICAgIHJld2FyZEFtb3VudDogXCJcIixcbiAgICByZXdhcmRUb2tlbjogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFZhbHNldCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFZhbHNldCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLm1lbWJlcnMpIHtcbiAgICAgIEJyaWRnZVZhbGlkYXRvci5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuaGVpZ2h0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjQpLnVpbnQ2NChtZXNzYWdlLmhlaWdodCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UucmV3YXJkQW1vdW50ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS5yZXdhcmRBbW91bnQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnJld2FyZFRva2VuICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQyKS5zdHJpbmcobWVzc2FnZS5yZXdhcmRUb2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFZhbHNldCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVZhbHNldCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UubWVtYmVycy5wdXNoKEJyaWRnZVZhbGlkYXRvci5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5oZWlnaHQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UucmV3YXJkQW1vdW50ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBtZXNzYWdlLnJld2FyZFRva2VuID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogVmFsc2V0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9uY2U6IGlzU2V0KG9iamVjdC5ub25jZSkgPyBCaWdJbnQob2JqZWN0Lm5vbmNlKSA6IEJpZ0ludCgwKSxcbiAgICAgIG1lbWJlcnM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5tZW1iZXJzKVxuICAgICAgICA/IG9iamVjdC5tZW1iZXJzLm1hcCgoZTogYW55KSA9PiBCcmlkZ2VWYWxpZGF0b3IuZnJvbUpTT04oZSkpXG4gICAgICAgIDogW10sXG4gICAgICBoZWlnaHQ6IGlzU2V0KG9iamVjdC5oZWlnaHQpID8gQmlnSW50KG9iamVjdC5oZWlnaHQpIDogQmlnSW50KDApLFxuICAgICAgcmV3YXJkQW1vdW50OiBpc1NldChvYmplY3QucmV3YXJkQW1vdW50KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QucmV3YXJkQW1vdW50KVxuICAgICAgICA6IFwiXCIsXG4gICAgICByZXdhcmRUb2tlbjogaXNTZXQob2JqZWN0LnJld2FyZFRva2VuKSA/IFN0cmluZyhvYmplY3QucmV3YXJkVG9rZW4pIDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBWYWxzZXQpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uubm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5ub25jZSA9IChtZXNzYWdlLm5vbmNlIHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG5cbiAgICBpZiAobWVzc2FnZS5tZW1iZXJzKSB7XG4gICAgICBvYmoubWVtYmVycyA9IG1lc3NhZ2UubWVtYmVycy5tYXAoKGUpID0+XG4gICAgICAgIGUgPyBCcmlkZ2VWYWxpZGF0b3IudG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWVtYmVycyA9IFtdO1xuICAgIH1cblxuICAgIG1lc3NhZ2UuaGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaGVpZ2h0ID0gKG1lc3NhZ2UuaGVpZ2h0IHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgbWVzc2FnZS5yZXdhcmRBbW91bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5yZXdhcmRBbW91bnQgPSBtZXNzYWdlLnJld2FyZEFtb3VudCk7XG4gICAgbWVzc2FnZS5yZXdhcmRUb2tlbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnJld2FyZFRva2VuID0gbWVzc2FnZS5yZXdhcmRUb2tlbik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8VmFsc2V0Pik6IFZhbHNldCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VWYWxzZXQoKTtcbiAgICBtZXNzYWdlLm5vbmNlID1cbiAgICAgIG9iamVjdC5ub25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5ub25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3Qubm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UubWVtYmVycyA9XG4gICAgICBvYmplY3QubWVtYmVycz8ubWFwKChlKSA9PiBCcmlkZ2VWYWxpZGF0b3IuZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UuaGVpZ2h0ID1cbiAgICAgIG9iamVjdC5oZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaGVpZ2h0ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5oZWlnaHQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIG1lc3NhZ2UucmV3YXJkQW1vdW50ID0gb2JqZWN0LnJld2FyZEFtb3VudCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UucmV3YXJkVG9rZW4gPSBvYmplY3QucmV3YXJkVG9rZW4gPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VMYXN0T2JzZXJ2ZWRFdGhlcmV1bUJsb2NrSGVpZ2h0KCk6IExhc3RPYnNlcnZlZEV0aGVyZXVtQmxvY2tIZWlnaHQge1xuICByZXR1cm4ge1xuICAgIGNvc21vc0Jsb2NrSGVpZ2h0OiBCaWdJbnQoMCksXG4gICAgZXRoZXJldW1CbG9ja0hlaWdodDogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgTGFzdE9ic2VydmVkRXRoZXJldW1CbG9ja0hlaWdodCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IExhc3RPYnNlcnZlZEV0aGVyZXVtQmxvY2tIZWlnaHQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5jb3Ntb3NCbG9ja0hlaWdodCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDgpLnVpbnQ2NChtZXNzYWdlLmNvc21vc0Jsb2NrSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ldGhlcmV1bUJsb2NrSGVpZ2h0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLnVpbnQ2NChtZXNzYWdlLmV0aGVyZXVtQmxvY2tIZWlnaHQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBMYXN0T2JzZXJ2ZWRFdGhlcmV1bUJsb2NrSGVpZ2h0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTGFzdE9ic2VydmVkRXRoZXJldW1CbG9ja0hlaWdodCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tIZWlnaHQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuZXRoZXJldW1CbG9ja0hlaWdodCA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IExhc3RPYnNlcnZlZEV0aGVyZXVtQmxvY2tIZWlnaHQge1xuICAgIHJldHVybiB7XG4gICAgICBjb3Ntb3NCbG9ja0hlaWdodDogaXNTZXQob2JqZWN0LmNvc21vc0Jsb2NrSGVpZ2h0KVxuICAgICAgICA/IEJpZ0ludChvYmplY3QuY29zbW9zQmxvY2tIZWlnaHQpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgICAgZXRoZXJldW1CbG9ja0hlaWdodDogaXNTZXQob2JqZWN0LmV0aGVyZXVtQmxvY2tIZWlnaHQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhlcmV1bUJsb2NrSGVpZ2h0KVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBMYXN0T2JzZXJ2ZWRFdGhlcmV1bUJsb2NrSGVpZ2h0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmNvc21vc0Jsb2NrSGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zQmxvY2tIZWlnaHQgPSAoXG4gICAgICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tIZWlnaHQgfHwgQmlnSW50KDApXG4gICAgICApLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuZXRoZXJldW1CbG9ja0hlaWdodCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmV0aGVyZXVtQmxvY2tIZWlnaHQgPSAoXG4gICAgICAgIG1lc3NhZ2UuZXRoZXJldW1CbG9ja0hlaWdodCB8fCBCaWdJbnQoMClcbiAgICAgICkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8TGFzdE9ic2VydmVkRXRoZXJldW1CbG9ja0hlaWdodD5cbiAgKTogTGFzdE9ic2VydmVkRXRoZXJldW1CbG9ja0hlaWdodCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VMYXN0T2JzZXJ2ZWRFdGhlcmV1bUJsb2NrSGVpZ2h0KCk7XG4gICAgbWVzc2FnZS5jb3Ntb3NCbG9ja0hlaWdodCA9XG4gICAgICBvYmplY3QuY29zbW9zQmxvY2tIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmNvc21vc0Jsb2NrSGVpZ2h0ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0hlaWdodClcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5ldGhlcmV1bUJsb2NrSGVpZ2h0ID1cbiAgICAgIG9iamVjdC5ldGhlcmV1bUJsb2NrSGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG9iamVjdC5ldGhlcmV1bUJsb2NrSGVpZ2h0ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5ldGhlcmV1bUJsb2NrSGVpZ2h0KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFUkMyMFRvRGVub20oKTogRVJDMjBUb0Rlbm9tIHtcbiAgcmV0dXJuIHtcbiAgICBlcmMyMDogXCJcIixcbiAgICBkZW5vbTogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEVSQzIwVG9EZW5vbSA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEVSQzIwVG9EZW5vbSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmVyYzIwICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5lcmMyMCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZGVub20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmRlbm9tKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogRVJDMjBUb0Rlbm9tIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRVJDMjBUb0Rlbm9tKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5lcmMyMCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEVSQzIwVG9EZW5vbSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVyYzIwOiBpc1NldChvYmplY3QuZXJjMjApID8gU3RyaW5nKG9iamVjdC5lcmMyMCkgOiBcIlwiLFxuICAgICAgZGVub206IGlzU2V0KG9iamVjdC5kZW5vbSkgPyBTdHJpbmcob2JqZWN0LmRlbm9tKSA6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRVJDMjBUb0Rlbm9tKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmVyYzIwICE9PSB1bmRlZmluZWQgJiYgKG9iai5lcmMyMCA9IG1lc3NhZ2UuZXJjMjApO1xuICAgIG1lc3NhZ2UuZGVub20gIT09IHVuZGVmaW5lZCAmJiAob2JqLmRlbm9tID0gbWVzc2FnZS5kZW5vbSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8RVJDMjBUb0Rlbm9tPik6IEVSQzIwVG9EZW5vbSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFUkMyMFRvRGVub20oKTtcbiAgICBtZXNzYWdlLmVyYzIwID0gb2JqZWN0LmVyYzIwID8/IFwiXCI7XG4gICAgbWVzc2FnZS5kZW5vbSA9IG9iamVjdC5kZW5vbSA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZVVuaGFsdEJyaWRnZVByb3Bvc2FsKCk6IFVuaGFsdEJyaWRnZVByb3Bvc2FsIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICB0YXJnZXROb25jZTogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgVW5oYWx0QnJpZGdlUHJvcG9zYWwgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBVbmhhbHRCcmlkZ2VQcm9wb3NhbCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnRpdGxlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS50aXRsZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50YXJnZXROb25jZSAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDMyKS51aW50NjQobWVzc2FnZS50YXJnZXROb25jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFVuaGFsdEJyaWRnZVByb3Bvc2FsIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlVW5oYWx0QnJpZGdlUHJvcG9zYWwoKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnRpdGxlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnRhcmdldE5vbmNlID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogVW5oYWx0QnJpZGdlUHJvcG9zYWwge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogaXNTZXQob2JqZWN0LnRpdGxlKSA/IFN0cmluZyhvYmplY3QudGl0bGUpIDogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBpc1NldChvYmplY3QuZGVzY3JpcHRpb24pID8gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbikgOiBcIlwiLFxuICAgICAgdGFyZ2V0Tm9uY2U6IGlzU2V0KG9iamVjdC50YXJnZXROb25jZSlcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LnRhcmdldE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBVbmhhbHRCcmlkZ2VQcm9wb3NhbCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS50aXRsZSAhPT0gdW5kZWZpbmVkICYmIChvYmoudGl0bGUgPSBtZXNzYWdlLnRpdGxlKTtcbiAgICBtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZGVzY3JpcHRpb24gPSBtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICBtZXNzYWdlLnRhcmdldE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudGFyZ2V0Tm9uY2UgPSAobWVzc2FnZS50YXJnZXROb25jZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPFVuaGFsdEJyaWRnZVByb3Bvc2FsPik6IFVuaGFsdEJyaWRnZVByb3Bvc2FsIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVVuaGFsdEJyaWRnZVByb3Bvc2FsKCk7XG4gICAgbWVzc2FnZS50aXRsZSA9IG9iamVjdC50aXRsZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBvYmplY3QuZGVzY3JpcHRpb24gPz8gXCJcIjtcbiAgICBtZXNzYWdlLnRhcmdldE5vbmNlID1cbiAgICAgIG9iamVjdC50YXJnZXROb25jZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC50YXJnZXROb25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QudGFyZ2V0Tm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUFpcmRyb3BQcm9wb3NhbCgpOiBBaXJkcm9wUHJvcG9zYWwge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIGRlbm9tOiBcIlwiLFxuICAgIHJlY2lwaWVudHM6IG5ldyBVaW50OEFycmF5KCksXG4gICAgYW1vdW50czogW10sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBBaXJkcm9wUHJvcG9zYWwgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBBaXJkcm9wUHJvcG9zYWwsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS50aXRsZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudGl0bGUpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5kZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZGVub20gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmRlbm9tKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5yZWNpcGllbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuYnl0ZXMobWVzc2FnZS5yZWNpcGllbnRzKTtcbiAgICB9XG5cbiAgICB3cml0ZXIudWludDMyKDQyKS5mb3JrKCk7XG5cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5hbW91bnRzKSB7XG4gICAgICB3cml0ZXIudWludDY0KHYpO1xuICAgIH1cblxuICAgIHdyaXRlci5sZGVsaW0oKTtcbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSwgbGVuZ3RoPzogbnVtYmVyKTogQWlyZHJvcFByb3Bvc2FsIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQWlyZHJvcFByb3Bvc2FsKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS50aXRsZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5kZW5vbSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5yZWNpcGllbnRzID0gcmVhZGVyLmJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGlmICgodGFnICYgNykgPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZDIgPSByZWFkZXIudWludDMyKCkgKyByZWFkZXIucG9zO1xuXG4gICAgICAgICAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZDIpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZS5hbW91bnRzLnB1c2gocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZS5hbW91bnRzLnB1c2gocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEFpcmRyb3BQcm9wb3NhbCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBpc1NldChvYmplY3QudGl0bGUpID8gU3RyaW5nKG9iamVjdC50aXRsZSkgOiBcIlwiLFxuICAgICAgZGVzY3JpcHRpb246IGlzU2V0KG9iamVjdC5kZXNjcmlwdGlvbikgPyBTdHJpbmcob2JqZWN0LmRlc2NyaXB0aW9uKSA6IFwiXCIsXG4gICAgICBkZW5vbTogaXNTZXQob2JqZWN0LmRlbm9tKSA/IFN0cmluZyhvYmplY3QuZGVub20pIDogXCJcIixcbiAgICAgIHJlY2lwaWVudHM6IGlzU2V0KG9iamVjdC5yZWNpcGllbnRzKVxuICAgICAgICA/IGJ5dGVzRnJvbUJhc2U2NChvYmplY3QucmVjaXBpZW50cylcbiAgICAgICAgOiBuZXcgVWludDhBcnJheSgpLFxuICAgICAgYW1vdW50czogQXJyYXkuaXNBcnJheShvYmplY3Q/LmFtb3VudHMpXG4gICAgICAgID8gb2JqZWN0LmFtb3VudHMubWFwKChlOiBhbnkpID0+IEJpZ0ludChlKSlcbiAgICAgICAgOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBBaXJkcm9wUHJvcG9zYWwpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudGl0bGUgIT09IHVuZGVmaW5lZCAmJiAob2JqLnRpdGxlID0gbWVzc2FnZS50aXRsZSk7XG4gICAgbWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmRlc2NyaXB0aW9uID0gbWVzc2FnZS5kZXNjcmlwdGlvbik7XG4gICAgbWVzc2FnZS5kZW5vbSAhPT0gdW5kZWZpbmVkICYmIChvYmouZGVub20gPSBtZXNzYWdlLmRlbm9tKTtcbiAgICBtZXNzYWdlLnJlY2lwaWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5yZWNpcGllbnRzID0gYmFzZTY0RnJvbUJ5dGVzKFxuICAgICAgICBtZXNzYWdlLnJlY2lwaWVudHMgIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UucmVjaXBpZW50cyA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuXG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50cykge1xuICAgICAgb2JqLmFtb3VudHMgPSBtZXNzYWdlLmFtb3VudHMubWFwKChlKSA9PiAoZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYW1vdW50cyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEFpcmRyb3BQcm9wb3NhbD4pOiBBaXJkcm9wUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQWlyZHJvcFByb3Bvc2FsKCk7XG4gICAgbWVzc2FnZS50aXRsZSA9IG9iamVjdC50aXRsZSA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBvYmplY3QuZGVzY3JpcHRpb24gPz8gXCJcIjtcbiAgICBtZXNzYWdlLmRlbm9tID0gb2JqZWN0LmRlbm9tID8/IFwiXCI7XG4gICAgbWVzc2FnZS5yZWNpcGllbnRzID0gb2JqZWN0LnJlY2lwaWVudHMgPz8gbmV3IFVpbnQ4QXJyYXkoKTtcbiAgICBtZXNzYWdlLmFtb3VudHMgPSBvYmplY3QuYW1vdW50cz8ubWFwKChlKSA9PiBCaWdJbnQoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUlCQ01ldGFkYXRhUHJvcG9zYWwoKTogSUJDTWV0YWRhdGFQcm9wb3NhbCB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgbWV0YWRhdGE6IHVuZGVmaW5lZCxcbiAgICBpYmNEZW5vbTogXCJcIixcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IElCQ01ldGFkYXRhUHJvcG9zYWwgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBJQkNNZXRhZGF0YVByb3Bvc2FsLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudGl0bGUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnRpdGxlKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLm1ldGFkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIE1ldGFkYXRhLmVuY29kZShtZXNzYWdlLm1ldGFkYXRhLCB3cml0ZXIudWludDMyKDI2KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmliY0Rlbm9tICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS5pYmNEZW5vbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IElCQ01ldGFkYXRhUHJvcG9zYWwge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VJQkNNZXRhZGF0YVByb3Bvc2FsKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS50aXRsZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5tZXRhZGF0YSA9IE1ldGFkYXRhLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuaWJjRGVub20gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBJQkNNZXRhZGF0YVByb3Bvc2FsIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGlzU2V0KG9iamVjdC50aXRsZSkgPyBTdHJpbmcob2JqZWN0LnRpdGxlKSA6IFwiXCIsXG4gICAgICBkZXNjcmlwdGlvbjogaXNTZXQob2JqZWN0LmRlc2NyaXB0aW9uKSA/IFN0cmluZyhvYmplY3QuZGVzY3JpcHRpb24pIDogXCJcIixcbiAgICAgIG1ldGFkYXRhOiBpc1NldChvYmplY3QubWV0YWRhdGEpXG4gICAgICAgID8gTWV0YWRhdGEuZnJvbUpTT04ob2JqZWN0Lm1ldGFkYXRhKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgIGliY0Rlbm9tOiBpc1NldChvYmplY3QuaWJjRGVub20pID8gU3RyaW5nKG9iamVjdC5pYmNEZW5vbSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IElCQ01ldGFkYXRhUHJvcG9zYWwpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudGl0bGUgIT09IHVuZGVmaW5lZCAmJiAob2JqLnRpdGxlID0gbWVzc2FnZS50aXRsZSk7XG4gICAgbWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmRlc2NyaXB0aW9uID0gbWVzc2FnZS5kZXNjcmlwdGlvbik7XG4gICAgbWVzc2FnZS5tZXRhZGF0YSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm1ldGFkYXRhID0gbWVzc2FnZS5tZXRhZGF0YVxuICAgICAgICA/IE1ldGFkYXRhLnRvSlNPTihtZXNzYWdlLm1ldGFkYXRhKVxuICAgICAgICA6IHVuZGVmaW5lZCk7XG4gICAgbWVzc2FnZS5pYmNEZW5vbSAhPT0gdW5kZWZpbmVkICYmIChvYmouaWJjRGVub20gPSBtZXNzYWdlLmliY0Rlbm9tKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxJQkNNZXRhZGF0YVByb3Bvc2FsPik6IElCQ01ldGFkYXRhUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlSUJDTWV0YWRhdGFQcm9wb3NhbCgpO1xuICAgIG1lc3NhZ2UudGl0bGUgPSBvYmplY3QudGl0bGUgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gb2JqZWN0LmRlc2NyaXB0aW9uID8/IFwiXCI7XG4gICAgbWVzc2FnZS5tZXRhZGF0YSA9XG4gICAgICBvYmplY3QubWV0YWRhdGEgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubWV0YWRhdGEgIT09IG51bGxcbiAgICAgICAgPyBNZXRhZGF0YS5mcm9tUGFydGlhbChvYmplY3QubWV0YWRhdGEpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2UuaWJjRGVub20gPSBvYmplY3QuaWJjRGVub20gPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VQZW5kaW5nSWJjQXV0b0ZvcndhcmQoKTogUGVuZGluZ0liY0F1dG9Gb3J3YXJkIHtcbiAgcmV0dXJuIHtcbiAgICBmb3JlaWduUmVjZWl2ZXI6IFwiXCIsXG4gICAgdG9rZW46IHVuZGVmaW5lZCxcbiAgICBpYmNDaGFubmVsOiBcIlwiLFxuICAgIGV2ZW50Tm9uY2U6IEJpZ0ludCgwKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFBlbmRpbmdJYmNBdXRvRm9yd2FyZCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFBlbmRpbmdJYmNBdXRvRm9yd2FyZCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmZvcmVpZ25SZWNlaXZlciAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UuZm9yZWlnblJlY2VpdmVyKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBDb2luLmVuY29kZShtZXNzYWdlLnRva2VuLCB3cml0ZXIudWludDMyKDE4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmliY0NoYW5uZWwgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmliY0NoYW5uZWwpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmV2ZW50Tm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzMikudWludDY0KG1lc3NhZ2UuZXZlbnROb25jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFBlbmRpbmdJYmNBdXRvRm9yd2FyZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVBlbmRpbmdJYmNBdXRvRm9yd2FyZCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuZm9yZWlnblJlY2VpdmVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnRva2VuID0gQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmliY0NoYW5uZWwgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuZXZlbnROb25jZSA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFBlbmRpbmdJYmNBdXRvRm9yd2FyZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcmVpZ25SZWNlaXZlcjogaXNTZXQob2JqZWN0LmZvcmVpZ25SZWNlaXZlcilcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0LmZvcmVpZ25SZWNlaXZlcilcbiAgICAgICAgOiBcIlwiLFxuICAgICAgdG9rZW46IGlzU2V0KG9iamVjdC50b2tlbikgPyBDb2luLmZyb21KU09OKG9iamVjdC50b2tlbikgOiB1bmRlZmluZWQsXG4gICAgICBpYmNDaGFubmVsOiBpc1NldChvYmplY3QuaWJjQ2hhbm5lbCkgPyBTdHJpbmcob2JqZWN0LmliY0NoYW5uZWwpIDogXCJcIixcbiAgICAgIGV2ZW50Tm9uY2U6IGlzU2V0KG9iamVjdC5ldmVudE5vbmNlKVxuICAgICAgICA/IEJpZ0ludChvYmplY3QuZXZlbnROb25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgfTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUGVuZGluZ0liY0F1dG9Gb3J3YXJkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmZvcmVpZ25SZWNlaXZlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmZvcmVpZ25SZWNlaXZlciA9IG1lc3NhZ2UuZm9yZWlnblJlY2VpdmVyKTtcbiAgICBtZXNzYWdlLnRva2VuICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoudG9rZW4gPSBtZXNzYWdlLnRva2VuID8gQ29pbi50b0pTT04obWVzc2FnZS50b2tlbikgOiB1bmRlZmluZWQpO1xuICAgIG1lc3NhZ2UuaWJjQ2hhbm5lbCAhPT0gdW5kZWZpbmVkICYmIChvYmouaWJjQ2hhbm5lbCA9IG1lc3NhZ2UuaWJjQ2hhbm5lbCk7XG4gICAgbWVzc2FnZS5ldmVudE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXZlbnROb25jZSA9IChtZXNzYWdlLmV2ZW50Tm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogUGFydGlhbDxQZW5kaW5nSWJjQXV0b0ZvcndhcmQ+KTogUGVuZGluZ0liY0F1dG9Gb3J3YXJkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVBlbmRpbmdJYmNBdXRvRm9yd2FyZCgpO1xuICAgIG1lc3NhZ2UuZm9yZWlnblJlY2VpdmVyID0gb2JqZWN0LmZvcmVpZ25SZWNlaXZlciA/PyBcIlwiO1xuICAgIG1lc3NhZ2UudG9rZW4gPVxuICAgICAgb2JqZWN0LnRva2VuICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnRva2VuICE9PSBudWxsXG4gICAgICAgID8gQ29pbi5mcm9tUGFydGlhbChvYmplY3QudG9rZW4pXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIG1lc3NhZ2UuaWJjQ2hhbm5lbCA9IG9iamVjdC5pYmNDaGFubmVsID8/IFwiXCI7XG4gICAgbWVzc2FnZS5ldmVudE5vbmNlID1cbiAgICAgIG9iamVjdC5ldmVudE5vbmNlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV2ZW50Tm9uY2UgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmV2ZW50Tm9uY2UpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJBaXJkcm9wUHJvcG9zYWwiLCJCcmlkZ2VWYWxpZGF0b3IiLCJFUkMyMFRvRGVub20iLCJJQkNNZXRhZGF0YVByb3Bvc2FsIiwiTGFzdE9ic2VydmVkRXRoZXJldW1CbG9ja0hlaWdodCIsIlBlbmRpbmdJYmNBdXRvRm9yd2FyZCIsIlVuaGFsdEJyaWRnZVByb3Bvc2FsIiwiVmFsc2V0IiwicHJvdG9idWZQYWNrYWdlIiwiY3JlYXRlQmFzZUJyaWRnZVZhbGlkYXRvciIsInBvd2VyIiwiQmlnSW50IiwiZXRoZXJldW1BZGRyZXNzIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInVpbnQ2NCIsInN0cmluZyIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsImlzU2V0IiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwidG9TdHJpbmciLCJmcm9tUGFydGlhbCIsImNyZWF0ZUJhc2VWYWxzZXQiLCJub25jZSIsIm1lbWJlcnMiLCJoZWlnaHQiLCJyZXdhcmRBbW91bnQiLCJyZXdhcmRUb2tlbiIsInYiLCJmb3JrIiwibGRlbGltIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImUiLCJjcmVhdGVCYXNlTGFzdE9ic2VydmVkRXRoZXJldW1CbG9ja0hlaWdodCIsImNvc21vc0Jsb2NrSGVpZ2h0IiwiZXRoZXJldW1CbG9ja0hlaWdodCIsImNyZWF0ZUJhc2VFUkMyMFRvRGVub20iLCJlcmMyMCIsImRlbm9tIiwiY3JlYXRlQmFzZVVuaGFsdEJyaWRnZVByb3Bvc2FsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhcmdldE5vbmNlIiwiY3JlYXRlQmFzZUFpcmRyb3BQcm9wb3NhbCIsInJlY2lwaWVudHMiLCJVaW50OEFycmF5IiwiYW1vdW50cyIsImJ5dGVzIiwiZW5kMiIsImJ5dGVzRnJvbUJhc2U2NCIsImJhc2U2NEZyb21CeXRlcyIsImNyZWF0ZUJhc2VJQkNNZXRhZGF0YVByb3Bvc2FsIiwibWV0YWRhdGEiLCJpYmNEZW5vbSIsIk1ldGFkYXRhIiwiY3JlYXRlQmFzZVBlbmRpbmdJYmNBdXRvRm9yd2FyZCIsImZvcmVpZ25SZWNlaXZlciIsInRva2VuIiwiaWJjQ2hhbm5lbCIsImV2ZW50Tm9uY2UiLCJDb2luIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7Ozs7Ozs7Ozs7O0lBa2xCTEEsZUFBZTtlQUFmQTs7SUExZEFDLGVBQWU7ZUFBZkE7O0lBaVRBQyxZQUFZO2VBQVpBOztJQThTQUMsbUJBQW1CO2VBQW5CQTs7SUE3WUFDLCtCQUErQjtlQUEvQkE7O0lBeWZBQyxxQkFBcUI7ZUFBckJBOztJQWpWQUMsb0JBQW9CO2VBQXBCQTs7SUF4U0FDLE1BQU07ZUFBTkE7O0lBck1BQyxlQUFlO2VBQWZBOzs7d0JBSjhCO3NCQUNsQjtzQkFDSjt5QkFDbUM7QUFDakQsTUFBTUEsa0JBQWtCO0FBNEcvQixTQUFTQztJQUNQLE9BQU87UUFDTEMsT0FBT0MsT0FBTztRQUNkQyxpQkFBaUI7SUFDbkI7QUFDRjtBQUVPLE1BQU1YLGtCQUFrQjtJQUM3QlksUUFDRUMsT0FBd0IsRUFDeEJDLFNBQXVCQyxvQkFBWSxDQUFDQyxNQUFNLEVBQUU7UUFFNUMsSUFBSUgsUUFBUUosS0FBSyxLQUFLQyxPQUFPLElBQUk7WUFDL0JJLE9BQU9HLE1BQU0sQ0FBQyxHQUFHQyxNQUFNLENBQUNMLFFBQVFKLEtBQUs7UUFDdkM7UUFFQSxJQUFJSSxRQUFRRixlQUFlLEtBQUssSUFBSTtZQUNsQ0csT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUUYsZUFBZTtRQUNsRDtRQUVBLE9BQU9HO0lBQ1Q7SUFFQU0sUUFBT0MsS0FBZ0MsRUFBRUMsTUFBZTtRQUN0RCxNQUFNQyxTQUNKRixpQkFBaUJHLG9CQUFZLEdBQUdILFFBQVEsSUFBSUcsb0JBQVksQ0FBQ0g7UUFDM0QsSUFBSUksTUFBTUgsV0FBV0ksWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdOO1FBQzNELE1BQU1ULFVBQVVMO1FBRWhCLE1BQU9lLE9BQU9LLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSSxNQUFNTixPQUFPTixNQUFNO1lBRXpCLE9BQVFZLFFBQVE7Z0JBQ2QsS0FBSztvQkFDSGhCLFFBQVFKLEtBQUssR0FBR2MsT0FBT0wsTUFBTTtvQkFDN0I7Z0JBRUYsS0FBSztvQkFDSEwsUUFBUUYsZUFBZSxHQUFHWSxPQUFPSixNQUFNO29CQUN2QztnQkFFRjtvQkFDRUksT0FBT08sUUFBUSxDQUFDRCxNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPaEI7SUFDVDtJQUVBa0IsVUFBU0MsTUFBVztRQUNsQixPQUFPO1lBQ0x2QixPQUFPd0IsSUFBQUEsY0FBSyxFQUFDRCxPQUFPdkIsS0FBSyxJQUFJQyxPQUFPc0IsT0FBT3ZCLEtBQUssSUFBSUMsT0FBTztZQUMzREMsaUJBQWlCc0IsSUFBQUEsY0FBSyxFQUFDRCxPQUFPckIsZUFBZSxJQUN6Q3VCLE9BQU9GLE9BQU9yQixlQUFlLElBQzdCO1FBQ047SUFDRjtJQUVBd0IsUUFBT3RCLE9BQXdCO1FBQzdCLE1BQU11QixNQUFXLENBQUM7UUFDbEJ2QixRQUFRSixLQUFLLEtBQUtpQixhQUNmVSxDQUFBQSxJQUFJM0IsS0FBSyxHQUFHLEFBQUNJLENBQUFBLFFBQVFKLEtBQUssSUFBSUMsT0FBTyxFQUFDLEVBQUcyQixRQUFRLEVBQUM7UUFDckR4QixRQUFRRixlQUFlLEtBQUtlLGFBQ3pCVSxDQUFBQSxJQUFJekIsZUFBZSxHQUFHRSxRQUFRRixlQUFlLEFBQUQ7UUFDL0MsT0FBT3lCO0lBQ1Q7SUFFQUUsYUFBWU4sTUFBZ0M7UUFDMUMsTUFBTW5CLFVBQVVMO1FBQ2hCSyxRQUFRSixLQUFLLEdBQ1h1QixPQUFPdkIsS0FBSyxLQUFLaUIsYUFBYU0sT0FBT3ZCLEtBQUssS0FBSyxPQUMzQ0MsT0FBT3NCLE9BQU92QixLQUFLLElBQ25CQyxPQUFPO1lBQ2FzQjtRQUExQm5CLFFBQVFGLGVBQWUsR0FBR3FCLENBQUFBLDBCQUFBQSxPQUFPckIsZUFBZSxjQUF0QnFCLHFDQUFBQSwwQkFBMEI7UUFDcEQsT0FBT25CO0lBQ1Q7QUFDRjtBQUVBLFNBQVMwQjtJQUNQLE9BQU87UUFDTEMsT0FBTzlCLE9BQU87UUFDZCtCLFNBQVMsRUFBRTtRQUNYQyxRQUFRaEMsT0FBTztRQUNmaUMsY0FBYztRQUNkQyxhQUFhO0lBQ2Y7QUFDRjtBQUVPLE1BQU10QyxTQUFTO0lBQ3BCTSxRQUNFQyxPQUFlLEVBQ2ZDLFNBQXVCQyxvQkFBWSxDQUFDQyxNQUFNLEVBQUU7UUFFNUMsSUFBSUgsUUFBUTJCLEtBQUssS0FBSzlCLE9BQU8sSUFBSTtZQUMvQkksT0FBT0csTUFBTSxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0wsUUFBUTJCLEtBQUs7UUFDdkM7UUFFQSxLQUFLLE1BQU1LLEtBQUtoQyxRQUFRNEIsT0FBTyxDQUFFO1lBQy9CekMsZ0JBQWdCWSxNQUFNLENBQUNpQyxHQUFJL0IsT0FBT0csTUFBTSxDQUFDLElBQUk2QixJQUFJLElBQUlDLE1BQU07UUFDN0Q7UUFFQSxJQUFJbEMsUUFBUTZCLE1BQU0sS0FBS2hDLE9BQU8sSUFBSTtZQUNoQ0ksT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0wsUUFBUTZCLE1BQU07UUFDekM7UUFFQSxJQUFJN0IsUUFBUThCLFlBQVksS0FBSyxJQUFJO1lBQy9CN0IsT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUThCLFlBQVk7UUFDL0M7UUFFQSxJQUFJOUIsUUFBUStCLFdBQVcsS0FBSyxJQUFJO1lBQzlCOUIsT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUStCLFdBQVc7UUFDOUM7UUFFQSxPQUFPOUI7SUFDVDtJQUVBTSxRQUFPQyxLQUFnQyxFQUFFQyxNQUFlO1FBQ3RELE1BQU1DLFNBQ0pGLGlCQUFpQkcsb0JBQVksR0FBR0gsUUFBUSxJQUFJRyxvQkFBWSxDQUFDSDtRQUMzRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTVQsVUFBVTBCO1FBRWhCLE1BQU9oQixPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT04sTUFBTTtZQUV6QixPQUFRWSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hoQixRQUFRMkIsS0FBSyxHQUFHakIsT0FBT0wsTUFBTTtvQkFDN0I7Z0JBRUYsS0FBSztvQkFDSEwsUUFBUTRCLE9BQU8sQ0FBQ08sSUFBSSxDQUFDaEQsZ0JBQWdCb0IsTUFBTSxDQUFDRyxRQUFRQSxPQUFPTixNQUFNO29CQUNqRTtnQkFFRixLQUFLO29CQUNISixRQUFRNkIsTUFBTSxHQUFHbkIsT0FBT0wsTUFBTTtvQkFDOUI7Z0JBRUYsS0FBSztvQkFDSEwsUUFBUThCLFlBQVksR0FBR3BCLE9BQU9KLE1BQU07b0JBQ3BDO2dCQUVGLEtBQUs7b0JBQ0hOLFFBQVErQixXQUFXLEdBQUdyQixPQUFPSixNQUFNO29CQUNuQztnQkFFRjtvQkFDRUksT0FBT08sUUFBUSxDQUFDRCxNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPaEI7SUFDVDtJQUVBa0IsVUFBU0MsTUFBVztRQUNsQixPQUFPO1lBQ0xRLE9BQU9QLElBQUFBLGNBQUssRUFBQ0QsT0FBT1EsS0FBSyxJQUFJOUIsT0FBT3NCLE9BQU9RLEtBQUssSUFBSTlCLE9BQU87WUFDM0QrQixTQUFTUSxNQUFNQyxPQUFPLENBQUNsQixtQkFBQUEsNkJBQUFBLE9BQVFTLE9BQU8sSUFDbENULE9BQU9TLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLENBQUNDLElBQVdwRCxnQkFBZ0IrQixRQUFRLENBQUNxQixNQUN4RCxFQUFFO1lBQ05WLFFBQVFULElBQUFBLGNBQUssRUFBQ0QsT0FBT1UsTUFBTSxJQUFJaEMsT0FBT3NCLE9BQU9VLE1BQU0sSUFBSWhDLE9BQU87WUFDOURpQyxjQUFjVixJQUFBQSxjQUFLLEVBQUNELE9BQU9XLFlBQVksSUFDbkNULE9BQU9GLE9BQU9XLFlBQVksSUFDMUI7WUFDSkMsYUFBYVgsSUFBQUEsY0FBSyxFQUFDRCxPQUFPWSxXQUFXLElBQUlWLE9BQU9GLE9BQU9ZLFdBQVcsSUFBSTtRQUN4RTtJQUNGO0lBRUFULFFBQU90QixPQUFlO1FBQ3BCLE1BQU11QixNQUFXLENBQUM7UUFDbEJ2QixRQUFRMkIsS0FBSyxLQUFLZCxhQUNmVSxDQUFBQSxJQUFJSSxLQUFLLEdBQUcsQUFBQzNCLENBQUFBLFFBQVEyQixLQUFLLElBQUk5QixPQUFPLEVBQUMsRUFBRzJCLFFBQVEsRUFBQztRQUVyRCxJQUFJeEIsUUFBUTRCLE9BQU8sRUFBRTtZQUNuQkwsSUFBSUssT0FBTyxHQUFHNUIsUUFBUTRCLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLENBQUNDLElBQ2pDQSxJQUFJcEQsZ0JBQWdCbUMsTUFBTSxDQUFDaUIsS0FBSzFCO1FBRXBDLE9BQU87WUFDTFUsSUFBSUssT0FBTyxHQUFHLEVBQUU7UUFDbEI7UUFFQTVCLFFBQVE2QixNQUFNLEtBQUtoQixhQUNoQlUsQ0FBQUEsSUFBSU0sTUFBTSxHQUFHLEFBQUM3QixDQUFBQSxRQUFRNkIsTUFBTSxJQUFJaEMsT0FBTyxFQUFDLEVBQUcyQixRQUFRLEVBQUM7UUFDdkR4QixRQUFROEIsWUFBWSxLQUFLakIsYUFDdEJVLENBQUFBLElBQUlPLFlBQVksR0FBRzlCLFFBQVE4QixZQUFZLEFBQUQ7UUFDekM5QixRQUFRK0IsV0FBVyxLQUFLbEIsYUFDckJVLENBQUFBLElBQUlRLFdBQVcsR0FBRy9CLFFBQVErQixXQUFXLEFBQUQ7UUFDdkMsT0FBT1I7SUFDVDtJQUVBRSxhQUFZTixNQUF1QjtZQU8vQkE7UUFORixNQUFNbkIsVUFBVTBCO1FBQ2hCMUIsUUFBUTJCLEtBQUssR0FDWFIsT0FBT1EsS0FBSyxLQUFLZCxhQUFhTSxPQUFPUSxLQUFLLEtBQUssT0FDM0M5QixPQUFPc0IsT0FBT1EsS0FBSyxJQUNuQjlCLE9BQU87UUFDYkcsUUFBUTRCLE9BQU8sR0FDYlQsRUFBQUEsa0JBQUFBLE9BQU9TLE9BQU8sY0FBZFQsc0NBQUFBLGdCQUFnQm1CLEdBQUcsQ0FBQyxDQUFDQyxJQUFNcEQsZ0JBQWdCc0MsV0FBVyxDQUFDYyxRQUFPLEVBQUU7UUFDbEV2QyxRQUFRNkIsTUFBTSxHQUNaVixPQUFPVSxNQUFNLEtBQUtoQixhQUFhTSxPQUFPVSxNQUFNLEtBQUssT0FDN0NoQyxPQUFPc0IsT0FBT1UsTUFBTSxJQUNwQmhDLE9BQU87WUFDVXNCO1FBQXZCbkIsUUFBUThCLFlBQVksR0FBR1gsQ0FBQUEsdUJBQUFBLE9BQU9XLFlBQVksY0FBbkJYLGtDQUFBQSx1QkFBdUI7WUFDeEJBO1FBQXRCbkIsUUFBUStCLFdBQVcsR0FBR1osQ0FBQUEsc0JBQUFBLE9BQU9ZLFdBQVcsY0FBbEJaLGlDQUFBQSxzQkFBc0I7UUFDNUMsT0FBT25CO0lBQ1Q7QUFDRjtBQUVBLFNBQVN3QztJQUNQLE9BQU87UUFDTEMsbUJBQW1CNUMsT0FBTztRQUMxQjZDLHFCQUFxQjdDLE9BQU87SUFDOUI7QUFDRjtBQUVPLE1BQU1QLGtDQUFrQztJQUM3Q1MsUUFDRUMsT0FBd0MsRUFDeENDLFNBQXVCQyxvQkFBWSxDQUFDQyxNQUFNLEVBQUU7UUFFNUMsSUFBSUgsUUFBUXlDLGlCQUFpQixLQUFLNUMsT0FBTyxJQUFJO1lBQzNDSSxPQUFPRyxNQUFNLENBQUMsR0FBR0MsTUFBTSxDQUFDTCxRQUFReUMsaUJBQWlCO1FBQ25EO1FBRUEsSUFBSXpDLFFBQVEwQyxtQkFBbUIsS0FBSzdDLE9BQU8sSUFBSTtZQUM3Q0ksT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0wsUUFBUTBDLG1CQUFtQjtRQUN0RDtRQUVBLE9BQU96QztJQUNUO0lBRUFNLFFBQ0VDLEtBQWdDLEVBQ2hDQyxNQUFlO1FBRWYsTUFBTUMsU0FDSkYsaUJBQWlCRyxvQkFBWSxHQUFHSCxRQUFRLElBQUlHLG9CQUFZLENBQUNIO1FBQzNELElBQUlJLE1BQU1ILFdBQVdJLFlBQVlILE9BQU9JLEdBQUcsR0FBR0osT0FBT0ssR0FBRyxHQUFHTjtRQUMzRCxNQUFNVCxVQUFVd0M7UUFFaEIsTUFBTzlCLE9BQU9LLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSSxNQUFNTixPQUFPTixNQUFNO1lBRXpCLE9BQVFZLFFBQVE7Z0JBQ2QsS0FBSztvQkFDSGhCLFFBQVF5QyxpQkFBaUIsR0FBRy9CLE9BQU9MLE1BQU07b0JBQ3pDO2dCQUVGLEtBQUs7b0JBQ0hMLFFBQVEwQyxtQkFBbUIsR0FBR2hDLE9BQU9MLE1BQU07b0JBQzNDO2dCQUVGO29CQUNFSyxPQUFPTyxRQUFRLENBQUNELE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9oQjtJQUNUO0lBRUFrQixVQUFTQyxNQUFXO1FBQ2xCLE9BQU87WUFDTHNCLG1CQUFtQnJCLElBQUFBLGNBQUssRUFBQ0QsT0FBT3NCLGlCQUFpQixJQUM3QzVDLE9BQU9zQixPQUFPc0IsaUJBQWlCLElBQy9CNUMsT0FBTztZQUNYNkMscUJBQXFCdEIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPdUIsbUJBQW1CLElBQ2pEN0MsT0FBT3NCLE9BQU91QixtQkFBbUIsSUFDakM3QyxPQUFPO1FBQ2I7SUFDRjtJQUVBeUIsUUFBT3RCLE9BQXdDO1FBQzdDLE1BQU11QixNQUFXLENBQUM7UUFDbEJ2QixRQUFReUMsaUJBQWlCLEtBQUs1QixhQUMzQlUsQ0FBQUEsSUFBSWtCLGlCQUFpQixHQUFHLEFBQ3ZCekMsQ0FBQUEsUUFBUXlDLGlCQUFpQixJQUFJNUMsT0FBTyxFQUFDLEVBQ3JDMkIsUUFBUSxFQUFDO1FBQ2J4QixRQUFRMEMsbUJBQW1CLEtBQUs3QixhQUM3QlUsQ0FBQUEsSUFBSW1CLG1CQUFtQixHQUFHLEFBQ3pCMUMsQ0FBQUEsUUFBUTBDLG1CQUFtQixJQUFJN0MsT0FBTyxFQUFDLEVBQ3ZDMkIsUUFBUSxFQUFDO1FBQ2IsT0FBT0Q7SUFDVDtJQUVBRSxhQUNFTixNQUFnRDtRQUVoRCxNQUFNbkIsVUFBVXdDO1FBQ2hCeEMsUUFBUXlDLGlCQUFpQixHQUN2QnRCLE9BQU9zQixpQkFBaUIsS0FBSzVCLGFBQzdCTSxPQUFPc0IsaUJBQWlCLEtBQUssT0FDekI1QyxPQUFPc0IsT0FBT3NCLGlCQUFpQixJQUMvQjVDLE9BQU87UUFDYkcsUUFBUTBDLG1CQUFtQixHQUN6QnZCLE9BQU91QixtQkFBbUIsS0FBSzdCLGFBQy9CTSxPQUFPdUIsbUJBQW1CLEtBQUssT0FDM0I3QyxPQUFPc0IsT0FBT3VCLG1CQUFtQixJQUNqQzdDLE9BQU87UUFDYixPQUFPRztJQUNUO0FBQ0Y7QUFFQSxTQUFTMkM7SUFDUCxPQUFPO1FBQ0xDLE9BQU87UUFDUEMsT0FBTztJQUNUO0FBQ0Y7QUFFTyxNQUFNekQsZUFBZTtJQUMxQlcsUUFDRUMsT0FBcUIsRUFDckJDLFNBQXVCQyxvQkFBWSxDQUFDQyxNQUFNLEVBQUU7UUFFNUMsSUFBSUgsUUFBUTRDLEtBQUssS0FBSyxJQUFJO1lBQ3hCM0MsT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUTRDLEtBQUs7UUFDeEM7UUFFQSxJQUFJNUMsUUFBUTZDLEtBQUssS0FBSyxJQUFJO1lBQ3hCNUMsT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUTZDLEtBQUs7UUFDeEM7UUFFQSxPQUFPNUM7SUFDVDtJQUVBTSxRQUFPQyxLQUFnQyxFQUFFQyxNQUFlO1FBQ3RELE1BQU1DLFNBQ0pGLGlCQUFpQkcsb0JBQVksR0FBR0gsUUFBUSxJQUFJRyxvQkFBWSxDQUFDSDtRQUMzRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTVQsVUFBVTJDO1FBRWhCLE1BQU9qQyxPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT04sTUFBTTtZQUV6QixPQUFRWSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hoQixRQUFRNEMsS0FBSyxHQUFHbEMsT0FBT0osTUFBTTtvQkFDN0I7Z0JBRUYsS0FBSztvQkFDSE4sUUFBUTZDLEtBQUssR0FBR25DLE9BQU9KLE1BQU07b0JBQzdCO2dCQUVGO29CQUNFSSxPQUFPTyxRQUFRLENBQUNELE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9oQjtJQUNUO0lBRUFrQixVQUFTQyxNQUFXO1FBQ2xCLE9BQU87WUFDTHlCLE9BQU94QixJQUFBQSxjQUFLLEVBQUNELE9BQU95QixLQUFLLElBQUl2QixPQUFPRixPQUFPeUIsS0FBSyxJQUFJO1lBQ3BEQyxPQUFPekIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPMEIsS0FBSyxJQUFJeEIsT0FBT0YsT0FBTzBCLEtBQUssSUFBSTtRQUN0RDtJQUNGO0lBRUF2QixRQUFPdEIsT0FBcUI7UUFDMUIsTUFBTXVCLE1BQVcsQ0FBQztRQUNsQnZCLFFBQVE0QyxLQUFLLEtBQUsvQixhQUFjVSxDQUFBQSxJQUFJcUIsS0FBSyxHQUFHNUMsUUFBUTRDLEtBQUssQUFBRDtRQUN4RDVDLFFBQVE2QyxLQUFLLEtBQUtoQyxhQUFjVSxDQUFBQSxJQUFJc0IsS0FBSyxHQUFHN0MsUUFBUTZDLEtBQUssQUFBRDtRQUN4RCxPQUFPdEI7SUFDVDtJQUVBRSxhQUFZTixNQUE2QjtRQUN2QyxNQUFNbkIsVUFBVTJDO1lBQ0F4QjtRQUFoQm5CLFFBQVE0QyxLQUFLLEdBQUd6QixDQUFBQSxnQkFBQUEsT0FBT3lCLEtBQUssY0FBWnpCLDJCQUFBQSxnQkFBZ0I7WUFDaEJBO1FBQWhCbkIsUUFBUTZDLEtBQUssR0FBRzFCLENBQUFBLGdCQUFBQSxPQUFPMEIsS0FBSyxjQUFaMUIsMkJBQUFBLGdCQUFnQjtRQUNoQyxPQUFPbkI7SUFDVDtBQUNGO0FBRUEsU0FBUzhDO0lBQ1AsT0FBTztRQUNMQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsYUFBYXBELE9BQU87SUFDdEI7QUFDRjtBQUVPLE1BQU1MLHVCQUF1QjtJQUNsQ08sUUFDRUMsT0FBNkIsRUFDN0JDLFNBQXVCQyxvQkFBWSxDQUFDQyxNQUFNLEVBQUU7UUFFNUMsSUFBSUgsUUFBUStDLEtBQUssS0FBSyxJQUFJO1lBQ3hCOUMsT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUStDLEtBQUs7UUFDeEM7UUFFQSxJQUFJL0MsUUFBUWdELFdBQVcsS0FBSyxJQUFJO1lBQzlCL0MsT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUWdELFdBQVc7UUFDOUM7UUFFQSxJQUFJaEQsUUFBUWlELFdBQVcsS0FBS3BELE9BQU8sSUFBSTtZQUNyQ0ksT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0wsUUFBUWlELFdBQVc7UUFDOUM7UUFFQSxPQUFPaEQ7SUFDVDtJQUVBTSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQkcsb0JBQVksR0FBR0gsUUFBUSxJQUFJRyxvQkFBWSxDQUFDSDtRQUMzRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTVQsVUFBVThDO1FBRWhCLE1BQU9wQyxPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT04sTUFBTTtZQUV6QixPQUFRWSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hoQixRQUFRK0MsS0FBSyxHQUFHckMsT0FBT0osTUFBTTtvQkFDN0I7Z0JBRUYsS0FBSztvQkFDSE4sUUFBUWdELFdBQVcsR0FBR3RDLE9BQU9KLE1BQU07b0JBQ25DO2dCQUVGLEtBQUs7b0JBQ0hOLFFBQVFpRCxXQUFXLEdBQUd2QyxPQUFPTCxNQUFNO29CQUNuQztnQkFFRjtvQkFDRUssT0FBT08sUUFBUSxDQUFDRCxNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPaEI7SUFDVDtJQUVBa0IsVUFBU0MsTUFBVztRQUNsQixPQUFPO1lBQ0w0QixPQUFPM0IsSUFBQUEsY0FBSyxFQUFDRCxPQUFPNEIsS0FBSyxJQUFJMUIsT0FBT0YsT0FBTzRCLEtBQUssSUFBSTtZQUNwREMsYUFBYTVCLElBQUFBLGNBQUssRUFBQ0QsT0FBTzZCLFdBQVcsSUFBSTNCLE9BQU9GLE9BQU82QixXQUFXLElBQUk7WUFDdEVDLGFBQWE3QixJQUFBQSxjQUFLLEVBQUNELE9BQU84QixXQUFXLElBQ2pDcEQsT0FBT3NCLE9BQU84QixXQUFXLElBQ3pCcEQsT0FBTztRQUNiO0lBQ0Y7SUFFQXlCLFFBQU90QixPQUE2QjtRQUNsQyxNQUFNdUIsTUFBVyxDQUFDO1FBQ2xCdkIsUUFBUStDLEtBQUssS0FBS2xDLGFBQWNVLENBQUFBLElBQUl3QixLQUFLLEdBQUcvQyxRQUFRK0MsS0FBSyxBQUFEO1FBQ3hEL0MsUUFBUWdELFdBQVcsS0FBS25DLGFBQ3JCVSxDQUFBQSxJQUFJeUIsV0FBVyxHQUFHaEQsUUFBUWdELFdBQVcsQUFBRDtRQUN2Q2hELFFBQVFpRCxXQUFXLEtBQUtwQyxhQUNyQlUsQ0FBQUEsSUFBSTBCLFdBQVcsR0FBRyxBQUFDakQsQ0FBQUEsUUFBUWlELFdBQVcsSUFBSXBELE9BQU8sRUFBQyxFQUFHMkIsUUFBUSxFQUFDO1FBQ2pFLE9BQU9EO0lBQ1Q7SUFFQUUsYUFBWU4sTUFBcUM7UUFDL0MsTUFBTW5CLFVBQVU4QztZQUNBM0I7UUFBaEJuQixRQUFRK0MsS0FBSyxHQUFHNUIsQ0FBQUEsZ0JBQUFBLE9BQU80QixLQUFLLGNBQVo1QiwyQkFBQUEsZ0JBQWdCO1lBQ1ZBO1FBQXRCbkIsUUFBUWdELFdBQVcsR0FBRzdCLENBQUFBLHNCQUFBQSxPQUFPNkIsV0FBVyxjQUFsQjdCLGlDQUFBQSxzQkFBc0I7UUFDNUNuQixRQUFRaUQsV0FBVyxHQUNqQjlCLE9BQU84QixXQUFXLEtBQUtwQyxhQUFhTSxPQUFPOEIsV0FBVyxLQUFLLE9BQ3ZEcEQsT0FBT3NCLE9BQU84QixXQUFXLElBQ3pCcEQsT0FBTztRQUNiLE9BQU9HO0lBQ1Q7QUFDRjtBQUVBLFNBQVNrRDtJQUNQLE9BQU87UUFDTEgsT0FBTztRQUNQQyxhQUFhO1FBQ2JILE9BQU87UUFDUE0sWUFBWSxJQUFJQztRQUNoQkMsU0FBUyxFQUFFO0lBQ2I7QUFDRjtBQUVPLE1BQU1uRSxrQkFBa0I7SUFDN0JhLFFBQ0VDLE9BQXdCLEVBQ3hCQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLElBQUlILFFBQVErQyxLQUFLLEtBQUssSUFBSTtZQUN4QjlDLE9BQU9HLE1BQU0sQ0FBQyxJQUFJRSxNQUFNLENBQUNOLFFBQVErQyxLQUFLO1FBQ3hDO1FBRUEsSUFBSS9DLFFBQVFnRCxXQUFXLEtBQUssSUFBSTtZQUM5Qi9DLE9BQU9HLE1BQU0sQ0FBQyxJQUFJRSxNQUFNLENBQUNOLFFBQVFnRCxXQUFXO1FBQzlDO1FBRUEsSUFBSWhELFFBQVE2QyxLQUFLLEtBQUssSUFBSTtZQUN4QjVDLE9BQU9HLE1BQU0sQ0FBQyxJQUFJRSxNQUFNLENBQUNOLFFBQVE2QyxLQUFLO1FBQ3hDO1FBRUEsSUFBSTdDLFFBQVFtRCxVQUFVLENBQUMxQyxNQUFNLEtBQUssR0FBRztZQUNuQ1IsT0FBT0csTUFBTSxDQUFDLElBQUlrRCxLQUFLLENBQUN0RCxRQUFRbUQsVUFBVTtRQUM1QztRQUVBbEQsT0FBT0csTUFBTSxDQUFDLElBQUk2QixJQUFJO1FBRXRCLEtBQUssTUFBTUQsS0FBS2hDLFFBQVFxRCxPQUFPLENBQUU7WUFDL0JwRCxPQUFPSSxNQUFNLENBQUMyQjtRQUNoQjtRQUVBL0IsT0FBT2lDLE1BQU07UUFDYixPQUFPakM7SUFDVDtJQUVBTSxRQUFPQyxLQUFnQyxFQUFFQyxNQUFlO1FBQ3RELE1BQU1DLFNBQ0pGLGlCQUFpQkcsb0JBQVksR0FBR0gsUUFBUSxJQUFJRyxvQkFBWSxDQUFDSDtRQUMzRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTVQsVUFBVWtEO1FBRWhCLE1BQU94QyxPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT04sTUFBTTtZQUV6QixPQUFRWSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hoQixRQUFRK0MsS0FBSyxHQUFHckMsT0FBT0osTUFBTTtvQkFDN0I7Z0JBRUYsS0FBSztvQkFDSE4sUUFBUWdELFdBQVcsR0FBR3RDLE9BQU9KLE1BQU07b0JBQ25DO2dCQUVGLEtBQUs7b0JBQ0hOLFFBQVE2QyxLQUFLLEdBQUduQyxPQUFPSixNQUFNO29CQUM3QjtnQkFFRixLQUFLO29CQUNITixRQUFRbUQsVUFBVSxHQUFHekMsT0FBTzRDLEtBQUs7b0JBQ2pDO2dCQUVGLEtBQUs7b0JBQ0gsSUFBSSxBQUFDdEMsQ0FBQUEsTUFBTSxDQUFBLE1BQU8sR0FBRzt3QkFDbkIsTUFBTXVDLE9BQU83QyxPQUFPTixNQUFNLEtBQUtNLE9BQU9LLEdBQUc7d0JBRXpDLE1BQU9MLE9BQU9LLEdBQUcsR0FBR3dDLEtBQU07NEJBQ3hCdkQsUUFBUXFELE9BQU8sQ0FBQ2xCLElBQUksQ0FBQ3pCLE9BQU9MLE1BQU07d0JBQ3BDO29CQUNGLE9BQU87d0JBQ0xMLFFBQVFxRCxPQUFPLENBQUNsQixJQUFJLENBQUN6QixPQUFPTCxNQUFNO29CQUNwQztvQkFFQTtnQkFFRjtvQkFDRUssT0FBT08sUUFBUSxDQUFDRCxNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPaEI7SUFDVDtJQUVBa0IsVUFBU0MsTUFBVztRQUNsQixPQUFPO1lBQ0w0QixPQUFPM0IsSUFBQUEsY0FBSyxFQUFDRCxPQUFPNEIsS0FBSyxJQUFJMUIsT0FBT0YsT0FBTzRCLEtBQUssSUFBSTtZQUNwREMsYUFBYTVCLElBQUFBLGNBQUssRUFBQ0QsT0FBTzZCLFdBQVcsSUFBSTNCLE9BQU9GLE9BQU82QixXQUFXLElBQUk7WUFDdEVILE9BQU96QixJQUFBQSxjQUFLLEVBQUNELE9BQU8wQixLQUFLLElBQUl4QixPQUFPRixPQUFPMEIsS0FBSyxJQUFJO1lBQ3BETSxZQUFZL0IsSUFBQUEsY0FBSyxFQUFDRCxPQUFPZ0MsVUFBVSxJQUMvQkssSUFBQUEsd0JBQWUsRUFBQ3JDLE9BQU9nQyxVQUFVLElBQ2pDLElBQUlDO1lBQ1JDLFNBQVNqQixNQUFNQyxPQUFPLENBQUNsQixtQkFBQUEsNkJBQUFBLE9BQVFrQyxPQUFPLElBQ2xDbEMsT0FBT2tDLE9BQU8sQ0FBQ2YsR0FBRyxDQUFDLENBQUNDLElBQVcxQyxPQUFPMEMsTUFDdEMsRUFBRTtRQUNSO0lBQ0Y7SUFFQWpCLFFBQU90QixPQUF3QjtRQUM3QixNQUFNdUIsTUFBVyxDQUFDO1FBQ2xCdkIsUUFBUStDLEtBQUssS0FBS2xDLGFBQWNVLENBQUFBLElBQUl3QixLQUFLLEdBQUcvQyxRQUFRK0MsS0FBSyxBQUFEO1FBQ3hEL0MsUUFBUWdELFdBQVcsS0FBS25DLGFBQ3JCVSxDQUFBQSxJQUFJeUIsV0FBVyxHQUFHaEQsUUFBUWdELFdBQVcsQUFBRDtRQUN2Q2hELFFBQVE2QyxLQUFLLEtBQUtoQyxhQUFjVSxDQUFBQSxJQUFJc0IsS0FBSyxHQUFHN0MsUUFBUTZDLEtBQUssQUFBRDtRQUN4RDdDLFFBQVFtRCxVQUFVLEtBQUt0QyxhQUNwQlUsQ0FBQUEsSUFBSTRCLFVBQVUsR0FBR00sSUFBQUEsd0JBQWUsRUFDL0J6RCxRQUFRbUQsVUFBVSxLQUFLdEMsWUFBWWIsUUFBUW1ELFVBQVUsR0FBRyxJQUFJQyxhQUM5RDtRQUVGLElBQUlwRCxRQUFRcUQsT0FBTyxFQUFFO1lBQ25COUIsSUFBSThCLE9BQU8sR0FBR3JELFFBQVFxRCxPQUFPLENBQUNmLEdBQUcsQ0FBQyxDQUFDQyxJQUFNLEFBQUNBLENBQUFBLEtBQUsxQyxPQUFPLEVBQUMsRUFBRzJCLFFBQVE7UUFDcEUsT0FBTztZQUNMRCxJQUFJOEIsT0FBTyxHQUFHLEVBQUU7UUFDbEI7UUFFQSxPQUFPOUI7SUFDVDtJQUVBRSxhQUFZTixNQUFnQztZQU14QkE7UUFMbEIsTUFBTW5CLFVBQVVrRDtZQUNBL0I7UUFBaEJuQixRQUFRK0MsS0FBSyxHQUFHNUIsQ0FBQUEsZ0JBQUFBLE9BQU80QixLQUFLLGNBQVo1QiwyQkFBQUEsZ0JBQWdCO1lBQ1ZBO1FBQXRCbkIsUUFBUWdELFdBQVcsR0FBRzdCLENBQUFBLHNCQUFBQSxPQUFPNkIsV0FBVyxjQUFsQjdCLGlDQUFBQSxzQkFBc0I7WUFDNUJBO1FBQWhCbkIsUUFBUTZDLEtBQUssR0FBRzFCLENBQUFBLGdCQUFBQSxPQUFPMEIsS0FBSyxjQUFaMUIsMkJBQUFBLGdCQUFnQjtZQUNYQTtRQUFyQm5CLFFBQVFtRCxVQUFVLEdBQUdoQyxDQUFBQSxxQkFBQUEsT0FBT2dDLFVBQVUsY0FBakJoQyxnQ0FBQUEscUJBQXFCLElBQUlpQztRQUM5Q3BELFFBQVFxRCxPQUFPLEdBQUdsQyxFQUFBQSxrQkFBQUEsT0FBT2tDLE9BQU8sY0FBZGxDLHNDQUFBQSxnQkFBZ0JtQixHQUFHLENBQUMsQ0FBQ0MsSUFBTTFDLE9BQU8wQyxRQUFPLEVBQUU7UUFDN0QsT0FBT3ZDO0lBQ1Q7QUFDRjtBQUVBLFNBQVMwRDtJQUNQLE9BQU87UUFDTFgsT0FBTztRQUNQQyxhQUFhO1FBQ2JXLFVBQVU5QztRQUNWK0MsVUFBVTtJQUNaO0FBQ0Y7QUFFTyxNQUFNdkUsc0JBQXNCO0lBQ2pDVSxRQUNFQyxPQUE0QixFQUM1QkMsU0FBdUJDLG9CQUFZLENBQUNDLE1BQU0sRUFBRTtRQUU1QyxJQUFJSCxRQUFRK0MsS0FBSyxLQUFLLElBQUk7WUFDeEI5QyxPQUFPRyxNQUFNLENBQUMsSUFBSUUsTUFBTSxDQUFDTixRQUFRK0MsS0FBSztRQUN4QztRQUVBLElBQUkvQyxRQUFRZ0QsV0FBVyxLQUFLLElBQUk7WUFDOUIvQyxPQUFPRyxNQUFNLENBQUMsSUFBSUUsTUFBTSxDQUFDTixRQUFRZ0QsV0FBVztRQUM5QztRQUVBLElBQUloRCxRQUFRMkQsUUFBUSxLQUFLOUMsV0FBVztZQUNsQ2dELGNBQVEsQ0FBQzlELE1BQU0sQ0FBQ0MsUUFBUTJELFFBQVEsRUFBRTFELE9BQU9HLE1BQU0sQ0FBQyxJQUFJNkIsSUFBSSxJQUFJQyxNQUFNO1FBQ3BFO1FBRUEsSUFBSWxDLFFBQVE0RCxRQUFRLEtBQUssSUFBSTtZQUMzQjNELE9BQU9HLE1BQU0sQ0FBQyxJQUFJRSxNQUFNLENBQUNOLFFBQVE0RCxRQUFRO1FBQzNDO1FBRUEsT0FBTzNEO0lBQ1Q7SUFFQU0sUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJHLG9CQUFZLEdBQUdILFFBQVEsSUFBSUcsb0JBQVksQ0FBQ0g7UUFDM0QsSUFBSUksTUFBTUgsV0FBV0ksWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdOO1FBQzNELE1BQU1ULFVBQVUwRDtRQUVoQixNQUFPaEQsT0FBT0ssR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1JLE1BQU1OLE9BQU9OLE1BQU07WUFFekIsT0FBUVksUUFBUTtnQkFDZCxLQUFLO29CQUNIaEIsUUFBUStDLEtBQUssR0FBR3JDLE9BQU9KLE1BQU07b0JBQzdCO2dCQUVGLEtBQUs7b0JBQ0hOLFFBQVFnRCxXQUFXLEdBQUd0QyxPQUFPSixNQUFNO29CQUNuQztnQkFFRixLQUFLO29CQUNITixRQUFRMkQsUUFBUSxHQUFHRSxjQUFRLENBQUN0RCxNQUFNLENBQUNHLFFBQVFBLE9BQU9OLE1BQU07b0JBQ3hEO2dCQUVGLEtBQUs7b0JBQ0hKLFFBQVE0RCxRQUFRLEdBQUdsRCxPQUFPSixNQUFNO29CQUNoQztnQkFFRjtvQkFDRUksT0FBT08sUUFBUSxDQUFDRCxNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPaEI7SUFDVDtJQUVBa0IsVUFBU0MsTUFBVztRQUNsQixPQUFPO1lBQ0w0QixPQUFPM0IsSUFBQUEsY0FBSyxFQUFDRCxPQUFPNEIsS0FBSyxJQUFJMUIsT0FBT0YsT0FBTzRCLEtBQUssSUFBSTtZQUNwREMsYUFBYTVCLElBQUFBLGNBQUssRUFBQ0QsT0FBTzZCLFdBQVcsSUFBSTNCLE9BQU9GLE9BQU82QixXQUFXLElBQUk7WUFDdEVXLFVBQVV2QyxJQUFBQSxjQUFLLEVBQUNELE9BQU93QyxRQUFRLElBQzNCRSxjQUFRLENBQUMzQyxRQUFRLENBQUNDLE9BQU93QyxRQUFRLElBQ2pDOUM7WUFDSitDLFVBQVV4QyxJQUFBQSxjQUFLLEVBQUNELE9BQU95QyxRQUFRLElBQUl2QyxPQUFPRixPQUFPeUMsUUFBUSxJQUFJO1FBQy9EO0lBQ0Y7SUFFQXRDLFFBQU90QixPQUE0QjtRQUNqQyxNQUFNdUIsTUFBVyxDQUFDO1FBQ2xCdkIsUUFBUStDLEtBQUssS0FBS2xDLGFBQWNVLENBQUFBLElBQUl3QixLQUFLLEdBQUcvQyxRQUFRK0MsS0FBSyxBQUFEO1FBQ3hEL0MsUUFBUWdELFdBQVcsS0FBS25DLGFBQ3JCVSxDQUFBQSxJQUFJeUIsV0FBVyxHQUFHaEQsUUFBUWdELFdBQVcsQUFBRDtRQUN2Q2hELFFBQVEyRCxRQUFRLEtBQUs5QyxhQUNsQlUsQ0FBQUEsSUFBSW9DLFFBQVEsR0FBRzNELFFBQVEyRCxRQUFRLEdBQzVCRSxjQUFRLENBQUN2QyxNQUFNLENBQUN0QixRQUFRMkQsUUFBUSxJQUNoQzlDLFNBQVE7UUFDZGIsUUFBUTRELFFBQVEsS0FBSy9DLGFBQWNVLENBQUFBLElBQUlxQyxRQUFRLEdBQUc1RCxRQUFRNEQsUUFBUSxBQUFEO1FBQ2pFLE9BQU9yQztJQUNUO0lBRUFFLGFBQVlOLE1BQW9DO1FBQzlDLE1BQU1uQixVQUFVMEQ7WUFDQXZDO1FBQWhCbkIsUUFBUStDLEtBQUssR0FBRzVCLENBQUFBLGdCQUFBQSxPQUFPNEIsS0FBSyxjQUFaNUIsMkJBQUFBLGdCQUFnQjtZQUNWQTtRQUF0Qm5CLFFBQVFnRCxXQUFXLEdBQUc3QixDQUFBQSxzQkFBQUEsT0FBTzZCLFdBQVcsY0FBbEI3QixpQ0FBQUEsc0JBQXNCO1FBQzVDbkIsUUFBUTJELFFBQVEsR0FDZHhDLE9BQU93QyxRQUFRLEtBQUs5QyxhQUFhTSxPQUFPd0MsUUFBUSxLQUFLLE9BQ2pERSxjQUFRLENBQUNwQyxXQUFXLENBQUNOLE9BQU93QyxRQUFRLElBQ3BDOUM7WUFDYU07UUFBbkJuQixRQUFRNEQsUUFBUSxHQUFHekMsQ0FBQUEsbUJBQUFBLE9BQU95QyxRQUFRLGNBQWZ6Qyw4QkFBQUEsbUJBQW1CO1FBQ3RDLE9BQU9uQjtJQUNUO0FBQ0Y7QUFFQSxTQUFTOEQ7SUFDUCxPQUFPO1FBQ0xDLGlCQUFpQjtRQUNqQkMsT0FBT25EO1FBQ1BvRCxZQUFZO1FBQ1pDLFlBQVlyRSxPQUFPO0lBQ3JCO0FBQ0Y7QUFFTyxNQUFNTix3QkFBd0I7SUFDbkNRLFFBQ0VDLE9BQThCLEVBQzlCQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLElBQUlILFFBQVErRCxlQUFlLEtBQUssSUFBSTtZQUNsQzlELE9BQU9HLE1BQU0sQ0FBQyxJQUFJRSxNQUFNLENBQUNOLFFBQVErRCxlQUFlO1FBQ2xEO1FBRUEsSUFBSS9ELFFBQVFnRSxLQUFLLEtBQUtuRCxXQUFXO1lBQy9Cc0QsVUFBSSxDQUFDcEUsTUFBTSxDQUFDQyxRQUFRZ0UsS0FBSyxFQUFFL0QsT0FBT0csTUFBTSxDQUFDLElBQUk2QixJQUFJLElBQUlDLE1BQU07UUFDN0Q7UUFFQSxJQUFJbEMsUUFBUWlFLFVBQVUsS0FBSyxJQUFJO1lBQzdCaEUsT0FBT0csTUFBTSxDQUFDLElBQUlFLE1BQU0sQ0FBQ04sUUFBUWlFLFVBQVU7UUFDN0M7UUFFQSxJQUFJakUsUUFBUWtFLFVBQVUsS0FBS3JFLE9BQU8sSUFBSTtZQUNwQ0ksT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0wsUUFBUWtFLFVBQVU7UUFDN0M7UUFFQSxPQUFPakU7SUFDVDtJQUVBTSxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQkcsb0JBQVksR0FBR0gsUUFBUSxJQUFJRyxvQkFBWSxDQUFDSDtRQUMzRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTVQsVUFBVThEO1FBRWhCLE1BQU9wRCxPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT04sTUFBTTtZQUV6QixPQUFRWSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0hoQixRQUFRK0QsZUFBZSxHQUFHckQsT0FBT0osTUFBTTtvQkFDdkM7Z0JBRUYsS0FBSztvQkFDSE4sUUFBUWdFLEtBQUssR0FBR0csVUFBSSxDQUFDNUQsTUFBTSxDQUFDRyxRQUFRQSxPQUFPTixNQUFNO29CQUNqRDtnQkFFRixLQUFLO29CQUNISixRQUFRaUUsVUFBVSxHQUFHdkQsT0FBT0osTUFBTTtvQkFDbEM7Z0JBRUYsS0FBSztvQkFDSE4sUUFBUWtFLFVBQVUsR0FBR3hELE9BQU9MLE1BQU07b0JBQ2xDO2dCQUVGO29CQUNFSyxPQUFPTyxRQUFRLENBQUNELE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9oQjtJQUNUO0lBRUFrQixVQUFTQyxNQUFXO1FBQ2xCLE9BQU87WUFDTDRDLGlCQUFpQjNDLElBQUFBLGNBQUssRUFBQ0QsT0FBTzRDLGVBQWUsSUFDekMxQyxPQUFPRixPQUFPNEMsZUFBZSxJQUM3QjtZQUNKQyxPQUFPNUMsSUFBQUEsY0FBSyxFQUFDRCxPQUFPNkMsS0FBSyxJQUFJRyxVQUFJLENBQUNqRCxRQUFRLENBQUNDLE9BQU82QyxLQUFLLElBQUluRDtZQUMzRG9ELFlBQVk3QyxJQUFBQSxjQUFLLEVBQUNELE9BQU84QyxVQUFVLElBQUk1QyxPQUFPRixPQUFPOEMsVUFBVSxJQUFJO1lBQ25FQyxZQUFZOUMsSUFBQUEsY0FBSyxFQUFDRCxPQUFPK0MsVUFBVSxJQUMvQnJFLE9BQU9zQixPQUFPK0MsVUFBVSxJQUN4QnJFLE9BQU87UUFDYjtJQUNGO0lBRUF5QixRQUFPdEIsT0FBOEI7UUFDbkMsTUFBTXVCLE1BQVcsQ0FBQztRQUNsQnZCLFFBQVErRCxlQUFlLEtBQUtsRCxhQUN6QlUsQ0FBQUEsSUFBSXdDLGVBQWUsR0FBRy9ELFFBQVErRCxlQUFlLEFBQUQ7UUFDL0MvRCxRQUFRZ0UsS0FBSyxLQUFLbkQsYUFDZlUsQ0FBQUEsSUFBSXlDLEtBQUssR0FBR2hFLFFBQVFnRSxLQUFLLEdBQUdHLFVBQUksQ0FBQzdDLE1BQU0sQ0FBQ3RCLFFBQVFnRSxLQUFLLElBQUluRCxTQUFRO1FBQ3BFYixRQUFRaUUsVUFBVSxLQUFLcEQsYUFBY1UsQ0FBQUEsSUFBSTBDLFVBQVUsR0FBR2pFLFFBQVFpRSxVQUFVLEFBQUQ7UUFDdkVqRSxRQUFRa0UsVUFBVSxLQUFLckQsYUFDcEJVLENBQUFBLElBQUkyQyxVQUFVLEdBQUcsQUFBQ2xFLENBQUFBLFFBQVFrRSxVQUFVLElBQUlyRSxPQUFPLEVBQUMsRUFBRzJCLFFBQVEsRUFBQztRQUMvRCxPQUFPRDtJQUNUO0lBRUFFLGFBQVlOLE1BQXNDO1FBQ2hELE1BQU1uQixVQUFVOEQ7WUFDVTNDO1FBQTFCbkIsUUFBUStELGVBQWUsR0FBRzVDLENBQUFBLDBCQUFBQSxPQUFPNEMsZUFBZSxjQUF0QjVDLHFDQUFBQSwwQkFBMEI7UUFDcERuQixRQUFRZ0UsS0FBSyxHQUNYN0MsT0FBTzZDLEtBQUssS0FBS25ELGFBQWFNLE9BQU82QyxLQUFLLEtBQUssT0FDM0NHLFVBQUksQ0FBQzFDLFdBQVcsQ0FBQ04sT0FBTzZDLEtBQUssSUFDN0JuRDtZQUNlTTtRQUFyQm5CLFFBQVFpRSxVQUFVLEdBQUc5QyxDQUFBQSxxQkFBQUEsT0FBTzhDLFVBQVUsY0FBakI5QyxnQ0FBQUEscUJBQXFCO1FBQzFDbkIsUUFBUWtFLFVBQVUsR0FDaEIvQyxPQUFPK0MsVUFBVSxLQUFLckQsYUFBYU0sT0FBTytDLFVBQVUsS0FBSyxPQUNyRHJFLE9BQU9zQixPQUFPK0MsVUFBVSxJQUN4QnJFLE9BQU87UUFDYixPQUFPRztJQUNUO0FBQ0YifQ==
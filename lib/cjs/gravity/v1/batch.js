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
    EventOutgoingBatch: function() {
        return EventOutgoingBatch;
    },
    EventOutgoingBatchCanceled: function() {
        return EventOutgoingBatchCanceled;
    },
    OutgoingLogicCall: function() {
        return OutgoingLogicCall;
    },
    OutgoingTransferTx: function() {
        return OutgoingTransferTx;
    },
    OutgoingTxBatch: function() {
        return OutgoingTxBatch;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _attestation = require("./attestation");
const _helpers = require("./helpers");
const protobufPackage = "gravity.v1";
function createBaseOutgoingTxBatch() {
    return {
        batchNonce: BigInt(0),
        batchTimeout: BigInt(0),
        transactions: [],
        tokenContract: "",
        cosmosBlockCreated: BigInt(0)
    };
}
const OutgoingTxBatch = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.batchNonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (message.batchTimeout !== BigInt(0)) {
            writer.uint32(16).uint64(message.batchTimeout);
        }
        for (const v of message.transactions){
            OutgoingTransferTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.cosmosBlockCreated !== BigInt(0)) {
            writer.uint32(40).uint64(message.cosmosBlockCreated);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTxBatch();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.batchNonce = reader.uint64();
                    break;
                case 2:
                    message.batchTimeout = reader.uint64();
                    break;
                case 3:
                    message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.cosmosBlockCreated = reader.uint64();
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
            batchNonce: (0, _helpers.isSet)(object.batchNonce) ? BigInt(object.batchNonce) : BigInt(0),
            batchTimeout: (0, _helpers.isSet)(object.batchTimeout) ? BigInt(object.batchTimeout) : BigInt(0),
            transactions: Array.isArray(object === null || object === void 0 ? void 0 : object.transactions) ? object.transactions.map((e)=>OutgoingTransferTx.fromJSON(e)) : [],
            tokenContract: (0, _helpers.isSet)(object.tokenContract) ? String(object.tokenContract) : "",
            cosmosBlockCreated: (0, _helpers.isSet)(object.cosmosBlockCreated) ? BigInt(object.cosmosBlockCreated) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.batchNonce !== undefined && (obj.batchNonce = (message.batchNonce || BigInt(0)).toString());
        message.batchTimeout !== undefined && (obj.batchTimeout = (message.batchTimeout || BigInt(0)).toString());
        if (message.transactions) {
            obj.transactions = message.transactions.map((e)=>e ? OutgoingTransferTx.toJSON(e) : undefined);
        } else {
            obj.transactions = [];
        }
        message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
        message.cosmosBlockCreated !== undefined && (obj.cosmosBlockCreated = (message.cosmosBlockCreated || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        var _object_transactions;
        const message = createBaseOutgoingTxBatch();
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? BigInt(object.batchNonce) : BigInt(0);
        message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? BigInt(object.batchTimeout) : BigInt(0);
        message.transactions = ((_object_transactions = object.transactions) === null || _object_transactions === void 0 ? void 0 : _object_transactions.map((e)=>OutgoingTransferTx.fromPartial(e))) || [];
        var _object_tokenContract;
        message.tokenContract = (_object_tokenContract = object.tokenContract) !== null && _object_tokenContract !== void 0 ? _object_tokenContract : "";
        message.cosmosBlockCreated = object.cosmosBlockCreated !== undefined && object.cosmosBlockCreated !== null ? BigInt(object.cosmosBlockCreated) : BigInt(0);
        return message;
    }
};
function createBaseOutgoingTransferTx() {
    return {
        id: BigInt(0),
        sender: "",
        destAddress: "",
        erc20Token: undefined,
        erc20Fee: undefined
    };
}
const OutgoingTransferTx = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        if (message.erc20Token !== undefined) {
            _attestation.ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            _attestation.ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTransferTx();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.destAddress = reader.string();
                    break;
                case 4:
                    message.erc20Token = _attestation.ERC20Token.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.erc20Fee = _attestation.ERC20Token.decode(reader, reader.uint32());
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
            id: (0, _helpers.isSet)(object.id) ? BigInt(object.id) : BigInt(0),
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
            destAddress: (0, _helpers.isSet)(object.destAddress) ? String(object.destAddress) : "",
            erc20Token: (0, _helpers.isSet)(object.erc20Token) ? _attestation.ERC20Token.fromJSON(object.erc20Token) : undefined,
            erc20Fee: (0, _helpers.isSet)(object.erc20Fee) ? _attestation.ERC20Token.fromJSON(object.erc20Fee) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.destAddress !== undefined && (obj.destAddress = message.destAddress);
        message.erc20Token !== undefined && (obj.erc20Token = message.erc20Token ? _attestation.ERC20Token.toJSON(message.erc20Token) : undefined);
        message.erc20Fee !== undefined && (obj.erc20Fee = message.erc20Fee ? _attestation.ERC20Token.toJSON(message.erc20Fee) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseOutgoingTransferTx();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id) : BigInt(0);
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        var _object_destAddress;
        message.destAddress = (_object_destAddress = object.destAddress) !== null && _object_destAddress !== void 0 ? _object_destAddress : "";
        message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? _attestation.ERC20Token.fromPartial(object.erc20Token) : undefined;
        message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? _attestation.ERC20Token.fromPartial(object.erc20Fee) : undefined;
        return message;
    }
};
function createBaseOutgoingLogicCall() {
    return {
        transfers: [],
        fees: [],
        logicContractAddress: "",
        payload: new Uint8Array(),
        timeout: BigInt(0),
        invalidationId: new Uint8Array(),
        invalidationNonce: BigInt(0),
        cosmosBlockCreated: BigInt(0)
    };
}
const OutgoingLogicCall = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        for (const v of message.transfers){
            _attestation.ERC20Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.fees){
            _attestation.ERC20Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.logicContractAddress !== "") {
            writer.uint32(26).string(message.logicContractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(34).bytes(message.payload);
        }
        if (message.timeout !== BigInt(0)) {
            writer.uint32(40).uint64(message.timeout);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(50).bytes(message.invalidationId);
        }
        if (message.invalidationNonce !== BigInt(0)) {
            writer.uint32(56).uint64(message.invalidationNonce);
        }
        if (message.cosmosBlockCreated !== BigInt(0)) {
            writer.uint32(64).uint64(message.cosmosBlockCreated);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingLogicCall();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.transfers.push(_attestation.ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fees.push(_attestation.ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.logicContractAddress = reader.string();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                case 5:
                    message.timeout = reader.uint64();
                    break;
                case 6:
                    message.invalidationId = reader.bytes();
                    break;
                case 7:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 8:
                    message.cosmosBlockCreated = reader.uint64();
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
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers) ? object.transfers.map((e)=>_attestation.ERC20Token.fromJSON(e)) : [],
            fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map((e)=>_attestation.ERC20Token.fromJSON(e)) : [],
            logicContractAddress: (0, _helpers.isSet)(object.logicContractAddress) ? String(object.logicContractAddress) : "",
            payload: (0, _helpers.isSet)(object.payload) ? (0, _helpers.bytesFromBase64)(object.payload) : new Uint8Array(),
            timeout: (0, _helpers.isSet)(object.timeout) ? BigInt(object.timeout) : BigInt(0),
            invalidationId: (0, _helpers.isSet)(object.invalidationId) ? (0, _helpers.bytesFromBase64)(object.invalidationId) : new Uint8Array(),
            invalidationNonce: (0, _helpers.isSet)(object.invalidationNonce) ? BigInt(object.invalidationNonce) : BigInt(0),
            cosmosBlockCreated: (0, _helpers.isSet)(object.cosmosBlockCreated) ? BigInt(object.cosmosBlockCreated) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e)=>e ? _attestation.ERC20Token.toJSON(e) : undefined);
        } else {
            obj.transfers = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map((e)=>e ? _attestation.ERC20Token.toJSON(e) : undefined);
        } else {
            obj.fees = [];
        }
        message.logicContractAddress !== undefined && (obj.logicContractAddress = message.logicContractAddress);
        message.payload !== undefined && (obj.payload = (0, _helpers.base64FromBytes)(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.timeout !== undefined && (obj.timeout = (message.timeout || BigInt(0)).toString());
        message.invalidationId !== undefined && (obj.invalidationId = (0, _helpers.base64FromBytes)(message.invalidationId !== undefined ? message.invalidationId : new Uint8Array()));
        message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        message.cosmosBlockCreated !== undefined && (obj.cosmosBlockCreated = (message.cosmosBlockCreated || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        var _object_transfers, _object_fees;
        const message = createBaseOutgoingLogicCall();
        message.transfers = ((_object_transfers = object.transfers) === null || _object_transfers === void 0 ? void 0 : _object_transfers.map((e)=>_attestation.ERC20Token.fromPartial(e))) || [];
        message.fees = ((_object_fees = object.fees) === null || _object_fees === void 0 ? void 0 : _object_fees.map((e)=>_attestation.ERC20Token.fromPartial(e))) || [];
        var _object_logicContractAddress;
        message.logicContractAddress = (_object_logicContractAddress = object.logicContractAddress) !== null && _object_logicContractAddress !== void 0 ? _object_logicContractAddress : "";
        var _object_payload;
        message.payload = (_object_payload = object.payload) !== null && _object_payload !== void 0 ? _object_payload : new Uint8Array();
        message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout) : BigInt(0);
        var _object_invalidationId;
        message.invalidationId = (_object_invalidationId = object.invalidationId) !== null && _object_invalidationId !== void 0 ? _object_invalidationId : new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? BigInt(object.invalidationNonce) : BigInt(0);
        message.cosmosBlockCreated = object.cosmosBlockCreated !== undefined && object.cosmosBlockCreated !== null ? BigInt(object.cosmosBlockCreated) : BigInt(0);
        return message;
    }
};
function createBaseEventOutgoingBatchCanceled() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        batchId: "",
        nonce: ""
    };
}
const EventOutgoingBatchCanceled = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.batchId !== "") {
            writer.uint32(26).string(message.batchId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatchCanceled();
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
                    message.batchId = reader.string();
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
            batchId: (0, _helpers.isSet)(object.batchId) ? String(object.batchId) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.batchId !== undefined && (obj.batchId = message.batchId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventOutgoingBatchCanceled();
        var _object_bridgeContract;
        message.bridgeContract = (_object_bridgeContract = object.bridgeContract) !== null && _object_bridgeContract !== void 0 ? _object_bridgeContract : "";
        var _object_bridgeChainId;
        message.bridgeChainId = (_object_bridgeChainId = object.bridgeChainId) !== null && _object_bridgeChainId !== void 0 ? _object_bridgeChainId : "";
        var _object_batchId;
        message.batchId = (_object_batchId = object.batchId) !== null && _object_batchId !== void 0 ? _object_batchId : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};
function createBaseEventOutgoingBatch() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        batchId: "",
        nonce: ""
    };
}
const EventOutgoingBatch = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.batchId !== "") {
            writer.uint32(26).string(message.batchId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventOutgoingBatch();
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
                    message.batchId = reader.string();
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
            batchId: (0, _helpers.isSet)(object.batchId) ? String(object.batchId) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.batchId !== undefined && (obj.batchId = message.batchId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventOutgoingBatch();
        var _object_bridgeContract;
        message.bridgeContract = (_object_bridgeContract = object.bridgeContract) !== null && _object_bridgeContract !== void 0 ? _object_bridgeContract : "";
        var _object_bridgeChainId;
        message.bridgeChainId = (_object_bridgeChainId = object.bridgeChainId) !== null && _object_bridgeChainId !== void 0 ? _object_bridgeChainId : "";
        var _object_batchId;
        message.batchId = (_object_batchId = object.batchId) !== null && _object_batchId !== void 0 ? _object_batchId : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL2JhdGNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBFUkMyMFRva2VuIH0gZnJvbSBcIi4vYXR0ZXN0YXRpb25cIjtcbmltcG9ydCB7IGJhc2U2NEZyb21CeXRlcywgYnl0ZXNGcm9tQmFzZTY0LCBpc1NldCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImdyYXZpdHkudjFcIjtcbi8qKiBPdXRnb2luZ1R4QmF0Y2ggcmVwcmVzZW50cyBhIGJhdGNoIG9mIHRyYW5zYWN0aW9ucyBnb2luZyBmcm9tIGdyYXZpdHkgdG8gRVRIICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0Z29pbmdUeEJhdGNoIHtcbiAgYmF0Y2hOb25jZTogYmlnaW50O1xuICBiYXRjaFRpbWVvdXQ6IGJpZ2ludDtcbiAgdHJhbnNhY3Rpb25zOiBPdXRnb2luZ1RyYW5zZmVyVHhbXTtcbiAgdG9rZW5Db250cmFjdDogc3RyaW5nO1xuICBjb3Ntb3NCbG9ja0NyZWF0ZWQ6IGJpZ2ludDtcbn1cbi8qKiBPdXRnb2luZ1RyYW5zZmVyVHggcmVwcmVzZW50cyBhbiBpbmRpdmlkdWFsIHNlbmQgZnJvbSBncmF2aXR5IHRvIEVUSCAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE91dGdvaW5nVHJhbnNmZXJUeCB7XG4gIGlkOiBiaWdpbnQ7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBkZXN0QWRkcmVzczogc3RyaW5nO1xuICBlcmMyMFRva2VuPzogRVJDMjBUb2tlbjtcbiAgZXJjMjBGZWU/OiBFUkMyMFRva2VuO1xufVxuLyoqIE91dGdvaW5nTG9naWNDYWxsIHJlcHJlc2VudHMgYW4gaW5kaXZpZHVhbCBsb2dpYyBjYWxsIGZyb20gZ3Jhdml0eSB0byBFVEggKi9cblxuZXhwb3J0IGludGVyZmFjZSBPdXRnb2luZ0xvZ2ljQ2FsbCB7XG4gIHRyYW5zZmVyczogRVJDMjBUb2tlbltdO1xuICBmZWVzOiBFUkMyMFRva2VuW107XG4gIGxvZ2ljQ29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gIHBheWxvYWQ6IFVpbnQ4QXJyYXk7XG4gIHRpbWVvdXQ6IGJpZ2ludDtcbiAgaW52YWxpZGF0aW9uSWQ6IFVpbnQ4QXJyYXk7XG4gIGludmFsaWRhdGlvbk5vbmNlOiBiaWdpbnQ7XG4gIGNvc21vc0Jsb2NrQ3JlYXRlZDogYmlnaW50O1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCB7XG4gIGJyaWRnZUNvbnRyYWN0OiBzdHJpbmc7XG4gIGJyaWRnZUNoYWluSWQ6IHN0cmluZztcbiAgYmF0Y2hJZDogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudE91dGdvaW5nQmF0Y2gge1xuICBicmlkZ2VDb250cmFjdDogc3RyaW5nO1xuICBicmlkZ2VDaGFpbklkOiBzdHJpbmc7XG4gIGJhdGNoSWQ6IHN0cmluZztcbiAgbm9uY2U6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzZU91dGdvaW5nVHhCYXRjaCgpOiBPdXRnb2luZ1R4QmF0Y2gge1xuICByZXR1cm4ge1xuICAgIGJhdGNoTm9uY2U6IEJpZ0ludCgwKSxcbiAgICBiYXRjaFRpbWVvdXQ6IEJpZ0ludCgwKSxcbiAgICB0cmFuc2FjdGlvbnM6IFtdLFxuICAgIHRva2VuQ29udHJhY3Q6IFwiXCIsXG4gICAgY29zbW9zQmxvY2tDcmVhdGVkOiBCaWdJbnQoMCksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBPdXRnb2luZ1R4QmF0Y2ggPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBPdXRnb2luZ1R4QmF0Y2gsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5iYXRjaE5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UuYmF0Y2hOb25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYmF0Y2hUaW1lb3V0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLnVpbnQ2NChtZXNzYWdlLmJhdGNoVGltZW91dCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UudHJhbnNhY3Rpb25zKSB7XG4gICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDI2KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnRva2VuQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLnRva2VuQ29udHJhY3QpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQwKS51aW50NjQobWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBPdXRnb2luZ1R4QmF0Y2gge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VPdXRnb2luZ1R4QmF0Y2goKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoTm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2hUaW1lb3V0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLnRyYW5zYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgT3V0Z29pbmdUcmFuc2ZlclR4LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogT3V0Z29pbmdUeEJhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hOb25jZTogaXNTZXQob2JqZWN0LmJhdGNoTm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5iYXRjaE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICAgIGJhdGNoVGltZW91dDogaXNTZXQob2JqZWN0LmJhdGNoVGltZW91dClcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmJhdGNoVGltZW91dClcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICB0cmFuc2FjdGlvbnM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py50cmFuc2FjdGlvbnMpXG4gICAgICAgID8gb2JqZWN0LnRyYW5zYWN0aW9ucy5tYXAoKGU6IGFueSkgPT4gT3V0Z29pbmdUcmFuc2ZlclR4LmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgICAgdG9rZW5Db250cmFjdDogaXNTZXQob2JqZWN0LnRva2VuQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC50b2tlbkNvbnRyYWN0KVxuICAgICAgICA6IFwiXCIsXG4gICAgICBjb3Ntb3NCbG9ja0NyZWF0ZWQ6IGlzU2V0KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE91dGdvaW5nVHhCYXRjaCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5iYXRjaE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYmF0Y2hOb25jZSA9IChtZXNzYWdlLmJhdGNoTm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLmJhdGNoVGltZW91dCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhdGNoVGltZW91dCA9IChtZXNzYWdlLmJhdGNoVGltZW91dCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKG1lc3NhZ2UudHJhbnNhY3Rpb25zKSB7XG4gICAgICBvYmoudHJhbnNhY3Rpb25zID0gbWVzc2FnZS50cmFuc2FjdGlvbnMubWFwKChlKSA9PlxuICAgICAgICBlID8gT3V0Z29pbmdUcmFuc2ZlclR4LnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnRyYW5zYWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIG1lc3NhZ2UudG9rZW5Db250cmFjdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnRva2VuQ29udHJhY3QgPSBtZXNzYWdlLnRva2VuQ29udHJhY3QpO1xuICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zQmxvY2tDcmVhdGVkID0gKFxuICAgICAgICBtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCB8fCBCaWdJbnQoMClcbiAgICAgICkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8T3V0Z29pbmdUeEJhdGNoPik6IE91dGdvaW5nVHhCYXRjaCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VPdXRnb2luZ1R4QmF0Y2goKTtcbiAgICBtZXNzYWdlLmJhdGNoTm9uY2UgPVxuICAgICAgb2JqZWN0LmJhdGNoTm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuYmF0Y2hOb25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuYmF0Y2hOb25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5iYXRjaFRpbWVvdXQgPVxuICAgICAgb2JqZWN0LmJhdGNoVGltZW91dCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5iYXRjaFRpbWVvdXQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmJhdGNoVGltZW91dClcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS50cmFuc2FjdGlvbnMgPVxuICAgICAgb2JqZWN0LnRyYW5zYWN0aW9ucz8ubWFwKChlKSA9PiBPdXRnb2luZ1RyYW5zZmVyVHguZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UudG9rZW5Db250cmFjdCA9IG9iamVjdC50b2tlbkNvbnRyYWN0ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQgPVxuICAgICAgb2JqZWN0LmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuY29zbW9zQmxvY2tDcmVhdGVkICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU91dGdvaW5nVHJhbnNmZXJUeCgpOiBPdXRnb2luZ1RyYW5zZmVyVHgge1xuICByZXR1cm4ge1xuICAgIGlkOiBCaWdJbnQoMCksXG4gICAgc2VuZGVyOiBcIlwiLFxuICAgIGRlc3RBZGRyZXNzOiBcIlwiLFxuICAgIGVyYzIwVG9rZW46IHVuZGVmaW5lZCxcbiAgICBlcmMyMEZlZTogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgT3V0Z29pbmdUcmFuc2ZlclR4ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogT3V0Z29pbmdUcmFuc2ZlclR4LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuaWQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5pZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5zZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmRlc3RBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5kZXN0QWRkcmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXJjMjBUb2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBFUkMyMFRva2VuLmVuY29kZShtZXNzYWdlLmVyYzIwVG9rZW4sIHdyaXRlci51aW50MzIoMzQpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXJjMjBGZWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgRVJDMjBUb2tlbi5lbmNvZGUobWVzc2FnZS5lcmMyMEZlZSwgd3JpdGVyLnVpbnQzMig0MikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogT3V0Z29pbmdUcmFuc2ZlclR4IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlT3V0Z29pbmdUcmFuc2ZlclR4KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5pZCA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuZGVzdEFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuZXJjMjBUb2tlbiA9IEVSQzIwVG9rZW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5lcmMyMEZlZSA9IEVSQzIwVG9rZW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE91dGdvaW5nVHJhbnNmZXJUeCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpc1NldChvYmplY3QuaWQpID8gQmlnSW50KG9iamVjdC5pZCkgOiBCaWdJbnQoMCksXG4gICAgICBzZW5kZXI6IGlzU2V0KG9iamVjdC5zZW5kZXIpID8gU3RyaW5nKG9iamVjdC5zZW5kZXIpIDogXCJcIixcbiAgICAgIGRlc3RBZGRyZXNzOiBpc1NldChvYmplY3QuZGVzdEFkZHJlc3MpID8gU3RyaW5nKG9iamVjdC5kZXN0QWRkcmVzcykgOiBcIlwiLFxuICAgICAgZXJjMjBUb2tlbjogaXNTZXQob2JqZWN0LmVyYzIwVG9rZW4pXG4gICAgICAgID8gRVJDMjBUb2tlbi5mcm9tSlNPTihvYmplY3QuZXJjMjBUb2tlbilcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBlcmMyMEZlZTogaXNTZXQob2JqZWN0LmVyYzIwRmVlKVxuICAgICAgICA/IEVSQzIwVG9rZW4uZnJvbUpTT04ob2JqZWN0LmVyYzIwRmVlKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBPdXRnb2luZ1RyYW5zZmVyVHgpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gKG1lc3NhZ2UuaWQgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIG1lc3NhZ2UuZGVzdEFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5kZXN0QWRkcmVzcyA9IG1lc3NhZ2UuZGVzdEFkZHJlc3MpO1xuICAgIG1lc3NhZ2UuZXJjMjBUb2tlbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmVyYzIwVG9rZW4gPSBtZXNzYWdlLmVyYzIwVG9rZW5cbiAgICAgICAgPyBFUkMyMFRva2VuLnRvSlNPTihtZXNzYWdlLmVyYzIwVG9rZW4pXG4gICAgICAgIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLmVyYzIwRmVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXJjMjBGZWUgPSBtZXNzYWdlLmVyYzIwRmVlXG4gICAgICAgID8gRVJDMjBUb2tlbi50b0pTT04obWVzc2FnZS5lcmMyMEZlZSlcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPE91dGdvaW5nVHJhbnNmZXJUeD4pOiBPdXRnb2luZ1RyYW5zZmVyVHgge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlT3V0Z29pbmdUcmFuc2ZlclR4KCk7XG4gICAgbWVzc2FnZS5pZCA9XG4gICAgICBvYmplY3QuaWQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaWQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmlkKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLnNlbmRlciA9IG9iamVjdC5zZW5kZXIgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmRlc3RBZGRyZXNzID0gb2JqZWN0LmRlc3RBZGRyZXNzID8/IFwiXCI7XG4gICAgbWVzc2FnZS5lcmMyMFRva2VuID1cbiAgICAgIG9iamVjdC5lcmMyMFRva2VuICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmVyYzIwVG9rZW4gIT09IG51bGxcbiAgICAgICAgPyBFUkMyMFRva2VuLmZyb21QYXJ0aWFsKG9iamVjdC5lcmMyMFRva2VuKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLmVyYzIwRmVlID1cbiAgICAgIG9iamVjdC5lcmMyMEZlZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5lcmMyMEZlZSAhPT0gbnVsbFxuICAgICAgICA/IEVSQzIwVG9rZW4uZnJvbVBhcnRpYWwob2JqZWN0LmVyYzIwRmVlKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VPdXRnb2luZ0xvZ2ljQ2FsbCgpOiBPdXRnb2luZ0xvZ2ljQ2FsbCB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmZXJzOiBbXSxcbiAgICBmZWVzOiBbXSxcbiAgICBsb2dpY0NvbnRyYWN0QWRkcmVzczogXCJcIixcbiAgICBwYXlsb2FkOiBuZXcgVWludDhBcnJheSgpLFxuICAgIHRpbWVvdXQ6IEJpZ0ludCgwKSxcbiAgICBpbnZhbGlkYXRpb25JZDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICBpbnZhbGlkYXRpb25Ob25jZTogQmlnSW50KDApLFxuICAgIGNvc21vc0Jsb2NrQ3JlYXRlZDogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgT3V0Z29pbmdMb2dpY0NhbGwgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBPdXRnb2luZ0xvZ2ljQ2FsbCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnRyYW5zZmVycykge1xuICAgICAgRVJDMjBUb2tlbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuZmVlcykge1xuICAgICAgRVJDMjBUb2tlbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubG9naWNDb250cmFjdEFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmxvZ2ljQ29udHJhY3RBZGRyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5wYXlsb2FkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuYnl0ZXMobWVzc2FnZS5wYXlsb2FkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50aW1lb3V0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDApLnVpbnQ2NChtZXNzYWdlLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmludmFsaWRhdGlvbklkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMig1MCkuYnl0ZXMobWVzc2FnZS5pbnZhbGlkYXRpb25JZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig1NikudWludDY0KG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDY0KS51aW50NjQobWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBPdXRnb2luZ0xvZ2ljQ2FsbCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU91dGdvaW5nTG9naWNDYWxsKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS50cmFuc2ZlcnMucHVzaChFUkMyMFRva2VuLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmZlZXMucHVzaChFUkMyMFRva2VuLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmxvZ2ljQ29udHJhY3RBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnBheWxvYWQgPSByZWFkZXIuYnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS50aW1lb3V0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkID0gcmVhZGVyLmJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogT3V0Z29pbmdMb2dpY0NhbGwge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2ZlcnM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py50cmFuc2ZlcnMpXG4gICAgICAgID8gb2JqZWN0LnRyYW5zZmVycy5tYXAoKGU6IGFueSkgPT4gRVJDMjBUb2tlbi5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICAgIGZlZXM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5mZWVzKVxuICAgICAgICA/IG9iamVjdC5mZWVzLm1hcCgoZTogYW55KSA9PiBFUkMyMFRva2VuLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgICAgbG9naWNDb250cmFjdEFkZHJlc3M6IGlzU2V0KG9iamVjdC5sb2dpY0NvbnRyYWN0QWRkcmVzcylcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0LmxvZ2ljQ29udHJhY3RBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBwYXlsb2FkOiBpc1NldChvYmplY3QucGF5bG9hZClcbiAgICAgICAgPyBieXRlc0Zyb21CYXNlNjQob2JqZWN0LnBheWxvYWQpXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIHRpbWVvdXQ6IGlzU2V0KG9iamVjdC50aW1lb3V0KSA/IEJpZ0ludChvYmplY3QudGltZW91dCkgOiBCaWdJbnQoMCksXG4gICAgICBpbnZhbGlkYXRpb25JZDogaXNTZXQob2JqZWN0LmludmFsaWRhdGlvbklkKVxuICAgICAgICA/IGJ5dGVzRnJvbUJhc2U2NChvYmplY3QuaW52YWxpZGF0aW9uSWQpXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGludmFsaWRhdGlvbk5vbmNlOiBpc1NldChvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBjb3Ntb3NCbG9ja0NyZWF0ZWQ6IGlzU2V0KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE91dGdvaW5nTG9naWNDYWxsKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLnRyYW5zZmVycykge1xuICAgICAgb2JqLnRyYW5zZmVycyA9IG1lc3NhZ2UudHJhbnNmZXJzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEVSQzIwVG9rZW4udG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudHJhbnNmZXJzID0gW107XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZmVlcykge1xuICAgICAgb2JqLmZlZXMgPSBtZXNzYWdlLmZlZXMubWFwKChlKSA9PlxuICAgICAgICBlID8gRVJDMjBUb2tlbi50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mZWVzID0gW107XG4gICAgfVxuXG4gICAgbWVzc2FnZS5sb2dpY0NvbnRyYWN0QWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmxvZ2ljQ29udHJhY3RBZGRyZXNzID0gbWVzc2FnZS5sb2dpY0NvbnRyYWN0QWRkcmVzcyk7XG4gICAgbWVzc2FnZS5wYXlsb2FkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGF5bG9hZCA9IGJhc2U2NEZyb21CeXRlcyhcbiAgICAgICAgbWVzc2FnZS5wYXlsb2FkICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLnBheWxvYWQgOiBuZXcgVWludDhBcnJheSgpXG4gICAgICApKTtcbiAgICBtZXNzYWdlLnRpbWVvdXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50aW1lb3V0ID0gKG1lc3NhZ2UudGltZW91dCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5pbnZhbGlkYXRpb25JZCA9IGJhc2U2NEZyb21CeXRlcyhcbiAgICAgICAgbWVzc2FnZS5pbnZhbGlkYXRpb25JZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBtZXNzYWdlLmludmFsaWRhdGlvbklkXG4gICAgICAgICAgOiBuZXcgVWludDhBcnJheSgpXG4gICAgICApKTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbk5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaW52YWxpZGF0aW9uTm9uY2UgPSAoXG4gICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgfHwgQmlnSW50KDApXG4gICAgICApLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zQmxvY2tDcmVhdGVkID0gKFxuICAgICAgICBtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCB8fCBCaWdJbnQoMClcbiAgICAgICkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8T3V0Z29pbmdMb2dpY0NhbGw+KTogT3V0Z29pbmdMb2dpY0NhbGwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlT3V0Z29pbmdMb2dpY0NhbGwoKTtcbiAgICBtZXNzYWdlLnRyYW5zZmVycyA9XG4gICAgICBvYmplY3QudHJhbnNmZXJzPy5tYXAoKGUpID0+IEVSQzIwVG9rZW4uZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UuZmVlcyA9IG9iamVjdC5mZWVzPy5tYXAoKGUpID0+IEVSQzIwVG9rZW4uZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UubG9naWNDb250cmFjdEFkZHJlc3MgPSBvYmplY3QubG9naWNDb250cmFjdEFkZHJlc3MgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnBheWxvYWQgPSBvYmplY3QucGF5bG9hZCA/PyBuZXcgVWludDhBcnJheSgpO1xuICAgIG1lc3NhZ2UudGltZW91dCA9XG4gICAgICBvYmplY3QudGltZW91dCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC50aW1lb3V0ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC50aW1lb3V0KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkID0gb2JqZWN0LmludmFsaWRhdGlvbklkID8/IG5ldyBVaW50OEFycmF5KCk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSA9XG4gICAgICBvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmludmFsaWRhdGlvbk5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQgPVxuICAgICAgb2JqZWN0LmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuY29zbW9zQmxvY2tDcmVhdGVkICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKCk6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkIHtcbiAgcmV0dXJuIHtcbiAgICBicmlkZ2VDb250cmFjdDogXCJcIixcbiAgICBicmlkZ2VDaGFpbklkOiBcIlwiLFxuICAgIGJhdGNoSWQ6IFwiXCIsXG4gICAgbm9uY2U6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaElkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5iYXRjaElkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyaWRnZUNvbnRyYWN0OiBpc1NldChvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDb250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgYnJpZGdlQ2hhaW5JZDogaXNTZXQob2JqZWN0LmJyaWRnZUNoYWluSWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBiYXRjaElkOiBpc1NldChvYmplY3QuYmF0Y2hJZCkgPyBTdHJpbmcob2JqZWN0LmJhdGNoSWQpIDogXCJcIixcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ29udHJhY3QgPSBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VDaGFpbklkID0gbWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICBtZXNzYWdlLmJhdGNoSWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmJhdGNoSWQgPSBtZXNzYWdlLmJhdGNoSWQpO1xuICAgIG1lc3NhZ2Uubm9uY2UgIT09IHVuZGVmaW5lZCAmJiAob2JqLm5vbmNlID0gbWVzc2FnZS5ub25jZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8RXZlbnRPdXRnb2luZ0JhdGNoQ2FuY2VsZWQ+XG4gICk6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKCk7XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IG9iamVjdC5icmlkZ2VDb250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IG9iamVjdC5icmlkZ2VDaGFpbklkID8/IFwiXCI7XG4gICAgbWVzc2FnZS5iYXRjaElkID0gb2JqZWN0LmJhdGNoSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm5vbmNlID0gb2JqZWN0Lm5vbmNlID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnRPdXRnb2luZ0JhdGNoKCk6IEV2ZW50T3V0Z29pbmdCYXRjaCB7XG4gIHJldHVybiB7XG4gICAgYnJpZGdlQ29udHJhY3Q6IFwiXCIsXG4gICAgYnJpZGdlQ2hhaW5JZDogXCJcIixcbiAgICBiYXRjaElkOiBcIlwiLFxuICAgIG5vbmNlOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRPdXRnb2luZ0JhdGNoID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRPdXRnb2luZ0JhdGNoLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaElkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5iYXRjaElkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudE91dGdvaW5nQmF0Y2gge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudE91dGdvaW5nQmF0Y2goKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2hJZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50T3V0Z29pbmdCYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyaWRnZUNvbnRyYWN0OiBpc1NldChvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDb250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgYnJpZGdlQ2hhaW5JZDogaXNTZXQob2JqZWN0LmJyaWRnZUNoYWluSWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBiYXRjaElkOiBpc1NldChvYmplY3QuYmF0Y2hJZCkgPyBTdHJpbmcob2JqZWN0LmJhdGNoSWQpIDogXCJcIixcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50T3V0Z29pbmdCYXRjaCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJyaWRnZUNvbnRyYWN0ID0gbWVzc2FnZS5icmlkZ2VDb250cmFjdCk7XG4gICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ2hhaW5JZCA9IG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCk7XG4gICAgbWVzc2FnZS5iYXRjaElkICE9PSB1bmRlZmluZWQgJiYgKG9iai5iYXRjaElkID0gbWVzc2FnZS5iYXRjaElkKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEV2ZW50T3V0Z29pbmdCYXRjaD4pOiBFdmVudE91dGdvaW5nQmF0Y2gge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRPdXRnb2luZ0JhdGNoKCk7XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IG9iamVjdC5icmlkZ2VDb250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IG9iamVjdC5icmlkZ2VDaGFpbklkID8/IFwiXCI7XG4gICAgbWVzc2FnZS5iYXRjaElkID0gb2JqZWN0LmJhdGNoSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm5vbmNlID0gb2JqZWN0Lm5vbmNlID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkV2ZW50T3V0Z29pbmdCYXRjaCIsIkV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkIiwiT3V0Z29pbmdMb2dpY0NhbGwiLCJPdXRnb2luZ1RyYW5zZmVyVHgiLCJPdXRnb2luZ1R4QmF0Y2giLCJwcm90b2J1ZlBhY2thZ2UiLCJjcmVhdGVCYXNlT3V0Z29pbmdUeEJhdGNoIiwiYmF0Y2hOb25jZSIsIkJpZ0ludCIsImJhdGNoVGltZW91dCIsInRyYW5zYWN0aW9ucyIsInRva2VuQ29udHJhY3QiLCJjb3Ntb3NCbG9ja0NyZWF0ZWQiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiQmluYXJ5V3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwidWludDY0IiwidiIsImZvcmsiLCJsZGVsaW0iLCJzdHJpbmciLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsIkJpbmFyeVJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInB1c2giLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiaXNTZXQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJlIiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwidG9TdHJpbmciLCJmcm9tUGFydGlhbCIsImNyZWF0ZUJhc2VPdXRnb2luZ1RyYW5zZmVyVHgiLCJpZCIsInNlbmRlciIsImRlc3RBZGRyZXNzIiwiZXJjMjBUb2tlbiIsImVyYzIwRmVlIiwiRVJDMjBUb2tlbiIsImNyZWF0ZUJhc2VPdXRnb2luZ0xvZ2ljQ2FsbCIsInRyYW5zZmVycyIsImZlZXMiLCJsb2dpY0NvbnRyYWN0QWRkcmVzcyIsInBheWxvYWQiLCJVaW50OEFycmF5IiwidGltZW91dCIsImludmFsaWRhdGlvbklkIiwiaW52YWxpZGF0aW9uTm9uY2UiLCJieXRlcyIsImJ5dGVzRnJvbUJhc2U2NCIsImJhc2U2NEZyb21CeXRlcyIsImNyZWF0ZUJhc2VFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCIsImJyaWRnZUNvbnRyYWN0IiwiYnJpZGdlQ2hhaW5JZCIsImJhdGNoSWQiLCJub25jZSIsImNyZWF0ZUJhc2VFdmVudE91dGdvaW5nQmF0Y2giXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7Ozs7Ozs7Ozs7SUFpb0JMQSxrQkFBa0I7ZUFBbEJBOztJQTNHQUMsMEJBQTBCO2VBQTFCQTs7SUFyTUFDLGlCQUFpQjtlQUFqQkE7O0lBdElBQyxrQkFBa0I7ZUFBbEJBOztJQWpKQUMsZUFBZTtlQUFmQTs7SUF0REFDLGVBQWU7ZUFBZkE7Ozt3QkFIOEI7NkJBQ2hCO3lCQUM2QjtBQUNqRCxNQUFNQSxrQkFBa0I7QUE0Qy9CLFNBQVNDO0lBQ1AsT0FBTztRQUNMQyxZQUFZQyxPQUFPO1FBQ25CQyxjQUFjRCxPQUFPO1FBQ3JCRSxjQUFjLEVBQUU7UUFDaEJDLGVBQWU7UUFDZkMsb0JBQW9CSixPQUFPO0lBQzdCO0FBQ0Y7QUFFTyxNQUFNSixrQkFBa0I7SUFDN0JTLFFBQ0VDLE9BQXdCLEVBQ3hCQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLElBQUlILFFBQVFQLFVBQVUsS0FBS0MsT0FBTyxJQUFJO1lBQ3BDTyxPQUFPRyxNQUFNLENBQUMsR0FBR0MsTUFBTSxDQUFDTCxRQUFRUCxVQUFVO1FBQzVDO1FBRUEsSUFBSU8sUUFBUUwsWUFBWSxLQUFLRCxPQUFPLElBQUk7WUFDdENPLE9BQU9HLE1BQU0sQ0FBQyxJQUFJQyxNQUFNLENBQUNMLFFBQVFMLFlBQVk7UUFDL0M7UUFFQSxLQUFLLE1BQU1XLEtBQUtOLFFBQVFKLFlBQVksQ0FBRTtZQUNwQ1AsbUJBQW1CVSxNQUFNLENBQUNPLEdBQUlMLE9BQU9HLE1BQU0sQ0FBQyxJQUFJRyxJQUFJLElBQUlDLE1BQU07UUFDaEU7UUFFQSxJQUFJUixRQUFRSCxhQUFhLEtBQUssSUFBSTtZQUNoQ0ksT0FBT0csTUFBTSxDQUFDLElBQUlLLE1BQU0sQ0FBQ1QsUUFBUUgsYUFBYTtRQUNoRDtRQUVBLElBQUlHLFFBQVFGLGtCQUFrQixLQUFLSixPQUFPLElBQUk7WUFDNUNPLE9BQU9HLE1BQU0sQ0FBQyxJQUFJQyxNQUFNLENBQUNMLFFBQVFGLGtCQUFrQjtRQUNyRDtRQUVBLE9BQU9HO0lBQ1Q7SUFFQVMsUUFBT0MsS0FBZ0MsRUFBRUMsTUFBZTtRQUN0RCxNQUFNQyxTQUNKRixpQkFBaUJHLG9CQUFZLEdBQUdILFFBQVEsSUFBSUcsb0JBQVksQ0FBQ0g7UUFDM0QsSUFBSUksTUFBTUgsV0FBV0ksWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdOO1FBQzNELE1BQU1aLFVBQVVSO1FBRWhCLE1BQU9xQixPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT1QsTUFBTTtZQUV6QixPQUFRZSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0huQixRQUFRUCxVQUFVLEdBQUdvQixPQUFPUixNQUFNO29CQUNsQztnQkFFRixLQUFLO29CQUNITCxRQUFRTCxZQUFZLEdBQUdrQixPQUFPUixNQUFNO29CQUNwQztnQkFFRixLQUFLO29CQUNITCxRQUFRSixZQUFZLENBQUN3QixJQUFJLENBQ3ZCL0IsbUJBQW1CcUIsTUFBTSxDQUFDRyxRQUFRQSxPQUFPVCxNQUFNO29CQUVqRDtnQkFFRixLQUFLO29CQUNISixRQUFRSCxhQUFhLEdBQUdnQixPQUFPSixNQUFNO29CQUNyQztnQkFFRixLQUFLO29CQUNIVCxRQUFRRixrQkFBa0IsR0FBR2UsT0FBT1IsTUFBTTtvQkFDMUM7Z0JBRUY7b0JBQ0VRLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT25CO0lBQ1Q7SUFFQXNCLFVBQVNDLE1BQVc7UUFDbEIsT0FBTztZQUNMOUIsWUFBWStCLElBQUFBLGNBQUssRUFBQ0QsT0FBTzlCLFVBQVUsSUFDL0JDLE9BQU82QixPQUFPOUIsVUFBVSxJQUN4QkMsT0FBTztZQUNYQyxjQUFjNkIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPNUIsWUFBWSxJQUNuQ0QsT0FBTzZCLE9BQU81QixZQUFZLElBQzFCRCxPQUFPO1lBQ1hFLGNBQWM2QixNQUFNQyxPQUFPLENBQUNILG1CQUFBQSw2QkFBQUEsT0FBUTNCLFlBQVksSUFDNUMyQixPQUFPM0IsWUFBWSxDQUFDK0IsR0FBRyxDQUFDLENBQUNDLElBQVd2QyxtQkFBbUJpQyxRQUFRLENBQUNNLE1BQ2hFLEVBQUU7WUFDTi9CLGVBQWUyQixJQUFBQSxjQUFLLEVBQUNELE9BQU8xQixhQUFhLElBQ3JDZ0MsT0FBT04sT0FBTzFCLGFBQWEsSUFDM0I7WUFDSkMsb0JBQW9CMEIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPekIsa0JBQWtCLElBQy9DSixPQUFPNkIsT0FBT3pCLGtCQUFrQixJQUNoQ0osT0FBTztRQUNiO0lBQ0Y7SUFFQW9DLFFBQU85QixPQUF3QjtRQUM3QixNQUFNK0IsTUFBVyxDQUFDO1FBQ2xCL0IsUUFBUVAsVUFBVSxLQUFLdUIsYUFDcEJlLENBQUFBLElBQUl0QyxVQUFVLEdBQUcsQUFBQ08sQ0FBQUEsUUFBUVAsVUFBVSxJQUFJQyxPQUFPLEVBQUMsRUFBR3NDLFFBQVEsRUFBQztRQUMvRGhDLFFBQVFMLFlBQVksS0FBS3FCLGFBQ3RCZSxDQUFBQSxJQUFJcEMsWUFBWSxHQUFHLEFBQUNLLENBQUFBLFFBQVFMLFlBQVksSUFBSUQsT0FBTyxFQUFDLEVBQUdzQyxRQUFRLEVBQUM7UUFFbkUsSUFBSWhDLFFBQVFKLFlBQVksRUFBRTtZQUN4Qm1DLElBQUluQyxZQUFZLEdBQUdJLFFBQVFKLFlBQVksQ0FBQytCLEdBQUcsQ0FBQyxDQUFDQyxJQUMzQ0EsSUFBSXZDLG1CQUFtQnlDLE1BQU0sQ0FBQ0YsS0FBS1o7UUFFdkMsT0FBTztZQUNMZSxJQUFJbkMsWUFBWSxHQUFHLEVBQUU7UUFDdkI7UUFFQUksUUFBUUgsYUFBYSxLQUFLbUIsYUFDdkJlLENBQUFBLElBQUlsQyxhQUFhLEdBQUdHLFFBQVFILGFBQWEsQUFBRDtRQUMzQ0csUUFBUUYsa0JBQWtCLEtBQUtrQixhQUM1QmUsQ0FBQUEsSUFBSWpDLGtCQUFrQixHQUFHLEFBQ3hCRSxDQUFBQSxRQUFRRixrQkFBa0IsSUFBSUosT0FBTyxFQUFDLEVBQ3RDc0MsUUFBUSxFQUFDO1FBQ2IsT0FBT0Q7SUFDVDtJQUVBRSxhQUFZVixNQUFnQztZQVd4Q0E7UUFWRixNQUFNdkIsVUFBVVI7UUFDaEJRLFFBQVFQLFVBQVUsR0FDaEI4QixPQUFPOUIsVUFBVSxLQUFLdUIsYUFBYU8sT0FBTzlCLFVBQVUsS0FBSyxPQUNyREMsT0FBTzZCLE9BQU85QixVQUFVLElBQ3hCQyxPQUFPO1FBQ2JNLFFBQVFMLFlBQVksR0FDbEI0QixPQUFPNUIsWUFBWSxLQUFLcUIsYUFBYU8sT0FBTzVCLFlBQVksS0FBSyxPQUN6REQsT0FBTzZCLE9BQU81QixZQUFZLElBQzFCRCxPQUFPO1FBQ2JNLFFBQVFKLFlBQVksR0FDbEIyQixFQUFBQSx1QkFBQUEsT0FBTzNCLFlBQVksY0FBbkIyQiwyQ0FBQUEscUJBQXFCSSxHQUFHLENBQUMsQ0FBQ0MsSUFBTXZDLG1CQUFtQjRDLFdBQVcsQ0FBQ0wsUUFBTyxFQUFFO1lBQ2xETDtRQUF4QnZCLFFBQVFILGFBQWEsR0FBRzBCLENBQUFBLHdCQUFBQSxPQUFPMUIsYUFBYSxjQUFwQjBCLG1DQUFBQSx3QkFBd0I7UUFDaER2QixRQUFRRixrQkFBa0IsR0FDeEJ5QixPQUFPekIsa0JBQWtCLEtBQUtrQixhQUM5Qk8sT0FBT3pCLGtCQUFrQixLQUFLLE9BQzFCSixPQUFPNkIsT0FBT3pCLGtCQUFrQixJQUNoQ0osT0FBTztRQUNiLE9BQU9NO0lBQ1Q7QUFDRjtBQUVBLFNBQVNrQztJQUNQLE9BQU87UUFDTEMsSUFBSXpDLE9BQU87UUFDWDBDLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxZQUFZdEI7UUFDWnVCLFVBQVV2QjtJQUNaO0FBQ0Y7QUFFTyxNQUFNM0IscUJBQXFCO0lBQ2hDVSxRQUNFQyxPQUEyQixFQUMzQkMsU0FBdUJDLG9CQUFZLENBQUNDLE1BQU0sRUFBRTtRQUU1QyxJQUFJSCxRQUFRbUMsRUFBRSxLQUFLekMsT0FBTyxJQUFJO1lBQzVCTyxPQUFPRyxNQUFNLENBQUMsR0FBR0MsTUFBTSxDQUFDTCxRQUFRbUMsRUFBRTtRQUNwQztRQUVBLElBQUluQyxRQUFRb0MsTUFBTSxLQUFLLElBQUk7WUFDekJuQyxPQUFPRyxNQUFNLENBQUMsSUFBSUssTUFBTSxDQUFDVCxRQUFRb0MsTUFBTTtRQUN6QztRQUVBLElBQUlwQyxRQUFRcUMsV0FBVyxLQUFLLElBQUk7WUFDOUJwQyxPQUFPRyxNQUFNLENBQUMsSUFBSUssTUFBTSxDQUFDVCxRQUFRcUMsV0FBVztRQUM5QztRQUVBLElBQUlyQyxRQUFRc0MsVUFBVSxLQUFLdEIsV0FBVztZQUNwQ3dCLHVCQUFVLENBQUN6QyxNQUFNLENBQUNDLFFBQVFzQyxVQUFVLEVBQUVyQyxPQUFPRyxNQUFNLENBQUMsSUFBSUcsSUFBSSxJQUFJQyxNQUFNO1FBQ3hFO1FBRUEsSUFBSVIsUUFBUXVDLFFBQVEsS0FBS3ZCLFdBQVc7WUFDbEN3Qix1QkFBVSxDQUFDekMsTUFBTSxDQUFDQyxRQUFRdUMsUUFBUSxFQUFFdEMsT0FBT0csTUFBTSxDQUFDLElBQUlHLElBQUksSUFBSUMsTUFBTTtRQUN0RTtRQUVBLE9BQU9QO0lBQ1Q7SUFFQVMsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJHLG9CQUFZLEdBQUdILFFBQVEsSUFBSUcsb0JBQVksQ0FBQ0g7UUFDM0QsSUFBSUksTUFBTUgsV0FBV0ksWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdOO1FBQzNELE1BQU1aLFVBQVVrQztRQUVoQixNQUFPckIsT0FBT0ssR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1JLE1BQU1OLE9BQU9ULE1BQU07WUFFekIsT0FBUWUsUUFBUTtnQkFDZCxLQUFLO29CQUNIbkIsUUFBUW1DLEVBQUUsR0FBR3RCLE9BQU9SLE1BQU07b0JBQzFCO2dCQUVGLEtBQUs7b0JBQ0hMLFFBQVFvQyxNQUFNLEdBQUd2QixPQUFPSixNQUFNO29CQUM5QjtnQkFFRixLQUFLO29CQUNIVCxRQUFRcUMsV0FBVyxHQUFHeEIsT0FBT0osTUFBTTtvQkFDbkM7Z0JBRUYsS0FBSztvQkFDSFQsUUFBUXNDLFVBQVUsR0FBR0UsdUJBQVUsQ0FBQzlCLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT1QsTUFBTTtvQkFDNUQ7Z0JBRUYsS0FBSztvQkFDSEosUUFBUXVDLFFBQVEsR0FBR0MsdUJBQVUsQ0FBQzlCLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT1QsTUFBTTtvQkFDMUQ7Z0JBRUY7b0JBQ0VTLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT25CO0lBQ1Q7SUFFQXNCLFVBQVNDLE1BQVc7UUFDbEIsT0FBTztZQUNMWSxJQUFJWCxJQUFBQSxjQUFLLEVBQUNELE9BQU9ZLEVBQUUsSUFBSXpDLE9BQU82QixPQUFPWSxFQUFFLElBQUl6QyxPQUFPO1lBQ2xEMEMsUUFBUVosSUFBQUEsY0FBSyxFQUFDRCxPQUFPYSxNQUFNLElBQUlQLE9BQU9OLE9BQU9hLE1BQU0sSUFBSTtZQUN2REMsYUFBYWIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPYyxXQUFXLElBQUlSLE9BQU9OLE9BQU9jLFdBQVcsSUFBSTtZQUN0RUMsWUFBWWQsSUFBQUEsY0FBSyxFQUFDRCxPQUFPZSxVQUFVLElBQy9CRSx1QkFBVSxDQUFDbEIsUUFBUSxDQUFDQyxPQUFPZSxVQUFVLElBQ3JDdEI7WUFDSnVCLFVBQVVmLElBQUFBLGNBQUssRUFBQ0QsT0FBT2dCLFFBQVEsSUFDM0JDLHVCQUFVLENBQUNsQixRQUFRLENBQUNDLE9BQU9nQixRQUFRLElBQ25DdkI7UUFDTjtJQUNGO0lBRUFjLFFBQU85QixPQUEyQjtRQUNoQyxNQUFNK0IsTUFBVyxDQUFDO1FBQ2xCL0IsUUFBUW1DLEVBQUUsS0FBS25CLGFBQWNlLENBQUFBLElBQUlJLEVBQUUsR0FBRyxBQUFDbkMsQ0FBQUEsUUFBUW1DLEVBQUUsSUFBSXpDLE9BQU8sRUFBQyxFQUFHc0MsUUFBUSxFQUFDO1FBQ3pFaEMsUUFBUW9DLE1BQU0sS0FBS3BCLGFBQWNlLENBQUFBLElBQUlLLE1BQU0sR0FBR3BDLFFBQVFvQyxNQUFNLEFBQUQ7UUFDM0RwQyxRQUFRcUMsV0FBVyxLQUFLckIsYUFDckJlLENBQUFBLElBQUlNLFdBQVcsR0FBR3JDLFFBQVFxQyxXQUFXLEFBQUQ7UUFDdkNyQyxRQUFRc0MsVUFBVSxLQUFLdEIsYUFDcEJlLENBQUFBLElBQUlPLFVBQVUsR0FBR3RDLFFBQVFzQyxVQUFVLEdBQ2hDRSx1QkFBVSxDQUFDVixNQUFNLENBQUM5QixRQUFRc0MsVUFBVSxJQUNwQ3RCLFNBQVE7UUFDZGhCLFFBQVF1QyxRQUFRLEtBQUt2QixhQUNsQmUsQ0FBQUEsSUFBSVEsUUFBUSxHQUFHdkMsUUFBUXVDLFFBQVEsR0FDNUJDLHVCQUFVLENBQUNWLE1BQU0sQ0FBQzlCLFFBQVF1QyxRQUFRLElBQ2xDdkIsU0FBUTtRQUNkLE9BQU9lO0lBQ1Q7SUFFQUUsYUFBWVYsTUFBbUM7UUFDN0MsTUFBTXZCLFVBQVVrQztRQUNoQmxDLFFBQVFtQyxFQUFFLEdBQ1JaLE9BQU9ZLEVBQUUsS0FBS25CLGFBQWFPLE9BQU9ZLEVBQUUsS0FBSyxPQUNyQ3pDLE9BQU82QixPQUFPWSxFQUFFLElBQ2hCekMsT0FBTztZQUNJNkI7UUFBakJ2QixRQUFRb0MsTUFBTSxHQUFHYixDQUFBQSxpQkFBQUEsT0FBT2EsTUFBTSxjQUFiYiw0QkFBQUEsaUJBQWlCO1lBQ1pBO1FBQXRCdkIsUUFBUXFDLFdBQVcsR0FBR2QsQ0FBQUEsc0JBQUFBLE9BQU9jLFdBQVcsY0FBbEJkLGlDQUFBQSxzQkFBc0I7UUFDNUN2QixRQUFRc0MsVUFBVSxHQUNoQmYsT0FBT2UsVUFBVSxLQUFLdEIsYUFBYU8sT0FBT2UsVUFBVSxLQUFLLE9BQ3JERSx1QkFBVSxDQUFDUCxXQUFXLENBQUNWLE9BQU9lLFVBQVUsSUFDeEN0QjtRQUNOaEIsUUFBUXVDLFFBQVEsR0FDZGhCLE9BQU9nQixRQUFRLEtBQUt2QixhQUFhTyxPQUFPZ0IsUUFBUSxLQUFLLE9BQ2pEQyx1QkFBVSxDQUFDUCxXQUFXLENBQUNWLE9BQU9nQixRQUFRLElBQ3RDdkI7UUFDTixPQUFPaEI7SUFDVDtBQUNGO0FBRUEsU0FBU3lDO0lBQ1AsT0FBTztRQUNMQyxXQUFXLEVBQUU7UUFDYkMsTUFBTSxFQUFFO1FBQ1JDLHNCQUFzQjtRQUN0QkMsU0FBUyxJQUFJQztRQUNiQyxTQUFTckQsT0FBTztRQUNoQnNELGdCQUFnQixJQUFJRjtRQUNwQkcsbUJBQW1CdkQsT0FBTztRQUMxQkksb0JBQW9CSixPQUFPO0lBQzdCO0FBQ0Y7QUFFTyxNQUFNTixvQkFBb0I7SUFDL0JXLFFBQ0VDLE9BQTBCLEVBQzFCQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLEtBQUssTUFBTUcsS0FBS04sUUFBUTBDLFNBQVMsQ0FBRTtZQUNqQ0YsdUJBQVUsQ0FBQ3pDLE1BQU0sQ0FBQ08sR0FBSUwsT0FBT0csTUFBTSxDQUFDLElBQUlHLElBQUksSUFBSUMsTUFBTTtRQUN4RDtRQUVBLEtBQUssTUFBTUYsS0FBS04sUUFBUTJDLElBQUksQ0FBRTtZQUM1QkgsdUJBQVUsQ0FBQ3pDLE1BQU0sQ0FBQ08sR0FBSUwsT0FBT0csTUFBTSxDQUFDLElBQUlHLElBQUksSUFBSUMsTUFBTTtRQUN4RDtRQUVBLElBQUlSLFFBQVE0QyxvQkFBb0IsS0FBSyxJQUFJO1lBQ3ZDM0MsT0FBT0csTUFBTSxDQUFDLElBQUlLLE1BQU0sQ0FBQ1QsUUFBUTRDLG9CQUFvQjtRQUN2RDtRQUVBLElBQUk1QyxRQUFRNkMsT0FBTyxDQUFDakMsTUFBTSxLQUFLLEdBQUc7WUFDaENYLE9BQU9HLE1BQU0sQ0FBQyxJQUFJOEMsS0FBSyxDQUFDbEQsUUFBUTZDLE9BQU87UUFDekM7UUFFQSxJQUFJN0MsUUFBUStDLE9BQU8sS0FBS3JELE9BQU8sSUFBSTtZQUNqQ08sT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0wsUUFBUStDLE9BQU87UUFDMUM7UUFFQSxJQUFJL0MsUUFBUWdELGNBQWMsQ0FBQ3BDLE1BQU0sS0FBSyxHQUFHO1lBQ3ZDWCxPQUFPRyxNQUFNLENBQUMsSUFBSThDLEtBQUssQ0FBQ2xELFFBQVFnRCxjQUFjO1FBQ2hEO1FBRUEsSUFBSWhELFFBQVFpRCxpQkFBaUIsS0FBS3ZELE9BQU8sSUFBSTtZQUMzQ08sT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0wsUUFBUWlELGlCQUFpQjtRQUNwRDtRQUVBLElBQUlqRCxRQUFRRixrQkFBa0IsS0FBS0osT0FBTyxJQUFJO1lBQzVDTyxPQUFPRyxNQUFNLENBQUMsSUFBSUMsTUFBTSxDQUFDTCxRQUFRRixrQkFBa0I7UUFDckQ7UUFFQSxPQUFPRztJQUNUO0lBRUFTLFFBQU9DLEtBQWdDLEVBQUVDLE1BQWU7UUFDdEQsTUFBTUMsU0FDSkYsaUJBQWlCRyxvQkFBWSxHQUFHSCxRQUFRLElBQUlHLG9CQUFZLENBQUNIO1FBQzNELElBQUlJLE1BQU1ILFdBQVdJLFlBQVlILE9BQU9JLEdBQUcsR0FBR0osT0FBT0ssR0FBRyxHQUFHTjtRQUMzRCxNQUFNWixVQUFVeUM7UUFFaEIsTUFBTzVCLE9BQU9LLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSSxNQUFNTixPQUFPVCxNQUFNO1lBRXpCLE9BQVFlLFFBQVE7Z0JBQ2QsS0FBSztvQkFDSG5CLFFBQVEwQyxTQUFTLENBQUN0QixJQUFJLENBQUNvQix1QkFBVSxDQUFDOUIsTUFBTSxDQUFDRyxRQUFRQSxPQUFPVCxNQUFNO29CQUM5RDtnQkFFRixLQUFLO29CQUNISixRQUFRMkMsSUFBSSxDQUFDdkIsSUFBSSxDQUFDb0IsdUJBQVUsQ0FBQzlCLE1BQU0sQ0FBQ0csUUFBUUEsT0FBT1QsTUFBTTtvQkFDekQ7Z0JBRUYsS0FBSztvQkFDSEosUUFBUTRDLG9CQUFvQixHQUFHL0IsT0FBT0osTUFBTTtvQkFDNUM7Z0JBRUYsS0FBSztvQkFDSFQsUUFBUTZDLE9BQU8sR0FBR2hDLE9BQU9xQyxLQUFLO29CQUM5QjtnQkFFRixLQUFLO29CQUNIbEQsUUFBUStDLE9BQU8sR0FBR2xDLE9BQU9SLE1BQU07b0JBQy9CO2dCQUVGLEtBQUs7b0JBQ0hMLFFBQVFnRCxjQUFjLEdBQUduQyxPQUFPcUMsS0FBSztvQkFDckM7Z0JBRUYsS0FBSztvQkFDSGxELFFBQVFpRCxpQkFBaUIsR0FBR3BDLE9BQU9SLE1BQU07b0JBQ3pDO2dCQUVGLEtBQUs7b0JBQ0hMLFFBQVFGLGtCQUFrQixHQUFHZSxPQUFPUixNQUFNO29CQUMxQztnQkFFRjtvQkFDRVEsT0FBT1EsUUFBUSxDQUFDRixNQUFNO29CQUN0QjtZQUNKO1FBQ0Y7UUFFQSxPQUFPbkI7SUFDVDtJQUVBc0IsVUFBU0MsTUFBVztRQUNsQixPQUFPO1lBQ0xtQixXQUFXakIsTUFBTUMsT0FBTyxDQUFDSCxtQkFBQUEsNkJBQUFBLE9BQVFtQixTQUFTLElBQ3RDbkIsT0FBT21CLFNBQVMsQ0FBQ2YsR0FBRyxDQUFDLENBQUNDLElBQVdZLHVCQUFVLENBQUNsQixRQUFRLENBQUNNLE1BQ3JELEVBQUU7WUFDTmUsTUFBTWxCLE1BQU1DLE9BQU8sQ0FBQ0gsbUJBQUFBLDZCQUFBQSxPQUFRb0IsSUFBSSxJQUM1QnBCLE9BQU9vQixJQUFJLENBQUNoQixHQUFHLENBQUMsQ0FBQ0MsSUFBV1ksdUJBQVUsQ0FBQ2xCLFFBQVEsQ0FBQ00sTUFDaEQsRUFBRTtZQUNOZ0Isc0JBQXNCcEIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPcUIsb0JBQW9CLElBQ25EZixPQUFPTixPQUFPcUIsb0JBQW9CLElBQ2xDO1lBQ0pDLFNBQVNyQixJQUFBQSxjQUFLLEVBQUNELE9BQU9zQixPQUFPLElBQ3pCTSxJQUFBQSx3QkFBZSxFQUFDNUIsT0FBT3NCLE9BQU8sSUFDOUIsSUFBSUM7WUFDUkMsU0FBU3ZCLElBQUFBLGNBQUssRUFBQ0QsT0FBT3dCLE9BQU8sSUFBSXJELE9BQU82QixPQUFPd0IsT0FBTyxJQUFJckQsT0FBTztZQUNqRXNELGdCQUFnQnhCLElBQUFBLGNBQUssRUFBQ0QsT0FBT3lCLGNBQWMsSUFDdkNHLElBQUFBLHdCQUFlLEVBQUM1QixPQUFPeUIsY0FBYyxJQUNyQyxJQUFJRjtZQUNSRyxtQkFBbUJ6QixJQUFBQSxjQUFLLEVBQUNELE9BQU8wQixpQkFBaUIsSUFDN0N2RCxPQUFPNkIsT0FBTzBCLGlCQUFpQixJQUMvQnZELE9BQU87WUFDWEksb0JBQW9CMEIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPekIsa0JBQWtCLElBQy9DSixPQUFPNkIsT0FBT3pCLGtCQUFrQixJQUNoQ0osT0FBTztRQUNiO0lBQ0Y7SUFFQW9DLFFBQU85QixPQUEwQjtRQUMvQixNQUFNK0IsTUFBVyxDQUFDO1FBRWxCLElBQUkvQixRQUFRMEMsU0FBUyxFQUFFO1lBQ3JCWCxJQUFJVyxTQUFTLEdBQUcxQyxRQUFRMEMsU0FBUyxDQUFDZixHQUFHLENBQUMsQ0FBQ0MsSUFDckNBLElBQUlZLHVCQUFVLENBQUNWLE1BQU0sQ0FBQ0YsS0FBS1o7UUFFL0IsT0FBTztZQUNMZSxJQUFJVyxTQUFTLEdBQUcsRUFBRTtRQUNwQjtRQUVBLElBQUkxQyxRQUFRMkMsSUFBSSxFQUFFO1lBQ2hCWixJQUFJWSxJQUFJLEdBQUczQyxRQUFRMkMsSUFBSSxDQUFDaEIsR0FBRyxDQUFDLENBQUNDLElBQzNCQSxJQUFJWSx1QkFBVSxDQUFDVixNQUFNLENBQUNGLEtBQUtaO1FBRS9CLE9BQU87WUFDTGUsSUFBSVksSUFBSSxHQUFHLEVBQUU7UUFDZjtRQUVBM0MsUUFBUTRDLG9CQUFvQixLQUFLNUIsYUFDOUJlLENBQUFBLElBQUlhLG9CQUFvQixHQUFHNUMsUUFBUTRDLG9CQUFvQixBQUFEO1FBQ3pENUMsUUFBUTZDLE9BQU8sS0FBSzdCLGFBQ2pCZSxDQUFBQSxJQUFJYyxPQUFPLEdBQUdPLElBQUFBLHdCQUFlLEVBQzVCcEQsUUFBUTZDLE9BQU8sS0FBSzdCLFlBQVloQixRQUFRNkMsT0FBTyxHQUFHLElBQUlDLGFBQ3hEO1FBQ0Y5QyxRQUFRK0MsT0FBTyxLQUFLL0IsYUFDakJlLENBQUFBLElBQUlnQixPQUFPLEdBQUcsQUFBQy9DLENBQUFBLFFBQVErQyxPQUFPLElBQUlyRCxPQUFPLEVBQUMsRUFBR3NDLFFBQVEsRUFBQztRQUN6RGhDLFFBQVFnRCxjQUFjLEtBQUtoQyxhQUN4QmUsQ0FBQUEsSUFBSWlCLGNBQWMsR0FBR0ksSUFBQUEsd0JBQWUsRUFDbkNwRCxRQUFRZ0QsY0FBYyxLQUFLaEMsWUFDdkJoQixRQUFRZ0QsY0FBYyxHQUN0QixJQUFJRixhQUNWO1FBQ0Y5QyxRQUFRaUQsaUJBQWlCLEtBQUtqQyxhQUMzQmUsQ0FBQUEsSUFBSWtCLGlCQUFpQixHQUFHLEFBQ3ZCakQsQ0FBQUEsUUFBUWlELGlCQUFpQixJQUFJdkQsT0FBTyxFQUFDLEVBQ3JDc0MsUUFBUSxFQUFDO1FBQ2JoQyxRQUFRRixrQkFBa0IsS0FBS2tCLGFBQzVCZSxDQUFBQSxJQUFJakMsa0JBQWtCLEdBQUcsQUFDeEJFLENBQUFBLFFBQVFGLGtCQUFrQixJQUFJSixPQUFPLEVBQUMsRUFDdENzQyxRQUFRLEVBQUM7UUFDYixPQUFPRDtJQUNUO0lBRUFFLGFBQVlWLE1BQWtDO1lBRzFDQSxtQkFDYUE7UUFIZixNQUFNdkIsVUFBVXlDO1FBQ2hCekMsUUFBUTBDLFNBQVMsR0FDZm5CLEVBQUFBLG9CQUFBQSxPQUFPbUIsU0FBUyxjQUFoQm5CLHdDQUFBQSxrQkFBa0JJLEdBQUcsQ0FBQyxDQUFDQyxJQUFNWSx1QkFBVSxDQUFDUCxXQUFXLENBQUNMLFFBQU8sRUFBRTtRQUMvRDVCLFFBQVEyQyxJQUFJLEdBQUdwQixFQUFBQSxlQUFBQSxPQUFPb0IsSUFBSSxjQUFYcEIsbUNBQUFBLGFBQWFJLEdBQUcsQ0FBQyxDQUFDQyxJQUFNWSx1QkFBVSxDQUFDUCxXQUFXLENBQUNMLFFBQU8sRUFBRTtZQUN4Q0w7UUFBL0J2QixRQUFRNEMsb0JBQW9CLEdBQUdyQixDQUFBQSwrQkFBQUEsT0FBT3FCLG9CQUFvQixjQUEzQnJCLDBDQUFBQSwrQkFBK0I7WUFDNUNBO1FBQWxCdkIsUUFBUTZDLE9BQU8sR0FBR3RCLENBQUFBLGtCQUFBQSxPQUFPc0IsT0FBTyxjQUFkdEIsNkJBQUFBLGtCQUFrQixJQUFJdUI7UUFDeEM5QyxRQUFRK0MsT0FBTyxHQUNieEIsT0FBT3dCLE9BQU8sS0FBSy9CLGFBQWFPLE9BQU93QixPQUFPLEtBQUssT0FDL0NyRCxPQUFPNkIsT0FBT3dCLE9BQU8sSUFDckJyRCxPQUFPO1lBQ1k2QjtRQUF6QnZCLFFBQVFnRCxjQUFjLEdBQUd6QixDQUFBQSx5QkFBQUEsT0FBT3lCLGNBQWMsY0FBckJ6QixvQ0FBQUEseUJBQXlCLElBQUl1QjtRQUN0RDlDLFFBQVFpRCxpQkFBaUIsR0FDdkIxQixPQUFPMEIsaUJBQWlCLEtBQUtqQyxhQUM3Qk8sT0FBTzBCLGlCQUFpQixLQUFLLE9BQ3pCdkQsT0FBTzZCLE9BQU8wQixpQkFBaUIsSUFDL0J2RCxPQUFPO1FBQ2JNLFFBQVFGLGtCQUFrQixHQUN4QnlCLE9BQU96QixrQkFBa0IsS0FBS2tCLGFBQzlCTyxPQUFPekIsa0JBQWtCLEtBQUssT0FDMUJKLE9BQU82QixPQUFPekIsa0JBQWtCLElBQ2hDSixPQUFPO1FBQ2IsT0FBT007SUFDVDtBQUNGO0FBRUEsU0FBU3FEO0lBQ1AsT0FBTztRQUNMQyxnQkFBZ0I7UUFDaEJDLGVBQWU7UUFDZkMsU0FBUztRQUNUQyxPQUFPO0lBQ1Q7QUFDRjtBQUVPLE1BQU10RSw2QkFBNkI7SUFDeENZLFFBQ0VDLE9BQW1DLEVBQ25DQyxTQUF1QkMsb0JBQVksQ0FBQ0MsTUFBTSxFQUFFO1FBRTVDLElBQUlILFFBQVFzRCxjQUFjLEtBQUssSUFBSTtZQUNqQ3JELE9BQU9HLE1BQU0sQ0FBQyxJQUFJSyxNQUFNLENBQUNULFFBQVFzRCxjQUFjO1FBQ2pEO1FBRUEsSUFBSXRELFFBQVF1RCxhQUFhLEtBQUssSUFBSTtZQUNoQ3RELE9BQU9HLE1BQU0sQ0FBQyxJQUFJSyxNQUFNLENBQUNULFFBQVF1RCxhQUFhO1FBQ2hEO1FBRUEsSUFBSXZELFFBQVF3RCxPQUFPLEtBQUssSUFBSTtZQUMxQnZELE9BQU9HLE1BQU0sQ0FBQyxJQUFJSyxNQUFNLENBQUNULFFBQVF3RCxPQUFPO1FBQzFDO1FBRUEsSUFBSXhELFFBQVF5RCxLQUFLLEtBQUssSUFBSTtZQUN4QnhELE9BQU9HLE1BQU0sQ0FBQyxJQUFJSyxNQUFNLENBQUNULFFBQVF5RCxLQUFLO1FBQ3hDO1FBRUEsT0FBT3hEO0lBQ1Q7SUFFQVMsUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJHLG9CQUFZLEdBQUdILFFBQVEsSUFBSUcsb0JBQVksQ0FBQ0g7UUFDM0QsSUFBSUksTUFBTUgsV0FBV0ksWUFBWUgsT0FBT0ksR0FBRyxHQUFHSixPQUFPSyxHQUFHLEdBQUdOO1FBQzNELE1BQU1aLFVBQVVxRDtRQUVoQixNQUFPeEMsT0FBT0ssR0FBRyxHQUFHSCxJQUFLO1lBQ3ZCLE1BQU1JLE1BQU1OLE9BQU9ULE1BQU07WUFFekIsT0FBUWUsUUFBUTtnQkFDZCxLQUFLO29CQUNIbkIsUUFBUXNELGNBQWMsR0FBR3pDLE9BQU9KLE1BQU07b0JBQ3RDO2dCQUVGLEtBQUs7b0JBQ0hULFFBQVF1RCxhQUFhLEdBQUcxQyxPQUFPSixNQUFNO29CQUNyQztnQkFFRixLQUFLO29CQUNIVCxRQUFRd0QsT0FBTyxHQUFHM0MsT0FBT0osTUFBTTtvQkFDL0I7Z0JBRUYsS0FBSztvQkFDSFQsUUFBUXlELEtBQUssR0FBRzVDLE9BQU9KLE1BQU07b0JBQzdCO2dCQUVGO29CQUNFSSxPQUFPUSxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUVBLE9BQU9uQjtJQUNUO0lBRUFzQixVQUFTQyxNQUFXO1FBQ2xCLE9BQU87WUFDTCtCLGdCQUFnQjlCLElBQUFBLGNBQUssRUFBQ0QsT0FBTytCLGNBQWMsSUFDdkN6QixPQUFPTixPQUFPK0IsY0FBYyxJQUM1QjtZQUNKQyxlQUFlL0IsSUFBQUEsY0FBSyxFQUFDRCxPQUFPZ0MsYUFBYSxJQUNyQzFCLE9BQU9OLE9BQU9nQyxhQUFhLElBQzNCO1lBQ0pDLFNBQVNoQyxJQUFBQSxjQUFLLEVBQUNELE9BQU9pQyxPQUFPLElBQUkzQixPQUFPTixPQUFPaUMsT0FBTyxJQUFJO1lBQzFEQyxPQUFPakMsSUFBQUEsY0FBSyxFQUFDRCxPQUFPa0MsS0FBSyxJQUFJNUIsT0FBT04sT0FBT2tDLEtBQUssSUFBSTtRQUN0RDtJQUNGO0lBRUEzQixRQUFPOUIsT0FBbUM7UUFDeEMsTUFBTStCLE1BQVcsQ0FBQztRQUNsQi9CLFFBQVFzRCxjQUFjLEtBQUt0QyxhQUN4QmUsQ0FBQUEsSUFBSXVCLGNBQWMsR0FBR3RELFFBQVFzRCxjQUFjLEFBQUQ7UUFDN0N0RCxRQUFRdUQsYUFBYSxLQUFLdkMsYUFDdkJlLENBQUFBLElBQUl3QixhQUFhLEdBQUd2RCxRQUFRdUQsYUFBYSxBQUFEO1FBQzNDdkQsUUFBUXdELE9BQU8sS0FBS3hDLGFBQWNlLENBQUFBLElBQUl5QixPQUFPLEdBQUd4RCxRQUFRd0QsT0FBTyxBQUFEO1FBQzlEeEQsUUFBUXlELEtBQUssS0FBS3pDLGFBQWNlLENBQUFBLElBQUkwQixLQUFLLEdBQUd6RCxRQUFReUQsS0FBSyxBQUFEO1FBQ3hELE9BQU8xQjtJQUNUO0lBRUFFLGFBQ0VWLE1BQTJDO1FBRTNDLE1BQU12QixVQUFVcUQ7WUFDUzlCO1FBQXpCdkIsUUFBUXNELGNBQWMsR0FBRy9CLENBQUFBLHlCQUFBQSxPQUFPK0IsY0FBYyxjQUFyQi9CLG9DQUFBQSx5QkFBeUI7WUFDMUJBO1FBQXhCdkIsUUFBUXVELGFBQWEsR0FBR2hDLENBQUFBLHdCQUFBQSxPQUFPZ0MsYUFBYSxjQUFwQmhDLG1DQUFBQSx3QkFBd0I7WUFDOUJBO1FBQWxCdkIsUUFBUXdELE9BQU8sR0FBR2pDLENBQUFBLGtCQUFBQSxPQUFPaUMsT0FBTyxjQUFkakMsNkJBQUFBLGtCQUFrQjtZQUNwQkE7UUFBaEJ2QixRQUFReUQsS0FBSyxHQUFHbEMsQ0FBQUEsZ0JBQUFBLE9BQU9rQyxLQUFLLGNBQVpsQywyQkFBQUEsZ0JBQWdCO1FBQ2hDLE9BQU92QjtJQUNUO0FBQ0Y7QUFFQSxTQUFTMEQ7SUFDUCxPQUFPO1FBQ0xKLGdCQUFnQjtRQUNoQkMsZUFBZTtRQUNmQyxTQUFTO1FBQ1RDLE9BQU87SUFDVDtBQUNGO0FBRU8sTUFBTXZFLHFCQUFxQjtJQUNoQ2EsUUFDRUMsT0FBMkIsRUFDM0JDLFNBQXVCQyxvQkFBWSxDQUFDQyxNQUFNLEVBQUU7UUFFNUMsSUFBSUgsUUFBUXNELGNBQWMsS0FBSyxJQUFJO1lBQ2pDckQsT0FBT0csTUFBTSxDQUFDLElBQUlLLE1BQU0sQ0FBQ1QsUUFBUXNELGNBQWM7UUFDakQ7UUFFQSxJQUFJdEQsUUFBUXVELGFBQWEsS0FBSyxJQUFJO1lBQ2hDdEQsT0FBT0csTUFBTSxDQUFDLElBQUlLLE1BQU0sQ0FBQ1QsUUFBUXVELGFBQWE7UUFDaEQ7UUFFQSxJQUFJdkQsUUFBUXdELE9BQU8sS0FBSyxJQUFJO1lBQzFCdkQsT0FBT0csTUFBTSxDQUFDLElBQUlLLE1BQU0sQ0FBQ1QsUUFBUXdELE9BQU87UUFDMUM7UUFFQSxJQUFJeEQsUUFBUXlELEtBQUssS0FBSyxJQUFJO1lBQ3hCeEQsT0FBT0csTUFBTSxDQUFDLElBQUlLLE1BQU0sQ0FBQ1QsUUFBUXlELEtBQUs7UUFDeEM7UUFFQSxPQUFPeEQ7SUFDVDtJQUVBUyxRQUNFQyxLQUFnQyxFQUNoQ0MsTUFBZTtRQUVmLE1BQU1DLFNBQ0pGLGlCQUFpQkcsb0JBQVksR0FBR0gsUUFBUSxJQUFJRyxvQkFBWSxDQUFDSDtRQUMzRCxJQUFJSSxNQUFNSCxXQUFXSSxZQUFZSCxPQUFPSSxHQUFHLEdBQUdKLE9BQU9LLEdBQUcsR0FBR047UUFDM0QsTUFBTVosVUFBVTBEO1FBRWhCLE1BQU83QyxPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUksTUFBTU4sT0FBT1QsTUFBTTtZQUV6QixPQUFRZSxRQUFRO2dCQUNkLEtBQUs7b0JBQ0huQixRQUFRc0QsY0FBYyxHQUFHekMsT0FBT0osTUFBTTtvQkFDdEM7Z0JBRUYsS0FBSztvQkFDSFQsUUFBUXVELGFBQWEsR0FBRzFDLE9BQU9KLE1BQU07b0JBQ3JDO2dCQUVGLEtBQUs7b0JBQ0hULFFBQVF3RCxPQUFPLEdBQUczQyxPQUFPSixNQUFNO29CQUMvQjtnQkFFRixLQUFLO29CQUNIVCxRQUFReUQsS0FBSyxHQUFHNUMsT0FBT0osTUFBTTtvQkFDN0I7Z0JBRUY7b0JBQ0VJLE9BQU9RLFFBQVEsQ0FBQ0YsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBRUEsT0FBT25CO0lBQ1Q7SUFFQXNCLFVBQVNDLE1BQVc7UUFDbEIsT0FBTztZQUNMK0IsZ0JBQWdCOUIsSUFBQUEsY0FBSyxFQUFDRCxPQUFPK0IsY0FBYyxJQUN2Q3pCLE9BQU9OLE9BQU8rQixjQUFjLElBQzVCO1lBQ0pDLGVBQWUvQixJQUFBQSxjQUFLLEVBQUNELE9BQU9nQyxhQUFhLElBQ3JDMUIsT0FBT04sT0FBT2dDLGFBQWEsSUFDM0I7WUFDSkMsU0FBU2hDLElBQUFBLGNBQUssRUFBQ0QsT0FBT2lDLE9BQU8sSUFBSTNCLE9BQU9OLE9BQU9pQyxPQUFPLElBQUk7WUFDMURDLE9BQU9qQyxJQUFBQSxjQUFLLEVBQUNELE9BQU9rQyxLQUFLLElBQUk1QixPQUFPTixPQUFPa0MsS0FBSyxJQUFJO1FBQ3REO0lBQ0Y7SUFFQTNCLFFBQU85QixPQUEyQjtRQUNoQyxNQUFNK0IsTUFBVyxDQUFDO1FBQ2xCL0IsUUFBUXNELGNBQWMsS0FBS3RDLGFBQ3hCZSxDQUFBQSxJQUFJdUIsY0FBYyxHQUFHdEQsUUFBUXNELGNBQWMsQUFBRDtRQUM3Q3RELFFBQVF1RCxhQUFhLEtBQUt2QyxhQUN2QmUsQ0FBQUEsSUFBSXdCLGFBQWEsR0FBR3ZELFFBQVF1RCxhQUFhLEFBQUQ7UUFDM0N2RCxRQUFRd0QsT0FBTyxLQUFLeEMsYUFBY2UsQ0FBQUEsSUFBSXlCLE9BQU8sR0FBR3hELFFBQVF3RCxPQUFPLEFBQUQ7UUFDOUR4RCxRQUFReUQsS0FBSyxLQUFLekMsYUFBY2UsQ0FBQUEsSUFBSTBCLEtBQUssR0FBR3pELFFBQVF5RCxLQUFLLEFBQUQ7UUFDeEQsT0FBTzFCO0lBQ1Q7SUFFQUUsYUFBWVYsTUFBbUM7UUFDN0MsTUFBTXZCLFVBQVUwRDtZQUNTbkM7UUFBekJ2QixRQUFRc0QsY0FBYyxHQUFHL0IsQ0FBQUEseUJBQUFBLE9BQU8rQixjQUFjLGNBQXJCL0Isb0NBQUFBLHlCQUF5QjtZQUMxQkE7UUFBeEJ2QixRQUFRdUQsYUFBYSxHQUFHaEMsQ0FBQUEsd0JBQUFBLE9BQU9nQyxhQUFhLGNBQXBCaEMsbUNBQUFBLHdCQUF3QjtZQUM5QkE7UUFBbEJ2QixRQUFRd0QsT0FBTyxHQUFHakMsQ0FBQUEsa0JBQUFBLE9BQU9pQyxPQUFPLGNBQWRqQyw2QkFBQUEsa0JBQWtCO1lBQ3BCQTtRQUFoQnZCLFFBQVF5RCxLQUFLLEdBQUdsQyxDQUFBQSxnQkFBQUEsT0FBT2tDLEtBQUssY0FBWmxDLDJCQUFBQSxnQkFBZ0I7UUFDaEMsT0FBT3ZCO0lBQ1Q7QUFDRiJ9
/* eslint-disable */ import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { ERC20Token } from "./attestation";
import { base64FromBytes, bytesFromBase64, isSet } from "./helpers";
export const protobufPackage = "gravity.v1";
function createBaseOutgoingTxBatch() {
    return {
        batchNonce: BigInt(0),
        batchTimeout: BigInt(0),
        transactions: [],
        tokenContract: "",
        cosmosBlockCreated: BigInt(0)
    };
}
export const OutgoingTxBatch = {
    encode (message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            batchNonce: isSet(object.batchNonce) ? BigInt(object.batchNonce) : BigInt(0),
            batchTimeout: isSet(object.batchTimeout) ? BigInt(object.batchTimeout) : BigInt(0),
            transactions: Array.isArray(object === null || object === void 0 ? void 0 : object.transactions) ? object.transactions.map((e)=>OutgoingTransferTx.fromJSON(e)) : [],
            tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
            cosmosBlockCreated: isSet(object.cosmosBlockCreated) ? BigInt(object.cosmosBlockCreated) : BigInt(0)
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
export const OutgoingTransferTx = {
    encode (message, writer = BinaryWriter.create()) {
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
            ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.erc20Token = ERC20Token.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? BigInt(object.id) : BigInt(0),
            sender: isSet(object.sender) ? String(object.sender) : "",
            destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
            erc20Token: isSet(object.erc20Token) ? ERC20Token.fromJSON(object.erc20Token) : undefined,
            erc20Fee: isSet(object.erc20Fee) ? ERC20Token.fromJSON(object.erc20Fee) : undefined
        };
    },
    toJSON (message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.destAddress !== undefined && (obj.destAddress = message.destAddress);
        message.erc20Token !== undefined && (obj.erc20Token = message.erc20Token ? ERC20Token.toJSON(message.erc20Token) : undefined);
        message.erc20Fee !== undefined && (obj.erc20Fee = message.erc20Fee ? ERC20Token.toJSON(message.erc20Fee) : undefined);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseOutgoingTransferTx();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id) : BigInt(0);
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        var _object_destAddress;
        message.destAddress = (_object_destAddress = object.destAddress) !== null && _object_destAddress !== void 0 ? _object_destAddress : "";
        message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? ERC20Token.fromPartial(object.erc20Token) : undefined;
        message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? ERC20Token.fromPartial(object.erc20Fee) : undefined;
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
export const OutgoingLogicCall = {
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.transfers){
            ERC20Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.fees){
            ERC20Token.encode(v, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingLogicCall();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.transfers.push(ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fees.push(ERC20Token.decode(reader, reader.uint32()));
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
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers) ? object.transfers.map((e)=>ERC20Token.fromJSON(e)) : [],
            fees: Array.isArray(object === null || object === void 0 ? void 0 : object.fees) ? object.fees.map((e)=>ERC20Token.fromJSON(e)) : [],
            logicContractAddress: isSet(object.logicContractAddress) ? String(object.logicContractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            timeout: isSet(object.timeout) ? BigInt(object.timeout) : BigInt(0),
            invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
            invalidationNonce: isSet(object.invalidationNonce) ? BigInt(object.invalidationNonce) : BigInt(0),
            cosmosBlockCreated: isSet(object.cosmosBlockCreated) ? BigInt(object.cosmosBlockCreated) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map((e)=>e ? ERC20Token.toJSON(e) : undefined);
        } else {
            obj.transfers = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map((e)=>e ? ERC20Token.toJSON(e) : undefined);
        } else {
            obj.fees = [];
        }
        message.logicContractAddress !== undefined && (obj.logicContractAddress = message.logicContractAddress);
        message.payload !== undefined && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.timeout !== undefined && (obj.timeout = (message.timeout || BigInt(0)).toString());
        message.invalidationId !== undefined && (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined ? message.invalidationId : new Uint8Array()));
        message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || BigInt(0)).toString());
        message.cosmosBlockCreated !== undefined && (obj.cosmosBlockCreated = (message.cosmosBlockCreated || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        var _object_transfers, _object_fees;
        const message = createBaseOutgoingLogicCall();
        message.transfers = ((_object_transfers = object.transfers) === null || _object_transfers === void 0 ? void 0 : _object_transfers.map((e)=>ERC20Token.fromPartial(e))) || [];
        message.fees = ((_object_fees = object.fees) === null || _object_fees === void 0 ? void 0 : _object_fees.map((e)=>ERC20Token.fromPartial(e))) || [];
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
export const EventOutgoingBatchCanceled = {
    encode (message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "",
            batchId: isSet(object.batchId) ? String(object.batchId) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : ""
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
export const EventOutgoingBatch = {
    encode (message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "",
            batchId: isSet(object.batchId) ? String(object.batchId) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : ""
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL2JhdGNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBFUkMyMFRva2VuIH0gZnJvbSBcIi4vYXR0ZXN0YXRpb25cIjtcbmltcG9ydCB7IGJhc2U2NEZyb21CeXRlcywgYnl0ZXNGcm9tQmFzZTY0LCBpc1NldCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImdyYXZpdHkudjFcIjtcbi8qKiBPdXRnb2luZ1R4QmF0Y2ggcmVwcmVzZW50cyBhIGJhdGNoIG9mIHRyYW5zYWN0aW9ucyBnb2luZyBmcm9tIGdyYXZpdHkgdG8gRVRIICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgT3V0Z29pbmdUeEJhdGNoIHtcbiAgYmF0Y2hOb25jZTogYmlnaW50O1xuICBiYXRjaFRpbWVvdXQ6IGJpZ2ludDtcbiAgdHJhbnNhY3Rpb25zOiBPdXRnb2luZ1RyYW5zZmVyVHhbXTtcbiAgdG9rZW5Db250cmFjdDogc3RyaW5nO1xuICBjb3Ntb3NCbG9ja0NyZWF0ZWQ6IGJpZ2ludDtcbn1cbi8qKiBPdXRnb2luZ1RyYW5zZmVyVHggcmVwcmVzZW50cyBhbiBpbmRpdmlkdWFsIHNlbmQgZnJvbSBncmF2aXR5IHRvIEVUSCAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE91dGdvaW5nVHJhbnNmZXJUeCB7XG4gIGlkOiBiaWdpbnQ7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBkZXN0QWRkcmVzczogc3RyaW5nO1xuICBlcmMyMFRva2VuPzogRVJDMjBUb2tlbjtcbiAgZXJjMjBGZWU/OiBFUkMyMFRva2VuO1xufVxuLyoqIE91dGdvaW5nTG9naWNDYWxsIHJlcHJlc2VudHMgYW4gaW5kaXZpZHVhbCBsb2dpYyBjYWxsIGZyb20gZ3Jhdml0eSB0byBFVEggKi9cblxuZXhwb3J0IGludGVyZmFjZSBPdXRnb2luZ0xvZ2ljQ2FsbCB7XG4gIHRyYW5zZmVyczogRVJDMjBUb2tlbltdO1xuICBmZWVzOiBFUkMyMFRva2VuW107XG4gIGxvZ2ljQ29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gIHBheWxvYWQ6IFVpbnQ4QXJyYXk7XG4gIHRpbWVvdXQ6IGJpZ2ludDtcbiAgaW52YWxpZGF0aW9uSWQ6IFVpbnQ4QXJyYXk7XG4gIGludmFsaWRhdGlvbk5vbmNlOiBiaWdpbnQ7XG4gIGNvc21vc0Jsb2NrQ3JlYXRlZDogYmlnaW50O1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCB7XG4gIGJyaWRnZUNvbnRyYWN0OiBzdHJpbmc7XG4gIGJyaWRnZUNoYWluSWQ6IHN0cmluZztcbiAgYmF0Y2hJZDogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudE91dGdvaW5nQmF0Y2gge1xuICBicmlkZ2VDb250cmFjdDogc3RyaW5nO1xuICBicmlkZ2VDaGFpbklkOiBzdHJpbmc7XG4gIGJhdGNoSWQ6IHN0cmluZztcbiAgbm9uY2U6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmFzZU91dGdvaW5nVHhCYXRjaCgpOiBPdXRnb2luZ1R4QmF0Y2gge1xuICByZXR1cm4ge1xuICAgIGJhdGNoTm9uY2U6IEJpZ0ludCgwKSxcbiAgICBiYXRjaFRpbWVvdXQ6IEJpZ0ludCgwKSxcbiAgICB0cmFuc2FjdGlvbnM6IFtdLFxuICAgIHRva2VuQ29udHJhY3Q6IFwiXCIsXG4gICAgY29zbW9zQmxvY2tDcmVhdGVkOiBCaWdJbnQoMCksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBPdXRnb2luZ1R4QmF0Y2ggPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBPdXRnb2luZ1R4QmF0Y2gsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5iYXRjaE5vbmNlICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoOCkudWludDY0KG1lc3NhZ2UuYmF0Y2hOb25jZSk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYmF0Y2hUaW1lb3V0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTYpLnVpbnQ2NChtZXNzYWdlLmJhdGNoVGltZW91dCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UudHJhbnNhY3Rpb25zKSB7XG4gICAgICBPdXRnb2luZ1RyYW5zZmVyVHguZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDI2KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnRva2VuQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLnRva2VuQ29udHJhY3QpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQwKS51aW50NjQobWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBPdXRnb2luZ1R4QmF0Y2gge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VPdXRnb2luZ1R4QmF0Y2goKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoTm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2hUaW1lb3V0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLnRyYW5zYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgT3V0Z29pbmdUcmFuc2ZlclR4LmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnRva2VuQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogT3V0Z29pbmdUeEJhdGNoIHtcbiAgICByZXR1cm4ge1xuICAgICAgYmF0Y2hOb25jZTogaXNTZXQob2JqZWN0LmJhdGNoTm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5iYXRjaE5vbmNlKVxuICAgICAgICA6IEJpZ0ludCgwKSxcbiAgICAgIGJhdGNoVGltZW91dDogaXNTZXQob2JqZWN0LmJhdGNoVGltZW91dClcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmJhdGNoVGltZW91dClcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICB0cmFuc2FjdGlvbnM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py50cmFuc2FjdGlvbnMpXG4gICAgICAgID8gb2JqZWN0LnRyYW5zYWN0aW9ucy5tYXAoKGU6IGFueSkgPT4gT3V0Z29pbmdUcmFuc2ZlclR4LmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgICAgdG9rZW5Db250cmFjdDogaXNTZXQob2JqZWN0LnRva2VuQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC50b2tlbkNvbnRyYWN0KVxuICAgICAgICA6IFwiXCIsXG4gICAgICBjb3Ntb3NCbG9ja0NyZWF0ZWQ6IGlzU2V0KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE91dGdvaW5nVHhCYXRjaCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5iYXRjaE5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYmF0Y2hOb25jZSA9IChtZXNzYWdlLmJhdGNoTm9uY2UgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLmJhdGNoVGltZW91dCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJhdGNoVGltZW91dCA9IChtZXNzYWdlLmJhdGNoVGltZW91dCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKG1lc3NhZ2UudHJhbnNhY3Rpb25zKSB7XG4gICAgICBvYmoudHJhbnNhY3Rpb25zID0gbWVzc2FnZS50cmFuc2FjdGlvbnMubWFwKChlKSA9PlxuICAgICAgICBlID8gT3V0Z29pbmdUcmFuc2ZlclR4LnRvSlNPTihlKSA6IHVuZGVmaW5lZFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnRyYW5zYWN0aW9ucyA9IFtdO1xuICAgIH1cblxuICAgIG1lc3NhZ2UudG9rZW5Db250cmFjdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnRva2VuQ29udHJhY3QgPSBtZXNzYWdlLnRva2VuQ29udHJhY3QpO1xuICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zQmxvY2tDcmVhdGVkID0gKFxuICAgICAgICBtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCB8fCBCaWdJbnQoMClcbiAgICAgICkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8T3V0Z29pbmdUeEJhdGNoPik6IE91dGdvaW5nVHhCYXRjaCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VPdXRnb2luZ1R4QmF0Y2goKTtcbiAgICBtZXNzYWdlLmJhdGNoTm9uY2UgPVxuICAgICAgb2JqZWN0LmJhdGNoTm9uY2UgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuYmF0Y2hOb25jZSAhPT0gbnVsbFxuICAgICAgICA/IEJpZ0ludChvYmplY3QuYmF0Y2hOb25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5iYXRjaFRpbWVvdXQgPVxuICAgICAgb2JqZWN0LmJhdGNoVGltZW91dCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5iYXRjaFRpbWVvdXQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmJhdGNoVGltZW91dClcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS50cmFuc2FjdGlvbnMgPVxuICAgICAgb2JqZWN0LnRyYW5zYWN0aW9ucz8ubWFwKChlKSA9PiBPdXRnb2luZ1RyYW5zZmVyVHguZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UudG9rZW5Db250cmFjdCA9IG9iamVjdC50b2tlbkNvbnRyYWN0ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQgPVxuICAgICAgb2JqZWN0LmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuY29zbW9zQmxvY2tDcmVhdGVkICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZU91dGdvaW5nVHJhbnNmZXJUeCgpOiBPdXRnb2luZ1RyYW5zZmVyVHgge1xuICByZXR1cm4ge1xuICAgIGlkOiBCaWdJbnQoMCksXG4gICAgc2VuZGVyOiBcIlwiLFxuICAgIGRlc3RBZGRyZXNzOiBcIlwiLFxuICAgIGVyYzIwVG9rZW46IHVuZGVmaW5lZCxcbiAgICBlcmMyMEZlZTogdW5kZWZpbmVkLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgT3V0Z29pbmdUcmFuc2ZlclR4ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogT3V0Z29pbmdUcmFuc2ZlclR4LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuaWQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS51aW50NjQobWVzc2FnZS5pZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5zZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmRlc3RBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5kZXN0QWRkcmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXJjMjBUb2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBFUkMyMFRva2VuLmVuY29kZShtZXNzYWdlLmVyYzIwVG9rZW4sIHdyaXRlci51aW50MzIoMzQpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZXJjMjBGZWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgRVJDMjBUb2tlbi5lbmNvZGUobWVzc2FnZS5lcmMyMEZlZSwgd3JpdGVyLnVpbnQzMig0MikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogT3V0Z29pbmdUcmFuc2ZlclR4IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlT3V0Z29pbmdUcmFuc2ZlclR4KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5pZCA9IHJlYWRlci51aW50NjQoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5zZW5kZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuZGVzdEFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuZXJjMjBUb2tlbiA9IEVSQzIwVG9rZW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5lcmMyMEZlZSA9IEVSQzIwVG9rZW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE91dGdvaW5nVHJhbnNmZXJUeCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpc1NldChvYmplY3QuaWQpID8gQmlnSW50KG9iamVjdC5pZCkgOiBCaWdJbnQoMCksXG4gICAgICBzZW5kZXI6IGlzU2V0KG9iamVjdC5zZW5kZXIpID8gU3RyaW5nKG9iamVjdC5zZW5kZXIpIDogXCJcIixcbiAgICAgIGRlc3RBZGRyZXNzOiBpc1NldChvYmplY3QuZGVzdEFkZHJlc3MpID8gU3RyaW5nKG9iamVjdC5kZXN0QWRkcmVzcykgOiBcIlwiLFxuICAgICAgZXJjMjBUb2tlbjogaXNTZXQob2JqZWN0LmVyYzIwVG9rZW4pXG4gICAgICAgID8gRVJDMjBUb2tlbi5mcm9tSlNPTihvYmplY3QuZXJjMjBUb2tlbilcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICBlcmMyMEZlZTogaXNTZXQob2JqZWN0LmVyYzIwRmVlKVxuICAgICAgICA/IEVSQzIwVG9rZW4uZnJvbUpTT04ob2JqZWN0LmVyYzIwRmVlKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBPdXRnb2luZ1RyYW5zZmVyVHgpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gKG1lc3NhZ2UuaWQgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICBtZXNzYWdlLnNlbmRlciAhPT0gdW5kZWZpbmVkICYmIChvYmouc2VuZGVyID0gbWVzc2FnZS5zZW5kZXIpO1xuICAgIG1lc3NhZ2UuZGVzdEFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5kZXN0QWRkcmVzcyA9IG1lc3NhZ2UuZGVzdEFkZHJlc3MpO1xuICAgIG1lc3NhZ2UuZXJjMjBUb2tlbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmVyYzIwVG9rZW4gPSBtZXNzYWdlLmVyYzIwVG9rZW5cbiAgICAgICAgPyBFUkMyMFRva2VuLnRvSlNPTihtZXNzYWdlLmVyYzIwVG9rZW4pXG4gICAgICAgIDogdW5kZWZpbmVkKTtcbiAgICBtZXNzYWdlLmVyYzIwRmVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZXJjMjBGZWUgPSBtZXNzYWdlLmVyYzIwRmVlXG4gICAgICAgID8gRVJDMjBUb2tlbi50b0pTT04obWVzc2FnZS5lcmMyMEZlZSlcbiAgICAgICAgOiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPE91dGdvaW5nVHJhbnNmZXJUeD4pOiBPdXRnb2luZ1RyYW5zZmVyVHgge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlT3V0Z29pbmdUcmFuc2ZlclR4KCk7XG4gICAgbWVzc2FnZS5pZCA9XG4gICAgICBvYmplY3QuaWQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaWQgIT09IG51bGxcbiAgICAgICAgPyBCaWdJbnQob2JqZWN0LmlkKVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLnNlbmRlciA9IG9iamVjdC5zZW5kZXIgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmRlc3RBZGRyZXNzID0gb2JqZWN0LmRlc3RBZGRyZXNzID8/IFwiXCI7XG4gICAgbWVzc2FnZS5lcmMyMFRva2VuID1cbiAgICAgIG9iamVjdC5lcmMyMFRva2VuICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmVyYzIwVG9rZW4gIT09IG51bGxcbiAgICAgICAgPyBFUkMyMFRva2VuLmZyb21QYXJ0aWFsKG9iamVjdC5lcmMyMFRva2VuKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLmVyYzIwRmVlID1cbiAgICAgIG9iamVjdC5lcmMyMEZlZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5lcmMyMEZlZSAhPT0gbnVsbFxuICAgICAgICA/IEVSQzIwVG9rZW4uZnJvbVBhcnRpYWwob2JqZWN0LmVyYzIwRmVlKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VPdXRnb2luZ0xvZ2ljQ2FsbCgpOiBPdXRnb2luZ0xvZ2ljQ2FsbCB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmZXJzOiBbXSxcbiAgICBmZWVzOiBbXSxcbiAgICBsb2dpY0NvbnRyYWN0QWRkcmVzczogXCJcIixcbiAgICBwYXlsb2FkOiBuZXcgVWludDhBcnJheSgpLFxuICAgIHRpbWVvdXQ6IEJpZ0ludCgwKSxcbiAgICBpbnZhbGlkYXRpb25JZDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICBpbnZhbGlkYXRpb25Ob25jZTogQmlnSW50KDApLFxuICAgIGNvc21vc0Jsb2NrQ3JlYXRlZDogQmlnSW50KDApLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgT3V0Z29pbmdMb2dpY0NhbGwgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBPdXRnb2luZ0xvZ2ljQ2FsbCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLnRyYW5zZmVycykge1xuICAgICAgRVJDMjBUb2tlbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuZmVlcykge1xuICAgICAgRVJDMjBUb2tlbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTgpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UubG9naWNDb250cmFjdEFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmxvZ2ljQ29udHJhY3RBZGRyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5wYXlsb2FkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuYnl0ZXMobWVzc2FnZS5wYXlsb2FkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS50aW1lb3V0ICE9PSBCaWdJbnQoMCkpIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDApLnVpbnQ2NChtZXNzYWdlLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmludmFsaWRhdGlvbklkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMig1MCkuYnl0ZXMobWVzc2FnZS5pbnZhbGlkYXRpb25JZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig1NikudWludDY0KG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDY0KS51aW50NjQobWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBPdXRnb2luZ0xvZ2ljQ2FsbCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU91dGdvaW5nTG9naWNDYWxsKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS50cmFuc2ZlcnMucHVzaChFUkMyMFRva2VuLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmZlZXMucHVzaChFUkMyMFRva2VuLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmxvZ2ljQ29udHJhY3RBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLnBheWxvYWQgPSByZWFkZXIuYnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS50aW1lb3V0ID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkID0gcmVhZGVyLmJ5dGVzKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkID0gcmVhZGVyLnVpbnQ2NCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVhZGVyLnNraXBUeXBlKHRhZyAmIDcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogT3V0Z29pbmdMb2dpY0NhbGwge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2ZlcnM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py50cmFuc2ZlcnMpXG4gICAgICAgID8gb2JqZWN0LnRyYW5zZmVycy5tYXAoKGU6IGFueSkgPT4gRVJDMjBUb2tlbi5mcm9tSlNPTihlKSlcbiAgICAgICAgOiBbXSxcbiAgICAgIGZlZXM6IEFycmF5LmlzQXJyYXkob2JqZWN0Py5mZWVzKVxuICAgICAgICA/IG9iamVjdC5mZWVzLm1hcCgoZTogYW55KSA9PiBFUkMyMFRva2VuLmZyb21KU09OKGUpKVxuICAgICAgICA6IFtdLFxuICAgICAgbG9naWNDb250cmFjdEFkZHJlc3M6IGlzU2V0KG9iamVjdC5sb2dpY0NvbnRyYWN0QWRkcmVzcylcbiAgICAgICAgPyBTdHJpbmcob2JqZWN0LmxvZ2ljQ29udHJhY3RBZGRyZXNzKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBwYXlsb2FkOiBpc1NldChvYmplY3QucGF5bG9hZClcbiAgICAgICAgPyBieXRlc0Zyb21CYXNlNjQob2JqZWN0LnBheWxvYWQpXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIHRpbWVvdXQ6IGlzU2V0KG9iamVjdC50aW1lb3V0KSA/IEJpZ0ludChvYmplY3QudGltZW91dCkgOiBCaWdJbnQoMCksXG4gICAgICBpbnZhbGlkYXRpb25JZDogaXNTZXQob2JqZWN0LmludmFsaWRhdGlvbklkKVxuICAgICAgICA/IGJ5dGVzRnJvbUJhc2U2NChvYmplY3QuaW52YWxpZGF0aW9uSWQpXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoKSxcbiAgICAgIGludmFsaWRhdGlvbk5vbmNlOiBpc1NldChvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCksXG4gICAgICBjb3Ntb3NCbG9ja0NyZWF0ZWQ6IGlzU2V0KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IE91dGdvaW5nTG9naWNDYWxsKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLnRyYW5zZmVycykge1xuICAgICAgb2JqLnRyYW5zZmVycyA9IG1lc3NhZ2UudHJhbnNmZXJzLm1hcCgoZSkgPT5cbiAgICAgICAgZSA/IEVSQzIwVG9rZW4udG9KU09OKGUpIDogdW5kZWZpbmVkXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmoudHJhbnNmZXJzID0gW107XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuZmVlcykge1xuICAgICAgb2JqLmZlZXMgPSBtZXNzYWdlLmZlZXMubWFwKChlKSA9PlxuICAgICAgICBlID8gRVJDMjBUb2tlbi50b0pTT04oZSkgOiB1bmRlZmluZWRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mZWVzID0gW107XG4gICAgfVxuXG4gICAgbWVzc2FnZS5sb2dpY0NvbnRyYWN0QWRkcmVzcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmxvZ2ljQ29udHJhY3RBZGRyZXNzID0gbWVzc2FnZS5sb2dpY0NvbnRyYWN0QWRkcmVzcyk7XG4gICAgbWVzc2FnZS5wYXlsb2FkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoucGF5bG9hZCA9IGJhc2U2NEZyb21CeXRlcyhcbiAgICAgICAgbWVzc2FnZS5wYXlsb2FkICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLnBheWxvYWQgOiBuZXcgVWludDhBcnJheSgpXG4gICAgICApKTtcbiAgICBtZXNzYWdlLnRpbWVvdXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50aW1lb3V0ID0gKG1lc3NhZ2UudGltZW91dCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5pbnZhbGlkYXRpb25JZCA9IGJhc2U2NEZyb21CeXRlcyhcbiAgICAgICAgbWVzc2FnZS5pbnZhbGlkYXRpb25JZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBtZXNzYWdlLmludmFsaWRhdGlvbklkXG4gICAgICAgICAgOiBuZXcgVWludDhBcnJheSgpXG4gICAgICApKTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbk5vbmNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouaW52YWxpZGF0aW9uTm9uY2UgPSAoXG4gICAgICAgIG1lc3NhZ2UuaW52YWxpZGF0aW9uTm9uY2UgfHwgQmlnSW50KDApXG4gICAgICApLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UuY29zbW9zQmxvY2tDcmVhdGVkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouY29zbW9zQmxvY2tDcmVhdGVkID0gKFxuICAgICAgICBtZXNzYWdlLmNvc21vc0Jsb2NrQ3JlYXRlZCB8fCBCaWdJbnQoMClcbiAgICAgICkudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IFBhcnRpYWw8T3V0Z29pbmdMb2dpY0NhbGw+KTogT3V0Z29pbmdMb2dpY0NhbGwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlT3V0Z29pbmdMb2dpY0NhbGwoKTtcbiAgICBtZXNzYWdlLnRyYW5zZmVycyA9XG4gICAgICBvYmplY3QudHJhbnNmZXJzPy5tYXAoKGUpID0+IEVSQzIwVG9rZW4uZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UuZmVlcyA9IG9iamVjdC5mZWVzPy5tYXAoKGUpID0+IEVSQzIwVG9rZW4uZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIG1lc3NhZ2UubG9naWNDb250cmFjdEFkZHJlc3MgPSBvYmplY3QubG9naWNDb250cmFjdEFkZHJlc3MgPz8gXCJcIjtcbiAgICBtZXNzYWdlLnBheWxvYWQgPSBvYmplY3QucGF5bG9hZCA/PyBuZXcgVWludDhBcnJheSgpO1xuICAgIG1lc3NhZ2UudGltZW91dCA9XG4gICAgICBvYmplY3QudGltZW91dCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC50aW1lb3V0ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC50aW1lb3V0KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICBtZXNzYWdlLmludmFsaWRhdGlvbklkID0gb2JqZWN0LmludmFsaWRhdGlvbklkID8/IG5ldyBVaW50OEFycmF5KCk7XG4gICAgbWVzc2FnZS5pbnZhbGlkYXRpb25Ob25jZSA9XG4gICAgICBvYmplY3QuaW52YWxpZGF0aW9uTm9uY2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmludmFsaWRhdGlvbk5vbmNlICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5pbnZhbGlkYXRpb25Ob25jZSlcbiAgICAgICAgOiBCaWdJbnQoMCk7XG4gICAgbWVzc2FnZS5jb3Ntb3NCbG9ja0NyZWF0ZWQgPVxuICAgICAgb2JqZWN0LmNvc21vc0Jsb2NrQ3JlYXRlZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBvYmplY3QuY29zbW9zQmxvY2tDcmVhdGVkICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC5jb3Ntb3NCbG9ja0NyZWF0ZWQpXG4gICAgICAgIDogQmlnSW50KDApO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcblxuZnVuY3Rpb24gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKCk6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkIHtcbiAgcmV0dXJuIHtcbiAgICBicmlkZ2VDb250cmFjdDogXCJcIixcbiAgICBicmlkZ2VDaGFpbklkOiBcIlwiLFxuICAgIGJhdGNoSWQ6IFwiXCIsXG4gICAgbm9uY2U6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaElkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5iYXRjaElkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmJhdGNoSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyaWRnZUNvbnRyYWN0OiBpc1NldChvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDb250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgYnJpZGdlQ2hhaW5JZDogaXNTZXQob2JqZWN0LmJyaWRnZUNoYWluSWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBiYXRjaElkOiBpc1NldChvYmplY3QuYmF0Y2hJZCkgPyBTdHJpbmcob2JqZWN0LmJhdGNoSWQpIDogXCJcIixcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ29udHJhY3QgPSBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VDaGFpbklkID0gbWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICBtZXNzYWdlLmJhdGNoSWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmJhdGNoSWQgPSBtZXNzYWdlLmJhdGNoSWQpO1xuICAgIG1lc3NhZ2Uubm9uY2UgIT09IHVuZGVmaW5lZCAmJiAob2JqLm5vbmNlID0gbWVzc2FnZS5ub25jZSk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IFBhcnRpYWw8RXZlbnRPdXRnb2luZ0JhdGNoQ2FuY2VsZWQ+XG4gICk6IEV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50T3V0Z29pbmdCYXRjaENhbmNlbGVkKCk7XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IG9iamVjdC5icmlkZ2VDb250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IG9iamVjdC5icmlkZ2VDaGFpbklkID8/IFwiXCI7XG4gICAgbWVzc2FnZS5iYXRjaElkID0gb2JqZWN0LmJhdGNoSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm5vbmNlID0gb2JqZWN0Lm5vbmNlID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlRXZlbnRPdXRnb2luZ0JhdGNoKCk6IEV2ZW50T3V0Z29pbmdCYXRjaCB7XG4gIHJldHVybiB7XG4gICAgYnJpZGdlQ29udHJhY3Q6IFwiXCIsXG4gICAgYnJpZGdlQ2hhaW5JZDogXCJcIixcbiAgICBiYXRjaElkOiBcIlwiLFxuICAgIG5vbmNlOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRPdXRnb2luZ0JhdGNoID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRPdXRnb2luZ0JhdGNoLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5iYXRjaElkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5iYXRjaElkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5ub25jZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBFdmVudE91dGdvaW5nQmF0Y2gge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudE91dGdvaW5nQmF0Y2goKTtcblxuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG5cbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuYmF0Y2hJZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5ub25jZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50T3V0Z29pbmdCYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyaWRnZUNvbnRyYWN0OiBpc1NldChvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDb250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgYnJpZGdlQ2hhaW5JZDogaXNTZXQob2JqZWN0LmJyaWRnZUNoYWluSWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBiYXRjaElkOiBpc1NldChvYmplY3QuYmF0Y2hJZCkgPyBTdHJpbmcob2JqZWN0LmJhdGNoSWQpIDogXCJcIixcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50T3V0Z29pbmdCYXRjaCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJyaWRnZUNvbnRyYWN0ID0gbWVzc2FnZS5icmlkZ2VDb250cmFjdCk7XG4gICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ2hhaW5JZCA9IG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCk7XG4gICAgbWVzc2FnZS5iYXRjaElkICE9PSB1bmRlZmluZWQgJiYgKG9iai5iYXRjaElkID0gbWVzc2FnZS5iYXRjaElkKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEV2ZW50T3V0Z29pbmdCYXRjaD4pOiBFdmVudE91dGdvaW5nQmF0Y2gge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRPdXRnb2luZ0JhdGNoKCk7XG4gICAgbWVzc2FnZS5icmlkZ2VDb250cmFjdCA9IG9iamVjdC5icmlkZ2VDb250cmFjdCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IG9iamVjdC5icmlkZ2VDaGFpbklkID8/IFwiXCI7XG4gICAgbWVzc2FnZS5iYXRjaElkID0gb2JqZWN0LmJhdGNoSWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLm5vbmNlID0gb2JqZWN0Lm5vbmNlID8/IFwiXCI7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJpbmFyeVJlYWRlciIsIkJpbmFyeVdyaXRlciIsIkVSQzIwVG9rZW4iLCJiYXNlNjRGcm9tQnl0ZXMiLCJieXRlc0Zyb21CYXNlNjQiLCJpc1NldCIsInByb3RvYnVmUGFja2FnZSIsImNyZWF0ZUJhc2VPdXRnb2luZ1R4QmF0Y2giLCJiYXRjaE5vbmNlIiwiQmlnSW50IiwiYmF0Y2hUaW1lb3V0IiwidHJhbnNhY3Rpb25zIiwidG9rZW5Db250cmFjdCIsImNvc21vc0Jsb2NrQ3JlYXRlZCIsIk91dGdvaW5nVHhCYXRjaCIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJjcmVhdGUiLCJ1aW50MzIiLCJ1aW50NjQiLCJ2IiwiT3V0Z29pbmdUcmFuc2ZlclR4IiwiZm9yayIsImxkZWxpbSIsInN0cmluZyIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwicHVzaCIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJlIiwiU3RyaW5nIiwidG9KU09OIiwib2JqIiwidG9TdHJpbmciLCJmcm9tUGFydGlhbCIsImNyZWF0ZUJhc2VPdXRnb2luZ1RyYW5zZmVyVHgiLCJpZCIsInNlbmRlciIsImRlc3RBZGRyZXNzIiwiZXJjMjBUb2tlbiIsImVyYzIwRmVlIiwiY3JlYXRlQmFzZU91dGdvaW5nTG9naWNDYWxsIiwidHJhbnNmZXJzIiwiZmVlcyIsImxvZ2ljQ29udHJhY3RBZGRyZXNzIiwicGF5bG9hZCIsIlVpbnQ4QXJyYXkiLCJ0aW1lb3V0IiwiaW52YWxpZGF0aW9uSWQiLCJpbnZhbGlkYXRpb25Ob25jZSIsIk91dGdvaW5nTG9naWNDYWxsIiwiYnl0ZXMiLCJjcmVhdGVCYXNlRXZlbnRPdXRnb2luZ0JhdGNoQ2FuY2VsZWQiLCJicmlkZ2VDb250cmFjdCIsImJyaWRnZUNoYWluSWQiLCJiYXRjaElkIiwibm9uY2UiLCJFdmVudE91dGdvaW5nQmF0Y2hDYW5jZWxlZCIsImNyZWF0ZUJhc2VFdmVudE91dGdvaW5nQmF0Y2giLCJFdmVu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
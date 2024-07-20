/* eslint-disable */ import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Long, isSet } from "./helpers";
export const protobufPackage = "gravity.v1";
function createBaseIDSet() {
    return {
        ids: []
    };
}
export const IDSet = {
    encode (message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids){
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDSet();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while(reader.pos < end2){
                            message.ids.push(reader.uint64());
                        }
                    } else {
                        message.ids.push(reader.uint64());
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
            ids: Array.isArray(object === null || object === void 0 ? void 0 : object.ids) ? object.ids.map((e)=>Long.fromValue(e)) : []
        };
    },
    toJSON (message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e)=>(e || BigInt(0)).toString());
        } else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_ids;
        const message = createBaseIDSet();
        message.ids = ((_object_ids = object.ids) === null || _object_ids === void 0 ? void 0 : _object_ids.map((e)=>BigInt(e))) || [];
        return message;
    }
};
function createBaseBatchFees() {
    return {
        token: "",
        totalFees: "",
        txCount: BigInt(0)
    };
}
export const BatchFees = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.totalFees !== "") {
            writer.uint32(18).string(message.totalFees);
        }
        if (message.txCount !== BigInt(0)) {
            writer.uint32(24).uint64(message.txCount);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchFees();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.totalFees = reader.string();
                    break;
                case 3:
                    message.txCount = reader.uint64();
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
            token: isSet(object.token) ? String(object.token) : "",
            totalFees: isSet(object.totalFees) ? String(object.totalFees) : "",
            txCount: isSet(object.txCount) ? BigInt(object.txCount) : BigInt(0)
        };
    },
    toJSON (message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.totalFees !== undefined && (obj.totalFees = message.totalFees);
        message.txCount !== undefined && (obj.txCount = (message.txCount || BigInt(0)).toString());
        return obj;
    },
    fromPartial (object) {
        const message = createBaseBatchFees();
        var _object_token;
        message.token = (_object_token = object.token) !== null && _object_token !== void 0 ? _object_token : "";
        var _object_totalFees;
        message.totalFees = (_object_totalFees = object.totalFees) !== null && _object_totalFees !== void 0 ? _object_totalFees : "";
        message.txCount = object.txCount !== undefined && object.txCount !== null ? BigInt(object.txCount) : BigInt(0);
        return message;
    }
};
function createBaseEventWithdrawalReceived() {
    return {
        bridgeContract: "",
        bridgeChainId: "",
        outgoingTxId: "",
        nonce: ""
    };
}
export const EventWithdrawalReceived = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.bridgeContract !== "") {
            writer.uint32(10).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(18).string(message.bridgeChainId);
        }
        if (message.outgoingTxId !== "") {
            writer.uint32(26).string(message.outgoingTxId);
        }
        if (message.nonce !== "") {
            writer.uint32(34).string(message.nonce);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawalReceived();
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
                    message.outgoingTxId = reader.string();
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
            outgoingTxId: isSet(object.outgoingTxId) ? String(object.outgoingTxId) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        message.outgoingTxId !== undefined && (obj.outgoingTxId = message.outgoingTxId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventWithdrawalReceived();
        var _object_bridgeContract;
        message.bridgeContract = (_object_bridgeContract = object.bridgeContract) !== null && _object_bridgeContract !== void 0 ? _object_bridgeContract : "";
        var _object_bridgeChainId;
        message.bridgeChainId = (_object_bridgeChainId = object.bridgeChainId) !== null && _object_bridgeChainId !== void 0 ? _object_bridgeChainId : "";
        var _object_outgoingTxId;
        message.outgoingTxId = (_object_outgoingTxId = object.outgoingTxId) !== null && _object_outgoingTxId !== void 0 ? _object_outgoingTxId : "";
        var _object_nonce;
        message.nonce = (_object_nonce = object.nonce) !== null && _object_nonce !== void 0 ? _object_nonce : "";
        return message;
    }
};
function createBaseEventWithdrawCanceled() {
    return {
        sender: "",
        txId: "",
        bridgeContract: "",
        bridgeChainId: ""
    };
}
export const EventWithdrawCanceled = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.txId !== "") {
            writer.uint32(18).string(message.txId);
        }
        if (message.bridgeContract !== "") {
            writer.uint32(26).string(message.bridgeContract);
        }
        if (message.bridgeChainId !== "") {
            writer.uint32(34).string(message.bridgeChainId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawCanceled();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.txId = reader.string();
                    break;
                case 3:
                    message.bridgeContract = reader.string();
                    break;
                case 4:
                    message.bridgeChainId = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            txId: isSet(object.txId) ? String(object.txId) : "",
            bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : ""
        };
    },
    toJSON (message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.txId !== undefined && (obj.txId = message.txId);
        message.bridgeContract !== undefined && (obj.bridgeContract = message.bridgeContract);
        message.bridgeChainId !== undefined && (obj.bridgeChainId = message.bridgeChainId);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseEventWithdrawCanceled();
        var _object_sender;
        message.sender = (_object_sender = object.sender) !== null && _object_sender !== void 0 ? _object_sender : "";
        var _object_txId;
        message.txId = (_object_txId = object.txId) !== null && _object_txId !== void 0 ? _object_txId : "";
        var _object_bridgeContract;
        message.bridgeContract = (_object_bridgeContract = object.bridgeContract) !== null && _object_bridgeContract !== void 0 ? _object_bridgeContract : "";
        var _object_bridgeChainId;
        message.bridgeChainId = (_object_bridgeChainId = object.bridgeChainId) !== null && _object_bridgeChainId !== void 0 ? _object_bridgeChainId : "";
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL3Bvb2wudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IExvbmcsIGlzU2V0IH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZ3Jhdml0eS52MVwiO1xuLyoqIElEU2V0IHJlcHJlc2VudHMgYSBzZXQgb2YgSURzICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSURTZXQge1xuICAvKiogSURTZXQgcmVwcmVzZW50cyBhIHNldCBvZiBJRHMgKi9cbiAgaWRzOiBiaWdpbnRbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmF0Y2hGZWVzIHtcbiAgdG9rZW46IHN0cmluZztcbiAgdG90YWxGZWVzOiBzdHJpbmc7XG4gIHR4Q291bnQ6IGJpZ2ludDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRXaXRoZHJhd2FsUmVjZWl2ZWQge1xuICBicmlkZ2VDb250cmFjdDogc3RyaW5nO1xuICBicmlkZ2VDaGFpbklkOiBzdHJpbmc7XG4gIG91dGdvaW5nVHhJZDogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudFdpdGhkcmF3Q2FuY2VsZWQge1xuICBzZW5kZXI6IHN0cmluZztcbiAgdHhJZDogc3RyaW5nO1xuICBicmlkZ2VDb250cmFjdDogc3RyaW5nO1xuICBicmlkZ2VDaGFpbklkOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VJRFNldCgpOiBJRFNldCB7XG4gIHJldHVybiB7XG4gICAgaWRzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IElEU2V0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogSURTZXQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICB3cml0ZXIudWludDMyKDEwKS5mb3JrKCk7XG5cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5pZHMpIHtcbiAgICAgIHdyaXRlci51aW50NjQodik7XG4gICAgfVxuXG4gICAgd3JpdGVyLmxkZWxpbSgpO1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBJRFNldCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUlEU2V0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKCh0YWcgJiA3KSA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgZW5kMiA9IHJlYWRlci51aW50MzIoKSArIHJlYWRlci5wb3M7XG5cbiAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kMikge1xuICAgICAgICAgICAgICBtZXNzYWdlLmlkcy5wdXNoKHJlYWRlci51aW50NjQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UuaWRzLnB1c2gocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IElEU2V0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiBBcnJheS5pc0FycmF5KG9iamVjdD8uaWRzKVxuICAgICAgICA/IG9iamVjdC5pZHMubWFwKChlOiBhbnkpID0+IExvbmcuZnJvbVZhbHVlKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IElEU2V0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLmlkcykge1xuICAgICAgb2JqLmlkcyA9IG1lc3NhZ2UuaWRzLm1hcCgoZSkgPT4gKGUgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmlkcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPElEU2V0Pik6IElEU2V0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUlEU2V0KCk7XG4gICAgbWVzc2FnZS5pZHMgPSBvYmplY3QuaWRzPy5tYXAoKGUpID0+IEJpZ0ludChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlQmF0Y2hGZWVzKCk6IEJhdGNoRmVlcyB7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IFwiXCIsXG4gICAgdG90YWxGZWVzOiBcIlwiLFxuICAgIHR4Q291bnQ6IEJpZ0ludCgwKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEJhdGNoRmVlcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEJhdGNoRmVlcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnRva2VuICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS50b2tlbik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudG90YWxGZWVzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS50b3RhbEZlZXMpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR4Q291bnQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNCkudWludDY0KG1lc3NhZ2UudHhDb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEJhdGNoRmVlcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUJhdGNoRmVlcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudG9rZW4gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UudG90YWxGZWVzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLnR4Q291bnQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBCYXRjaEZlZXMge1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbjogaXNTZXQob2JqZWN0LnRva2VuKSA/IFN0cmluZyhvYmplY3QudG9rZW4pIDogXCJcIixcbiAgICAgIHRvdGFsRmVlczogaXNTZXQob2JqZWN0LnRvdGFsRmVlcykgPyBTdHJpbmcob2JqZWN0LnRvdGFsRmVlcykgOiBcIlwiLFxuICAgICAgdHhDb3VudDogaXNTZXQob2JqZWN0LnR4Q291bnQpID8gQmlnSW50KG9iamVjdC50eENvdW50KSA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBCYXRjaEZlZXMpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudG9rZW4gIT09IHVuZGVmaW5lZCAmJiAob2JqLnRva2VuID0gbWVzc2FnZS50b2tlbik7XG4gICAgbWVzc2FnZS50b3RhbEZlZXMgIT09IHVuZGVmaW5lZCAmJiAob2JqLnRvdGFsRmVlcyA9IG1lc3NhZ2UudG90YWxGZWVzKTtcbiAgICBtZXNzYWdlLnR4Q291bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50eENvdW50ID0gKG1lc3NhZ2UudHhDb3VudCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEJhdGNoRmVlcz4pOiBCYXRjaEZlZXMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQmF0Y2hGZWVzKCk7XG4gICAgbWVzc2FnZS50b2tlbiA9IG9iamVjdC50b2tlbiA/PyBcIlwiO1xuICAgIG1lc3NhZ2UudG90YWxGZWVzID0gb2JqZWN0LnRvdGFsRmVlcyA/PyBcIlwiO1xuICAgIG1lc3NhZ2UudHhDb3VudCA9XG4gICAgICBvYmplY3QudHhDb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC50eENvdW50ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC50eENvdW50KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCgpOiBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCB7XG4gIHJldHVybiB7XG4gICAgYnJpZGdlQ29udHJhY3Q6IFwiXCIsXG4gICAgYnJpZGdlQ2hhaW5JZDogXCJcIixcbiAgICBvdXRnb2luZ1R4SWQ6IFwiXCIsXG4gICAgbm9uY2U6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50V2l0aGRyYXdhbFJlY2VpdmVkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5vdXRnb2luZ1R4SWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLm91dGdvaW5nVHhJZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRXZlbnRXaXRoZHJhd2FsUmVjZWl2ZWQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5vdXRnb2luZ1R4SWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyaWRnZUNvbnRyYWN0OiBpc1NldChvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDb250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgYnJpZGdlQ2hhaW5JZDogaXNTZXQob2JqZWN0LmJyaWRnZUNoYWluSWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBvdXRnb2luZ1R4SWQ6IGlzU2V0KG9iamVjdC5vdXRnb2luZ1R4SWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vdXRnb2luZ1R4SWQpXG4gICAgICAgIDogXCJcIixcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50V2l0aGRyYXdhbFJlY2VpdmVkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ29udHJhY3QgPSBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VDaGFpbklkID0gbWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICBtZXNzYWdlLm91dGdvaW5nVHhJZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm91dGdvaW5nVHhJZCA9IG1lc3NhZ2Uub3V0Z29pbmdUeElkKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50V2l0aGRyYXdhbFJlY2VpdmVkPlxuICApOiBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCgpO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSBvYmplY3QuYnJpZGdlQ29udHJhY3QgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgPSBvYmplY3QuYnJpZGdlQ2hhaW5JZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uub3V0Z29pbmdUeElkID0gb2JqZWN0Lm91dGdvaW5nVHhJZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3Q2FuY2VsZWQoKTogRXZlbnRXaXRoZHJhd0NhbmNlbGVkIHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kZXI6IFwiXCIsXG4gICAgdHhJZDogXCJcIixcbiAgICBicmlkZ2VDb250cmFjdDogXCJcIixcbiAgICBicmlkZ2VDaGFpbklkOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRXaXRoZHJhd0NhbmNlbGVkID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRXaXRoZHJhd0NhbmNlbGVkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5zZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR4SWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLnR4SWQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDb250cmFjdCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50V2l0aGRyYXdDYW5jZWxlZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50V2l0aGRyYXdDYW5jZWxlZCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnR4SWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50V2l0aGRyYXdDYW5jZWxlZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbmRlcjogaXNTZXQob2JqZWN0LnNlbmRlcikgPyBTdHJpbmcob2JqZWN0LnNlbmRlcikgOiBcIlwiLFxuICAgICAgdHhJZDogaXNTZXQob2JqZWN0LnR4SWQpID8gU3RyaW5nKG9iamVjdC50eElkKSA6IFwiXCIsXG4gICAgICBicmlkZ2VDb250cmFjdDogaXNTZXQob2JqZWN0LmJyaWRnZUNvbnRyYWN0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgIDogXCJcIixcbiAgICAgIGJyaWRnZUNoYWluSWQ6IGlzU2V0KG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ2hhaW5JZClcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50V2l0aGRyYXdDYW5jZWxlZCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICBtZXNzYWdlLnR4SWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLnR4SWQgPSBtZXNzYWdlLnR4SWQpO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VDb250cmFjdCA9IG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QpO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJyaWRnZUNoYWluSWQgPSBtZXNzYWdlLmJyaWRnZUNoYWluSWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEV2ZW50V2l0aGRyYXdDYW5jZWxlZD4pOiBFdmVudFdpdGhkcmF3Q2FuY2VsZWQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRXaXRoZHJhd0NhbmNlbGVkKCk7XG4gICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyID8/IFwiXCI7XG4gICAgbWVzc2FnZS50eElkID0gb2JqZWN0LnR4SWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ID0gb2JqZWN0LmJyaWRnZUNvbnRyYWN0ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkID0gb2JqZWN0LmJyaWRnZUNoYWluSWQgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQmluYXJ5UmVhZGVyIiwiQmluYXJ5V3JpdGVyIiwiTG9uZyIsImlzU2V0IiwicHJvdG9idWZQYWNrYWdlIiwiY3JlYXRlQmFzZUlEU2V0IiwiaWRzIiwiSURTZXQiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwiZm9yayIsInYiLCJ1aW50NjQiLCJsZGVsaW0iLCJkZWNvZGUiLCJpbnB1dCIsImxlbmd0aCIsInJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsImVuZDIiLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImUiLCJmcm9tVmFsdWUiLCJ0b0pTT04iLCJvYmoiLCJCaWdJbnQiLCJ0b1N0cmluZyIsImZyb21QYXJ0aWFsIiwiY3JlYXRlQmFzZUJhdGNoRmVlcyIsInRva2VuIiwidG90YWxGZWVzIiwidHhDb3VudCIsIkJhdGNoRmVlcyIsInN0cmluZyIsIlN0cmluZyIsImNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCIsImJyaWRnZUNvbnRyYWN0IiwiYnJpZGdlQ2hhaW5JZCIsIm91dGdvaW5nVHhJZCIsIm5vbmNlIiwiRXZlbnRXaXRoZHJhd2FsUmVjZWl2ZWQiLCJjcmVhdGVCYXNlRXZlbnRXaXRoZHJhd0NhbmNlbGVkIiwic2VuZGVyIiwidHhJZCIsIkV2ZW50V2l0aGRyYXdDYW5jZWxlZCJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLEdBQ2xCLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUNqRSxTQUFTQyxJQUFJLEVBQUVDLEtBQUssUUFBUSxZQUFZO0FBQ3hDLE9BQU8sTUFBTUMsa0JBQWtCLGFBQWE7QUF5QjVDLFNBQVNDO0lBQ1AsT0FBTztRQUNMQyxLQUFLLEVBQUU7SUFDVDtBQUNGO0FBRUEsT0FBTyxNQUFNQyxRQUFRO0lBQ25CQyxRQUNFQyxPQUFjLEVBQ2RDLFNBQXVCVCxhQUFhVSxNQUFNLEVBQUU7UUFFNUNELE9BQU9FLE1BQU0sQ0FBQyxJQUFJQyxJQUFJO1FBRXRC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
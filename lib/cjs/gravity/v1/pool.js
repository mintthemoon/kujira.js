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
    BatchFees: function() {
        return BatchFees;
    },
    EventWithdrawCanceled: function() {
        return EventWithdrawCanceled;
    },
    EventWithdrawalReceived: function() {
        return EventWithdrawalReceived;
    },
    IDSet: function() {
        return IDSet;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _helpers = require("./helpers");
const protobufPackage = "gravity.v1";
function createBaseIDSet() {
    return {
        ids: []
    };
}
const IDSet = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids){
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
            ids: Array.isArray(object === null || object === void 0 ? void 0 : object.ids) ? object.ids.map((e)=>_helpers.Long.fromValue(e)) : []
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
const BatchFees = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
            token: (0, _helpers.isSet)(object.token) ? String(object.token) : "",
            totalFees: (0, _helpers.isSet)(object.totalFees) ? String(object.totalFees) : "",
            txCount: (0, _helpers.isSet)(object.txCount) ? BigInt(object.txCount) : BigInt(0)
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
const EventWithdrawalReceived = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
            bridgeContract: (0, _helpers.isSet)(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: (0, _helpers.isSet)(object.bridgeChainId) ? String(object.bridgeChainId) : "",
            outgoingTxId: (0, _helpers.isSet)(object.outgoingTxId) ? String(object.outgoingTxId) : "",
            nonce: (0, _helpers.isSet)(object.nonce) ? String(object.nonce) : ""
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
const EventWithdrawCanceled = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
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
            sender: (0, _helpers.isSet)(object.sender) ? String(object.sender) : "",
            txId: (0, _helpers.isSet)(object.txId) ? String(object.txId) : "",
            bridgeContract: (0, _helpers.isSet)(object.bridgeContract) ? String(object.bridgeContract) : "",
            bridgeChainId: (0, _helpers.isSet)(object.bridgeChainId) ? String(object.bridgeChainId) : ""
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmF2aXR5L3YxL3Bvb2wudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IExvbmcsIGlzU2V0IH0gZnJvbSBcIi4vaGVscGVyc1wiO1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwiZ3Jhdml0eS52MVwiO1xuLyoqIElEU2V0IHJlcHJlc2VudHMgYSBzZXQgb2YgSURzICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSURTZXQge1xuICAvKiogSURTZXQgcmVwcmVzZW50cyBhIHNldCBvZiBJRHMgKi9cbiAgaWRzOiBiaWdpbnRbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmF0Y2hGZWVzIHtcbiAgdG9rZW46IHN0cmluZztcbiAgdG90YWxGZWVzOiBzdHJpbmc7XG4gIHR4Q291bnQ6IGJpZ2ludDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRXaXRoZHJhd2FsUmVjZWl2ZWQge1xuICBicmlkZ2VDb250cmFjdDogc3RyaW5nO1xuICBicmlkZ2VDaGFpbklkOiBzdHJpbmc7XG4gIG91dGdvaW5nVHhJZDogc3RyaW5nO1xuICBub25jZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudFdpdGhkcmF3Q2FuY2VsZWQge1xuICBzZW5kZXI6IHN0cmluZztcbiAgdHhJZDogc3RyaW5nO1xuICBicmlkZ2VDb250cmFjdDogc3RyaW5nO1xuICBicmlkZ2VDaGFpbklkOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VJRFNldCgpOiBJRFNldCB7XG4gIHJldHVybiB7XG4gICAgaWRzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IElEU2V0ID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogSURTZXQsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICB3cml0ZXIudWludDMyKDEwKS5mb3JrKCk7XG5cbiAgICBmb3IgKGNvbnN0IHYgb2YgbWVzc2FnZS5pZHMpIHtcbiAgICAgIHdyaXRlci51aW50NjQodik7XG4gICAgfVxuXG4gICAgd3JpdGVyLmxkZWxpbSgpO1xuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBJRFNldCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUlEU2V0KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKCh0YWcgJiA3KSA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgZW5kMiA9IHJlYWRlci51aW50MzIoKSArIHJlYWRlci5wb3M7XG5cbiAgICAgICAgICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kMikge1xuICAgICAgICAgICAgICBtZXNzYWdlLmlkcy5wdXNoKHJlYWRlci51aW50NjQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UuaWRzLnB1c2gocmVhZGVyLnVpbnQ2NCgpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IElEU2V0IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWRzOiBBcnJheS5pc0FycmF5KG9iamVjdD8uaWRzKVxuICAgICAgICA/IG9iamVjdC5pZHMubWFwKChlOiBhbnkpID0+IExvbmcuZnJvbVZhbHVlKGUpKVxuICAgICAgICA6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IElEU2V0KTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcblxuICAgIGlmIChtZXNzYWdlLmlkcykge1xuICAgICAgb2JqLmlkcyA9IG1lc3NhZ2UuaWRzLm1hcCgoZSkgPT4gKGUgfHwgQmlnSW50KDApKS50b1N0cmluZygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmlkcyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPElEU2V0Pik6IElEU2V0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUlEU2V0KCk7XG4gICAgbWVzc2FnZS5pZHMgPSBvYmplY3QuaWRzPy5tYXAoKGUpID0+IEJpZ0ludChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVCYXNlQmF0Y2hGZWVzKCk6IEJhdGNoRmVlcyB7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IFwiXCIsXG4gICAgdG90YWxGZWVzOiBcIlwiLFxuICAgIHR4Q291bnQ6IEJpZ0ludCgwKSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEJhdGNoRmVlcyA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEJhdGNoRmVlcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnRva2VuICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS50b2tlbik7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UudG90YWxGZWVzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS50b3RhbEZlZXMpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR4Q291bnQgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNCkudWludDY0KG1lc3NhZ2UudHhDb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IEJhdGNoRmVlcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUJhdGNoRmVlcygpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudG9rZW4gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UudG90YWxGZWVzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLnR4Q291bnQgPSByZWFkZXIudWludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBCYXRjaEZlZXMge1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbjogaXNTZXQob2JqZWN0LnRva2VuKSA/IFN0cmluZyhvYmplY3QudG9rZW4pIDogXCJcIixcbiAgICAgIHRvdGFsRmVlczogaXNTZXQob2JqZWN0LnRvdGFsRmVlcykgPyBTdHJpbmcob2JqZWN0LnRvdGFsRmVlcykgOiBcIlwiLFxuICAgICAgdHhDb3VudDogaXNTZXQob2JqZWN0LnR4Q291bnQpID8gQmlnSW50KG9iamVjdC50eENvdW50KSA6IEJpZ0ludCgwKSxcbiAgICB9O1xuICB9LFxuXG4gIHRvSlNPTihtZXNzYWdlOiBCYXRjaEZlZXMpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UudG9rZW4gIT09IHVuZGVmaW5lZCAmJiAob2JqLnRva2VuID0gbWVzc2FnZS50b2tlbik7XG4gICAgbWVzc2FnZS50b3RhbEZlZXMgIT09IHVuZGVmaW5lZCAmJiAob2JqLnRvdGFsRmVlcyA9IG1lc3NhZ2UudG90YWxGZWVzKTtcbiAgICBtZXNzYWdlLnR4Q291bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai50eENvdW50ID0gKG1lc3NhZ2UudHhDb3VudCB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEJhdGNoRmVlcz4pOiBCYXRjaEZlZXMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlQmF0Y2hGZWVzKCk7XG4gICAgbWVzc2FnZS50b2tlbiA9IG9iamVjdC50b2tlbiA/PyBcIlwiO1xuICAgIG1lc3NhZ2UudG90YWxGZWVzID0gb2JqZWN0LnRvdGFsRmVlcyA/PyBcIlwiO1xuICAgIG1lc3NhZ2UudHhDb3VudCA9XG4gICAgICBvYmplY3QudHhDb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC50eENvdW50ICE9PSBudWxsXG4gICAgICAgID8gQmlnSW50KG9iamVjdC50eENvdW50KVxuICAgICAgICA6IEJpZ0ludCgwKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCgpOiBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCB7XG4gIHJldHVybiB7XG4gICAgYnJpZGdlQ29udHJhY3Q6IFwiXCIsXG4gICAgYnJpZGdlQ2hhaW5JZDogXCJcIixcbiAgICBvdXRnb2luZ1R4SWQ6IFwiXCIsXG4gICAgbm9uY2U6IFwiXCIsXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IEV2ZW50V2l0aGRyYXdhbFJlY2VpdmVkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5icmlkZ2VDaGFpbklkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5vdXRnb2luZ1R4SWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLm91dGdvaW5nVHhJZCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2Uubm9uY2UgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLm5vbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRXZlbnRXaXRoZHJhd2FsUmVjZWl2ZWQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5vdXRnb2luZ1R4SWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2Uubm9uY2UgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJyaWRnZUNvbnRyYWN0OiBpc1NldChvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDb250cmFjdClcbiAgICAgICAgOiBcIlwiLFxuICAgICAgYnJpZGdlQ2hhaW5JZDogaXNTZXQob2JqZWN0LmJyaWRnZUNoYWluSWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA6IFwiXCIsXG4gICAgICBvdXRnb2luZ1R4SWQ6IGlzU2V0KG9iamVjdC5vdXRnb2luZ1R4SWQpXG4gICAgICAgID8gU3RyaW5nKG9iamVjdC5vdXRnb2luZ1R4SWQpXG4gICAgICAgIDogXCJcIixcbiAgICAgIG5vbmNlOiBpc1NldChvYmplY3Qubm9uY2UpID8gU3RyaW5nKG9iamVjdC5ub25jZSkgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50V2l0aGRyYXdhbFJlY2VpdmVkKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouYnJpZGdlQ29udHJhY3QgPSBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0KTtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VDaGFpbklkID0gbWVzc2FnZS5icmlkZ2VDaGFpbklkKTtcbiAgICBtZXNzYWdlLm91dGdvaW5nVHhJZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLm91dGdvaW5nVHhJZCA9IG1lc3NhZ2Uub3V0Z29pbmdUeElkKTtcbiAgICBtZXNzYWdlLm5vbmNlICE9PSB1bmRlZmluZWQgJiYgKG9iai5ub25jZSA9IG1lc3NhZ2Uubm9uY2UpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwoXG4gICAgb2JqZWN0OiBQYXJ0aWFsPEV2ZW50V2l0aGRyYXdhbFJlY2VpdmVkPlxuICApOiBFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3YWxSZWNlaXZlZCgpO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSBvYmplY3QuYnJpZGdlQ29udHJhY3QgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmJyaWRnZUNoYWluSWQgPSBvYmplY3QuYnJpZGdlQ2hhaW5JZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uub3V0Z29pbmdUeElkID0gb2JqZWN0Lm91dGdvaW5nVHhJZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2Uubm9uY2UgPSBvYmplY3Qubm9uY2UgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFdmVudFdpdGhkcmF3Q2FuY2VsZWQoKTogRXZlbnRXaXRoZHJhd0NhbmNlbGVkIHtcbiAgcmV0dXJuIHtcbiAgICBzZW5kZXI6IFwiXCIsXG4gICAgdHhJZDogXCJcIixcbiAgICBicmlkZ2VDb250cmFjdDogXCJcIixcbiAgICBicmlkZ2VDaGFpbklkOiBcIlwiLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgRXZlbnRXaXRoZHJhd0NhbmNlbGVkID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRXZlbnRXaXRoZHJhd0NhbmNlbGVkLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2Uuc2VuZGVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5zZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLnR4SWQgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLnR4SWQpO1xuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5icmlkZ2VDb250cmFjdCk7XG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigzNCkuc3RyaW5nKG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IEV2ZW50V2l0aGRyYXdDYW5jZWxlZCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZUV2ZW50V2l0aGRyYXdDYW5jZWxlZCgpO1xuXG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcblxuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uuc2VuZGVyID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnR4SWQgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IEV2ZW50V2l0aGRyYXdDYW5jZWxlZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbmRlcjogaXNTZXQob2JqZWN0LnNlbmRlcikgPyBTdHJpbmcob2JqZWN0LnNlbmRlcikgOiBcIlwiLFxuICAgICAgdHhJZDogaXNTZXQob2JqZWN0LnR4SWQpID8gU3RyaW5nKG9iamVjdC50eElkKSA6IFwiXCIsXG4gICAgICBicmlkZ2VDb250cmFjdDogaXNTZXQob2JqZWN0LmJyaWRnZUNvbnRyYWN0KVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ29udHJhY3QpXG4gICAgICAgIDogXCJcIixcbiAgICAgIGJyaWRnZUNoYWluSWQ6IGlzU2V0KG9iamVjdC5icmlkZ2VDaGFpbklkKVxuICAgICAgICA/IFN0cmluZyhvYmplY3QuYnJpZGdlQ2hhaW5JZClcbiAgICAgICAgOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IEV2ZW50V2l0aGRyYXdDYW5jZWxlZCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5zZW5kZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLnNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyKTtcbiAgICBtZXNzYWdlLnR4SWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLnR4SWQgPSBtZXNzYWdlLnR4SWQpO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5icmlkZ2VDb250cmFjdCA9IG1lc3NhZ2UuYnJpZGdlQ29udHJhY3QpO1xuICAgIG1lc3NhZ2UuYnJpZGdlQ2hhaW5JZCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLmJyaWRnZUNoYWluSWQgPSBtZXNzYWdlLmJyaWRnZUNoYWluSWQpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG5cbiAgZnJvbVBhcnRpYWwob2JqZWN0OiBQYXJ0aWFsPEV2ZW50V2l0aGRyYXdDYW5jZWxlZD4pOiBFdmVudFdpdGhkcmF3Q2FuY2VsZWQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlRXZlbnRXaXRoZHJhd0NhbmNlbGVkKCk7XG4gICAgbWVzc2FnZS5zZW5kZXIgPSBvYmplY3Quc2VuZGVyID8/IFwiXCI7XG4gICAgbWVzc2FnZS50eElkID0gb2JqZWN0LnR4SWQgPz8gXCJcIjtcbiAgICBtZXNzYWdlLmJyaWRnZUNvbnRyYWN0ID0gb2JqZWN0LmJyaWRnZUNvbnRyYWN0ID8/IFwiXCI7XG4gICAgbWVzc2FnZS5icmlkZ2VDaGFpbklkID0gb2JqZWN0LmJyaWRnZUNoYWluSWQgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQmF0Y2hGZWVzIiwiRXZlbnRXaXRoZHJhd0NhbmNlbGVkIiwiRXZlbnRXaXRoZHJhd2FsUmVjZWl2ZWQiLCJJRFNldCIsInByb3RvYnVmUGFja2FnZSIsImNyZWF0ZUJhc2VJRFNldCIsImlkcyIsImVuY29kZSIsIm1lc3NhZ2UiLCJ3cml0ZXIiLCJCaW5hcnlXcml0ZXIiLCJjcmVhdGUiLCJ1aW50MzIiLCJmb3JrIiwidiIsInVpbnQ2NCIsImxkZWxpbSIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwiZW5kMiIsInB1c2giLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZSIsIkxvbmciLCJmcm9tVmFsdWUiLCJ0b0pTT04iLCJvYmoiLCJCaWdJbnQiLCJ0b1N0cmluZyIsImZyb21QYXJ0aWFsIiwiY3JlYXRlQmFzZUJhdGNoRmVlcyIsInRva2VuIiwidG90YWxGZWVzIiwidHhDb3VudCIsInN0cmluZyIsImlzU2V0IiwiU3RyaW5nIiwiY3JlYXRlQmFzZUV2ZW50V2l0aGRyYXdhbFJlY2VpdmVkIiwiYnJpZGdlQ29udHJhY3QiLCJicmlkZ2VDaGFpbklkIiwib3V0Z29pbmdUeElkIiwibm9uY2UiLCJjcmVhdGVCYXNlRXZlbnRXaXRoZHJhd0NhbmNlbGVkIiwic2VuZGVyIiwidHhJZCJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQW9ITEEsU0FBUztlQUFUQTs7SUF1TUFDLHFCQUFxQjtlQUFyQkE7O0lBOUdBQyx1QkFBdUI7ZUFBdkJBOztJQTNLQUMsS0FBSztlQUFMQTs7SUEvQkFDLGVBQWU7ZUFBZkE7Ozt3QkFGOEI7eUJBQ2Y7QUFDckIsTUFBTUEsa0JBQWtCO0FBeUIvQixTQUFTQztJQUNQLE9BQU87UUFDTEMsS0FBSyxFQUFFO0lBQ1Q7QUFDRjtBQUVPLE1BQU1ILFFBQVE7SUFDbkJJLFFBQ0VDLE9BQWMsRUFDZEMsU0FBdUJDLG9CQUFZLENBQUNDLE1BQU0sRUFBRTtR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
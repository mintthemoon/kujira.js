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
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { isSet } from "cosmjs-types/helpers";
/* eslint-disable */ export const protobufPackage = "batch";
function createBaseMsgWithdrawAllDelegatorRewards() {
    return {
        delegatorAddress: ""
    };
}
export const MsgWithdrawAllDelegatorRewards = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewards",
    encode (message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllDelegatorRewards();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const obj = createBaseMsgWithdrawAllDelegatorRewards();
        if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseMsgWithdrawAllDelegatorRewards();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        return message;
    }
};
function createBaseMsgWithdrawAllDelegatorRewardsResponse() {
    return {
        amount: []
    };
}
export const MsgWithdrawAllDelegatorRewardsResponse = {
    typeUrl: "/batch.MsgWithdrawAllDelegatorRewardsResponse",
    encode (message, writer = BinaryWriter.create()) {
        for (const v of message.amount){
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const obj = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        if (Array.isArray(object === null || object === void 0 ? void 0 : object.amount)) obj.amount = object.amount.map((e)=>Coin.fromJSON(e));
        return obj;
    },
    toJSON (message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e)=>e ? Coin.toJSON(e) : undefined);
        } else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_amount;
        const message = createBaseMsgWithdrawAllDelegatorRewardsResponse();
        message.amount = ((_object_amount = object.amount) === null || _object_amount === void 0 ? void 0 : _object_amount.map((e)=>Coin.fromPartial(e))) || [];
        return message;
    }
};
function createBaseMsgBatchResetDelegation() {
    return {
        delegatorAddress: "",
        validators: [],
        amounts: []
    };
}
export const MsgBatchResetDelegation = {
    typeUrl: "/batch.MsgBatchResetDelegation",
    encode (message, writer = BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        for (const v of message.validators){
            writer.uint32(18).string(v);
        }
        for (const v of message.amounts){
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchResetDelegation();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validators.push(reader.string());
                    break;
                case 3:
                    message.amounts.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const obj = createBaseMsgBatchResetDelegation();
        if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
        if (Array.isArray(object === null || object === void 0 ? void 0 : object.validators)) obj.validators = object.validators.map((e)=>String(e));
        if (Array.isArray(object === null || object === void 0 ? void 0 : object.amounts)) obj.amounts = object.amounts.map((e)=>String(e));
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        if (message.validators) {
            obj.validators = message.validators.map((e)=>e);
        } else {
            obj.validators = [];
        }
        if (message.amounts) {
            obj.amounts = message.amounts.map((e)=>e);
        } else {
            obj.amounts = [];
        }
        return obj;
    },
    fromPartial (object) {
        var _object_validators, _object_amounts;
        const message = createBaseMsgBatchResetDelegation();
        var _object_delegatorAddress;
        message.delegatorAddress = (_object_delegatorAddress = object.delegatorAddress) !== null && _object_delegatorAddress !== void 0 ? _object_delegatorAddress : "";
        message.validators = ((_object_validators = object.validators) === null || _object_validators === void 0 ? void 0 : _object_validators.map((e)=>e)) || [];
        message.amounts = ((_object_amounts = object.amounts) === null || _object_amounts === void 0 ? void 0 : _object_amounts.map((e)=>e)) || [];
        return message;
    }
};
function createBaseMsgBatchResetDelegationResponse() {
    return {};
}
export const MsgBatchResetDelegationResponse = {
    typeUrl: "/batch.MsgBatchResetDelegationResponse",
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchResetDelegationResponse();
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
        const obj = createBaseMsgBatchResetDelegationResponse();
        return obj;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = createBaseMsgBatchResetDelegationResponse();
        return message;
    }
};
export class MsgClientImpl {
    WithdrawAllDelegatorRewards(request) {
        const data = MsgWithdrawAllDelegatorRewards.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "WithdrawAllDelegatorRewards", data);
        return promise.then((data)=>MsgWithdrawAllDelegatorRewardsResponse.decode(new BinaryReader(data)));
    }
    BatchResetDelegation(request) {
        const data = MsgBatchResetDelegation.encode(request).finish();
        const promise = this.rpc.request("batch.Msg", "BatchResetDelegation", data);
        return promise.then((data)=>MsgBatchResetDelegationResponse.decode(new BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
        this.WithdrawAllDelegatorRewards = this.WithdrawAllDelegatorRewards.bind(this);
        this.BatchResetDelegation = this.BatchResetDelegation.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9iYXRjaC90eXBlcy90eC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUGFydGlhbCwgRXhhY3QgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYmFzZS92MWJldGExL2NvaW5cIjtcbmltcG9ydCB7IFJwYywgaXNTZXQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2hlbHBlcnNcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImJhdGNoXCI7XG4vKipcbiAqIE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyByZXByZXNlbnRzIGRlbGVnYXRpb24gd2l0aGRyYXdhbCB0byBhIGRlbGVnYXRvclxuICogZnJvbSBhbGwgc3Rha2VkIHZhbGlkYXRvcnMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzIHtcbiAgZGVsZWdhdG9yQWRkcmVzczogc3RyaW5nO1xufVxuLyoqIE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1Jlc3BvbnNlIGRlZmluZXMgdGhlIE1zZy9XaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHMgcmVzcG9uc2UgdHlwZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2Uge1xuICBhbW91bnQ6IENvaW5bXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnQmF0Y2hSZXNldERlbGVnYXRpb24ge1xuICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmc7XG4gIHZhbGlkYXRvcnM6IHN0cmluZ1tdO1xuICBhbW91bnRzOiBzdHJpbmdbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXNnQmF0Y2hSZXNldERlbGVnYXRpb25SZXNwb25zZSB7fVxuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcygpOiBNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHMge1xuICByZXR1cm4ge1xuICAgIGRlbGVnYXRvckFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5leHBvcnQgY29uc3QgTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzID0ge1xuICB0eXBlVXJsOiBcIi9iYXRjaC5Nc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNcIixcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLmRlbGVnYXRvckFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmRlbGVnYXRvckFkZHJlc3MpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcygpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5kZWxlZ2F0b3JBZGRyZXNzID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzIHtcbiAgICBjb25zdCBvYmogPSBjcmVhdGVCYXNlTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzKCk7XG4gICAgaWYgKGlzU2V0KG9iamVjdC5kZWxlZ2F0b3JBZGRyZXNzKSlcbiAgICAgIG9iai5kZWxlZ2F0b3JBZGRyZXNzID0gU3RyaW5nKG9iamVjdC5kZWxlZ2F0b3JBZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICB0b0pTT04obWVzc2FnZTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLmRlbGVnYXRvckFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5kZWxlZ2F0b3JBZGRyZXNzID0gbWVzc2FnZS5kZWxlZ2F0b3JBZGRyZXNzKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8TXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzPiwgST4+KFxuICAgIG9iamVjdDogSVxuICApOiBNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzKCk7XG4gICAgbWVzc2FnZS5kZWxlZ2F0b3JBZGRyZXNzID0gb2JqZWN0LmRlbGVnYXRvckFkZHJlc3MgPz8gXCJcIjtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5mdW5jdGlvbiBjcmVhdGVCYXNlTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2UoKTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2Uge1xuICByZXR1cm4ge1xuICAgIGFtb3VudDogW10sXG4gIH07XG59XG5leHBvcnQgY29uc3QgTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2UgPSB7XG4gIHR5cGVVcmw6IFwiL2JhdGNoLk1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1Jlc3BvbnNlXCIsXG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNSZXNwb25zZSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmFtb3VudCkge1xuICAgICAgQ29pbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMTApLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2Uge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNSZXNwb25zZSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5hbW91bnQucHVzaChDb2luLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG9iaiA9IGNyZWF0ZUJhc2VNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNSZXNwb25zZSgpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdD8uYW1vdW50KSlcbiAgICAgIG9iai5hbW91bnQgPSBvYmplY3QuYW1vdW50Lm1hcCgoZTogYW55KSA9PiBDb2luLmZyb21KU09OKGUpKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICB0b0pTT04obWVzc2FnZTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIGlmIChtZXNzYWdlLmFtb3VudCkge1xuICAgICAgb2JqLmFtb3VudCA9IG1lc3NhZ2UuYW1vdW50Lm1hcCgoZSkgPT4gKGUgPyBDb2luLnRvSlNPTihlKSA6IHVuZGVmaW5lZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouYW1vdW50ID0gW107XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGZyb21QYXJ0aWFsPFxuICAgIEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNSZXNwb25zZT4sIEk+XG4gID4ob2JqZWN0OiBJKTogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2Uge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2UoKTtcbiAgICBtZXNzYWdlLmFtb3VudCA9IG9iamVjdC5hbW91bnQ/Lm1hcCgoZSkgPT4gQ29pbi5mcm9tUGFydGlhbChlKSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uKCk6IE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICBkZWxlZ2F0b3JBZGRyZXNzOiBcIlwiLFxuICAgIHZhbGlkYXRvcnM6IFtdLFxuICAgIGFtb3VudHM6IFtdLFxuICB9O1xufVxuZXhwb3J0IGNvbnN0IE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uID0ge1xuICB0eXBlVXJsOiBcIi9iYXRjaC5Nc2dCYXRjaFJlc2V0RGVsZWdhdGlvblwiLFxuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogTXNnQmF0Y2hSZXNldERlbGVnYXRpb24sXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5kZWxlZ2F0b3JBZGRyZXNzICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5kZWxlZ2F0b3JBZGRyZXNzKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UudmFsaWRhdG9ycykge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKHYhKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuYW1vdW50cykge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNikuc3RyaW5nKHYhKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvbiB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgQmluYXJ5UmVhZGVyID8gaW5wdXQgOiBuZXcgQmluYXJ5UmVhZGVyKGlucHV0KTtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZU1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uKCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmRlbGVnYXRvckFkZHJlc3MgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLnZhbGlkYXRvcnMucHVzaChyZWFkZXIuc3RyaW5nKCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5hbW91bnRzLnB1c2gocmVhZGVyLnN0cmluZygpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uIHtcbiAgICBjb25zdCBvYmogPSBjcmVhdGVCYXNlTXNnQmF0Y2hSZXNldERlbGVnYXRpb24oKTtcbiAgICBpZiAoaXNTZXQob2JqZWN0LmRlbGVnYXRvckFkZHJlc3MpKVxuICAgICAgb2JqLmRlbGVnYXRvckFkZHJlc3MgPSBTdHJpbmcob2JqZWN0LmRlbGVnYXRvckFkZHJlc3MpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdD8udmFsaWRhdG9ycykpXG4gICAgICBvYmoudmFsaWRhdG9ycyA9IG9iamVjdC52YWxpZGF0b3JzLm1hcCgoZTogYW55KSA9PiBTdHJpbmcoZSkpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdD8uYW1vdW50cykpXG4gICAgICBvYmouYW1vdW50cyA9IG9iamVjdC5hbW91bnRzLm1hcCgoZTogYW55KSA9PiBTdHJpbmcoZSkpO1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIHRvSlNPTihtZXNzYWdlOiBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvbik6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5kZWxlZ2F0b3JBZGRyZXNzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZGVsZWdhdG9yQWRkcmVzcyA9IG1lc3NhZ2UuZGVsZWdhdG9yQWRkcmVzcyk7XG4gICAgaWYgKG1lc3NhZ2UudmFsaWRhdG9ycykge1xuICAgICAgb2JqLnZhbGlkYXRvcnMgPSBtZXNzYWdlLnZhbGlkYXRvcnMubWFwKChlKSA9PiBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLnZhbGlkYXRvcnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50cykge1xuICAgICAgb2JqLmFtb3VudHMgPSBtZXNzYWdlLmFtb3VudHMubWFwKChlKSA9PiBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmFtb3VudHMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uPiwgST4+KFxuICAgIG9iamVjdDogSVxuICApOiBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvbiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dCYXRjaFJlc2V0RGVsZWdhdGlvbigpO1xuICAgIG1lc3NhZ2UuZGVsZWdhdG9yQWRkcmVzcyA9IG9iamVjdC5kZWxlZ2F0b3JBZGRyZXNzID8/IFwiXCI7XG4gICAgbWVzc2FnZS52YWxpZGF0b3JzID0gb2JqZWN0LnZhbGlkYXRvcnM/Lm1hcCgoZSkgPT4gZSkgfHwgW107XG4gICAgbWVzc2FnZS5hbW91bnRzID0gb2JqZWN0LmFtb3VudHM/Lm1hcCgoZSkgPT4gZSkgfHwgW107XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuZnVuY3Rpb24gY3JlYXRlQmFzZU1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uUmVzcG9uc2UoKTogTXNnQmF0Y2hSZXNldERlbGVnYXRpb25SZXNwb25zZSB7XG4gIHJldHVybiB7fTtcbn1cbmV4cG9ydCBjb25zdCBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlID0ge1xuICB0eXBlVXJsOiBcIi9iYXRjaC5Nc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlXCIsXG4gIGVuY29kZShcbiAgICBfOiBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlTXNnQmF0Y2hSZXNldERlbGVnYXRpb25SZXNwb25zZSgpO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG4gIGZyb21KU09OKF86IGFueSk6IE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uUmVzcG9uc2Uge1xuICAgIGNvbnN0IG9iaiA9IGNyZWF0ZUJhc2VNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgdG9KU09OKF86IE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uUmVzcG9uc2UpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIHJldHVybiBvYmo7XG4gIH0sXG4gIGZyb21QYXJ0aWFsPEkgZXh0ZW5kcyBFeGFjdDxEZWVwUGFydGlhbDxNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlPiwgST4+KFxuICAgIF86IElcbiAgKTogTXNnQmF0Y2hSZXNldERlbGVnYXRpb25SZXNwb25zZSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlKCk7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuLyoqIE1zZyBkZWZpbmVzIHRoZSBiYXRjaCBNc2cgc2VydmljZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTXNnIHtcbiAgLyoqXG4gICAqIFdpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyBkZWZpbmVzIGEgbWV0aG9kIHRvIHdpdGhkcmF3IHJld2FyZHMgb2YgZGVsZWdhdG9yXG4gICAqIGZyb20gYWxsIHN0YWtlZCB2YWxpZGF0b3JzLlxuICAgKi9cbiAgV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzKFxuICAgIHJlcXVlc3Q6IE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1xuICApOiBQcm9taXNlPE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1Jlc3BvbnNlPjtcbiAgLyoqXG4gICAqIEJhdGNoUmVzZXREZWxlZ2F0aW9uIGRlZmluZXMgYSBtZXRob2QgdG8gZGVsZWdhdGUgb3IgdW5kZWxlZ2F0ZSBpbiBiYXRjaGVzXG4gICAqIGZyb20gZXhpc3RpbmcgZGVsZWdhdGlvbiBhbmQgdGFyZ2V0IGRlbGVnYXRpb24gYW1vdW50XG4gICAqL1xuICBCYXRjaFJlc2V0RGVsZWdhdGlvbihcbiAgICByZXF1ZXN0OiBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblxuICApOiBQcm9taXNlPE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uUmVzcG9uc2U+O1xufVxuZXhwb3J0IGNsYXNzIE1zZ0NsaWVudEltcGwgaW1wbGVtZW50cyBNc2cge1xuICBwcml2YXRlIHJlYWRvbmx5IHJwYzogUnBjO1xuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICAgIHRoaXMuV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzID1cbiAgICAgIHRoaXMuV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5CYXRjaFJlc2V0RGVsZWdhdGlvbiA9IHRoaXMuQmF0Y2hSZXNldERlbGVnYXRpb24uYmluZCh0aGlzKTtcbiAgfVxuICBXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHMoXG4gICAgcmVxdWVzdDogTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzXG4gICk6IFByb21pc2U8TXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2U+IHtcbiAgICBjb25zdCBkYXRhID0gTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwiYmF0Y2guTXNnXCIsXG4gICAgICBcIldpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1wiLFxuICAgICAgZGF0YVxuICAgICk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YSkgPT5cbiAgICAgIE1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkc1Jlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cbiAgQmF0Y2hSZXNldERlbGVnYXRpb24oXG4gICAgcmVxdWVzdDogTXNnQmF0Y2hSZXNldERlbGVnYXRpb25cbiAgKTogUHJvbWlzZTxNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IE1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uLmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcImJhdGNoLk1zZ1wiLCBcIkJhdGNoUmVzZXREZWxlZ2F0aW9uXCIsIGRhdGEpO1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGEpID0+XG4gICAgICBNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJDb2luIiwiaXNTZXQiLCJwcm90b2J1ZlBhY2thZ2UiLCJjcmVhdGVCYXNlTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzIiwiZGVsZWdhdG9yQWRkcmVzcyIsIk1zZ1dpdGhkcmF3QWxsRGVsZWdhdG9yUmV3YXJkcyIsInR5cGVVcmwiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwic3RyaW5nIiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJlbmQiLCJ1bmRlZmluZWQiLCJsZW4iLCJwb3MiLCJ0YWciLCJza2lwVHlwZSIsImZyb21KU09OIiwib2JqZWN0Iiwib2JqIiwiU3RyaW5nIiwidG9KU09OIiwiZnJvbVBhcnRpYWwiLCJjcmVhdGVCYXNlTXNnV2l0aGRyYXdBbGxEZWxlZ2F0b3JSZXdhcmRzUmVzcG9uc2UiLCJhbW91bnQiLCJNc2dXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHNSZXNwb25zZSIsInYiLCJmb3JrIiwibGRlbGltIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImUiLCJjcmVhdGVCYXNlTXNnQmF0Y2hSZXNldERlbGVnYXRpb24iLCJ2YWxpZGF0b3JzIiwiYW1vdW50cyIsIk1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uIiwiY3JlYXRlQmFzZU1zZ0JhdGNoUmVzZXREZWxlZ2F0aW9uUmVzcG9uc2UiLCJNc2dCYXRjaFJlc2V0RGVsZWdhdGlvblJlc3BvbnNlIiwiXyIsIk1zZ0NsaWVudEltcGwiLCJXaXRoZHJhd0FsbERlbGVnYXRvclJld2FyZHMiLCJyZXF1ZXN0IiwiZGF0YSIsImZpbmlzaCIsInByb21pc2UiLCJycGMiLCJ0aGVuIiwiQmF0Y2hSZXNldERlbGVnYXRpb24iLCJjb25zdHJ1Y3RvciIsImJp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
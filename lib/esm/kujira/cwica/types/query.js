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
import { isSet } from "cosmjs-types/helpers";
/* eslint-disable */ export const protobufPackage = "kujira.cwica";
function createBaseQueryInterchainAccountRequest() {
    return {
        owner: "",
        connectionId: "",
        accountId: ""
    };
}
export const QueryInterchainAccountRequest = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountRequest",
    encode (message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.accountId !== "") {
            writer.uint32(26).string(message.accountId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountRequest();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.accountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const obj = createBaseQueryInterchainAccountRequest();
        if (isSet(object.owner)) obj.owner = String(object.owner);
        if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
        if (isSet(object.accountId)) obj.accountId = String(object.accountId);
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryInterchainAccountRequest();
        var _object_owner;
        message.owner = (_object_owner = object.owner) !== null && _object_owner !== void 0 ? _object_owner : "";
        var _object_connectionId;
        message.connectionId = (_object_connectionId = object.connectionId) !== null && _object_connectionId !== void 0 ? _object_connectionId : "";
        var _object_accountId;
        message.accountId = (_object_accountId = object.accountId) !== null && _object_accountId !== void 0 ? _object_accountId : "";
        return message;
    }
};
function createBaseQueryInterchainAccountResponse() {
    return {
        interchainAccountAddress: ""
    };
}
export const QueryInterchainAccountResponse = {
    typeUrl: "/kujira.cwica.QueryInterchainAccountResponse",
    encode (message, writer = BinaryWriter.create()) {
        if (message.interchainAccountAddress !== "") {
            writer.uint32(10).string(message.interchainAccountAddress);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountResponse();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.interchainAccountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const obj = createBaseQueryInterchainAccountResponse();
        if (isSet(object.interchainAccountAddress)) obj.interchainAccountAddress = String(object.interchainAccountAddress);
        return obj;
    },
    toJSON (message) {
        const obj = {};
        message.interchainAccountAddress !== undefined && (obj.interchainAccountAddress = message.interchainAccountAddress);
        return obj;
    },
    fromPartial (object) {
        const message = createBaseQueryInterchainAccountResponse();
        var _object_interchainAccountAddress;
        message.interchainAccountAddress = (_object_interchainAccountAddress = object.interchainAccountAddress) !== null && _object_interchainAccountAddress !== void 0 ? _object_interchainAccountAddress : "";
        return message;
    }
};
export class QueryClientImpl {
    InterchainAccount(request) {
        const data = QueryInterchainAccountRequest.encode(request).finish();
        const promise = this.rpc.request("kujira.cwica.Query", "InterchainAccount", data);
        return promise.then((data)=>QueryInterchainAccountResponse.decode(new BinaryReader(data)));
    }
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
        this.InterchainAccount = this.InterchainAccount.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvY3dpY2EvdHlwZXMvcXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVlcFBhcnRpYWwsIEV4YWN0IH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgUnBjLCBpc1NldCB9IGZyb20gXCJjb3NtanMtdHlwZXMvaGVscGVyc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IHByb3RvYnVmUGFja2FnZSA9IFwia3VqaXJhLmN3aWNhXCI7XG4vKiogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3QgaXMgdGhlIHJlcXVlc3QgdHlwZSBmb3IgdGhlIFF1ZXJ5L0ludGVyY2hhaW5BY2NvdW50QWRkcmVzcyBSUEMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3Qge1xuICBvd25lcjogc3RyaW5nO1xuICBjb25uZWN0aW9uSWQ6IHN0cmluZztcbiAgYWNjb3VudElkOiBzdHJpbmc7XG59XG4vKiogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlIHRoZSByZXNwb25zZSB0eXBlIGZvciB0aGUgUXVlcnkvSW50ZXJjaGFpbkFjY291bnRBZGRyZXNzIFJQQyAqL1xuZXhwb3J0IGludGVyZmFjZSBRdWVyeUludGVyY2hhaW5BY2NvdW50UmVzcG9uc2Uge1xuICBpbnRlcmNoYWluQWNjb3VudEFkZHJlc3M6IHN0cmluZztcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCgpOiBRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCB7XG4gIHJldHVybiB7XG4gICAgb3duZXI6IFwiXCIsXG4gICAgY29ubmVjdGlvbklkOiBcIlwiLFxuICAgIGFjY291bnRJZDogXCJcIixcbiAgfTtcbn1cbmV4cG9ydCBjb25zdCBRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCA9IHtcbiAgdHlwZVVybDogXCIva3VqaXJhLmN3aWNhLlF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0XCIsXG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLm93bmVyICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5vd25lcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmNvbm5lY3Rpb25JZCAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuY29ubmVjdGlvbklkKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYWNjb3VudElkICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI2KS5zdHJpbmcobWVzc2FnZS5hY2NvdW50SWQpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0IHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3QoKTtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2Uub3duZXIgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmNvbm5lY3Rpb25JZCA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuYWNjb3VudElkID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3Qge1xuICAgIGNvbnN0IG9iaiA9IGNyZWF0ZUJhc2VRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCgpO1xuICAgIGlmIChpc1NldChvYmplY3Qub3duZXIpKSBvYmoub3duZXIgPSBTdHJpbmcob2JqZWN0Lm93bmVyKTtcbiAgICBpZiAoaXNTZXQob2JqZWN0LmNvbm5lY3Rpb25JZCkpXG4gICAgICBvYmouY29ubmVjdGlvbklkID0gU3RyaW5nKG9iamVjdC5jb25uZWN0aW9uSWQpO1xuICAgIGlmIChpc1NldChvYmplY3QuYWNjb3VudElkKSkgb2JqLmFjY291bnRJZCA9IFN0cmluZyhvYmplY3QuYWNjb3VudElkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICB0b0pTT04obWVzc2FnZTogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3QpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2Uub3duZXIgIT09IHVuZGVmaW5lZCAmJiAob2JqLm93bmVyID0gbWVzc2FnZS5vd25lcik7XG4gICAgbWVzc2FnZS5jb25uZWN0aW9uSWQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5jb25uZWN0aW9uSWQgPSBtZXNzYWdlLmNvbm5lY3Rpb25JZCk7XG4gICAgbWVzc2FnZS5hY2NvdW50SWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmFjY291bnRJZCA9IG1lc3NhZ2UuYWNjb3VudElkKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICBmcm9tUGFydGlhbDxJIGV4dGVuZHMgRXhhY3Q8RGVlcFBhcnRpYWw8UXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3Q+LCBJPj4oXG4gICAgb2JqZWN0OiBJXG4gICk6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0IHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0KCk7XG4gICAgbWVzc2FnZS5vd25lciA9IG9iamVjdC5vd25lciA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuY29ubmVjdGlvbklkID0gb2JqZWN0LmNvbm5lY3Rpb25JZCA/PyBcIlwiO1xuICAgIG1lc3NhZ2UuYWNjb3VudElkID0gb2JqZWN0LmFjY291bnRJZCA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbmZ1bmN0aW9uIGNyZWF0ZUJhc2VRdWVyeUludGVyY2hhaW5BY2NvdW50UmVzcG9uc2UoKTogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBpbnRlcmNoYWluQWNjb3VudEFkZHJlc3M6IFwiXCIsXG4gIH07XG59XG5leHBvcnQgY29uc3QgUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlID0ge1xuICB0eXBlVXJsOiBcIi9rdWppcmEuY3dpY2EuUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlXCIsXG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBRdWVyeUludGVyY2hhaW5BY2NvdW50UmVzcG9uc2UsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5pbnRlcmNoYWluQWNjb3VudEFkZHJlc3MgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLmludGVyY2hhaW5BY2NvdW50QWRkcmVzcyk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBCaW5hcnlSZWFkZXIgPyBpbnB1dCA6IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpO1xuICAgIGxldCBlbmQgPSBsZW5ndGggPT09IHVuZGVmaW5lZCA/IHJlYWRlci5sZW4gOiByZWFkZXIucG9zICsgbGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlKCk7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLmludGVyY2hhaW5BY2NvdW50QWRkcmVzcyA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuICBmcm9tSlNPTihvYmplY3Q6IGFueSk6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXNwb25zZSB7XG4gICAgY29uc3Qgb2JqID0gY3JlYXRlQmFzZVF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXNwb25zZSgpO1xuICAgIGlmIChpc1NldChvYmplY3QuaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzKSlcbiAgICAgIG9iai5pbnRlcmNoYWluQWNjb3VudEFkZHJlc3MgPSBTdHJpbmcob2JqZWN0LmludGVyY2hhaW5BY2NvdW50QWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgdG9KU09OKG1lc3NhZ2U6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXNwb25zZSk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS5pbnRlcmNoYWluQWNjb3VudEFkZHJlc3MgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5pbnRlcmNoYWluQWNjb3VudEFkZHJlc3MgPSBtZXNzYWdlLmludGVyY2hhaW5BY2NvdW50QWRkcmVzcyk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcbiAgZnJvbVBhcnRpYWw8SSBleHRlbmRzIEV4YWN0PERlZXBQYXJ0aWFsPFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXNwb25zZT4sIEk+PihcbiAgICBvYmplY3Q6IElcbiAgKTogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlIHtcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlQmFzZVF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXNwb25zZSgpO1xuICAgIG1lc3NhZ2UuaW50ZXJjaGFpbkFjY291bnRBZGRyZXNzID0gb2JqZWN0LmludGVyY2hhaW5BY2NvdW50QWRkcmVzcyA/PyBcIlwiO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbi8qKiBRdWVyeSBkZWZpbmVzIHRoZSBnUlBDIHF1ZXJpZXIgc2VydmljZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnkge1xuICAvKiogUXVlcnlJbnRlcmNoYWluQWNjb3VudCByZXR1cm5zIHRoZSBpbnRlcmNoYWluIGFjY291bnQgZm9yIGdpdmVuIG93bmVyIGFkZHJlc3Mgb24gYSBnaXZlbiBjb25uZWN0aW9uIHBhaXIgKi9cbiAgSW50ZXJjaGFpbkFjY291bnQoXG4gICAgcmVxdWVzdDogUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3RcbiAgKTogUHJvbWlzZTxRdWVyeUludGVyY2hhaW5BY2NvdW50UmVzcG9uc2U+O1xufVxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q2xpZW50SW1wbCBpbXBsZW1lbnRzIFF1ZXJ5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBycGM6IFJwYztcbiAgY29uc3RydWN0b3IocnBjOiBScGMpIHtcbiAgICB0aGlzLnJwYyA9IHJwYztcbiAgICB0aGlzLkludGVyY2hhaW5BY2NvdW50ID0gdGhpcy5JbnRlcmNoYWluQWNjb3VudC5iaW5kKHRoaXMpO1xuICB9XG4gIEludGVyY2hhaW5BY2NvdW50KFxuICAgIHJlcXVlc3Q6IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0XG4gICk6IFByb21pc2U8UXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlPiB7XG4gICAgY29uc3QgZGF0YSA9IFF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXF1ZXN0LmVuY29kZShyZXF1ZXN0KS5maW5pc2goKTtcbiAgICBjb25zdCBwcm9taXNlID0gdGhpcy5ycGMucmVxdWVzdChcbiAgICAgIFwia3VqaXJhLmN3aWNhLlF1ZXJ5XCIsXG4gICAgICBcIkludGVyY2hhaW5BY2NvdW50XCIsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKChkYXRhKSA9PlxuICAgICAgUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlc3BvbnNlLmRlY29kZShuZXcgQmluYXJ5UmVhZGVyKGRhdGEpKVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJpc1NldCIsInByb3RvYnVmUGFja2FnZSIsImNyZWF0ZUJhc2VRdWVyeUludGVyY2hhaW5BY2NvdW50UmVxdWVzdCIsIm93bmVyIiwiY29ubmVjdGlvbklkIiwiYWNjb3VudElkIiwiUXVlcnlJbnRlcmNoYWluQWNjb3VudFJlcXVlc3QiLCJ0eXBlVXJsIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInN0cmluZyIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsIm9iaiIsIlN0cmluZyIsInRvSlNPTiIsImZyb21QYXJ0aWFsIiwiY3JlYXRlQmFzZVF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXNwb25zZSIsImludGVyY2hhaW5BY2NvdW50QWRkcmVzcyIsIlF1ZXJ5SW50ZXJjaGFpbkFjY291bnRSZXNwb25zZSIsIlF1ZXJ5Q2xpZW50SW1wbCIsIkludGVyY2hhaW5BY2NvdW50IiwicmVxdWVzdCIsImRhdGEiLCJmaW5pc2giLCJwcm9taXNlIiwicnBjIiwidGhlbiIsImNvbnN0cnVjdG9yIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUNqRSxTQUFjQyxLQUFLLFFBQVEsdUJBQXVCO0FBRWxELGtCQUFrQixHQUNsQixPQUFPLE1BQU1DLGtCQUFrQixlQUFlO0FBVzlDLFNBQVNDO0lBQ1AsT0FBTztRQUNMQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsV0FBVztJQUNiO0FBQ0Y7QUFDQSxPQUFPLE1BQU1DLGdDQUFnQztJQUMzQ0MsU0FBUztJQUNUQyxRQUNFQyxPQUFzQyxFQUN0Q0MsU0FBdUJYLGFBQWFZLE1BQU0sRUFBRTtRQUU1QyxJQUFJ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
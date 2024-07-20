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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { base64FromBytes, bytesFromBase64 } from "./hook";
export const protobufPackage = "kujira.scheduler";
const baseCreateHookProposal = {
    title: "",
    description: "",
    executor: "",
    contract: "",
    frequency: 0
};
export const CreateHookProposal = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.executor !== "") {
            writer.uint32(26).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        if (message.frequency !== 0) {
            writer.uint32(48).int64(message.frequency);
        }
        for (const v of message.funds){
            Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseCreateHookProposal);
        message.funds = [];
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
                    message.executor = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.frequency = reader.int32();
                    break;
                case 7:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseCreateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = "";
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = String(object.executor);
        } else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        } else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = bytesFromBase64(object.msg);
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = Number(object.frequency);
        } else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.executor !== undefined && (obj.executor = message.executor);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.frequency !== undefined && (obj.frequency = message.frequency);
        if (message.funds) {
            obj.funds = message.funds.map((e)=>e ? Coin.toJSON(e) : undefined);
        } else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseCreateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        } else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = "";
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = object.executor;
        } else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        } else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        } else {
            message.msg = new Uint8Array();
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = object.frequency;
        } else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(Coin.fromPartial(e));
            }
        }
        return message;
    }
};
const baseUpdateHookProposal = {
    title: "",
    description: "",
    id: 0,
    executor: "",
    contract: "",
    frequency: 0
};
export const UpdateHookProposal = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== 0) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.executor !== "") {
            writer.uint32(34).string(message.executor);
        }
        if (message.contract !== "") {
            writer.uint32(42).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        if (message.frequency !== 0) {
            writer.uint32(56).int64(message.frequency);
        }
        for (const v of message.funds){
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseUpdateHookProposal);
        message.funds = [];
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
                    message.id = reader.uint32();
                    break;
                case 4:
                    message.executor = reader.string();
                    break;
                case 5:
                    message.contract = reader.string();
                    break;
                case 6:
                    message.msg = reader.bytes();
                    break;
                case 7:
                    message.frequency = reader.int32();
                    break;
                case 8:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseUpdateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        } else {
            message.id = 0;
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = String(object.executor);
        } else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = String(object.contract);
        } else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = bytesFromBase64(object.msg);
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = Number(object.frequency);
        } else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        message.executor !== undefined && (obj.executor = message.executor);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined && (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.frequency !== undefined && (obj.frequency = message.frequency);
        if (message.funds) {
            obj.funds = message.funds.map((e)=>e ? Coin.toJSON(e) : undefined);
        } else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseUpdateHookProposal);
        message.funds = [];
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        } else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = 0;
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = object.executor;
        } else {
            message.executor = "";
        }
        if (object.contract !== undefined && object.contract !== null) {
            message.contract = object.contract;
        } else {
            message.contract = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        } else {
            message.msg = new Uint8Array();
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = object.frequency;
        } else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(Coin.fromPartial(e));
            }
        }
        return message;
    }
};
const baseDeleteHookProposal = {
    title: "",
    description: "",
    id: 0
};
export const DeleteHookProposal = {
    encode (message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== 0) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseDeleteHookProposal);
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
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseDeleteHookProposal);
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        } else {
            message.id = 0;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseDeleteHookProposal);
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        } else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = 0;
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL3Byb3Bvc2FsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQ29pbiB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2Jhc2UvdjFiZXRhMS9jb2luXCI7XG5pbXBvcnQgeyBiYXNlNjRGcm9tQnl0ZXMsIGJ5dGVzRnJvbUJhc2U2NCB9IGZyb20gXCIuL2hvb2tcIjtcbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImt1amlyYS5zY2hlZHVsZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVIb29rUHJvcG9zYWwge1xuICAvKiogVGl0bGUgaXMgYSBzaG9ydCBzdW1tYXJ5ICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKiBEZXNjcmlwdGlvbiBpcyBhIGh1bWFuIHJlYWRhYmxlIHRleHQgKi9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqIFRoZSBhY2NvdW50IHRoYXQgd2lsbCBleGVjdXRlIHRoZSBtc2cgb24gdGhlIHNjaGVkdWxlICovXG4gIGV4ZWN1dG9yOiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udHJhY3QgdGhhdCB0aGUgbXNnIGlzIGNhbGxlZCBvbiAqL1xuICBjb250cmFjdDogc3RyaW5nO1xuICBtc2c6IFVpbnQ4QXJyYXk7XG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xuICBmdW5kczogQ29pbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUhvb2tQcm9wb3NhbCB7XG4gIC8qKiBUaXRsZSBpcyBhIHNob3J0IHN1bW1hcnkgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqIERlc2NyaXB0aW9uIGlzIGEgaHVtYW4gcmVhZGFibGUgdGV4dCAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBleGVjdXRvcjogc3RyaW5nO1xuICBjb250cmFjdDogc3RyaW5nO1xuICBtc2c6IFVpbnQ4QXJyYXk7XG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xuICBmdW5kczogQ29pbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZUhvb2tQcm9wb3NhbCB7XG4gIC8qKiBUaXRsZSBpcyBhIHNob3J0IHN1bW1hcnkgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqIERlc2NyaXB0aW9uIGlzIGEgaHVtYW4gcmVhZGFibGUgdGV4dCAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xufVxuXG5jb25zdCBiYXNlQ3JlYXRlSG9va1Byb3Bvc2FsOiBvYmplY3QgPSB7XG4gIHRpdGxlOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgZXhlY3V0b3I6IFwiXCIsXG4gIGNvbnRyYWN0OiBcIlwiLFxuICBmcmVxdWVuY3k6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlSG9va1Byb3Bvc2FsID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogQ3JlYXRlSG9va1Byb3Bvc2FsLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudGl0bGUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnRpdGxlKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZXhlY3V0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmV4ZWN1dG9yKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuY29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLmNvbnRyYWN0KTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UubXNnLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMig0MikuYnl0ZXMobWVzc2FnZS5tc2cpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5mcmVxdWVuY3kgIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDgpLmludDY0KG1lc3NhZ2UuZnJlcXVlbmN5KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuZnVuZHMpIHtcbiAgICAgIENvaW4uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDU4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogQ3JlYXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUNyZWF0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIENyZWF0ZUhvb2tQcm9wb3NhbDtcbiAgICBtZXNzYWdlLmZ1bmRzID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnRpdGxlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuZXhlY3V0b3IgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLmNvbnRyYWN0ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5tc2cgPSByZWFkZXIuYnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gcmVhZGVyLmludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBtZXNzYWdlLmZ1bmRzLnB1c2goQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogQ3JlYXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUNyZWF0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIENyZWF0ZUhvb2tQcm9wb3NhbDtcbiAgICBtZXNzYWdlLmZ1bmRzID0gW107XG4gICAgaWYgKG9iamVjdC50aXRsZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC50aXRsZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS50aXRsZSA9IFN0cmluZyhvYmplY3QudGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IFN0cmluZyhvYmplY3QuZGVzY3JpcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGVjdXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGVjdXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IFN0cmluZyhvYmplY3QuZXhlY3V0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb250cmFjdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5jb250cmFjdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jb250cmFjdCA9IFN0cmluZyhvYmplY3QuY29udHJhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmNvbnRyYWN0ID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5tc2cgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubXNnICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm1zZyA9IGJ5dGVzRnJvbUJhc2U2NChvYmplY3QubXNnKTtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5mcmVxdWVuY3kgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZnJlcXVlbmN5ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IE51bWJlcihvYmplY3QuZnJlcXVlbmN5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZ1bmRzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZ1bmRzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmZ1bmRzKSB7XG4gICAgICAgIG1lc3NhZ2UuZnVuZHMucHVzaChDb2luLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IENyZWF0ZUhvb2tQcm9wb3NhbCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS50aXRsZSAhPT0gdW5kZWZpbmVkICYmIChvYmoudGl0bGUgPSBtZXNzYWdlLnRpdGxlKTtcbiAgICBtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZGVzY3JpcHRpb24gPSBtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICBtZXNzYWdlLmV4ZWN1dG9yICE9PSB1bmRlZmluZWQgJiYgKG9iai5leGVjdXRvciA9IG1lc3NhZ2UuZXhlY3V0b3IpO1xuICAgIG1lc3NhZ2UuY29udHJhY3QgIT09IHVuZGVmaW5lZCAmJiAob2JqLmNvbnRyYWN0ID0gbWVzc2FnZS5jb250cmFjdCk7XG4gICAgbWVzc2FnZS5tc2cgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5tc2cgPSBiYXNlNjRGcm9tQnl0ZXMoXG4gICAgICAgIG1lc3NhZ2UubXNnICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLm1zZyA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuICAgIG1lc3NhZ2UuZnJlcXVlbmN5ICE9PSB1bmRlZmluZWQgJiYgKG9iai5mcmVxdWVuY3kgPSBtZXNzYWdlLmZyZXF1ZW5jeSk7XG4gICAgaWYgKG1lc3NhZ2UuZnVuZHMpIHtcbiAgICAgIG9iai5mdW5kcyA9IG1lc3NhZ2UuZnVuZHMubWFwKChlKSA9PiAoZSA/IENvaW4udG9KU09OKGUpIDogdW5kZWZpbmVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mdW5kcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8Q3JlYXRlSG9va1Byb3Bvc2FsPik6IENyZWF0ZUhvb2tQcm9wb3NhbCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VDcmVhdGVIb29rUHJvcG9zYWwsXG4gICAgfSBhcyBDcmVhdGVIb29rUHJvcG9zYWw7XG4gICAgbWVzc2FnZS5mdW5kcyA9IFtdO1xuICAgIGlmIChvYmplY3QudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudGl0bGUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBvYmplY3QudGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGVjdXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGVjdXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IG9iamVjdC5leGVjdXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuY29udHJhY3QgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY29udHJhY3QgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBvYmplY3QuY29udHJhY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1zZyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5tc2cgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubXNnID0gb2JqZWN0Lm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5tc2cgPSBuZXcgVWludDhBcnJheSgpO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mcmVxdWVuY3kgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gb2JqZWN0LmZyZXF1ZW5jeTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZ1bmRzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZ1bmRzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmZ1bmRzKSB7XG4gICAgICAgIG1lc3NhZ2UuZnVuZHMucHVzaChDb2luLmZyb21QYXJ0aWFsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlVXBkYXRlSG9va1Byb3Bvc2FsOiBvYmplY3QgPSB7XG4gIHRpdGxlOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgaWQ6IDAsXG4gIGV4ZWN1dG9yOiBcIlwiLFxuICBjb250cmFjdDogXCJcIixcbiAgZnJlcXVlbmN5OiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IFVwZGF0ZUhvb2tQcm9wb3NhbCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFVwZGF0ZUhvb2tQcm9wb3NhbCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnRpdGxlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS50aXRsZSk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmlkICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI0KS51aW50NjQobWVzc2FnZS5pZCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmV4ZWN1dG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS5leGVjdXRvcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQyKS5zdHJpbmcobWVzc2FnZS5jb250cmFjdCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm1zZy5sZW5ndGggIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoNTApLmJ5dGVzKG1lc3NhZ2UubXNnKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZnJlcXVlbmN5ICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDU2KS5pbnQ2NChtZXNzYWdlLmZyZXF1ZW5jeSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmZ1bmRzKSB7XG4gICAgICBDb2luLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMig2NikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFVwZGF0ZUhvb2tQcm9wb3NhbCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VVcGRhdGVIb29rUHJvcG9zYWwsXG4gICAgfSBhcyBVcGRhdGVIb29rUHJvcG9zYWw7XG4gICAgbWVzc2FnZS5mdW5kcyA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS50aXRsZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmlkID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5leGVjdXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBtZXNzYWdlLm1zZyA9IHJlYWRlci5ieXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSByZWFkZXIuaW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIG1lc3NhZ2UuZnVuZHMucHVzaChDb2luLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBVcGRhdGVIb29rUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlVXBkYXRlSG9va1Byb3Bvc2FsLFxuICAgIH0gYXMgVXBkYXRlSG9va1Byb3Bvc2FsO1xuICAgIG1lc3NhZ2UuZnVuZHMgPSBbXTtcbiAgICBpZiAob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnRpdGxlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gU3RyaW5nKG9iamVjdC50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmlkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmlkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmlkID0gTnVtYmVyKG9iamVjdC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmV4ZWN1dG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4ZWN1dG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gU3RyaW5nKG9iamVjdC5leGVjdXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZXhlY3V0b3IgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNvbnRyYWN0ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmNvbnRyYWN0ID0gU3RyaW5nKG9iamVjdC5jb250cmFjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1zZyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5tc2cgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubXNnID0gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5tc2cpO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mcmVxdWVuY3kgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gTnVtYmVyKG9iamVjdC5mcmVxdWVuY3kpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IDA7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZnVuZHMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZnVuZHMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZnVuZHMpIHtcbiAgICAgICAgbWVzc2FnZS5mdW5kcy5wdXNoKENvaW4uZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogVXBkYXRlSG9va1Byb3Bvc2FsKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgKG9iai50aXRsZSA9IG1lc3NhZ2UudGl0bGUpO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gbWVzc2FnZS5pZCk7XG4gICAgbWVzc2FnZS5leGVjdXRvciAhPT0gdW5kZWZpbmVkICYmIChvYmouZXhlY3V0b3IgPSBtZXNzYWdlLmV4ZWN1dG9yKTtcbiAgICBtZXNzYWdlLmNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiYgKG9iai5jb250cmFjdCA9IG1lc3NhZ2UuY29udHJhY3QpO1xuICAgIG1lc3NhZ2UubXNnICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubXNnID0gYmFzZTY0RnJvbUJ5dGVzKFxuICAgICAgICBtZXNzYWdlLm1zZyAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS5tc2cgOiBuZXcgVWludDhBcnJheSgpXG4gICAgICApKTtcbiAgICBtZXNzYWdlLmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIChvYmouZnJlcXVlbmN5ID0gbWVzc2FnZS5mcmVxdWVuY3kpO1xuICAgIGlmIChtZXNzYWdlLmZ1bmRzKSB7XG4gICAgICBvYmouZnVuZHMgPSBtZXNzYWdlLmZ1bmRzLm1hcCgoZSkgPT4gKGUgPyBDb2luLnRvSlNPTihlKSA6IHVuZGVmaW5lZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouZnVuZHMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFVwZGF0ZUhvb2tQcm9wb3NhbD4pOiBVcGRhdGVIb29rUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlVXBkYXRlSG9va1Byb3Bvc2FsLFxuICAgIH0gYXMgVXBkYXRlSG9va1Byb3Bvc2FsO1xuICAgIG1lc3NhZ2UuZnVuZHMgPSBbXTtcbiAgICBpZiAob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnRpdGxlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gb2JqZWN0LnRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuaWQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaWQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSBvYmplY3QuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmV4ZWN1dG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4ZWN1dG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gb2JqZWN0LmV4ZWN1dG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb250cmFjdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5jb250cmFjdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jb250cmFjdCA9IG9iamVjdC5jb250cmFjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5jb250cmFjdCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QubXNnICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm1zZyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5tc2cgPSBvYmplY3QubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1zZyA9IG5ldyBVaW50OEFycmF5KCk7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZnJlcXVlbmN5ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZyZXF1ZW5jeSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSBvYmplY3QuZnJlcXVlbmN5O1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IDA7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZnVuZHMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZnVuZHMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZnVuZHMpIHtcbiAgICAgICAgbWVzc2FnZS5mdW5kcy5wdXNoKENvaW4uZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VEZWxldGVIb29rUHJvcG9zYWw6IG9iamVjdCA9IHtcbiAgdGl0bGU6IFwiXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlwiLFxuICBpZDogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWxldGVIb29rUHJvcG9zYWwgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBEZWxldGVIb29rUHJvcG9zYWwsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS50aXRsZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudGl0bGUpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5pZCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNCkudWludDY0KG1lc3NhZ2UuaWQpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRGVsZXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZURlbGV0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIERlbGV0ZUhvb2tQcm9wb3NhbDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudGl0bGUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5pZCA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRGVsZXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZURlbGV0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIERlbGV0ZUhvb2tQcm9wb3NhbDtcbiAgICBpZiAob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnRpdGxlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gU3RyaW5nKG9iamVjdC50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmlkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmlkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmlkID0gTnVtYmVyKG9iamVjdC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRGVsZXRlSG9va1Byb3Bvc2FsKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgKG9iai50aXRsZSA9IG1lc3NhZ2UudGl0bGUpO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gbWVzc2FnZS5pZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPERlbGV0ZUhvb2tQcm9wb3NhbD4pOiBEZWxldGVIb29rUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlRGVsZXRlSG9va1Byb3Bvc2FsLFxuICAgIH0gYXMgRGVsZXRlSG9va1Byb3Bvc2FsO1xuICAgIGlmIChvYmplY3QudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudGl0bGUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBvYmplY3QudGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5pZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5pZCA9IG9iamVjdC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5pZCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJCaW5hcnlSZWFkZXIiLCJCaW5hcnlXcml0ZXIiLCJDb2luIiwiYmFzZTY0RnJvbUJ5dGVzIiwiYnl0ZXNGcm9tQmFzZTY0IiwicHJvdG9idWZQYWNrYWdlIiwiYmFzZUNyZWF0ZUhvb2tQcm9wb3NhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJleGVjdXRvciIsImNvbnRyYWN0IiwiZnJlcXVlbmN5IiwiQ3JlYXRlSG9va1Byb3Bvc2FsIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInN0cmluZyIsIm1zZyIsImxlbmd0aCIsImJ5dGVzIiwiaW50NjQiLCJ2IiwiZnVuZHMiLCJmb3JrIiwibGRlbGltIiwiZGVjb2RlIiwiaW5wdXQiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwiaW50MzIiLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsIlN0cmluZyIsIk51bWJlciIsImUiLCJ0b0pTT04iLCJvYmoiLCJtYXAiLCJmcm9tUGFydGlhbCIsImJhc2VVcGRhdGVIb29rUHJvcG9zYWwiLCJpZCIsIlVwZGF0ZUhvb2tQcm9wb3NhbCIsInVpbnQ2NCIsImJhc2VEZWxldGVIb29rUHJvcG9zYWwiLCJEZWxldGVIb29rUHJvcG9zYWwiXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsQixTQUFTQSxZQUFZLEVBQUVDLFlBQVksUUFBUSxzQkFBc0I7QUFDakUsU0FBU0MsSUFBSSxRQUFRLHdDQUF3QztBQUM3RCxTQUFTQyxlQUFlLEVBQUVDLGVBQWUsUUFBUSxTQUFTO0FBQzFELE9BQU8sTUFBTUMsa0JBQWtCLG1CQUFtQjtBQXFDbEQsTUFBTUMseUJBQWlDO0lBQ3JDQyxPQUFPO0lBQ1BDLGFBQWE7SUFDYkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLFdBQVc7QUFDYjtBQUVBLE9BQU8sTUFBTUMscUJBQXFCO0lBQ2hDQyxRQUNFQyxPQUEyQixFQUMzQkMsU0FBdUJkLGFBQWFlLE1BQU0sRUFBRTtRQUU1QyxJQUFJRixRQUFRUCxLQUFLLEtBQUssSUFBSTtZQUN4QlEsT0FBT0UsTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0os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
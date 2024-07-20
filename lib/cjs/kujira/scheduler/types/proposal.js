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
    CreateHookProposal: function() {
        return CreateHookProposal;
    },
    DeleteHookProposal: function() {
        return DeleteHookProposal;
    },
    UpdateHookProposal: function() {
        return UpdateHookProposal;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
const _coin = require("cosmjs-types/cosmos/base/v1beta1/coin");
const _hook = require("./hook");
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
const protobufPackage = "kujira.scheduler";
const baseCreateHookProposal = {
    title: "",
    description: "",
    executor: "",
    contract: "",
    frequency: 0
};
const CreateHookProposal = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
            _coin.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
                    message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
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
            message.msg = (0, _hook.bytesFromBase64)(object.msg);
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = Number(object.frequency);
        } else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(_coin.Coin.fromJSON(e));
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
        message.msg !== undefined && (obj.msg = (0, _hook.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.frequency !== undefined && (obj.frequency = message.frequency);
        if (message.funds) {
            obj.funds = message.funds.map((e)=>e ? _coin.Coin.toJSON(e) : undefined);
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
                message.funds.push(_coin.Coin.fromPartial(e));
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
const UpdateHookProposal = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
            _coin.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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
                    message.funds.push(_coin.Coin.decode(reader, reader.uint32()));
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
            message.msg = (0, _hook.bytesFromBase64)(object.msg);
        }
        if (object.frequency !== undefined && object.frequency !== null) {
            message.frequency = Number(object.frequency);
        } else {
            message.frequency = 0;
        }
        if (object.funds !== undefined && object.funds !== null) {
            for (const e of object.funds){
                message.funds.push(_coin.Coin.fromJSON(e));
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
        message.msg !== undefined && (obj.msg = (0, _hook.base64FromBytes)(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.frequency !== undefined && (obj.frequency = message.frequency);
        if (message.funds) {
            obj.funds = message.funds.map((e)=>e ? _coin.Coin.toJSON(e) : undefined);
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
                message.funds.push(_coin.Coin.fromPartial(e));
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
const DeleteHookProposal = {
    encode (message, writer = _binary.BinaryWriter.create()) {
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
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL3Byb3Bvc2FsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuaW1wb3J0IHsgQ29pbiB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2Jhc2UvdjFiZXRhMS9jb2luXCI7XG5pbXBvcnQgeyBiYXNlNjRGcm9tQnl0ZXMsIGJ5dGVzRnJvbUJhc2U2NCB9IGZyb20gXCIuL2hvb2tcIjtcbmV4cG9ydCBjb25zdCBwcm90b2J1ZlBhY2thZ2UgPSBcImt1amlyYS5zY2hlZHVsZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVIb29rUHJvcG9zYWwge1xuICAvKiogVGl0bGUgaXMgYSBzaG9ydCBzdW1tYXJ5ICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKiBEZXNjcmlwdGlvbiBpcyBhIGh1bWFuIHJlYWRhYmxlIHRleHQgKi9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLyoqIFRoZSBhY2NvdW50IHRoYXQgd2lsbCBleGVjdXRlIHRoZSBtc2cgb24gdGhlIHNjaGVkdWxlICovXG4gIGV4ZWN1dG9yOiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udHJhY3QgdGhhdCB0aGUgbXNnIGlzIGNhbGxlZCBvbiAqL1xuICBjb250cmFjdDogc3RyaW5nO1xuICBtc2c6IFVpbnQ4QXJyYXk7XG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xuICBmdW5kczogQ29pbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZUhvb2tQcm9wb3NhbCB7XG4gIC8qKiBUaXRsZSBpcyBhIHNob3J0IHN1bW1hcnkgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqIERlc2NyaXB0aW9uIGlzIGEgaHVtYW4gcmVhZGFibGUgdGV4dCAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICBleGVjdXRvcjogc3RyaW5nO1xuICBjb250cmFjdDogc3RyaW5nO1xuICBtc2c6IFVpbnQ4QXJyYXk7XG4gIGZyZXF1ZW5jeTogbnVtYmVyO1xuICBmdW5kczogQ29pbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZUhvb2tQcm9wb3NhbCB7XG4gIC8qKiBUaXRsZSBpcyBhIHNob3J0IHN1bW1hcnkgKi9cbiAgdGl0bGU6IHN0cmluZztcbiAgLyoqIERlc2NyaXB0aW9uIGlzIGEgaHVtYW4gcmVhZGFibGUgdGV4dCAqL1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xufVxuXG5jb25zdCBiYXNlQ3JlYXRlSG9va1Byb3Bvc2FsOiBvYmplY3QgPSB7XG4gIHRpdGxlOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgZXhlY3V0b3I6IFwiXCIsXG4gIGNvbnRyYWN0OiBcIlwiLFxuICBmcmVxdWVuY3k6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlSG9va1Byb3Bvc2FsID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogQ3JlYXRlSG9va1Byb3Bvc2FsLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UudGl0bGUgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTApLnN0cmluZyhtZXNzYWdlLnRpdGxlKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMTgpLnN0cmluZyhtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZXhlY3V0b3IgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMjYpLnN0cmluZyhtZXNzYWdlLmV4ZWN1dG9yKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuY29udHJhY3QgIT09IFwiXCIpIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzQpLnN0cmluZyhtZXNzYWdlLmNvbnRyYWN0KTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UubXNnLmxlbmd0aCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMig0MikuYnl0ZXMobWVzc2FnZS5tc2cpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5mcmVxdWVuY3kgIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoNDgpLmludDY0KG1lc3NhZ2UuZnJlcXVlbmN5KTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UuZnVuZHMpIHtcbiAgICAgIENvaW4uZW5jb2RlKHYhLCB3cml0ZXIudWludDMyKDU4KS5mb3JrKCkpLmxkZWxpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogQ3JlYXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUNyZWF0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIENyZWF0ZUhvb2tQcm9wb3NhbDtcbiAgICBtZXNzYWdlLmZ1bmRzID0gW107XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLnRpdGxlID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG1lc3NhZ2UuZXhlY3V0b3IgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLmNvbnRyYWN0ID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgbWVzc2FnZS5tc2cgPSByZWFkZXIuYnl0ZXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gcmVhZGVyLmludDMyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNzpcbiAgICAgICAgICBtZXNzYWdlLmZ1bmRzLnB1c2goQ29pbi5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogQ3JlYXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZUNyZWF0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIENyZWF0ZUhvb2tQcm9wb3NhbDtcbiAgICBtZXNzYWdlLmZ1bmRzID0gW107XG4gICAgaWYgKG9iamVjdC50aXRsZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC50aXRsZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS50aXRsZSA9IFN0cmluZyhvYmplY3QudGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IFN0cmluZyhvYmplY3QuZGVzY3JpcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGVjdXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGVjdXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IFN0cmluZyhvYmplY3QuZXhlY3V0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb250cmFjdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5jb250cmFjdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jb250cmFjdCA9IFN0cmluZyhvYmplY3QuY29udHJhY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmNvbnRyYWN0ID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5tc2cgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubXNnICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLm1zZyA9IGJ5dGVzRnJvbUJhc2U2NChvYmplY3QubXNnKTtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5mcmVxdWVuY3kgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZnJlcXVlbmN5ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IE51bWJlcihvYmplY3QuZnJlcXVlbmN5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZ1bmRzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZ1bmRzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmZ1bmRzKSB7XG4gICAgICAgIG1lc3NhZ2UuZnVuZHMucHVzaChDb2luLmZyb21KU09OKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IENyZWF0ZUhvb2tQcm9wb3NhbCk6IHVua25vd24ge1xuICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgbWVzc2FnZS50aXRsZSAhPT0gdW5kZWZpbmVkICYmIChvYmoudGl0bGUgPSBtZXNzYWdlLnRpdGxlKTtcbiAgICBtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmouZGVzY3JpcHRpb24gPSBtZXNzYWdlLmRlc2NyaXB0aW9uKTtcbiAgICBtZXNzYWdlLmV4ZWN1dG9yICE9PSB1bmRlZmluZWQgJiYgKG9iai5leGVjdXRvciA9IG1lc3NhZ2UuZXhlY3V0b3IpO1xuICAgIG1lc3NhZ2UuY29udHJhY3QgIT09IHVuZGVmaW5lZCAmJiAob2JqLmNvbnRyYWN0ID0gbWVzc2FnZS5jb250cmFjdCk7XG4gICAgbWVzc2FnZS5tc2cgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5tc2cgPSBiYXNlNjRGcm9tQnl0ZXMoXG4gICAgICAgIG1lc3NhZ2UubXNnICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlLm1zZyA6IG5ldyBVaW50OEFycmF5KClcbiAgICAgICkpO1xuICAgIG1lc3NhZ2UuZnJlcXVlbmN5ICE9PSB1bmRlZmluZWQgJiYgKG9iai5mcmVxdWVuY3kgPSBtZXNzYWdlLmZyZXF1ZW5jeSk7XG4gICAgaWYgKG1lc3NhZ2UuZnVuZHMpIHtcbiAgICAgIG9iai5mdW5kcyA9IG1lc3NhZ2UuZnVuZHMubWFwKChlKSA9PiAoZSA/IENvaW4udG9KU09OKGUpIDogdW5kZWZpbmVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5mdW5kcyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8Q3JlYXRlSG9va1Byb3Bvc2FsPik6IENyZWF0ZUhvb2tQcm9wb3NhbCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VDcmVhdGVIb29rUHJvcG9zYWwsXG4gICAgfSBhcyBDcmVhdGVIb29rUHJvcG9zYWw7XG4gICAgbWVzc2FnZS5mdW5kcyA9IFtdO1xuICAgIGlmIChvYmplY3QudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudGl0bGUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBvYmplY3QudGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5leGVjdXRvciAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5leGVjdXRvciAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IG9iamVjdC5leGVjdXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5leGVjdXRvciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuY29udHJhY3QgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuY29udHJhY3QgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBvYmplY3QuY29udHJhY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1zZyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5tc2cgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubXNnID0gb2JqZWN0Lm1zZztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5tc2cgPSBuZXcgVWludDhBcnJheSgpO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mcmVxdWVuY3kgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gb2JqZWN0LmZyZXF1ZW5jeTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZ1bmRzICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZ1bmRzICE9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2Ygb2JqZWN0LmZ1bmRzKSB7XG4gICAgICAgIG1lc3NhZ2UuZnVuZHMucHVzaChDb2luLmZyb21QYXJ0aWFsKGUpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG5jb25zdCBiYXNlVXBkYXRlSG9va1Byb3Bvc2FsOiBvYmplY3QgPSB7XG4gIHRpdGxlOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgaWQ6IDAsXG4gIGV4ZWN1dG9yOiBcIlwiLFxuICBjb250cmFjdDogXCJcIixcbiAgZnJlcXVlbmN5OiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IFVwZGF0ZUhvb2tQcm9wb3NhbCA9IHtcbiAgZW5jb2RlKFxuICAgIG1lc3NhZ2U6IFVwZGF0ZUhvb2tQcm9wb3NhbCxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLnRpdGxlICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS50aXRsZSk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE4KS5zdHJpbmcobWVzc2FnZS5kZXNjcmlwdGlvbik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmlkICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDI0KS51aW50NjQobWVzc2FnZS5pZCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmV4ZWN1dG9yICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDM0KS5zdHJpbmcobWVzc2FnZS5leGVjdXRvcik7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmNvbnRyYWN0ICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDQyKS5zdHJpbmcobWVzc2FnZS5jb250cmFjdCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLm1zZy5sZW5ndGggIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoNTApLmJ5dGVzKG1lc3NhZ2UubXNnKTtcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuZnJlcXVlbmN5ICE9PSAwKSB7XG4gICAgICB3cml0ZXIudWludDMyKDU2KS5pbnQ2NChtZXNzYWdlLmZyZXF1ZW5jeSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmZ1bmRzKSB7XG4gICAgICBDb2luLmVuY29kZSh2ISwgd3JpdGVyLnVpbnQzMig2NikuZm9yaygpKS5sZGVsaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFVwZGF0ZUhvb2tQcm9wb3NhbCB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgIC4uLmJhc2VVcGRhdGVIb29rUHJvcG9zYWwsXG4gICAgfSBhcyBVcGRhdGVIb29rUHJvcG9zYWw7XG4gICAgbWVzc2FnZS5mdW5kcyA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS50aXRsZSA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmlkID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgbWVzc2FnZS5leGVjdXRvciA9IHJlYWRlci5zdHJpbmcoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBtZXNzYWdlLm1zZyA9IHJlYWRlci5ieXRlcygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSByZWFkZXIuaW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIG1lc3NhZ2UuZnVuZHMucHVzaChDb2luLmRlY29kZShyZWFkZXIsIHJlYWRlci51aW50MzIoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBVcGRhdGVIb29rUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlVXBkYXRlSG9va1Byb3Bvc2FsLFxuICAgIH0gYXMgVXBkYXRlSG9va1Byb3Bvc2FsO1xuICAgIG1lc3NhZ2UuZnVuZHMgPSBbXTtcbiAgICBpZiAob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnRpdGxlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gU3RyaW5nKG9iamVjdC50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmlkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmlkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmlkID0gTnVtYmVyKG9iamVjdC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmV4ZWN1dG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4ZWN1dG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gU3RyaW5nKG9iamVjdC5leGVjdXRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZXhlY3V0b3IgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmNvbnRyYWN0ICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmNvbnRyYWN0ID0gU3RyaW5nKG9iamVjdC5jb250cmFjdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuY29udHJhY3QgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0Lm1zZyAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5tc2cgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UubXNnID0gYnl0ZXNGcm9tQmFzZTY0KG9iamVjdC5tc2cpO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5mcmVxdWVuY3kgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuZnJlcXVlbmN5ID0gTnVtYmVyKG9iamVjdC5mcmVxdWVuY3kpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IDA7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZnVuZHMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZnVuZHMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZnVuZHMpIHtcbiAgICAgICAgbWVzc2FnZS5mdW5kcy5wdXNoKENvaW4uZnJvbUpTT04oZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogVXBkYXRlSG9va1Byb3Bvc2FsKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgKG9iai50aXRsZSA9IG1lc3NhZ2UudGl0bGUpO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gbWVzc2FnZS5pZCk7XG4gICAgbWVzc2FnZS5leGVjdXRvciAhPT0gdW5kZWZpbmVkICYmIChvYmouZXhlY3V0b3IgPSBtZXNzYWdlLmV4ZWN1dG9yKTtcbiAgICBtZXNzYWdlLmNvbnRyYWN0ICE9PSB1bmRlZmluZWQgJiYgKG9iai5jb250cmFjdCA9IG1lc3NhZ2UuY29udHJhY3QpO1xuICAgIG1lc3NhZ2UubXNnICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubXNnID0gYmFzZTY0RnJvbUJ5dGVzKFxuICAgICAgICBtZXNzYWdlLm1zZyAhPT0gdW5kZWZpbmVkID8gbWVzc2FnZS5tc2cgOiBuZXcgVWludDhBcnJheSgpXG4gICAgICApKTtcbiAgICBtZXNzYWdlLmZyZXF1ZW5jeSAhPT0gdW5kZWZpbmVkICYmIChvYmouZnJlcXVlbmN5ID0gbWVzc2FnZS5mcmVxdWVuY3kpO1xuICAgIGlmIChtZXNzYWdlLmZ1bmRzKSB7XG4gICAgICBvYmouZnVuZHMgPSBtZXNzYWdlLmZ1bmRzLm1hcCgoZSkgPT4gKGUgPyBDb2luLnRvSlNPTihlKSA6IHVuZGVmaW5lZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmouZnVuZHMgPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPFVwZGF0ZUhvb2tQcm9wb3NhbD4pOiBVcGRhdGVIb29rUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlVXBkYXRlSG9va1Byb3Bvc2FsLFxuICAgIH0gYXMgVXBkYXRlSG9va1Byb3Bvc2FsO1xuICAgIG1lc3NhZ2UuZnVuZHMgPSBbXTtcbiAgICBpZiAob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnRpdGxlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gb2JqZWN0LnRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kZXNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IG9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5kZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QuaWQgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuaWQgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSBvYmplY3QuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmV4ZWN1dG9yICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmV4ZWN1dG9yICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gb2JqZWN0LmV4ZWN1dG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmV4ZWN1dG9yID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5jb250cmFjdCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5jb250cmFjdCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5jb250cmFjdCA9IG9iamVjdC5jb250cmFjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5jb250cmFjdCA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChvYmplY3QubXNnICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lm1zZyAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5tc2cgPSBvYmplY3QubXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLm1zZyA9IG5ldyBVaW50OEFycmF5KCk7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZnJlcXVlbmN5ICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmZyZXF1ZW5jeSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5mcmVxdWVuY3kgPSBvYmplY3QuZnJlcXVlbmN5O1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmZyZXF1ZW5jeSA9IDA7XG4gICAgfVxuICAgIGlmIChvYmplY3QuZnVuZHMgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZnVuZHMgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuZnVuZHMpIHtcbiAgICAgICAgbWVzc2FnZS5mdW5kcy5wdXNoKENvaW4uZnJvbVBhcnRpYWwoZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcbn07XG5cbmNvbnN0IGJhc2VEZWxldGVIb29rUHJvcG9zYWw6IG9iamVjdCA9IHtcbiAgdGl0bGU6IFwiXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlwiLFxuICBpZDogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBEZWxldGVIb29rUHJvcG9zYWwgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBEZWxldGVIb29rUHJvcG9zYWwsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS50aXRsZSAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxMCkuc3RyaW5nKG1lc3NhZ2UudGl0bGUpO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgICAgd3JpdGVyLnVpbnQzMigxOCkuc3RyaW5nKG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICBpZiAobWVzc2FnZS5pZCAhPT0gMCkge1xuICAgICAgd3JpdGVyLnVpbnQzMigyNCkudWludDY0KG1lc3NhZ2UuaWQpO1xuICAgIH1cbiAgICByZXR1cm4gd3JpdGVyO1xuICB9LFxuXG4gIGRlY29kZShcbiAgICBpbnB1dDogQmluYXJ5UmVhZGVyIHwgVWludDhBcnJheSxcbiAgICBsZW5ndGg/OiBudW1iZXJcbiAgKTogRGVsZXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZURlbGV0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIERlbGV0ZUhvb2tQcm9wb3NhbDtcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG1lc3NhZ2UudGl0bGUgPSByZWFkZXIuc3RyaW5nKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS5pZCA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogRGVsZXRlSG9va1Byb3Bvc2FsIHtcbiAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgLi4uYmFzZURlbGV0ZUhvb2tQcm9wb3NhbCxcbiAgICB9IGFzIERlbGV0ZUhvb2tQcm9wb3NhbDtcbiAgICBpZiAob2JqZWN0LnRpdGxlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnRpdGxlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnRpdGxlID0gU3RyaW5nKG9iamVjdC50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gU3RyaW5nKG9iamVjdC5kZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmlkICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmlkICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmlkID0gTnVtYmVyKG9iamVjdC5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuaWQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogRGVsZXRlSG9va1Byb3Bvc2FsKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgKG9iai50aXRsZSA9IG1lc3NhZ2UudGl0bGUpO1xuICAgIG1lc3NhZ2UuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgKG9iai5kZXNjcmlwdGlvbiA9IG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgIG1lc3NhZ2UuaWQgIT09IHVuZGVmaW5lZCAmJiAob2JqLmlkID0gbWVzc2FnZS5pZCk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChvYmplY3Q6IERlZXBQYXJ0aWFsPERlbGV0ZUhvb2tQcm9wb3NhbD4pOiBEZWxldGVIb29rUHJvcG9zYWwge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAuLi5iYXNlRGVsZXRlSG9va1Byb3Bvc2FsLFxuICAgIH0gYXMgRGVsZXRlSG9va1Byb3Bvc2FsO1xuICAgIGlmIChvYmplY3QudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QudGl0bGUgIT09IG51bGwpIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBvYmplY3QudGl0bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gb2JqZWN0LmRlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5pZCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5pZCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5pZCA9IG9iamVjdC5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5pZCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDcmVhdGVIb29rUHJvcG9zYWwiLCJEZWxldGVIb29rUHJvcG9zYWwiLCJVcGRhdGVIb29rUHJvcG9zYWwiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlQ3JlYXRlSG9va1Byb3Bvc2FsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImV4ZWN1dG9yIiwiY29udHJhY3QiLCJmcmVxdWVuY3kiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiQmluYXJ5V3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwic3RyaW5nIiwibXNnIiwibGVuZ3RoIiwiYnl0ZXMiLCJpbnQ2NCIsInYiLCJmdW5kcyIsIkNvaW4iLCJmb3JrIiwibGRlbGltIiwiZGVjb2RlIiwiaW5wdXQiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwiaW50MzIiLCJwdXNoIiwic2tpcFR5cGUiLCJmcm9tSlNPTiIsIm9iamVjdCIsIlN0cmluZyIsImJ5dGVzRnJvbUJhc2U2NCIsIk51bWJlciIsImUiLCJ0b0pTT04iLCJvYmoiLCJiYXNlNjRGcm9tQnl0ZXMiLCJtYXAiLCJmcm9tUGFydGlhbCIsImJhc2VVcGRhdGVIb29rUHJvcG9zYWwiLCJpZCIsInVpbnQ2NCIsImJhc2VEZWxldGVIb29rUHJvcG9zYWwiXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7Ozs7Ozs7Ozs7SUFtRExBLGtCQUFrQjtlQUFsQkE7O0lBa1lBQyxrQkFBa0I7ZUFBbEJBOztJQXhNQUMsa0JBQWtCO2VBQWxCQTs7SUF2T0FDLGVBQWU7ZUFBZkE7Ozt3QkFIOEI7c0JBQ3RCO3NCQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMUMsTUFBTUEsa0JBQWtCO0FBcUMvQixNQUFNQyx5QkFBaUM7SUFDckNDLE9BQU87SUFDUEMsYUFBYTtJQUNiQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsV0FBVztBQUNiO0FBRU8sTUFBTVQscUJBQXFCO0lBQ2hDVSxRQUNFQyxPQUEyQixFQUMzQkMsU0FBdUJDLG9CQUFZLENBQUNDLE1BQU0sRUFBRTtRQUU1QyxJQUFJSCxRQUFRTixLQUFLLEtBQUssSUFBSTtZQUN4Qk8sT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0ws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
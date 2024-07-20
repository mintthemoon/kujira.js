"use strict";
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
    Period: function() {
        return Period;
    },
    StridePeriodicVestingAccount: function() {
        return StridePeriodicVestingAccount;
    }
});
const _binary = require("cosmjs-types/binary");
const _coin = require("cosmjs-types/cosmos/base/v1beta1/coin");
const _vesting = require("cosmjs-types/cosmos/vesting/v1beta1/vesting");
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
const basePeriod = {
    startTime: BigInt(0),
    length: BigInt(0),
    actionType: 0
};
const Period = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.startTime !== BigInt(0)) {
            writer.uint32(8).int64(message.startTime);
        }
        if (message.length !== BigInt(0)) {
            writer.uint32(16).int64(message.length);
        }
        for (const v of message.amount){
            _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.actionType !== 0) {
            writer.uint32(32).int32(message.actionType);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, basePeriod);
        message.amount = [];
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.startTime = reader.int64();
                    break;
                case 2:
                    message.length = reader.int64();
                    break;
                case 3:
                    message.amount.push(_coin.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.actionType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, basePeriod);
        message.amount = [];
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = BigInt(object.startTime);
        } else {
            message.startTime = BigInt(0);
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = BigInt(object.length);
        } else {
            message.length = BigInt(0);
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount){
                message.amount.push(_coin.Coin.fromJSON(e));
            }
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = Number(object.actionType);
        } else {
            message.actionType = 0;
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
        message.length !== undefined && (obj.length = (message.length || BigInt(0)).toString());
        if (message.amount) {
            obj.amount = message.amount.map((e)=>e ? _coin.Coin.toJSON(e) : undefined);
        } else {
            obj.amount = [];
        }
        message.actionType !== undefined && (obj.actionType = message.actionType);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, basePeriod);
        message.amount = [];
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        } else {
            message.startTime = BigInt(0);
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        } else {
            message.length = BigInt(0);
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount){
                message.amount.push(_coin.Coin.fromPartial(e));
            }
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = object.actionType;
        } else {
            message.actionType = 0;
        }
        return message;
    }
};
function createBaseStridePeriodicVestingAccount() {
    return {
        baseVestingAccount: undefined,
        vestingPeriods: []
    };
}
const StridePeriodicVestingAccount = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.baseVestingAccount !== undefined) {
            _vesting.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.vestingPeriods){
            Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof _binary.BinaryReader ? input : new _binary.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStridePeriodicVestingAccount();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.baseVestingAccount = _vesting.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial (object) {
        var _object_vestingPeriods;
        const message = createBaseStridePeriodicVestingAccount();
        message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? _vesting.BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
        message.vestingPeriods = ((_object_vestingPeriods = object.vestingPeriods) === null || _object_vestingPeriods === void 0 ? void 0 : _object_vestingPeriods.map((e)=>Period.fromPartial(e))) || [];
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJpZGUvdmVzdGluZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWVwUGFydGlhbCB9IGZyb20gXCJjb3NtanMtdHlwZXNcIjtcbmltcG9ydCB7IEJpbmFyeVJlYWRlciwgQmluYXJ5V3JpdGVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9iaW5hcnlcIjtcbmltcG9ydCB7IENvaW4gfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3YxYmV0YTEvY29pblwiO1xuaW1wb3J0IHsgQmFzZVZlc3RpbmdBY2NvdW50IH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvdmVzdGluZy92MWJldGExL3Zlc3RpbmdcIjtcblxuLyoqIFBlcmlvZCBkZWZpbmVzIGEgbGVuZ3RoIG9mIHRpbWUgYW5kIGFtb3VudCBvZiBjb2lucyB0aGF0IHdpbGwgdmVzdC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kIHtcbiAgc3RhcnRUaW1lOiBiaWdpbnQ7XG4gIGxlbmd0aDogYmlnaW50O1xuICBhbW91bnQ6IENvaW5bXTtcbiAgYWN0aW9uVHlwZTogbnVtYmVyO1xufVxuXG5jb25zdCBiYXNlUGVyaW9kOiBvYmplY3QgPSB7XG4gIHN0YXJ0VGltZTogQmlnSW50KDApLFxuICBsZW5ndGg6IEJpZ0ludCgwKSxcbiAgYWN0aW9uVHlwZTogMCxcbn07XG5cbmV4cG9ydCBjb25zdCBQZXJpb2QgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBQZXJpb2QsXG4gICAgd3JpdGVyOiBCaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXIuY3JlYXRlKClcbiAgKTogQmluYXJ5V3JpdGVyIHtcbiAgICBpZiAobWVzc2FnZS5zdGFydFRpbWUgIT09IEJpZ0ludCgwKSkge1xuICAgICAgd3JpdGVyLnVpbnQzMig4KS5pbnQ2NChtZXNzYWdlLnN0YXJ0VGltZSk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmxlbmd0aCAhPT0gQmlnSW50KDApKSB7XG4gICAgICB3cml0ZXIudWludDMyKDE2KS5pbnQ2NChtZXNzYWdlLmxlbmd0aCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBvZiBtZXNzYWdlLmFtb3VudCkge1xuICAgICAgQ29pbi5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmFjdGlvblR5cGUgIT09IDApIHtcbiAgICAgIHdyaXRlci51aW50MzIoMzIpLmludDMyKG1lc3NhZ2UuYWN0aW9uVHlwZSk7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LCBsZW5ndGg/OiBudW1iZXIpOiBQZXJpb2Qge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBlcmlvZCB9IGFzIFBlcmlvZDtcbiAgICBtZXNzYWdlLmFtb3VudCA9IFtdO1xuICAgIHdoaWxlIChyZWFkZXIucG9zIDwgZW5kKSB7XG4gICAgICBjb25zdCB0YWcgPSByZWFkZXIudWludDMyKCk7XG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5zdGFydFRpbWUgPSByZWFkZXIuaW50NjQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG1lc3NhZ2UubGVuZ3RoID0gcmVhZGVyLmludDY0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBtZXNzYWdlLmFtb3VudC5wdXNoKENvaW4uZGVjb2RlKHJlYWRlciwgcmVhZGVyLnVpbnQzMigpKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBtZXNzYWdlLmFjdGlvblR5cGUgPSByZWFkZXIuaW50MzIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKG9iamVjdDogYW55KTogUGVyaW9kIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlUGVyaW9kIH0gYXMgUGVyaW9kO1xuICAgIG1lc3NhZ2UuYW1vdW50ID0gW107XG4gICAgaWYgKG9iamVjdC5zdGFydFRpbWUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc3RhcnRUaW1lICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLnN0YXJ0VGltZSA9IEJpZ0ludChvYmplY3Quc3RhcnRUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5zdGFydFRpbWUgPSBCaWdJbnQoMCk7XG4gICAgfVxuICAgIGlmIChvYmplY3QubGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0Lmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5sZW5ndGggPSBCaWdJbnQob2JqZWN0Lmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UubGVuZ3RoID0gQmlnSW50KDApO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hbW91bnQgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuYW1vdW50KSB7XG4gICAgICAgIG1lc3NhZ2UuYW1vdW50LnB1c2goQ29pbi5mcm9tSlNPTihlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3QuYWN0aW9uVHlwZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY3Rpb25UeXBlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmFjdGlvblR5cGUgPSBOdW1iZXIob2JqZWN0LmFjdGlvblR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmFjdGlvblR5cGUgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04obWVzc2FnZTogUGVyaW9kKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICBtZXNzYWdlLnN0YXJ0VGltZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAob2JqLnN0YXJ0VGltZSA9IChtZXNzYWdlLnN0YXJ0VGltZSB8fCBCaWdJbnQoMCkpLnRvU3RyaW5nKCkpO1xuICAgIG1lc3NhZ2UubGVuZ3RoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChvYmoubGVuZ3RoID0gKG1lc3NhZ2UubGVuZ3RoIHx8IEJpZ0ludCgwKSkudG9TdHJpbmcoKSk7XG4gICAgaWYgKG1lc3NhZ2UuYW1vdW50KSB7XG4gICAgICBvYmouYW1vdW50ID0gbWVzc2FnZS5hbW91bnQubWFwKChlKSA9PiAoZSA/IENvaW4udG9KU09OKGUpIDogdW5kZWZpbmVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iai5hbW91bnQgPSBbXTtcbiAgICB9XG4gICAgbWVzc2FnZS5hY3Rpb25UeXBlICE9PSB1bmRlZmluZWQgJiYgKG9iai5hY3Rpb25UeXBlID0gbWVzc2FnZS5hY3Rpb25UeXBlKTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKG9iamVjdDogRGVlcFBhcnRpYWw8UGVyaW9kPik6IFBlcmlvZCB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBlcmlvZCB9IGFzIFBlcmlvZDtcbiAgICBtZXNzYWdlLmFtb3VudCA9IFtdO1xuICAgIGlmIChvYmplY3Quc3RhcnRUaW1lICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnN0YXJ0VGltZSAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5zdGFydFRpbWUgPSBvYmplY3Quc3RhcnRUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLnN0YXJ0VGltZSA9IEJpZ0ludCgwKTtcbiAgICB9XG4gICAgaWYgKG9iamVjdC5sZW5ndGggIT09IHVuZGVmaW5lZCAmJiBvYmplY3QubGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmxlbmd0aCA9IG9iamVjdC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UubGVuZ3RoID0gQmlnSW50KDApO1xuICAgIH1cbiAgICBpZiAob2JqZWN0LmFtb3VudCAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hbW91bnQgIT09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZSBvZiBvYmplY3QuYW1vdW50KSB7XG4gICAgICAgIG1lc3NhZ2UuYW1vdW50LnB1c2goQ29pbi5mcm9tUGFydGlhbChlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvYmplY3QuYWN0aW9uVHlwZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5hY3Rpb25UeXBlICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLmFjdGlvblR5cGUgPSBvYmplY3QuYWN0aW9uVHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5hY3Rpb25UeXBlID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuXG4vKipcbiAqIFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQgaW1wbGVtZW50cyB0aGUgVmVzdGluZ0FjY291bnQgaW50ZXJmYWNlLiBJdFxuICogcGVyaW9kaWNhbGx5IHZlc3RzIGJ5IHVubG9ja2luZyBjb2lucyBkdXJpbmcgZWFjaCBzcGVjaWZpZWQgcGVyaW9kLlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudCB7XG4gIGJhc2VWZXN0aW5nQWNjb3VudDogQmFzZVZlc3RpbmdBY2NvdW50IHwgdW5kZWZpbmVkO1xuICB2ZXN0aW5nUGVyaW9kczogUGVyaW9kW107XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50KCk6IFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQge1xuICByZXR1cm4ge1xuICAgIGJhc2VWZXN0aW5nQWNjb3VudDogdW5kZWZpbmVkLFxuICAgIHZlc3RpbmdQZXJpb2RzOiBbXSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQgPSB7XG4gIGVuY29kZShcbiAgICBtZXNzYWdlOiBTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50LFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgaWYgKG1lc3NhZ2UuYmFzZVZlc3RpbmdBY2NvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIEJhc2VWZXN0aW5nQWNjb3VudC5lbmNvZGUoXG4gICAgICAgIG1lc3NhZ2UuYmFzZVZlc3RpbmdBY2NvdW50LFxuICAgICAgICB3cml0ZXIudWludDMyKDEwKS5mb3JrKClcbiAgICAgICkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IG9mIG1lc3NhZ2UudmVzdGluZ1BlcmlvZHMpIHtcbiAgICAgIFBlcmlvZC5lbmNvZGUodiEsIHdyaXRlci51aW50MzIoMjYpLmZvcmsoKSkubGRlbGltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoXG4gICAgaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksXG4gICAgbGVuZ3RoPzogbnVtYmVyXG4gICk6IFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQge1xuICAgIGNvbnN0IHJlYWRlciA9XG4gICAgICBpbnB1dCBpbnN0YW5jZW9mIEJpbmFyeVJlYWRlciA/IGlucHV0IDogbmV3IEJpbmFyeVJlYWRlcihpbnB1dCk7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IGNyZWF0ZUJhc2VTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50KCk7XG5cbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuXG4gICAgICBzd2l0Y2ggKHRhZyA+Pj4gMykge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgbWVzc2FnZS5iYXNlVmVzdGluZ0FjY291bnQgPSBCYXNlVmVzdGluZ0FjY291bnQuZGVjb2RlKFxuICAgICAgICAgICAgcmVhZGVyLFxuICAgICAgICAgICAgcmVhZGVyLnVpbnQzMigpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgbWVzc2FnZS52ZXN0aW5nUGVyaW9kcy5wdXNoKFBlcmlvZC5kZWNvZGUocmVhZGVyLCByZWFkZXIudWludDMyKCkpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQ+XG4gICk6IFN0cmlkZVBlcmlvZGljVmVzdGluZ0FjY291bnQge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBjcmVhdGVCYXNlU3RyaWRlUGVyaW9kaWNWZXN0aW5nQWNjb3VudCgpO1xuICAgIG1lc3NhZ2UuYmFzZVZlc3RpbmdBY2NvdW50ID1cbiAgICAgIG9iamVjdC5iYXNlVmVzdGluZ0FjY291bnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgb2JqZWN0LmJhc2VWZXN0aW5nQWNjb3VudCAhPT0gbnVsbFxuICAgICAgICA/IEJhc2VWZXN0aW5nQWNjb3VudC5mcm9tUGFydGlhbChvYmplY3QuYmFzZVZlc3RpbmdBY2NvdW50KVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICBtZXNzYWdlLnZlc3RpbmdQZXJpb2RzID1cbiAgICAgIG9iamVjdC52ZXN0aW5nUGVyaW9kcz8ubWFwKChlKSA9PiBQZXJpb2QuZnJvbVBhcnRpYWwoZSkpIHx8IFtdO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJQZXJpb2QiLCJTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IiwiYmFzZVBlcmlvZCIsInN0YXJ0VGltZSIsIkJpZ0ludCIsImxlbmd0aCIsImFjdGlvblR5cGUiLCJlbmNvZGUiLCJtZXNzYWdlIiwid3JpdGVyIiwiQmluYXJ5V3JpdGVyIiwiY3JlYXRlIiwidWludDMyIiwiaW50NjQiLCJ2IiwiYW1vdW50IiwiQ29pbiIsImZvcmsiLCJsZGVsaW0iLCJpbnQzMiIsImRlY29kZSIsImlucHV0IiwicmVhZGVyIiwiQmluYXJ5UmVhZGVyIiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwidGFnIiwicHVzaCIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJlIiwiTnVtYmVyIiwidG9KU09OIiwib2JqIiwidG9TdHJpbmciLCJtYXAiLCJmcm9tUGFydGlhbCIsImNyZWF0ZUJhc2VTdHJpZGVQZXJpb2RpY1Zlc3RpbmdBY2NvdW50IiwiYmFzZVZlc3RpbmdBY2NvdW50IiwidmVzdGluZ1BlcmlvZHMiLCJCYXNlVmVzdGluZ0FjY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBbUJhQSxNQUFNO2VBQU5BOztJQXNJQUMsNEJBQTRCO2VBQTVCQTs7O3dCQXhKOEI7c0JBQ3RCO3lCQUNj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
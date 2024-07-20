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
export const protobufPackage = "kujira.scheduler";
const baseParams = {};
export const Params = {
    encode (_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseParams);
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
        const message = _object_spread({}, baseParams);
        return message;
    },
    toJSON (_) {
        const obj = {};
        return obj;
    },
    fromPartial (_) {
        const message = _object_spread({}, baseParams);
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvc2NoZWR1bGVyL3R5cGVzL3BhcmFtcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tIFwiY29zbWpzLXR5cGVzXCI7XG5pbXBvcnQgeyBCaW5hcnlSZWFkZXIsIEJpbmFyeVdyaXRlciB9IGZyb20gXCJjb3NtanMtdHlwZXMvYmluYXJ5XCI7XG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuc2NoZWR1bGVyXCI7XG5cbi8qKiBQYXJhbXMgZGVmaW5lcyB0aGUgcGFyYW1ldGVycyBmb3IgdGhlIG1vZHVsZS4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1zIHt9XG5cbmNvbnN0IGJhc2VQYXJhbXM6IG9iamVjdCA9IHt9O1xuXG5leHBvcnQgY29uc3QgUGFyYW1zID0ge1xuICBlbmNvZGUoXG4gICAgXzogUGFyYW1zLFxuICAgIHdyaXRlcjogQmluYXJ5V3JpdGVyID0gQmluYXJ5V3JpdGVyLmNyZWF0ZSgpXG4gICk6IEJpbmFyeVdyaXRlciB7XG4gICAgcmV0dXJuIHdyaXRlcjtcbiAgfSxcblxuICBkZWNvZGUoaW5wdXQ6IEJpbmFyeVJlYWRlciB8IFVpbnQ4QXJyYXksIGxlbmd0aD86IG51bWJlcik6IFBhcmFtcyB7XG4gICAgY29uc3QgcmVhZGVyID1cbiAgICAgIGlucHV0IGluc3RhbmNlb2YgVWludDhBcnJheSA/IG5ldyBCaW5hcnlSZWFkZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgbGV0IGVuZCA9IGxlbmd0aCA9PT0gdW5kZWZpbmVkID8gcmVhZGVyLmxlbiA6IHJlYWRlci5wb3MgKyBsZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBhcmFtcyB9IGFzIFBhcmFtcztcbiAgICB3aGlsZSAocmVhZGVyLnBvcyA8IGVuZCkge1xuICAgICAgY29uc3QgdGFnID0gcmVhZGVyLnVpbnQzMigpO1xuICAgICAgc3dpdGNoICh0YWcgPj4+IDMpIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZWFkZXIuc2tpcFR5cGUodGFnICYgNyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9LFxuXG4gIGZyb21KU09OKF86IGFueSk6IFBhcmFtcyB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHsgLi4uYmFzZVBhcmFtcyB9IGFzIFBhcmFtcztcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICB0b0pTT04oXzogUGFyYW1zKTogdW5rbm93biB7XG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICByZXR1cm4gb2JqO1xuICB9LFxuXG4gIGZyb21QYXJ0aWFsKF86IERlZXBQYXJ0aWFsPFBhcmFtcz4pOiBQYXJhbXMge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VQYXJhbXMgfSBhcyBQYXJhbXM7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJpbmFyeVJlYWRlciIsIkJpbmFyeVdyaXRlciIsInByb3RvYnVmUGFja2FnZSIsImJhc2VQYXJhbXMiLCJQYXJhbXMiLCJlbmNvZGUiLCJfIiwid3JpdGVyIiwiY3JlYXRlIiwiZGVjb2RlIiwiaW5wdXQiLCJsZW5ndGgiLCJyZWFkZXIiLCJVaW50OEFycmF5IiwiZW5kIiwidW5kZWZpbmVkIiwibGVuIiwicG9zIiwibWVzc2FnZSIsInRhZyIsInVpbnQzMiIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLFNBQVNBLFlBQVksRUFBRUMsWUFBWSxRQUFRLHNCQUFzQjtBQUNqRSxPQUFPLE1BQU1DLGtCQUFrQixtQkFBbUI7QUFLbEQsTUFBTUMsYUFBcUIsQ0FBQztBQUU1QixPQUFPLE1BQU1DLFNBQVM7SUFDcEJDLFFBQ0VDLENBQVMsRUFDVEMsU0FBdUJOLGFBQWFPLE1BQU0sRUFBRTtRQUU1QyxPQUFPRDtJQUNUO0lBRUFFLFFBQU9DLEtBQWdDLEVBQUVDLE1BQWU7UUFDdEQsTUFBTUMsU0FDSkYsaUJBQWlCRyxhQUFhLElBQUliLGFBQWFVLFNBQVNBO1FBQzFELElBQUlJLE1BQU1ILFdBQVdJLFlBQVlILE9BQU9JLEdBQUcsR0FBR0osT0FBT0ssR0FBRyxHQUFHTjtRQUMzRCxNQUFNTyxVQUFVLG1CQUFLZjtRQUNyQixNQUFPUyxPQUFPSyxHQUFHLEdBQUdILElBQUs7WUFDdkIsTUFBTUssTUFBTVAsT0FBT1EsTUFBTTtZQUN6QixPQUFRRCxRQUFRO2dCQUNkO29CQUNFUCxPQUFPUyxRQUFRLENBQUNGLE1BQU07b0JBQ3RCO1lBQ0o7UUFDRjtRQUNBLE9BQU9EO0lBQ1Q7SUFFQUksVUFBU2hCLENBQU07UUFDYixNQUFNWSxVQUFVLG1CQUFLZjtRQUNyQixPQUFPZTtJQUNUO0lBRUFLLFFBQU9qQixDQUFTO1FBQ2QsTUFBTWtCLE1BQVcsQ0FBQztRQUNsQixPQUFPQTtJQUNUO0lBRUFDLGFBQVluQixDQUFzQjtRQUNoQyxNQUFNWSxVQUFVLG1CQUFLZjtRQUNyQixPQUFPZTtJQUNUO0FBQ0YsRUFBRSJ9
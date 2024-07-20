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
    DenomAuthorityMetadata: function() {
        return DenomAuthorityMetadata;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
const _binary = require("cosmjs-types/binary");
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
const protobufPackage = "kujira.denom";
const baseDenomAuthorityMetadata = {
    Admin: ""
};
const DenomAuthorityMetadata = {
    encode (message, writer = _binary.BinaryWriter.create()) {
        if (message.Admin !== "") {
            writer.uint32(10).string(message.Admin);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof Uint8Array ? new _binary.BinaryReader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = _object_spread({}, baseDenomAuthorityMetadata);
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    message.Admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON (object) {
        const message = _object_spread({}, baseDenomAuthorityMetadata);
        if (object.Admin !== undefined && object.Admin !== null) {
            message.Admin = String(object.Admin);
        } else {
            message.Admin = "";
        }
        return message;
    },
    toJSON (message) {
        const obj = {};
        message.Admin !== undefined && (obj.Admin = message.Admin);
        return obj;
    },
    fromPartial (object) {
        const message = _object_spread({}, baseDenomAuthorityMetadata);
        if (object.Admin !== undefined && object.Admin !== null) {
            message.Admin = object.Admin;
        } else {
            message.Admin = "";
        }
        return message;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vdHlwZXMvYXV0aG9yaXR5TWV0YWRhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSBcImNvc21qcy10eXBlc1wiO1xuaW1wb3J0IHsgQmluYXJ5UmVhZGVyLCBCaW5hcnlXcml0ZXIgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2JpbmFyeVwiO1xuXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuZGVub21cIjtcblxuLyoqXG4gKiBEZW5vbUF1dGhvcml0eU1ldGFkYXRhIHNwZWNpZmllcyBtZXRhZGF0YSBmb3IgYWRkcmVzc2VzIHRoYXQgaGF2ZSBzcGVjaWZpY1xuICogY2FwYWJpbGl0aWVzIG92ZXIgYSB0b2tlbiBmYWN0b3J5IGRlbm9tLiBSaWdodCBub3cgdGhlcmUgaXMgb25seSBvbmUgQWRtaW5cbiAqIHBlcm1pc3Npb24sIGJ1dCBpcyBwbGFubmVkIHRvIGJlIGV4dGVuZGVkIHRvIHRoZSBmdXR1cmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVub21BdXRob3JpdHlNZXRhZGF0YSB7XG4gIC8qKiBDYW4gYmUgZW1wdHkgZm9yIG5vIGFkbWluLCBvciBhIHZhbGlkIGt1amlyYSBhZGRyZXNzICovXG4gIEFkbWluOiBzdHJpbmc7XG59XG5cbmNvbnN0IGJhc2VEZW5vbUF1dGhvcml0eU1ldGFkYXRhOiBvYmplY3QgPSB7IEFkbWluOiBcIlwiIH07XG5cbmV4cG9ydCBjb25zdCBEZW5vbUF1dGhvcml0eU1ldGFkYXRhID0ge1xuICBlbmNvZGUoXG4gICAgbWVzc2FnZTogRGVub21BdXRob3JpdHlNZXRhZGF0YSxcbiAgICB3cml0ZXI6IEJpbmFyeVdyaXRlciA9IEJpbmFyeVdyaXRlci5jcmVhdGUoKVxuICApOiBCaW5hcnlXcml0ZXIge1xuICAgIGlmIChtZXNzYWdlLkFkbWluICE9PSBcIlwiKSB7XG4gICAgICB3cml0ZXIudWludDMyKDEwKS5zdHJpbmcobWVzc2FnZS5BZG1pbik7XG4gICAgfVxuICAgIHJldHVybiB3cml0ZXI7XG4gIH0sXG5cbiAgZGVjb2RlKFxuICAgIGlucHV0OiBCaW5hcnlSZWFkZXIgfCBVaW50OEFycmF5LFxuICAgIGxlbmd0aD86IG51bWJlclxuICApOiBEZW5vbUF1dGhvcml0eU1ldGFkYXRhIHtcbiAgICBjb25zdCByZWFkZXIgPVxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBVaW50OEFycmF5ID8gbmV3IEJpbmFyeVJlYWRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICBsZXQgZW5kID0gbGVuZ3RoID09PSB1bmRlZmluZWQgPyByZWFkZXIubGVuIDogcmVhZGVyLnBvcyArIGxlbmd0aDtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRGVub21BdXRob3JpdHlNZXRhZGF0YSB9IGFzIERlbm9tQXV0aG9yaXR5TWV0YWRhdGE7XG4gICAgd2hpbGUgKHJlYWRlci5wb3MgPCBlbmQpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHJlYWRlci51aW50MzIoKTtcbiAgICAgIHN3aXRjaCAodGFnID4+PiAzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBtZXNzYWdlLkFkbWluID0gcmVhZGVyLnN0cmluZygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlYWRlci5za2lwVHlwZSh0YWcgJiA3KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgZnJvbUpTT04ob2JqZWN0OiBhbnkpOiBEZW5vbUF1dGhvcml0eU1ldGFkYXRhIHtcbiAgICBjb25zdCBtZXNzYWdlID0geyAuLi5iYXNlRGVub21BdXRob3JpdHlNZXRhZGF0YSB9IGFzIERlbm9tQXV0aG9yaXR5TWV0YWRhdGE7XG4gICAgaWYgKG9iamVjdC5BZG1pbiAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5BZG1pbiAhPT0gbnVsbCkge1xuICAgICAgbWVzc2FnZS5BZG1pbiA9IFN0cmluZyhvYmplY3QuQWRtaW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLkFkbWluID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG5cbiAgdG9KU09OKG1lc3NhZ2U6IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEpOiB1bmtub3duIHtcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgIG1lc3NhZ2UuQWRtaW4gIT09IHVuZGVmaW5lZCAmJiAob2JqLkFkbWluID0gbWVzc2FnZS5BZG1pbik7XG4gICAgcmV0dXJuIG9iajtcbiAgfSxcblxuICBmcm9tUGFydGlhbChcbiAgICBvYmplY3Q6IERlZXBQYXJ0aWFsPERlbm9tQXV0aG9yaXR5TWV0YWRhdGE+XG4gICk6IERlbm9tQXV0aG9yaXR5TWV0YWRhdGEge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IC4uLmJhc2VEZW5vbUF1dGhvcml0eU1ldGFkYXRhIH0gYXMgRGVub21BdXRob3JpdHlNZXRhZGF0YTtcbiAgICBpZiAob2JqZWN0LkFkbWluICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LkFkbWluICE9PSBudWxsKSB7XG4gICAgICBtZXNzYWdlLkFkbWluID0gb2JqZWN0LkFkbWluO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLkFkbWluID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIkRlbm9tQXV0aG9yaXR5TWV0YWRhdGEiLCJwcm90b2J1ZlBhY2thZ2UiLCJiYXNlRGVub21BdXRob3JpdHlNZXRhZGF0YSIsIkFkbWluIiwiZW5jb2RlIiwibWVzc2FnZSIsIndyaXRlciIsIkJpbmFyeVdyaXRlciIsImNyZWF0ZSIsInVpbnQzMiIsInN0cmluZyIsImRlY29kZSIsImlucHV0IiwibGVuZ3RoIiwicmVhZGVyIiwiVWludDhBcnJheSIsIkJpbmFyeVJlYWRlciIsImVuZCIsInVuZGVmaW5lZCIsImxlbiIsInBvcyIsInRhZyIsInNraXBUeXBlIiwiZnJvbUpTT04iLCJvYmplY3QiLCJTdHJpbmciLCJ0b0pTT04iLCJvYmoiLCJmcm9tUGFydGlhbCJdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCOzs7Ozs7Ozs7OztJQWtCTEEsc0JBQXNCO2VBQXRCQTs7SUFkQUMsZUFBZTtlQUFmQTs7O3dCQUY4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsTUFBTUEsa0JBQWtCO0FBWS9CLE1BQU1DLDZCQUFxQztJQUFFQyxPQUFPO0FBQUc7QUFFaEQsTUFBTUgseUJBQXlCO0lBQ3BDSSxRQUNFQyxPQUErQixFQUMvQkMsU0FBdUJDLG9CQUFZLENBQUNDLE1BQU0sRUFBRTtRQUU1QyxJQUFJSCxRQUFRRixLQUFLLEtBQUssSUFBSTtZQUN4QkcsT0FBT0csTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQ0wsUUFBUUYsS0FBSztRQUN4QztRQUNBLE9BQU9HO0lBQ1Q7SUFFQUssUUFDRUMsS0FBZ0MsRUFDaENDLE1BQWU7UUFFZixNQUFNQyxTQUNKRixpQkFBaUJHLGFBQWEsSUFBSUMsb0JBQVksQ0FBQ0osU0FBU0E7UUFDMUQsSUFBSUssTUFBTUosV0FBV0ssWUFBWUosT0FBT0ssR0FBRyxHQUFHTCxPQUFPTSxHQUFHLEdBQUdQO1FBQzNELE1BQU1SLFVBQVUsbUJBQUtIO1FBQ3JCLE1BQU9ZLE9BQU9NLEdBQUcsR0FBR0gsSUFBSztZQUN2QixNQUFNSSxNQUFNUCxPQUFPTCxNQUFNO1lBQ3pCLE9BQVFZLFFBQVE7Z0JBQ2QsS0FBSztvQkFDSGhCLFFBQVFGLEtBQUssR0FBR1csT0FBT0osTUFBTTtvQkFDN0I7Z0JBQ0Y7b0JBQ0VJLE9BQU9RLFFBQVEsQ0FBQ0QsTUFBTTtvQkFDdEI7WUFDSjtRQUNGO1FBQ0EsT0FBT2hCO0lBQ1Q7SUFFQWtCLFVBQVNDLE1BQVc7UUFDbEIsTUFBTW5CLFVBQVUsbUJBQUtIO1FBQ3JCLElBQUlzQixPQUFPckIsS0FBSyxLQUFLZSxhQUFhTSxPQUFPckIsS0FBSyxLQUFLLE1BQU07WUFDdkRFLFFBQVFGLEtBQUssR0FBR3NCLE9BQU9ELE9BQU9yQixLQUFLO1FBQ3JDLE9BQU87WUFDTEUsUUFBUUYsS0FBSyxHQUFHO1FBQ2xCO1FBQ0EsT0FBT0U7SUFDVDtJQUVBcUIsUUFBT3JCLE9BQStCO1FBQ3BDLE1BQU1zQixNQUFXLENBQUM7UUFDbEJ0QixRQUFRRixLQUFLLEtBQUtlLGFBQWNTLENBQUFBLElBQUl4QixLQUFLLEdBQUdFLFFBQVFGLEtBQUssQUFBRDtRQUN4RCxPQUFPd0I7SUFDVDtJQUVBQyxhQUNFSixNQUEyQztRQUUzQyxNQUFNbkIsVUFBVSxtQkFBS0g7UUFDckIsSUFBSXNCLE9BQU9yQixLQUFLLEtBQUtlLGFBQWFNLE9BQU9yQixLQUFLLEtBQUssTUFBTTtZQUN2REUsUUFBUUYsS0FBSyxHQUFHcUIsT0FBT3JCLEtBQUs7UUFDOUIsT0FBTztZQUNMRSxRQUFRRixLQUFLLEdBQUc7UUFDbEI7UUFDQSxPQUFPRTtJQUNUO0FBQ0YifQ==
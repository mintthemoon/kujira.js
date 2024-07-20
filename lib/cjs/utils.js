"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setSignerAddress", {
    enumerable: true,
    get: function() {
        return setSignerAddress;
    }
});
const _encoding = require("@cosmjs/encoding");
const _tendermintrpc = require("@cosmjs/tendermint-rpc");
const _keys = require("cosmjs-types/cosmos/crypto/ed25519/keys");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
const setSignerAddress = (v)=>{
    const decoded = v.consensusPubkey && _keys.PubKey.decode(v.consensusPubkey.value);
    const address = decoded && (0, _tendermintrpc.pubkeyToAddress)("ed25519", decoded.key);
    return _object_spread_props(_object_spread({}, v), {
        signerAddress: address && (0, _encoding.toBech32)("kujiravalcons", (0, _encoding.fromHex)(address)) || ""
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tSGV4LCB0b0JlY2gzMiB9IGZyb20gXCJAY29zbWpzL2VuY29kaW5nXCI7XG5pbXBvcnQgeyBwdWJrZXlUb0FkZHJlc3MgfSBmcm9tIFwiQGNvc21qcy90ZW5kZXJtaW50LXJwY1wiO1xuaW1wb3J0IHsgUHViS2V5IH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvY3J5cHRvL2VkMjU1MTkva2V5c1wiO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3Mvc3Rha2luZy92MWJldGExL3N0YWtpbmdcIjtcblxuZXhwb3J0IGNvbnN0IHNldFNpZ25lckFkZHJlc3MgPSAoXG4gIHY6IFZhbGlkYXRvclxuKTogVmFsaWRhdG9yICYgeyBzaWduZXJBZGRyZXNzOiBzdHJpbmcgfSA9PiB7XG4gIGNvbnN0IGRlY29kZWQgPSB2LmNvbnNlbnN1c1B1YmtleSAmJiBQdWJLZXkuZGVjb2RlKHYuY29uc2Vuc3VzUHVia2V5LnZhbHVlKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRlY29kZWQgJiYgcHVia2V5VG9BZGRyZXNzKFwiZWQyNTUxOVwiLCBkZWNvZGVkLmtleSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi52LFxuICAgIHNpZ25lckFkZHJlc3M6XG4gICAgICAoYWRkcmVzcyAmJiB0b0JlY2gzMihcImt1amlyYXZhbGNvbnNcIiwgZnJvbUhleChhZGRyZXNzKSkpIHx8IFwiXCIsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInNldFNpZ25lckFkZHJlc3MiLCJ2IiwiZGVjb2RlZCIsImNvbnNlbnN1c1B1YmtleSIsIlB1YktleSIsImRlY29kZSIsInZhbHVlIiwiYWRkcmVzcyIsInB1YmtleVRvQWRkcmVzcyIsImtleSIsInNpZ25lckFkZHJlc3MiLCJ0b0JlY2gzMiIsImZyb21IZXgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBS2FBOzs7ZUFBQUE7OzswQkFMcUI7K0JBQ0Y7c0JBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2hCLE1BQU1BLG1CQUFtQixDQUM5QkM7SUFFQSxNQUFNQyxVQUFVRCxFQUFFRSxlQUFlLElBQUlDLFlBQU0sQ0FBQ0MsTUFBTSxDQUFDSixFQUFFRSxlQUFlLENBQUNHLEtBQUs7SUFDMUUsTUFBTUMsVUFBVUwsV0FBV00sSUFBQUEsOEJBQWUsRUFBQyxXQUFXTixRQUFRTyxHQUFHO0lBRWpFLE9BQU8sd0NBQ0ZSO1FBQ0hTLGVBQ0UsQUFBQ0gsV0FBV0ksSUFBQUEsa0JBQVEsRUFBQyxpQkFBaUJDLElBQUFBLGlCQUFPLEVBQUNMLGFBQWM7O0FBRWxFIn0=
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
    auctions: function() {
        return _auctions;
    },
    registrar: function() {
        return _registrar;
    },
    registry: function() {
        return _registry;
    }
});
const _auctions = /*#__PURE__*/ _interop_require_wildcard(require("./auctions"));
const _registrar = /*#__PURE__*/ _interop_require_wildcard(require("./registrar"));
const _registry = /*#__PURE__*/ _interop_require_wildcard(require("./registry"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9rbnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogYXMgYXVjdGlvbnMgZnJvbSBcIi4vYXVjdGlvbnNcIjtcbmV4cG9ydCAqIGFzIHJlZ2lzdHJhciBmcm9tIFwiLi9yZWdpc3RyYXJcIjtcbmV4cG9ydCAqIGFzIHJlZ2lzdHJ5IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG4iXSwibmFtZXMiOlsiYXVjdGlvbnMiLCJyZWdpc3RyYXIiLCJyZWdpc3RyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBWUEsUUFBUTs7O0lBQ1JDLFNBQVM7OztJQUNUQyxRQUFROzs7O2tFQUZNO21FQUNDO2tFQUNEIn0=
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
    MsgClientImpl: function() {
        return MsgClientImpl;
    },
    protobufPackage: function() {
        return protobufPackage;
    }
});
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
const protobufPackage = "kujira.cwica";
class MsgClientImpl {
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvY3dpY2EvdHlwZXMvdHgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnBjIH0gZnJvbSBcImNvc21qcy10eXBlcy9oZWxwZXJzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuY3dpY2FcIjtcbi8qKiBNc2cgZGVmaW5lcyB0aGUgY3dpY2EgTXNnIHNlcnZpY2UuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZyB7fVxuZXhwb3J0IGNsYXNzIE1zZ0NsaWVudEltcGwgaW1wbGVtZW50cyBNc2cge1xuICBwcml2YXRlIHJlYWRvbmx5IHJwYzogUnBjO1xuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTXNnQ2xpZW50SW1wbCIsInByb3RvYnVmUGFja2FnZSIsImNvbnN0cnVjdG9yIiwicnBjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1hQSxhQUFhO2VBQWJBOztJQUhBQyxlQUFlO2VBQWZBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sTUFBTUEsa0JBQWtCO0FBR3hCLE1BQU1EO0lBRVhFLFlBQVlDLEdBQVEsQ0FBRTtRQUR0Qix1QkFBaUJBLE9BQWpCLEtBQUE7UUFFRSxJQUFJLENBQUNBLEdBQUcsR0FBR0E7SUFDYjtBQUNGIn0=
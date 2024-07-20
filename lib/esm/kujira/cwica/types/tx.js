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
/* eslint-disable */ export const protobufPackage = "kujira.cwica";
export class MsgClientImpl {
    constructor(rpc){
        _define_property(this, "rpc", void 0);
        this.rpc = rpc;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9rdWppcmEvY3dpY2EvdHlwZXMvdHgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnBjIH0gZnJvbSBcImNvc21qcy10eXBlcy9oZWxwZXJzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgY29uc3QgcHJvdG9idWZQYWNrYWdlID0gXCJrdWppcmEuY3dpY2FcIjtcbi8qKiBNc2cgZGVmaW5lcyB0aGUgY3dpY2EgTXNnIHNlcnZpY2UuICovXG5leHBvcnQgaW50ZXJmYWNlIE1zZyB7fVxuZXhwb3J0IGNsYXNzIE1zZ0NsaWVudEltcGwgaW1wbGVtZW50cyBNc2cge1xuICBwcml2YXRlIHJlYWRvbmx5IHJwYzogUnBjO1xuICBjb25zdHJ1Y3RvcihycGM6IFJwYykge1xuICAgIHRoaXMucnBjID0gcnBjO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJvdG9idWZQYWNrYWdlIiwiTXNnQ2xpZW50SW1wbCIsImNvbnN0cnVjdG9yIiwicnBjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsa0JBQWtCLEdBQ2xCLE9BQU8sTUFBTUEsa0JBQWtCLGVBQWU7QUFHOUMsT0FBTyxNQUFNQztJQUVYQyxZQUFZQyxHQUFRLENBQUU7UUFEdEIsdUJBQWlCQSxPQUFqQixLQUFBO1FBRUUsSUFBSSxDQUFDQSxHQUFHLEdBQUdBO0lBQ2I7QUFDRiJ9
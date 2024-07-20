function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
export class RegistryQueryClient {
    constructor(client, contractAddress){
        _define_property(this, "client", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "addr", function() {
            var _ref = _async_to_generator(function*({ name, prefix }) {
                return _this.client.queryContractSmart(_this.contractAddress, {
                    addr: {
                        name,
                        prefix
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this1 = this;
        _define_property(this, "kujiraAddr", function() {
            var _ref = _async_to_generator(function*({ addr }) {
                return _this1.client.queryContractSmart(_this1.contractAddress, {
                    kujira_addr: {
                        addr
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        _define_property(this, "name", function() {
            var _ref = _async_to_generator(function*({ addr }) {
                return _this2.client.queryContractSmart(_this2.contractAddress, {
                    name: {
                        addr
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "record", function() {
            var _ref = _async_to_generator(function*({ name }) {
                return _this3.client.queryContractSmart(_this3.contractAddress, {
                    record: {
                        name
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "resolver", function() {
            var _ref = _async_to_generator(function*({ name }) {
                return _this4.client.queryContractSmart(_this4.contractAddress, {
                    resolver: {
                        name
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        this.client = client;
        this.contractAddress = contractAddress;
        this.addr = this.addr.bind(this);
        this.kujiraAddr = this.kujiraAddr.bind(this);
        this.name = this.name.bind(this);
        this.record = this.record.bind(this);
        this.resolver = this.resolver.bind(this);
    }
}
export class RegistryClient extends RegistryQueryClient {
    constructor(client, sender, contractAddress){
        super(client, contractAddress);
        _define_property(this, "client", void 0);
        _define_property(this, "sender", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "setResolver", function() {
            var _ref = _async_to_generator(function*({ admin, allowedKinds, name }, fee = "auto", memo, funds) {
                return yield _this.client.execute(_this.sender, _this.contractAddress, {
                    set_resolver: {
                        admin,
                        allowed_kinds: allowedKinds,
                        name
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this1 = this;
        _define_property(this, "removeResolver", function() {
            var _ref = _async_to_generator(function*({ name }, fee = "auto", memo, funds) {
                return yield _this1.client.execute(_this1.sender, _this1.contractAddress, {
                    remove_resolver: {
                        name
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        _define_property(this, "setRecord", function() {
            var _ref = _async_to_generator(function*({ data, kind, name }, fee = "auto", memo, funds) {
                return yield _this2.client.execute(_this2.sender, _this2.contractAddress, {
                    set_record: {
                        data,
                        kind,
                        name
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "removeRecord", function() {
            var _ref = _async_to_generator(function*({ name }, fee = "auto", memo, funds) {
                return yield _this3.client.execute(_this3.sender, _this3.contractAddress, {
                    remove_record: {
                        name
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "setKujiraAddr", function() {
            var _ref = _async_to_generator(function*({ name }, fee = "auto", memo, funds) {
                return yield _this4.client.execute(_this4.sender, _this4.contractAddress, {
                    set_kujira_addr: {
                        name
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.setResolver = this.setResolver.bind(this);
        this.removeResolver = this.removeResolver.bind(this);
        this.setRecord = this.setRecord.bind(this);
        this.removeRecord = this.removeRecord.bind(this);
        this.setKujiraAddr = this.setKujiraAddr.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9rbnMvcmVnaXN0cnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29zbVdhc21DbGllbnQsXG4gIFNpZ25pbmdDb3NtV2FzbUNsaWVudCxcbiAgRXhlY3V0ZVJlc3VsdCxcbn0gZnJvbSBcIkBjb3NtanMvY29zbXdhc20tc3RhcmdhdGVcIjtcbmltcG9ydCB7IENvaW4sIFN0ZEZlZSB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFudGlhdGVNc2cge1xuICBpbnRlcm5hbF9yZXNvbHZlcjogc3RyaW5nO1xufVxuZXhwb3J0IHR5cGUgRXhlY3V0ZU1zZyA9XG4gIHwge1xuICAgICAgc2V0X3Jlc29sdmVyOiB7XG4gICAgICAgIGFkbWluOiBzdHJpbmc7XG4gICAgICAgIGFsbG93ZWRfa2luZHM6IFJlY29yZEtpbmRbXTtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgcmVtb3ZlX3Jlc29sdmVyOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIHNldF9yZWNvcmQ6IHtcbiAgICAgICAgZGF0YTogc3RyaW5nO1xuICAgICAgICBraW5kOiBSZWNvcmRLaW5kO1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICByZW1vdmVfcmVjb3JkOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIHNldF9rdWppcmFfYWRkcjoge1xuICAgICAgICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAgIH07XG4gICAgfTtcbmV4cG9ydCB0eXBlIFJlY29yZEtpbmQgPVxuICB8IFwiZG9tYWluXCJcbiAgfCBcImlwZnNcIlxuICB8IFwiaXA0XCJcbiAgfCBcImlwNlwiXG4gIHwgXCJrdWppcmFfYWRkclwiXG4gIHwgXCJyZXZlcnNlXCI7XG5leHBvcnQgdHlwZSBRdWVyeU1zZyA9XG4gIHwge1xuICAgICAgYWRkcjoge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIHByZWZpeD86IHN0cmluZyB8IG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICBrdWppcmFfYWRkcjoge1xuICAgICAgICBhZGRyOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICBuYW1lOiB7XG4gICAgICAgIGFkZHI6IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIHJlY29yZDoge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICByZXNvbHZlcjoge1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH07XG5leHBvcnQgaW50ZXJmYWNlIEFkZHJSZXNwb25zZSB7XG4gIGFkZHI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTmFtZVJlc3BvbnNlIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRSZXNwb25zZSB7XG4gIGRhdGE6IHN0cmluZztcbiAga2luZDogUmVjb3JkS2luZDtcbiAgbmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlclJlc3BvbnNlIHtcbiAgYWRtaW46IHN0cmluZztcbiAgYWxsb3dlZF9raW5kczogUmVjb3JkS2luZFtdO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0cnlSZWFkT25seUludGVyZmFjZSB7XG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xuICBhZGRyOiAoe1xuICAgIG5hbWUsXG4gICAgcHJlZml4LFxuICB9OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHByZWZpeD86IHN0cmluZztcbiAgfSkgPT4gUHJvbWlzZTxBZGRyUmVzcG9uc2U+O1xuICBrdWppcmFBZGRyOiAoeyBhZGRyIH06IHsgYWRkcjogc3RyaW5nIH0pID0+IFByb21pc2U8TmFtZVJlc3BvbnNlPjtcbiAgbmFtZTogKHsgYWRkciB9OiB7IGFkZHI6IHN0cmluZyB9KSA9PiBQcm9taXNlPE5hbWVSZXNwb25zZT47XG4gIHJlY29yZDogKHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KSA9PiBQcm9taXNlPFJlY29yZFJlc3BvbnNlPjtcbiAgcmVzb2x2ZXI6ICh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkgPT4gUHJvbWlzZTxSZXNvbHZlclJlc3BvbnNlPjtcbn1cbmV4cG9ydCBjbGFzcyBSZWdpc3RyeVF1ZXJ5Q2xpZW50IGltcGxlbWVudHMgUmVnaXN0cnlSZWFkT25seUludGVyZmFjZSB7XG4gIGNsaWVudDogQ29zbVdhc21DbGllbnQ7XG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNsaWVudDogQ29zbVdhc21DbGllbnQsIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5jb250cmFjdEFkZHJlc3MgPSBjb250cmFjdEFkZHJlc3M7XG4gICAgdGhpcy5hZGRyID0gdGhpcy5hZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rdWppcmFBZGRyID0gdGhpcy5rdWppcmFBZGRyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWNvcmQgPSB0aGlzLnJlY29yZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGRyID0gYXN5bmMgKHtcbiAgICBuYW1lLFxuICAgIHByZWZpeCxcbiAgfToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwcmVmaXg/OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPEFkZHJSZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIGFkZHI6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJlZml4LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAga3VqaXJhQWRkciA9IGFzeW5jICh7IGFkZHIgfTogeyBhZGRyOiBzdHJpbmcgfSk6IFByb21pc2U8TmFtZVJlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAga3VqaXJhX2FkZHI6IHtcbiAgICAgICAgYWRkcixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIG5hbWUgPSBhc3luYyAoeyBhZGRyIH06IHsgYWRkcjogc3RyaW5nIH0pOiBQcm9taXNlPE5hbWVSZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgYWRkcixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIHJlY29yZCA9IGFzeW5jICh7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSk6IFByb21pc2U8UmVjb3JkUmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KHRoaXMuY29udHJhY3RBZGRyZXNzLCB7XG4gICAgICByZWNvcmQ6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIHJlc29sdmVyID0gYXN5bmMgKHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KTogUHJvbWlzZTxSZXNvbHZlclJlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgcmVzb2x2ZXI6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdHJ5SW50ZXJmYWNlIGV4dGVuZHMgUmVnaXN0cnlSZWFkT25seUludGVyZmFjZSB7XG4gIGNvbnRyYWN0QWRkcmVzczogc3RyaW5nO1xuICBzZW5kZXI6IHN0cmluZztcbiAgc2V0UmVzb2x2ZXI6IChcbiAgICB7XG4gICAgICBhZG1pbixcbiAgICAgIGFsbG93ZWRLaW5kcyxcbiAgICAgIG5hbWUsXG4gICAgfToge1xuICAgICAgYWRtaW46IHN0cmluZztcbiAgICAgIGFsbG93ZWRLaW5kczogUmVjb3JkS2luZFtdO1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlPzogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApID0+IFByb21pc2U8RXhlY3V0ZVJlc3VsdD47XG4gIHJlbW92ZVJlc29sdmVyOiAoXG4gICAge1xuICAgICAgbmFtZSxcbiAgICB9OiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgc2V0UmVjb3JkOiAoXG4gICAge1xuICAgICAgZGF0YSxcbiAgICAgIGtpbmQsXG4gICAgICBuYW1lLFxuICAgIH06IHtcbiAgICAgIGRhdGE6IHN0cmluZztcbiAgICAgIGtpbmQ6IFJlY29yZEtpbmQ7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgcmVtb3ZlUmVjb3JkOiAoXG4gICAge1xuICAgICAgbmFtZSxcbiAgICB9OiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgc2V0S3VqaXJhQWRkcjogKFxuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgfToge1xuICAgICAgbmFtZT86IHN0cmluZztcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xufVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJ5Q2xpZW50XG4gIGV4dGVuZHMgUmVnaXN0cnlRdWVyeUNsaWVudFxuICBpbXBsZW1lbnRzIFJlZ2lzdHJ5SW50ZXJmYWNlXG57XG4gIGNsaWVudDogU2lnbmluZ0Nvc21XYXNtQ2xpZW50O1xuICBzZW5kZXI6IHN0cmluZztcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2xpZW50OiBTaWduaW5nQ29zbVdhc21DbGllbnQsXG4gICAgc2VuZGVyOiBzdHJpbmcsXG4gICAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoY2xpZW50LCBjb250cmFjdEFkZHJlc3MpO1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuc2VuZGVyID0gc2VuZGVyO1xuICAgIHRoaXMuY29udHJhY3RBZGRyZXNzID0gY29udHJhY3RBZGRyZXNzO1xuICAgIHRoaXMuc2V0UmVzb2x2ZXIgPSB0aGlzLnNldFJlc29sdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVSZXNvbHZlciA9IHRoaXMucmVtb3ZlUmVzb2x2ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFJlY29yZCA9IHRoaXMuc2V0UmVjb3JkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVSZWNvcmQgPSB0aGlzLnJlbW92ZVJlY29yZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0S3VqaXJhQWRkciA9IHRoaXMuc2V0S3VqaXJhQWRkci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0UmVzb2x2ZXIgPSBhc3luYyAoXG4gICAge1xuICAgICAgYWRtaW4sXG4gICAgICBhbGxvd2VkS2luZHMsXG4gICAgICBuYW1lLFxuICAgIH06IHtcbiAgICAgIGFkbWluOiBzdHJpbmc7XG4gICAgICBhbGxvd2VkS2luZHM6IFJlY29yZEtpbmRbXTtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgc2V0X3Jlc29sdmVyOiB7XG4gICAgICAgICAgYWRtaW4sXG4gICAgICAgICAgYWxsb3dlZF9raW5kczogYWxsb3dlZEtpbmRzLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgcmVtb3ZlUmVzb2x2ZXIgPSBhc3luYyAoXG4gICAge1xuICAgICAgbmFtZSxcbiAgICB9OiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIHJlbW92ZV9yZXNvbHZlcjoge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgc2V0UmVjb3JkID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIGRhdGEsXG4gICAgICBraW5kLFxuICAgICAgbmFtZSxcbiAgICB9OiB7XG4gICAgICBkYXRhOiBzdHJpbmc7XG4gICAgICBraW5kOiBSZWNvcmRLaW5kO1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICBzZXRfcmVjb3JkOiB7XG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBraW5kLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgcmVtb3ZlUmVjb3JkID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgfToge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICByZW1vdmVfcmVjb3JkOiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xuICBzZXRLdWppcmFBZGRyID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIG5hbWUsXG4gICAgfToge1xuICAgICAgbmFtZT86IHN0cmluZztcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgc2V0X2t1amlyYV9hZGRyOiB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlZ2lzdHJ5UXVlcnlDbGllbnQiLCJjb25zdHJ1Y3RvciIsImNsaWVudCIsImNvbnRyYWN0QWRkcmVzcyIsImFkZHIiLCJuYW1lIiwicHJlZml4IiwicXVlcnlDb250cmFjdFNtYXJ0Iiwia3VqaXJhQWRkciIsImt1amlyYV9hZGRyIiwicmVjb3JkIiwicmVzb2x2ZXIiLCJiaW5kIiwiUmVnaXN0cnlDbGllbnQiLCJzZW5kZXIiLCJzZXRSZXNvbHZlciIsImFkbWluIiwiYWxsb3dlZEtpbmRzIiwiZmVlIiwibWVtbyIsImZ1bmRzIiwiZXhlY3V0ZSIsInNldF9yZXNvbHZlciIsImFsbG93ZWRfa2luZHMiLCJyZW1vdmVSZXNvbHZlciIsInJlbW92ZV9yZXNvbHZlciIsInNldFJlY29yZCIsImRhdGEiLCJraW5kIiwic2V0X3JlY29yZCIsInJlbW92ZVJlY29yZCIsInJlbW92ZV9yZWNvcmQiLCJzZXRLdWppcmFBZGRyIiwic2V0X2t1amlyYV9hZGRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5R0EsT0FBTyxNQUFNQTtJQUlYQyxZQUFZQyxNQUFzQixFQUFFQyxlQUF1QixDQUFFO1FBSDdERCx1QkFBQUEsVUFBQUEsS0FBQUE7UUFDQUMsdUJBQUFBLG1CQUFBQSxLQUFBQTs7UUFZQUMsdUJBQUFBO3VCQUFPLG9CQUFBLFVBQU8sRUFDWkMsSUFBSSxFQUNKQyxNQUFNLEVBSVA7Z0JBQ0MsT0FBTyxNQUFLSixNQUFNLENBQUNLLGtCQUFrQixDQUFDLE1BQUtKLGVBQWUsRUFBRTtvQkFDMURDLE1BQU07d0JBQ0pDO3dCQUNBQztvQkFDRjtnQkFDRjtZQUNGOzs7Ozs7UUFDQUUsdUJBQUFBO3VCQUFhLG9CQUFBLFVBQU8sRUFBRUosSUFBSSxFQUFvQjtnQkFDNUMsT0FBTyxPQUFLRixNQUFNLENBQUNLLGtCQUFrQixDQUFDLE9BQUtKLGVBQWUsRUFBRTtvQkFDMURNLGFBQWE7d0JBQ1hMO29CQUNGO2dCQUNGO1lBQ0Y7Ozs7OztRQUNBQyx1QkFBQUE7dUJBQU8sb0JBQUEsVUFBTyxFQUFFRCxJQUFJLEVBQW9CO2dCQUN0QyxPQUFPLE9BQUtGLE1BQU0sQ0FBQ0ssa0JBQWtCLENBQUMsT0FBS0osZUFBZSxFQUFFO29CQUMxREUsTUFBTTt3QkFDSkQ7b0JBQ0Y7Z0JB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
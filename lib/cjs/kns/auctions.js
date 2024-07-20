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
    AuctionsClient: function() {
        return AuctionsClient;
    },
    AuctionsQueryClient: function() {
        return AuctionsQueryClient;
    }
});
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
class AuctionsQueryClient {
    constructor(client, contractAddress){
        _define_property(this, "client", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "bidsByDomain", function() {
            var _ref = _async_to_generator(function*({ domain, limit, startAfter }) {
                return _this.client.queryContractSmart(_this.contractAddress, {
                    bids_by_domain: {
                        domain,
                        limit,
                        start_after: startAfter
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this1 = this;
        _define_property(this, "bidsByBidder", function() {
            var _ref = _async_to_generator(function*({ bidder, limit, startAfter }) {
                return _this1.client.queryContractSmart(_this1.contractAddress, {
                    bids_by_bidder: {
                        bidder,
                        limit,
                        start_after: startAfter
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        _define_property(this, "auction", function() {
            var _ref = _async_to_generator(function*({ domain }) {
                return _this2.client.queryContractSmart(_this2.contractAddress, {
                    auction: {
                        domain
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "auctions", function() {
            var _ref = _async_to_generator(function*({ limit, startAfter, state }) {
                return _this3.client.queryContractSmart(_this3.contractAddress, {
                    auctions: {
                        limit,
                        start_after: startAfter,
                        state
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "config", /*#__PURE__*/ _async_to_generator(function*() {
            return _this4.client.queryContractSmart(_this4.contractAddress, {
                config: {}
            });
        }));
        this.client = client;
        this.contractAddress = contractAddress;
        this.bidsByDomain = this.bidsByDomain.bind(this);
        this.bidsByBidder = this.bidsByBidder.bind(this);
        this.auction = this.auction.bind(this);
        this.auctions = this.auctions.bind(this);
        this.config = this.config.bind(this);
    }
}
class AuctionsClient extends AuctionsQueryClient {
    constructor(client, sender, contractAddress){
        super(client, contractAddress);
        _define_property(this, "client", void 0);
        _define_property(this, "sender", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "placeBid", function() {
            var _ref = _async_to_generator(function*({ domain }, fee = "auto", memo, funds) {
                return yield _this.client.execute(_this.sender, _this.contractAddress, {
                    place_bid: {
                        domain
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this1 = this;
        _define_property(this, "increaseBid", function() {
            var _ref = _async_to_generator(function*({ domain }, fee = "auto", memo, funds) {
                return yield _this1.client.execute(_this1.sender, _this1.contractAddress, {
                    increase_bid: {
                        domain
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        _define_property(this, "withdrawBid", function() {
            var _ref = _async_to_generator(function*({ domain }, fee = "auto", memo, funds) {
                return yield _this2.client.execute(_this2.sender, _this2.contractAddress, {
                    withdraw_bid: {
                        domain
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "claimAuction", function() {
            var _ref = _async_to_generator(function*({ domain }, fee = "auto", memo, funds) {
                return yield _this3.client.execute(_this3.sender, _this3.contractAddress, {
                    claim_auction: {
                        domain
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "openAuction", /*#__PURE__*/ _async_to_generator(function*(fee = "auto", memo, funds) {
            return yield _this4.client.execute(_this4.sender, _this4.contractAddress, {
                open_auction: {}
            }, fee, memo, funds);
        }));
        var _this5 = this;
        _define_property(this, "configure", function() {
            var _ref = _async_to_generator(function*({ admin, canBid, denom, depositDuration, maxOpen, openDuration, registrar }, fee = "auto", memo, funds) {
                return yield _this5.client.execute(_this5.sender, _this5.contractAddress, {
                    configure: {
                        admin,
                        can_bid: canBid,
                        denom,
                        deposit_duration: depositDuration,
                        max_open: maxOpen,
                        open_duration: openDuration,
                        registrar
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
        this.placeBid = this.placeBid.bind(this);
        this.increaseBid = this.increaseBid.bind(this);
        this.withdrawBid = this.withdrawBid.bind(this);
        this.claimAuction = this.claimAuction.bind(this);
        this.openAuction = this.openAuction.bind(this);
        this.configure = this.configure.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9rbnMvYXVjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29zbVdhc21DbGllbnQsXG4gIFNpZ25pbmdDb3NtV2FzbUNsaWVudCxcbiAgRXhlY3V0ZVJlc3VsdCxcbn0gZnJvbSBcIkBjb3NtanMvY29zbXdhc20tc3RhcmdhdGVcIjtcbmltcG9ydCB7IENvaW4sIFN0ZEZlZSB9IGZyb20gXCJAY29zbWpzL2FtaW5vXCI7XG5cbmltcG9ydCB7IEFkZHIgfSBmcm9tIFwiLi9jb21tb25cIjtcblxuZXhwb3J0IHR5cGUgVWludDY0ID0gc3RyaW5nO1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW50aWF0ZU1zZyB7XG4gIGNhbl9iaWQ6IGJvb2xlYW47XG4gIGRlbm9tOiBzdHJpbmc7XG4gIGRlcG9zaXRfZHVyYXRpb246IFVpbnQ2NDtcbiAgbWF4X29wZW46IFVpbnQ2NDtcbiAgb3Blbl9kdXJhdGlvbjogVWludDY0O1xuICByZWdpc3RyYXI6IHN0cmluZztcbn1cbmV4cG9ydCB0eXBlIEV4ZWN1dGVNc2cgPVxuICB8IHtcbiAgICAgIHBsYWNlX2JpZDoge1xuICAgICAgICBkb21haW46IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGluY3JlYXNlX2JpZDoge1xuICAgICAgICBkb21haW46IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIHdpdGhkcmF3X2JpZDoge1xuICAgICAgICBkb21haW46IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGNsYWltX2F1Y3Rpb246IHtcbiAgICAgICAgZG9tYWluOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICBvcGVuX2F1Y3Rpb246IHt9O1xuICAgIH1cbiAgfCB7XG4gICAgICBjb25maWd1cmU6IHtcbiAgICAgICAgYWRtaW4/OiBzdHJpbmcgfCBudWxsO1xuICAgICAgICBjYW5fYmlkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgICAgIGRlbm9tPzogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgZGVwb3NpdF9kdXJhdGlvbj86IFVpbnQ2NCB8IG51bGw7XG4gICAgICAgIG1heF9vcGVuPzogVWludDY0IHwgbnVsbDtcbiAgICAgICAgb3Blbl9kdXJhdGlvbj86IFVpbnQ2NCB8IG51bGw7XG4gICAgICAgIHJlZ2lzdHJhcj86IHN0cmluZyB8IG51bGw7XG4gICAgICB9O1xuICAgIH07XG5leHBvcnQgdHlwZSBRdWVyeU1zZyA9XG4gIHwge1xuICAgICAgYmlkc19ieV9kb21haW46IHtcbiAgICAgICAgZG9tYWluOiBzdHJpbmc7XG4gICAgICAgIGxpbWl0PzogVWludDY0IHwgbnVsbDtcbiAgICAgICAgc3RhcnRfYWZ0ZXI/OiBVaW50MTI4IHwgbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGJpZHNfYnlfYmlkZGVyOiB7XG4gICAgICAgIGJpZGRlcjogc3RyaW5nO1xuICAgICAgICBsaW1pdD86IFVpbnQ2NCB8IG51bGw7XG4gICAgICAgIHN0YXJ0X2FmdGVyPzogVWludDEyOCB8IG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICBhdWN0aW9uOiB7XG4gICAgICAgIGRvbWFpbjogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgYXVjdGlvbnM6IHtcbiAgICAgICAgbGltaXQ/OiBVaW50NjQgfCBudWxsO1xuICAgICAgICBzdGFydF9hZnRlcj86IHN0cmluZyB8IG51bGw7XG4gICAgICAgIHN0YXRlPzogc3RyaW5nIHwgbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGNvbmZpZzoge307XG4gICAgfTtcbmV4cG9ydCB0eXBlIFVpbnQxMjggPSBzdHJpbmc7XG5leHBvcnQgaW50ZXJmYWNlIEF1Y3Rpb24ge1xuICBiaWRfaWQ6IFVpbnQxMjg7XG4gIGRlcG9zaXRfc3RhcnQ6IFVpbnQ2NDtcbiAgZG9tYWluOiBzdHJpbmc7XG4gIGlkOiBVaW50MTI4O1xuICBvcGVuX3N0YXJ0PzogVWludDY0IHwgbnVsbDtcbiAgdG90YWw6IFVpbnQxMjg7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1Y3Rpb25zUmVzcG9uc2Uge1xuICBhdWN0aW9uczogQXVjdGlvbltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBCaWRzUmVzcG9uc2Uge1xuICBiaWRzOiBCaWRbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmlkIHtcbiAgYW1vdW50OiBVaW50MTI4O1xuICBhdWN0aW9uX2lkOiBVaW50MTI4O1xuICBiaWRkZXI6IEFkZHI7XG4gIGlkOiBVaW50MTI4O1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25maWdSZXNwb25zZSB7XG4gIGFkbWluOiBzdHJpbmc7XG4gIGNhbl9iaWQ6IGJvb2xlYW47XG4gIGRlbm9tOiBzdHJpbmc7XG4gIGRlcG9zaXRfZHVyYXRpb246IFVpbnQ2NDtcbiAgbWF4X29wZW46IFVpbnQ2NDtcbiAgb3Blbl9kdXJhdGlvbjogVWludDY0O1xuICByZWdpc3RyYXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdWN0aW9uc1JlYWRPbmx5SW50ZXJmYWNlIHtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gIGJpZHNCeURvbWFpbjogKHtcbiAgICBkb21haW4sXG4gICAgbGltaXQsXG4gICAgc3RhcnRBZnRlcixcbiAgfToge1xuICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIGxpbWl0PzogVWludDY0O1xuICAgIHN0YXJ0QWZ0ZXI/OiBVaW50MTI4O1xuICB9KSA9PiBQcm9taXNlPEJpZHNSZXNwb25zZT47XG4gIGJpZHNCeUJpZGRlcjogKHtcbiAgICBiaWRkZXIsXG4gICAgbGltaXQsXG4gICAgc3RhcnRBZnRlcixcbiAgfToge1xuICAgIGJpZGRlcjogc3RyaW5nO1xuICAgIGxpbWl0PzogVWludDY0O1xuICAgIHN0YXJ0QWZ0ZXI/OiBVaW50MTI4O1xuICB9KSA9PiBQcm9taXNlPEJpZHNSZXNwb25zZT47XG4gIGF1Y3Rpb246ICh7IGRvbWFpbiB9OiB7IGRvbWFpbjogc3RyaW5nIH0pID0+IFByb21pc2U8QXVjdGlvbj47XG4gIGF1Y3Rpb25zOiAoe1xuICAgIGxpbWl0LFxuICAgIHN0YXJ0QWZ0ZXIsXG4gICAgc3RhdGUsXG4gIH06IHtcbiAgICBsaW1pdD86IFVpbnQ2NDtcbiAgICBzdGFydEFmdGVyPzogc3RyaW5nO1xuICAgIHN0YXRlPzogc3RyaW5nO1xuICB9KSA9PiBQcm9taXNlPEF1Y3Rpb25zUmVzcG9uc2U+O1xuICBjb25maWc6ICgpID0+IFByb21pc2U8Q29uZmlnUmVzcG9uc2U+O1xufVxuZXhwb3J0IGNsYXNzIEF1Y3Rpb25zUXVlcnlDbGllbnQgaW1wbGVtZW50cyBBdWN0aW9uc1JlYWRPbmx5SW50ZXJmYWNlIHtcbiAgY2xpZW50OiBDb3NtV2FzbUNsaWVudDtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY2xpZW50OiBDb3NtV2FzbUNsaWVudCwgY29udHJhY3RBZGRyZXNzOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyA9IGNvbnRyYWN0QWRkcmVzcztcbiAgICB0aGlzLmJpZHNCeURvbWFpbiA9IHRoaXMuYmlkc0J5RG9tYWluLmJpbmQodGhpcyk7XG4gICAgdGhpcy5iaWRzQnlCaWRkZXIgPSB0aGlzLmJpZHNCeUJpZGRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXVjdGlvbiA9IHRoaXMuYXVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXVjdGlvbnMgPSB0aGlzLmF1Y3Rpb25zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYmlkc0J5RG9tYWluID0gYXN5bmMgKHtcbiAgICBkb21haW4sXG4gICAgbGltaXQsXG4gICAgc3RhcnRBZnRlcixcbiAgfToge1xuICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIGxpbWl0PzogVWludDY0O1xuICAgIHN0YXJ0QWZ0ZXI/OiBVaW50MTI4O1xuICB9KTogUHJvbWlzZTxCaWRzUmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KHRoaXMuY29udHJhY3RBZGRyZXNzLCB7XG4gICAgICBiaWRzX2J5X2RvbWFpbjoge1xuICAgICAgICBkb21haW4sXG4gICAgICAgIGxpbWl0LFxuICAgICAgICBzdGFydF9hZnRlcjogc3RhcnRBZnRlcixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGJpZHNCeUJpZGRlciA9IGFzeW5jICh7XG4gICAgYmlkZGVyLFxuICAgIGxpbWl0LFxuICAgIHN0YXJ0QWZ0ZXIsXG4gIH06IHtcbiAgICBiaWRkZXI6IHN0cmluZztcbiAgICBsaW1pdD86IFVpbnQ2NDtcbiAgICBzdGFydEFmdGVyPzogVWludDEyODtcbiAgfSk6IFByb21pc2U8Qmlkc1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgYmlkc19ieV9iaWRkZXI6IHtcbiAgICAgICAgYmlkZGVyLFxuICAgICAgICBsaW1pdCxcbiAgICAgICAgc3RhcnRfYWZ0ZXI6IHN0YXJ0QWZ0ZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBhdWN0aW9uID0gYXN5bmMgKHsgZG9tYWluIH06IHsgZG9tYWluOiBzdHJpbmcgfSk6IFByb21pc2U8QXVjdGlvbj4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIGF1Y3Rpb246IHtcbiAgICAgICAgZG9tYWluLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgYXVjdGlvbnMgPSBhc3luYyAoe1xuICAgIGxpbWl0LFxuICAgIHN0YXJ0QWZ0ZXIsXG4gICAgc3RhdGUsXG4gIH06IHtcbiAgICBsaW1pdD86IFVpbnQ2NDtcbiAgICBzdGFydEFmdGVyPzogc3RyaW5nO1xuICAgIHN0YXRlPzogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxBdWN0aW9uc1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgYXVjdGlvbnM6IHtcbiAgICAgICAgbGltaXQsXG4gICAgICAgIHN0YXJ0X2FmdGVyOiBzdGFydEFmdGVyLFxuICAgICAgICBzdGF0ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbmZpZyA9IGFzeW5jICgpOiBQcm9taXNlPENvbmZpZ1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgY29uZmlnOiB7fSxcbiAgICB9KTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVjdGlvbnNJbnRlcmZhY2UgZXh0ZW5kcyBBdWN0aW9uc1JlYWRPbmx5SW50ZXJmYWNlIHtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBwbGFjZUJpZDogKFxuICAgIHtcbiAgICAgIGRvbWFpbixcbiAgICB9OiB7XG4gICAgICBkb21haW46IHN0cmluZztcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICBpbmNyZWFzZUJpZDogKFxuICAgIHtcbiAgICAgIGRvbWFpbixcbiAgICB9OiB7XG4gICAgICBkb21haW46IHN0cmluZztcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICB3aXRoZHJhd0JpZDogKFxuICAgIHtcbiAgICAgIGRvbWFpbixcbiAgICB9OiB7XG4gICAgICBkb21haW46IHN0cmluZztcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICBjbGFpbUF1Y3Rpb246IChcbiAgICB7XG4gICAgICBkb21haW4sXG4gICAgfToge1xuICAgICAgZG9tYWluOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgb3BlbkF1Y3Rpb246IChcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgY29uZmlndXJlOiAoXG4gICAge1xuICAgICAgYWRtaW4sXG4gICAgICBjYW5CaWQsXG4gICAgICBkZW5vbSxcbiAgICAgIGRlcG9zaXREdXJhdGlvbixcbiAgICAgIG1heE9wZW4sXG4gICAgICBvcGVuRHVyYXRpb24sXG4gICAgICByZWdpc3RyYXIsXG4gICAgfToge1xuICAgICAgYWRtaW4/OiBzdHJpbmc7XG4gICAgICBjYW5CaWQ/OiBib29sZWFuO1xuICAgICAgZGVub20/OiBzdHJpbmc7XG4gICAgICBkZXBvc2l0RHVyYXRpb24/OiBVaW50NjQ7XG4gICAgICBtYXhPcGVuPzogVWludDY0O1xuICAgICAgb3BlbkR1cmF0aW9uPzogVWludDY0O1xuICAgICAgcmVnaXN0cmFyPzogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlPzogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApID0+IFByb21pc2U8RXhlY3V0ZVJlc3VsdD47XG59XG5leHBvcnQgY2xhc3MgQXVjdGlvbnNDbGllbnRcbiAgZXh0ZW5kcyBBdWN0aW9uc1F1ZXJ5Q2xpZW50XG4gIGltcGxlbWVudHMgQXVjdGlvbnNJbnRlcmZhY2VcbntcbiAgY2xpZW50OiBTaWduaW5nQ29zbVdhc21DbGllbnQ7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjbGllbnQ6IFNpZ25pbmdDb3NtV2FzbUNsaWVudCxcbiAgICBzZW5kZXI6IHN0cmluZyxcbiAgICBjb250cmFjdEFkZHJlc3M6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihjbGllbnQsIGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XG4gICAgdGhpcy5jb250cmFjdEFkZHJlc3MgPSBjb250cmFjdEFkZHJlc3M7XG4gICAgdGhpcy5wbGFjZUJpZCA9IHRoaXMucGxhY2VCaWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlYXNlQmlkID0gdGhpcy5pbmNyZWFzZUJpZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMud2l0aGRyYXdCaWQgPSB0aGlzLndpdGhkcmF3QmlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGFpbUF1Y3Rpb24gPSB0aGlzLmNsYWltQXVjdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbkF1Y3Rpb24gPSB0aGlzLm9wZW5BdWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25maWd1cmUgPSB0aGlzLmNvbmZpZ3VyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcGxhY2VCaWQgPSBhc3luYyAoXG4gICAge1xuICAgICAgZG9tYWluLFxuICAgIH06IHtcbiAgICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICBwbGFjZV9iaWQ6IHtcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgaW5jcmVhc2VCaWQgPSBhc3luYyAoXG4gICAge1xuICAgICAgZG9tYWluLFxuICAgIH06IHtcbiAgICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICBpbmNyZWFzZV9iaWQ6IHtcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgd2l0aGRyYXdCaWQgPSBhc3luYyAoXG4gICAge1xuICAgICAgZG9tYWluLFxuICAgIH06IHtcbiAgICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICB3aXRoZHJhd19iaWQ6IHtcbiAgICAgICAgICBkb21haW4sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgY2xhaW1BdWN0aW9uID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIGRvbWFpbixcbiAgICB9OiB7XG4gICAgICBkb21haW46IHN0cmluZztcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgY2xhaW1fYXVjdGlvbjoge1xuICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xuICBvcGVuQXVjdGlvbiA9IGFzeW5jIChcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIG9wZW5fYXVjdGlvbjoge30sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgY29uZmlndXJlID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIGFkbWluLFxuICAgICAgY2FuQmlkLFxuICAgICAgZGVub20sXG4gICAgICBkZXBvc2l0RHVyYXRpb24sXG4gICAgICBtYXhPcGVuLFxuICAgICAgb3BlbkR1cmF0aW9uLFxuICAgICAgcmVnaXN0cmFyLFxuICAgIH06IHtcbiAgICAgIGFkbWluPzogc3RyaW5nO1xuICAgICAgY2FuQmlkPzogYm9vbGVhbjtcbiAgICAgIGRlbm9tPzogc3RyaW5nO1xuICAgICAgZGVwb3NpdER1cmF0aW9uPzogVWludDY0O1xuICAgICAgbWF4T3Blbj86IFVpbnQ2NDtcbiAgICAgIG9wZW5EdXJhdGlvbj86IFVpbnQ2NDtcbiAgICAgIHJlZ2lzdHJhcj86IHN0cmluZztcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgY29uZmlndXJlOiB7XG4gICAgICAgICAgYWRtaW4sXG4gICAgICAgICAgY2FuX2JpZDogY2FuQmlkLFxuICAgICAgICAgIGRlbm9tLFxuICAgICAgICAgIGRlcG9zaXRfZHVyYXRpb246IGRlcG9zaXREdXJhdGlvbixcbiAgICAgICAgICBtYXhfb3BlbjogbWF4T3BlbixcbiAgICAgICAgICBvcGVuX2R1cmF0aW9uOiBvcGVuRHVyYXRpb24sXG4gICAgICAgICAgcmVnaXN0cmFyLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlZSxcbiAgICAgIG1lbW8sXG4gICAgICBmdW5kc1xuICAgICk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiQXVjdGlvbnNDbGllbnQiLCJBdWN0aW9uc1F1ZXJ5Q2xpZW50IiwiY29uc3RydWN0b3IiLCJjbGllbnQiLCJjb250cmFjdEFkZHJlc3MiLCJiaWRzQnlEb21haW4iLCJkb21haW4iLCJsaW1pdCIsInN0YXJ0QWZ0ZXIiLCJxdWVyeUNvbnRyYWN0U21hcnQiLCJiaWRzX2J5X2RvbWFpbiIsInN0YXJ0X2FmdGVyIiwiYmlkc0J5QmlkZGVyIiwiYmlkZGVyIiwiYmlkc19ieV9iaWRkZXIiLCJhdWN0aW9uIiwiYXVjdGlvbnMiLCJzdGF0ZSIsImNvbmZpZyIsImJpbmQiLCJzZW5kZXIiLCJwbGFjZUJpZCIsImZlZSIsIm1lbW8iLCJmdW5kcyIsImV4ZWN1dGUiLCJwbGFjZV9iaWQiLCJpbmNyZWFzZUJpZCIsImluY3JlYXNlX2JpZCIsIndpdGhkcmF3QmlkIiwid2l0aGRyYXdfYmlkIiwiY2xhaW1BdWN0aW9uIiwiY2xhaW1fYXVjdGlvbiIsIm9wZW5BdWN0aW9uIiwib3Blbl9hdWN0aW9uIiwiY29uZmlndXJlIiwiYWRtaW4iLCJjYW5CaWQiLCJkZW5vbSIsImRlcG9zaXREdXJhdGlvbiIsIm1heE9wZW4iLCJvcGVuRHVyYXRpb24iLCJyZWdpc3RyYXIiLCJjYW5fYmlkIiwiZGVwb3NpdF9kdXJhdGlvbiIsIm1heF9vcGVuIiwib3Blbl9kdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUF1U2FBLGNBQWM7ZUFBZEE7O0lBckpBQyxtQkFBbUI7ZUFBbkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixN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
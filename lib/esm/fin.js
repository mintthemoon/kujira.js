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
export * from "./fin";
export * from "./fin/client";
export * from "./fin/margin";
export * from "./fin/pairs";
export * from "./fin/types";
export class FinQueryClient {
    constructor(client, contractAddress){
        _define_property(this, "client", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "config", /*#__PURE__*/ _async_to_generator(function*() {
            return _this.client.queryContractSmart(_this.contractAddress, {
                config: {}
            });
        }));
        var _this1 = this;
        _define_property(this, "simulation", function() {
            var _ref = _async_to_generator(function*({ offerAsset }) {
                return _this1.client.queryContractSmart(_this1.contractAddress, {
                    simulation: {
                        offer_asset: offerAsset
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        _define_property(this, "order", function() {
            var _ref = _async_to_generator(function*({ orderIdx }) {
                return _this2.client.queryContractSmart(_this2.contractAddress, {
                    order: {
                        order_idx: orderIdx
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "ordersByUser", function() {
            var _ref = _async_to_generator(function*({ address, limit, startAfter }) {
                return _this3.client.queryContractSmart(_this3.contractAddress, {
                    orders_by_user: {
                        address,
                        limit,
                        start_after: startAfter
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "price", function() {
            var _ref = _async_to_generator(function*({ price }) {
                return _this4.client.queryContractSmart(_this4.contractAddress, {
                    price: {
                        price
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this5 = this;
        _define_property(this, "book", function() {
            var _ref = _async_to_generator(function*({ limit, offset }) {
                return _this5.client.queryContractSmart(_this5.contractAddress, {
                    book: {
                        limit,
                        offset
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        this.client = client;
        this.contractAddress = contractAddress;
        this.config = this.config.bind(this);
        this.simulation = this.simulation.bind(this);
        this.order = this.order.bind(this);
        this.ordersByUser = this.ordersByUser.bind(this);
        this.price = this.price.bind(this);
        this.book = this.book.bind(this);
    }
}
export class FinClient extends FinQueryClient {
    constructor(client, sender, contractAddress){
        super(client, contractAddress);
        _define_property(this, "client", void 0);
        _define_property(this, "sender", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "receive", function() {
            var _ref = _async_to_generator(function*({ amount, msg, sender }, fee = "auto", memo, funds) {
                return yield _this.client.execute(_this.sender, _this.contractAddress, {
                    receive: {
                        amount,
                        msg,
                        sender
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this1 = this;
        _define_property(this, "launch", /*#__PURE__*/ _async_to_generator(function*(fee = "auto", memo, funds) {
            return yield _this1.client.execute(_this1.sender, _this1.contractAddress, {
                launch: {}
            }, fee, memo, funds);
        }));
        var _this2 = this;
        _define_property(this, "updateConfig", function() {
            var _ref = _async_to_generator(function*({ owner, pricePrecision }, fee = "auto", memo, funds) {
                return yield _this2.client.execute(_this2.sender, _this2.contractAddress, {
                    update_config: {
                        owner,
                        price_precision: pricePrecision
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "submitOrder", function() {
            var _ref = _async_to_generator(function*({ price }, fee = "auto", memo, funds) {
                return yield _this3.client.execute(_this3.sender, _this3.contractAddress, {
                    submit_order: {
                        price
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "swap", function() {
            var _ref = _async_to_generator(function*({ beliefPrice, maxSpread, offerAsset, to }, fee = "auto", memo, funds) {
                return yield _this4.client.execute(_this4.sender, _this4.contractAddress, {
                    swap: {
                        belief_price: beliefPrice,
                        max_spread: maxSpread,
                        offer_asset: offerAsset,
                        to
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this5 = this;
        _define_property(this, "retractOrder", function() {
            var _ref = _async_to_generator(function*({ amount, orderIdx }, fee = "auto", memo, funds) {
                return yield _this5.client.execute(_this5.sender, _this5.contractAddress, {
                    retract_order: {
                        amount,
                        order_idx: orderIdx
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this6 = this;
        _define_property(this, "retractOrders", function() {
            var _ref = _async_to_generator(function*({ orderIdxs }, fee = "auto", memo, funds) {
                return yield _this6.client.execute(_this6.sender, _this6.contractAddress, {
                    retract_orders: {
                        order_idxs: orderIdxs
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this7 = this;
        _define_property(this, "withdrawOrders", function() {
            var _ref = _async_to_generator(function*({ orderIdxs }, fee = "auto", memo, funds) {
                return yield _this7.client.execute(_this7.sender, _this7.contractAddress, {
                    withdraw_orders: {
                        order_idxs: orderIdxs
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
        this.receive = this.receive.bind(this);
        this.launch = this.launch.bind(this);
        this.updateConfig = this.updateConfig.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
        this.swap = this.swap.bind(this);
        this.retractOrder = this.retractOrder.bind(this);
        this.retractOrders = this.retractOrders.bind(this);
        this.withdrawOrders = this.withdrawOrders.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RkRmVlIH0gZnJvbSBcIkBjb3NtanMvYW1pbm9cIjtcbmltcG9ydCB7XG4gIENvc21XYXNtQ2xpZW50LFxuICBFeGVjdXRlUmVzdWx0LFxuICBTaWduaW5nQ29zbVdhc21DbGllbnQsXG59IGZyb20gXCJAY29zbWpzL2Nvc213YXNtLXN0YXJnYXRlXCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7XG4gIEFkZHIsXG4gIEFzc2V0LFxuICBCb29rUmVzcG9uc2UsXG4gIENvbmZpZ1Jlc3BvbnNlLFxuICBEZWNpbWFsLFxuICBGaW5SZWFkT25seUludGVyZmFjZSxcbiAgT3JkZXJSZXNwb25zZSxcbiAgT3JkZXJzUmVzcG9uc2UsXG4gIFByZWNpc2lvbixcbiAgUHJpY2VSZXNwb25zZSxcbiAgU2ltdWxhdGlvblJlc3BvbnNlLFxuICBVaW50MTI4LFxufSBmcm9tIFwiLi9maW4vdHlwZXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ZpblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZmluL2NsaWVudFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZmluL21hcmdpblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZmluL3BhaXJzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9maW4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIEZpblF1ZXJ5Q2xpZW50IGltcGxlbWVudHMgRmluUmVhZE9ubHlJbnRlcmZhY2Uge1xuICBjbGllbnQ6IENvc21XYXNtQ2xpZW50O1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihjbGllbnQ6IENvc21XYXNtQ2xpZW50LCBjb250cmFjdEFkZHJlc3M6IHN0cmluZykge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuY29udHJhY3RBZGRyZXNzID0gY29udHJhY3RBZGRyZXNzO1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpbXVsYXRpb24gPSB0aGlzLnNpbXVsYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9yZGVyID0gdGhpcy5vcmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JkZXJzQnlVc2VyID0gdGhpcy5vcmRlcnNCeVVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByaWNlID0gdGhpcy5wcmljZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm9vayA9IHRoaXMuYm9vay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29uZmlnID0gYXN5bmMgKCk6IFByb21pc2U8Q29uZmlnUmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KHRoaXMuY29udHJhY3RBZGRyZXNzLCB7XG4gICAgICBjb25maWc6IHt9LFxuICAgIH0pO1xuICB9O1xuICBzaW11bGF0aW9uID0gYXN5bmMgKHtcbiAgICBvZmZlckFzc2V0LFxuICB9OiB7XG4gICAgb2ZmZXJBc3NldDogQXNzZXQ7XG4gIH0pOiBQcm9taXNlPFNpbXVsYXRpb25SZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIHNpbXVsYXRpb246IHtcbiAgICAgICAgb2ZmZXJfYXNzZXQ6IG9mZmVyQXNzZXQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBvcmRlciA9IGFzeW5jICh7XG4gICAgb3JkZXJJZHgsXG4gIH06IHtcbiAgICBvcmRlcklkeDogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxPcmRlclJlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgb3JkZXI6IHtcbiAgICAgICAgb3JkZXJfaWR4OiBvcmRlcklkeCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIG9yZGVyc0J5VXNlciA9IGFzeW5jICh7XG4gICAgYWRkcmVzcyxcbiAgICBsaW1pdCxcbiAgICBzdGFydEFmdGVyLFxuICB9OiB7XG4gICAgYWRkcmVzczogc3RyaW5nO1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIHN0YXJ0QWZ0ZXI/OiBVaW50MTI4O1xuICB9KTogUHJvbWlzZTxPcmRlcnNSZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIG9yZGVyc19ieV91c2VyOiB7XG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIGxpbWl0LFxuICAgICAgICBzdGFydF9hZnRlcjogc3RhcnRBZnRlcixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIHByaWNlID0gYXN5bmMgKHsgcHJpY2UgfTogeyBwcmljZTogc3RyaW5nIH0pOiBQcm9taXNlPFByaWNlUmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KHRoaXMuY29udHJhY3RBZGRyZXNzLCB7XG4gICAgICBwcmljZToge1xuICAgICAgICBwcmljZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGJvb2sgPSBhc3luYyAoe1xuICAgIGxpbWl0LFxuICAgIG9mZnNldCxcbiAgfToge1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIG9mZnNldD86IG51bWJlcjtcbiAgfSk6IFByb21pc2U8Qm9va1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgYm9vazoge1xuICAgICAgICBsaW1pdCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRmluSW50ZXJmYWNlIGV4dGVuZHMgRmluUmVhZE9ubHlJbnRlcmZhY2Uge1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbiAgc2VuZGVyOiBzdHJpbmc7XG4gIHJlY2VpdmU6IChcbiAgICB7XG4gICAgICBhbW91bnQsXG4gICAgICBtc2csXG4gICAgICBzZW5kZXIsXG4gICAgfToge1xuICAgICAgYW1vdW50OiBzdHJpbmc7XG4gICAgICBtc2c6IHN0cmluZztcbiAgICAgIHNlbmRlcjogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlPzogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IHJlYWRvbmx5IENvaW5bXVxuICApID0+IFByb21pc2U8RXhlY3V0ZVJlc3VsdD47XG4gIGxhdW5jaDogKFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiByZWFkb25seSBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICB1cGRhdGVDb25maWc6IChcbiAgICB7XG4gICAgICBvd25lcixcbiAgICAgIHByaWNlUHJlY2lzaW9uLFxuICAgIH06IHtcbiAgICAgIG93bmVyPzogQWRkcjtcbiAgICAgIHByaWNlUHJlY2lzaW9uPzogUHJlY2lzaW9uO1xuICAgIH0sXG4gICAgZmVlPzogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IHJlYWRvbmx5IENvaW5bXVxuICApID0+IFByb21pc2U8RXhlY3V0ZVJlc3VsdD47XG4gIHN1Ym1pdE9yZGVyOiAoXG4gICAge1xuICAgICAgcHJpY2UsXG4gICAgfToge1xuICAgICAgcHJpY2U6IERlY2ltYWw7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogcmVhZG9ubHkgQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgc3dhcDogKFxuICAgIHtcbiAgICAgIGJlbGllZlByaWNlLFxuICAgICAgbWF4U3ByZWFkLFxuICAgICAgb2ZmZXJBc3NldCxcbiAgICAgIHRvLFxuICAgIH06IHtcbiAgICAgIGJlbGllZlByaWNlPzogRGVjaW1hbDtcbiAgICAgIG1heFNwcmVhZD86IERlY2ltYWw7XG4gICAgICBvZmZlckFzc2V0PzogQ29pbjtcbiAgICAgIHRvPzogQWRkcjtcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiByZWFkb25seSBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICByZXRyYWN0T3JkZXI6IChcbiAgICB7XG4gICAgICBhbW91bnQsXG4gICAgICBvcmRlcklkeCxcbiAgICB9OiB7XG4gICAgICBhbW91bnQ/OiBVaW50MTI4O1xuICAgICAgb3JkZXJJZHg6IFVpbnQxMjg7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogcmVhZG9ubHkgQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgcmV0cmFjdE9yZGVyczogKFxuICAgIHtcbiAgICAgIG9yZGVySWR4cyxcbiAgICB9OiB7XG4gICAgICBvcmRlcklkeHM6IFVpbnQxMjhbXTtcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiByZWFkb25seSBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICB3aXRoZHJhd09yZGVyczogKFxuICAgIHtcbiAgICAgIG9yZGVySWR4cyxcbiAgICB9OiB7XG4gICAgICBvcmRlcklkeHM/OiBzdHJpbmdbXTtcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiByZWFkb25seSBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xufVxuZXhwb3J0IGNsYXNzIEZpbkNsaWVudCBleHRlbmRzIEZpblF1ZXJ5Q2xpZW50IGltcGxlbWVudHMgRmluSW50ZXJmYWNlIHtcbiAgY2xpZW50OiBTaWduaW5nQ29zbVdhc21DbGllbnQ7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjbGllbnQ6IFNpZ25pbmdDb3NtV2FzbUNsaWVudCxcbiAgICBzZW5kZXI6IHN0cmluZyxcbiAgICBjb250cmFjdEFkZHJlc3M6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihjbGllbnQsIGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XG4gICAgdGhpcy5jb250cmFjdEFkZHJlc3MgPSBjb250cmFjdEFkZHJlc3M7XG4gICAgdGhpcy5yZWNlaXZlID0gdGhpcy5yZWNlaXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sYXVuY2ggPSB0aGlzLmxhdW5jaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlQ29uZmlnID0gdGhpcy51cGRhdGVDb25maWcuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdE9yZGVyID0gdGhpcy5zdWJtaXRPcmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3dhcCA9IHRoaXMuc3dhcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmV0cmFjdE9yZGVyID0gdGhpcy5yZXRyYWN0T3JkZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJldHJhY3RPcmRlcnMgPSB0aGlzLnJldHJhY3RPcmRlcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLndpdGhkcmF3T3JkZXJzID0gdGhpcy53aXRoZHJhd09yZGVycy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVjZWl2ZSA9IGFzeW5jIChcbiAgICB7XG4gICAgICBhbW91bnQsXG4gICAgICBtc2csXG4gICAgICBzZW5kZXIsXG4gICAgfToge1xuICAgICAgYW1vdW50OiBzdHJpbmc7XG4gICAgICBtc2c6IHN0cmluZztcbiAgICAgIHNlbmRlcjogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiByZWFkb25seSBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICByZWNlaXZlOiB7XG4gICAgICAgICAgYW1vdW50LFxuICAgICAgICAgIG1zZyxcbiAgICAgICAgICBzZW5kZXIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgbGF1bmNoID0gYXN5bmMgKFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogcmVhZG9ubHkgQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgbGF1bmNoOiB7fSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xuICB1cGRhdGVDb25maWcgPSBhc3luYyAoXG4gICAge1xuICAgICAgb3duZXIsXG4gICAgICBwcmljZVByZWNpc2lvbixcbiAgICB9OiB7XG4gICAgICBvd25lcj86IEFkZHI7XG4gICAgICBwcmljZVByZWNpc2lvbj86IFByZWNpc2lvbjtcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogcmVhZG9ubHkgQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgdXBkYXRlX2NvbmZpZzoge1xuICAgICAgICAgIG93bmVyLFxuICAgICAgICAgIHByaWNlX3ByZWNpc2lvbjogcHJpY2VQcmVjaXNpb24sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgc3VibWl0T3JkZXIgPSBhc3luYyAoXG4gICAge1xuICAgICAgcHJpY2UsXG4gICAgfToge1xuICAgICAgcHJpY2U6IERlY2ltYWw7XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IHJlYWRvbmx5IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIHN1Ym1pdF9vcmRlcjoge1xuICAgICAgICAgIHByaWNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlZSxcbiAgICAgIG1lbW8sXG4gICAgICBmdW5kc1xuICAgICk7XG4gIH07XG4gIHN3YXAgPSBhc3luYyAoXG4gICAge1xuICAgICAgYmVsaWVmUHJpY2UsXG4gICAgICBtYXhTcHJlYWQsXG4gICAgICBvZmZlckFzc2V0LFxuICAgICAgdG8sXG4gICAgfToge1xuICAgICAgYmVsaWVmUHJpY2U/OiBEZWNpbWFsO1xuICAgICAgbWF4U3ByZWFkPzogRGVjaW1hbDtcbiAgICAgIG9mZmVyQXNzZXQ/OiBDb2luO1xuICAgICAgdG8/OiBBZGRyO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiByZWFkb25seSBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICBzd2FwOiB7XG4gICAgICAgICAgYmVsaWVmX3ByaWNlOiBiZWxpZWZQcmljZSxcbiAgICAgICAgICBtYXhfc3ByZWFkOiBtYXhTcHJlYWQsXG4gICAgICAgICAgb2ZmZXJfYXNzZXQ6IG9mZmVyQXNzZXQsXG4gICAgICAgICAgdG8sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgcmV0cmFjdE9yZGVyID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIGFtb3VudCxcbiAgICAgIG9yZGVySWR4LFxuICAgIH06IHtcbiAgICAgIGFtb3VudD86IFVpbnQxMjg7XG4gICAgICBvcmRlcklkeDogVWludDEyODtcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogcmVhZG9ubHkgQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgcmV0cmFjdF9vcmRlcjoge1xuICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICBvcmRlcl9pZHg6IG9yZGVySWR4LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlZSxcbiAgICAgIG1lbW8sXG4gICAgICBmdW5kc1xuICAgICk7XG4gIH07XG4gIHJldHJhY3RPcmRlcnMgPSBhc3luYyAoXG4gICAge1xuICAgICAgb3JkZXJJZHhzLFxuICAgIH06IHtcbiAgICAgIG9yZGVySWR4czogVWludDEyOFtdO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiByZWFkb25seSBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICByZXRyYWN0X29yZGVyczoge1xuICAgICAgICAgIG9yZGVyX2lkeHM6IG9yZGVySWR4cyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xuICB3aXRoZHJhd09yZGVycyA9IGFzeW5jIChcbiAgICB7XG4gICAgICBvcmRlcklkeHMsXG4gICAgfToge1xuICAgICAgb3JkZXJJZHhzPzogc3RyaW5nW107XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IHJlYWRvbmx5IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIHdpdGhkcmF3X29yZGVyczoge1xuICAgICAgICAgIG9yZGVyX2lkeHM6IG9yZGVySWR4cyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbIkZpblF1ZXJ5Q2xpZW50IiwiY29uc3RydWN0b3IiLCJjbGllbnQiLCJjb250cmFjdEFkZHJlc3MiLCJjb25maWciLCJxdWVyeUNvbnRyYWN0U21hcnQiLCJzaW11bGF0aW9uIiwib2ZmZXJBc3NldCIsIm9mZmVyX2Fzc2V0Iiwib3JkZXIiLCJvcmRlcklkeCIsIm9yZGVyX2lkeCIsIm9yZGVyc0J5VXNlciIsImFkZHJlc3MiLCJsaW1pdCIsInN0YXJ0QWZ0ZXIiLCJvcmRlcnNfYnlfdXNlciIsInN0YXJ0X2FmdGVyIiwicHJpY2UiLCJib29rIiwib2Zmc2V0IiwiYmluZCIsIkZpbkNsaWVudCIsInNlbmRlciIsInJlY2VpdmUiLCJhbW91bnQiLCJtc2ciLCJmZWUiLCJtZW1vIiwiZnVuZHMiLCJleGVjdXRlIiwibGF1bmNoIiwidXBkYXRlQ29uZmlnIiwib3duZXIiLCJwcmljZVByZWNpc2lvbiIsInVwZGF0ZV9jb25maWciLCJwcmljZV9wcmVjaXNpb24iLCJzdWJtaXRPcmRlciIsInN1Ym1pdF9vcmRlciIsInN3YXAiLCJiZWxpZWZQcmljZSIsIm1heFNwcmVhZCIsInRvIiwiYmVsaWVmX3ByaWNlIiwibWF4X3NwcmVhZCIsInJldHJhY3RPcmRlciIsInJldHJhY3Rfb3JkZXIiLCJyZXRyYWN0T3JkZXJzIiwib3JkZXJJZHhzIiwicmV0cmFjdF9vcmRlcnMiLCJvcmRlcl9pZHhzIiwid2l0aGRyYXdPcmRlcnMiLCJ3aXRoZHJhd19vcmRlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxlQUFlO0FBQzdCLGNBQWMsZUFBZTtBQUM3QixjQUFjLGNBQWM7QUFDNUIsY0FBYyxjQUFjO0FBRTVCLE9BQU8sTUFBTUE7SUFJWEMsWUFBWUMsTUFBc0IsRUFBRUMsZUFBdUIsQ0FBRTtRQUg3REQsdUJBQUFBLFVBQUFBLEtBQUFBO1FBQ0FDLHVCQUFBQSxtQkFBQUEsS0FBQUE7O1FBYUFDLHVCQUFBQSx3QkFBUyxvQkFBQTtZQUNQLE9BQU8sTUFBS0YsTUFBTSxDQUFDRyxrQkFBa0IsQ0FBQyxNQUFLRixlQUFlLEVBQUU7Z0JBQzFEQyxRQUFRLENBQUM7WUFDWDtRQUNGOztRQUNBRSx1QkFBQUE7dUJBQWEsb0JBQUEsVUFBTyxFQUNsQkMsVUFBVSxFQUdYO2dCQUNDLE9BQU8sT0FBS0wsTUFBTSxDQUFDRyxrQkFBa0IsQ0FBQyxPQUFLRixlQUFlLEVBQUU7b0JBQzFERyxZQUFZO3dCQUNWRSxhQUFhRDtvQkFDZjtnQkFDRjtZQUNGOzs7Ozs7UUFDQUUsdUJBQUFBO3VCQUFRLG9CQUFBLFVBQU8sRUFDYkMsUUFBUSxFQUdUO2dCQUNDLE9BQU8sT0FBS1IsTUFBTSxDQUFDRyxrQkFBa0IsQ0FBQyxPQUFLRixlQUFlLEVBQUU7b0JBQzFETSxPQUFPO3dCQUNMRSxXQUFXRDtvQkFDYjtnQkFDRjtZQUNGOzs7Ozs7UUFDQUUsdUJBQUFBO3VCQUFlLG9CQUFBLFVBQU8sRUFDcEJDLE9BQU8sRUFDUEMsS0FBSyxFQUNMQyxVQUFVLEVBS1g7Z0JBQ0MsT0FBTyxPQUFLYixNQUFNLENBQUNHLGtC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
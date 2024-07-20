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
export class RegistrarQueryClient {
    constructor(client, contractAddress){
        _define_property(this, "client", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "ownerOf", function() {
            var _ref = _async_to_generator(function*({ includeExpired, tokenId }) {
                return _this.client.queryContractSmart(_this.contractAddress, {
                    owner_of: {
                        include_expired: includeExpired,
                        token_id: tokenId
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this1 = this;
        _define_property(this, "approval", function() {
            var _ref = _async_to_generator(function*({ includeExpired, spender, tokenId }) {
                return _this1.client.queryContractSmart(_this1.contractAddress, {
                    approval: {
                        include_expired: includeExpired,
                        spender,
                        token_id: tokenId
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        _define_property(this, "approvals", function() {
            var _ref = _async_to_generator(function*({ includeExpired, tokenId }) {
                return _this2.client.queryContractSmart(_this2.contractAddress, {
                    approvals: {
                        include_expired: includeExpired,
                        token_id: tokenId
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "allOperators", function() {
            var _ref = _async_to_generator(function*({ includeExpired, limit, owner, startAfter }) {
                return _this3.client.queryContractSmart(_this3.contractAddress, {
                    all_operators: {
                        include_expired: includeExpired,
                        limit,
                        owner,
                        start_after: startAfter
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "numTokens", /*#__PURE__*/ _async_to_generator(function*() {
            return _this4.client.queryContractSmart(_this4.contractAddress, {
                num_tokens: {}
            });
        }));
        var _this5 = this;
        _define_property(this, "contractInfo", /*#__PURE__*/ _async_to_generator(function*() {
            return _this5.client.queryContractSmart(_this5.contractAddress, {
                contract_info: {}
            });
        }));
        var _this6 = this;
        _define_property(this, "nftInfo", function() {
            var _ref = _async_to_generator(function*({ tokenId }) {
                return _this6.client.queryContractSmart(_this6.contractAddress, {
                    nft_info: {
                        token_id: tokenId
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this7 = this;
        _define_property(this, "allNftInfo", function() {
            var _ref = _async_to_generator(function*({ includeExpired, tokenId }) {
                return _this7.client.queryContractSmart(_this7.contractAddress, {
                    all_nft_info: {
                        include_expired: includeExpired,
                        token_id: tokenId
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this8 = this;
        _define_property(this, "tokens", function() {
            var _ref = _async_to_generator(function*({ limit, owner, startAfter }) {
                return _this8.client.queryContractSmart(_this8.contractAddress, {
                    tokens: {
                        limit,
                        owner,
                        start_after: startAfter
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this9 = this;
        _define_property(this, "allTokens", function() {
            var _ref = _async_to_generator(function*({ limit, startAfter }) {
                return _this9.client.queryContractSmart(_this9.contractAddress, {
                    all_tokens: {
                        limit,
                        start_after: startAfter
                    }
                });
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this10 = this;
        _define_property(this, "minter", /*#__PURE__*/ _async_to_generator(function*() {
            return _this10.client.queryContractSmart(_this10.contractAddress, {
                minter: {}
            });
        }));
        var _this11 = this;
        _define_property(this, "config", /*#__PURE__*/ _async_to_generator(function*() {
            return _this11.client.queryContractSmart(_this11.contractAddress, {
                config: {}
            });
        }));
        var _this12 = this;
        _define_property(this, "domainInfo", function() {
            var _ref = _async_to_generator(function*({ name }) {
                return _this12.client.queryContractSmart(_this12.contractAddress, {
                    domain_info: {
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
        this.ownerOf = this.ownerOf.bind(this);
        this.approval = this.approval.bind(this);
        this.approvals = this.approvals.bind(this);
        this.allOperators = this.allOperators.bind(this);
        this.numTokens = this.numTokens.bind(this);
        this.contractInfo = this.contractInfo.bind(this);
        this.nftInfo = this.nftInfo.bind(this);
        this.allNftInfo = this.allNftInfo.bind(this);
        this.tokens = this.tokens.bind(this);
        this.allTokens = this.allTokens.bind(this);
        this.minter = this.minter.bind(this);
        this.config = this.config.bind(this);
        this.domainInfo = this.domainInfo.bind(this);
    }
}
export class RegistrarClient extends RegistrarQueryClient {
    constructor(client, sender, contractAddress){
        super(client, contractAddress);
        _define_property(this, "client", void 0);
        _define_property(this, "sender", void 0);
        _define_property(this, "contractAddress", void 0);
        var _this = this;
        _define_property(this, "transferNft", function() {
            var _ref = _async_to_generator(function*({ recipient, tokenId }, fee = "auto", memo, funds) {
                return yield _this.client.execute(_this.sender, _this.contractAddress, {
                    transfer_nft: {
                        recipient,
                        token_id: tokenId
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this1 = this;
        _define_property(this, "sendNft", function() {
            var _ref = _async_to_generator(function*({ contract, msg, tokenId }, fee = "auto", memo, funds) {
                return yield _this1.client.execute(_this1.sender, _this1.contractAddress, {
                    send_nft: {
                        contract,
                        msg,
                        token_id: tokenId
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this2 = this;
        _define_property(this, "approve", function() {
            var _ref = _async_to_generator(function*({ expires, spender, tokenId }, fee = "auto", memo, funds) {
                return yield _this2.client.execute(_this2.sender, _this2.contractAddress, {
                    approve: {
                        expires,
                        spender,
                        token_id: tokenId
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this3 = this;
        _define_property(this, "revoke", function() {
            var _ref = _async_to_generator(function*({ spender, tokenId }, fee = "auto", memo, funds) {
                return yield _this3.client.execute(_this3.sender, _this3.contractAddress, {
                    revoke: {
                        spender,
                        token_id: tokenId
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this4 = this;
        _define_property(this, "approveAll", function() {
            var _ref = _async_to_generator(function*({ expires, operator }, fee = "auto", memo, funds) {
                return yield _this4.client.execute(_this4.sender, _this4.contractAddress, {
                    approve_all: {
                        expires,
                        operator
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this5 = this;
        _define_property(this, "revokeAll", function() {
            var _ref = _async_to_generator(function*({ operator }, fee = "auto", memo, funds) {
                return yield _this5.client.execute(_this5.sender, _this5.contractAddress, {
                    revoke_all: {
                        operator
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this6 = this;
        _define_property(this, "mint", function() {
            var _ref = _async_to_generator(function*({ extension, owner, tokenId, tokenUri }, fee = "auto", memo, funds) {
                return yield _this6.client.execute(_this6.sender, _this6.contractAddress, {
                    mint: {
                        extension,
                        owner,
                        token_id: tokenId,
                        token_uri: tokenUri
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this7 = this;
        _define_property(this, "burn", function() {
            var _ref = _async_to_generator(function*({ tokenId }, fee = "auto", memo, funds) {
                return yield _this7.client.execute(_this7.sender, _this7.contractAddress, {
                    burn: {
                        token_id: tokenId
                    }
                }, fee, memo, funds);
            });
            return function(_) {
                return _ref.apply(this, arguments);
            };
        }());
        var _this8 = this;
        _define_property(this, "extension", function() {
            var _ref = _async_to_generator(function*({ msg }, fee = "auto", memo, funds) {
                return yield _this8.client.execute(_this8.sender, _this8.contractAddress, {
                    extension: {
                        msg
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
        this.transferNft = this.transferNft.bind(this);
        this.sendNft = this.sendNft.bind(this);
        this.approve = this.approve.bind(this);
        this.revoke = this.revoke.bind(this);
        this.approveAll = this.approveAll.bind(this);
        this.revokeAll = this.revokeAll.bind(this);
        this.mint = this.mint.bind(this);
        this.burn = this.burn.bind(this);
        this.extension = this.extension.bind(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9rbnMvcmVnaXN0cmFyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvc21XYXNtQ2xpZW50LFxuICBTaWduaW5nQ29zbVdhc21DbGllbnQsXG4gIEV4ZWN1dGVSZXN1bHQsXG59IGZyb20gXCJAY29zbWpzL2Nvc213YXNtLXN0YXJnYXRlXCI7XG5pbXBvcnQgeyBDb2luLCBTdGRGZWUgfSBmcm9tIFwiQGNvc21qcy9hbWlub1wiO1xuaW1wb3J0IHsgQWRkciB9IGZyb20gXCIuL2NvbW1vblwiO1xuXG5leHBvcnQgdHlwZSBVaW50NjQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBEZWNpbWFsID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgVWludDEyOCA9IHN0cmluZztcbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFudGlhdGVNc2cge1xuICBiYXNlX2R1cmF0aW9uOiBVaW50NjQ7XG4gIGNhbl9yZWdpc3RlcjogYm9vbGVhbjtcbiAgY29sbGVjdGlvbl91cmk6IHN0cmluZztcbiAgZGVmYXVsdF9mdW5kc19zcGxpdDogW3N0cmluZywgRGVjaW1hbF1bXTtcbiAgZ3JhY2VfZHVyYXRpb246IFVpbnQ2NDtcbiAgbWludGVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpY2VfZGVub206IHN0cmluZztcbiAgcHJpY2VfdGllcl9hbW91bnRzOiBVaW50MTI4W107XG4gIHByaWNlX3RpZXJfbGVuZ3RoczogVWludDY0W107XG4gIHJlZ2lzdHJ5OiBzdHJpbmc7XG4gIHJvb3Q6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHRva2VuX3VyaV9iYXNlOiBzdHJpbmc7XG59XG5leHBvcnQgdHlwZSBFeGVjdXRlTXNnID1cbiAgfCB7XG4gICAgICB0cmFuc2Zlcl9uZnQ6IHtcbiAgICAgICAgcmVjaXBpZW50OiBzdHJpbmc7XG4gICAgICAgIHRva2VuX2lkOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICBzZW5kX25mdDoge1xuICAgICAgICBjb250cmFjdDogc3RyaW5nO1xuICAgICAgICBtc2c6IEJpbmFyeTtcbiAgICAgICAgdG9rZW5faWQ6IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGFwcHJvdmU6IHtcbiAgICAgICAgZXhwaXJlcz86IEV4cGlyYXRpb24gfCBudWxsO1xuICAgICAgICBzcGVuZGVyOiBzdHJpbmc7XG4gICAgICAgIHRva2VuX2lkOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICByZXZva2U6IHtcbiAgICAgICAgc3BlbmRlcjogc3RyaW5nO1xuICAgICAgICB0b2tlbl9pZDogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgYXBwcm92ZV9hbGw6IHtcbiAgICAgICAgZXhwaXJlcz86IEV4cGlyYXRpb24gfCBudWxsO1xuICAgICAgICBvcGVyYXRvcjogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgcmV2b2tlX2FsbDoge1xuICAgICAgICBvcGVyYXRvcjogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgbWludDogTWludE1zZ0ZvclJlY29yZEluZm87XG4gICAgfVxuICB8IHtcbiAgICAgIGJ1cm46IHtcbiAgICAgICAgdG9rZW5faWQ6IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGV4dGVuc2lvbjoge1xuICAgICAgICBtc2c6IFJlZ2lzdHJhckV4ZWN1dGVNc2c7XG4gICAgICB9O1xuICAgIH07XG5leHBvcnQgdHlwZSBCaW5hcnkgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBFeHBpcmF0aW9uID1cbiAgfCB7XG4gICAgICBhdF9oZWlnaHQ6IG51bWJlcjtcbiAgICB9XG4gIHwge1xuICAgICAgYXRfdGltZTogVGltZXN0YW1wO1xuICAgIH1cbiAgfCB7XG4gICAgICBuZXZlcjoge307XG4gICAgfTtcbmV4cG9ydCB0eXBlIFRpbWVzdGFtcCA9IFVpbnQ2NDtcbmV4cG9ydCB0eXBlIFJlZ2lzdHJhckV4ZWN1dGVNc2cgPVxuICB8IHtcbiAgICAgIGNvbmZpZ3VyZToge1xuICAgICAgICBhZG1pbj86IHN0cmluZyB8IG51bGw7XG4gICAgICAgIGJhc2VfZHVyYXRpb24/OiBVaW50NjQgfCBudWxsO1xuICAgICAgICBjYW5fcmVnaXN0ZXI/OiBib29sZWFuIHwgbnVsbDtcbiAgICAgICAgY29sbGVjdGlvbl91cmk/OiBzdHJpbmcgfCBudWxsO1xuICAgICAgICBkZWZhdWx0X2Z1bmRzX3NwbGl0PzogW3N0cmluZywgRGVjaW1hbF1bXSB8IG51bGw7XG4gICAgICAgIGdyYWNlX2R1cmF0aW9uPzogVWludDY0IHwgbnVsbDtcbiAgICAgICAgbWludGVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgcHJpY2VfZGVub20/OiBzdHJpbmcgfCBudWxsO1xuICAgICAgICBwcmljZV90aWVyX2Ftb3VudHM/OiBVaW50MTI4W10gfCBudWxsO1xuICAgICAgICBwcmljZV90aWVyX2xlbmd0aHM/OiBVaW50NjRbXSB8IG51bGw7XG4gICAgICAgIHJlZ2lzdHJ5Pzogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgdG9rZW5fdXJpX2Jhc2U/OiBzdHJpbmcgfCBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgZXh0ZW5kOiB7XG4gICAgICAgIGR1cmF0aW9uOiBVaW50NjQ7XG4gICAgICAgIHRva2VuX2lkOiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH1cbiAgfCB7XG4gICAgICByZWdpc3Rlcjoge1xuICAgICAgICByZWNvcmRfZGF0YTogc3RyaW5nO1xuICAgICAgICByZWNvcmRfa2luZDogUmVjb3JkS2luZDtcbiAgICAgICAgdG9rZW5faWQ6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbmV4cG9ydCB0eXBlIFJlY29yZEtpbmQgPVxuICB8IFwiZG9tYWluXCJcbiAgfCBcImlwZnNcIlxuICB8IFwiaXA0XCJcbiAgfCBcImlwNlwiXG4gIHwgXCJrdWppcmFfYWRkclwiXG4gIHwgXCJyZXZlcnNlXCI7XG5leHBvcnQgaW50ZXJmYWNlIE1pbnRNc2dGb3JSZWNvcmRJbmZvIHtcbiAgZXh0ZW5zaW9uOiBSZWNvcmRJbmZvO1xuICBvd25lcjogc3RyaW5nO1xuICB0b2tlbl9pZDogc3RyaW5nO1xuICB0b2tlbl91cmk/OiBzdHJpbmcgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRJbmZvIHtcbiAgZXhwaXJhdGlvbjogVWludDY0O1xufVxuZXhwb3J0IHR5cGUgUXVlcnlNc2cgPVxuICB8IHtcbiAgICAgIG93bmVyX29mOiB7XG4gICAgICAgIGluY2x1ZGVfZXhwaXJlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgICAgICB0b2tlbl9pZDogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgYXBwcm92YWw6IHtcbiAgICAgICAgaW5jbHVkZV9leHBpcmVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgICAgIHNwZW5kZXI6IHN0cmluZztcbiAgICAgICAgdG9rZW5faWQ6IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGFwcHJvdmFsczoge1xuICAgICAgICBpbmNsdWRlX2V4cGlyZWQ/OiBib29sZWFuIHwgbnVsbDtcbiAgICAgICAgdG9rZW5faWQ6IHN0cmluZztcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIGFsbF9vcGVyYXRvcnM6IHtcbiAgICAgICAgaW5jbHVkZV9leHBpcmVkPzogYm9vbGVhbiB8IG51bGw7XG4gICAgICAgIGxpbWl0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAgICAgb3duZXI6IHN0cmluZztcbiAgICAgICAgc3RhcnRfYWZ0ZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgbnVtX3Rva2Vuczoge307XG4gICAgfVxuICB8IHtcbiAgICAgIGNvbnRyYWN0X2luZm86IHt9O1xuICAgIH1cbiAgfCB7XG4gICAgICBuZnRfaW5mbzoge1xuICAgICAgICB0b2tlbl9pZDogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgYWxsX25mdF9pbmZvOiB7XG4gICAgICAgIGluY2x1ZGVfZXhwaXJlZD86IGJvb2xlYW4gfCBudWxsO1xuICAgICAgICB0b2tlbl9pZDogc3RyaW5nO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgdG9rZW5zOiB7XG4gICAgICAgIGxpbWl0PzogbnVtYmVyIHwgbnVsbDtcbiAgICAgICAgb3duZXI6IHN0cmluZztcbiAgICAgICAgc3RhcnRfYWZ0ZXI/OiBzdHJpbmcgfCBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIHwge1xuICAgICAgYWxsX3Rva2Vuczoge1xuICAgICAgICBsaW1pdD86IG51bWJlciB8IG51bGw7XG4gICAgICAgIHN0YXJ0X2FmdGVyPzogc3RyaW5nIHwgbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB8IHtcbiAgICAgIG1pbnRlcjoge307XG4gICAgfVxuICB8IHtcbiAgICAgIGNvbmZpZzoge307XG4gICAgfVxuICB8IHtcbiAgICAgIGRvbWFpbl9pbmZvOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbmV4cG9ydCBpbnRlcmZhY2UgQWxsTmZ0SW5mb1Jlc3BvbnNlRm9yUmVjb3JkSW5mbyB7XG4gIGFjY2VzczogT3duZXJPZlJlc3BvbnNlO1xuICBpbmZvOiBOZnRJbmZvUmVzcG9uc2VGb3JSZWNvcmRJbmZvO1xufVxuZXhwb3J0IGludGVyZmFjZSBPd25lck9mUmVzcG9uc2Uge1xuICBhcHByb3ZhbHM6IEFwcHJvdmFsW107XG4gIG93bmVyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEFwcHJvdmFsIHtcbiAgZXhwaXJlczogRXhwaXJhdGlvbjtcbiAgc3BlbmRlcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZnRJbmZvUmVzcG9uc2VGb3JSZWNvcmRJbmZvIHtcbiAgZXh0ZW5zaW9uOiBSZWNvcmRJbmZvO1xuICB0b2tlbl91cmk/OiBzdHJpbmcgfCBudWxsO1xufVxuZXhwb3J0IGludGVyZmFjZSBPcGVyYXRvcnNSZXNwb25zZSB7XG4gIG9wZXJhdG9yczogQXBwcm92YWxbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5zUmVzcG9uc2Uge1xuICB0b2tlbnM6IHN0cmluZ1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHByb3ZhbFJlc3BvbnNlIHtcbiAgYXBwcm92YWw6IEFwcHJvdmFsO1xufVxuZXhwb3J0IGludGVyZmFjZSBBcHByb3ZhbHNSZXNwb25zZSB7XG4gIGFwcHJvdmFsczogQXBwcm92YWxbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnUmVzcG9uc2Uge1xuICBhZG1pbjogc3RyaW5nO1xuICBiYXNlX2R1cmF0aW9uOiBVaW50NjQ7XG4gIGNhbl9yZWdpc3RlcjogYm9vbGVhbjtcbiAgZGVmYXVsdF9mdW5kc19zcGxpdDogRnVuZHNSZWNpcGllbnRbXTtcbiAgZ3JhY2VfZHVyYXRpb246IFVpbnQ2NDtcbiAgcHJpY2VfZGVub206IHN0cmluZztcbiAgcHJpY2VfdGllcl9hbW91bnRzOiBVaW50MTI4W107XG4gIHByaWNlX3RpZXJfbGVuZ3RoczogVWludDY0W107XG4gIHJlZ2lzdHJ5OiBzdHJpbmc7XG4gIHJvb3Q6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnVuZHNSZWNpcGllbnQge1xuICBmcmFjdGlvbjogRGVjaW1hbDtcbiAgcmVjaXBpZW50OiBBZGRyO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb250cmFjdEluZm9SZXNwb25zZSB7XG4gIGNvbGxlY3Rpb25fdXJpOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERvbWFpbkluZm9SZXNwb25zZSB7XG4gIGJhc2VfcHJpY2U6IFVpbnQxMjg7XG4gIGlzX2F2YWlsYWJsZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWludGVyUmVzcG9uc2Uge1xuICBtaW50ZXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTnVtVG9rZW5zUmVzcG9uc2Uge1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdHJhclJlYWRPbmx5SW50ZXJmYWNlIHtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gIG93bmVyT2Y6ICh7XG4gICAgaW5jbHVkZUV4cGlyZWQsXG4gICAgdG9rZW5JZCxcbiAgfToge1xuICAgIGluY2x1ZGVFeHBpcmVkPzogYm9vbGVhbjtcbiAgICB0b2tlbklkOiBzdHJpbmc7XG4gIH0pID0+IFByb21pc2U8T3duZXJPZlJlc3BvbnNlPjtcbiAgYXBwcm92YWw6ICh7XG4gICAgaW5jbHVkZUV4cGlyZWQsXG4gICAgc3BlbmRlcixcbiAgICB0b2tlbklkLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIHNwZW5kZXI6IHN0cmluZztcbiAgICB0b2tlbklkOiBzdHJpbmc7XG4gIH0pID0+IFByb21pc2U8QXBwcm92YWxSZXNwb25zZT47XG4gIGFwcHJvdmFsczogKHtcbiAgICBpbmNsdWRlRXhwaXJlZCxcbiAgICB0b2tlbklkLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIHRva2VuSWQ6IHN0cmluZztcbiAgfSkgPT4gUHJvbWlzZTxBcHByb3ZhbHNSZXNwb25zZT47XG4gIGFsbE9wZXJhdG9yczogKHtcbiAgICBpbmNsdWRlRXhwaXJlZCxcbiAgICBsaW1pdCxcbiAgICBvd25lcixcbiAgICBzdGFydEFmdGVyLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgc3RhcnRBZnRlcj86IHN0cmluZztcbiAgfSkgPT4gUHJvbWlzZTxPcGVyYXRvcnNSZXNwb25zZT47XG4gIG51bVRva2VuczogKCkgPT4gUHJvbWlzZTxOdW1Ub2tlbnNSZXNwb25zZT47XG4gIGNvbnRyYWN0SW5mbzogKCkgPT4gUHJvbWlzZTxDb250cmFjdEluZm9SZXNwb25zZT47XG4gIG5mdEluZm86ICh7XG4gICAgdG9rZW5JZCxcbiAgfToge1xuICAgIHRva2VuSWQ6IHN0cmluZztcbiAgfSkgPT4gUHJvbWlzZTxOZnRJbmZvUmVzcG9uc2VGb3JSZWNvcmRJbmZvPjtcbiAgYWxsTmZ0SW5mbzogKHtcbiAgICBpbmNsdWRlRXhwaXJlZCxcbiAgICB0b2tlbklkLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIHRva2VuSWQ6IHN0cmluZztcbiAgfSkgPT4gUHJvbWlzZTxBbGxOZnRJbmZvUmVzcG9uc2VGb3JSZWNvcmRJbmZvPjtcbiAgdG9rZW5zOiAoe1xuICAgIGxpbWl0LFxuICAgIG93bmVyLFxuICAgIHN0YXJ0QWZ0ZXIsXG4gIH06IHtcbiAgICBsaW1pdD86IG51bWJlcjtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIHN0YXJ0QWZ0ZXI/OiBzdHJpbmc7XG4gIH0pID0+IFByb21pc2U8VG9rZW5zUmVzcG9uc2U+O1xuICBhbGxUb2tlbnM6ICh7XG4gICAgbGltaXQsXG4gICAgc3RhcnRBZnRlcixcbiAgfToge1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIHN0YXJ0QWZ0ZXI/OiBzdHJpbmc7XG4gIH0pID0+IFByb21pc2U8VG9rZW5zUmVzcG9uc2U+O1xuICBtaW50ZXI6ICgpID0+IFByb21pc2U8TWludGVyUmVzcG9uc2U+O1xuICBjb25maWc6ICgpID0+IFByb21pc2U8Q29uZmlnUmVzcG9uc2U+O1xuICBkb21haW5JbmZvOiAoeyBuYW1lIH06IHsgbmFtZTogc3RyaW5nIH0pID0+IFByb21pc2U8RG9tYWluSW5mb1Jlc3BvbnNlPjtcbn1cbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXJRdWVyeUNsaWVudCBpbXBsZW1lbnRzIFJlZ2lzdHJhclJlYWRPbmx5SW50ZXJmYWNlIHtcbiAgY2xpZW50OiBDb3NtV2FzbUNsaWVudDtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY2xpZW50OiBDb3NtV2FzbUNsaWVudCwgY29udHJhY3RBZGRyZXNzOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyA9IGNvbnRyYWN0QWRkcmVzcztcbiAgICB0aGlzLm93bmVyT2YgPSB0aGlzLm93bmVyT2YuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFwcHJvdmFsID0gdGhpcy5hcHByb3ZhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYXBwcm92YWxzID0gdGhpcy5hcHByb3ZhbHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsbE9wZXJhdG9ycyA9IHRoaXMuYWxsT3BlcmF0b3JzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5udW1Ub2tlbnMgPSB0aGlzLm51bVRva2Vucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29udHJhY3RJbmZvID0gdGhpcy5jb250cmFjdEluZm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLm5mdEluZm8gPSB0aGlzLm5mdEluZm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsbE5mdEluZm8gPSB0aGlzLmFsbE5mdEluZm8uYmluZCh0aGlzKTtcbiAgICB0aGlzLnRva2VucyA9IHRoaXMudG9rZW5zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGxUb2tlbnMgPSB0aGlzLmFsbFRva2Vucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWludGVyID0gdGhpcy5taW50ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb21haW5JbmZvID0gdGhpcy5kb21haW5JbmZvLmJpbmQodGhpcyk7XG4gIH1cblxuICBvd25lck9mID0gYXN5bmMgKHtcbiAgICBpbmNsdWRlRXhwaXJlZCxcbiAgICB0b2tlbklkLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIHRva2VuSWQ6IHN0cmluZztcbiAgfSk6IFByb21pc2U8T3duZXJPZlJlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgb3duZXJfb2Y6IHtcbiAgICAgICAgaW5jbHVkZV9leHBpcmVkOiBpbmNsdWRlRXhwaXJlZCxcbiAgICAgICAgdG9rZW5faWQ6IHRva2VuSWQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBhcHByb3ZhbCA9IGFzeW5jICh7XG4gICAgaW5jbHVkZUV4cGlyZWQsXG4gICAgc3BlbmRlcixcbiAgICB0b2tlbklkLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIHNwZW5kZXI6IHN0cmluZztcbiAgICB0b2tlbklkOiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPEFwcHJvdmFsUmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KHRoaXMuY29udHJhY3RBZGRyZXNzLCB7XG4gICAgICBhcHByb3ZhbDoge1xuICAgICAgICBpbmNsdWRlX2V4cGlyZWQ6IGluY2x1ZGVFeHBpcmVkLFxuICAgICAgICBzcGVuZGVyLFxuICAgICAgICB0b2tlbl9pZDogdG9rZW5JZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGFwcHJvdmFscyA9IGFzeW5jICh7XG4gICAgaW5jbHVkZUV4cGlyZWQsXG4gICAgdG9rZW5JZCxcbiAgfToge1xuICAgIGluY2x1ZGVFeHBpcmVkPzogYm9vbGVhbjtcbiAgICB0b2tlbklkOiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPEFwcHJvdmFsc1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgYXBwcm92YWxzOiB7XG4gICAgICAgIGluY2x1ZGVfZXhwaXJlZDogaW5jbHVkZUV4cGlyZWQsXG4gICAgICAgIHRva2VuX2lkOiB0b2tlbklkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgYWxsT3BlcmF0b3JzID0gYXN5bmMgKHtcbiAgICBpbmNsdWRlRXhwaXJlZCxcbiAgICBsaW1pdCxcbiAgICBvd25lcixcbiAgICBzdGFydEFmdGVyLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgc3RhcnRBZnRlcj86IHN0cmluZztcbiAgfSk6IFByb21pc2U8T3BlcmF0b3JzUmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KHRoaXMuY29udHJhY3RBZGRyZXNzLCB7XG4gICAgICBhbGxfb3BlcmF0b3JzOiB7XG4gICAgICAgIGluY2x1ZGVfZXhwaXJlZDogaW5jbHVkZUV4cGlyZWQsXG4gICAgICAgIGxpbWl0LFxuICAgICAgICBvd25lcixcbiAgICAgICAgc3RhcnRfYWZ0ZXI6IHN0YXJ0QWZ0ZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBudW1Ub2tlbnMgPSBhc3luYyAoKTogUHJvbWlzZTxOdW1Ub2tlbnNSZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIG51bV90b2tlbnM6IHt9LFxuICAgIH0pO1xuICB9O1xuICBjb250cmFjdEluZm8gPSBhc3luYyAoKTogUHJvbWlzZTxDb250cmFjdEluZm9SZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIGNvbnRyYWN0X2luZm86IHt9LFxuICAgIH0pO1xuICB9O1xuICBuZnRJbmZvID0gYXN5bmMgKHtcbiAgICB0b2tlbklkLFxuICB9OiB7XG4gICAgdG9rZW5JZDogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxOZnRJbmZvUmVzcG9uc2VGb3JSZWNvcmRJbmZvPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgbmZ0X2luZm86IHtcbiAgICAgICAgdG9rZW5faWQ6IHRva2VuSWQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBhbGxOZnRJbmZvID0gYXN5bmMgKHtcbiAgICBpbmNsdWRlRXhwaXJlZCxcbiAgICB0b2tlbklkLFxuICB9OiB7XG4gICAgaW5jbHVkZUV4cGlyZWQ/OiBib29sZWFuO1xuICAgIHRva2VuSWQ6IHN0cmluZztcbiAgfSk6IFByb21pc2U8QWxsTmZ0SW5mb1Jlc3BvbnNlRm9yUmVjb3JkSW5mbz4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIGFsbF9uZnRfaW5mbzoge1xuICAgICAgICBpbmNsdWRlX2V4cGlyZWQ6IGluY2x1ZGVFeHBpcmVkLFxuICAgICAgICB0b2tlbl9pZDogdG9rZW5JZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIHRva2VucyA9IGFzeW5jICh7XG4gICAgbGltaXQsXG4gICAgb3duZXIsXG4gICAgc3RhcnRBZnRlcixcbiAgfToge1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgc3RhcnRBZnRlcj86IHN0cmluZztcbiAgfSk6IFByb21pc2U8VG9rZW5zUmVzcG9uc2U+ID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnlDb250cmFjdFNtYXJ0KHRoaXMuY29udHJhY3RBZGRyZXNzLCB7XG4gICAgICB0b2tlbnM6IHtcbiAgICAgICAgbGltaXQsXG4gICAgICAgIG93bmVyLFxuICAgICAgICBzdGFydF9hZnRlcjogc3RhcnRBZnRlcixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGFsbFRva2VucyA9IGFzeW5jICh7XG4gICAgbGltaXQsXG4gICAgc3RhcnRBZnRlcixcbiAgfToge1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIHN0YXJ0QWZ0ZXI/OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPFRva2Vuc1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgYWxsX3Rva2Vuczoge1xuICAgICAgICBsaW1pdCxcbiAgICAgICAgc3RhcnRfYWZ0ZXI6IHN0YXJ0QWZ0ZXIsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBtaW50ZXIgPSBhc3luYyAoKTogUHJvbWlzZTxNaW50ZXJSZXNwb25zZT4gPT4ge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5xdWVyeUNvbnRyYWN0U21hcnQodGhpcy5jb250cmFjdEFkZHJlc3MsIHtcbiAgICAgIG1pbnRlcjoge30sXG4gICAgfSk7XG4gIH07XG4gIGNvbmZpZyA9IGFzeW5jICgpOiBQcm9taXNlPENvbmZpZ1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgY29uZmlnOiB7fSxcbiAgICB9KTtcbiAgfTtcbiAgZG9tYWluSW5mbyA9IGFzeW5jICh7XG4gICAgbmFtZSxcbiAgfToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgfSk6IFByb21pc2U8RG9tYWluSW5mb1Jlc3BvbnNlPiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnF1ZXJ5Q29udHJhY3RTbWFydCh0aGlzLmNvbnRyYWN0QWRkcmVzcywge1xuICAgICAgZG9tYWluX2luZm86IHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdHJhckludGVyZmFjZSBleHRlbmRzIFJlZ2lzdHJhclJlYWRPbmx5SW50ZXJmYWNlIHtcbiAgY29udHJhY3RBZGRyZXNzOiBzdHJpbmc7XG4gIHNlbmRlcjogc3RyaW5nO1xuICB0cmFuc2Zlck5mdDogKFxuICAgIHtcbiAgICAgIHJlY2lwaWVudCxcbiAgICAgIHRva2VuSWQsXG4gICAgfToge1xuICAgICAgcmVjaXBpZW50OiBzdHJpbmc7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgc2VuZE5mdDogKFxuICAgIHtcbiAgICAgIGNvbnRyYWN0LFxuICAgICAgbXNnLFxuICAgICAgdG9rZW5JZCxcbiAgICB9OiB7XG4gICAgICBjb250cmFjdDogc3RyaW5nO1xuICAgICAgbXNnOiBCaW5hcnk7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgYXBwcm92ZTogKFxuICAgIHtcbiAgICAgIGV4cGlyZXMsXG4gICAgICBzcGVuZGVyLFxuICAgICAgdG9rZW5JZCxcbiAgICB9OiB7XG4gICAgICBleHBpcmVzPzogRXhwaXJhdGlvbjtcbiAgICAgIHNwZW5kZXI6IHN0cmluZztcbiAgICAgIHRva2VuSWQ6IHN0cmluZztcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICByZXZva2U6IChcbiAgICB7XG4gICAgICBzcGVuZGVyLFxuICAgICAgdG9rZW5JZCxcbiAgICB9OiB7XG4gICAgICBzcGVuZGVyOiBzdHJpbmc7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgYXBwcm92ZUFsbDogKFxuICAgIHtcbiAgICAgIGV4cGlyZXMsXG4gICAgICBvcGVyYXRvcixcbiAgICB9OiB7XG4gICAgICBleHBpcmVzPzogRXhwaXJhdGlvbjtcbiAgICAgIG9wZXJhdG9yOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU/OiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICkgPT4gUHJvbWlzZTxFeGVjdXRlUmVzdWx0PjtcbiAgcmV2b2tlQWxsOiAoXG4gICAge1xuICAgICAgb3BlcmF0b3IsXG4gICAgfToge1xuICAgICAgb3BlcmF0b3I6IHN0cmluZztcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICBtaW50OiAoXG4gICAge1xuICAgICAgZXh0ZW5zaW9uLFxuICAgICAgb3duZXIsXG4gICAgICB0b2tlbklkLFxuICAgICAgdG9rZW5VcmksXG4gICAgfToge1xuICAgICAgZXh0ZW5zaW9uOiBSZWNvcmRJbmZvO1xuICAgICAgb3duZXI6IHN0cmluZztcbiAgICAgIHRva2VuSWQ6IHN0cmluZztcbiAgICAgIHRva2VuVXJpPzogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlPzogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApID0+IFByb21pc2U8RXhlY3V0ZVJlc3VsdD47XG4gIGJ1cm46IChcbiAgICB7XG4gICAgICB0b2tlbklkLFxuICAgIH06IHtcbiAgICAgIHRva2VuSWQ6IHN0cmluZztcbiAgICB9LFxuICAgIGZlZT86IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKSA9PiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+O1xuICBleHRlbnNpb246IChcbiAgICB7XG4gICAgICBtc2csXG4gICAgfToge1xuICAgICAgbXNnOiBSZWdpc3RyYXJFeGVjdXRlTXNnO1xuICAgIH0sXG4gICAgZmVlPzogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApID0+IFByb21pc2U8RXhlY3V0ZVJlc3VsdD47XG59XG5leHBvcnQgY2xhc3MgUmVnaXN0cmFyQ2xpZW50XG4gIGV4dGVuZHMgUmVnaXN0cmFyUXVlcnlDbGllbnRcbiAgaW1wbGVtZW50cyBSZWdpc3RyYXJJbnRlcmZhY2VcbntcbiAgY2xpZW50OiBTaWduaW5nQ29zbVdhc21DbGllbnQ7XG4gIHNlbmRlcjogc3RyaW5nO1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjbGllbnQ6IFNpZ25pbmdDb3NtV2FzbUNsaWVudCxcbiAgICBzZW5kZXI6IHN0cmluZyxcbiAgICBjb250cmFjdEFkZHJlc3M6IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcihjbGllbnQsIGNvbnRyYWN0QWRkcmVzcyk7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5zZW5kZXIgPSBzZW5kZXI7XG4gICAgdGhpcy5jb250cmFjdEFkZHJlc3MgPSBjb250cmFjdEFkZHJlc3M7XG4gICAgdGhpcy50cmFuc2Zlck5mdCA9IHRoaXMudHJhbnNmZXJOZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmROZnQgPSB0aGlzLnNlbmROZnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFwcHJvdmUgPSB0aGlzLmFwcHJvdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJldm9rZSA9IHRoaXMucmV2b2tlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hcHByb3ZlQWxsID0gdGhpcy5hcHByb3ZlQWxsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXZva2VBbGwgPSB0aGlzLnJldm9rZUFsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWludCA9IHRoaXMubWludC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYnVybiA9IHRoaXMuYnVybi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZXh0ZW5zaW9uID0gdGhpcy5leHRlbnNpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRyYW5zZmVyTmZ0ID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIHJlY2lwaWVudCxcbiAgICAgIHRva2VuSWQsXG4gICAgfToge1xuICAgICAgcmVjaXBpZW50OiBzdHJpbmc7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIHRyYW5zZmVyX25mdDoge1xuICAgICAgICAgIHJlY2lwaWVudCxcbiAgICAgICAgICB0b2tlbl9pZDogdG9rZW5JZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xuICBzZW5kTmZ0ID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIGNvbnRyYWN0LFxuICAgICAgbXNnLFxuICAgICAgdG9rZW5JZCxcbiAgICB9OiB7XG4gICAgICBjb250cmFjdDogc3RyaW5nO1xuICAgICAgbXNnOiBCaW5hcnk7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIHNlbmRfbmZ0OiB7XG4gICAgICAgICAgY29udHJhY3QsXG4gICAgICAgICAgbXNnLFxuICAgICAgICAgIHRva2VuX2lkOiB0b2tlbklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlZSxcbiAgICAgIG1lbW8sXG4gICAgICBmdW5kc1xuICAgICk7XG4gIH07XG4gIGFwcHJvdmUgPSBhc3luYyAoXG4gICAge1xuICAgICAgZXhwaXJlcyxcbiAgICAgIHNwZW5kZXIsXG4gICAgICB0b2tlbklkLFxuICAgIH06IHtcbiAgICAgIGV4cGlyZXM/OiBFeHBpcmF0aW9uO1xuICAgICAgc3BlbmRlcjogc3RyaW5nO1xuICAgICAgdG9rZW5JZDogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICBhcHByb3ZlOiB7XG4gICAgICAgICAgZXhwaXJlcyxcbiAgICAgICAgICBzcGVuZGVyLFxuICAgICAgICAgIHRva2VuX2lkOiB0b2tlbklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlZSxcbiAgICAgIG1lbW8sXG4gICAgICBmdW5kc1xuICAgICk7XG4gIH07XG4gIHJldm9rZSA9IGFzeW5jIChcbiAgICB7XG4gICAgICBzcGVuZGVyLFxuICAgICAgdG9rZW5JZCxcbiAgICB9OiB7XG4gICAgICBzcGVuZGVyOiBzdHJpbmc7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIHJldm9rZToge1xuICAgICAgICAgIHNwZW5kZXIsXG4gICAgICAgICAgdG9rZW5faWQ6IHRva2VuSWQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgYXBwcm92ZUFsbCA9IGFzeW5jIChcbiAgICB7XG4gICAgICBleHBpcmVzLFxuICAgICAgb3BlcmF0b3IsXG4gICAgfToge1xuICAgICAgZXhwaXJlcz86IEV4cGlyYXRpb247XG4gICAgICBvcGVyYXRvcjogc3RyaW5nO1xuICAgIH0sXG4gICAgZmVlOiBudW1iZXIgfCBTdGRGZWUgfCBcImF1dG9cIiA9IFwiYXV0b1wiLFxuICAgIG1lbW8/OiBzdHJpbmcsXG4gICAgZnVuZHM/OiBDb2luW11cbiAgKTogUHJvbWlzZTxFeGVjdXRlUmVzdWx0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY2xpZW50LmV4ZWN1dGUoXG4gICAgICB0aGlzLnNlbmRlcixcbiAgICAgIHRoaXMuY29udHJhY3RBZGRyZXNzLFxuICAgICAge1xuICAgICAgICBhcHByb3ZlX2FsbDoge1xuICAgICAgICAgIGV4cGlyZXMsXG4gICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVlLFxuICAgICAgbWVtbyxcbiAgICAgIGZ1bmRzXG4gICAgKTtcbiAgfTtcbiAgcmV2b2tlQWxsID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIG9wZXJhdG9yLFxuICAgIH06IHtcbiAgICAgIG9wZXJhdG9yOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIHJldm9rZV9hbGw6IHtcbiAgICAgICAgICBvcGVyYXRvcixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xuICBtaW50ID0gYXN5bmMgKFxuICAgIHtcbiAgICAgIGV4dGVuc2lvbixcbiAgICAgIG93bmVyLFxuICAgICAgdG9rZW5JZCxcbiAgICAgIHRva2VuVXJpLFxuICAgIH06IHtcbiAgICAgIGV4dGVuc2lvbjogUmVjb3JkSW5mbztcbiAgICAgIG93bmVyOiBzdHJpbmc7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgICB0b2tlblVyaT86IHN0cmluZztcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgbWludDoge1xuICAgICAgICAgIGV4dGVuc2lvbixcbiAgICAgICAgICBvd25lcixcbiAgICAgICAgICB0b2tlbl9pZDogdG9rZW5JZCxcbiAgICAgICAgICB0b2tlbl91cmk6IHRva2VuVXJpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlZSxcbiAgICAgIG1lbW8sXG4gICAgICBmdW5kc1xuICAgICk7XG4gIH07XG4gIGJ1cm4gPSBhc3luYyAoXG4gICAge1xuICAgICAgdG9rZW5JZCxcbiAgICB9OiB7XG4gICAgICB0b2tlbklkOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmZWU6IG51bWJlciB8IFN0ZEZlZSB8IFwiYXV0b1wiID0gXCJhdXRvXCIsXG4gICAgbWVtbz86IHN0cmluZyxcbiAgICBmdW5kcz86IENvaW5bXVxuICApOiBQcm9taXNlPEV4ZWN1dGVSZXN1bHQ+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5jbGllbnQuZXhlY3V0ZShcbiAgICAgIHRoaXMuc2VuZGVyLFxuICAgICAgdGhpcy5jb250cmFjdEFkZHJlc3MsXG4gICAgICB7XG4gICAgICAgIGJ1cm46IHtcbiAgICAgICAgICB0b2tlbl9pZDogdG9rZW5JZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWUsXG4gICAgICBtZW1vLFxuICAgICAgZnVuZHNcbiAgICApO1xuICB9O1xuICBleHRlbnNpb24gPSBhc3luYyAoXG4gICAge1xuICAgICAgbXNnLFxuICAgIH06IHtcbiAgICAgIG1zZzogUmVnaXN0cmFyRXhlY3V0ZU1zZztcbiAgICB9LFxuICAgIGZlZTogbnVtYmVyIHwgU3RkRmVlIHwgXCJhdXRvXCIgPSBcImF1dG9cIixcbiAgICBtZW1vPzogc3RyaW5nLFxuICAgIGZ1bmRzPzogQ29pbltdXG4gICk6IFByb21pc2U8RXhlY3V0ZVJlc3VsdD4gPT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNsaWVudC5leGVjdXRlKFxuICAgICAgdGhpcy5zZW5kZXIsXG4gICAgICB0aGlzLmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgIHtcbiAgICAgICAgZXh0ZW5zaW9uOiB7XG4gICAgICAgICAgbXNnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGZlZSxcbiAgICAgIG1lbW8sXG4gICAgICBmdW5kc1xuICAgICk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVnaXN0cmFyUXVlcnlDbGllbnQiLCJjb25zdHJ1Y3RvciIsImNsaWVudCIsImNvbnRyYWN0QWRkcmVzcyIsIm93bmVyT2YiLCJpbmNsdWRlRXhwaXJlZCIsInRva2VuSWQiLCJxdWVyeUNvbnRyYWN0U21hcnQiLCJvd25lcl9vZiIsImluY2x1ZGVfZXhwaXJlZCIsInRva2VuX2lkIiwiYXBwcm92YWwiLCJzcGVuZGVyIiwiYXBwcm92YWxzIiwiYWxsT3BlcmF0b3JzIiwibGltaXQiLCJvd25lciIsInN0YXJ0QWZ0ZXIiLCJhbGxfb3BlcmF0b3JzIiwic3RhcnRfYWZ0ZXIiLCJudW1Ub2tlbnMiLCJudW1fdG9rZW5zIiwiY29udHJhY3RJbmZvIiwiY29udHJhY3RfaW5mbyIsIm5mdEluZm8iLCJuZnRfaW5mbyIsImFsbE5mdEluZm8iLCJhbGxfbmZ0X2luZm8iLCJ0b2tlbnMiLCJhbGxUb2tlbnMiLCJhbGxfdG9rZW5zIiwibWludGVyIiwiY29uZmlnIiwiZG9tYWluSW5mbyIsIm5hbWUiLCJkb21haW5faW5mbyIsImJpbmQiLCJSZWdpc3RyYXJDbGllbnQiLCJzZW5kZXIiLCJ0cmFuc2Zlck5mdCIsInJlY2lwaWVudCIsImZlZSIsIm1lbW8iLCJmdW5kcyIsImV4ZWN1dGUiLCJ0cmFuc2Zlcl9uZnQiLCJzZW5kTmZ0IiwiY29udHJhY3QiLCJtc2ciLCJzZW5kX25mdCIsImFwcHJvdmUiLCJleHBpcmVzIiwicmV2b2tlIiwiYXBwcm92ZUFsbCIsIm9wZXJhdG9yIiwiYXBwcm92ZV9hbGwiLCJyZXZva2VBbGwiLCJyZXZva2VfYWxsIiwibWludCIsImV4dGVuc2lvbiIsInRva2VuVXJpIiwidG9rZW5fdXJpIiwiYnVybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK1VBLE9BQU8sTUFBTUE7SUFJWEMsWUFBWUMsTUFBc0IsRUFBRUMsZUFBdUIsQ0FBRTtRQUg3REQsdUJBQUFBLFVBQUFBLEtBQUFBO1FBQ0FDLHVCQUFBQSxtQkFBQUEsS0FBQUE7O1FBb0JBQyx1QkFBQUE7dUJBQVUsb0JBQUEsVUFBTyxFQUNmQyxjQUFjLEVBQ2RDLE9BQU8sRUFJUjtnQkFDQyxPQUFPLE1BQUtKLE1BQU0sQ0FBQ0ssa0JBQWtCLENBQUMsTUFBS0osZUFBZSxFQUFFO29CQUMxREssVUFBVTt3QkFDUkMsaUJBQWlCSjt3QkFDakJLLFVBQVVKO29CQUNaO2dCQUNGO1lBQ0Y7Ozs7OztRQUNBSyx1QkFBQUE7dUJBQVcsb0JBQUEsVUFBTyxFQUNoQk4sY0FBYyxFQUNkTyxPQUFPLEVBQ1BOLE9BQU8sRUFLUjtnQkFDQyxPQUFPLE9BQUtKLE1BQU0sQ0FBQ0ssa0JBQWtCLENBQUMsT0FBS0osZUFBZSxFQUFFO29CQUMxRFEsVUFBVTt3QkFDUkYsaUJBQWlCSjt3QkFDakJPO3dCQUNBRixVQUFVSjtvQkFDWjtnQkFDRjtZQUNGOzs7Ozs7UUFDQU8sdUJBQUFBO3VCQUFZLG9CQUFBLFVBQU8sRUFDakJSLGNBQWMsRUFDZEMsT0FBTyxFQUlSO2dCQUNDLE9BQU8sT0FBS0osTUFBTSxDQUFDSyxrQkFBa0IsQ0FBQyxPQUFLSixlQUFlLEVB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
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupStakingExtension", {
    enumerable: true,
    get: function() {
        return setupStakingExtension;
    }
});
const _stargate = require("@cosmjs/stargate");
const _queries = require("@cosmjs/stargate/build/modules/staking/queries");
const _pagination = require("cosmjs-types/cosmos/base/query/v1beta1/pagination");
const _query = require("cosmjs-types/cosmos/staking/v1beta1/query");
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
function setupStakingExtension(base) {
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const rpc = (0, _stargate.createProtobufRpcClient)(base);
    const queryService = new _query.QueryClientImpl(rpc);
    return {
        staking: _object_spread_props(_object_spread({}, (0, _queries.setupStakingExtension)(base).staking), {
            delegatorDelegations: function() {
                var _ref = _async_to_generator(function*(delegatorAddress, pagination) {
                    const response = yield queryService.DelegatorDelegations({
                        delegatorAddr: delegatorAddress,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(delegatorAddress, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            delegatorUnbondingDelegations: function() {
                var _ref = _async_to_generator(function*(delegatorAddress, pagination) {
                    const response = yield queryService.DelegatorUnbondingDelegations({
                        delegatorAddr: delegatorAddress,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(delegatorAddress, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            delegatorValidators: function() {
                var _ref = _async_to_generator(function*(delegatorAddress, pagination) {
                    const response = yield queryService.DelegatorValidators({
                        delegatorAddr: delegatorAddress,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(delegatorAddress, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            redelegations: function() {
                var _ref = _async_to_generator(function*(delegatorAddress, sourceValidatorAddress, destinationValidatorAddress, pagination) {
                    const response = yield queryService.Redelegations({
                        delegatorAddr: delegatorAddress,
                        srcValidatorAddr: sourceValidatorAddress,
                        dstValidatorAddr: destinationValidatorAddress,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(delegatorAddress, sourceValidatorAddress, destinationValidatorAddress, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            validatorDelegations: function() {
                var _ref = _async_to_generator(function*(validatorAddress, pagination) {
                    const response = yield queryService.ValidatorDelegations({
                        validatorAddr: validatorAddress,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(validatorAddress, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            validators: function() {
                var _ref = _async_to_generator(function*(status, pagination) {
                    const response = yield queryService.Validators({
                        status: status,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(status, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            validatorUnbondingDelegations: function() {
                var _ref = _async_to_generator(function*(validatorAddress, pagination) {
                    const response = yield queryService.ValidatorUnbondingDelegations({
                        validatorAddr: validatorAddress,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(validatorAddress, pagination) {
                    return _ref.apply(this, arguments);
                };
            }()
        })
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3Ntb3Mvc3Rha2luZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCwgUXVlcnlDbGllbnQgfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHtcbiAgQm9uZFN0YXR1c1N0cmluZyxcbiAgc2V0dXBTdGFraW5nRXh0ZW5zaW9uIGFzIG9yaWdpbmFsLFxufSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzL3N0YWtpbmcvcXVlcmllc1wiO1xuaW1wb3J0IHsgUGFnZVJlcXVlc3QgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRJbXBsIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3Mvc3Rha2luZy92MWJldGExL3F1ZXJ5XCI7XG5pbXBvcnQgeyBRdWVyeVBhcmFtc1Jlc3BvbnNlIH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3Mvc3Rha2luZy92MWJldGExL3F1ZXJ5XCI7XG5pbXBvcnQgeyBRdWVyeURlbGVnYXRvclZhbGlkYXRvcnNSZXNwb25zZSB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3N0YWtpbmcvdjFiZXRhMS9xdWVyeVwiO1xuaW1wb3J0IHtcbiAgUXVlcnlEZWxlZ2F0aW9uUmVzcG9uc2UsXG4gIFF1ZXJ5RGVsZWdhdG9yRGVsZWdhdGlvbnNSZXNwb25zZSxcbiAgUXVlcnlEZWxlZ2F0b3JVbmJvbmRpbmdEZWxlZ2F0aW9uc1Jlc3BvbnNlLFxuICBRdWVyeURlbGVnYXRvclZhbGlkYXRvclJlc3BvbnNlLFxuICBRdWVyeUhpc3RvcmljYWxJbmZvUmVzcG9uc2UsXG4gIFF1ZXJ5UG9vbFJlc3BvbnNlLFxuICBRdWVyeVJlZGVsZWdhdGlvbnNSZXNwb25zZSxcbiAgUXVlcnlVbmJvbmRpbmdEZWxlZ2F0aW9uUmVzcG9uc2UsXG4gIFF1ZXJ5VmFsaWRhdG9yUmVzcG9uc2UsXG4gIFF1ZXJ5VmFsaWRhdG9yRGVsZWdhdGlvbnNSZXNwb25zZSxcbiAgUXVlcnlWYWxpZGF0b3JzUmVzcG9uc2UsXG4gIFF1ZXJ5VmFsaWRhdG9yVW5ib25kaW5nRGVsZWdhdGlvbnNSZXNwb25zZSxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3Mvc3Rha2luZy92MWJldGExL3F1ZXJ5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Rha2luZ0V4dGVuc2lvbiB7XG4gIHJlYWRvbmx5IHN0YWtpbmc6IHtcbiAgICBkZWxlZ2F0aW9uOiAoXG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmdcbiAgICApID0+IFByb21pc2U8UXVlcnlEZWxlZ2F0aW9uUmVzcG9uc2U+O1xuICAgIGRlbGVnYXRvckRlbGVnYXRpb25zOiAoXG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICBwYWdpbmF0aW9uPzogUGFnZVJlcXVlc3RcbiAgICApID0+IFByb21pc2U8UXVlcnlEZWxlZ2F0b3JEZWxlZ2F0aW9uc1Jlc3BvbnNlPjtcbiAgICBkZWxlZ2F0b3JVbmJvbmRpbmdEZWxlZ2F0aW9uczogKFxuICAgICAgZGVsZWdhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5RGVsZWdhdG9yVW5ib25kaW5nRGVsZWdhdGlvbnNSZXNwb25zZT47XG4gICAgZGVsZWdhdG9yVmFsaWRhdG9yOiAoXG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmdcbiAgICApID0+IFByb21pc2U8UXVlcnlEZWxlZ2F0b3JWYWxpZGF0b3JSZXNwb25zZT47XG4gICAgZGVsZWdhdG9yVmFsaWRhdG9yczogKFxuICAgICAgZGVsZWdhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5RGVsZWdhdG9yVmFsaWRhdG9yc1Jlc3BvbnNlPjtcbiAgICBoaXN0b3JpY2FsSW5mbzogKGhlaWdodDogbnVtYmVyKSA9PiBQcm9taXNlPFF1ZXJ5SGlzdG9yaWNhbEluZm9SZXNwb25zZT47XG4gICAgcGFyYW1zOiAoKSA9PiBQcm9taXNlPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+O1xuICAgIHBvb2w6ICgpID0+IFByb21pc2U8UXVlcnlQb29sUmVzcG9uc2U+O1xuICAgIHJlZGVsZWdhdGlvbnM6IChcbiAgICAgIGRlbGVnYXRvckFkZHJlc3M6IHN0cmluZyxcbiAgICAgIHNvdXJjZVZhbGlkYXRvckFkZHJlc3M6IHN0cmluZyxcbiAgICAgIGRlc3RpbmF0aW9uVmFsaWRhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5UmVkZWxlZ2F0aW9uc1Jlc3BvbnNlPjtcbiAgICB1bmJvbmRpbmdEZWxlZ2F0aW9uOiAoXG4gICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmdcbiAgICApID0+IFByb21pc2U8UXVlcnlVbmJvbmRpbmdEZWxlZ2F0aW9uUmVzcG9uc2U+O1xuICAgIHZhbGlkYXRvcjogKHZhbGlkYXRvckFkZHJlc3M6IHN0cmluZykgPT4gUHJvbWlzZTxRdWVyeVZhbGlkYXRvclJlc3BvbnNlPjtcbiAgICB2YWxpZGF0b3JEZWxlZ2F0aW9uczogKFxuICAgICAgdmFsaWRhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5VmFsaWRhdG9yRGVsZWdhdGlvbnNSZXNwb25zZT47XG4gICAgdmFsaWRhdG9yczogKFxuICAgICAgc3RhdHVzOiBCb25kU3RhdHVzU3RyaW5nLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5VmFsaWRhdG9yc1Jlc3BvbnNlPjtcbiAgICB2YWxpZGF0b3JVbmJvbmRpbmdEZWxlZ2F0aW9uczogKFxuICAgICAgdmFsaWRhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5VmFsaWRhdG9yVW5ib25kaW5nRGVsZWdhdGlvbnNSZXNwb25zZT47XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFN0YWtpbmdFeHRlbnNpb24oYmFzZTogUXVlcnlDbGllbnQpOiBTdGFraW5nRXh0ZW5zaW9uIHtcbiAgLy8gVXNlIHRoaXMgc2VydmljZSB0byBnZXQgZWFzeSB0eXBlZCBhY2Nlc3MgdG8gcXVlcnkgbWV0aG9kc1xuICAvLyBUaGlzIGNhbm5vdCBiZSB1c2VkIGZvciBwcm9vZiB2ZXJpZmljYXRpb25cbiAgY29uc3QgcnBjID0gY3JlYXRlUHJvdG9idWZScGNDbGllbnQoYmFzZSk7XG4gIGNvbnN0IHF1ZXJ5U2VydmljZSA9IG5ldyBRdWVyeUNsaWVudEltcGwocnBjKTtcblxuICByZXR1cm4ge1xuICAgIHN0YWtpbmc6IHtcbiAgICAgIC4uLm9yaWdpbmFsKGJhc2UpLnN0YWtpbmcsXG4gICAgICBkZWxlZ2F0b3JEZWxlZ2F0aW9uczogYXN5bmMgKFxuICAgICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHBhZ2luYXRpb24/OiBQYWdlUmVxdWVzdFxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLkRlbGVnYXRvckRlbGVnYXRpb25zKHtcbiAgICAgICAgICBkZWxlZ2F0b3JBZGRyOiBkZWxlZ2F0b3JBZGRyZXNzLFxuICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24gJiYgUGFnZVJlcXVlc3QuZnJvbVBhcnRpYWwocGFnaW5hdGlvbiksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgICAgZGVsZWdhdG9yVW5ib25kaW5nRGVsZWdhdGlvbnM6IGFzeW5jIChcbiAgICAgICAgZGVsZWdhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgICBwYWdpbmF0aW9uPzogUGFnZVJlcXVlc3RcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5U2VydmljZS5EZWxlZ2F0b3JVbmJvbmRpbmdEZWxlZ2F0aW9ucyh7XG4gICAgICAgICAgZGVsZWdhdG9yQWRkcjogZGVsZWdhdG9yQWRkcmVzcyxcbiAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uICYmIFBhZ2VSZXF1ZXN0LmZyb21QYXJ0aWFsKHBhZ2luYXRpb24pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSxcbiAgICAgIGRlbGVnYXRvclZhbGlkYXRvcnM6IGFzeW5jIChcbiAgICAgICAgZGVsZWdhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgICBwYWdpbmF0aW9uPzogUGFnZVJlcXVlc3RcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5U2VydmljZS5EZWxlZ2F0b3JWYWxpZGF0b3JzKHtcbiAgICAgICAgICBkZWxlZ2F0b3JBZGRyOiBkZWxlZ2F0b3JBZGRyZXNzLFxuICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24gJiYgUGFnZVJlcXVlc3QuZnJvbVBhcnRpYWwocGFnaW5hdGlvbiksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgICAgcmVkZWxlZ2F0aW9uczogYXN5bmMgKFxuICAgICAgICBkZWxlZ2F0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHNvdXJjZVZhbGlkYXRvckFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgZGVzdGluYXRpb25WYWxpZGF0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHBhZ2luYXRpb24/OiBQYWdlUmVxdWVzdFxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLlJlZGVsZWdhdGlvbnMoe1xuICAgICAgICAgIGRlbGVnYXRvckFkZHI6IGRlbGVnYXRvckFkZHJlc3MsXG4gICAgICAgICAgc3JjVmFsaWRhdG9yQWRkcjogc291cmNlVmFsaWRhdG9yQWRkcmVzcyxcbiAgICAgICAgICBkc3RWYWxpZGF0b3JBZGRyOiBkZXN0aW5hdGlvblZhbGlkYXRvckFkZHJlc3MsXG4gICAgICAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvbiAmJiBQYWdlUmVxdWVzdC5mcm9tUGFydGlhbChwYWdpbmF0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0b3JEZWxlZ2F0aW9uczogYXN5bmMgKFxuICAgICAgICB2YWxpZGF0b3JBZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIHBhZ2luYXRpb24/OiBQYWdlUmVxdWVzdFxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLlZhbGlkYXRvckRlbGVnYXRpb25zKHtcbiAgICAgICAgICB2YWxpZGF0b3JBZGRyOiB2YWxpZGF0b3JBZGRyZXNzLFxuICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24gJiYgUGFnZVJlcXVlc3QuZnJvbVBhcnRpYWwocGFnaW5hdGlvbiksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgICAgdmFsaWRhdG9yczogYXN5bmMgKFxuICAgICAgICBzdGF0dXM6IEJvbmRTdGF0dXNTdHJpbmcsXG4gICAgICAgIHBhZ2luYXRpb24/OiBQYWdlUmVxdWVzdFxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLlZhbGlkYXRvcnMoe1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24gJiYgUGFnZVJlcXVlc3QuZnJvbVBhcnRpYWwocGFnaW5hdGlvbiksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgICAgdmFsaWRhdG9yVW5ib25kaW5nRGVsZWdhdGlvbnM6IGFzeW5jIChcbiAgICAgICAgdmFsaWRhdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgICBwYWdpbmF0aW9uPzogUGFnZVJlcXVlc3RcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5U2VydmljZS5WYWxpZGF0b3JVbmJvbmRpbmdEZWxlZ2F0aW9ucyh7XG4gICAgICAgICAgdmFsaWRhdG9yQWRkcjogdmFsaWRhdG9yQWRkcmVzcyxcbiAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uICYmIFBhZ2VSZXF1ZXN0LmZyb21QYXJ0aWFsKHBhZ2luYXRpb24pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInNldHVwU3Rha2luZ0V4dGVuc2lvbiIsImJhc2UiLCJycGMiLCJjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCIsInF1ZXJ5U2VydmljZSIsIlF1ZXJ5Q2xpZW50SW1wbCIsInN0YWtpbmciLCJvcmlnaW5hbCIsImRlbGVnYXRvckRlbGVnYXRpb25zIiwiZGVsZWdhdG9yQWRkcmVzcyIsInBhZ2luYXRpb24iLCJyZXNwb25zZSIsIkRlbGVnYXRvckRlbGVnYXRpb25zIiwiZGVsZWdhdG9yQWRkciIsIlBhZ2VSZXF1ZXN0IiwiZnJvbVBhcnRpYWwiLCJkZWxlZ2F0b3JVbmJvbmRpbmdEZWxlZ2F0aW9ucyIsIkRlbGVnYXRvclVuYm9uZGluZ0RlbGVnYXRpb25zIiwiZGVsZWdhdG9yVmFsaWRhdG9ycyIsIkRlbGVnYXRvclZhbGlkYXRvcnMiLCJyZWRlbGVnYXRpb25zIiwic291cmNlVmFsaWRhdG9yQWRkcmVzcyIsImRlc3RpbmF0aW9uVmFsaWRhdG9yQWRkcmVzcyIsIlJlZGVsZWdhdGlvbnMiLCJzcmNWYWxpZGF0b3JBZGRyIiwiZHN0VmFsaWRhdG9yQWRkciIsInZhbGlkYXRvckRlbGVnYXRpb25zIiwidmFsaWRhdG9yQWRkcmVzcyIsIlZhbGlkYXRvckRlbGVnYXRpb25zIiwidmFsaWRhdG9yQWRkciIsInZhbGlkYXRvcnMiLCJzdGF0dXMiLCJWYWxpZGF0b3JzIiwidmFsaWRhdG9yVW5ib25kaW5nRGVsZWdhdGlvbnMiLCJWYWxpZGF0b3JVbmJvbmRpbmdEZWxlZ2F0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEyRWdCQTs7O2VBQUFBOzs7MEJBM0VxQzt5QkFJOUM7NEJBQ3FCO3VCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUV6QixTQUFTQSxzQkFBc0JDLElBQWlCO0lBQ3JELDZEQUE2RDtJQUM3RCw2Q0FBNkM7SUFDN0MsTUFBTUMsTUFBTUMsSUFBQUEsaUNBQXVCLEVBQUNGO0lBQ3BDLE1BQU1HLGVBQWUsSUFBSUMsc0JBQWUsQ0FBQ0g7SUFFekMsT0FBTztRQUNMSSxTQUFTLHdDQUNKQyxJQUFBQSw4QkFBUSxFQUFDTixNQUFNSyxPQUFPO1lBQ3pCRSxvQkFBb0I7MkJBQUUsb0JBQUEsVUFDcEJDLGtCQUNBQztvQkFFQSxNQUFNQyxXQUFXLE1BQU1QLGFBQWFRLG9CQUFvQixDQUFDO3dCQUN2REMsZUFBZUo7d0JBQ2ZDLFlBQVlBLGNBQWNJLHVCQUFXLENBQUNDLFdBQVcsQ0FBQ0w7b0JBQ3BEO29CQUNBLE9BQU9DO2dCQUNUO2dDQVJFRixrQkFDQUM7Ozs7WUFRRk0sNkJBQTZCOzJCQUFFLG9CQUFBLFVBQzdCUCxrQkFDQUM7b0JBRUEsTUFBTUMsV0FBVyxNQUFNUCxhQUFhYSw2QkFBNkIsQ0FBQzt3QkFDaEVKLGVBQWVKO3dCQUNmQyxZQUFZQSxjQUFjSSx1QkFBVyxDQUFDQyxXQUFXLENBQUNMO29CQUNwRDtvQkFDQSxPQUFPQztnQkFDVDtnQ0FSRUYsa0JBQ0FDOzs7O1lBUUZRLG1CQUFtQjsyQkFBRSxvQkFBQSxVQUNuQlQsa0JBQ0FDO29CQUVBLE1BQU1DLFdBQVcsTUFBTVAsYUFBYWUsbUJBQW1CLENBQUM7d0JBQ3RETixlQUFlSjt3QkFDZkMsWUFBWUEsY0FBY0ksdUJBQVcsQ0FBQ0MsV0FBVyxDQUFDTDtvQkFDcEQ7b0JBQ0EsT0FBT0M7Z0JBQ1Q7Z0NBUkVGLGtCQUNBQzs7OztZQVFGVSxhQUFhOzJCQUFFLG9CQUFBLFVBQ2JYLGtCQUNBWSx3QkFDQUMsNkJBQ0FaO29CQUVBLE1BQU1DLFdBQVcsTUFBTVAsYUFBYW1CLGFBQWEsQ0FBQzt3QkFDaERWLGVBQWVKO3dCQUNmZSxrQkFBa0JIO3dCQUNsQkksa0JBQWtCSDt3QkFDbEJaLFlBQVlBLGNBQWNJLHVCQUFXLENBQUNDLFdBQVcsQ0FBQ0w7b0JBQ3BEO29CQUNBLE9BQU9DO2dCQUNUO2dDQVpFRixrQkFDQVksd0JBQ0FDLDZCQUNBWjs7OztZQVVGZ0Isb0JBQW9COzJCQUFFLG9CQUFBLFVBQ3BCQyxrQkFDQWpCO29CQUVBLE1BQU1DLFdBQVcsTUFBTVAsYUFBYXdCLG9CQUFvQixDQUFDO3dCQUN2REMsZUFBZUY7d0JBQ2ZqQixZQUFZQSxjQUFjSSx1QkFBVyxDQUFDQyxXQUFXLENBQUNMO29CQUNwRDtvQkFDQSxPQUFPQztnQkFDVDtnQ0FSRWdCLGtCQUNBakI7Ozs7WUFRRm9CLFVBQVU7MkJBQUUsb0JBQUEsVUFDVkMsUUFDQXJCO29CQUVBLE1BQU1DLFdBQVcsTUFBTVAsYUFBYTRCLFVBQVUsQ0FBQzt3QkFDN0NELFFBQVFBO3dCQUNSckIsWUFBWUEsY0FBY0ksdUJBQVcsQ0FBQ0MsV0FBVyxDQUFDTDtvQkFDcEQ7b0JBQ0EsT0FBT0M7Z0JBQ1Q7Z0NBUkVvQixRQUNBckI7Ozs7WUFRRnVCLDZCQUE2QjsyQkFBRSxvQkFBQSxVQUM3Qk4sa0JBQ0FqQjtvQkFFQSxNQUFNQyxXQUFXLE1BQU1QLGFBQWE4Qiw2QkFBNkIsQ0FBQzt3QkFDaEVMLGVBQWVGO3dCQUNmakIsWUFBWUEsY0FBY0ksdUJBQVcsQ0FBQ0MsV0FBVyxDQUFDTDtvQkFDcEQ7b0JBQ0EsT0FBT0M7Z0JBQ1Q7Z0NBUkVnQixrQkFDQWpCOzs7OztJQVNOO0FBQ0YifQ==
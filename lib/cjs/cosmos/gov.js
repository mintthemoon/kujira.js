"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupGovExtension", {
    enumerable: true,
    get: function() {
        return setupGovExtension;
    }
});
const _stargate = require("@cosmjs/stargate");
const _queryclient = require("@cosmjs/stargate/build/queryclient");
const _pagination = require("cosmjs-types/cosmos/base/query/v1beta1/pagination");
const _query = require("cosmjs-types/cosmos/gov/v1/query");
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
function setupGovExtension(base) {
    const rpc = (0, _stargate.createProtobufRpcClient)(base);
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new _query.QueryClientImpl(rpc);
    return {
        gov: {
            params: function() {
                var _ref = _async_to_generator(function*(parametersType) {
                    const response = yield queryService.Params({
                        paramsType: parametersType
                    });
                    return response;
                });
                return function(parametersType) {
                    return _ref.apply(this, arguments);
                };
            }(),
            proposal: function() {
                var _ref = _async_to_generator(function*(proposalId) {
                    const response = yield queryService.Proposal({
                        proposalId: (0, _queryclient.longify)(proposalId)
                    });
                    return response;
                });
                return function(proposalId) {
                    return _ref.apply(this, arguments);
                };
            }(),
            proposals: function() {
                var _ref = _async_to_generator(function*(proposalStatus, depositorAddress, voterAddress, pagination) {
                    const response = yield queryService.Proposals({
                        proposalStatus,
                        depositor: depositorAddress,
                        voter: voterAddress,
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(proposalStatus, depositorAddress, voterAddress, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            deposit: function() {
                var _ref = _async_to_generator(function*(proposalId, depositorAddress) {
                    const response = yield queryService.Deposit({
                        proposalId: (0, _queryclient.longify)(proposalId),
                        depositor: depositorAddress
                    });
                    return response;
                });
                return function(proposalId, depositorAddress) {
                    return _ref.apply(this, arguments);
                };
            }(),
            deposits: function() {
                var _ref = _async_to_generator(function*(proposalId, pagination) {
                    const response = yield queryService.Deposits({
                        proposalId: (0, _queryclient.longify)(proposalId),
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(proposalId, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            vote: function() {
                var _ref = _async_to_generator(function*(proposalId, voterAddress) {
                    const response = yield queryService.Vote({
                        proposalId: (0, _queryclient.longify)(proposalId),
                        voter: voterAddress
                    });
                    return response;
                });
                return function(proposalId, voterAddress) {
                    return _ref.apply(this, arguments);
                };
            }(),
            votes: function() {
                var _ref = _async_to_generator(function*(proposalId, pagination) {
                    const response = yield queryService.Votes({
                        proposalId: (0, _queryclient.longify)(proposalId),
                        pagination: pagination && _pagination.PageRequest.fromPartial(pagination)
                    });
                    return response;
                });
                return function(proposalId, pagination) {
                    return _ref.apply(this, arguments);
                };
            }(),
            tally: function() {
                var _ref = _async_to_generator(function*(proposalId) {
                    const response = yield queryService.TallyResult({
                        proposalId: (0, _queryclient.longify)(proposalId)
                    });
                    return response;
                });
                return function(proposalId) {
                    return _ref.apply(this, arguments);
                };
            }()
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3Ntb3MvZ292LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEdvdlBhcmFtc1R5cGUsXG4gIEdvdlByb3Bvc2FsSWQsXG4gIFF1ZXJ5Q2xpZW50LFxuICBjcmVhdGVQcm90b2J1ZlJwY0NsaWVudCxcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IGxvbmdpZnkgfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZS9idWlsZC9xdWVyeWNsaWVudFwiO1xuaW1wb3J0IHsgUGFnZVJlcXVlc3QgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYXNlL3F1ZXJ5L3YxYmV0YTEvcGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgUHJvcG9zYWxTdGF0dXMgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9nb3YvdjEvZ292XCI7XG5pbXBvcnQge1xuICBRdWVyeUNsaWVudEltcGwsXG4gIFF1ZXJ5RGVwb3NpdFJlc3BvbnNlLFxuICBRdWVyeURlcG9zaXRzUmVzcG9uc2UsXG4gIFF1ZXJ5UGFyYW1zUmVzcG9uc2UsXG4gIFF1ZXJ5UHJvcG9zYWxSZXNwb25zZSxcbiAgUXVlcnlQcm9wb3NhbHNSZXNwb25zZSxcbiAgUXVlcnlUYWxseVJlc3VsdFJlc3BvbnNlLFxuICBRdWVyeVZvdGVSZXNwb25zZSxcbiAgUXVlcnlWb3Rlc1Jlc3BvbnNlLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9nb3YvdjEvcXVlcnlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHb3ZFeHRlbnNpb24ge1xuICByZWFkb25seSBnb3Y6IHtcbiAgICByZWFkb25seSBwYXJhbXM6IChcbiAgICAgIHBhcmFtZXRlcnNUeXBlOiBHb3ZQYXJhbXNUeXBlXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5UGFyYW1zUmVzcG9uc2U+O1xuICAgIHJlYWRvbmx5IHByb3Bvc2FsczogKFxuICAgICAgcHJvcG9zYWxTdGF0dXM6IFByb3Bvc2FsU3RhdHVzLFxuICAgICAgZGVwb3NpdG9yOiBzdHJpbmcsXG4gICAgICB2b3Rlcjogc3RyaW5nLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5UHJvcG9zYWxzUmVzcG9uc2U+O1xuICAgIHJlYWRvbmx5IHByb3Bvc2FsOiAoXG4gICAgICBwcm9wb3NhbElkOiBHb3ZQcm9wb3NhbElkXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5UHJvcG9zYWxSZXNwb25zZT47XG4gICAgcmVhZG9ubHkgZGVwb3NpdHM6IChcbiAgICAgIHByb3Bvc2FsSWQ6IEdvdlByb3Bvc2FsSWQsXG4gICAgICBwYWdpbmF0aW9uPzogUGFnZVJlcXVlc3RcbiAgICApID0+IFByb21pc2U8UXVlcnlEZXBvc2l0c1Jlc3BvbnNlPjtcbiAgICByZWFkb25seSBkZXBvc2l0OiAoXG4gICAgICBwcm9wb3NhbElkOiBHb3ZQcm9wb3NhbElkLFxuICAgICAgZGVwb3NpdG9yQWRkcmVzczogc3RyaW5nXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5RGVwb3NpdFJlc3BvbnNlPjtcbiAgICByZWFkb25seSB0YWxseTogKFxuICAgICAgcHJvcG9zYWxJZDogR292UHJvcG9zYWxJZFxuICAgICkgPT4gUHJvbWlzZTxRdWVyeVRhbGx5UmVzdWx0UmVzcG9uc2U+O1xuICAgIHJlYWRvbmx5IHZvdGVzOiAoXG4gICAgICBwcm9wb3NhbElkOiBHb3ZQcm9wb3NhbElkLFxuICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5Vm90ZXNSZXNwb25zZT47XG4gICAgcmVhZG9ubHkgdm90ZTogKFxuICAgICAgcHJvcG9zYWxJZDogR292UHJvcG9zYWxJZCxcbiAgICAgIHZvdGVyQWRkcmVzczogc3RyaW5nXG4gICAgKSA9PiBQcm9taXNlPFF1ZXJ5Vm90ZVJlc3BvbnNlPjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwR292RXh0ZW5zaW9uKGJhc2U6IFF1ZXJ5Q2xpZW50KTogR292RXh0ZW5zaW9uIHtcbiAgY29uc3QgcnBjID0gY3JlYXRlUHJvdG9idWZScGNDbGllbnQoYmFzZSk7XG5cbiAgLy8gVXNlIHRoaXMgc2VydmljZSB0byBnZXQgZWFzeSB0eXBlZCBhY2Nlc3MgdG8gcXVlcnkgbWV0aG9kc1xuICAvLyBUaGlzIGNhbm5vdCBiZSB1c2VkIGZvciBwcm9vZiB2ZXJpZmljYXRpb25cbiAgY29uc3QgcXVlcnlTZXJ2aWNlID0gbmV3IFF1ZXJ5Q2xpZW50SW1wbChycGMpO1xuXG4gIHJldHVybiB7XG4gICAgZ292OiB7XG4gICAgICBwYXJhbXM6IGFzeW5jIChcbiAgICAgICAgcGFyYW1ldGVyc1R5cGU6IEdvdlBhcmFtc1R5cGVcbiAgICAgICk6IFByb21pc2U8UXVlcnlQYXJhbXNSZXNwb25zZT4gPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5U2VydmljZS5QYXJhbXMoe1xuICAgICAgICAgIHBhcmFtc1R5cGU6IHBhcmFtZXRlcnNUeXBlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSxcbiAgICAgIHByb3Bvc2FsOiBhc3luYyAoXG4gICAgICAgIHByb3Bvc2FsSWQ6IEdvdlByb3Bvc2FsSWRcbiAgICAgICk6IFByb21pc2U8UXVlcnlQcm9wb3NhbFJlc3BvbnNlPiA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLlByb3Bvc2FsKHtcbiAgICAgICAgICBwcm9wb3NhbElkOiBsb25naWZ5KHByb3Bvc2FsSWQpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSxcblxuICAgICAgcHJvcG9zYWxzOiBhc3luYyAoXG4gICAgICAgIHByb3Bvc2FsU3RhdHVzOiBQcm9wb3NhbFN0YXR1cyxcbiAgICAgICAgZGVwb3NpdG9yQWRkcmVzczogc3RyaW5nLFxuICAgICAgICB2b3RlckFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVNlcnZpY2UuUHJvcG9zYWxzKHtcbiAgICAgICAgICBwcm9wb3NhbFN0YXR1cyxcbiAgICAgICAgICBkZXBvc2l0b3I6IGRlcG9zaXRvckFkZHJlc3MsXG4gICAgICAgICAgdm90ZXI6IHZvdGVyQWRkcmVzcyxcbiAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uICYmIFBhZ2VSZXF1ZXN0LmZyb21QYXJ0aWFsKHBhZ2luYXRpb24pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSxcbiAgICAgIGRlcG9zaXQ6IGFzeW5jIChcbiAgICAgICAgcHJvcG9zYWxJZDogR292UHJvcG9zYWxJZCxcbiAgICAgICAgZGVwb3NpdG9yQWRkcmVzczogc3RyaW5nXG4gICAgICApOiBQcm9taXNlPFF1ZXJ5RGVwb3NpdFJlc3BvbnNlPiA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLkRlcG9zaXQoe1xuICAgICAgICAgIHByb3Bvc2FsSWQ6IGxvbmdpZnkocHJvcG9zYWxJZCksXG4gICAgICAgICAgZGVwb3NpdG9yOiBkZXBvc2l0b3JBZGRyZXNzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSxcblxuICAgICAgZGVwb3NpdHM6IGFzeW5jIChwcm9wb3NhbElkOiBHb3ZQcm9wb3NhbElkLCBwYWdpbmF0aW9uPzogUGFnZVJlcXVlc3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVNlcnZpY2UuRGVwb3NpdHMoe1xuICAgICAgICAgIHByb3Bvc2FsSWQ6IGxvbmdpZnkocHJvcG9zYWxJZCksXG4gICAgICAgICAgcGFnaW5hdGlvbjogcGFnaW5hdGlvbiAmJiBQYWdlUmVxdWVzdC5mcm9tUGFydGlhbChwYWdpbmF0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0sXG4gICAgICB2b3RlOiBhc3luYyAoXG4gICAgICAgIHByb3Bvc2FsSWQ6IEdvdlByb3Bvc2FsSWQsXG4gICAgICAgIHZvdGVyQWRkcmVzczogc3RyaW5nXG4gICAgICApOiBQcm9taXNlPFF1ZXJ5Vm90ZVJlc3BvbnNlPiA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLlZvdGUoe1xuICAgICAgICAgIHByb3Bvc2FsSWQ6IGxvbmdpZnkocHJvcG9zYWxJZCksXG4gICAgICAgICAgdm90ZXI6IHZvdGVyQWRkcmVzcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0sXG5cbiAgICAgIHZvdGVzOiBhc3luYyAocHJvcG9zYWxJZDogR292UHJvcG9zYWxJZCwgcGFnaW5hdGlvbj86IFBhZ2VSZXF1ZXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlTZXJ2aWNlLlZvdGVzKHtcbiAgICAgICAgICBwcm9wb3NhbElkOiBsb25naWZ5KHByb3Bvc2FsSWQpLFxuICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24gJiYgUGFnZVJlcXVlc3QuZnJvbVBhcnRpYWwocGFnaW5hdGlvbiksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgICAgdGFsbHk6IGFzeW5jIChcbiAgICAgICAgcHJvcG9zYWxJZDogR292UHJvcG9zYWxJZFxuICAgICAgKTogUHJvbWlzZTxRdWVyeVRhbGx5UmVzdWx0UmVzcG9uc2U+ID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVNlcnZpY2UuVGFsbHlSZXN1bHQoe1xuICAgICAgICAgIHByb3Bvc2FsSWQ6IGxvbmdpZnkocHJvcG9zYWxJZCksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsic2V0dXBHb3ZFeHRlbnNpb24iLCJiYXNlIiwicnBjIiwiY3JlYXRlUHJvdG9idWZScGNDbGllbnQiLCJxdWVyeVNlcnZpY2UiLCJRdWVyeUNsaWVudEltcGwiLCJnb3YiLCJwYXJhbXMiLCJwYXJhbWV0ZXJzVHlwZSIsInJlc3BvbnNlIiwiUGFyYW1zIiwicGFyYW1zVHlwZSIsInByb3Bvc2FsIiwicHJvcG9zYWxJZCIsIlByb3Bvc2FsIiwibG9uZ2lmeSIsInByb3Bvc2FscyIsInByb3Bvc2FsU3RhdHVzIiwiZGVwb3NpdG9yQWRkcmVzcyIsInZvdGVyQWRkcmVzcyIsInBhZ2luYXRpb24iLCJQcm9wb3NhbHMiLCJkZXBvc2l0b3IiLCJ2b3RlciIsIlBhZ2VSZXF1ZXN0IiwiZnJvbVBhcnRpYWwiLCJkZXBvc2l0IiwiRGVwb3NpdCIsImRlcG9zaXRzIiwiRGVwb3NpdHMiLCJ2b3RlIiwiVm90ZSIsInZvdGVzIiwiVm90ZXMiLCJ0YWxseSIsIlRhbGx5UmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7OytCQXlEZ0JBOzs7ZUFBQUE7OzswQkFwRFQ7NkJBQ2lCOzRCQUNJO3VCQVlyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBLFNBQVNBLGtCQUFrQkMsSUFBaUI7SUFDakQsTUFBTUMsTUFBTUMsSUFBQUEsaUNBQXVCLEVBQUNGO0lBRXBDLDZEQUE2RDtJQUM3RCw2Q0FBNkM7SUFDN0MsTUFBTUcsZUFBZSxJQUFJQyxzQkFBZSxDQUFDSDtJQUV6QyxPQUFPO1FBQ0xJLEtBQUs7WUFDSEMsTUFBTTsyQkFBRSxvQkFBQSxVQUNOQztvQkFFQSxNQUFNQyxXQUFXLE1BQU1MLGFBQWFNLE1BQU0sQ0FBQzt3QkFDekNDLFlBQVlIO29CQUNkO29CQUNBLE9BQU9DO2dCQUNUO2dDQU5FRDs7OztZQU9GSSxRQUFROzJCQUFFLG9CQUFBLFVBQ1JDO29CQUVBLE1BQU1KLFdBQVcsTUFBTUwsYUFBYVUsUUFBUSxDQUFDO3dCQUMzQ0QsWUFBWUUsSUFBQUEsb0JBQU8sRUFBQ0Y7b0JBQ3RCO29CQUNBLE9BQU9KO2dCQUNUO2dDQU5FSTs7OztZQVFGRyxTQUFTOzJCQUFFLG9CQUFBLFVBQ1RDLGdCQUNBQyxrQkFDQUMsY0FDQUM7b0JBRUEsTUFBTVgsV0FBVyxNQUFNTCxhQUFhaUIsU0FBUyxDQUFDO3dCQUM1Q0o7d0JBQ0FLLFdBQVdKO3dCQUNYSyxPQUFPSjt3QkFDUEMsWUFBWUEsY0FBY0ksdUJBQVcsQ0FBQ0MsV0FBVyxDQUFDTDtvQkFDcEQ7b0JBQ0EsT0FBT1g7Z0JBQ1Q7Z0NBWkVRLGdCQUNBQyxrQkFDQUMsY0FDQUM7Ozs7WUFVRk0sT0FBTzsyQkFBRSxvQkFBQSxVQUNQYixZQUNBSztvQkFFQSxNQUFNVCxXQUFXLE1BQU1MLGFBQWF1QixPQUFPLENBQUM7d0JBQzFDZCxZQUFZRSxJQUFBQSxvQkFBTyxFQUFDRjt3QkFDcEJTLFdBQVdKO29CQUNiO29CQUNBLE9BQU9UO2dCQUNUO2dDQVJFSSxZQUNBSzs7OztZQVNGVSxRQUFROzJCQUFFLG9CQUFBLFVBQU9mLFlBQTJCTztvQkFDMUMsTUFBTVgsV0FBVyxNQUFNTCxhQUFheUIsUUFBUSxDQUFDO3dCQUMzQ2hCLFlBQVlFLElBQUFBLG9CQUFPLEVBQUNGO3dCQUNwQk8sWUFBWUEsY0FBY0ksdUJBQVcsQ0FBQ0MsV0FBVyxDQUFDTDtvQkFDcEQ7b0JBQ0EsT0FBT1g7Z0JBQ1Q7Z0NBTmlCSSxZQUEyQk87Ozs7WUFPNUNVLElBQUk7MkJBQUUsb0JBQUEsVUFDSmpCLFlBQ0FNO29CQUVBLE1BQU1WLFdBQVcsTUFBTUwsYUFBYTJCLElBQUksQ0FBQzt3QkFDdkNsQixZQUFZRSxJQUFBQSxvQkFBTyxFQUFDRjt3QkFDcEJVLE9BQU9KO29CQUNUO29CQUNBLE9BQU9WO2dCQUNUO2dDQVJFSSxZQUNBTTs7OztZQVNGYSxLQUFLOzJCQUFFLG9CQUFBLFVBQU9uQixZQUEyQk87b0JBQ3ZDLE1BQU1YLFdBQVcsTUFBTUwsYUFBYTZCLEtBQUssQ0FBQzt3QkFDeENwQixZQUFZRSxJQUFBQSxvQkFBTyxFQUFDRjt3QkFDcEJPLFlBQVlBLGNBQWNJLHVCQUFXLENBQUNDLFdBQVcsQ0FBQ0w7b0JBQ3BEO29CQUNBLE9BQU9YO2dCQUNUO2dDQU5jSSxZQUEyQk87Ozs7WUFPekNjLEtBQUs7MkJBQUUsb0JBQUEsVUFDTHJCO29CQUVBLE1BQU1KLFdBQVcsTUFBTUwsYUFBYStCLFdBQVcsQ0FBQzt3QkFDOUN0QixZQUFZRSxJQUFBQSxvQkFBTyxFQUFDRjtvQkFDdEI7b0JBQ0EsT0FBT0o7Z0JBQ1Q7Z0NBTkVJOzs7O1FBT0o7SUFDRjtBQUNGIn0=
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
    MARKETS: function() {
        return MARKETS;
    },
    castConfig: function() {
        return castConfig;
    },
    castPosition: function() {
        return castPosition;
    },
    castStatus: function() {
        return castStatus;
    },
    defaultPosition: function() {
        return defaultPosition;
    },
    fetchPosition: function() {
        return fetchPosition;
    }
});
const _bignumber = require("@ethersproject/bignumber");
const _denom = require("./denom");
const _network = require("./network");
const _contractsjson = /*#__PURE__*/ _interop_require_default(require("./resources/contracts.json"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
const castStatus = (res)=>({
        debtAmount: _bignumber.BigNumber.from(res.debt_amount)
    });
const castConfig = (json)=>({
        owner: json.owner,
        stableDenom: _denom.Denom.from(json.stable_denom),
        stableDenomAdmin: json.stable_denom_admin,
        collateralDenom: _denom.Denom.from(json.collateral_denom),
        oracleDenom: json.oracle_denom,
        maxRatio: parseFloat(json.max_ratio),
        mintFee: parseFloat(json.mint_fee),
        interestRate: parseFloat(json.interest_rate),
        orcaAddress: json.orca_address,
        maxDebt: _bignumber.BigNumber.from(json.max_debt),
        liquidationThreshold: _bignumber.BigNumber.from(json.liquidation_threshold),
        liquidationRatio: parseFloat(json.liquidation_ratio)
    });
const compile = (a, v)=>_object_spread_props(_object_spread({}, a), {
        [v.address]: _object_spread({
            address: v.address
        }, castConfig(v.config))
    });
const MARKETS = {
    [_network.MAINNET]: _contractsjson.default["kaiyo-1"].uskMarket.reduce(compile, {}),
    [_network.TESTNET]: _contractsjson.default["harpoon-4"].uskMarket.reduce(compile, {}),
    [_network.POND]: {}
};
const castPosition = (p)=>({
        owner: p.owner,
        deposit_amount: _bignumber.BigNumber.from(p.deposit_amount),
        mint_amount: _bignumber.BigNumber.from(p.mint_amount),
        interest_amount: _bignumber.BigNumber.from(p.interest_amount),
        liquidation_price: p.liquidation_price ? parseFloat(p.liquidation_price) : null
    });
const defaultPosition = (owner)=>({
        owner: owner || "",
        deposit_amount: _bignumber.BigNumber.from(0),
        mint_amount: _bignumber.BigNumber.from(0),
        interest_amount: _bignumber.BigNumber.from(0),
        liquidation_price: null
    });
const fetchPosition = (queryClient, address, account)=>queryClient.wasm.queryContractSmart(address, {
        position: {
            address: account.address
        }
    }).then(castPosition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgRGVub20gfSBmcm9tIFwiLi9kZW5vbVwiO1xuaW1wb3J0IHsgTUFJTk5FVCwgTkVUV09SSywgUE9ORCwgVEVTVE5FVCB9IGZyb20gXCIuL25ldHdvcmtcIjtcbmltcG9ydCB7IEt1amlyYVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIi4vcXVlcnlDbGllbnRcIjtcbmltcG9ydCBjb250cmFjdHMgZnJvbSBcIi4vcmVzb3VyY2VzL2NvbnRyYWN0cy5qc29uXCI7XG5cbmV4cG9ydCB0eXBlIE1hcmtldCA9IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBvd25lcjogc3RyaW5nO1xuICBzdGFibGVEZW5vbTogRGVub207XG4gIHN0YWJsZURlbm9tQWRtaW46IHN0cmluZztcbiAgY29sbGF0ZXJhbERlbm9tOiBEZW5vbTtcbiAgb3JhY2xlRGVub206IHN0cmluZztcbiAgbWF4UmF0aW86IG51bWJlcjtcbiAgbWludEZlZTogbnVtYmVyO1xuICBpbnRlcmVzdFJhdGU6IG51bWJlcjtcbiAgb3JjYUFkZHJlc3M6IHN0cmluZztcbiAgbWF4RGVidDogQmlnTnVtYmVyO1xuICBsaXF1aWRhdGlvblRocmVzaG9sZDogQmlnTnVtYmVyO1xuICBsaXF1aWRhdGlvblJhdGlvOiBudW1iZXI7XG59O1xuXG50eXBlIENvbmZpZ1Jlc3BvbnNlID0ge1xuICBvd25lcjogc3RyaW5nO1xuICBzdGFibGVfZGVub206IHN0cmluZztcbiAgc3RhYmxlX2Rlbm9tX2FkbWluOiBzdHJpbmc7XG4gIGNvbGxhdGVyYWxfZGVub206IHN0cmluZztcbiAgb3JhY2xlX2Rlbm9tOiBzdHJpbmc7XG4gIG1heF9yYXRpbzogc3RyaW5nO1xuICBtaW50X2ZlZTogc3RyaW5nO1xuICBpbnRlcmVzdF9yYXRlOiBzdHJpbmc7XG4gIG9yY2FfYWRkcmVzczogc3RyaW5nO1xuICBtYXhfZGVidDogc3RyaW5nO1xuICBsaXF1aWRhdGlvbl90aHJlc2hvbGQ6IHN0cmluZztcbiAgbGlxdWlkYXRpb25fcmF0aW86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENvbmZpZyA9IHtcbiAgb3duZXI6IHN0cmluZztcbiAgc3RhYmxlRGVub206IHN0cmluZztcbiAgc3RhYmxlRGVub21BZG1pbjogc3RyaW5nO1xuICBjb2xsYXRlcmFsRGVub206IHN0cmluZztcbiAgb3JhY2xlRGVub206IHN0cmluZztcbiAgbWF4UmF0aW86IHN0cmluZztcbiAgbWludEZlZTogc3RyaW5nO1xuICBpbnRlcmVzdFJhdGU6IHN0cmluZztcbiAgb3JjYUFkZHJlc3M6IHN0cmluZztcbiAgbWF4RGVidDogc3RyaW5nO1xuICBsaXF1aWRhdGlvblRocmVzaG9sZDogc3RyaW5nO1xuICBsaXF1aWRhdGlvblJhdGlvOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTdGF0dXMgPSB7XG4gIGRlYnRBbW91bnQ6IEJpZ051bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXN0U3RhdHVzID0gKHJlczogeyBkZWJ0X2Ftb3VudDogc3RyaW5nIH0pOiBTdGF0dXMgPT4gKHtcbiAgZGVidEFtb3VudDogQmlnTnVtYmVyLmZyb20ocmVzLmRlYnRfYW1vdW50KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FzdENvbmZpZyA9IChqc29uOiBDb25maWdSZXNwb25zZSk6IE9taXQ8TWFya2V0LCBcImFkZHJlc3NcIj4gPT4gKHtcbiAgb3duZXI6IGpzb24ub3duZXIsXG4gIHN0YWJsZURlbm9tOiBEZW5vbS5mcm9tKGpzb24uc3RhYmxlX2Rlbm9tKSxcbiAgc3RhYmxlRGVub21BZG1pbjoganNvbi5zdGFibGVfZGVub21fYWRtaW4sXG4gIGNvbGxhdGVyYWxEZW5vbTogRGVub20uZnJvbShqc29uLmNvbGxhdGVyYWxfZGVub20pLFxuICBvcmFjbGVEZW5vbToganNvbi5vcmFjbGVfZGVub20sXG4gIG1heFJhdGlvOiBwYXJzZUZsb2F0KGpzb24ubWF4X3JhdGlvKSxcbiAgbWludEZlZTogcGFyc2VGbG9hdChqc29uLm1pbnRfZmVlKSxcbiAgaW50ZXJlc3RSYXRlOiBwYXJzZUZsb2F0KGpzb24uaW50ZXJlc3RfcmF0ZSksXG4gIG9yY2FBZGRyZXNzOiBqc29uLm9yY2FfYWRkcmVzcyxcbiAgbWF4RGVidDogQmlnTnVtYmVyLmZyb20oanNvbi5tYXhfZGVidCksXG4gIGxpcXVpZGF0aW9uVGhyZXNob2xkOiBCaWdOdW1iZXIuZnJvbShqc29uLmxpcXVpZGF0aW9uX3RocmVzaG9sZCksXG4gIGxpcXVpZGF0aW9uUmF0aW86IHBhcnNlRmxvYXQoanNvbi5saXF1aWRhdGlvbl9yYXRpbyksXG59KTtcblxuY29uc3QgY29tcGlsZSA9IChcbiAgYTogUmVjb3JkPHN0cmluZywgTWFya2V0PixcbiAgdjogeyBhZGRyZXNzOiBzdHJpbmc7IGNvbmZpZzogQ29uZmlnUmVzcG9uc2UgfVxuKSA9PiAoe1xuICAuLi5hLFxuICBbdi5hZGRyZXNzXTogeyBhZGRyZXNzOiB2LmFkZHJlc3MsIC4uLmNhc3RDb25maWcodi5jb25maWcpIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IE1BUktFVFM6IFJlY29yZDxORVRXT1JLLCBSZWNvcmQ8c3RyaW5nLCBNYXJrZXQ+PiA9IHtcbiAgW01BSU5ORVRdOiBjb250cmFjdHNbXCJrYWl5by0xXCJdLnVza01hcmtldC5yZWR1Y2UoY29tcGlsZSwge30pLFxuICBbVEVTVE5FVF06IGNvbnRyYWN0c1tcImhhcnBvb24tNFwiXS51c2tNYXJrZXQucmVkdWNlKGNvbXBpbGUsIHt9KSxcbiAgW1BPTkRdOiB7fSxcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uUmVzcG9uc2UgPSB7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGRlcG9zaXRfYW1vdW50OiBzdHJpbmc7XG4gIG1pbnRfYW1vdW50OiBzdHJpbmc7XG4gIGludGVyZXN0X2Ftb3VudDogc3RyaW5nO1xuICBsaXF1aWRhdGlvbl9wcmljZTogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uID0ge1xuICBvd25lcjogc3RyaW5nO1xuICBkZXBvc2l0X2Ftb3VudDogQmlnTnVtYmVyO1xuICBtaW50X2Ftb3VudDogQmlnTnVtYmVyO1xuICBpbnRlcmVzdF9hbW91bnQ6IEJpZ051bWJlcjtcbiAgbGlxdWlkYXRpb25fcHJpY2U6IG51bWJlciB8IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzdFBvc2l0aW9uID0gKHA6IFBvc2l0aW9uUmVzcG9uc2UpOiBQb3NpdGlvbiA9PiAoe1xuICBvd25lcjogcC5vd25lcixcbiAgZGVwb3NpdF9hbW91bnQ6IEJpZ051bWJlci5mcm9tKHAuZGVwb3NpdF9hbW91bnQpLFxuICBtaW50X2Ftb3VudDogQmlnTnVtYmVyLmZyb20ocC5taW50X2Ftb3VudCksXG4gIGludGVyZXN0X2Ftb3VudDogQmlnTnVtYmVyLmZyb20ocC5pbnRlcmVzdF9hbW91bnQpLFxuICBsaXF1aWRhdGlvbl9wcmljZTogcC5saXF1aWRhdGlvbl9wcmljZVxuICAgID8gcGFyc2VGbG9hdChwLmxpcXVpZGF0aW9uX3ByaWNlKVxuICAgIDogbnVsbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBvc2l0aW9uID0gKG93bmVyPzogc3RyaW5nKTogUG9zaXRpb24gPT4gKHtcbiAgb3duZXI6IG93bmVyIHx8IFwiXCIsXG4gIGRlcG9zaXRfYW1vdW50OiBCaWdOdW1iZXIuZnJvbSgwKSxcbiAgbWludF9hbW91bnQ6IEJpZ051bWJlci5mcm9tKDApLFxuICBpbnRlcmVzdF9hbW91bnQ6IEJpZ051bWJlci5mcm9tKDApLFxuICBsaXF1aWRhdGlvbl9wcmljZTogbnVsbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3NpdGlvbiA9IChcbiAgcXVlcnlDbGllbnQ6IEt1amlyYVF1ZXJ5Q2xpZW50LFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGFjY291bnQ6IHsgYWRkcmVzczogc3RyaW5nIH1cbik6IFByb21pc2U8UG9zaXRpb24+ID0+XG4gIHF1ZXJ5Q2xpZW50Lndhc21cbiAgICAucXVlcnlDb250cmFjdFNtYXJ0KGFkZHJlc3MsIHtcbiAgICAgIHBvc2l0aW9uOiB7IGFkZHJlc3M6IGFjY291bnQuYWRkcmVzcyB9LFxuICAgIH0pXG4gICAgLnRoZW4oY2FzdFBvc2l0aW9uKTtcbiJdLCJuYW1lcyI6WyJNQVJLRVRTIiwiY2FzdENvbmZpZyIsImNhc3RQb3NpdGlvbiIsImNhc3RTdGF0dXMiLCJkZWZhdWx0UG9zaXRpb24iLCJmZXRjaFBvc2l0aW9uIiwicmVzIiwiZGVidEFtb3VudCIsIkJpZ051bWJlciIsImZyb20iLCJkZWJ0X2Ftb3VudCIsImpzb24iLCJvd25lciIsInN0YWJsZURlbm9tIiwiRGVub20iLCJzdGFibGVfZGVub20iLCJzdGFibGVEZW5vbUFkbWluIiwic3RhYmxlX2Rlbm9tX2FkbWluIiwiY29sbGF0ZXJhbERlbm9tIiwiY29sbGF0ZXJhbF9kZW5vbSIsIm9yYWNsZURlbm9tIiwib3JhY2xlX2Rlbm9tIiwibWF4UmF0aW8iLCJwYXJzZUZsb2F0IiwibWF4X3JhdGlvIiwibWludEZlZSIsIm1pbnRfZmVlIiwiaW50ZXJlc3RSYXRlIiwiaW50ZXJlc3RfcmF0ZSIsIm9yY2FBZGRyZXNzIiwib3JjYV9hZGRyZXNzIiwibWF4RGVidCIsIm1heF9kZWJ0IiwibGlxdWlkYXRpb25UaHJlc2hvbGQiLCJsaXF1aWRhdGlvbl90aHJlc2hvbGQiLCJsaXF1aWRhdGlvblJhdGlvIiwibGlxdWlkYXRpb25fcmF0aW8iLCJjb21waWxlIiwiYSIsInYiLCJhZGRyZXNzIiwiY29uZmlnIiwiTUFJTk5FVCIsImNvbnRyYWN0cyIsInVza01hcmtldCIsInJlZHVjZSIsIlRFU1RORVQiLCJQT05EIiwicCIsImRlcG9zaXRfYW1vdW50IiwibWludF9hbW91bnQiLCJpbnRlcmVzdF9hbW91bnQiLCJsaXF1aWRhdGlvbl9wcmljZSIsInF1ZXJ5Q2xpZW50IiwiYWNjb3Vu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
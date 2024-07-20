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
    FILTERED: function() {
        return FILTERED;
    },
    MARKETS: function() {
        return MARKETS;
    },
    castBid: function() {
        return castBid;
    },
    castBidPool: function() {
        return castBidPool;
    },
    getMarkets: function() {
        return getMarkets;
    }
});
const _bignumber = require("@ethersproject/bignumber");
const _denom = require("../denom");
const _network = require("../network");
const _contractsjson = /*#__PURE__*/ _interop_require_default(require("../resources/contracts.json"));
const _types = _export_star(require("./types"), exports);
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
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
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
const castBidPool = (response)=>({
        totalBidAmount: _bignumber.BigNumber.from(response.total_bid_amount),
        premiumRate: parseFloat(response.premium_rate),
        premiumRateInt: (0, _bignumber.parseFixed)(response.premium_rate, 18),
        currentEpoch: parseInt(response.current_epoch)
    });
const castBid = (response)=>({
        idx: parseInt(response.idx),
        premiumSlot: response.premium_slot,
        amount: _bignumber.BigNumber.from(response.amount),
        pendingLiquidatedCollateral: _bignumber.BigNumber.from(response.pending_liquidated_collateral),
        waitEnd: response.wait_end && new Date(parseInt(response.wait_end) * 1000) || null
    });
const FILTERED = [
    "kujira1pq2qqjuxwm93sxhr9s3vlpj7lrtjfdml68qjf3a3qfpw5ctj67nsdfmkrv",
    "kujira13wd3tqd3k2hldhcpqm6wnf00rdx98yf5a2sv3s7mzs7uwgqzvpnsk9kygc",
    "kujira1utx63kua509ys806g0nu87lpmrppwhfzguctj8p7qr9d8h8cj0hsavaw8e"
];
const insertMarket = (a, v)=>{
    if (FILTERED.includes(v.address)) return a;
    const collateralDenom = _denom.Denom.from(v.config.collateral_denom);
    return _object_spread_props(_object_spread({}, a), {
        [v.address]: {
            label: collateralDenom.symbol,
            chain: _types.Chain.Kujira,
            protocol: _types.Protocol.USK,
            collateralDenom,
            bidDenom: _denom.Denom.from(v.config.bid_denom),
            repayDenom: _denom.Denom.from(v.config.bid_denom),
            type: _types.MarketType.USK,
            address: v.address,
            botFirst: false,
            activators: [
                "kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"
            ],
            bidThreshold: _bignumber.BigNumber.from(v.config.bid_threshold),
            maxSlot: v.config.max_slot,
            premiumRatePerSlot: parseFloat(v.config.premium_rate_per_slot),
            premiumRatePerSlotInt: (0, _bignumber.parseFixed)(v.config.premium_rate_per_slot, 18),
            waitingPeriod: v.config.waiting_period,
            markets: v.config.markets,
            liquidationFee: parseFloat(v.config.liquidation_fee),
            withdrawalFee: parseFloat(v.config.withdrawal_fee)
        }
    });
};
const MARKETS = {
    [_network.MAINNET]: Object.values(_contractsjson.default[_network.MAINNET].orca).reduce(insertMarket, {}),
    [_network.TESTNET]: Object.values(_contractsjson.default[_network.TESTNET].orca).reduce(insertMarket, {}),
    [_network.POND]: {}
};
const getMarkets = (network)=>{
    const markets = Object.values(MARKETS[network || _network.MAINNET]);
    return markets.sort((a, b)=>a.collateralDenom.compare(b.collateralDenom));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcmNhL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpZ051bWJlciwgcGFyc2VGaXhlZCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IERlbm9tIH0gZnJvbSBcIi4uL2Rlbm9tXCI7XG5pbXBvcnQgeyBNQUlOTkVULCBORVRXT1JLLCBQT05ELCBURVNUTkVUIH0gZnJvbSBcIi4uL25ldHdvcmtcIjtcbmltcG9ydCBjb250cmFjdHMgZnJvbSBcIi4uL3Jlc291cmNlcy9jb250cmFjdHMuanNvblwiO1xuaW1wb3J0IHtcbiAgQmlkLFxuICBCaWRQb29sLFxuICBCaWRQb29sUmVzcG9uc2UsXG4gIEJpZFJlc3BvbnNlLFxuICBDaGFpbixcbiAgTWFya2V0LFxuICBNYXJrZXRUeXBlLFxuICBQcm90b2NvbCxcbn0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjYXN0QmlkUG9vbCA9IChyZXNwb25zZTogQmlkUG9vbFJlc3BvbnNlKTogQmlkUG9vbCA9PiAoe1xuICB0b3RhbEJpZEFtb3VudDogQmlnTnVtYmVyLmZyb20ocmVzcG9uc2UudG90YWxfYmlkX2Ftb3VudCksXG4gIHByZW1pdW1SYXRlOiBwYXJzZUZsb2F0KHJlc3BvbnNlLnByZW1pdW1fcmF0ZSksXG4gIHByZW1pdW1SYXRlSW50OiBwYXJzZUZpeGVkKHJlc3BvbnNlLnByZW1pdW1fcmF0ZSwgMTgpLFxuICBjdXJyZW50RXBvY2g6IHBhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnRfZXBvY2gpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjYXN0QmlkID0gKHJlc3BvbnNlOiBCaWRSZXNwb25zZSk6IEJpZCA9PiAoe1xuICBpZHg6IHBhcnNlSW50KHJlc3BvbnNlLmlkeCksXG4gIHByZW1pdW1TbG90OiByZXNwb25zZS5wcmVtaXVtX3Nsb3QsXG4gIGFtb3VudDogQmlnTnVtYmVyLmZyb20ocmVzcG9uc2UuYW1vdW50KSxcbiAgcGVuZGluZ0xpcXVpZGF0ZWRDb2xsYXRlcmFsOiBCaWdOdW1iZXIuZnJvbShcbiAgICByZXNwb25zZS5wZW5kaW5nX2xpcXVpZGF0ZWRfY29sbGF0ZXJhbFxuICApLFxuICB3YWl0RW5kOlxuICAgIChyZXNwb25zZS53YWl0X2VuZCAmJiBuZXcgRGF0ZShwYXJzZUludChyZXNwb25zZS53YWl0X2VuZCkgKiAxMDAwKSkgfHwgbnVsbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRklMVEVSRUQgPSBbXG4gIFwia3VqaXJhMXBxMnFxanV4d205M3N4aHI5czN2bHBqN2xydGpmZG1sNjhxamYzYTNxZnB3NWN0ajY3bnNkZm1rcnZcIixcbiAgXCJrdWppcmExM3dkM3RxZDNrMmhsZGhjcHFtNnduZjAwcmR4OTh5ZjVhMnN2M3M3bXpzN3V3Z3F6dnBuc2s5a3lnY1wiLFxuICBcImt1amlyYTF1dHg2M2t1YTUwOXlzODA2ZzBudTg3bHBtcnBwd2hmemd1Y3RqOHA3cXI5ZDhoOGNqMGhzYXZhdzhlXCIsXG5dO1xuXG5jb25zdCBpbnNlcnRNYXJrZXQgPSAoXG4gIGE6IFJlY29yZDxzdHJpbmcsIE1hcmtldD4sXG4gIHY6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBjb25maWc6IHtcbiAgICAgIG93bmVyOiBzdHJpbmc7XG4gICAgICBtYXJrZXRzOiBzdHJpbmdbXTtcbiAgICAgIGJpZF9kZW5vbTogc3RyaW5nO1xuICAgICAgY29sbGF0ZXJhbF9kZW5vbTogc3RyaW5nO1xuICAgICAgYmlkX3RocmVzaG9sZDogc3RyaW5nO1xuICAgICAgbWF4X3Nsb3Q6IG51bWJlcjtcbiAgICAgIHByZW1pdW1fcmF0ZV9wZXJfc2xvdDogc3RyaW5nO1xuICAgICAgY2xvc2VkX3Nsb3RzOiBudW1iZXJbXTtcbiAgICAgIHdhaXRpbmdfcGVyaW9kOiBudW1iZXI7XG4gICAgICBsaXF1aWRhdGlvbl9mZWU6IHN0cmluZztcbiAgICAgIHdpdGhkcmF3YWxfZmVlOiBzdHJpbmc7XG4gICAgICBmZWVfYWRkcmVzczogc3RyaW5nO1xuICAgIH07XG4gIH1cbik6IFJlY29yZDxzdHJpbmcsIE1hcmtldD4gPT4ge1xuICBpZiAoRklMVEVSRUQuaW5jbHVkZXModi5hZGRyZXNzKSkgcmV0dXJuIGE7XG4gIGNvbnN0IGNvbGxhdGVyYWxEZW5vbSA9IERlbm9tLmZyb20odi5jb25maWcuY29sbGF0ZXJhbF9kZW5vbSk7XG4gIHJldHVybiB7XG4gICAgLi4uYSxcbiAgICBbdi5hZGRyZXNzXToge1xuICAgICAgbGFiZWw6IGNvbGxhdGVyYWxEZW5vbS5zeW1ib2wsXG4gICAgICBjaGFpbjogQ2hhaW4uS3VqaXJhLFxuICAgICAgcHJvdG9jb2w6IFByb3RvY29sLlVTSyxcbiAgICAgIGNvbGxhdGVyYWxEZW5vbSxcbiAgICAgIGJpZERlbm9tOiBEZW5vbS5mcm9tKHYuY29uZmlnLmJpZF9kZW5vbSksXG4gICAgICByZXBheURlbm9tOiBEZW5vbS5mcm9tKHYuY29uZmlnLmJpZF9kZW5vbSksXG4gICAgICB0eXBlOiBNYXJrZXRUeXBlLlVTSyxcbiAgICAgIGFkZHJlc3M6IHYuYWRkcmVzcyxcbiAgICAgIGJvdEZpcnN0OiBmYWxzZSxcbiAgICAgIGFjdGl2YXRvcnM6IFtcImt1amlyYTE2YTAzaGs1ZXY2OTYzYTR5ajNrY3J2bWg0aGVqM3czajcwa3YyblwiXSxcbiAgICAgIGJpZFRocmVzaG9sZDogQmlnTnVtYmVyLmZyb20odi5jb25maWcuYmlkX3RocmVzaG9sZCksXG4gICAgICBtYXhTbG90OiB2LmNvbmZpZy5tYXhfc2xvdCxcbiAgICAgIHByZW1pdW1SYXRlUGVyU2xvdDogcGFyc2VGbG9hdCh2LmNvbmZpZy5wcmVtaXVtX3JhdGVfcGVyX3Nsb3QpLFxuICAgICAgcHJlbWl1bVJhdGVQZXJTbG90SW50OiBwYXJzZUZpeGVkKHYuY29uZmlnLnByZW1pdW1fcmF0ZV9wZXJfc2xvdCwgMTgpLFxuICAgICAgd2FpdGluZ1BlcmlvZDogdi5jb25maWcud2FpdGluZ19wZXJpb2QsXG4gICAgICBtYXJrZXRzOiB2LmNvbmZpZy5tYXJrZXRzLFxuICAgICAgbGlxdWlkYXRpb25GZWU6IHBhcnNlRmxvYXQodi5jb25maWcubGlxdWlkYXRpb25fZmVlKSxcbiAgICAgIHdpdGhkcmF3YWxGZWU6IHBhcnNlRmxvYXQodi5jb25maWcud2l0aGRyYXdhbF9mZWUpLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgTUFSS0VUUyA9IHtcbiAgW01BSU5ORVRdOiBPYmplY3QudmFsdWVzKGNvbnRyYWN0c1tNQUlOTkVUXS5vcmNhKS5yZWR1Y2UoaW5zZXJ0TWFya2V0LCB7fSksXG4gIFtURVNUTkVUXTogT2JqZWN0LnZhbHVlcyhjb250cmFjdHNbVEVTVE5FVF0ub3JjYSkucmVkdWNlKGluc2VydE1hcmtldCwge30pLFxuICBbUE9ORF06IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1hcmtldHMgPSAobmV0d29yaz86IE5FVFdPUkspOiBBcnJheTxNYXJrZXQ+ID0+IHtcbiAgY29uc3QgbWFya2V0cyA9IE9iamVjdC52YWx1ZXMoTUFSS0VUU1tuZXR3b3JrIHx8IE1BSU5ORVRdKTtcbiAgcmV0dXJuIG1hcmtldHMuc29ydCgoYSwgYikgPT4gYS5jb2xsYXRlcmFsRGVub20uY29tcGFyZShiLmNvbGxhdGVyYWxEZW5vbSkpO1xufTtcbiJdLCJuYW1lcyI6WyJGSUxURVJFRCIsIk1BUktFVFMiLCJjYXN0QmlkIiwiY2FzdEJpZFBvb2wiLCJnZXRNYXJrZXRzIiwicmVzcG9uc2UiLCJ0b3RhbEJpZEFtb3VudCIsIkJpZ051bWJlciIsImZyb20iLCJ0b3RhbF9iaWRfYW1vdW50IiwicHJlbWl1bVJhdGUiLCJwYXJzZUZsb2F0IiwicHJlbWl1bV9yYXRlIiwicHJlbWl1bVJhdGVJbnQiLCJwYXJzZUZpeGVkIiwiY3VycmVudEVwb2NoIiwicGFyc2VJbnQiLCJjdXJyZW50X2Vwb2NoIiwiaWR4IiwicHJlbWl1bVNsb3QiLCJwcmVtaXVtX3Nsb3QiLCJhbW91bnQiLCJwZW5kaW5nTGlxdWlkYXRlZENvbGxhdGVyYWwiLCJwZW5kaW5nX2xpcXVpZGF0ZWRfY29sbGF0ZXJhbCIsIndhaXRFbmQiLCJ3YWl0X2VuZCIsIkRhdGUiLCJpbnNlcnRNYXJrZXQiLCJhIiwidiIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImNvbGxhdGVyYWxEZW5vbSIsIkRlbm9tIiwiY29uZmlnIiwiY29sbGF0ZXJhbF9kZW5vbSIsImxhYmVsIiwic3ltYm9sIiwiY2hhaW4iLCJDaGFpbiIsIkt1amlyYSIsInByb3RvY29sIiwiUHJvdG9jb2wiLCJVU0siLCJiaWREZW5vbSIsImJpZF9kZW5vbSIsInJlcGF5RGVub20iLCJ0eXBlIiwiTWFya2V0VHlwZSIsImJvdEZpcnN0IiwiYWN0aXZhdG9ycyIsImJpZFRocmVzaG9sZCIsImJpZF90aHJlc2hvbGQiLCJtYXhTbG90IiwibWF4X3Nsb3QiLCJwcmVtaXVtUmF0ZVBlclNsb3QiLCJwcmVtaXVtX3JhdGVfcGVyX3Nsb3QiLCJwcmVtaXVtUmF0ZVBlclNsb3RJbnQiLCJ3YWl0aW5nUGVyaW9kIiwid2FpdGluZ19wZXJpb2QiLCJtYXJrZXRzIiwibGlxdWlkYXRpb25GZWUiLCJsaXF1aWRhdGlvbl9mZWUiLCJ3aXRoZHJhd2FsRmVlIiwid2l0aGRyYXdhbF9mZWUiLCJNQUlOTkVUIiwiT2JqZWN0IiwidmFsdWVzIiwiY29udHJhY3RzIiwib3JjYSIsInJlZHVjZSIsIlRFU1RORVQiLCJQT05EIiwibmV0d29yayIsInNvcnQiLCJiIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFrQ2FBLFFBQVE7ZUFBUkE7O0lBc0RBQyxPQUFPO2VBQVBBOztJQWpFQUMsT0FBTztlQUFQQTs7SUFQQUMsV0FBVztlQUFYQTs7SUE4RUFDLFVBQVU7ZUFBVkE7OzsyQkE5RnlCO3VCQUNoQjt5QkFDMEI7c0VBQzFCO29DQVVmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
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
import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { Denom } from "../denom";
import { MAINNET, POND, TESTNET } from "../network";
import contracts from "../resources/contracts.json";
import { Chain, MarketType, Protocol } from "./types";
export * from "./types";
export const castBidPool = (response)=>({
        totalBidAmount: BigNumber.from(response.total_bid_amount),
        premiumRate: parseFloat(response.premium_rate),
        premiumRateInt: parseFixed(response.premium_rate, 18),
        currentEpoch: parseInt(response.current_epoch)
    });
export const castBid = (response)=>({
        idx: parseInt(response.idx),
        premiumSlot: response.premium_slot,
        amount: BigNumber.from(response.amount),
        pendingLiquidatedCollateral: BigNumber.from(response.pending_liquidated_collateral),
        waitEnd: response.wait_end && new Date(parseInt(response.wait_end) * 1000) || null
    });
export const FILTERED = [
    "kujira1pq2qqjuxwm93sxhr9s3vlpj7lrtjfdml68qjf3a3qfpw5ctj67nsdfmkrv",
    "kujira13wd3tqd3k2hldhcpqm6wnf00rdx98yf5a2sv3s7mzs7uwgqzvpnsk9kygc",
    "kujira1utx63kua509ys806g0nu87lpmrppwhfzguctj8p7qr9d8h8cj0hsavaw8e"
];
const insertMarket = (a, v)=>{
    if (FILTERED.includes(v.address)) return a;
    const collateralDenom = Denom.from(v.config.collateral_denom);
    return _object_spread_props(_object_spread({}, a), {
        [v.address]: {
            label: collateralDenom.symbol,
            chain: Chain.Kujira,
            protocol: Protocol.USK,
            collateralDenom,
            bidDenom: Denom.from(v.config.bid_denom),
            repayDenom: Denom.from(v.config.bid_denom),
            type: MarketType.USK,
            address: v.address,
            botFirst: false,
            activators: [
                "kujira16a03hk5ev6963a4yj3kcrvmh4hej3w3j70kv2n"
            ],
            bidThreshold: BigNumber.from(v.config.bid_threshold),
            maxSlot: v.config.max_slot,
            premiumRatePerSlot: parseFloat(v.config.premium_rate_per_slot),
            premiumRatePerSlotInt: parseFixed(v.config.premium_rate_per_slot, 18),
            waitingPeriod: v.config.waiting_period,
            markets: v.config.markets,
            liquidationFee: parseFloat(v.config.liquidation_fee),
            withdrawalFee: parseFloat(v.config.withdrawal_fee)
        }
    });
};
export const MARKETS = {
    [MAINNET]: Object.values(contracts[MAINNET].orca).reduce(insertMarket, {}),
    [TESTNET]: Object.values(contracts[TESTNET].orca).reduce(insertMarket, {}),
    [POND]: {}
};
export const getMarkets = (network)=>{
    const markets = Object.values(MARKETS[network || MAINNET]);
    return markets.sort((a, b)=>a.collateralDenom.compare(b.collateralDenom));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vcmNhL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpZ051bWJlciwgcGFyc2VGaXhlZCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IERlbm9tIH0gZnJvbSBcIi4uL2Rlbm9tXCI7XG5pbXBvcnQgeyBNQUlOTkVULCBORVRXT1JLLCBQT05ELCBURVNUTkVUIH0gZnJvbSBcIi4uL25ldHdvcmtcIjtcbmltcG9ydCBjb250cmFjdHMgZnJvbSBcIi4uL3Jlc291cmNlcy9jb250cmFjdHMuanNvblwiO1xuaW1wb3J0IHtcbiAgQmlkLFxuICBCaWRQb29sLFxuICBCaWRQb29sUmVzcG9uc2UsXG4gIEJpZFJlc3BvbnNlLFxuICBDaGFpbixcbiAgTWFya2V0LFxuICBNYXJrZXRUeXBlLFxuICBQcm90b2NvbCxcbn0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjYXN0QmlkUG9vbCA9IChyZXNwb25zZTogQmlkUG9vbFJlc3BvbnNlKTogQmlkUG9vbCA9PiAoe1xuICB0b3RhbEJpZEFtb3VudDogQmlnTnVtYmVyLmZyb20ocmVzcG9uc2UudG90YWxfYmlkX2Ftb3VudCksXG4gIHByZW1pdW1SYXRlOiBwYXJzZUZsb2F0KHJlc3BvbnNlLnByZW1pdW1fcmF0ZSksXG4gIHByZW1pdW1SYXRlSW50OiBwYXJzZUZpeGVkKHJlc3BvbnNlLnByZW1pdW1fcmF0ZSwgMTgpLFxuICBjdXJyZW50RXBvY2g6IHBhcnNlSW50KHJlc3BvbnNlLmN1cnJlbnRfZXBvY2gpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBjYXN0QmlkID0gKHJlc3BvbnNlOiBCaWRSZXNwb25zZSk6IEJpZCA9PiAoe1xuICBpZHg6IHBhcnNlSW50KHJlc3BvbnNlLmlkeCksXG4gIHByZW1pdW1TbG90OiByZXNwb25zZS5wcmVtaXVtX3Nsb3QsXG4gIGFtb3VudDogQmlnTnVtYmVyLmZyb20ocmVzcG9uc2UuYW1vdW50KSxcbiAgcGVuZGluZ0xpcXVpZGF0ZWRDb2xsYXRlcmFsOiBCaWdOdW1iZXIuZnJvbShcbiAgICByZXNwb25zZS5wZW5kaW5nX2xpcXVpZGF0ZWRfY29sbGF0ZXJhbFxuICApLFxuICB3YWl0RW5kOlxuICAgIChyZXNwb25zZS53YWl0X2VuZCAmJiBuZXcgRGF0ZShwYXJzZUludChyZXNwb25zZS53YWl0X2VuZCkgKiAxMDAwKSkgfHwgbnVsbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRklMVEVSRUQgPSBbXG4gIFwia3VqaXJhMXBxMnFxanV4d205M3N4aHI5czN2bHBqN2xydGpmZG1sNjhxamYzYTNxZnB3NWN0ajY3bnNkZm1rcnZcIixcbiAgXCJrdWppcmExM3dkM3RxZDNrMmhsZGhjcHFtNnduZjAwcmR4OTh5ZjVhMnN2M3M3bXpzN3V3Z3F6dnBuc2s5a3lnY1wiLFxuICBcImt1amlyYTF1dHg2M2t1YTUwOXlzODA2ZzBudTg3bHBtcnBwd2hmemd1Y3RqOHA3cXI5ZDhoOGNqMGhzYXZhdzhlXCIsXG5dO1xuXG5jb25zdCBpbnNlcnRNYXJrZXQgPSAoXG4gIGE6IFJlY29yZDxzdHJpbmcsIE1hcmtldD4sXG4gIHY6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBjb25maWc6IHtcbiAgICAgIG93bmVyOiBzdHJpbmc7XG4gICAgICBtYXJrZXRzOiBzdHJpbmdbXTtcbiAgICAgIGJpZF9kZW5vbTogc3RyaW5nO1xuICAgICAgY29sbGF0ZXJhbF9kZW5vbTogc3RyaW5nO1xuICAgICAgYmlkX3RocmVzaG9sZDogc3RyaW5nO1xuICAgICAgbWF4X3Nsb3Q6IG51bWJlcjtcbiAgICAgIHByZW1pdW1fcmF0ZV9wZXJfc2xvdDogc3RyaW5nO1xuICAgICAgY2xvc2VkX3Nsb3RzOiBudW1iZXJbXTtcbiAgICAgIHdhaXRpbmdfcGVyaW9kOiBudW1iZXI7XG4gICAgICBsaXF1aWRhdGlvbl9mZWU6IHN0cmluZztcbiAgICAgIHdpdGhkcmF3YWxfZmVlOiBzdHJpbmc7XG4gICAgICBmZWVfYWRkcmVzczogc3RyaW5nO1xuICAgIH07XG4gIH1cbik6IFJlY29yZDxzdHJpbmcsIE1hcmtldD4gPT4ge1xuICBpZiAoRklMVEVSRUQuaW5jbHVkZXModi5hZGRyZXNzKSkgcmV0dXJuIGE7XG4gIGNvbnN0IGNvbGxhdGVyYWxEZW5vbSA9IERlbm9tLmZyb20odi5jb25maWcuY29sbGF0ZXJhbF9kZW5vbSk7XG4gIHJldHVybiB7XG4gICAgLi4uYSxcbiAgICBbdi5hZGRyZXNzXToge1xuICAgICAgbGFiZWw6IGNvbGxhdGVyYWxEZW5vbS5zeW1ib2wsXG4gICAgICBjaGFpbjogQ2hhaW4uS3VqaXJhLFxuICAgICAgcHJvdG9jb2w6IFByb3RvY29sLlVTSyxcbiAgICAgIGNvbGxhdGVyYWxEZW5vbSxcbiAgICAgIGJpZERlbm9tOiBEZW5vbS5mcm9tKHYuY29uZmlnLmJpZF9kZW5vbSksXG4gICAgICByZXBheURlbm9tOiBEZW5vbS5mcm9tKHYuY29uZmlnLmJpZF9kZW5vbSksXG4gICAgICB0eXBlOiBNYXJrZXRUeXBlLlVTSyxcbiAgICAgIGFkZHJlc3M6IHYuYWRkcmVzcyxcbiAgICAgIGJvdEZpcnN0OiBmYWxzZSxcbiAgICAgIGFjdGl2YXRvcnM6IFtcImt1amlyYTE2YTAzaGs1ZXY2OTYzYTR5ajNrY3J2bWg0aGVqM3czajcwa3YyblwiXSxcbiAgICAgIGJpZFRocmVzaG9sZDogQmlnTnVtYmVyLmZyb20odi5jb25maWcuYmlkX3RocmVzaG9sZCksXG4gICAgICBtYXhTbG90OiB2LmNvbmZpZy5tYXhfc2xvdCxcbiAgICAgIHByZW1pdW1SYXRlUGVyU2xvdDogcGFyc2VGbG9hdCh2LmNvbmZpZy5wcmVtaXVtX3JhdGVfcGVyX3Nsb3QpLFxuICAgICAgcHJlbWl1bVJhdGVQZXJTbG90SW50OiBwYXJzZUZpeGVkKHYuY29uZmlnLnByZW1pdW1fcmF0ZV9wZXJfc2xvdCwgMTgpLFxuICAgICAgd2FpdGluZ1BlcmlvZDogdi5jb25maWcud2FpdGluZ19wZXJpb2QsXG4gICAgICBtYXJrZXRzOiB2LmNvbmZpZy5tYXJrZXRzLFxuICAgICAgbGlxdWlkYXRpb25GZWU6IHBhcnNlRmxvYXQodi5jb25maWcubGlxdWlkYXRpb25fZmVlKSxcbiAgICAgIHdpdGhkcmF3YWxGZWU6IHBhcnNlRmxvYXQodi5jb25maWcud2l0aGRyYXdhbF9mZWUpLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgTUFSS0VUUyA9IHtcbiAgW01BSU5ORVRdOiBPYmplY3QudmFsdWVzKGNvbnRyYWN0c1tNQUlOTkVUXS5vcmNhKS5yZWR1Y2UoaW5zZXJ0TWFya2V0LCB7fSksXG4gIFtURVNUTkVUXTogT2JqZWN0LnZhbHVlcyhjb250cmFjdHNbVEVTVE5FVF0ub3JjYSkucmVkdWNlKGluc2VydE1hcmtldCwge30pLFxuICBbUE9ORF06IHt9LFxufTtcblxuZXhwb3J0IGNvbnN0IGdldE1hcmtldHMgPSAobmV0d29yaz86IE5FVFdPUkspOiBBcnJheTxNYXJrZXQ+ID0+IHtcbiAgY29uc3QgbWFya2V0cyA9IE9iamVjdC52YWx1ZXMoTUFSS0VUU1tuZXR3b3JrIHx8IE1BSU5ORVRdKTtcbiAgcmV0dXJuIG1hcmtldHMuc29ydCgoYSwgYikgPT4gYS5jb2xsYXRlcmFsRGVub20uY29tcGFyZShiLmNvbGxhdGVyYWxEZW5vbSkpO1xufTtcbiJdLCJuYW1lcyI6WyJCaWdOdW1iZXIiLCJwYXJzZUZpeGVkIiwiRGVub20iLCJNQUlOTkVUIiwiUE9ORCIsIlRFU1RORVQiLCJjb250cmFjdHMiLCJDaGFpbiIsIk1hcmtldFR5cGUiLCJQcm90b2NvbCIsImNhc3RCaWRQb29sIiwicmVzcG9uc2UiLCJ0b3RhbEJpZEFtb3VudCIsImZyb20iLCJ0b3RhbF9iaWRfYW1vdW50IiwicHJlbWl1bVJhdGUiLCJwYXJzZUZsb2F0IiwicHJlbWl1bV9yYXRlIiwicHJlbWl1bVJhdGVJbnQiLCJjdXJyZW50RXBvY2giLCJwYXJzZUludCIsImN1cnJlbnRfZXBvY2giLCJjYXN0QmlkIiwiaWR4IiwicHJlbWl1bVNsb3QiLCJwcmVtaXVtX3Nsb3QiLCJhbW91bnQiLCJwZW5kaW5nTGlxdWlkYXRlZENvbGxhdGVyYWwiLCJwZW5kaW5nX2xpcXVpZGF0ZWRfY29sbGF0ZXJhbCIsIndhaXRFbmQiLCJ3YWl0X2VuZCIsIkRhdGUiLCJGSUxURVJFRCIsImluc2VydE1hcmtldCIsImEiLCJ2IiwiaW5jbHVkZXMiLCJhZGRyZXNzIiwiY29sbGF0ZXJhbERlbm9tIiwiY29uZmlnIiwiY29sbGF0ZXJhbF9kZW5vbSIsImxhYmVsIiwic3ltYm9sIiwiY2hhaW4iLCJLdWppcmEiLCJwcm90b2NvbCIsIlVTSyIsImJpZERlbm9tIiwiYmlkX2Rlbm9tIiwicmVwYXlEZW5vbSIsInR5cGUiLCJib3RGaXJzdCIsImFjdGl2YXRvcnMiLCJiaWRUaHJlc2hvbGQiLCJiaWRfdGhyZXNob2xkIiwibWF4U2xvdCIsIm1heF9zbG90IiwicHJlbWl1bVJhdGVQZXJTbG90IiwicHJlbWl1bV9yYXRlX3Blcl9zbG90IiwicHJlbWl1bVJhdGVQZXJTbG90SW50Iiwid2FpdGluZ1BlcmlvZCIsIndhaXRpbmdfcGVyaW9kIiwibWFya2V0cyIsImxpcXVpZGF0aW9uRmVlIiwibGlxdWlkYXRpb25fZmVlIiwid2l0aGRyYXdhbEZlZSIsIndpdGhkcmF3YWxfZmVlIiwiTUFSS0VUUyIsIk9iamVjdCIsInZhbHVlcyIsIm9yY2EiLCJyZWR1Y2UiLCJnZXRNYXJrZXRzIiwibmV0d29yayIsInNvcnQiLCJiIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVMsRUFBRUMsVUFBVSxRQUFRLDJCQUEyQjtBQUNqRSxTQUFTQyxLQUFLLFFBQVEsV0FBVztBQUNqQyxTQUFTQyxPQUFPLEVBQVdDLElBQUksRUFBRUMsT0FBTyxRQUFRLGFBQWE7QUFDN0QsT0FBT0MsZUFBZSw4QkFBOEI7QUFDcEQs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
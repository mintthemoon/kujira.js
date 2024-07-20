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
import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "./denom";
import { MAINNET, POND, TESTNET } from "./network";
import contracts from "./resources/contracts.json";
export const castStatus = (res)=>({
        debtAmount: BigNumber.from(res.debt_amount)
    });
export const castConfig = (json)=>({
        owner: json.owner,
        stableDenom: Denom.from(json.stable_denom),
        stableDenomAdmin: json.stable_denom_admin,
        collateralDenom: Denom.from(json.collateral_denom),
        oracleDenom: json.oracle_denom,
        maxRatio: parseFloat(json.max_ratio),
        mintFee: parseFloat(json.mint_fee),
        interestRate: parseFloat(json.interest_rate),
        orcaAddress: json.orca_address,
        maxDebt: BigNumber.from(json.max_debt),
        liquidationThreshold: BigNumber.from(json.liquidation_threshold),
        liquidationRatio: parseFloat(json.liquidation_ratio)
    });
const compile = (a, v)=>_object_spread_props(_object_spread({}, a), {
        [v.address]: _object_spread({
            address: v.address
        }, castConfig(v.config))
    });
export const MARKETS = {
    [MAINNET]: contracts["kaiyo-1"].uskMarket.reduce(compile, {}),
    [TESTNET]: contracts["harpoon-4"].uskMarket.reduce(compile, {}),
    [POND]: {}
};
export const castPosition = (p)=>({
        owner: p.owner,
        deposit_amount: BigNumber.from(p.deposit_amount),
        mint_amount: BigNumber.from(p.mint_amount),
        interest_amount: BigNumber.from(p.interest_amount),
        liquidation_price: p.liquidation_price ? parseFloat(p.liquidation_price) : null
    });
export const defaultPosition = (owner)=>({
        owner: owner || "",
        deposit_amount: BigNumber.from(0),
        mint_amount: BigNumber.from(0),
        interest_amount: BigNumber.from(0),
        liquidation_price: null
    });
export const fetchPosition = (queryClient, address, account)=>queryClient.wasm.queryContractSmart(address, {
        position: {
            address: account.address
        }
    }).then(castPosition);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgRGVub20gfSBmcm9tIFwiLi9kZW5vbVwiO1xuaW1wb3J0IHsgTUFJTk5FVCwgTkVUV09SSywgUE9ORCwgVEVTVE5FVCB9IGZyb20gXCIuL25ldHdvcmtcIjtcbmltcG9ydCB7IEt1amlyYVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIi4vcXVlcnlDbGllbnRcIjtcbmltcG9ydCBjb250cmFjdHMgZnJvbSBcIi4vcmVzb3VyY2VzL2NvbnRyYWN0cy5qc29uXCI7XG5cbmV4cG9ydCB0eXBlIE1hcmtldCA9IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBvd25lcjogc3RyaW5nO1xuICBzdGFibGVEZW5vbTogRGVub207XG4gIHN0YWJsZURlbm9tQWRtaW46IHN0cmluZztcbiAgY29sbGF0ZXJhbERlbm9tOiBEZW5vbTtcbiAgb3JhY2xlRGVub206IHN0cmluZztcbiAgbWF4UmF0aW86IG51bWJlcjtcbiAgbWludEZlZTogbnVtYmVyO1xuICBpbnRlcmVzdFJhdGU6IG51bWJlcjtcbiAgb3JjYUFkZHJlc3M6IHN0cmluZztcbiAgbWF4RGVidDogQmlnTnVtYmVyO1xuICBsaXF1aWRhdGlvblRocmVzaG9sZDogQmlnTnVtYmVyO1xuICBsaXF1aWRhdGlvblJhdGlvOiBudW1iZXI7XG59O1xuXG50eXBlIENvbmZpZ1Jlc3BvbnNlID0ge1xuICBvd25lcjogc3RyaW5nO1xuICBzdGFibGVfZGVub206IHN0cmluZztcbiAgc3RhYmxlX2Rlbm9tX2FkbWluOiBzdHJpbmc7XG4gIGNvbGxhdGVyYWxfZGVub206IHN0cmluZztcbiAgb3JhY2xlX2Rlbm9tOiBzdHJpbmc7XG4gIG1heF9yYXRpbzogc3RyaW5nO1xuICBtaW50X2ZlZTogc3RyaW5nO1xuICBpbnRlcmVzdF9yYXRlOiBzdHJpbmc7XG4gIG9yY2FfYWRkcmVzczogc3RyaW5nO1xuICBtYXhfZGVidDogc3RyaW5nO1xuICBsaXF1aWRhdGlvbl90aHJlc2hvbGQ6IHN0cmluZztcbiAgbGlxdWlkYXRpb25fcmF0aW86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENvbmZpZyA9IHtcbiAgb3duZXI6IHN0cmluZztcbiAgc3RhYmxlRGVub206IHN0cmluZztcbiAgc3RhYmxlRGVub21BZG1pbjogc3RyaW5nO1xuICBjb2xsYXRlcmFsRGVub206IHN0cmluZztcbiAgb3JhY2xlRGVub206IHN0cmluZztcbiAgbWF4UmF0aW86IHN0cmluZztcbiAgbWludEZlZTogc3RyaW5nO1xuICBpbnRlcmVzdFJhdGU6IHN0cmluZztcbiAgb3JjYUFkZHJlc3M6IHN0cmluZztcbiAgbWF4RGVidDogc3RyaW5nO1xuICBsaXF1aWRhdGlvblRocmVzaG9sZDogc3RyaW5nO1xuICBsaXF1aWRhdGlvblJhdGlvOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBTdGF0dXMgPSB7XG4gIGRlYnRBbW91bnQ6IEJpZ051bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXN0U3RhdHVzID0gKHJlczogeyBkZWJ0X2Ftb3VudDogc3RyaW5nIH0pOiBTdGF0dXMgPT4gKHtcbiAgZGVidEFtb3VudDogQmlnTnVtYmVyLmZyb20ocmVzLmRlYnRfYW1vdW50KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FzdENvbmZpZyA9IChqc29uOiBDb25maWdSZXNwb25zZSk6IE9taXQ8TWFya2V0LCBcImFkZHJlc3NcIj4gPT4gKHtcbiAgb3duZXI6IGpzb24ub3duZXIsXG4gIHN0YWJsZURlbm9tOiBEZW5vbS5mcm9tKGpzb24uc3RhYmxlX2Rlbm9tKSxcbiAgc3RhYmxlRGVub21BZG1pbjoganNvbi5zdGFibGVfZGVub21fYWRtaW4sXG4gIGNvbGxhdGVyYWxEZW5vbTogRGVub20uZnJvbShqc29uLmNvbGxhdGVyYWxfZGVub20pLFxuICBvcmFjbGVEZW5vbToganNvbi5vcmFjbGVfZGVub20sXG4gIG1heFJhdGlvOiBwYXJzZUZsb2F0KGpzb24ubWF4X3JhdGlvKSxcbiAgbWludEZlZTogcGFyc2VGbG9hdChqc29uLm1pbnRfZmVlKSxcbiAgaW50ZXJlc3RSYXRlOiBwYXJzZUZsb2F0KGpzb24uaW50ZXJlc3RfcmF0ZSksXG4gIG9yY2FBZGRyZXNzOiBqc29uLm9yY2FfYWRkcmVzcyxcbiAgbWF4RGVidDogQmlnTnVtYmVyLmZyb20oanNvbi5tYXhfZGVidCksXG4gIGxpcXVpZGF0aW9uVGhyZXNob2xkOiBCaWdOdW1iZXIuZnJvbShqc29uLmxpcXVpZGF0aW9uX3RocmVzaG9sZCksXG4gIGxpcXVpZGF0aW9uUmF0aW86IHBhcnNlRmxvYXQoanNvbi5saXF1aWRhdGlvbl9yYXRpbyksXG59KTtcblxuY29uc3QgY29tcGlsZSA9IChcbiAgYTogUmVjb3JkPHN0cmluZywgTWFya2V0PixcbiAgdjogeyBhZGRyZXNzOiBzdHJpbmc7IGNvbmZpZzogQ29uZmlnUmVzcG9uc2UgfVxuKSA9PiAoe1xuICAuLi5hLFxuICBbdi5hZGRyZXNzXTogeyBhZGRyZXNzOiB2LmFkZHJlc3MsIC4uLmNhc3RDb25maWcodi5jb25maWcpIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IE1BUktFVFM6IFJlY29yZDxORVRXT1JLLCBSZWNvcmQ8c3RyaW5nLCBNYXJrZXQ+PiA9IHtcbiAgW01BSU5ORVRdOiBjb250cmFjdHNbXCJrYWl5by0xXCJdLnVza01hcmtldC5yZWR1Y2UoY29tcGlsZSwge30pLFxuICBbVEVTVE5FVF06IGNvbnRyYWN0c1tcImhhcnBvb24tNFwiXS51c2tNYXJrZXQucmVkdWNlKGNvbXBpbGUsIHt9KSxcbiAgW1BPTkRdOiB7fSxcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uUmVzcG9uc2UgPSB7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGRlcG9zaXRfYW1vdW50OiBzdHJpbmc7XG4gIG1pbnRfYW1vdW50OiBzdHJpbmc7XG4gIGludGVyZXN0X2Ftb3VudDogc3RyaW5nO1xuICBsaXF1aWRhdGlvbl9wcmljZTogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uID0ge1xuICBvd25lcjogc3RyaW5nO1xuICBkZXBvc2l0X2Ftb3VudDogQmlnTnVtYmVyO1xuICBtaW50X2Ftb3VudDogQmlnTnVtYmVyO1xuICBpbnRlcmVzdF9hbW91bnQ6IEJpZ051bWJlcjtcbiAgbGlxdWlkYXRpb25fcHJpY2U6IG51bWJlciB8IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzdFBvc2l0aW9uID0gKHA6IFBvc2l0aW9uUmVzcG9uc2UpOiBQb3NpdGlvbiA9PiAoe1xuICBvd25lcjogcC5vd25lcixcbiAgZGVwb3NpdF9hbW91bnQ6IEJpZ051bWJlci5mcm9tKHAuZGVwb3NpdF9hbW91bnQpLFxuICBtaW50X2Ftb3VudDogQmlnTnVtYmVyLmZyb20ocC5taW50X2Ftb3VudCksXG4gIGludGVyZXN0X2Ftb3VudDogQmlnTnVtYmVyLmZyb20ocC5pbnRlcmVzdF9hbW91bnQpLFxuICBsaXF1aWRhdGlvbl9wcmljZTogcC5saXF1aWRhdGlvbl9wcmljZVxuICAgID8gcGFyc2VGbG9hdChwLmxpcXVpZGF0aW9uX3ByaWNlKVxuICAgIDogbnVsbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFBvc2l0aW9uID0gKG93bmVyPzogc3RyaW5nKTogUG9zaXRpb24gPT4gKHtcbiAgb3duZXI6IG93bmVyIHx8IFwiXCIsXG4gIGRlcG9zaXRfYW1vdW50OiBCaWdOdW1iZXIuZnJvbSgwKSxcbiAgbWludF9hbW91bnQ6IEJpZ051bWJlci5mcm9tKDApLFxuICBpbnRlcmVzdF9hbW91bnQ6IEJpZ051bWJlci5mcm9tKDApLFxuICBsaXF1aWRhdGlvbl9wcmljZTogbnVsbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQb3NpdGlvbiA9IChcbiAgcXVlcnlDbGllbnQ6IEt1amlyYVF1ZXJ5Q2xpZW50LFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGFjY291bnQ6IHsgYWRkcmVzczogc3RyaW5nIH1cbik6IFByb21pc2U8UG9zaXRpb24+ID0+XG4gIHF1ZXJ5Q2xpZW50Lndhc21cbiAgICAucXVlcnlDb250cmFjdFNtYXJ0KGFkZHJlc3MsIHtcbiAgICAgIHBvc2l0aW9uOiB7IGFkZHJlc3M6IGFjY291bnQuYWRkcmVzcyB9LFxuICAgIH0pXG4gICAgLnRoZW4oY2FzdFBvc2l0aW9uKTtcbiJdLCJuYW1lcyI6WyJCaWdOdW1iZXIiLCJEZW5vbSIsIk1BSU5ORVQiLCJQT05EIiwiVEVTVE5FVCIsImNvbnRyYWN0cyIsImNhc3RTdGF0dXMiLCJyZXMiLCJkZWJ0QW1vdW50IiwiZnJvbSIsImRlYnRfYW1vdW50IiwiY2FzdENvbmZpZyIsImpzb24iLCJvd25lciIsInN0YWJsZURlbm9tIiwic3RhYmxlX2Rlbm9tIiwic3RhYmxlRGVub21BZG1pbiIsInN0YWJsZV9kZW5vbV9hZG1pbiIsImNvbGxhdGVyYWxEZW5vbSIsImNvbGxhdGVyYWxfZGVub20iLCJvcmFjbGVEZW5vbSIsIm9yYWNsZV9kZW5vbSIsIm1heFJhdGlvIiwicGFyc2VGbG9hdCIsIm1heF9yYXRpbyIsIm1pbnRGZWUiLCJtaW50X2ZlZSIsImludGVyZXN0UmF0ZSIsImludGVyZXN0X3JhdGUiLCJvcmNhQWRkcmVzcyIsIm9yY2FfYWRkcmVzcyIsIm1heERlYnQiLCJtYXhfZGVidCIsImxpcXVpZGF0aW9uVGhyZXNob2xkIiwibGlxdWlkYXRpb25fdGhyZXNob2xkIiwibGlxdWlkYXRpb25SYXRpbyIsImxpcXVpZGF0aW9uX3JhdGlvIiwiY29tcGlsZSIsImEiLCJ2IiwiYWRkcmVzcyIsImNvbmZpZyIsIk1BUktFVFMiLCJ1c2tNYXJrZXQiLCJyZWR1Y2UiLCJjYXN0UG9zaXRpb24iLCJwIiwiZGVwb3NpdF9hbW91bnQiLCJtaW50X2Ftb3VudCIsImludGVyZXN0X2Ftb3VudCIsImxpcXVpZGF0aW9uX3ByaWNlIiwiZGVmYXVsdFBvc2l0aW9uIiwiZmV0Y2hQb3NpdGlvbiIsInF1ZXJ5Q2xpZW50IiwiYWNjb3Vu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
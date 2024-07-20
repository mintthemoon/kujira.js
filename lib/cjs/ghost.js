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
    DEFAULT_MARKET_STATE: function() {
        return DEFAULT_MARKET_STATE;
    },
    DEFAULT_VAULT_STATE: function() {
        return DEFAULT_VAULT_STATE;
    },
    FILTERED: function() {
        return FILTERED;
    },
    MARKETS: function() {
        return MARKETS;
    },
    VAULTS: function() {
        return VAULTS;
    },
    castMarket: function() {
        return castMarket;
    },
    castPosition: function() {
        return castPosition;
    },
    castVault: function() {
        return castVault;
    },
    castVaultState: function() {
        return castVaultState;
    }
});
const _bignumber = require("@ethersproject/bignumber");
const _bignumber1 = require("./bignumber");
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
const FILTERED = [
    "kujira1fj2y8uslgw89x50scw7njwxjg4f42u84hkw3nguf3kn0fm69wxqsrl3p6k",
    "kujira14r4d6xw6jgu6d4en0uxalx9slaft54h499scmeyj63w4axavhvuqdgfr8d"
];
const castVaultState = (res)=>{
    const deposited = _bignumber.BigNumber.from(res.deposited);
    const lent = _bignumber.BigNumber.from(res.borrowed);
    const interestRate = parseFloat(res.rate);
    return {
        deposited,
        lent,
        available: deposited.sub(lent),
        interestRate,
        apr: (0, _bignumber1.divToNumber)((0, _bignumber1.mulDec)(lent, interestRate), deposited),
        redemptionRate: (0, _bignumber.parseFixed)(res.deposit_redemption_ratio, 18),
        debtShareRatio: (0, _bignumber.parseFixed)(res.debt_share_ratio, 18)
    };
};
const DEFAULT_MARKET_STATE = {
    deposited: _bignumber.BigNumber.from(0),
    borrowed: _bignumber.BigNumber.from(0)
};
const DEFAULT_VAULT_STATE = {
    deposited: _bignumber.BigNumber.from(0),
    lent: _bignumber.BigNumber.from(0),
    available: _bignumber.BigNumber.from(0),
    interestRate: 0,
    apr: 0,
    redemptionRate: (0, _bignumber.parseFixed)("1", 18),
    debtShareRatio: (0, _bignumber.parseFixed)("1", 18)
};
const castPosition = (res)=>({
        debtShares: _bignumber.BigNumber.from(res.debt_shares),
        collateralAmount: _bignumber.BigNumber.from(res.collateral_amount)
    });
const castMarket = (address, raw, vault)=>({
        address,
        owner: raw.owner,
        collateralDenom: _denom.Denom.from(raw.collateral_denom),
        collateralOracleDenom: raw.collateral_oracle_denom,
        collateralDecimals: raw.collateral_decimals,
        maxLtv: parseFloat(raw.max_ltv),
        vault,
        borrowFee: (0, _bignumber.parseFixed)(raw.borrow_fee, 18),
        orcaAddress: raw.orca_addr
    });
const castVault = (address, raw, markets)=>({
        address,
        owner: raw.owner,
        denom: _denom.Denom.from(raw.denom),
        oracle: "static" in raw.oracle ? {
            static: (0, _bignumber.parseFixed)(raw.oracle.static, 18)
        } : raw.oracle,
        decimals: raw.decimals,
        receiptDenom: _denom.Denom.from(raw.receipt_denom),
        debtTokenDenom: _denom.Denom.from(raw.debt_token_denom),
        markets: markets.map((m)=>({
                addr: m.addr,
                borrowLimit: m.borrow_limit ? _bignumber.BigNumber.from(m.borrow_limit) : null
            })),
        interest: castInterest(raw.interest)
    });
const castInterest = (raw)=>({
        type: "curve",
        value: raw.utilization_to_curve.map((x)=>[
                (0, _bignumber.parseFixed)(x[0], 18),
                {
                    linear: {
                        start: [
                            (0, _bignumber.parseFixed)(x[1].linear.start[0], 18),
                            (0, _bignumber.parseFixed)(x[1].linear.start[1], 18)
                        ],
                        end: [
                            (0, _bignumber.parseFixed)(x[1].linear.end[0], 18),
                            (0, _bignumber.parseFixed)(x[1].linear.end[1], 18)
                        ]
                    }
                }
            ])
    });
const VAULTS = {
    [_network.MAINNET]: _contractsjson.default[_network.MAINNET].ghostVault.reduce((a, v)=>FILTERED.includes(v.address) ? a : _object_spread_props(_object_spread({}, a), {
            [v.address]: castVault(v.address, // @ts-expect-error TS not liking the Rust serialization of tuples
            v.config, v.markets || [])
        }), {}),
    [_network.TESTNET]: _contractsjson.default[_network.TESTNET].ghostVault.reduce((a, v)=>FILTERED.includes(v.address) ? a : _object_spread_props(_object_spread({}, a), {
            [v.address]: castVault(v.address, // @ts-expect-error TS not liking the Rust serialization of tuples
            v.config, v.markets || [])
        }), {}),
    [_network.POND]: {}
};
const MARKETS = {
    [_network.MAINNET]: _contractsjson.default[_network.MAINNET].ghostMarket.reduce((a, v)=>FILTERED.includes(v.address) ? a : VAULTS[_network.MAINNET][v.config.vault_addr] ? _object_spread_props(_object_spread({}, a), {
            [v.address]: castMarket(v.address, v.config, VAULTS[_network.MAINNET][v.config.vault_addr])
        }) : a, {}),
    [_network.TESTNET]: _contractsjson.default[_network.TESTNET].ghostMarket.reduce((a, v)=>FILTERED.includes(v.address) ? a : VAULTS[_network.TESTNET][v.config.vault_addr] ? _object_spread_props(_object_spread({}, a), {
            [v.address]: castMarket(v.address, v.config, VAULTS[_network.TESTNET][v.config.vault_addr])
        }) : a, {}),
    [_network.POND]: {}
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naG9zdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaWdOdW1iZXIsIHBhcnNlRml4ZWQgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBkaXZUb051bWJlciwgbXVsRGVjIH0gZnJvbSBcIi4vYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBEZW5vbSB9IGZyb20gXCIuL2Rlbm9tXCI7XG5pbXBvcnQgeyBNQUlOTkVULCBORVRXT1JLLCBQT05ELCBURVNUTkVUIH0gZnJvbSBcIi4vbmV0d29ya1wiO1xuaW1wb3J0IGNvbnRyYWN0cyBmcm9tIFwiLi9yZXNvdXJjZXMvY29udHJhY3RzLmpzb25cIjtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUkVEID0gW1xuICBcImt1amlyYTFmajJ5OHVzbGd3ODl4NTBzY3c3bmp3eGpnNGY0MnU4NGhrdzNuZ3VmM2tuMGZtNjl3eHFzcmwzcDZrXCIsXG4gIFwia3VqaXJhMTRyNGQ2eHc2amd1NmQ0ZW4wdXhhbHg5c2xhZnQ1NGg0OTlzY21leWo2M3c0YXhhdmh2dXFkZ2ZyOGRcIixcbl07XG5cbmV4cG9ydCB0eXBlIE9yYWNsZURlbm9tID0geyBsaXZlOiBzdHJpbmcgfSB8IHsgc3RhdGljOiBCaWdOdW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgTWFya2V0ID0ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGNvbGxhdGVyYWxEZW5vbTogRGVub207XG4gIGNvbGxhdGVyYWxPcmFjbGVEZW5vbTogc3RyaW5nO1xuICBjb2xsYXRlcmFsRGVjaW1hbHM6IG51bWJlcjtcbiAgbWF4THR2OiBudW1iZXI7XG4gIHZhdWx0OiBWYXVsdDtcbiAgYm9ycm93RmVlOiBCaWdOdW1iZXI7XG4gIG9yY2FBZGRyZXNzOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBNYXJrZXRTdGF0ZSA9IHtcbiAgZGVwb3NpdGVkOiBCaWdOdW1iZXI7XG4gIGJvcnJvd2VkOiBCaWdOdW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBWYXVsdFN0YXRlID0ge1xuICBkZXBvc2l0ZWQ6IEJpZ051bWJlcjtcbiAgbGVudDogQmlnTnVtYmVyO1xuICBhdmFpbGFibGU6IEJpZ051bWJlcjtcbiAgaW50ZXJlc3RSYXRlOiBudW1iZXI7XG4gIGFwcjogbnVtYmVyO1xuICByZWRlbXB0aW9uUmF0ZTogQmlnTnVtYmVyO1xuICBkZWJ0U2hhcmVSYXRpbzogQmlnTnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc3RWYXVsdFN0YXRlID0gKHJlczoge1xuICBkZXBvc2l0ZWQ6IHN0cmluZztcbiAgYm9ycm93ZWQ6IHN0cmluZztcbiAgcmF0ZTogc3RyaW5nO1xuICBhcHI6IG51bWJlcjtcbiAgZGVwb3NpdF9yZWRlbXB0aW9uX3JhdGlvOiBzdHJpbmc7XG4gIGRlYnRfc2hhcmVfcmF0aW86IHN0cmluZztcbn0pOiBWYXVsdFN0YXRlID0+IHtcbiAgY29uc3QgZGVwb3NpdGVkID0gQmlnTnVtYmVyLmZyb20ocmVzLmRlcG9zaXRlZCk7XG4gIGNvbnN0IGxlbnQgPSBCaWdOdW1iZXIuZnJvbShyZXMuYm9ycm93ZWQpO1xuICBjb25zdCBpbnRlcmVzdFJhdGUgPSBwYXJzZUZsb2F0KHJlcy5yYXRlKTtcblxuICByZXR1cm4ge1xuICAgIGRlcG9zaXRlZCxcbiAgICBsZW50LFxuICAgIGF2YWlsYWJsZTogZGVwb3NpdGVkLnN1YihsZW50KSxcbiAgICBpbnRlcmVzdFJhdGUsXG4gICAgYXByOiBkaXZUb051bWJlcihtdWxEZWMobGVudCwgaW50ZXJlc3RSYXRlKSwgZGVwb3NpdGVkKSxcbiAgICByZWRlbXB0aW9uUmF0ZTogcGFyc2VGaXhlZChyZXMuZGVwb3NpdF9yZWRlbXB0aW9uX3JhdGlvLCAxOCksXG4gICAgZGVidFNoYXJlUmF0aW86IHBhcnNlRml4ZWQocmVzLmRlYnRfc2hhcmVfcmF0aW8sIDE4KSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUktFVF9TVEFURTogTWFya2V0U3RhdGUgPSB7XG4gIGRlcG9zaXRlZDogQmlnTnVtYmVyLmZyb20oMCksXG4gIGJvcnJvd2VkOiBCaWdOdW1iZXIuZnJvbSgwKSxcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZBVUxUX1NUQVRFOiBWYXVsdFN0YXRlID0ge1xuICBkZXBvc2l0ZWQ6IEJpZ051bWJlci5mcm9tKDApLFxuICBsZW50OiBCaWdOdW1iZXIuZnJvbSgwKSxcbiAgYXZhaWxhYmxlOiBCaWdOdW1iZXIuZnJvbSgwKSxcbiAgaW50ZXJlc3RSYXRlOiAwLFxuICBhcHI6IDAsXG4gIHJlZGVtcHRpb25SYXRlOiBwYXJzZUZpeGVkKFwiMVwiLCAxOCksXG4gIGRlYnRTaGFyZVJhdGlvOiBwYXJzZUZpeGVkKFwiMVwiLCAxOCksXG59O1xuXG5leHBvcnQgdHlwZSBQb3NpdGlvbiA9IHtcbiAgY29sbGF0ZXJhbEFtb3VudDogQmlnTnVtYmVyO1xuICBkZWJ0U2hhcmVzOiBCaWdOdW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzdFBvc2l0aW9uID0gKHJlczoge1xuICBkZWJ0X3NoYXJlczogbnVtYmVyO1xuICBjb2xsYXRlcmFsX2Ftb3VudDogbnVtYmVyO1xufSk6IFBvc2l0aW9uID0+ICh7XG4gIGRlYnRTaGFyZXM6IEJpZ051bWJlci5mcm9tKHJlcy5kZWJ0X3NoYXJlcyksXG4gIGNvbGxhdGVyYWxBbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlcy5jb2xsYXRlcmFsX2Ftb3VudCksXG59KTtcblxuZXhwb3J0IHR5cGUgSW50ZXJlc3QgPSB7XG4gIHR5cGU6IFwiY3VydmVcIjtcbiAgdmFsdWU6IFtcbiAgICBCaWdOdW1iZXIsXG4gICAge1xuICAgICAgbGluZWFyOiB7XG4gICAgICAgIHN0YXJ0OiBbQmlnTnVtYmVyLCBCaWdOdW1iZXJdO1xuICAgICAgICBlbmQ6IFtCaWdOdW1iZXIsIEJpZ051bWJlcl07XG4gICAgICB9O1xuICAgIH1cbiAgXVtdO1xufTtcblxuZXhwb3J0IHR5cGUgVmF1bHQgPSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgb3duZXI6IHN0cmluZztcbiAgZGVub206IERlbm9tO1xuICBvcmFjbGU6IE9yYWNsZURlbm9tO1xuICBkZWNpbWFsczogbnVtYmVyO1xuICByZWNlaXB0RGVub206IERlbm9tO1xuICBkZWJ0VG9rZW5EZW5vbTogRGVub207XG4gIGludGVyZXN0OiBJbnRlcmVzdDtcbiAgbWFya2V0czoge1xuICAgIGFkZHI6IHN0cmluZztcbiAgICBib3Jyb3dMaW1pdDogbnVsbCB8IEJpZ051bWJlcjtcbiAgICAvLyBjdXJyZW50Qm9ycm93czogQmlnTnVtYmVyO1xuICB9W107XG59O1xuXG5leHBvcnQgY29uc3QgY2FzdE1hcmtldCA9IChcbiAgYWRkcmVzczogc3RyaW5nLFxuICByYXc6IHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIGNvbGxhdGVyYWxfZGVub206IHN0cmluZztcbiAgICBjb2xsYXRlcmFsX29yYWNsZV9kZW5vbTogc3RyaW5nO1xuICAgIGNvbGxhdGVyYWxfZGVjaW1hbHM6IG51bWJlcjtcbiAgICBtYXhfbHR2OiBzdHJpbmc7XG4gICAgdmF1bHRfYWRkcjogc3RyaW5nO1xuICAgIGJvcnJvd19mZWU6IHN0cmluZztcbiAgICBvcmNhX2FkZHI6IHN0cmluZztcbiAgfSxcbiAgdmF1bHQ6IFZhdWx0XG4pOiBNYXJrZXQgPT4gKHtcbiAgYWRkcmVzcyxcbiAgb3duZXI6IHJhdy5vd25lcixcbiAgY29sbGF0ZXJhbERlbm9tOiBEZW5vbS5mcm9tKHJhdy5jb2xsYXRlcmFsX2Rlbm9tKSxcbiAgY29sbGF0ZXJhbE9yYWNsZURlbm9tOiByYXcuY29sbGF0ZXJhbF9vcmFjbGVfZGVub20sXG4gIGNvbGxhdGVyYWxEZWNpbWFsczogcmF3LmNvbGxhdGVyYWxfZGVjaW1hbHMsXG4gIG1heEx0djogcGFyc2VGbG9hdChyYXcubWF4X2x0diksXG4gIHZhdWx0LFxuICBib3Jyb3dGZWU6IHBhcnNlRml4ZWQocmF3LmJvcnJvd19mZWUsIDE4KSxcbiAgb3JjYUFkZHJlc3M6IHJhdy5vcmNhX2FkZHIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNhc3RWYXVsdCA9IChcbiAgYWRkcmVzczogc3RyaW5nLFxuICByYXc6IHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIGRlbm9tOiBzdHJpbmc7XG4gICAgb3JhY2xlOiB7IGxpdmU6IHN0cmluZyB9IHwgeyBzdGF0aWM6IHN0cmluZyB9O1xuICAgIGRlY2ltYWxzOiBudW1iZXI7XG4gICAgcmVjZWlwdF9kZW5vbTogc3RyaW5nO1xuICAgIGRlYnRfdG9rZW5fZGVub206IHN0cmluZztcbiAgICBpbnRlcmVzdDoge1xuICAgICAgdXRpbGl6YXRpb25fdG9fY3VydmU6IFtcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICB7XG4gICAgICAgICAgbGluZWFyOiB7XG4gICAgICAgICAgICBzdGFydDogW3N0cmluZywgc3RyaW5nXTtcbiAgICAgICAgICAgIGVuZDogW3N0cmluZywgc3RyaW5nXTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICBdW107XG4gICAgfTtcbiAgfSxcbiAgbWFya2V0czoge1xuICAgIGFkZHI6IHN0cmluZztcbiAgICBib3Jyb3dfbGltaXQ6IG51bGwgfCBzdHJpbmc7XG4gICAgY3VycmVudF9ib3Jyb3dzOiBzdHJpbmc7XG4gIH1bXVxuKTogVmF1bHQgPT4gKHtcbiAgYWRkcmVzcyxcbiAgb3duZXI6IHJhdy5vd25lcixcbiAgZGVub206IERlbm9tLmZyb20ocmF3LmRlbm9tKSxcbiAgb3JhY2xlOlxuICAgIFwic3RhdGljXCIgaW4gcmF3Lm9yYWNsZVxuICAgICAgPyB7IHN0YXRpYzogcGFyc2VGaXhlZChyYXcub3JhY2xlLnN0YXRpYywgMTgpIH1cbiAgICAgIDogcmF3Lm9yYWNsZSxcbiAgZGVjaW1hbHM6IHJhdy5kZWNpbWFscyxcbiAgcmVjZWlwdERlbm9tOiBEZW5vbS5mcm9tKHJhdy5yZWNlaXB0X2Rlbm9tKSxcbiAgZGVidFRva2VuRGVub206IERlbm9tLmZyb20ocmF3LmRlYnRfdG9rZW5fZGVub20pLFxuICBtYXJrZXRzOiBtYXJrZXRzLm1hcCgobSkgPT4gKHtcbiAgICBhZGRyOiBtLmFkZHIsXG4gICAgYm9ycm93TGltaXQ6IG0uYm9ycm93X2xpbWl0ID8gQmlnTnVtYmVyLmZyb20obS5ib3Jyb3dfbGltaXQpIDogbnVsbCxcbiAgfSkpLFxuICBpbnRlcmVzdDogY2FzdEludGVyZXN0KHJhdy5pbnRlcmVzdCksXG59KTtcblxuY29uc3QgY2FzdEludGVyZXN0ID0gKHJhdzoge1xuICB1dGlsaXphdGlvbl90b19jdXJ2ZTogW1xuICAgIHN0cmluZyxcbiAgICB7XG4gICAgICBsaW5lYXI6IHtcbiAgICAgICAgc3RhcnQ6IFtzdHJpbmcsIHN0cmluZ107XG4gICAgICAgIGVuZDogW3N0cmluZywgc3RyaW5nXTtcbiAgICAgIH07XG4gICAgfVxuICBdW107XG59KTogSW50ZXJlc3QgPT4gKHtcbiAgdHlwZTogXCJjdXJ2ZVwiLFxuICB2YWx1ZTogcmF3LnV0aWxpemF0aW9uX3RvX2N1cnZlLm1hcCgoeCkgPT4gW1xuICAgIHBhcnNlRml4ZWQoeFswXSwgMTgpLFxuICAgIHtcbiAgICAgIGxpbmVhcjoge1xuICAgICAgICBzdGFydDogW1xuICAgICAgICAgIHBhcnNlRml4ZWQoeFsxXS5saW5lYXIuc3RhcnRbMF0sIDE4KSxcbiAgICAgICAgICBwYXJzZUZpeGVkKHhbMV0ubGluZWFyLnN0YXJ0WzFdLCAxOCksXG4gICAgICAgIF0sXG4gICAgICAgIGVuZDogW1xuICAgICAgICAgIHBhcnNlRml4ZWQoeFsxXS5saW5lYXIuZW5kWzBdLCAxOCksXG4gICAgICAgICAgcGFyc2VGaXhlZCh4WzFdLmxpbmVhci5lbmRbMV0sIDE4KSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSksXG59KTtcblxuZXhwb3J0IGNvbnN0IFZBVUxUUzogUmVjb3JkPE5FVFdPUkssIFJlY29yZDxzdHJpbmcsIFZhdWx0Pj4gPSB7XG4gIFtNQUlOTkVUXTogY29udHJhY3RzW01BSU5ORVRdLmdob3N0VmF1bHQucmVkdWNlKFxuICAgIChhLCB2KSA9PlxuICAgICAgRklMVEVSRUQuaW5jbHVkZXModi5hZGRyZXNzKVxuICAgICAgICA/IGFcbiAgICAgICAgOiB7XG4gICAgICAgICAgICAuLi5hLFxuICAgICAgICAgICAgW3YuYWRkcmVzc106IGNhc3RWYXVsdChcbiAgICAgICAgICAgICAgdi5hZGRyZXNzLFxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRTIG5vdCBsaWtpbmcgdGhlIFJ1c3Qgc2VyaWFsaXphdGlvbiBvZiB0dXBsZXNcbiAgICAgICAgICAgICAgdi5jb25maWcsXG4gICAgICAgICAgICAgIHYubWFya2V0cyB8fCBbXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgIHt9XG4gICksXG4gIFtURVNUTkVUXTogY29udHJhY3RzW1RFU1RORVRdLmdob3N0VmF1bHQucmVkdWNlKFxuICAgIChhLCB2KSA9PlxuICAgICAgRklMVEVSRUQuaW5jbHVkZXModi5hZGRyZXNzKVxuICAgICAgICA/IGFcbiAgICAgICAgOiB7XG4gICAgICAgICAgICAuLi5hLFxuICAgICAgICAgICAgW3YuYWRkcmVzc106IGNhc3RWYXVsdChcbiAgICAgICAgICAgICAgdi5hZGRyZXNzLFxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRTIG5vdCBsaWtpbmcgdGhlIFJ1c3Qgc2VyaWFsaXphdGlvbiBvZiB0dXBsZXNcbiAgICAgICAgICAgICAgdi5jb25maWcsXG4gICAgICAgICAgICAgIHYubWFya2V0cyB8fCBbXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgIHt9XG4gICksXG4gIFtQT05EXToge30sXG59O1xuXG5leHBvcnQgY29uc3QgTUFSS0VUUzogUmVjb3JkPE5FVFdPUkssIFJlY29yZDxzdHJpbmcsIE1hcmtldD4+ID0ge1xuICBbTUFJTk5FVF06IGNvbnRyYWN0c1tNQUlOTkVUXS5naG9zdE1hcmtldC5yZWR1Y2UoXG4gICAgKGEsIHYpID0+XG4gICAgICBGSUxURVJFRC5pbmNsdWRlcyh2LmFkZHJlc3MpXG4gICAgICAgID8gYVxuICAgICAgICA6IFZBVUxUU1tNQUlOTkVUXVt2LmNvbmZpZy52YXVsdF9hZGRyXVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmEsXG4gICAgICAgICAgICBbdi5hZGRyZXNzXTogY2FzdE1hcmtldChcbiAgICAgICAgICAgICAgdi5hZGRyZXNzLFxuICAgICAgICAgICAgICB2LmNvbmZpZyxcbiAgICAgICAgICAgICAgVkFVTFRTW01BSU5ORVRdW3YuY29uZmlnLnZhdWx0X2FkZHJdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH1cbiAgICAgICAgOiBhLFxuICAgIHt9XG4gICksXG4gIFtURVNUTkVUXTogY29udHJhY3RzW1RFU1RORVRdLmdob3N0TWFya2V0LnJlZHVjZShcbiAgICAoYSwgdikgPT5cbiAgICAgIEZJTFRFUkVELmluY2x1ZGVzKHYuYWRkcmVzcylcbiAgICAgICAgPyBhXG4gICAgICAgIDogVkFVTFRTW1RFU1RORVRdW3YuY29uZmlnLnZhdWx0X2FkZHJdXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uYSxcbiAgICAgICAgICAgIFt2LmFkZHJlc3NdOiBjYXN0TWFya2V0KFxuICAgICAgICAgICAgICB2LmFkZHJlc3MsXG4gICAgICAgICAgICAgIHYuY29uZmlnLFxuICAgICAgICAgICAgICBWQVVMVFNbVEVTVE5FVF1bdi5jb25maWcudmF1bHRfYWRkcl1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgfVxuICAgICAgICA6IGEsXG4gICAge31cbiAgKSxcbiAgW1BPTkRdOiB7fSxcbn07XG4iXSwibmFtZXMiOlsiREVGQVVMVF9NQVJLRVRfU1RBVEUiLCJERUZBVUxUX1ZBVUxUX1NUQVRFIiwiRklMVEVSRUQiLCJNQVJLRVRTIiwiVkFVTFRTIiwiY2FzdE1hcmtldCIsImNhc3RQb3NpdGlvbiIsImNhc3RWYXVsdCIsImNhc3RWYXVsdFN0YXRlIiwicmVzIiwiZGVwb3NpdGVkIiwiQmlnTnVtYmVyIiwiZnJvbSIsImxlbnQiLCJib3Jyb3dlZCIsImludGVyZXN0UmF0ZSIsInBhcnNlRmxvYXQiLCJyYXRlIiwiYXZhaWxhYmxlIiwic3ViIiwiYXByIiwiZGl2VG9OdW1iZXIiLCJtdWxEZWMiLCJyZWRlbXB0aW9uUmF0ZSIsInBhcnNlRml4ZWQiLCJkZXBvc2l0X3JlZGVtcHRpb25fcmF0aW8iLCJkZWJ0U2hhcmVSYXRpbyIsImRlYnRfc2hhcmVfcmF0aW8iLCJkZWJ0U2hhcmVzIiwiZGVidF9zaGFyZXMiLCJjb2xsYXRlcmFsQW1vdW50IiwiY29sbGF0ZXJhbF9hbW91bnQiLCJhZGRyZXNzIiwicmF3IiwidmF1bHQiLCJvd25lciIsImNvbGxhdGVyYWxEZW5vbSIsIkRlbm9tIiwiY29sbGF0ZXJhbF9kZW5vbSIsImNvbGxhdGVyYWxPcmFjbGVEZW5vbSIsImNvbGxhdGVyYWxfb3JhY2xlX2Rlbm9tIiwiY29sbGF0ZXJhbERlY2ltYWxzIiwiY29sbGF0ZXJhbF9kZWNpbWFscyIsIm1heEx0diIsIm1heF9sdHYiLCJib3Jyb3dGZWUiLCJib3Jyb3dfZmVlIiwib3JjYUFkZHJlc3MiLCJvcmNhX2FkZHIiLCJtYXJrZXRzIiwiZGVub20iLCJvcmFjbGUiLCJzdGF0aWMiLCJkZWNpbWFscyIsInJlY2VpcHREZW5vbSIsInJlY2VpcHRfZGVub20iLCJkZWJ0VG9rZW5EZW5vbSIsImRlYnRfdG9rZW5fZGVub20iLCJtYXAiLCJtIiwiYWRkciIsImJvcnJvd0xpbWl0IiwiYm9ycm93X2xpbWl0IiwiaW50ZXJlc3QiLCJjYXN0SW50ZXJlc3QiLCJ0eXBlIiwidmFsdWUiLCJ1dGlsaXphdGlvbl90b19jdXJ2ZSIsIngiLCJsaW5lYXIiLCJzdGFydCIsImVuZCIsIk1BSU5ORVQiLCJjb250cmFjdHMiLCJnaG9zdFZhdWx0IiwicmVkdWNlIiwiYSIsInYiLCJpbmNsdWRlcyIsImNvbmZpZyIsIlRFU1RORVQiLCJQT05EIiwiZ2hvc3RNYXJrZXQiLCJ2YXVsdF9h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
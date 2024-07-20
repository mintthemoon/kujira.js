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
    EXCLUDED: function() {
        return EXCLUDED;
    },
    POOLS: function() {
        return POOLS;
    },
    castMargin: function() {
        return castMargin;
    },
    castPool: function() {
        return castPool;
    },
    castPosition: function() {
        return castPosition;
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
const EXCLUDED = [
    "kujira188p624ykuepun8h8kjmcfs553mz2jgeanetyqv7l6xltdld497vqespn6c",
    "kujira136rwqvwy3flttm9wfnc5xgnlr6mu5k8e2elgzs2hdhuwf50w3l2qp807cx",
    "kujira1xgjefq7fs4yj29t9gk0t9esgw52s68j83yeac3ru2mefdp529qsqca7hhv",
    "kujira167gut7dskwurax8an630m3yy2cwa2fp3kmcpdzucyy6ppg7njgyqhl7w50",
    "kujira1ywlrdpqymukghjwhfyp2n98r49j56wej36n4l08egkdlwj4fn87ql2l2ey",
    "kujira1dj2s8uvup63fsmpfdfpmu570es4whswp806w0p6usdamtglhwvfqd5jx40",
    "kujira1cdy6aje8zszx5vryttkkm5rn9g2n53ltfds753fsn63m09cmhx0sgp6v6m",
    "kujira1h356yzzk2yw7q5s26dewdgaptw05fxplgmxdxcfqcatjyurckuks6zfay8",
    "kujira19a0wethewg36vny9jremekzlx66lwljp2htrhe255mp6djv652dqsu2l76",
    "kujira1xdjt8r39nvm03fs4d9cwyw2sks5dahs52msza59y4vevdgdwhtlq9e3vvg",
    "kujira1kupjzlp96l4ypt0fdpse8slmkdkkz3g0t5evy033va0gvtw867sq0cm6q0",
    "kujira1qx3hcr297qmgjt5f6u9peldf4phxqufvmew8d3eey3ns29e8qp3snj6jfu",
    "kujira19vmgdwz0p9wzfmeje6x9cw2rhlsdwysxm86k45l9xxw5t53pxg9qmlqnqp",
    "kujira1zdedwnk5e9axmg5efpu49hy6v06ypu3putvmu86jaw5rpzztqqks4x64f6",
    "kujira15t6pjrwvsgszgp3g9jwcgkvq9zawur6d2ncz7rzn9pc4ns9kudssxhn9v7",
    "kujira1kgs5gafvv8qmyf8r2vu34vhrtc22jeyt2m4lrn5sa4vywgn8h6kqua5rm5",
    "kujira1kggddmdvjjxl43luez7dp9snt96jwyj05k5hyxzstvj886u6entsu2na4z",
    "kujira1rpqhczdrgaa6w0h9fukdcppme3074zcay8ge8lazwefdawp03vwsnpc7ya",
    "kujira13ta4a6cu29na9dch3rtyqasgx57ju3z98530cet46tn5v7sx6k2qg7g3zk",
    "kujira1qxx58hln33sgasp5t6tdvhvwacqvkngq7y8mj0pzxhjy6ap9d2qs6u8jk7",
    "kujira1kxjqngkqxv43nk7r3rnp4k28yh697atyydu83j0hp7gh3ryfxnvqa76twh",
    "kujira1hu7uw5unyr5wnc5shkg2sfflmnkrx38hu3k5l0h3welm3mc9x82qhg425v",
    "kujira1yps6lf07smvq6th3f77hspj8fcj3rz8n52wgdu6j4j867runy95qd4clmz",
    "kujira1ngn4dwwwv25t38phsv3ulwckm4kf35v9dgq858x9q5gj6e520jns537m3a",
    "kujira10ecrs8u7l3stdqvv9yjhcwa7tnqkma27s06vq6zs75dk3evk0u2qzruunt",
    "kujira1rkurt0cxe42ml0usj3cm3ycdxg3z8afw4rllvu0jyu9rqmrdj6us2u0wyv",
    "kujira12uu0rch5f8khm0kkpcnuqxlj9wq73nymjllrqsp5x642t30jvlfqr7lkkn",
    "kujira1a3vvzsjwh96zr2j0h844nqmev4h7p5m2fgl98mndn7r6nexcx5kqher94l",
    "kujira1wjkcghnhc02407jhls2acu7kguaz5445vsp97ljsuh6yer7epwkqrdf2t8"
];
const castPosition = (res)=>({
        idx: res.idx,
        holder: res.holder,
        lpAmount: _bignumber.BigNumber.from(res.lp_amount),
        ltv: (0, _bignumber.parseFixed)(res.ltv, 18),
        debtShares: res.debt_shares.reduce((a, v)=>_object_spread_props(_object_spread({}, a), {
                [v.denom]: {
                    amount: _bignumber.BigNumber.from(v.amount),
                    denom: _denom.Denom.from(v.denom),
                    ratio: (0, _bignumber.parseFixed)(v.ratio, 18)
                }
            }), {})
    });
const castPool = (address, res, margin)=>({
        strategy: "amp" in res ? "xyk" : "adapter" in res ? "lsd" : "stable",
        address,
        owner: res.owner,
        denoms: [
            _denom.Denom.from(res.denoms[0]),
            _denom.Denom.from(res.denoms[1])
        ],
        pricePrecision: res.price_precision.decimal_places,
        decimalDelta: res.decimal_delta,
        finContract: res.fin_contract,
        margin: margin && castMargin(margin.address, margin.config),
        adapter: res.adapter && castAdapter(res.adapter)
    });
const castMargin = (address, res)=>({
        address,
        owner: res.owner,
        bowContract: res.bow_contract,
        denoms: [
            {
                denom: _denom.Denom.from(res.denoms[0].denom),
                decimals: res.denoms[0].decimals,
                oracle: res.denoms[0].oracle
            },
            {
                denom: _denom.Denom.from(res.denoms[1].denom),
                decimals: res.denoms[1].decimals,
                oracle: res.denoms[1].oracle
            }
        ],
        vaults: [
            res.vaults[0],
            res.vaults[1]
        ],
        orcas: [
            res.orcas[0],
            res.orcas[1]
        ],
        maxLtv: (0, _bignumber.parseFixed)(res.max_ltv, 18),
        fullLiquidationThreshold: _bignumber.BigNumber.from(res.full_liquidation_threshold),
        partialLiquidationTarget: (0, _bignumber.parseFixed)(res.partial_liquidation_target, 18),
        borrowFee: (0, _bignumber.parseFixed)(res.borrow_fee, 18)
    });
const castAdapter = (res)=>{
    if ("oracle" in res) return undefined;
    if (typeof res.contract === "string") return {
        contract: {
            address: res.contract
        }
    };
    return {
        contract: {
            address: res.contract.address
        }
    };
};
const POOLS = {
    [_network.MAINNET]: _contractsjson.default[_network.MAINNET].bow.reduce((a, v)=>EXCLUDED.includes(v.address) ? a : _object_spread_props(_object_spread({}, a), {
            [v.address]: castPool(v.address, v.config, Object.values(_contractsjson.default[_network.MAINNET].bowMargin).find((x)=>x.config.bow_contract === v.address))
        }), {}),
    [_network.TESTNET]: _contractsjson.default[_network.TESTNET].bow.reduce((a, v)=>EXCLUDED.includes(v.address) ? a : _object_spread_props(_object_spread({}, a), {
            [v.address]: castPool(v.address, v.config, Object.values(_contractsjson.default[_network.TESTNET].bowMargin).find((x)=>x.config.bow_contract === v.address))
        }), {}),
    [_network.POND]: {}
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ib3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnTnVtYmVyLCBwYXJzZUZpeGVkIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgRGVub20gfSBmcm9tIFwiLi9kZW5vbVwiO1xuaW1wb3J0IHsgTUFJTk5FVCwgTkVUV09SSywgUE9ORCwgVEVTVE5FVCB9IGZyb20gXCIuL25ldHdvcmtcIjtcbmltcG9ydCBjb250cmFjdHMgZnJvbSBcIi4vcmVzb3VyY2VzL2NvbnRyYWN0cy5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBFWENMVURFRCA9IFtcbiAgXCJrdWppcmExODhwNjI0eWt1ZXB1bjhoOGtqbWNmczU1M216MmpnZWFuZXR5cXY3bDZ4bHRkbGQ0OTd2cWVzcG42Y1wiLFxuICBcImt1amlyYTEzNnJ3cXZ3eTNmbHR0bTl3Zm5jNXhnbmxyNm11NWs4ZTJlbGd6czJoZGh1d2Y1MHczbDJxcDgwN2N4XCIsXG4gIFwia3VqaXJhMXhnamVmcTdmczR5ajI5dDlnazB0OWVzZ3c1MnM2OGo4M3llYWMzcnUybWVmZHA1Mjlxc3FjYTdoaHZcIixcbiAgXCJrdWppcmExNjdndXQ3ZHNrd3VyYXg4YW42MzBtM3l5MmN3YTJmcDNrbWNwZHp1Y3l5NnBwZzduamd5cWhsN3c1MFwiLFxuICBcImt1amlyYTF5d2xyZHBxeW11a2doandoZnlwMm45OHI0OWo1NndlajM2bjRsMDhlZ2tkbHdqNGZuODdxbDJsMmV5XCIsXG4gIFwia3VqaXJhMWRqMnM4dXZ1cDYzZnNtcGZkZnBtdTU3MGVzNHdoc3dwODA2dzBwNnVzZGFtdGdsaHd2ZnFkNWp4NDBcIixcbiAgXCJrdWppcmExY2R5NmFqZTh6c3p4NXZyeXR0a2ttNXJuOWcybjUzbHRmZHM3NTNmc242M20wOWNtaHgwc2dwNnY2bVwiLFxuICBcImt1amlyYTFoMzU2eXp6azJ5dzdxNXMyNmRld2RnYXB0dzA1ZnhwbGdteGR4Y2ZxY2F0anl1cmNrdWtzNnpmYXk4XCIsXG4gIFwia3VqaXJhMTlhMHdldGhld2czNnZueTlqcmVtZWt6bHg2Nmx3bGpwMmh0cmhlMjU1bXA2ZGp2NjUyZHFzdTJsNzZcIixcbiAgXCJrdWppcmExeGRqdDhyMzludm0wM2ZzNGQ5Y3d5dzJza3M1ZGFoczUybXN6YTU5eTR2ZXZkZ2R3aHRscTllM3Z2Z1wiLFxuICBcImt1amlyYTFrdXBqemxwOTZsNHlwdDBmZHBzZThzbG1rZGtrejNnMHQ1ZXZ5MDMzdmEwZ3Z0dzg2N3NxMGNtNnEwXCIsXG4gIFwia3VqaXJhMXF4M2hjcjI5N3FtZ2p0NWY2dTlwZWxkZjRwaHhxdWZ2bWV3OGQzZWV5M25zMjllOHFwM3NuajZqZnVcIixcbiAgXCJrdWppcmExOXZtZ2R3ejBwOXd6Zm1lamU2eDljdzJyaGxzZHd5c3htODZrNDVsOXh4dzV0NTNweGc5cW1scW5xcFwiLFxuICBcImt1amlyYTF6ZGVkd25rNWU5YXhtZzVlZnB1NDloeTZ2MDZ5cHUzcHV0dm11ODZqYXc1cnB6enRxcWtzNHg2NGY2XCIsXG4gIFwia3VqaXJhMTV0NnBqcnd2c2dzemdwM2c5andjZ2t2cTl6YXd1cjZkMm5jejdyem45cGM0bnM5a3Vkc3N4aG45djdcIixcbiAgXCJrdWppcmExa2dzNWdhZnZ2OHFteWY4cjJ2dTM0dmhydGMyMmpleXQybTRscm41c2E0dnl3Z244aDZrcXVhNXJtNVwiLFxuICBcImt1amlyYTFrZ2dkZG1kdmpqeGw0M2x1ZXo3ZHA5c250OTZqd3lqMDVrNWh5eHpzdHZqODg2dTZlbnRzdTJuYTR6XCIsXG4gIFwia3VqaXJhMXJwcWhjemRyZ2FhNncwaDlmdWtkY3BwbWUzMDc0emNheThnZThsYXp3ZWZkYXdwMDN2d3NucGM3eWFcIixcbiAgXCJrdWppcmExM3RhNGE2Y3UyOW5hOWRjaDNydHlxYXNneDU3anUzejk4NTMwY2V0NDZ0bjV2N3N4NmsycWc3ZzN6a1wiLFxuICBcImt1amlyYTFxeHg1OGhsbjMzc2dhc3A1dDZ0ZHZodndhY3F2a25ncTd5OG1qMHB6eGhqeTZhcDlkMnFzNnU4ams3XCIsXG4gIFwia3VqaXJhMWt4anFuZ2txeHY0M25rN3Izcm5wNGsyOHloNjk3YXR5eWR1ODNqMGhwN2doM3J5ZnhudnFhNzZ0d2hcIixcbiAgXCJrdWppcmExaHU3dXc1dW55cjV3bmM1c2hrZzJzZmZsbW5rcngzOGh1M2s1bDBoM3dlbG0zbWM5eDgycWhnNDI1dlwiLFxuICBcImt1amlyYTF5cHM2bGYwN3NtdnE2dGgzZjc3aHNwajhmY2ozcno4bjUyd2dkdTZqNGo4NjdydW55OTVxZDRjbG16XCIsXG4gIFwia3VqaXJhMW5nbjRkd3d3djI1dDM4cGhzdjN1bHdja200a2YzNXY5ZGdxODU4eDlxNWdqNmU1MjBqbnM1MzdtM2FcIixcbiAgXCJrdWppcmExMGVjcnM4dTdsM3N0ZHF2djl5amhjd2E3dG5xa21hMjdzMDZ2cTZ6czc1ZGszZXZrMHUycXpydXVudFwiLFxuICBcImt1amlyYTFya3VydDBjeGU0Mm1sMHVzajNjbTN5Y2R4ZzN6OGFmdzRybGx2dTBqeXU5cnFtcmRqNnVzMnUwd3l2XCIsXG4gIFwia3VqaXJhMTJ1dTByY2g1ZjhraG0wa2twY251cXhsajl3cTczbnltamxscnFzcDV4NjQydDMwanZsZnFyN2xra25cIixcbiAgXCJrdWppcmExYTN2dnpzandoOTZ6cjJqMGg4NDRucW1ldjRoN3A1bTJmZ2w5OG1uZG43cjZuZXhjeDVrcWhlcjk0bFwiLFxuICBcImt1amlyYTF3amtjZ2huaGMwMjQwN2pobHMyYWN1N2tndWF6NTQ0NXZzcDk3bGpzdWg2eWVyN2Vwd2txcmRmMnQ4XCIsXG5dO1xuXG5leHBvcnQgdHlwZSBTdHJhdGVneSA9IFwieHlrXCIgfCBcImxzZFwiIHwgXCJzdGFibGVcIjtcblxuZXhwb3J0IHR5cGUgUG9vbCA9IHtcbiAgc3RyYXRlZ3k6IFN0cmF0ZWd5O1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGRlbm9tczogW0Rlbm9tLCBEZW5vbV07XG4gIHByaWNlUHJlY2lzaW9uOiBudW1iZXI7XG4gIGRlY2ltYWxEZWx0YTogbnVtYmVyO1xuICBmaW5Db250cmFjdDogc3RyaW5nO1xuICBtYXJnaW4/OiBNYXJnaW47XG4gIGFkYXB0ZXI/OiB7IGNvbnRyYWN0OiB7IGFkZHJlc3M6IHN0cmluZyB9IH07XG59O1xuXG5leHBvcnQgdHlwZSBQb29sUmVzcG9uc2UgPSB7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGRlbm9tczogc3RyaW5nW107XG4gIHByaWNlX3ByZWNpc2lvbjogeyBkZWNpbWFsX3BsYWNlczogbnVtYmVyIH07XG4gIGRlY2ltYWxfZGVsdGE6IG51bWJlcjtcbiAgZmluX2NvbnRyYWN0OiBzdHJpbmc7XG4gIGFtcD86IGFueTtcbiAgYWRhcHRlcj86XG4gICAgfCB7XG4gICAgICAgIGNvbnRyYWN0OlxuICAgICAgICAgIHwgeyBhZGRyZXNzOiBzdHJpbmcgfVxuICAgICAgICAgIC8vIGxlZ2FjeVxuICAgICAgICAgIHwgc3RyaW5nO1xuICAgICAgfVxuICAgIHwgeyBvcmFjbGU6IGFueSB9O1xufTtcblxuZXhwb3J0IHR5cGUgTWFyZ2luID0ge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGJvd0NvbnRyYWN0OiBzdHJpbmc7XG4gIGRlbm9tczogW1xuICAgIHsgZGVub206IERlbm9tOyBkZWNpbWFsczogbnVtYmVyOyBvcmFjbGU6IHN0cmluZyB9LFxuICAgIHsgZGVub206IERlbm9tOyBkZWNpbWFsczogbnVtYmVyOyBvcmFjbGU6IHN0cmluZyB9XG4gIF07XG4gIHZhdWx0czogW3N0cmluZyB8IG51bGwsIHN0cmluZyB8IG51bGxdO1xuICBvcmNhczogW3N0cmluZyB8IG51bGwsIHN0cmluZyB8IG51bGxdO1xuICBtYXhMdHY6IEJpZ051bWJlcjtcbiAgZnVsbExpcXVpZGF0aW9uVGhyZXNob2xkOiBCaWdOdW1iZXI7XG4gIHBhcnRpYWxMaXF1aWRhdGlvblRhcmdldDogQmlnTnVtYmVyO1xuICBib3Jyb3dGZWU6IEJpZ051bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIE1hcmdpblJlc3BvbnNlID0ge1xuICBvd25lcjogc3RyaW5nO1xuICBib3dfY29udHJhY3Q6IHN0cmluZztcbiAgZGVub21zOiB7IGRlbm9tOiBzdHJpbmc7IGRlY2ltYWxzOiBudW1iZXI7IG9yYWNsZTogc3RyaW5nIH1bXTtcbiAgdmF1bHRzOiAoc3RyaW5nIHwgbnVsbClbXTtcbiAgb3JjYXM6IChzdHJpbmcgfCBudWxsKVtdO1xuICBtYXhfbHR2OiBzdHJpbmc7XG4gIGZ1bGxfbGlxdWlkYXRpb25fdGhyZXNob2xkOiBzdHJpbmc7XG4gIHBhcnRpYWxfbGlxdWlkYXRpb25fdGFyZ2V0OiBzdHJpbmc7XG4gIGJvcnJvd19mZWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFBvc2l0aW9uUmVzcG9uc2UgPSB7XG4gIGlkeDogc3RyaW5nO1xuICBob2xkZXI6IHN0cmluZztcbiAgbHBfYW1vdW50OiBzdHJpbmc7XG4gIGx0djogc3RyaW5nO1xuICBkZWJ0X3NoYXJlczoge1xuICAgIGFtb3VudDogc3RyaW5nO1xuICAgIGRlbm9tOiBzdHJpbmc7XG4gICAgcmF0aW86IHN0cmluZztcbiAgfVtdO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zaXRpb24gPSB7XG4gIGlkeDogc3RyaW5nO1xuICBob2xkZXI6IHN0cmluZztcbiAgbHBBbW91bnQ6IEJpZ051bWJlcjtcbiAgbHR2OiBCaWdOdW1iZXI7XG4gIGRlYnRTaGFyZXM6IFJlY29yZDxcbiAgICBzdHJpbmcsXG4gICAge1xuICAgICAgYW1vdW50OiBCaWdOdW1iZXI7XG4gICAgICBkZW5vbTogRGVub207XG4gICAgICByYXRpbzogQmlnTnVtYmVyO1xuICAgIH1cbiAgPjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXN0UG9zaXRpb24gPSAocmVzOiBQb3NpdGlvblJlc3BvbnNlKTogUG9zaXRpb24gPT4gKHtcbiAgaWR4OiByZXMuaWR4LFxuICBob2xkZXI6IHJlcy5ob2xkZXIsXG4gIGxwQW1vdW50OiBCaWdOdW1iZXIuZnJvbShyZXMubHBfYW1vdW50KSxcbiAgbHR2OiBwYXJzZUZpeGVkKHJlcy5sdHYsIDE4KSxcbiAgZGVidFNoYXJlczogcmVzLmRlYnRfc2hhcmVzLnJlZHVjZShcbiAgICAoYSwgdikgPT4gKHtcbiAgICAgIC4uLmEsXG4gICAgICBbdi5kZW5vbV06IHtcbiAgICAgICAgYW1vdW50OiBCaWdOdW1iZXIuZnJvbSh2LmFtb3VudCksXG4gICAgICAgIGRlbm9tOiBEZW5vbS5mcm9tKHYuZGVub20pLFxuICAgICAgICByYXRpbzogcGFyc2VGaXhlZCh2LnJhdGlvLCAxOCksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHt9XG4gICksXG59KTtcblxuZXhwb3J0IGNvbnN0IGNhc3RQb29sID0gKFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIHJlczogUG9vbFJlc3BvbnNlLFxuICBtYXJnaW4/OiB7IGFkZHJlc3M6IHN0cmluZzsgY29uZmlnOiBNYXJnaW5SZXNwb25zZSB9XG4pOiBQb29sID0+ICh7XG4gIHN0cmF0ZWd5OiBcImFtcFwiIGluIHJlcyA/IFwieHlrXCIgOiBcImFkYXB0ZXJcIiBpbiByZXMgPyBcImxzZFwiIDogXCJzdGFibGVcIixcbiAgYWRkcmVzcyxcbiAgb3duZXI6IHJlcy5vd25lcixcbiAgZGVub21zOiBbRGVub20uZnJvbShyZXMuZGVub21zWzBdKSwgRGVub20uZnJvbShyZXMuZGVub21zWzFdKV0sXG4gIHByaWNlUHJlY2lzaW9uOiByZXMucHJpY2VfcHJlY2lzaW9uLmRlY2ltYWxfcGxhY2VzLFxuICBkZWNpbWFsRGVsdGE6IHJlcy5kZWNpbWFsX2RlbHRhLFxuICBmaW5Db250cmFjdDogcmVzLmZpbl9jb250cmFjdCxcbiAgbWFyZ2luOiBtYXJnaW4gJiYgY2FzdE1hcmdpbihtYXJnaW4uYWRkcmVzcywgbWFyZ2luLmNvbmZpZyksXG4gIGFkYXB0ZXI6IHJlcy5hZGFwdGVyICYmIGNhc3RBZGFwdGVyKHJlcy5hZGFwdGVyKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY2FzdE1hcmdpbiA9IChhZGRyZXNzOiBzdHJpbmcsIHJlczogTWFyZ2luUmVzcG9uc2UpOiBNYXJnaW4gPT4gKHtcbiAgYWRkcmVzcyxcbiAgb3duZXI6IHJlcy5vd25lcixcbiAgYm93Q29udHJhY3Q6IHJlcy5ib3dfY29udHJhY3QsXG4gIGRlbm9tczogW1xuICAgIHtcbiAgICAgIGRlbm9tOiBEZW5vbS5mcm9tKHJlcy5kZW5vbXNbMF0uZGVub20pLFxuICAgICAgZGVjaW1hbHM6IHJlcy5kZW5vbXNbMF0uZGVjaW1hbHMsXG4gICAgICBvcmFjbGU6IHJlcy5kZW5vbXNbMF0ub3JhY2xlLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVub206IERlbm9tLmZyb20ocmVzLmRlbm9tc1sxXS5kZW5vbSksXG4gICAgICBkZWNpbWFsczogcmVzLmRlbm9tc1sxXS5kZWNpbWFscyxcbiAgICAgIG9yYWNsZTogcmVzLmRlbm9tc1sxXS5vcmFjbGUsXG4gICAgfSxcbiAgXSxcbiAgdmF1bHRzOiBbcmVzLnZhdWx0c1swXSwgcmVzLnZhdWx0c1sxXV0sXG4gIG9yY2FzOiBbcmVzLm9yY2FzWzBdLCByZXMub3JjYXNbMV1dLFxuICBtYXhMdHY6IHBhcnNlRml4ZWQocmVzLm1heF9sdHYsIDE4KSxcbiAgZnVsbExpcXVpZGF0aW9uVGhyZXNob2xkOiBCaWdOdW1iZXIuZnJvbShyZXMuZnVsbF9saXF1aWRhdGlvbl90aHJlc2hvbGQpLFxuICBwYXJ0aWFsTGlxdWlkYXRpb25UYXJnZXQ6IHBhcnNlRml4ZWQocmVzLnBhcnRpYWxfbGlxdWlkYXRpb25fdGFyZ2V0LCAxOCksXG4gIGJvcnJvd0ZlZTogcGFyc2VGaXhlZChyZXMuYm9ycm93X2ZlZSwgMTgpLFxufSk7XG5cbmNvbnN0IGNhc3RBZGFwdGVyID0gKFxuICByZXM6XG4gICAgfCB7XG4gICAgICAgIGNvbnRyYWN0OlxuICAgICAgICAgIHwgeyBhZGRyZXNzOiBzdHJpbmcgfVxuICAgICAgICAgIC8vIGxlZ2FjeVxuICAgICAgICAgIHwgc3RyaW5nO1xuICAgICAgfVxuICAgIHwgeyBvcmFjbGU6IGFueSB9XG4pOiB7IGNvbnRyYWN0OiB7IGFkZHJlc3M6IHN0cmluZyB9IH0gfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoXCJvcmFjbGVcIiBpbiByZXMpIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmICh0eXBlb2YgcmVzLmNvbnRyYWN0ID09PSBcInN0cmluZ1wiKVxuICAgIHJldHVybiB7IGNvbnRyYWN0OiB7IGFkZHJlc3M6IHJlcy5jb250cmFjdCB9IH07XG4gIHJldHVybiB7IGNvbnRyYWN0OiB7IGFkZHJlc3M6IHJlcy5jb250cmFjdC5hZGRyZXNzIH0gfTtcbn07XG5cbmV4cG9ydCBjb25zdCBQT09MUzogUmVjb3JkPE5FVFdPUkssIFJlY29yZDxzdHJpbmcsIFBvb2w+PiA9IHtcbiAgW01BSU5ORVRdOiBjb250cmFjdHNbTUFJTk5FVF0uYm93LnJlZHVjZShcbiAgICAoYSwgdikgPT5cbiAgICAgIEVYQ0xVREVELmluY2x1ZGVzKHYuYWRkcmVzcylcbiAgICAgICAgPyBhXG4gICAgICAgIDoge1xuICAgICAgICAgICAgLi4uYSxcbiAgICAgICAgICAgIFt2LmFkZHJlc3NdOiBjYXN0UG9vbChcbiAgICAgICAgICAgICAgdi5hZGRyZXNzLFxuICAgICAgICAgICAgICB2LmNvbmZpZyxcbiAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjb250cmFjdHNbTUFJTk5FVF0uYm93TWFyZ2luKS5maW5kKFxuICAgICAgICAgICAgICAgICh4KSA9PiB4LmNvbmZpZy5ib3dfY29udHJhY3QgPT09IHYuYWRkcmVzc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAge31cbiAgKSxcbiAgW1RFU1RORVRdOiBjb250cmFjdHNbVEVTVE5FVF0uYm93LnJlZHVjZShcbiAgICAoYSwgdikgPT5cbiAgICAgIEVYQ0xVREVELmluY2x1ZGVzKHYuYWRkcmVzcylcbiAgICAgICAgPyBhXG4gICAgICAgIDoge1xuICAgICAgICAgICAgLi4uYSxcbiAgICAgICAgICAgIFt2LmFkZHJlc3NdOiBjYXN0UG9vbChcbiAgICAgICAgICAgICAgdi5hZGRyZXNzLFxuICAgICAgICAgICAgICB2LmNvbmZpZyxcbiAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjb250cmFjdHNbVEVTVE5FVF0uYm93TWFyZ2luKS5maW5kKFxuICAgICAgICAgICAgICAgICh4KSA9PiB4LmNvbmZpZy5ib3dfY29udHJhY3QgPT09IHYuYWRkcmVzc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAge31cbiAgKSxcbiAgW1BPTkRdOiB7fSxcbn07XG4iXSwibmFtZXMiOlsiRVhDTFVERUQiLCJQT09MUyIsImNhc3RNYXJnaW4iLCJjYXN0UG9vbCIsImNhc3RQb3NpdGlvbiIsInJlcyIsImlkeCIsImhvbGRlciIsImxwQW1vdW50IiwiQmlnTnVtYmVyIiwiZnJvbSIsImxwX2Ftb3VudCIsImx0diIsInBhcnNlRml4ZWQiLCJkZWJ0U2hhcmVzIiwiZGVidF9zaGFyZXMiLCJyZWR1Y2UiLCJhIiwidiIsImRlbm9tIiwiYW1vdW50IiwiRGVub20iLCJyYXRpbyIsImFkZHJlc3MiLCJtYXJnaW4iLCJzdHJhdGVneSIsIm93bmVyIiwiZGVub21zIiwicHJpY2VQcmVjaXNpb24iLCJwcmljZV9wcmVjaXNpb24iLCJkZWNpbWFsX3BsYWNlcyIsImRlY2ltYWxEZWx0YSIsImRlY2ltYWxfZGVsdGEiLCJmaW5Db250cmFjdCIsImZpbl9jb250cmFjdCIsImNvbmZpZyIsImFkYXB0ZXIiLCJjYXN0QWRhcHRlciIsImJvd0NvbnRyYWN0IiwiYm93X2NvbnRyYWN0IiwiZGVjaW1hbHMiLCJvcmFjbGUiLCJ2YXVsdHMiLCJvcmNhcyIsIm1heEx0diIsIm1heF9sdHYiLCJmdWxsTGlxdWlkYXRpb25UaHJlc2hvbGQiLCJmdWxsX2xpcXVpZGF0aW9uX3RocmVzaG9sZCIsInBhcnRpYWxMaXF1aWRhdGlvblRhcmdldCIsInBhcnRpYWxfbGlxdWlkYXRpb25fdGFyZ2V0IiwiYm9ycm93RmVlIiwiYm9ycm93X2ZlZSIsInVuZGVmaW5lZCIsImNvbnRyYWN0IiwiTUFJTk5FVCIsImNvbnRyYWN0cyIsImJvdyIsImluY2x1ZGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiYm93TWFyZ2luIiwiZmluZCIsIngiLCJURVNUTkVUIiwiUE9ORCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLYUEsUUFBUTtlQUFSQTs7SUFnTUFDLEtBQUs7ZUFBTEE7O0lBeENBQyxVQUFVO2VBQVZBOztJQWhCQUMsUUFBUTtlQUFSQTs7SUFsQkFDLFlBQVk7ZUFBWkE7OzsyQkEzSHlCO3VCQUNoQjt5QkFDMEI7c0VBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsTUFBTUosV0FBVztJQUN0QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUF3Rk0sTUFBTUksZUFBZSxDQUFDQyxNQUFxQyxDQUFBO1FBQ2hFQyxLQUFLRCxJQUFJQyxHQUFHO1FBQ1pDLFFBQVFGLElBQUlFLE1BQU07UUFDbEJDLFVBQVVDLG9CQUFTLENBQUNDLElBQUksQ0FBQ0wsSUFBSU0sU0FBUztRQUN0Q0MsS0FBS0MsSUFBQUEscUJBQVUsRUFBQ1IsSUFBSU8sR0FBRyxFQUFFO1FBQ3pCRSxZQUFZVCxJQUFJVSxXQUFXLENBQUNDLE1BQU0sQ0FDaEMsQ0FBQ0MsR0FBR0MsSUFBTyx3Q0FDTkQ7Z0JBQ0gsQ0FBQ0MsRUFBRUMsS0FBSyxDQUFDLEVBQUU7b0JBQ1RDLFFBQVFYLG9CQUFTLENBQUNDLElBQUksQ0FBQ1EsRUFBRUUsTUFBTTtvQkFDL0JELE9BQU9FLFlBQUssQ0FBQ1gsSUFBSSxDQUFDUSxFQUFFQyxLQUFLO29CQUN6QkcsT0FBT1QsSUFBQUEscUJBQVUsRUFBQ0ssRUFBRUksS0FBSyxFQUFFO2dCQUM3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
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
    NOTICES: function() {
        return NOTICES;
    },
    PAIRS: function() {
        return PAIRS;
    },
    STAKING: function() {
        return STAKING;
    },
    compile: function() {
        return compile;
    }
});
const _denom = require("../denom");
const _network = require("../network");
const _usk = /*#__PURE__*/ _interop_require_wildcard(require("../usk"));
const _contractsjson = /*#__PURE__*/ _interop_require_default(require("../resources/contracts.json"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
    "kujira18638dsuf7p3a2e23seqz8zegqrcpsdr5nw6j2a50qg6r3q8vn3qqrg9lzp",
    "kujira143thenn7ugsevf0tl3hz4ved53t6w5r7uq0qcwr8kxgg343jxg0svcrfjf",
    "kujira12g0jkp5hqlujw57akq2prkq4hq7hsy4qecmv93gdyzelggzpc4dsjtkvh2",
    "kujira1qshjsyprd79w5q494themln57qz35txt2kx7yc6c0u4nmd4cy27qanxdlc",
    "kujira1kc3msrd9gvnfumfcshlkvcdgklf9m9ln7llfqsxqalcfk9xjr5uqdy8us6",
    "kujira13l8gwanf37938wgfv5yktmfzxjwaj4ysn4gl96vj78xcqqxlcrgssfl797",
    "kujira1vt9lmzw5wc9gss07ty9cf8ytpy7se77u7xytylv4xvklsfggmxgquklr7p",
    "kujira1467jk0ljtesmtcut5tec9j4a6rnu59vd38ea5n0q2y6k85qk803qqqhsg8",
    "kujira1trxh7pu70dmzpqyqs4yltx2h5202k9e9fpssee0tdq4x2jr9praqg7c96e"
];
const NOTICES = {
    kujira1v8lkqws3gd6npr0rdk9ch54amh9guas86r4u62jq27hee88lryfsxwrvlk: "The FURY token from JUNO will be replaced by the native staking token from the new FURY blockchain after launch. A snapshot of token holders was taken at block height 9200000 on Juno",
    kujira1cduudfszcm9slm8qxlaqvnpzg2u0hkus94fe3pwt9x446dtw6eeql8ualz: "This SHD token from Shade Protocol was replaced with a new version. Tokens can be migrated on [Shade Protocol's app](https://app.shadeprotocol.io/migrate). Trade the new token [here](https://fin.kujira.network/trade/kujira1vdv74x0w4mq2v57r4mydps89jw4wsrqtrxez3tylzqwmy972a9fssy5e3y).",
    kujira1kmw6fk5p7an27u8f3er08xrwvzlehczymgshkqxzfrxyrfleu2eqxykaln: "The RAC token from the Juno network has been replaced with a native token on Migaloo. See [their medium post](https://medium.com/@racoon-supply/rac-is-now-an-ibc-asset-1dccad0df7bb) for instructions on how to migrate",
    kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867: "This pair uses legacy FIN code from the start of the Kujira Blockchain. In the interests of security, trading on this pair has been disabled. Please use the [Noble USDC](https://fin.kujira.network/trade/kujira1pw96huy6z02uk8hdpruk6g8u700dp8yxjhp46c24rwkzay2lfd3quqdum5) pair instead. Existing orders may be withdrawn."
};
const STAKING = {
    [_network.TESTNET]: "kujira1e7hxytqdg6v05f8ev3wrfcm5ecu3qyhl7y4ga73z76yuufnlk2rqd4uwf4",
    [_network.MAINNET]: "kujira1p2j2cq4g3jjrz53ceku725t4uectn89hw35sehf8fpq9qfzvufeqymyem8"
};
const castConfig = (json)=>({
        denoms: [
            _denom.Denom.from(typeof json.denoms[0] === "string" ? json.denoms[0] : json.denoms[0].native),
            _denom.Denom.from(typeof json.denoms[1] === "string" ? json.denoms[1] : json.denoms[1].native)
        ],
        oracles: "oracles" in json && typeof json.oracles === "object" ? [
            json.oracles.some[0],
            json.oracles.some[1]
        ] : null,
        precision: {
            decimal_places: json.price_precision.decimal_places
        },
        decimalDelta: json.decimal_delta || 0,
        multiswap: true
    });
const compile = (network)=>(a, v)=>{
        var _contracts_network_bow_reverse_find, _contracts_network_calc_, _contracts_network_calc_1;
        if (FILTERED.includes(v.address)) return a;
        const config = castConfig(v.config);
        const margin = _contractsjson.default[network].uskMarginSwap.find((m)=>m.config.fin_address === v.address);
        return _object_spread_props(_object_spread({}, a), {
            [v.address]: _object_spread_props(_object_spread({
                address: v.address
            }, config), {
                pool: (_contracts_network_bow_reverse_find = _contractsjson.default[network].bow// Reverse as the laterly created contracts are more likely to be correct
                .reverse()// @ts-ignore
                .find((b)=>b.config.fin_contract === v.address && v.config.price_precision.decimal_places === b.config.price_precision.decimal_places && ![
                        "kujira188p624ykuepun8h8kjmcfs553mz2jgeanetyqv7l6xltdld497vqespn6c",
                        "kujira136rwqvwy3flttm9wfnc5xgnlr6mu5k8e2elgzs2hdhuwf50w3l2qp807cx",
                        "kujira1xgjefq7fs4yj29t9gk0t9esgw52s68j83yeac3ru2mefdp529qsqca7hhv",
                        "kujira167gut7dskwurax8an630m3yy2cwa2fp3kmcpdzucyy6ppg7njgyqhl7w50",
                        "kujira1ywlrdpqymukghjwhfyp2n98r49j56wej36n4l08egkdlwj4fn87ql2l2ey",
                        "kujira1dj2s8uvup63fsmpfdfpmu570es4whswp806w0p6usdamtglhwvfqd5jx40",
                        "kujira1cdy6aje8zszx5vryttkkm5rn9g2n53ltfds753fsn63m09cmhx0sgp6v6m",
                        "kujira1h356yzzk2yw7q5s26dewdgaptw05fxplgmxdxcfqcatjyurckuks6zfay8",
                        "kujira19a0wethewg36vny9jremekzlx66lwljp2htrhe255mp6djv652dqsu2l76",
                        "kujira1xdjt8r39nvm03fs4d9cwyw2sks5dahs52msza59y4vevdgdwhtlq9e3vvg"
                    ].includes(b.address))) === null || _contracts_network_bow_reverse_find === void 0 ? void 0 : _contracts_network_bow_reverse_find.address,
                calc: ((_contracts_network_calc_ = _contractsjson.default[network].calc[0]) === null || _contracts_network_calc_ === void 0 ? void 0 : _contracts_network_calc_.pairs.find((x)=>x.denoms[0] === config.denoms[0].reference && x.denoms[1] === config.denoms[1].reference)) ? (_contracts_network_calc_1 = _contractsjson.default[network].calc[0]) === null || _contracts_network_calc_1 === void 0 ? void 0 : _contracts_network_calc_1.address : undefined,
                margin: margin ? _object_spread({
                    address: margin.address
                }, _usk.castConfig(margin.config.market)) : undefined
            })
        });
    };
const PAIRS = {
    [_network.MAINNET]: _contractsjson.default["kaiyo-1"].fin.reduce(compile("kaiyo-1"), {}),
    [_network.TESTNET]: _contractsjson.default["harpoon-4"].fin.reduce(compile("harpoon-4"), {}),
    [_network.POND]: {}
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maW4vcGFpcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVub20gfSBmcm9tIFwiLi4vZGVub21cIjtcbmltcG9ydCB7IE1BSU5ORVQsIE5FVFdPUkssIFBPTkQsIFRFU1RORVQgfSBmcm9tIFwiLi4vbmV0d29ya1wiO1xuaW1wb3J0ICogYXMgdXNrIGZyb20gXCIuLi91c2tcIjtcbmltcG9ydCB7IFBhaXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRklMVEVSRUQgPSBbXG4gIFwia3VqaXJhMTg2Mzhkc3VmN3AzYTJlMjNzZXF6OHplZ3FyY3BzZHI1bnc2ajJhNTBxZzZyM3E4dm4zcXFyZzlsenBcIixcbiAgXCJrdWppcmExNDN0aGVubjd1Z3NldmYwdGwzaHo0dmVkNTN0Nnc1cjd1cTBxY3dyOGt4Z2czNDNqeGcwc3ZjcmZqZlwiLFxuICBcImt1amlyYTEyZzBqa3A1aHFsdWp3NTdha3EycHJrcTRocTdoc3k0cWVjbXY5M2dkeXplbGdnenBjNGRzanRrdmgyXCIsXG4gIFwia3VqaXJhMXFzaGpzeXByZDc5dzVxNDk0dGhlbWxuNTdxejM1dHh0Mmt4N3ljNmMwdTRubWQ0Y3kyN3FhbnhkbGNcIixcbiAgXCJrdWppcmExa2MzbXNyZDlndm5mdW1mY3NobGt2Y2Rna2xmOW05bG43bGxmcXN4cWFsY2ZrOXhqcjV1cWR5OHVzNlwiLFxuICBcImt1amlyYTEzbDhnd2FuZjM3OTM4d2dmdjV5a3RtZnp4andhajR5c240Z2w5NnZqNzh4Y3FxeGxjcmdzc2ZsNzk3XCIsXG4gIFwia3VqaXJhMXZ0OWxtenc1d2M5Z3NzMDd0eTljZjh5dHB5N3NlNzd1N3h5dHlsdjR4dmtsc2ZnZ214Z3F1a2xyN3BcIixcbiAgXCJrdWppcmExNDY3amswbGp0ZXNtdGN1dDV0ZWM5ajRhNnJudTU5dmQzOGVhNW4wcTJ5Nms4NXFrODAzcXFxaHNnOFwiLFxuICBcImt1amlyYTF0cnhoN3B1NzBkbXpwcXlxczR5bHR4Mmg1MjAyazllOWZwc3NlZTB0ZHE0eDJqcjlwcmFxZzdjOTZlXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgTk9USUNFUyA9IHtcbiAga3VqaXJhMXY4bGtxd3MzZ2Q2bnByMHJkazljaDU0YW1oOWd1YXM4NnI0dTYyanEyN2hlZTg4bHJ5ZnN4d3J2bGs6XG4gICAgXCJUaGUgRlVSWSB0b2tlbiBmcm9tIEpVTk8gd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgbmF0aXZlIHN0YWtpbmcgdG9rZW4gZnJvbSB0aGUgbmV3IEZVUlkgYmxvY2tjaGFpbiBhZnRlciBsYXVuY2guIEEgc25hcHNob3Qgb2YgdG9rZW4gaG9sZGVycyB3YXMgdGFrZW4gYXQgYmxvY2sgaGVpZ2h0IDkyMDAwMDAgb24gSnVub1wiLFxuICBrdWppcmExY2R1dWRmc3pjbTlzbG04cXhsYXF2bnB6ZzJ1MGhrdXM5NGZlM3B3dDl4NDQ2ZHR3NmVlcWw4dWFsejpcbiAgICBcIlRoaXMgU0hEIHRva2VuIGZyb20gU2hhZGUgUHJvdG9jb2wgd2FzIHJlcGxhY2VkIHdpdGggYSBuZXcgdmVyc2lvbi4gVG9rZW5zIGNhbiBiZSBtaWdyYXRlZCBvbiBbU2hhZGUgUHJvdG9jb2wncyBhcHBdKGh0dHBzOi8vYXBwLnNoYWRlcHJvdG9jb2wuaW8vbWlncmF0ZSkuIFRyYWRlIHRoZSBuZXcgdG9rZW4gW2hlcmVdKGh0dHBzOi8vZmluLmt1amlyYS5uZXR3b3JrL3RyYWRlL2t1amlyYTF2ZHY3NHgwdzRtcTJ2NTdyNG15ZHBzODlqdzR3c3JxdHJ4ZXozdHlsenF3bXk5NzJhOWZzc3k1ZTN5KS5cIixcbiAga3VqaXJhMWttdzZmazVwN2FuMjd1OGYzZXIwOHhyd3Z6bGVoY3p5bWdzaGtxeHpmcnh5cmZsZXUyZXF4eWthbG46XG4gICAgXCJUaGUgUkFDIHRva2VuIGZyb20gdGhlIEp1bm8gbmV0d29yayBoYXMgYmVlbiByZXBsYWNlZCB3aXRoIGEgbmF0aXZlIHRva2VuIG9uIE1pZ2Fsb28uIFNlZSBbdGhlaXIgbWVkaXVtIHBvc3RdKGh0dHBzOi8vbWVkaXVtLmNvbS9AcmFjb29uLXN1cHBseS9yYWMtaXMtbm93LWFuLWliYy1hc3NldC0xZGNjYWQwZGY3YmIpIGZvciBpbnN0cnVjdGlvbnMgb24gaG93IHRvIG1pZ3JhdGVcIixcbiAga3VqaXJhMTRoajJ0YXZxOGZwZXNkd3h4Y3U0NHJ0eTNoaDkwdmh1anJ2Y21zdGw0enIzdHhtZnZ3OXNsNGU4Njc6XG4gICAgXCJUaGlzIHBhaXIgdXNlcyBsZWdhY3kgRklOIGNvZGUgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIEt1amlyYSBCbG9ja2NoYWluLiBJbiB0aGUgaW50ZXJlc3RzIG9mIHNlY3VyaXR5LCB0cmFkaW5nIG9uIHRoaXMgcGFpciBoYXMgYmVlbiBkaXNhYmxlZC4gUGxlYXNlIHVzZSB0aGUgW05vYmxlIFVTRENdKGh0dHBzOi8vZmluLmt1amlyYS5uZXR3b3JrL3RyYWRlL2t1amlyYTFwdzk2aHV5NnowMnVrOGhkcHJ1azZnOHU3MDBkcDh5eGpocDQ2YzI0cndremF5MmxmZDNxdXFkdW01KSBwYWlyIGluc3RlYWQuIEV4aXN0aW5nIG9yZGVycyBtYXkgYmUgd2l0aGRyYXduLlwiLFxufTtcblxuaW1wb3J0IGNvbnRyYWN0cyBmcm9tIFwiLi4vcmVzb3VyY2VzL2NvbnRyYWN0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgU1RBS0lORyA9IHtcbiAgW1RFU1RORVRdOlxuICAgIFwia3VqaXJhMWU3aHh5dHFkZzZ2MDVmOGV2M3dyZmNtNWVjdTNxeWhsN3k0Z2E3M3o3Nnl1dWZubGsycnFkNHV3ZjRcIixcbiAgW01BSU5ORVRdOlxuICAgIFwia3VqaXJhMXAyajJjcTRnM2pqcno1M2Nla3U3MjV0NHVlY3RuODlodzM1c2VoZjhmcHE5cWZ6dnVmZXF5bXllbThcIixcbn07XG5cbnR5cGUgQ29uZmlnID0ge1xuICBvd25lcjogc3RyaW5nO1xuICBkZW5vbXM6XG4gICAgfCBzdHJpbmdbXVxuICAgIHwge1xuICAgICAgICBuYXRpdmU6IHN0cmluZztcbiAgICAgIH1bXTtcbiAgcHJpY2VfcHJlY2lzaW9uOiB7XG4gICAgZGVjaW1hbF9wbGFjZXM6IG51bWJlcjtcbiAgfTtcbiAgb3JhY2xlcz86IHsgc29tZTogc3RyaW5nW10gfSB8IFwibm9uZVwiO1xuICBpc19ib290c3RyYXBwaW5nPzogYm9vbGVhbjtcbiAgZGVjaW1hbF9kZWx0YT86IG51bWJlcjtcbn07XG5cbmNvbnN0IGNhc3RDb25maWcgPSAoanNvbjogQ29uZmlnKTogT21pdDxQYWlyLCBcImFkZHJlc3NcIiB8IFwicG9vbFwiIHwgXCJjYWxjXCI+ID0+ICh7XG4gIGRlbm9tczogW1xuICAgIERlbm9tLmZyb20oXG4gICAgICB0eXBlb2YganNvbi5kZW5vbXNbMF0gPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyBqc29uLmRlbm9tc1swXVxuICAgICAgICA6IGpzb24uZGVub21zWzBdLm5hdGl2ZVxuICAgICksXG4gICAgRGVub20uZnJvbShcbiAgICAgIHR5cGVvZiBqc29uLmRlbm9tc1sxXSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IGpzb24uZGVub21zWzFdXG4gICAgICAgIDoganNvbi5kZW5vbXNbMV0ubmF0aXZlXG4gICAgKSxcbiAgXSxcbiAgb3JhY2xlczpcbiAgICBcIm9yYWNsZXNcIiBpbiBqc29uICYmIHR5cGVvZiBqc29uLm9yYWNsZXMgPT09IFwib2JqZWN0XCJcbiAgICAgID8gW2pzb24ub3JhY2xlcy5zb21lWzBdLCBqc29uLm9yYWNsZXMuc29tZVsxXV1cbiAgICAgIDogbnVsbCxcbiAgcHJlY2lzaW9uOiB7IGRlY2ltYWxfcGxhY2VzOiBqc29uLnByaWNlX3ByZWNpc2lvbi5kZWNpbWFsX3BsYWNlcyB9LFxuICBkZWNpbWFsRGVsdGE6IGpzb24uZGVjaW1hbF9kZWx0YSB8fCAwLFxuICBtdWx0aXN3YXA6IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNvbXBpbGUgPVxuICAobmV0d29yazoga2V5b2YgdHlwZW9mIGNvbnRyYWN0cykgPT5cbiAgKGE6IFJlY29yZDxzdHJpbmcsIFBhaXI+LCB2OiB7IGFkZHJlc3M6IHN0cmluZzsgY29uZmlnOiBDb25maWcgfSkgPT4ge1xuICAgIGlmIChGSUxURVJFRC5pbmNsdWRlcyh2LmFkZHJlc3MpKSByZXR1cm4gYTtcbiAgICBjb25zdCBjb25maWcgPSBjYXN0Q29uZmlnKHYuY29uZmlnKTtcbiAgICBjb25zdCBtYXJnaW4gPSBjb250cmFjdHNbbmV0d29ya10udXNrTWFyZ2luU3dhcC5maW5kKFxuICAgICAgKG0pID0+IG0uY29uZmlnLmZpbl9hZGRyZXNzID09PSB2LmFkZHJlc3NcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5hLFxuICAgICAgW3YuYWRkcmVzc106IHtcbiAgICAgICAgYWRkcmVzczogdi5hZGRyZXNzLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgICAgIHBvb2w6IGNvbnRyYWN0c1tuZXR3b3JrXS5ib3dcbiAgICAgICAgICAvLyBSZXZlcnNlIGFzIHRoZSBsYXRlcmx5IGNyZWF0ZWQgY29udHJhY3RzIGFyZSBtb3JlIGxpa2VseSB0byBiZSBjb3JyZWN0XG4gICAgICAgICAgLnJldmVyc2UoKVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAuZmluZChcbiAgICAgICAgICAgIChiOiB7XG4gICAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgZmluX2NvbnRyYWN0OiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgcHJpY2VfcHJlY2lzaW9uOiB7IGRlY2ltYWxfcGxhY2VzOiBudW1iZXIgfTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pID0+XG4gICAgICAgICAgICAgIGIuY29uZmlnLmZpbl9jb250cmFjdCA9PT0gdi5hZGRyZXNzICYmXG4gICAgICAgICAgICAgIHYuY29uZmlnLnByaWNlX3ByZWNpc2lvbi5kZWNpbWFsX3BsYWNlcyA9PT1cbiAgICAgICAgICAgICAgICBiLmNvbmZpZy5wcmljZV9wcmVjaXNpb24uZGVjaW1hbF9wbGFjZXMgJiZcbiAgICAgICAgICAgICAgIVtcbiAgICAgICAgICAgICAgICBcImt1amlyYTE4OHA2MjR5a3VlcHVuOGg4a2ptY2ZzNTUzbXoyamdlYW5ldHlxdjdsNnhsdGRsZDQ5N3ZxZXNwbjZjXCIsXG4gICAgICAgICAgICAgICAgXCJrdWppcmExMzZyd3F2d3kzZmx0dG05d2ZuYzV4Z25scjZtdTVrOGUyZWxnenMyaGRodXdmNTB3M2wycXA4MDdjeFwiLFxuICAgICAgICAgICAgICAgIFwia3VqaXJhMXhnamVmcTdmczR5ajI5dDlnazB0OWVzZ3c1MnM2OGo4M3llYWMzcnUybWVmZHA1Mjlxc3FjYTdoaHZcIixcbiAgICAgICAgICAgICAgICBcImt1amlyYTE2N2d1dDdkc2t3dXJheDhhbjYzMG0zeXkyY3dhMmZwM2ttY3BkenVjeXk2cHBnN25qZ3lxaGw3dzUwXCIsXG4gICAgICAgICAgICAgICAgXCJrdWppcmExeXdscmRwcXltdWtnaGp3aGZ5cDJuOThyNDlqNTZ3ZWozNm40bDA4ZWdrZGx3ajRmbjg3cWwybDJleVwiLFxuICAgICAgICAgICAgICAgIFwia3VqaXJhMWRqMnM4dXZ1cDYzZnNtcGZkZnBtdTU3MGVzNHdoc3dwODA2dzBwNnVzZGFtdGdsaHd2ZnFkNWp4NDBcIixcbiAgICAgICAgICAgICAgICBcImt1amlyYTFjZHk2YWplOHpzeng1dnJ5dHRra201cm45ZzJuNTNsdGZkczc1M2ZzbjYzbTA5Y21oeDBzZ3A2djZtXCIsXG4gICAgICAgICAgICAgICAgXCJrdWppcmExaDM1Nnl6emsyeXc3cTVzMjZkZXdkZ2FwdHcwNWZ4cGxnbXhkeGNmcWNhdGp5dXJja3VrczZ6ZmF5OFwiLFxuICAgICAgICAgICAgICAgIFwia3VqaXJhMTlhMHdldGhld2czNnZueTlqcmVtZWt6bHg2Nmx3bGpwMmh0cmhlMjU1bXA2ZGp2NjUyZHFzdTJsNzZcIixcbiAgICAgICAgICAgICAgICBcImt1amlyYTF4ZGp0OHIzOW52bTAzZnM0ZDljd3l3MnNrczVkYWhzNTJtc3phNTl5NHZldmRnZHdodGxxOWUzdnZnXCIsXG4gICAgICAgICAgICAgIF0uaW5jbHVkZXMoYi5hZGRyZXNzKVxuICAgICAgICAgICk/LmFkZHJlc3MsXG4gICAgICAgIGNhbGM6IGNvbnRyYWN0c1tuZXR3b3JrXS5jYWxjWzBdPy5wYWlycy5maW5kKFxuICAgICAgICAgICh4KSA9PlxuICAgICAgICAgICAgeC5kZW5vbXNbMF0gPT09IGNvbmZpZy5kZW5vbXNbMF0ucmVmZXJlbmNlICYmXG4gICAgICAgICAgICB4LmRlbm9tc1sxXSA9PT0gY29uZmlnLmRlbm9tc1sxXS5yZWZlcmVuY2VcbiAgICAgICAgKVxuICAgICAgICAgID8gY29udHJhY3RzW25ldHdvcmtdLmNhbGNbMF0/LmFkZHJlc3NcbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWFyZ2luOiBtYXJnaW5cbiAgICAgICAgICA/IHsgYWRkcmVzczogbWFyZ2luLmFkZHJlc3MsIC4uLnVzay5jYXN0Q29uZmlnKG1hcmdpbi5jb25maWcubWFya2V0KSB9XG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbmV4cG9ydCBjb25zdCBQQUlSUzogUmVjb3JkPE5FVFdPUkssIFJlY29yZDxzdHJpbmcsIFBhaXI+PiA9IHtcbiAgW01BSU5ORVRdOiBjb250cmFjdHNbXCJrYWl5by0xXCJdLmZpbi5yZWR1Y2UoY29tcGlsZShcImthaXlvLTFcIiksIHt9KSxcbiAgW1RFU1RORVRdOiBjb250cmFjdHNbXCJoYXJwb29uLTRcIl0uZmluLnJlZHVjZShjb21waWxlKFwiaGFycG9vbi00XCIpLCB7fSksXG4gIFtQT05EXToge30sXG59O1xuIl0sIm5hbWVzIjpbIkZJTFRFUkVEIiwiTk9USUNFUyIsIlBBSVJTIiwiU1RBS0lORyIsImNvbXBpbGUiLCJrdWppcmExdjhsa3F3czNnZDZucHIwcmRrOWNoNTRhbWg5Z3Vhczg2cjR1NjJqcTI3aGVlODhscnlmc3h3cnZsayIsImt1amlyYTFjZHV1ZGZzemNtOXNsbThxeGxhcXZucHpnMnUwaGt1czk0ZmUzcHd0OXg0NDZkdHc2ZWVxbDh1YWx6Iiwia3VqaXJhMWttdzZmazVwN2FuMjd1OGYzZXIwOHhyd3Z6bGVoY3p5bWdzaGtxeHpmcnh5cmZsZXUyZXF4eWthbG4iLCJrdWppcmExNGhqMnRhdnE4ZnBlc2R3eHhjdTQ0cnR5M2hoOTB2aHVqcnZjbXN0bDR6cjN0eG1mdnc5c2w0ZTg2NyIsIlRFU1RORVQiLCJNQUlOTkVUIiwiY2FzdENvbmZpZyIsImpzb24iLCJkZW5vbXMiLCJEZW5vbSIsImZyb20iLCJuYXRpdmUiLCJvcmFjbGVzIiwic29tZSIsInByZWNpc2lvbiIsImRlY2ltYWxfcGxhY2VzIiwicHJpY2VfcHJlY2lzaW9uIiwiZGVjaW1hbERlbHRhIiwiZGVjaW1hbF9kZWx0YSIsIm11bHRpc3dhcCIsIm5ldHdvcmsiLCJhIiwidiIsImNvbnRyYWN0cyIsImluY2x1ZGVzIiwiYWRkcmVzcyIsImNvbmZpZyIsIm1hcmdpbiIsInVza01hcmdpblN3YXAiLCJmaW5kIiwibSIsImZpbl9hZGRyZXNzIiwicG9vbCIsImJvdyIsInJldmVyc2UiLCJiIiwiZmluX2NvbnRyYWN0IiwiY2FsYyIsInBhaXJzIiwieCIsInJlZmVyZW5jZSIsInVuZGVmaW5lZCIsInVzayIsIm1hcmtldCIsImZpbiIsInJlZHVjZSIsIlBPTkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBS2FBLFFBQVE7ZUFBUkE7O0lBWUFDLE9BQU87ZUFBUEE7O0lBK0dBQyxLQUFLO2VBQUxBOztJQW5HQUMsT0FBTztlQUFQQTs7SUE0Q0FDLE9BQU87ZUFBUEE7Ozt1QkF6RVM7eUJBQzBCOzZEQUMzQjtzRUEwQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXZCZixNQUFNSixXQUFXO0lBQ3RCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRU0sTUFBTUMsVUFBVTtJ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
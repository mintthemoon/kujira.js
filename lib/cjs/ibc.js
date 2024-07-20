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
    IBC: function() {
        return IBC;
    },
    TRANSFER_CHANNELS: function() {
        return TRANSFER_CHANNELS;
    }
});
const _chainregistry = require("chain-registry");
const _channelsjson = /*#__PURE__*/ _interop_require_default(require("./resources/channels.json"));
const _connectionsjson = /*#__PURE__*/ _interop_require_default(require("./resources/connections.json"));
const _tokensjson = /*#__PURE__*/ _interop_require_default(require("./resources/tokens.json"));
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
const TRANSFER_CHANNELS = {
    testnet: {
        "channel-44": "terra2",
        "channel-51": "theta"
    },
    mainnet: {
        "channel-0": "cosmoshub",
        "channel-1": "juno",
        "channel-3": "osmosis",
        "channel-5": "terra2",
        "channel-6": "cryptoorgchain",
        "channel-7": "stargaze",
        "channel-9": "axelar",
        "channel-10": "secretnetwork",
        "channel-14": "band",
        "channel-15": "bitsong",
        "channel-16": "cerberus",
        "channel-17": "chihuahua",
        "channel-18": "comdex",
        "channel-19": "lum",
        "channel-20": "vidulum",
        "channel-21": "emoney",
        "channel-23": "evmos",
        "channel-27": "okexchain",
        "channel-32": "stride",
        "channel-46": "carbon",
        "channel-50": "gravitybridge",
        "channel-51": "planq",
        "channel-54": "injective",
        "channel-55": "mars",
        "channel-58": "migaloo",
        "channel-59": "sentinel",
        "channel-60": "fetch-ai",
        "channel-61": "agoric",
        "channel-62": "noble",
        "channel-63": "stafihub",
        "channel-64": "akash",
        "channel-65": "assetmantle",
        "channel-67": "crescent",
        "channel-68": "regen",
        "channel-69": "sommelier",
        "channel-70": "omniflixhub",
        "channel-71": "terra",
        "channel-75": "neutron",
        "channel-89": "teritori",
        "channel-95": "kava",
        "channel-99": "archway",
        "channel-102": "umee",
        "channel-113": "gateway",
        "channel-115": "realio",
        "channel-116": "nomic",
        "channel-117": "celestia",
        "channel-118": "dydx",
        "channel-119": "furya",
        "channel-122": "coreum",
        "channel-123": "andromeda",
        "channel-124": "cheqd",
        "channel-157": "odin",
        "channel-158": "persistence",
        "channel-160": "dymension"
    }
};
const EXTRA = [
    {
        chain_name: "dymension",
        status: "live",
        network_type: "mainnet",
        website: "https://portal.dymension.xyz",
        pretty_name: "Dymension Hub",
        chain_id: "dymension_1100-1",
        bech32_prefix: "dym",
        slip44: 60,
        daemon_name: "dymd",
        fees: {
            fee_tokens: [
                {
                    denom: "adym",
                    low_gas_price: 20000000000,
                    average_gas_price: 20000000000,
                    high_gas_price: 20000000000
                }
            ]
        },
        staking: {
            staking_tokens: [
                {
                    denom: "adym"
                }
            ]
        },
        logo_URIs: {
            png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
            svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
        },
        description: "Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps.",
        images: [
            {
                png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
                svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
            }
        ],
        codebase: {
            git_repo: "https://github.com/dymensionxyz/dymension"
        },
        assets: [
            {
                description: "The native governance and staking token of the Dymension Hub",
                denom_units: [
                    {
                        denom: "adym",
                        exponent: 0
                    },
                    {
                        denom: "dym",
                        exponent: 18
                    }
                ],
                base: "adym",
                name: "Dymension",
                display: "dym",
                symbol: "DYM",
                logo_URIs: {
                    png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
                    svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
                },
                images: [
                    {
                        png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png",
                        svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg"
                    }
                ]
            }
        ]
    }
];
const IBC = {
    chains: _chainregistry.chains.reduce((a, v)=>{
        var _assets_find;
        const assets_ = ((_assets_find = _chainregistry.assets.find((a)=>a.chain_name === v.chain_name)) === null || _assets_find === void 0 ? void 0 : _assets_find.assets) || [];
        const x = _object_spread_props(_object_spread({}, v), {
            assets: assets_
        });
        const key = v.network_type === "mainnet" ? "mainnet" : "testnet";
        return _object_spread_props(_object_spread({}, a), {
            [key]: [
                ...a[key],
                x
            ]
        });
    }, {
        mainnet: EXTRA,
        testnet: []
    }),
    connections: _connectionsjson.default,
    channels: {
        mainnet: _channelsjson.default.mainnet.filter((x)=>!!TRANSFER_CHANNELS.mainnet[x.channelId]),
        testnet: _channelsjson.default.testnet.filter((x)=>!!TRANSFER_CHANNELS.testnet[x.channelId])
    },
    tokens: _tokensjson.default
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pYmMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNzZXQsIENoYWluIH0gZnJvbSBcIkBjaGFpbi1yZWdpc3RyeS90eXBlc1wiO1xuaW1wb3J0IHsgYXNzZXRzLCBjaGFpbnMgfSBmcm9tIFwiY2hhaW4tcmVnaXN0cnlcIjtcbmltcG9ydCBjaGFubmVscyBmcm9tIFwiLi9yZXNvdXJjZXMvY2hhbm5lbHMuanNvblwiO1xuaW1wb3J0IGNvbm5lY3Rpb25zIGZyb20gXCIuL3Jlc291cmNlcy9jb25uZWN0aW9ucy5qc29uXCI7XG5pbXBvcnQgdG9rZW5zIGZyb20gXCIuL3Jlc291cmNlcy90b2tlbnMuanNvblwiO1xuXG5leHBvcnQgY29uc3QgVFJBTlNGRVJfQ0hBTk5FTFM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICB0ZXN0bmV0OiB7XG4gICAgXCJjaGFubmVsLTQ0XCI6IFwidGVycmEyXCIsXG4gICAgXCJjaGFubmVsLTUxXCI6IFwidGhldGFcIixcbiAgfSxcbiAgbWFpbm5ldDoge1xuICAgIFwiY2hhbm5lbC0wXCI6IFwiY29zbW9zaHViXCIsXG4gICAgXCJjaGFubmVsLTFcIjogXCJqdW5vXCIsXG4gICAgXCJjaGFubmVsLTNcIjogXCJvc21vc2lzXCIsXG4gICAgXCJjaGFubmVsLTVcIjogXCJ0ZXJyYTJcIixcbiAgICBcImNoYW5uZWwtNlwiOiBcImNyeXB0b29yZ2NoYWluXCIsXG4gICAgXCJjaGFubmVsLTdcIjogXCJzdGFyZ2F6ZVwiLFxuICAgIFwiY2hhbm5lbC05XCI6IFwiYXhlbGFyXCIsXG4gICAgXCJjaGFubmVsLTEwXCI6IFwic2VjcmV0bmV0d29ya1wiLFxuICAgIFwiY2hhbm5lbC0xNFwiOiBcImJhbmRcIixcbiAgICBcImNoYW5uZWwtMTVcIjogXCJiaXRzb25nXCIsXG4gICAgXCJjaGFubmVsLTE2XCI6IFwiY2VyYmVydXNcIixcbiAgICBcImNoYW5uZWwtMTdcIjogXCJjaGlodWFodWFcIixcbiAgICBcImNoYW5uZWwtMThcIjogXCJjb21kZXhcIixcbiAgICBcImNoYW5uZWwtMTlcIjogXCJsdW1cIixcbiAgICBcImNoYW5uZWwtMjBcIjogXCJ2aWR1bHVtXCIsXG4gICAgXCJjaGFubmVsLTIxXCI6IFwiZW1vbmV5XCIsXG4gICAgXCJjaGFubmVsLTIzXCI6IFwiZXZtb3NcIixcbiAgICBcImNoYW5uZWwtMjdcIjogXCJva2V4Y2hhaW5cIixcbiAgICBcImNoYW5uZWwtMzJcIjogXCJzdHJpZGVcIixcbiAgICBcImNoYW5uZWwtNDZcIjogXCJjYXJib25cIixcbiAgICBcImNoYW5uZWwtNTBcIjogXCJncmF2aXR5YnJpZGdlXCIsXG4gICAgXCJjaGFubmVsLTUxXCI6IFwicGxhbnFcIixcbiAgICBcImNoYW5uZWwtNTRcIjogXCJpbmplY3RpdmVcIixcbiAgICBcImNoYW5uZWwtNTVcIjogXCJtYXJzXCIsXG4gICAgXCJjaGFubmVsLTU4XCI6IFwibWlnYWxvb1wiLFxuICAgIFwiY2hhbm5lbC01OVwiOiBcInNlbnRpbmVsXCIsXG4gICAgXCJjaGFubmVsLTYwXCI6IFwiZmV0Y2gtYWlcIixcbiAgICBcImNoYW5uZWwtNjFcIjogXCJhZ29yaWNcIixcbiAgICBcImNoYW5uZWwtNjJcIjogXCJub2JsZVwiLFxuICAgIFwiY2hhbm5lbC02M1wiOiBcInN0YWZpaHViXCIsXG4gICAgXCJjaGFubmVsLTY0XCI6IFwiYWthc2hcIixcbiAgICBcImNoYW5uZWwtNjVcIjogXCJhc3NldG1hbnRsZVwiLFxuICAgIFwiY2hhbm5lbC02N1wiOiBcImNyZXNjZW50XCIsXG4gICAgXCJjaGFubmVsLTY4XCI6IFwicmVnZW5cIixcbiAgICBcImNoYW5uZWwtNjlcIjogXCJzb21tZWxpZXJcIixcbiAgICBcImNoYW5uZWwtNzBcIjogXCJvbW5pZmxpeGh1YlwiLFxuICAgIFwiY2hhbm5lbC03MVwiOiBcInRlcnJhXCIsXG4gICAgXCJjaGFubmVsLTc1XCI6IFwibmV1dHJvblwiLFxuICAgIFwiY2hhbm5lbC04OVwiOiBcInRlcml0b3JpXCIsXG4gICAgXCJjaGFubmVsLTk1XCI6IFwia2F2YVwiLFxuICAgIFwiY2hhbm5lbC05OVwiOiBcImFyY2h3YXlcIixcbiAgICBcImNoYW5uZWwtMTAyXCI6IFwidW1lZVwiLFxuICAgIFwiY2hhbm5lbC0xMTNcIjogXCJnYXRld2F5XCIsXG4gICAgXCJjaGFubmVsLTExNVwiOiBcInJlYWxpb1wiLFxuICAgIFwiY2hhbm5lbC0xMTZcIjogXCJub21pY1wiLFxuICAgIFwiY2hhbm5lbC0xMTdcIjogXCJjZWxlc3RpYVwiLFxuICAgIFwiY2hhbm5lbC0xMThcIjogXCJkeWR4XCIsXG4gICAgXCJjaGFubmVsLTExOVwiOiBcImZ1cnlhXCIsXG4gICAgXCJjaGFubmVsLTEyMlwiOiBcImNvcmV1bVwiLFxuICAgIFwiY2hhbm5lbC0xMjNcIjogXCJhbmRyb21lZGFcIixcbiAgICBcImNoYW5uZWwtMTI0XCI6IFwiY2hlcWRcIixcbiAgICBcImNoYW5uZWwtMTU3XCI6IFwib2RpblwiLFxuICAgIFwiY2hhbm5lbC0xNThcIjogXCJwZXJzaXN0ZW5jZVwiLFxuICAgIFwiY2hhbm5lbC0xNjBcIjogXCJkeW1lbnNpb25cIixcbiAgfSxcbn07XG5cbmNvbnN0IEVYVFJBID0gW1xuICB7XG4gICAgY2hhaW5fbmFtZTogXCJkeW1lbnNpb25cIixcbiAgICBzdGF0dXM6IFwibGl2ZVwiLFxuICAgIG5ldHdvcmtfdHlwZTogXCJtYWlubmV0XCIsXG4gICAgd2Vic2l0ZTogXCJodHRwczovL3BvcnRhbC5keW1lbnNpb24ueHl6XCIsXG4gICAgcHJldHR5X25hbWU6IFwiRHltZW5zaW9uIEh1YlwiLFxuICAgIGNoYWluX2lkOiBcImR5bWVuc2lvbl8xMTAwLTFcIixcbiAgICBiZWNoMzJfcHJlZml4OiBcImR5bVwiLFxuICAgIHNsaXA0NDogNjAsXG4gICAgZGFlbW9uX25hbWU6IFwiZHltZFwiLFxuICAgIGZlZXM6IHtcbiAgICAgIGZlZV90b2tlbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRlbm9tOiBcImFkeW1cIixcbiAgICAgICAgICBsb3dfZ2FzX3ByaWNlOiAyMDAwMDAwMDAwMCxcbiAgICAgICAgICBhdmVyYWdlX2dhc19wcmljZTogMjAwMDAwMDAwMDAsXG4gICAgICAgICAgaGlnaF9nYXNfcHJpY2U6IDIwMDAwMDAwMDAwLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHN0YWtpbmc6IHtcbiAgICAgIHN0YWtpbmdfdG9rZW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBkZW5vbTogXCJhZHltXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgbG9nb19VUklzOiB7XG4gICAgICBwbmc6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy9jaGFpbi1yZWdpc3RyeS9tYXN0ZXIvZHltZW5zaW9uL2ltYWdlcy9keW1lbnNpb24tbG9nby5wbmdcIixcbiAgICAgIHN2ZzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY29zbW9zL2NoYWluLXJlZ2lzdHJ5L21hc3Rlci9keW1lbnNpb24vaW1hZ2VzL2R5bWVuc2lvbi1sb2dvLnN2Z1wiLFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkR5bWVuc2lvbiBpcyBhIG5ldHdvcmsgb2YgZWFzaWx5IGRlcGxveWFibGUgYW5kIGxpZ2h0bmluZyBmYXN0IG1vZHVsYXIgYmxvY2tjaGFpbnMgY2FsbGVkIFJvbGxBcHBzLlwiLFxuICAgIGltYWdlczogW1xuICAgICAge1xuICAgICAgICBwbmc6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy9jaGFpbi1yZWdpc3RyeS9tYXN0ZXIvZHltZW5zaW9uL2ltYWdlcy9keW1lbnNpb24tbG9nby5wbmdcIixcbiAgICAgICAgc3ZnOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9jb3Ntb3MvY2hhaW4tcmVnaXN0cnkvbWFzdGVyL2R5bWVuc2lvbi9pbWFnZXMvZHltZW5zaW9uLWxvZ28uc3ZnXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgY29kZWJhc2U6IHtcbiAgICAgIGdpdF9yZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9keW1lbnNpb254eXovZHltZW5zaW9uXCIsXG4gICAgfSxcbiAgICBhc3NldHM6IFtcbiAgICAgIHtcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUaGUgbmF0aXZlIGdvdmVybmFuY2UgYW5kIHN0YWtpbmcgdG9rZW4gb2YgdGhlIER5bWVuc2lvbiBIdWJcIixcbiAgICAgICAgZGVub21fdW5pdHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkZW5vbTogXCJhZHltXCIsXG4gICAgICAgICAgICBleHBvbmVudDogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRlbm9tOiBcImR5bVwiLFxuICAgICAgICAgICAgZXhwb25lbnQ6IDE4LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGJhc2U6IFwiYWR5bVwiLFxuICAgICAgICBuYW1lOiBcIkR5bWVuc2lvblwiLFxuICAgICAgICBkaXNwbGF5OiBcImR5bVwiLFxuICAgICAgICBzeW1ib2w6IFwiRFlNXCIsXG4gICAgICAgIGxvZ29fVVJJczoge1xuICAgICAgICAgIHBuZzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY29zbW9zL2NoYWluLXJlZ2lzdHJ5L21hc3Rlci9keW1lbnNpb24vaW1hZ2VzL2R5bWVuc2lvbi1sb2dvLnBuZ1wiLFxuICAgICAgICAgIHN2ZzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY29zbW9zL2NoYWluLXJlZ2lzdHJ5L21hc3Rlci9keW1lbnNpb24vaW1hZ2VzL2R5bWVuc2lvbi1sb2dvLnN2Z1wiLFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwbmc6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Nvc21vcy9jaGFpbi1yZWdpc3RyeS9tYXN0ZXIvZHltZW5zaW9uL2ltYWdlcy9keW1lbnNpb24tbG9nby5wbmdcIixcbiAgICAgICAgICAgIHN2ZzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vY29zbW9zL2NoYWluLXJlZ2lzdHJ5L21hc3Rlci9keW1lbnNpb24vaW1hZ2VzL2R5bWVuc2lvbi1sb2dvLnN2Z1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgSUJDOiB7XG4gIGNoYWluczogeyBtYWlubmV0OiBDb3Ntb3NDaGFpbltdOyB0ZXN0bmV0OiBDb3Ntb3NDaGFpbltdIH07XG4gIGNvbm5lY3Rpb25zOiB0eXBlb2YgY29ubmVjdGlvbnM7XG4gIGNoYW5uZWxzOiB0eXBlb2YgY2hhbm5lbHM7XG4gIHRva2VuczogUmVjb3JkPHN0cmluZywgeyBiYXNlX2Rlbm9tOiBzdHJpbmc7IHBhdGg6IHN0cmluZyB9Pjtcbn0gPSB7XG4gIGNoYWluczogY2hhaW5zLnJlZHVjZShcbiAgICAoYSwgdikgPT4ge1xuICAgICAgY29uc3QgYXNzZXRzXyA9XG4gICAgICAgIGFzc2V0cy5maW5kKChhKSA9PiBhLmNoYWluX25hbWUgPT09IHYuY2hhaW5fbmFtZSk/LmFzc2V0cyB8fCBbXTtcbiAgICAgIGNvbnN0IHggPSB7IC4uLnYsIGFzc2V0czogYXNzZXRzXyB9O1xuICAgICAgY29uc3Qga2V5ID0gdi5uZXR3b3JrX3R5cGUgPT09IFwibWFpbm5ldFwiID8gXCJtYWlubmV0XCIgOiBcInRlc3RuZXRcIjtcbiAgICAgIHJldHVybiB7IC4uLmEsIFtrZXldOiBbLi4uYVtrZXldLCB4XSB9O1xuICAgIH0sXG4gICAgeyBtYWlubmV0OiBFWFRSQSwgdGVzdG5ldDogW10gfVxuICApLFxuICBjb25uZWN0aW9ucyxcbiAgY2hhbm5lbHM6IHtcbiAgICBtYWlubmV0OiBjaGFubmVscy5tYWlubmV0LmZpbHRlcihcbiAgICAgICh4KSA9PiAhIVRSQU5TRkVSX0NIQU5ORUxTLm1haW5uZXRbeC5jaGFubmVsSWRdXG4gICAgKSxcbiAgICB0ZXN0bmV0OiBjaGFubmVscy50ZXN0bmV0LmZpbHRlcihcbiAgICAgICh4KSA9PiAhIVRSQU5TRkVSX0NIQU5ORUxTLnRlc3RuZXRbeC5jaGFubmVsSWRdXG4gICAgKSxcbiAgfSxcbiAgdG9rZW5zLFxufTtcblxuZXhwb3J0IHR5cGUgQ29zbW9zQ2hhaW5Bc3NldCA9IEFzc2V0O1xuZXhwb3J0IHR5cGUgQ29zbW9zQ2hhaW4gPSBDaGFpbiAmIHsgYXNzZXRzOiBDb3Ntb3NDaGFpbkFzc2V0W10gfTtcbiJdLCJuYW1lcyI6WyJJQkMiLCJUUkFOU0ZFUl9DSEFOTkVMUyIsInRlc3RuZXQiLCJtYWlubmV0IiwiRVhUUkEiLCJjaGFpbl9uYW1lIiwic3RhdHVzIiwibmV0d29ya190eXBlIiwid2Vic2l0ZSIsInByZXR0eV9uYW1lIiwiY2hhaW5faWQiLCJiZWNoMzJfcHJlZml4Iiwic2xpcDQ0IiwiZGFlbW9uX25hbWUiLCJmZWVzIiwiZmVlX3Rva2VucyIsImRlbm9tIiwibG93X2dhc19wcmljZSIsImF2ZXJhZ2VfZ2FzX3ByaWNlIiwiaGlnaF9nYXNfcHJpY2UiLCJzdGFraW5nIiwic3Rha2luZ190b2tlbnMiLCJsb2dvX1VSSXMiLCJwbmciLCJzdmciLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImNvZGViYXNlIiwiZ2l0X3JlcG8iLCJhc3NldHMiLCJkZW5vbV91bml0cyIsImV4cG9uZW50IiwiYmFzZSIsIm5hbWUiLCJkaXNwbGF5Iiwic3ltYm9sIiwiY2hhaW5zIiwicmVkdWNlIiwiYSIsInYiLCJhc3NldHNfIiwiZmluZCIsIngiLCJrZXkiLCJjb25uZWN0aW9ucyIsImNoYW5uZWxzIiwiZmlsdGVyIiwiY2hhbm5lbElkIiwidG9rZW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJ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
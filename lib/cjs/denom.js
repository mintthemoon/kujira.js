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
    ATOM: function() {
        return ATOM;
    },
    DEMO: function() {
        return DEMO;
    },
    Denom: function() {
        return Denom;
    },
    KUJI: function() {
        return KUJI;
    },
    USK: function() {
        return USK;
    },
    USK_TESTNET: function() {
        return USK_TESTNET;
    },
    axlUSDC: function() {
        return axlUSDC;
    },
    axlUSDT: function() {
        return axlUSDT;
    },
    axlwAVAX: function() {
        return axlwAVAX;
    },
    axlwBNB: function() {
        return axlwBNB;
    },
    axlwETH: function() {
        return axlwETH;
    },
    axlwFTM: function() {
        return axlwFTM;
    },
    axlwGLMR: function() {
        return axlwGLMR;
    },
    axlwMATIC: function() {
        return axlwMATIC;
    },
    factor: function() {
        return factor;
    },
    nobleUSDC: function() {
        return nobleUSDC;
    }
});
const _crypto = require("@cosmjs/crypto");
const _ = require("buffer/");
const _chainregistry = require("chain-registry");
const _network = require("./network");
const _contractsjson = /*#__PURE__*/ _interop_require_default(require("./resources/contracts.json"));
const _osmosisjson = /*#__PURE__*/ _interop_require_default(require("./resources/osmosis.json"));
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
var _assets_find;
const ghostVaults = [
    ..._contractsjson.default[_network.MAINNET].ghostVault,
    ..._contractsjson.default[_network.TESTNET].ghostVault
];
const wormholeAssets = ((_assets_find = _chainregistry.assets.find((x)=>x.chain_name === "gateway")) === null || _assets_find === void 0 ? void 0 : _assets_find.assets) || [];
const labels = _object_spread({
    ulp: "LP ",
    wei: "OKT",
    ugraviton: "GRAV",
    usdt: "USDT",
    usat: "nBTC",
    uregen: "REGEN",
    // Noble USDC
    "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9": "USDC",
    "ibc/119334C55720942481F458C9C462F5C0CD1F1E7EEAC4679D674AA67221916AEA": "LUNC",
    "ibc/217755344C0D40C75036110E20B0427CC6505760F071BE4080DAD5AC845969EE": "USTC",
    "ibc/217755344c0d40c75036110e20b0427cc6505760f071be4080dad5ac845969ee": "USTC",
    uausdc: "USDC",
    uusdc: "USDC",
    uausdt: "USDT",
    uusdt: "USDT",
    atevmos: "EVMOS",
    staevmos: "stEVMOS",
    "wavax-wei": "wAVAX",
    "yum-wei": "YUM",
    "arb-wei": "ARB",
    basecro: "CRO",
    "weth-wei": "wETH",
    "link-wei": "LINK",
    "wsteth-wei": "wstETH",
    "reth-wei": "rETH",
    "dot-planck": "DOT",
    "pepe-wei": "PEPE",
    "yieldeth-wei": "yieldETH",
    aevmos: "EVMOS",
    afet: "FET",
    adydx: "DYDX",
    demo: "DEMO",
    local: "LOCAL",
    swth: "SWTH",
    aarch: "ARCH",
    aacre: "ACRE",
    aplanq: "PLQ",
    ufrienzies: "FRNZ",
    ubedrock: "ROCK",
    stinj: "stINJ",
    nanomobx: "MOBX",
    ario: "RIO",
    ophir: "OPHIR",
    adym: "DYM",
    loki: "ODIN",
    "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo": "DEMO",
    "factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local": "LOCAL",
    "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local": "LOCAL",
    "factory/kujira1503w3cjnzpd06m4apje4v0nx47h5gevkywxar8r25gce8r727jxqe4cehk/LOCAL": "LOCAL",
    "factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk": "USK",
    "factory:kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll:uusk": "USK",
    "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk": "USK",
    "factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk": "USK",
    "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn": "rFUZN",
    "factory/kujira1v3hcejcerf0d9em9ds8rpyyq68vx3u9u4k0fvw4e9hacdy8nn6pqx4urcw/urcpt": "cMNTA",
    "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt": "qcMNTA",
    "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt": "qcKUJI",
    "factory/kujira14el9xd5e688s7g8yra2rjjv26dmjatfrkgrpkyly5hh9hswn2ngs3p9vag/urcpt": "qcMNTA",
    // Old testnet qcKUJI
    "factory/kujira1jaf8tsgvchqfmycv8wmncv52t4fcv3ehuh57gsd9ycce5ewn87ksnwhlkr/urcpt": "qcKUJI",
    "factory/kujira1eqqr3ad0lh84ua4m5qu2n4jjz6h73d64jfwvng0w2k0lnhltt4jqdex4z9/urcpt": "qcKUJI",
    "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt": "qcFUZN",
    "factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac": "RAC",
    "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn": "LVN",
    "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc": "wBTC",
    gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78: "PAXG",
    gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006: "PSTAKE",
    gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2: "wETH",
    gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48: "USDC",
    gravity0xdAC17F958D2ee523a2206206994597C13D831ec7: "USDT",
    gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599: "wBTC",
    gravity0x6B175474E89094C44Da98b954EedeAC495271d0F: "DAI",
    gravity0x77E06c9eCCf2E797fd462A92B6D7642EF85b0A44: "wTAO",
    gravity0xa0b93B9e90aB887E53F9FB8728c009746e989B53: "TST",
    gravity0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30: "INJ",
    gravity0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1: "ARB",
    gravity0x4c11249814f11b9346808179Cf06e71ac328c1b5: "ORAI",
    gravity0x93581991f68DBaE1eA105233b67f7FA0D6BDeE7b: "wEVMOS",
    gravity0x35a532d376FFd9a705d0Bb319532837337A398E7: "wDOGE",
    gravity0x07baC35846e5eD502aA91AdF6A9e7aA210F2DcbE: "erowan",
    gravity0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9: "wLUNC",
    gravity0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE: "SHIB",
    // 18
    gravity0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD: "ETH2x-FLI",
    // 6
    gravity0x44017598f2AF1bD733F9D87b5017b4E7c1B28DDE: "stkATOM",
    // 18
    gravity0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55: "BAND",
    // 6
    gravity0xEa5A82B35244d9e5E48781F00b11B14E627D2951: "ATOM",
    // 18
    gravity0x83F20F44975D03b1b09e64809B757c47f942BEeA: "sDAI",
    // 18
    gravity0x6982508145454Ce325dDbE47a25d4ec3d2311933: "PEPE",
    // 18
    gravity0x817bbDbC3e8A1204f3691d14bB44992841e3dB35: "CUDOS",
    // 18
    gravity0xd23Ed8cA350CE2631F7EcDC5E6bf80D0A1DeBB7B: "PLQ",
    // 18
    gravity0xd3E4Ba569045546D09CF021ECC5dFe42b1d7f6E4: "MNW",
    // 18
    gravity0x514910771AF9Ca656af840dff83E8264EcF986CA: "LINK",
    "erc20/0xAE6D3334989a22A65228732446731438672418F2": "CNTO",
    "frax-wei": "FRAX",
    inj: "INJ",
    "dai-wei": "DAI",
    "wbtc-satoshi": "wBTC",
    "wbnb-wei": "wBNB",
    "wftm-wei": "wFTM",
    "uni-wei": "UNI",
    "wmatic-wei": "wMATIC",
    "wglmr-wei": "wGLMR",
    "busd-wei": "BUSD",
    ncheq: "CHEQ",
    "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": "LOOP",
    "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": "FURY.legacy",
    "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt": "AQUA",
    "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr": "NETA",
    "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa": "RAC.legacy",
    "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se": "GLTO",
    "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct": "ampLUNA",
    "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus": "whLOCAL",
    "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26": "ASTRO",
    "cw20:terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8": "xASTRO",
    "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": "SHD.legacy",
    "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz": "dUST",
    "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv": "ROAR",
    "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3": "SAYVE",
    "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t": "CUB",
    "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584": "BLUE",
    "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml": "boneLUNA",
    "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq": "BMOS",
    "cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852": "AMBER",
    "cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4": "stkd-SCRT",
    "cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt": "BUTT",
    "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm": "SHD",
    "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd": "SILK",
    "cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn": "KUJIC",
    "cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw": "SKUJIC",
    terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a: "bATOM",
    terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun: "bETH",
    terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp: "bLUNA",
    terra1c00vskhyzdv0z63z2tyetzx2qma67n2z3vzyn0: "bSOL",
    terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58: "sAVAX",
    "factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE": "ampWHALE",
    "erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9": "NEOK",
    "factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt": "NEWT",
    "erc20/tether/usdt": "USDT"
}, wormholeAssets.reduce((a, v)=>_object_spread_props(_object_spread({}, a), {
        [v.base]: v.symbol
    }), {}));
const terra = {
    uaud: "AUT",
    ucad: "CAT",
    uchf: "CHT",
    ucny: "CNT",
    udkk: "DKT",
    ueur: "EUT",
    ugbp: "GBT",
    uhkd: "HKT",
    uidr: "IDT",
    uinr: "INT",
    ujpy: "JPT",
    umnt: "MNT",
    umyr: "MYT",
    unok: "NOT",
    uphp: "PHT",
    usdr: "SDT",
    usek: "SET",
    usgd: "SGT",
    uthb: "THT",
    utwd: "TWT",
    uusd: "UST"
};
const baseDenomToSymbol = (denom)=>{
    var _ibc_denom;
    const raw = labels[denom];
    if (raw) return raw;
    const factoryAddress = denom.split("/")[1];
    const ghost = factoryAddress && ghostVaults.find((a)=>a.address === factoryAddress);
    if (ghost) return denom.endsWith("/udebt") ? `debt` : `x`;
    const baseDenom = denom.startsWith("ibc/") ? (_ibc_denom = _tokensjson.default[denom]) === null || _ibc_denom === void 0 ? void 0 : _ibc_denom.base_denom : denom.startsWith("factory/") ? denom.split("/")[2] : denom.startsWith("factory:") ? denom.split(":")[2] : denom;
    if (!baseDenom) return "Unknown";
    const label = labels[baseDenom];
    if (label) return label;
    const t = terra[denom];
    if (t) return t;
    // Stafi
    return baseDenom.startsWith("ur") ? "r" + baseDenom.replace(/^ur/, "").toUpperCase() : baseDenom.startsWith("u") ? baseDenom.replace(/^u/, "").toUpperCase() : baseDenom.startsWith("stk/") ? `stk${baseDenomToSymbol(baseDenom.replace(/^stk\//, ""))}` : baseDenom.startsWith("stu") ? `st${baseDenomToSymbol(baseDenom.replace(/^st/, ""))}` : baseDenom;
};
const avalanche = {
    // Mainnet
    "0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be": "sAVAX"
};
const ics20 = {
    "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup": {
        contract: "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97"
    },
    "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa": {
        contract: "juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97"
    },
    "cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz": {
        contract: "juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97"
    },
    "cw20:juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt": {
        contract: "juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97"
    },
    "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se": {
        contract: "juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
        router: "juno1lkv72wruk6m39a2j4ps036hzxyhjccwncgfzzcaqxuwndg5x0ghqa8mrhg",
        channel: "channel-97"
    },
    // whLOCAL
    "cw20:terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus": {
        contract: "terra1xzkel96e5e8vfmqw7valzdzzv9hqasfyslclvnmvxdejvpda3xwsskxzus",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34"
    },
    // ASTRO
    "cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26": {
        contract: "terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34"
    },
    // xASTRO
    "cw20:terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8": {
        contract: "terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34"
    },
    // ampLUNA
    "cw20:terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct": {
        contract: "terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28"
    },
    // ROAR
    "cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv": {
        contract: "terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28"
    },
    // SAYVE
    "cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3": {
        contract: "terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28"
    },
    // CUB
    "cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t": {
        contract: "terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28"
    },
    // BLUE
    "cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584": {
        contract: "terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28"
    },
    // bLUNA
    "cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml": {
        contract: "terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28"
    },
    // SHD
    // "cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d": {
    //   contract: "secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d",
    //   router: "secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
    //   channel: "channel-46",
    // },
    // dUST
    "cw20:terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz": {
        contract: "terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz",
        router: "terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x",
        channel: "channel-34"
    },
    // KUJIC
    "cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn": {
        contract: "terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn",
        router: "terra1lwdvjtl5lecxcyfl7hc362gczqh03msgcwlh76xa0fcu0usf7ejskkfulk",
        channel: ""
    },
    // SKUJIC
    "cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw": {
        contract: "terra188w26t95tf4dz77raftme8p75rggatxjxfeknw",
        router: "terra1lwdvjtl5lecxcyfl7hc362gczqh03msgcwlh76xa0fcu0usf7ejskkfulk",
        channel: ""
    },
    // Bitmos
    "cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq": {
        contract: "terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq",
        router: "terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au",
        channel: "channel-28"
    }
};
class Denom {
    static from(string) {
        var _Object_values_flatMap_find_config_denoms, _Object_values_flatMap_find;
        const bowUnderlying = (_Object_values_flatMap_find = Object.values(_contractsjson.default).flatMap((x)=>x.bow).find((x)=>`factory/${x.address}/ulp` === string)) === null || _Object_values_flatMap_find === void 0 ? void 0 : (_Object_values_flatMap_find_config_denoms = _Object_values_flatMap_find.config.denoms) === null || _Object_values_flatMap_find_config_denoms === void 0 ? void 0 : _Object_values_flatMap_find_config_denoms.map(Denom.from);
        let osmosisUnderlying;
        if (string.startsWith("ibc/")) {
            var _osmosis_find_assets, _osmosis_find;
            const trace = _tokensjson.default[string];
            osmosisUnderlying = (_osmosis_find = _osmosisjson.default.find((x)=>`gamm/pool/${x.id}` === (trace === null || trace === void 0 ? void 0 : trace.base_denom))) === null || _osmosis_find === void 0 ? void 0 : (_osmosis_find_assets = _osmosis_find.assets) === null || _osmosis_find_assets === void 0 ? void 0 : _osmosis_find_assets.map((x)=>Denom.from(x.token.denom));
        }
        const factoryAddress = string.startsWith("factory/") && string.split("/")[1];
        const ghostVault = ghostVaults.find((f)=>f.address === factoryAddress);
        return new Denom(string, bowUnderlying || osmosisUnderlying || (ghostVault ? [
            Denom.from(ghostVault.config.denom)
        ] : undefined));
    }
    /*
  Method for creating a denom that hasn't yet been IBC'd and so doesn't have an 
  entry in tokens.json
  */ static from_path(port, channel, denom) {
        let d = new Denom(ibcDenom(port, channel, denom));
        d.trace = {
            base_denom: denom,
            path: `${port}/${channel}`
        };
        return d;
    }
    constructor(reference, underlying){
        var _this_trace, _this_trace1, _this_trace2, _this_trace3, _this_trace4, _this_trace5, _this_underlying, _this_underlying1, _this_trace6, _this_trace7, _this_trace8;
        _define_property(this, "reference", void 0);
        _define_property(this, "underlying", void 0);
        _define_property(this, "symbol", void 0);
        _define_property(this, "decimals", void 0);
        _define_property(this, "trace", void 0);
        _define_property(this, "ics20", void 0);
        _define_property(this, "eq", void 0);
        _define_property(this, "compare", void 0);
        _define_property(this, "normalizedReference", void 0);
        this.reference = reference;
        this.underlying = underlying;
        this.decimals = 6;
        this.eq = (other)=>this.reference == other.reference;
        this.compare = (other)=>this.symbol.replace(/[a-z]+/, "").localeCompare(other.symbol.replace(/[a-z]+/, ""));
        this.normalizedReference = ()=>{
            if (this.reference.startsWith("ibc/")) {
                return `ibc/${this.reference.replace("ibc/", "").toLocaleUpperCase()}`;
            }
            return this.reference;
        };
        this.symbol = "";
        if (this.reference.startsWith("ibc/")) {
            this.trace = _tokensjson.default[this.reference];
        }
        this.symbol = baseDenomToSymbol(this.reference);
        if ((_this_trace = this.trace) === null || _this_trace === void 0 ? void 0 : _this_trace.base_denom.startsWith("gamm")) {
            this.symbol = "Osmosis LP ";
        }
        if (this.underlying) {
            this.symbol = `${this.symbol}${this.underlying.map((d)=>d.symbol).join("-")}`;
        }
        this.decimals = 6;
        // wormhole
        if (((_this_trace1 = this.trace) === null || _this_trace1 === void 0 ? void 0 : _this_trace1.path) === `transfer/channel-113`) {
            var _wormholeAssets_find_denom_units_at, _wormholeAssets_find;
            this.decimals = ((_wormholeAssets_find = wormholeAssets.find((a)=>{
                var _this_trace;
                return a.base === ((_this_trace = this.trace) === null || _this_trace === void 0 ? void 0 : _this_trace.base_denom);
            })) === null || _wormholeAssets_find === void 0 ? void 0 : (_wormholeAssets_find_denom_units_at = _wormholeAssets_find.denom_units.at(-1)) === null || _wormholeAssets_find_denom_units_at === void 0 ? void 0 : _wormholeAssets_find_denom_units_at.exponent) || this.decimals;
        }
        if ((((_this_trace2 = this.trace) === null || _this_trace2 === void 0 ? void 0 : _this_trace2.base_denom) || this.reference).startsWith("erc20/")) this.decimals = 18;
        if ((((_this_trace3 = this.trace) === null || _this_trace3 === void 0 ? void 0 : _this_trace3.base_denom) || this.reference).startsWith("gravity")) this.decimals = 18;
        if ((((_this_trace4 = this.trace) === null || _this_trace4 === void 0 ? void 0 : _this_trace4.base_denom) || this.reference).endsWith("wei")) this.decimals = 18;
        if ((((_this_trace5 = this.trace) === null || _this_trace5 === void 0 ? void 0 : _this_trace5.base_denom) || this.reference).endsWith("-satoshi")) this.decimals = 8;
        if (this.symbol.startsWith("PAXG")) this.decimals = 18;
        if (this.symbol === "EVMOS") this.decimals = 18;
        if (this.symbol === "wAVAX") this.decimals = 18;
        if (this.symbol === "wETH") this.decimals = 18;
        if (this.symbol === "CRO") this.decimals = 8;
        if (this.symbol === "EL1") this.decimals = 18;
        if (this.symbol === "nBTC") this.decimals = 14;
        if (this.symbol === "BOOT") this.decimals = 0;
        if (this.symbol === "DOT") this.decimals = 10;
        if (this.symbol.startsWith("SHD")) this.decimals = 8;
        if (this.symbol === "SHD") this.decimals = 8;
        if (this.symbol === "INJ") this.decimals = 18;
        if (this.symbol === "INJ") this.decimals = 18;
        if (this.symbol === "stINJ") this.decimals = 18;
        if (this.symbol === "CNTO") this.decimals = 18;
        if (this.symbol.startsWith("wTAO")) this.decimals = 9;
        if (this.symbol === "ACRE") this.decimals = 18;
        if (this.symbol === "PLQ") this.decimals = 18;
        if (this.symbol === "SWTH") this.decimals = 8;
        if (this.symbol.startsWith("wBTC")) this.decimals = 8;
        if (this.symbol === "gTST") this.decimals = 18;
        if (this.symbol === "ARB") this.decimals = 18;
        if (this.symbol === "FET") this.decimals = 18;
        if (this.symbol === "HANS") this.decimals = 18;
        if (this.symbol === "ORAI") this.decimals = 18;
        if (this.symbol === "wEVMOS") this.decimals = 18;
        if (this.symbol === "wDOGE") this.decimals = 18;
        if (this.symbol === "erowan") this.decimals = 18;
        if (this.symbol === "wLUNC") this.decimals = 18;
        if (this.symbol === "SHIB") this.decimals = 18;
        if (this.symbol === "MOBX") this.decimals = 9;
        if (this.symbol === "ARCH") this.decimals = 18;
        if (this.symbol === "RIO") this.decimals = 18;
        if (this.symbol === "DYDX") this.decimals = 18;
        if (this.symbol === "DYM") this.decimals = 18;
        if (this.symbol === "CHEQ") this.decimals = 9;
        if (((_this_underlying = this.underlying) === null || _this_underlying === void 0 ? void 0 : _this_underlying.length) === 2 && this.underlying[0].decimals === this.underlying[1].decimals) {
            this.decimals = this.underlying[0].decimals;
        }
        // OKX USDT
        if (this.reference === "ibc/EA20485E9BEBF77BB3638A79F60A0E1D0A12A6289972F30E475529C80BF5C960") this.decimals = 18;
        // Handle ghost underlying
        if (((_this_underlying1 = this.underlying) === null || _this_underlying1 === void 0 ? void 0 : _this_underlying1.length) === 1 && this.decimals === 6) this.decimals = this.underlying[0].decimals;
        this.ics20 = ics20[this.reference];
        if (((_this_trace6 = this.trace) === null || _this_trace6 === void 0 ? void 0 : _this_trace6.path) === "transfer/channel-9" && this.symbol !== "AXL") {
            this.symbol += ".axl";
        }
        if (((_this_trace7 = this.trace) === null || _this_trace7 === void 0 ? void 0 : _this_trace7.path) === "transfer/channel-50" && this.symbol !== "GRAV") {
            this.symbol += ".grv";
        }
        if (((_this_trace8 = this.trace) === null || _this_trace8 === void 0 ? void 0 : _this_trace8.path) === "transfer/channel-113") {
            this.symbol += ".wh";
        }
    }
}
const ibcDenom = (port, channel, denom)=>"ibc/" + _.Buffer.from((0, _crypto.sha256)(_.Buffer.from(`${port}/${channel}/${denom}`))).toString("hex").toUpperCase();
const USK_TESTNET = Denom.from("factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk");
const USK = Denom.from("factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk");
const KUJI = Denom.from("ukuji");
const DEMO = Denom.from("factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo");
const ATOM = Denom.from("ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2");
const axlUSDC = Denom.from("ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F");
const nobleUSDC = Denom.from_path("transfer", "channel-62", "uusdc");
const axlUSDT = Denom.from("ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045");
const axlwETH = Denom.from("ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7");
const axlwMATIC = Denom.from("ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6");
const axlwBNB = Denom.from("ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833");
const axlwAVAX = Denom.from("ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2");
const axlwGLMR = Denom.from("ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1");
const axlwFTM = Denom.from("ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2");
const factor = ([base, quote])=>{
    return Math.pow(10, base.decimals - quote.decimals);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZW5vbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGEyNTYgfSBmcm9tIFwiQGNvc21qcy9jcnlwdG9cIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXIvXCI7XG5pbXBvcnQgeyBhc3NldHMgfSBmcm9tIFwiY2hhaW4tcmVnaXN0cnlcIjtcbmltcG9ydCB7IE1BSU5ORVQsIFRFU1RORVQgfSBmcm9tIFwiLi9uZXR3b3JrXCI7XG5pbXBvcnQgY29udHJhY3RzIGZyb20gXCIuL3Jlc291cmNlcy9jb250cmFjdHMuanNvblwiO1xuaW1wb3J0IG9zbW9zaXMgZnJvbSBcIi4vcmVzb3VyY2VzL29zbW9zaXMuanNvblwiO1xuaW1wb3J0IGliYyBmcm9tIFwiLi9yZXNvdXJjZXMvdG9rZW5zLmpzb25cIjtcblxuY29uc3QgZ2hvc3RWYXVsdHMgPSBbXG4gIC4uLmNvbnRyYWN0c1tNQUlOTkVUXS5naG9zdFZhdWx0LFxuICAuLi5jb250cmFjdHNbVEVTVE5FVF0uZ2hvc3RWYXVsdCxcbl07XG5cbmNvbnN0IHdvcm1ob2xlQXNzZXRzID1cbiAgYXNzZXRzLmZpbmQoKHgpID0+IHguY2hhaW5fbmFtZSA9PT0gXCJnYXRld2F5XCIpPy5hc3NldHMgfHwgW107XG5cbmNvbnN0IGxhYmVsczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgdWxwOiBcIkxQIFwiLFxuICB3ZWk6IFwiT0tUXCIsXG4gIHVncmF2aXRvbjogXCJHUkFWXCIsXG4gIHVzZHQ6IFwiVVNEVFwiLFxuICB1c2F0OiBcIm5CVENcIixcbiAgdXJlZ2VuOiBcIlJFR0VOXCIsXG4gIC8vIE5vYmxlIFVTRENcbiAgXCJpYmMvRkU5OEFBRDY4RjAyRjAzNTY1RTlGQTM5QTVFNjI3OTQ2Njk5QjJCMDcxMTU4ODlFRDgxMkQ4QkE2Mzk1NzZBOVwiOlxuICAgIFwiVVNEQ1wiLFxuICBcImliYy8xMTkzMzRDNTU3MjA5NDI0ODFGNDU4QzlDNDYyRjVDMENEMUYxRTdFRUFDNDY3OUQ2NzRBQTY3MjIxOTE2QUVBXCI6XG4gICAgXCJMVU5DXCIsXG4gIFwiaWJjLzIxNzc1NTM0NEMwRDQwQzc1MDM2MTEwRTIwQjA0MjdDQzY1MDU3NjBGMDcxQkU0MDgwREFENUFDODQ1OTY5RUVcIjpcbiAgICBcIlVTVENcIixcbiAgXCJpYmMvMjE3NzU1MzQ0YzBkNDBjNzUwMzYxMTBlMjBiMDQyN2NjNjUwNTc2MGYwNzFiZTQwODBkYWQ1YWM4NDU5NjllZVwiOlxuICAgIFwiVVNUQ1wiLFxuXG4gIHVhdXNkYzogXCJVU0RDXCIsXG4gIHV1c2RjOiBcIlVTRENcIixcbiAgdWF1c2R0OiBcIlVTRFRcIixcbiAgdXVzZHQ6IFwiVVNEVFwiLFxuICBhdGV2bW9zOiBcIkVWTU9TXCIsXG4gIHN0YWV2bW9zOiBcInN0RVZNT1NcIixcbiAgXCJ3YXZheC13ZWlcIjogXCJ3QVZBWFwiLFxuICBcInl1bS13ZWlcIjogXCJZVU1cIixcbiAgXCJhcmItd2VpXCI6IFwiQVJCXCIsXG4gIGJhc2Vjcm86IFwiQ1JPXCIsXG4gIFwid2V0aC13ZWlcIjogXCJ3RVRIXCIsXG4gIFwibGluay13ZWlcIjogXCJMSU5LXCIsXG4gIFwid3N0ZXRoLXdlaVwiOiBcIndzdEVUSFwiLFxuICBcInJldGgtd2VpXCI6IFwickVUSFwiLFxuICBcImRvdC1wbGFuY2tcIjogXCJET1RcIixcbiAgXCJwZXBlLXdlaVwiOiBcIlBFUEVcIixcbiAgXCJ5aWVsZGV0aC13ZWlcIjogXCJ5aWVsZEVUSFwiLFxuICBhZXZtb3M6IFwiRVZNT1NcIixcbiAgYWZldDogXCJGRVRcIixcbiAgYWR5ZHg6IFwiRFlEWFwiLFxuICBkZW1vOiBcIkRFTU9cIixcbiAgbG9jYWw6IFwiTE9DQUxcIixcbiAgc3d0aDogXCJTV1RIXCIsXG4gIGFhcmNoOiBcIkFSQ0hcIixcbiAgYWFjcmU6IFwiQUNSRVwiLFxuICBhcGxhbnE6IFwiUExRXCIsXG4gIHVmcmllbnppZXM6IFwiRlJOWlwiLFxuICB1YmVkcm9jazogXCJST0NLXCIsXG4gIHN0aW5qOiBcInN0SU5KXCIsXG4gIG5hbm9tb2J4OiBcIk1PQlhcIixcbiAgYXJpbzogXCJSSU9cIixcbiAgb3BoaXI6IFwiT1BISVJcIixcbiAgYWR5bTogXCJEWU1cIixcbiAgbG9raTogXCJPRElOXCIsXG4gIFwiZmFjdG9yeS9rdWppcmExbHR2d2c2OXN3M2M1ejk5YzZycjA4aGFsN3Ywa2R6Znh6MDd5ajUvZGVtb1wiOiBcIkRFTU9cIixcbiAgXCJmYWN0b3J5L2t1amlyYTEydzB1YTRlcW5razBhYWh0bmpsdDZoM2RoeGFlbDZ4MjVzNTA3dy9sb2NhbFwiOiBcIkxPQ0FMXCIsXG4gIFwiZmFjdG9yeS9rdWppcmExc3drdXl0MDh6NzRuNWpsN3pyNmh4MHJ1NXNhMnlldjV2ODk2cDYvbG9jYWxcIjogXCJMT0NBTFwiLFxuICBcImZhY3Rvcnkva3VqaXJhMTUwM3czY2puenBkMDZtNGFwamU0djBueDQ3aDVnZXZreXd4YXI4cjI1Z2NlOHI3MjdqeHFlNGNlaGsvTE9DQUxcIjpcbiAgICBcIkxPQ0FMXCIsXG4gIFwiZmFjdG9yeS9rdWppcmExcjg1cmVxeTZoMGx1MDJ2eXowaG56aHY1d2hzbnM1NWdkdDR3MGQ3ZnQ4N3V0ems3dTB3cXI0c3NsbC91dXNrXCI6XG4gICAgXCJVU0tcIixcbiAgXCJmYWN0b3J5Omt1amlyYTFyODVyZXF5NmgwbHUwMnZ5ejBobnpodjV3aHNuczU1Z2R0NHcwZDdmdDg3dXR6azd1MHdxcjRzc2xsOnV1c2tcIjpcbiAgICBcIlVTS1wiLFxuICBcImZhY3Rvcnkva3VqaXJhMXFrMDBoNWF0dXRwc3Y5MDB4MjAycHh4NDJucGpyOXRoZzU4ZG5xcGE3MmYycDdtMmx1YXNlNDQ0YTcvdXVza1wiOlxuICAgIFwiVVNLXCIsXG4gIFwiZmFjdG9yeTprdWppcmExcWswMGg1YXR1dHBzdjkwMHgyMDJweHg0Mm5wanI5dGhnNThkbnFwYTcyZjJwN20ybHVhc2U0NDRhNzp1dXNrXCI6XG4gICAgXCJVU0tcIixcbiAgXCJmYWN0b3J5L2t1amlyYTFzYzZhMDM0N2NjNXEzazg5MGpqMHBmM3lseDJzMzhyaDRzemE0dC91cmZ1em5cIjogXCJyRlVaTlwiLFxuICBcImZhY3Rvcnkva3VqaXJhMXYzaGNlamNlcmYwZDllbTlkczhycHl5cTY4dngzdTl1NGswZnZ3NGU5aGFjZHk4bm42cHF4NHVyY3cvdXJjcHRcIjpcbiAgICBcImNNTlRBXCIsXG5cbiAgXCJmYWN0b3J5L2t1amlyYTFxenUzdXA1MGF1eGhxeXpmcTU2em51ajhuMzhxMnJhN2RhYWY5ZWY3dmc4Z3U2NmpoNGZxZDJ3ZDJ5L3VyY3B0XCI6XG4gICAgXCJxY01OVEFcIixcblxuICBcImZhY3Rvcnkva3VqaXJhMW05NnVjc2ZwdDJ5eTcydzA5ejJyeGpkajM4eTVxZDhscXg1anRnZ25lam1kdWEyeW5wbnN4eXZqZXgvdXJjcHRcIjpcbiAgICBcInFjS1VKSVwiLFxuXG4gIFwiZmFjdG9yeS9rdWppcmExNGVsOXhkNWU2ODhzN2c4eXJhMnJqanYyNmRtamF0ZnJrZ3Jwa3lseTVoaDloc3duMm5nczNwOXZhZy91cmNwdFwiOlxuICAgIFwicWNNTlRBXCIsXG5cbiAgLy8gT2xkIHRlc3RuZXQgcWNLVUpJXG4gIFwiZmFjdG9yeS9rdWppcmExamFmOHRzZ3ZjaHFmbXljdjh3bW5jdjUydDRmY3YzZWh1aDU3Z3NkOXljY2U1ZXduODdrc253aGxrci91cmNwdFwiOlxuICAgIFwicWNLVUpJXCIsXG5cbiAgXCJmYWN0b3J5L2t1amlyYTFlcXFyM2FkMGxoODR1YTRtNXF1Mm40amp6Nmg3M2Q2NGpmd3ZuZzB3MmswbG5obHR0NGpxZGV4NHo5L3VyY3B0XCI6XG4gICAgXCJxY0tVSklcIixcblxuICBcImZhY3Rvcnkva3VqaXJhMWwwNGdlZDk4YzdhN3M5dGxsdTYybGQwOXp0eWx3ZjQ0MnFnbTR0aGZnbWFkcnZuZ2V1bXN6NHpyaDIvdXJjcHRcIjpcbiAgICBcInFjRlVaTlwiLFxuICBcImZhY3RvcnkvbWlnYWxvbzFlcW50bmw2dHpjajloODZwc2c0eTRoNmhoMDVnMmg5bmo4ZTA5bC91cmFjXCI6IFwiUkFDXCIsXG4gIFwiZmFjdG9yeS9vc21vMW1sbmc3cHo0cG55eHRwcTBha2Z3YWxsMzdjenlrOWx1a2F1Y3NybjMwYW1lcGxoaHNodHFkdmZtNWMvdWx2blwiOlxuICAgIFwiTFZOXCIsXG4gIFwiZmFjdG9yeS9vc21vMXowcXJxNjA1c2pnY3FweWxmbDRhYTZzOTB4NzM4ajdtNTh3eWF0dDB0ZHpmbGcyaGEyNnE2N2s3NDMvd2J0Y1wiOlxuICAgIFwid0JUQ1wiLFxuICBncmF2aXR5MHg0NTgwNDg4MERlMjI5MTNkQUZFMDlmNDk4MDg0OEVDRTZFY2JBZjc4OiBcIlBBWEdcIixcbiAgZ3Jhdml0eTB4ZkI1YzY4MTVjQTNBQzcyQ2U5RjUwMDY4NjlBRTY3ZjE4YkY3NzAwNjogXCJQU1RBS0VcIixcbiAgZ3Jhdml0eTB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjogXCJ3RVRIXCIsXG4gIGdyYXZpdHkweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg6IFwiVVNEQ1wiLFxuICBncmF2aXR5MHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3OiBcIlVTRFRcIixcbiAgZ3Jhdml0eTB4MjI2MEZBQzVFNTU0MmE3NzNBYTQ0ZkJDZmVEZjdDMTkzYmMyQzU5OTogXCJ3QlRDXCIsXG4gIGdyYXZpdHkweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEY6IFwiREFJXCIsXG4gIGdyYXZpdHkweDc3RTA2YzllQ0NmMkU3OTdmZDQ2MkE5MkI2RDc2NDJFRjg1YjBBNDQ6IFwid1RBT1wiLFxuICBncmF2aXR5MHhhMGI5M0I5ZTkwYUI4ODdFNTNGOUZCODcyOGMwMDk3NDZlOTg5QjUzOiBcIlRTVFwiLFxuICBncmF2aXR5MHhlMjhiM0IzMkI2YzM0NUEzNEZmNjQ2NzQ2MDYxMjREZDVBY2VjYTMwOiBcIklOSlwiLFxuICBncmF2aXR5MHhCNTA3MjFCQ2Y4ZDY2NGMzMDQxMkNmYmM2Y2Y3YTE1MTQ1MjM0YWQxOiBcIkFSQlwiLFxuICBncmF2aXR5MHg0YzExMjQ5ODE0ZjExYjkzNDY4MDgxNzlDZjA2ZTcxYWMzMjhjMWI1OiBcIk9SQUlcIixcbiAgZ3Jhdml0eTB4OTM1ODE5OTFmNjhEQmFFMWVBMTA1MjMzYjY3ZjdGQTBENkJEZUU3YjogXCJ3RVZNT1NcIixcbiAgZ3Jhdml0eTB4MzVhNTMyZDM3NkZGZDlhNzA1ZDBCYjMxOTUzMjgzNzMzN0EzOThFNzogXCJ3RE9HRVwiLFxuICBncmF2aXR5MHgwN2JhQzM1ODQ2ZTVlRDUwMmFBOTFBZEY2QTllN2FBMjEwRjJEY2JFOiBcImVyb3dhblwiLFxuICBncmF2aXR5MHhkMjg3NzcwMjY3NWU2Y0ViOTc1YjRBMWRGZjlmYjdCQUY0QzkxZWE5OiBcIndMVU5DXCIsXG4gIGdyYXZpdHkweDk1YUQ2MWIwYTE1MGQ3OTIxOWRDRjY0RTFFNkNjMDFmMEI2NEM0Y0U6IFwiU0hJQlwiLFxuXG4gIC8vIDE4XG4gIGdyYXZpdHkweEFhNkU4MTI3ODMxYzlERTQ1YWU1NmJCMWIwZDRENERhNmU1NjY1QkQ6IFwiRVRIMngtRkxJXCIsXG4gIC8vIDZcbiAgZ3Jhdml0eTB4NDQwMTc1OThmMkFGMWJENzMzRjlEODdiNTAxN2I0RTdjMUIyOERERTogXCJzdGtBVE9NXCIsXG4gIC8vIDE4XG4gIGdyYXZpdHkweEJBMTFEMDBjNWY3NDI1NWY1NmE1RTM2NkY0Rjc3ZjVBMTg2ZDdmNTU6IFwiQkFORFwiLFxuICAvLyA2XG4gIGdyYXZpdHkweEVhNUE4MkIzNTI0NGQ5ZTVFNDg3ODFGMDBiMTFCMTRFNjI3RDI5NTE6IFwiQVRPTVwiLFxuICAvLyAxOFxuICBncmF2aXR5MHg4M0YyMEY0NDk3NUQwM2IxYjA5ZTY0ODA5Qjc1N2M0N2Y5NDJCRWVBOiBcInNEQUlcIixcbiAgLy8gMThcbiAgZ3Jhdml0eTB4Njk4MjUwODE0NTQ1NENlMzI1ZERiRTQ3YTI1ZDRlYzNkMjMxMTkzMzogXCJQRVBFXCIsXG4gIC8vIDE4XG4gIGdyYXZpdHkweDgxN2JiRGJDM2U4QTEyMDRmMzY5MWQxNGJCNDQ5OTI4NDFlM2RCMzU6IFwiQ1VET1NcIixcbiAgLy8gMThcbiAgZ3Jhdml0eTB4ZDIzRWQ4Y0EzNTBDRTI2MzFGN0VjREM1RTZiZjgwRDBBMURlQkI3QjogXCJQTFFcIixcbiAgLy8gMThcbiAgZ3Jhdml0eTB4ZDNFNEJhNTY5MDQ1NTQ2RDA5Q0YwMjFFQ0M1ZEZlNDJiMWQ3ZjZFNDogXCJNTldcIixcbiAgLy8gMThcbiAgZ3Jhdml0eTB4NTE0OTEwNzcxQUY5Q2E2NTZhZjg0MGRmZjgzRTgyNjRFY0Y5ODZDQTogXCJMSU5LXCIsXG5cbiAgXCJlcmMyMC8weEFFNkQzMzM0OTg5YTIyQTY1MjI4NzMyNDQ2NzMxNDM4NjcyNDE4RjJcIjogXCJDTlRPXCIsXG4gIFwiZnJheC13ZWlcIjogXCJGUkFYXCIsXG4gIGluajogXCJJTkpcIixcbiAgXCJkYWktd2VpXCI6IFwiREFJXCIsXG4gIFwid2J0Yy1zYXRvc2hpXCI6IFwid0JUQ1wiLFxuICBcIndibmItd2VpXCI6IFwid0JOQlwiLFxuICBcIndmdG0td2VpXCI6IFwid0ZUTVwiLFxuICBcInVuaS13ZWlcIjogXCJVTklcIixcbiAgXCJ3bWF0aWMtd2VpXCI6IFwid01BVElDXCIsXG4gIFwid2dsbXItd2VpXCI6IFwid0dMTVJcIixcbiAgXCJidXNkLXdlaVwiOiBcIkJVU0RcIixcbiAgbmNoZXE6IFwiQ0hFUVwiLFxuICBcImN3MjA6anVubzFxc3JlcmNxZWd2czR5ZTB5cWc5M2tudjczeWU1ZGMzcHJxd2Q2amNkY3VqOGdncDZ3MHVzNjZkZXVwXCI6XG4gICAgXCJMT09QXCIsXG4gIFwiY3cyMDpqdW5vMWNsdGdtOHY4NDJndTU0c3JtZWpld2dobmQ2dXFhMjZsemtwYTYzNXd6cmE5bTl4dXVka3FhMmd0Y3pcIjpcbiAgICBcIkZVUlkubGVnYWN5XCIsXG4gIFwiY3cyMDpqdW5vMWhuZnR5czY0ZWN0amZ5bm02cWprOW15OGpkM2Y2bDlkcTl1dGNkM2R5OGVod3JzeDlxNHE3bjl1eHRcIjpcbiAgICBcIkFRVUFcIixcbiAgXCJjdzIwOmp1bm8xNjhjdG1weXBwazkwZDM0cDNqank2NTh6ZjVhNWwzdzh3azM1d2h0NmNjcWo0bXIweXY4czRqNWF3clwiOlxuICAgIFwiTkVUQVwiLFxuICBcImN3MjA6anVubzFyNHB6dzhmOXowc3lwY3Q1bDlqOTA2ZDQ3ejk5OHVsd3ZodnFlNXhkd2d5OHdmODQ1ODNzeHdoMHBhXCI6XG4gICAgXCJSQUMubGVnYWN5XCIsXG4gIFwiY3cyMDpqdW5vMWowYTl5bWduZ2FzZm4zbDVtZThxcGQ1M2w1emxtOXd1cmZkazdyNjVzNW1nNnRreGFsM3FwZ2Y1c2VcIjpcbiAgICBcIkdMVE9cIixcbiAgXCJjdzIwOnRlcnJhMWVjZ2F6eWQwd2FhajNnN2w5Y215NWd1bGh4a3BzMmdteHU5Z2hkdWN2dXlwanE2OG1xMnM1bHZzY3RcIjpcbiAgICBcImFtcExVTkFcIixcbiAgXCJjdzIwOnRlcnJhMXh6a2VsOTZlNWU4dmZtcXc3dmFsemR6enY5aHFhc2Z5c2xjbHZubXZ4ZGVqdnBkYTN4d3Nza3h6dXNcIjpcbiAgICBcIndoTE9DQUxcIixcbiAgXCJjdzIwOnRlcnJhMW5zdXFzazZraDU4dWxjemF0d2V2ODd0dHEyejZyM3B1c3VsZzlyMjRtZmoyZnZ0emQ0dXEzZXhuMjZcIjpcbiAgICBcIkFTVFJPXCIsXG5cbiAgXCJjdzIwOnRlcnJhMXg2Mm1qbm1lNHkwcmRuYWczcjhyZmdqdXV0c3Fsa2t5dWg0bmRnZXgwd2wzd3VlMjV1a3NhdTM5cThcIjpcbiAgICBcInhBU1RST1wiLFxuICBcImN3MjA6c2VjcmV0MXFmcWwzNTdhbW40NDhkdWY1Z3ZwOWdyNDhzeHg5dHNuaHVwdTNkXCI6IFwiU0hELmxlZ2FjeVwiLFxuICBcImN3MjA6dGVycmExN2djazYyNnZnYXg5anBlNnV0bTdkaHg0dmR6YXdma3QwamhydTAzbDdhM2R6dTk4d2Vkc2ZhZDRzelwiOlxuICAgIFwiZFVTVFwiLFxuICBcImN3MjA6dGVycmExbHh4NDBzMjlxdmtyY2o4ZnNhM3l6eWVoeTd3NTB1bWR2dm5sczJyODMwcnlzNmx1MnpuczYzZWVsdlwiOlxuICAgIFwiUk9BUlwiLFxuICBcImN3MjA6dGVycmExeHA5aHJodGh6ZGRubDdqNWR1ODNncXFyNHdtZGptNXQwZ3V6ZzlqcDZqd3J0cHVrd2Zqc2pneTRmM1wiOlxuICAgIFwiU0FZVkVcIixcbiAgXCJjdzIwOnRlcnJhMWxhbHZrMHI2bmhydWVsN2Z2emRwcGszdHVwM21oNWo0ZDRlYWRycXpmaGxlNHpyZjUyYXM1OGhoOXRcIjpcbiAgICBcIkNVQlwiLFxuICBcImN3MjA6dGVycmExZ3dyejl4emhxc3lneXI1YXNyZ3lxM3B1MGV3cG4wMG12MnplbnU4Nnl2eDJubHdwZThscXBwdjU4NFwiOlxuICAgIFwiQkxVRVwiLFxuICBcImN3MjA6dGVycmExN2FqNHR5NHN6NHloZ20wOG5hOGRyYzB2MDN2Mmp3cjN3YXhjcXJ3aGFqajcyOXpobDd6cW5wYzBtbFwiOlxuICAgIFwiYm9uZUxVTkFcIixcbiAgXCJjdzIwOnRlcnJhMXN4ZTh1MmhqY3psZWt3ZmtjcTByczI4ZWd0MzhwZzN3cXpmeDR6Y3Jlc2U0Zm52enp1cHNrOWdqa3FcIjpcbiAgICBcIkJNT1NcIixcblxuICBcImN3MjA6c2VjcmV0MXMwOXgyeHZmZDJscDJza2d6bTI5dzJ4dGVuYTdzOGZxOTh2ODUyXCI6IFwiQU1CRVJcIixcbiAgXCJjdzIwOnNlY3JldDFrNnUwY3k0ZmVlcG02cGVobno4MDR6bXdha3V3ZGFwbTY5dHVjNFwiOiBcInN0a2QtU0NSVFwiLFxuICBcImN3MjA6c2VjcmV0MXl4Y2V4eWx3eXhscTU4dW1oZ3NqZ3N0Z2NnMmEweXRmeTRkOWx0XCI6IFwiQlVUVFwiLFxuICBcImN3MjA6c2VjcmV0MTUzd3U2MDV2dnA5MzR4aGQ0azlkdGQ2NDB6c2VwNWprZXNzdGRtXCI6IFwiU0hEXCIsXG4gIFwiY3cyMDpzZWNyZXQxZmw0NDltdWs1eXE4ZGxhZDdhMjJuamU0cDVkMnBuc2d5bWhqZmRcIjogXCJTSUxLXCIsXG5cbiAgXCJjdzIwOnRlcnJhMXhmc2RnY2VtcXd4cDRoaG55azRybGU2d3IyMnNzZXE3ajA3ZG5uXCI6IFwiS1VKSUNcIixcbiAgXCJjdzIwOnRlcnJhMTg4dzI2dDk1dGY0ZHo3N3JhZnRtZThwNzVyZ2dhdHhqeGZla253XCI6IFwiU0tVSklDXCIsXG5cbiAgdGVycmExOHpxY25sODN6OTh0ZjZsbHkzN2dnaG03MjM4azdsaDc5dTR6OWE6IFwiYkFUT01cIixcbiAgdGVycmExZHpoenVreWV6djBldHoyMnVkOTQwejdhZHl2N3hnY2prYWh1dW46IFwiYkVUSFwiLFxuICB0ZXJyYTFrYzg3bXU0NjBmd2txdGUyOXJxdWg0aGMyMG01NGZ4d3RzeDdncDogXCJiTFVOQVwiLFxuICB0ZXJyYTFjMDB2c2toeXpkdjB6NjN6MnR5ZXR6eDJxbWE2N24yejN2enluMDogXCJiU09MXCIsXG4gIHRlcnJhMXozZTJlNGpwazRuMHh6endsa2djZnZjOTVwYzVsZHEweGNueTU4OiBcInNBVkFYXCIsXG4gIFwiZmFjdG9yeS9taWdhbG9vMTQzNmt4czB3MmVzNnhscXBwOXJkMzVlM2QwY2pudzRzdjhqM2E3NDgzc2drczI5anF3Z3NocWRreTQvYW1wV0hBTEVcIjpcbiAgICBcImFtcFdIQUxFXCIsXG4gIFwiZXJjMjAvMHg2NTVlY0I1NzQzMkNDMTM3MGY2NWU1ZGMyMzA5NTg4YjcxYjQ3M0E5XCI6IFwiTkVPS1wiLFxuICBcImZhY3RvcnkvbmV1dHJvbjFwOGQ4OXd2eHlqY25hd21ndzcya2xrbnIzbGc5Z3d3bDZ5cHhkYS9uZXd0XCI6IFwiTkVXVFwiLFxuICBcImVyYzIwL3RldGhlci91c2R0XCI6IFwiVVNEVFwiLFxuXG4gIC4uLndvcm1ob2xlQXNzZXRzLnJlZHVjZSgoYSwgdikgPT4gKHsgLi4uYSwgW3YuYmFzZV06IHYuc3ltYm9sIH0pLCB7fSksXG59O1xuXG5jb25zdCB0ZXJyYTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgdWF1ZDogXCJBVVRcIixcbiAgdWNhZDogXCJDQVRcIixcbiAgdWNoZjogXCJDSFRcIixcbiAgdWNueTogXCJDTlRcIixcbiAgdWRrazogXCJES1RcIixcbiAgdWV1cjogXCJFVVRcIixcbiAgdWdicDogXCJHQlRcIixcbiAgdWhrZDogXCJIS1RcIixcbiAgdWlkcjogXCJJRFRcIixcbiAgdWlucjogXCJJTlRcIixcbiAgdWpweTogXCJKUFRcIixcbiAgdW1udDogXCJNTlRcIixcbiAgdW15cjogXCJNWVRcIixcbiAgdW5vazogXCJOT1RcIixcbiAgdXBocDogXCJQSFRcIixcbiAgdXNkcjogXCJTRFRcIixcbiAgdXNlazogXCJTRVRcIixcbiAgdXNnZDogXCJTR1RcIixcbiAgdXRoYjogXCJUSFRcIixcbiAgdXR3ZDogXCJUV1RcIixcbiAgdXVzZDogXCJVU1RcIixcbn07XG5cbmNvbnN0IGJhc2VEZW5vbVRvU3ltYm9sID0gKGRlbm9tOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCByYXcgPSBsYWJlbHNbZGVub21dO1xuICBpZiAocmF3KSByZXR1cm4gcmF3O1xuXG4gIGNvbnN0IGZhY3RvcnlBZGRyZXNzID0gZGVub20uc3BsaXQoXCIvXCIpWzFdO1xuICBjb25zdCBnaG9zdCA9XG4gICAgZmFjdG9yeUFkZHJlc3MgJiYgZ2hvc3RWYXVsdHMuZmluZCgoYSkgPT4gYS5hZGRyZXNzID09PSBmYWN0b3J5QWRkcmVzcyk7XG4gIGlmIChnaG9zdCkgcmV0dXJuIGRlbm9tLmVuZHNXaXRoKFwiL3VkZWJ0XCIpID8gYGRlYnRgIDogYHhgO1xuXG4gIGNvbnN0IGJhc2VEZW5vbSA9IGRlbm9tLnN0YXJ0c1dpdGgoXCJpYmMvXCIpXG4gICAgPyAoaWJjIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pW2Rlbm9tXT8uYmFzZV9kZW5vbVxuICAgIDogZGVub20uc3RhcnRzV2l0aChcImZhY3RvcnkvXCIpXG4gICAgPyBkZW5vbS5zcGxpdChcIi9cIilbMl1cbiAgICA6IGRlbm9tLnN0YXJ0c1dpdGgoXCJmYWN0b3J5OlwiKVxuICAgID8gZGVub20uc3BsaXQoXCI6XCIpWzJdXG4gICAgOiBkZW5vbTtcblxuICBpZiAoIWJhc2VEZW5vbSkgcmV0dXJuIFwiVW5rbm93blwiO1xuXG4gIGNvbnN0IGxhYmVsID0gbGFiZWxzW2Jhc2VEZW5vbV07XG5cbiAgaWYgKGxhYmVsKSByZXR1cm4gbGFiZWw7XG5cbiAgY29uc3QgdCA9IHRlcnJhW2Rlbm9tXTtcbiAgaWYgKHQpIHJldHVybiB0O1xuXG4gIC8vIFN0YWZpXG4gIHJldHVybiBiYXNlRGVub20uc3RhcnRzV2l0aChcInVyXCIpXG4gICAgPyBcInJcIiArIGJhc2VEZW5vbS5yZXBsYWNlKC9edXIvLCBcIlwiKS50b1VwcGVyQ2FzZSgpXG4gICAgOiBiYXNlRGVub20uc3RhcnRzV2l0aChcInVcIilcbiAgICA/IGJhc2VEZW5vbS5yZXBsYWNlKC9edS8sIFwiXCIpLnRvVXBwZXJDYXNlKClcbiAgICA6IC8vIFBlcnNpc3RlbmNlXG4gICAgYmFzZURlbm9tLnN0YXJ0c1dpdGgoXCJzdGsvXCIpXG4gICAgPyBgc3RrJHtiYXNlRGVub21Ub1N5bWJvbChiYXNlRGVub20ucmVwbGFjZSgvXnN0a1xcLy8sIFwiXCIpKX1gXG4gICAgOiAvLyBTdHJpZGVcbiAgICBiYXNlRGVub20uc3RhcnRzV2l0aChcInN0dVwiKVxuICAgID8gYHN0JHtiYXNlRGVub21Ub1N5bWJvbChiYXNlRGVub20ucmVwbGFjZSgvXnN0LywgXCJcIikpfWBcbiAgICA6IGJhc2VEZW5vbTtcbn07XG5cbmNvbnN0IGF2YWxhbmNoZSA9IHtcbiAgLy8gTWFpbm5ldFxuICBcIjB4MmIyYzgxZTA4ZjFhZjg4MzVhNzhiYjJhOTBhZTkyNGFjZTBlYTRiZVwiOiBcInNBVkFYXCIsXG59O1xuXG50eXBlIElDUzIwID0ge1xuICBjb250cmFjdDogc3RyaW5nO1xuICByb3V0ZXI6IHN0cmluZztcbiAgY2hhbm5lbDogc3RyaW5nO1xufTtcblxuY29uc3QgaWNzMjA6IFJlY29yZDxzdHJpbmcsIElDUzIwPiA9IHtcbiAgXCJjdzIwOmp1bm8xcXNyZXJjcWVndnM0eWUweXFnOTNrbnY3M3llNWRjM3BycXdkNmpjZGN1ajhnZ3A2dzB1czY2ZGV1cFwiOiB7XG4gICAgY29udHJhY3Q6IFwianVubzFxc3JlcmNxZWd2czR5ZTB5cWc5M2tudjczeWU1ZGMzcHJxd2Q2amNkY3VqOGdncDZ3MHVzNjZkZXVwXCIsXG4gICAgcm91dGVyOiBcImp1bm8xbGt2NzJ3cnVrNm0zOWEyajRwczAzNmh6eHloamNjd25jZ2Z6emNhcXh1d25kZzV4MGdocWE4bXJoZ1wiLFxuICAgIGNoYW5uZWw6IFwiY2hhbm5lbC05N1wiLFxuICB9LFxuXG4gIFwiY3cyMDpqdW5vMXI0cHp3OGY5ejBzeXBjdDVsOWo5MDZkNDd6OTk4dWx3dmh2cWU1eGR3Z3k4d2Y4NDU4M3N4d2gwcGFcIjoge1xuICAgIGNvbnRyYWN0OiBcImp1bm8xcjRwenc4Zjl6MHN5cGN0NWw5ajkwNmQ0N3o5OTh1bHd2aHZxZTV4ZHdneTh3Zjg0NTgzc3h3aDBwYVwiLFxuICAgIHJvdXRlcjogXCJqdW5vMWxrdjcyd3J1azZtMzlhMmo0cHMwMzZoenh5aGpjY3duY2dmenpjYXF4dXduZGc1eDBnaHFhOG1yaGdcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtOTdcIixcbiAgfSxcblxuICBcImN3MjA6anVubzFjbHRnbTh2ODQyZ3U1NHNybWVqZXdnaG5kNnVxYTI2bHprcGE2MzV3enJhOW05eHV1ZGtxYTJndGN6XCI6IHtcbiAgICBjb250cmFjdDogXCJqdW5vMWNsdGdtOHY4NDJndTU0c3JtZWpld2dobmQ2dXFhMjZsemtwYTYzNXd6cmE5bTl4dXVka3FhMmd0Y3pcIixcbiAgICByb3V0ZXI6IFwianVubzFsa3Y3MndydWs2bTM5YTJqNHBzMDM2aHp4eWhqY2N3bmNnZnp6Y2FxeHV3bmRnNXgwZ2hxYThtcmhnXCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTk3XCIsXG4gIH0sXG4gIFwiY3cyMDpqdW5vMWhuZnR5czY0ZWN0amZ5bm02cWprOW15OGpkM2Y2bDlkcTl1dGNkM2R5OGVod3JzeDlxNHE3bjl1eHRcIjoge1xuICAgIGNvbnRyYWN0OiBcImp1bm8xaG5mdHlzNjRlY3RqZnlubTZxams5bXk4amQzZjZsOWRxOXV0Y2QzZHk4ZWh3cnN4OXE0cTduOXV4dFwiLFxuICAgIHJvdXRlcjogXCJqdW5vMWxrdjcyd3J1azZtMzlhMmo0cHMwMzZoenh5aGpjY3duY2dmenpjYXF4dXduZGc1eDBnaHFhOG1yaGdcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtOTdcIixcbiAgfSxcbiAgXCJjdzIwOmp1bm8xajBhOXltZ25nYXNmbjNsNW1lOHFwZDUzbDV6bG05d3VyZmRrN3I2NXM1bWc2dGt4YWwzcXBnZjVzZVwiOiB7XG4gICAgY29udHJhY3Q6IFwianVubzFqMGE5eW1nbmdhc2ZuM2w1bWU4cXBkNTNsNXpsbTl3dXJmZGs3cjY1czVtZzZ0a3hhbDNxcGdmNXNlXCIsXG4gICAgcm91dGVyOiBcImp1bm8xbGt2NzJ3cnVrNm0zOWEyajRwczAzNmh6eHloamNjd25jZ2Z6emNhcXh1d25kZzV4MGdocWE4bXJoZ1wiLFxuICAgIGNoYW5uZWw6IFwiY2hhbm5lbC05N1wiLFxuICB9LFxuICAvLyB3aExPQ0FMXG4gIFwiY3cyMDp0ZXJyYTF4emtlbDk2ZTVlOHZmbXF3N3ZhbHpkenp2OWhxYXNmeXNsY2x2bm12eGRlanZwZGEzeHdzc2t4enVzXCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExeHprZWw5NmU1ZTh2Zm1xdzd2YWx6ZHp6djlocWFzZnlzbGNsdm5tdnhkZWp2cGRhM3h3c3NreHp1c1wiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFkOTBwNWxhY2Z4bnFnanhqdXB1MjM0bHhueHlldThmZGVlZjRkMGUwbnF5M3AzMHI3Z3NzNG15bjl4XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTM0XCIsXG4gIH0sXG4gIC8vIEFTVFJPXG4gIFwiY3cyMDp0ZXJyYTFuc3Vxc2s2a2g1OHVsY3phdHdldjg3dHRxMno2cjNwdXN1bGc5cjI0bWZqMmZ2dHpkNHVxM2V4bjI2XCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExbnN1cXNrNmtoNTh1bGN6YXR3ZXY4N3R0cTJ6NnIzcHVzdWxnOXIyNG1majJmdnR6ZDR1cTNleG4yNlwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFkOTBwNWxhY2Z4bnFnanhqdXB1MjM0bHhueHlldThmZGVlZjRkMGUwbnF5M3AzMHI3Z3NzNG15bjl4XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTM0XCIsXG4gIH0sXG4gIC8vIHhBU1RST1xuICBcImN3MjA6dGVycmExeDYybWpubWU0eTByZG5hZzNyOHJmZ2p1dXRzcWxra3l1aDRuZGdleDB3bDN3dWUyNXVrc2F1MzlxOFwiOiB7XG4gICAgY29udHJhY3Q6XG4gICAgICBcInRlcnJhMXg2Mm1qbm1lNHkwcmRuYWczcjhyZmdqdXV0c3Fsa2t5dWg0bmRnZXgwd2wzd3VlMjV1a3NhdTM5cThcIixcbiAgICByb3V0ZXI6IFwidGVycmExZDkwcDVsYWNmeG5xZ2p4anVwdTIzNGx4bnh5ZXU4ZmRlZWY0ZDBlMG5xeTNwMzByN2dzczRteW45eFwiLFxuICAgIGNoYW5uZWw6IFwiY2hhbm5lbC0zNFwiLFxuICB9LFxuICAvLyBhbXBMVU5BXG4gIFwiY3cyMDp0ZXJyYTFlY2dhenlkMHdhYWozZzdsOWNteTVndWxoeGtwczJnbXh1OWdoZHVjdnV5cGpxNjhtcTJzNWx2c2N0XCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExZWNnYXp5ZDB3YWFqM2c3bDljbXk1Z3VsaHhrcHMyZ214dTlnaGR1Y3Z1eXBqcTY4bXEyczVsdnNjdFwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFlMG1yenk4MDc3ZHJ1dXU0MnZzMGh1N3VnZ3VhZGUwY2o2NWRndGF1eWF3NGdzbDRrdjBxdGRmMmF1XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTI4XCIsXG4gIH0sXG5cbiAgLy8gUk9BUlxuICBcImN3MjA6dGVycmExbHh4NDBzMjlxdmtyY2o4ZnNhM3l6eWVoeTd3NTB1bWR2dm5sczJyODMwcnlzNmx1MnpuczYzZWVsdlwiOiB7XG4gICAgY29udHJhY3Q6XG4gICAgICBcInRlcnJhMWx4eDQwczI5cXZrcmNqOGZzYTN5enllaHk3dzUwdW1kdnZubHMycjgzMHJ5czZsdTJ6bnM2M2VlbHZcIixcbiAgICByb3V0ZXI6IFwidGVycmExZTBtcnp5ODA3N2RydXV1NDJ2czBodTd1Z2d1YWRlMGNqNjVkZ3RhdXlhdzRnc2w0a3YwcXRkZjJhdVwiLFxuICAgIGNoYW5uZWw6IFwiY2hhbm5lbC0yOFwiLFxuICB9LFxuXG4gIC8vIFNBWVZFXG4gIFwiY3cyMDp0ZXJyYTF4cDlocmh0aHpkZG5sN2o1ZHU4M2dxcXI0d21kam01dDBndXpnOWpwNmp3cnRwdWt3Zmpzamd5NGYzXCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExeHA5aHJodGh6ZGRubDdqNWR1ODNncXFyNHdtZGptNXQwZ3V6ZzlqcDZqd3J0cHVrd2Zqc2pneTRmM1wiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFlMG1yenk4MDc3ZHJ1dXU0MnZzMGh1N3VnZ3VhZGUwY2o2NWRndGF1eWF3NGdzbDRrdjBxdGRmMmF1XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTI4XCIsXG4gIH0sXG5cbiAgLy8gQ1VCXG4gIFwiY3cyMDp0ZXJyYTFsYWx2azByNm5ocnVlbDdmdnpkcHBrM3R1cDNtaDVqNGQ0ZWFkcnF6ZmhsZTR6cmY1MmFzNThoaDl0XCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExbGFsdmswcjZuaHJ1ZWw3ZnZ6ZHBwazN0dXAzbWg1ajRkNGVhZHJxemZobGU0enJmNTJhczU4aGg5dFwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFlMG1yenk4MDc3ZHJ1dXU0MnZzMGh1N3VnZ3VhZGUwY2o2NWRndGF1eWF3NGdzbDRrdjBxdGRmMmF1XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTI4XCIsXG4gIH0sXG5cbiAgLy8gQkxVRVxuICBcImN3MjA6dGVycmExZ3dyejl4emhxc3lneXI1YXNyZ3lxM3B1MGV3cG4wMG12MnplbnU4Nnl2eDJubHdwZThscXBwdjU4NFwiOiB7XG4gICAgY29udHJhY3Q6XG4gICAgICBcInRlcnJhMWd3cno5eHpocXN5Z3lyNWFzcmd5cTNwdTBld3BuMDBtdjJ6ZW51ODZ5dngybmx3cGU4bHFwcHY1ODRcIixcbiAgICByb3V0ZXI6IFwidGVycmExZTBtcnp5ODA3N2RydXV1NDJ2czBodTd1Z2d1YWRlMGNqNjVkZ3RhdXlhdzRnc2w0a3YwcXRkZjJhdVwiLFxuICAgIGNoYW5uZWw6IFwiY2hhbm5lbC0yOFwiLFxuICB9LFxuXG4gIC8vIGJMVU5BXG4gIFwiY3cyMDp0ZXJyYTE3YWo0dHk0c3o0eWhnbTA4bmE4ZHJjMHYwM3YyandyM3dheGNxcndoYWpqNzI5emhsN3pxbnBjMG1sXCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExN2FqNHR5NHN6NHloZ20wOG5hOGRyYzB2MDN2Mmp3cjN3YXhjcXJ3aGFqajcyOXpobDd6cW5wYzBtbFwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFlMG1yenk4MDc3ZHJ1dXU0MnZzMGh1N3VnZ3VhZGUwY2o2NWRndGF1eWF3NGdzbDRrdjBxdGRmMmF1XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTI4XCIsXG4gIH0sXG5cbiAgLy8gU0hEXG4gIC8vIFwiY3cyMDpzZWNyZXQxcWZxbDM1N2FtbjQ0OGR1ZjVndnA5Z3I0OHN4eDl0c25odXB1M2RcIjoge1xuICAvLyAgIGNvbnRyYWN0OiBcInNlY3JldDFxZnFsMzU3YW1uNDQ4ZHVmNWd2cDlncjQ4c3h4OXRzbmh1cHUzZFwiLFxuICAvLyAgIHJvdXRlcjogXCJzZWNyZXQxdHFtbXM1YXdmdHB1aGFsY3Y1aDVtZzc2ZmEwdGtkejRqdjlleDRcIixcbiAgLy8gICBjaGFubmVsOiBcImNoYW5uZWwtNDZcIixcbiAgLy8gfSxcblxuICAvLyBkVVNUXG4gIFwiY3cyMDp0ZXJyYTE3Z2NrNjI2dmdheDlqcGU2dXRtN2RoeDR2ZHphd2ZrdDBqaHJ1MDNsN2EzZHp1OTh3ZWRzZmFkNHN6XCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExN2djazYyNnZnYXg5anBlNnV0bTdkaHg0dmR6YXdma3QwamhydTAzbDdhM2R6dTk4d2Vkc2ZhZDRzelwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFkOTBwNWxhY2Z4bnFnanhqdXB1MjM0bHhueHlldThmZGVlZjRkMGUwbnF5M3AzMHI3Z3NzNG15bjl4XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTM0XCIsXG4gIH0sXG5cbiAgLy8gS1VKSUNcbiAgXCJjdzIwOnRlcnJhMXhmc2RnY2VtcXd4cDRoaG55azRybGU2d3IyMnNzZXE3ajA3ZG5uXCI6IHtcbiAgICBjb250cmFjdDogXCJ0ZXJyYTF4ZnNkZ2NlbXF3eHA0aGhueWs0cmxlNndyMjJzc2VxN2owN2RublwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFsd2R2anRsNWxlY3hjeWZsN2hjMzYyZ2N6cWgwM21zZ2N3bGg3NnhhMGZjdTB1c2Y3ZWpza2tmdWxrXCIsXG4gICAgY2hhbm5lbDogXCJcIixcbiAgfSxcbiAgLy8gU0tVSklDXG4gIFwiY3cyMDp0ZXJyYTE4OHcyNnQ5NXRmNGR6NzdyYWZ0bWU4cDc1cmdnYXR4anhmZWtud1wiOiB7XG4gICAgY29udHJhY3Q6IFwidGVycmExODh3MjZ0OTV0ZjRkejc3cmFmdG1lOHA3NXJnZ2F0eGp4ZmVrbndcIixcbiAgICByb3V0ZXI6IFwidGVycmExbHdkdmp0bDVsZWN4Y3lmbDdoYzM2MmdjenFoMDNtc2djd2xoNzZ4YTBmY3UwdXNmN2Vqc2trZnVsa1wiLFxuICAgIGNoYW5uZWw6IFwiXCIsXG4gIH0sXG5cbiAgLy8gQml0bW9zXG4gIFwiY3cyMDp0ZXJyYTFzeGU4dTJoamN6bGVrd2ZrY3EwcnMyOGVndDM4cGczd3F6Zng0emNyZXNlNGZudnp6dXBzazlnamtxXCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExc3hlOHUyaGpjemxla3dma2NxMHJzMjhlZ3QzOHBnM3dxemZ4NHpjcmVzZTRmbnZ6enVwc2s5Z2prcVwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFlMG1yenk4MDc3ZHJ1dXU0MnZzMGh1N3VnZ3VhZGUwY2o2NWRndGF1eWF3NGdzbDRrdjBxdGRmMmF1XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTI4XCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY2xhc3MgRGVub20ge1xuICBwdWJsaWMgc3ltYm9sOiBzdHJpbmc7XG4gIHB1YmxpYyBkZWNpbWFscyA9IDY7XG4gIHB1YmxpYyB0cmFjZT86IHsgcGF0aDogc3RyaW5nOyBiYXNlX2Rlbm9tOiBzdHJpbmcgfTtcbiAgcHVibGljIGljczIwPzoge1xuICAgIGNvbnRyYWN0OiBzdHJpbmc7XG4gICAgcm91dGVyOiBzdHJpbmc7XG4gICAgY2hhbm5lbDogc3RyaW5nO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWZlcmVuY2U6IHN0cmluZywgcHVibGljIHVuZGVybHlpbmc/OiBEZW5vbVtdKSB7XG4gICAgdGhpcy5zeW1ib2wgPSBcIlwiO1xuICAgIGlmICh0aGlzLnJlZmVyZW5jZS5zdGFydHNXaXRoKFwiaWJjL1wiKSkge1xuICAgICAgdGhpcy50cmFjZSA9IChpYmMgYXMgUmVjb3JkPHN0cmluZywgYW55PilbdGhpcy5yZWZlcmVuY2VdO1xuICAgIH1cblxuICAgIHRoaXMuc3ltYm9sID0gYmFzZURlbm9tVG9TeW1ib2wodGhpcy5yZWZlcmVuY2UpO1xuICAgIGlmICh0aGlzLnRyYWNlPy5iYXNlX2Rlbm9tLnN0YXJ0c1dpdGgoXCJnYW1tXCIpKSB7XG4gICAgICB0aGlzLnN5bWJvbCA9IFwiT3Ntb3NpcyBMUCBcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51bmRlcmx5aW5nKSB7XG4gICAgICB0aGlzLnN5bWJvbCA9IGAke3RoaXMuc3ltYm9sfSR7dGhpcy51bmRlcmx5aW5nXG4gICAgICAgIC5tYXAoKGQpID0+IGQuc3ltYm9sKVxuICAgICAgICAuam9pbihcIi1cIil9YDtcbiAgICB9XG5cbiAgICB0aGlzLmRlY2ltYWxzID0gNjtcblxuICAgIC8vIHdvcm1ob2xlXG4gICAgaWYgKHRoaXMudHJhY2U/LnBhdGggPT09IGB0cmFuc2Zlci9jaGFubmVsLTExM2ApIHtcbiAgICAgIHRoaXMuZGVjaW1hbHMgPVxuICAgICAgICB3b3JtaG9sZUFzc2V0c1xuICAgICAgICAgIC5maW5kKChhKSA9PiBhLmJhc2UgPT09IHRoaXMudHJhY2U/LmJhc2VfZGVub20pXG4gICAgICAgICAgPy5kZW5vbV91bml0cy5hdCgtMSk/LmV4cG9uZW50IHx8IHRoaXMuZGVjaW1hbHM7XG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLnRyYWNlPy5iYXNlX2Rlbm9tIHx8IHRoaXMucmVmZXJlbmNlKS5zdGFydHNXaXRoKFwiZXJjMjAvXCIpKVxuICAgICAgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICgodGhpcy50cmFjZT8uYmFzZV9kZW5vbSB8fCB0aGlzLnJlZmVyZW5jZSkuc3RhcnRzV2l0aChcImdyYXZpdHlcIikpXG4gICAgICB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKCh0aGlzLnRyYWNlPy5iYXNlX2Rlbm9tIHx8IHRoaXMucmVmZXJlbmNlKS5lbmRzV2l0aChcIndlaVwiKSlcbiAgICAgIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAoKHRoaXMudHJhY2U/LmJhc2VfZGVub20gfHwgdGhpcy5yZWZlcmVuY2UpLmVuZHNXaXRoKFwiLXNhdG9zaGlcIikpXG4gICAgICB0aGlzLmRlY2ltYWxzID0gODtcbiAgICBpZiAodGhpcy5zeW1ib2wuc3RhcnRzV2l0aChcIlBBWEdcIikpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiRVZNT1NcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJ3QVZBWFwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIndFVEhcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJDUk9cIikgdGhpcy5kZWNpbWFscyA9IDg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkVMMVwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIm5CVENcIikgdGhpcy5kZWNpbWFscyA9IDE0O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJCT09UXCIpIHRoaXMuZGVjaW1hbHMgPSAwO1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJET1RcIikgdGhpcy5kZWNpbWFscyA9IDEwO1xuICAgIGlmICh0aGlzLnN5bWJvbC5zdGFydHNXaXRoKFwiU0hEXCIpKSB0aGlzLmRlY2ltYWxzID0gODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiU0hEXCIpIHRoaXMuZGVjaW1hbHMgPSA4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJJTkpcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJJTkpcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJzdElOSlwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkNOVE9cIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbC5zdGFydHNXaXRoKFwid1RBT1wiKSkgdGhpcy5kZWNpbWFscyA9IDk7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkFDUkVcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJQTFFcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJTV1RIXCIpIHRoaXMuZGVjaW1hbHMgPSA4O1xuICAgIGlmICh0aGlzLnN5bWJvbC5zdGFydHNXaXRoKFwid0JUQ1wiKSkgdGhpcy5kZWNpbWFscyA9IDg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcImdUU1RcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJBUkJcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJGRVRcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJIQU5TXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiT1JBSVwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIndFVk1PU1wiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIndET0dFXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiZXJvd2FuXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwid0xVTkNcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJTSElCXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiTU9CWFwiKSB0aGlzLmRlY2ltYWxzID0gOTtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiQVJDSFwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIlJJT1wiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkRZRFhcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJEWU1cIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJDSEVRXCIpIHRoaXMuZGVjaW1hbHMgPSA5O1xuICAgIGlmIChcbiAgICAgIHRoaXMudW5kZXJseWluZz8ubGVuZ3RoID09PSAyICYmXG4gICAgICB0aGlzLnVuZGVybHlpbmdbMF0uZGVjaW1hbHMgPT09IHRoaXMudW5kZXJseWluZ1sxXS5kZWNpbWFsc1xuICAgICkge1xuICAgICAgdGhpcy5kZWNpbWFscyA9IHRoaXMudW5kZXJseWluZ1swXS5kZWNpbWFscztcbiAgICB9XG4gICAgLy8gT0tYIFVTRFRcbiAgICBpZiAoXG4gICAgICB0aGlzLnJlZmVyZW5jZSA9PT1cbiAgICAgIFwiaWJjL0VBMjA0ODVFOUJFQkY3N0JCMzYzOEE3OUY2MEEwRTFEMEExMkE2Mjg5OTcyRjMwRTQ3NTUyOUM4MEJGNUM5NjBcIlxuICAgIClcbiAgICAgIHRoaXMuZGVjaW1hbHMgPSAxODtcblxuICAgIC8vIEhhbmRsZSBnaG9zdCB1bmRlcmx5aW5nXG4gICAgaWYgKHRoaXMudW5kZXJseWluZz8ubGVuZ3RoID09PSAxICYmIHRoaXMuZGVjaW1hbHMgPT09IDYpXG4gICAgICB0aGlzLmRlY2ltYWxzID0gdGhpcy51bmRlcmx5aW5nWzBdLmRlY2ltYWxzO1xuXG4gICAgdGhpcy5pY3MyMCA9IGljczIwW3RoaXMucmVmZXJlbmNlXTtcblxuICAgIGlmICh0aGlzLnRyYWNlPy5wYXRoID09PSBcInRyYW5zZmVyL2NoYW5uZWwtOVwiICYmIHRoaXMuc3ltYm9sICE9PSBcIkFYTFwiKSB7XG4gICAgICB0aGlzLnN5bWJvbCArPSBcIi5heGxcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJhY2U/LnBhdGggPT09IFwidHJhbnNmZXIvY2hhbm5lbC01MFwiICYmIHRoaXMuc3ltYm9sICE9PSBcIkdSQVZcIikge1xuICAgICAgdGhpcy5zeW1ib2wgKz0gXCIuZ3J2XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyYWNlPy5wYXRoID09PSBcInRyYW5zZmVyL2NoYW5uZWwtMTEzXCIpIHtcbiAgICAgIHRoaXMuc3ltYm9sICs9IFwiLndoXCI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmcm9tKHN0cmluZzogc3RyaW5nKTogRGVub20ge1xuICAgIGNvbnN0IGJvd1VuZGVybHlpbmcgPSBPYmplY3QudmFsdWVzKGNvbnRyYWN0cylcbiAgICAgIC5mbGF0TWFwKCh4KSA9PiB4LmJvdylcbiAgICAgIC5maW5kKCh4KSA9PiBgZmFjdG9yeS8ke3guYWRkcmVzc30vdWxwYCA9PT0gc3RyaW5nKVxuICAgICAgPy5jb25maWcuZGVub21zPy5tYXAoRGVub20uZnJvbSk7XG5cbiAgICBsZXQgb3Ntb3Npc1VuZGVybHlpbmc7XG4gICAgaWYgKHN0cmluZy5zdGFydHNXaXRoKFwiaWJjL1wiKSkge1xuICAgICAgY29uc3QgdHJhY2UgPSAoaWJjIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pW3N0cmluZ107XG4gICAgICBvc21vc2lzVW5kZXJseWluZyA9IG9zbW9zaXNcbiAgICAgICAgLmZpbmQoKHgpID0+IGBnYW1tL3Bvb2wvJHt4LmlkfWAgPT09IHRyYWNlPy5iYXNlX2Rlbm9tKVxuICAgICAgICA/LmFzc2V0cz8ubWFwKCh4KSA9PiBEZW5vbS5mcm9tKHgudG9rZW4uZGVub20pKTtcbiAgICB9XG5cbiAgICBjb25zdCBmYWN0b3J5QWRkcmVzcyA9XG4gICAgICBzdHJpbmcuc3RhcnRzV2l0aChcImZhY3RvcnkvXCIpICYmIHN0cmluZy5zcGxpdChcIi9cIilbMV07XG4gICAgY29uc3QgZ2hvc3RWYXVsdCA9IGdob3N0VmF1bHRzLmZpbmQoKGYpID0+IGYuYWRkcmVzcyA9PT0gZmFjdG9yeUFkZHJlc3MpO1xuXG4gICAgcmV0dXJuIG5ldyBEZW5vbShcbiAgICAgIHN0cmluZyxcbiAgICAgIGJvd1VuZGVybHlpbmcgfHxcbiAgICAgICAgb3Ntb3Npc1VuZGVybHlpbmcgfHxcbiAgICAgICAgKGdob3N0VmF1bHQgPyBbRGVub20uZnJvbShnaG9zdFZhdWx0LmNvbmZpZy5kZW5vbSldIDogdW5kZWZpbmVkKVxuICAgICk7XG4gIH1cblxuICAvKlxuICBNZXRob2QgZm9yIGNyZWF0aW5nIGEgZGVub20gdGhhdCBoYXNuJ3QgeWV0IGJlZW4gSUJDJ2QgYW5kIHNvIGRvZXNuJ3QgaGF2ZSBhbiBcbiAgZW50cnkgaW4gdG9rZW5zLmpzb25cbiAgKi9cbiAgcHVibGljIHN0YXRpYyBmcm9tX3BhdGgocG9ydDogc3RyaW5nLCBjaGFubmVsOiBzdHJpbmcsIGRlbm9tOiBzdHJpbmcpOiBEZW5vbSB7XG4gICAgbGV0IGQgPSBuZXcgRGVub20oaWJjRGVub20ocG9ydCwgY2hhbm5lbCwgZGVub20pKTtcbiAgICBkLnRyYWNlID0geyBiYXNlX2Rlbm9tOiBkZW5vbSwgcGF0aDogYCR7cG9ydH0vJHtjaGFubmVsfWAgfTtcbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIHB1YmxpYyBlcSA9IChvdGhlcjogRGVub20pOiBib29sZWFuID0+IHRoaXMucmVmZXJlbmNlID09IG90aGVyLnJlZmVyZW5jZTtcbiAgcHVibGljIGNvbXBhcmUgPSAob3RoZXI6IERlbm9tKTogbnVtYmVyID0+XG4gICAgdGhpcy5zeW1ib2xcbiAgICAgIC5yZXBsYWNlKC9bYS16XSsvLCBcIlwiKVxuICAgICAgLmxvY2FsZUNvbXBhcmUob3RoZXIuc3ltYm9sLnJlcGxhY2UoL1thLXpdKy8sIFwiXCIpKTtcblxuICBwdWJsaWMgbm9ybWFsaXplZFJlZmVyZW5jZSA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGlmICh0aGlzLnJlZmVyZW5jZS5zdGFydHNXaXRoKFwiaWJjL1wiKSkge1xuICAgICAgcmV0dXJuIGBpYmMvJHt0aGlzLnJlZmVyZW5jZS5yZXBsYWNlKFwiaWJjL1wiLCBcIlwiKS50b0xvY2FsZVVwcGVyQ2FzZSgpfWA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfTtcbn1cblxuY29uc3QgaWJjRGVub20gPSAocG9ydDogc3RyaW5nLCBjaGFubmVsOiBzdHJpbmcsIGRlbm9tOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgXCJpYmMvXCIgK1xuICBCdWZmZXIuZnJvbShzaGEyNTYoQnVmZmVyLmZyb20oYCR7cG9ydH0vJHtjaGFubmVsfS8ke2Rlbm9tfWApKSlcbiAgICAudG9TdHJpbmcoXCJoZXhcIilcbiAgICAudG9VcHBlckNhc2UoKTtcblxuZXhwb3J0IGNvbnN0IFVTS19URVNUTkVUID0gRGVub20uZnJvbShcbiAgXCJmYWN0b3J5L2t1amlyYTFyODVyZXF5NmgwbHUwMnZ5ejBobnpodjV3aHNuczU1Z2R0NHcwZDdmdDg3dXR6azd1MHdxcjRzc2xsL3V1c2tcIlxuKTtcblxuZXhwb3J0IGNvbnN0IFVTSyA9IERlbm9tLmZyb20oXG4gIFwiZmFjdG9yeS9rdWppcmExcWswMGg1YXR1dHBzdjkwMHgyMDJweHg0Mm5wanI5dGhnNThkbnFwYTcyZjJwN20ybHVhc2U0NDRhNy91dXNrXCJcbik7XG5cbmV4cG9ydCBjb25zdCBLVUpJID0gRGVub20uZnJvbShcInVrdWppXCIpO1xuZXhwb3J0IGNvbnN0IERFTU8gPSBEZW5vbS5mcm9tKFxuICBcImZhY3Rvcnkva3VqaXJhMWx0dndnNjlzdzNjNXo5OWM2cnIwOGhhbDd2MGtkemZ4ejA3eWo1L2RlbW9cIlxuKTtcblxuZXhwb3J0IGNvbnN0IEFUT00gPSBEZW5vbS5mcm9tKFxuICBcImliYy8yNzM5NEZCMDkyRDJFQ0NENTYxMjNDNzRGMzZFNEMxRjkyNjAwMUNFQURBOUNBOTdFQTYyMkIyNUY0MUU1RUIyXCJcbik7XG5cbmV4cG9ydCBjb25zdCBheGxVU0RDID0gRGVub20uZnJvbShcbiAgXCJpYmMvMjk1NTQ4QTc4Nzg1QTEwMDdGMjMyREUyODYxNDlBNkZGNTEyRjE4MEFGNTY1Nzc4MEZDODlDMDA5RTJDMzQ4RlwiXG4pO1xuXG5leHBvcnQgY29uc3Qgbm9ibGVVU0RDID0gRGVub20uZnJvbV9wYXRoKFwidHJhbnNmZXJcIiwgXCJjaGFubmVsLTYyXCIsIFwidXVzZGNcIik7XG5cbmV4cG9ydCBjb25zdCBheGxVU0RUID0gRGVub20uZnJvbShcbiAgXCJpYmMvRjIzMzE2NDVCOTY4MzExNjE4OEVGMzZGQzA0QTgwOUMyOEJEMzZCNTQ1NTVFODcwNUEzNzE0NkQwMTgyRjA0NVwiXG4pO1xuZXhwb3J0IGNvbnN0IGF4bHdFVEggPSBEZW5vbS5mcm9tKFxuICBcImliYy8xQjM4ODA1QjFDNzUzNTJCMjgxNjkyODRGOTZERjU2QkRFQkQ5RThGQUMwMDVCRENDOENGMDM3OEM4MkFBOEU3XCJcbik7XG5leHBvcnQgY29uc3QgYXhsd01BVElDID0gRGVub20uZnJvbShcbiAgXCJpYmMvQTY0NDY3NDgwQkJFNENDRkMzQ0Y3RTI1QUQxNDQ2QUE5QkRCRDRGNUJDQjlFRjYwMzhCODNENjk2NEM3ODRFNlwiXG4pO1xuZXhwb3J0IGNvbnN0IGF4bHdCTkIgPSBEZW5vbS5mcm9tKFxuICBcImliYy9EQURCMzk5RTc0MkZDRUU3MTg1M0U5ODIyNUQxM0U0NEU5MDI5Mjg1MkNEMDAzM0RGNUNBQkFCOTZGODBCODMzXCJcbik7XG5leHBvcnQgY29uc3QgYXhsd0FWQVggPSBEZW5vbS5mcm9tKFxuICBcImliYy8wMDRFQkYwODVCQkVEMTAyOTMyNkQ1NkJFOEEyRTY3QzA4Q0VDRTY3MEE5NEFDMTk0N0RGNDEzRUY1MTMwRUIyXCJcbik7XG5leHBvcnQgY29uc3QgYXhsd0dMTVIgPSBEZW5vbS5mcm9tKFxuICBcImliYy9DOEQ2MzcwM0Y1ODA1Q0U2QTJCMjA1NTUxMzlDRjZFRDlDREZBODcwMzg5NjQ4RUIwOEQ2ODhCOTRCMEFFMkMxXCJcbik7XG5leHBvcnQgY29uc3QgYXhsd0ZUTSA9IERlbm9tLmZyb20oXG4gIFwiaWJjL0U2N0FEQTIyMDRBOTQxQ0Q0NzQzRTcwNzcxQkEwOEUyNDg4NUUxQURENkZEMTQwQ0UxRjlFMEZFQkI2OEM2QjJcIlxuKTtcblxuZXhwb3J0IGNvbnN0IGZhY3RvciA9IChbYmFzZSwgcXVvdGVdOiBbRGVub20sIERlbm9tXSk6IG51bWJlciA9PiB7XG4gIHJldHVybiAxMCAqKiAoYmFzZS5kZWNpbWFscyAtIHF1b3RlLmRlY2ltYWxzKTtcbn07XG4iXSwibmFtZXMiOlsiQVRPTSIsIkRFTU8iLCJEZW5vbSIsIktVSkkiLCJVU0siLCJVU0tfVEVTVE5FVCIsImF4bFVTREMiLCJheGxVU0RUIiwiYXhsd0FWQVgiLCJheGx3Qk5CIiwiYXhsd0VUSCIsImF4bHdGVE0iLCJheGx3R0xNUiIsImF4bHdNQVRJQyIsImZhY3RvciIsIm5vYmxlVVNEQyIsImFzc2V0cyIsImdob3N0VmF1bHRzIiwiY29udHJhY3RzIiwiTUFJTk5FVCIsImdob3N0VmF1bHQiLCJURVNUTkVUIiwid29ybWhvbGVBc3NldHMiLCJmaW5kIiwieCIsImNoYWluX25hbWUiLCJsYWJlbHMiLCJ1bHAiLCJ3ZWkiLCJ1Z3Jhdml0b24iLCJ1c2R0IiwidXNhdCIsInVyZWdlbiIsInVhdXNkYyIsInV1c2RjIiwidWF1c2R0IiwidXVzZHQiLCJhdGV2bW9zIiwic3RhZXZtb3MiLCJiYXNlY3JvIiwiYWV2bW9zIiwiYWZldCIsImFkeWR4IiwiZGVtbyIsImxvY2FsIiwic3d0aCIsImFhcmNoIiwiYWFjcmUiLCJhcGxhbnEiLCJ1ZnJpZW56aWVzIiwidWJlZHJvY2siLCJzdGluaiIsIm5hbm9tb2J4IiwiYXJpbyIsIm9waGlyIiwiYWR5bSIsImxva2kiLCJncmF2aXR5MHg0NTgwNDg4MERlMjI5MTNkQUZFMDlmNDk4MDg0OEVDRTZFY2JBZjc4IiwiZ3Jhdml0eTB4ZkI1YzY4MTVjQTNBQzcyQ2U5RjUwMDY4NjlBRTY3ZjE4YkY3NzAwNiIsImdyYXZpdHkweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzIiLCJncmF2aXR5MHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4IiwiZ3Jhdml0eTB4ZEFDMTdGOTU4RDJlZTUyM2EyMjA2MjA2OTk0NTk3QzEzRDgzMWVjNyIsImdyYXZpdHkweDIyNjBGQUM1RTU1NDJhNzczQWE0NGZCQ2ZlRGY3QzE5M2JjMkM1OTkiLCJncmF2aXR5MHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGIiwiZ3Jhdml0eTB4NzdFMDZjOWVDQ2YyRTc5N2ZkNDYyQTkyQjZENzY0MkVGODViMEE0NCIsImdyYXZpdHkweGEwYjkzQjllOTBhQjg4N0U1M0Y5RkI4NzI4YzAwOTc0NmU5ODlCNTMiLCJncmF2aXR5MHhlMjhiM0IzMkI2YzM0NUEzNEZmNjQ2NzQ2MDYxMjREZDVBY2VjYTMwIiwiZ3Jhdml0eTB4QjUwNzIxQkNmOGQ2NjRjMzA0MTJDZmJjNmNmN2ExNTE0NTIzNGFkMSIsImdyYXZpdHkweDRjMTEyNDk4MTRmMTFiOTM0NjgwODE3OUNmMDZlNzFhYzMyOGMxYjUiLCJncmF2aXR5MHg5MzU4MTk5MWY2OERCYUUxZUExMDUyMzNiNjdmN0ZBMEQ2QkRlRTdiIiwiZ3Jhdml0eTB4MzVhNTMyZDM3NkZGZDlhNzA1ZDBCYjMxOTUzMjgzNzMzN0EzOThFNyIsImdyYXZpdHkweDA3YmFDMzU4NDZlNWVENTAyYUE5MUFkRjZBOWU3YUEyMTBGMkRjYkUiLCJncmF2aXR5MHhkMjg3NzcwMjY3NWU2Y0ViOTc1YjRBMWRGZjlmYjdCQUY0QzkxZWE5IiwiZ3Jhdml0eTB4OTVhRDYxYjBhMTUwZDc5MjE5ZENGNjRFMUU2Q2MwMWYwQjY0QzRjRSIsImdyYXZpdHkweEFhNkU4MTI3ODMxYzlERTQ1YWU1NmJCMWIwZDRENERhNmU1NjY1QkQiLCJncmF2aXR5MHg0NDAxNzU5OGYyQUYxYkQ3MzNGOUQ4N2I1MDE3YjRFN2MxQjI4RERFIiwiZ3Jhdml0eTB4QkExMUQwMGM1Zjc0MjU1ZjU2YTVFMzY2RjRGNzdmNUExODZkN2Y1NSIsImdyYXZpdHkweEVhNUE4MkIzNTI0NGQ5ZTVFNDg3ODFGMDBiMTFCMTRFNjI3RDI5NTEiLCJncmF2aXR5MHg4M0YyMEY0NDk3NUQwM2IxYjA5ZTY0ODA5Qjc1N2M0N2Y5NDJCRWVBIiwiZ3Jhdml0eTB4Njk4MjUwODE0NTQ1NENlMzI1ZERiRTQ3YTI1ZDRlYzNkMjMxMTkzMyIsImdyYXZpdHkweDgxN2JiRGJDM2U4QTEyMDRmMzY5MWQxNGJCNDQ5OTI4NDFlM2RCMzUiLCJncmF2aXR5MHhkMjNFZDhjQTM1MENFMjYzMUY3RWNEQzVFNmJmODBEMEExRGVCQjdCIiwiZ3Jhdml0eTB4ZDNFNEJhNTY5MDQ1NTQ2RDA5Q0YwMjFFQ0M1ZEZlNDJiMWQ3ZjZFNCIsImdyYXZpdHkweDUxNDkxMDc3MUFGOUNhNjU2YWY4NDBkZmY4M0U4MjY0RWNGOTg2Q0EiLCJpbmoiLCJuY2hlcSIsInRlcnJhMTh6cWNubDgzejk4dGY2bGx5MzdnZ2htNzIzOGs3bGg3OXU0ejlhIiwidGVycmExZHpoenVreWV6djBldHoyMnVkOTQwejdhZHl2N3hnY2prYWh1dW4iLCJ0ZXJyYTFrYzg3bXU0NjBmd2txdGUyOXJxdWg0aGMyMG01NGZ4d3RzeDdncCIsInRlcnJhMWMwMHZza2h5emR2MHo2M3oydHlldHp4MnFtYTY3bjJ6M3Z6eW4wIiwidGVycmExejNlMmU0anBrNG4weHp6d2xrZ2NmdmM5NXBjNWxkcTB4Y255NTgiLCJyZWR1Y2UiLCJhIiwidiIsImJhc2UiLCJzeW1ib2wiLCJ0ZXJyYSIsInVhdWQiLCJ1Y2FkIiwidWNoZiIsInVjbnkiLCJ1ZGtrIiwidWV1ciIsInVnYnAiLCJ1aGtkIiwidWlkciIsInVpbnIiLCJ1anB5IiwidW1udCIsInVteXIiLCJ1bm9rIiwidXBocCIsInVzZHIiLCJ1c2VrIiwidXNnZCIsInV0aGIiLCJ1dHdkIiwidXVzZCIsImJhc2VEZW5vbVRvU3ltYm9sIiwiZGVub20iLCJyYXciLCJmYWN0b3J5QWRkcmVzcyIsInNwbGl0IiwiZ2hvc3QiLCJhZGRyZXNzIiwiZW5kc1dpdGgiLCJiYXNlRGVub20iLCJzdGFydHNXaXRoIiwiaWJjIiwiYmFzZV9kZW5vbSIsImxhYmVsIiwidCIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSIsImF2YWxhbmNoZSIsImljczIwIiwiY29udHJhY3QiLCJyb3V0ZXIiLCJjaGFubmVsIiwiZnJvbSIsInN0cmluZyIsIk9iamVjdCIsImJvd1VuZGVybHlpbmciLCJ2YWx1ZXMiLCJmbGF0TWFwIiwiYm93IiwiY29uZmlnIiwiZGVub21zIiwibWFwIiwib3Ntb3Npc1VuZGVybHlpbmciLCJvc21vc2lzIiwidHJhY2UiLCJpZCIsInRva2VuIiwiZiIsInVuZGVmaW5lZCIsImZyb21fcGF0aCIsInBvcnQiLCJkIiwiaWJjRGVub20iLCJwYXRoIiwiY29uc3RydWN0b3IiLCJyZWZlcmVuY2UiLCJ1bmRlcmx5aW5nIiwiZGVjaW1hbHMiLCJlcSIsImNvbXBhcmUiLCJub3JtYWxpemVkUmVmZXJlbmNlIiwib3RoZXIiLCJsb2NhbGVDb21wYXJlIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJqb2luIiwiZGVub21fdW5pdHMiLCJhdCIsImV4cG9uZW50IiwibGVuZ3RoIiwiQnVmZmVyIiwic2hhMjU2IiwidG9TdHJpbmciLCJxdW90ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUErbEJhQSxJQUFJO2VBQUpBOztJQUpBQyxJQUFJO2VBQUpBOztJQWhMQUMsS0FBSztlQUFMQTs7SUErS0FDLElBQUk7ZUFBSkE7O0lBSkFDLEdBQUc7ZUFBSEE7O0lBSkFDLFdBQVc7ZUFBWEE7O0lBaUJBQyxPQUFPO2VBQVBBOztJQU1BQyxPQUFPO2VBQVBBOztJQVlBQyxRQUFRO2VBQVJBOztJQUhBQyxPQUFPO2VBQVBBOztJQU5BQyxPQUFPO2VBQVBBOztJQWVBQyxPQUFPO2VBQVBBOztJQUhBQyxRQUFRO2VBQVJBOztJQVRBQyxTQUFTO2VBQVRBOztJQWdCQUMsTUFBTTtlQUFOQTs7SUF4QkFDLFNBQVM7ZUFBVEE7Ozt3QkF2bUJVO2tCQUNBOytCQUNBO3lCQUNVO3NFQUNYO29FQUNGO21FQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUWRDO0FBTkYsTUFBTUMsY0FBYztPQUNmQyxzQkFBUyxDQUFDQyxnQkFBTyxDQUFDLENBQUNDLFVBQVU7T0FDN0JGLHNCQUFTLENBQUNHLGdCQUFPLENBQUMsQ0FBQ0QsVUFBVTtDQUNqQztBQUVELE1BQU1FLGlCQUNKTixFQUFBQSxlQUFBQSxxQkFBTSxDQUFDTyxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsVUFBVSxLQUFLLHdCQUFwQ1QsbUNBQUFBLGFBQWdEQSxNQUFNLEtBQUksRUFBRTtBQUU5RCxNQUFNVSxTQUFpQztJQUNyQ0MsS0FBSztJQUNMQyxLQUFLO0lBQ0xDLFdBQVc7SUFDWEMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFFBQVE7SUFDUixhQUFhO0lBQ2Isd0VBQ0U7SUFDRix3RUFDRTtJQUNGLHdFQUNFO0lBQ0Ysd0VBQ0U7SUFFRkMsUUFBUTtJQUNSQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWEMsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQkMsUUFBUTtJQUNSQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxPQUFPO0lBQ1BDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLE9BQU87SUFDUEMsVUFBVTtJQUNWQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsTUFBTTtJQUNOQyxNQUFNO0lBQ04sOERBQThEO0lBQzlELCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0QsbUZBQ0U7SUFDRixrRkFDRTtJQUNGLGtGQUNFO0lBQ0Ysa0ZBQ0U7SUFDRixrRkFDRTtJQUNGLGdFQUFnRTtJQUNoRSxtRkFDRTtJQUVGLG1GQUNFO0lBRUYsbUZBQ0U7SUFFRixtRkFDRTtJQUVGLHFCQUFxQjtJQUNyQixtRkFDRTtJQUVGLG1GQUNFO0lBRUYsbUZBQ0U7SUFDRiwrREFBK0Q7SUFDL0QsZ0ZBQ0U7SUFDRixnRkFDRTtJQUNGQyxtREFBbUQ7SUFDbkRDLG1EQUFtRDtJQUNuREMsbURBQW1EO0lBQ25EQyxtREFBbUQ7SUFDbkRDLG1EQUFtRDtJQUNuREMsbURBQW1EO0lBQ25EQyxtREFBbUQ7SUFDbkRDLG1EQUFtRDtJQUNuREMsbURBQW1EO0lBQ25EQyxtREFBbUQ7SUFDbkRDLG1EQUFtRDtJQUNuREMsbURBQW1EO0lBQ25EQyxtREFBbUQ7SUFDbkRDLG1EQUFtRDtJQUNuREMsbURBQW1EO0lBQ25EQyxtREFBbUQ7SUFDbkRDLG1EQUFtRDtJQUVuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUNuRCxJQUFJO0lBQ0pDLG1EQUFtRDtJQUNuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUNuRCxJQUFJO0lBQ0pDLG1EQUFtRDtJQUNuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUNuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUNuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUNuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUNuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUNuRCxLQUFLO0lBQ0xDLG1EQUFtRDtJQUVuRCxvREFBb0Q7SUFDcEQsWUFBWTtJQUNaQyxLQUFLO0lBQ0wsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWkMsT0FBTztJQUNQLHdFQUNFO0lBQ0Ysd0VBQ0U7SUFDRix3RUFDRTtJQUNGLHdFQUNFO0lBQ0Ysd0VBQ0U7SUFDRix3RUFDRTtJQUNGLHlFQUNFO0lBQ0YseUVBQ0U7SUFDRix5RUFDRTtJQUVGLHlFQUNFO0lBQ0Ysc0RBQXNEO0lBQ3RELHlFQUNFO0lBQ0YseUVBQ0U7SUFDRix5RUFDRTtJQUNGLHlFQUNFO0lBQ0YseUVBQ0U7SUFDRix5RUFDRTtJQUNGLHlFQUNFO0lBRUYsc0RBQXNEO0lBQ3RELHNEQUFzRDtJQUN0RCxzREFBc0Q7SUFDdEQsc0RBQXNEO0lBQ3RELHNEQUFzRDtJQUV0RCxxREFBcUQ7SUFDckQscURBQXFEO0lBRXJEQyw4Q0FBOEM7SUFDOUNDLDhDQUE4QztJQUM5Q0MsOENBQThDO0lBQzlDQyw4Q0FBOEM7SUFDOUNDLDhDQUE4QztJQUM5Qyx1RkFDRTtJQUNGLG9EQUFvRDtJQUNwRCwrREFBK0Q7SUFDL0QscUJBQXFCO0dBRWxCcEUsZUFBZXFFLE1BQU0sQ0FBQyxDQUFDQyxHQUFHQyxJQUFPLHdDQUFLRDtRQUFHLENBQUNDLEVBQUVDLElBQUksQ0FBQyxFQUFFRCxFQUFFRSxNQUFNO1FBQUssQ0FBQztBQUd0RSxNQUFNQyxRQUFnQztJQUNwQ0MsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLE1BQU07QUFDUjtBQUVBLE1BQU1DLG9CQUFvQixDQUFDQztRQVVyQjtJQVRKLE1BQU1DLE1BQU05RixNQUFNLENBQUM2RixNQUFNO0lBQ3pCLElBQUlDLEtBQUssT0FBT0E7SUFFaEIsTUFBTUMsaUJBQWlCRixNQUFNRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDMUMsTUFBTUMsUUFDSkYsa0JBQWtCeEcsWUFBWU0sSUFBSSxDQUFDLENBQUNxRSxJQUFNQSxFQUFFZ0MsT0FBTyxLQUFLSDtJQUMxRCxJQUFJRSxPQUFPLE9BQU9KLE1BQU1NLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFekQsTUFBTUMsWUFBWVAsTUFBTVEsVUFBVSxDQUFDLFdBQy9CLGFBQUEsQUFBQ0MsbUJBQUcsQUFBd0IsQ0FBQ1QsTUFBTSxjQUFuQyxpQ0FBQSxXQUFxQ1UsVUFBVSxHQUMvQ1YsTUFBTVEsVUFBVSxDQUFDLGNBQ2pCUixNQUFNRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FDbkJILE1BQU1RLFVBQVUsQ0FBQyxjQUNqQlIsTUFBTUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQ25CSDtJQUVKLElBQUksQ0FBQ08sV0FBVyxPQUFPO0lBRXZCLE1BQU1JLFFBQVF4RyxNQUFNLENBQUNvRyxVQUFVO0lBRS9CLElBQUlJLE9BQU8sT0FBT0E7SUFFbEIsTUFBTUMsSUFBSW5DLEtBQUssQ0FBQ3VCLE1BQU07SUFDdEIsSUFBSVksR0FBRyxPQUFPQTtJQUVkLFFBQVE7SUFDUixPQUFPTCxVQUFVQyxVQUFVLENBQUMsUUFDeEIsTUFBTUQsVUFBVU0sT0FBTyxDQUFDLE9BQU8sSUFBSUMsV0FBVyxLQUM5Q1AsVUFBVUMsVUFBVSxDQUFDLE9BQ3JCRCxVQUFVTSxPQUFPLENBQUMsTUFBTSxJQUFJQyxXQUFXLEtBRXpDUCxVQUFVQyxVQUFVLENBQUMsVUFDbkIsQ0FBQyxHQUFHLEVBQUVULGtCQUFrQlEsVUFBVU0sT0FBTyxDQUFDLFVBQVUsS0FBSyxDQUFDLEdBRTVETixVQUFVQyxVQUFVLENBQUMsU0FDbkIsQ0FBQyxFQUFFLEVBQUVULGtCQUFrQlEsVUFBVU0sT0FBTyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQ3RETjtBQUNOO0FBRUEsTUFBTVEsWUFBWTtJQUNoQixVQUFVO0lBQ1YsOENBQThDO0FBQ2hEO0FBUUEsTUFBTUMsUUFBK0I7SUFDbkMsd0VBQXdFO1FBQ3RFQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBRUEsd0VBQXdFO1FBQ3RFRixVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBRUEsd0VBQXdFO1FBQ3RFRixVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBQ0Esd0VBQXdFO1FBQ3RFRixVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBQ0Esd0VBQXdFO1FBQ3RFRixVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBQ0EsVUFBVTtJQUNWLHlFQUF5RTtRQUN2RUYsVUFDRTtRQUNGQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUNBLFFBQVE7SUFDUix5RUFBeUU7UUFDdkVGLFVBQ0U7UUFDRkMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFDQSxTQUFTO0lBQ1QseUVBQXlFO1FBQ3ZFRixVQUNFO1FBQ0ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBQ0EsVUFBVTtJQUNWLHlFQUF5RTtRQUN2RUYsVUFDRTtRQUNGQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUVBLE9BQU87SUFDUCx5RUFBeUU7UUFDdkVGLFVBQ0U7UUFDRkMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFFQSxRQUFRO0lBQ1IseUVBQXlFO1FBQ3ZFRixVQUNFO1FBQ0ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBRUEsTUFBTTtJQUNOLHlFQUF5RTtRQUN2RUYsVUFDRTtRQUNGQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUVBLE9BQU87SUFDUCx5RUFBeUU7UUFDdkVGLFVBQ0U7UUFDRkMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFFQSxRQUFRO0lBQ1IseUVBQXlFO1FBQ3ZFRixVQUNFO1FBQ0ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBRUEsTUFBTTtJQUNOLDBEQUEwRDtJQUMxRCwrREFBK0Q7SUFDL0QsNkRBQTZEO0lBQzdELDJCQUEyQjtJQUMzQixLQUFLO0lBRUwsT0FBTztJQUNQLHlFQUF5RTtRQUN2RUYsVUFDRTtRQUNGQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtJQUVBLFFBQVE7SUFDUixxREFBcUQ7UUFDbkRGLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFDQSxTQUFTO0lBQ1QscURBQXFEO1FBQ25ERixVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsU0FBUztJQUNYO0lBRUEsU0FBUztJQUNULHlFQUF5RTtRQUN2RUYsVUFDRTtRQUNGQyxRQUFRO1FBQ1JDLFNBQVM7SUFDWDtBQUNGO0FBRU8sTUFBTXhJO0lBK0dYLE9BQWN5SSxLQUFLQyxNQUFjLEVBQVM7WUFDbEJDLDJDQUFBQTtRQUF0QixNQUFNQyxpQkFBZ0JELDhCQUFBQSxPQUFPRSxNQUFNLENBQUM3SCxzQkFBUyxFQUMxQzhILE9BQU8sQ0FBQyxDQUFDeEgsSUFBTUEsRUFBRXlILEdBQUcsRUFDcEIxSCxJQUFJLENBQUMsQ0FBQ0MsSUFBTSxDQUFDLFFBQVEsRUFBRUEsRUFBRW9HLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBS2dCLHFCQUZ4QkMsbURBQUFBLDRDQUFBQSw0QkFHbEJLLE1BQU0sQ0FBQ0MsTUFBTSxjQUhLTixnRUFBQUEsMENBR0hPLEdBQUcsQ0FBQ2xKLE1BQU15SSxJQUFJO1FBRWpDLElBQUlVO1FBQ0osSUFBSVQsT0FBT2IsVUFBVSxDQUFDLFNBQVM7Z0JBRVR1QixzQkFBQUE7WUFEcEIsTUFBTUMsUUFBUSxBQUFDdkIsbUJBQUcsQUFBd0IsQ0FBQ1ksT0FBTztZQUNsRFMscUJBQW9CQyxnQkFBQUEsb0JBQU8sQ0FDeEIvSCxJQUFJLENBQUMsQ0FBQ0MsSUFBTSxDQUFDLFVBQVUsRUFBRUEsRUFBRWdJLEVBQUUsQ0FBQyxDQUFDLE1BQUtELGtCQUFBQSw0QkFBQUEsTUFBT3RCLFVBQVUsZ0JBRHBDcUIscUNBQUFBLHVCQUFBQSxjQUVoQnRJLE1BQU0sY0FGVXNJLDJDQUFBQSxxQkFFUkYsR0FBRyxDQUFDLENBQUM1SCxJQUFNdEIsTUFBTXlJLElBQUksQ0FBQ25ILEVBQUVpSSxLQUFLLENBQUNsQyxLQUFLO1FBQ2pEO1FBRUEsTUFBTUUsaUJBQ0ptQixPQUFPYixVQUFVLENBQUMsZUFBZWEsT0FBT2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN2RCxNQUFNdEcsYUFBYUgsWUFBWU0sSUFBSSxDQUFDLENBQUNtSSxJQUFNQSxFQUFFOUIsT0FBTyxLQUFLSDtRQUV6RCxPQUFPLElBQUl2SCxNQUNUMEksUUFDQUUsaUJBQ0VPLHFCQUNDakksQ0FBQUEsYUFBYTtZQUFDbEIsTUFBTXlJLElBQUksQ0FBQ3ZILFdBQVc4SCxNQUFNLENBQUMzQixLQUFLO1NBQUUsR0FBR29DLFNBQVE7SUFFcEU7SUFFQTs7O0VBR0EsR0FDQSxPQUFjQyxVQUFVQyxJQUFZLEVBQUVuQixPQUFlLEVBQUVuQixLQUFhLEVBQVM7UUFDM0UsSUFBSXVDLElBQUksSUFBSTVKLE1BQU02SixTQUFTRixNQUFNbkIsU0FBU25CO1FBQzFDdUMsRUFBRVAsS0FBSyxHQUFHO1lBQUV0QixZQUFZVjtZQUFPeUMsTUFBTSxDQUFDLEVBQUVILEtBQUssQ0FBQyxFQUFFbkIsUUFBUSxDQUFDO1FBQUM7UUFDMUQsT0FBT29CO0lBQ1Q7SUF2SUFHLFlBQVksQUFBT0MsU0FBaUIsRUFBRSxBQUFPQyxVQUFvQixDQUFFO1lBTzdELGFBYUEsY0FPQyxjQUVBLGNBRUEsY0FFQSxjQXVDSCxrQkFhRSxtQkFLQSxjQUdBLGNBR0E7OztRQXpHTix1QkFBT3BFLFVBQVAsS0FBQTtRQUNBLHVCQUFPcUUsWUFBUCxLQUFBO1FBQ0EsdUJBQU9iLFNBQVAsS0FBQTtRQUNBLHVCQUFPaEIsU0FBUCxLQUFBO1FBK0lBLHVCQUFPOEIsTUFBUCxLQUFBO1FBQ0EsdUJBQU9DLFdBQVAsS0FBQTtRQUtBLHVCQUFPQyx1QkFBUCxLQUFBO2FBL0ltQkwsWUFBQUE7YUFBMEJDLGFBQUFBO2FBUnRDQyxXQUFXO2FBaUpYQyxLQUFLLENBQUNHLFFBQTBCLElBQUksQ0FBQ04sU0FBUyxJQUFJTSxNQUFNTixTQUFTO2FBQ2pFSSxVQUFVLENBQUNFLFFBQ2hCLElBQUksQ0FBQ3pFLE1BQU0sQ0FDUnFDLE9BQU8sQ0FBQyxVQUFVLElBQ2xCcUMsYUFBYSxDQUFDRCxNQUFNekUsTUFBTSxDQUFDcUMsT0FBTyxDQUFDLFVBQVU7YUFFM0NtQyxzQkFBc0I7WUFDM0IsSUFBSSxJQUFJLENBQUNMLFNBQVMsQ0FBQ25DLFVBQVUsQ0FBQyxTQUFTO2dCQUNyQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ21DLFNBQVMsQ0FBQzlCLE9BQU8sQ0FBQyxRQUFRLElBQUlzQyxpQkFBaUIsR0FBRyxDQUFDO1lBQ3hFO1lBQ0EsT0FBTyxJQUFJLENBQUNSLFNBQVM7UUFDdkI7UUFuSkUsSUFBSSxDQUFDbkUsTUFBTSxHQUFHO1FBQ2QsSUFBSSxJQUFJLENBQUNtRSxTQUFTLENBQUNuQyxVQUFVLENBQUMsU0FBUztZQUNyQyxJQUFJLENBQUN3QixLQUFLLEdBQUcsQUFBQ3ZCLG1CQUFHLEFBQXdCLENBQUMsSUFBSSxDQUFDa0MsU0FBUyxDQUFDO1FBQzNEO1FBRUEsSUFBSSxDQUFDbkUsTUFBTSxHQUFHdUIsa0JBQWtCLElBQUksQ0FBQzRDLFNBQVM7UUFDOUMsS0FBSSxjQUFBLElBQUksQ0FBQ1gsS0FBSyxjQUFWLGtDQUFBLFlBQVl0QixVQUFVLENBQUNGLFVBQVUsQ0FBQyxTQUFTO1lBQzdDLElBQUksQ0FBQ2hDLE1BQU0sR0FBRztRQUNoQjtRQUVBLElBQUksSUFBSSxDQUFDb0UsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQ3BFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUNvRSxVQUFVLENBQzNDZixHQUFHLENBQUMsQ0FBQ1UsSUFBTUEsRUFBRS9ELE1BQU0sRUFDbkI0RSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hCO1FBRUEsSUFBSSxDQUFDUCxRQUFRLEdBQUc7UUFFaEIsV0FBVztRQUNYLElBQUksRUFBQSxlQUFBLElBQUksQ0FBQ2IsS0FBSyxjQUFWLG1DQUFBLGFBQVlTLElBQUksTUFBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7Z0JBRTdDMUkscUNBQUFBO1lBREYsSUFBSSxDQUFDOEksUUFBUSxHQUNYOUksRUFBQUEsdUJBQUFBLGVBQ0dDLElBQUksQ0FBQyxDQUFDcUU7b0JBQWlCO3VCQUFYQSxFQUFFRSxJQUFJLE9BQUssY0FBQSxJQUFJLENBQUN5RCxLQUFLLGNBQVYsa0NBQUEsWUFBWXRCLFVBQVU7NEJBRGhEM0csNENBQUFBLHNDQUFBQSxxQkFFSXNKLFdBQVcsQ0FBQ0MsRUFBRSxDQUFDLENBQUMsZ0JBRnBCdkosMERBQUFBLG9DQUV3QndKLFFBQVEsS0FBSSxJQUFJLENBQUNWLFFBQVE7UUFDckQ7UUFFQSxJQUFJLEFBQUMsQ0FBQSxFQUFBLGVBQUEsSUFBSSxDQUFDYixLQUFLLGNBQVYsbUNBQUEsYUFBWXRCLFVBQVUsS0FBSSxJQUFJLENBQUNpQyxTQUFTLEFBQUQsRUFBR25DLFVBQVUsQ0FBQyxXQUN4RCxJQUFJLENBQUNxQyxRQUFRLEdBQUc7UUFDbEIsSUFBSSxBQUFDLENBQUEsRUFBQSxlQUFBLElBQUksQ0FBQ2IsS0FBSyxjQUFWLG1DQUFBLGFBQVl0QixVQUFVLEtBQUksSUFBSSxDQUFDaUMsU0FBUyxBQUFELEVBQUduQyxVQUFVLENBQUMsWUFDeEQsSUFBSSxDQUFDcUMsUUFBUSxHQUFHO1FBQ2xCLElBQUksQUFBQyxDQUFBLEVBQUEsZUFBQSxJQUFJLENBQUNiLEtBQUssY0FBVixtQ0FBQSxhQUFZdEIsVUFBVSxLQUFJLElBQUksQ0FBQ2lDLFNBQVMsQUFBRCxFQUFHckMsUUFBUSxDQUFDLFFBQ3RELElBQUksQ0FBQ3VDLFFBQVEsR0FBRztRQUNsQixJQUFJLEFBQUMsQ0FBQSxFQUFBLGVBQUEsSUFBSSxDQUFDYixLQUFLLGNBQVYsbUNBQUEsYUFBWXRCLFVBQVUsS0FBSSxJQUFJLENBQUNpQyxTQUFTLEFBQUQsRUFBR3JDLFFBQVEsQ0FBQyxhQUN0RCxJQUFJLENBQUN1QyxRQUFRLEdBQUc7UUFDbEIsSUFBSSxJQUFJLENBQUNyRSxNQUFNLENBQUNnQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUNxQyxRQUFRLEdBQUc7UUFDcEQsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDN0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDN0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLENBQUNnQyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUNxQyxRQUFRLEdBQUc7UUFDbkQsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDN0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLENBQUNnQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUNxQyxRQUFRLEdBQUc7UUFDcEQsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLENBQUNnQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUNxQyxRQUFRLEdBQUc7UUFDcEQsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDOUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDN0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDOUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDN0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDM0MsSUFBSSxJQUFJLENBQUNyRSxNQUFNLEtBQUssUUFBUSxJQUFJLENBQUNxRSxRQUFRLEdBQUc7UUFDNUMsSUFDRSxFQUFBLG1CQUFBLElBQUksQ0FBQ0QsVUFBVSxjQUFmLHVDQUFBLGlCQUFpQlksTUFBTSxNQUFLLEtBQzVCLElBQUksQ0FBQ1osVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUSxLQUFLLElBQUksQ0FBQ0QsVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUSxFQUMzRDtZQUNBLElBQUksQ0FBQ0EsUUFBUSxHQUFHLElBQUksQ0FBQ0QsVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUTtRQUM3QztRQUNBLFdBQVc7UUFDWCxJQUNFLElBQUksQ0FBQ0YsU0FBUyxLQUNkLHdFQUVBLElBQUksQ0FBQ0UsUUFBUSxHQUFHO1FBRWxCLDBCQUEwQjtRQUMxQixJQUFJLEVBQUEsb0JBQUEsSUFBSSxDQUFDRCxVQUFVLGNBQWYsd0NBQUEsa0JBQWlCWSxNQUFNLE1BQUssS0FBSyxJQUFJLENBQUNYLFFBQVEsS0FBSyxHQUNyRCxJQUFJLENBQUNBLFFBQVEsR0FBRyxJQUFJLENBQUNELFVBQVUsQ0FBQyxFQUFFLENBQUNDLFFBQVE7UUFFN0MsSUFBSSxDQUFDN0IsS0FBSyxHQUFHQSxLQUFLLENBQUMsSUFBSSxDQUFDMkIsU0FBUyxDQUFDO1FBRWxDLElBQUksRUFBQSxlQUFBLElBQUksQ0FBQ1gsS0FBSyxjQUFWLG1DQUFBLGFBQVlTLElBQUksTUFBSyx3QkFBd0IsSUFBSSxDQUFDakUsTUFBTSxLQUFLLE9BQU87WUFDdEUsSUFBSSxDQUFDQSxNQUFNLElBQUk7UUFDakI7UUFDQSxJQUFJLEVBQUEsZUFBQSxJQUFJLENBQUN3RCxLQUFLLGNBQVYsbUNBQUEsYUFBWVMsSUFBSSxNQUFLLHlCQUF5QixJQUFJLENBQUNqRSxNQUFNLEtBQUssUUFBUTtZQUN4RSxJQUFJLENBQUNBLE1BQU0sSUFBSTtRQUNqQjtRQUNBLElBQUksRUFBQSxlQUFBLElBQUksQ0FBQ3dELEtBQUssY0FBVixtQ0FBQSxhQUFZUyxJQUFJLE1BQUssd0JBQXdCO1lBQy9DLElBQUksQ0FBQ2pFLE1BQU0sSUFBSTtRQUNqQjtJQUNGO0FBa0RGO0FBRUEsTUFBTWdFLFdBQVcsQ0FBQ0YsTUFBY25CLFNBQWlCbkIsUUFDL0MsU0FDQXlELFFBQU0sQ0FBQ3JDLElBQUksQ0FBQ3NDLElBQUFBLGNBQU0sRUFBQ0QsUUFBTSxDQUFDckMsSUFBSSxDQUFDLENBQUMsRUFBRWtCLEtBQUssQ0FBQyxFQUFFbkIsUUFBUSxDQUFDLEVBQUVuQixNQUFNLENBQUMsSUFDekQyRCxRQUFRLENBQUMsT0FDVDdDLFdBQVc7QUFFVCxNQUFNaEksY0FBY0gsTUFBTXlJLElBQUksQ0FDbkM7QUFHSyxNQUFNdkksTUFBTUYsTUFBTXlJLElBQUksQ0FDM0I7QUFHSyxNQUFNeEksT0FBT0QsTUFBTXlJLElBQUksQ0FBQztBQUN4QixNQUFNMUksT0FBT0MsTUFBTXlJLElBQUksQ0FDNUI7QUFHSyxNQUFNM0ksT0FBT0UsTUFBTXlJLElBQUksQ0FDNUI7QUFHSyxNQUFNckksVUFBVUosTUFBTXlJLElBQUksQ0FDL0I7QUFHSyxNQUFNNUgsWUFBWWIsTUFBTTBKLFNBQVMsQ0FBQyxZQUFZLGNBQWM7QUFFNUQsTUFBTXJKLFVBQVVMLE1BQU15SSxJQUFJLENBQy9CO0FBRUssTUFBTWpJLFVBQVVSLE1BQU15SSxJQUFJLENBQy9CO0FBRUssTUFBTTlILFlBQVlYLE1BQU15SSxJQUFJLENBQ2pDO0FBRUssTUFBTWxJLFVBQVVQLE1BQU15SSxJQUFJLENBQy9CO0FBRUssTUFBTW5JLFdBQVdOLE1BQU15SSxJQUFJLENBQ2hDO0FBRUssTUFBTS9ILFdBQVdWLE1BQU15SSxJQUFJLENBQ2hDO0FBRUssTUFBTWhJLFVBQVVULE1BQU15SSxJQUFJLENBQy9CO0FBR0ssTUFBTTdILFNBQVMsQ0FBQyxDQUFDZ0YsTUFBTXFGLE1BQXNCO0lBQ2xELE9BQU8sS0FBQSxJQUFBLElBQU9yRixLQUFLc0UsUUFBUSxHQUFHZSxNQUFNZixRQUFRO0FBQzlDIn0=
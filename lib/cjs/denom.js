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
const _buffer = require("buffer");
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
const ibcDenom = (port, channel, denom)=>"ibc/" + _buffer.Buffer.from((0, _crypto.sha256)(_buffer.Buffer.from(`${port}/${channel}/${denom}`))).toString("hex").toUpperCase();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZW5vbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaGEyNTYgfSBmcm9tIFwiQGNvc21qcy9jcnlwdG9cIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcbmltcG9ydCB7IGFzc2V0cyB9IGZyb20gXCJjaGFpbi1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgTUFJTk5FVCwgVEVTVE5FVCB9IGZyb20gXCIuL25ldHdvcmtcIjtcbmltcG9ydCBjb250cmFjdHMgZnJvbSBcIi4vcmVzb3VyY2VzL2NvbnRyYWN0cy5qc29uXCI7XG5pbXBvcnQgb3Ntb3NpcyBmcm9tIFwiLi9yZXNvdXJjZXMvb3Ntb3Npcy5qc29uXCI7XG5pbXBvcnQgaWJjIGZyb20gXCIuL3Jlc291cmNlcy90b2tlbnMuanNvblwiO1xuXG5jb25zdCBnaG9zdFZhdWx0cyA9IFtcbiAgLi4uY29udHJhY3RzW01BSU5ORVRdLmdob3N0VmF1bHQsXG4gIC4uLmNvbnRyYWN0c1tURVNUTkVUXS5naG9zdFZhdWx0LFxuXTtcblxuY29uc3Qgd29ybWhvbGVBc3NldHMgPVxuICBhc3NldHMuZmluZCgoeCkgPT4geC5jaGFpbl9uYW1lID09PSBcImdhdGV3YXlcIik/LmFzc2V0cyB8fCBbXTtcblxuY29uc3QgbGFiZWxzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB1bHA6IFwiTFAgXCIsXG4gIHdlaTogXCJPS1RcIixcbiAgdWdyYXZpdG9uOiBcIkdSQVZcIixcbiAgdXNkdDogXCJVU0RUXCIsXG4gIHVzYXQ6IFwibkJUQ1wiLFxuICB1cmVnZW46IFwiUkVHRU5cIixcbiAgLy8gTm9ibGUgVVNEQ1xuICBcImliYy9GRTk4QUFENjhGMDJGMDM1NjVFOUZBMzlBNUU2Mjc5NDY2OTlCMkIwNzExNTg4OUVEODEyRDhCQTYzOTU3NkE5XCI6XG4gICAgXCJVU0RDXCIsXG4gIFwiaWJjLzExOTMzNEM1NTcyMDk0MjQ4MUY0NThDOUM0NjJGNUMwQ0QxRjFFN0VFQUM0Njc5RDY3NEFBNjcyMjE5MTZBRUFcIjpcbiAgICBcIkxVTkNcIixcbiAgXCJpYmMvMjE3NzU1MzQ0QzBENDBDNzUwMzYxMTBFMjBCMDQyN0NDNjUwNTc2MEYwNzFCRTQwODBEQUQ1QUM4NDU5NjlFRVwiOlxuICAgIFwiVVNUQ1wiLFxuICBcImliYy8yMTc3NTUzNDRjMGQ0MGM3NTAzNjExMGUyMGIwNDI3Y2M2NTA1NzYwZjA3MWJlNDA4MGRhZDVhYzg0NTk2OWVlXCI6XG4gICAgXCJVU1RDXCIsXG5cbiAgdWF1c2RjOiBcIlVTRENcIixcbiAgdXVzZGM6IFwiVVNEQ1wiLFxuICB1YXVzZHQ6IFwiVVNEVFwiLFxuICB1dXNkdDogXCJVU0RUXCIsXG4gIGF0ZXZtb3M6IFwiRVZNT1NcIixcbiAgc3RhZXZtb3M6IFwic3RFVk1PU1wiLFxuICBcIndhdmF4LXdlaVwiOiBcIndBVkFYXCIsXG4gIFwieXVtLXdlaVwiOiBcIllVTVwiLFxuICBcImFyYi13ZWlcIjogXCJBUkJcIixcbiAgYmFzZWNybzogXCJDUk9cIixcbiAgXCJ3ZXRoLXdlaVwiOiBcIndFVEhcIixcbiAgXCJsaW5rLXdlaVwiOiBcIkxJTktcIixcbiAgXCJ3c3RldGgtd2VpXCI6IFwid3N0RVRIXCIsXG4gIFwicmV0aC13ZWlcIjogXCJyRVRIXCIsXG4gIFwiZG90LXBsYW5ja1wiOiBcIkRPVFwiLFxuICBcInBlcGUtd2VpXCI6IFwiUEVQRVwiLFxuICBcInlpZWxkZXRoLXdlaVwiOiBcInlpZWxkRVRIXCIsXG4gIGFldm1vczogXCJFVk1PU1wiLFxuICBhZmV0OiBcIkZFVFwiLFxuICBhZHlkeDogXCJEWURYXCIsXG4gIGRlbW86IFwiREVNT1wiLFxuICBsb2NhbDogXCJMT0NBTFwiLFxuICBzd3RoOiBcIlNXVEhcIixcbiAgYWFyY2g6IFwiQVJDSFwiLFxuICBhYWNyZTogXCJBQ1JFXCIsXG4gIGFwbGFucTogXCJQTFFcIixcbiAgdWZyaWVuemllczogXCJGUk5aXCIsXG4gIHViZWRyb2NrOiBcIlJPQ0tcIixcbiAgc3Rpbmo6IFwic3RJTkpcIixcbiAgbmFub21vYng6IFwiTU9CWFwiLFxuICBhcmlvOiBcIlJJT1wiLFxuICBvcGhpcjogXCJPUEhJUlwiLFxuICBhZHltOiBcIkRZTVwiLFxuICBsb2tpOiBcIk9ESU5cIixcbiAgXCJmYWN0b3J5L2t1amlyYTFsdHZ3ZzY5c3czYzV6OTljNnJyMDhoYWw3djBrZHpmeHowN3lqNS9kZW1vXCI6IFwiREVNT1wiLFxuICBcImZhY3Rvcnkva3VqaXJhMTJ3MHVhNGVxbmtrMGFhaHRuamx0NmgzZGh4YWVsNngyNXM1MDd3L2xvY2FsXCI6IFwiTE9DQUxcIixcbiAgXCJmYWN0b3J5L2t1amlyYTFzd2t1eXQwOHo3NG41amw3enI2aHgwcnU1c2EyeWV2NXY4OTZwNi9sb2NhbFwiOiBcIkxPQ0FMXCIsXG4gIFwiZmFjdG9yeS9rdWppcmExNTAzdzNjam56cGQwNm00YXBqZTR2MG54NDdoNWdldmt5d3hhcjhyMjVnY2U4cjcyN2p4cWU0Y2Voay9MT0NBTFwiOlxuICAgIFwiTE9DQUxcIixcbiAgXCJmYWN0b3J5L2t1amlyYTFyODVyZXF5NmgwbHUwMnZ5ejBobnpodjV3aHNuczU1Z2R0NHcwZDdmdDg3dXR6azd1MHdxcjRzc2xsL3V1c2tcIjpcbiAgICBcIlVTS1wiLFxuICBcImZhY3Rvcnk6a3VqaXJhMXI4NXJlcXk2aDBsdTAydnl6MGhuemh2NXdoc25zNTVnZHQ0dzBkN2Z0ODd1dHprN3Uwd3FyNHNzbGw6dXVza1wiOlxuICAgIFwiVVNLXCIsXG4gIFwiZmFjdG9yeS9rdWppcmExcWswMGg1YXR1dHBzdjkwMHgyMDJweHg0Mm5wanI5dGhnNThkbnFwYTcyZjJwN20ybHVhc2U0NDRhNy91dXNrXCI6XG4gICAgXCJVU0tcIixcbiAgXCJmYWN0b3J5Omt1amlyYTFxazAwaDVhdHV0cHN2OTAweDIwMnB4eDQybnBqcjl0aGc1OGRucXBhNzJmMnA3bTJsdWFzZTQ0NGE3OnV1c2tcIjpcbiAgICBcIlVTS1wiLFxuICBcImZhY3Rvcnkva3VqaXJhMXNjNmEwMzQ3Y2M1cTNrODkwamowcGYzeWx4MnMzOHJoNHN6YTR0L3VyZnV6blwiOiBcInJGVVpOXCIsXG4gIFwiZmFjdG9yeS9rdWppcmExdjNoY2VqY2VyZjBkOWVtOWRzOHJweXlxNjh2eDN1OXU0azBmdnc0ZTloYWNkeThubjZwcXg0dXJjdy91cmNwdFwiOlxuICAgIFwiY01OVEFcIixcblxuICBcImZhY3Rvcnkva3VqaXJhMXF6dTN1cDUwYXV4aHF5emZxNTZ6bnVqOG4zOHEycmE3ZGFhZjllZjd2ZzhndTY2amg0ZnFkMndkMnkvdXJjcHRcIjpcbiAgICBcInFjTU5UQVwiLFxuXG4gIFwiZmFjdG9yeS9rdWppcmExbTk2dWNzZnB0Mnl5NzJ3MDl6MnJ4amRqMzh5NXFkOGxxeDVqdGdnbmVqbWR1YTJ5bnBuc3h5dmpleC91cmNwdFwiOlxuICAgIFwicWNLVUpJXCIsXG5cbiAgXCJmYWN0b3J5L2t1amlyYTE0ZWw5eGQ1ZTY4OHM3Zzh5cmEycmpqdjI2ZG1qYXRmcmtncnBreWx5NWhoOWhzd24ybmdzM3A5dmFnL3VyY3B0XCI6XG4gICAgXCJxY01OVEFcIixcblxuICAvLyBPbGQgdGVzdG5ldCBxY0tVSklcbiAgXCJmYWN0b3J5L2t1amlyYTFqYWY4dHNndmNocWZteWN2OHdtbmN2NTJ0NGZjdjNlaHVoNTdnc2Q5eWNjZTVld244N2tzbndobGtyL3VyY3B0XCI6XG4gICAgXCJxY0tVSklcIixcblxuICBcImZhY3Rvcnkva3VqaXJhMWVxcXIzYWQwbGg4NHVhNG01cXUybjRqano2aDczZDY0amZ3dm5nMHcyazBsbmhsdHQ0anFkZXg0ejkvdXJjcHRcIjpcbiAgICBcInFjS1VKSVwiLFxuXG4gIFwiZmFjdG9yeS9rdWppcmExbDA0Z2VkOThjN2E3czl0bGx1NjJsZDA5enR5bHdmNDQycWdtNHRoZmdtYWRydm5nZXVtc3o0enJoMi91cmNwdFwiOlxuICAgIFwicWNGVVpOXCIsXG4gIFwiZmFjdG9yeS9taWdhbG9vMWVxbnRubDZ0emNqOWg4NnBzZzR5NGg2aGgwNWcyaDluajhlMDlsL3VyYWNcIjogXCJSQUNcIixcbiAgXCJmYWN0b3J5L29zbW8xbWxuZzdwejRwbnl4dHBxMGFrZndhbGwzN2N6eWs5bHVrYXVjc3JuMzBhbWVwbGhoc2h0cWR2Zm01Yy91bHZuXCI6XG4gICAgXCJMVk5cIixcbiAgXCJmYWN0b3J5L29zbW8xejBxcnE2MDVzamdjcXB5bGZsNGFhNnM5MHg3MzhqN201OHd5YXR0MHRkemZsZzJoYTI2cTY3azc0My93YnRjXCI6XG4gICAgXCJ3QlRDXCIsXG4gIGdyYXZpdHkweDQ1ODA0ODgwRGUyMjkxM2RBRkUwOWY0OTgwODQ4RUNFNkVjYkFmNzg6IFwiUEFYR1wiLFxuICBncmF2aXR5MHhmQjVjNjgxNWNBM0FDNzJDZTlGNTAwNjg2OUFFNjdmMThiRjc3MDA2OiBcIlBTVEFLRVwiLFxuICBncmF2aXR5MHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOiBcIndFVEhcIixcbiAgZ3Jhdml0eTB4QTBiODY5OTFjNjIxOGIzNmMxZDE5RDRhMmU5RWIwY0UzNjA2ZUI0ODogXCJVU0RDXCIsXG4gIGdyYXZpdHkweGRBQzE3Rjk1OEQyZWU1MjNhMjIwNjIwNjk5NDU5N0MxM0Q4MzFlYzc6IFwiVVNEVFwiLFxuICBncmF2aXR5MHgyMjYwRkFDNUU1NTQyYTc3M0FhNDRmQkNmZURmN0MxOTNiYzJDNTk5OiBcIndCVENcIixcbiAgZ3Jhdml0eTB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjogXCJEQUlcIixcbiAgZ3Jhdml0eTB4NzdFMDZjOWVDQ2YyRTc5N2ZkNDYyQTkyQjZENzY0MkVGODViMEE0NDogXCJ3VEFPXCIsXG4gIGdyYXZpdHkweGEwYjkzQjllOTBhQjg4N0U1M0Y5RkI4NzI4YzAwOTc0NmU5ODlCNTM6IFwiVFNUXCIsXG4gIGdyYXZpdHkweGUyOGIzQjMyQjZjMzQ1QTM0RmY2NDY3NDYwNjEyNERkNUFjZWNhMzA6IFwiSU5KXCIsXG4gIGdyYXZpdHkweEI1MDcyMUJDZjhkNjY0YzMwNDEyQ2ZiYzZjZjdhMTUxNDUyMzRhZDE6IFwiQVJCXCIsXG4gIGdyYXZpdHkweDRjMTEyNDk4MTRmMTFiOTM0NjgwODE3OUNmMDZlNzFhYzMyOGMxYjU6IFwiT1JBSVwiLFxuICBncmF2aXR5MHg5MzU4MTk5MWY2OERCYUUxZUExMDUyMzNiNjdmN0ZBMEQ2QkRlRTdiOiBcIndFVk1PU1wiLFxuICBncmF2aXR5MHgzNWE1MzJkMzc2RkZkOWE3MDVkMEJiMzE5NTMyODM3MzM3QTM5OEU3OiBcIndET0dFXCIsXG4gIGdyYXZpdHkweDA3YmFDMzU4NDZlNWVENTAyYUE5MUFkRjZBOWU3YUEyMTBGMkRjYkU6IFwiZXJvd2FuXCIsXG4gIGdyYXZpdHkweGQyODc3NzAyNjc1ZTZjRWI5NzViNEExZEZmOWZiN0JBRjRDOTFlYTk6IFwid0xVTkNcIixcbiAgZ3Jhdml0eTB4OTVhRDYxYjBhMTUwZDc5MjE5ZENGNjRFMUU2Q2MwMWYwQjY0QzRjRTogXCJTSElCXCIsXG5cbiAgLy8gMThcbiAgZ3Jhdml0eTB4QWE2RTgxMjc4MzFjOURFNDVhZTU2YkIxYjBkNEQ0RGE2ZTU2NjVCRDogXCJFVEgyeC1GTElcIixcbiAgLy8gNlxuICBncmF2aXR5MHg0NDAxNzU5OGYyQUYxYkQ3MzNGOUQ4N2I1MDE3YjRFN2MxQjI4RERFOiBcInN0a0FUT01cIixcbiAgLy8gMThcbiAgZ3Jhdml0eTB4QkExMUQwMGM1Zjc0MjU1ZjU2YTVFMzY2RjRGNzdmNUExODZkN2Y1NTogXCJCQU5EXCIsXG4gIC8vIDZcbiAgZ3Jhdml0eTB4RWE1QTgyQjM1MjQ0ZDllNUU0ODc4MUYwMGIxMUIxNEU2MjdEMjk1MTogXCJBVE9NXCIsXG4gIC8vIDE4XG4gIGdyYXZpdHkweDgzRjIwRjQ0OTc1RDAzYjFiMDllNjQ4MDlCNzU3YzQ3Zjk0MkJFZUE6IFwic0RBSVwiLFxuICAvLyAxOFxuICBncmF2aXR5MHg2OTgyNTA4MTQ1NDU0Q2UzMjVkRGJFNDdhMjVkNGVjM2QyMzExOTMzOiBcIlBFUEVcIixcbiAgLy8gMThcbiAgZ3Jhdml0eTB4ODE3YmJEYkMzZThBMTIwNGYzNjkxZDE0YkI0NDk5Mjg0MWUzZEIzNTogXCJDVURPU1wiLFxuICAvLyAxOFxuICBncmF2aXR5MHhkMjNFZDhjQTM1MENFMjYzMUY3RWNEQzVFNmJmODBEMEExRGVCQjdCOiBcIlBMUVwiLFxuICAvLyAxOFxuICBncmF2aXR5MHhkM0U0QmE1NjkwNDU1NDZEMDlDRjAyMUVDQzVkRmU0MmIxZDdmNkU0OiBcIk1OV1wiLFxuICAvLyAxOFxuICBncmF2aXR5MHg1MTQ5MTA3NzFBRjlDYTY1NmFmODQwZGZmODNFODI2NEVjRjk4NkNBOiBcIkxJTktcIixcblxuICBcImVyYzIwLzB4QUU2RDMzMzQ5ODlhMjJBNjUyMjg3MzI0NDY3MzE0Mzg2NzI0MThGMlwiOiBcIkNOVE9cIixcbiAgXCJmcmF4LXdlaVwiOiBcIkZSQVhcIixcbiAgaW5qOiBcIklOSlwiLFxuICBcImRhaS13ZWlcIjogXCJEQUlcIixcbiAgXCJ3YnRjLXNhdG9zaGlcIjogXCJ3QlRDXCIsXG4gIFwid2JuYi13ZWlcIjogXCJ3Qk5CXCIsXG4gIFwid2Z0bS13ZWlcIjogXCJ3RlRNXCIsXG4gIFwidW5pLXdlaVwiOiBcIlVOSVwiLFxuICBcIndtYXRpYy13ZWlcIjogXCJ3TUFUSUNcIixcbiAgXCJ3Z2xtci13ZWlcIjogXCJ3R0xNUlwiLFxuICBcImJ1c2Qtd2VpXCI6IFwiQlVTRFwiLFxuICBuY2hlcTogXCJDSEVRXCIsXG4gIFwiY3cyMDpqdW5vMXFzcmVyY3FlZ3ZzNHllMHlxZzkza252NzN5ZTVkYzNwcnF3ZDZqY2RjdWo4Z2dwNncwdXM2NmRldXBcIjpcbiAgICBcIkxPT1BcIixcbiAgXCJjdzIwOmp1bm8xY2x0Z204djg0Mmd1NTRzcm1lamV3Z2huZDZ1cWEyNmx6a3BhNjM1d3pyYTltOXh1dWRrcWEyZ3RjelwiOlxuICAgIFwiRlVSWS5sZWdhY3lcIixcbiAgXCJjdzIwOmp1bm8xaG5mdHlzNjRlY3RqZnlubTZxams5bXk4amQzZjZsOWRxOXV0Y2QzZHk4ZWh3cnN4OXE0cTduOXV4dFwiOlxuICAgIFwiQVFVQVwiLFxuICBcImN3MjA6anVubzE2OGN0bXB5cHBrOTBkMzRwM2pqeTY1OHpmNWE1bDN3OHdrMzV3aHQ2Y2NxajRtcjB5djhzNGo1YXdyXCI6XG4gICAgXCJORVRBXCIsXG4gIFwiY3cyMDpqdW5vMXI0cHp3OGY5ejBzeXBjdDVsOWo5MDZkNDd6OTk4dWx3dmh2cWU1eGR3Z3k4d2Y4NDU4M3N4d2gwcGFcIjpcbiAgICBcIlJBQy5sZWdhY3lcIixcbiAgXCJjdzIwOmp1bm8xajBhOXltZ25nYXNmbjNsNW1lOHFwZDUzbDV6bG05d3VyZmRrN3I2NXM1bWc2dGt4YWwzcXBnZjVzZVwiOlxuICAgIFwiR0xUT1wiLFxuICBcImN3MjA6dGVycmExZWNnYXp5ZDB3YWFqM2c3bDljbXk1Z3VsaHhrcHMyZ214dTlnaGR1Y3Z1eXBqcTY4bXEyczVsdnNjdFwiOlxuICAgIFwiYW1wTFVOQVwiLFxuICBcImN3MjA6dGVycmExeHprZWw5NmU1ZTh2Zm1xdzd2YWx6ZHp6djlocWFzZnlzbGNsdm5tdnhkZWp2cGRhM3h3c3NreHp1c1wiOlxuICAgIFwid2hMT0NBTFwiLFxuICBcImN3MjA6dGVycmExbnN1cXNrNmtoNTh1bGN6YXR3ZXY4N3R0cTJ6NnIzcHVzdWxnOXIyNG1majJmdnR6ZDR1cTNleG4yNlwiOlxuICAgIFwiQVNUUk9cIixcblxuICBcImN3MjA6dGVycmExeDYybWpubWU0eTByZG5hZzNyOHJmZ2p1dXRzcWxra3l1aDRuZGdleDB3bDN3dWUyNXVrc2F1MzlxOFwiOlxuICAgIFwieEFTVFJPXCIsXG4gIFwiY3cyMDpzZWNyZXQxcWZxbDM1N2FtbjQ0OGR1ZjVndnA5Z3I0OHN4eDl0c25odXB1M2RcIjogXCJTSEQubGVnYWN5XCIsXG4gIFwiY3cyMDp0ZXJyYTE3Z2NrNjI2dmdheDlqcGU2dXRtN2RoeDR2ZHphd2ZrdDBqaHJ1MDNsN2EzZHp1OTh3ZWRzZmFkNHN6XCI6XG4gICAgXCJkVVNUXCIsXG4gIFwiY3cyMDp0ZXJyYTFseHg0MHMyOXF2a3Jjajhmc2EzeXp5ZWh5N3c1MHVtZHZ2bmxzMnI4MzByeXM2bHUyem5zNjNlZWx2XCI6XG4gICAgXCJST0FSXCIsXG4gIFwiY3cyMDp0ZXJyYTF4cDlocmh0aHpkZG5sN2o1ZHU4M2dxcXI0d21kam01dDBndXpnOWpwNmp3cnRwdWt3Zmpzamd5NGYzXCI6XG4gICAgXCJTQVlWRVwiLFxuICBcImN3MjA6dGVycmExbGFsdmswcjZuaHJ1ZWw3ZnZ6ZHBwazN0dXAzbWg1ajRkNGVhZHJxemZobGU0enJmNTJhczU4aGg5dFwiOlxuICAgIFwiQ1VCXCIsXG4gIFwiY3cyMDp0ZXJyYTFnd3J6OXh6aHFzeWd5cjVhc3JneXEzcHUwZXdwbjAwbXYyemVudTg2eXZ4Mm5sd3BlOGxxcHB2NTg0XCI6XG4gICAgXCJCTFVFXCIsXG4gIFwiY3cyMDp0ZXJyYTE3YWo0dHk0c3o0eWhnbTA4bmE4ZHJjMHYwM3YyandyM3dheGNxcndoYWpqNzI5emhsN3pxbnBjMG1sXCI6XG4gICAgXCJib25lTFVOQVwiLFxuICBcImN3MjA6dGVycmExc3hlOHUyaGpjemxla3dma2NxMHJzMjhlZ3QzOHBnM3dxemZ4NHpjcmVzZTRmbnZ6enVwc2s5Z2prcVwiOlxuICAgIFwiQk1PU1wiLFxuXG4gIFwiY3cyMDpzZWNyZXQxczA5eDJ4dmZkMmxwMnNrZ3ptMjl3Mnh0ZW5hN3M4ZnE5OHY4NTJcIjogXCJBTUJFUlwiLFxuICBcImN3MjA6c2VjcmV0MWs2dTBjeTRmZWVwbTZwZWhuejgwNHptd2FrdXdkYXBtNjl0dWM0XCI6IFwic3RrZC1TQ1JUXCIsXG4gIFwiY3cyMDpzZWNyZXQxeXhjZXh5bHd5eGxxNTh1bWhnc2pnc3RnY2cyYTB5dGZ5NGQ5bHRcIjogXCJCVVRUXCIsXG4gIFwiY3cyMDpzZWNyZXQxNTN3dTYwNXZ2cDkzNHhoZDRrOWR0ZDY0MHpzZXA1amtlc3N0ZG1cIjogXCJTSERcIixcbiAgXCJjdzIwOnNlY3JldDFmbDQ0OW11azV5cThkbGFkN2EyMm5qZTRwNWQycG5zZ3ltaGpmZFwiOiBcIlNJTEtcIixcblxuICBcImN3MjA6dGVycmExeGZzZGdjZW1xd3hwNGhobnlrNHJsZTZ3cjIyc3NlcTdqMDdkbm5cIjogXCJLVUpJQ1wiLFxuICBcImN3MjA6dGVycmExODh3MjZ0OTV0ZjRkejc3cmFmdG1lOHA3NXJnZ2F0eGp4ZmVrbndcIjogXCJTS1VKSUNcIixcblxuICB0ZXJyYTE4enFjbmw4M3o5OHRmNmxseTM3Z2dobTcyMzhrN2xoNzl1NHo5YTogXCJiQVRPTVwiLFxuICB0ZXJyYTFkemh6dWt5ZXp2MGV0ejIydWQ5NDB6N2FkeXY3eGdjamthaHV1bjogXCJiRVRIXCIsXG4gIHRlcnJhMWtjODdtdTQ2MGZ3a3F0ZTI5cnF1aDRoYzIwbTU0Znh3dHN4N2dwOiBcImJMVU5BXCIsXG4gIHRlcnJhMWMwMHZza2h5emR2MHo2M3oydHlldHp4MnFtYTY3bjJ6M3Z6eW4wOiBcImJTT0xcIixcbiAgdGVycmExejNlMmU0anBrNG4weHp6d2xrZ2NmdmM5NXBjNWxkcTB4Y255NTg6IFwic0FWQVhcIixcbiAgXCJmYWN0b3J5L21pZ2Fsb28xNDM2a3hzMHcyZXM2eGxxcHA5cmQzNWUzZDBjam53NHN2OGozYTc0ODNzZ2tzMjlqcXdnc2hxZGt5NC9hbXBXSEFMRVwiOlxuICAgIFwiYW1wV0hBTEVcIixcbiAgXCJlcmMyMC8weDY1NWVjQjU3NDMyQ0MxMzcwZjY1ZTVkYzIzMDk1ODhiNzFiNDczQTlcIjogXCJORU9LXCIsXG4gIFwiZmFjdG9yeS9uZXV0cm9uMXA4ZDg5d3Z4eWpjbmF3bWd3NzJrbGtucjNsZzlnd3dsNnlweGRhL25ld3RcIjogXCJORVdUXCIsXG4gIFwiZXJjMjAvdGV0aGVyL3VzZHRcIjogXCJVU0RUXCIsXG5cbiAgLi4ud29ybWhvbGVBc3NldHMucmVkdWNlKChhLCB2KSA9PiAoeyAuLi5hLCBbdi5iYXNlXTogdi5zeW1ib2wgfSksIHt9KSxcbn07XG5cbmNvbnN0IHRlcnJhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB1YXVkOiBcIkFVVFwiLFxuICB1Y2FkOiBcIkNBVFwiLFxuICB1Y2hmOiBcIkNIVFwiLFxuICB1Y255OiBcIkNOVFwiLFxuICB1ZGtrOiBcIkRLVFwiLFxuICB1ZXVyOiBcIkVVVFwiLFxuICB1Z2JwOiBcIkdCVFwiLFxuICB1aGtkOiBcIkhLVFwiLFxuICB1aWRyOiBcIklEVFwiLFxuICB1aW5yOiBcIklOVFwiLFxuICB1anB5OiBcIkpQVFwiLFxuICB1bW50OiBcIk1OVFwiLFxuICB1bXlyOiBcIk1ZVFwiLFxuICB1bm9rOiBcIk5PVFwiLFxuICB1cGhwOiBcIlBIVFwiLFxuICB1c2RyOiBcIlNEVFwiLFxuICB1c2VrOiBcIlNFVFwiLFxuICB1c2dkOiBcIlNHVFwiLFxuICB1dGhiOiBcIlRIVFwiLFxuICB1dHdkOiBcIlRXVFwiLFxuICB1dXNkOiBcIlVTVFwiLFxufTtcblxuY29uc3QgYmFzZURlbm9tVG9TeW1ib2wgPSAoZGVub206IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHJhdyA9IGxhYmVsc1tkZW5vbV07XG4gIGlmIChyYXcpIHJldHVybiByYXc7XG5cbiAgY29uc3QgZmFjdG9yeUFkZHJlc3MgPSBkZW5vbS5zcGxpdChcIi9cIilbMV07XG4gIGNvbnN0IGdob3N0ID1cbiAgICBmYWN0b3J5QWRkcmVzcyAmJiBnaG9zdFZhdWx0cy5maW5kKChhKSA9PiBhLmFkZHJlc3MgPT09IGZhY3RvcnlBZGRyZXNzKTtcbiAgaWYgKGdob3N0KSByZXR1cm4gZGVub20uZW5kc1dpdGgoXCIvdWRlYnRcIikgPyBgZGVidGAgOiBgeGA7XG5cbiAgY29uc3QgYmFzZURlbm9tID0gZGVub20uc3RhcnRzV2l0aChcImliYy9cIilcbiAgICA/IChpYmMgYXMgUmVjb3JkPHN0cmluZywgYW55PilbZGVub21dPy5iYXNlX2Rlbm9tXG4gICAgOiBkZW5vbS5zdGFydHNXaXRoKFwiZmFjdG9yeS9cIilcbiAgICA/IGRlbm9tLnNwbGl0KFwiL1wiKVsyXVxuICAgIDogZGVub20uc3RhcnRzV2l0aChcImZhY3Rvcnk6XCIpXG4gICAgPyBkZW5vbS5zcGxpdChcIjpcIilbMl1cbiAgICA6IGRlbm9tO1xuXG4gIGlmICghYmFzZURlbm9tKSByZXR1cm4gXCJVbmtub3duXCI7XG5cbiAgY29uc3QgbGFiZWwgPSBsYWJlbHNbYmFzZURlbm9tXTtcblxuICBpZiAobGFiZWwpIHJldHVybiBsYWJlbDtcblxuICBjb25zdCB0ID0gdGVycmFbZGVub21dO1xuICBpZiAodCkgcmV0dXJuIHQ7XG5cbiAgLy8gU3RhZmlcbiAgcmV0dXJuIGJhc2VEZW5vbS5zdGFydHNXaXRoKFwidXJcIilcbiAgICA/IFwiclwiICsgYmFzZURlbm9tLnJlcGxhY2UoL151ci8sIFwiXCIpLnRvVXBwZXJDYXNlKClcbiAgICA6IGJhc2VEZW5vbS5zdGFydHNXaXRoKFwidVwiKVxuICAgID8gYmFzZURlbm9tLnJlcGxhY2UoL151LywgXCJcIikudG9VcHBlckNhc2UoKVxuICAgIDogLy8gUGVyc2lzdGVuY2VcbiAgICBiYXNlRGVub20uc3RhcnRzV2l0aChcInN0ay9cIilcbiAgICA/IGBzdGske2Jhc2VEZW5vbVRvU3ltYm9sKGJhc2VEZW5vbS5yZXBsYWNlKC9ec3RrXFwvLywgXCJcIikpfWBcbiAgICA6IC8vIFN0cmlkZVxuICAgIGJhc2VEZW5vbS5zdGFydHNXaXRoKFwic3R1XCIpXG4gICAgPyBgc3Qke2Jhc2VEZW5vbVRvU3ltYm9sKGJhc2VEZW5vbS5yZXBsYWNlKC9ec3QvLCBcIlwiKSl9YFxuICAgIDogYmFzZURlbm9tO1xufTtcblxuY29uc3QgYXZhbGFuY2hlID0ge1xuICAvLyBNYWlubmV0XG4gIFwiMHgyYjJjODFlMDhmMWFmODgzNWE3OGJiMmE5MGFlOTI0YWNlMGVhNGJlXCI6IFwic0FWQVhcIixcbn07XG5cbnR5cGUgSUNTMjAgPSB7XG4gIGNvbnRyYWN0OiBzdHJpbmc7XG4gIHJvdXRlcjogc3RyaW5nO1xuICBjaGFubmVsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBpY3MyMDogUmVjb3JkPHN0cmluZywgSUNTMjA+ID0ge1xuICBcImN3MjA6anVubzFxc3JlcmNxZWd2czR5ZTB5cWc5M2tudjczeWU1ZGMzcHJxd2Q2amNkY3VqOGdncDZ3MHVzNjZkZXVwXCI6IHtcbiAgICBjb250cmFjdDogXCJqdW5vMXFzcmVyY3FlZ3ZzNHllMHlxZzkza252NzN5ZTVkYzNwcnF3ZDZqY2RjdWo4Z2dwNncwdXM2NmRldXBcIixcbiAgICByb3V0ZXI6IFwianVubzFsa3Y3MndydWs2bTM5YTJqNHBzMDM2aHp4eWhqY2N3bmNnZnp6Y2FxeHV3bmRnNXgwZ2hxYThtcmhnXCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTk3XCIsXG4gIH0sXG5cbiAgXCJjdzIwOmp1bm8xcjRwenc4Zjl6MHN5cGN0NWw5ajkwNmQ0N3o5OTh1bHd2aHZxZTV4ZHdneTh3Zjg0NTgzc3h3aDBwYVwiOiB7XG4gICAgY29udHJhY3Q6IFwianVubzFyNHB6dzhmOXowc3lwY3Q1bDlqOTA2ZDQ3ejk5OHVsd3ZodnFlNXhkd2d5OHdmODQ1ODNzeHdoMHBhXCIsXG4gICAgcm91dGVyOiBcImp1bm8xbGt2NzJ3cnVrNm0zOWEyajRwczAzNmh6eHloamNjd25jZ2Z6emNhcXh1d25kZzV4MGdocWE4bXJoZ1wiLFxuICAgIGNoYW5uZWw6IFwiY2hhbm5lbC05N1wiLFxuICB9LFxuXG4gIFwiY3cyMDpqdW5vMWNsdGdtOHY4NDJndTU0c3JtZWpld2dobmQ2dXFhMjZsemtwYTYzNXd6cmE5bTl4dXVka3FhMmd0Y3pcIjoge1xuICAgIGNvbnRyYWN0OiBcImp1bm8xY2x0Z204djg0Mmd1NTRzcm1lamV3Z2huZDZ1cWEyNmx6a3BhNjM1d3pyYTltOXh1dWRrcWEyZ3RjelwiLFxuICAgIHJvdXRlcjogXCJqdW5vMWxrdjcyd3J1azZtMzlhMmo0cHMwMzZoenh5aGpjY3duY2dmenpjYXF4dXduZGc1eDBnaHFhOG1yaGdcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtOTdcIixcbiAgfSxcbiAgXCJjdzIwOmp1bm8xaG5mdHlzNjRlY3RqZnlubTZxams5bXk4amQzZjZsOWRxOXV0Y2QzZHk4ZWh3cnN4OXE0cTduOXV4dFwiOiB7XG4gICAgY29udHJhY3Q6IFwianVubzFobmZ0eXM2NGVjdGpmeW5tNnFqazlteThqZDNmNmw5ZHE5dXRjZDNkeThlaHdyc3g5cTRxN245dXh0XCIsXG4gICAgcm91dGVyOiBcImp1bm8xbGt2NzJ3cnVrNm0zOWEyajRwczAzNmh6eHloamNjd25jZ2Z6emNhcXh1d25kZzV4MGdocWE4bXJoZ1wiLFxuICAgIGNoYW5uZWw6IFwiY2hhbm5lbC05N1wiLFxuICB9LFxuICBcImN3MjA6anVubzFqMGE5eW1nbmdhc2ZuM2w1bWU4cXBkNTNsNXpsbTl3dXJmZGs3cjY1czVtZzZ0a3hhbDNxcGdmNXNlXCI6IHtcbiAgICBjb250cmFjdDogXCJqdW5vMWowYTl5bWduZ2FzZm4zbDVtZThxcGQ1M2w1emxtOXd1cmZkazdyNjVzNW1nNnRreGFsM3FwZ2Y1c2VcIixcbiAgICByb3V0ZXI6IFwianVubzFsa3Y3MndydWs2bTM5YTJqNHBzMDM2aHp4eWhqY2N3bmNnZnp6Y2FxeHV3bmRnNXgwZ2hxYThtcmhnXCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTk3XCIsXG4gIH0sXG4gIC8vIHdoTE9DQUxcbiAgXCJjdzIwOnRlcnJhMXh6a2VsOTZlNWU4dmZtcXc3dmFsemR6enY5aHFhc2Z5c2xjbHZubXZ4ZGVqdnBkYTN4d3Nza3h6dXNcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTF4emtlbDk2ZTVlOHZmbXF3N3ZhbHpkenp2OWhxYXNmeXNsY2x2bm12eGRlanZwZGEzeHdzc2t4enVzXCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWQ5MHA1bGFjZnhucWdqeGp1cHUyMzRseG54eWV1OGZkZWVmNGQwZTBucXkzcDMwcjdnc3M0bXluOXhcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMzRcIixcbiAgfSxcbiAgLy8gQVNUUk9cbiAgXCJjdzIwOnRlcnJhMW5zdXFzazZraDU4dWxjemF0d2V2ODd0dHEyejZyM3B1c3VsZzlyMjRtZmoyZnZ0emQ0dXEzZXhuMjZcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTFuc3Vxc2s2a2g1OHVsY3phdHdldjg3dHRxMno2cjNwdXN1bGc5cjI0bWZqMmZ2dHpkNHVxM2V4bjI2XCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWQ5MHA1bGFjZnhucWdqeGp1cHUyMzRseG54eWV1OGZkZWVmNGQwZTBucXkzcDMwcjdnc3M0bXluOXhcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMzRcIixcbiAgfSxcbiAgLy8geEFTVFJPXG4gIFwiY3cyMDp0ZXJyYTF4NjJtam5tZTR5MHJkbmFnM3I4cmZnanV1dHNxbGtreXVoNG5kZ2V4MHdsM3d1ZTI1dWtzYXUzOXE4XCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExeDYybWpubWU0eTByZG5hZzNyOHJmZ2p1dXRzcWxra3l1aDRuZGdleDB3bDN3dWUyNXVrc2F1MzlxOFwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFkOTBwNWxhY2Z4bnFnanhqdXB1MjM0bHhueHlldThmZGVlZjRkMGUwbnF5M3AzMHI3Z3NzNG15bjl4XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTM0XCIsXG4gIH0sXG4gIC8vIGFtcExVTkFcbiAgXCJjdzIwOnRlcnJhMWVjZ2F6eWQwd2FhajNnN2w5Y215NWd1bGh4a3BzMmdteHU5Z2hkdWN2dXlwanE2OG1xMnM1bHZzY3RcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTFlY2dhenlkMHdhYWozZzdsOWNteTVndWxoeGtwczJnbXh1OWdoZHVjdnV5cGpxNjhtcTJzNWx2c2N0XCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWUwbXJ6eTgwNzdkcnV1dTQydnMwaHU3dWdndWFkZTBjajY1ZGd0YXV5YXc0Z3NsNGt2MHF0ZGYyYXVcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMjhcIixcbiAgfSxcblxuICAvLyBST0FSXG4gIFwiY3cyMDp0ZXJyYTFseHg0MHMyOXF2a3Jjajhmc2EzeXp5ZWh5N3c1MHVtZHZ2bmxzMnI4MzByeXM2bHUyem5zNjNlZWx2XCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExbHh4NDBzMjlxdmtyY2o4ZnNhM3l6eWVoeTd3NTB1bWR2dm5sczJyODMwcnlzNmx1MnpuczYzZWVsdlwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFlMG1yenk4MDc3ZHJ1dXU0MnZzMGh1N3VnZ3VhZGUwY2o2NWRndGF1eWF3NGdzbDRrdjBxdGRmMmF1XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTI4XCIsXG4gIH0sXG5cbiAgLy8gU0FZVkVcbiAgXCJjdzIwOnRlcnJhMXhwOWhyaHRoemRkbmw3ajVkdTgzZ3FxcjR3bWRqbTV0MGd1emc5anA2andydHB1a3dmanNqZ3k0ZjNcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTF4cDlocmh0aHpkZG5sN2o1ZHU4M2dxcXI0d21kam01dDBndXpnOWpwNmp3cnRwdWt3Zmpzamd5NGYzXCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWUwbXJ6eTgwNzdkcnV1dTQydnMwaHU3dWdndWFkZTBjajY1ZGd0YXV5YXc0Z3NsNGt2MHF0ZGYyYXVcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMjhcIixcbiAgfSxcblxuICAvLyBDVUJcbiAgXCJjdzIwOnRlcnJhMWxhbHZrMHI2bmhydWVsN2Z2emRwcGszdHVwM21oNWo0ZDRlYWRycXpmaGxlNHpyZjUyYXM1OGhoOXRcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTFsYWx2azByNm5ocnVlbDdmdnpkcHBrM3R1cDNtaDVqNGQ0ZWFkcnF6ZmhsZTR6cmY1MmFzNThoaDl0XCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWUwbXJ6eTgwNzdkcnV1dTQydnMwaHU3dWdndWFkZTBjajY1ZGd0YXV5YXc0Z3NsNGt2MHF0ZGYyYXVcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMjhcIixcbiAgfSxcblxuICAvLyBCTFVFXG4gIFwiY3cyMDp0ZXJyYTFnd3J6OXh6aHFzeWd5cjVhc3JneXEzcHUwZXdwbjAwbXYyemVudTg2eXZ4Mm5sd3BlOGxxcHB2NTg0XCI6IHtcbiAgICBjb250cmFjdDpcbiAgICAgIFwidGVycmExZ3dyejl4emhxc3lneXI1YXNyZ3lxM3B1MGV3cG4wMG12MnplbnU4Nnl2eDJubHdwZThscXBwdjU4NFwiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFlMG1yenk4MDc3ZHJ1dXU0MnZzMGh1N3VnZ3VhZGUwY2o2NWRndGF1eWF3NGdzbDRrdjBxdGRmMmF1XCIsXG4gICAgY2hhbm5lbDogXCJjaGFubmVsLTI4XCIsXG4gIH0sXG5cbiAgLy8gYkxVTkFcbiAgXCJjdzIwOnRlcnJhMTdhajR0eTRzejR5aGdtMDhuYThkcmMwdjAzdjJqd3Izd2F4Y3Fyd2hhamo3Mjl6aGw3enFucGMwbWxcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTE3YWo0dHk0c3o0eWhnbTA4bmE4ZHJjMHYwM3YyandyM3dheGNxcndoYWpqNzI5emhsN3pxbnBjMG1sXCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWUwbXJ6eTgwNzdkcnV1dTQydnMwaHU3dWdndWFkZTBjajY1ZGd0YXV5YXc0Z3NsNGt2MHF0ZGYyYXVcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMjhcIixcbiAgfSxcblxuICAvLyBTSERcbiAgLy8gXCJjdzIwOnNlY3JldDFxZnFsMzU3YW1uNDQ4ZHVmNWd2cDlncjQ4c3h4OXRzbmh1cHUzZFwiOiB7XG4gIC8vICAgY29udHJhY3Q6IFwic2VjcmV0MXFmcWwzNTdhbW40NDhkdWY1Z3ZwOWdyNDhzeHg5dHNuaHVwdTNkXCIsXG4gIC8vICAgcm91dGVyOiBcInNlY3JldDF0cW1tczVhd2Z0cHVoYWxjdjVoNW1nNzZmYTB0a2R6NGp2OWV4NFwiLFxuICAvLyAgIGNoYW5uZWw6IFwiY2hhbm5lbC00NlwiLFxuICAvLyB9LFxuXG4gIC8vIGRVU1RcbiAgXCJjdzIwOnRlcnJhMTdnY2s2MjZ2Z2F4OWpwZTZ1dG03ZGh4NHZkemF3Zmt0MGpocnUwM2w3YTNkenU5OHdlZHNmYWQ0c3pcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTE3Z2NrNjI2dmdheDlqcGU2dXRtN2RoeDR2ZHphd2ZrdDBqaHJ1MDNsN2EzZHp1OTh3ZWRzZmFkNHN6XCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWQ5MHA1bGFjZnhucWdqeGp1cHUyMzRseG54eWV1OGZkZWVmNGQwZTBucXkzcDMwcjdnc3M0bXluOXhcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMzRcIixcbiAgfSxcblxuICAvLyBLVUpJQ1xuICBcImN3MjA6dGVycmExeGZzZGdjZW1xd3hwNGhobnlrNHJsZTZ3cjIyc3NlcTdqMDdkbm5cIjoge1xuICAgIGNvbnRyYWN0OiBcInRlcnJhMXhmc2RnY2VtcXd4cDRoaG55azRybGU2d3IyMnNzZXE3ajA3ZG5uXCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWx3ZHZqdGw1bGVjeGN5Zmw3aGMzNjJnY3pxaDAzbXNnY3dsaDc2eGEwZmN1MHVzZjdlanNra2Z1bGtcIixcbiAgICBjaGFubmVsOiBcIlwiLFxuICB9LFxuICAvLyBTS1VKSUNcbiAgXCJjdzIwOnRlcnJhMTg4dzI2dDk1dGY0ZHo3N3JhZnRtZThwNzVyZ2dhdHhqeGZla253XCI6IHtcbiAgICBjb250cmFjdDogXCJ0ZXJyYTE4OHcyNnQ5NXRmNGR6NzdyYWZ0bWU4cDc1cmdnYXR4anhmZWtud1wiLFxuICAgIHJvdXRlcjogXCJ0ZXJyYTFsd2R2anRsNWxlY3hjeWZsN2hjMzYyZ2N6cWgwM21zZ2N3bGg3NnhhMGZjdTB1c2Y3ZWpza2tmdWxrXCIsXG4gICAgY2hhbm5lbDogXCJcIixcbiAgfSxcblxuICAvLyBCaXRtb3NcbiAgXCJjdzIwOnRlcnJhMXN4ZTh1MmhqY3psZWt3ZmtjcTByczI4ZWd0MzhwZzN3cXpmeDR6Y3Jlc2U0Zm52enp1cHNrOWdqa3FcIjoge1xuICAgIGNvbnRyYWN0OlxuICAgICAgXCJ0ZXJyYTFzeGU4dTJoamN6bGVrd2ZrY3EwcnMyOGVndDM4cGczd3F6Zng0emNyZXNlNGZudnp6dXBzazlnamtxXCIsXG4gICAgcm91dGVyOiBcInRlcnJhMWUwbXJ6eTgwNzdkcnV1dTQydnMwaHU3dWdndWFkZTBjajY1ZGd0YXV5YXc0Z3NsNGt2MHF0ZGYyYXVcIixcbiAgICBjaGFubmVsOiBcImNoYW5uZWwtMjhcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjbGFzcyBEZW5vbSB7XG4gIHB1YmxpYyBzeW1ib2w6IHN0cmluZztcbiAgcHVibGljIGRlY2ltYWxzID0gNjtcbiAgcHVibGljIHRyYWNlPzogeyBwYXRoOiBzdHJpbmc7IGJhc2VfZGVub206IHN0cmluZyB9O1xuICBwdWJsaWMgaWNzMjA/OiB7XG4gICAgY29udHJhY3Q6IHN0cmluZztcbiAgICByb3V0ZXI6IHN0cmluZztcbiAgICBjaGFubmVsOiBzdHJpbmc7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlZmVyZW5jZTogc3RyaW5nLCBwdWJsaWMgdW5kZXJseWluZz86IERlbm9tW10pIHtcbiAgICB0aGlzLnN5bWJvbCA9IFwiXCI7XG4gICAgaWYgKHRoaXMucmVmZXJlbmNlLnN0YXJ0c1dpdGgoXCJpYmMvXCIpKSB7XG4gICAgICB0aGlzLnRyYWNlID0gKGliYyBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVt0aGlzLnJlZmVyZW5jZV07XG4gICAgfVxuXG4gICAgdGhpcy5zeW1ib2wgPSBiYXNlRGVub21Ub1N5bWJvbCh0aGlzLnJlZmVyZW5jZSk7XG4gICAgaWYgKHRoaXMudHJhY2U/LmJhc2VfZGVub20uc3RhcnRzV2l0aChcImdhbW1cIikpIHtcbiAgICAgIHRoaXMuc3ltYm9sID0gXCJPc21vc2lzIExQIFwiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVuZGVybHlpbmcpIHtcbiAgICAgIHRoaXMuc3ltYm9sID0gYCR7dGhpcy5zeW1ib2x9JHt0aGlzLnVuZGVybHlpbmdcbiAgICAgICAgLm1hcCgoZCkgPT4gZC5zeW1ib2wpXG4gICAgICAgIC5qb2luKFwiLVwiKX1gO1xuICAgIH1cblxuICAgIHRoaXMuZGVjaW1hbHMgPSA2O1xuXG4gICAgLy8gd29ybWhvbGVcbiAgICBpZiAodGhpcy50cmFjZT8ucGF0aCA9PT0gYHRyYW5zZmVyL2NoYW5uZWwtMTEzYCkge1xuICAgICAgdGhpcy5kZWNpbWFscyA9XG4gICAgICAgIHdvcm1ob2xlQXNzZXRzXG4gICAgICAgICAgLmZpbmQoKGEpID0+IGEuYmFzZSA9PT0gdGhpcy50cmFjZT8uYmFzZV9kZW5vbSlcbiAgICAgICAgICA/LmRlbm9tX3VuaXRzLmF0KC0xKT8uZXhwb25lbnQgfHwgdGhpcy5kZWNpbWFscztcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMudHJhY2U/LmJhc2VfZGVub20gfHwgdGhpcy5yZWZlcmVuY2UpLnN0YXJ0c1dpdGgoXCJlcmMyMC9cIikpXG4gICAgICB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKCh0aGlzLnRyYWNlPy5iYXNlX2Rlbm9tIHx8IHRoaXMucmVmZXJlbmNlKS5zdGFydHNXaXRoKFwiZ3Jhdml0eVwiKSlcbiAgICAgIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAoKHRoaXMudHJhY2U/LmJhc2VfZGVub20gfHwgdGhpcy5yZWZlcmVuY2UpLmVuZHNXaXRoKFwid2VpXCIpKVxuICAgICAgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICgodGhpcy50cmFjZT8uYmFzZV9kZW5vbSB8fCB0aGlzLnJlZmVyZW5jZSkuZW5kc1dpdGgoXCItc2F0b3NoaVwiKSlcbiAgICAgIHRoaXMuZGVjaW1hbHMgPSA4O1xuICAgIGlmICh0aGlzLnN5bWJvbC5zdGFydHNXaXRoKFwiUEFYR1wiKSkgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJFVk1PU1wiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIndBVkFYXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwid0VUSFwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkNST1wiKSB0aGlzLmRlY2ltYWxzID0gODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiRUwxXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwibkJUQ1wiKSB0aGlzLmRlY2ltYWxzID0gMTQ7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkJPT1RcIikgdGhpcy5kZWNpbWFscyA9IDA7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkRPVFwiKSB0aGlzLmRlY2ltYWxzID0gMTA7XG4gICAgaWYgKHRoaXMuc3ltYm9sLnN0YXJ0c1dpdGgoXCJTSERcIikpIHRoaXMuZGVjaW1hbHMgPSA4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJTSERcIikgdGhpcy5kZWNpbWFscyA9IDg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIklOSlwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIklOSlwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcInN0SU5KXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiQ05UT1wiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sLnN0YXJ0c1dpdGgoXCJ3VEFPXCIpKSB0aGlzLmRlY2ltYWxzID0gOTtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiQUNSRVwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIlBMUVwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIlNXVEhcIikgdGhpcy5kZWNpbWFscyA9IDg7XG4gICAgaWYgKHRoaXMuc3ltYm9sLnN0YXJ0c1dpdGgoXCJ3QlRDXCIpKSB0aGlzLmRlY2ltYWxzID0gODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiZ1RTVFwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkFSQlwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkZFVFwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkhBTlNcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJPUkFJXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwid0VWTU9TXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwid0RPR0VcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJlcm93YW5cIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJ3TFVOQ1wiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIlNISUJcIikgdGhpcy5kZWNpbWFscyA9IDE4O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJNT0JYXCIpIHRoaXMuZGVjaW1hbHMgPSA5O1xuICAgIGlmICh0aGlzLnN5bWJvbCA9PT0gXCJBUkNIXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiUklPXCIpIHRoaXMuZGVjaW1hbHMgPSAxODtcbiAgICBpZiAodGhpcy5zeW1ib2wgPT09IFwiRFlEWFwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkRZTVwiKSB0aGlzLmRlY2ltYWxzID0gMTg7XG4gICAgaWYgKHRoaXMuc3ltYm9sID09PSBcIkNIRVFcIikgdGhpcy5kZWNpbWFscyA9IDk7XG4gICAgaWYgKFxuICAgICAgdGhpcy51bmRlcmx5aW5nPy5sZW5ndGggPT09IDIgJiZcbiAgICAgIHRoaXMudW5kZXJseWluZ1swXS5kZWNpbWFscyA9PT0gdGhpcy51bmRlcmx5aW5nWzFdLmRlY2ltYWxzXG4gICAgKSB7XG4gICAgICB0aGlzLmRlY2ltYWxzID0gdGhpcy51bmRlcmx5aW5nWzBdLmRlY2ltYWxzO1xuICAgIH1cbiAgICAvLyBPS1ggVVNEVFxuICAgIGlmIChcbiAgICAgIHRoaXMucmVmZXJlbmNlID09PVxuICAgICAgXCJpYmMvRUEyMDQ4NUU5QkVCRjc3QkIzNjM4QTc5RjYwQTBFMUQwQTEyQTYyODk5NzJGMzBFNDc1NTI5QzgwQkY1Qzk2MFwiXG4gICAgKVxuICAgICAgdGhpcy5kZWNpbWFscyA9IDE4O1xuXG4gICAgLy8gSGFuZGxlIGdob3N0IHVuZGVybHlpbmdcbiAgICBpZiAodGhpcy51bmRlcmx5aW5nPy5sZW5ndGggPT09IDEgJiYgdGhpcy5kZWNpbWFscyA9PT0gNilcbiAgICAgIHRoaXMuZGVjaW1hbHMgPSB0aGlzLnVuZGVybHlpbmdbMF0uZGVjaW1hbHM7XG5cbiAgICB0aGlzLmljczIwID0gaWNzMjBbdGhpcy5yZWZlcmVuY2VdO1xuXG4gICAgaWYgKHRoaXMudHJhY2U/LnBhdGggPT09IFwidHJhbnNmZXIvY2hhbm5lbC05XCIgJiYgdGhpcy5zeW1ib2wgIT09IFwiQVhMXCIpIHtcbiAgICAgIHRoaXMuc3ltYm9sICs9IFwiLmF4bFwiO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFjZT8ucGF0aCA9PT0gXCJ0cmFuc2Zlci9jaGFubmVsLTUwXCIgJiYgdGhpcy5zeW1ib2wgIT09IFwiR1JBVlwiKSB7XG4gICAgICB0aGlzLnN5bWJvbCArPSBcIi5ncnZcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJhY2U/LnBhdGggPT09IFwidHJhbnNmZXIvY2hhbm5lbC0xMTNcIikge1xuICAgICAgdGhpcy5zeW1ib2wgKz0gXCIud2hcIjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZyb20oc3RyaW5nOiBzdHJpbmcpOiBEZW5vbSB7XG4gICAgY29uc3QgYm93VW5kZXJseWluZyA9IE9iamVjdC52YWx1ZXMoY29udHJhY3RzKVxuICAgICAgLmZsYXRNYXAoKHgpID0+IHguYm93KVxuICAgICAgLmZpbmQoKHgpID0+IGBmYWN0b3J5LyR7eC5hZGRyZXNzfS91bHBgID09PSBzdHJpbmcpXG4gICAgICA/LmNvbmZpZy5kZW5vbXM/Lm1hcChEZW5vbS5mcm9tKTtcblxuICAgIGxldCBvc21vc2lzVW5kZXJseWluZztcbiAgICBpZiAoc3RyaW5nLnN0YXJ0c1dpdGgoXCJpYmMvXCIpKSB7XG4gICAgICBjb25zdCB0cmFjZSA9IChpYmMgYXMgUmVjb3JkPHN0cmluZywgYW55Pilbc3RyaW5nXTtcbiAgICAgIG9zbW9zaXNVbmRlcmx5aW5nID0gb3Ntb3Npc1xuICAgICAgICAuZmluZCgoeCkgPT4gYGdhbW0vcG9vbC8ke3guaWR9YCA9PT0gdHJhY2U/LmJhc2VfZGVub20pXG4gICAgICAgID8uYXNzZXRzPy5tYXAoKHgpID0+IERlbm9tLmZyb20oeC50b2tlbi5kZW5vbSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvcnlBZGRyZXNzID1cbiAgICAgIHN0cmluZy5zdGFydHNXaXRoKFwiZmFjdG9yeS9cIikgJiYgc3RyaW5nLnNwbGl0KFwiL1wiKVsxXTtcbiAgICBjb25zdCBnaG9zdFZhdWx0ID0gZ2hvc3RWYXVsdHMuZmluZCgoZikgPT4gZi5hZGRyZXNzID09PSBmYWN0b3J5QWRkcmVzcyk7XG5cbiAgICByZXR1cm4gbmV3IERlbm9tKFxuICAgICAgc3RyaW5nLFxuICAgICAgYm93VW5kZXJseWluZyB8fFxuICAgICAgICBvc21vc2lzVW5kZXJseWluZyB8fFxuICAgICAgICAoZ2hvc3RWYXVsdCA/IFtEZW5vbS5mcm9tKGdob3N0VmF1bHQuY29uZmlnLmRlbm9tKV0gOiB1bmRlZmluZWQpXG4gICAgKTtcbiAgfVxuXG4gIC8qXG4gIE1ldGhvZCBmb3IgY3JlYXRpbmcgYSBkZW5vbSB0aGF0IGhhc24ndCB5ZXQgYmVlbiBJQkMnZCBhbmQgc28gZG9lc24ndCBoYXZlIGFuIFxuICBlbnRyeSBpbiB0b2tlbnMuanNvblxuICAqL1xuICBwdWJsaWMgc3RhdGljIGZyb21fcGF0aChwb3J0OiBzdHJpbmcsIGNoYW5uZWw6IHN0cmluZywgZGVub206IHN0cmluZyk6IERlbm9tIHtcbiAgICBsZXQgZCA9IG5ldyBEZW5vbShpYmNEZW5vbShwb3J0LCBjaGFubmVsLCBkZW5vbSkpO1xuICAgIGQudHJhY2UgPSB7IGJhc2VfZGVub206IGRlbm9tLCBwYXRoOiBgJHtwb3J0fS8ke2NoYW5uZWx9YCB9O1xuICAgIHJldHVybiBkO1xuICB9XG5cbiAgcHVibGljIGVxID0gKG90aGVyOiBEZW5vbSk6IGJvb2xlYW4gPT4gdGhpcy5yZWZlcmVuY2UgPT0gb3RoZXIucmVmZXJlbmNlO1xuICBwdWJsaWMgY29tcGFyZSA9IChvdGhlcjogRGVub20pOiBudW1iZXIgPT5cbiAgICB0aGlzLnN5bWJvbFxuICAgICAgLnJlcGxhY2UoL1thLXpdKy8sIFwiXCIpXG4gICAgICAubG9jYWxlQ29tcGFyZShvdGhlci5zeW1ib2wucmVwbGFjZSgvW2Etel0rLywgXCJcIikpO1xuXG4gIHB1YmxpYyBub3JtYWxpemVkUmVmZXJlbmNlID0gKCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHRoaXMucmVmZXJlbmNlLnN0YXJ0c1dpdGgoXCJpYmMvXCIpKSB7XG4gICAgICByZXR1cm4gYGliYy8ke3RoaXMucmVmZXJlbmNlLnJlcGxhY2UoXCJpYmMvXCIsIFwiXCIpLnRvTG9jYWxlVXBwZXJDYXNlKCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9O1xufVxuXG5jb25zdCBpYmNEZW5vbSA9IChwb3J0OiBzdHJpbmcsIGNoYW5uZWw6IHN0cmluZywgZGVub206IHN0cmluZyk6IHN0cmluZyA9PlxuICBcImliYy9cIiArXG4gIEJ1ZmZlci5mcm9tKHNoYTI1NihCdWZmZXIuZnJvbShgJHtwb3J0fS8ke2NoYW5uZWx9LyR7ZGVub219YCkpKVxuICAgIC50b1N0cmluZyhcImhleFwiKVxuICAgIC50b1VwcGVyQ2FzZSgpO1xuXG5leHBvcnQgY29uc3QgVVNLX1RFU1RORVQgPSBEZW5vbS5mcm9tKFxuICBcImZhY3Rvcnkva3VqaXJhMXI4NXJlcXk2aDBsdTAydnl6MGhuemh2NXdoc25zNTVnZHQ0dzBkN2Z0ODd1dHprN3Uwd3FyNHNzbGwvdXVza1wiXG4pO1xuXG5leHBvcnQgY29uc3QgVVNLID0gRGVub20uZnJvbShcbiAgXCJmYWN0b3J5L2t1amlyYTFxazAwaDVhdHV0cHN2OTAweDIwMnB4eDQybnBqcjl0aGc1OGRucXBhNzJmMnA3bTJsdWFzZTQ0NGE3L3V1c2tcIlxuKTtcblxuZXhwb3J0IGNvbnN0IEtVSkkgPSBEZW5vbS5mcm9tKFwidWt1amlcIik7XG5leHBvcnQgY29uc3QgREVNTyA9IERlbm9tLmZyb20oXG4gIFwiZmFjdG9yeS9rdWppcmExbHR2d2c2OXN3M2M1ejk5YzZycjA4aGFsN3Ywa2R6Znh6MDd5ajUvZGVtb1wiXG4pO1xuXG5leHBvcnQgY29uc3QgQVRPTSA9IERlbm9tLmZyb20oXG4gIFwiaWJjLzI3Mzk0RkIwOTJEMkVDQ0Q1NjEyM0M3NEYzNkU0QzFGOTI2MDAxQ0VBREE5Q0E5N0VBNjIyQjI1RjQxRTVFQjJcIlxuKTtcblxuZXhwb3J0IGNvbnN0IGF4bFVTREMgPSBEZW5vbS5mcm9tKFxuICBcImliYy8yOTU1NDhBNzg3ODVBMTAwN0YyMzJERTI4NjE0OUE2RkY1MTJGMTgwQUY1NjU3NzgwRkM4OUMwMDlFMkMzNDhGXCJcbik7XG5cbmV4cG9ydCBjb25zdCBub2JsZVVTREMgPSBEZW5vbS5mcm9tX3BhdGgoXCJ0cmFuc2ZlclwiLCBcImNoYW5uZWwtNjJcIiwgXCJ1dXNkY1wiKTtcblxuZXhwb3J0IGNvbnN0IGF4bFVTRFQgPSBEZW5vbS5mcm9tKFxuICBcImliYy9GMjMzMTY0NUI5NjgzMTE2MTg4RUYzNkZDMDRBODA5QzI4QkQzNkI1NDU1NUU4NzA1QTM3MTQ2RDAxODJGMDQ1XCJcbik7XG5leHBvcnQgY29uc3QgYXhsd0VUSCA9IERlbm9tLmZyb20oXG4gIFwiaWJjLzFCMzg4MDVCMUM3NTM1MkIyODE2OTI4NEY5NkRGNTZCREVCRDlFOEZBQzAwNUJEQ0M4Q0YwMzc4QzgyQUE4RTdcIlxuKTtcbmV4cG9ydCBjb25zdCBheGx3TUFUSUMgPSBEZW5vbS5mcm9tKFxuICBcImliYy9BNjQ0Njc0ODBCQkU0Q0NGQzNDRjdFMjVBRDE0NDZBQTlCREJENEY1QkNCOUVGNjAzOEI4M0Q2OTY0Qzc4NEU2XCJcbik7XG5leHBvcnQgY29uc3QgYXhsd0JOQiA9IERlbm9tLmZyb20oXG4gIFwiaWJjL0RBREIzOTlFNzQyRkNFRTcxODUzRTk4MjI1RDEzRTQ0RTkwMjkyODUyQ0QwMDMzREY1Q0FCQUI5NkY4MEI4MzNcIlxuKTtcbmV4cG9ydCBjb25zdCBheGx3QVZBWCA9IERlbm9tLmZyb20oXG4gIFwiaWJjLzAwNEVCRjA4NUJCRUQxMDI5MzI2RDU2QkU4QTJFNjdDMDhDRUNFNjcwQTk0QUMxOTQ3REY0MTNFRjUxMzBFQjJcIlxuKTtcbmV4cG9ydCBjb25zdCBheGx3R0xNUiA9IERlbm9tLmZyb20oXG4gIFwiaWJjL0M4RDYzNzAzRjU4MDVDRTZBMkIyMDU1NTEzOUNGNkVEOUNERkE4NzAzODk2NDhFQjA4RDY4OEI5NEIwQUUyQzFcIlxuKTtcbmV4cG9ydCBjb25zdCBheGx3RlRNID0gRGVub20uZnJvbShcbiAgXCJpYmMvRTY3QURBMjIwNEE5NDFDRDQ3NDNFNzA3NzFCQTA4RTI0ODg1RTFBREQ2RkQxNDBDRTFGOUUwRkVCQjY4QzZCMlwiXG4pO1xuXG5leHBvcnQgY29uc3QgZmFjdG9yID0gKFtiYXNlLCBxdW90ZV06IFtEZW5vbSwgRGVub21dKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIDEwICoqIChiYXNlLmRlY2ltYWxzIC0gcXVvdGUuZGVjaW1hbHMpO1xufTtcbiJdLCJuYW1lcyI6WyJBVE9NIiwiREVNTyIsIkRlbm9tIiwiS1VKSSIsIlVTSyIsIlVTS19URVNUTkVUIiwiYXhsVVNEQyIsImF4bFVTRFQiLCJheGx3QVZBWCIsImF4bHdCTkIiLCJheGx3RVRIIiwiYXhsd0ZUTSIsImF4bHdHTE1SIiwiYXhsd01BVElDIiwiZmFjdG9yIiwibm9ibGVVU0RDIiwiYXNzZXRzIiwiZ2hvc3RWYXVsdHMiLCJjb250cmFjdHMiLCJNQUlOTkVUIiwiZ2hvc3RWYXVsdCIsIlRFU1RORVQiLCJ3b3JtaG9sZUFzc2V0cyIsImZpbmQiLCJ4IiwiY2hhaW5fbmFtZSIsImxhYmVscyIsInVscCIsIndlaSIsInVncmF2aXRvbiIsInVzZHQiLCJ1c2F0IiwidXJlZ2VuIiwidWF1c2RjIiwidXVzZGMiLCJ1YXVzZHQiLCJ1dXNkdCIsImF0ZXZtb3MiLCJzdGFldm1vcyIsImJhc2Vjcm8iLCJhZXZtb3MiLCJhZmV0IiwiYWR5ZHgiLCJkZW1vIiwibG9jYWwiLCJzd3RoIiwiYWFyY2giLCJhYWNyZSIsImFwbGFucSIsInVmcmllbnppZXMiLCJ1YmVkcm9jayIsInN0aW5qIiwibmFub21vYngiLCJhcmlvIiwib3BoaXIiLCJhZHltIiwibG9raSIsImdyYXZpdHkweDQ1ODA0ODgwRGUyMjkxM2RBRkUwOWY0OTgwODQ4RUNFNkVjYkFmNzgiLCJncmF2aXR5MHhmQjVjNjgxNWNBM0FDNzJDZTlGNTAwNjg2OUFFNjdmMThiRjc3MDA2IiwiZ3Jhdml0eTB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMiIsImdyYXZpdHkweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDgiLCJncmF2aXR5MHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3IiwiZ3Jhdml0eTB4MjI2MEZBQzVFNTU0MmE3NzNBYTQ0ZkJDZmVEZjdDMTkzYmMyQzU5OSIsImdyYXZpdHkweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEYiLCJncmF2aXR5MHg3N0UwNmM5ZUNDZjJFNzk3ZmQ0NjJBOTJCNkQ3NjQyRUY4NWIwQTQ0IiwiZ3Jhdml0eTB4YTBiOTNCOWU5MGFCODg3RTUzRjlGQjg3MjhjMDA5NzQ2ZTk4OUI1MyIsImdyYXZpdHkweGUyOGIzQjMyQjZjMzQ1QTM0RmY2NDY3NDYwNjEyNERkNUFjZWNhMzAiLCJncmF2aXR5MHhCNTA3MjFCQ2Y4ZDY2NGMzMDQxMkNmYmM2Y2Y3YTE1MTQ1MjM0YWQxIiwiZ3Jhdml0eTB4NGMxMTI0OTgxNGYxMWI5MzQ2ODA4MTc5Q2YwNmU3MWFjMzI4YzFiNSIsImdyYXZpdHkweDkzNTgxOTkxZjY4REJhRTFlQTEwNTIzM2I2N2Y3RkEwRDZCRGVFN2IiLCJncmF2aXR5MHgzNWE1MzJkMzc2RkZkOWE3MDVkMEJiMzE5NTMyODM3MzM3QTM5OEU3IiwiZ3Jhdml0eTB4MDdiYUMzNTg0NmU1ZUQ1MDJhQTkxQWRGNkE5ZTdhQTIxMEYyRGNiRSIsImdyYXZpdHkweGQyODc3NzAyNjc1ZTZjRWI5NzViNEExZEZmOWZiN0JBRjRDOTFlYTkiLCJncmF2aXR5MHg5NWFENjFiMGExNTBkNzkyMTlkQ0Y2NEUxRTZDYzAxZjBCNjRDNGNFIiwiZ3Jhdml0eTB4QWE2RTgxMjc4MzFjOURFNDVhZTU2YkIxYjBkNEQ0RGE2ZTU2NjVCRCIsImdyYXZpdHkweDQ0MDE3NTk4ZjJBRjFiRDczM0Y5RDg3YjUwMTdiNEU3YzFCMjhEREUiLCJncmF2aXR5MHhCQTExRDAwYzVmNzQyNTVmNTZhNUUzNjZGNEY3N2Y1QTE4NmQ3ZjU1IiwiZ3Jhdml0eTB4RWE1QTgyQjM1MjQ0ZDllNUU0ODc4MUYwMGIxMUIxNEU2MjdEMjk1MSIsImdyYXZpdHkweDgzRjIwRjQ0OTc1RDAzYjFiMDllNjQ4MDlCNzU3YzQ3Zjk0MkJFZUEiLCJncmF2aXR5MHg2OTgyNTA4MTQ1NDU0Q2UzMjVkRGJFNDdhMjVkNGVjM2QyMzExOTMzIiwiZ3Jhdml0eTB4ODE3YmJEYkMzZThBMTIwNGYzNjkxZDE0YkI0NDk5Mjg0MWUzZEIzNSIsImdyYXZpdHkweGQyM0VkOGNBMzUwQ0UyNjMxRjdFY0RDNUU2YmY4MEQwQTFEZUJCN0IiLCJncmF2aXR5MHhkM0U0QmE1NjkwNDU1NDZEMDlDRjAyMUVDQzVkRmU0MmIxZDdmNkU0IiwiZ3Jhdml0eTB4NTE0OTEwNzcxQUY5Q2E2NTZhZjg0MGRmZjgzRTgyNjRFY0Y5ODZDQSIsImluaiIsIm5jaGVxIiwidGVycmExOHpxY25sODN6OTh0ZjZsbHkzN2dnaG03MjM4azdsaDc5dTR6OWEiLCJ0ZXJyYTFkemh6dWt5ZXp2MGV0ejIydWQ5NDB6N2FkeXY3eGdjamthaHV1biIsInRlcnJhMWtjODdtdTQ2MGZ3a3F0ZTI5cnF1aDRoYzIwbTU0Znh3dHN4N2dwIiwidGVycmExYzAwdnNraHl6ZHYwejYzejJ0eWV0engycW1hNjduMnozdnp5bjAiLCJ0ZXJyYTF6M2UyZTRqcGs0bjB4enp3bGtnY2Z2Yzk1cGM1bGRxMHhjbnk1OCIsInJlZHVjZSIsImEiLCJ2IiwiYmFzZSIsInN5bWJvbCIsInRlcnJhIiwidWF1ZCIsInVjYWQiLCJ1Y2hmIiwidWNueSIsInVka2siLCJ1ZXVyIiwidWdicCIsInVoa2QiLCJ1aWRyIiwidWluciIsInVqcHkiLCJ1bW50IiwidW15ciIsInVub2siLCJ1cGhwIiwidXNkciIsInVzZWsiLCJ1c2dkIiwidXRoYiIsInV0d2QiLCJ1dXNkIiwiYmFzZURlbm9tVG9TeW1ib2wiLCJkZW5vbSIsInJhdyIsImZhY3RvcnlBZGRyZXNzIiwic3BsaXQiLCJnaG9zdCIsImFkZHJlc3MiLCJlbmRzV2l0aCIsImJhc2VEZW5vbSIsInN0YXJ0c1dpdGgiLCJpYmMiLCJiYXNlX2Rlbm9tIiwibGFiZWwiLCJ0IiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwiYXZhbGFuY2hlIiwiaWNzMjAiLCJjb250cmFjdCIsInJvdXRlciIsImNoYW5uZWwiLCJmcm9tIiwic3RyaW5nIiwiT2JqZWN0IiwiYm93VW5kZXJseWluZyIsInZhbHVlcyIsImZsYXRNYXAiLCJib3ciLCJjb25maWciLCJkZW5vbXMiLCJtYXAiLCJvc21vc2lzVW5kZXJseWluZyIsIm9zbW9zaXMiLCJ0cmFjZSIsImlkIiwidG9rZW4iLCJmIiwidW5kZWZpbmVkIiwiZnJvbV9wYXRoIiwicG9ydCIsImQiLCJpYmNEZW5vbSIsInBhdGgiLCJjb25zdHJ1Y3RvciIsInJlZmVyZW5jZSIsInVuZGVybHlpbmciLCJkZWNpbWFscyIsImVxIiwiY29tcGFyZSIsIm5vcm1hbGl6ZWRSZWZlcmVuY2UiLCJvdGhlciIsImxvY2FsZUNvbXBhcmUiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImpvaW4iLCJkZW5vbV91bml0cyIsImF0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LElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUMzQyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUMzQyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM3QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sQ0FBQ2dDLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQ3FDLFFBQVEsR0FBRztRQUNwRCxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUMzQyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sQ0FBQ2dDLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQ3FDLFFBQVEsR0FBRztRQUNwRCxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUMzQyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUMzQyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM5QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM3QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM5QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM3QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUMzQyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUMzQyxJQUFJLElBQUksQ0FBQ3JFLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ3FFLFFBQVEsR0FBRztRQUM1QyxJQUNFLEVBQUEsbUJBQUEsSUFBSSxDQUFDRCxVQUFVLGNBQWYsdUNBQUEsaUJBQWlCWSxNQUFNLE1BQUssS0FDNUIsSUFBSSxDQUFDWixVQUFVLENBQUMsRUFBRSxDQUFDQyxRQUFRLEtBQUssSUFBSSxDQUFDRCxVQUFVLENBQUMsRUFBRSxDQUFDQyxRQUFRLEVBQzNEO1lBQ0EsSUFBSSxDQUFDQSxRQUFRLEdBQUcsSUFBSSxDQUFDRCxVQUFVLENBQUMsRUFBRSxDQUFDQyxRQUFRO1FBQzdDO1FBQ0EsV0FBVztRQUNYLElBQ0UsSUFBSSxDQUFDRixTQUFTLEtBQ2Qsd0VBRUEsSUFBSSxDQUFDRSxRQUFRLEdBQUc7UUFFbEIsMEJBQTBCO1FBQzFCLElBQUksRUFBQSxvQkFBQSxJQUFJLENBQUNELFVBQVUsY0FBZix3Q0FBQSxrQkFBaUJZLE1BQU0sTUFBSyxLQUFLLElBQUksQ0FBQ1gsUUFBUSxLQUFLLEdBQ3JELElBQUksQ0FBQ0EsUUFBUSxHQUFHLElBQUksQ0FBQ0QsVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUTtRQUU3QyxJQUFJLENBQUM3QixLQUFLLEdBQUdBLEtBQUssQ0FBQyxJQUFJLENBQUMyQixTQUFTLENBQUM7UUFFbEMsSUFBSSxFQUFBLGVBQUEsSUFBSSxDQUFDWCxLQUFLLGNBQVYsbUNBQUEsYUFBWVMsSUFBSSxNQUFLLHdCQUF3QixJQUFJLENBQUNqRSxNQUFNLEtBQUssT0FBTztZQUN0RSxJQUFJLENBQUNBLE1BQU0sSUFBSTtRQUNqQjtRQUNBLElBQUksRUFBQSxlQUFBLElBQUksQ0FBQ3dELEtBQUssY0FBVixtQ0FBQSxhQUFZUyxJQUFJLE1BQUsseUJBQXlCLElBQUksQ0FBQ2pFLE1BQU0sS0FBSyxRQUFRO1lBQ3hFLElBQUksQ0FBQ0EsTUFBTSxJQUFJO1FBQ2pCO1FBQ0EsSUFBSSxFQUFBLGVBQUEsSUFBSSxDQUFDd0QsS0FBSyxjQUFWLG1DQUFBLGFBQVlTLElBQUksTUFBSyx3QkFBd0I7WUFDL0MsSUFBSSxDQUFDakUsTUFBTSxJQUFJO1FBQ2pCO0lBQ0Y7QUFrREY7QUFFQSxNQUFNZ0UsV0FBVyxDQUFDRixNQUFjbkIsU0FBaUJuQixRQUMvQyxTQUNBeUQsY0FBTSxDQUFDckMsSUFBSSxDQUFDc0MsSUFBQUEsY0FBTSxFQUFDRCxjQUFNLENBQUNyQyxJQUFJLENBQUMsQ0FBQyxFQUFFa0IsS0FBSyxDQUFDLEVBQUVuQixRQUFRLENBQUMsRUFBRW5CLE1BQU0sQ0FBQyxJQUN6RDJELFFBQVEsQ0FBQyxPQUNUN0MsV0FBVztBQUVULE1BQU1oSSxjQUFjSCxNQUFNeUksSUFBSSxDQUNuQztBQUdLLE1BQU12SSxNQUFNRixNQUFNeUksSUFBSSxDQUMzQjtBQUdLLE1BQU14SSxPQUFPRCxNQUFNeUksSUFBSSxDQUFDO0FBQ3hCLE1BQU0xSSxPQUFPQyxNQUFNeUksSUFBSSxDQUM1QjtBQUdLLE1BQU0zSSxPQUFPRSxNQUFNeUksSUFBSSxDQUM1QjtBQUdLLE1BQU1ySSxVQUFVSixNQUFNeUksSUFBSSxDQUMvQjtBQUdLLE1BQU01SCxZQUFZYixNQUFNMEosU0FBUyxDQUFDLFlBQVksY0FBYztBQUU1RCxNQUFNckosVUFBVUwsTUFBTXlJLElBQUksQ0FDL0I7QUFFSyxNQUFNakksVUFBVVIsTUFBTXlJLElBQUksQ0FDL0I7QUFFSyxNQUFNOUgsWUFBWVgsTUFBTXlJLElBQUksQ0FDakM7QUFFSyxNQUFNbEksVUFBVVAsTUFBTXlJLElBQUksQ0FDL0I7QUFFSyxNQUFNbkksV0FBV04sTUFBTXlJLElBQUksQ0FDaEM7QUFFSyxNQUFNL0gsV0FBV1YsTUFBTXlJLElBQUksQ0FDaEM7QUFFSyxNQUFNaEksVUFBVVQsTUFBTXlJLElBQUksQ0FDL0I7QUFHSyxNQUFNN0gsU0FBUyxDQUFDLENBQUNnRixNQUFNcUYsTUFBc0I7SUFDbEQsT0FBTyxLQUFBLElBQUEsSUFBT3JGLEtBQUtzRSxRQUFRLEdBQUdlLE1BQU1mLFFBQVE7QUFDOUMifQ==
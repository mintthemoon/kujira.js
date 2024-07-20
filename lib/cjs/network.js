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
    CHAIN_INFO: function() {
        return CHAIN_INFO;
    },
    MAINNET: function() {
        return MAINNET;
    },
    NETWORKS: function() {
        return NETWORKS;
    },
    NETWORK_DEFAULT: function() {
        return NETWORK_DEFAULT;
    },
    POND: function() {
        return POND;
    },
    RPCS: function() {
        return RPCS;
    },
    TESTNET: function() {
        return TESTNET;
    }
});
const MAINNET = "kaiyo-1";
const TESTNET = "harpoon-4";
const POND = "pond-1";
const NETWORKS = {
    [TESTNET]: "Testnet",
    [MAINNET]: "Mainnet",
    [POND]: "Pond"
};
const RPCS = {
    [TESTNET]: [
        // "https://rpc.harpoon.kujira.setten.io",
        "https://kujira-testnet-rpc.polkachu.com",
        "https://rpc-harpoon-4.starsquid.io",
        "https://test-rpc-kujira.mintthemoon.xyz"
    ],
    [MAINNET]: [
        "https://kujira-mainnet-rpc.autostake.com",
        "https://kujira-rpc.ibs.team",
        "https://kujira-rpc.nodes.defiantlabs.net",
        "https://kujira-rpc.openbitlab.com",
        "https://kujira-rpc.theamsolutions.info",
        "https://kujira.rpc.ghostinnet.com",
        "https://kujira.rpc.kjnodes.com",
        "https://kujira-rpc.publicnode.com",
        "https://rpc-kujira.capybaralabs.com/",
        "https://rpc-kujira.mintthemoon.xyz",
        "https://rpc-kujira.mms.team",
        "https://rpc-kujira.rorcualnodes.com",
        "https://rpc-kujira.starsquid.io",
        "https://rpc-kujira.synergynodes.com",
        "https://rpc.kujira.rektdao.club",
        "https://rpc-kujira.goldenratiostaking.net",
        "https://kujira.interstellar-lounge.org"
    ],
    [POND]: [
        "http://127.0.0.1:10157"
    ],
    "gravity-bridge-3": [
        "https://gravity-rpc.synergynodes.com",
        "https://gravitybridge.rpc.kjnodes.com",
        "https://gravitybridge-rpc.lavenderfive.com"
    ]
};
const chainInfo = (chainId, chainName, rpc, rest, fees = [])=>({
        chainId,
        chainName,
        rpc,
        rest,
        bip44: {
            coinType: 118
        },
        bech32Config: {
            bech32PrefixAccAddr: "kujira",
            bech32PrefixAccPub: "kujira" + "pub",
            bech32PrefixValAddr: "kujira" + "valoper",
            bech32PrefixValPub: "kujira" + "valoperpub",
            bech32PrefixConsAddr: "kujira" + "valcons",
            bech32PrefixConsPub: "kujira" + "valconspub"
        },
        currencies: fees,
        feeCurrencies: fees,
        stakeCurrency: {
            coinDenom: "KUJI",
            coinMinimalDenom: "ukuji",
            coinDecimals: 6,
            coinGeckoId: "kujira"
        }
    });
const CHAIN_INFO = {
    [TESTNET]: chainInfo(TESTNET, "Kujira Testnet", "https://test-rpc-kujira.mintthemoon.xyz", "https://test-lcd-kujira.mintthemoon.xyz", [
        {
            coinDenom: "KUJI",
            coinMinimalDenom: "ukuji",
            coinDecimals: 6,
            coinGeckoId: "kujira",
            gasPriceStep: {
                low: 0.0034,
                average: 0.0051,
                high: 0.00681
            }
        },
        {
            coinDenom: "DEMO",
            coinMinimalDenom: "factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo",
            coinDecimals: 6,
            coinGeckoId: "kujira",
            gasPriceStep: {
                low: 0.00125,
                average: 0.0025,
                high: 0.00375
            }
        }
    ]),
    [POND]: chainInfo(POND, "Kujira Pond", "http://127.0.0.1:10157", "http://127.0.0.1:10117", [
        {
            coinDenom: "KUJI",
            coinMinimalDenom: "ukuji",
            coinDecimals: 6,
            coinGeckoId: "kujira",
            gasPriceStep: {
                low: 0.0034,
                average: 0.0051,
                high: 0.00681
            }
        }
    ]),
    [MAINNET]: chainInfo(MAINNET, "Kujira", "https://rpc.cosmos.directory/kujira", "https://rest.cosmos.directory/kujira", [
        {
            coinDenom: "KUJI",
            coinMinimalDenom: "ukuji",
            coinDecimals: 6,
            coinGeckoId: "kujira",
            gasPriceStep: {
                low: 0.0034,
                average: 0.0051,
                high: 0.00681
            }
        },
        {
            coinDenom: "USK",
            coinMinimalDenom: "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
            coinDecimals: 6,
            coinGeckoId: "usk",
            gasPriceStep: {
                low: 0.01186,
                average: 0.01779,
                high: 0.02372
            }
        },
        {
            coinDenom: "axlUSDC",
            coinMinimalDenom: "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
            coinDecimals: 6,
            coinGeckoId: "axlusdc",
            gasPriceStep: {
                low: 0.0119,
                average: 0.01785,
                high: 0.02379
            }
        },
        {
            coinDenom: "ATOM",
            coinMinimalDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            coinDecimals: 6,
            coinGeckoId: "cosmos",
            gasPriceStep: {
                low: 0.00129,
                average: 0.00193,
                high: 0.00258
            }
        },
        {
            coinDenom: "OSMO",
            coinMinimalDenom: "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            coinDecimals: 6,
            coinGeckoId: "osmosis",
            gasPriceStep: {
                low: 0.01795,
                average: 0.02692,
                high: 0.0359
            }
        },
        {
            coinDenom: "CMDX",
            coinMinimalDenom: "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07",
            coinDecimals: 6,
            coinGeckoId: "comdex",
            gasPriceStep: {
                low: 0.65943,
                average: 0.98915,
                high: 1.31887
            }
        },
        {
            coinDenom: "EVMOS",
            coinMinimalDenom: "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10",
            coinDecimals: 18,
            coinGeckoId: "evmos",
            gasPriceStep: {
                low: 160416396197,
                average: 240624594296,
                high: 320832792394
            }
        },
        {
            coinDenom: "JUNO",
            coinMinimalDenom: "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5",
            coinDecimals: 6,
            coinGeckoId: "juno-network",
            gasPriceStep: {
                low: 0.02689,
                average: 0.04034,
                high: 0.05379
            }
        },
        {
            coinDenom: "LUNA",
            coinMinimalDenom: "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986",
            coinDecimals: 6,
            coinGeckoId: "terra-luna-2",
            gasPriceStep: {
                low: 0.01495,
                average: 0.02243,
                high: 0.02991
            }
        },
        {
            coinDenom: "SCRT",
            coinMinimalDenom: "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
            coinDecimals: 6,
            coinGeckoId: "secret",
            gasPriceStep: {
                low: 0.03139,
                average: 0.04709,
                high: 0.06278
            }
        },
        {
            coinDenom: "STARS",
            coinMinimalDenom: "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602",
            coinDecimals: 6,
            coinGeckoId: "stargaze",
            gasPriceStep: {
                low: 0.90403,
                average: 1.35605,
                high: 1.80806
            }
        },
        {
            coinDenom: "AVAX",
            coinMinimalDenom: "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2",
            coinDecimals: 18,
            coinGeckoId: "avalanche-2",
            gasPriceStep: {
                low: 559196837,
                average: 838795256,
                high: 1118393675
            }
        },
        {
            coinDenom: "ETH",
            coinMinimalDenom: "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
            coinDecimals: 18,
            coinGeckoId: "ethereum",
            gasPriceStep: {
                low: 5772801,
                average: 8659201,
                high: 11545602
            }
        },
        {
            coinDenom: "MNTA",
            coinMinimalDenom: "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
            coinDecimals: 6,
            coinGeckoId: "mantadao",
            gasPriceStep: {
                low: 0.01807,
                average: 0.02711,
                high: 0.03615
            }
        },
        {
            coinDenom: "USDC",
            coinMinimalDenom: "ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9",
            coinDecimals: 6,
            coinGeckoId: "usd-coin",
            gasPriceStep: {
                low: 0.01194,
                average: 0.01792,
                high: 0.02389
            }
        },
        {
            coinDenom: "SOL",
            coinMinimalDenom: "ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3",
            coinDecimals: 8,
            coinGeckoId: "solana",
            gasPriceStep: {
                low: 0.00019,
                average: 0.00029,
                high: 0.00039
            }
        }
    ])
};
const NETWORK_DEFAULT = "kaiyo-1";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWluSW5mbywgRmVlQ3VycmVuY3kgfSBmcm9tIFwiQGtlcGxyLXdhbGxldC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgTUFJTk5FVCA9IFwia2FpeW8tMVwiO1xuZXhwb3J0IGNvbnN0IFRFU1RORVQgPSBcImhhcnBvb24tNFwiO1xuZXhwb3J0IGNvbnN0IFBPTkQgPSBcInBvbmQtMVwiO1xuXG5leHBvcnQgdHlwZSBORVRXT1JLID0gdHlwZW9mIE1BSU5ORVQgfCB0eXBlb2YgVEVTVE5FVCB8IHR5cGVvZiBQT05EO1xuXG5leHBvcnQgY29uc3QgTkVUV09SS1MgPSB7XG4gIFtURVNUTkVUXTogXCJUZXN0bmV0XCIsXG4gIFtNQUlOTkVUXTogXCJNYWlubmV0XCIsXG4gIFtQT05EXTogXCJQb25kXCIsXG59O1xuXG5leHBvcnQgY29uc3QgUlBDUzogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge1xuICBbVEVTVE5FVF06IFtcbiAgICAvLyBcImh0dHBzOi8vcnBjLmhhcnBvb24ua3VqaXJhLnNldHRlbi5pb1wiLFxuICAgIFwiaHR0cHM6Ly9rdWppcmEtdGVzdG5ldC1ycGMucG9sa2FjaHUuY29tXCIsXG4gICAgXCJodHRwczovL3JwYy1oYXJwb29uLTQuc3RhcnNxdWlkLmlvXCIsXG4gICAgXCJodHRwczovL3Rlc3QtcnBjLWt1amlyYS5taW50dGhlbW9vbi54eXpcIixcbiAgICAvLyBcImh0dHBzOi8vZGV2LXJwYy1rdWppcmEubWludHRoZW1vb24ueHl6XCIsXG4gIF0sXG4gIFtNQUlOTkVUXTogW1xuICAgIFwiaHR0cHM6Ly9rdWppcmEtbWFpbm5ldC1ycGMuYXV0b3N0YWtlLmNvbVwiLFxuICAgIFwiaHR0cHM6Ly9rdWppcmEtcnBjLmlicy50ZWFtXCIsXG4gICAgXCJodHRwczovL2t1amlyYS1ycGMubm9kZXMuZGVmaWFudGxhYnMubmV0XCIsXG4gICAgXCJodHRwczovL2t1amlyYS1ycGMub3BlbmJpdGxhYi5jb21cIixcbiAgICBcImh0dHBzOi8va3VqaXJhLXJwYy50aGVhbXNvbHV0aW9ucy5pbmZvXCIsXG4gICAgXCJodHRwczovL2t1amlyYS5ycGMuZ2hvc3Rpbm5ldC5jb21cIixcbiAgICBcImh0dHBzOi8va3VqaXJhLnJwYy5ram5vZGVzLmNvbVwiLFxuICAgIFwiaHR0cHM6Ly9rdWppcmEtcnBjLnB1YmxpY25vZGUuY29tXCIsXG4gICAgXCJodHRwczovL3JwYy1rdWppcmEuY2FweWJhcmFsYWJzLmNvbS9cIixcbiAgICBcImh0dHBzOi8vcnBjLWt1amlyYS5taW50dGhlbW9vbi54eXpcIixcbiAgICBcImh0dHBzOi8vcnBjLWt1amlyYS5tbXMudGVhbVwiLFxuICAgIFwiaHR0cHM6Ly9ycGMta3VqaXJhLnJvcmN1YWxub2Rlcy5jb21cIixcbiAgICBcImh0dHBzOi8vcnBjLWt1amlyYS5zdGFyc3F1aWQuaW9cIixcbiAgICBcImh0dHBzOi8vcnBjLWt1amlyYS5zeW5lcmd5bm9kZXMuY29tXCIsXG4gICAgXCJodHRwczovL3JwYy5rdWppcmEucmVrdGRhby5jbHViXCIsXG4gICAgXCJodHRwczovL3JwYy1rdWppcmEuZ29sZGVucmF0aW9zdGFraW5nLm5ldFwiLFxuICAgIFwiaHR0cHM6Ly9rdWppcmEuaW50ZXJzdGVsbGFyLWxvdW5nZS5vcmdcIixcbiAgICAvLyBcImh0dHBzOi8va3VqaS1ycGMua2xlb21lZGVzLm5ldHdvcmtcIixcbiAgICAvLyBcImh0dHBzOi8va3VqaXJhLXJwYy5sYXZlbmRlcmZpdmUuY29tXCIsXG4gICAgLy8gXCJodHRwczovL2t1amlyYS1ycGMucG9sa2FjaHUuY29tXCIsXG4gICAgLy8gXCJodHRwczovL3JwYy1rdWppcmEud2hpc3Blcm5vZGUuY29tXCIsXG4gICAgLy8gXCJodHRwczovL3JwYy5rYWl5by5rdWppcmEuc2V0dGVuLmlvXCIsXG4gIF0sXG4gIFtQT05EXTogW1wiaHR0cDovLzEyNy4wLjAuMToxMDE1N1wiXSxcbiAgXCJncmF2aXR5LWJyaWRnZS0zXCI6IFtcbiAgICBcImh0dHBzOi8vZ3Jhdml0eS1ycGMuc3luZXJneW5vZGVzLmNvbVwiLFxuICAgIFwiaHR0cHM6Ly9ncmF2aXR5YnJpZGdlLnJwYy5ram5vZGVzLmNvbVwiLFxuICAgIFwiaHR0cHM6Ly9ncmF2aXR5YnJpZGdlLXJwYy5sYXZlbmRlcmZpdmUuY29tXCIsXG4gIF0sXG59O1xuXG5jb25zdCBjaGFpbkluZm8gPSAoXG4gIGNoYWluSWQ6IHN0cmluZyxcbiAgY2hhaW5OYW1lOiBzdHJpbmcsXG4gIHJwYzogc3RyaW5nLFxuICByZXN0OiBzdHJpbmcsXG4gIGZlZXM6IEZlZUN1cnJlbmN5W10gPSBbXVxuKSA9PiAoe1xuICBjaGFpbklkLFxuICBjaGFpbk5hbWUsXG4gIHJwYyxcbiAgcmVzdCxcbiAgYmlwNDQ6IHtcbiAgICBjb2luVHlwZTogMTE4LFxuICB9LFxuICBiZWNoMzJDb25maWc6IHtcbiAgICBiZWNoMzJQcmVmaXhBY2NBZGRyOiBcImt1amlyYVwiLFxuICAgIGJlY2gzMlByZWZpeEFjY1B1YjogXCJrdWppcmFcIiArIFwicHViXCIsXG4gICAgYmVjaDMyUHJlZml4VmFsQWRkcjogXCJrdWppcmFcIiArIFwidmFsb3BlclwiLFxuICAgIGJlY2gzMlByZWZpeFZhbFB1YjogXCJrdWppcmFcIiArIFwidmFsb3BlcnB1YlwiLFxuICAgIGJlY2gzMlByZWZpeENvbnNBZGRyOiBcImt1amlyYVwiICsgXCJ2YWxjb25zXCIsXG4gICAgYmVjaDMyUHJlZml4Q29uc1B1YjogXCJrdWppcmFcIiArIFwidmFsY29uc3B1YlwiLFxuICB9LFxuICBjdXJyZW5jaWVzOiBmZWVzLFxuICBmZWVDdXJyZW5jaWVzOiBmZWVzLFxuICBzdGFrZUN1cnJlbmN5OiB7XG4gICAgY29pbkRlbm9tOiBcIktVSklcIixcbiAgICBjb2luTWluaW1hbERlbm9tOiBcInVrdWppXCIsXG4gICAgY29pbkRlY2ltYWxzOiA2LFxuICAgIGNvaW5HZWNrb0lkOiBcImt1amlyYVwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBDSEFJTl9JTkZPOiBSZWNvcmQ8TkVUV09SSywgQ2hhaW5JbmZvPiA9IHtcbiAgW1RFU1RORVRdOiBjaGFpbkluZm8oXG4gICAgVEVTVE5FVCxcbiAgICBcIkt1amlyYSBUZXN0bmV0XCIsXG4gICAgXCJodHRwczovL3Rlc3QtcnBjLWt1amlyYS5taW50dGhlbW9vbi54eXpcIixcbiAgICBcImh0dHBzOi8vdGVzdC1sY2Qta3VqaXJhLm1pbnR0aGVtb29uLnh5elwiLFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIktVSklcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTogXCJ1a3VqaVwiLFxuICAgICAgICBjb2luRGVjaW1hbHM6IDYsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcImt1amlyYVwiLFxuICAgICAgICBnYXNQcmljZVN0ZXA6IHsgbG93OiAwLjAwMzQsIGF2ZXJhZ2U6IDAuMDA1MSwgaGlnaDogMC4wMDY4MSB9LFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBjb2luRGVub206IFwiREVNT1wiLFxuICAgICAgICBjb2luTWluaW1hbERlbm9tOlxuICAgICAgICAgIFwiZmFjdG9yeS9rdWppcmExbHR2d2c2OXN3M2M1ejk5YzZycjA4aGFsN3Ywa2R6Znh6MDd5ajUvZGVtb1wiLFxuICAgICAgICBjb2luRGVjaW1hbHM6IDYsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcImt1amlyYVwiLFxuICAgICAgICBnYXNQcmljZVN0ZXA6IHtcbiAgICAgICAgICBsb3c6IDAuMDAxMjUsXG4gICAgICAgICAgYXZlcmFnZTogMC4wMDI1LFxuICAgICAgICAgIGhpZ2g6IDAuMDAzNzUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF1cbiAgKSxcbiAgW1BPTkRdOiBjaGFpbkluZm8oXG4gICAgUE9ORCxcbiAgICBcIkt1amlyYSBQb25kXCIsXG4gICAgXCJodHRwOi8vMTI3LjAuMC4xOjEwMTU3XCIsXG4gICAgXCJodHRwOi8vMTI3LjAuMC4xOjEwMTE3XCIsXG4gICAgW1xuICAgICAge1xuICAgICAgICBjb2luRGVub206IFwiS1VKSVwiLFxuICAgICAgICBjb2luTWluaW1hbERlbm9tOiBcInVrdWppXCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogNixcbiAgICAgICAgY29pbkdlY2tvSWQ6IFwia3VqaXJhXCIsXG4gICAgICAgIGdhc1ByaWNlU3RlcDogeyBsb3c6IDAuMDAzNCwgYXZlcmFnZTogMC4wMDUxLCBoaWdoOiAwLjAwNjgxIH0sXG4gICAgICB9LFxuICAgIF1cbiAgKSxcbiAgW01BSU5ORVRdOiBjaGFpbkluZm8oXG4gICAgTUFJTk5FVCxcbiAgICBcIkt1amlyYVwiLFxuICAgIFwiaHR0cHM6Ly9ycGMuY29zbW9zLmRpcmVjdG9yeS9rdWppcmFcIixcbiAgICBcImh0dHBzOi8vcmVzdC5jb3Ntb3MuZGlyZWN0b3J5L2t1amlyYVwiLFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIktVSklcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTogXCJ1a3VqaVwiLFxuICAgICAgICBjb2luRGVjaW1hbHM6IDYsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcImt1amlyYVwiLFxuICAgICAgICBnYXNQcmljZVN0ZXA6IHsgbG93OiAwLjAwMzQsIGF2ZXJhZ2U6IDAuMDA1MSwgaGlnaDogMC4wMDY4MSB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIlVTS1wiLFxuICAgICAgICBjb2luTWluaW1hbERlbm9tOlxuICAgICAgICAgIFwiZmFjdG9yeS9rdWppcmExcWswMGg1YXR1dHBzdjkwMHgyMDJweHg0Mm5wanI5dGhnNThkbnFwYTcyZjJwN20ybHVhc2U0NDRhNy91dXNrXCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogNixcbiAgICAgICAgY29pbkdlY2tvSWQ6IFwidXNrXCIsXG4gICAgICAgIGdhc1ByaWNlU3RlcDogeyBsb3c6IDAuMDExODYsIGF2ZXJhZ2U6IDAuMDE3NzksIGhpZ2g6IDAuMDIzNzIgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvaW5EZW5vbTogXCJheGxVU0RDXCIsXG4gICAgICAgIGNvaW5NaW5pbWFsRGVub206XG4gICAgICAgICAgXCJpYmMvMjk1NTQ4QTc4Nzg1QTEwMDdGMjMyREUyODYxNDlBNkZGNTEyRjE4MEFGNTY1Nzc4MEZDODlDMDA5RTJDMzQ4RlwiLFxuICAgICAgICBjb2luRGVjaW1hbHM6IDYsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcImF4bHVzZGNcIixcbiAgICAgICAgZ2FzUHJpY2VTdGVwOiB7IGxvdzogMC4wMTE5LCBhdmVyYWdlOiAwLjAxNzg1LCBoaWdoOiAwLjAyMzc5IH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2luRGVub206IFwiQVRPTVwiLFxuICAgICAgICBjb2luTWluaW1hbERlbm9tOlxuICAgICAgICAgIFwiaWJjLzI3Mzk0RkIwOTJEMkVDQ0Q1NjEyM0M3NEYzNkU0QzFGOTI2MDAxQ0VBREE5Q0E5N0VBNjIyQjI1RjQxRTVFQjJcIixcbiAgICAgICAgY29pbkRlY2ltYWxzOiA2LFxuICAgICAgICBjb2luR2Vja29JZDogXCJjb3Ntb3NcIixcbiAgICAgICAgZ2FzUHJpY2VTdGVwOiB7IGxvdzogMC4wMDEyOSwgYXZlcmFnZTogMC4wMDE5MywgaGlnaDogMC4wMDI1OCB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIk9TTU9cIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTpcbiAgICAgICAgICBcImliYy80N0JEMjA5MTc5ODU5Q0RFNEEyODA2NzYzRDcxODlCNkU2RkUxM0ExNzg4MEZFMkI0MkRFMUU2QzFFMzI5RTIzXCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogNixcbiAgICAgICAgY29pbkdlY2tvSWQ6IFwib3Ntb3Npc1wiLFxuICAgICAgICBnYXNQcmljZVN0ZXA6IHsgbG93OiAwLjAxNzk1LCBhdmVyYWdlOiAwLjAyNjkyLCBoaWdoOiAwLjAzNTkgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvaW5EZW5vbTogXCJDTURYXCIsXG4gICAgICAgIGNvaW5NaW5pbWFsRGVub206XG4gICAgICAgICAgXCJpYmMvMzYwN0VCNUI1RTY0REQxQzBFMTJFMDdGMDc3RkY0NzBENUJDNDcwNkFGQ0JDOThGRTFCQTk2MEU1QUU0Q0UwN1wiLFxuICAgICAgICBjb2luRGVjaW1hbHM6IDYsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcImNvbWRleFwiLFxuICAgICAgICBnYXNQcmljZVN0ZXA6IHsgbG93OiAwLjY1OTQzLCBhdmVyYWdlOiAwLjk4OTE1LCBoaWdoOiAxLjMxODg3IH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2luRGVub206IFwiRVZNT1NcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTpcbiAgICAgICAgICBcImliYy9GM0FBN0VGMzYyRUM1RTc5MUZFNzhBMEY0Q0NDNjlGRUUxRjlBNzQ4NUVCMUE4Q0FCM0Y2NjAxQzAwNTIyRjEwXCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogMTgsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcImV2bW9zXCIsXG4gICAgICAgIGdhc1ByaWNlU3RlcDoge1xuICAgICAgICAgIGxvdzogMTYwNDE2Mzk2MTk3LFxuICAgICAgICAgIGF2ZXJhZ2U6IDI0MDYyNDU5NDI5NixcbiAgICAgICAgICBoaWdoOiAzMjA4MzI3OTIzOTQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2luRGVub206IFwiSlVOT1wiLFxuICAgICAgICBjb2luTWluaW1hbERlbm9tOlxuICAgICAgICAgIFwiaWJjL0VGRjMyM0NDNjMyRUM0Rjc0N0M2MUJDRTIzOEE3NThFRkRCNzY5OUMzMjI2NTY1RjdDMjBEQTA2NTA5RDU5QTVcIixcbiAgICAgICAgY29pbkRlY2ltYWxzOiA2LFxuICAgICAgICBjb2luR2Vja29JZDogXCJqdW5vLW5ldHdvcmtcIixcbiAgICAgICAgZ2FzUHJpY2VTdGVwOiB7IGxvdzogMC4wMjY4OSwgYXZlcmFnZTogMC4wNDAzNCwgaGlnaDogMC4wNTM3OSB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIkxVTkFcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTpcbiAgICAgICAgICBcImliYy9EQTU5QzAwOUEwQjNCOTVFMDU0OUU2QkY3QjA3NUM4MjM5Mjg1OTg5RkY0NTdBOEVEREJCNTZGMTBCMkE2OTg2XCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogNixcbiAgICAgICAgY29pbkdlY2tvSWQ6IFwidGVycmEtbHVuYS0yXCIsXG4gICAgICAgIGdhc1ByaWNlU3RlcDogeyBsb3c6IDAuMDE0OTUsIGF2ZXJhZ2U6IDAuMDIyNDMsIGhpZ2g6IDAuMDI5OTEgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvaW5EZW5vbTogXCJTQ1JUXCIsXG4gICAgICAgIGNvaW5NaW5pbWFsRGVub206XG4gICAgICAgICAgXCJpYmMvQTM1OEQ3RjE5MjM3Nzc3QUY2RDhBRDBFMEY1MzI2OEY4QjE4QUU4QTUzRUQzMTgwOTVDMTRENkQ3RjNCMkRCNVwiLFxuICAgICAgICBjb2luRGVjaW1hbHM6IDYsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcInNlY3JldFwiLFxuICAgICAgICBnYXNQcmljZVN0ZXA6IHsgbG93OiAwLjAzMTM5LCBhdmVyYWdlOiAwLjA0NzA5LCBoaWdoOiAwLjA2Mjc4IH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2luRGVub206IFwiU1RBUlNcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTpcbiAgICAgICAgICBcImliYy80RjM5M0MzRkNBNDE5MEMwQTY3NTZDRTdGNkQ4OTdENUQxQkU1N0Q2Q0NCODBEMEJDODczOTM1NjZBN0I2NjAyXCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogNixcbiAgICAgICAgY29pbkdlY2tvSWQ6IFwic3RhcmdhemVcIixcbiAgICAgICAgZ2FzUHJpY2VTdGVwOiB7IGxvdzogMC45MDQwMywgYXZlcmFnZTogMS4zNTYwNSwgaGlnaDogMS44MDgwNiB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIkFWQVhcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTpcbiAgICAgICAgICBcImliYy8wMDRFQkYwODVCQkVEMTAyOTMyNkQ1NkJFOEEyRTY3QzA4Q0VDRTY3MEE5NEFDMTk0N0RGNDEzRUY1MTMwRUIyXCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogMTgsXG4gICAgICAgIGNvaW5HZWNrb0lkOiBcImF2YWxhbmNoZS0yXCIsXG4gICAgICAgIGdhc1ByaWNlU3RlcDogeyBsb3c6IDU1OTE5NjgzNywgYXZlcmFnZTogODM4Nzk1MjU2LCBoaWdoOiAxMTE4MzkzNjc1IH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2luRGVub206IFwiRVRIXCIsXG4gICAgICAgIGNvaW5NaW5pbWFsRGVub206XG4gICAgICAgICAgXCJpYmMvMUIzODgwNUIxQzc1MzUyQjI4MTY5Mjg0Rjk2REY1NkJERUJEOUU4RkFDMDA1QkRDQzhDRjAzNzhDODJBQThFN1wiLFxuICAgICAgICBjb2luRGVjaW1hbHM6IDE4LFxuICAgICAgICBjb2luR2Vja29JZDogXCJldGhlcmV1bVwiLFxuICAgICAgICBnYXNQcmljZVN0ZXA6IHsgbG93OiA1NzcyODAxLCBhdmVyYWdlOiA4NjU5MjAxLCBoaWdoOiAxMTU0NTYwMiB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIk1OVEFcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTpcbiAgICAgICAgICBcImZhY3Rvcnkva3VqaXJhMTY0M2p4Zzh3YXN5NWNmY243eG04cmQ3NDJ5ZWF6Y2tzcWxnNGQ3L3VtbnRhXCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogNixcbiAgICAgICAgY29pbkdlY2tvSWQ6IFwibWFudGFkYW9cIixcbiAgICAgICAgZ2FzUHJpY2VTdGVwOiB7IGxvdzogMC4wMTgwNywgYXZlcmFnZTogMC4wMjcxMSwgaGlnaDogMC4wMzYxNSB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIlVTRENcIixcbiAgICAgICAgY29pbk1pbmltYWxEZW5vbTpcbiAgICAgICAgICBcImliYy9GRTk4QUFENjhGMDJGMDM1NjVFOUZBMzlBNUU2Mjc5NDY2OTlCMkIwNzExNTg4OUVEODEyRDhCQTYzOTU3NkE5XCIsXG4gICAgICAgIGNvaW5EZWNpbWFsczogNixcbiAgICAgICAgY29pbkdlY2tvSWQ6IFwidXNkLWNvaW5cIixcbiAgICAgICAgZ2FzUHJpY2VTdGVwOiB7IGxvdzogMC4wMTE5NCwgYXZlcmFnZTogMC4wMTc5MiwgaGlnaDogMC4wMjM4OSB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29pbkRlbm9tOiBcIlNPTFwiLFxuICAgICAgICBjb2luTWluaW1hbERlbm9tOlxuICAgICAgICAgIFwiaWJjL0U1Q0ExMjY5NzlFMkZGQjRDNzBDMDcyRjgwOTREMDdFQ0YyNzc3M0IzNzYyM0FEMkJGNzU4MkFEMDcyNkYwRjNcIixcbiAgICAgICAgY29pbkRlY2ltYWxzOiA4LFxuICAgICAgICBjb2luR2Vja29JZDogXCJzb2xhbmFcIixcbiAgICAgICAgZ2FzUHJpY2VTdGVwOiB7IGxvdzogMC4wMDAxOSwgYXZlcmFnZTogMC4wMDAyOSwgaGlnaDogMC4wMDAzOSB9LFxuICAgICAgfSxcbiAgICBdXG4gICksXG59O1xuXG5leHBvcnQgY29uc3QgTkVUV09SS19ERUZBVUxUID0gXCJrYWl5by0xXCI7XG4iXSwibmFtZXMiOlsiQ0hBSU5fSU5GTyIsIk1BSU5ORVQiLCJORVRXT1JLUyIsIk5FVFdPUktfREVGQVVMVCIsIlBPTkQiLCJSUENTIiwiVEVTVE5FVCIsImNoYWluSW5mbyIsImNoYWluSWQiLCJjaGFpbk5hbWUiLCJycGMiLCJyZXN0IiwiZmVlcyIsImJpcDQ0IiwiY29pblR5cGUiLCJiZWNoMzJDb25maWciLCJiZWNoMzJQcmVmaXhBY2NBZGRyIiwiYmVjaDMyUHJlZml4QWNjUHViIiwiYmVjaDMyUHJlZml4VmFsQWRkciIsImJlY2gzMlByZWZpeFZhbFB1YiIsImJlY2gzMlByZWZpeENvbnNBZGRyIiwiYmVjaDMyUHJlZml4Q29uc1B1YiIsImN1cnJlbmNpZXMiLCJmZWVDdXJyZW5jaWVzIiwic3Rha2VDdXJyZW5jeSIsImNvaW5EZW5vbSIsImNvaW5NaW5pbWFsRGVub20iLCJjb2luRGVjaW1hbHMiLCJjb2luR2Vja29JZCIsImdhc1ByaWNlU3RlcCIsImxvdyIsImF2ZXJhZ2UiLCJoaWdoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXNGYUEsVUFBVTtlQUFWQTs7SUFwRkFDLE9BQU87ZUFBUEE7O0lBTUFDLFFBQVE7ZUFBUkE7O0lBdVFBQyxlQUFlO2VBQWZBOztJQTNRQUMsSUFBSTtlQUFKQTs7SUFVQUMsSUFBSTtlQUFKQTs7SUFYQUMsT0FBTztlQUFQQTs7O0FBRE4sTUFBTUwsVUFBVTtBQUNoQixNQUFNSyxVQUFVO0FBQ2hCLE1BQU1GLE9BQU87QUFJYixNQUFNRixXQUFXO0lBQ3RCLENBQUNJLFFBQVEsRUFBRTtJQUNYLENBQUNMLFFBQVEsRUFBRTtJQUNYLENBQUNHLEtBQUssRUFBRTtBQUNWO0FBRU8sTUFBTUMsT0FBaUM7SUFDNUMsQ0FBQ0MsUUFBUSxFQUFFO1FBQ1QsMENBQTBDO1FBQzFDO1FBQ0E7UUFDQTtLQUVEO0lBQ0QsQ0FBQ0wsUUFBUSxFQUFFO1FBQ1Q7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQU1EO0lBQ0QsQ0FBQ0csS0FBSyxFQUFFO1FBQUM7S0FBeUI7SUFDbEMsb0JBQW9CO1FBQ2xCO1FBQ0E7UUFDQTtLQUNEO0FBQ0g7QUFFQSxNQUFNRyxZQUFZLENBQ2hCQyxTQUNBQyxXQUNBQyxLQUNBQyxNQUNBQyxPQUFzQixFQUFFLEdBQ3BCLENBQUE7UUFD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
import { ChainInfo } from "@keplr-wallet/types";
export declare const MAINNET = "kaiyo-1";
export declare const TESTNET = "harpoon-4";
export declare const POND = "pond-1";
export type NETWORK = typeof MAINNET | typeof TESTNET | typeof POND;
export declare const NETWORKS: {
    "harpoon-4": string;
    "kaiyo-1": string;
    "pond-1": string;
};
export declare const RPCS: Record<string, string[]>;
export declare const CHAIN_INFO: Record<NETWORK, ChainInfo>;
export declare const NETWORK_DEFAULT = "kaiyo-1";
//# sourceMappingURL=network.d.ts.map
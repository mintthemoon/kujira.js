import { NETWORK } from "../network";
import { Pair } from "./types";
export declare const FILTERED: string[];
export declare const NOTICES: {
    kujira1v8lkqws3gd6npr0rdk9ch54amh9guas86r4u62jq27hee88lryfsxwrvlk: string;
    kujira1cduudfszcm9slm8qxlaqvnpzg2u0hkus94fe3pwt9x446dtw6eeql8ualz: string;
    kujira1kmw6fk5p7an27u8f3er08xrwvzlehczymgshkqxzfrxyrfleu2eqxykaln: string;
    kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867: string;
};
import contracts from "../resources/contracts.json";
export declare const STAKING: {
    "harpoon-4": string;
    "kaiyo-1": string;
};
type Config = {
    owner: string;
    denoms: string[] | {
        native: string;
    }[];
    price_precision: {
        decimal_places: number;
    };
    oracles?: {
        some: string[];
    } | "none";
    is_bootstrapping?: boolean;
    decimal_delta?: number;
};
export declare const compile: (network: keyof typeof contracts) => (a: Record<string, Pair>, v: {
    address: string;
    config: Config;
}) => Record<string, Pair>;
export declare const PAIRS: Record<NETWORK, Record<string, Pair>>;
export {};
//# sourceMappingURL=pairs.d.ts.map
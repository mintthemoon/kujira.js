import { BigNumber } from "@ethersproject/bignumber";
import { Denom } from "../denom";
import { KujiraQueryClient } from "../queryClient";
import { Book, BookResponse, Config, ConfigResponse, Order, OrderResponse, Pair, Simulation } from "./types";
export declare const castBook: (denoms: [Denom, Denom]) => (response: BookResponse) => Book;
export declare const castConfig: (response: ConfigResponse) => Config;
export type History = {
    time: Date;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
}[];
export declare const castOrder: (denoms: [Denom, Denom]) => (response: OrderResponse) => Order;
export declare const DEFAULT_SIMULATION: Simulation;
export declare const simulate: (query: KujiraQueryClient, amount: BigNumber, denom: Denom, pair: Pair, book: Book | null) => Promise<Simulation>;
export declare const formatPrice: (price: number, denom: Denom, denoms: [Denom, Denom]) => number;
//# sourceMappingURL=client.d.ts.map
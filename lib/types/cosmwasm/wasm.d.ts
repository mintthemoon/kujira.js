import { JsonObject } from "@cosmjs/cosmwasm-stargate";
import { QueryClient } from "@cosmjs/stargate";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { QueryAllContractStateResponse, QueryCodeResponse, QueryCodesResponse, QueryContractHistoryResponse, QueryContractInfoResponse, QueryContractsByCodeResponse, QueryRawContractStateResponse } from "cosmjs-types/cosmwasm/wasm/v1/query";
export type WasmExtensionExtended = {
    readonly wasm: {
        readonly listCodeInfo: (pageRequest?: PageRequest) => Promise<QueryCodesResponse>;
        /**
         * Downloads the original wasm bytecode by code ID.
         *
         * Throws an error if no code with this id
         */
        readonly getCode: (id: number) => Promise<QueryCodeResponse>;
        readonly listContractsByCodeId: (id: bigint, pageRequest?: PageRequest) => Promise<QueryContractsByCodeResponse>;
        /**
         * Returns null when contract was not found at this address.
         */
        readonly getContractInfo: (address: string) => Promise<QueryContractInfoResponse>;
        /**
         * Returns null when contract history was not found for this address.
         */
        readonly getContractCodeHistory: (address: string, pageRequest?: PageRequest) => Promise<QueryContractHistoryResponse>;
        /**
         * Returns all contract state.
         * This is an empty array if no such contract, or contract has no data.
         */
        readonly getAllContractState: (address: string, pageRequest?: PageRequest) => Promise<QueryAllContractStateResponse>;
        /**
         * Returns the data at the key if present (unknown decoded json),
         * or null if no data at this (contract address, key) pair
         */
        readonly queryContractRaw: (address: string, key: Uint8Array) => Promise<QueryRawContractStateResponse>;
        /**
         * Makes a smart query on the contract and parses the response as JSON.
         * Throws error if no such contract exists, the query format is invalid or the response is invalid.
         */
        readonly queryContractSmart: (address: string, query: JsonObject) => Promise<JsonObject>;
    };
};
export declare function setupWasmExtensionExtended(base: QueryClient): WasmExtensionExtended;
//# sourceMappingURL=wasm.d.ts.map
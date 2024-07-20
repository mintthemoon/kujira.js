import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, ExchangeRateTuple, Params } from "./oracle";
export declare const protobufPackage = "kujira.oracle";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    feeder_delegations: FeederDelegation[];
    exchange_rates: ExchangeRateTuple[];
    miss_counters: MissCounter[];
    aggregate_exchange_rate_prevotes: AggregateExchangeRatePrevote[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVote[];
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegation {
    feeder_address: string;
    validator_address: string;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounter {
    validator_address: string;
    miss_counter: bigint;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const FeederDelegation: {
    encode(message: FeederDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeederDelegation;
    fromJSON(object: any): FeederDelegation;
    toJSON(message: FeederDelegation): unknown;
    fromPartial(object: DeepPartial<FeederDelegation>): FeederDelegation;
};
export declare const MissCounter: {
    encode(message: MissCounter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MissCounter;
    fromJSON(object: any): MissCounter;
    toJSON(message: MissCounter): unknown;
    fromPartial(object: DeepPartial<MissCounter>): MissCounter;
};
//# sourceMappingURL=genesis.d.ts.map
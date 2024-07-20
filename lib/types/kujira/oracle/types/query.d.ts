import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { DecCoin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params } from "./oracle";
export declare const protobufPackage = "kujira.oracle";
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
    /** denom defines the denomination to query for. */
    denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
    /** exchange_rate defines the exchange rate of whitelisted assets */
    exchange_rate: string;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
    /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
    exchange_rates: DecCoin[];
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
    /** actives defines a list of the denomination which oracle prices aggreed upon. */
    actives: string[];
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
    /**
     * vote_targets defines a list of the denomination in which everyone
     * should vote in the current vote period.
     */
    vote_targets: string[];
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
    /** validator defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
    /** feeder_addr defines the feeder delegation of a validator */
    feeder_addr: string;
}
/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequest {
    /** validator defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
    /** miss_counter defines the oracle miss counter of a validator */
    miss_counter: number;
}
/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequest {
    /** validator defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
    /** aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period */
    aggregate_prevote: AggregateExchangeRatePrevote | undefined;
}
/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequest {
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
    /** aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period */
    aggregate_prevotes: AggregateExchangeRatePrevote[];
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequest {
    /** validator defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
    /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
    aggregate_vote: AggregateExchangeRateVote | undefined;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequest {
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
    /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
    aggregate_votes: AggregateExchangeRateVote[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export declare const QueryExchangeRateRequest: {
    encode(message: QueryExchangeRateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateRequest;
    fromJSON(object: any): QueryExchangeRateRequest;
    toJSON(message: QueryExchangeRateRequest): unknown;
    fromPartial(object: DeepPartial<QueryExchangeRateRequest>): QueryExchangeRateRequest;
};
export declare const QueryExchangeRateResponse: {
    encode(message: QueryExchangeRateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateResponse;
    fromJSON(object: any): QueryExchangeRateResponse;
    toJSON(message: QueryExchangeRateResponse): unknown;
    fromPartial(object: DeepPartial<QueryExchangeRateResponse>): QueryExchangeRateResponse;
};
export declare const QueryExchangeRatesRequest: {
    encode(_: QueryExchangeRatesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesRequest;
    fromJSON(_: any): QueryExchangeRatesRequest;
    toJSON(_: QueryExchangeRatesRequest): unknown;
    fromPartial(_: DeepPartial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest;
};
export declare const QueryExchangeRatesResponse: {
    encode(message: QueryExchangeRatesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse;
    fromJSON(object: any): QueryExchangeRatesResponse;
    toJSON(message: QueryExchangeRatesResponse): unknown;
    fromPartial(object: DeepPartial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
};
export declare const QueryActivesRequest: {
    encode(_: QueryActivesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesRequest;
    fromJSON(_: any): QueryActivesRequest;
    toJSON(_: QueryActivesRequest): unknown;
    fromPartial(_: DeepPartial<QueryActivesRequest>): QueryActivesRequest;
};
export declare const QueryActivesResponse: {
    encode(message: QueryActivesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesResponse;
    fromJSON(object: any): QueryActivesResponse;
    toJSON(message: QueryActivesResponse): unknown;
    fromPartial(object: DeepPartial<QueryActivesResponse>): QueryActivesResponse;
};
export declare const QueryVoteTargetsRequest: {
    encode(_: QueryVoteTargetsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsRequest;
    fromJSON(_: any): QueryVoteTargetsRequest;
    toJSON(_: QueryVoteTargetsRequest): unknown;
    fromPartial(_: DeepPartial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest;
};
export declare const QueryVoteTargetsResponse: {
    encode(message: QueryVoteTargetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsResponse;
    fromJSON(object: any): QueryVoteTargetsResponse;
    toJSON(message: QueryVoteTargetsResponse): unknown;
    fromPartial(object: DeepPartial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse;
};
export declare const QueryFeederDelegationRequest: {
    encode(message: QueryFeederDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationRequest;
    fromJSON(object: any): QueryFeederDelegationRequest;
    toJSON(message: QueryFeederDelegationRequest): unknown;
    fromPartial(object: DeepPartial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest;
};
export declare const QueryFeederDelegationResponse: {
    encode(message: QueryFeederDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse;
    fromJSON(object: any): QueryFeederDelegationResponse;
    toJSON(message: QueryFeederDelegationResponse): unknown;
    fromPartial(object: DeepPartial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
};
export declare const QueryMissCounterRequest: {
    encode(message: QueryMissCounterRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterRequest;
    fromJSON(object: any): QueryMissCounterRequest;
    toJSON(message: QueryMissCounterRequest): unknown;
    fromPartial(object: DeepPartial<QueryMissCounterRequest>): QueryMissCounterRequest;
};
export declare const QueryMissCounterResponse: {
    encode(message: QueryMissCounterResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMissCounterResponse;
    fromJSON(object: any): QueryMissCounterResponse;
    toJSON(message: QueryMissCounterResponse): unknown;
    fromPartial(object: DeepPartial<QueryMissCounterResponse>): QueryMissCounterResponse;
};
export declare const QueryAggregatePrevoteRequest: {
    encode(message: QueryAggregatePrevoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteRequest;
    fromJSON(object: any): QueryAggregatePrevoteRequest;
    toJSON(message: QueryAggregatePrevoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryAggregatePrevoteRequest>): QueryAggregatePrevoteRequest;
};
export declare const QueryAggregatePrevoteResponse: {
    encode(message: QueryAggregatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevoteResponse;
    fromJSON(object: any): QueryAggregatePrevoteResponse;
    toJSON(message: QueryAggregatePrevoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryAggregatePrevoteResponse>): QueryAggregatePrevoteResponse;
};
export declare const QueryAggregatePrevotesRequest: {
    encode(_: QueryAggregatePrevotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesRequest;
    fromJSON(_: any): QueryAggregatePrevotesRequest;
    toJSON(_: QueryAggregatePrevotesRequest): unknown;
    fromPartial(_: DeepPartial<QueryAggregatePrevotesRequest>): QueryAggregatePrevotesRequest;
};
export declare const QueryAggregatePrevotesResponse: {
    encode(message: QueryAggregatePrevotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregatePrevotesResponse;
    fromJSON(object: any): QueryAggregatePrevotesResponse;
    toJSON(message: QueryAggregatePrevotesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAggregatePrevotesResponse>): QueryAggregatePrevotesResponse;
};
export declare const QueryAggregateVoteRequest: {
    encode(message: QueryAggregateVoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteRequest;
    fromJSON(object: any): QueryAggregateVoteRequest;
    toJSON(message: QueryAggregateVoteRequest): unknown;
    fromPartial(object: DeepPartial<QueryAggregateVoteRequest>): QueryAggregateVoteRequest;
};
export declare const QueryAggregateVoteResponse: {
    encode(message: QueryAggregateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVoteResponse;
    fromJSON(object: any): QueryAggregateVoteResponse;
    toJSON(message: QueryAggregateVoteResponse): unknown;
    fromPartial(object: DeepPartial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse;
};
export declare const QueryAggregateVotesRequest: {
    encode(_: QueryAggregateVotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesRequest;
    fromJSON(_: any): QueryAggregateVotesRequest;
    toJSON(_: QueryAggregateVotesRequest): unknown;
    fromPartial(_: DeepPartial<QueryAggregateVotesRequest>): QueryAggregateVotesRequest;
};
export declare const QueryAggregateVotesResponse: {
    encode(message: QueryAggregateVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAggregateVotesResponse;
    fromJSON(object: any): QueryAggregateVotesResponse;
    toJSON(message: QueryAggregateVotesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** ExchangeRate returns exchange rate of a denom */
    ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    /** ExchangeRates returns exchange rates of all denoms */
    ExchangeRates(request: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    /** Actives returns all active denoms */
    Actives(request: QueryActivesRequest): Promise<QueryActivesResponse>;
    /** FeederDelegation returns feeder delegation of a validator */
    FeederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    /** MissCounter returns oracle miss counter of a validator */
    MissCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    /** AggregatePrevote returns an aggregate prevote of a validator */
    AggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    /** AggregatePrevotes returns aggregate prevotes of all validators */
    AggregatePrevotes(request: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    /** AggregateVote returns an aggregate vote of a validator */
    AggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    /** AggregateVotes returns aggregate votes of all validators */
    AggregateVotes(request: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    /** Params queries all parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    ExchangeRates(request: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    Actives(request: QueryActivesRequest): Promise<QueryActivesResponse>;
    FeederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    MissCounter(request: QueryMissCounterRequest): Promise<QueryMissCounterResponse>;
    AggregatePrevote(request: QueryAggregatePrevoteRequest): Promise<QueryAggregatePrevoteResponse>;
    AggregatePrevotes(request: QueryAggregatePrevotesRequest): Promise<QueryAggregatePrevotesResponse>;
    AggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    AggregateVotes(request: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=query.d.ts.map
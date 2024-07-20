import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
export declare const protobufPackage = "kujira.oracle";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
    hash: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type. */
export interface MsgAggregateExchangeRatePrevoteResponse {
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
    salt: string;
    exchange_rates: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
    operator: string;
    delegate: string;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {
}
export declare const MsgAggregateExchangeRatePrevote: {
    encode(message: MsgAggregateExchangeRatePrevote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevote;
    fromJSON(object: any): MsgAggregateExchangeRatePrevote;
    toJSON(message: MsgAggregateExchangeRatePrevote): unknown;
    fromPartial(object: DeepPartial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote;
};
export declare const MsgAggregateExchangeRatePrevoteResponse: {
    encode(_: MsgAggregateExchangeRatePrevoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevoteResponse;
    fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse;
    toJSON(_: MsgAggregateExchangeRatePrevoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgAggregateExchangeRatePrevoteResponse>): MsgAggregateExchangeRatePrevoteResponse;
};
export declare const MsgAggregateExchangeRateVote: {
    encode(message: MsgAggregateExchangeRateVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVote;
    fromJSON(object: any): MsgAggregateExchangeRateVote;
    toJSON(message: MsgAggregateExchangeRateVote): unknown;
    fromPartial(object: DeepPartial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote;
};
export declare const MsgAggregateExchangeRateVoteResponse: {
    encode(_: MsgAggregateExchangeRateVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse;
    fromJSON(_: any): MsgAggregateExchangeRateVoteResponse;
    toJSON(_: MsgAggregateExchangeRateVoteResponse): unknown;
    fromPartial(_: DeepPartial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse;
};
export declare const MsgDelegateFeedConsent: {
    encode(message: MsgDelegateFeedConsent, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsent;
    fromJSON(object: any): MsgDelegateFeedConsent;
    toJSON(message: MsgDelegateFeedConsent): unknown;
    fromPartial(object: DeepPartial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent;
};
export declare const MsgDelegateFeedConsentResponse: {
    encode(_: MsgDelegateFeedConsentResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse;
    fromJSON(_: any): MsgDelegateFeedConsentResponse;
    toJSON(_: MsgDelegateFeedConsentResponse): unknown;
    fromPartial(_: DeepPartial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse;
};
/** Msg defines the oracle Msg service. */
export interface Msg {
    /**
     * AggregateExchangeRatePrevote defines a method for submitting
     * aggregate exchange rate prevote
     */
    AggregateExchangeRatePrevote(request: MsgAggregateExchangeRatePrevote): Promise<MsgAggregateExchangeRatePrevoteResponse>;
    /**
     * AggregateExchangeRateVote defines a method for submitting
     * aggregate exchange rate vote
     */
    AggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
    /** DelegateFeedConsent defines a method for setting the feeder delegation */
    DelegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
}
//# sourceMappingURL=tx.d.ts.map
import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRateVote } from "./types/tx";
import { MsgAggregateExchangeRatePrevote } from "./types/tx";
import { MsgDelegateFeedConsent } from "./types/tx";
import { OracleExtension, setupOracleExtension } from "./queries";
export declare const types: ((string | {
    encode(message: MsgAggregateExchangeRateVote, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRateVote;
    fromJSON(object: any): MsgAggregateExchangeRateVote;
    toJSON(message: MsgAggregateExchangeRateVote): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote;
})[] | (string | {
    encode(message: MsgAggregateExchangeRatePrevote, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgAggregateExchangeRatePrevote;
    fromJSON(object: any): MsgAggregateExchangeRatePrevote;
    toJSON(message: MsgAggregateExchangeRatePrevote): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<MsgAggregateExchangeRatePrevote>): MsgAggregateExchangeRatePrevote;
})[] | (string | {
    encode(message: MsgDelegateFeedConsent, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgDelegateFeedConsent;
    fromJSON(object: any): MsgDelegateFeedConsent;
    toJSON(message: MsgDelegateFeedConsent): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent;
})[])[];
export declare const MissingWalletError: Error;
export declare const registry: Registry;
declare const msg: {
    msgAggregateExchangeRateVote: (data: MsgAggregateExchangeRateVote) => EncodeObject;
    msgAggregateExchangeRatePrevote: (data: MsgAggregateExchangeRatePrevote) => EncodeObject;
    msgDelegateFeedConsent: (data: MsgDelegateFeedConsent) => EncodeObject;
};
export { msg, OracleExtension, setupOracleExtension };
//# sourceMappingURL=index.d.ts.map
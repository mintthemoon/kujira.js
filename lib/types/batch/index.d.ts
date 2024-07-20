import { EncodeObject, Registry } from "@cosmjs/proto-signing";
import { MsgBatchResetDelegation, MsgWithdrawAllDelegatorRewards } from "./types/tx";
declare const types: ((string | {
    typeUrl: string;
    encode(message: MsgWithdrawAllDelegatorRewards, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewards;
    fromJSON(object: any): MsgWithdrawAllDelegatorRewards;
    toJSON(message: MsgWithdrawAllDelegatorRewards): unknown;
    fromPartial<I extends import("cosmjs-types").Exact<import("cosmjs-types").DeepPartial<MsgWithdrawAllDelegatorRewards>, I>>(object: I): MsgWithdrawAllDelegatorRewards;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgBatchResetDelegation, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgBatchResetDelegation;
    fromJSON(object: any): MsgBatchResetDelegation;
    toJSON(message: MsgBatchResetDelegation): unknown;
    fromPartial<I extends import("cosmjs-types").Exact<import("cosmjs-types").DeepPartial<MsgBatchResetDelegation>, I>>(object: I): MsgBatchResetDelegation;
})[])[];
export declare const registry: Registry;
declare const msg: {
    msgWithdrawAllDelegatorRewards: (data: MsgWithdrawAllDelegatorRewards) => EncodeObject;
    msgBatchResetDelegation: (data: MsgBatchResetDelegation) => EncodeObject;
};
export { msg, types };
//# sourceMappingURL=index.d.ts.map
import { DeepPartial, Exact } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { Rpc } from "cosmjs-types/helpers";
export declare const protobufPackage = "batch";
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 */
export interface MsgWithdrawAllDelegatorRewards {
    delegatorAddress: string;
}
/** MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type. */
export interface MsgWithdrawAllDelegatorRewardsResponse {
    amount: Coin[];
}
export interface MsgBatchResetDelegation {
    delegatorAddress: string;
    validators: string[];
    amounts: string[];
}
export interface MsgBatchResetDelegationResponse {
}
export declare const MsgWithdrawAllDelegatorRewards: {
    typeUrl: string;
    encode(message: MsgWithdrawAllDelegatorRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewards;
    fromJSON(object: any): MsgWithdrawAllDelegatorRewards;
    toJSON(message: MsgWithdrawAllDelegatorRewards): unknown;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawAllDelegatorRewards>, I>>(object: I): MsgWithdrawAllDelegatorRewards;
};
export declare const MsgWithdrawAllDelegatorRewardsResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawAllDelegatorRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawAllDelegatorRewardsResponse;
    fromJSON(object: any): MsgWithdrawAllDelegatorRewardsResponse;
    toJSON(message: MsgWithdrawAllDelegatorRewardsResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawAllDelegatorRewardsResponse>, I>>(object: I): MsgWithdrawAllDelegatorRewardsResponse;
};
export declare const MsgBatchResetDelegation: {
    typeUrl: string;
    encode(message: MsgBatchResetDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchResetDelegation;
    fromJSON(object: any): MsgBatchResetDelegation;
    toJSON(message: MsgBatchResetDelegation): unknown;
    fromPartial<I extends Exact<DeepPartial<MsgBatchResetDelegation>, I>>(object: I): MsgBatchResetDelegation;
};
export declare const MsgBatchResetDelegationResponse: {
    typeUrl: string;
    encode(_: MsgBatchResetDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBatchResetDelegationResponse;
    fromJSON(_: any): MsgBatchResetDelegationResponse;
    toJSON(_: MsgBatchResetDelegationResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<MsgBatchResetDelegationResponse>, I>>(_: I): MsgBatchResetDelegationResponse;
};
/** Msg defines the batch Msg service. */
export interface Msg {
    /**
     * WithdrawAllDelegatorRewards defines a method to withdraw rewards of delegator
     * from all staked validators.
     */
    WithdrawAllDelegatorRewards(request: MsgWithdrawAllDelegatorRewards): Promise<MsgWithdrawAllDelegatorRewardsResponse>;
    /**
     * BatchResetDelegation defines a method to delegate or undelegate in batches
     * from existing delegation and target delegation amount
     */
    BatchResetDelegation(request: MsgBatchResetDelegation): Promise<MsgBatchResetDelegationResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    WithdrawAllDelegatorRewards(request: MsgWithdrawAllDelegatorRewards): Promise<MsgWithdrawAllDelegatorRewardsResponse>;
    BatchResetDelegation(request: MsgBatchResetDelegation): Promise<MsgBatchResetDelegationResponse>;
}
//# sourceMappingURL=tx.d.ts.map
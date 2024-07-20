import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { BaseAccount } from "cosmjs-types/cosmos/auth/v1beta1/auth";
import { DeepPartial, Exact } from "cosmjs-types/helpers";
export declare const protobufPackage = "injective.types.v1beta1";
/**
 * EthAccount implements the authtypes.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
    baseAccount?: BaseAccount;
    codeHash: Uint8Array;
}
export declare const EthAccount: {
    typeUrl: string;
    encode(message: EthAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EthAccount;
    fromJSON(object: any): EthAccount;
    toJSON(message: EthAccount): unknown;
    fromPartial<I extends Exact<DeepPartial<EthAccount>, I>>(object: I): EthAccount;
};
//# sourceMappingURL=types.d.ts.map
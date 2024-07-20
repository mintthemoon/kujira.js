import { MsgUpdateParams } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { CommunityPoolSpendProposal } from "cosmjs-types/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpend } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgExecLegacyContent } from "cosmjs-types/cosmos/gov/v1/tx";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { ParameterChangeProposal } from "cosmjs-types/cosmos/params/v1beta1/params";
import { MsgSoftwareUpgrade } from "cosmjs-types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "cosmjs-types/cosmos/upgrade/v1beta1/upgrade";
import { ClearAdminProposal, ExecuteContractProposal, InstantiateContractProposal, MigrateContractProposal, PinCodesProposal, StoreCodeProposal, UpdateAdminProposal, UpdateInstantiateConfigProposal } from "cosmjs-types/cosmwasm/wasm/v1/proposal";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { ClientUpdateProposal } from "cosmjs-types/ibc/core/client/v1/client";
import { CreateHookProposal, DeleteHookProposal } from "./kujira/scheduler/types/proposal";
export declare const proposalTypes: ((string | {
    typeUrl: string;
    encode(message: CommunityPoolSpendProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): CommunityPoolSpendProposal;
    fromJSON(object: any): CommunityPoolSpendProposal;
    toJSON(message: CommunityPoolSpendProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        recipient?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CommunityPoolSpendProposal>, never>>(object: I): CommunityPoolSpendProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgCommunityPoolSpend, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpend;
    fromJSON(object: any): MsgCommunityPoolSpend;
    toJSON(message: MsgCommunityPoolSpend): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        recipient?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        authority?: string | undefined;
        recipient?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCommunityPoolSpend>, never>>(object: I): MsgCommunityPoolSpend;
})[] | (string | {
    typeUrl: string;
    encode(message: ParameterChangeProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): ParameterChangeProposal;
    fromJSON(object: any): ParameterChangeProposal;
    toJSON(message: ParameterChangeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        changes?: {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        changes?: ({
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["changes"][number], keyof import("cosmjs-types/cosmos/params/v1beta1/params").ParamChange>, never>)[] & Record<Exclude<keyof I["changes"], keyof {
            subspace?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ParameterChangeProposal>, never>>(object: I): ParameterChangeProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            sendEnabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            defaultSendEnabled?: boolean | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            sendEnabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            defaultSendEnabled?: boolean | undefined;
        } & {
            sendEnabled?: ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["params"]["sendEnabled"][number], keyof import("cosmjs-types/cosmos/bank/v1beta1/bank").SendEnabled>, never>)[] & Record<Exclude<keyof I["params"]["sendEnabled"], keyof {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[]>, never>) | undefined;
            defaultSendEnabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof import("cosmjs-types/cosmos/bank/v1beta1/bank").Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateParams>, never>>(object: I): MsgUpdateParams;
})[] | (string | {
    typeUrl: string;
    encode(message: StoreCodeProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): StoreCodeProposal;
    fromJSON(object: any): StoreCodeProposal;
    toJSON(message: StoreCodeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } | undefined;
        unpinCode?: boolean | undefined;
        source?: string | undefined;
        builder?: string | undefined;
        codeHash?: Uint8Array | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: ({
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } & {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: (string[] & string[] & Record<Exclude<keyof I["instantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["instantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
        unpinCode?: boolean | undefined;
        source?: string | undefined;
        builder?: string | undefined;
        codeHash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof StoreCodeProposal>, never>>(object: I): StoreCodeProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: InstantiateContractProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): InstantiateContractProposal;
    fromJSON(object: any): InstantiateContractProposal;
    toJSON(message: InstantiateContractProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof InstantiateContractProposal>, never>>(object: I): InstantiateContractProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MigrateContractProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MigrateContractProposal;
    fromJSON(object: any): MigrateContractProposal;
    toJSON(message: MigrateContractProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MigrateContractProposal>, never>>(object: I): MigrateContractProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: UpdateAdminProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): UpdateAdminProposal;
    fromJSON(object: any): UpdateAdminProposal;
    toJSON(message: UpdateAdminProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I, keyof UpdateAdminProposal>, never>>(object: I): UpdateAdminProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: ClearAdminProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): ClearAdminProposal;
    fromJSON(object: any): ClearAdminProposal;
    toJSON(message: ClearAdminProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I, keyof ClearAdminProposal>, never>>(object: I): ClearAdminProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: PinCodesProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): PinCodesProposal;
    fromJSON(object: any): PinCodesProposal;
    toJSON(message: PinCodesProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        codeIds?: bigint[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        codeIds?: (bigint[] & bigint[] & Record<Exclude<keyof I["codeIds"], keyof bigint[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PinCodesProposal>, never>>(object: I): PinCodesProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: ExecuteContractProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): ExecuteContractProposal;
    fromJSON(object: any): ExecuteContractProposal;
    toJSON(message: ExecuteContractProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runAs?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ExecuteContractProposal>, never>>(object: I): ExecuteContractProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: UpdateInstantiateConfigProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): UpdateInstantiateConfigProposal;
    fromJSON(object: any): UpdateInstantiateConfigProposal;
    toJSON(message: UpdateInstantiateConfigProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        accessConfigUpdates?: {
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        accessConfigUpdates?: ({
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        }[] & ({
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        } & {
            codeId?: bigint | undefined;
            instantiatePermission?: ({
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } & {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: (string[] & string[] & Record<Exclude<keyof I["accessConfigUpdates"][number]["instantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["accessConfigUpdates"][number]["instantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
        } & Record<Exclude<keyof I["accessConfigUpdates"][number], keyof import("cosmjs-types/cosmwasm/wasm/v1/proposal").AccessConfigUpdate>, never>)[] & Record<Exclude<keyof I["accessConfigUpdates"], keyof {
            codeId?: bigint | undefined;
            instantiatePermission?: {
                permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
                addresses?: string[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UpdateInstantiateConfigProposal>, never>>(object: I): UpdateInstantiateConfigProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgStoreCode, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        wasmByteCode?: Uint8Array | undefined;
        instantiatePermission?: ({
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } & {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: (string[] & string[] & Record<Exclude<keyof I["instantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["instantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgStoreCode>, never>>(object: I): MsgStoreCode;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgInstantiateContract, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        admin?: string | undefined;
        codeId?: bigint | undefined;
        label?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgInstantiateContract>, never>>(object: I): MsgInstantiateContract;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgMigrateContract, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
        codeId?: bigint | undefined;
        msg?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgMigrateContract>, never>>(object: I): MsgMigrateContract;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgUpdateAdmin, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgUpdateAdmin;
    fromJSON(object: any): MsgUpdateAdmin;
    toJSON(message: MsgUpdateAdmin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & {
        sender?: string | undefined;
        newAdmin?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateAdmin>, never>>(object: I): MsgUpdateAdmin;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgClearAdmin, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        contract?: string | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgClearAdmin>, never>>(object: I): MsgClearAdmin;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgExecuteContract, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
        msg?: Uint8Array | undefined;
        funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funds"][number], keyof import("cosmjs-types/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgExecuteContract>, never>>(object: I): MsgExecuteContract;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgUpdateInstantiateConfig, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgUpdateInstantiateConfig;
    fromJSON(object: any): MsgUpdateInstantiateConfig;
    toJSON(message: MsgUpdateInstantiateConfig): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        codeId?: bigint | undefined;
        newInstantiatePermission?: {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        codeId?: bigint | undefined;
        newInstantiatePermission?: ({
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: string[] | undefined;
        } & {
            permission?: import("cosmjs-types/cosmwasm/wasm/v1/types").AccessType | undefined;
            address?: string | undefined;
            addresses?: (string[] & string[] & Record<Exclude<keyof I["newInstantiatePermission"]["addresses"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["newInstantiatePermission"], keyof import("cosmjs-types/cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateInstantiateConfig>, never>>(object: I): MsgUpdateInstantiateConfig;
})[] | (string | {
    typeUrl: string;
    encode(message: SoftwareUpgradeProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): SoftwareUpgradeProposal;
    fromJSON(object: any): SoftwareUpgradeProposal;
    toJSON(message: SoftwareUpgradeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        plan?: {
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        plan?: ({
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            time?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["plan"]["time"], keyof import("cosmjs-types/google/protobuf/timestamp").Timestamp>, never>) | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["plan"]["upgradedClientState"], keyof import("cosmjs-types/google/protobuf/any").Any>, never>) | undefined;
        } & Record<Exclude<keyof I["plan"], keyof import("cosmjs-types/cosmos/upgrade/v1beta1/upgrade").Plan>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SoftwareUpgradeProposal>, never>>(object: I): SoftwareUpgradeProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgSoftwareUpgrade, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgrade;
    fromJSON(object: any): MsgSoftwareUpgrade;
    toJSON(message: MsgSoftwareUpgrade): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        plan?: {
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        plan?: ({
            name?: string | undefined;
            time?: {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            time?: ({
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: bigint | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["plan"]["time"], keyof import("cosmjs-types/google/protobuf/timestamp").Timestamp>, never>) | undefined;
            height?: bigint | undefined;
            info?: string | undefined;
            upgradedClientState?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["plan"]["upgradedClientState"], keyof import("cosmjs-types/google/protobuf/any").Any>, never>) | undefined;
        } & Record<Exclude<keyof I["plan"], keyof import("cosmjs-types/cosmos/upgrade/v1beta1/upgrade").Plan>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSoftwareUpgrade>, never>>(object: I): MsgSoftwareUpgrade;
})[] | (string | {
    encode(message: CreateHookProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): CreateHookProposal;
    fromJSON(object: any): CreateHookProposal;
    toJSON(message: CreateHookProposal): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<CreateHookProposal>): CreateHookProposal;
})[] | (string | {
    encode(message: DeleteHookProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): DeleteHookProposal;
    fromJSON(object: any): DeleteHookProposal;
    toJSON(message: DeleteHookProposal): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<DeleteHookProposal>): DeleteHookProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: TextProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): TextProposal;
    fromJSON(object: any): TextProposal;
    toJSON(message: TextProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
    } & Record<Exclude<keyof I, keyof TextProposal>, never>>(object: I): TextProposal;
})[] | (string | {
    typeUrl: string;
    encode(message: MsgExecLegacyContent, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgExecLegacyContent;
    fromJSON(object: any): MsgExecLegacyContent;
    toJSON(message: MsgExecLegacyContent): unknown;
    fromPartial<I extends {
        content?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        authority?: string | undefined;
    } & {
        content?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["content"], keyof import("cosmjs-types/google/protobuf/any").Any>, never>) | undefined;
        authority?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgExecLegacyContent>, never>>(object: I): MsgExecLegacyContent;
})[] | (string | {
    typeUrl: string;
    encode(message: ClientUpdateProposal, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): ClientUpdateProposal;
    fromJSON(object: any): ClientUpdateProposal;
    toJSON(message: ClientUpdateProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        subjectClientId?: string | undefined;
        substituteClientId?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        subjectClientId?: string | undefined;
        substituteClientId?: string | undefined;
    } & Record<Exclude<keyof I, keyof ClientUpdateProposal>, never>>(object: I): ClientUpdateProposal;
})[])[];
//# sourceMappingURL=proposalTypes.d.ts.map
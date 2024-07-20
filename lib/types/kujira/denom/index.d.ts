import { Registry, EncodeObject } from "@cosmjs/proto-signing";
import { MsgBurn, MsgChangeAdmin, MsgCreateDenom, MsgMint } from "./types/tx";
import { DenomExtension, setupDenomExtension } from "./queries";
declare const types: ((string | {
    encode(message: MsgBurn, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgBurn;
    fromJSON(object: any): MsgBurn;
    toJSON(message: MsgBurn): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<MsgBurn>): MsgBurn;
})[] | (string | {
    encode(message: MsgChangeAdmin, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgChangeAdmin;
    fromJSON(object: any): MsgChangeAdmin;
    toJSON(message: MsgChangeAdmin): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<MsgChangeAdmin>): MsgChangeAdmin;
})[] | (string | {
    encode(message: MsgCreateDenom, writer?: import("cosmjs-types/binary").BinaryWriter): import("cosmjs-types/binary").BinaryWriter;
    decode(input: import("cosmjs-types/binary").BinaryReader | Uint8Array, length?: number): MsgCreateDenom;
    fromJSON(object: any): MsgCreateDenom;
    toJSON(message: MsgCreateDenom): unknown;
    fromPartial(object: import("cosmjs-types").DeepPartial<MsgCreateDenom>): MsgCreateDenom;
})[])[];
export declare const registry: Registry;
declare const msg: {
    msgBurn: (data: MsgBurn) => EncodeObject;
    msgChangeAdmin: (data: MsgChangeAdmin) => EncodeObject;
    msgCreateDenom: (data: MsgCreateDenom) => EncodeObject;
    msgMint: (data: MsgMint) => EncodeObject;
};
export { msg, types, type DenomExtension, setupDenomExtension };
//# sourceMappingURL=index.d.ts.map
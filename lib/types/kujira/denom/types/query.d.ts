import { DeepPartial } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { Params } from "./params";
export declare const protobufPackage = "kujira.denom";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export interface QueryDenomAuthorityMetadataRequest {
    denom: string;
}
export interface QueryDenomAuthorityMetadataResponse {
    authority_metadata: DenomAuthorityMetadata | undefined;
}
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
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
export declare const QueryDenomAuthorityMetadataRequest: {
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest;
    fromJSON(object: any): QueryDenomAuthorityMetadataRequest;
    toJSON(message: QueryDenomAuthorityMetadataRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse;
    fromJSON(object: any): QueryDenomAuthorityMetadataResponse;
    toJSON(message: QueryDenomAuthorityMetadataResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse;
};
export declare const QueryDenomsFromCreatorRequest: {
    encode(message: QueryDenomsFromCreatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest;
    fromJSON(object: any): QueryDenomsFromCreatorRequest;
    toJSON(message: QueryDenomsFromCreatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
};
export declare const QueryDenomsFromCreatorResponse: {
    encode(message: QueryDenomsFromCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse;
    fromJSON(object: any): QueryDenomsFromCreatorResponse;
    toJSON(message: QueryDenomsFromCreatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    DenomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    DenomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    DenomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    DenomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=query.d.ts.map
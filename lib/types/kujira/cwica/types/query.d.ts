import { DeepPartial, Exact } from "cosmjs-types";
import { BinaryReader, BinaryWriter } from "cosmjs-types/binary";
import { Rpc } from "cosmjs-types/helpers";
export declare const protobufPackage = "kujira.cwica";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountRequest {
    owner: string;
    connectionId: string;
    accountId: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountResponse {
    interchainAccountAddress: string;
}
export declare const QueryInterchainAccountRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountRequest;
    fromJSON(object: any): QueryInterchainAccountRequest;
    toJSON(message: QueryInterchainAccountRequest): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountRequest>, I>>(object: I): QueryInterchainAccountRequest;
};
export declare const QueryInterchainAccountResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountResponse;
    fromJSON(object: any): QueryInterchainAccountResponse;
    toJSON(message: QueryInterchainAccountResponse): unknown;
    fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountResponse>, I>>(object: I): QueryInterchainAccountResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** QueryInterchainAccount returns the interchain account for given owner address on a given connection pair */
    InterchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    InterchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
}
//# sourceMappingURL=query.d.ts.map
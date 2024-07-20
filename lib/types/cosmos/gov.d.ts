import { GovParamsType, GovProposalId, QueryClient } from "@cosmjs/stargate";
import { PageRequest } from "cosmjs-types/cosmos/base/query/v1beta1/pagination";
import { ProposalStatus } from "cosmjs-types/cosmos/gov/v1/gov";
import { QueryDepositResponse, QueryDepositsResponse, QueryParamsResponse, QueryProposalResponse, QueryProposalsResponse, QueryTallyResultResponse, QueryVoteResponse, QueryVotesResponse } from "cosmjs-types/cosmos/gov/v1/query";
export interface GovExtension {
    readonly gov: {
        readonly params: (parametersType: GovParamsType) => Promise<QueryParamsResponse>;
        readonly proposals: (proposalStatus: ProposalStatus, depositor: string, voter: string, pagination?: PageRequest) => Promise<QueryProposalsResponse>;
        readonly proposal: (proposalId: GovProposalId) => Promise<QueryProposalResponse>;
        readonly deposits: (proposalId: GovProposalId, pagination?: PageRequest) => Promise<QueryDepositsResponse>;
        readonly deposit: (proposalId: GovProposalId, depositorAddress: string) => Promise<QueryDepositResponse>;
        readonly tally: (proposalId: GovProposalId) => Promise<QueryTallyResultResponse>;
        readonly votes: (proposalId: GovProposalId, pagination?: PageRequest) => Promise<QueryVotesResponse>;
        readonly vote: (proposalId: GovProposalId, voterAddress: string) => Promise<QueryVoteResponse>;
    };
}
export declare function setupGovExtension(base: QueryClient): GovExtension;
//# sourceMappingURL=gov.d.ts.map
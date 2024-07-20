import { MsgExec, MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import * as bank from "cosmjs-types/cosmos/bank/v1beta1/tx";
import * as distribution from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { MsgGrantAllowance, MsgRevokeAllowance } from "cosmjs-types/cosmos/feegrant/v1beta1/tx";
import * as gov from "cosmjs-types/cosmos/gov/v1/tx";
import * as govV1Beta1 from "cosmjs-types/cosmos/gov/v1beta1/tx";
import * as staking from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgCreateVestingAccount } from "cosmjs-types/cosmos/vesting/v1beta1/tx";
import { MsgClearAdmin, MsgExecuteContract, MsgInstantiateContract, MsgInstantiateContract2, MsgMigrateContract, MsgStoreCode, MsgUpdateAdmin, MsgUpdateInstantiateConfig } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgTransfer } from "cosmjs-types/ibc/applications/transfer/v1/tx";
import { MsgUpdateClient } from "cosmjs-types/ibc/core/client/v1/tx";
import * as batch from "./batch";
import * as gravity from "./gravity/v1";
import * as denom from "./kujira/denom";
import * as oracle from "./kujira/oracle";
export const msg = {
    authz: {
        msgExec: (i)=>({
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: MsgExec.fromPartial(i)
            }),
        msgGrant: (i)=>({
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: MsgGrant.fromPartial(i)
            }),
        msgRevoke: (i)=>({
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: MsgRevoke.fromPartial(i)
            })
    },
    bank: {
        msgSend: (i)=>({
                typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                value: bank.MsgSend.fromPartial(i)
            }),
        msgMultiSend: (i)=>({
                typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: bank.MsgMultiSend.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
                value: bank.MsgUpdateParams.fromPartial(i)
            })
    },
    distribution: {
        msgFundCommunityPool: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: distribution.MsgFundCommunityPool.fromPartial(i)
            }),
        msgSetWithdrawAddress: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: distribution.MsgSetWithdrawAddress.fromPartial(i)
            }),
        msgWithdrawDelegatorReward: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: distribution.MsgWithdrawDelegatorReward.fromPartial(i)
            }),
        msgWithdrawValidatorCommission: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: distribution.MsgWithdrawValidatorCommission.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: distribution.MsgUpdateParams.fromPartial(i)
            })
    },
    denom: denom.msg,
    feegrant: {
        msgGrantAllowance: (i)=>({
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: MsgGrantAllowance.fromPartial(i)
            }),
        msgRevokeAllowance: (i)=>({
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: MsgRevokeAllowance.fromPartial(i)
            })
    },
    gov: {
        msgDeposit: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: gov.MsgDeposit.fromPartial(i)
            }),
        msgDepositBeta: (i)=>({
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
                value: govV1Beta1.MsgDeposit.fromPartial(i)
            }),
        msgSubmitProposal: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: gov.MsgSubmitProposal.fromPartial(i)
            }),
        msgVote: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: gov.MsgVote.fromPartial(i)
            }),
        msgVoteBeta: (i)=>({
                typeUrl: "/cosmos.gov.v1beta1.MsgVote",
                value: govV1Beta1.MsgVote.fromPartial(i)
            }),
        msgVoteWeighted: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: gov.MsgVoteWeighted.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
                value: gov.MsgUpdateParams.fromPartial(i)
            })
    },
    oracle: oracle.msg,
    staking: {
        msgBeginRedelegate: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                value: staking.MsgBeginRedelegate.fromPartial(i)
            }),
        msgCreateValidator: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
                value: staking.MsgCreateValidator.fromPartial(i)
            }),
        msgDelegate: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                value: staking.MsgDelegate.fromPartial(i)
            }),
        msgEditValidator: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
                value: staking.MsgEditValidator.fromPartial(i)
            }),
        msgUndelegate: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                value: staking.MsgUndelegate.fromPartial(i)
            }),
        msgCancelUnbondingDelegation: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
                value: staking.MsgCancelUnbondingDelegation.fromPartial(i)
            }),
        msgUpdateParams: (i)=>({
                typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
                value: staking.MsgUpdateParams.fromPartial(i)
            })
    },
    vesting: {
        msgCreateVestingAccount: (i)=>({
                typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
                value: MsgCreateVestingAccount.fromPartial(i)
            })
    },
    wasm: {
        msgClearAdmin: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: MsgClearAdmin.fromPartial(i)
            }),
        msgExecuteContract: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: MsgExecuteContract.fromPartial(i)
            }),
        msgMigrateContract: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: MsgMigrateContract.fromPartial(i)
            }),
        msgStoreCode: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: MsgStoreCode.fromPartial(i)
            }),
        msgInstantiateContract: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: MsgInstantiateContract.fromPartial(i)
            }),
        msgUpdateAdmin: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: MsgUpdateAdmin.fromPartial(i)
            }),
        msgInstantiateContract2: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: MsgInstantiateContract2.fromPartial(i)
            }),
        msgUpdateInstantiateConfig: (i)=>({
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
                value: MsgUpdateInstantiateConfig.fromPartial(i)
            })
    },
    ibc: {
        msgTransfer: (i)=>({
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: MsgTransfer.fromPartial(i)
            }),
        msgUpdateClient: (i)=>({
                typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
                value: MsgUpdateClient.fromPartial(i)
            })
    },
    gravity: gravity.msg,
    batch: batch.msg
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tc2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTXNnRXhlYyxcbiAgTXNnR3JhbnQsXG4gIE1zZ1Jldm9rZSxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvYXV0aHovdjFiZXRhMS90eFwiO1xuaW1wb3J0ICogYXMgYmFuayBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9iYW5rL3YxYmV0YTEvdHhcIjtcbmltcG9ydCAqIGFzIGRpc3RyaWJ1dGlvbiBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9kaXN0cmlidXRpb24vdjFiZXRhMS90eFwiO1xuaW1wb3J0IHtcbiAgTXNnR3JhbnRBbGxvd2FuY2UsXG4gIE1zZ1Jldm9rZUFsbG93YW5jZSxcbn0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvZmVlZ3JhbnQvdjFiZXRhMS90eFwiO1xuaW1wb3J0ICogYXMgZ292IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2dvdi92MS90eFwiO1xuaW1wb3J0ICogYXMgZ292VjFCZXRhMSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9nb3YvdjFiZXRhMS90eFwiO1xuaW1wb3J0ICogYXMgc3Rha2luZyBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc21vcy9zdGFraW5nL3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IE1zZ0NyZWF0ZVZlc3RpbmdBY2NvdW50IH0gZnJvbSBcImNvc21qcy10eXBlcy9jb3Ntb3MvdmVzdGluZy92MWJldGExL3R4XCI7XG5pbXBvcnQge1xuICBNc2dDbGVhckFkbWluLFxuICBNc2dFeGVjdXRlQ29udHJhY3QsXG4gIE1zZ0luc3RhbnRpYXRlQ29udHJhY3QsXG4gIE1zZ0luc3RhbnRpYXRlQ29udHJhY3QyLFxuICBNc2dNaWdyYXRlQ29udHJhY3QsXG4gIE1zZ1N0b3JlQ29kZSxcbiAgTXNnVXBkYXRlQWRtaW4sXG4gIE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnLFxufSBmcm9tIFwiY29zbWpzLXR5cGVzL2Nvc213YXNtL3dhc20vdjEvdHhcIjtcbmltcG9ydCB7IE1zZ1RyYW5zZmVyIH0gZnJvbSBcImNvc21qcy10eXBlcy9pYmMvYXBwbGljYXRpb25zL3RyYW5zZmVyL3YxL3R4XCI7XG5pbXBvcnQgeyBNc2dVcGRhdGVDbGllbnQgfSBmcm9tIFwiY29zbWpzLXR5cGVzL2liYy9jb3JlL2NsaWVudC92MS90eFwiO1xuaW1wb3J0ICogYXMgYmF0Y2ggZnJvbSBcIi4vYmF0Y2hcIjtcbmltcG9ydCAqIGFzIGdyYXZpdHkgZnJvbSBcIi4vZ3Jhdml0eS92MVwiO1xuaW1wb3J0ICogYXMgZGVub20gZnJvbSBcIi4va3VqaXJhL2Rlbm9tXCI7XG5pbXBvcnQgKiBhcyBvcmFjbGUgZnJvbSBcIi4va3VqaXJhL29yYWNsZVwiO1xuXG5leHBvcnQgY29uc3QgbXNnID0ge1xuICBhdXRoejoge1xuICAgIG1zZ0V4ZWM6IChpOiBNc2dFeGVjKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnRXhlY1wiLFxuICAgICAgdmFsdWU6IE1zZ0V4ZWMuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnR3JhbnQ6IChpOiBNc2dHcmFudCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5hdXRoei52MWJldGExLk1zZ0dyYW50XCIsXG4gICAgICB2YWx1ZTogTXNnR3JhbnQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnUmV2b2tlOiAoaTogTXNnUmV2b2tlKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmF1dGh6LnYxYmV0YTEuTXNnUmV2b2tlXCIsXG4gICAgICB2YWx1ZTogTXNnUmV2b2tlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBiYW5rOiB7XG4gICAgbXNnU2VuZDogKGk6IGJhbmsuTXNnU2VuZCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZFwiLFxuICAgICAgdmFsdWU6IGJhbmsuTXNnU2VuZC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dNdWx0aVNlbmQ6IChpOiBiYW5rLk1zZ011bHRpU2VuZCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnTXVsdGlTZW5kXCIsXG4gICAgICB2YWx1ZTogYmFuay5Nc2dNdWx0aVNlbmQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnVXBkYXRlUGFyYW1zOiAoaTogYmFuay5Nc2dVcGRhdGVQYXJhbXMpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuYmFuay52MWJldGExLk1zZ1VwZGF0ZVBhcmFtc1wiLFxuICAgICAgdmFsdWU6IGJhbmsuTXNnVXBkYXRlUGFyYW1zLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBkaXN0cmlidXRpb246IHtcbiAgICBtc2dGdW5kQ29tbXVuaXR5UG9vbDogKGk6IGRpc3RyaWJ1dGlvbi5Nc2dGdW5kQ29tbXVuaXR5UG9vbCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Nc2dGdW5kQ29tbXVuaXR5UG9vbFwiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dGdW5kQ29tbXVuaXR5UG9vbC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dTZXRXaXRoZHJhd0FkZHJlc3M6IChpOiBkaXN0cmlidXRpb24uTXNnU2V0V2l0aGRyYXdBZGRyZXNzKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ1NldFdpdGhkcmF3QWRkcmVzc1wiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dTZXRXaXRoZHJhd0FkZHJlc3MuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnV2l0aGRyYXdEZWxlZ2F0b3JSZXdhcmQ6IChcbiAgICAgIGk6IGRpc3RyaWJ1dGlvbi5Nc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZFxuICAgICkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5kaXN0cmlidXRpb24udjFiZXRhMS5Nc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZFwiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dXaXRoZHJhd1ZhbGlkYXRvckNvbW1pc3Npb246IChcbiAgICAgIGk6IGRpc3RyaWJ1dGlvbi5Nc2dXaXRoZHJhd1ZhbGlkYXRvckNvbW1pc3Npb25cbiAgICApID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZGlzdHJpYnV0aW9uLnYxYmV0YTEuTXNnV2l0aGRyYXdWYWxpZGF0b3JDb21taXNzaW9uXCIsXG4gICAgICB2YWx1ZTogZGlzdHJpYnV0aW9uLk1zZ1dpdGhkcmF3VmFsaWRhdG9yQ29tbWlzc2lvbi5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dVcGRhdGVQYXJhbXM6IChpOiBkaXN0cmlidXRpb24uTXNnVXBkYXRlUGFyYW1zKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmRpc3RyaWJ1dGlvbi52MWJldGExLk1zZ1VwZGF0ZVBhcmFtc1wiLFxuICAgICAgdmFsdWU6IGRpc3RyaWJ1dGlvbi5Nc2dVcGRhdGVQYXJhbXMuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gIH0sXG4gIGRlbm9tOiBkZW5vbS5tc2csXG4gIGZlZWdyYW50OiB7XG4gICAgbXNnR3JhbnRBbGxvd2FuY2U6IChpOiBNc2dHcmFudEFsbG93YW5jZSkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5mZWVncmFudC52MWJldGExLk1zZ0dyYW50QWxsb3dhbmNlXCIsXG4gICAgICB2YWx1ZTogTXNnR3JhbnRBbGxvd2FuY2UuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnUmV2b2tlQWxsb3dhbmNlOiAoaTogTXNnUmV2b2tlQWxsb3dhbmNlKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmZlZWdyYW50LnYxYmV0YTEuTXNnUmV2b2tlQWxsb3dhbmNlXCIsXG4gICAgICB2YWx1ZTogTXNnUmV2b2tlQWxsb3dhbmNlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBnb3Y6IHtcbiAgICBtc2dEZXBvc2l0OiAoaTogZ292Lk1zZ0RlcG9zaXQpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZ292LnYxLk1zZ0RlcG9zaXRcIixcbiAgICAgIHZhbHVlOiBnb3YuTXNnRGVwb3NpdC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dEZXBvc2l0QmV0YTogKGk6IGdvdlYxQmV0YTEuTXNnRGVwb3NpdCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5nb3YudjFiZXRhMS5Nc2dEZXBvc2l0XCIsXG4gICAgICB2YWx1ZTogZ292VjFCZXRhMS5Nc2dEZXBvc2l0LmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1N1Ym1pdFByb3Bvc2FsOiAoaTogZ292Lk1zZ1N1Ym1pdFByb3Bvc2FsKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLmdvdi52MS5Nc2dTdWJtaXRQcm9wb3NhbFwiLFxuICAgICAgdmFsdWU6IGdvdi5Nc2dTdWJtaXRQcm9wb3NhbC5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dWb3RlOiAoaTogZ292Lk1zZ1ZvdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZ292LnYxLk1zZ1ZvdGVcIixcbiAgICAgIHZhbHVlOiBnb3YuTXNnVm90ZS5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dWb3RlQmV0YTogKGk6IGdvdlYxQmV0YTEuTXNnVm90ZSkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5nb3YudjFiZXRhMS5Nc2dWb3RlXCIsXG4gICAgICB2YWx1ZTogZ292VjFCZXRhMS5Nc2dWb3RlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1ZvdGVXZWlnaHRlZDogKGk6IGdvdi5Nc2dWb3RlV2VpZ2h0ZWQpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MuZ292LnYxLk1zZ1ZvdGVXZWlnaHRlZFwiLFxuICAgICAgdmFsdWU6IGdvdi5Nc2dWb3RlV2VpZ2h0ZWQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnVXBkYXRlUGFyYW1zOiAoaTogZ292Lk1zZ1VwZGF0ZVBhcmFtcykgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc21vcy5nb3YudjEuTXNnVXBkYXRlUGFyYW1zXCIsXG4gICAgICB2YWx1ZTogZ292Lk1zZ1VwZGF0ZVBhcmFtcy5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgfSxcbiAgb3JhY2xlOiBvcmFjbGUubXNnLFxuICBzdGFraW5nOiB7XG4gICAgbXNnQmVnaW5SZWRlbGVnYXRlOiAoaTogc3Rha2luZy5Nc2dCZWdpblJlZGVsZWdhdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0JlZ2luUmVkZWxlZ2F0ZVwiLFxuICAgICAgdmFsdWU6IHN0YWtpbmcuTXNnQmVnaW5SZWRlbGVnYXRlLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ0NyZWF0ZVZhbGlkYXRvcjogKGk6IHN0YWtpbmcuTXNnQ3JlYXRlVmFsaWRhdG9yKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dDcmVhdGVWYWxpZGF0b3JcIixcbiAgICAgIHZhbHVlOiBzdGFraW5nLk1zZ0NyZWF0ZVZhbGlkYXRvci5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dEZWxlZ2F0ZTogKGk6IHN0YWtpbmcuTXNnRGVsZWdhdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ0RlbGVnYXRlXCIsXG4gICAgICB2YWx1ZTogc3Rha2luZy5Nc2dEZWxlZ2F0ZS5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dFZGl0VmFsaWRhdG9yOiAoaTogc3Rha2luZy5Nc2dFZGl0VmFsaWRhdG9yKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dFZGl0VmFsaWRhdG9yXCIsXG4gICAgICB2YWx1ZTogc3Rha2luZy5Nc2dFZGl0VmFsaWRhdG9yLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VuZGVsZWdhdGU6IChpOiBzdGFraW5nLk1zZ1VuZGVsZWdhdGUpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3Muc3Rha2luZy52MWJldGExLk1zZ1VuZGVsZWdhdGVcIixcbiAgICAgIHZhbHVlOiBzdGFraW5nLk1zZ1VuZGVsZWdhdGUuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbjogKFxuICAgICAgaTogc3Rha2luZy5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXG4gICAgKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uXCIsXG4gICAgICB2YWx1ZTogc3Rha2luZy5Nc2dDYW5jZWxVbmJvbmRpbmdEZWxlZ2F0aW9uLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VwZGF0ZVBhcmFtczogKGk6IHN0YWtpbmcuTXNnVXBkYXRlUGFyYW1zKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbW9zLnN0YWtpbmcudjFiZXRhMS5Nc2dVcGRhdGVQYXJhbXNcIixcbiAgICAgIHZhbHVlOiBzdGFraW5nLk1zZ1VwZGF0ZVBhcmFtcy5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgfSxcbiAgdmVzdGluZzoge1xuICAgIG1zZ0NyZWF0ZVZlc3RpbmdBY2NvdW50OiAoaTogTXNnQ3JlYXRlVmVzdGluZ0FjY291bnQpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntb3MudmVzdGluZy52MWJldGExLk1zZ0NyZWF0ZVZlc3RpbmdBY2NvdW50XCIsXG4gICAgICB2YWx1ZTogTXNnQ3JlYXRlVmVzdGluZ0FjY291bnQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gIH0sXG4gIHdhc206IHtcbiAgICBtc2dDbGVhckFkbWluOiAoaTogTXNnQ2xlYXJBZG1pbikgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc213YXNtLndhc20udjEuTXNnQ2xlYXJBZG1pblwiLFxuICAgICAgdmFsdWU6IE1zZ0NsZWFyQWRtaW4uZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnRXhlY3V0ZUNvbnRyYWN0OiAoaTogTXNnRXhlY3V0ZUNvbnRyYWN0KSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dFeGVjdXRlQ29udHJhY3RcIixcbiAgICAgIHZhbHVlOiBNc2dFeGVjdXRlQ29udHJhY3QuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnTWlncmF0ZUNvbnRyYWN0OiAoaTogTXNnTWlncmF0ZUNvbnRyYWN0KSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dNaWdyYXRlQ29udHJhY3RcIixcbiAgICAgIHZhbHVlOiBNc2dNaWdyYXRlQ29udHJhY3QuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnU3RvcmVDb2RlOiAoaTogTXNnU3RvcmVDb2RlKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dTdG9yZUNvZGVcIixcbiAgICAgIHZhbHVlOiBNc2dTdG9yZUNvZGUuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnSW5zdGFudGlhdGVDb250cmFjdDogKGk6IE1zZ0luc3RhbnRpYXRlQ29udHJhY3QpID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ0luc3RhbnRpYXRlQ29udHJhY3RcIixcbiAgICAgIHZhbHVlOiBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0LmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VwZGF0ZUFkbWluOiAoaTogTXNnVXBkYXRlQWRtaW4pID0+ICh7XG4gICAgICB0eXBlVXJsOiBcIi9jb3Ntd2FzbS53YXNtLnYxLk1zZ1VwZGF0ZUFkbWluXCIsXG4gICAgICB2YWx1ZTogTXNnVXBkYXRlQWRtaW4uZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gICAgbXNnSW5zdGFudGlhdGVDb250cmFjdDI6IChpOiBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0MikgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2Nvc213YXNtLndhc20udjEuTXNnSW5zdGFudGlhdGVDb250cmFjdDJcIixcbiAgICAgIHZhbHVlOiBNc2dJbnN0YW50aWF0ZUNvbnRyYWN0Mi5mcm9tUGFydGlhbChpKSxcbiAgICB9KSxcbiAgICBtc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZzogKGk6IE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvY29zbXdhc20ud2FzbS52MS5Nc2dVcGRhdGVJbnN0YW50aWF0ZUNvbmZpZ1wiLFxuICAgICAgdmFsdWU6IE1zZ1VwZGF0ZUluc3RhbnRpYXRlQ29uZmlnLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICB9LFxuICBpYmM6IHtcbiAgICBtc2dUcmFuc2ZlcjogKGk6IE1zZ1RyYW5zZmVyKSA9PiAoe1xuICAgICAgdHlwZVVybDogXCIvaWJjLmFwcGxpY2F0aW9ucy50cmFuc2Zlci52MS5Nc2dUcmFuc2ZlclwiLFxuICAgICAgdmFsdWU6IE1zZ1RyYW5zZmVyLmZyb21QYXJ0aWFsKGkpLFxuICAgIH0pLFxuICAgIG1zZ1VwZGF0ZUNsaWVudDogKGk6IE1zZ1VwZGF0ZUNsaWVudCkgPT4gKHtcbiAgICAgIHR5cGVVcmw6IFwiL2liYy5jb3JlLmNsaWVudC52MS5Nc2dVcGRhdGVDbGllbnRcIixcbiAgICAgIHZhbHVlOiBNc2dVcGRhdGVDbGllbnQuZnJvbVBhcnRpYWwoaSksXG4gICAgfSksXG4gIH0sXG4gIGdyYXZpdHk6IGdyYXZpdHkubXNnLFxuICBiYXRjaDogYmF0Y2gubXNnLFxufTtcbiJdLCJuYW1lcyI6WyJNc2dFeGVjIiwiTXNnR3JhbnQiLCJNc2dSZXZva2UiLCJiYW5rIiwiZGlzdHJpYnV0aW9uIiwiTXNnR3JhbnRBbGxvd2FuY2UiLCJNc2dSZXZva2VBbGxvd2FuY2UiLCJnb3YiLCJnb3ZWMUJldGExIiwic3Rha2luZyIsIk1zZ0NyZWF0ZVZlc3RpbmdBY2NvdW50IiwiTXNnQ2xlYXJBZG1pbiIsIk1zZ0V4ZWN1dGVDb250cmFjdCIsIk1zZ0luc3RhbnRpYXRlQ29udHJhY3QiLCJNc2dJbnN0YW50aWF0ZUNvbnRyYWN0MiIsIk1zZ01pZ3JhdGVDb250cmFjdCIsIk1zZ1N0b3JlQ29kZSIsIk1zZ1VwZGF0ZUFkbWluIiwiTXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWciLCJNc2dUcmFuc2ZlciIsIk1zZ1VwZGF0ZUNsaWVudCIsImJhdGNoIiwiZ3Jhdml0eSIsImRlbm9tIiwib3JhY2xlIiwibXNnIiwiYXV0aHoiLCJtc2dFeGVjIiwiaSIsInR5cGVVcmwiLCJ2YWx1ZSIsImZyb21QYXJ0aWFsIiwibXNnR3JhbnQiLCJtc2dSZXZva2UiLCJtc2dTZW5kIiwiTXNnU2VuZCIsIm1zZ011bHRpU2VuZCIsIk1zZ011bHRpU2VuZCIsIm1zZ1VwZGF0ZVBhcmFtcyIsIk1zZ1VwZGF0ZVBhcmFtcyIsIm1zZ0Z1bmRDb21tdW5pdHlQb29sIiwiTXNnRnVuZENvbW11bml0eVBvb2wiLCJtc2dTZXRXaXRoZHJhd0FkZHJlc3MiLCJNc2dTZXRXaXRoZHJhd0FkZHJlc3MiLCJtc2dXaXRoZHJhd0RlbGVnYXRvclJld2FyZCIsIk1zZ1dpdGhkcmF3RGVsZWdhdG9yUmV3YXJkIiwibXNnV2l0aGRyYXdWYWxpZGF0b3JDb21taXNzaW9uIiwiTXNnV2l0aGRyYXdWYWxpZGF0b3JDb21taXNzaW9uIiwiZmVlZ3JhbnQiLCJtc2dHcmFudEFsbG93YW5jZSIsIm1zZ1Jldm9rZUFsbG93YW5jZSIsIm1zZ0RlcG9zaXQiLCJNc2dEZXBvc2l0IiwibXNnRGVwb3NpdEJldGEiLCJtc2dTdWJtaXRQcm9wb3NhbCIsIk1zZ1N1Ym1pdFByb3Bvc2FsIiwibXNnVm90ZSIsIk1zZ1ZvdGUiLCJtc2dWb3RlQmV0YSIsIm1zZ1ZvdGVXZWlnaHRlZCIsIk1zZ1ZvdGVXZWlnaHRlZCIsIm1zZ0JlZ2luUmVkZWxlZ2F0ZSIsIk1zZ0JlZ2luUmVkZWxlZ2F0ZSIsIm1zZ0NyZWF0ZVZhbGlkYXRvciIsIk1zZ0NyZWF0ZVZhbGlkYXRvciIsIm1zZ0RlbGVnYXRlIiwiTXNnRGVsZWdhdGUiLCJtc2dFZGl0VmFsaWRhdG9yIiwiTXNnRWRpdFZhbGlkYXRvciIsIm1zZ1VuZGVsZWdhdGUiLCJNc2dVbmRlbGVnYXRlIiwibXNnQ2FuY2VsVW5ib25kaW5nRGVsZWdhdGlvbiIsIk1zZ0NhbmNlbFVuYm9uZGluZ0RlbGVnYXRpb24iLCJ2ZXN0aW5nIiwibXNnQ3JlYXRlVmVzdGluZ0FjY291bnQiLCJ3YXNtIiwibXNnQ2xlYXJBZG1pbiIsIm1zZ0V4ZWN1dGVDb250cmFjdCIsIm1zZ01pZ3JhdGVDb250cmFjdCIsIm1zZ1N0b3JlQ29kZSIsIm1zZ0luc3RhbnRpYXRlQ29udHJhY3QiLCJtc2dVcGRhdGVBZG1pbiIsIm1zZ0luc3RhbnRpYXRlQ29udHJhY3QyIiwibXNnVXBkYXRlSW5zdGFudGlhdGVDb25maWciLCJpYmMiLCJtc2dUcmFuc2ZlciIsIm1zZ1VwZGF0ZUNsaWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FDRUEsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLFNBQVMsUUFDSix1Q0FBdUM7QUFDOUMsWUFBWUMsVUFBVSxzQ0FBc0M7QUFDNUQsWUFBWUMsa0JBQWtCLDhDQUE4QztBQUM1RSxTQUNFQyxpQkFBaUIsRUFDakJDLGtCQUFrQixRQUNiLDBDQUEwQztBQUNqRCxZQUFZQyxTQUFTLGdDQUFnQztBQUNyRCxZQUFZQyxnQkFBZ0IscUNBQXFDO0FBQ2pFLFlBQVlDLGFBQWEseUNBQXlDO0FBQ2xFLFNBQVNDLHVCQUF1QixRQUFRLHlDQUF5QztBQUNqRixTQUNFQyxhQUFhLEVBQ2JDLGtCQUFrQixFQUNsQkMsc0JBQXNCLEVBQ3RCQyx1QkFBdUIsRUFDdkJDLGtCQUFrQixFQUNsQkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLDBCQUEwQixRQUNyQixtQ0FBbUM7QUFDMUMsU0FBU0MsV0FBVyxRQUFRLCtDQUErQztBQUMzRSxTQUFTQyxlQUFlLFFBQVEscUNBQXFDO0FBQ3JFLFlBQVlDLFdBQVcsVUFBVTtBQUNqQyxZQUFZQyxhQUFhLGVBQWU7QUFDeEMsWUFBWUMsV0FBVyxpQkFBaUI7QUFDeEMsWUFBWUMsWUFBWSxrQkFBa0I7QUFFMUMsT0FBTyxNQUFNQyxNQUFNO0lBQ2pCQyxPQUFPO1FBQ0xDLFNBQVMsQ0FBQ0MsSUFBZ0IsQ0FBQTtnQkFDeEJDLFNBQVM7Z0JBQ1RDLE9BQU85QixRQUFRK0IsV0FBVyxDQUFDSDtZQUM3QixDQUFBO1FBQ0FJLFVBQVUsQ0FBQ0osSUFBaUIsQ0FBQTtnQkFDMUJDLFNBQVM7Z0JBQ1RDLE9BQU83QixTQUFTOEIsV0FBVyxDQUFDSDtZQUM5QixDQUFBO1FBQ0FLLFdBQVcsQ0FBQ0wsSUFBa0IsQ0FBQTtnQkFDNUJDLFNBQVM7Z0JBQ1RDLE9BQU81QixVQUFVNkIsV0FBVyxDQUFDSDtZQUMvQixDQUFBO0lBQ0Y7SUFDQXpCLE1BQU07UUFDSitCLFNBQVMsQ0FBQ04sSUFBcUIsQ0FBQTtnQkFDN0JDLFNBQVM7Z0JBQ1RDLE9BQU8zQixLQUFLZ0MsT0FBTyxDQUFDSixXQUFXLENBQUNIO1lBQ2xDLENBQUE7UUFDQVEsY0FBYyxDQUFDUixJQUEwQixDQUFBO2dCQUN2Q0MsU0FBUztnQkFDVEMsT0FBTzNCLEtBQUtrQyxZQUFZLENBQUNOLFdBQVcsQ0FBQ0g7WUFDdkMsQ0FBQTtRQUNBVSxpQkFBaUIsQ0FBQ1YsSUFBNkIsQ0FBQTtnQkFDN0NDLFNBQVM7Z0JBQ1RDLE9BQU8zQixLQUFLb0MsZUFBZSxDQUFDUixXQUFXLENBQUNIO1lBQzFDLENBQUE7SUFDRjtJQUNBeEIsY0FBYztRQUNab0Msc0JBQXNCLENBQUNaLElBQTBDLENBQUE7Z0JBQy9EQyxTQUFTO2dCQUNUQyxPQUFPMUIsYUFBYXFDLG9CQUFvQixDQUFDVixXQUFXLENBQUNIO1lBQ3ZELENBQUE7UUFDQWMsdUJBQXVCLENBQUNkLElBQTJDLENBQUE7Z0JBQ2pFQyxTQUFTO2dCQUNUQyxPQUFPMUIsYUFBYXVDLHFCQUFxQixDQUFDWixXQUFXLENBQUNIO1lBQ3hELENBQUE7UUFDQWdCLDRCQUE0QixDQUMxQmhCLElBQ0ksQ0FBQTtnQkFDSkMsU0FBUztnQkFDVEMsT0FBTzFCLGFBQWF5QywwQkFBMEIsQ0FBQ2QsV0FBVyxDQUFDSDtZQUM3RCxDQUFBO1FBQ0FrQixnQ0FBZ0MsQ0FDOUJsQixJQUNJLENBQUE7Z0JBQ0pDLFNBQVM7Z0JBQ1RDLE9BQU8xQixhQUFhMkMsOEJBQThCLENBQUNoQixXQUFXLENBQUNIO1lBQ2pFLENBQUE7UUFDQVUsaUJBQWlCLENBQUNWLElBQXFDLENBQUE7Z0JBQ3JEQyxTQUFTO2dCQUNUQyxPQUFPMUIsYUFBYW1DLGVBQWUsQ0FBQ1IsV0FBVyxDQUFDSDtZQUNsRCxDQUFBO0lBQ0Y7SUFDQUwsT0FBT0EsTUFBTUUsR0FBRztJQUNoQnVCLFVBQVU7UUFDUkMsbUJBQW1CLENBQUNyQixJQUEwQixDQUFBO2dCQUM1Q0MsU0FBUztnQkFDVEMsT0FBT3pCLGtCQUFrQjBCLFdBQVcsQ0FBQ0g7WUFDdkMsQ0FBQTtRQUNBc0Isb0JBQW9CLENBQUN0QixJQUEyQixDQUFBO2dCQUM5Q0MsU0FBUztnQkFDVEMsT0FBT3hCLG1CQUFtQnlCLFdBQVcsQ0FBQ0g7WUFDeEMsQ0FBQTtJQUNGO0lBQ0FyQixLQUFLO1FBQ0g0QyxZQUFZLENBQUN2QixJQUF1QixDQUFBO2dCQUNsQ0MsU0FBUztnQkFDVEMsT0FBT3ZCLElBQUk2QyxVQUFVLENBQUNyQixXQUFXLENBQUNIO1lBQ3BDLENBQUE7UUFDQXlCLGdCQUFnQixDQUFDekIsSUFBOEIsQ0FBQTtnQkFDN0NDLFNBQVM7Z0JBQ1RDLE9BQU90QixXQUFXNEMsVUFBVSxDQUFDckIsV0FBVyxDQUFDSDtZQUMzQyxDQUFBO1FBQ0EwQixtQkFBbUIsQ0FBQzFCLElBQThCLENBQUE7Z0JBQ2hEQyxTQUFTO2dCQUNUQyxPQUFPdkIsSUFBSWdELGlCQUFpQixDQUFDeEIsV0FBVyxDQUFDSDtZQUMzQyxDQUFBO1FBQ0E0QixTQUFTLENBQUM1QixJQUFvQixDQUFBO2dCQUM1QkMsU0FBUztnQkFDVEMsT0FBT3ZCLElBQUlrRCxPQUFPLENBQUMxQixXQUFXLENBQUNIO1lBQ2pDLENBQUE7UUFDQThCLGFBQWEsQ0FBQzlCLElBQTJCLENBQUE7Z0JBQ3ZDQyxTQUFTO2dCQUNUQyxPQUFPdEIsV0FBV2lELE9BQU8sQ0FBQzFCLFdBQVcsQ0FBQ0g7WUFDeEMsQ0FBQTtRQUNBK0IsaUJBQWlCLENBQUMvQixJQUE0QixDQUFBO2dCQUM1Q0MsU0FBUztnQkFDVEMsT0FBT3ZCLElBQUlxRCxlQUFlLENBQUM3QixXQUFXLENBQUNIO1lBQ3pDLENBQUE7UUFDQVUsaUJBQWlCLENBQUNWLElBQTRCLENBQUE7Z0JBQzVDQyxTQUFTO2dCQUNUQyxPQUFPdkIsSUFBSWdDLGVBQWUsQ0FBQ1IsV0FBVyxDQUFDSDtZQUN6QyxDQUFBO0lBQ0Y7SUFDQUosUUFBUUEsT0FBT0MsR0FBRztJQUNsQmhCLFNBQVM7UUFDUG9ELG9CQUFvQixDQUFDakMsSUFBbUMsQ0FBQTtnQkFDdERDLFNBQVM7Z0JBQ1RDLE9BQU9yQixRQUFRcUQsa0JBQWtCLENBQUMvQixXQUFXLENBQUNIO1lBQ2hELENBQUE7UUFDQW1DLG9CQUFvQixDQUFDbkMsSUFBbUMsQ0FBQTtnQkFDdERDLFNBQVM7Z0JBQ1RDLE9BQU9yQixRQUFRdUQsa0JBQWtCLENBQUNqQyxXQUFXLENBQUNIO1lBQ2hELENBQUE7UUFDQXFDLGFBQWEsQ0FBQ3JDLElBQTRCLENBQUE7Z0JBQ3hDQyxTQUFTO2dCQUNUQyxPQUFPckIsUUFBUXlELFdBQVcsQ0FBQ25DLFdBQVcsQ0FBQ0g7WUFDekMsQ0FBQTtRQUNBdUMsa0JBQWtCLENBQUN2QyxJQUFpQyxDQUFBO2dCQUNsREMsU0FBUztnQkFDVEMsT0FBT3JCLFFBQVEyRCxnQkFBZ0IsQ0FBQ3JDLFdBQVcsQ0FBQ0g7WUFDOUMsQ0FBQTtRQUNBeUMsZUFBZSxDQUFDekMsSUFBOEIsQ0FBQTtnQkFDNUNDLFNBQVM7Z0JBQ1RDLE9BQU9yQixRQUFRNkQsYUFBYSxDQUFDdkMsV0FBVyxDQUFDSDtZQUMzQyxDQUFBO1FBQ0EyQyw4QkFBOEIsQ0FDNUIzQyxJQUNJLENBQUE7Z0JBQ0pDLFNBQVM7Z0JBQ1RDLE9BQU9yQixRQUFRK0QsNEJBQTRCLENBQUN6QyxXQUFXLENBQUNIO1lBQzFELENBQUE7UUFDQVUsaUJBQWlCLENBQUNWLElBQWdDLENBQUE7Z0JBQ2hEQyxTQUFTO2dCQUNUQyxPQUFPckIsUUFBUThCLGVBQWUsQ0FBQ1IsV0FBVyxDQUFDSDtZQUM3QyxDQUFBO0lBQ0Y7SUFDQTZDLFNBQVM7UUFDUEMseUJBQXlCLENBQUM5QyxJQUFnQyxDQUFBO2dCQUN4REMsU0FBUztnQkFDVEMsT0FBT3BCLHdCQUF3QnFCLFdBQVcsQ0FBQ0g7WUFDN0MsQ0FBQTtJQUNGO0lBQ0ErQyxNQUFNO1FBQ0pDLGVBQWUsQ0FBQ2hELElBQXNCLENBQUE7Z0JBQ3BDQyxTQUFTO2dCQUNUQyxPQUFPbkIsY0FBY29CLFdBQVcsQ0FBQ0g7WUFDbkMsQ0FBQTtRQUNBaUQsb0JBQW9CLENBQUNqRCxJQUEyQixDQUFBO2dCQUM5Q0MsU0FBUztnQkFDVEMsT0FBT2xCLG1CQUFtQm1CLFdBQVcsQ0FBQ0g7WUFDeEMsQ0FBQTtRQUNBa0Qsb0JBQW9CLENBQUNsRCxJQUEyQixDQUFBO2dCQUM5Q0MsU0FBUztnQkFDVEMsT0FBT2YsbUJBQW1CZ0IsV0FBVyxDQUFDSDtZQUN4QyxDQUFBO1FBQ0FtRCxjQUFjLENBQUNuRCxJQUFxQixDQUFBO2dCQUNsQ0MsU0FBUztnQkFDVEMsT0FBT2QsYUFBYWUsV0FBVyxDQUFDSDtZQUNsQyxDQUFBO1FBQ0FvRCx3QkFBd0IsQ0FBQ3BELElBQStCLENBQUE7Z0JBQ3REQyxTQUFTO2dCQUNUQyxPQUFPakIsdUJBQXVCa0IsV0FBVyxDQUFDSDtZQUM1QyxDQUFBO1FBQ0FxRCxnQkFBZ0IsQ0FBQ3JELElBQXVCLENBQUE7Z0JBQ3RDQyxTQUFTO2dCQUNUQyxPQUFPYixlQUFlYyxXQUFXLENBQUNIO1lBQ3BDLENBQUE7UUFDQXNELHlCQUF5QixDQUFDdEQsSUFBZ0MsQ0FBQTtnQkFDeERDLFNBQVM7Z0JBQ1RDLE9BQU9oQix3QkFBd0JpQixXQUFXLENBQUNIO1lBQzdDLENBQUE7UUFDQXVELDRCQUE0QixDQUFDdkQsSUFBbUMsQ0FBQTtnQkFDOURDLFNBQVM7Z0JBQ1RDLE9BQU9aLDJCQUEyQmEsV0FBVyxDQUFDSDtZQUNoRCxDQUFBO0lBQ0Y7SUFDQXdELEtBQUs7UUFDSEMsYUFBYSxDQUFDekQsSUFBb0IsQ0FBQTtnQkFDaENDLFNBQVM7Z0JBQ1RDLE9BQU9YLFlBQVlZLFdBQVcsQ0FBQ0g7WUFDakMsQ0FBQTtRQUNBMEQsaUJBQWlCLENBQUMxRCxJQUF3QixDQUFBO2dCQUN4Q0MsU0FBUztnQkFDVEMsT0FBT1YsZ0JBQWdCVyxXQUFXLENBQUNIO1lBQ3JDLENBQUE7SUFDRjtJQUNBTixTQUFTQSxRQUFRRyxHQUFHO0lBQ3BCSixPQUFPQSxNQUFNSSxHQUFHO0FBQ2xCLEVBQUUifQ==
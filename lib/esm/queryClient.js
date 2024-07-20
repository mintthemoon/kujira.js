function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
import * as s from "@cosmjs/stargate";
import "@cosmjs/stargate/build/modules/distribution/messages";
import { setupBankExtensionExtended } from "./cosmos/bank";
import { setupGovExtension } from "./cosmos/gov";
import { setupStakingExtension } from "./cosmos/staking";
import { setupWasmExtensionExtended } from "./cosmwasm/wasm";
import { setupGravityExtension } from "./gravity/v1";
import { setupCwIcaExtension } from "./kujira/cwica";
import { setupDenomExtension } from "./kujira/denom";
import { setupOracleExtension } from "./kujira/oracle";
import { setupSchedulerExtension } from "./kujira/scheduler";
export const kujiraQueryClient = ({ client })=>s.QueryClient.withExtensions(client, s.setupAuthExtension, s.setupAuthzExtension, setupBankExtensionExtended, setupDenomExtension, s.setupDistributionExtension, s.setupFeegrantExtension, setupGovExtension, setupOracleExtension, setupSchedulerExtension, s.setupSlashingExtension, setupStakingExtension, s.setupTxExtension, setupWasmExtensionExtended, s.setupIbcExtension, setupGravityExtension, setupCwIcaExtension);
export const fetchTokens = (query, paginationKey)=>{
    return query.bank.totalSupply(paginationKey).then(function() {
        var _ref = _async_to_generator(function*(xs) {
            var _xs_pagination;
            return ((_xs_pagination = xs.pagination) === null || _xs_pagination === void 0 ? void 0 : _xs_pagination.nextKey.toString()) ? [
                ...yield fetchTokens(query, xs.pagination.nextKey),
                ...xs.supply
            ] : xs.supply;
        });
        return function(xs) {
            return _ref.apply(this, arguments);
        };
    }());
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyeUNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzIGZyb20gXCJAY29zbWpzL3N0YXJnYXRlXCI7XG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7XG4gIEZlZWdyYW50RXh0ZW5zaW9uLFxuICBTbGFzaGluZ0V4dGVuc2lvbixcbn0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGUvYnVpbGQvbW9kdWxlc1wiO1xuaW1wb3J0IHsgQXV0aHpFeHRlbnNpb24gfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzL2F1dGh6L3F1ZXJpZXNcIjtcbmltcG9ydCB7fSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZS9idWlsZC9tb2R1bGVzL2Rpc3RyaWJ1dGlvbi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgVGVuZGVybWludDM3Q2xpZW50IH0gZnJvbSBcIkBjb3NtanMvdGVuZGVybWludC1ycGNcIjtcbmltcG9ydCB7XG4gIEJhbmtFeHRlbnNpb25FeHRlbmRlZCxcbiAgc2V0dXBCYW5rRXh0ZW5zaW9uRXh0ZW5kZWQsXG59IGZyb20gXCIuL2Nvc21vcy9iYW5rXCI7XG5pbXBvcnQgeyBHb3ZFeHRlbnNpb24sIHNldHVwR292RXh0ZW5zaW9uIH0gZnJvbSBcIi4vY29zbW9zL2dvdlwiO1xuaW1wb3J0IHsgU3Rha2luZ0V4dGVuc2lvbiwgc2V0dXBTdGFraW5nRXh0ZW5zaW9uIH0gZnJvbSBcIi4vY29zbW9zL3N0YWtpbmdcIjtcbmltcG9ydCB7XG4gIFdhc21FeHRlbnNpb25FeHRlbmRlZCxcbiAgc2V0dXBXYXNtRXh0ZW5zaW9uRXh0ZW5kZWQsXG59IGZyb20gXCIuL2Nvc213YXNtL3dhc21cIjtcbmltcG9ydCB7IEdyYXZpdHlFeHRlbnNpb24sIHNldHVwR3Jhdml0eUV4dGVuc2lvbiB9IGZyb20gXCIuL2dyYXZpdHkvdjFcIjtcbmltcG9ydCB7IEN3SWNhRXh0ZW5zaW9uLCBzZXR1cEN3SWNhRXh0ZW5zaW9uIH0gZnJvbSBcIi4va3VqaXJhL2N3aWNhXCI7XG5pbXBvcnQgeyBEZW5vbUV4dGVuc2lvbiwgc2V0dXBEZW5vbUV4dGVuc2lvbiB9IGZyb20gXCIuL2t1amlyYS9kZW5vbVwiO1xuaW1wb3J0IHsgT3JhY2xlRXh0ZW5zaW9uLCBzZXR1cE9yYWNsZUV4dGVuc2lvbiB9IGZyb20gXCIuL2t1amlyYS9vcmFjbGVcIjtcbmltcG9ydCB7XG4gIFNjaGVkdWxlckV4dGVuc2lvbixcbiAgc2V0dXBTY2hlZHVsZXJFeHRlbnNpb24sXG59IGZyb20gXCIuL2t1amlyYS9zY2hlZHVsZXJcIjtcblxuZXhwb3J0IHR5cGUgS3VqaXJhUXVlcnlDbGllbnQgPSBzLlF1ZXJ5Q2xpZW50ICZcbiAgcy5BdXRoRXh0ZW5zaW9uICZcbiAgQXV0aHpFeHRlbnNpb24gJlxuICBCYW5rRXh0ZW5zaW9uRXh0ZW5kZWQgJlxuICBzLkRpc3RyaWJ1dGlvbkV4dGVuc2lvbiAmXG4gIERlbm9tRXh0ZW5zaW9uICZcbiAgRmVlZ3JhbnRFeHRlbnNpb24gJlxuICBHb3ZFeHRlbnNpb24gJlxuICBPcmFjbGVFeHRlbnNpb24gJlxuICBTY2hlZHVsZXJFeHRlbnNpb24gJlxuICBTbGFzaGluZ0V4dGVuc2lvbiAmXG4gIFN0YWtpbmdFeHRlbnNpb24gJlxuICBzLlR4RXh0ZW5zaW9uICZcbiAgV2FzbUV4dGVuc2lvbkV4dGVuZGVkICZcbiAgcy5JYmNFeHRlbnNpb24gJlxuICBHcmF2aXR5RXh0ZW5zaW9uICZcbiAgQ3dJY2FFeHRlbnNpb247XG5cbmV4cG9ydCBjb25zdCBrdWppcmFRdWVyeUNsaWVudCA9ICh7XG4gIGNsaWVudCxcbn06IHtcbiAgY2xpZW50OiBUZW5kZXJtaW50MzdDbGllbnQ7XG59KTogS3VqaXJhUXVlcnlDbGllbnQgPT5cbiAgcy5RdWVyeUNsaWVudC53aXRoRXh0ZW5zaW9ucyhcbiAgICBjbGllbnQsXG4gICAgcy5zZXR1cEF1dGhFeHRlbnNpb24sXG4gICAgcy5zZXR1cEF1dGh6RXh0ZW5zaW9uLFxuICAgIHNldHVwQmFua0V4dGVuc2lvbkV4dGVuZGVkLFxuICAgIHNldHVwRGVub21FeHRlbnNpb24sXG4gICAgcy5zZXR1cERpc3RyaWJ1dGlvbkV4dGVuc2lvbixcbiAgICBzLnNldHVwRmVlZ3JhbnRFeHRlbnNpb24sXG4gICAgc2V0dXBHb3ZFeHRlbnNpb24sXG4gICAgc2V0dXBPcmFjbGVFeHRlbnNpb24sXG4gICAgc2V0dXBTY2hlZHVsZXJFeHRlbnNpb24sXG4gICAgcy5zZXR1cFNsYXNoaW5nRXh0ZW5zaW9uLFxuICAgIHNldHVwU3Rha2luZ0V4dGVuc2lvbixcbiAgICBzLnNldHVwVHhFeHRlbnNpb24sXG4gICAgc2V0dXBXYXNtRXh0ZW5zaW9uRXh0ZW5kZWQsXG4gICAgcy5zZXR1cEliY0V4dGVuc2lvbixcbiAgICBzZXR1cEdyYXZpdHlFeHRlbnNpb24sXG4gICAgc2V0dXBDd0ljYUV4dGVuc2lvblxuICApO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hUb2tlbnMgPSAoXG4gIHF1ZXJ5OiBLdWppcmFRdWVyeUNsaWVudCxcbiAgcGFnaW5hdGlvbktleT86IFVpbnQ4QXJyYXlcbik6IFByb21pc2U8Q29pbltdPiA9PiB7XG4gIHJldHVybiBxdWVyeS5iYW5rLnRvdGFsU3VwcGx5KHBhZ2luYXRpb25LZXkpLnRoZW4oYXN5bmMgKHhzKSA9PiB7XG4gICAgcmV0dXJuIHhzLnBhZ2luYXRpb24/Lm5leHRLZXkudG9TdHJpbmcoKVxuICAgICAgPyBbLi4uKGF3YWl0IGZldGNoVG9rZW5zKHF1ZXJ5LCB4cy5wYWdpbmF0aW9uLm5leHRLZXkpKSwgLi4ueHMuc3VwcGx5XVxuICAgICAgOiB4cy5zdXBwbHk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJzIiwic2V0dXBCYW5rRXh0ZW5zaW9uRXh0ZW5kZWQiLCJzZXR1cEdvdkV4dGVuc2lvbiIsInNldHVwU3Rha2luZ0V4dGVuc2lvbiIsInNldHVwV2FzbUV4dGVuc2lvbkV4dGVuZGVkIiwic2V0dXBHcmF2aXR5RXh0ZW5zaW9uIiwic2V0dXBDd0ljYUV4dGVuc2lvbiIsInNldHVwRGVub21FeHRlbnNpb24iLCJzZXR1cE9yYWNsZUV4dGVuc2lvbiIsInNldHVwU2NoZWR1bGVyRXh0ZW5zaW9uIiwia3VqaXJhUXVlcnlDbGllbnQiLCJjbGllbnQiLCJRdWVyeUNsaWVudCIsIndpdGhFeHRlbnNpb25zIiwic2V0dXBBdXRoRXh0ZW5zaW9uIiwic2V0dXBBdXRoekV4dGVuc2lvbiIsInNldHVwRGlzdHJpYnV0aW9uRXh0ZW5zaW9uIiwic2V0dXBGZWVncmFudEV4dGVuc2lvbiIsInNldHVwU2xhc2hpbmdFeHRlbnNpb24iLCJzZXR1cFR4RXh0ZW5zaW9uIiwic2V0dXBJYmNFeHRlbnNpb24iLCJmZXRjaFRva2VucyIsInF1ZXJ5IiwicGFnaW5hdGlvbktleSIsImJhbmsiLCJ0b3RhbFN1cHBseSIsInRoZW4iLCJ4cyIsInBhZ2luYXRpb24iLCJuZXh0S2V5IiwidG9TdHJpbmciLCJzdXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsT0FBTyxtQkFBbUI7QUFPdEMsT0FBZSx1REFBdUQ7QUFFdEUsU0FFRUMsMEJBQTBCLFFBQ3JCLGdCQUFnQjtBQUN2QixTQUF1QkMsaUJBQWlCLFFBQVEsZUFBZTtBQUMvRCxTQUEyQkMscUJBQXFCLFFBQVEsbUJBQW1CO0FBQzNFLFNBRUVDLDBCQUEwQixRQUNyQixrQkFBa0I7QUFDekIsU0FBMkJDLHFCQUFxQixRQUFRLGVBQWU7QUFDdkUsU0FBeUJDLG1CQUFtQixRQUFRLGlCQUFpQjtBQUNyRSxTQUF5QkMsbUJBQW1CLFFBQVEsaUJBQWlCO0FBQ3JFLFNBQTBCQyxvQkFBb0IsUUFBUSxrQkFBa0I7QUFDeEUsU0FFRUMsdUJBQXVCLFFBQ2xCLHFCQUFxQjtBQW9CNUIsT0FBTyxNQUFNQyxvQkFBb0IsQ0FBQyxFQUNoQ0MsTUFBTSxFQUdQLEdBQ0NYLEVBQUVZLFdBQVcsQ0FBQ0MsY0FBYyxDQUMxQkYsUUFDQVgsRUFBRWMsa0JBQWtCLEVBQ3BCZCxFQUFFZSxtQkFBbUIsRUFDckJkLDRCQUNBTSxxQkFDQVAsRUFBRWdCLDBCQUEwQixFQUM1QmhCLEVBQUVpQixzQkFBc0IsRUFDeEJmLG1CQUNBTSxzQkFDQUMseUJBQ0FULEVBQUVrQixzQkFBc0IsRUFDeEJmLHVCQUNBSCxFQUFFbUIsZ0JBQWdCLEVBQ2xCZiw0QkFDQUosRUFBRW9CLGlCQUFpQixFQUNuQmYsdUJBQ0FDLHFCQUNBO0FBRUosT0FBTyxNQUFNZSxjQUFjLENBQ3pCQyxPQUNBQztJQUVBLE9BQU9ELE1BQU1FLElBQUksQ0FBQ0MsV0FBVyxDQUFDRixlQUFlRyxJQUFJO21CQUFDLG9CQUFBLFVBQU9DO2dCQUNoREE7WUFBUCxPQUFPQSxFQUFBQSxpQkFBQUEsR0FBR0MsVUFBVSxjQUFiRCxxQ0FBQUEsZUFBZUUsT0FBTyxDQUFDQyxRQUFRLE1BQ2xDO21CQUFLLE1BQU1ULFlBQVlDLE9BQU9LLEdBQUdDLFVBQVUsQ0FBQ0MsT0FBTzttQkFBT0YsR0FBR0ksTUFBTTthQUFDLEdBQ3BFSixHQUFHSSxNQUFNO1FBQ2Y7d0JBSnlESjs7OztBQUszRCxFQUFFIn0=
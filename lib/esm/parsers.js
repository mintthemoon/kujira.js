function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import { parseCoins } from "@cosmjs/stargate";
export const addCoins = (a, b)=>a.reduce(addCoin, b);
export const addCoin = (a, b)=>{
    const x = a.find((z)=>z.denom === b.denom);
    return x ? a.map((x)=>x.denom === b.denom ? _object_spread_props(_object_spread({}, x), {
            amount: (parseInt(x.amount) + parseInt(b.amount)).toString()
        }) : x) : [
        b,
        ...a
    ];
};
export const transfers = (address, events)=>{
    return events.reduce((agg, e)=>{
        var _e_attributes_find, _e_attributes_find1;
        if (e.type === "coin_spent" && ((_e_attributes_find = e.attributes.find((a)=>a.key === "spender")) === null || _e_attributes_find === void 0 ? void 0 : _e_attributes_find.value) === address) {
            var _e_attributes_find2;
            return {
                receive: agg.receive,
                send: addCoins(agg.send, parseCoins(((_e_attributes_find2 = e.attributes.find((a)=>a.key === "amount")) === null || _e_attributes_find2 === void 0 ? void 0 : _e_attributes_find2.value) || ""))
            };
        }
        if (e.type === "coin_received" && ((_e_attributes_find1 = e.attributes.find((a)=>a.key === "receiver")) === null || _e_attributes_find1 === void 0 ? void 0 : _e_attributes_find1.value) === address) {
            var _e_attributes_find3;
            return {
                send: agg.send,
                receive: addCoins(agg.send, parseCoins(((_e_attributes_find3 = e.attributes.find((a)=>a.key === "amount")) === null || _e_attributes_find3 === void 0 ? void 0 : _e_attributes_find3.value) || ""))
            };
        }
        return agg;
    }, {
        send: [],
        receive: []
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlQ29pbnMgfSBmcm9tIFwiQGNvc21qcy9zdGFyZ2F0ZVwiO1xuaW1wb3J0IHsgQ29pbiB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL2Jhc2UvdjFiZXRhMS9jb2luXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCJjb3NtanMtdHlwZXMvdGVuZGVybWludC9hYmNpL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRDb2lucyA9IChhOiBDb2luW10sIGI6IENvaW5bXSk6IENvaW5bXSA9PiBhLnJlZHVjZShhZGRDb2luLCBiKTtcblxuZXhwb3J0IGNvbnN0IGFkZENvaW4gPSAoYTogQ29pbltdLCBiOiBDb2luKTogQ29pbltdID0+IHtcbiAgY29uc3QgeCA9IGEuZmluZCgoeikgPT4gei5kZW5vbSA9PT0gYi5kZW5vbSk7XG4gIHJldHVybiB4XG4gICAgPyBhLm1hcCgoeCkgPT5cbiAgICAgICAgeC5kZW5vbSA9PT0gYi5kZW5vbVxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAuLi54LFxuICAgICAgICAgICAgICBhbW91bnQ6IChwYXJzZUludCh4LmFtb3VudCkgKyBwYXJzZUludChiLmFtb3VudCkpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB4XG4gICAgICApXG4gICAgOiBbYiwgLi4uYV07XG59O1xuZXhwb3J0IGNvbnN0IHRyYW5zZmVycyA9IChcbiAgYWRkcmVzczogc3RyaW5nLFxuICBldmVudHM6IEV2ZW50W11cbik6IHsgc2VuZDogQ29pbltdOyByZWNlaXZlOiBDb2luW10gfSA9PiB7XG4gIHJldHVybiBldmVudHMucmVkdWNlKFxuICAgIChhZ2c6IHsgc2VuZDogQ29pbltdOyByZWNlaXZlOiBDb2luW10gfSwgZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLnR5cGUgPT09IFwiY29pbl9zcGVudFwiICYmXG4gICAgICAgIGUuYXR0cmlidXRlcy5maW5kKChhKSA9PiBhLmtleSA9PT0gXCJzcGVuZGVyXCIpPy52YWx1ZSA9PT0gYWRkcmVzc1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVjZWl2ZTogYWdnLnJlY2VpdmUsXG4gICAgICAgICAgc2VuZDogYWRkQ29pbnMoXG4gICAgICAgICAgICBhZ2cuc2VuZCxcbiAgICAgICAgICAgIHBhcnNlQ29pbnMoXG4gICAgICAgICAgICAgIGUuYXR0cmlidXRlcy5maW5kKChhKSA9PiBhLmtleSA9PT0gXCJhbW91bnRcIik/LnZhbHVlIHx8IFwiXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGUudHlwZSA9PT0gXCJjb2luX3JlY2VpdmVkXCIgJiZcbiAgICAgICAgZS5hdHRyaWJ1dGVzLmZpbmQoKGEpID0+IGEua2V5ID09PSBcInJlY2VpdmVyXCIpPy52YWx1ZSA9PT0gYWRkcmVzc1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2VuZDogYWdnLnNlbmQsXG4gICAgICAgICAgcmVjZWl2ZTogYWRkQ29pbnMoXG4gICAgICAgICAgICBhZ2cuc2VuZCxcbiAgICAgICAgICAgIHBhcnNlQ29pbnMoXG4gICAgICAgICAgICAgIGUuYXR0cmlidXRlcy5maW5kKChhKSA9PiBhLmtleSA9PT0gXCJhbW91bnRcIik/LnZhbHVlIHx8IFwiXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWdnO1xuICAgIH0sXG4gICAgeyBzZW5kOiBbXSwgcmVjZWl2ZTogW10gfVxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJwYXJzZUNvaW5zIiwiYWRkQ29pbnMiLCJhIiwiYiIsInJlZHVjZSIsImFkZENvaW4iLCJ4IiwiZmluZCIsInoiLCJkZW5vbSIsIm1hcCIsImFtb3VudCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJ0cmFuc2ZlcnMiLCJhZGRyZXNzIiwiZXZlbnRzIiwiYWdnIiwiZSIsInR5cGUiLCJhdHRyaWJ1dGVzIiwia2V5IiwidmFsdWUiLCJyZWNlaXZlIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFVBQVUsUUFBUSxtQkFBbUI7QUFJOUMsT0FBTyxNQUFNQyxXQUFXLENBQUNDLEdBQVdDLElBQXNCRCxFQUFFRSxNQUFNLENBQUNDLFNBQVNGLEdBQUc7QUFFL0UsT0FBTyxNQUFNRSxVQUFVLENBQUNILEdBQVdDO0lBQ2pDLE1BQU1HLElBQUlKLEVBQUVLLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxLQUFLLEtBQUtOLEVBQUVNLEtBQUs7SUFDM0MsT0FBT0gsSUFDSEosRUFBRVEsR0FBRyxDQUFDLENBQUNKLElBQ0xBLEVBQUVHLEtBQUssS0FBS04sRUFBRU0sS0FBSyxHQUNmLHdDQUNLSDtZQUNISyxRQUFRLEFBQUNDLENBQUFBLFNBQVNOLEVBQUVLLE1BQU0sSUFBSUMsU0FBU1QsRUFBRVEsTUFBTSxDQUFBLEVBQUdFLFFBQVE7YUFFNURQLEtBRU47UUFBQ0g7V0FBTUQ7S0FBRTtBQUNmLEVBQUU7QUFDRixPQUFPLE1BQU1ZLFlBQVksQ0FDdkJDLFNBQ0FDO0lBRUEsT0FBT0EsT0FBT1osTUFBTSxDQUNsQixDQUFDYSxLQUF3Q0M7WUFHckNBLG9CQWVBQTtRQWpCRixJQUNFQSxFQUFFQyxJQUFJLEtBQUssZ0JBQ1hELEVBQUFBLHFCQUFBQSxFQUFFRSxVQUFVLENBQUNiLElBQUksQ0FBQyxDQUFDTCxJQUFNQSxFQUFFbUIsR0FBRyxLQUFLLHdCQUFuQ0gseUNBQUFBLG1CQUErQ0ksS0FBSyxNQUFLUCxTQUN6RDtnQkFNTUc7WUFMTixPQUFPO2dCQUNMSyxTQUFTTixJQUFJTSxPQUFPO2dCQUNwQkMsTUFBTXZCLFNBQ0pnQixJQUFJTyxJQUFJLEVBQ1J4QixXQUNFa0IsRUFBQUEsc0JBQUFBLEVBQUVFLFVBQVUsQ0FBQ2IsSUFBSSxDQUFDLENBQUNMLElBQU1BLEVBQUVtQixHQUFHLEtBQUssdUJBQW5DSCwwQ0FBQUEsb0JBQThDSSxLQUFLLEtBQUk7WUFHN0Q7UUFDRjtRQUVBLElBQ0VKLEVBQUVDLElBQUksS0FBSyxtQkFDWEQsRUFBQUEsc0JBQUFBLEVBQUVFLFVBQVUsQ0FBQ2IsSUFBSSxDQUFDLENBQUNMLElBQU1BLEVBQUVtQixHQUFHLEtBQUsseUJBQW5DSCwwQ0FBQUEsb0JBQWdESSxLQUFLLE1BQUtQLFNBQzFEO2dCQU1NRztZQUxOLE9BQU87Z0JBQ0xNLE1BQU1QLElBQUlPLElBQUk7Z0JBQ2RELFNBQVN0QixTQUNQZ0IsSUFBSU8sSUFBSSxFQUNSeEIsV0FDRWtCLEVBQUFBLHNCQUFBQSxFQUFFRSxVQUFVLENBQUNiLElBQUksQ0FBQyxDQUFDTCxJQUFNQSxFQUFFbUIsR0FBRyxLQUFLLHVCQUFuQ0gsMENBQUFBLG9CQUE4Q0ksS0FBSyxLQUFJO1lBRzdEO1FBQ0Y7UUFFQSxPQUFPTDtJQUNULEdBQ0E7UUFBRU8sTUFBTSxFQUFFO1FBQUVELFNBQVMsRUFBRTtJQUFDO0FBRTVCLEVBQUUifQ==
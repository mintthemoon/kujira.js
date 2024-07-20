"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    castSale: function() {
        return castSale;
    },
    config: function() {
        return config;
    },
    getMarkets: function() {
        return getMarkets;
    }
});
const _bignumber = require("@ethersproject/bignumber");
const _denom = require("./denom");
const _contractsjson = /*#__PURE__*/ _interop_require_default(require("./resources/contracts.json"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
const castSale = (network, res)=>({
        label: _denom.Denom.from(res.amount.denom).symbol,
        collateralDenom: _denom.Denom.from(res.amount.denom),
        bidDenom: _denom.Denom.from(res.orca_config.bid_denom),
        address: res.orca_address,
        bidThreshold: _bignumber.BigNumber.from(res.orca_config.bid_threshold),
        maxSlot: res.orca_config.max_slot,
        premiumRatePerSlot: parseFloat(res.orca_config.premium_rate_per_slot),
        premiumRatePerSlotInt: (0, _bignumber.parseFixed)(res.orca_config.premium_rate_per_slot, 18),
        waitingPeriod: res.orca_config.waiting_period,
        markets: res.orca_config.markets,
        activators: [
            "kujira1mrwwpea5emn05wmj7d7eweppmw98qj2a642r0e"
        ],
        sale: {
            idx: res.idx,
            title: res.title,
            owner: res.owner,
            beneficiary: res.beneficiary,
            description: res.description,
            price: parseFloat(res.price),
            amount: _bignumber.BigNumber.from(res.amount.amount),
            status: "live" in res.status ? {
                live: {
                    closesAt: new Date(parseInt(res.status.live.closes_at) / 1000000)
                }
            } : "retracted" in res.status ? {
                retracted: new Date(parseInt(res.status.retracted) / 1000000)
            } : {
                executed: {
                    at: new Date(parseInt(res.status.executed.at) / 1000000),
                    raiseAmount: _bignumber.BigNumber.from(res.status.executed.raise_amount),
                    raiseTotal: _bignumber.BigNumber.from(res.status.executed.raise_total),
                    raiseFee: _bignumber.BigNumber.from(res.status.executed.raise_fee)
                }
            }
        },
        liquidationFee: parseFloat(res.orca_config.liquidation_fee),
        withdrawalFee: parseFloat(res.orca_config.withdrawal_fee)
    });
const castPilot = (res)=>({
        address: res.address,
        owner: res.config.owner,
        deposit: res.config.deposit,
        orcaCodeId: res.config.orca_code_id,
        saleFee: parseFloat(res.config.sale_fee),
        withdrawalFee: parseFloat(res.config.withdrawal_fee)
    });
const config = (network)=>{
    const contract = _contractsjson.default[network].pilot[0];
    if (!contract) return null;
    return castPilot(contract);
};
const getMarkets = function() {
    var _ref = _async_to_generator(function*(query, network) {
        const contract = _contractsjson.default[network].pilot.reverse()[0];
        if (!contract) return {};
        return query.wasm.queryContractSmart(contract.address, {
            sales: {}
        }).then((x)=>x.sales.reduce((a, v)=>_object_spread_props(_object_spread({}, a), {
                    [v.orca_address]: castSale(network, v)
                }), {}));
    });
    return function getMarkets(query, network) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waWxvdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2luIH0gZnJvbSBcIkBjb3NtanMvc3RhcmdhdGVcIjtcbmltcG9ydCB7IEJpZ051bWJlciwgcGFyc2VGaXhlZCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IERlbm9tIH0gZnJvbSBcIi4vZGVub21cIjtcbmltcG9ydCB7IE5FVFdPUksgfSBmcm9tIFwiLi9uZXR3b3JrXCI7XG5pbXBvcnQgKiBhcyBvcmNhIGZyb20gXCIuL29yY2FcIjtcbmltcG9ydCB7IEt1amlyYVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIi4vcXVlcnlDbGllbnRcIjtcbmltcG9ydCBjb250cmFjdHMgZnJvbSBcIi4vcmVzb3VyY2VzL2NvbnRyYWN0cy5qc29uXCI7XG5cbnR5cGUgU2FsZVJlc3BvbnNlID0ge1xuICBpZHg6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHByaWNlOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGJlbmVmaWNpYXJ5OiBzdHJpbmc7XG4gIGFtb3VudDogeyBhbW91bnQ6IHN0cmluZzsgZGVub206IHN0cmluZyB9O1xuICBzdGF0dXM6IFN0YXR1c1Jlc3BvbnNlO1xuICBvcmNhX2FkZHJlc3M6IHN0cmluZztcbiAgb3JjYV9jb25maWc6IHtcbiAgICBvd25lcjogc3RyaW5nO1xuICAgIG1hcmtldHM6IFtdO1xuICAgIGJpZF9kZW5vbTogc3RyaW5nO1xuICAgIGNvbGxhdGVyYWxfZGVub206IHN0cmluZztcbiAgICBiaWRfdGhyZXNob2xkOiBzdHJpbmc7XG4gICAgbWF4X3Nsb3Q6IG51bWJlcjtcbiAgICBwcmVtaXVtX3JhdGVfcGVyX3Nsb3Q6IHN0cmluZztcbiAgICB3YWl0aW5nX3BlcmlvZDogNjAwO1xuICAgIGxpcXVpZGF0aW9uX2ZlZTogc3RyaW5nO1xuICAgIHdpdGhkcmF3YWxfZmVlOiBzdHJpbmc7XG4gICAgZmVlX2FkZHJlc3M6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgU3RhdHVzUmVzcG9uc2UgPVxuICB8IHsgbGl2ZTogeyBjbG9zZXNfYXQ6IHN0cmluZyB9IH1cbiAgfCB7IHJldHJhY3RlZDogc3RyaW5nIH1cbiAgfCB7XG4gICAgICBleGVjdXRlZDoge1xuICAgICAgICBhdDogc3RyaW5nO1xuICAgICAgICByYWlzZV90b3RhbDogc3RyaW5nO1xuICAgICAgICByYWlzZV9mZWU6IHN0cmluZztcbiAgICAgICAgcmFpc2VfYW1vdW50OiBzdHJpbmc7XG4gICAgICB9O1xuICAgIH07XG5cbmV4cG9ydCBjb25zdCBjYXN0U2FsZSA9IChuZXR3b3JrOiBORVRXT1JLLCByZXM6IFNhbGVSZXNwb25zZSk6IE1hcmtldCA9PiAoe1xuICBsYWJlbDogRGVub20uZnJvbShyZXMuYW1vdW50LmRlbm9tKS5zeW1ib2wsXG4gIGNvbGxhdGVyYWxEZW5vbTogRGVub20uZnJvbShyZXMuYW1vdW50LmRlbm9tKSxcbiAgYmlkRGVub206IERlbm9tLmZyb20ocmVzLm9yY2FfY29uZmlnLmJpZF9kZW5vbSksXG4gIGFkZHJlc3M6IHJlcy5vcmNhX2FkZHJlc3MsXG4gIGJpZFRocmVzaG9sZDogQmlnTnVtYmVyLmZyb20ocmVzLm9yY2FfY29uZmlnLmJpZF90aHJlc2hvbGQpLFxuICBtYXhTbG90OiByZXMub3JjYV9jb25maWcubWF4X3Nsb3QsXG4gIHByZW1pdW1SYXRlUGVyU2xvdDogcGFyc2VGbG9hdChyZXMub3JjYV9jb25maWcucHJlbWl1bV9yYXRlX3Blcl9zbG90KSxcbiAgcHJlbWl1bVJhdGVQZXJTbG90SW50OiBwYXJzZUZpeGVkKHJlcy5vcmNhX2NvbmZpZy5wcmVtaXVtX3JhdGVfcGVyX3Nsb3QsIDE4KSxcbiAgd2FpdGluZ1BlcmlvZDogcmVzLm9yY2FfY29uZmlnLndhaXRpbmdfcGVyaW9kLFxuICBtYXJrZXRzOiByZXMub3JjYV9jb25maWcubWFya2V0cyxcbiAgYWN0aXZhdG9yczogW1wia3VqaXJhMW1yd3dwZWE1ZW1uMDV3bWo3ZDdld2VwcG13OThxajJhNjQycjBlXCJdLFxuICBzYWxlOiB7XG4gICAgaWR4OiByZXMuaWR4LFxuICAgIHRpdGxlOiByZXMudGl0bGUsXG4gICAgb3duZXI6IHJlcy5vd25lcixcbiAgICBiZW5lZmljaWFyeTogcmVzLmJlbmVmaWNpYXJ5LFxuICAgIGRlc2NyaXB0aW9uOiByZXMuZGVzY3JpcHRpb24sXG4gICAgcHJpY2U6IHBhcnNlRmxvYXQocmVzLnByaWNlKSxcbiAgICBhbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlcy5hbW91bnQuYW1vdW50KSxcbiAgICBzdGF0dXM6XG4gICAgICBcImxpdmVcIiBpbiByZXMuc3RhdHVzXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbGl2ZToge1xuICAgICAgICAgICAgICBjbG9zZXNBdDogbmV3IERhdGUocGFyc2VJbnQocmVzLnN0YXR1cy5saXZlLmNsb3Nlc19hdCkgLyAxMDAwMDAwKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IFwicmV0cmFjdGVkXCIgaW4gcmVzLnN0YXR1c1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIHJldHJhY3RlZDogbmV3IERhdGUocGFyc2VJbnQocmVzLnN0YXR1cy5yZXRyYWN0ZWQpIC8gMTAwMDAwMCksXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGV4ZWN1dGVkOiB7XG4gICAgICAgICAgICAgIGF0OiBuZXcgRGF0ZShwYXJzZUludChyZXMuc3RhdHVzLmV4ZWN1dGVkLmF0KSAvIDEwMDAwMDApLFxuICAgICAgICAgICAgICByYWlzZUFtb3VudDogQmlnTnVtYmVyLmZyb20ocmVzLnN0YXR1cy5leGVjdXRlZC5yYWlzZV9hbW91bnQpLFxuICAgICAgICAgICAgICByYWlzZVRvdGFsOiBCaWdOdW1iZXIuZnJvbShyZXMuc3RhdHVzLmV4ZWN1dGVkLnJhaXNlX3RvdGFsKSxcbiAgICAgICAgICAgICAgcmFpc2VGZWU6IEJpZ051bWJlci5mcm9tKHJlcy5zdGF0dXMuZXhlY3V0ZWQucmFpc2VfZmVlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgfSxcbiAgbGlxdWlkYXRpb25GZWU6IHBhcnNlRmxvYXQocmVzLm9yY2FfY29uZmlnLmxpcXVpZGF0aW9uX2ZlZSksXG4gIHdpdGhkcmF3YWxGZWU6IHBhcnNlRmxvYXQocmVzLm9yY2FfY29uZmlnLndpdGhkcmF3YWxfZmVlKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBTYWxlID0ge1xuICBpZHg6IHN0cmluZztcbiAgYW1vdW50OiBCaWdOdW1iZXI7XG4gIG93bmVyOiBzdHJpbmc7XG4gIGJlbmVmaWNpYXJ5OiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN0YXR1czogU3RhdHVzO1xufTtcblxudHlwZSBTdGF0dXMgPVxuICB8IHsgcGVuZGluZzogeyBvcGVuc0F0OiBEYXRlIH0gfVxuICB8IHsgbGl2ZTogeyBjbG9zZXNBdDogRGF0ZSB9IH1cbiAgfCB7IHJldHJhY3RlZDogRGF0ZSB9XG4gIHwge1xuICAgICAgZXhlY3V0ZWQ6IHtcbiAgICAgICAgYXQ6IERhdGU7XG4gICAgICAgIHJhaXNlVG90YWw6IEJpZ051bWJlcjtcbiAgICAgICAgcmFpc2VGZWU6IEJpZ051bWJlcjtcbiAgICAgICAgcmFpc2VBbW91bnQ6IEJpZ051bWJlcjtcbiAgICAgIH07XG4gICAgfTtcblxuZXhwb3J0IHR5cGUgTWFya2V0ID0gT21pdDxcbiAgb3JjYS5NYXJrZXQsXG4gIFwiY2hhaW5cIiB8IFwicHJvdG9jb2xcIiB8IFwicmVwYXlEZW5vbVwiIHwgXCJ0eXBlXCJcbj4gJiB7IHNhbGU6IFNhbGUgfTtcblxuY29uc3QgY2FzdFBpbG90ID0gKHJlczoge1xuICBpZDogbnVtYmVyO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNvbmZpZzoge1xuICAgIG93bmVyOiBzdHJpbmc7XG4gICAgZGVwb3NpdDoge1xuICAgICAgZGVub206IHN0cmluZztcbiAgICAgIGFtb3VudDogc3RyaW5nO1xuICAgIH07XG4gICAgb3JjYV9jb2RlX2lkOiBudW1iZXI7XG4gICAgc2FsZV9mZWU6IHN0cmluZztcbiAgICB3aXRoZHJhd2FsX2ZlZTogc3RyaW5nO1xuICB9O1xuICBwYWlyczogYm9vbGVhbjtcbiAgbWFya2V0czogYm9vbGVhbjtcbn0pOiBQaWxvdCA9PiAoe1xuICBhZGRyZXNzOiByZXMuYWRkcmVzcyxcbiAgb3duZXI6IHJlcy5jb25maWcub3duZXIsXG4gIGRlcG9zaXQ6IHJlcy5jb25maWcuZGVwb3NpdCxcbiAgb3JjYUNvZGVJZDogcmVzLmNvbmZpZy5vcmNhX2NvZGVfaWQsXG4gIHNhbGVGZWU6IHBhcnNlRmxvYXQocmVzLmNvbmZpZy5zYWxlX2ZlZSksXG4gIHdpdGhkcmF3YWxGZWU6IHBhcnNlRmxvYXQocmVzLmNvbmZpZy53aXRoZHJhd2FsX2ZlZSksXG59KTtcblxuZXhwb3J0IHR5cGUgUGlsb3QgPSB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgb3duZXI6IHN0cmluZztcbiAgZGVwb3NpdDogQ29pbjtcbiAgb3JjYUNvZGVJZDogbnVtYmVyO1xuICBzYWxlRmVlOiBudW1iZXI7XG4gIHdpdGhkcmF3YWxGZWU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSAobmV0d29yazogXCJoYXJwb29uLTRcIiB8IFwia2FpeW8tMVwiKTogUGlsb3QgfCBudWxsID0+IHtcbiAgY29uc3QgY29udHJhY3QgPSBjb250cmFjdHNbbmV0d29ya10ucGlsb3RbMF07XG4gIGlmICghY29udHJhY3QpIHJldHVybiBudWxsO1xuICByZXR1cm4gY2FzdFBpbG90KGNvbnRyYWN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNYXJrZXRzID0gYXN5bmMgKFxuICBxdWVyeTogS3VqaXJhUXVlcnlDbGllbnQsXG4gIG5ldHdvcms6IFwiaGFycG9vbi00XCIgfCBcImthaXlvLTFcIlxuKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBNYXJrZXQ+PiA9PiB7XG4gIGNvbnN0IGNvbnRyYWN0ID0gY29udHJhY3RzW25ldHdvcmtdLnBpbG90LnJldmVyc2UoKVswXTtcbiAgaWYgKCFjb250cmFjdCkgcmV0dXJuIHt9O1xuICByZXR1cm4gcXVlcnkud2FzbVxuICAgIC5xdWVyeUNvbnRyYWN0U21hcnQoY29udHJhY3QuYWRkcmVzcywgeyBzYWxlczoge30gfSlcbiAgICAudGhlbigoeDogYW55KSA9PlxuICAgICAgeC5zYWxlcy5yZWR1Y2UoXG4gICAgICAgIChhOiBSZWNvcmQ8c3RyaW5nLCBNYXJrZXQ+LCB2OiBTYWxlUmVzcG9uc2UpID0+ICh7XG4gICAgICAgICAgLi4uYSxcbiAgICAgICAgICBbdi5vcmNhX2FkZHJlc3NdOiBjYXN0U2FsZShuZXR3b3JrLCB2KSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiY2FzdFNhbGUiLCJjb25maWciLCJnZXRNYXJrZXRzIiwibmV0d29yayIsInJlcyIsImxhYmVsIiwiRGVub20iLCJmcm9tIiwiYW1vdW50IiwiZGVub20iLCJzeW1ib2wiLCJjb2xsYXRlcmFsRGVub20iLCJiaWREZW5vbSIsIm9yY2FfY29uZmlnIiwiYmlkX2Rlbm9tIiwiYWRkcmVzcyIsIm9yY2FfYWRkcmVzcyIsImJpZFRocmVzaG9sZCIsIkJpZ051bWJlciIsImJpZF90aHJlc2hvbGQiLCJtYXhTbG90IiwibWF4X3Nsb3QiLCJwcmVtaXVtUmF0ZVBlclNsb3QiLCJwYXJzZUZsb2F0IiwicHJlbWl1bV9yYXRlX3Blcl9zbG90IiwicHJlbWl1bVJhdGVQZXJTbG90SW50IiwicGFyc2VGaXhlZCIsIndhaXRpbmdQZXJpb2QiLCJ3YWl0aW5nX3BlcmlvZCIsIm1hcmtldHMiLCJhY3RpdmF0b3JzIiwic2FsZSIsImlkeCIsInRpdGxlIiwib3duZXIiLCJiZW5lZmljaWFyeSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJzdGF0dXMiLCJsaXZlIiwiY2xvc2VzQXQiLCJEYXRlIiwicGFyc2VJbnQiLCJjbG9zZXNfYXQiLCJyZXRyYWN0ZWQiLCJleGVjdXRlZCIsImF0IiwicmFpc2VBbW91bnQiLCJyYWlzZV9hbW91bnQiLCJyYWlzZVRvdGFsIiwicmFpc2VfdG90YWwiLCJyYWlzZUZlZSIsInJhaXNlX2ZlZSIsImxpcXVpZGF0aW9uRmVlIiwibGlxdWlkYXRpb25fZmVlIiwid2l0aGRyYXdhbEZlZSIsIndpdGhkcmF3YWxfZmVlIiwiY2FzdFBpbG90IiwiZGVwb3NpdCIsIm9yY2FDb2RlSWQiLCJvcmNhX2NvZGVfaWQiLCJzYWxlRmVlIiwic2FsZV9mZWUiLCJjb250cmFjdCIsImNvbnRyYWN0cyIsInBpbG90IiwicXVlcnkiLCJyZXZlcnNlIiwid2FzbSIsInF1ZXJ5Q29udHJhY3RTbWFydCIsInNhbGVzIiwidGhlbiIsIngiLCJyZWR1Y2UiLCJhIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUE4Q2FBLFFBQVE7ZUFBUkE7O0lBMEdBQyxNQUFNO2VBQU5BOztJQU1BQyxVQUFVO2VBQVZBOzs7MkJBN0p5Qjt1QkFDaEI7c0VBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDZixNQUFNRixXQUFXLENBQUNHLFNBQWtCQyxNQUErQixDQUFBO1FBQ3hFQyxPQUFPQyxZQUFLLENBQUNDLElBQUksQ0FBQ0gsSUFBSUksTUFBTSxDQUFDQyxLQUFLLEVBQUVDLE1BQU07UUFDMUNDLGlCQUFpQkwsWUFBSyxDQUFDQyxJQUFJLENBQUNILElBQUlJLE1BQU0sQ0FBQ0MsS0FBSztRQUM1Q0csVUFBVU4sWUFBSyxDQUFDQyxJQUFJLENBQUNILElBQUlTLFdBQVcsQ0FBQ0MsU0FBUztRQUM5Q0MsU0FBU1gsSUFBSVksWUFBWTtRQUN6QkMsY0FBY0Msb0JBQVMsQ0FBQ1gsSUFBSSxDQUFDSCxJQUFJUyxXQUFXLENBQUNNLGFBQWE7UUFDMURDLFNBQVNoQixJQUFJUyxXQUFXLENBQUNRLFFBQVE7UUFDakNDLG9CQUFvQkMsV0FBV25CLElBQUlTLFdBQVcsQ0FBQ1cscUJBQXFCO1FBQ3BFQyx1QkFBdUJDLElBQUFBLHFCQUFVLEVBQUN0QixJQUFJUyxXQUFXLENBQUNXLHFCQUFxQixFQUFFO1FBQ3pFRyxlQUFldkIsSUFBSVMsV0FBVyxDQUFDZSxjQUFjO1FBQzdDQyxTQUFTekIsSUFBSVMsV0FBVyxDQUFDZ0IsT0FBTztRQUNoQ0MsWUFBWTtZQUFDO1NBQWdEO1FBQzdEQyxNQUFNO1lBQ0pDLEtBQUs1QixJQUFJNEIsR0FBRztZQUNaQyxPQUFPN0IsSUFBSTZCLEtBQUs7WUFDaEJDLE9BQU85QixJQUFJOEIsS0FBSztZQUNoQkMsYUFBYS9CLElBQUkrQixXQUFXO1lBQzVCQyxhQUFhaEMsSUFBSWdDLFdBQVc7WUFDNUJDLE9BQU9kLFdBQVduQixJQUFJaUMsS0FBSztZQUMzQjdCLFFBQVFVLG9CQUFTLENBQUNYLElBQUksQ0FBQ0gsSUFBSUksTUFBTSxDQUFDQSxNQUFNO1lBQ3hDOEIsUUFDRSxVQUFVbEMsSUFBSWtDLE1BQU0sR0FDaEI7Z0JBQ0VDLE1BQU07b0JBQ0pDLFVBQVUsSUFBSUMsS0FBS0MsU0FBU3RDLElBQUlrQyxNQUFNLENBQUNDLElBQUksQ0FBQ0ksU0FBUyxJQUFJO2dCQUMzRDtZQUNGLElBQ0EsZUFBZXZDLElBQUlrQyxNQUFNLEdBQ3pCO2dCQUNFTSxXQUFXLElBQUlILEtBQUtDLFNBQVN0QyxJQUFJa0MsTUFBTSxDQUFDTSxTQUFTLElBQUk7WUFDdkQsSUFDQTtnQkFDRUMsVUFBVTtvQkFDUkMsSUFBSSxJQUFJTCxLQUFLQyxTQUFTdEMsSUFBSWtDLE1BQU0sQ0FBQ08sUUFBUSxDQUFDQyxFQUFFLElBQUk7b0JBQ2hEQyxhQUFhN0Isb0JBQVMsQ0FBQ1gsSUFBSSxDQUFDSCxJQUFJa0MsTUFBTSxDQUFDTyxRQUFRLENBQUNHLFlBQVk7b0JBQzVEQyxZQUFZL0Isb0JBQVMsQ0FBQ1gsSUFBSSxDQUFDSCxJQUFJa0MsTUFBTSxDQUFDTyxRQUFRLENBQUNLLFdBQVc7b0JBQzFEQyxVQUFVakMsb0JBQVMsQ0FBQ1gsSUFBSSxDQUFDSCxJQUFJa0MsTUFBTSxDQUFDTyxRQUFRLENBQUNPLFNBQVM7Z0JBQ3hEO1lBQ0Y7UUFDUjtRQUNBQyxnQkFBZ0I5QixXQUFXbkIsSUFBSVMsV0FBVyxDQUFDeUMsZUFBZTtRQUMxREMsZUFBZWhDLFdBQVduQixJQUFJUyxXQUFXLENBQUMyQyxjQUFjO0lBQzFELENBQUE7QUErQkEsTUFBTUMsWUFBWSxDQUFDckQsTUFlTCxDQUFBO1FBQ1pXLFNBQVNYLElBQUlXLE9BQU87UUFDcEJtQixPQUFPOUIsSUFBSUgsTUFBTSxDQUFDaUMsS0FBSztRQUN2QndCLFNBQVN0RCxJQUFJSCxNQUFNLENBQUN5RCxPQUFPO1FBQzNCQyxZQUFZdkQsSUFBSUgsTUFBTSxDQUFDMkQsWUFBWTtRQUNuQ0MsU0FBU3RDLFdBQVduQixJQUFJSCxNQUFNLENBQUM2RCxRQUFRO1FBQ3ZDUCxlQUFlaEMsV0FBV25CLElBQUlILE1BQU0sQ0FBQ3VELGNBQWM7SUFDckQsQ0FBQTtBQVdPLE1BQU12RCxTQUFTLENBQUNFO0lBQ3JCLE1BQU00RCxXQUFXQyxzQkFBUyxDQUFDN0QsUUFBUSxDQUFDOEQsS0FBSyxDQUFDLEVBQUU7SUFDNUMsSUFBSSxDQUFDRixVQUFVLE9BQU87SUFDdEIsT0FBT04sVUFBVU07QUFDbkI7QUFFTyxNQUFNN0Q7ZUFBYSxvQkFBQSxVQUN4QmdFLE9BQ0EvRDtRQUVBLE1BQU00RCxXQUFXQyxzQkFBUyxDQUFDN0QsUUFBUSxDQUFDOEQsS0FBSyxDQUFDRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ3RELElBQUksQ0FBQ0osVUFBVSxPQUFPLENBQUM7UUFDdkIsT0FBT0csTUFBTUUsSUFBSSxDQUNkQyxrQkFBa0IsQ0FBQ04sU0FBU2hELE9BQU8sRUFBRTtZQUFFdUQsT0FBTyxDQUFDO1FBQUUsR0FDakRDLElBQUksQ0FBQyxDQUFDQyxJQUNMQSxFQUFFRixLQUFLLENBQUNHLE1BQU0sQ0FDWixDQUFDQyxHQUEyQkMsSUFBcUIsd0NBQzVDRDtvQkFDSCxDQUFDQyxFQUFFM0QsWUFBWSxDQUFDLEVBQUVoQixTQUFTRyxTQUFTd0U7b0JBRXRDLENBQUM7SUFHVDtvQkFqQmF6RSxXQUNYZ0UsT0FDQS9EIn0=
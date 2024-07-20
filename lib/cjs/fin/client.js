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
    DEFAULT_SIMULATION: function() {
        return DEFAULT_SIMULATION;
    },
    castBook: function() {
        return castBook;
    },
    castConfig: function() {
        return castConfig;
    },
    castOrder: function() {
        return castOrder;
    },
    formatPrice: function() {
        return formatPrice;
    },
    simulate: function() {
        return simulate;
    }
});
const _bignumber = require("@ethersproject/bignumber");
const _bignumber1 = require("../bignumber");
const _denom = require("../denom");
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
const filterMigrationError = (agg, pool)=>{
    const prev = agg[agg.length - 1];
    return prev && prev.quotePrice > pool.quotePrice ? agg : [
        ...agg,
        pool
    ];
};
const castBook = (denoms)=>(response)=>({
            base: response.base.map(castPool(denoms)).reduce(filterMigrationError, []),
            quote: response.quote.map(castPool(denoms))
        });
const castConfig = (response)=>({
        owner: response.owner,
        denoms: [
            parseDenom(response.denoms[0]),
            parseDenom(response.denoms[1])
        ],
        isBootstrapping: response.is_bootstrapping,
        decimalDelta: response.decimal_delta || 0,
        precision: response.price_precision
    });
const parseDenom = (response)=>{
    if ("string" === typeof response) {
        return _denom.Denom.from(response);
    }
    if ("native" in response) {
        return _denom.Denom.from(response.native);
    }
    return _denom.Denom.from(response.cw20);
};
const castOrder = (denoms)=>(response)=>({
            idx: parseInt(response.idx),
            owner: response.owner,
            quotePrice: parseFloat(response.quote_price) * (0, _denom.factor)(denoms),
            quotePriceInt: (0, _bignumber.parseFixed)(response.quote_price, 18),
            oraclePrice: response.oracle_price ? Number(response.oracle_price) : undefined,
            offerDenom: parseDenom(response.offer_denom),
            offerAmount: _bignumber.BigNumber.from(response.offer_amount),
            filledAmount: _bignumber.BigNumber.from(response.filled_amount),
            originalOfferAmount: _bignumber.BigNumber.from(response.original_offer_amount),
            createdAt: new Date(parseInt(response.created_at) / 1000000)
        });
const castPool = (denoms)=>(response)=>{
        return {
            quotePrice: parseFloat(response.quote_price) * (0, _denom.factor)(denoms),
            quotePriceInt: (0, _bignumber.parseFixed)(response.quote_price, 18),
            offerDenom: parseDenom(response.offer_denom),
            totalOfferAmount: _bignumber.BigNumber.from(response.total_offer_amount)
        };
    };
const WEI = _bignumber.BigNumber.from(10).pow(18);
const DEFAULT_SIMULATION = {
    returnAmount: _bignumber.BigNumber.from(0),
    spreadAmount: _bignumber.BigNumber.from(0),
    commissionAmount: _bignumber.BigNumber.from(0),
    rate: _bignumber.BigNumber.from(0),
    slippage: _bignumber.BigNumber.from(0)
};
const simulate = function() {
    var _ref = _async_to_generator(function*(query, amount, denom, pair, book) {
        if (amount.isZero()) return DEFAULT_SIMULATION;
        const sell = denom.eq(pair.denoms[0]);
        const mid = book && book.base.length && book.quote.length ? book.base[0].quotePriceInt.add(book.quote[0].quotePriceInt).div(2) : _bignumber.BigNumber.from(0);
        let sim = book ? yield simulateLocal(amount, denom, pair, book).catch(()=>simulateQuery(query, amount, denom, pair)) : yield simulateQuery(query, amount, denom, pair);
        let offer = amount.mul(WEI);
        const beliefReturnAmount = sell ? offer.mul(mid).div(WEI).div(WEI) : offer.div(mid);
        const rate = sell ? sim.returnAmount.mul(WEI).div(amount) : amount.mul(WEI).div(sim.returnAmount);
        const diff = beliefReturnAmount.gt(sim.returnAmount) ? beliefReturnAmount.sub(sim.returnAmount) : sim.returnAmount.sub(beliefReturnAmount);
        const slippage = diff.mul(WEI).div(beliefReturnAmount);
        return {
            returnAmount: sim.returnAmount,
            spreadAmount: beliefReturnAmount.sub(sim.returnAmount),
            commissionAmount: sim.commissionAmount,
            rate,
            slippage
        };
    });
    return function simulate(query, amount, denom, pair, book) {
        return _ref.apply(this, arguments);
    };
}();
const simulateLocal = function() {
    var _ref = _async_to_generator(function*(amount, denom, pair, book) {
        // decimals from decoding are 18 dp
        const sell = denom.eq(pair.denoms[0]);
        let returned = _bignumber.BigNumber.from(0);
        const pools = [
            ...sell ? book.quote : book.base
        ].reverse();
        let offer = amount;
        while(offer.gt(0)){
            const pool = pools.pop();
            if (!pool) break;
            const price = pool.quotePriceInt;
            const poolValue = sell ? pool.totalOfferAmount.mul(WEI).div(price) : pool.totalOfferAmount.mul(price).div(WEI);
            const consumedOffer = poolValue.gt(offer) ? offer : poolValue;
            const consumedAsk = sell ? consumedOffer.mul(price).div(WEI) : consumedOffer.mul(WEI).div(price);
            returned = returned.add(consumedAsk);
            offer = offer.sub(consumedOffer);
        }
        if (!offer.isZero()) {
            throw new Error("Out of orders");
        }
        const commissionAmount = (0, _bignumber1.mulDec)(returned, 0.0015);
        const netReturnAmount = returned.sub(commissionAmount);
        return {
            returnAmount: netReturnAmount,
            commissionAmount
        };
    });
    return function simulateLocal(amount, denom, pair, book) {
        return _ref.apply(this, arguments);
    };
}();
const simulateQuery = (query, amount, denom, pair)=>query.wasm.queryContractSmart(pair.address, {
        simulation: {
            offer_asset: {
                info: {
                    native_token: {
                        denom: denom.reference
                    }
                },
                amount: amount.toString()
            }
        }
    }).then((res)=>({
            returnAmount: _bignumber.BigNumber.from(res.return_amount),
            commissionAmount: _bignumber.BigNumber.from(res.commission_amount)
        }));
const formatPrice = (price, denom, denoms)=>{
    const [, quote] = denoms;
    return price && denom.eq(quote) ? (0, _denom.factor)(denoms) / price : price * (0, _denom.factor)(denoms);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maW4vY2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpZ051bWJlciwgcGFyc2VGaXhlZCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IG11bERlYyB9IGZyb20gXCIuLi9iaWdudW1iZXJcIjtcbmltcG9ydCB7IERlbm9tLCBmYWN0b3IgfSBmcm9tIFwiLi4vZGVub21cIjtcbmltcG9ydCB7IEt1amlyYVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIi4uL3F1ZXJ5Q2xpZW50XCI7XG5pbXBvcnQge1xuICBCb29rLFxuICBCb29rUmVzcG9uc2UsXG4gIENXMjBEZW5vbSxcbiAgQ29uZmlnLFxuICBDb25maWdSZXNwb25zZSxcbiAgT3JkZXIsXG4gIE9yZGVyUmVzcG9uc2UsXG4gIFBhaXIsXG4gIFBvb2wsXG4gIFBvb2xSZXNwb25zZSxcbiAgU2ltdWxhdGlvbixcbiAgU2ltdWxhdGlvblJlc3BvbnNlLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBmaWx0ZXJNaWdyYXRpb25FcnJvciA9IChhZ2c6IFBvb2xbXSwgcG9vbDogUG9vbCk6IFBvb2xbXSA9PiB7XG4gIGNvbnN0IHByZXYgPSBhZ2dbYWdnLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gcHJldiAmJiBwcmV2LnF1b3RlUHJpY2UgPiBwb29sLnF1b3RlUHJpY2UgPyBhZ2cgOiBbLi4uYWdnLCBwb29sXTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXN0Qm9vayA9XG4gIChkZW5vbXM6IFtEZW5vbSwgRGVub21dKSA9PlxuICAocmVzcG9uc2U6IEJvb2tSZXNwb25zZSk6IEJvb2sgPT4gKHtcbiAgICBiYXNlOiByZXNwb25zZS5iYXNlLm1hcChjYXN0UG9vbChkZW5vbXMpKS5yZWR1Y2UoZmlsdGVyTWlncmF0aW9uRXJyb3IsIFtdKSxcbiAgICBxdW90ZTogcmVzcG9uc2UucXVvdGUubWFwKGNhc3RQb29sKGRlbm9tcykpLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNhc3RDb25maWcgPSAocmVzcG9uc2U6IENvbmZpZ1Jlc3BvbnNlKTogQ29uZmlnID0+ICh7XG4gIG93bmVyOiByZXNwb25zZS5vd25lcixcbiAgZGVub21zOiBbcGFyc2VEZW5vbShyZXNwb25zZS5kZW5vbXNbMF0pLCBwYXJzZURlbm9tKHJlc3BvbnNlLmRlbm9tc1sxXSldLFxuICBpc0Jvb3RzdHJhcHBpbmc6IHJlc3BvbnNlLmlzX2Jvb3RzdHJhcHBpbmcsXG4gIGRlY2ltYWxEZWx0YTogcmVzcG9uc2UuZGVjaW1hbF9kZWx0YSB8fCAwLFxuICBwcmVjaXNpb246IHJlc3BvbnNlLnByaWNlX3ByZWNpc2lvbixcbn0pO1xuXG5leHBvcnQgdHlwZSBIaXN0b3J5ID0ge1xuICB0aW1lOiBEYXRlO1xuICBvcGVuOiBudW1iZXI7XG4gIGNsb3NlOiBudW1iZXI7XG4gIGhpZ2g6IG51bWJlcjtcbiAgbG93OiBudW1iZXI7XG4gIHZvbHVtZTogbnVtYmVyO1xufVtdO1xuXG5jb25zdCBwYXJzZURlbm9tID0gKHJlc3BvbnNlOiBDVzIwRGVub20pOiBEZW5vbSA9PiB7XG4gIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgcmVzcG9uc2UpIHtcbiAgICByZXR1cm4gRGVub20uZnJvbShyZXNwb25zZSk7XG4gIH1cbiAgaWYgKFwibmF0aXZlXCIgaW4gcmVzcG9uc2UpIHtcbiAgICByZXR1cm4gRGVub20uZnJvbShyZXNwb25zZS5uYXRpdmUpO1xuICB9XG4gIHJldHVybiBEZW5vbS5mcm9tKHJlc3BvbnNlLmN3MjApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc3RPcmRlciA9XG4gIChkZW5vbXM6IFtEZW5vbSwgRGVub21dKSA9PlxuICAocmVzcG9uc2U6IE9yZGVyUmVzcG9uc2UpOiBPcmRlciA9PiAoe1xuICAgIGlkeDogcGFyc2VJbnQocmVzcG9uc2UuaWR4KSxcbiAgICBvd25lcjogcmVzcG9uc2Uub3duZXIsXG4gICAgcXVvdGVQcmljZTogcGFyc2VGbG9hdChyZXNwb25zZS5xdW90ZV9wcmljZSkgKiBmYWN0b3IoZGVub21zKSxcbiAgICBxdW90ZVByaWNlSW50OiBwYXJzZUZpeGVkKHJlc3BvbnNlLnF1b3RlX3ByaWNlLCAxOCksXG4gICAgb3JhY2xlUHJpY2U6IHJlc3BvbnNlLm9yYWNsZV9wcmljZVxuICAgICAgPyBOdW1iZXIocmVzcG9uc2Uub3JhY2xlX3ByaWNlKVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgb2ZmZXJEZW5vbTogcGFyc2VEZW5vbShyZXNwb25zZS5vZmZlcl9kZW5vbSksXG4gICAgb2ZmZXJBbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlc3BvbnNlLm9mZmVyX2Ftb3VudCksXG4gICAgZmlsbGVkQW1vdW50OiBCaWdOdW1iZXIuZnJvbShyZXNwb25zZS5maWxsZWRfYW1vdW50KSxcbiAgICBvcmlnaW5hbE9mZmVyQW1vdW50OiBCaWdOdW1iZXIuZnJvbShyZXNwb25zZS5vcmlnaW5hbF9vZmZlcl9hbW91bnQpLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUocGFyc2VJbnQocmVzcG9uc2UuY3JlYXRlZF9hdCkgLyAxMDAwMDAwKSxcbiAgfSk7XG5cbmNvbnN0IGNhc3RQb29sID1cbiAgKGRlbm9tczogW0Rlbm9tLCBEZW5vbV0pID0+XG4gIChyZXNwb25zZTogUG9vbFJlc3BvbnNlKTogUG9vbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1b3RlUHJpY2U6IHBhcnNlRmxvYXQocmVzcG9uc2UucXVvdGVfcHJpY2UpICogZmFjdG9yKGRlbm9tcyksXG4gICAgICBxdW90ZVByaWNlSW50OiBwYXJzZUZpeGVkKHJlc3BvbnNlLnF1b3RlX3ByaWNlLCAxOCksXG4gICAgICBvZmZlckRlbm9tOiBwYXJzZURlbm9tKHJlc3BvbnNlLm9mZmVyX2Rlbm9tKSxcbiAgICAgIHRvdGFsT2ZmZXJBbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlc3BvbnNlLnRvdGFsX29mZmVyX2Ftb3VudCksXG4gICAgfTtcbiAgfTtcblxuY29uc3QgV0VJID0gQmlnTnVtYmVyLmZyb20oMTApLnBvdygxOCk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NJTVVMQVRJT046IFNpbXVsYXRpb24gPSB7XG4gIHJldHVybkFtb3VudDogQmlnTnVtYmVyLmZyb20oMCksXG4gIHNwcmVhZEFtb3VudDogQmlnTnVtYmVyLmZyb20oMCksXG4gIGNvbW1pc3Npb25BbW91bnQ6IEJpZ051bWJlci5mcm9tKDApLFxuICByYXRlOiBCaWdOdW1iZXIuZnJvbSgwKSxcbiAgc2xpcHBhZ2U6IEJpZ051bWJlci5mcm9tKDApLFxufTtcblxuZXhwb3J0IGNvbnN0IHNpbXVsYXRlID0gYXN5bmMgKFxuICBxdWVyeTogS3VqaXJhUXVlcnlDbGllbnQsXG4gIGFtb3VudDogQmlnTnVtYmVyLFxuICBkZW5vbTogRGVub20sXG4gIHBhaXI6IFBhaXIsXG4gIGJvb2s6IEJvb2sgfCBudWxsXG4pOiBQcm9taXNlPFNpbXVsYXRpb24+ID0+IHtcbiAgaWYgKGFtb3VudC5pc1plcm8oKSkgcmV0dXJuIERFRkFVTFRfU0lNVUxBVElPTjtcbiAgY29uc3Qgc2VsbCA9IGRlbm9tLmVxKHBhaXIuZGVub21zWzBdKTtcbiAgY29uc3QgbWlkID1cbiAgICBib29rICYmIGJvb2suYmFzZS5sZW5ndGggJiYgYm9vay5xdW90ZS5sZW5ndGhcbiAgICAgID8gYm9vay5iYXNlWzBdLnF1b3RlUHJpY2VJbnQuYWRkKGJvb2sucXVvdGVbMF0ucXVvdGVQcmljZUludCkuZGl2KDIpXG4gICAgICA6IEJpZ051bWJlci5mcm9tKDApO1xuXG4gIGxldCBzaW0gPSBib29rXG4gICAgPyBhd2FpdCBzaW11bGF0ZUxvY2FsKGFtb3VudCwgZGVub20sIHBhaXIsIGJvb2spLmNhdGNoKCgpID0+XG4gICAgICAgIHNpbXVsYXRlUXVlcnkocXVlcnksIGFtb3VudCwgZGVub20sIHBhaXIpXG4gICAgICApXG4gICAgOiBhd2FpdCBzaW11bGF0ZVF1ZXJ5KHF1ZXJ5LCBhbW91bnQsIGRlbm9tLCBwYWlyKTtcblxuICBsZXQgb2ZmZXIgPSBhbW91bnQubXVsKFdFSSk7XG4gIGNvbnN0IGJlbGllZlJldHVybkFtb3VudCA9IHNlbGxcbiAgICA/IG9mZmVyLm11bChtaWQpLmRpdihXRUkpLmRpdihXRUkpXG4gICAgOiBvZmZlci5kaXYobWlkKTtcblxuICBjb25zdCByYXRlID0gc2VsbFxuICAgID8gc2ltLnJldHVybkFtb3VudC5tdWwoV0VJKS5kaXYoYW1vdW50KVxuICAgIDogYW1vdW50Lm11bChXRUkpLmRpdihzaW0ucmV0dXJuQW1vdW50KTtcblxuICBjb25zdCBkaWZmID0gYmVsaWVmUmV0dXJuQW1vdW50Lmd0KHNpbS5yZXR1cm5BbW91bnQpXG4gICAgPyBiZWxpZWZSZXR1cm5BbW91bnQuc3ViKHNpbS5yZXR1cm5BbW91bnQpXG4gICAgOiBzaW0ucmV0dXJuQW1vdW50LnN1YihiZWxpZWZSZXR1cm5BbW91bnQpO1xuXG4gIGNvbnN0IHNsaXBwYWdlID0gZGlmZi5tdWwoV0VJKS5kaXYoYmVsaWVmUmV0dXJuQW1vdW50KTtcblxuICByZXR1cm4ge1xuICAgIHJldHVybkFtb3VudDogc2ltLnJldHVybkFtb3VudCxcbiAgICBzcHJlYWRBbW91bnQ6IGJlbGllZlJldHVybkFtb3VudC5zdWIoc2ltLnJldHVybkFtb3VudCksXG4gICAgY29tbWlzc2lvbkFtb3VudDogc2ltLmNvbW1pc3Npb25BbW91bnQsXG4gICAgcmF0ZSxcbiAgICBzbGlwcGFnZSxcbiAgfTtcbn07XG5jb25zdCBzaW11bGF0ZUxvY2FsID0gYXN5bmMgKFxuICBhbW91bnQ6IEJpZ051bWJlcixcbiAgZGVub206IERlbm9tLFxuICBwYWlyOiBQYWlyLFxuICBib29rOiBCb29rXG4pOiBQcm9taXNlPFBpY2s8U2ltdWxhdGlvbiwgXCJyZXR1cm5BbW91bnRcIiB8IFwiY29tbWlzc2lvbkFtb3VudFwiPj4gPT4ge1xuICAvLyBkZWNpbWFscyBmcm9tIGRlY29kaW5nIGFyZSAxOCBkcFxuICBjb25zdCBzZWxsID0gZGVub20uZXEocGFpci5kZW5vbXNbMF0pO1xuICBsZXQgcmV0dXJuZWQgPSBCaWdOdW1iZXIuZnJvbSgwKTtcbiAgY29uc3QgcG9vbHMgPSBbLi4uKHNlbGwgPyBib29rLnF1b3RlIDogYm9vay5iYXNlKV0ucmV2ZXJzZSgpO1xuXG4gIGxldCBvZmZlciA9IGFtb3VudDtcblxuICB3aGlsZSAob2ZmZXIuZ3QoMCkpIHtcbiAgICBjb25zdCBwb29sID0gcG9vbHMucG9wKCk7XG4gICAgaWYgKCFwb29sKSBicmVhaztcblxuICAgIGNvbnN0IHByaWNlID0gcG9vbC5xdW90ZVByaWNlSW50O1xuXG4gICAgY29uc3QgcG9vbFZhbHVlID0gc2VsbFxuICAgICAgPyBwb29sLnRvdGFsT2ZmZXJBbW91bnQubXVsKFdFSSkuZGl2KHByaWNlKVxuICAgICAgOiBwb29sLnRvdGFsT2ZmZXJBbW91bnQubXVsKHByaWNlKS5kaXYoV0VJKTtcblxuICAgIGNvbnN0IGNvbnN1bWVkT2ZmZXIgPSBwb29sVmFsdWUuZ3Qob2ZmZXIpID8gb2ZmZXIgOiBwb29sVmFsdWU7XG5cbiAgICBjb25zdCBjb25zdW1lZEFzayA9IHNlbGxcbiAgICAgID8gY29uc3VtZWRPZmZlci5tdWwocHJpY2UpLmRpdihXRUkpXG4gICAgICA6IGNvbnN1bWVkT2ZmZXIubXVsKFdFSSkuZGl2KHByaWNlKTtcblxuICAgIHJldHVybmVkID0gcmV0dXJuZWQuYWRkKGNvbnN1bWVkQXNrKTtcbiAgICBvZmZlciA9IG9mZmVyLnN1Yihjb25zdW1lZE9mZmVyKTtcbiAgfVxuXG4gIGlmICghb2ZmZXIuaXNaZXJvKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPdXQgb2Ygb3JkZXJzXCIpO1xuICB9XG5cbiAgY29uc3QgY29tbWlzc2lvbkFtb3VudCA9IG11bERlYyhyZXR1cm5lZCwgMC4wMDE1KTtcbiAgY29uc3QgbmV0UmV0dXJuQW1vdW50ID0gcmV0dXJuZWQuc3ViKGNvbW1pc3Npb25BbW91bnQpO1xuICByZXR1cm4geyByZXR1cm5BbW91bnQ6IG5ldFJldHVybkFtb3VudCwgY29tbWlzc2lvbkFtb3VudCB9O1xufTtcblxuY29uc3Qgc2ltdWxhdGVRdWVyeSA9IChcbiAgcXVlcnk6IEt1amlyYVF1ZXJ5Q2xpZW50LFxuICBhbW91bnQ6IEJpZ051bWJlcixcbiAgZGVub206IERlbm9tLFxuICBwYWlyOiBQYWlyXG4pOiBQcm9taXNlPFBpY2s8U2ltdWxhdGlvbiwgXCJyZXR1cm5BbW91bnRcIiB8IFwiY29tbWlzc2lvbkFtb3VudFwiPj4gPT5cbiAgcXVlcnkud2FzbVxuICAgIC5xdWVyeUNvbnRyYWN0U21hcnQocGFpci5hZGRyZXNzLCB7XG4gICAgICBzaW11bGF0aW9uOiB7XG4gICAgICAgIG9mZmVyX2Fzc2V0OiB7XG4gICAgICAgICAgaW5mbzogeyBuYXRpdmVfdG9rZW46IHsgZGVub206IGRlbm9tLnJlZmVyZW5jZSB9IH0sXG4gICAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigocmVzOiBTaW11bGF0aW9uUmVzcG9uc2UpID0+ICh7XG4gICAgICByZXR1cm5BbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlcy5yZXR1cm5fYW1vdW50KSxcbiAgICAgIGNvbW1pc3Npb25BbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlcy5jb21taXNzaW9uX2Ftb3VudCksXG4gICAgfSkpO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UHJpY2UgPSAoXG4gIHByaWNlOiBudW1iZXIsXG4gIGRlbm9tOiBEZW5vbSxcbiAgZGVub21zOiBbRGVub20sIERlbm9tXVxuKTogbnVtYmVyID0+IHtcbiAgY29uc3QgWywgcXVvdGVdID0gZGVub21zO1xuICByZXR1cm4gcHJpY2UgJiYgZGVub20uZXEocXVvdGUpXG4gICAgPyBmYWN0b3IoZGVub21zKSAvIHByaWNlXG4gICAgOiBwcmljZSAqIGZhY3RvcihkZW5vbXMpO1xufTtcbiJdLCJuYW1lcyI6WyJERUZBVUxUX1NJTVVMQVRJT04iLCJjYXN0Qm9vayIsImNhc3RDb25maWciLCJjYXN0T3JkZXIiLCJmb3JtYXRQcmljZSIsInNpbXVsYXRlIiwiZmlsdGVyTWlncmF0aW9uRXJyb3IiLCJhZ2ciLCJwb29sIiwicHJldiIsImxlbmd0aCIsInF1b3RlUHJpY2UiLCJkZW5vbXMiLCJyZXNwb25zZSIsImJhc2UiLCJtYXAiLCJjYXN0UG9vbCIsInJlZHVjZSIsInF1b3RlIiwib3duZXIiLCJwYXJzZURlbm9tIiwiaXNCb290c3RyYXBwaW5nIiwiaXNfYm9vdHN0cmFwcGluZyIsImRlY2ltYWxEZWx0YSIsImRlY2ltYWxfZGVsdGEiLCJwcmVjaXNpb24iLCJwcmljZV9wcmVjaXNpb24iLCJEZW5vbSIsImZyb20iLCJuYXRpdmUiLCJjdzIwIiwiaWR4IiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwicXVvdGVfcHJpY2UiLCJmYWN0b3IiLCJxdW90ZVByaWNlSW50IiwicGFyc2VGaXhlZCIsIm9yYWNsZVByaWNlIiwib3JhY2xlX3ByaWNlIiwiTnVtYmVyIiwidW5kZWZpbmVkIiwib2ZmZXJEZW5vbSIsIm9mZmVyX2Rlbm9tIiwib2ZmZXJBbW91bnQiLCJCaWdOdW1iZXIiLCJvZmZlcl9hbW91bnQiLCJmaWxsZWRBbW91bnQiLCJmaWxsZWRfYW1vdW50Iiwib3JpZ2luYWxPZmZlckFtb3VudCIsIm9yaWdpbmFsX29mZmVyX2Ftb3VudCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJjcmVhdGVkX2F0IiwidG90YWxPZmZlckFtb3VudCIsInRvdGFsX29mZmVyX2Ftb3VudCIsIldFSSIsInBvdyIsInJldHVybkFtb3VudCIsInNwcmVhZEFtb3VudCIsImNvbW1pc3Npb25BbW91bnQiLCJyYXRlIiwic2xpcHBhZ2UiLCJxdWVyeSIsImFtb3VudCIsImRlbm9tIiwicGFpciIsImJvb2siLCJpc1plcm8iLCJzZWxsIiwiZXEiLCJtaWQiLCJhZGQiLCJkaXYiLCJzaW0iLCJzaW11bGF0ZUxvY2FsIiwiY2F0Y2giLCJzaW11bGF0ZVF1ZXJ5Iiwib2ZmZXIiLCJtdWwiLCJiZWxpZWZSZXR1cm5BbW91bnQiLCJkaWZmIiwiZ3QiLCJzdWIiLCJyZXR1cm5lZCIsInBvb2xzIiwicmV2ZXJzZSIsInBvcCIsInByaWNlIiwicG9vbFZhbHVlIiwiY29uc3VtZWRPZmZlciIsImNvbnN1bWVkQXNrIiwiRXJyb3IiLCJtdWxEZWMiLCJuZXRSZXR1cm5BbW91bnQiLCJ3YXNtIiwicXVlcnlDb250cmFjdFNtYXJ0IiwiYWRkcmVzcyIsInNpbXVsYXRpb24iLCJvZmZlcl9hc3NldCIsImluZm8iLCJuYXRpdmVfdG9rZW4iLCJyZWZlcmVuY2UiLCJ0b1N0cmluZyIsInRoZW4iLCJyZXMiLCJyZXR1cm5fYW1vdW50IiwiY29tbWlzc2lvbl9hbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBd0ZhQSxrQkFBa0I7ZUFBbEJBOztJQWhFQUMsUUFBUTtlQUFSQTs7SUFPQUMsVUFBVTtlQUFWQTs7SUEyQkFDLFNBQVM7ZUFBVEE7O0lBK0lBQyxXQUFXO2VBQVhBOztJQXpHQUMsUUFBUTtlQUFSQTs7OzJCQWhHeUI7NEJBQ2Y7dUJBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCOUIsTUFBTUMsdUJBQXVCLENBQUNDLEtBQWFDO0lBQ3pDLE1BQU1DLE9BQU9GLEdBQUcsQ0FBQ0EsSUFBSUcsTUFBTSxHQUFHLEVBQUU7SUFDaEMsT0FBT0QsUUFBUUEsS0FBS0UsVUFBVSxHQUFHSCxLQUFLRyxVQUFVLEdBQUdKLE1BQU07V0FBSUE7UUFBS0M7S0FBSztBQUN6RTtBQUVPLE1BQU1QLFdBQ1gsQ0FBQ1csU0FDRCxDQUFDQyxXQUFrQyxDQUFBO1lBQ2pDQyxNQUFNRCxTQUFTQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsU0FBU0osU0FBU0ssTUFBTSxDQUFDWCxzQkFBc0IsRUFBRTtZQUN6RVksT0FBT0wsU0FBU0ssS0FBSyxDQUFDSCxHQUFHLENBQUNDLFNBQVNKO1FBQ3JDLENBQUE7QUFFSyxNQUFNVixhQUFhLENBQUNXLFdBQXNDLENBQUE7UUFDL0RNLE9BQU9OLFNBQVNNLEtBQUs7UUFDckJQLFFBQVE7WUFBQ1Es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
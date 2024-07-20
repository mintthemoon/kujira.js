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
import { BigNumber, parseFixed } from "@ethersproject/bignumber";
import { mulDec } from "../bignumber";
import { Denom, factor } from "../denom";
const filterMigrationError = (agg, pool)=>{
    const prev = agg[agg.length - 1];
    return prev && prev.quotePrice > pool.quotePrice ? agg : [
        ...agg,
        pool
    ];
};
export const castBook = (denoms)=>(response)=>({
            base: response.base.map(castPool(denoms)).reduce(filterMigrationError, []),
            quote: response.quote.map(castPool(denoms))
        });
export const castConfig = (response)=>({
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
        return Denom.from(response);
    }
    if ("native" in response) {
        return Denom.from(response.native);
    }
    return Denom.from(response.cw20);
};
export const castOrder = (denoms)=>(response)=>({
            idx: parseInt(response.idx),
            owner: response.owner,
            quotePrice: parseFloat(response.quote_price) * factor(denoms),
            quotePriceInt: parseFixed(response.quote_price, 18),
            oraclePrice: response.oracle_price ? Number(response.oracle_price) : undefined,
            offerDenom: parseDenom(response.offer_denom),
            offerAmount: BigNumber.from(response.offer_amount),
            filledAmount: BigNumber.from(response.filled_amount),
            originalOfferAmount: BigNumber.from(response.original_offer_amount),
            createdAt: new Date(parseInt(response.created_at) / 1000000)
        });
const castPool = (denoms)=>(response)=>{
        return {
            quotePrice: parseFloat(response.quote_price) * factor(denoms),
            quotePriceInt: parseFixed(response.quote_price, 18),
            offerDenom: parseDenom(response.offer_denom),
            totalOfferAmount: BigNumber.from(response.total_offer_amount)
        };
    };
const WEI = BigNumber.from(10).pow(18);
export const DEFAULT_SIMULATION = {
    returnAmount: BigNumber.from(0),
    spreadAmount: BigNumber.from(0),
    commissionAmount: BigNumber.from(0),
    rate: BigNumber.from(0),
    slippage: BigNumber.from(0)
};
export const simulate = function() {
    var _ref = _async_to_generator(function*(query, amount, denom, pair, book) {
        if (amount.isZero()) return DEFAULT_SIMULATION;
        const sell = denom.eq(pair.denoms[0]);
        const mid = book && book.base.length && book.quote.length ? book.base[0].quotePriceInt.add(book.quote[0].quotePriceInt).div(2) : BigNumber.from(0);
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
        let returned = BigNumber.from(0);
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
        const commissionAmount = mulDec(returned, 0.0015);
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
            returnAmount: BigNumber.from(res.return_amount),
            commissionAmount: BigNumber.from(res.commission_amount)
        }));
export const formatPrice = (price, denom, denoms)=>{
    const [, quote] = denoms;
    return price && denom.eq(quote) ? factor(denoms) / price : price * factor(denoms);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maW4vY2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJpZ051bWJlciwgcGFyc2VGaXhlZCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IG11bERlYyB9IGZyb20gXCIuLi9iaWdudW1iZXJcIjtcbmltcG9ydCB7IERlbm9tLCBmYWN0b3IgfSBmcm9tIFwiLi4vZGVub21cIjtcbmltcG9ydCB7IEt1amlyYVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIi4uL3F1ZXJ5Q2xpZW50XCI7XG5pbXBvcnQge1xuICBCb29rLFxuICBCb29rUmVzcG9uc2UsXG4gIENXMjBEZW5vbSxcbiAgQ29uZmlnLFxuICBDb25maWdSZXNwb25zZSxcbiAgT3JkZXIsXG4gIE9yZGVyUmVzcG9uc2UsXG4gIFBhaXIsXG4gIFBvb2wsXG4gIFBvb2xSZXNwb25zZSxcbiAgU2ltdWxhdGlvbixcbiAgU2ltdWxhdGlvblJlc3BvbnNlLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBmaWx0ZXJNaWdyYXRpb25FcnJvciA9IChhZ2c6IFBvb2xbXSwgcG9vbDogUG9vbCk6IFBvb2xbXSA9PiB7XG4gIGNvbnN0IHByZXYgPSBhZ2dbYWdnLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gcHJldiAmJiBwcmV2LnF1b3RlUHJpY2UgPiBwb29sLnF1b3RlUHJpY2UgPyBhZ2cgOiBbLi4uYWdnLCBwb29sXTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXN0Qm9vayA9XG4gIChkZW5vbXM6IFtEZW5vbSwgRGVub21dKSA9PlxuICAocmVzcG9uc2U6IEJvb2tSZXNwb25zZSk6IEJvb2sgPT4gKHtcbiAgICBiYXNlOiByZXNwb25zZS5iYXNlLm1hcChjYXN0UG9vbChkZW5vbXMpKS5yZWR1Y2UoZmlsdGVyTWlncmF0aW9uRXJyb3IsIFtdKSxcbiAgICBxdW90ZTogcmVzcG9uc2UucXVvdGUubWFwKGNhc3RQb29sKGRlbm9tcykpLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGNhc3RDb25maWcgPSAocmVzcG9uc2U6IENvbmZpZ1Jlc3BvbnNlKTogQ29uZmlnID0+ICh7XG4gIG93bmVyOiByZXNwb25zZS5vd25lcixcbiAgZGVub21zOiBbcGFyc2VEZW5vbShyZXNwb25zZS5kZW5vbXNbMF0pLCBwYXJzZURlbm9tKHJlc3BvbnNlLmRlbm9tc1sxXSldLFxuICBpc0Jvb3RzdHJhcHBpbmc6IHJlc3BvbnNlLmlzX2Jvb3RzdHJhcHBpbmcsXG4gIGRlY2ltYWxEZWx0YTogcmVzcG9uc2UuZGVjaW1hbF9kZWx0YSB8fCAwLFxuICBwcmVjaXNpb246IHJlc3BvbnNlLnByaWNlX3ByZWNpc2lvbixcbn0pO1xuXG5leHBvcnQgdHlwZSBIaXN0b3J5ID0ge1xuICB0aW1lOiBEYXRlO1xuICBvcGVuOiBudW1iZXI7XG4gIGNsb3NlOiBudW1iZXI7XG4gIGhpZ2g6IG51bWJlcjtcbiAgbG93OiBudW1iZXI7XG4gIHZvbHVtZTogbnVtYmVyO1xufVtdO1xuXG5jb25zdCBwYXJzZURlbm9tID0gKHJlc3BvbnNlOiBDVzIwRGVub20pOiBEZW5vbSA9PiB7XG4gIGlmIChcInN0cmluZ1wiID09PSB0eXBlb2YgcmVzcG9uc2UpIHtcbiAgICByZXR1cm4gRGVub20uZnJvbShyZXNwb25zZSk7XG4gIH1cbiAgaWYgKFwibmF0aXZlXCIgaW4gcmVzcG9uc2UpIHtcbiAgICByZXR1cm4gRGVub20uZnJvbShyZXNwb25zZS5uYXRpdmUpO1xuICB9XG4gIHJldHVybiBEZW5vbS5mcm9tKHJlc3BvbnNlLmN3MjApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc3RPcmRlciA9XG4gIChkZW5vbXM6IFtEZW5vbSwgRGVub21dKSA9PlxuICAocmVzcG9uc2U6IE9yZGVyUmVzcG9uc2UpOiBPcmRlciA9PiAoe1xuICAgIGlkeDogcGFyc2VJbnQocmVzcG9uc2UuaWR4KSxcbiAgICBvd25lcjogcmVzcG9uc2Uub3duZXIsXG4gICAgcXVvdGVQcmljZTogcGFyc2VGbG9hdChyZXNwb25zZS5xdW90ZV9wcmljZSkgKiBmYWN0b3IoZGVub21zKSxcbiAgICBxdW90ZVByaWNlSW50OiBwYXJzZUZpeGVkKHJlc3BvbnNlLnF1b3RlX3ByaWNlLCAxOCksXG4gICAgb3JhY2xlUHJpY2U6IHJlc3BvbnNlLm9yYWNsZV9wcmljZVxuICAgICAgPyBOdW1iZXIocmVzcG9uc2Uub3JhY2xlX3ByaWNlKVxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgb2ZmZXJEZW5vbTogcGFyc2VEZW5vbShyZXNwb25zZS5vZmZlcl9kZW5vbSksXG4gICAgb2ZmZXJBbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlc3BvbnNlLm9mZmVyX2Ftb3VudCksXG4gICAgZmlsbGVkQW1vdW50OiBCaWdOdW1iZXIuZnJvbShyZXNwb25zZS5maWxsZWRfYW1vdW50KSxcbiAgICBvcmlnaW5hbE9mZmVyQW1vdW50OiBCaWdOdW1iZXIuZnJvbShyZXNwb25zZS5vcmlnaW5hbF9vZmZlcl9hbW91bnQpLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUocGFyc2VJbnQocmVzcG9uc2UuY3JlYXRlZF9hdCkgLyAxMDAwMDAwKSxcbiAgfSk7XG5cbmNvbnN0IGNhc3RQb29sID1cbiAgKGRlbm9tczogW0Rlbm9tLCBEZW5vbV0pID0+XG4gIChyZXNwb25zZTogUG9vbFJlc3BvbnNlKTogUG9vbCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1b3RlUHJpY2U6IHBhcnNlRmxvYXQocmVzcG9uc2UucXVvdGVfcHJpY2UpICogZmFjdG9yKGRlbm9tcyksXG4gICAgICBxdW90ZVByaWNlSW50OiBwYXJzZUZpeGVkKHJlc3BvbnNlLnF1b3RlX3ByaWNlLCAxOCksXG4gICAgICBvZmZlckRlbm9tOiBwYXJzZURlbm9tKHJlc3BvbnNlLm9mZmVyX2Rlbm9tKSxcbiAgICAgIHRvdGFsT2ZmZXJBbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlc3BvbnNlLnRvdGFsX29mZmVyX2Ftb3VudCksXG4gICAgfTtcbiAgfTtcblxuY29uc3QgV0VJID0gQmlnTnVtYmVyLmZyb20oMTApLnBvdygxOCk7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NJTVVMQVRJT046IFNpbXVsYXRpb24gPSB7XG4gIHJldHVybkFtb3VudDogQmlnTnVtYmVyLmZyb20oMCksXG4gIHNwcmVhZEFtb3VudDogQmlnTnVtYmVyLmZyb20oMCksXG4gIGNvbW1pc3Npb25BbW91bnQ6IEJpZ051bWJlci5mcm9tKDApLFxuICByYXRlOiBCaWdOdW1iZXIuZnJvbSgwKSxcbiAgc2xpcHBhZ2U6IEJpZ051bWJlci5mcm9tKDApLFxufTtcblxuZXhwb3J0IGNvbnN0IHNpbXVsYXRlID0gYXN5bmMgKFxuICBxdWVyeTogS3VqaXJhUXVlcnlDbGllbnQsXG4gIGFtb3VudDogQmlnTnVtYmVyLFxuICBkZW5vbTogRGVub20sXG4gIHBhaXI6IFBhaXIsXG4gIGJvb2s6IEJvb2sgfCBudWxsXG4pOiBQcm9taXNlPFNpbXVsYXRpb24+ID0+IHtcbiAgaWYgKGFtb3VudC5pc1plcm8oKSkgcmV0dXJuIERFRkFVTFRfU0lNVUxBVElPTjtcbiAgY29uc3Qgc2VsbCA9IGRlbm9tLmVxKHBhaXIuZGVub21zWzBdKTtcbiAgY29uc3QgbWlkID1cbiAgICBib29rICYmIGJvb2suYmFzZS5sZW5ndGggJiYgYm9vay5xdW90ZS5sZW5ndGhcbiAgICAgID8gYm9vay5iYXNlWzBdLnF1b3RlUHJpY2VJbnQuYWRkKGJvb2sucXVvdGVbMF0ucXVvdGVQcmljZUludCkuZGl2KDIpXG4gICAgICA6IEJpZ051bWJlci5mcm9tKDApO1xuXG4gIGxldCBzaW0gPSBib29rXG4gICAgPyBhd2FpdCBzaW11bGF0ZUxvY2FsKGFtb3VudCwgZGVub20sIHBhaXIsIGJvb2spLmNhdGNoKCgpID0+XG4gICAgICAgIHNpbXVsYXRlUXVlcnkocXVlcnksIGFtb3VudCwgZGVub20sIHBhaXIpXG4gICAgICApXG4gICAgOiBhd2FpdCBzaW11bGF0ZVF1ZXJ5KHF1ZXJ5LCBhbW91bnQsIGRlbm9tLCBwYWlyKTtcblxuICBsZXQgb2ZmZXIgPSBhbW91bnQubXVsKFdFSSk7XG4gIGNvbnN0IGJlbGllZlJldHVybkFtb3VudCA9IHNlbGxcbiAgICA/IG9mZmVyLm11bChtaWQpLmRpdihXRUkpLmRpdihXRUkpXG4gICAgOiBvZmZlci5kaXYobWlkKTtcblxuICBjb25zdCByYXRlID0gc2VsbFxuICAgID8gc2ltLnJldHVybkFtb3VudC5tdWwoV0VJKS5kaXYoYW1vdW50KVxuICAgIDogYW1vdW50Lm11bChXRUkpLmRpdihzaW0ucmV0dXJuQW1vdW50KTtcblxuICBjb25zdCBkaWZmID0gYmVsaWVmUmV0dXJuQW1vdW50Lmd0KHNpbS5yZXR1cm5BbW91bnQpXG4gICAgPyBiZWxpZWZSZXR1cm5BbW91bnQuc3ViKHNpbS5yZXR1cm5BbW91bnQpXG4gICAgOiBzaW0ucmV0dXJuQW1vdW50LnN1YihiZWxpZWZSZXR1cm5BbW91bnQpO1xuXG4gIGNvbnN0IHNsaXBwYWdlID0gZGlmZi5tdWwoV0VJKS5kaXYoYmVsaWVmUmV0dXJuQW1vdW50KTtcblxuICByZXR1cm4ge1xuICAgIHJldHVybkFtb3VudDogc2ltLnJldHVybkFtb3VudCxcbiAgICBzcHJlYWRBbW91bnQ6IGJlbGllZlJldHVybkFtb3VudC5zdWIoc2ltLnJldHVybkFtb3VudCksXG4gICAgY29tbWlzc2lvbkFtb3VudDogc2ltLmNvbW1pc3Npb25BbW91bnQsXG4gICAgcmF0ZSxcbiAgICBzbGlwcGFnZSxcbiAgfTtcbn07XG5jb25zdCBzaW11bGF0ZUxvY2FsID0gYXN5bmMgKFxuICBhbW91bnQ6IEJpZ051bWJlcixcbiAgZGVub206IERlbm9tLFxuICBwYWlyOiBQYWlyLFxuICBib29rOiBCb29rXG4pOiBQcm9taXNlPFBpY2s8U2ltdWxhdGlvbiwgXCJyZXR1cm5BbW91bnRcIiB8IFwiY29tbWlzc2lvbkFtb3VudFwiPj4gPT4ge1xuICAvLyBkZWNpbWFscyBmcm9tIGRlY29kaW5nIGFyZSAxOCBkcFxuICBjb25zdCBzZWxsID0gZGVub20uZXEocGFpci5kZW5vbXNbMF0pO1xuICBsZXQgcmV0dXJuZWQgPSBCaWdOdW1iZXIuZnJvbSgwKTtcbiAgY29uc3QgcG9vbHMgPSBbLi4uKHNlbGwgPyBib29rLnF1b3RlIDogYm9vay5iYXNlKV0ucmV2ZXJzZSgpO1xuXG4gIGxldCBvZmZlciA9IGFtb3VudDtcblxuICB3aGlsZSAob2ZmZXIuZ3QoMCkpIHtcbiAgICBjb25zdCBwb29sID0gcG9vbHMucG9wKCk7XG4gICAgaWYgKCFwb29sKSBicmVhaztcblxuICAgIGNvbnN0IHByaWNlID0gcG9vbC5xdW90ZVByaWNlSW50O1xuXG4gICAgY29uc3QgcG9vbFZhbHVlID0gc2VsbFxuICAgICAgPyBwb29sLnRvdGFsT2ZmZXJBbW91bnQubXVsKFdFSSkuZGl2KHByaWNlKVxuICAgICAgOiBwb29sLnRvdGFsT2ZmZXJBbW91bnQubXVsKHByaWNlKS5kaXYoV0VJKTtcblxuICAgIGNvbnN0IGNvbnN1bWVkT2ZmZXIgPSBwb29sVmFsdWUuZ3Qob2ZmZXIpID8gb2ZmZXIgOiBwb29sVmFsdWU7XG5cbiAgICBjb25zdCBjb25zdW1lZEFzayA9IHNlbGxcbiAgICAgID8gY29uc3VtZWRPZmZlci5tdWwocHJpY2UpLmRpdihXRUkpXG4gICAgICA6IGNvbnN1bWVkT2ZmZXIubXVsKFdFSSkuZGl2KHByaWNlKTtcblxuICAgIHJldHVybmVkID0gcmV0dXJuZWQuYWRkKGNvbnN1bWVkQXNrKTtcbiAgICBvZmZlciA9IG9mZmVyLnN1Yihjb25zdW1lZE9mZmVyKTtcbiAgfVxuXG4gIGlmICghb2ZmZXIuaXNaZXJvKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJPdXQgb2Ygb3JkZXJzXCIpO1xuICB9XG5cbiAgY29uc3QgY29tbWlzc2lvbkFtb3VudCA9IG11bERlYyhyZXR1cm5lZCwgMC4wMDE1KTtcbiAgY29uc3QgbmV0UmV0dXJuQW1vdW50ID0gcmV0dXJuZWQuc3ViKGNvbW1pc3Npb25BbW91bnQpO1xuICByZXR1cm4geyByZXR1cm5BbW91bnQ6IG5ldFJldHVybkFtb3VudCwgY29tbWlzc2lvbkFtb3VudCB9O1xufTtcblxuY29uc3Qgc2ltdWxhdGVRdWVyeSA9IChcbiAgcXVlcnk6IEt1amlyYVF1ZXJ5Q2xpZW50LFxuICBhbW91bnQ6IEJpZ051bWJlcixcbiAgZGVub206IERlbm9tLFxuICBwYWlyOiBQYWlyXG4pOiBQcm9taXNlPFBpY2s8U2ltdWxhdGlvbiwgXCJyZXR1cm5BbW91bnRcIiB8IFwiY29tbWlzc2lvbkFtb3VudFwiPj4gPT5cbiAgcXVlcnkud2FzbVxuICAgIC5xdWVyeUNvbnRyYWN0U21hcnQocGFpci5hZGRyZXNzLCB7XG4gICAgICBzaW11bGF0aW9uOiB7XG4gICAgICAgIG9mZmVyX2Fzc2V0OiB7XG4gICAgICAgICAgaW5mbzogeyBuYXRpdmVfdG9rZW46IHsgZGVub206IGRlbm9tLnJlZmVyZW5jZSB9IH0sXG4gICAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbigocmVzOiBTaW11bGF0aW9uUmVzcG9uc2UpID0+ICh7XG4gICAgICByZXR1cm5BbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlcy5yZXR1cm5fYW1vdW50KSxcbiAgICAgIGNvbW1pc3Npb25BbW91bnQ6IEJpZ051bWJlci5mcm9tKHJlcy5jb21taXNzaW9uX2Ftb3VudCksXG4gICAgfSkpO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0UHJpY2UgPSAoXG4gIHByaWNlOiBudW1iZXIsXG4gIGRlbm9tOiBEZW5vbSxcbiAgZGVub21zOiBbRGVub20sIERlbm9tXVxuKTogbnVtYmVyID0+IHtcbiAgY29uc3QgWywgcXVvdGVdID0gZGVub21zO1xuICByZXR1cm4gcHJpY2UgJiYgZGVub20uZXEocXVvdGUpXG4gICAgPyBmYWN0b3IoZGVub21zKSAvIHByaWNlXG4gICAgOiBwcmljZSAqIGZhY3RvcihkZW5vbXMpO1xufTtcbiJdLCJuYW1lcyI6WyJCaWdOdW1iZXIiLCJwYXJzZUZpeGVkIiwibXVsRGVjIiwiRGVub20iLCJmYWN0b3IiLCJmaWx0ZXJNaWdyYXRpb25FcnJvciIsImFnZyIsInBvb2wiLCJwcmV2IiwibGVuZ3RoIiwicXVvdGVQcmljZSIsImNhc3RCb29rIiwiZGVub21zIiwicmVzcG9uc2UiLCJiYXNlIiwibWFwIiwiY2FzdFBvb2wiLCJyZWR1Y2UiLCJxdW90ZSIsImNhc3RDb25maWciLCJvd25lciIsInBhcnNlRGVub20iLCJpc0Jvb3RzdHJhcHBpbmciLCJpc19ib290c3RyYXBwaW5nIiwiZGVjaW1hbERlbHRhIiwiZGVjaW1hbF9kZWx0YSIsInByZWNpc2lvbiIsInByaWNlX3ByZWNpc2lvbiIsImZyb20iLCJuYXRpdmUiLCJjdzIwIiwiY2FzdE9yZGVyIiwiaWR4IiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwicXVvdGVfcHJpY2UiLCJxdW90ZVByaWNlSW50Iiwib3JhY2xlUHJpY2UiLCJvcmFjbGVfcHJpY2UiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJvZmZlckRlbm9tIiwib2ZmZXJfZGVub20iLCJvZmZlckFtb3VudCIsIm9mZmVyX2Ftb3VudCIsImZpbGxlZEFtb3VudCIsImZpbGxlZF9hbW91bnQiLCJvcmlnaW5hbE9mZmVyQW1vdW50Iiwib3JpZ2luYWxfb2ZmZXJfYW1vdW50IiwiY3JlYXRlZEF0IiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJ0b3RhbE9mZmVyQW1vdW50IiwidG90YWxfb2ZmZXJfYW1vdW50IiwiV0VJIiwicG93IiwiREVGQVVMVF9TSU1VTEFUSU9OIiwicmV0dXJuQW1vdW50Iiwic3ByZWFkQW1vdW50IiwiY29tbWlzc2lvbkFtb3VudCIsInJhdGUiLCJzbGlwcGFnZSIsInNpbXVsYXRlIiwicXVlcnkiLCJhbW91bnQiLCJkZW5vbSIsInBhaXIiLCJib29rIiwiaXNaZXJvIiwic2VsbCIsImVxIiwibWlkIiwiYWRkIiwiZGl2Iiwic2ltIiwic2ltdWxhdGVMb2NhbCIsImNhdGNoIiwic2ltdWxhdGVRdWVyeSIsIm9mZmVyIiwibXVsIiwiYmVsaWVmUmV0dXJuQW1vdW50IiwiZGlmZiIsImd0Iiwic3ViIiwicmV0dXJuZWQiLCJwb29scyIsInJldmVyc2UiLCJwb3AiLCJwcmljZSIsInBvb2xWYWx1ZSIsImNvbnN1bWVkT2ZmZXIiLCJjb25zdW1lZEFzayIsIkVycm9yIiwibmV0UmV0dXJuQW1vdW50Iiwid2FzbSIsInF1ZXJ5Q29udHJhY3RTbWFydCIsImFkZHJlc3MiLCJzaW11bGF0aW9uIiwib2ZmZXJfYXNzZXQiLCJpbmZvIiwibmF0aXZlX3Rva2VuIiwicmVmZXJlbmNlIiwidG9TdHJpbmciLCJ0aGVuIiwicmVzIiwicmV0dXJuX2Ftb3VudCIsImNvbW1pc3Npb25fYW1vdW50IiwiZm9ybWF0UHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBUyxFQUFFQyxVQUFVLFFBQVEsMkJBQTJCO0FBQ2pFLFNBQVNDLE1BQU0sUUFBUSxlQUFlO0FBQ3RDLFNBQVNDLEtBQUssRUFBRUMsTUFBTSxRQUFRLFdBQVc7QUFpQnpDLE1BQU1DLHVCQUF1QixDQUFDQyxLQUFhQztJQUN6QyxNQUFNQyxPQUFPRixHQUFHLENBQUNBLElBQUlHLE1BQU0sR0FBRyxFQUFFO0lBQ2hDLE9BQU9ELFFBQVFBLEtBQUtFLFVBQVUsR0FBR0gsS0FBS0csVUFBVSxHQUFHSixNQUFNO1dBQUlBO1FBQUtDO0tBQUs7QUFDekU7QUFFQSxPQUFPLE1BQU1JLFdBQ1gsQ0FBQ0MsU0FDRCxDQUFDQyxXQUFrQyxDQUFBO1lBQ2pDQyxNQUFNRCxTQUFTQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsU0FBU0osU0FBU0ssTUFBTSxDQUFDWixzQkFBc0IsRUFBRTtZQUN6RWEsT0FBT0wsU0FBU0ssS0FBSyxDQUFDSCxHQUFHLENBQUNDLFNBQVNKO1FBQ3JDLENBQUEsRUFBRztBQUVMLE9BQU8sTUFBTU8sYUFBYSxDQUFDTixXQUFzQyxDQUFBO1FBQy9ETyxPQUFPUCxTQUFTTyxLQUFLO1FBQ3JCUixRQUFRO1lBQUNTLFdBQVdSLFNBQVNELE1BQU0sQ0FBQyxFQUFFO1lB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
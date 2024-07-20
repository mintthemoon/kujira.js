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
    bigCompare: function() {
        return bigCompare;
    },
    divToNumber: function() {
        return divToNumber;
    },
    fromHumanString: function() {
        return fromHumanString;
    },
    mulDec: function() {
        return mulDec;
    },
    toHuman: function() {
        return toHuman;
    }
});
const _bignumber = require("@ethersproject/bignumber");
const toHuman = (amount, decimals)=>parseFloat((0, _bignumber.formatFixed)(amount, decimals));
const fromHumanString = (amount, decimals)=>{
    try {
        return (0, _bignumber.parseFixed)(amount, decimals);
    } catch (error) {
        return _bignumber.BigNumber.from(0);
    }
};
const mulDec = (a, x)=>{
    const dec = (0, _bignumber.parseFixed)(x.toFixed(18), 18);
    return a.mul(dec).div(_bignumber.BigNumber.from(10).pow(18));
};
const divToNumber = (a, b)=>{
    return b.isZero() ? 0 : parseFloat((0, _bignumber.formatFixed)(a.mul(_bignumber.BigNumber.from(10).pow(18)).div(b), 18));
};
const bigCompare = (a, b)=>{
    if (a.eq(b)) return 0;
    if (a.lt(b)) return -1;
    return 1;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaWdudW1iZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnTnVtYmVyLCBmb3JtYXRGaXhlZCwgcGFyc2VGaXhlZCB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcblxuZXhwb3J0IGNvbnN0IHRvSHVtYW4gPSAoYW1vdW50OiBCaWdOdW1iZXIsIGRlY2ltYWxzOiBudW1iZXIpID0+XG4gIHBhcnNlRmxvYXQoZm9ybWF0Rml4ZWQoYW1vdW50LCBkZWNpbWFscykpO1xuXG5leHBvcnQgY29uc3QgZnJvbUh1bWFuU3RyaW5nID0gKGFtb3VudDogc3RyaW5nLCBkZWNpbWFsczogbnVtYmVyKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlRml4ZWQoYW1vdW50LCBkZWNpbWFscyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIEJpZ051bWJlci5mcm9tKDApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbXVsRGVjID0gKGE6IEJpZ051bWJlciwgeDogbnVtYmVyKTogQmlnTnVtYmVyID0+IHtcbiAgY29uc3QgZGVjID0gcGFyc2VGaXhlZCh4LnRvRml4ZWQoMTgpLCAxOCk7XG4gIHJldHVybiBhLm11bChkZWMpLmRpdihCaWdOdW1iZXIuZnJvbSgxMCkucG93KDE4KSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGl2VG9OdW1iZXIgPSAoYTogQmlnTnVtYmVyLCBiOiBCaWdOdW1iZXIpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gYi5pc1plcm8oKVxuICAgID8gMFxuICAgIDogcGFyc2VGbG9hdChmb3JtYXRGaXhlZChhLm11bChCaWdOdW1iZXIuZnJvbSgxMCkucG93KDE4KSkuZGl2KGIpLCAxOCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGJpZ0NvbXBhcmUgPSAoYTogQmlnTnVtYmVyLCBiOiBCaWdOdW1iZXIpID0+IHtcbiAgaWYgKGEuZXEoYikpIHJldHVybiAwO1xuICBpZiAoYS5sdChiKSkgcmV0dXJuIC0xO1xuICByZXR1cm4gMTtcbn07XG4iXSwibmFtZXMiOlsiYmlnQ29tcGFyZSIsImRpdlRvTnVtYmVyIiwiZnJvbUh1bWFuU3RyaW5nIiwibXVsRGVjIiwidG9IdW1hbiIsImFtb3VudCIsImRlY2ltYWxzIiwicGFyc2VGbG9hdCIsImZvcm1hdEZpeGVkIiwicGFyc2VGaXhlZCIsImVycm9yIiwiQmlnTnVtYmVyIiwiZnJvbSIsImEiLCJ4IiwiZGVjIiwidG9GaXhlZCIsIm11bCIsImRpdiIsInBvdyIsImIiLCJpc1plcm8iLCJlcSIsImx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXdCYUEsVUFBVTtlQUFWQTs7SUFOQUMsV0FBVztlQUFYQTs7SUFiQUMsZUFBZTtlQUFmQTs7SUFRQUMsTUFBTTtlQUFOQTs7SUFYQUMsT0FBTztlQUFQQTs7OzJCQUZzQztBQUU1QyxNQUFNQSxVQUFVLENBQUNDLFFBQW1CQyxXQUN6Q0MsV0FBV0MsSUFBQUEsc0JBQVcsRUFBQ0gsUUFBUUM7QUFFMUIsTUFBTUosa0JBQWtCLENBQUNHLFFBQWdCQztJQUM5QyxJQUFJO1FBQ0YsT0FBT0csSUFBQUEscUJBQVUsRUFBQ0osUUFBUUM7SUFDNUIsRUFBRSxPQUFPSSxPQUFPO1FBQ2QsT0FBT0Msb0JBQVMsQ0FBQ0MsSUFBSSxDQUFDO0lBQ3hCO0FBQ0Y7QUFFTyxNQUFNVCxTQUFTLENBQUNVLEdBQWNDO0lBQ25DLE1BQU1DLE1BQU1OLElBQUFBLHFCQUFVLEVBQUNLLEVBQUVFLE9BQU8sQ0FBQyxLQUFLO0lBQ3RDLE9BQU9ILEVBQUVJLEdBQUcsQ0FBQ0YsS0FBS0csR0FBRyxDQUFDUCxvQkFBUyxDQUFDQyxJQUFJLENBQUMsSUFBSU8sR0FBRyxDQUFDO0FBQy9DO0FBRU8sTUFBTWxCLGNBQWMsQ0FBQ1ksR0FBY087SUFDeEMsT0FBT0EsRUFBRUMsTUFBTSxLQUNYLElBQ0FkLFdBQVdDLElBQUFBLHNCQUFXLEVBQUNLLEVBQUVJLEdBQUcsQ0FBQ04sb0JBQVMsQ0FBQ0MsSUFBSSxDQUFDLElBQUlPLEdBQUcsQ0FBQyxLQUFLRCxHQUFHLENBQUNFLElBQUk7QUFDdkU7QUFFTyxNQUFNcEIsYUFBYSxDQUFDYSxHQUFjTztJQUN2QyxJQUFJUCxFQUFFUyxFQUFFLENBQUNGLElBQUksT0FBTztJQUNwQixJQUFJUCxFQUFFVSxFQUFFLENBQUNILElBQUksT0FBTyxDQUFDO0lBQ3JCLE9BQU87QUFDVCJ9
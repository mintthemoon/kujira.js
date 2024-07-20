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
    msg: function() {
        return msg;
    },
    registry: function() {
        return registry;
    },
    setupDenomExtension: function() {
        return _queries.setupDenomExtension;
    },
    types: function() {
        return types;
    }
});
const _protosigning = require("@cosmjs/proto-signing");
const _tx = require("./types/tx");
const _queries = require("./queries");
const types = [
    [
        "/kujira.denom.MsgBurn",
        _tx.MsgBurn
    ],
    [
        "/kujira.denom.MsgChangeAdmin",
        _tx.MsgChangeAdmin
    ],
    [
        "/kujira.denom.MsgCreateDenom",
        _tx.MsgCreateDenom
    ],
    [
        "/kujira.denom.MsgMint",
        _tx.MsgMint
    ]
];
const registry = new _protosigning.Registry(types);
const msg = {
    msgBurn: (data)=>({
            typeUrl: "/kujira.denom.MsgBurn",
            value: _tx.MsgBurn.fromPartial(data)
        }),
    msgChangeAdmin: (data)=>({
            typeUrl: "/kujira.denom.MsgChangeAdmin",
            value: _tx.MsgChangeAdmin.fromPartial(data)
        }),
    msgCreateDenom: (data)=>({
            typeUrl: "/kujira.denom.MsgCreateDenom",
            value: _tx.MsgCreateDenom.fromPartial(data)
        }),
    msgMint: (data)=>({
            typeUrl: "/kujira.denom.MsgMint",
            value: _tx.MsgMint.fromPartial(data)
        })
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0cnksIEVuY29kZU9iamVjdCB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCB7IE1zZ0J1cm4sIE1zZ0NoYW5nZUFkbWluLCBNc2dDcmVhdGVEZW5vbSwgTXNnTWludCB9IGZyb20gXCIuL3R5cGVzL3R4XCI7XG5pbXBvcnQgeyBEZW5vbUV4dGVuc2lvbiwgc2V0dXBEZW5vbUV4dGVuc2lvbiB9IGZyb20gXCIuL3F1ZXJpZXNcIjtcblxuY29uc3QgdHlwZXMgPSBbXG4gIFtcIi9rdWppcmEuZGVub20uTXNnQnVyblwiLCBNc2dCdXJuXSxcbiAgW1wiL2t1amlyYS5kZW5vbS5Nc2dDaGFuZ2VBZG1pblwiLCBNc2dDaGFuZ2VBZG1pbl0sXG4gIFtcIi9rdWppcmEuZGVub20uTXNnQ3JlYXRlRGVub21cIiwgTXNnQ3JlYXRlRGVub21dLFxuICBbXCIva3VqaXJhLmRlbm9tLk1zZ01pbnRcIiwgTXNnTWludF0sXG5dO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0cnkgPSBuZXcgUmVnaXN0cnkoPGFueT50eXBlcyk7XG5cbmNvbnN0IG1zZyA9IHtcbiAgbXNnQnVybjogKGRhdGE6IE1zZ0J1cm4pOiBFbmNvZGVPYmplY3QgPT4gKHtcbiAgICB0eXBlVXJsOiBcIi9rdWppcmEuZGVub20uTXNnQnVyblwiLFxuICAgIHZhbHVlOiBNc2dCdXJuLmZyb21QYXJ0aWFsKGRhdGEpLFxuICB9KSxcbiAgbXNnQ2hhbmdlQWRtaW46IChkYXRhOiBNc2dDaGFuZ2VBZG1pbik6IEVuY29kZU9iamVjdCA9PiAoe1xuICAgIHR5cGVVcmw6IFwiL2t1amlyYS5kZW5vbS5Nc2dDaGFuZ2VBZG1pblwiLFxuICAgIHZhbHVlOiBNc2dDaGFuZ2VBZG1pbi5mcm9tUGFydGlhbChkYXRhKSxcbiAgfSksXG4gIG1zZ0NyZWF0ZURlbm9tOiAoZGF0YTogTXNnQ3JlYXRlRGVub20pOiBFbmNvZGVPYmplY3QgPT4gKHtcbiAgICB0eXBlVXJsOiBcIi9rdWppcmEuZGVub20uTXNnQ3JlYXRlRGVub21cIixcbiAgICB2YWx1ZTogTXNnQ3JlYXRlRGVub20uZnJvbVBhcnRpYWwoZGF0YSksXG4gIH0pLFxuICBtc2dNaW50OiAoZGF0YTogTXNnTWludCk6IEVuY29kZU9iamVjdCA9PiAoe1xuICAgIHR5cGVVcmw6IFwiL2t1amlyYS5kZW5vbS5Nc2dNaW50XCIsXG4gICAgdmFsdWU6IE1zZ01pbnQuZnJvbVBhcnRpYWwoZGF0YSksXG4gIH0pLFxufTtcblxuZXhwb3J0IHsgbXNnLCB0eXBlcywgdHlwZSBEZW5vbUV4dGVuc2lvbiwgc2V0dXBEZW5vbUV4dGVuc2lvbiB9O1xuIl0sIm5hbWVzIjpbIm1zZyIsInJlZ2lzdHJ5Iiwic2V0dXBEZW5vbUV4dGVuc2lvbiIsInR5cGVzIiwiTXNnQnVybiIsIk1zZ0NoYW5nZUFkbWluIiwiTXNnQ3JlYXRlRGVub20iLCJNc2dNaW50IiwiUmVnaXN0cnkiLCJtc2dCdXJuIiwiZGF0YSIsInR5cGVVcmwiLCJ2YWx1ZSIsImZyb21QYXJ0aWFsIiwibXNnQ2hhbmdlQWRtaW4iLCJtc2dDcmVhdGVEZW5vbSIsIm1zZ01pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBZ0NTQSxHQUFHO2VBQUhBOztJQXJCSUMsUUFBUTtlQUFSQTs7SUFxQjZCQyxtQkFBbUI7ZUFBbkJBLDRCQUFtQjs7SUFBL0NDLEtBQUs7ZUFBTEE7Ozs4QkFoQ3lCO29CQUMwQjt5QkFDYjtBQUVwRCxNQUFNQSxRQUFRO0lBQ1o7UUFBQztRQUF5QkMsV0FBTztLQUFDO0lBQ2xDO1FBQUM7UUFBZ0NDLGtCQUFjO0tBQUM7SUFDaEQ7UUFBQztRQUFnQ0Msa0JBQWM7S0FBQztJQUNoRDtRQUFDO1FBQXlCQyxXQUFPO0tBQUM7Q0FDbkM7QUFFTSxNQUFNTixXQUFXLElBQUlPLHNCQUFRLENBQU1MO0FBRTFDLE1BQU1ILE1BQU07SUFDVlMsU0FBUyxDQUFDQyxPQUFpQyxDQUFBO1lBQ3pDQyxTQUFTO1lBQ1RDLE9BQU9SLFdBQU8sQ0FBQ1MsV0FBVyxDQUFDSDtRQUM3QixDQUFBO0lBQ0FJLGdCQUFnQixDQUFDSixPQUF3QyxDQUFBO1lBQ3ZEQyxTQUFTO1lBQ1RDLE9BQU9QLGtCQUFjLENBQUNRLFdBQVcsQ0FBQ0g7UUFDcEMsQ0FBQTtJQUNBSyxnQkFBZ0IsQ0FBQ0wsT0FBd0MsQ0FBQTtZQUN2REMsU0FBUztZQUNUQyxPQUFPTixrQkFBYyxDQUFDTyxXQUFXLENBQUNIO1FBQ3BDLENBQUE7SUFDQU0sU0FBUyxDQUFDTixPQUFpQyxDQUFBO1lBQ3pDQyxTQUFTO1lBQ1RDLE9BQU9MLFdBQU8sQ0FBQ00sV0FBVyxDQUFDSDtRQUM3QixDQUFBO0FBQ0YifQ==
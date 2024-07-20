import { Registry } from "@cosmjs/proto-signing";
import { MsgBurn, MsgChangeAdmin, MsgCreateDenom, MsgMint } from "./types/tx";
import { DenomExtension, setupDenomExtension } from "./queries";
const types = [
    [
        "/kujira.denom.MsgBurn",
        MsgBurn
    ],
    [
        "/kujira.denom.MsgChangeAdmin",
        MsgChangeAdmin
    ],
    [
        "/kujira.denom.MsgCreateDenom",
        MsgCreateDenom
    ],
    [
        "/kujira.denom.MsgMint",
        MsgMint
    ]
];
export const registry = new Registry(types);
const msg = {
    msgBurn: (data)=>({
            typeUrl: "/kujira.denom.MsgBurn",
            value: MsgBurn.fromPartial(data)
        }),
    msgChangeAdmin: (data)=>({
            typeUrl: "/kujira.denom.MsgChangeAdmin",
            value: MsgChangeAdmin.fromPartial(data)
        }),
    msgCreateDenom: (data)=>({
            typeUrl: "/kujira.denom.MsgCreateDenom",
            value: MsgCreateDenom.fromPartial(data)
        }),
    msgMint: (data)=>({
            typeUrl: "/kujira.denom.MsgMint",
            value: MsgMint.fromPartial(data)
        })
};
export { msg, types, DenomExtension, setupDenomExtension };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9rdWppcmEvZGVub20vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0cnksIEVuY29kZU9iamVjdCB9IGZyb20gXCJAY29zbWpzL3Byb3RvLXNpZ25pbmdcIjtcbmltcG9ydCB7IE1zZ0J1cm4sIE1zZ0NoYW5nZUFkbWluLCBNc2dDcmVhdGVEZW5vbSwgTXNnTWludCB9IGZyb20gXCIuL3R5cGVzL3R4XCI7XG5pbXBvcnQgeyBEZW5vbUV4dGVuc2lvbiwgc2V0dXBEZW5vbUV4dGVuc2lvbiB9IGZyb20gXCIuL3F1ZXJpZXNcIjtcblxuY29uc3QgdHlwZXMgPSBbXG4gIFtcIi9rdWppcmEuZGVub20uTXNnQnVyblwiLCBNc2dCdXJuXSxcbiAgW1wiL2t1amlyYS5kZW5vbS5Nc2dDaGFuZ2VBZG1pblwiLCBNc2dDaGFuZ2VBZG1pbl0sXG4gIFtcIi9rdWppcmEuZGVub20uTXNnQ3JlYXRlRGVub21cIiwgTXNnQ3JlYXRlRGVub21dLFxuICBbXCIva3VqaXJhLmRlbm9tLk1zZ01pbnRcIiwgTXNnTWludF0sXG5dO1xuXG5leHBvcnQgY29uc3QgcmVnaXN0cnkgPSBuZXcgUmVnaXN0cnkoPGFueT50eXBlcyk7XG5cbmNvbnN0IG1zZyA9IHtcbiAgbXNnQnVybjogKGRhdGE6IE1zZ0J1cm4pOiBFbmNvZGVPYmplY3QgPT4gKHtcbiAgICB0eXBlVXJsOiBcIi9rdWppcmEuZGVub20uTXNnQnVyblwiLFxuICAgIHZhbHVlOiBNc2dCdXJuLmZyb21QYXJ0aWFsKGRhdGEpLFxuICB9KSxcbiAgbXNnQ2hhbmdlQWRtaW46IChkYXRhOiBNc2dDaGFuZ2VBZG1pbik6IEVuY29kZU9iamVjdCA9PiAoe1xuICAgIHR5cGVVcmw6IFwiL2t1amlyYS5kZW5vbS5Nc2dDaGFuZ2VBZG1pblwiLFxuICAgIHZhbHVlOiBNc2dDaGFuZ2VBZG1pbi5mcm9tUGFydGlhbChkYXRhKSxcbiAgfSksXG4gIG1zZ0NyZWF0ZURlbm9tOiAoZGF0YTogTXNnQ3JlYXRlRGVub20pOiBFbmNvZGVPYmplY3QgPT4gKHtcbiAgICB0eXBlVXJsOiBcIi9rdWppcmEuZGVub20uTXNnQ3JlYXRlRGVub21cIixcbiAgICB2YWx1ZTogTXNnQ3JlYXRlRGVub20uZnJvbVBhcnRpYWwoZGF0YSksXG4gIH0pLFxuICBtc2dNaW50OiAoZGF0YTogTXNnTWludCk6IEVuY29kZU9iamVjdCA9PiAoe1xuICAgIHR5cGVVcmw6IFwiL2t1amlyYS5kZW5vbS5Nc2dNaW50XCIsXG4gICAgdmFsdWU6IE1zZ01pbnQuZnJvbVBhcnRpYWwoZGF0YSksXG4gIH0pLFxufTtcblxuZXhwb3J0IHsgbXNnLCB0eXBlcywgRGVub21FeHRlbnNpb24sIHNldHVwRGVub21FeHRlbnNpb24gfTtcbiJdLCJuYW1lcyI6WyJSZWdpc3RyeSIsIk1zZ0J1cm4iLCJNc2dDaGFuZ2VBZG1pbiIsIk1zZ0NyZWF0ZURlbm9tIiwiTXNnTWludCIsIkRlbm9tRXh0ZW5zaW9uIiwic2V0dXBEZW5vbUV4dGVuc2lvbiIsInR5cGVzIiwicmVnaXN0cnkiLCJtc2ciLCJtc2dCdXJuIiwiZGF0YSIsInR5cGVVcmwiLCJ2YWx1ZSIsImZyb21QYXJ0aWFsIiwibXNnQ2hhbmdlQWRtaW4iLCJtc2dDcmVhdGVEZW5vbSIsIm1zZ01pbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFFBQVEsUUFBc0Isd0JBQXdCO0FBQy9ELFNBQVNDLE9BQU8sRUFBRUMsY0FBYyxFQUFFQyxjQUFjLEVBQUVDLE9BQU8sUUFBUSxhQUFhO0FBQzlFLFNBQVNDLGNBQWMsRUFBRUMsbUJBQW1CLFFBQVEsWUFBWTtBQUVoRSxNQUFNQyxRQUFRO0lBQ1o7UUFBQztRQUF5Qk47S0FBUTtJQUNsQztRQUFDO1FBQWdDQztLQUFlO0lBQ2hEO1FBQUM7UUFBZ0NDO0tBQWU7SUFDaEQ7UUFBQztRQUF5QkM7S0FBUTtDQUNuQztBQUVELE9BQU8sTUFBTUksV0FBVyxJQUFJUixTQUFjTyxPQUFPO0FBRWpELE1BQU1FLE1BQU07SUFDVkMsU0FBUyxDQUFDQyxPQUFpQyxDQUFBO1lBQ3pDQyxTQUFTO1lBQ1RDLE9BQU9aLFFBQVFhLFdBQVcsQ0FBQ0g7UUFDN0IsQ0FBQTtJQUNBSSxnQkFBZ0IsQ0FBQ0osT0FBd0MsQ0FBQTtZQUN2REMsU0FBUztZQUNUQyxPQUFPWCxlQUFlWSxXQUFXLENBQUNIO1FBQ3BDLENBQUE7SUFDQUssZ0JBQWdCLENBQUNMLE9BQXdDLENBQUE7WUFDdkRDLFNBQVM7WUFDVEMsT0FBT1YsZUFBZVcsV0FBVyxDQUFDSDtRQUNwQyxDQUFBO0lBQ0FNLFNBQVMsQ0FBQ04sT0FBaUMsQ0FBQTtZQUN6Q0MsU0FBUztZQUNUQyxPQUFPVCxRQUFRVSxXQUFXLENBQUNIO1FBQzdCLENBQUE7QUFDRjtBQUVBLFNBQVNGLEdBQUcsRUFBRUYsS0FBSyxFQUFFRixjQUFjLEVBQUVDLG1CQUFtQixHQUFHIn0=
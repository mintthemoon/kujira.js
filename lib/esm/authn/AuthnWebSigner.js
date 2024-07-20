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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
import { makeSignBytes } from "@cosmjs/proto-signing";
import { v4 } from "uuid";
import { decodeAttestationObject, toCredential } from "./Authn";
export class AuthnWebSigner {
    static create(rp, name, opts) {
        return _async_to_generator(function*() {
            const challenge = new Uint8Array(32);
            self.crypto.getRandomValues(challenge);
            const id = v4();
            const credentialCreationOptions = {
                publicKey: _object_spread({
                    rp,
                    user: {
                        id: new Uint8Array(Buffer.from(id)),
                        name: name,
                        displayName: name
                    },
                    pubKeyCredParams: [
                        {
                            alg: -7,
                            type: "public-key"
                        }
                    ],
                    challenge,
                    timeout: 60000,
                    excludeCredentials: [],
                    authenticatorSelection: {
                        authenticatorAttachment: "platform",
                        requireResidentKey: false,
                        userVerification: "preferred"
                    },
                    attestation: "direct"
                }, opts)
            };
            const credential = yield navigator.credentials.create(credentialCreationOptions);
            const createCredential = assertPublicKeyCredential(credential);
            const attestationResponse = assertAttestationResponse(createCredential.response);
            const decoded = decodeAttestationObject(new Uint8Array(attestationResponse.attestationObject));
            return new AuthnWebSigner(toCredential(createCredential.rawId, decoded.authData.attestedCredentialData.credentialPublicKey), name);
        })();
    }
    id() {
        return this.credential.id;
    }
    signAuthn(signerAddress, signDoc) {
        var _this = this;
        return _async_to_generator(function*() {
            const signBytes = makeSignBytes(signDoc);
            const credentialRequestOptions = {
                publicKey: {
                    allowCredentials: [
                        {
                            id: Buffer.from(_this.credential.id, "hex"),
                            type: "public-key",
                            transports: [
                                "internal"
                            ]
                        }
                    ],
                    challenge: signBytes,
                    timeout: 60000
                }
            };
            const credential = yield navigator.credentials.get(credentialRequestOptions);
            const getCredential = assertPublicKeyCredential(credential);
            const response = assertAssertionResponse(getCredential.response);
            const signature = {
                authenticatorData: Buffer.from(response.authenticatorData).toString("hex"),
                clientDataJSON: Buffer.from(response.clientDataJSON).toString("hex"),
                signature: Buffer.from(response.signature).toString("hex")
            };
            return {
                signed: signDoc,
                signature: Buffer.from(JSON.stringify(signature)).toString("base64")
            };
        })();
    }
    getAccounts() {
        var _this = this;
        return _async_to_generator(function*() {
            return [
                {
                    address: _this.credential.address,
                    algo: "secp256r1",
                    pubkey: Buffer.from(_this.credential.pubkey, "hex")
                }
            ];
        })();
    }
    constructor(credential, name){
        _define_property(this, "credential", void 0);
        _define_property(this, "name", void 0);
        this.credential = credential;
        this.name = name;
    }
}
const assertPublicKeyCredential = (credential)=>{
    if (!credential) throw new Error(`No Credential`);
    if (credential && "rawId" in credential) return credential;
    throw new Error(`Invalid Create Credential`);
};
const assertAttestationResponse = (response)=>{
    if (response && "attestationObject" in response) return response;
    throw new Error(`Invalid Attestaion Response`);
};
const assertAssertionResponse = (response)=>{
    if (response && "authenticatorData" in response) return response;
    throw new Error(`Invalid Attestaion Response`);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRobi9BdXRobldlYlNpZ25lci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU2lnbkJ5dGVzIH0gZnJvbSBcIkBjb3NtanMvcHJvdG8tc2lnbmluZ1wiO1xuaW1wb3J0IHsgU2lnbkRvYyB9IGZyb20gXCJjb3NtanMtdHlwZXMvY29zbW9zL3R4L3YxYmV0YTEvdHhcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7XG4gIEFjY291bnREYXRhLFxuICBBdXRobkNyZWRlbnRpYWwsXG4gIEF1dGhuU2lnblJlc3BvbnNlLFxuICBDQk9SU2lnbmF0dXJlLFxuICBkZWNvZGVBdHRlc3RhdGlvbk9iamVjdCxcbiAgdG9DcmVkZW50aWFsLFxufSBmcm9tIFwiLi9BdXRoblwiO1xuaW1wb3J0IHsgQXV0aG5TaWduZXIgfSBmcm9tIFwiLi9BdXRoblNpZ25lclwiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG5XZWJTaWduZXIgaW1wbGVtZW50cyBBdXRoblNpZ25lciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjcmVkZW50aWFsOiBBdXRobkNyZWRlbnRpYWwsXG4gICAgcHVibGljIG5hbWU6IHN0cmluZ1xuICApIHt9XG5cbiAgc3RhdGljIGFzeW5jIGNyZWF0ZShcbiAgICBycDogUHVibGljS2V5Q3JlZGVudGlhbFJwRW50aXR5LFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBvcHRzPzogUHVibGljS2V5Q3JlZGVudGlhbENyZWF0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPEF1dGhuV2ViU2lnbmVyPiB7XG4gICAgY29uc3QgY2hhbGxlbmdlID0gbmV3IFVpbnQ4QXJyYXkoMzIpO1xuICAgIHNlbGYuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhjaGFsbGVuZ2UpO1xuICAgIGNvbnN0IGlkID0gdjQoKTtcbiAgICBjb25zdCBjcmVkZW50aWFsQ3JlYXRpb25PcHRpb25zOiBDcmVkZW50aWFsQ3JlYXRpb25PcHRpb25zID0ge1xuICAgICAgcHVibGljS2V5OiB7XG4gICAgICAgIHJwLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgaWQ6IG5ldyBVaW50OEFycmF5KEJ1ZmZlci5mcm9tKGlkKSksXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBkaXNwbGF5TmFtZTogbmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHViS2V5Q3JlZFBhcmFtczogW3sgYWxnOiAtNywgdHlwZTogXCJwdWJsaWMta2V5XCIgfV0sXG4gICAgICAgIGNoYWxsZW5nZSxcbiAgICAgICAgdGltZW91dDogNjAwMDAsXG4gICAgICAgIGV4Y2x1ZGVDcmVkZW50aWFsczogW10sXG4gICAgICAgIGF1dGhlbnRpY2F0b3JTZWxlY3Rpb246IHtcbiAgICAgICAgICBhdXRoZW50aWNhdG9yQXR0YWNobWVudDogXCJwbGF0Zm9ybVwiLFxuICAgICAgICAgIHJlcXVpcmVSZXNpZGVudEtleTogZmFsc2UsXG4gICAgICAgICAgdXNlclZlcmlmaWNhdGlvbjogXCJwcmVmZXJyZWRcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXR0ZXN0YXRpb246IFwiZGlyZWN0XCIsXG4gICAgICAgIC4uLm9wdHMsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdCBjcmVkZW50aWFsID0gYXdhaXQgbmF2aWdhdG9yLmNyZWRlbnRpYWxzLmNyZWF0ZShcbiAgICAgIGNyZWRlbnRpYWxDcmVhdGlvbk9wdGlvbnNcbiAgICApO1xuXG4gICAgY29uc3QgY3JlYXRlQ3JlZGVudGlhbCA9IGFzc2VydFB1YmxpY0tleUNyZWRlbnRpYWwoY3JlZGVudGlhbCk7XG4gICAgY29uc3QgYXR0ZXN0YXRpb25SZXNwb25zZSA9IGFzc2VydEF0dGVzdGF0aW9uUmVzcG9uc2UoXG4gICAgICBjcmVhdGVDcmVkZW50aWFsLnJlc3BvbnNlXG4gICAgKTtcblxuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVBdHRlc3RhdGlvbk9iamVjdChcbiAgICAgIG5ldyBVaW50OEFycmF5KGF0dGVzdGF0aW9uUmVzcG9uc2UuYXR0ZXN0YXRpb25PYmplY3QpXG4gICAgKTtcblxuICAgIHJldHVybiBuZXcgQXV0aG5XZWJTaWduZXIoXG4gICAgICB0b0NyZWRlbnRpYWwoXG4gICAgICAgIGNyZWF0ZUNyZWRlbnRpYWwucmF3SWQsXG4gICAgICAgIGRlY29kZWQuYXV0aERhdGEuYXR0ZXN0ZWRDcmVkZW50aWFsRGF0YS5jcmVkZW50aWFsUHVibGljS2V5XG4gICAgICApLFxuICAgICAgbmFtZVxuICAgICk7XG4gIH1cblxuICBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNyZWRlbnRpYWwuaWQ7XG4gIH1cblxuICBhc3luYyBzaWduQXV0aG4oXG4gICAgc2lnbmVyQWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25Eb2M6IFNpZ25Eb2NcbiAgKTogUHJvbWlzZTxBdXRoblNpZ25SZXNwb25zZT4ge1xuICAgIGNvbnN0IHNpZ25CeXRlcyA9IG1ha2VTaWduQnl0ZXMoc2lnbkRvYyk7XG5cbiAgICBjb25zdCBjcmVkZW50aWFsUmVxdWVzdE9wdGlvbnM6IENyZWRlbnRpYWxSZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIHB1YmxpY0tleToge1xuICAgICAgICBhbGxvd0NyZWRlbnRpYWxzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IEJ1ZmZlci5mcm9tKHRoaXMuY3JlZGVudGlhbC5pZCwgXCJoZXhcIiksXG4gICAgICAgICAgICB0eXBlOiBcInB1YmxpYy1rZXlcIixcbiAgICAgICAgICAgIHRyYW5zcG9ydHM6IFtcImludGVybmFsXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNoYWxsZW5nZTogc2lnbkJ5dGVzLFxuICAgICAgICB0aW1lb3V0OiA2MDAwMCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBjcmVkZW50aWFsID0gYXdhaXQgbmF2aWdhdG9yLmNyZWRlbnRpYWxzLmdldChcbiAgICAgIGNyZWRlbnRpYWxSZXF1ZXN0T3B0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZ2V0Q3JlZGVudGlhbCA9IGFzc2VydFB1YmxpY0tleUNyZWRlbnRpYWwoY3JlZGVudGlhbCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhc3NlcnRBc3NlcnRpb25SZXNwb25zZShnZXRDcmVkZW50aWFsLnJlc3BvbnNlKTtcbiAgICBjb25zdCBzaWduYXR1cmU6IENCT1JTaWduYXR1cmUgPSB7XG4gICAgICBhdXRoZW50aWNhdG9yRGF0YTogQnVmZmVyLmZyb20oXG4gICAgICAgIHJlc3BvbnNlLmF1dGhlbnRpY2F0b3JEYXRhXG4gICAgICApLnRvU3RyaW5nKFwiaGV4XCIpLFxuICAgICAgY2xpZW50RGF0YUpTT046IEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmNsaWVudERhdGFKU09OKS50b1N0cmluZyhcbiAgICAgICAgXCJoZXhcIlxuICAgICAgKSxcbiAgICAgIHNpZ25hdHVyZTogQnVmZmVyLmZyb20ocmVzcG9uc2Uuc2lnbmF0dXJlKS50b1N0cmluZyhcImhleFwiKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNpZ25lZDogc2lnbkRvYyxcbiAgICAgIHNpZ25hdHVyZTogQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoc2lnbmF0dXJlKSkudG9TdHJpbmcoXG4gICAgICAgIFwiYmFzZTY0XCJcbiAgICAgICksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGdldEFjY291bnRzKCk6IFByb21pc2U8cmVhZG9ubHkgQWNjb3VudERhdGFbXT4ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGFkZHJlc3M6IHRoaXMuY3JlZGVudGlhbC5hZGRyZXNzLFxuICAgICAgICBhbGdvOiBcInNlY3AyNTZyMVwiLFxuICAgICAgICBwdWJrZXk6IEJ1ZmZlci5mcm9tKHRoaXMuY3JlZGVudGlhbC5wdWJrZXksIFwiaGV4XCIpLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG59XG5cbmNvbnN0IGFzc2VydFB1YmxpY0tleUNyZWRlbnRpYWwgPSAoXG4gIGNyZWRlbnRpYWw6IENyZWRlbnRpYWwgfCBQdWJsaWNLZXlDcmVkZW50aWFsIHwgbnVsbFxuKTogUHVibGljS2V5Q3JlZGVudGlhbCA9PiB7XG4gIGlmICghY3JlZGVudGlhbCkgdGhyb3cgbmV3IEVycm9yKGBObyBDcmVkZW50aWFsYCk7XG4gIGlmIChjcmVkZW50aWFsICYmIFwicmF3SWRcIiBpbiBjcmVkZW50aWFsKSByZXR1cm4gY3JlZGVudGlhbDtcbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIENyZWF0ZSBDcmVkZW50aWFsYCk7XG59O1xuXG5jb25zdCBhc3NlcnRBdHRlc3RhdGlvblJlc3BvbnNlID0gKFxuICByZXNwb25zZTogQXV0aGVudGljYXRvclJlc3BvbnNlIHwgQXV0aGVudGljYXRvckF0dGVzdGF0aW9uUmVzcG9uc2Vcbik6IEF1dGhlbnRpY2F0b3JBdHRlc3RhdGlvblJlc3BvbnNlID0+IHtcbiAgaWYgKHJlc3BvbnNlICYmIFwiYXR0ZXN0YXRpb25PYmplY3RcIiBpbiByZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xuICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgQXR0ZXN0YWlvbiBSZXNwb25zZWApO1xufTtcblxuY29uc3QgYXNzZXJ0QXNzZXJ0aW9uUmVzcG9uc2UgPSAoXG4gIHJlc3BvbnNlOiBBdXRoZW50aWNhdG9yUmVzcG9uc2UgfCBBdXRoZW50aWNhdG9yQXNzZXJ0aW9uUmVzcG9uc2Vcbik6IEF1dGhlbnRpY2F0b3JBc3NlcnRpb25SZXNwb25zZSA9PiB7XG4gIGlmIChyZXNwb25zZSAmJiBcImF1dGhlbnRpY2F0b3JEYXRhXCIgaW4gcmVzcG9uc2UpIHJldHVybiByZXNwb25zZTtcbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIEF0dGVzdGFpb24gUmVzcG9uc2VgKTtcbn07XG4iXSwibmFtZXMiOlsibWFrZVNpZ25CeXRlcyIsInY0IiwiZGVjb2RlQXR0ZXN0YXRpb25PYmplY3QiLCJ0b0NyZWRlbnRpYWwiLCJBdXRobldlYlNpZ25lciIsImNyZWF0ZSIsInJwIiwibmFtZSIsIm9wdHMiLCJjaGFsbGVuZ2UiLCJVaW50OEFycmF5Iiwic2VsZiIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsImlkIiwiY3JlZGVudGlhbENyZWF0aW9uT3B0aW9ucyIsInB1YmxpY0tleSIsInVzZXIiLCJCdWZmZXIiLCJmcm9tIiwiZGlzcGxheU5hbWUiLCJwdWJLZXlDcmVkUGFyYW1zIiwiYWxnIiwidHlwZSIsInRpbWVvdXQiLCJleGNsdWRlQ3JlZGVudGlhbHMiLCJhdXRoZW50aWNhdG9yU2VsZWN0aW9uIiwiYXV0aGVudGljYXRvckF0dGFjaG1lbnQiLCJyZXF1aXJlUmVzaWRlbnRLZXkiLCJ1c2VyVmVyaWZpY2F0aW9uIiwiYXR0ZXN0YXRpb24iLCJjcmVkZW50aWFsIiwibmF2aWdhdG9yIiwiY3JlZGVudGlhbHMiLCJjcmVhdGVDcmVkZW50aWFsIiwiYXNzZXJ0UHVibGljS2V5Q3JlZGVudGlhbCIsImF0dGVzdGF0aW9uUmVzcG9uc2UiLCJhc3NlcnRBdHRlc3RhdGlvblJlc3BvbnNlIiwicmVzcG9uc2UiLCJkZWNvZGVkIiwiYXR0ZXN0YXRpb25PYmplY3QiLCJyYXdJZCIsImF1dGhEYXRhIiwiYXR0ZXN0ZWRDcmVkZW50aWFsRGF0YSIsImNyZWRlbnRpYWxQdWJsaWNLZXkiLCJzaWduQXV0aG4iLCJzaWduZXJBZGRyZXNzIiwic2lnbkRvYyIsInNpZ25CeXRlcyIsImNyZWRlbnRpYWxSZXF1ZXN0T3B0aW9ucyIsImFsbG93Q3JlZGVudGlhbHMiLCJ0cmFuc3BvcnRzIiwiZ2V0IiwiZ2V0Q3JlZGVudGlhbCIsImFzc2VydEFzc2VydGlvblJlc3BvbnNlIiwic2lnbmF0dXJlIiwiYXV0aGVudGljYXRvckRhdGEiLCJ0b1N0cmluZyIsImNsaWVudERhdGFKU09OIiwic2lnbmVkIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEFjY291bnRzIiwiYWRkcmVzcyIsImFsZ28iLCJwdWJrZXkiLCJjb25zdHJ1Y3RvciIsIkVycm9y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
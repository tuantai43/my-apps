import { ErrorCode } from "./error-code";

class Type {
    constructor(public status: number, public keys: string[]) {
    }
}
export abstract class ErrorType {
    public static List = [
        new Type(400, [
            ErrorCode.UserInvalid.key,
            ErrorCode.MissingEmail.key,
            ErrorCode.MissingPassword.key,
            ErrorCode.MissingBody.key,
        ]),
        new Type(401, [
            ErrorCode.MissingAuthorization.key,
            ErrorCode.AuthorizationInvalid.key
        ]),
        new Type(403, [
            ErrorCode.AuthorizationBearerInvalid.key,
            ErrorCode.ActionDenied.key,
        ]),
        new Type(404, [ErrorCode.NotFound.key, ErrorCode.UserNotFound.key]),
        new Type(500, [ErrorCode.Unknown.key])
    ]
}
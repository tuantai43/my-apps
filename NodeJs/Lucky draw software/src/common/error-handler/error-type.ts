import { ErrorCode } from './error-code';
import { ErrorCodeModel } from './error-code.model';

class Type {
  constructor(public status: number, public keys: string[]) {}
}

const mapKeyError = (errorList: ErrorCodeModel[]) => {
  return errorList.map((item) => item.key);
};

export abstract class ErrorType {
  public static List = [
    new Type(
      400,
      mapKeyError([
        ErrorCode.UserInvalid,
        ErrorCode.MissingEmail,
        ErrorCode.MissingPassword,
        ErrorCode.MissingBody,
        ErrorCode.UserNotFound,
        ErrorCode.EmailUsed,
        ErrorCode.MissingRefreshToken,
        ErrorCode.RefreshTokenInvalid,
      ])
    ),
    new Type(401, mapKeyError([ErrorCode.MissingAuthorization, ErrorCode.AuthorizationInvalid, ErrorCode.LoginFail])),
    new Type(
      403,
      mapKeyError([ErrorCode.AuthorizationBearerInvalid, ErrorCode.AuthorizationExpired, ErrorCode.ActionDenied])
    ),
    new Type(404, mapKeyError([ErrorCode.NotFound])),
    new Type(500, mapKeyError([ErrorCode.Unknown])),
  ];
}

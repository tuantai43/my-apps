import { ErrorCodeModel } from './error-code.model';

export abstract class ErrorCode {
  static readonly NotFound = new ErrorCodeModel('E699', 'Api not found');
  static readonly Unknown = new ErrorCodeModel('4D2E', 'Server error');
  static readonly UserNotFound = new ErrorCodeModel('94BF', "User isn't found");
  static readonly UserInvalid = new ErrorCodeModel('0136', 'User is invalid!');
  static readonly MissingEmail = new ErrorCodeModel('4A7B', 'Missing email field');
  static readonly MissingBody = new ErrorCodeModel('A071', 'Missing body');
  static readonly MissingPassword = new ErrorCodeModel('7FD0', 'Missing password field');
  static readonly MissingAuthorization = new ErrorCodeModel('4AA8', 'Missing authorization');
  static readonly AuthorizationBearerInvalid = new ErrorCodeModel('8623', 'Bearer is invalid');
  static readonly AuthorizationInvalid = new ErrorCodeModel('447F', 'Access token is invalid');
  static readonly AuthorizationExpired = new ErrorCodeModel('HASL', 'Access token expired');
  static readonly ActionDenied = new ErrorCodeModel('BDF0', 'Access denied');
  static readonly EmailUsed = new ErrorCodeModel('16DA', 'Email is used');
  static readonly LoginFail = new ErrorCodeModel('42AD', 'Login failed');
  static readonly MissingRefreshToken = new ErrorCodeModel('AS8S', 'Missing access refresh token');
  static readonly RefreshTokenInvalid = new ErrorCodeModel('AO0A', 'Access refresh token is invalid');
}

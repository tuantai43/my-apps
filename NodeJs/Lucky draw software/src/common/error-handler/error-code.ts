class ErrorCodeModel {
    constructor(public key: string, public content: string) {
    }
}

export abstract class ErrorCode {
    static readonly NotFound = new ErrorCodeModel('E_404', 'Api not found');
    static readonly Unknown = new ErrorCodeModel('E_10', 'UnknownError');
    static readonly UserNotFound = new ErrorCodeModel('U_404', 'User isn\'t found');
    static readonly UserInvalid = new ErrorCodeModel('U_400', 'User is invalid!');
    static readonly MissingEmail = new ErrorCodeModel('M_01', 'Missing email field');
    static readonly MissingBody = new ErrorCodeModel('M_02', 'Missing body');
    static readonly MissingPassword = new ErrorCodeModel('M_03', 'Missing password field');
}
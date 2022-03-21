class ErrorCodeModel {
    constructor(public key: string, public content: string) {
    }
}

export abstract class ErrorCode {
    static readonly NotFound = new ErrorCodeModel('E_404', 'Api not found');
    static readonly UserNotFound = new ErrorCodeModel('U_404', 'User not found');
    static readonly Unknown = new ErrorCodeModel('E_10', 'UnknownError');
}
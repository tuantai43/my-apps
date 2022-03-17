import { ErrorCode } from "./error-code";

class Type {
    constructor(public status: number, public keys: string[]) {
    }
}
export abstract class ErrorType {
    public static List = [
        new Type(404, [ErrorCode.NotFound.key]),
        new Type(500, [ErrorCode.Unknown.key])
    ]
}
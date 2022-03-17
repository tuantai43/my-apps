import { ErrorCode } from "./error-code";
import { ErrorType } from "./error-type";

export class ErrorException extends Error {
    public status: number;
    constructor(error = ErrorCode.Unknown, public metaData?: any) {
        super(error.key);
        this.name = error.key;
        this.message = error.content;
        const type = ErrorType.List.find(i => i.keys.find(k => k === error.key));
        if (type) {
            this.status = type.status;
        } else {
            this.status = 500;
        }
    }
}
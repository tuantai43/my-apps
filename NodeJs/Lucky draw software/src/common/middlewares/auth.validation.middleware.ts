import { ErrorException } from './../error-handler/error-exception';
import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';
import { ErrorCode } from '../error-handler/error-code';

export abstract class AuthValidationMiddleware {
    static validJWTNeeded(req: Request, res: Response, next: NextFunction) {
        console.log('validJWTNeeded');
        if (req.headers['authorization']) {
            try {
                const authorization = req.headers['authorization'].split(' ');
                console.log('validJWTNeeded', authorization[0]);
                if (authorization[0] !== 'Bearer') {
                    next(new ErrorException(ErrorCode.AuthorizationBearerInvalid));
                } else {
                    req.body.jwt = Jwt.verify(authorization[1], process.env.JWT_SECRET || '');
                    return next();
                }
            } catch (err) {
                console.log('validJWTNeeded', 'Authorization is invalid');
                next(new ErrorException(ErrorCode.AuthorizationInvalid));
            }
        } else {
            console.log('validJWTNeeded', 'Missing authorization in header');
            next(new ErrorException(ErrorCode.MissingAuthorization));
        }
    }
}
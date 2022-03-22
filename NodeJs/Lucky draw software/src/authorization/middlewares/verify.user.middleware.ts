import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../../users/models/users.model';
import { ErrorCode } from '../../common/error-handler/error-code';
import { ErrorException } from '../../common/error-handler/error-exception';
import crypto from 'crypto';

export abstract class VerifyUserMiddleware {
    static hasAuthValidFields(req: Request, res: Response, next: NextFunction) {
        console.log('hasAuthValidFields');
        if (req.body) {
            if (!req.body.email) {
                console.log('VerifyUserMiddleware', 'email');
                next(new ErrorException(ErrorCode.MissingEmail));
            } else if (!req.body.password) {
                console.log('VerifyUserMiddleware', 'password');
                next(new ErrorException(ErrorCode.MissingPassword));
            } else {
                console.log('hasAuthValidFields', 'passed');
                next();
            }
        } else {
            console.log('VerifyUserMiddleware', 'missing body');
            next(new ErrorException(ErrorCode.MissingEmail));
        }
    }

    static isPasswordAndUserMatch(req: Request, res: Response, next: NextFunction) {
        console.log('isPasswordAndUserMatch');
        UserModel.findByEmail(req.body.email)
            .then((user) => {
                if (user) {
                    let passwordFields = user.password.split('$');
                    let salt = passwordFields[0];
                    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
                    if (hash === passwordFields[1]) {
                        req.body = {
                            userId: user._id,
                            email: user.email,
                            permissionLevel: user.permissionLevel,
                            provider: 'email',
                            name: user.firstName + ' ' + user.lastName,
                        };
                        console.log('isPasswordAndUserMatch', 'passed');
                        return next();
                    } else {
                        console.log('isPasswordAndUserMatch', 'invalid email or password');
                        next(new ErrorException(ErrorCode.UserInvalid));
                    }
                } else {
                    console.log('isPasswordAndUserMatch', 'not find user');
                    next(new ErrorException(ErrorCode.UserNotFound));
                }
            })
    }
}
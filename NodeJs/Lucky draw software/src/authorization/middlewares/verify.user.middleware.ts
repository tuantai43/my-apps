import { Request, Response, NextFunction } from 'express';
import { ErrorCode } from '../../common/error-handler/error-code';
import { ErrorException } from '../../common/error-handler/error-exception';
import crypto from 'crypto';
import { UserDb } from '../../database/user.db';

export abstract class VerifyUserMiddleware {
  static hasAuthValidFields(req: Request, res: Response, next: NextFunction) {
    console.log('VerifyUserMiddleware', 'hasAuthValidFields');
    if (req.body) {
      if (!req.body.email) {
        console.log('hasAuthValidFields', 'email');
        next(new ErrorException(ErrorCode.MissingEmail));
      } else if (!req.body.password) {
        console.log('hasAuthValidFields', 'password');
        next(new ErrorException(ErrorCode.MissingPassword));
      } else {
        console.log('hasAuthValidFields', 'success');
        next();
      }
    } else {
      console.log('hasAuthValidFields', 'missing body');
      next(new ErrorException(ErrorCode.MissingEmail));
    }
  }

  static hasAccessRefreshToken(req: Request, res: Response, next: NextFunction) {
    console.log('VerifyUserMiddleware', 'hasAccessRefreshToken');
    if (!req.body || !req.body.accessRefreshToken) {
      console.log('hasAccessRefreshToken', 'missing access refresh token');
      next(new ErrorException(ErrorCode.MissingRefreshToken));
    } else {
      console.log('hasAuthValidFields', 'success');
      next();
    }
  }

  static isPasswordAndUserMatch(req: Request, res: Response, next: NextFunction) {
    console.log('VerifyUserMiddleware', 'isPasswordAndUserMatch');
    try {
      UserDb.findByEmail(req.body.email).then((user) => {
        if (user) {
          let passwordFields = user.password.split('$');
          let salt = passwordFields[0];
          let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64');
          if (hash === passwordFields[1]) {
            console.log(user);
            req.body = {
              userId: user._id,
              email: user.email,
              permissionLevel: user.permissionLevel,
              firstName: user.firstName,
              lastName: user.lastName,
            };
            console.log('isPasswordAndUserMatch', 'success');
            return next();
          } else {
            console.log('isPasswordAndUserMatch', 'invalid email or password');
            next(new ErrorException(ErrorCode.UserInvalid));
          }
        } else {
          console.log('isPasswordAndUserMatch', 'not find user');
          next(new ErrorException(ErrorCode.UserNotFound));
        }
      });
    } catch (err) {
      next(err);
    }
  }

  static isAccessRefreshTokenMatch(req: Request, res: Response, next: NextFunction) {
    console.log('VerifyUserMiddleware', 'isAccessRefreshTokenMatch');
    try {
      UserDb.findById(req.body.jwt.userId).then((user) => {
        if (user) {
          if (user.accessRefreshToken !== req.body.accessRefreshToken) {
            console.log('isAccessRefreshTokenMatch', 'access refresh token is not match');
            next(new ErrorException(ErrorCode.RefreshTokenInvalid));
          } else {
            console.log('isAccessRefreshTokenMatch', 'success');
            console.log(user);
            req.body.userId = user._id;
            req.body.firstName = user.firstName;
            req.body.lastName = user.lastName;
            next();
          }
        } else {
          console.log('isAccessRefreshTokenMatch', 'not find user');
          next(new ErrorException(ErrorCode.UserNotFound));
        }
      });
    } catch (err) {
      next(err);
    }
  }
}

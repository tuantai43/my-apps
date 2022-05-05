import { ErrorException } from './../error-handler/error-exception';
import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';
import { ErrorCode } from '../error-handler/error-code';
import { enviroment } from '../../environments';

export abstract class AuthValidationMiddleware {
  static validJWTNeeded(req: Request, res: Response, next: NextFunction) {
    console.log('AuthValidationMiddleware', 'validJWTNeeded');
    if (req.headers['authorization']) {
      try {
        const authorization = req.headers['authorization'].split(' ');
        console.log('validAuthorizationHeader', authorization[0]);
        if (authorization[0] !== 'Bearer') {
          next(new ErrorException(ErrorCode.AuthorizationBearerInvalid));
        } else {
          req.body.jwt = Jwt.verify(authorization[1], enviroment.jwtSecret);
          console.log('validJWTNeeded', 'success');
          next();
        }
      } catch (err) {
        console.log('validAuthorizationHeader', 'Access token is invalid');
        next(new ErrorException(ErrorCode.AuthorizationInvalid));
      }
    } else {
      console.log('validAuthorizationHeader', 'Missing authorization in header');
      next(new ErrorException(ErrorCode.MissingAuthorization));
    }
  }

  static validJWTWithoutExpireNeeded(req: Request, res: Response, next: NextFunction) {
    console.log('AuthValidationMiddleware', 'validJWTWithoutExpireNeeded');
    if (req.headers['authorization']) {
      try {
        const authorization = req.headers['authorization'].split(' ');
        console.log('validAuthorizationHeader', authorization[0]);
        if (authorization[0] !== 'Bearer') {
          next(new ErrorException(ErrorCode.AuthorizationBearerInvalid));
        } else {
          req.body.jwt = Jwt.verify(authorization[1], enviroment.jwtSecret, {
            ignoreExpiration: true,
          });
          console.log('validJWTWithoutExpireNeeded', 'success');
          next();
        }
      } catch (err) {
        console.log('validAuthorizationHeader', 'Access token is invalid');
        next(new ErrorException(ErrorCode.AuthorizationInvalid));
      }
    } else {
      console.log('validAuthorizationHeader', 'Missing authorization in header');
      next(new ErrorException(ErrorCode.MissingAuthorization));
    }
  }
}

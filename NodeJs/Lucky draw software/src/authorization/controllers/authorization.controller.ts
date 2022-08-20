import { ErrorException } from './../../common/error-handler/error-exception';
import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { PERMISSION_LEVELS } from '../../common/constants/permission.constant';
import { enviroment } from '../../environments';
import { ErrorCode } from '../../common/error-handler/error-code';
import { generateToken } from '../../common/functions';
import { UserDb } from '../../database/user.db';

export abstract class AuthorizationController {
  static async login(req: Request, res: Response, next: NextFunction) {
    console.log('AuthorizationController', 'login');
    try {
      const { userId, firstName, lastName, email, permissionLevel } = req.body;
      const refreshId = userId + enviroment.jwtSecret;
      const salt = crypto.randomBytes(16).toString('base64');
      const hash = crypto.createHmac('sha512', salt).update(refreshId).digest('base64');
      const refreshToken = Buffer.from(hash).toString('base64');
      const result = await UserDb.updateAccessRefreshToken(email, refreshToken);
      const accessToken = generateToken(userId, permissionLevel);
      if (result.modifiedCount === 1) {
        console.log('login', 'update access refresh token', 'success');
        res.cookie('accessToken', accessToken, { signed: true });
        res.status(200).json({
          accessToken,
          refreshToken: refreshToken,
          info: {
            userId,
            firstName,
            lastName,
            email,
          },
        });
      } else {
        next(new ErrorException(ErrorCode.LoginFail));
      }
    } catch (err) {
      next(err);
    }
  }

  static register(req: Request, res: Response, next: NextFunction) {
    console.log('AuthorizationController', 'register');
    req.body.permissionLevel = PERMISSION_LEVELS.NORMAL_USER;
    next();
  }

  static async refreshToken(req: Request, res: Response, next: NextFunction) {
    console.log('AuthorizationController', 'refreshToken');
    try {
      const { userId, firstName, lastName, email } = req.body;
      res.status(200).json({
        accessToken: generateToken(userId, req.body.jwt.permissionLevel),
        refreshToken: req.body.accessRefreshToken,
        info: {
          userId,
          firstName,
          lastName,
          email,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

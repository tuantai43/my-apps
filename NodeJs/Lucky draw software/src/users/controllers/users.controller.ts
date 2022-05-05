import { ErrorException } from '../../common/error-handler/error-exception';
import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import { ErrorCode } from '../../common/error-handler/error-code';
import { UserDb } from '../../database/user.db';

export abstract class UsersController {
  static async insert(req: Request, res: Response, next: NextFunction) {
    console.log('UsersController', 'insert');
    try {
      let salt = crypto.randomBytes(16).toString('base64');
      let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64');
      req.body.password = salt + '$' + hash;
      const result = await UserDb.findByEmail(req.body.email);
      if (result) {
        console.log('Email is used', req.body.email);
        next(new ErrorException(ErrorCode.EmailUsed));
      } else {
        UserDb.createUser(req.body).then((result: any) => {
          console.log('UsersController', 'insert', 'success');
          res.status(201).json({ id: result._id });
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getByEmail(req: Request, res: Response, next: NextFunction) {
    return await UserDb.findByEmail(req.body.email);
  }

  static async updateAccessRefreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('UsersController', 'updateAccessRefreshToken');
      const result = await UserDb.updateAccessRefreshToken(req.body.info.email, req.body.refreshToken);
      if (result.modifiedCount === 1) {
        console.log('updateAccessRefreshToken', 'success');
        res.status(200).json(req.body);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    console.log('UsersController', 'getById');
    try {
      const result = await UserDb.findById(req.params.userId);
      if (result) {
        console.log('UsersController', 'getById', 'success');
        res.status(200).json(result);
      } else {
        next(new ErrorException(ErrorCode.UserNotFound));
      }
    } catch (err) {
      next(err);
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    console.log('UsersController', 'list');
    try {
      const result = await UserDb.list();
      res.status(200).json(result);
    } catch {
      next();
    }
  }

  static removeById(req: Request, res: Response, next: NextFunction) {
    console.log('UsersController', 'removeById');
    UserDb.removeById(req.params.userId)
      .then(() => {
        res.status(204).json({});
      })
      .catch((err) => {
        next(err);
      });
  }
}

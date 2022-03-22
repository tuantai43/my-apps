import { ErrorException } from '../../common/error-handler/error-exception';
import { UserModel } from '../models/users.model';
import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';
import { ErrorCode } from '../../common/error-handler/error-code';

export abstract class UsersController {
    static insert(req: Request, res: Response) {
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt)
            .update(req.body.password)
            .digest("base64");
        req.body.password = salt + "$" + hash;
        req.body.permissionLevel = 1;
        UserModel.createUser(req.body)
            .then((result: any) => {
                res.status(201).send({ id: result._id });
            });
    };
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserModel.findById(req.params.id);
            res.status(200).send(result);
        } catch {
            next(new ErrorException(ErrorCode.UserNotFound));
        }
    }
    static async list(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserModel.list();
            res.status(200).send(result);
        } catch {
            next();
        }
    }

    static removeById(req: Request, res: Response, next: NextFunction) {
        UserModel.removeById(req.params.id)
            .then(() => {
                res.status(204).send({});
            }).catch((err) => {
                next(err);
            })
    }
}

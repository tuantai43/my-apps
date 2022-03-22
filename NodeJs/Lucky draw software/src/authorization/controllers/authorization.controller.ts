import crypto from 'crypto';
import { Request, Response } from 'express';
import Jwt from 'jsonwebtoken';

export abstract class AuthorizationController {
    static login(req: Request, res: Response) {
        try {
            let refreshId = req.body.userId + process.env.JWT_SECRET;
            let salt = crypto.randomBytes(16).toString('base64');
            let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
            req.body.refreshKey = salt;
            let token = Jwt.sign(req.body, process.env.JWT_SECRET || '');
            let b = Buffer.from(hash);
            let refresh_token = b.toString('base64');
            res.status(201).send({ accessToken: token, refreshToken: refresh_token });
        } catch (err) {
            res.status(500).send({ errors: err });
        }
    }
}
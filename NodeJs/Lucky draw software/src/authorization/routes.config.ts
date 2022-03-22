import express from 'express';
import { AuthorizationController } from './controllers/authorization.controller';
import { VerifyUserMiddleware } from './middlewares/verify.user.middleware';
const authRouter = express.Router();

authRouter.post('/', [
    VerifyUserMiddleware.hasAuthValidFields,
    VerifyUserMiddleware.isPasswordAndUserMatch,
    AuthorizationController.login
])

export default authRouter;
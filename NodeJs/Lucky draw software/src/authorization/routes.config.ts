import express from 'express';
import { AuthValidationMiddleware } from '../common/middlewares/auth.validation.middleware';
import { UsersController } from '../users/controllers/users.controller';
import { AuthorizationController } from './controllers/authorization.controller';
import { VerifyUserMiddleware } from './middlewares/verify.user.middleware';
const authRouter = express.Router();

authRouter.post('/login', [
  VerifyUserMiddleware.hasAuthValidFields,
  VerifyUserMiddleware.isPasswordAndUserMatch,
  AuthorizationController.login,
]);

authRouter.post('/register', [AuthorizationController.register, UsersController.insert]);

authRouter.post('/refresh', [
  AuthValidationMiddleware.validJWTWithoutExpireNeeded,
  VerifyUserMiddleware.hasAccessRefreshToken,
  VerifyUserMiddleware.isAccessRefreshTokenMatch,
  AuthorizationController.refreshToken,
]);

export default authRouter;

import { PERMISSION_LEVELS } from './../common/constants/permission.constant';
import express from "express";
import { AuthPermissionMiddleware } from '../common/middlewares/auth.permission.middleware';
import { AuthValidationMiddleware } from '../common/middlewares/auth.validation.middleware';
import { UsersController } from "./controllers/users.controller";
const userRouter = express.Router();

userRouter.post('/', [
    UsersController.insert
])

userRouter.get('/list', [
    AuthValidationMiddleware.validJWTNeeded,
    AuthPermissionMiddleware.minimumPermissionLevelRequired(PERMISSION_LEVELS.PAID_USER),
    UsersController.list
])

userRouter.get('/:userId', [
    AuthValidationMiddleware.validJWTNeeded,
    AuthPermissionMiddleware.minimumPermissionLevelRequired(PERMISSION_LEVELS.NORMAL_USER),
    AuthPermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
    UsersController.getById
])

userRouter.delete('/:userId', [
    AuthValidationMiddleware.validJWTNeeded,
    AuthPermissionMiddleware.minimumPermissionLevelRequired(PERMISSION_LEVELS.ADMIN),
    UsersController.removeById
])

export default userRouter;
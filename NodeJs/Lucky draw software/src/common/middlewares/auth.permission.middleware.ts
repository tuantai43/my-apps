import { PERMISSION_LEVELS } from './../constants/permission.constant';
import { ErrorException } from './../error-handler/error-exception';
import { Request, Response, NextFunction } from 'express';
import { ErrorCode } from '../error-handler/error-code';

export abstract class AuthPermissionMiddleware {
  static minimumPermissionLevelRequired(required_permission_level: number) {
    return (req: Request, res: Response, next: NextFunction) => {
      console.log('AuthPermissionMiddleware', 'minimumPermissionLevelRequired');
      try {
        const user_permission_level = parseInt(req.body.jwt.permissionLevel);
        console.log('minimumPermissionLevelRequired', 'required_permission_level', required_permission_level);
        console.log('minimumPermissionLevelRequired', 'user_permission_level', user_permission_level);
        if (user_permission_level & required_permission_level) {
          console.log('minimumPermissionLevelRequired', 'success');
          return next();
        } else {
          return next(new ErrorException(ErrorCode.ActionDenied));
        }
      } catch (err) {
        next(new ErrorException(ErrorCode.Unknown));
      }
    };
  }

  static onlySameUserOrAdminCanDoThisAction(req: Request, res: Response, next: NextFunction) {
    const user_permission_level = parseInt(req.body.jwt.permissionLevel);
    const userId = req.body.jwt.userId;
    console.log('onlySameUserOrAdminCanDoThisAction', 'user_permission_level', user_permission_level);
    console.log('onlySameUserOrAdminCanDoThisAction', 'jwt.userId', req.body.jwt.userId);
    console.log('onlySameUserOrAdminCanDoThisAction', 'userId', userId);
    if (req.params && req.params.userId && userId === req.params.userId) {
      return next();
    } else {
      if (user_permission_level & PERMISSION_LEVELS.ADMIN) {
        return next();
      } else {
        return next(new ErrorException(ErrorCode.ActionDenied));
      }
    }
  }

  static sameUserCantDoThisAction(req: Request, res: Response, next: NextFunction) {
    const userId = req.body.jwt.userId;
    console.log('sameUserCantDoThisAction', 'jwt.userId', req.body.jwt.userId);
    console.log('sameUserCantDoThisAction', 'userId', req.params.userId);
    console.log();
    if ((req.params && req.params.userId === userId) || (req.body && req.body.userId === userId)) {
      return next();
    } else {
      return next(new ErrorException(ErrorCode.ActionDenied));
    }
  }
}

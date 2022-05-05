import { Request, Response, NextFunction } from 'express';
import { enviroment } from '../../environments';
import { ErrorCode } from './error-code';
import { ErrorException } from './error-exception';
import { ErrorModel } from './error.model';

export abstract class ErrorHandler {
  static jsonError(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log('Error handling middleware called.');
    console.log('Path:', req.path);
    if (enviroment.env === 'prod') {
      if (err instanceof ErrorException) {
        console.log('Error is known.');
        res.status(err.status).json({ code: err.name });
      } else {
        // For unhandled errors.
        res.status(500).json({ code: ErrorCode.Unknown.key, message: ErrorCode.Unknown.content });
      }
    } else {
      if (err instanceof ErrorException) {
        console.log('Error is known.');
        res.status(err.status).json({ message: err.message, code: err.name });
      } else if (err) {
        console.log(err);
        res.status(500).json({ message: err });
      } else {
        // For unhandled errors.
        res.status(500).json({ code: ErrorCode.Unknown.key });
      }
    }
  }

  static checkDomain(req: Request, res: Response, next: NextFunction) {
    if (req.headers.origin === enviroment.webDomain) {
      next();
    } else {
      next(new ErrorException(ErrorCode.ActionDenied));
    }
  }
}

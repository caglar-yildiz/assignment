import { Request, Response, NextFunction } from 'express';

// Middleware function to handle next() after calling each controller
// We could have used express-async-errors package to handle this
export function controllerWrapper(
  controllerFn: (req: Request, res: Response) => Promise<any>
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controllerFn(req, res);
      next();
    } catch (error) {
      next(error);
    }
  };
}
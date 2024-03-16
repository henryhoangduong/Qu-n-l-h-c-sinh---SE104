import { Router } from 'express';
import { findInformationController } from './user.controller';
import { jwtMiddleware } from 'src/middleware/jwt.middleware';

export const userRouter: Router = Router();

userRouter.get('/', jwtMiddleware, findInformationController);

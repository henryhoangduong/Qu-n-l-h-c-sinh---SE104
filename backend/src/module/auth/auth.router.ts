import { Router } from 'express';
import { refreshController, signInController } from './auth.controller';

export const authRouter: Router = Router();

authRouter.post('/sign-in', signInController);
authRouter.post('/refresh', refreshController);

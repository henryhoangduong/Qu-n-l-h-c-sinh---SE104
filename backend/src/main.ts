import { Express } from 'express';
import { authRouter } from './module/auth/auth.router';
import * as express from 'express';
import { errorHandlerMiddleware } from './middleware/error-handler.middleware';
import { userRouter } from './module/user/user.router';

const app: Express = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

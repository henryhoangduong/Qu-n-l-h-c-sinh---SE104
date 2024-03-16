import { getToken } from 'src/core/jwt.config';
import { Request, Response } from 'express';
import { myDataSource } from 'src/data-source';
import { Account } from '../auth/entities/account.entity';
import { decode } from 'jsonwebtoken';
import { User } from './entities/user.entity';
import { BaseResponse } from 'src/core/base.response';

export const findInformationController = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const accessToken = getToken(req);
    const accountId = decode(accessToken).sub as string;
    const account = await myDataSource.getRepository(Account).findOne({
      where: {
        id: accountId,
        isActive: true,
      },
    });
    if (!account) {
      throw new Error('Invalid identifierId or password');
    }
    const user = await myDataSource.getRepository(User).findOne({
      where: {
        account: account,
        isActive: true,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const response = new BaseResponse<User>({
      code: 200,
      data: user,
    });
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

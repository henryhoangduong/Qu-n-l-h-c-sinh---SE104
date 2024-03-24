import { NextFunction, Request, Response } from 'express';
import { BaseResponse } from 'src/core/base.response';
import {
  accessTokenSign,
  refreshTokenSign,
  refreshJwt,
} from 'src/helper/jwt.config';
import { dataSource } from 'src/data-source';
import { SignInResponseDTO } from './dto/sign-in-response.dto';
import { Account } from './entities/account.entity';
import { SignInRequestDTO } from './dto/sign-in-request.dto';
import { reqBodyValidation } from 'src/helper/validation';
import { RefreshTokenRequestDTO } from './dto/refresh-token-request.dto';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { generateTokenPayload } from 'src/helper/jwt.type';

export const signInController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqBody = new SignInRequestDTO(await req.body);
    await reqBodyValidation(reqBody);
    const account = await dataSource.getRepository(Account).findOne({
      where: {
        identifierId: reqBody.identifierId,
        isActive: true,
      },
    });
    if (!account) {
      throw new Error('Invalid identifierId or password');
    }
    const isPasswordMatch = await bcrypt.compare(
      reqBody.password,
      account.password,
    );
    if (!isPasswordMatch) {
      throw new Error('Invalid identifierId or password');
    }
    const user = await dataSource.getRepository(User).findOne({
      where: {
        account: account,
        isActive: true,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const accessTokenPayload = generateTokenPayload(
      account,
      user,
      'ACCESS_TOKEN',
    );
    const accessToken = accessTokenSign(accessTokenPayload);
    const refreshTokenPayload = generateTokenPayload(
      account,
      user,
      'REFRESH_TOKEN',
    );
    const refreshToken = refreshTokenSign(refreshTokenPayload);
    const responseData = new SignInResponseDTO({
      accessToken,
      refreshToken,
      user,
    });
    const response = new BaseResponse<SignInResponseDTO>({
      code: 200,
      data: responseData,
    });
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const refreshController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reqBody = new RefreshTokenRequestDTO(await req.body);
    await reqBodyValidation(reqBody);
    const accessToken = refreshJwt(reqBody.refreshToken);
    const data = {
      accessToken,
    };
    const response = new BaseResponse({
      code: 200,
      data: data,
    });
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

import { Request, Response } from 'express';
import { BaseResponse } from 'src/core/base.response';
import {
  accessTokenSign,
  refreshTokenSign,
  refreshJwt,
} from 'src/core/jwt.config';
import { JwtType } from 'src/core/jwt.type';
import { myDataSource } from 'src/data-source';
import { SignInResponseDTO } from './dto/sign-in-response.dto';
import { Account } from './entities/account.entity';
import { SignInRequestDTO } from './dto/sign-in-request.dto';
import { reqBodyValidation } from 'src/core/validation';
import { RefreshTokenRequestDTO } from './dto/refresh-token-request.dto';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';

export const signInController = async (
  req: Request,
  res: Response,
  next: any,
) => {
  try {
    const reqBody = new SignInRequestDTO(await req.body);
    await reqBodyValidation(reqBody);
    const account = await myDataSource.getRepository(Account).findOne({
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
    const user = await myDataSource.getRepository(User).findOne({
      where: {
        account: account,
        isActive: true,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const payload = {
      sub: account?.id,
      username: account?.identifierId,
      role: user.role,
    };
    const accessTokenType: JwtType = 'ACCESS_TOKEN';
    const refreshTokenType: JwtType = 'REFRESH_TOKEN';
    const accessToken = accessTokenSign({ ...payload, type: accessTokenType });
    const refreshToken = refreshTokenSign({
      ...payload,
      type: refreshTokenType,
    });
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
  next: any,
) => {
  try {
    const reqBody = new RefreshTokenRequestDTO(await req.body);
    await reqBodyValidation(reqBody);
    const accessToken = refreshJwt(reqBody.refreshToken);
    const data = {
      accessToken: accessToken,
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

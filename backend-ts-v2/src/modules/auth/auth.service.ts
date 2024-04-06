import { HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginReqDto } from "src/data-object/login-req.dto";
import { AuthRepository } from "./auth.repository";
import { BaseResponse } from "src/core/base.response";
import { accessTokenSign, generateTokenPayload, refreshTokenSign } from "src/core/jwt.config";
import { LoginResDto } from "src/data-object/login-res.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
  ) { }

  async login(loginDto: LoginReqDto): Promise<BaseResponse<LoginResDto | undefined>> {
    try {
      const account = await this.authRepository.findByIdentifierId(loginDto.identifierId);
      if (!account) throw new UnauthorizedException('Invalid id or password.');
      // const isPasswordMatch = await bcrypt.compare(loginDto.password, account.password);
      const isPasswordMatch = (loginDto.password === account.password);
      if (!isPasswordMatch) throw new UnauthorizedException('Invalid username or password.');
      const accessTokenPayload = generateTokenPayload(account, account.user, 'ACCESS_TOKEN');
      const refreshTokenPayload = generateTokenPayload(account, account.user, 'REFRESH_TOKEN');
      const accessToken = accessTokenSign(accessTokenPayload);
      const refreshToken = refreshTokenSign(refreshTokenPayload);
      const data: LoginResDto = {
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: account.user,
      }
      return new BaseResponse<LoginResDto>(HttpStatus.OK, true, data, undefined);
    } catch (error) {
      return new BaseResponse<undefined>(HttpStatus.BAD_REQUEST, false, undefined, error.message);
    }
  }
}

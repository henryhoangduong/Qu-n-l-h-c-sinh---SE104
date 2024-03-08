import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterLoginDto } from './dto/register_login.dto';
import { AuthRepository } from './auth.repository';
import { Account } from './entities/account.entity';
import * as bcrypt from 'bcrypt';
import { BaseResponse } from 'src/core/base.response';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) { }
  async register(registerDto: RegisterLoginDto) {
    try {
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const account = new Account({
        username: registerDto.username,
        password: hashedPassword,
      });
      const newAccount = await this.authRepository.save<Account>(account);
      return new BaseResponse(HttpStatus.CREATED, true, newAccount, null);
    } catch (error) {
      return new BaseResponse(HttpStatus.BAD_REQUEST, false, null, error.message);
    }
  }

  async login(loginDto: RegisterLoginDto) {
    try {
      const account = await this.authRepository.findOne({ where: { username: loginDto.username } });
      if (!account) throw new UnauthorizedException();
      const isPasswordMatch = await bcrypt.compare(loginDto.password, account.password);
      if (!isPasswordMatch) throw new UnauthorizedException();
      const payload = { sub: account?.id, username: account?.username };
      const accessToken = await this.jwtService.signAsync(payload);
      const data = {
        account,
        access_token: accessToken,
      }
      return new BaseResponse(HttpStatus.OK, true, data, null);
    } catch (error) {
      return new BaseResponse(HttpStatus.BAD_REQUEST, false, null, error.message);
    }
  }
}

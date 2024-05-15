import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginReqDto } from 'src/data-object/login-req.dto';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginReqDto: LoginReqDto): Promise<{ access_token: string }> {
    if (
      loginReqDto.username.toLowerCase() == 'admin' &&
      loginReqDto.password == '12345678'
    ) {
      const payload = {
        username: loginReqDto.username,
        password: loginReqDto.password,
        role: 'admin',
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}

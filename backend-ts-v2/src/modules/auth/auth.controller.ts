import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginReqDto } from 'src/data-object/login-req.dto';
import { Public } from 'src/guard/auth.guard';
import { BaseResponse } from 'src/core/base.response';
import { LoginResDto } from 'src/data-object/login-res.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('api/login')
  async login(@Body() loginDto: LoginReqDto): Promise<BaseResponse<LoginResDto | undefined>> {
    return await this.authService.login(loginDto);
  }
}
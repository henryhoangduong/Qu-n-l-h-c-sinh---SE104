import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterLoginDto } from './dto/register_login.dto';
import { BaseController } from 'src/core/base.controller';
import { Response } from 'express';
import { Public } from './auth.decorator';

@Public()
@Controller('auth')
export class AuthController extends BaseController {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @Post('register')
  async register(@Res() res: Response, @Body() registerDto: RegisterLoginDto) {
    return this.executeService(res, await this.authService.register(registerDto));
  }

  @Post('login')
  async login(@Res() res: Response, @Body() loginDto: RegisterLoginDto) {
    return this.executeService(res, await this.authService.login(loginDto));
  }
}

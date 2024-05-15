import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginReqDto } from 'src/data-object/login-req.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(
    @Body() loginReqDto: LoginReqDto,
  ): Promise<{ access_token: string }> {
    return await this.authService.login(loginReqDto);
  }
}

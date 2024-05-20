import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginReqDto } from 'src/data-object/login-req.dto';
import { Hocsinh } from 'src/entities';
import { Public } from 'src/decorator/publicRoute';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(
    @Body() loginReqDto: LoginReqDto,
  ): Promise<{ access_token: string; user: string }> {
    return await this.authService.login(loginReqDto);
  }

  @Get('student')
  async readStudetn(): Promise<Hocsinh[]> {
    return this.authService.readStudent();
  }
}

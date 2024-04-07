import { Controller, Request, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('student')
  async loginStudent(@Request() req) {
    return this.authService.loginStudent(req);
  }
  @Post('teacher')
  async loginTeacher(@Request() req) {
    return this.authService.loginTeacher(req);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('gud');
    //return req.user;
  }
}

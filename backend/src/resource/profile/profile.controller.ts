import { Controller, Post, Body, Res, UseGuards, Req, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { BaseController } from 'src/core/base.controller';
import { Response } from 'express';
import { AuthGuard } from '../auth/auth.guard';
import { TokenDecorator } from '../auth/auth.decorator';

@Controller('profile')
export class ProfileController extends BaseController {
  constructor(private readonly profileService: ProfileService) {
    super();
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Res() res: Response, @TokenDecorator() token: any, @Body() createProfileDto: CreateProfileDto) {
    return this.executeService(res, await this.profileService.create(token, createProfileDto));
  }

  @UseGuards(AuthGuard)
  @Get()
  async get(@Res() res: Response, @TokenDecorator() token: any) {
    return this.executeService(res, await this.profileService.get(token));
  }
}

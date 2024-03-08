import { HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { BaseResponse } from 'src/core/base.response';
import { AuthRepository } from '../auth/auth.repository';
import { BaseService } from 'src/core/base.service';

@Injectable()
export class ProfileService extends BaseService {
  constructor(
    private readonly profileRepository: ProfileRepository,
    private readonly authRepository: AuthRepository,
  ) {
    super();
  }

  async create(token: string | undefined, createProfileDto: CreateProfileDto) {
    try {
      if (!token) throw new UnauthorizedException();
      const account = await this.findMyAccount(token, this.authRepository);
      const profile = new Profile({
        account,
        ...createProfileDto,
      });
      const newProfile = await this.profileRepository.save<Profile>(profile);
      return new BaseResponse(HttpStatus.CREATED, true, newProfile, null);
    } catch (error) {
      return new BaseResponse(HttpStatus.BAD_REQUEST, false, null, error.message);
    }
  }

  async get(token: string | undefined) {
    try {
      if (!token) throw new UnauthorizedException();
      const profile = await this.findMyProfile(token, this.profileRepository, this.authRepository);
      return new BaseResponse(HttpStatus.OK, true, profile, null);
    } catch (error) {
      return new BaseResponse(HttpStatus.BAD_REQUEST, false, null, error.message);
    }
  }
}

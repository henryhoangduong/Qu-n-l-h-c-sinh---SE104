import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { AuthRepository } from '../auth/auth.repository';
import { ProfileRepository } from './profile.repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository, AuthRepository],
})
export class ProfileModule {}

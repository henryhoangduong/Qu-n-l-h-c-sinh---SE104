import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeacherService } from './teachers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../entitie/entities/Teacher';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher])],
  controllers: [TeachersController],
  providers: [TeacherService],
})
export class TeachersModule {}

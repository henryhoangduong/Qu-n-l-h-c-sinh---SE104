import { Module } from '@nestjs/common';
import { StudentsController } from './student.controller';
import { StudentService } from './student.service';
import { Hocsinh } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThamsoModule } from '../thamso/thamso.module';

@Module({
  imports: [TypeOrmModule.forFeature([Hocsinh]), ThamsoModule],
  controllers: [StudentsController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}

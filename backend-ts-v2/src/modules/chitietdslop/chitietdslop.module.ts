import { Module } from '@nestjs/common';
import { ChitietdslopController } from './chitietdslop.controller';
import { ChitietdslopService } from './chitietdslop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chitietdslop } from 'src/entities';
import { ClassModule } from '../class/class.module';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Chitietdslop]),
    ClassModule,
    StudentModule,
  ],
  controllers: [ChitietdslopController],
  providers: [ChitietdslopService],
})
export class ChitietdslopModule {}

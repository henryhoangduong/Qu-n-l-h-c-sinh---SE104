import { Module } from '@nestjs/common';
import { MonhocController } from './monhoc.controller';
import { MonhocService } from './monhoc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monhoc } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Monhoc])],
  controllers: [MonhocController],
  providers: [MonhocService],
})
export class MonhocModule {}

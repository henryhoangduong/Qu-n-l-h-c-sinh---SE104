import { Module } from '@nestjs/common';
import { ThamsoController } from './thamso.controller';
import { ThamsoService } from './thamso.service';
import { Thamso } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Thamso])],
  controllers: [ThamsoController],
  providers: [ThamsoService],
})
export class ThamsoModule {}

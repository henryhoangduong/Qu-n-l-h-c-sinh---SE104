import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chitietdiemloaihinhkiemtra } from 'src/entities';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';
import { ScoreRepository } from './score.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Chitietdiemloaihinhkiemtra])],
  controllers: [ScoreController],
  providers: [ScoreService, ScoreRepository],
})
export class ScoreModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';

import { ScoreService } from './score.service';
import { ScoreInputDto } from 'src/data-object/score-input.dto';

@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post('/')
  async createScore(@Body() scoreInputDto: ScoreInputDto) {
    return this.scoreService.createScore(scoreInputDto);
  }

  @Get('/')
  async getScore() {
    return this.scoreService.getAllScore();
  }
}

import { HttpStatus, Injectable } from '@nestjs/common';
import { ScoreRepository } from './score.repository';
import { ScoreInputDto } from 'src/data-object/score-input.dto';
import { Chitietdiemloaihinhkiemtra } from 'src/entities';
import { BaseResponse } from 'src/core/base.response';


@Injectable()
export class ScoreService {
  constructor(private readonly scoreRepository: ScoreRepository) {}

  async createScore(scoreInputDto: ScoreInputDto): Promise<BaseResponse<Chitietdiemloaihinhkiemtra>> {
    const score = new Chitietdiemloaihinhkiemtra({
      mabangdiemmon: scoreInputDto.mabangdiemmon,
      mahocsinh: scoreInputDto.mahocsinh,
      malhkt: scoreInputDto.malhkt,
      diem: scoreInputDto.diem,
    });
    const newScore = await this.scoreRepository.save(score);
    return new BaseResponse(HttpStatus.CREATED, true, newScore, undefined);
  }

  async getAllScore(): Promise<BaseResponse<Chitietdiemloaihinhkiemtra[]>> {
    const scores = await this.scoreRepository.find();
    return new BaseResponse(HttpStatus.OK, true, scores, undefined);
  }
}
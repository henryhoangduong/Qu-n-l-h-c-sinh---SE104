import { Injectable } from '@nestjs/common';
import { Chitietdiemloaihinhkiemtra } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ScoreRepository extends Repository<Chitietdiemloaihinhkiemtra> {
  constructor(dataSource: DataSource) {
    super(Chitietdiemloaihinhkiemtra, dataSource.createEntityManager());
  }
}
import { Injectable } from '@nestjs/common';
import { Lop } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Lop)
    private readonly lopRepository: Repository<Lop>,
  ) {}
  findAll(): Promise<Lop[]> {
    return this.lopRepository.find();
  }
  findOne(malop: number): Promise<Lop> {
    return this.lopRepository.findOne({ where: { malop } });
  }
}

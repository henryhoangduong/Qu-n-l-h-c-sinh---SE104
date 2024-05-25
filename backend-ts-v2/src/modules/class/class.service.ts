import { Injectable } from '@nestjs/common';
import { Lop } from 'src/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassCreateDto } from 'src/data-object/class-create.dto';

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
  create(classCreateDto: ClassCreateDto): Promise<Lop> {
    const Class = {
      classCreateDto,
      malop: Math.floor(Math.random() * 100000) + 1,
    };
    const newClass = this.lopRepository.create(Class);
    return this.lopRepository.save(newClass);
  }
  async update(lop: Lop): Promise<Lop> {
    const lopChanged = await this.lopRepository.save(lop);
    return lopChanged;
  }
}

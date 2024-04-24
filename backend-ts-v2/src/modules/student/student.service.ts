import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hocsinh } from '../../entities';
import { StudentCreateDto } from 'src/data-object/student-create.dto';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Hocsinh)
    private readonly hocsinhRepository: Repository<Hocsinh>,
  ) {}
  async create(studentCreateDto: StudentCreateDto): Promise<Hocsinh> {
    const student = {
      ...studentCreateDto,
      mahocsinh: Math.floor(Math.random() * 100000) + 1,
    };
    const newStudent = this.hocsinhRepository.create(student);
    return this.hocsinhRepository.save(newStudent);
  }
  findAll(): Promise<Hocsinh[]> {
    return this.hocsinhRepository.find();
  }
  findOne(mahocsinh: number): Promise<Hocsinh> {
    return this.hocsinhRepository.findOne({ where: { mahocsinh } });
  }
}

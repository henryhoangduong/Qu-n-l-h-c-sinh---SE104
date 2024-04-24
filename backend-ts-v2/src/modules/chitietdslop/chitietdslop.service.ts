import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chitietdslop } from 'src/entities';
import { ClassService } from '../class/class.service';
import { StudentService } from '../student/student.service';

@Injectable()
export class ChitietdslopService {
  constructor(
    @InjectRepository(Chitietdslop)
    private readonly chitietdslopRepository: Repository<Chitietdslop>,
    private classService: ClassService,
    private studentService: StudentService,
  ) {}

  async create(): Promise<void> {
    const data = new Chitietdslop();
    const lop = await this.classService.findOne(1);
    const hocsinh = await this.studentService.findOne(1);
    data.machitietdslop = 1;
    data.malop = lop;
    data.mahocsinh = hocsinh;
    const chitietdslop = this.chitietdslopRepository.create(data); // Create an instance of the entity
    await this.chitietdslopRepository.save(chitietdslop); // Save the entity
  }
}

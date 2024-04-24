import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chitietdslop } from 'src/entities';
import { ClassService } from '../class/class.service';
import { StudentService } from '../student/student.service';
import { ChitietdslopDto } from 'src/data-object/chitietdslop.dto';

@Injectable()
export class ChitietdslopService {
  constructor(
    @InjectRepository(Chitietdslop)
    private readonly chitietdslopRepository: Repository<Chitietdslop>,
    private classService: ClassService,
    private studentService: StudentService,
  ) {}

  async create(chitietdslopDto: ChitietdslopDto): Promise<void> {
    const data = new Chitietdslop();
    const lop = await this.classService.findOne(chitietdslopDto.classid);
    console.log(chitietdslopDto.studentlists);
    const chitietdslops = chitietdslopDto.studentlists.map(
      async (StudentDto) => {
        const mahocsinh = StudentDto;
        const hocsinh = await this.studentService.findOne(mahocsinh);
        const data = new Chitietdslop();
        data.machitietdslop = Math.floor(Math.random() * 100000) + 1;
        data.malop = lop;
        data.mahocsinh = hocsinh;

        const chitietdslop = this.chitietdslopRepository.create(data);
        await this.chitietdslopRepository.save(chitietdslop);
        console.log(chitietdslop);
        return chitietdslop;
      },
    );

    await Promise.all(chitietdslops);
  }
}

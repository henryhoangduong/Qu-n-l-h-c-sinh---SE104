import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hocsinh } from '../../entities';
import { StudentCreateDto } from 'src/data-object/student-create.dto';
import { ThamsoService } from '../thamso/thamso.service';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Hocsinh)
    private readonly hocsinhRepository: Repository<Hocsinh>,
    private readonly thamsoService: ThamsoService,
  ) {}
  async create(studentCreateDto: StudentCreateDto): Promise<Hocsinh> {
    const thamso = await this.thamsoService.read();
    const tuoitoithieu = thamso[0].tuoitoithieu;
    const tuoitoida = thamso[0].tuoitoida;
    console.log('tuoi toi thieu: ', tuoitoithieu);
    console.log('tuoi toi da: ', tuoitoida);
    const dob_convert = new Date(studentCreateDto.ngaysinh.toString());
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob_convert.getFullYear();
    if (age < tuoitoithieu || age > tuoitoida) {
      throw new Error('Age is not within the required range.');
    }
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

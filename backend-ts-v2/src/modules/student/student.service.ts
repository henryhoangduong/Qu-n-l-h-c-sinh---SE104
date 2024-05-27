import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hocsinh } from '../../entities';
import { StudentCreateDto } from 'src/data-object/student-create.dto';
import { ThamsoService } from '../thamso/thamso.service';
import { StudentOptionsDto } from 'src/data-object/studentoptions.dto';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Hocsinh)
    private readonly hocsinhRepository: Repository<Hocsinh>,
    private readonly thamsoService: ThamsoService,
  ) {}
  async create(studentCreateDto: StudentCreateDto): Promise<Hocsinh | string> {
    const thamso = await this.thamsoService.read();
    const tuoitoithieu = thamso[0].tuoitoithieu;
    const tuoitoida = thamso[0].tuoitoida;
    const dob_convert = new Date(studentCreateDto.ngaysinh.toString());
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob_convert.getFullYear();
    if (age < tuoitoithieu || age > tuoitoida) {
      return 'Tuổi không cho phép';
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
  async findByOptions(studentOptionsDto: StudentOptionsDto): Promise<Hocsinh> {
    let where: any = {};

    if (studentOptionsDto.mahocsinh) {
      where = { mahocsinh: studentOptionsDto.mahocsinh };
    } else if (studentOptionsDto.hoten) {
      where = { hoten: studentOptionsDto.hoten };
    } else if (studentOptionsDto.dtb) {
      where = { dtb: studentOptionsDto.dtb };
    }

    const options: FindOneOptions<Hocsinh> = {
      where: where,
    };

    return await this.hocsinhRepository.findOne(options);
  }
  findOne(mahocsinh: number): Promise<Hocsinh> {
    return this.hocsinhRepository.findOne({ where: { mahocsinh } });
  }
}

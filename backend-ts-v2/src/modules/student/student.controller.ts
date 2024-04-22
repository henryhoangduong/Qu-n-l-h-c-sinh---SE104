import { Controller, Post, Body, Get } from '@nestjs/common';

import { Hocsinh } from '../../entities';
import { StudentService } from './student.service';
import { StudentCreateDto } from 'src/data-object/student-create.dto';
@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  create(@Body() studentCreateDto: StudentCreateDto): Promise<Hocsinh> {
    return this.studentService.create(studentCreateDto);
  }
  @Get()
  read(): Promise<Hocsinh[]> {
    return this.studentService.findAll();
  }
}

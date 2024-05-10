import { Controller, Post, Body, Get } from '@nestjs/common';

import { Hocsinh } from '../../entities';
import { StudentService } from './student.service';
import { StudentCreateDto } from 'src/data-object/student-create.dto';
import { StudentOptionsDto } from 'src/data-object/studentoptions.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentService) {}
  @Post('create')
  create(@Body() studentCreateDto: StudentCreateDto): Promise<Hocsinh> {
    return this.studentService.create(studentCreateDto);
  }

  @Post('findByOptions')
  findByOptions(
    @Body() studentOptionsDto: StudentOptionsDto,
  ): Promise<Hocsinh> {
    return this.studentService.findByOptions(studentOptionsDto);
  }
  @Get()
  read(): Promise<Hocsinh[]> {
    return this.studentService.findAll();
  }
}

import { Controller, Get } from '@nestjs/common';

import { Student } from '../entitie/entities/Student';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: number): Promise<Student> {
  //   return this.studentService.findOne(id);
  // }

  // @Post()
  // create(@Body() student: Student): Promise<Student> {
  //   return this.studentService.create(student);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() student: Student): Promise<Student> {
  //   return this.studentService.update(id, student);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: number): Promise<void> {
  //   return this.studentService.delete(id);
  // }
}

import { Controller, Get } from '@nestjs/common';
import { ClassService } from './class.service';
import { Lop } from 'src/entities';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}
  @Get()
  read(): Promise<Lop[]> {
    return this.classService.findAll();
  }
}

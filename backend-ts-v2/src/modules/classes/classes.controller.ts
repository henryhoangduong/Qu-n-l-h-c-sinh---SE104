import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { Class } from 'src/entitie/entities/Class';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly ClassService: ClassesService) {}
  @Get()
  findAll(): Promise<Class[]> {
    return this.ClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Class> {
    return this.ClassService.findOne(id);
  }

  @Post()
  create(@Body() class_: Class): Promise<Class> {
    return this.ClassService.create(class_);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() class_: Class): Promise<Class> {
    return this.ClassService.update(id, class_);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.ClassService.delete(id);
  }
}

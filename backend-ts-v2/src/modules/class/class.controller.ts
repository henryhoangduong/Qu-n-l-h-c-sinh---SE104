import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Res,
  Param,
  Delete,
} from '@nestjs/common';
import { ClassService } from './class.service';
import { Lop } from 'src/entities';
import { ClassCreateDto } from 'src/data-object/class-create.dto';
import { Response } from 'express';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}
  @Get()
  read(): Promise<Lop[]> {
    return this.classService.findAll();
  }
  @Post()
  async create(@Body() classCreateDto: ClassCreateDto): Promise<Lop> {
    return this.classService.create(classCreateDto);
  }
  @Get('/:id')
  async findById(@Param('id') malop): Promise<Lop> {
    return this.classService.findOne(malop);
  }
  @Put('/:id')
  async change(
    @Body() { tenlop }: { tenlop: string },
    @Param('id') id,
    @Res()
    res: Response,
  ): Promise<Response> {
    const Class = await this.classService.findOne(id);
    if (!Class) {
      return res.status(409).json({ message: "lophoc doesn't exists" });
    } else {
      Class.tenlop = tenlop;
    }
    const lopChanged = await this.classService.update(Class);
    return res.status(200).json({ lopChanged });
  }
  @Delete('/:id')
  async delete(@Param('id') malop: number): Promise<void> {
    console.log(malop);
    return await this.classService.delete(malop);
  }
}

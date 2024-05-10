import { Controller, Body, Post } from '@nestjs/common';
import { ChitietdslopService } from './chitietdslop.service';
import { ChitietdslopDto } from 'src/data-object/chitietdslop.dto';
@Controller('chitietdslop')
export class ChitietdslopController {
  constructor(private readonly chitietdslopService: ChitietdslopService) {}
  @Post()
  create(@Body() chitietdslopDto: ChitietdslopDto): Promise<void> {
    return this.chitietdslopService.create(chitietdslopDto);
  }
}

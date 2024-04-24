import { Controller, Get } from '@nestjs/common';
import { ChitietdslopService } from './chitietdslop.service';
@Controller('chitietdslop')
export class ChitietdslopController {
  constructor(private readonly chitietdslopService: ChitietdslopService) {}
  @Get()
  create(): Promise<void> {
    return this.chitietdslopService.create();
  }
}

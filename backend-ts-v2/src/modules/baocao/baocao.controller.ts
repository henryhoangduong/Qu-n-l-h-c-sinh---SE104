import { Controller, Get } from '@nestjs/common';

@Controller('baocao')
export class BaocaoController {
  @Get()
  read(): string {
    return 'hello world';
  }
}

import { Body, Controller, Post, Get } from '@nestjs/common';
import { ThamsoDto } from 'src/data-object/thamso.dto';
import { ThamsoService } from './thamso.service';

@Controller('thamso')
export class ThamsoController {
  constructor(private readonly thamsoService: ThamsoService) {}
  @Get()
  read(): any {
    return this.thamsoService.read();
  }
  @Post()
  change(@Body() thamsoDto: ThamsoDto): any {
    this.thamsoService.change(thamsoDto);
  }
}

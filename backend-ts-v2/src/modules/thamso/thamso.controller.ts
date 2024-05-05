import { Body, Controller, Post } from '@nestjs/common';
import { ThamsoDto } from 'src/data-object/thamso.dto';
import { ThamsoService } from './thamso.service';

@Controller('thamso')
export class ThamsoController {
  constructor(private readonly thamsoService: ThamsoService) {}
  @Post()
  change(@Body() thamsoDto: ThamsoDto): any {
    this.thamsoService.change(thamsoDto);
  }
}

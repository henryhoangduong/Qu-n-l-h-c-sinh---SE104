import { Module } from '@nestjs/common';
import { BaocaoService } from './baocao.service';
import { BaocaoController } from './baocao.controller';
import { ClassModule } from '../class/class.module';

@Module({
  imports: [ClassModule],
  providers: [BaocaoService],
  controllers: [BaocaoController],
})
export class BaocaoModule {}

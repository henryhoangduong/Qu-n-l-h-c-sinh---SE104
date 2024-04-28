import { Module } from '@nestjs/common';
import { BaocaoService } from './baocao.service';
import { BaocaoController } from './baocao.controller';

@Module({
  providers: [BaocaoService],
  controllers: [BaocaoController],
})
export class BaocaoModule {}

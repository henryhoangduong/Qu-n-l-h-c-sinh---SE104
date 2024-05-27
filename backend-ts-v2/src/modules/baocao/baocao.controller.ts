import { Controller, Get } from '@nestjs/common';
import { ClassService } from '../class/class.service';

@Controller('baocao')
export class BaocaoController {
  constructor(private readonly classService: ClassService) {}
  @Get('mon')
  async mon(): Promise<any> {
    const classes = await this.classService.findAll();
    const arr = [];
    for (let i = 0; i < classes.length; i++) {
      const currentClass = classes[i];
      const siso = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
      const sld = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
      const tile = Math.round((sld / siso) * 10) / 10;
      arr.push({ lop: currentClass.tenlop, siso: siso, sld: sld, tile: tile });
    }
    return arr;
  }
  @Get('hocki')
  async hocki(): Promise<any> {
    const classes = await this.classService.findAll();
    const arr = [];
    for (let i = 0; i < classes.length; i++) {
      const currentClass = classes[i];
      const siso = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
      const sld = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
      const tile = Math.round((sld / siso) * 10) / 10;
      arr.push({ lop: currentClass.tenlop, siso: siso, sld: sld, tile: tile });
    }
    return arr;
  }
}

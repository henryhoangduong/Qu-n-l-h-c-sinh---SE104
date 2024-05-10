import { Controller, Get } from '@nestjs/common';

@Controller('baocao')
export class BaocaoController {
  @Get('mon')
  mon(): any {
    const arr = [
      { lop: '10A1', siso: 40, sld: 20, tile: 0.5 },
      { lop: '10A2', siso: 40, sld: 20, tile: 0.5 },
      { lop: '10A3', siso: 40, sld: 20, tile: 0.5 },
      { lop: '10A4', siso: 40, sld: 20, tile: 0.5 },
      { lop: '11A1', siso: 40, sld: 20, tile: 0.5 },
      { lop: '11A2', siso: 40, sld: 20, tile: 0.5 },
      { lop: '11A3', siso: 40, sld: 20, tile: 0.5 },
      { lop: '12A1', siso: 40, sld: 20, tile: 0.5 },
      { lop: '12A2', siso: 40, sld: 20, tile: 0.5 },
    ];
    return arr;
  }
  @Get('hocki')
  hocki(): any {
    const arr = [
      { lop: '10A1', siso: 40, sld: 20, tile: 0.5 },
      { lop: '10A2', siso: 40, sld: 20, tile: 0.5 },
      { lop: '10A3', siso: 40, sld: 20, tile: 0.5 },
      { lop: '10A4', siso: 40, sld: 20, tile: 0.5 },
      { lop: '11A1', siso: 40, sld: 20, tile: 0.5 },
      { lop: '11A2', siso: 40, sld: 20, tile: 0.5 },
      { lop: '11A3', siso: 40, sld: 20, tile: 0.5 },
      { lop: '12A1', siso: 40, sld: 20, tile: 0.5 },
      { lop: '12A2', siso: 40, sld: 20, tile: 0.5 },
    ];
    return arr;
  }
}

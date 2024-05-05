import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThamsoDto } from 'src/data-object/thamso.dto';
import { Thamso } from 'src/entities';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class ThamsoService {
  constructor(
    @InjectRepository(Thamso)
    private readonly thamsoRepository: Repository<Thamso>,
  ) {}
  async change(thamso: ThamsoDto): Promise<void> {
    console.log('tham so: ', thamso);
    const options: FindOneOptions<Thamso> = {
      where: {
        mathamso: '5fa3f6c4-bb4a-4927-b8a2-f393f9d1651b',
      },
    };
    const existingThamso = await this.thamsoRepository.findOne(options);
    console.log('existing tham so: ', existingThamso);
    Object.entries(thamso).forEach(([key, value]) => {
      existingThamso[key] = value;
    });
    await this.thamsoRepository.save(existingThamso);
  }
}

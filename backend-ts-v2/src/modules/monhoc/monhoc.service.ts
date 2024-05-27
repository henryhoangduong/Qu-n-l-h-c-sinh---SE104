import { Injectable,NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Monhoc } from 'src/entities';
import { MonhocDto } from 'src/data-object/monhoc.dto';

@Injectable()
export class MonhocService {
  constructor(
    @InjectRepository(Monhoc)
    private readonly monhocRepository: Repository<Monhoc>,
  ) {}
  async findAll(): Promise<Monhoc[]> {
    return await this.monhocRepository.find();
  }
  async findOne(options): Promise<Monhoc> {
    const monhoc = this.monhocRepository.findOne({ where: options });
    return monhoc;
  }
  async update(monhoc: Monhoc): Promise<Monhoc> {
    const monhocChanged = await this.monhocRepository.save(monhoc);
    return monhocChanged;
  }
  async create(monhocDto: MonhocDto): Promise<Monhoc> {
    const Monhoc = {
      ...monhocDto,
      mamonhoc: Math.floor(Math.random() * 100000) + 1,
    };
    const newMonhoc = this.monhocRepository.create(Monhoc);
    return this.monhocRepository.save(newMonhoc);
  }
  async delete(mamonhoc: number): Promise<void> {
    const monhoc = await this.monhocRepository.findOne({ where: { mamonhoc } });
    if (!monhoc) {
      throw new NotFoundException(`Monhoc with mamonhoc ${mamonhoc} not found`);
    }
    await this.monhocRepository.remove(monhoc);
  }
}

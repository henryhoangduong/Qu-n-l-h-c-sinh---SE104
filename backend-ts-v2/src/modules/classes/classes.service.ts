import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from 'src/entitie/entities/Class';
import { Repository } from 'typeorm';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
  ) {}
  findAll(): Promise<Class[]> {
    return this.classRepository.find();
  }

  findOne(id: string): Promise<Class> {
    return this.classRepository.findOne({ where: { id } });
  }
  async create(class_: Class): Promise<Class> {
    const newClass = this.classRepository.create(class_);
    return this.classRepository.save(newClass);
  }
  async update(id: string, class_: Class): Promise<Class> {
    await this.classRepository.update(id, class_);
    return this.classRepository.findOne({ where: { id } });
  }
  async delete(id: string): Promise<void> {
    await this.classRepository.delete(id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entitie/entities/Teacher';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async findOne(id: string): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found`);
    }
    return teacher;
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }

  async create(teacherData: Partial<Teacher>): Promise<Teacher> {
    const teacher = this.teacherRepository.create(teacherData);
    return this.teacherRepository.save(teacher);
  }

  async update(id: string, teacherData: Partial<Teacher>): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found`);
    }
    this.teacherRepository.merge(teacher, teacherData);
    return this.teacherRepository.save(teacher);
  }

  async remove(id: string): Promise<void> {
    const teacher = await this.teacherRepository.findOne({ where: { id } });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${id} not found`);
    }
    await this.teacherRepository.delete(id);
  }
}

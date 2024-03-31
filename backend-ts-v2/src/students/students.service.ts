import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entitie/entities/Student';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // findOne(id: number): Promise<Student> {
  //   return this.studentRepository.findOne(id);
  // }

  // async create(student: Student): Promise<Student> {
  //   const newStudent = this.studentRepository.create(student);
  //   return this.studentRepository.save(newStudent);
  // }

  // async update(id: number, student: Student): Promise<Student> {
  //   await this.studentRepository.update(id, student);
  //   return this.studentRepository.findOne(id);
  // }

  // async delete(id: number): Promise<void> {
  //   await this.studentRepository.delete(id);
  // }
}

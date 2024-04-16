import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../../entitie/entities/Student';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  async logIn(email: string, password: string): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { email } });

    if (!student) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (student.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return student;
  }
  findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }
  async create(student: Student): Promise<Student> {
    const newStudent = this.studentRepository.create(student);
    return this.studentRepository.save(newStudent);
  }

  async update(id: string, student: Student): Promise<Student> {
    await this.studentRepository.update(id, student);
    return this.studentRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}

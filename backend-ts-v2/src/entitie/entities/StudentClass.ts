import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exam } from './Exam';
import { Class } from './Class';
import { Student } from './Student';

@Entity('student_class', { schema: 'public' })
export class StudentClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Exam, (exam) => exam.studentClass)
  exams: Exam[];

  @ManyToOne(() => Class, (classEntity) => classEntity.studentClasses)
  @JoinColumn([{ name: 'class_id', referencedColumnName: 'id' }])
  class: Class;

  @ManyToOne(() => Student, (student) => student.studentClasses)
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  student: Student;
}

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Grade } from './Grade';
import { Teacher } from './Teacher';
import { StudentClass } from './StudentClass';
import { SubjectClass } from './SubjectClass';

@Entity('Class', { schema: 'public' })
export class Class {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('date', { name: 'school_year', nullable: true })
  schoolYear: string | null;

  @ManyToOne(() => Grade, (grade) => grade.classes)
  @JoinColumn([{ name: 'grade', referencedColumnName: 'id' }])
  grade: Grade;

  @ManyToOne(() => Teacher, (teacher) => teacher.classes)
  @JoinColumn([{ name: 'teacher_id', referencedColumnName: 'id' }])
  teacher: Teacher;

  @OneToMany(() => StudentClass, (studentClass) => studentClass.class)
  studentClasses: StudentClass[];

  @OneToMany(() => SubjectClass, (subjectClass) => subjectClass.classs)
  subjectClasses: SubjectClass[];
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentClass } from './StudentClass';
import { SubjectClass } from './SubjectClass';

@Entity('exam', { schema: 'public' })
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('smallint', { name: 'semester', nullable: true })
  semester: number | null;

  @ManyToOne(() => StudentClass, (studentClass) => studentClass.exams)
  @JoinColumn([{ name: 'student_class_id', referencedColumnName: 'id' }])
  studentClass: StudentClass;

  @ManyToOne(() => SubjectClass, (subjectClass) => subjectClass.exams)
  @JoinColumn([{ name: 'subject_class', referencedColumnName: 'id' }])
  subjectClass: SubjectClass;
}

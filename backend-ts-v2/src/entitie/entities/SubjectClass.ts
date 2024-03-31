import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Exam } from './Exam';
import { Class } from './Class';
import { Subject } from './Subject';

@Entity('subject_class', { schema: 'public' })
export class SubjectClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Exam, (exam) => exam.subjectClass)
  exams: Exam[];

  @ManyToOne(() => Class, (classEntity) => classEntity.subjectClasses)
  @JoinColumn([{ name: 'classs_id', referencedColumnName: 'id' }])
  classs: Class;

  @ManyToOne(() => Subject, (subject) => subject.subjectClasses)
  @JoinColumn([{ name: 'subject_id', referencedColumnName: 'id' }])
  subject: Subject;
}

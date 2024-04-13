import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SubjectClass } from './SubjectClass';

@Entity('subject', { schema: 'public' })
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('character varying', { name: 'name', nullable: true })
  name: string | null;

  @OneToMany(() => SubjectClass, (subjectClass) => subjectClass.subject)
  subjectClasses: SubjectClass[];
}

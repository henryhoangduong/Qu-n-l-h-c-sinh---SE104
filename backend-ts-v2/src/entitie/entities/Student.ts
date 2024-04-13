import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { StudentClass } from './StudentClass';

@Entity('Student', { schema: 'public' })
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('character varying', { name: 'email', nullable: true })
  email: string | null;

  @Column('character varying', { name: 'name', nullable: true })
  name: string | null;

  @Column('character varying', { name: 'password', nullable: true })
  password: string | null;

  @Column('character varying', { name: 'avatar', nullable: true })
  avatar: string | null;

  @OneToMany(() => StudentClass, (studentClass) => studentClass.student)
  studentClasses: StudentClass[];
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from './Class';

@Entity('Teacher', { schema: 'public' })
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'dob', nullable: true })
  dob: Date | null;

  @Column('character varying', { name: 'name', nullable: true })
  name: string | null;

  @Column('character varying', { name: 'email', nullable: true })
  email: string | null;

  @Column('character varying', { name: 'phone', nullable: true })
  phone: string | null;

  @Column('character varying', { name: 'hometown', nullable: true })
  hometown: string | null;

  @Column('text', { name: 'password', nullable: true })
  password: string | null;

  @OneToMany(() => Class, (classEntity) => classEntity.teacher)
  classes: Class[];
}

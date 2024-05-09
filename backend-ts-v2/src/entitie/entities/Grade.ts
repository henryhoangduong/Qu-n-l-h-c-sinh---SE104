import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Class } from './Class';

@Entity('Grade', { schema: 'public' })
export class Grade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('character varying', { name: 'name', nullable: true })
  name: string | null;

  @OneToMany(() => Class, (classEntity) => classEntity.grade)
  classes: Class[];
}

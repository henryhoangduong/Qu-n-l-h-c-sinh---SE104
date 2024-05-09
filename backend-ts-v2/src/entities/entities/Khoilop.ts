import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Lop } from './Lop';

@Index('khoilop_pkey', ['makhoilop'], { unique: true })
@Entity('khoilop', { schema: 'public' })
export class Khoilop {
  @Column('integer', { primary: true, name: 'makhoilop' })
  makhoilop: number;

  @Column('character varying', {
    name: 'tenkhoilop',
    nullable: true,
    length: 225,
  })
  tenkhoilop: string | null;

  @OneToMany(() => Lop, (lop) => lop.makhoilop)
  lops: Lop[];
}

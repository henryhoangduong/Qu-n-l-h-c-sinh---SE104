import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Lop } from './Lop';

@Index('chitiettongketmon_pkey', ['mabctkm'], { unique: true })
@Entity('chitiettongketmon', { schema: 'public' })
export class Chitiettongketmon {
  @Column('integer', { primary: true, name: 'mabctkm' })
  mabctkm: number;

  @Column('integer', { name: 'soluongdat', nullable: true })
  soluongdat: number | null;

  @Column('double precision', {
    name: 'tiledat',
    nullable: true,
    precision: 53,
  })
  tiledat: number | null;

  @ManyToOne(() => Lop, (lop) => lop.chitiettongketmons)
  @JoinColumn([{ name: 'malop', referencedColumnName: 'malop' }])
  malop: Lop;
}

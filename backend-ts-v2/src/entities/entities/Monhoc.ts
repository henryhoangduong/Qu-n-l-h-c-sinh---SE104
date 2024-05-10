import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Bangdiemmon } from './Bangdiemmon';
import { Baocaotongketmon } from './Baocaotongketmon';

@Index('monhoc_pkey', ['mamonhoc'], { unique: true })
@Entity('monhoc', { schema: 'public' })
export class Monhoc {
  @Column('integer', { primary: true, name: 'mamonhoc' })
  mamonhoc: number;

  @Column('character varying', {
    name: 'tenmonhoc',
    nullable: true,
    length: 225,
  })
  tenmonhoc: string | null;

  @Column('integer', { name: 'heso', nullable: true })
  heso: number | null;

  @OneToMany(() => Bangdiemmon, (bangdiemmon) => bangdiemmon.mamonhoc)
  bangdiemmons: Bangdiemmon[];

  @OneToMany(
    () => Baocaotongketmon,
    (baocaotongketmon) => baocaotongketmon.mamonhoc,
  )
  baocaotongketmons: Baocaotongketmon[];
}

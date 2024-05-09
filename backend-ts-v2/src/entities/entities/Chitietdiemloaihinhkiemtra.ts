import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Bangdiemmon } from './Bangdiemmon';
import { Hocsinh } from './Hocsinh';
import { Loaihinhkiemtra } from './Loaihinhkiemtra';

@Index(
  'chitietdiemloaihinhkiemtra_pkey',
  ['mabangdiemmon', 'mahocsinh', 'malhkt'],
  { unique: true },
)
@Entity('chitietdiemloaihinhkiemtra', { schema: 'public' })
export class Chitietdiemloaihinhkiemtra {
  @Column('integer', { primary: true, name: 'mabangdiemmon' })
  mabangdiemmon: number;

  @Column('integer', { primary: true, name: 'mahocsinh' })
  mahocsinh: number;

  @Column('integer', { primary: true, name: 'malhkt' })
  malhkt: number;

  @Column('double precision', { name: 'diem', nullable: true, precision: 53 })
  diem: number | null;

  @ManyToOne(
    () => Bangdiemmon,
    (bangdiemmon) => bangdiemmon.chitietdiemloaihinhkiemtras,
  )
  @JoinColumn([
    { name: 'mabangdiemmon', referencedColumnName: 'mabangdiemmon' },
  ])
  mabangdiemmon2: Bangdiemmon;

  @ManyToOne(() => Hocsinh, (hocsinh) => hocsinh.chitietdiemloaihinhkiemtras)
  @JoinColumn([{ name: 'mahocsinh', referencedColumnName: 'mahocsinh' }])
  mahocsinh2: Hocsinh;

  @ManyToOne(
    () => Loaihinhkiemtra,
    (loaihinhkiemtra) => loaihinhkiemtra.chitietdiemloaihinhkiemtras,
  )
  @JoinColumn([{ name: 'malhkt', referencedColumnName: 'malhkt' }])
  malhkt2: Loaihinhkiemtra;

  constructor(partial?: Partial<Chitietdiemloaihinhkiemtra>) {
    Object.assign(this, partial);
  }
}

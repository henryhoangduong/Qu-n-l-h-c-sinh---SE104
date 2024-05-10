import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Bangdiemmon } from './Bangdiemmon';
import { Hocsinh } from './Hocsinh';

@Index('chitietbangdiemmon_pkey', ['mabangdiemmon', 'mahocsinh'], {
  unique: true,
})
@Entity('chitietbangdiemmon', { schema: 'public' })
export class Chitietbangdiemmon {
  @Column('integer', { primary: true, name: 'mabangdiemmon' })
  mabangdiemmon: number;

  @Column('integer', { primary: true, name: 'mahocsinh' })
  mahocsinh: number;

  @Column('double precision', {
    name: 'diemtbmon',
    nullable: true,
    precision: 53,
  })
  diemtbmon: number | null;

  @ManyToOne(
    () => Bangdiemmon,
    (bangdiemmon) => bangdiemmon.chitietbangdiemmons,
  )
  @JoinColumn([
    { name: 'mabangdiemmon', referencedColumnName: 'mabangdiemmon' },
  ])
  mabangdiemmon2: Bangdiemmon;

  @ManyToOne(() => Hocsinh, (hocsinh) => hocsinh.chitietbangdiemmons)
  @JoinColumn([{ name: 'mahocsinh', referencedColumnName: 'mahocsinh' }])
  mahocsinh2: Hocsinh;
}

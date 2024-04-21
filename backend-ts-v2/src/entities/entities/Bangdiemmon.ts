import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Hocki } from './Hocki';
import { Lop } from './Lop';
import { Monhoc } from './Monhoc';
import { Chitietbangdiemmon } from './Chitietbangdiemmon';
import { Chitietdiemloaihinhkiemtra } from './Chitietdiemloaihinhkiemtra';

@Index('bangdiemmon_pkey', ['mabangdiemmon'], { unique: true })
@Entity('bangdiemmon', { schema: 'public' })
export class Bangdiemmon {
  @Column('integer', { primary: true, name: 'mabangdiemmon' })
  mabangdiemmon: number;

  @ManyToOne(() => Hocki, (hocki) => hocki.bangdiemmons)
  @JoinColumn([{ name: 'mahocki', referencedColumnName: 'mahocki' }])
  mahocki: Hocki;

  @ManyToOne(() => Lop, (lop) => lop.bangdiemmons)
  @JoinColumn([{ name: 'malop', referencedColumnName: 'malop' }])
  malop: Lop;

  @ManyToOne(() => Monhoc, (monhoc) => monhoc.bangdiemmons)
  @JoinColumn([{ name: 'mamonhoc', referencedColumnName: 'mamonhoc' }])
  mamonhoc: Monhoc;

  @OneToMany(
    () => Chitietbangdiemmon,
    (chitietbangdiemmon) => chitietbangdiemmon.mabangdiemmon2,
  )
  chitietbangdiemmons: Chitietbangdiemmon[];

  @OneToMany(
    () => Chitietdiemloaihinhkiemtra,
    (chitietdiemloaihinhkiemtra) => chitietdiemloaihinhkiemtra.mabangdiemmon2,
  )
  chitietdiemloaihinhkiemtras: Chitietdiemloaihinhkiemtra[];
}

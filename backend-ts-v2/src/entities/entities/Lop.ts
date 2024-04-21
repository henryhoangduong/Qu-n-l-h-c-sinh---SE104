import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Bangdiemmon } from './Bangdiemmon';
import { Baocaotongkethocki } from './Baocaotongkethocki';
import { Chitietdslop } from './Chitietdslop';
import { Chitiettongketmon } from './Chitiettongketmon';
import { Khoilop } from './Khoilop';

@Index('lop_pkey', ['malop'], { unique: true })
@Entity('lop', { schema: 'public' })
export class Lop {
  @Column('integer', { primary: true, name: 'malop' })
  malop: number;

  @Column('character varying', { name: 'tenlop', nullable: true, length: 225 })
  tenlop: string | null;

  @Column('integer', { name: 'siso', nullable: true })
  siso: number | null;

  @OneToMany(() => Bangdiemmon, (bangdiemmon) => bangdiemmon.malop)
  bangdiemmons: Bangdiemmon[];

  @OneToMany(
    () => Baocaotongkethocki,
    (baocaotongkethocki) => baocaotongkethocki.malop2,
  )
  baocaotongkethockis: Baocaotongkethocki[];

  @OneToMany(() => Chitietdslop, (chitietdslop) => chitietdslop.malop)
  chitietdslops: Chitietdslop[];

  @OneToMany(
    () => Chitiettongketmon,
    (chitiettongketmon) => chitiettongketmon.malop,
  )
  chitiettongketmons: Chitiettongketmon[];

  @ManyToOne(() => Khoilop, (khoilop) => khoilop.lops)
  @JoinColumn([{ name: 'makhoilop', referencedColumnName: 'makhoilop' }])
  makhoilop: Khoilop;
}

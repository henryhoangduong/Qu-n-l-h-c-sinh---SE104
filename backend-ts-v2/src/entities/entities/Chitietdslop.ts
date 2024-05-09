import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Hocki } from './Hocki';
import { Hocsinh } from './Hocsinh';
import { Lop } from './Lop';

@Index('chitietdslop_pkey', ['machitietdslop'], { unique: true })
@Entity('chitietdslop', { schema: 'public' })
export class Chitietdslop {
  @Column('integer', { primary: true, name: 'machitietdslop' })
  machitietdslop: number;

  @Column('double precision', {
    name: 'diemtbhk',
    nullable: true,
    precision: 53,
  })
  diemtbhk: number | null;

  @ManyToOne(() => Hocki, (hocki) => hocki.chitietdslops)
  @JoinColumn([{ name: 'mahocki', referencedColumnName: 'mahocki' }])
  mahocki: Hocki;

  @ManyToOne(() => Hocsinh, (hocsinh) => hocsinh.chitietdslops)
  @JoinColumn([{ name: 'mahocsinh', referencedColumnName: 'mahocsinh' }])
  mahocsinh: Hocsinh;

  @ManyToOne(() => Lop, (lop) => lop.chitietdslops)
  @JoinColumn([{ name: 'malop', referencedColumnName: 'malop' }])
  malop: Lop;
}

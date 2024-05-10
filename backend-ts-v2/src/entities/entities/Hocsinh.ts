import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Chitietbangdiemmon } from './Chitietbangdiemmon';
import { Chitietdiemloaihinhkiemtra } from './Chitietdiemloaihinhkiemtra';
import { Chitietdslop } from './Chitietdslop';

@Index('hocsinh_pkey', ['mahocsinh'], { unique: true })
@Entity('hocsinh', { schema: 'public' })
export class Hocsinh {
  @Column('integer', { primary: true, name: 'mahocsinh' })
  mahocsinh: number;

  @Column('character varying', { name: 'hoten', nullable: true, length: 225 })
  hoten: string | null;

  @Column('boolean', { name: 'gioitinh', nullable: true })
  gioitinh: boolean | null;

  @Column('timestamp without time zone', { name: 'ngaysinh', nullable: true })
  ngaysinh: Date | null;

  @Column('character varying', { name: 'diachi', nullable: true, length: 225 })
  diachi: string | null;

  @Column('character varying', { name: 'email', nullable: true, length: 225 })
  email: string | null;

  @OneToMany(
    () => Chitietbangdiemmon,
    (chitietbangdiemmon) => chitietbangdiemmon.mahocsinh2,
  )
  chitietbangdiemmons: Chitietbangdiemmon[];

  @OneToMany(
    () => Chitietdiemloaihinhkiemtra,
    (chitietdiemloaihinhkiemtra) => chitietdiemloaihinhkiemtra.mahocsinh2,
  )
  chitietdiemloaihinhkiemtras: Chitietdiemloaihinhkiemtra[];

  @OneToMany(() => Chitietdslop, (chitietdslop) => chitietdslop.mahocsinh)
  chitietdslops: Chitietdslop[];
}

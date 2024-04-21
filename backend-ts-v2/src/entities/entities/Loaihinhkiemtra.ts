import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Chitietdiemloaihinhkiemtra } from './Chitietdiemloaihinhkiemtra';

@Index('loaihinhkiemtra_pkey', ['malhkt'], { unique: true })
@Entity('loaihinhkiemtra', { schema: 'public' })
export class Loaihinhkiemtra {
  @Column('integer', { primary: true, name: 'malhkt' })
  malhkt: number;

  @Column('character varying', { name: 'tenlhkt', nullable: true, length: 225 })
  tenlhkt: string | null;

  @Column('integer', { name: 'heso', nullable: true })
  heso: number | null;

  @OneToMany(
    () => Chitietdiemloaihinhkiemtra,
    (chitietdiemloaihinhkiemtra) => chitietdiemloaihinhkiemtra.malhkt2,
  )
  chitietdiemloaihinhkiemtras: Chitietdiemloaihinhkiemtra[];
}

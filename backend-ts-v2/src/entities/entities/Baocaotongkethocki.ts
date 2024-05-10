import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Hocki } from './Hocki';
import { Lop } from './Lop';
import { Namhoc } from './Namhoc';

@Index('baocaotongkethocki_pkey', ['mahocki', 'malop', 'manamhoc'], {
  unique: true,
})
@Entity('baocaotongkethocki', { schema: 'public' })
export class Baocaotongkethocki {
  @Column('integer', { primary: true, name: 'mahocki' })
  mahocki: number;

  @Column('integer', { primary: true, name: 'manamhoc' })
  manamhoc: number;

  @Column('integer', { primary: true, name: 'malop' })
  malop: number;

  @Column('integer', { name: 'soluongdat', nullable: true })
  soluongdat: number | null;

  @Column('double precision', {
    name: 'tiledat',
    nullable: true,
    precision: 53,
  })
  tiledat: number | null;

  @ManyToOne(() => Hocki, (hocki) => hocki.baocaotongkethockis)
  @JoinColumn([{ name: 'mahocki', referencedColumnName: 'mahocki' }])
  mahocki2: Hocki;

  @ManyToOne(() => Lop, (lop) => lop.baocaotongkethockis)
  @JoinColumn([{ name: 'malop', referencedColumnName: 'malop' }])
  malop2: Lop;

  @ManyToOne(() => Namhoc, (namhoc) => namhoc.baocaotongkethockis)
  @JoinColumn([{ name: 'manamhoc', referencedColumnName: 'manamhoc' }])
  manamhoc2: Namhoc;
}

import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Hocki } from './Hocki';
import { Monhoc } from './Monhoc';
import { Namhoc } from './Namhoc';

@Index('baocaotongketmon_pkey', ['mabctkm'], { unique: true })
@Entity('baocaotongketmon', { schema: 'public' })
export class Baocaotongketmon {
  @Column('integer', { primary: true, name: 'mabctkm' })
  mabctkm: number;

  @ManyToOne(() => Hocki, (hocki) => hocki.baocaotongketmons)
  @JoinColumn([{ name: 'mahocki', referencedColumnName: 'mahocki' }])
  mahocki: Hocki;

  @ManyToOne(() => Monhoc, (monhoc) => monhoc.baocaotongketmons)
  @JoinColumn([{ name: 'mamonhoc', referencedColumnName: 'mamonhoc' }])
  mamonhoc: Monhoc;

  @ManyToOne(() => Namhoc, (namhoc) => namhoc.baocaotongketmons)
  @JoinColumn([{ name: 'manamhoc', referencedColumnName: 'manamhoc' }])
  manamhoc: Namhoc;
}

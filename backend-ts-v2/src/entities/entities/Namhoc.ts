import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Baocaotongkethocki } from './Baocaotongkethocki';
import { Baocaotongketmon } from './Baocaotongketmon';

@Index('namhoc_pkey', ['manamhoc'], { unique: true })
@Entity('namhoc', { schema: 'public' })
export class Namhoc {
  @Column('integer', { primary: true, name: 'manamhoc' })
  manamhoc: number;

  @Column('character varying', { name: 'nam1', nullable: true, length: 225 })
  nam1: string | null;

  @Column('character varying', { name: 'nam2', nullable: true, length: 225 })
  nam2: string | null;

  @OneToMany(
    () => Baocaotongkethocki,
    (baocaotongkethocki) => baocaotongkethocki.manamhoc2,
  )
  baocaotongkethockis: Baocaotongkethocki[];

  @OneToMany(
    () => Baocaotongketmon,
    (baocaotongketmon) => baocaotongketmon.manamhoc,
  )
  baocaotongketmons: Baocaotongketmon[];
}

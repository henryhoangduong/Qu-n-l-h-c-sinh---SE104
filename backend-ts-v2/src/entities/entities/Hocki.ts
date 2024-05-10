import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Bangdiemmon } from './Bangdiemmon';
import { Baocaotongkethocki } from './Baocaotongkethocki';
import { Baocaotongketmon } from './Baocaotongketmon';
import { Chitietdslop } from './Chitietdslop';

@Index('hocki_pkey', ['mahocki'], { unique: true })
@Entity('hocki', { schema: 'public' })
export class Hocki {
  @Column('integer', { primary: true, name: 'mahocki' })
  mahocki: number;

  @Column('character varying', {
    name: 'tenhocki',
    nullable: true,
    length: 225,
  })
  tenhocki: string | null;

  @OneToMany(() => Bangdiemmon, (bangdiemmon) => bangdiemmon.mahocki)
  bangdiemmons: Bangdiemmon[];

  @OneToMany(
    () => Baocaotongkethocki,
    (baocaotongkethocki) => baocaotongkethocki.mahocki2,
  )
  baocaotongkethockis: Baocaotongkethocki[];

  @OneToMany(
    () => Baocaotongketmon,
    (baocaotongketmon) => baocaotongketmon.mahocki,
  )
  baocaotongketmons: Baocaotongketmon[];

  @OneToMany(() => Chitietdslop, (chitietdslop) => chitietdslop.mahocki)
  chitietdslops: Chitietdslop[];
}

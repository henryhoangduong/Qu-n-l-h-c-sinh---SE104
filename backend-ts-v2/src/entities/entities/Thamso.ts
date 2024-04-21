import { Column, Entity, Index } from 'typeorm';

@Index('thamso_pkey', ['mathamso'], { unique: true })
@Entity('thamso', { schema: 'public' })
export class Thamso {
  @Column('integer', { name: 'tuoitoithieu', nullable: true })
  tuoitoithieu: number | null;

  @Column('integer', { name: 'tuoitoida', nullable: true })
  tuoitoida: number | null;

  @Column('integer', { name: 'sisotoida', nullable: true })
  sisotoida: number | null;

  @Column('integer', { name: 'diemdat', nullable: true })
  diemdat: number | null;

  @Column('integer', { name: 'diemdatmon', nullable: true })
  diemdatmon: number | null;

  @Column('integer', { name: 'diemtoithieu', nullable: true })
  diemtoithieu: number | null;

  @Column('integer', { name: 'diemtoida', nullable: true })
  diemtoida: number | null;

  @Column('uuid', {
    primary: true,
    name: 'mathamso',
    default: () => 'gen_random_uuid()',
  })
  mathamso: string;
}

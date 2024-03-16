import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class BaseEntity<T> {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isActive: boolean;

  @Column({ type: 'bigint' })
  createdAt: number;

  @Column({ type: 'bigint' })
  updatedAt: number;

  @Column({ type: 'bigint', nullable: true })
  deletedAt: number | null;

  @BeforeInsert()
  setDefaultValuesOnInsert() {
    const currentTime = new Date().getTime();
    this.isActive = true;
    this.createdAt = currentTime;
    this.updatedAt = currentTime;
  }

  @BeforeUpdate()
  setUpdatedAtOnUpdate() {
    const currentTime = new Date().getTime();
    this.updatedAt = currentTime;
    if (!this.isActive && this.deletedAt === null) {
      this.deletedAt = currentTime;
    }
  }

  constructor(partial?: Partial<T>) {
    Object.assign(this, partial);
  }

  toJSON() {
    return {
      ...this,
      createdAt: Number(this.createdAt),
      updatedAt: Number(this.updatedAt),
      deletedAt: this.deletedAt ? Number(this.deletedAt) : null,
    };
  }
}
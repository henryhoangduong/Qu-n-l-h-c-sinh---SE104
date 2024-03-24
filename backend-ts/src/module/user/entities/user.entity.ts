import { Account } from 'src/module/auth/entities/account.entity';
import { BaseEntity } from '../../../core/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Gender } from './gender';
import { Role } from './role';

@Entity('user')
export class User extends BaseEntity<User> {
  @OneToOne(() => Account, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn()
  account: Account;

  @Column({ type: 'enum', enum: Role })
  role: Role;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'bigint' })
  dateOfBirth: number;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column()
  avatarUrl: string;

  toJSON() {
    const baseJson = super.toJSON();
    return {
      ...baseJson,
      dateOfBirth: Number(this.dateOfBirth),
    };
  }
}

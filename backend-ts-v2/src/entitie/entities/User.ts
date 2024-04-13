import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Account } from './Account';

@Entity('user', { schema: 'public' })
export class User {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column('boolean', { name: 'isActive' })
  isActive: boolean;

  @Column('bigint', { name: 'createdAt' })
  createdAt: string;

  @Column('bigint', { name: 'updatedAt' })
  updatedAt: string;

  @Column('bigint', { name: 'deletedAt', nullable: true })
  deletedAt: string | null;

  @Column('enum', { name: 'role', enum: ['student', 'teacher', 'admin'] })
  role: 'student' | 'teacher' | 'admin';

  @Column('character varying', { name: 'email' })
  email: string;

  @Column('character varying', { name: 'firstName' })
  firstName: string;

  @Column('character varying', { name: 'lastName' })
  lastName: string;

  @Column('bigint', { name: 'dateOfBirth' })
  dateOfBirth: string;

  @Column('character varying', { name: 'phone' })
  phone: string;

  @Column('character varying', { name: 'address' })
  address: string;

  @Column('enum', { name: 'gender', enum: ['male', 'female'] })
  gender: 'male' | 'female';

  @Column('character varying', { name: 'avatarUrl' })
  avatarUrl: string;

  @OneToOne(() => Account, (account) => account.user, { onDelete: 'CASCADE' })
  @JoinColumn([{ name: 'accountId', referencedColumnName: 'id' }])
  account: Account;
}

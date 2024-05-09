import { Column, Entity, OneToOne } from 'typeorm';
import { User } from './User';

@Entity('account', { schema: 'public' })
export class Account {
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

  @Column('integer', { name: 'identifierId' })
  identifierId: number;

  @Column('character varying', { name: 'password' })
  password: string;

  @OneToOne(() => User, (user) => user.account)
  user: User;
}

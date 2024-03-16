import { BaseEntity } from '../../../core/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('account')
export class Account extends BaseEntity<Account> {
  @Column()
  identifierId: number;

  @Column()
  password: string;

  toJSON() {
    const baseJson = super.toJSON();
    return {
      ...baseJson,
      identifierId: Number(this.identifierId),
      password: undefined,
    };
  }
}

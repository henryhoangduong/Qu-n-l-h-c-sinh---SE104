import { Injectable } from '@nestjs/common';
import { Account } from 'src/entitie/entities/Account';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class AuthRepository extends Repository<Account> {
  constructor(dataSource: DataSource) {
    super(Account, dataSource.createEntityManager());
  }

  async findByIdentifierId(identifierId: number): Promise<Account | null> {
    const account = await this.findOne({
      where: {
        identifierId: identifierId,
        isActive: true,
      },
    });
    return account;
  }
}

import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Account } from "./entities/account.entity";

@Injectable()
export class AuthRepository extends Repository<Account> {
  constructor(dataSource: DataSource) {
    super(Account, dataSource.createEntityManager());
  }

  findByUsername(username: string) {
    return this.findOne({
      where: {
        username: username,
        is_active: true,
      }
    });
  }

  findById(id: string) {
    return this.findOne({
      where: {
        id: id,
        is_active: true,
      }
    });
  }
}
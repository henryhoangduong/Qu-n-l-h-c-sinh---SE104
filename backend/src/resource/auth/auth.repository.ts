import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Account } from "./entities/account.entity";
import { RegisterLoginDto } from "./dto/register_login.dto";

@Injectable()
export class AuthRepository extends Repository<Account> {
  constructor(dataSource: DataSource) {
    super(Account, dataSource.createEntityManager());
  }
}
import { Exclude } from "class-transformer";
import { BaseEntity } from "src/core/base.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class Account extends BaseEntity<Account> {
  @Column({ unique: true }) 
  username: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;
}
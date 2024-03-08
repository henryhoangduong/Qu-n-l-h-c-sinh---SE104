import { BaseEntity } from "src/core/base.entity";
import { Account } from "src/resource/auth/entities/account.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity()
export class Profile extends BaseEntity<Profile> {
    @OneToOne(() => Account, { onDelete: 'CASCADE' })
    @JoinColumn()
    account: Account;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ type: 'bigint' })
    dateOfBirth: number;

    @Column()
    phoneNumber: string;

    @Column()
    address: string; 
}

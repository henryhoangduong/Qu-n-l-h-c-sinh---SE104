import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AccountEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    accountName!: String;

    @Column()
    password!: String;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}

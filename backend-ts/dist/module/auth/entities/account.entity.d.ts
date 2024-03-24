import { BaseEntity } from '../../../core/base.entity';
export declare class Account extends BaseEntity<Account> {
    identifierId: number;
    password: string;
    toJSON(): this & {
        identifierId: number;
        password: any;
        createdAt: number;
        updatedAt: number;
        deletedAt: number;
    };
}

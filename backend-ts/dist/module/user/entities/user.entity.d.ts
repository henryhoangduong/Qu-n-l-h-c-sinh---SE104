import { Account } from 'src/module/auth/entities/account.entity';
import { BaseEntity } from '../../../core/base.entity';
import { Gender } from './gender';
import { Role } from './role';
export declare class User extends BaseEntity<User> {
    account: Account;
    role: Role;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: number;
    phone: string;
    address: string;
    gender: Gender;
    avatarUrl: string;
    toJSON(): this & {
        dateOfBirth: number;
        createdAt: number;
        updatedAt: number;
        deletedAt: number;
    };
}

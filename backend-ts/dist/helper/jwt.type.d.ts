import { JwtPayload } from 'jsonwebtoken';
import { Account } from 'src/module/auth/entities/account.entity';
import { User } from 'src/module/user/entities/user.entity';
export type JwtType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';
declare module 'jsonwebtoken' {
    interface JwtPayload {
        identifierId: number;
        role: string;
        tokenType: JwtType;
    }
}
export declare const generateTokenPayload: (account: Account, user: User, tokenType: JwtType) => JwtPayload;

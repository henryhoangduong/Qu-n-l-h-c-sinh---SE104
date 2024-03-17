import { JwtPayload } from 'jsonwebtoken';
import { Account } from 'src/module/auth/entities/account.entity';
import { User } from 'src/module/user/entities/user.entity';

export type JwtType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    identifierId: number;
    role: string;
    tokenType: JwtType;
  }
}

export const generateTokenPayload = (
  account: Account,
  user: User,
  tokenType: JwtType,
): JwtPayload => ({
  sub: account.id,
  identifierId: account.identifierId,
  role: user.role,
  tokenType,
});

export type JwtType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    identifierId: number;
    role: string;
    tokenType: JwtType;
  }
}

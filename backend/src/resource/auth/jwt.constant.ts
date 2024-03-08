import { Algorithm } from 'jsonwebtoken';

export const jwtConstants = {
  secret: '6A576E5A7134743777217A25432A462D4A614E645267556B5870327335753878',
  accessTokenExpiry: '1h',
  refreshTokenExpiry: '7d',
  algorithm: 'HS256' as Algorithm,
};

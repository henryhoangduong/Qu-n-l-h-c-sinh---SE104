import { Algorithm } from 'jsonwebtoken';

export const jwtConstants = {
  secret: '6A576E5A7134743777217A25432A462D4A614E645267556B5870327335753878',
  expiredTime: '24h',
  algorithm: 'HS256' as Algorithm,
};

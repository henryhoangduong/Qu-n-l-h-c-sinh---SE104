import { IsNotEmpty } from 'class-validator';

export class RefreshTokenRequestDTO {
  @IsNotEmpty()
  refreshToken: string;

  constructor(partial?: Partial<RefreshTokenRequestDTO>) {
    Object.assign(this, partial);
  }
}

import { User } from 'src/module/user/entities/user.entity';

export class SignInResponseDTO {
  accessToken: string;
  refreshToken: string;
  user: User;

  constructor(partial?: Partial<SignInResponseDTO>) {
    Object.assign(this, partial);
  }
}

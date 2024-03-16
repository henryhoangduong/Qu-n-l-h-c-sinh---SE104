import { IsNotEmpty } from 'class-validator';

export class SignInRequestDTO {
  @IsNotEmpty()
  identifierId: number;

  @IsNotEmpty()
  password: string;

  constructor(partial?: Partial<SignInRequestDTO>) {
    Object.assign(this, partial);
  }
}

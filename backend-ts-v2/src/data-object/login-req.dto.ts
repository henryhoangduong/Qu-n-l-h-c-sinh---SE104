import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginReqDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

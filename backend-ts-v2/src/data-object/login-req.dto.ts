import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginReqDto {
  @IsNotEmpty()
  identifierId: number;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
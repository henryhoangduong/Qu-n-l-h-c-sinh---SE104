import { IsNotEmpty } from 'class-validator';

export class ClassCreateDto {
  @IsNotEmpty()
  tenlop: string;
}

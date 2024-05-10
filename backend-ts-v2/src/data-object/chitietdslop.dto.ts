import { IsNotEmpty, IsNumber, ArrayNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class ChitietdslopDto {
  @IsNotEmpty()
  @IsNumber()
  classid: number;

  @IsNotEmpty()
  @ArrayNotEmpty()
  @Type(() => Number)
  studentlists: number[];
}

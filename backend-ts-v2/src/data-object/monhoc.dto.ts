import { IsNotEmpty } from 'class-validator';
export class MonhocDto {
  @IsNotEmpty()
  tenmonhoc: string;

  heso: number;
}

import { IsNotEmpty } from 'class-validator';
export class MonhocDto {
  @IsNotEmpty()
  tenmonhoc: string;
  @IsNotEmpty()
  heso: number;
}

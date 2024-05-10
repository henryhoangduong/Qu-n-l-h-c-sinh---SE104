import { IsNumber, ValidateIf } from 'class-validator';

export class StudentOptionsDto {
  @ValidateIf((dto) => !dto.hoten && !dto.dtb)
  mahocsinh?: number;

  @ValidateIf((dto) => !dto.mahocsinh && !dto.dtb)
  hoten?: string;

  @ValidateIf((dto) => !dto.mahocsinh && !dto.hoten)
  @IsNumber()
  dtb?: number;
}

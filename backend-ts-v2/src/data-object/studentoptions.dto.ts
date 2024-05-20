import { IsNumber, ValidateIf } from 'class-validator';

export class StudentOptionsDto {
  @ValidateIf((dto) => !dto.hoten && !dto.dtb && !dto.malop)
  mahocsinh?: number;

  @ValidateIf((dto) => !dto.mahocsinh && !dto.dtb && !dto.malop)
  hoten?: string;

  @ValidateIf((dto) => !dto.mahocsinh && !dto.hoten && !dto.malop)
  @IsNumber()
  dtb?: number;

  @ValidateIf((dto) => !dto.mahocsinh && !dto.hoten && !dto.dtb)
  malop?: number;
}

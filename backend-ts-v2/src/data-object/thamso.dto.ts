import { IsNumber, ValidateIf } from 'class-validator';

export class ThamsoDto {
  @ValidateIf(
    (dto) => !dto.tuoitoida && !dto.diemdat && !dto.diemdatmon && !dto.siso,
  )
  @IsNumber()
  tuoitoithieu?: number;

  @ValidateIf(
    (dto) => !dto.tuoitoithieu && !dto.diemdat && !dto.diemdatmon && !dto.siso,
  )
  @IsNumber()
  tuoitoida?: number;

  @ValidateIf(
    (dto) =>
      !dto.tuoitoithieu && !dto.tuoitoida && !dto.diemdatmon && !dto.siso,
  )
  @IsNumber()
  diemdat?: number;

  @ValidateIf(
    (dto) => !dto.tuoitoithieu && !dto.tuoitoida && !dto.diemdat && !dto.siso,
  )
  @IsNumber()
  diemdatmon?: number;

  @ValidateIf(
    (dto) =>
      !dto.tuoitoithieu && !dto.tuoitoida && !dto.diemdat && !dto.diemdatmon,
  )
  @IsNumber()
  siso?: number;
}

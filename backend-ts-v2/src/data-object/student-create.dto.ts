import { IsNotEmpty } from 'class-validator';
import { Timestamp } from 'typeorm';

export class StudentCreateDto {
  @IsNotEmpty()
  hoten: string;
  @IsNotEmpty()
  ngaysinh: Timestamp;
  @IsNotEmpty()
  gioitinh: boolean;
  @IsNotEmpty()
  diachi: string;
  @IsNotEmpty()
  email: string;
}

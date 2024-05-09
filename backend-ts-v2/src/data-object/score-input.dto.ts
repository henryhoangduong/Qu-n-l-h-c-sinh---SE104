import { IsNotEmpty } from "class-validator";

export class ScoreInputDto {
  @IsNotEmpty()
  mabangdiemmon: number;

  @IsNotEmpty()
  mahocsinh: number;

  @IsNotEmpty()
  malhkt: number;

  diem: number;
}
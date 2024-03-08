import { ApiTags } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

@ApiTags('API')
export class CreateProfileDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    dateOfBirth: number;

    @IsNotEmpty()
    phoneNumber: string;

    @IsNotEmpty()
    address: string;
}

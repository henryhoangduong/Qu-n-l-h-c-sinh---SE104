import { ApiTags } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegisterLoginDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}
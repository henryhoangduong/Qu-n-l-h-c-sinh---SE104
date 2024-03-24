import { User } from 'src/module/user/entities/user.entity';
export declare class SignInResponseDTO {
    accessToken: string;
    refreshToken: string;
    user: User;
    constructor(partial?: Partial<SignInResponseDTO>);
}

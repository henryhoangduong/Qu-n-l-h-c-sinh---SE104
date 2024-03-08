import { NotFoundException } from "@nestjs/common";
import { decode } from "jsonwebtoken";
import { AuthRepository } from "src/resource/auth/auth.repository";
import { ProfileRepository } from "src/resource/profile/profile.repository";

export abstract class BaseService {
    async findMyAccount(token: string, authRepository: AuthRepository) {
        const jwtPayload = decode(token);
        const accountId = jwtPayload?.sub as string;  
        const account = await authRepository.findOne({ where: { id: accountId } });
        if (!account) throw new NotFoundException();
        return account;
    }

    async findMyProfile(token: string, profileRepository: ProfileRepository, accountRepository: AuthRepository) {
        const account = await this.findMyAccount(token, accountRepository);
        const profile = await profileRepository.findOne({ where: { account } });
        return profile;
    }
}
import { NotFoundException } from "@nestjs/common";
import { JwtPayload, decode } from "jsonwebtoken";
import { AuthRepository } from "src/resource/auth/auth.repository";
import { ProfileRepository } from "src/resource/profile/profile.repository";

export abstract class BaseService {
    async findMyAccount(token: string, authRepository: AuthRepository) {
        const jwtPayload = decode(token) as JwtPayload;
        const accountId = jwtPayload.sub as string;  
        const account = await authRepository.findById(accountId);
        if (!account) throw new NotFoundException('Account not found!');
        return account;
    }

    async findMyProfile(token: string, profileRepository: ProfileRepository, accountRepository: AuthRepository) {
        const account = await this.findMyAccount(token, accountRepository);
        const profile = await profileRepository.findByAccountId(account.id);
        if (!profile) throw new NotFoundException('Profile not found!');
        return profile;
    }
}
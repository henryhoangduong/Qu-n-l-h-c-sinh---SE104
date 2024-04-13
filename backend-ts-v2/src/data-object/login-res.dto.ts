import { User } from "src/entitie/entities/User";

export class LoginResDto {
  accessToken: string;
  refreshToken: string;
  user: User;
}
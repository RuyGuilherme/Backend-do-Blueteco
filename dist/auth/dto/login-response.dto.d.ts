import { User } from '@prisma/client';
export declare class LoginResponseDto {
    token: string;
    user: User;
}

import { AuthService } from './auth.service';
import { LoginInputDto } from './dto/login-input.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { User } from '@prisma/client';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginInputDto: LoginInputDto): Promise<LoginResponseDto>;
    me(user: User): User;
}

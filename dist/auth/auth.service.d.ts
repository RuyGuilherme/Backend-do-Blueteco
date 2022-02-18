import { PrismaService } from 'src/prisma.service';
import { LoginInputDto } from './dto/login-input.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginResponseDto } from './dto/login-response.dto';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    login(loginInputDto: LoginInputDto): Promise<LoginResponseDto>;
}

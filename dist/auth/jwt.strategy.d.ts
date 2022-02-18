import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prismaService;
    constructor(prismaService: PrismaService);
    validate(payload: {
        email: string;
    }): Promise<User>;
}
export {};

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { email: string }): Promise<User> {
    const validatedUser = await this.prismaService.user.findUnique({
      where: { email: payload.email },
    });

    if (!validatedUser) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    delete validatedUser.password;

    return validatedUser;
  }
}

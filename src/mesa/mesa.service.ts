import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { Mesa, User } from '@prisma/client';
import { ResponseCreateMesaDto } from './dto/response-create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Injectable()
export class MesaService {
  constructor(private prismaService: PrismaService) {}

  async create(user: User, createMesaDto: CreateMesaDto) {
    const menuInfo = await this.prismaService.menu.findUnique({
      where: {
        id: createMesaDto.menu,
      },
    });

    if (!menuInfo) {
      throw new NotFoundException('Iten não encontrado!');
    }

    const createdMesa = await this.prismaService.mesa.create({
      data: {
        start: createMesaDto.start,
        end: createMesaDto.end,
        User: {
          connect: {
            id: user.id,
          },
        },
        Menu: {
          connect: {
            id: createMesaDto.menu,
          },
        },
      },
    });

    const responseCreateMesaDto: ResponseCreateMesaDto = {
      mesaId: createdMesa.id,
      userName: `${user.firstName} ${user.lastName}`,
      userEmail: user.email,
      mesaStart: createdMesa.start,
      mesaEnd: createdMesa.end,
      menuTitle: menuInfo.title,
      menuPrice: menuInfo.price,
      menuDescription: menuInfo.description,
      menuImage: menuInfo.imageUrl,
    };

    return { responseCreateMesaDto };
  }

  async findMany(): Promise<Mesa[]> {
    const mesa = await this.prismaService.mesa.findMany();
    return mesa;
  }

  async findUnique(mesaId: string): Promise<Mesa> {
    const mesaFinded = await this.prismaService.mesa.findUnique({
      where: {
        id: mesaId,
      },
    });

    if (!mesaFinded) {
      throw new NotFoundException('Mesa não encontrada!');
    }

    return mesaFinded;
  }

  async update(mesaId: string, updateMesaDto: UpdateMesaDto): Promise<Mesa> {
    const mesaFinded = await this.prismaService.mesa.findUnique({
      where: {
        id: mesaId,
      },
    });

    if (!mesaFinded) {
      throw new NotFoundException('Mesa não encontrada!');
    }

    const updatedMesa = await this.prismaService.mesa.update({
      where: { id: mesaId },
      data: {},
    });

    return updatedMesa;
  }

  async delete(mesaId: string) {
    const mesaFinded = await this.prismaService.mesa.findUnique({
      where: {
        id: mesaId,
      },
    });

    if (!mesaFinded) {
      throw new NotFoundException('Mesa não encontrada!');
    }

    const deletedMesa = await this.prismaService.mesa.delete({
      where: {
        id: mesaId,
      },
    });

    return deletedMesa;
  }
}

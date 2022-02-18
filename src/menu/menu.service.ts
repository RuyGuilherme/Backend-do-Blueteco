import { Injectable, NotFoundException } from '@nestjs/common';
import { Menu } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private prismaService: PrismaService) {}

  async create(createMenuDto: CreateMenuDto, userId: string) {
    const createdMenu = await this.prismaService.menu.create({
      data: {
        title: createMenuDto.title,
        price: createMenuDto.price,
        description: createMenuDto.description,
        imageUrl: createMenuDto.imageUrl,
        User: {
          connect: {
            id: userId,
          },
    });

    return createdMenu;
  }

  async findMany(): Promise<Menu[]> {
    const menu = await this.prismaService.menu.findMany();
    return menu;
  }

  async findUnique(menuId: string): Promise<Menu> {
    const menuFinded = await this.prismaService.menu.findUnique({
      where: {
        id: menuId,
      },
    });

    if (!menuFinded) {
      throw new NotFoundException('Item não encontrado!');
    }

    return menuFinded;
  }

  async update(menuId: string, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const menuFinded = await this.prismaService.menu.findUnique({
      where: {
        id: menuId,
      },
    });

    if (!menuFinded) {
      throw new NotFoundException('Item não encontrado!');
    }

    const updatedMenu = await this.prismaService.menu.update({
      where: { id: menuId },
      data: {
        title: updateMenuDto.title,
        price: updateMenuDto.price,
        description: updateMenuDto.description,
        imageUrl: updateMenuDto.imageUrl,
      },
    });

    return updatedMenu;
  }

  async delete(menuId: string) {
    const menuFinded = await this.prismaService.menu.findUnique({
      where: {
        id: menuId,
      },
    });

    if (!menuFinded) {
      throw new NotFoundException('Item não encontrado!');
    }

    const deletedMenu = await this.prismaService.menu.delete({
      where: {
        id: menuId,
      },
    });

    return deletedMenu;
  }
}

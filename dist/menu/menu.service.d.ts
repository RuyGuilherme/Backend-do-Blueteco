import { Menu } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createMenuDto: CreateMenuDto, userId: string): Promise<any>;
    findMany(): Promise<Menu[]>;
    findUnique(menuId: string): Promise<Menu>;
    update(menuId: string, updateMenuDto: UpdateMenuDto): Promise<Menu>;
    delete(menuId: string): Promise<any>;
}

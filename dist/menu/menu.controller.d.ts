import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu, User } from '@prisma/client';
import { UpdateMenuDto } from './dto/update-menu.dto';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(createMenuDto: CreateMenuDto, user: User): Promise<any>;
    findMany(): Promise<Menu[]>;
    findUnique(menuId: string): Promise<Menu>;
    update(menuId: string, updateMenuDto: UpdateMenuDto): Promise<Menu>;
    delete(menuId: string): Promise<any>;
}

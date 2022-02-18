"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let MenuService = class MenuService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createMenuDto, userId) {
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
                },
            },
        });
        return createdMenu;
    }
    async findMany() {
        const menu = await this.prismaService.menu.findMany();
        return menu;
    }
    async findUnique(menuId) {
        const menuFinded = await this.prismaService.menu.findUnique({
            where: {
                id: menuId,
            },
        });
        if (!menuFinded) {
            throw new common_1.NotFoundException('Item não encontrado');
        }
        return menuFinded;
    }
    async update(menuId, updateMenuDto) {
        const menuFinded = await this.prismaService.menu.findUnique({
            where: {
                id: menuId,
            },
        });
        if (!menuFinded) {
            throw new common_1.NotFoundException('Item não encontrado');
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
    async delete(menuId) {
        const menuFinded = await this.prismaService.menu.findUnique({
            where: {
                id: menuId,
            },
        });
        if (!menuFinded) {
            throw new common_1.NotFoundException('Item não encontrado');
        }
        const deletedMenu = await this.prismaService.menu.delete({
            where: {
                id: menuId,
            },
        });
        return deletedMenu;
    }
};
MenuService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map
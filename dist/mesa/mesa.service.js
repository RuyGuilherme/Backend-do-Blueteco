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
exports.MesaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let MesaService = class MesaService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(user, createMesaDto) {
        const menuInfo = await this.prismaService.menu.findUnique({
            where: {
                id: createMesaDto.menu,
            },
        });
        if (!menuInfo) {
            throw new common_1.NotFoundException('Iten não encontrado');
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
        const responseCreateMesaDto = {
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
    async findMany() {
        const mesa = await this.prismaService.mesa.findMany();
        return mesa;
    }
    async findUnique(mesaId) {
        const mesaFinded = await this.prismaService.mesa.findUnique({
            where: {
                id: mesaId,
            },
        });
        if (!mesaFinded) {
            throw new common_1.NotFoundException('Mesa não encontrada');
        }
        return mesaFinded;
    }
    async update(mesaId, updateMesaDto) {
        const mesaFinded = await this.prismaService.mesa.findUnique({
            where: {
                id: mesaId,
            },
        });
        if (!mesaFinded) {
            throw new common_1.NotFoundException('Mesa não encontrada');
        }
        const updatedMesa = await this.prismaService.mesa.update({
            where: { id: mesaId },
            data: {},
        });
        return updatedMesa;
    }
    async delete(mesaId) {
        const mesaFinded = await this.prismaService.mesa.findUnique({
            where: {
                id: mesaId,
            },
        });
        if (!mesaFinded) {
            throw new common_1.NotFoundException('Mesa não encontrada');
        }
        const deletedMesa = await this.prismaService.mesa.delete({
            where: {
                id: mesaId,
            },
        });
        return deletedMesa;
    }
};
MesaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MesaService);
exports.MesaService = MesaService;
//# sourceMappingURL=mesa.service.js.map
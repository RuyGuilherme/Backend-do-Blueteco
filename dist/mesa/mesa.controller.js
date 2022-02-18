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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesaController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const logged_user_decorator_1 = require("../auth/logged-user.decorator");
const create_mesa_dto_1 = require("./dto/create-mesa.dto");
const mesa_service_1 = require("./mesa.service");
const update_mesa_dto_1 = require("./dto/update-mesa.dto");
let MesaController = class MesaController {
    constructor(mesaService) {
        this.mesaService = mesaService;
    }
    create(user, createMesaDto) {
        return this.mesaService.create(user, createMesaDto);
    }
    findMany() {
        return this.mesaService.findMany();
    }
    findUnique(mesaId) {
        return this.mesaService.findUnique(mesaId);
    }
    update(mesaId, updateMesaDto) {
        return this.mesaService.update(mesaId, updateMesaDto);
    }
    delete(mesaId) {
        return this.mesaService.delete(mesaId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Criar uma mesa',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, logged_user_decorator_1.LoggedUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _a : Object, create_mesa_dto_1.CreateMesaDto]),
    __metadata("design:returntype", void 0)
], MesaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar Mesa',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MesaController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Listar mesa pelo seu ID',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MesaController.prototype, "findUnique", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiOperation)({
        summary: 'Atualizar mesa',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mesa_dto_1.UpdateMesaDto]),
    __metadata("design:returntype", void 0)
], MesaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiOperation)({
        summary: 'Deletar mesa',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MesaController.prototype, "delete", null);
MesaController = __decorate([
    (0, swagger_1.ApiTags)('mesa'),
    (0, common_1.Controller)('mesa'),
    __metadata("design:paramtypes", [mesa_service_1.MesaService])
], MesaController);
exports.MesaController = MesaController;
//# sourceMappingURL=mesa.controller.js.map
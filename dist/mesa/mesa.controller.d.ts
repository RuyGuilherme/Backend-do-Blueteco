import { Mesa, User } from '@prisma/client';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { MesaService } from './mesa.service';
import { UpdateMesaDto } from './dto/update-mesa.dto';
export declare class MesaController {
    private readonly mesaService;
    constructor(mesaService: MesaService);
    create(user: User, createMesaDto: CreateMesaDto): Promise<{
        responseCreateMesaDto: import("./dto/response-create-mesa.dto").ResponseCreateMesaDto;
    }>;
    findMany(): Promise<Mesa[]>;
    findUnique(mesaId: string): Promise<Mesa>;
    update(mesaId: string, updateMesaDto: UpdateMesaDto): Promise<Mesa>;
    delete(mesaId: string): Promise<any>;
}

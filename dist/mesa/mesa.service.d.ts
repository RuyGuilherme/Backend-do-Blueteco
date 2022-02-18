import { PrismaService } from 'src/prisma.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { Mesa, User } from '@prisma/client';
import { ResponseCreateMesaDto } from './dto/response-create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
export declare class MesaService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(user: User, createMesaDto: CreateMesaDto): Promise<{
        responseCreateMesaDto: ResponseCreateMesaDto;
    }>;
    findMany(): Promise<Mesa[]>;
    findUnique(mesaId: string): Promise<Mesa>;
    update(mesaId: string, updateMesaDto: UpdateMesaDto): Promise<Mesa>;
    delete(mesaId: string): Promise<any>;
}

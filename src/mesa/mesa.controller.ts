import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Patch,
  Param,
  Delete,
} 

from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Mesa, User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { MesaService } from './mesa.service';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@ApiTags('mesa')
@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Post()

  @ApiOperation({
    summary: 'Criar uma mesa',
  })
  
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create(@LoggedUser() user: User, @Body() createMesaDto: CreateMesaDto) {
    return this.mesaService.create(user, createMesaDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar Mesa',
  })
  findMany(): Promise<Mesa[]> {
    return this.mesaService.findMany();
  }

  @Get(':id')

  @ApiOperation({
    summary: 'Listar mesa pelo seu ID',
  })
  findUnique(@Param('id') mesaId: string): Promise<Mesa> {
    return this.mesaService.findUnique(mesaId);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Atualizar mesa',
  })

  @ApiBearerAuth()
  update(@Param('id') mesaId: string, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.update(mesaId, updateMesaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Deletar mesa',
  })

  @ApiBearerAuth()
  delete(@Param('id') mesaId: string) {
    return this.mesaService.delete(mesaId);
  }
}

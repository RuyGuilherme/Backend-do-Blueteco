import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Patch,
  Delete,
} 

from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { Menu, User } from '@prisma/client';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateMenuDto } from './dto/update-menu.dto';

@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Criar Menu',
  })

  @ApiBearerAuth()
  create(@Body() createMenuDto: CreateMenuDto, @LoggedUser() user: User) {
    return this.menuService.create(createMenuDto, user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar Menu',
  })

  findMany(): Promise<Menu[]> {
    return this.menuService.findMany();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar um item pelo seu ID',
  })

  findUnique(@Param('id') menuId: string): Promise<Menu> {
    return this.menuService.findUnique(menuId);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Atualizar o Item',
  })
  
  @ApiBearerAuth()
  update(@Param('id') menuId: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(menuId, updateMenuDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Deletar item',
  })

  @ApiBearerAuth()
  delete(@Param('id') menuId: string) {
    return this.menuService.delete(menuId);
  }
}

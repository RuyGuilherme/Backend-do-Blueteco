import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMesaDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  menu: string;
}

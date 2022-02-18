import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsUrl,
  IsArray,
} 

from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMenuDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  description: string;

  @IsUrl()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  imageUrl: string;

}

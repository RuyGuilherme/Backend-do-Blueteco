import {
  IsString,
  IsEmail,
  IsDateString,
  IsUrl,
  IsNotEmpty,
  IsNumber,
} 

from 'class-validator';

export class ResponseCreateMesaDto {
  @IsString()
  @IsNotEmpty()
  mesaId: string;

  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  userEmail: string;

  @IsDateString()
  @IsNotEmpty()
  mesaStart: Date;

  @IsDateString()
  @IsNotEmpty()
  mesaEnd: Date;

  @IsString()
  @IsNotEmpty()
  menuTitle: string;

  @IsNumber()
  @IsNotEmpty()
  menuPrice: number;

  @IsString()
  @IsNotEmpty()
  menuDescription: string;

  @IsUrl()
  @IsNotEmpty()
  menuImage: string;
}

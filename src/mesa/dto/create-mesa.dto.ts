import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export class CreateMesaDto {
  @IsDateString()
  @ApiProperty()
  start: Date;

  @IsDateString()
  @ApiProperty()
  end: Date;

  @IsString()
  @ApiProperty()
  menu: string;
}

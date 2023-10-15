import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Паркинг', description: 'Название проекта' })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @ApiProperty({
    example: 'СПб, Садовая ул, д.1.',
    description: 'Адрес проекта',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly adress: string;

  @ApiProperty({
    example: '1',
    description: 'Id пользователя',
  })
  @IsNumber()
  readonly userId: number;
}

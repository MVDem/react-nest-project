import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePlcDto {
  @ApiProperty({
    example: 'Контроллер в РУ-0.4кВ',
    description: 'Название конроллера',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @ApiProperty({
    example: 'http://localhost:5000/',
    description: 'Ссылка на контроллер',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly url: string;

  @ApiProperty({
    example: 'Electricity',
    description: 'Тип системы',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly system: string;

  @ApiProperty({
    example: '1',
    description: 'Id проекта',
  })
  @IsNumber()
  readonly projectId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class EditUser {
  @ApiProperty({ example: 'Token', description: 'Токен ползователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly token: string;

  @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string;

  @ApiProperty({ example: 'Иванов', description: 'Фамилия' })
  @IsString({ message: 'Должно быть строкой' })
  readonly lastName: string;

  @ApiProperty({ example: '+79998887766', description: 'Номер телефона' })
  @IsString({ message: 'Должно быть строкой' })
  readonly phone: string;

  @ApiProperty({
    example: 'ООО "Зеленглазое такси"',
    description: 'Название компании',
  })
  @IsString({ message: 'Должно быть строкой' })
  readonly сompanyName: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почта' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly password: string;

  @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  // @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
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

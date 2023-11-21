import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class AddAvatar {
  @ApiProperty({ example: 'Token', description: 'Токен ползователя' })
  @IsString({ message: 'Должно быть строкой' })
  readonly token: string;
}

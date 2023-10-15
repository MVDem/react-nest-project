import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GetUser {
  @ApiProperty({ example: '1', description: 'Id пользователя' })
  @IsNumber({}, { message: 'Должно быть числом' })
  userId: number;
}

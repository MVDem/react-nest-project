import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class GetAllProjectsForOneDto {
  @ApiProperty({
    example: '1',
    description: 'Id пользователя',
  })
  @IsNumber()
  readonly userId: number;
}

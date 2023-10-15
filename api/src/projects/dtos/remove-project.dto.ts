import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RemoveProjectDto {
  @ApiProperty({
    example: '1',
    description: 'Id проекта',
  })
  @IsNumber()
  readonly projectId: number;

  @ApiProperty({
    example: '1',
    description: 'Id пользователя',
  })
  @IsNumber()
  readonly userId: number;
}

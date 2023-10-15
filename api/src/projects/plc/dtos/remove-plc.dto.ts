import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RemovePlcDto {
  @ApiProperty({
    example: '1',
    description: 'Id контроллера',
  })
  @IsNumber()
  readonly plcId: number;

  @ApiProperty({
    example: '1',
    description: 'Id проекта',
  })
  @IsNumber()
  readonly projectId: number;
}

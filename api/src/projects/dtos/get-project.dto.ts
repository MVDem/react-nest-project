import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class GetProjectDto {
  @ApiProperty({
    example: '1',
    description: 'Id проекта',
  })
  @IsNumber()
  readonly projectId: number;
}

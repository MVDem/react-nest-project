import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class GetPlcDto {
  @ApiProperty({
    example: '1',
    description: 'Id контроллера',
  })
  @IsNumber()
  readonly plcId: number;
}

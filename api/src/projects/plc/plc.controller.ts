import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { CreatePlcDto } from './dtos/create-plc.dto';
import { PlcService } from './plc.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/users/auth/roles-auth.decorator';
import { Plc } from './plc.model';
import { RolesGuard } from 'src/users/auth/roles.guard';
import { RemovePlcDto } from './dtos/remove-plc.dto';
import { GetPlcDto } from './dtos/get-plc.dto';

@ApiTags('Контроллеры')
@Controller('plc')
export class PlcController {
  constructor(private readonly plcService: PlcService) {}

  @ApiOperation({ summary: 'Добавление контроллера' })
  @ApiResponse({ status: 200, type: Plc })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  createPlc(@Body() dto: CreatePlcDto) {
    return this.plcService.createPlc(dto);
  }

  @ApiOperation({ summary: 'Удаление контроллера' })
  @ApiResponse({ status: 200, type: Plc })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete()
  remove(@Body() projectDto: RemovePlcDto) {
    return this.plcService.removePlc(projectDto);
  }

  @ApiOperation({ summary: 'Получить данные о контроллере' })
  @ApiResponse({ status: 200, type: Plc })
  @Roles('ADMIN', 'USER')
  @UseGuards(RolesGuard)
  @Post('/detales')
  getPlc(@Body() projectDto: GetPlcDto) {
    return this.plcService.getPlc(projectDto);
  }
}

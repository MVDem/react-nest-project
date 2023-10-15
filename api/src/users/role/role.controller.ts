import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RolesService } from './role.service';
import { CreateRoleDto } from './dtos/create-role.dto';
import { Role } from './roles.model';

// @ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  // @ApiOperation({ summary: 'Создание роли' })
  // @ApiResponse({ status: 200, type: Role })
  // @Post()
  // create(@Body() dto: CreateRoleDto) {
  //   return this.roleService.createRole(dto);
  // }

  // @ApiOperation({ summary: 'Получение роли' })
  // @ApiResponse({ status: 200, type: Role })
  // @Get('/:value')
  // getByValue(@Param('value') value: string) {
  //   return this.roleService.getRoleByValue(value);
  // }

  //@ApiOperation({ summary: 'Получить всех пользователей' })
  //@ApiResponse({ status: 200, type: [Role] })
  //@Get()
  //getAll() {
  //  return this.roleService.getAllRoles();
  //}
}

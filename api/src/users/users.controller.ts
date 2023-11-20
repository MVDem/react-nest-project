import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { Roles } from './auth/roles-auth.decorator';
import { RolesGuard } from './auth/roles.guard';
import { AddRoleDto } from './dtos/add-role.dto';
import { BanUserDto } from './dtos/ban-user.dto';
import { UnBlockUserDto } from './dtos/unblock-user.dto';
import { CreateRoleDto } from './role/dtos/create-role.dto';
import { RolesService } from './role/role.service';
import { Role } from './role/roles.model';
import { GetUser } from './dtos/get-user';
import { RemoveUserDto } from './dtos/remove-user.dto';
import { EditUser } from './dtos/EditUser.dto';

@ApiTags('Админ')
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private roleService: RolesService
  ) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Изменить данные о пользователе' })
  @ApiResponse({ status: 200, type: User })
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Put('/detales/editUser')
  editUser(@Body() dto: EditUser) {
    return this.usersService.editUser(dto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Delete()
  remove(@Body() userDto: RemoveUserDto) {
    return this.usersService.removeUser(userDto);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получить одного пользователя' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN', 'USER')
  @UseGuards(RolesGuard)
  @Post('/detales')
  getOne(@Body() dto: GetUser) {
    return this.usersService.getUserById(dto);
  }

  @ApiOperation({ summary: 'Создание роли' })
  @ApiResponse({ status: 200, type: Role })
  @Post('/role/create')
  createRole(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role/add')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Забрать роль' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role/remove')
  removeRole(@Body() dto: AddRoleDto) {
    return this.usersService.removeRole(dto);
  }

  @ApiOperation({ summary: 'Забанить пользователя' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban/add')
  ban(@Body() dto: BanUserDto) {
    return this.usersService.ban(dto);
  }

  @ApiOperation({ summary: 'Разбанить пользователя' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban/remove')
  unBlock(@Body() dto: UnBlockUserDto) {
    return this.usersService.unBlock(dto);
  }
}

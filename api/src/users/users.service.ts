import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dtos/create-user.dto';
import { RolesService } from './role/role.service';
import { AddRoleDto } from './dtos/add-role.dto';
import { BanUserDto } from './dtos/ban-user.dto';
import { UnBlockUserDto } from './dtos/unblock-user.dto';
import { GetUser } from './dtos/get-user';
import { RemoveUserDto } from './dtos/remove-user.dto';
import { EditUser } from './dtos/EditUser.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AddAvatar } from './dtos/AddAvatar.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
    private jwtService: JwtService
  ) {}

  async addAvatar(avatar, dto: AddAvatar) {
    const token = dto.token;
    const userId = this.jwtService.verify(token).id;

    if (!userId) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Пользователь не найден',
        },
        HttpStatus.NOT_FOUND
      );
    }

    const path = avatar.path.split('/').slice(1).join('/');

    await this.userRepository.update(
      { avatar: path },
      { where: { id: userId } }
    );

    const updatedUser = await this.userRepository.findByPk(userId);

    return updatedUser;
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('ADMIN');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    user.avatar = 'avatars/avatarDefault.jpg';
    return user;
  }

  async editUser(dto: EditUser) {
    const token = dto.token;
    if (!token) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Пользователь не найден',
        },
        HttpStatus.NOT_FOUND
      );
    }

    const userId = this.jwtService.verify(token).id;
    const user = await this.userRepository.findByPk(userId);

    for (let key in dto) {
      if (key !== 'token') {
        user[key] = dto[key];
      }
    }

    const { name, lastName, phone } = user;

    this.userRepository.update(
      { name: name, lastName: lastName, phone: phone },
      { where: { id: userId } }
    );

    return user;
  }

  async removeUser(dto: RemoveUserDto) {
    const id = dto.userId;
    const user = await this.userRepository.findByPk(dto.userId);
    if (user) {
      await this.userRepository.destroy({ where: { id } });
    }
    return dto;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async getUserById(dto: GetUser) {
    const id = dto.userId;
    const user = await this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return user;
  }

  async removeRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$remove('role', role.id);
      return dto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND
    );
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND
    );
  }

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }
    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();
    return user;
  }

  async unBlock(dto: UnBlockUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);
    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }
    user.banned = false;
    user.banReason = null;
    await user.save();
    return user;
  }
}

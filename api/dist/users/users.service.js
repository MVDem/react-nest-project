"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
const sequelize_1 = require("@nestjs/sequelize");
const role_service_1 = require("./role/role.service");
let UsersService = class UsersService {
    constructor(userRepository, roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('ADMIN');
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async removeUser(dto) {
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
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }
    async getUserById(dto) {
        const id = dto.userId;
        const user = await this.userRepository.findOne({
            where: { id },
            include: { all: true },
        });
        return user;
    }
    async removeRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$remove('role', role.id);
            return dto;
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async addRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async ban(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
    async unBlock(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        if (!user) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        user.banned = false;
        user.banReason = null;
        await user.save();
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, role_service_1.RolesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
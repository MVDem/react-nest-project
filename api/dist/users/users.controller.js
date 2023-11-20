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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dtos/create-user.dto");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("./users.model");
const roles_auth_decorator_1 = require("./auth/roles-auth.decorator");
const roles_guard_1 = require("./auth/roles.guard");
const add_role_dto_1 = require("./dtos/add-role.dto");
const ban_user_dto_1 = require("./dtos/ban-user.dto");
const unblock_user_dto_1 = require("./dtos/unblock-user.dto");
const create_role_dto_1 = require("./role/dtos/create-role.dto");
const role_service_1 = require("./role/role.service");
const roles_model_1 = require("./role/roles.model");
const get_user_1 = require("./dtos/get-user");
const remove_user_dto_1 = require("./dtos/remove-user.dto");
const EditUser_dto_1 = require("./dtos/EditUser.dto");
let UsersController = class UsersController {
    constructor(usersService, roleService) {
        this.usersService = usersService;
        this.roleService = roleService;
    }
    create(userDto) {
        return this.usersService.createUser(userDto);
    }
    editUser(dto) {
        return this.usersService.editUser(dto);
    }
    remove(userDto) {
        return this.usersService.removeUser(userDto);
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    getOne(dto) {
        return this.usersService.getUserById(dto);
    }
    createRole(dto) {
        return this.roleService.createRole(dto);
    }
    addRole(dto) {
        return this.usersService.addRole(dto);
    }
    removeRole(dto) {
        return this.usersService.removeRole(dto);
    }
    ban(dto) {
        return this.usersService.ban(dto);
    }
    unBlock(dto) {
        return this.usersService.unBlock(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Изменить данные о пользователе' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User }),
    (0, roles_auth_decorator_1.Roles)('USER'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)('/detales/editUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EditUser_dto_1.EditUser]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "editUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: users_model_1.User }),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remove_user_dto_1.RemoveUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить всех пользователей' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_model_1.User] }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить одного пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [users_model_1.User] }),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/detales'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_1.GetUser]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание роли' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: roles_model_1.Role }),
    (0, common_1.Post)('/role/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Выдать роль' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/role/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Забрать роль' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/role/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Забанить пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/ban/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "ban", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Разбанить пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/ban/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unblock_user_dto_1.UnBlockUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "unBlock", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Админ'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        role_service_1.RolesService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
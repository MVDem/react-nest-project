"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const roles_model_1 = require("./roles.model");
const users_model_1 = require("../users.model");
const user_roles_model_1 = require("./user-roles.model");
const role_controller_1 = require("./role.controller");
const role_service_1 = require("./role.service");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    (0, common_1.Module)({
        controllers: [role_controller_1.RolesController],
        providers: [role_service_1.RolesService],
        imports: [sequelize_1.SequelizeModule.forFeature([roles_model_1.Role, users_model_1.User, user_roles_model_1.UserRoles])],
        exports: [role_service_1.RolesService],
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map
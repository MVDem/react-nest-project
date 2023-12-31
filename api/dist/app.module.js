"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const users_model_1 = require("./users/users.model");
const roles_model_1 = require("./users/role/roles.model");
const user_roles_model_1 = require("./users/role/user-roles.model");
const projects_module_1 = require("./projects/projects.module");
const project_model_1 = require("./projects/project.model");
const plc_model_1 = require("./projects/plc/plc.model");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRESS_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [users_model_1.User, roles_model_1.Role, user_roles_model_1.UserRoles, project_model_1.Project, plc_model_1.Plc],
                autoLoadModels: true,
                logging: false,
            }),
            users_module_1.UsersModule,
            projects_module_1.ProjectsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
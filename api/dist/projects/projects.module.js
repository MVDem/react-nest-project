"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const projects_controller_1 = require("./projects.controller");
const projects_service_1 = require("./projects.service");
const project_model_1 = require("./project.model");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
const plc_module_1 = require("./plc/plc.module");
const plc_model_1 = require("./plc/plc.model");
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = __decorate([
    (0, common_1.Module)({
        controllers: [projects_controller_1.ProjectsController],
        providers: [projects_service_1.ProjectsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, project_model_1.Project, plc_model_1.Plc]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '24h',
                },
            }),
            plc_module_1.PlcModule,
        ],
        exports: [projects_service_1.ProjectsService],
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map
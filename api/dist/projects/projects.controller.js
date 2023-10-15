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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const projects_service_1 = require("./projects.service");
const create_project_dto_1 = require("./dtos/create-project.dto");
const project_model_1 = require("./project.model");
const roles_auth_decorator_1 = require("../users/auth/roles-auth.decorator");
const roles_guard_1 = require("../users/auth/roles.guard");
const remove_project_dto_1 = require("./dtos/remove-project.dto");
const get_project_dto_1 = require("./dtos/get-project.dto");
const get_all_projects_for_one_dto_1 = require("./dtos/get-all-projects-for-one.dto");
let ProjectsController = class ProjectsController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    create(projectDto) {
        return this.projectService.createProject(projectDto);
    }
    remove(projectDto) {
        return this.projectService.removeProject(projectDto);
    }
    getOne(dto) {
        return this.projectService.getProjectById(dto);
    }
    getAllForOne(dto) {
        return this.projectService.getAllProjectsById(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание проекта' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: project_model_1.Project }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление проекта' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: project_model_1.Project }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remove_project_dto_1.RemoveProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить один проект' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [project_model_1.Project] }),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/detales'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_project_dto_1.GetProjectDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все проекты одного пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [project_model_1.Project] }),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/allforone'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_projects_for_one_dto_1.GetAllProjectsForOneDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "getAllForOne", null);
ProjectsController = __decorate([
    (0, swagger_1.ApiTags)('Проект'),
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map
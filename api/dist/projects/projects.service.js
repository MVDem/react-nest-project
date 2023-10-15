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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const project_model_1 = require("./project.model");
const users_service_1 = require("../users/users.service");
const get_user_1 = require("../users/dtos/get-user");
let ProjectsService = class ProjectsService {
    constructor(projectsRepository, userService) {
        this.projectsRepository = projectsRepository;
        this.userService = userService;
    }
    async createProject(dto) {
        const project = await this.projectsRepository.create(dto);
        return project;
    }
    async removeProject(dto) {
        const dtoUser = new get_user_1.GetUser();
        dtoUser.userId = dto.userId;
        const user = await this.userService.getUserById(dtoUser);
        const id = dto.projectId;
        const project = await this.projectsRepository.findOne({ where: { id } });
        if (project && user) {
            await this.projectsRepository.destroy({
                where: { id },
                force: true,
            });
            return dto;
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async getProjectById(dto) {
        const id = dto.projectId;
        const project = await this.projectsRepository.findOne({
            where: { id },
            include: { all: true },
        });
        return project;
    }
    async getAllProjectsById(dto) {
        const userId = dto.userId;
        const project = await this.projectsRepository.findAll({
            where: { userId },
            include: { all: true },
        });
        return project;
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(project_model_1.Project)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map
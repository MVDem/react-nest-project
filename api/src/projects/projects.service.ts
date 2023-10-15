import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './project.model';
import { RemoveProjectDto } from './dtos/remove-project.dto';
import { UsersService } from 'src/users/users.service';
import { GetUser } from 'src/users/dtos/get-user';
import { GetProjectDto } from './dtos/get-project.dto';
import { GetAllProjectsForOneDto } from './dtos/get-all-projects-for-one.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project) private projectsRepository: typeof Project,
    private userService: UsersService
  ) {}

  async createProject(dto: CreateProjectDto) {
    const project = await this.projectsRepository.create(dto);
    return project;
  }

  async removeProject(dto: RemoveProjectDto) {
    const dtoUser = new GetUser();
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
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND
    );
  }

  async getProjectById(dto: GetProjectDto) {
    const id = dto.projectId;
    const project = await this.projectsRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return project;
  }

  async getAllProjectsById(dto: GetAllProjectsForOneDto) {
    const userId = dto.userId;
    const project = await this.projectsRepository.findAll({
      where: { userId },
      include: { all: true },
    });
    return project;
  }
}

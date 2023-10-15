import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dtos/create-project.dto';
import { Project } from './project.model';
import { Roles } from 'src/users/auth/roles-auth.decorator';
import { RolesGuard } from 'src/users/auth/roles.guard';
import { RemoveProjectDto } from './dtos/remove-project.dto';
import { GetProjectDto } from './dtos/get-project.dto';
import { GetAllProjectsForOneDto } from './dtos/get-all-projects-for-one.dto';

@ApiTags('Проект')
@Controller('projects')
export class ProjectsController {
  constructor(private projectService: ProjectsService) {}

  @ApiOperation({ summary: 'Создание проекта' })
  @ApiResponse({ status: 200, type: Project })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() projectDto: CreateProjectDto) {
    return this.projectService.createProject(projectDto);
  }

  @ApiOperation({ summary: 'Удаление проекта' })
  @ApiResponse({ status: 200, type: Project })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete()
  remove(@Body() projectDto: RemoveProjectDto) {
    return this.projectService.removeProject(projectDto);
  }

  @ApiOperation({ summary: 'Получить один проект' })
  @ApiResponse({ status: 200, type: [Project] })
  @Roles('ADMIN', 'USER')
  @UseGuards(RolesGuard)
  @Post('/detales')
  getOne(@Body() dto: GetProjectDto) {
    return this.projectService.getProjectById(dto);
  }

  @ApiOperation({ summary: 'Получить все проекты одного пользователя' })
  @ApiResponse({ status: 200, type: [Project] })
  @Roles('ADMIN', 'USER')
  @UseGuards(RolesGuard)
  @Post('/allforone')
  getAllForOne(@Body() dto: GetAllProjectsForOneDto) {
    return this.projectService.getAllProjectsById(dto);
  }
}

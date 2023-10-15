import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dtos/create-project.dto';
import { Project } from './project.model';
import { RemoveProjectDto } from './dtos/remove-project.dto';
import { GetProjectDto } from './dtos/get-project.dto';
import { GetAllProjectsForOneDto } from './dtos/get-all-projects-for-one.dto';
export declare class ProjectsController {
    private projectService;
    constructor(projectService: ProjectsService);
    create(projectDto: CreateProjectDto): Promise<Project>;
    remove(projectDto: RemoveProjectDto): Promise<RemoveProjectDto>;
    getOne(dto: GetProjectDto): Promise<Project>;
    getAllForOne(dto: GetAllProjectsForOneDto): Promise<Project[]>;
}

import { CreateProjectDto } from './dtos/create-project.dto';
import { Project } from './project.model';
import { RemoveProjectDto } from './dtos/remove-project.dto';
import { UsersService } from 'src/users/users.service';
import { GetProjectDto } from './dtos/get-project.dto';
import { GetAllProjectsForOneDto } from './dtos/get-all-projects-for-one.dto';
export declare class ProjectsService {
    private projectsRepository;
    private userService;
    constructor(projectsRepository: typeof Project, userService: UsersService);
    createProject(dto: CreateProjectDto): Promise<Project>;
    removeProject(dto: RemoveProjectDto): Promise<RemoveProjectDto>;
    getProjectById(dto: GetProjectDto): Promise<Project>;
    getAllProjectsById(dto: GetAllProjectsForOneDto): Promise<Project[]>;
}

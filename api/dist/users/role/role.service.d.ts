import { Role } from './roles.model';
import { CreateRoleDto } from './dtos/create-role.dto';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
}

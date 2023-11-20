import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.model';
import { AddRoleDto } from './dtos/add-role.dto';
import { BanUserDto } from './dtos/ban-user.dto';
import { UnBlockUserDto } from './dtos/unblock-user.dto';
import { CreateRoleDto } from './role/dtos/create-role.dto';
import { RolesService } from './role/role.service';
import { Role } from './role/roles.model';
import { GetUser } from './dtos/get-user';
import { RemoveUserDto } from './dtos/remove-user.dto';
import { EditUser } from './dtos/EditUser.dto';
export declare class UsersController {
    private usersService;
    private roleService;
    constructor(usersService: UsersService, roleService: RolesService);
    create(userDto: CreateUserDto): Promise<User>;
    editUser(dto: EditUser): Promise<User>;
    remove(userDto: RemoveUserDto): Promise<RemoveUserDto>;
    getAll(): Promise<User[]>;
    getOne(dto: GetUser): Promise<User>;
    createRole(dto: CreateRoleDto): Promise<Role>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    removeRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
    unBlock(dto: UnBlockUserDto): Promise<User>;
}

import { User } from './users.model';
import { CreateUserDto } from './dtos/create-user.dto';
import { RolesService } from './role/role.service';
import { AddRoleDto } from './dtos/add-role.dto';
import { BanUserDto } from './dtos/ban-user.dto';
import { UnBlockUserDto } from './dtos/unblock-user.dto';
import { GetUser } from './dtos/get-user';
import { RemoveUserDto } from './dtos/remove-user.dto';
import { EditUser } from './dtos/EditUser.dto';
import { JwtService } from '@nestjs/jwt';
import { AddAvatar } from './dtos/AddAvatar.dto';
export declare class UsersService {
    private userRepository;
    private roleService;
    private jwtService;
    constructor(userRepository: typeof User, roleService: RolesService, jwtService: JwtService);
    addAvatar(avatar: any, dto: AddAvatar): Promise<User>;
    createUser(dto: CreateUserDto): Promise<User>;
    editUser(dto: EditUser): Promise<User>;
    removeUser(dto: RemoveUserDto): Promise<RemoveUserDto>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(dto: GetUser): Promise<User>;
    removeRole(dto: AddRoleDto): Promise<AddRoleDto>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
    unBlock(dto: UnBlockUserDto): Promise<User>;
}

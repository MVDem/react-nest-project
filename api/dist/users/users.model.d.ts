import { Model } from 'sequelize-typescript';
import { Role } from './role/roles.model';
import { Project } from 'src/projects/project.model';
interface UserCreationAttrs {
    email: string;
    password: string;
    name: string;
    lastName: string;
    phone: string;
    сompanyName: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    name: string;
    lastName: string;
    phone: string;
    сompanyName: string;
    avatar: string;
    banned: boolean;
    banReason: string;
    roles: Role[];
    projects: Project[];
}
export {};

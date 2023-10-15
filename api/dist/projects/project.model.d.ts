import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Plc } from './plc/plc.model';
interface ProjectCreationAttrs {
    name: string;
    adress: string;
    userId: number;
}
export declare class Project extends Model<Project, ProjectCreationAttrs> {
    id: number;
    name: string;
    adress: string;
    userId: number;
    user: User;
    plcs: Plc[];
}
export {};

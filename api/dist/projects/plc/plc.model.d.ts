import { Model } from 'sequelize-typescript';
import { Project } from '../project.model';
interface PlcCreationAttrs {
    name: string;
    url: string;
    system: string;
    projectId: number;
}
export declare class Plc extends Model<Plc, PlcCreationAttrs> {
    id: number;
    name: string;
    url: string;
    system: string;
    projectId: number;
    project: Project;
}
export {};

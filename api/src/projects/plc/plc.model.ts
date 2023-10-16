import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Project } from '../project.model';
interface PlcCreationAttrs {
  name: string;
  url: string;
  system: string;
  projectId: number;
}

@Table({ tableName: 'plc' })
export class Plc extends Model<Plc, PlcCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Контроллер в РУ-0.4кВ',
    description: 'Название конроллера',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'http://localhost:5000/',
    description: 'Ссылка на контроллер',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  url: string;

  @ApiProperty({
    example: 'Electricity',
    description: 'Тип системы',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  system: string;

  @ForeignKey(() => Project)
  @Column({ type: DataType.INTEGER })
  projectId: number;

  @BelongsTo(() => Project)
  project: Project;
}

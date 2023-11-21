import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from './role/roles.model';
import { UserRoles } from './role/user-roles.model';
import { Project } from 'src/projects/project.model';

interface UserCreationAttrs {
  email: string;
  password: string;
  name: string;
  lastName: string;
  phone: string;
  сompanyName: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адрес' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'Иван', description: 'Имя' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Иванов', description: 'Фамилия' })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({ example: '+79998887766', description: 'Номер телефона' })
  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @ApiProperty({
    example: 'ООО "Зеленглазое такси"',
    description: 'Название компании',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  сompanyName: string;

  @ApiProperty({
    example: 'URL',
    description: 'Ссылка на аватар',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  avatar: string;

  @ApiProperty({ example: 'true', description: 'Заблокирован или нет' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'Нет оплаты', description: 'Причина блокировки' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Project)
  projects: Project[];
}

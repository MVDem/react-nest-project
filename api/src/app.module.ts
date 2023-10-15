import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { Role } from './users/role/roles.model';
import { UserRoles } from './users/role/user-roles.model';
import { ProjectsModule } from './projects/projects.module';
import { Project } from './projects/project.model';
import { Plc } from './projects/plc/plc.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Project, Plc],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    ProjectsModule,
  ],
})
export class AppModule {}

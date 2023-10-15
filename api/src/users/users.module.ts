import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { RoleModule } from './role/role.module';
import { Role } from './role/roles.model';
import { UserRoles } from './role/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { Project } from 'src/projects/project.model';
import { ProjectsModule } from 'src/projects/projects.module';
import { Plc } from 'src/projects/plc/plc.model';
import { PlcModule } from 'src/projects/plc/plc.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Project, Plc]),
    RoleModule,
    forwardRef(() => AuthModule),
    forwardRef(() => ProjectsModule),
    forwardRef(() => PlcModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}

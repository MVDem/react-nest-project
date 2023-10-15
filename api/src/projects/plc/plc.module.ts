import { Module } from '@nestjs/common';
import { PlcController } from './plc.controller';
import { PlcService } from './plc.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from '../project.model';
import { Plc } from './plc.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [PlcController],
  providers: [PlcService],
  imports: [
    SequelizeModule.forFeature([Project, Plc]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  exports: [PlcService],
})
export class PlcModule {}

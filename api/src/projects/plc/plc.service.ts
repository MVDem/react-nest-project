import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePlcDto } from './dtos/create-plc.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Plc } from './plc.model';
import { RemovePlcDto } from './dtos/remove-plc.dto';
import { GetPlcDto } from './dtos/get-plc.dto';

@Injectable()
export class PlcService {
  constructor(@InjectModel(Plc) private plcRepository: typeof Plc) {}

  async createPlc(dto: CreatePlcDto) {
    const plc = await this.plcRepository.create(dto);
    return plc;
  }

  async removePlc(dto: RemovePlcDto) {
    const id = dto.plcId;
    const plc = await this.plcRepository.findOne({ where: { id } });
    if (plc) {
      await this.plcRepository.destroy({
        where: { id },
        force: true,
      });
      return dto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND
    );
  }

  async getPlc(dto: GetPlcDto) {
    const id = dto.plcId;
    const plc = await this.plcRepository.findByPk(id);
    // ({
    //   where: { id },
    //   include: { all: true },
    // });
    return plc;
  }
}

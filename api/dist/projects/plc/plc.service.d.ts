import { CreatePlcDto } from './dtos/create-plc.dto';
import { Plc } from './plc.model';
import { RemovePlcDto } from './dtos/remove-plc.dto';
import { GetPlcDto } from './dtos/get-plc.dto';
export declare class PlcService {
    private plcRepository;
    constructor(plcRepository: typeof Plc);
    createPlc(dto: CreatePlcDto): Promise<Plc>;
    removePlc(dto: RemovePlcDto): Promise<RemovePlcDto>;
    getPlc(dto: GetPlcDto): Promise<Plc>;
}

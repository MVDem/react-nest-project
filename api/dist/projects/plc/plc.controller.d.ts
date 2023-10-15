import { CreatePlcDto } from './dtos/create-plc.dto';
import { PlcService } from './plc.service';
import { Plc } from './plc.model';
import { RemovePlcDto } from './dtos/remove-plc.dto';
import { GetPlcDto } from './dtos/get-plc.dto';
export declare class PlcController {
    private readonly plcService;
    constructor(plcService: PlcService);
    createPlc(dto: CreatePlcDto): Promise<Plc>;
    remove(projectDto: RemovePlcDto): Promise<RemovePlcDto>;
    getPlc(projectDto: GetPlcDto): Promise<Plc>;
}

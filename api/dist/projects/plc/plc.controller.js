"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlcController = void 0;
const common_1 = require("@nestjs/common");
const create_plc_dto_1 = require("./dtos/create-plc.dto");
const plc_service_1 = require("./plc.service");
const swagger_1 = require("@nestjs/swagger");
const roles_auth_decorator_1 = require("../../users/auth/roles-auth.decorator");
const plc_model_1 = require("./plc.model");
const roles_guard_1 = require("../../users/auth/roles.guard");
const remove_plc_dto_1 = require("./dtos/remove-plc.dto");
const get_plc_dto_1 = require("./dtos/get-plc.dto");
let PlcController = class PlcController {
    constructor(plcService) {
        this.plcService = plcService;
    }
    createPlc(dto) {
        return this.plcService.createPlc(dto);
    }
    remove(projectDto) {
        return this.plcService.removePlc(projectDto);
    }
    getPlc(projectDto) {
        return this.plcService.getPlc(projectDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Добавление контроллера' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: plc_model_1.Plc }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plc_dto_1.CreatePlcDto]),
    __metadata("design:returntype", void 0)
], PlcController.prototype, "createPlc", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление контроллера' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: plc_model_1.Plc }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [remove_plc_dto_1.RemovePlcDto]),
    __metadata("design:returntype", void 0)
], PlcController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить данные о контроллере' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: plc_model_1.Plc }),
    (0, roles_auth_decorator_1.Roles)('ADMIN', 'USER'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/detales'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_plc_dto_1.GetPlcDto]),
    __metadata("design:returntype", void 0)
], PlcController.prototype, "getPlc", null);
PlcController = __decorate([
    (0, swagger_1.ApiTags)('Контроллеры'),
    (0, common_1.Controller)('plc'),
    __metadata("design:paramtypes", [plc_service_1.PlcService])
], PlcController);
exports.PlcController = PlcController;
//# sourceMappingURL=plc.controller.js.map
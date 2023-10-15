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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlcDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePlcDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Контроллер в РУ-0.4кВ',
        description: 'Название конроллера',
    }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreatePlcDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'http://localhost:5000/',
        description: 'Ссылка на контроллер',
    }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreatePlcDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Electricity',
        description: 'Тип системы',
    }),
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    __metadata("design:type", String)
], CreatePlcDto.prototype, "system", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'Id проекта',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePlcDto.prototype, "projectId", void 0);
exports.CreatePlcDto = CreatePlcDto;
//# sourceMappingURL=create-plc.dto.js.map
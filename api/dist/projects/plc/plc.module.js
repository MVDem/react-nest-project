"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlcModule = void 0;
const common_1 = require("@nestjs/common");
const plc_controller_1 = require("./plc.controller");
const plc_service_1 = require("./plc.service");
const sequelize_1 = require("@nestjs/sequelize");
const project_model_1 = require("../project.model");
const plc_model_1 = require("./plc.model");
const jwt_1 = require("@nestjs/jwt");
let PlcModule = class PlcModule {
};
PlcModule = __decorate([
    (0, common_1.Module)({
        controllers: [plc_controller_1.PlcController],
        providers: [plc_service_1.PlcService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([project_model_1.Project, plc_model_1.Plc]),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '24h',
                },
            }),
        ],
        exports: [plc_service_1.PlcService],
    })
], PlcModule);
exports.PlcModule = PlcModule;
//# sourceMappingURL=plc.module.js.map
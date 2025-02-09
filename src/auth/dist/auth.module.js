"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var auth_controller_1 = require("./auth.controller");
var user_module_1 = require("src/user/user.module");
var prisma_module_1 = require("src/prisma/prisma.module");
var auth_service_1 = require("./auth.service");
var file_module_1 = require("src/file/file.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET //Importando variável de ambiente
                }),
                common_1.forwardRef(function () { return user_module_1.UserModule; }),
                prisma_module_1.PrismaModule,
                file_module_1.FileModule
            ],
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService],
            exports: [auth_service_1.AuthService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;

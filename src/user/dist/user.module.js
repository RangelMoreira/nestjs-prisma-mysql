"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var user_controller_1 = require("./user.controller");
var user_service_1 = require("./user.service");
var prisma_module_1 = require("src/prisma/prisma.module");
var user_id_check_middleware_1 = require("src/middlewares/user-id-check.middleware");
var auth_module_1 = require("src/auth/auth.module");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule.prototype.configure = function (consumer) {
        consumer.apply(user_id_check_middleware_1.UserIdCheckMiddleware).forRoutes({
            path: 'users/:id',
            method: common_1.RequestMethod.ALL
        });
    };
    UserModule = __decorate([
        common_1.Module({
            imports: [prisma_module_1.PrismaModule, common_1.forwardRef(function () { return auth_module_1.AuthModule; })],
            controllers: [user_controller_1.UserController],
            providers: [user_service_1.UserService],
            exports: [user_service_1.UserService]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;

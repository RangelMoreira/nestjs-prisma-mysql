"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@nestjs/core");
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_module_1 = require("./user/user.module");
var auth_module_1 = require("./auth/auth.module");
var throttler_1 = require("@nestjs/throttler");
var config_1 = require("@nestjs/config");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot(),
                throttler_1.ThrottlerModule.forRoot({
                    ttl: 60,
                    limit: 10,
                    ignoreUserAgents: [/googlebot/gi] //Ignora o agente do google bot (Dá permissão) 
                }),
                common_1.forwardRef(function () { return user_module_1.UserModule; }), common_1.forwardRef(function () { return auth_module_1.AuthModule; })
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService, {
                    provide: core_1.APP_GUARD,
                    useClass: throttler_1.ThrottlerGuard
                }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDTO = void 0;
var class_validator_1 = require("class-validator");
var role_enum_1 = require("src/enums/role.enum");
var CreateUserDTO = /** @class */ (function () {
    function CreateUserDTO() {
    }
    __decorate([
        class_validator_1.IsString()
    ], CreateUserDTO.prototype, "name");
    __decorate([
        class_validator_1.IsEmail()
    ], CreateUserDTO.prototype, "email");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MinLength(6)
    ], CreateUserDTO.prototype, "password");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsDateString()
    ], CreateUserDTO.prototype, "birthAt");
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsEnum(role_enum_1.Role)
    ], CreateUserDTO.prototype, "role");
    return CreateUserDTO;
}());
exports.CreateUserDTO = CreateUserDTO;

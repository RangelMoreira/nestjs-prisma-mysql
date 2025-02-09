"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var auth_guards_1 = require("src/guards/auth.guards");
var user_decorator_1 = require("src/decorators/user.decorator");
var throttler_1 = require("@nestjs/throttler");
var platform_express_1 = require("@nestjs/platform-express");
var path_1 = require("path");
var AuthController = /** @class */ (function () {
    function AuthController(authService, fileService) {
        this.authService = authService;
        this.fileService = fileService;
    }
    AuthController.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.authService.login(email, password)];
            });
        });
    };
    AuthController.prototype.register = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.authService.register(body)];
            });
        });
    };
    AuthController.prototype.forget = function (_a) {
        var email = _a.email;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.authService.forget(email)];
            });
        });
    };
    AuthController.prototype.reset = function (_a) {
        var password = _a.password, token = _a.token;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.authService.reset(password, token)];
            });
        });
    };
    AuthController.prototype.me = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { user: user }];
            });
        });
    };
    AuthController.prototype.uploadPhoto = function (user, photo) {
        return __awaiter(this, void 0, void 0, function () {
            var path, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = path_1.join(__dirname, '..', '..', 'storage', 'photos', "photo-" + user.id + ".png");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fileService.upload(photo, path)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw new common_1.BadRequestException();
                    case 4: return [2 /*return*/, { sucess: true }];
                }
            });
        });
    };
    AuthController.prototype.uploadFiles = function (user, files) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, files];
            });
        });
    };
    AuthController.prototype.uploadFilesFields = function (user, files) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, files];
            });
        });
    };
    __decorate([
        common_1.UseGuards(throttler_1.ThrottlerGuard),
        common_1.Post('login'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "login");
    __decorate([
        common_1.Post('register'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "register");
    __decorate([
        common_1.Post('forget'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "forget");
    __decorate([
        common_1.Post('reset'),
        __param(0, common_1.Body())
    ], AuthController.prototype, "reset");
    __decorate([
        common_1.UseGuards(auth_guards_1.AuthGuard),
        common_1.Post('me'),
        __param(0, user_decorator_1.User())
    ], AuthController.prototype, "me");
    __decorate([
        common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
        common_1.UseGuards(auth_guards_1.AuthGuard),
        common_1.Post('photo'),
        __param(0, user_decorator_1.User()), __param(1, common_1.UploadedFile())
    ], AuthController.prototype, "uploadPhoto");
    __decorate([
        common_1.UseInterceptors(platform_express_1.FilesInterceptor('files')),
        common_1.UseGuards(auth_guards_1.AuthGuard),
        common_1.Post('files-fields'),
        __param(0, user_decorator_1.User()), __param(1, common_1.UploadedFiles())
    ], AuthController.prototype, "uploadFiles");
    __decorate([
        common_1.UseInterceptors(platform_express_1.FileFieldsInterceptor([{
                name: 'photo',
                maxCount: 1
            }, {
                name: 'documents',
                maxCount: 10
            }])),
        common_1.UseGuards(auth_guards_1.AuthGuard),
        common_1.Post('files-fields'),
        __param(0, user_decorator_1.User()), __param(1, common_1.UploadedFiles())
    ], AuthController.prototype, "uploadFilesFields");
    AuthController = __decorate([
        common_1.Controller('auth')
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;

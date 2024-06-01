"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var bcrypt = require("bcrypt");
var UserService = /** @class */ (function () {
    function UserService(prisma) {
        this.prisma = prisma;
    }
    UserService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, bcrypt.genSalt()];
                    case 1:
                        salt = _b.sent();
                        _a = data;
                        return [4 /*yield*/, bcrypt.hash(data.password, salt)];
                    case 2:
                        _a.password = _b.sent();
                        return [4 /*yield*/, this.prisma.user.create({
                                data: data
                            })];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    UserService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.user.findMany()];
            });
        });
    };
    UserService.prototype.show = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exists(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.prisma.user.findUnique({
                                where: {
                                    id: id
                                }
                            })];
                }
            });
        });
    };
    UserService.prototype.update = function (id, _a) {
        var email = _a.email, name = _a.name, password = _a.password, birthAt = _a.birthAt, role = _a.role;
        return __awaiter(this, void 0, void 0, function () {
            var salt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.exists(id)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, bcrypt.genSalt()];
                    case 2:
                        salt = _b.sent();
                        return [4 /*yield*/, bcrypt.hash(password, salt)];
                    case 3:
                        password = _b.sent();
                        return [2 /*return*/, this.prisma.user.update({
                                data: { email: email, name: name, password: password, birthAt: birthAt ? new Date(birthAt) : null, role: role },
                                where: {
                                    id: id
                                }
                            })];
                }
            });
        });
    };
    UserService.prototype.updatePartial = function (id, _a) {
        var email = _a.email, name = _a.name, password = _a.password, birthAt = _a.birthAt, role = _a.role;
        return __awaiter(this, void 0, void 0, function () {
            var data, salt, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.exists(id)];
                    case 1:
                        _c.sent();
                        data = {};
                        if (birthAt) {
                            data.birthAt = new Date(birthAt);
                        }
                        if (email) {
                            data.email = email;
                        }
                        if (name) {
                            data.name = name;
                        }
                        if (!password) return [3 /*break*/, 4];
                        return [4 /*yield*/, bcrypt.genSalt()];
                    case 2:
                        salt = _c.sent();
                        _b = data;
                        return [4 /*yield*/, bcrypt.hash(password, salt)];
                    case 3:
                        _b.password = _c.sent();
                        _c.label = 4;
                    case 4:
                        if (role) {
                            data.role = role;
                        }
                        return [2 /*return*/, this.prisma.user.update({
                                data: data,
                                where: {
                                    id: id
                                }
                            })];
                }
            });
        });
    };
    UserService.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exists(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.show(id)];
                    case 2:
                        if (_a.sent())
                            return [2 /*return*/, this.prisma.user["delete"]({
                                    where: {
                                        id: id
                                    }
                                })];
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.exists = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.user.count({
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        if (!(_a.sent())) {
                            throw new common_1.NotFoundException("O usu\u00E1rio " + id + " n\u00E3o existe");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService = __decorate([
        common_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

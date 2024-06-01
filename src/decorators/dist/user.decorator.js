"use strict";
exports.__esModule = true;
exports.User = void 0;
var common_1 = require("@nestjs/common");
exports.User = common_1.createParamDecorator(function (filter, context) {
    var request = context.switchToHttp().getRequest();
    if (request.user) {
        if (filter) {
            return request.user[filter];
        }
        else {
            return request.user;
        }
    }
    else {
        throw new common_1.NotFoundException("Usuário não encontrado no Request. Use o AuthGuard para obter o usuário");
    }
});

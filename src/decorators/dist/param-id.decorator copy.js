"use strict";
exports.__esModule = true;
exports.User = void 0;
var common_1 = require("@nestjs/common");
exports.User = common_1.createParamDecorator(function (_data, context) {
    var request = context.switchToHttp().getRequest();
    if (request.user) {
        return request.user;
    }
    else {
        throw new common_1.NotFoundException("Usuário não encontrado no Request. Use o AuthGuard para obter o usuário");
    }
});

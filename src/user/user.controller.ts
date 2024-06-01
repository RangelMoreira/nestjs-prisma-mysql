import { Body, Controller, Get, Post, Put, Patch, Delete, UseInterceptors, UseGuards } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";
import { Role } from "src/enums/role.enum";
import { Roles } from "src/decorators/roles.decorator";
import { RoleGuard } from "src/guards/role.guards";
import { AuthGuard } from "src/guards/auth.guards";
import { SkipThrottle, Throttle, ThrottlerGuard } from "@nestjs/throttler";

@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {

    constructor(private readonly usersService: UserService) { }

    @Throttle(20, 60)
    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.usersService.create(data);
    }

    @Roles(Role.User)
    @Get()
    async list() {
        return this.usersService.list();
    }

    @Get(':id')
    async show(@ParamId() id: number) {
        console.log({ id });
        return this.usersService.show(id);
    }

    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
        return this.usersService.update(id, data);
    }

    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
        return this.usersService.updatePartial(id, data);
    }

    @Delete(':id')
    async delete(@ParamId() id: number) {
        return this.usersService.delete(id);
    }
}
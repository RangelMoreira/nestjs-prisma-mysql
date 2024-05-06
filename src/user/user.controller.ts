import { Body, Controller, Get, Param, Post, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly usersService: UserService) { }

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.usersService.create(data);
    }

    @Get()
    async list() {
        return this.usersService.list();
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.show(id);
    }

    @Put(':id')
    async update(@Body() { email, name, password }: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
        return {
            method: 'put',
            email, name, password,
            id
        }
    }

    @Patch(':id')
    async updatePartial(@Body() { email, name, password }: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id) {
        return {
            method: 'put',
            email, name, password,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id) {
        return {
            id
        }
    }
}
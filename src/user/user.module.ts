import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaModdule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModdule],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule {

}
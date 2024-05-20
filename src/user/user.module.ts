import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaModdule } from "src/prisma/prisma.module";
import { UserIdCheckMiddleware } from "src/middlewares/user-id-check.middleware";

@Module({
    imports: [PrismaModdule],
    controllers: [UserController],
    providers: [UserService],
    exports: [],
})
export class UserModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddleware).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL
        });
    }

}
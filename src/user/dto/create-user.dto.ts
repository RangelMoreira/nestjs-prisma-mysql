import { IsDateString, IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { Role } from "src/enums/role.enum";

export class CreateUserDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    // @IsStrongPassword({
    //     minLength: 6,
    //     minUppercase: 0,
    //     minLowercase: 0,
    //     minNumbers: 0,
    //     minSymbols: 0,
    // })
    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsDateString()
    birthAt: string;

    @IsOptional()
    @IsEnum(Role)
    role: number;

}
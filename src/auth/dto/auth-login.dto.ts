import { IsDateString, IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class AuthLoginDTO {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsDateString()
    birthAt: string
}
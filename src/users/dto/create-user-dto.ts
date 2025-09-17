import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['intern', 'engineer', 'admin'], {
        message: 'A valid role is required.'
    })
    role: 'intern' | 'engineer' | 'admin';
}
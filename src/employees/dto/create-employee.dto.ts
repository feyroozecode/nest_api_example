import { IsEmail, IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role;
}
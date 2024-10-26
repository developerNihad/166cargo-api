import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, Length, MaxLength, MinLength } from "class-validator";
import { LoginUserDto } from "./login-register.dto";

export class RegisterUserDto extends LoginUserDto {

    @Type()
    @IsString()
    @Length(3, 30)
    @ApiProperty({ default: 'Enter the name' })
    firstName: string;

    @Type()
    @IsString()
    @Length(3, 30)
    @ApiProperty({ default: 'Enter the last name' })
    lastName: string;
}
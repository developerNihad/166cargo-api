import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, IsString, Matches } from "class-validator";

export class LoginUserDto {
    @Type()
    @IsEmail()
    @ApiProperty({ default: 'Enter the email' })
    email: string;

    @Type()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)
    @ApiProperty({ default: 'Enter the password' })
    password: string;

}
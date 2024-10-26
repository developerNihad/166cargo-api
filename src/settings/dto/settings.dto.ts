import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class SettingsDto {

    @Type()
    @IsString()
    @ApiProperty()
    siteName: string;

    @Type()
    @IsString()
    @ApiProperty()
    logoUrl: string;

    @Type()
    @IsString()
    @ApiProperty()
    aboutUs: string;

    @Type()
    @IsString()
    @ApiProperty()
    contactDetails: string;

}
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class UpdateTariffDto {
    
    @Type()
    @IsString()
    @ApiProperty()
    name?: string;

    @Type()
    @IsString()
    @ApiProperty()
    price?: number;

    @Type()
    @IsString()
    @ApiProperty()
    description?: string;
}
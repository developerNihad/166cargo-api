import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {

    @Type()
    @IsNumber()
    @ApiProperty()
    userId: number;

    @Type()
    @IsString()
    @ApiProperty()
    cargoDetails: string;

    @Type()
    @IsString()
    @ApiProperty()
    status: string;

    @Type()
    @IsNumber()
    @ApiProperty()
    tariffId: number;
}
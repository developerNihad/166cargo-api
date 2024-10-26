import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TariffService } from "./tariff.service";
import { Tariff } from "src/entities/Tariff.entity";
import { get } from "http";
import { CreateTariffDto } from "./dto/create-tariff.dto";
import { UpdateTariffDto } from "./dto/create-update.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('tariffs')
@ApiTags('Tariffs')
export class TariffController {
    constructor(private tariffService: TariffService) {}

    @Post()
    create(@Body() tariffData: CreateTariffDto) {
        return this.tariffService.create(tariffData);
    }

    @Get()
    findAll(
        @Query('name') name?: string,
        @Query('page') page?: number,
        @Query('limit') limit?: number
    ) {
        return this.tariffService.findAll(name, page, limit);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.tariffService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateData: UpdateTariffDto) {
        return this.tariffService.update(id, updateData);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.tariffService.delete(id);
    }
}
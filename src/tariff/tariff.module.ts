import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tariff } from "src/entities/Tariff.entity";
import { TariffController } from "./tariff.controller";
import { TariffService } from "./tariff.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tariff])],
    controllers: [TariffController],
    providers: [TariffService],
})

export class TariffModule {}
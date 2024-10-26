import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "src/entities/Order.entity";
import { Tariff } from "src/entities/Tariff.entity";
import { ReportController } from "./report.controller";
import { ReportService } from "./report.service";

@Module({
    imports: [TypeOrmModule.forFeature([Order, Tariff])],
    controllers: [ReportController],
    providers: [ReportService],
})

export class ReportModule {}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "src/entities/Order.entity";
import { Tariff } from "src/entities/Tariff.entity";
import { Repository } from "typeorm";

@Injectable()
export class ReportService {

    constructor(
        @InjectRepository(Order)
        private orderRepo: Repository<Order>,

        @InjectRepository(Tariff)
        private tariffRepo: Repository<Tariff>,
    ) {}

    async getTotalOrders() {
        return this.orderRepo.count();
    }

    async getOrdersByStatus(status: string) {
        return this.orderRepo.count({ where: { status } });
    }

    async getTotalRevenue() {
        const tariffs = await this.tariffRepo.find();
        return tariffs.reduce((total, tariff) => total + tariff.price, 0);
    }
}
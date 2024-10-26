import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "src/entities/Order.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepo: Repository<Order>,
    ) {}

    async create(orderData: Partial<Order>) {
        const order = this.orderRepo.create(orderData);
        return this.orderRepo.save(order);
    }

    async findAll(status?: string, page: number=1, limit: number=10) {
        const query = this.orderRepo.createQueryBuilder('order');

        if (status) {
            query.where('order.status = :status', { status });
        }

        return await query.skip((page - 1) * limit).take(limit).getManyAndCount();
    }

    findOne(id: number) {
        return this.orderRepo.findOne({ where: { id } });
    }

    async update(id: number, updateData: Partial<Order>) {
        await this.orderRepo.update(id, updateData);
        return this.findOne(id);
    }

    async delete(id: number) {
        return this.orderRepo.delete(id);
    }
}
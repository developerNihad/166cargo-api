import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tariff } from "src/entities/Tariff.entity";
import { Repository } from "typeorm";

@Injectable()
export class TariffService {
    constructor(
        @InjectRepository(Tariff)
        private tariffRepo: Repository<Tariff>,
    ) {}

    async create(tariffData: Partial<Tariff>) {
        const tariff = this.tariffRepo.create(tariffData);
        return this.tariffRepo.create(tariff);
    }

    async findAll(name?: string, page: number=1, limit: number=10) {
        const query = this.tariffRepo.createQueryBuilder('tariff');

        if (name) {
            query.where('tariff.name ILIKE :name', { name: `%${name}%` });
        }

        return await query.skip((page - 1) * limit).take(limit).getManyAndCount();
    }

    findOne(id: number) {
        return this.tariffRepo.findOne({ where: { id } });
    }

    async update(id: number, tariffData: Partial<Tariff>) {
        await this.tariffRepo.update(id, tariffData);
        return this.findOne(id);
    }

    async delete(id: number) {
        return this.tariffRepo.delete(id);
    }
}
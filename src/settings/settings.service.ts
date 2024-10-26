import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Settings } from "src/entities/Settings.entity";
import { Repository } from "typeorm";

@Injectable()
export class SettingsService {

    constructor(
        @InjectRepository(Settings)
        private settingsRepo: Repository<Settings>,
    ) {}

    async find() {
        return this.settingsRepo.find();
    }

    async update(settingsData: Partial<Settings>) {
        await this.settingsRepo.update(1, settingsData);
        return this.find();
    }

}
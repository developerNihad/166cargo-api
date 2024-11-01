import { Module } from "@nestjs/common";
import { SettingsController } from "./settings.controller";
import { SettingsService } from "./settings.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Settings } from "src/entities/Settings.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Settings])],
    controllers: [SettingsController],
    providers: [SettingsService],
})

export class SettingsModule {}
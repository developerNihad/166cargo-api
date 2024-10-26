import { Body, Controller, Get, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { SettingsService } from "./settings.service";
import { SettingsDto } from "./dto/settings.dto";

@Controller('settings')
@ApiTags('Settings')
export class SettingsController {

    constructor(private settingsService: SettingsService) {}

    @Get()
    find() {
        return this.settingsService.find();
    }

    @Put()
    update(@Body() settingsData: SettingsDto) {
        return this.settingsService.update(settingsData);
    }
}
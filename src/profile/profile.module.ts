import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { ProfileService } from "./profile.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/User.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [ProfileController],
    providers: [ProfileService],
    exports: [ProfileService]
})

export class ProfileModule {}
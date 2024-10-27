import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/entities/User.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller('users')
@ApiTags('Users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    list() {
        return this.userService.find();
    }
    
    @Get(':id')
    getUser(@Param('id') id: number) {
        return this.userService.findOne({ id });
    }

    @Post()
    create(@Body() userData: Partial<User>) {
        return this.userService.create(userData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateData: Partial<User>) {
        return this.userService.update(id, updateData);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.userService.delete(id);
    }
}   
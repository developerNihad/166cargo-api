import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "src/entities/Order.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateTariffDto } from "src/tariff/dto/create-update.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('orders')
@ApiTags('Orders')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Post()
    create(@Body() orderData: CreateOrderDto) {
        return this.orderService.create(orderData);
    }

    @Get()
    findAll(
        @Query('status') status?: string, 
        @Query('page') page?: number, 
        @Query('limit') limit?: number
    ) {
        return this.orderService.findAll(status, page, limit);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.orderService.findOne(id);
    }

    @Put()
    update(@Param('id') id: number, @Body() updateData: UpdateOrderDto) {
        return this.orderService.update(id, updateData);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.orderService.delete(id);
    }
}
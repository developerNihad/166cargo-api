import { Controller, Get, Param } from "@nestjs/common";
import { ReportService } from "./report.service";
import { ApiTags } from "@nestjs/swagger";

@Controller('reports')
@ApiTags('Reports')
export class ReportController {
    constructor(private reportService: ReportService) {}

    @Get('total-orders')
    getTotalOrders() {
        return this.reportService.getTotalOrders();
    }

    @Get('orders/status/:status')
    getOrdersByStatus(@Param('status') status: string) {
        return this.reportService.getOrdersByStatus(status);
    }

    @Get('total-revenue')
    getTotalRevenue() {
        return this.reportService.getTotalRevenue();
    }

}
import { Controller, Get, Query } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { Province } from './schemas/province.schema';
import { ApiQuery } from '@nestjs/swagger';


@Controller('provinces')
export class ProvinceController {
    constructor(private provinceService: ProvinceService) {}

    @Get()
    @ApiQuery({ name: 'department', required: true })
    getProvincesByLocation(
        @Query('department') department: string,
    ): Promise<Province[]> {
        return this.provinceService.findProvincesByLocation(department);
    }

}
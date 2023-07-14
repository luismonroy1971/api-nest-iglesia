import { Controller, Get, Query } from '@nestjs/common';
import { DistrictService } from './district.service';
import { District } from './schemas/district.schema';
import { ApiQuery } from '@nestjs/swagger';


@Controller('districts')
export class DistrictController {
    constructor(private districtService: DistrictService) {}

    @Get('')
    @ApiQuery({ name: 'department', required: true })
    @ApiQuery({ name: 'province', required: true })
    getChurchesByLocation(
        @Query('department') department: string,
        @Query('province') province: string,
    ): Promise<District[]> {
        return this.districtService.findDistrictsByLocation(department, province);
    }

}
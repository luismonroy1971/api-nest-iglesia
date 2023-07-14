import { Controller, Get, Query } from '@nestjs/common';
import { DistrictService } from './district.service';
import { District } from './schemas/district.schema';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Distritos')
@Controller('districts')
export class DistrictController {
    constructor(private districtService: DistrictService) {}

    @Get('')
    @ApiQuery({ name: 'department', required: true })
    @ApiQuery({ name: 'province', required: true })
    getDistrictsByLocation(
        @Query('department') department: string,
        @Query('province') province: string,
    ): Promise<District[]> {
        return this.districtService.findDistrictsByLocation(department, province);
    }

}
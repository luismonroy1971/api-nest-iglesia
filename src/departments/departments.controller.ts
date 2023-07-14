import { Controller, Get, Param, NotFoundException, Query } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { Department } from './schemas/department.schema';
import { Query as ExppressQuery } from 'express-serve-static-core';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Departamentos')
@Controller('departments')
export class DepartmentsController {
    constructor(private departmentService: DepartmentsService) {}
    
    @ApiQuery({
        name: 'department'
    })
    @Get()
    async findAll(@Query() query: ExppressQuery): Promise<Department[]>{
        return this.departmentService.findAll(query);
    }
    
}

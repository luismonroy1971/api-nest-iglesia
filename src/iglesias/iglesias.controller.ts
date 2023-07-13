import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode, Query } from '@nestjs/common';
import { IglesiasService } from './iglesias.service';
import { CreateIglesiaDto } from './dto/create-iglesia.dto';
import { UpdateIglesiaDto } from './dto/update-iglesia.dto';
import { Iglesia } from './schemas/iglesia.schema';
import { Query as ExppressQuery } from 'express-serve-static-core';


@Controller('iglesias')
export class IglesiasController {
    constructor(private iglesiasService: IglesiasService) {}
    @Get()
    async findAll(@Query() query: ExppressQuery): Promise<Iglesia[]>{
        return this.iglesiasService.findAll(query);
    }
    
    @Get(':id')
    async findOne(@Param('id') id:string){
        const iglesia = await this.iglesiasService.findOne(id);
        if (!iglesia) throw new NotFoundException('Iglesia no existe');
        return  iglesia;
    }

    @Post()
    async create(@Body() body: CreateIglesiaDto){
        try {
            return await this.iglesiasService.create(body);    
        } catch (error) {
            if (error.code === 11000){
                throw new ConflictException('El nombre de la iglesia ya existe')
            }
            throw error;
        }
        
    }

    @Delete(':id')
    @HttpCode(204)
    async deleted(@Param('id') id:string ){
        const iglesia = await this.iglesiasService.delete(id);
        if (!iglesia) throw new NotFoundException('Iglesia no existe');
        return  iglesia;
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() body: UpdateIglesiaDto){
        const iglesia = await this.iglesiasService.update(id, body);
        if (!iglesia) throw new NotFoundException('Iglesia no existe');
        return  iglesia;

    }


}

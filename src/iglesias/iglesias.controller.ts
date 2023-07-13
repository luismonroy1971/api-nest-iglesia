import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode, Query, UseGuards, Req } from '@nestjs/common';
import { IglesiasService } from './iglesias.service';
import { CreateIglesiaDto } from './dto/create-iglesia.dto';
import { UpdateIglesiaDto } from './dto/update-iglesia.dto';
import { Iglesia } from './schemas/iglesia.schema';
import { Query as ExppressQuery } from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';
import { ApiParam, ApiTags, ApiQuery, ApiHeader } from '@nestjs/swagger';


@ApiTags('Iglesias')
@Controller('churchs')
export class IglesiasController {
    constructor(private iglesiasService: IglesiasService) {}
    
    @ApiQuery({
        name: 'iglesia'
    })
    @Get()
    async findAll(@Query() query: ExppressQuery): Promise<Iglesia[]>{
        return this.iglesiasService.findAll(query);
    }
    
    @ApiParam({
        name: 'id'
    })
    @Get('/buscar/:id')
    async findOne(@Param('id') id:string){
        const iglesia = await this.iglesiasService.findOne(id);
        if (!iglesia) throw new NotFoundException('Iglesia no existe');
        return  iglesia;
    }


    @Get('/endpoint')
    @ApiQuery({ name: 'department', required: true })
    @ApiQuery({ name: 'province', required: true })
    @ApiQuery({ name: 'district', required: true })
    getChurchesByLocation(
        @Query('department') department: string,
        @Query('province') province: string,
        @Query('district') district: string,
    ): Promise<Iglesia[]> {
        return this.iglesiasService.findChurchesByLocation(department, province, district);
    }

    @ApiHeader({
        name: 'token',
        description: 'Token de autenticación',
        required: true,
      })
    @Post()
    @UseGuards(AuthGuard())
    async create(@Body() body: CreateIglesiaDto, @Req() req){
        try {
            return await this.iglesiasService.create(body, req.user);    
        } catch (error) {
            if (error.code === 11000){
                throw new ConflictException('El nombre de la iglesia ya existe')
            }
            throw error;
        }
        
    }

    @ApiParam({
        name: 'id'
    })
    @Delete(':id')
    @HttpCode(204)
    @UseGuards(AuthGuard())
    async deleted(@Param('id') id:string ){
        const iglesia = await this.iglesiasService.delete(id);
        if (!iglesia) throw new NotFoundException('Iglesia no existe');
        return  iglesia;
    }

    @ApiParam({
        name: 'id'
    })
    @Put(':id')
    @UseGuards(AuthGuard())
    async update(@Param('id') id:string, @Body() body: UpdateIglesiaDto){
        const iglesia = await this.iglesiasService.update(id, body);
        if (!iglesia) throw new NotFoundException('Iglesia no existe');
        return  iglesia;

    }


}

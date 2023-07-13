import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Iglesia} from './schemas/iglesia.schema';
import { Model } from 'mongoose';
import { CreateIglesiaDto } from './dto/create-iglesia.dto';
import { UpdateIglesiaDto } from './dto/update-iglesia.dto';
import { Query  } from 'express-serve-static-core';

@Injectable()
export class IglesiasService {
    constructor(@InjectModel(Iglesia.name) private iglesiaModel: Model<Iglesia>){}

    async findAll(query: Query): Promise<Iglesia[]> {
       
        const resPerPage = 5
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)
       
       
        const keyword = query.keyword ? {
            nombreIglesia:{
                $regex : query.keyword,
                $options: 'i'
            }
        }:{}

        const iglesia = await this.iglesiaModel.find({ ...keyword }).limit(resPerPage).skip(skip);
        return iglesia
    }

    async create(createIglesia:CreateIglesiaDto) {
       const newIglesia = new this.iglesiaModel(createIglesia);
       return newIglesia.save();
    }

    async findOne(id:string){
        const iglesia = await this.iglesiaModel.findById(id);
        return iglesia;
    }

    async delete(id:string){
        return await this.iglesiaModel.findByIdAndDelete(id);
    }

    async update(id:string, body: UpdateIglesiaDto){
        return await this.iglesiaModel.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    }
}

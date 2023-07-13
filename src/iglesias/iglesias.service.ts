import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Iglesia} from './schemas/iglesia.schema';
import { Model } from 'mongoose';
import { CreateIglesiaDto } from './dto/create-iglesia.dto';
import { UpdateIglesiaDto } from './dto/update-iglesia.dto';
import { Query  } from 'express-serve-static-core';
import { User } from '../auth/schemas/user.schema';
import { Transform } from 'class-transformer';

@Injectable()
export class IglesiasService {
    constructor(@InjectModel(Iglesia.name) private iglesiaModel: Model<Iglesia>){}

    async findAll(query: Query): Promise<Iglesia[]> {
       
        const resPerPage = 10
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)
       
       
        const keyword = query.iglesia ? {
            nombreIglesia:{
                $regex : query.iglesia,
                $options: 'i'
            }
        }:{}

        const church = await this.iglesiaModel.find({ ...keyword }).limit(resPerPage).skip(skip);
        return church
    }

    async findChurchesByLocation( department : string, province: string, district : string): Promise<Iglesia[]> {
        const departamento = department;
        const provincia = province;
        const distrito = district;
        const churches = await this.iglesiaModel.find({
            $and: [
              { departamento: { $regex: `.*${departamento}.*` , $options: 'i' } },
              { provincia: { $regex: `.*${provincia}.*` , $options: 'i' } }, // Busca el texto en campo1 (insensible a mayúsculas/minúsculas)
              { distrito: { $regex: `.*${distrito}.*` , $options: 'i' } }
                // Busca el texto en campo2 (insensible a mayúsculas/minúsculas)
            ]
          });
        return churches;
      }

    async create(createIglesia:CreateIglesiaDto, user: User) {

        const data = Object.assign(createIglesia, {user: user._id})

       const newIglesia = new this.iglesiaModel(data);
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

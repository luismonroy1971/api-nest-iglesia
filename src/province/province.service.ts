import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Province } from './schemas/province.schema';
import { Model } from 'mongoose';


@Injectable()
export class ProvinceService {
    constructor(@InjectModel(Province.name) private provinceModel: Model<Province>){}


    async findProvincesByLocation( department : string): Promise<Province[]> {
        const departamento = department;
        const provinces = await this.provinceModel.find({
            $and: [
              { department: { $regex: `.*${departamento}.*` , $options: 'i' } },
                // Busca el texto en campo2 (insensible a mayúsculas/minúsculas)
            ]
          });
        return provinces;
      }

}

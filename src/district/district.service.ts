import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { District } from './schemas/district.schema';
import { Model } from 'mongoose';

@Injectable()
export class DistrictService {
    constructor(@InjectModel(District.name) private districtModel: Model<District>){}

    async findDistrictsByLocation( department : string, province: string): Promise<District[]> {
        const departamento = department;
        const provincia = province;

        const Districts = await this.districtModel.find({
            $and: [
              { department: { $regex: `.*${departamento}.*` , $options: 'i' } },
              { province: { $regex: `.*${provincia}.*` , $options: 'i' } }, // Busca el texto en campo1 (insensible a mayúsculas/minúsculas)
                // Busca el texto en campo2 (insensible a mayúsculas/minúsculas)
            ]
          });
        return Districts;
      }

}

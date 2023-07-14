import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Department } from './schemas/department.schema';
import { Model } from 'mongoose';
import { Query  } from 'express-serve-static-core';

@Injectable()
export class DepartmentsService {
    constructor(@InjectModel(Department.name) private departmentModel: Model<Department>){}

    async findAll(query: Query): Promise<Department[]> {
       
        const resPerPage = 30
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)
       
       
        const keyword = query.department ? {
            department:{
                $regex : query.department,
                $options: 'i'
            }
        }:{}

        const department = await this.departmentModel.find({ ...keyword }).limit(resPerPage).skip(skip);
        return department
    }

}

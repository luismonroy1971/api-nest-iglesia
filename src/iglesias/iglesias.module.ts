import { Module } from '@nestjs/common';
import { IglesiasController } from './iglesias.controller';
import { IglesiasService } from './iglesias.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Iglesia,  IglesiaSchema } from './schemas/iglesia.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Iglesia.name,
        schema: IglesiaSchema
      },
    ]),
  ],
  controllers: [IglesiasController],
  providers: [IglesiasService],
})
export class IglesiasModule {}

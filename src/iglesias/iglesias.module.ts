import { Module } from '@nestjs/common';
import { IglesiasController } from './iglesias.controller';
import { IglesiasService } from './iglesias.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Iglesia,  IglesiaSchema } from './schemas/iglesia.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[
    AuthModule,
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

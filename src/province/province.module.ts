import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceController } from './province.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Province,  ProvinceSchema } from './schemas/province.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Province.name,
        schema: ProvinceSchema
      },
    ]),
  ],
  providers: [ProvinceService],
  controllers: [ProvinceController]
})
export class ProvinceModule {}

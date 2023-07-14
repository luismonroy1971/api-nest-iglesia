import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { District,  DistrictSchema } from './schemas/district.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([
      {
        name: District.name,
        schema: DistrictSchema
      },
    ]),
  ],
  providers: [DistrictService],
  controllers: [DistrictController]
})
export class DistrictModule {}

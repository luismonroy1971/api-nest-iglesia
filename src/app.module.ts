import { Module } from '@nestjs/common';
import { IglesiasModule } from './iglesias/iglesias.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './departments/departments.module';
import { ProvinceModule } from './province/province.module';
import { DistrictModule } from './district/district.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    IglesiasModule,
    AuthModule,
    DepartmentsModule,
    ProvinceModule,
    DistrictModule,
    ],
})
export class AppModule {}
  
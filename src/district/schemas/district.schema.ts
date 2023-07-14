import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";

@Schema({
  timestamps: true,
})
export class District extends Document {
  @ApiProperty()
  @Prop()
  department: string;

  @ApiProperty()
  @Prop()
  province: string;

  @ApiProperty()
  @Prop()
  district: string;

}

export const DistrictSchema = SchemaFactory.createForClass(District);
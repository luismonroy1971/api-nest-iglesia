import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";

@Schema({
  timestamps: true,
})
export class Province extends Document {
  @ApiProperty()
  @Prop()
  department: string;

  @ApiProperty()
  @Prop()
  province: string;

}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
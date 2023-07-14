import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";

@Schema({
  timestamps: true,
})
export class Department extends Document {
  @ApiProperty()
  @Prop()
  department: string;

}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
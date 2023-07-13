import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from "@nestjs/swagger";

@Schema({
  timestamps: true,
})
export class User extends Document {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop({ unique: [true, 'Correo electónico ya existe registrado'] })
  email: string;

  @ApiProperty()
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
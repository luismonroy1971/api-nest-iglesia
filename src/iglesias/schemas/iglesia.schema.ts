import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../auth/schemas/user.schema";
import mongoose, { Mongoose } from "mongoose";

@Schema({
    timestamps: true,
}) 

export class Iglesia {
    @Prop({ type: String, trim:true, required: [true, 'El nombre es un campo requerido'] , unique: true})
    nombreIglesia: string;
  
    @Prop({ type: String, trim:true, required: [true, 'La dirección es un campo requerido'] })
    direccionIglesia: string;
  
    @Prop({ type: String })
    referenciaDireccion: string;
  
    @Prop({ type: Number, required: [true, 'La latitud es un campo requerido'] })
    latitud: number;
  
    @Prop({ type: Number, required: [true, 'La longitud es un campo requerido'] })
    longitud: number;
  
    @Prop({ type: String, trim:true})
    obreroCargo: string;
  
    @Prop({ type: String, trim:true})
    numeroZona: string;
  
    @Prop({ type: String, trim:true })
    personaContacto: string;
  
    @Prop({ type: String, trim:true })
    telefono1: string;
  
    @Prop({ type: String, trim:true })
    telefono2: string;
  
    @Prop({ type: String, trim:true })
    nombreRedes: string;
  
    @Prop({ type: String, trim:true })
    linkFacebook: string;
  
    @Prop({ type: String, trim:true })
    linkInstagram: string;
  
    @Prop({ type: String, trim:true })
    DiasAtencion: string;
  
    @Prop({ type: String, trim:true })
    horarioAtencion: string;
  
    @Prop({ type: String, trim:true, required: [true, 'El departamento es un campo requerido'] })
    departamento: string;
  
    @Prop({ type: String, trim:true, required: [true, 'La provincia es un campo requerido'] })
    provincia: string;
  
    @Prop({ type: String, trim:true, required: [true, 'El distrito es un campo requerido'] })
    distrito: string;
  
    @Prop({ type: String, trim:true })
    imagen: string;     
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
}

export const IglesiaSchema = SchemaFactory.createForClass(Iglesia);

import { IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateIglesiaDto {
    @IsString()
    @IsOptional()
    readonly nombreIglesia?: string;  
    
    @IsString()
    @IsOptional()
    readonly direccionIglesia?: string;
    
    @IsString()
    @IsOptional()
    readonly referenciaDireccion?: string;
    
    @IsNumber()
    @IsOptional()
    readonly latitud?: number;

    @IsNumber()
    @IsOptional()
    readonly longitud?: number;

    @IsString()
    @IsOptional()
    readonly obreroCargo?: string;
    
    @IsString()
    @IsOptional()
    readonly numeroZona?: string;
    
    @IsString()
    @IsOptional()
    readonly personaContacto?: string;
    
    @IsString()
    @IsOptional()
    readonly telefono1?: string;
    
    @IsString()
    @IsOptional()
    readonly telefono2?: string;
    
    @IsString()
    @IsOptional()
    readonly nombreRedes?: string;
    
    @IsString()
    @IsOptional()
    readonly linkFacebook?: string;
    
    @IsString()
    @IsOptional()
    readonly linkInstagram?: string;
    
    @IsString()
    @IsOptional()
    readonly DiasAtencion?: string;
    
    @IsString()
    @IsOptional()
    readonly horarioAtencion?: string;
    
    @IsString()
    @IsOptional()
    readonly departamento?: string;
    
    @IsString()
    @IsOptional()
    readonly provincia?: string;
    
    @IsString()
    @IsOptional()
    readonly distrito?: string;
    
    @IsString()
    @IsOptional()
    readonly imagen?: string;    
}
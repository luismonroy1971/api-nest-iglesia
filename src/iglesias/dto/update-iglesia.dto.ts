import { IsString, IsNumber, IsOptional, IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateIglesiaDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly nombreIglesia?: string;  
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly direccionIglesia?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly referenciaDireccion?: string;
    
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    readonly latitud?: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    readonly longitud?: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly obreroCargo?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly numeroZona?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly personaContacto?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly telefono1?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly telefono2?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly nombreRedes?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly linkFacebook?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly linkInstagram?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly DiasAtencion?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly horarioAtencion?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly departamento?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly provincia?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly distrito?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    readonly imagen?: string;    

    @ApiProperty()
    @IsEmpty({ message: "no puede pasar la identificación de usuario"})
    readonly user: User;
}
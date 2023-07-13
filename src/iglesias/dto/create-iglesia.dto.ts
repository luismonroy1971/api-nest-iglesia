import { IsString, IsNumber, IsOptional, IsNotEmpty, IsEmpty } from "class-validator";
import { User } from "../../auth/schemas/user.schema";
import { ApiProperty } from "@nestjs/swagger";

export class CreateIglesiaDto {
    @ApiProperty()
    @IsString({message: 'El nombre de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'El nombre de la iglesia es obligatorio'})
    readonly nombreIglesia: string;  
    
    @ApiProperty()
    @IsString({message: 'La dirección de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'La dirección de la iglesia es obligatorio'})
    readonly direccionIglesia: string;
    
    @ApiProperty()
    @IsString({message: 'La referencia de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly referenciaDireccion?: string;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({message: 'La latitud de la iglesia es obligatorio'})
    readonly latitud: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({message: 'La longitud de la iglesia es obligatorio'})
    readonly longitud: number;

    @ApiProperty()
    @IsString({message: 'El nombre del obrero es una cadena de caraceteres'})
    @IsOptional()
    readonly obreroCargo?: string;
    
    @ApiProperty()
    @IsString({message: 'El número de la zona de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly numeroZona?: string;
    
    @ApiProperty()
    @IsString({message: 'La persona de contacto de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly personaContacto?: string;
    
    @ApiProperty()
    @IsString({message: 'El teléfono 1 es una cadena de caraceteres'})
    @IsOptional()
    readonly telefono1?: string;
    
    @ApiProperty()
    @IsString({message: 'El teléfono 2 es una cadena de caraceteres'})
    @IsOptional()
    readonly telefono2?: string;
    
    @ApiProperty()
    @IsString({message: 'El nombre en las redes es una cadena de caraceteres'})
    @IsOptional()
    readonly nombreRedes?: string;
    
    @ApiProperty()
    @IsString({message: 'El link de Facebook de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly linkFacebook?: string;
    
    @ApiProperty()
    @IsString({message: 'El link de Instagram de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly linkInstagram?: string;
    
    @ApiProperty()
    @IsString({message: 'Los días de atención de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly DiasAtencion?: string;
    
    @ApiProperty()
    @IsString({message: 'El horario de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly horarioAtencion?: string;
    
    @ApiProperty()
    @IsString({message: 'El departamento de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'El departamento de la iglesia es obligatorio'})
    readonly departamento: string;
    
    @ApiProperty()
    @IsString({message: 'La provincia de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'La provincia de la iglesia es obligatorio'})
    readonly provincia: string;
    
    @ApiProperty()
    @IsString({message: 'El distrito de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'El distrito de la iglesia es obligatorio'})
    readonly distrito: string;
    
    @ApiProperty()
    @IsString({message: 'La imagen de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly imagen?: string;    

    @ApiProperty()
    @IsEmpty({ message: "no puede pasar la identificación de usuario"})
    readonly user: User;
}
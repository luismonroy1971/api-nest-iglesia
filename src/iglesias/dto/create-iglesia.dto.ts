import { IsString, IsNumber, IsOptional, IsNotEmpty } from "class-validator";

export class CreateIglesiaDto {
    @IsString({message: 'El nombre de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'El nombre de la iglesia es obligatorio'})
    readonly nombreIglesia: string;  
    
    @IsString({message: 'La dirección de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'La dirección de la iglesia es obligatorio'})
    readonly direccionIglesia: string;
    
    @IsString({message: 'La referencia de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly referenciaDireccion?: string;
    
    @IsNumber()
    @IsNotEmpty({message: 'La latitud de la iglesia es obligatorio'})
    readonly latitud: number;

    @IsNumber()
    @IsNotEmpty({message: 'La longitud de la iglesia es obligatorio'})
    readonly longitud: number;

    @IsString({message: 'El nombre del obrero es una cadena de caraceteres'})
    @IsOptional()
    readonly obreroCargo?: string;
    
    @IsString({message: 'El número de la zona de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly numeroZona?: string;
    
    @IsString({message: 'La persona de contacto de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly personaContacto?: string;
    
    @IsString({message: 'El teléfono 1 es una cadena de caraceteres'})
    @IsOptional()
    readonly telefono1?: string;
    
    @IsString({message: 'El teléfono 2 es una cadena de caraceteres'})
    @IsOptional()
    readonly telefono2?: string;
    
    @IsString({message: 'El nombre en las redes es una cadena de caraceteres'})
    @IsOptional()
    readonly nombreRedes?: string;
    
    @IsString({message: 'El link de Facebook de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly linkFacebook?: string;
    
    @IsString({message: 'El link de Instagram de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly linkInstagram?: string;
    
    @IsString({message: 'Los días de atención de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly DiasAtencion?: string;
    
    @IsString({message: 'El horario de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly horarioAtencion?: string;
    
    @IsString({message: 'El departamento de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'El departamento de la iglesia es obligatorio'})
    readonly departamento: string;
    
    @IsString({message: 'La provincia de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'La provincia de la iglesia es obligatorio'})
    readonly provincia: string;
    
    @IsString({message: 'El distrito de la iglesia es una cadena de caraceteres'})
    @IsNotEmpty({message: 'El distrito de la iglesia es obligatorio'})
    readonly distrito: string;
    
    @IsString({message: 'La imagen de la iglesia es una cadena de caraceteres'})
    @IsOptional()
    readonly imagen?: string;    
}
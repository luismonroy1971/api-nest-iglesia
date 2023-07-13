import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";


export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Por favor ingrese un correo válido' })
  readonly email: string;

  @ApiProperty()

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
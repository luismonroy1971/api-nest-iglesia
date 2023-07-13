import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class UserUpdateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  readonly name: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail({}, { message: 'Por favor ingrese un correo válido' })
  readonly email: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(6)
  readonly password: string;

}


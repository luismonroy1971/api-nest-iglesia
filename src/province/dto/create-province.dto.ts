import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateProvinceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly department: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly province: string;
}
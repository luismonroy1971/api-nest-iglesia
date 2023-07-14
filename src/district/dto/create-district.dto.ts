import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateDistrictDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly department: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly province: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly district: string;

}
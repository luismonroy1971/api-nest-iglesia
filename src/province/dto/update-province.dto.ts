import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateProvinceDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly department: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly province: string;

}
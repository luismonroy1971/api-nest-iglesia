import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateDepartmentDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly department: string;
}
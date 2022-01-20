import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly lastname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly phone: string;

  @IsNotEmpty()
  @IsArray()
  readonly skills: any;
}

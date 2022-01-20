import { IsOptional, IsPositive, Min, ValidateIf } from 'class-validator';

export class FilterDto {
  @IsOptional()
  @IsPositive()
  readonly limit: number;

  @IsOptional()
  @Min(0)
  readonly offset: number;

  @IsOptional()
  @Min(0)
  readonly minPrice: number;

  @IsPositive()
  @ValidateIf((params) => params.minPrice)
  readonly maxPrice: number;
}

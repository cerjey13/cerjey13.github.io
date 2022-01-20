import { IsArray, IsDate, IsMongoId, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @IsNotEmpty()
  @IsMongoId()
  readonly customer: string;

  @IsNotEmpty()
  @IsArray()
  readonly products: string[];
}

import { PartialType } from '@nestjs/swagger';
import { PostgresCreateProductDto } from './create-product-postgres.dto';

export class PostgresUpdateProductDto extends PartialType(
  PostgresCreateProductDto,
) {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}

import { PartialType } from '@nestjs/swagger';
import { CreateOrderPostgresDto } from './create-order-postgres.dto';

export class UpdateOrderPostgresDto extends PartialType(
  CreateOrderPostgresDto,
) {}

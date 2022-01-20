import { PartialType } from '@nestjs/swagger';
import { CreateOrderItemDto } from './create-order-item-postgres.dto';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {}

import { Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderPostgres } from 'src/orders/entities/order-postgres.entity';
import { OrderItemPostgres } from 'src/orders/entities/order-product-postgres.entity';
import { Productp } from 'src/products/entities/product-postgres.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderPostgres, OrderItemPostgres, Productp]),
  ],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})
export class OrderItemModule {}

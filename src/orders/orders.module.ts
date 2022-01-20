import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order, OrderSchema } from './entities/order.entity';
import { OrderPostgres } from './entities/order-postgres.entity';
import { CustomerPostgres } from 'src/customer/entities/customer-postgres.entity';
import { OrderItemPostgres } from './entities/order-product-postgres.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerPostgres,
      OrderPostgres,
      OrderItemPostgres,
    ]),
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}

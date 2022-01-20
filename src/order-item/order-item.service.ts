import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { OrderPostgres } from 'src/orders/entities/order-postgres.entity';
import { CreateOrderItemDto } from './dto/create-order-item-postgres.dto';
import { UpdateOrderItemDto } from './dto/update-order-item-postgres.dto';
import { OrderItemPostgres } from 'src/orders/entities/order-product-postgres.entity';
import { Productp } from 'src/products/entities/product-postgres.entity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderPostgres)
    private readonly orderRepository: Repository<OrderPostgres>,
    @InjectRepository(OrderItemPostgres)
    private readonly itemsRepository: Repository<OrderItemPostgres>,
    @InjectRepository(Productp)
    private readonly productRepository: Repository<Productp>,
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    const order = await this.orderRepository.findOne(
      createOrderItemDto.orderId,
    );
    const product = await this.productRepository.findOne(
      createOrderItemDto.productId,
    );
    const item = new OrderItemPostgres();
    item.order = order;
    item.product = product;
    item.quantity = createOrderItemDto.quantity;
    return await this.itemsRepository.save(item);
  }

  findAll() {
    return `This action returns all orderItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return `This action updates a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}

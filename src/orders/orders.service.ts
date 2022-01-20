import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from 'mongoose';

import { CustomerPostgres } from 'src/customer/entities/customer-postgres.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderPostgres } from './entities/order-postgres.entity';
import { Order } from './entities/order.entity';
import { CreateOrderPostgresDto } from './dto/create-order-postgres.dto';
import { UpdateOrderPostgresDto } from './dto/update-order-postgres.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    @InjectRepository(CustomerPostgres)
    private readonly customerRepository: Repository<CustomerPostgres>,
    @InjectRepository(OrderPostgres)
    private readonly orderRepository: Repository<OrderPostgres>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const newOrder = await new this.orderModel(createOrderDto);
    return newOrder.save();
  }

  async createPostgres(createOrderDto: CreateOrderPostgresDto) {
    const newOrder = new OrderPostgres();
    if (createOrderDto.customerId) {
      const customer = await this.customerRepository.findOne(
        createOrderDto.customerId,
      );
      newOrder.customer = customer;
    }
    return await this.orderRepository.save(newOrder);
  }

  async findAll() {
    return await this.orderModel
      .find()
      .populate('customer')
      .populate('products')
      .exec();
  }

  async findAllPostgres() {
    return await this.orderRepository.find();
  }

  async findOne(id: string) {
    const order = await this.orderModel.findById(id);
    this.isOrder(id, order);
    return order;
  }

  async findOnePostgres(id: number) {
    const order = await this.orderRepository.findOne(id, {
      relations: ['items', 'items.product'],
    });
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderModel.findByIdAndUpdate(
      id,
      { $set: updateOrderDto },
      { new: true },
    );
    return order;
  }

  async updatePostgres(id: number, updateOrderDto: UpdateOrderPostgresDto) {
    const order = await this.orderRepository.findOne(id);
    if (updateOrderDto.customerId) {
      const customer = await this.customerRepository.findOne(
        updateOrderDto.customerId,
      );
      order.customer = customer;
    }
    return await this.orderRepository.save(order);
  }

  async remove(id: string) {
    return await this.orderModel.findByIdAndDelete(id);
  }

  async removePostgres(id: number) {
    return await this.orderRepository.delete(id);
  }

  async removeProduct(id: string, productId: string) {
    const order = await this.findOne(id);
    order.products.pull(productId);
    return order.save();
  }

  async addProducts(id: string, productsIds: string[]) {
    const order = await this.findOne(id);
    productsIds.forEach((productId) => order.products.push(productId));
    return order.save();
  }

  isOrder(id: string, order: Order) {
    if (!order) {
      throw new NotFoundException(`Order ${id} not found`);
    }
  }
}

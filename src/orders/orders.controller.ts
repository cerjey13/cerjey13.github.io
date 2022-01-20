import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { MongoIdPipe } from 'src/common/pipe/mongo-id.pipe';
import { AddProductsToOrderDto } from './dto/add-products-to-order.dto';
import { CreateOrderPostgresDto } from './dto/create-order-postgres.dto';
import { UpdateOrderPostgresDto } from './dto/update-order-postgres.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post('postgres')
  createPostgres(@Body() createOrderDto: CreateOrderPostgresDto) {
    return this.ordersService.createPostgres(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get('postgres')
  findAllPostgres() {
    return this.ordersService.findAllPostgres();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.findOne(id);
  }

  @Get('postgres/:id')
  findOnePostgres(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOnePostgres(id);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Put('postgres:id')
  updatePostgres(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: UpdateOrderPostgresDto,
  ) {
    return this.ordersService.updatePostgres(id, updateOrderDto);
  }

  @Put(':id/products')
  addProducts(
    @Param('id', MongoIdPipe) id: string,
    @Body() addProductsToOrderDto: AddProductsToOrderDto,
  ) {
    return this.ordersService.addProducts(
      id,
      addProductsToOrderDto.productsIds,
    );
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.remove(id);
  }

  @Delete('postgres:id')
  removePostgres(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.removePostgres(id);
  }

  @Delete(':id/products/:productId')
  removeProduct(
    @Param('id', MongoIdPipe) id: string,
    @Param('productId', MongoIdPipe) productId: string,
  ) {
    return this.ordersService.removeProduct(id, productId);
  }
}

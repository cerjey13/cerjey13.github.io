import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MongoIdPipe } from 'src/common/pipe/mongo-id.pipe';
import { CustomerService } from './customer.service';
import { PostgresCreateCustomerDto } from './dto/create-customer-postgres.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Post('postgres')
  createPostgres(@Body() createCustomerDto: PostgresCreateCustomerDto) {
    return this.customerService.createPostgres(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get('postgres')
  findAllPostgres() {
    return this.customerService.findAllPostgres();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.customerService.findOne(id);
  }

  @Get('postgres/:id')
  findOnePostgres(@Param('id') id: number) {
    return this.customerService.findOnePostgres(id);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, updateCustomerDto);
  }

  @Put('postgres/:id')
  updatePostgres(
    @Param('id') id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.updatePostgres(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.customerService.remove(id);
  }

  @Delete('postgres/:id')
  removePostgres(@Param('id') id: number) {
    return this.customerService.removePostgres(id);
  }
}

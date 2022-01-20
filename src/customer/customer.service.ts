import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { CustomerPostgres } from './entities/customer-postgres.entity';
import { PostgresCreateCustomerDto } from './dto/create-customer-postgres.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private readonly customerModel: Model<Customer>,
    @InjectRepository(CustomerPostgres)
    private readonly customerRepository: Repository<CustomerPostgres>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = await new this.customerModel(createCustomerDto);
    return newCustomer.save();
  }

  async createPostgres(createCustomerDto: PostgresCreateCustomerDto) {
    const newCustomer = await this.customerRepository.create(createCustomerDto);
    return this.customerRepository.save(newCustomer);
  }

  async findAll() {
    return await this.customerModel.find().exec();
  }

  async findAllPostgres() {
    return await this.customerRepository.find();
  }

  async findOne(id: string) {
    const customer = await this.customerModel.findById(id);
    this.isCustomer(id, customer);
    return customer;
  }

  async findOnePostgres(id: number) {
    const customer = await this.customerRepository.findOne(id);
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerModel.findByIdAndUpdate(
      id,
      { $set: updateCustomerDto },
      { new: true },
    );
    return customer;
  }

  async updatePostgres(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOne(id);
    this.customerRepository.merge(customer, updateCustomerDto);
    return this.customerRepository.save(customer);
  }

  async remove(id: string) {
    return await this.customerModel.findByIdAndDelete(id);
  }

  async removePostgres(id: number) {
    return await this.customerRepository.delete(id);
  }

  isCustomer(id: string, customer: Customer) {
    if (!customer) {
      throw new NotFoundException(`Customer ${id} Not Found`);
    }
  }
}

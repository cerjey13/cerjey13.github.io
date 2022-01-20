import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductsService } from 'src/products/products.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserPostgres } from './entities/user-postgres.entity';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly productsService: ProductsService,
    @InjectModel(User.name) private readonly usersModel: Model<User>,
    @InjectRepository(UserPostgres)
    private readonly userRepository: Repository<UserPostgres>,
    private readonly customerService: CustomerService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await new this.usersModel(createUserDto);
    return newUser.save();
  }

  async createPostgres(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    if (createUserDto.customerId) {
      const customer = await this.customerService.findOnePostgres(
        createUserDto.customerId,
      );
      newUser.customer = customer;
    }

    return this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.usersModel.find().exec();
  }

  async findAllPostgres() {
    return await this.userRepository.find({
      relations: ['customer'],
    });
  }

  async findOne(id: string) {
    const user = await this.usersModel.findById(id).exec();
    this.isUser(id, user);
    return user;
  }

  async findOnePostgres(id: number) {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async getOrders(id: string) {
    const user = await this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersModel.findByIdAndUpdate(
      id,
      { $set: updateUserDto },
      { new: true },
    );
    return user;
  }

  async updatePostgres(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: string) {
    return await this.usersModel.findByIdAndDelete(id);
  }

  async removePostgres(id: number) {
    return await this.userRepository.delete(id);
  }

  isUser(id, user) {
    if (!user) {
      throw new NotFoundException(`user ${id} not found`);
    }
  }
}

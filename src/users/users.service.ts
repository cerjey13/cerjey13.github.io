import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly configService: ConfigService,
  ) {}

  private counter = 1;
  private users: User[] = [
    {
      id: this.counter,
      email: 'Pedro@gmail.com',
      password: 'Picapiedra123',
      role: 'admin',
    },
  ];

  create(createUserDto: CreateUserDto) {
    this.counter++;
    const newUser = {
      id: this.counter,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    console.log(apiKey);
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw new NotFoundException(`user ${id} not found`);
    }
    return user;
  }

  getOrders(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((index) => index.id == id);
    this.users[index] = {
      ...user,
      ...updateUserDto,
    };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.findOne(id)
      ? this.users.findIndex((index) => index.id === id)
      : null;
    return {
      message: `User ${id} deleted`,
      ...this.users.splice(index, 1),
    };
  }
}

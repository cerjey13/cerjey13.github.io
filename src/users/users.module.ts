import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProductsModule } from 'src/products/products.module';
import { User, UserSchema } from './entities/user.entity';
import { UserPostgres } from './entities/user-postgres.entity';
import { CustomerPostgres } from 'src/customer/entities/customer-postgres.entity';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [
    ProductsModule,
    CustomerModule,
    TypeOrmModule.forFeature([UserPostgres, CustomerPostgres]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

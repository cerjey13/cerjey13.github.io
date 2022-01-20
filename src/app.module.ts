import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { CustomerModule } from './customer/customer.module';
import { BrandsModule } from './brands/brands.module';
import { enviroments } from './enviroment';
import { DatabaseModule } from './database/database.module';
import { OrderItemModule } from './order-item/order-item.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      // validationSchema: Joi.object({
      //   API_KEY: Joi.number().required(),
      //   DATABASE_NAME: Joi.string().required(),
      //   DATABASE_PORT: Joi.number().required(),
      // }),
      isGlobal: true,
    }),
    ProductsModule,
    CategoriesModule,
    UsersModule,
    OrdersModule,
    CustomerModule,
    BrandsModule,
    HttpModule,
    DatabaseModule,
    OrderItemModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http.get(
          'https://jsonplaceholder.typicode.com/todos',
        );
        return (await firstValueFrom(tasks)).data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}

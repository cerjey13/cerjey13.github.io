import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './entities/product.entity';
import { Productp } from './entities/product-postgres.entity';
import { BrandsModule } from 'src/brands/brands.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoryPostgres } from 'src/categories/entities/category-postgres.entity';
import { BrandPostgres } from 'src/brands/entities/brand-postgres.entity';

@Module({
  imports: [
    BrandsModule,
    CategoriesModule,
    TypeOrmModule.forFeature([Productp, CategoryPostgres, BrandPostgres]),
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}

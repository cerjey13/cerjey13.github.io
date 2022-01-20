import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, FilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindConditions, Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Productp } from './entities/product-postgres.entity';
import { FilterDto } from '../common/dto/filter.dto';
import { PostgresCreateProductDto } from './dto/create-product-postgres.dto';
import { PostgresUpdateProductDto } from './dto/update-product.dto copy';
import { CategoryPostgres } from 'src/categories/entities/category-postgres.entity';
import { BrandPostgres } from 'src/brands/entities/brand-postgres.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectRepository(CategoryPostgres)
    private readonly categoryRepository: Repository<CategoryPostgres>,
    @InjectRepository(Productp)
    private readonly productRepo: Repository<Productp>,
    @InjectRepository(BrandPostgres)
    private readonly brandRepository: Repository<BrandPostgres>,
  ) {}

  async create(payload: CreateProductDto) {
    const newProduct = await new this.productModel(payload);
    return newProduct.save();
  }

  async createPostgres(createProductDto: PostgresCreateProductDto) {
    const newProduct = await this.productRepo.create(createProductDto);
    if (createProductDto.brandId) {
      const brand = await this.brandRepository.findOne(
        createProductDto.brandId,
      );
      newProduct.brands = brand;
    }
    if (createProductDto.categoryId) {
      const categories = await this.categoryRepository.findByIds(
        createProductDto.categoryId,
      );
      newProduct.category = categories;
    }
    return this.productRepo.save(newProduct);
  }

  async findAllPostgres(params?: FilterDto) {
    if (params) {
      const where: FindConditions<Productp> = {};
      const { limit, offset, minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        where.price = Between(minPrice, maxPrice);
      }
      return this.productRepo.find({
        relations: ['brands'],
        where,
        take: limit,
        skip: offset,
      });
    }
    return this.productRepo.find({
      relations: ['brands'],
    });
  }

  async findAll(params?: FilterDto) {
    if (params) {
      const filter: FilterQuery<Product> = {};
      const { limit, offset, minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        filter.price = { $gte: minPrice, $lte: maxPrice };
      }
      return await this.productModel
        .find(filter)
        .populate('brand')
        .skip(offset)
        .limit(limit)
        .exec();
    }
    return await this.productModel.find().populate('brand').exec();
  }

  async findOne(id: string) {
    const product = await this.productModel
      .findOne({ _id: id })
      .populate('brand')
      .exec();
    this.isProduct(id, product);
    return product;
  }

  async findOnePostgres(id: number) {
    const product = await this.productRepo.findOne(id, {
      relations: ['brands', 'category'],
    });
    return product;
  }

  async update(id: string, payload: UpdateProductDto) {
    const product = await this.productModel
      .findByIdAndUpdate(
        id,
        {
          $set: payload,
        },
        { new: true },
      )
      .exec();
    this.isProduct(id, product);
    return product;
  }

  async updatePostgres(id: number, updateProductDto: PostgresUpdateProductDto) {
    const product = await this.productRepo.findOne(id);
    if (updateProductDto.brandId) {
      const brand = await this.brandRepository.findOne(
        updateProductDto.brandId,
      );
      product.brands = brand;
    }
    this.productRepo.merge(product, updateProductDto);
    return this.productRepo.save(product);
  }

  async removeCategoryByProduct(id: number, categoryId: number) {
    const product = await this.productRepo.findOne(id, {
      relations: ['category'],
    });
    product.category = product.category.filter(
      (item) => item.id !== categoryId,
    );
    return this.productRepo.save(product);
  }

  async addCategoryToProduct(id: number, categoryId: number) {
    const product = await this.productRepo.findOne(id, {
      relations: ['category'],
    });
    const category = await this.categoryRepository.findOne(categoryId);
    product.category.push(category);
    return this.productRepo.save(product);
  }

  async remove(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }

  async removePostgres(id: number) {
    return await this.productRepo.delete(id);
  }

  isProduct(id: string, product: any) {
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
  }
}

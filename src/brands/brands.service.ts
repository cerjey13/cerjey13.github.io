import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { BrandPostgres } from './entities/brand-postgres.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private readonly brandModel: Model<Brand>,
    @InjectRepository(BrandPostgres)
    private readonly brandRepository: Repository<BrandPostgres>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    const newBrand = await new this.brandModel(createBrandDto);
    return newBrand.save();
  }

  async createPostgres(createBrandDto: CreateBrandDto) {
    const newBrand = await this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(newBrand);
  }

  async findAll() {
    return await this.brandModel.find().exec();
  }

  async findAllPostgres() {
    return await this.brandRepository.find();
  }

  async findOne(id: string) {
    const brand = await this.brandModel.findById(id);
    this.isBrand(id, brand);
    return brand;
  }

  async findOnePostgres(id: number) {
    const brand = await this.brandRepository.findOne(id, {
      relations: ['products'],
    });
    return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = await this.brandModel.findByIdAndUpdate(
      id,
      { $set: updateBrandDto },
      { new: true },
    );
    this.isBrand(id, brand);
    return brand;
  }

  async updatePostgres(id: number, updateBrandDto: UpdateBrandDto) {
    const brand = await this.brandRepository.findOne(id);
    this.brandRepository.merge(brand, updateBrandDto);
    return this.brandRepository.save(brand);
  }

  async remove(id: string) {
    return await this.brandModel.findByIdAndDelete(id);
  }

  async removePostgres(id: number) {
    return await this.brandRepository.delete(id);
  }

  isBrand(id: string, brand: Brand) {
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
  }
}

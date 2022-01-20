import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryPostgres } from './entities/category-postgres.entity';
@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    @InjectRepository(CategoryPostgres)
    private readonly categoryRepository: Repository<CategoryPostgres>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await new this.categoryModel(createCategoryDto);
    return newCategory.save();
  }

  async createPostgres(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(newCategory);
  }

  async findAll() {
    return await this.categoryModel.find().exec();
  }

  async findAllPostgres() {
    return await this.categoryRepository.find();
  }

  async findOne(id: string) {
    const category = await this.categoryModel.findById(id);
    this.isCategory(id, category);
    return category;
  }

  async findOnePostgres(id: number) {
    const category = await this.categoryRepository.findOne(id, {
      relations: ['products'],
    });
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryModel.findByIdAndUpdate(
      id,
      { $set: updateCategoryDto },
      { new: true },
    );
    return category;
  }

  async updatePostgres(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne(id);
    this.categoryRepository.merge(category, updateCategoryDto);
    return this.categoryRepository.save(category);
  }

  async remove(id: string) {
    return await this.categoryModel.findByIdAndDelete(id);
  }

  async removePostgres(id: number) {
    return await this.categoryRepository.delete(id);
  }

  isCategory(id: string, category: any) {
    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }
  }
}

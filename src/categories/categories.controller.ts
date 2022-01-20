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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Post('postgres')
  createPostgres(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createPostgres(createCategoryDto);
  }

  @Get()
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get('postgres')
  findAllPostgres() {
    return this.categoriesService.findAllPostgres();
  }

  @Get(':id/products/:productId')
  getCategory(
    @Param('productId', MongoIdPipe) productId: string,
    @Param('id', MongoIdPipe) id: string,
  ) {
    return { mensaje: `product ${productId} and ${id}` };
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.categoriesService.findOne(id);
  }

  @Get('postgres/:id')
  findOnePostgres(@Param('id') id: number) {
    return this.categoriesService.findOnePostgres(id);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  @Put('postgres:id')
  updatePostgres(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.updatePostgres(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.categoriesService.remove(id);
  }

  @Delete('postgres:id')
  removePostgres(@Param('id', MongoIdPipe) id: number) {
    return this.categoriesService.removePostgres(id);
  }
}

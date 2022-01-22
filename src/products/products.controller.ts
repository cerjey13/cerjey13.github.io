import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { PostgresCreateProductDto } from './dto/create-product-postgres.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MongoIdPipe } from '../common/pipe/mongo-id.pipe';
import { FilterDto } from '../common/dto/filter.dto';
import { PostgresUpdateProductDto } from './dto/update-product.dto copy';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.model';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@UseGuards(JwtGuard, RolesGuard)
@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Public()
  @Get()
  getAll(@Query() params: FilterDto) {
    return this.productsService.findAll(params);
  }

  @Public()
  @Get('postgres')
  getAllPostgres(@Query() params: FilterDto) {
    return this.productsService.findAllPostgres(params);
  }

  @Public()
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', MongoIdPipe) productId: string) {
    return this.productsService.findOne(productId);
  }

  @Public()
  @Get('postgres/:productId')
  getOnePostgres(@Param('productId') productId: number) {
    return this.productsService.findOnePostgres(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Roles(Role.ADMIN)
  @Post('postgres')
  createPostgres(@Body() createProductDto: PostgresCreateProductDto) {
    return this.productsService.createPostgres(createProductDto);
  }

  @Put(':productId')
  update(
    @Param('productId', MongoIdPipe) productId: string,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(productId, payload);
  }

  @Put('postgres/:productId')
  updatePostgres(
    @Param('productId') productId: number,
    @Body() updateProductDto: PostgresUpdateProductDto,
  ) {
    return this.productsService.updatePostgres(productId, updateProductDto);
  }

  @Put('postgres/:productId/category/:categoryId')
  addCategoryToProduct(
    @Param('productId') productId: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.addCategoryToProduct(productId, categoryId);
  }

  @Delete(':productId')
  remove(@Param('productId', MongoIdPipe) productId: string) {
    return this.productsService.remove(productId);
  }

  @Delete('postgres/:productId')
  removePostgres(@Param('productId') productId: number) {
    return this.productsService.removePostgres(productId);
  }

  @Delete('postgres/:id/category/:categoryId')
  removeCategoryPostgres(
    @Param('id', ParseIntPipe) id: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return this.productsService.removeCategoryByProduct(id, categoryId);
  }
}

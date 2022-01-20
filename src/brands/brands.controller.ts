import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MongoIdPipe } from 'src/common/pipe/mongo-id.pipe';
import { ApiTags } from '@nestjs/swagger';

import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Post('postgres')
  createPostgres(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.createPostgres(createBrandDto);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get('postgres')
  findAllPostgres() {
    return this.brandsService.findAllPostgres();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.brandsService.findOne(id);
  }

  @Get('postgres/:id')
  findOnePostgres(@Param('id') id: number) {
    return this.brandsService.findOnePostgres(id);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Put('postgres/:id')
  updatePostgres(
    @Param('id') id: number,
    @Body() updateBrandDto: UpdateBrandDto,
  ) {
    return this.brandsService.updatePostgres(id, updateBrandDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.brandsService.remove(id);
  }

  @Delete('postgres/:id')
  removePostgres(@Param('id') id: number) {
    return this.brandsService.removePostgres(id);
  }
}

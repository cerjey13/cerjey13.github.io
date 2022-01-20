import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MongoIdPipe } from 'src/common/pipe/mongo-id.pipe';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('postgres')
  createPostgres(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createPostgres(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'List of users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get('postgres')
  findAllPostgres() {
    return this.usersService.findAllPostgres();
  }

  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Get('postgres/:id')
  findOnePostgres(@Param('id') id: number) {
    return this.usersService.findOnePostgres(id);
  }

  @Get(':id/orders')
  findOrders(@Param('id', MongoIdPipe) id: string) {
    return this.usersService.getOrders(id);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Put('postgres/:id')
  updatePostgres(
    @Param('id', MongoIdPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updatePostgres(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.usersService.remove(id);
  }

  @Delete('postgres/:id')
  removePostgres(@Param('id') id: number) {
    return this.usersService.removePostgres(id);
  }
}

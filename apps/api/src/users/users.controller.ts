import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '@meetapp/api/data-access';
import { Role } from '@meetapp/api/data-access';

import { Roles } from '../auth/decorators/roles';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(readonly usersService: UsersService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createCatDto: CreateUserDto) {
    this.usersService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

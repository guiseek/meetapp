import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { DbUser, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(DbUser.name) private dbUserModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.dbUserModel.create(createUserDto);

    return user.then((u) => u.save());
  }

  async findAll() {
    return this.dbUserModel.find<DbUser>();
  }

  async findOne(id: string) {
    return this.dbUserModel.findById<DbUser>(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.dbUserModel.findOneAndUpdate<DbUser>({ id }, updateUserDto);
  }

  async remove(id: string) {
    return this.dbUserModel.findOneAndDelete<DbUser>({ id });
  }
}

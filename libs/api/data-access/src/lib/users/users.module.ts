import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRepository } from './users.repository';
import { DbUser, UserSchema } from './schemas/user.schema';

const featureDbUser = { name: DbUser.name, schema: UserSchema };

@Module({
  imports: [MongooseModule.forFeature([featureDbUser])],
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class UsersModule {}

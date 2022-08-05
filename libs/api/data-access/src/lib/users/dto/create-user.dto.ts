import { IsNotEmpty } from 'class-validator';
import { DbUser } from '../schemas/user.schema';

type BaseUser = Omit<DbUser, 'roles' | 'createdAt' | 'updatedAt'>;

export class CreateUserDto implements BaseUser {
  @IsNotEmpty()
  username!: string;

  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;

  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  salt!: string;
}

import { Role } from '../enums/role.enum';

export interface UserEntity {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
  password: string;
  salt: string;
  createdAt: Date;
  updatedAt: Date;
}

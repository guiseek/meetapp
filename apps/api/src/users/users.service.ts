import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateUserDto,
  UpdateUserDto,
  UsersRepository,
} from '@meetapp/api/data-access';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    try {
      return this.usersRepository.create(createUserDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    try {
      return this.usersRepository.findOne(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return this.usersRepository.update(id, updateUserDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  remove(id: string) {
    try {
      return this.usersRepository.remove(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

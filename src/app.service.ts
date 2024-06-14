import { Injectable } from '@nestjs/common';
import { userRepository } from './repositories/user-repository';
import { User } from './entities/user';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: userRepository) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.findMany();
    return users;
  }
}

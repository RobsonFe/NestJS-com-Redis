import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { userRepository } from '../user-repository';
import { RedisService } from 'src/config/redis';
import { PrismaUserRepository } from '../prisma/prisma-user-repository';

@Injectable()
export class RedisUserRepository implements userRepository {
  constructor(
    private readonly redis: RedisService,
    private readonly prismaUserRepository: PrismaUserRepository,
  ) {}
  async findMany(): Promise<User[]> {
    const cachedUsers = await this.redis.get('users');

    if (!cachedUsers) {
      const users = await this.prismaUserRepository.findMany();

      await this.redis.set('users', JSON.stringify(users), 'EX', 15);

      console.log('\x1b[33m%s\x1b[0m', 'From Database');

      return users;
    }

    console.log('\x1b[36m%s\x1b[0m', 'From Cache');

    return JSON.parse(cachedUsers);
  }
}

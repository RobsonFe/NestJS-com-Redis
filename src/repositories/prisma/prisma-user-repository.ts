import { Injectable } from '@nestjs/common';
import { userRepository } from '../user-repository';
import { User } from 'src/entities/user';
import { PrismaService } from 'src/config/prisma';

@Injectable()
export class PrismaUserRepository implements userRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}

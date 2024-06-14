import { User } from 'src/entities/user';

export abstract class userRepository {
  abstract findMany(): Promise<User[]>;
}

import { Injectable } from '@nestjs/common';
import { User } from '../common/type';

@Injectable()
export class UsersService {
  private readonly users: Array<User> = [
    { id: 1, username: 'john', password: 'password', roles: ['admin'] },
    { id: 2, username: 'jane', password: 'password', roles: ['user'] },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}

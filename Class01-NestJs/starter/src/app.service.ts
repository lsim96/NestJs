import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class AppService {
  users: User[] = [];

  getHello(): string {
    return 'Hello World!';
  }
  getFullName(): string {
    return 'Leon Simonoski';
  }

  getUsers(): User[] {
    return this.users;
  }

  createUser(userData: User) {
    this.users.push(userData);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findAll() {
    return await prisma.users.findMany();
  }

  async findOne(id: string) {
    return await prisma.users.findFirst({
      where: {
        id: parseInt(id),
      },
    });
  }
}

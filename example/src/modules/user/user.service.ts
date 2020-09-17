import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-crud-prisma';
import { PrismaService } from 'nestjs-prisma-module';
import { User } from '../../generated/type-graphql';

@Injectable()
export class UserService extends PrismaCrudService<User> {
  constructor(prisma: PrismaService) {
    const result = await prisma.user.findMany();
    result.length;
    const count = await prisma.user.count();
    super(prisma, User);
  }
}

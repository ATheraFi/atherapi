import { Injectable } from '@nestjs/common';
import { HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt'
import { User } from '@prisma/client';

interface FormatUsername extends Partial<User> {
  username: string;
}

@Injectable()
export class UsersService {
  
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const userExists = await this.prismaService.user.findFirst({
      where: { username: createUserDto.username }
    })

    // Check if user already exists
    if (userExists) {
      throw new HttpException("user_already_exists", HttpStatus.CONFLICT)
    }

    // If user does not exist, create a new user.
    const createdUser = await this.prismaService.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: await hash(createUserDto.password, 10)
      }
    })

    return {
      statusCode: 200,
      data: createdUser
    }
  }

  async findOne(username: string) {
    return this.prismaService.user.findUnique({
      where: {
        username: username
      }
    })
  }
}

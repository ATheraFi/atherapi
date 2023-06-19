import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService, 
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // Finds the user
    const user = await this.usersService.findOne(username);
    // Checks if the user passwords match
    const isMatch = await bcrypt.compare(pass, user.password)
    if (isMatch) {
      const { password, ...result} = user;
      return result
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      userId: user.id, 
      username: user.username, 
      email: user.email 
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    const newUser = this.usersService.create(createUserDto);

    return {
      user: newUser
    }
  }
}

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TherapiesModule } from './therapies/therapies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, TherapiesModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

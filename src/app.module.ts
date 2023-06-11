import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TherapiesModule } from './therapies/therapies.module';

@Module({
  imports: [PrismaModule, TherapiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

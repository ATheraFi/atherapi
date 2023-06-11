import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TherapiesService } from './therapies.service';
import { CreateTherapyDto } from './dto/create-therapy.dto';
import { UpdateTherapyDto } from './dto/update-therapy.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Therapies')
@Controller('therapies')
export class TherapiesController {
  constructor(private readonly therapiesService: TherapiesService) {}

  @Post()
  async create(@Body() createTherapyDto: CreateTherapyDto) {
    return await this.therapiesService.create(createTherapyDto);
  }

  @Get()
  async findAll() {
    return await this.therapiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.therapiesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTherapyDto: UpdateTherapyDto) {
    return await this.therapiesService.update(id, updateTherapyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.therapiesService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTherapyDto } from './dto/create-therapy.dto';
import { UpdateTherapyDto } from './dto/update-therapy.dto';

@Injectable()
export class TherapiesService {
  constructor(private prisma: PrismaService) {}

  async create(createTherapyDto: CreateTherapyDto) {
    const providers = createTherapyDto.providers.map(provider => ({
      name: provider.name,
    }));
  
    const createData = await this.prisma.therapy.create({
      data: {
        name: createTherapyDto.name,
        description: createTherapyDto.description,
        address: createTherapyDto.address,
        city: createTherapyDto.city,
        state: createTherapyDto.state,
        zipcode: createTherapyDto.zipcode,
        phoneNumber: createTherapyDto.phoneNumber,
        website: createTherapyDto.website,
        email: createTherapyDto.email,
        companyContact: createTherapyDto.companyContact,
        registrationDate: createTherapyDto.registrationDate,
        therapyType: createTherapyDto.therapyType,
        acceptingClients: createTherapyDto.acceptingClients,
        providers: {
          create: providers,
        },
      },
    });

    return { 
      statusCode: 200,
      data: createData
    };
  }

  async findAll() {
    const data = await this.prisma.therapy.findMany({});
    return {
      statusCode: 200,
      data: data
    }
  }

  async findOne(id: string) {
    const data = await this.prisma.therapy.findFirst({
      where: {
        id,
      }
    });
    return {
      statusCode: 200,
      data: data
    }
  }

  async update(id: string, updateTherapyDto: UpdateTherapyDto) {
    const updateTherapy = await this.prisma.therapy.update({
      data: updateTherapyDto,
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: updateTherapy
    }
  }

  async remove(id: string) {
    const deleteTherapy = await this.prisma.therapy.delete({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: deleteTherapy,
      message: `Successful delete of ID: ${id}`
    }
  }
}

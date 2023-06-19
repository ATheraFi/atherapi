import { IsDate, IsLatitude, IsLongitude, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

enum TherapyType {
  BEHAVIORAL = "BEHAVIORAL",
  OCCUPATIONAL = "OCCUPATIONAL",
  PHYSICAL = "PHYSICAL",
  SPEECH = "SPEECH",
}

class CreateProviderDTO {
  name: string;
}

export class CreateTherapyDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  lat: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsLongitude()
  lng: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  zipcode: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  website: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  companyContact: string;

  @ApiProperty()
  @IsDate()
  registrationDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  therapyType: TherapyType;

  @ApiProperty()
  @IsNotEmpty()
  acceptingClients: boolean;

  @ApiProperty()
  providers: CreateProviderDTO[]; 
}

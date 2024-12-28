import { IsNotEmpty, IsOptional } from 'class-validator';

export class houseDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  rooms: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  square: number;

  @IsNotEmpty()
  description: string;
}

export class houseUpdateDto {
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsNotEmpty()
  rooms: number;

  @IsOptional()
  @IsNotEmpty()
  price: number;

  @IsOptional()
  @IsNotEmpty()
  square: number;

  @IsOptional()
  @IsNotEmpty()
  description: string;
}

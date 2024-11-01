import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class postDto {
  @ApiProperty({ example: 'Ferrari spa' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'the popular car of ferrari' })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Alex' })
  @IsNotEmpty()
  author: string;
}

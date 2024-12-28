import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { House } from './schema/house.schema';
import { Model } from 'mongoose';
import { houseDto, houseUpdateDto } from './dto/house.fto';

@Injectable()
export class HouseService {
  constructor(@InjectModel(House.name) private house: Model<House>) {}

  async insertHouse(dto: houseDto) {
    const house = new this.house(dto);
    await house.save();

    return house;
  }

  async updateHouse(id: string, dto: houseUpdateDto) {
    await this.checkHouse(id);

    const house = await this.house.findByIdAndUpdate(id, dto, { new: true });
    return house;
  }

  async getHouses() {
    const houses = await this.house
      .find()
      .lean()
      .select('-description -square -rooms');

    return houses;
  }

  async getHouse(id: string) {
    return this.checkHouse(id);
  }

  async removeHouse(id: string) {
    await this.checkHouse(id);

    await this.house.findByIdAndDelete(id);
    return true;
  }

  private async checkHouse(id: string) {
    const house = await this.house.findById(id);
    if (!house) {
      throw new BadRequestException('House is not found');
    }

    return house;
  }
}

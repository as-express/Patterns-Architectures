import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { MongooseModule } from '@nestjs/mongoose';
import { House, houseSchema } from './schema/house.schema';
import { HouseController } from './house.controller';
import { CreateHouseHandler } from './commands/handlers/create.handler';
import { GetHousesHandler } from './queries/handlers/get.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: House.name, schema: houseSchema }]),
    CqrsModule,
  ],
  controllers: [HouseController],
  providers: [HouseService, CreateHouseHandler, GetHousesHandler],
})
export class HouseModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { houseDto, houseUpdateDto } from './dto/house.fto';
import { CreateHouseCommand } from './commands/insert.command';
import { GetHousesQuery } from './queries/get.query';
import { GetOneHouseQuery } from './queries/get-one.query';
import { UpdateHouseCommand } from './commands/update.command';
import { DeleteHouseCommand } from './commands/delete.command';

@Controller('house')
export class HouseController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBas: QueryBus,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async insertUser(@Body() dto: houseDto) {
    return this.commandBus.execute(new CreateHouseCommand(dto));
  }

  @Get()
  async getHouses() {
    return this.queryBas.execute(new GetHousesQuery());
  }

  @Get(':id')
  async getHouse(@Param('id') id: string) {
    return this.queryBas.execute(new GetOneHouseQuery(id));
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async updateHouse(@Param('id') id: string, @Body() dto: houseUpdateDto) {
    return this.commandBus.execute(new UpdateHouseCommand(id, dto));
  }

  @Delete(':id')
  async deleteHouse(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteHouseCommand(id));
  }
}

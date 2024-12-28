import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HouseService } from 'src/house/house.service';
import { UpdateHouseCommand } from '../update.command';

@CommandHandler(UpdateHouseCommand)
export class UpdateHouseHandler implements ICommandHandler<UpdateHouseCommand> {
  constructor(private readonly houseService: HouseService) {}

  async execute(command: UpdateHouseCommand): Promise<any> {
    const { id, data } = command;
    const user = await this.houseService.updateHouse(id, data);

    console.log('User Updated Success');
    return user;
  }
}

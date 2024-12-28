import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateHouseCommand } from '../insert.command';
import { HouseService } from 'src/house/house.service';
import { DeleteHouseCommand } from '../delete.command';

@CommandHandler(DeleteHouseCommand)
export class DeleteHouseHandler implements ICommandHandler<DeleteHouseCommand> {
  constructor(private readonly houseService: HouseService) {}

  async execute(command: DeleteHouseCommand): Promise<any> {
    const { id } = command;
    const user = await this.houseService.removeHouse(id);

    console.log('User Deleted Success');
    return user;
  }
}

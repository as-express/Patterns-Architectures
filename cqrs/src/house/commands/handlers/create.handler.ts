import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateHouseCommand } from '../insert.command';
import { HouseService } from 'src/house/house.service';

@CommandHandler(CreateHouseCommand)
export class CreateHouseHandler implements ICommandHandler<CreateHouseCommand> {
  constructor(private readonly houseService: HouseService) {}

  async execute(command: CreateHouseCommand): Promise<any> {
    const { data } = command;
    const user = await this.houseService.insertHouse(data);

    console.log('User Created Success');
    return user;
  }
}

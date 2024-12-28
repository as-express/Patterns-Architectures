import { houseDto } from '../dto/house.fto';

export class CreateHouseCommand {
  constructor(public readonly data: houseDto) {}
}

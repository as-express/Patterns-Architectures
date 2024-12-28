import { houseUpdateDto } from '../dto/house.fto';

export class UpdateHouseCommand {
  constructor(
    public readonly id: string,
    public readonly data: houseUpdateDto,
  ) {}
}

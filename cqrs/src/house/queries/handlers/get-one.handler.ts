import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHousesQuery } from '../get.query';
import { HouseService } from 'src/house/house.service';
import { GetOneHouseQuery } from '../get-one.query';

@QueryHandler(GetOneHouseQuery)
export class GetOneHousesHandler implements IQueryHandler<GetOneHouseQuery> {
  constructor(private readonly houseService: HouseService) {}

  async execute(query: GetOneHouseQuery): Promise<any> {
    const { id } = query;
    return this.houseService.getHouse(id);
  }
}

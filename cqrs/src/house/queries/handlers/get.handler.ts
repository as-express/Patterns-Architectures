import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetHousesQuery } from '../get.query';
import { HouseService } from 'src/house/house.service';

@QueryHandler(GetHousesQuery)
export class GetHousesHandler implements IQueryHandler<GetHousesQuery> {
  constructor(private readonly houseService: HouseService) {}

  async execute(query: GetHousesQuery): Promise<any> {
    return this.houseService.getHouses();
  }
}

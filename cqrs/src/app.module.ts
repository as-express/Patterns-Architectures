import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseModule } from './house/house.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://expressaset:1234@asetsila.6ld82.mongodb.net/CQRS?retryWrites=true&w=majority&appName=AsetSila',
    ),
    HouseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

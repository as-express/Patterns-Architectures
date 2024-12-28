import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class House {
  @Prop()
  title: string;

  @Prop()
  rooms: number;

  @Prop()
  square: number;

  @Prop()
  state: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const houseSchema = SchemaFactory.createForClass(House);

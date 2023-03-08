import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  lastName: string;

  @Prop()
  age: number;

  @Prop([String])
  tags: string[]

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]})
  products: Product[]

}


export const UserSchema = SchemaFactory.createForClass(User);


export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});


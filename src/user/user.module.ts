import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { CatSchema, User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: CatSchema }]),
  ],
  controllers: [userController],
  providers: [UserService],
})
export class UserModule {}

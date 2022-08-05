import { UserEntity, Role } from '@meetapp/api/domain/user';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

export type UserDocument = DbUser & Document;

const required = true;

@Schema({ timestamps: true })
export class DbUser implements Omit<UserEntity, 'id'> {
  @Prop({ required })
  username!: string;

  @Prop({ required })
  firstName!: string;

  @Prop({ required })
  lastName!: string;

  @Prop({ required })
  email!: string;

  @Prop({ required })
  roles: Role[] = [];

  @Prop({ required })
  password!: string;

  @Prop({ required })
  salt!: string;

  @Prop()
  createdAt!: Date;

  @Prop()
  updatedAt!: Date;
}

export const UserSchema = SchemaFactory.createForClass(DbUser);

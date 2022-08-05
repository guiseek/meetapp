import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiDataAccessModule } from '@meetapp/api/data-access';

import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ApiDataAccessModule,
    MongooseModule.forRoot(environment.mongoUri),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

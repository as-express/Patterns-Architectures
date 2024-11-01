import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [PostModule, EventEmitterModule.forRoot(), NotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

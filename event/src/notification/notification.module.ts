import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { NOtification } from './entity/notification.entity';
import { NotificationEventsService } from 'src/event-subscribers/notification.service';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService, NOtification, NotificationEventsService],
})
export class NotificationModule {}

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {
  items,
  NOtification,
} from 'src/notification/entity/notification.entity';
import 'colors';

@Injectable()
export class NotificationEventsService {
  constructor(private notice: NOtification) {}

  @OnEvent('post.created')
  async sendNotifications({ title }: { title: string }) {
    const time = new Date();
    const item: items = {
      title: title,
      time: time,
    };

    this.notice.notification.push(item);
    this.notice.notificationsCount += 1;

    console.log('Notification about create is delivered'.bgGreen);
  }

  @OnEvent('post.deleted')
  async deleted({ title }: { title: string }) {
    const time = new Date();
    const item: items = {
      title: title,
      time: time,
    };

    this.notice.notification.push(item);
    this.notice.notificationsCount += 1;

    console.log('Notification about delete is delivered'.bgBlue);
  }
}

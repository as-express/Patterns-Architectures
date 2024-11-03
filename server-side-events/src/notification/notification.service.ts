import { Injectable } from '@nestjs/common';
import { NOtification } from './entity/notification.entity';

@Injectable()
export class NotificationService {
  constructor(private notice: NOtification) {}

  async get() {
    return this.notice;
  }
}

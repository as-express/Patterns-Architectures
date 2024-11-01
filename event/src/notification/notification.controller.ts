import { Controller, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NOtification } from './entity/notification.entity';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @ApiOperation({ summary: 'get messaged' })
  @ApiResponse({ status: 200, type: NOtification })
  @Get()
  async get() {
    return this.notificationService.get();
  }
}

import { Module } from '@nestjs/common';
import { TelegramService } from './services/telegram.service';
import { TelegramController } from './telegram.controller';
import { PollingService } from './polling.service';
import { ConfigService } from '@nestjs/config';
import { ScheduleService } from './services/schedule.service';
import { SchedulerRegistry } from '@nestjs/schedule';

@Module({
  controllers: [TelegramController],
  providers: [
    TelegramService,
    PollingService,
    ConfigService,
    ScheduleService,
    SchedulerRegistry,
  ],
})
export class TelegramModule {}

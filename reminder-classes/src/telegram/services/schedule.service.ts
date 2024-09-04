import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { ConfigService } from '@nestjs/config';
import { CLASSES_SCHEDULE } from '../helpers/constants';
import { TelegramService } from './telegram.service';
import {
  buildNotificationClassMessage,
  generateUniqueJobName,
  getCronExpressionForLesson,
} from '../helpers/utils';

@Injectable()
export class ScheduleService {
  private readonly studyChatId: number;
  constructor(
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly configService: ConfigService,
    private readonly telegramService: TelegramService,
  ) {
    this.studyChatId = this.configService.get('STUDY_CHAT_ID') as number;
  }

  createReminderSchedule() {
    for (const day in CLASSES_SCHEDULE) {
      for (const time in CLASSES_SCHEDULE[day]) {
        const lesson = CLASSES_SCHEDULE[day][time];
        if (lesson) {
          const cronExpression = getCronExpressionForLesson(day, time);
          const jobName = generateUniqueJobName(lesson.lessonName, day, time);
          const job = new CronJob(
            cronExpression,
            () => {
              const text = buildNotificationClassMessage(
                lesson.lessonName,
                lesson.link ?? 'посилання невідоме',
              );
              console.log('text: ', text);
              this.telegramService.sendMessage({
                chatId: this.studyChatId,
                text,
              });
            },
            null,
            false,
            'Europe/Kiev',
          );
          this.schedulerRegistry.addCronJob(jobName, job);
          job.start();
        }
      }
    }
  }
}

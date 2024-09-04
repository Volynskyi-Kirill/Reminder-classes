import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ScheduleService } from './telegram/services/schedule.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const scheduleService = app.get(ScheduleService);
  scheduleService.createReminderSchedule();

  await app.listen(3000);
}
bootstrap();

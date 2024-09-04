import { Controller } from '@nestjs/common';
import { TelegramService } from './services/telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}
}

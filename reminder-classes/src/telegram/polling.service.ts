import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';
import { Message } from 'node-telegram-bot-api';

// нужен ли вообще полинг, если бот просто должен слоть сообщения по таймингу? но пускай будет на будущие

@Injectable()
export class PollingService {
  private bot;
  private readonly studyChatId: number;

  constructor(private readonly configService: ConfigService) {
    this.studyChatId = Number(this.configService.get('STUDY_CHAT_ID'));
    const token = this.configService.get('TG_API_KEY');
    this.bot = new TelegramBot(token, { polling: true });
    this.bot.on('message', (msg) => this.onMessage(msg));
  }

  async onMessage(msg: Message) {
    const text = msg.text ?? msg.caption;
  }
}

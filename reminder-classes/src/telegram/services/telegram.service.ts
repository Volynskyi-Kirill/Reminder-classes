import { Injectable } from '@nestjs/common';
import { errorHandler } from '@/shared/error-handler';
import { ISendMessage } from '@/shared/interfaces';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService {
  private readonly bot;
  private readonly studyChatId: number;

  constructor(private readonly configService: ConfigService) {
    this.studyChatId = this.configService.get('STUDY_CHAT_ID') as number;
    const token = this.configService.get('TG_API_KEY');
    this.bot = new TelegramBot(token);
  }

  async sendMessage({
    chatId,
    text,
    topicId,
    reply_markup,
    reply_to_message_id,
  }: ISendMessage) {
    try {
      console.log('chatId: ', chatId);
      return await this.bot.sendMessage(chatId, text, {
        message_thread_id: topicId,
        reply_markup,
        reply_to_message_id,
      });
    } catch (error: unknown) {
      errorHandler(error);
    }
  }
}

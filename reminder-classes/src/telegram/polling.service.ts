import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';
import { SCHEDULE_COMMANDS } from './helpers/constants';
import {
  buildScheduleAvailableCommands,
  getScheduleByDay,
} from './helpers/utils';

@Injectable()
export class PollingService {
  private bot;
  private getSchedulePattern;
  private readonly studyChatId: number;

  constructor(private readonly configService: ConfigService) {
    this.getSchedulePattern = this.configService.get('GET_SCHEDULE_PATTERN');
    this.studyChatId = Number(this.configService.get('STUDY_CHAT_ID'));
    const token = this.configService.get('TG_API_KEY');
    this.bot = new TelegramBot(token, { polling: true });
    this.registerCommands();
  }

  private registerCommands() {
    Object.values(SCHEDULE_COMMANDS).forEach((day) => {
      this.bot.onText(
        new RegExp(`^\/${this.getSchedulePattern}_${day}$`, 'i'),
        (msg) => {
          this.sendScheduleForDay(msg.chat.id, day);
        },
      );
    });

    this.bot.onText(/\/schedule_commands/, (msg) =>
      this.sendScheduleCommands(msg.chat.id),
    );
    this.bot.onText(/\/help/, (msg) => this.sendHelp(msg.chat.id));
  }

  private async sendScheduleForDay(chatId: number, day: string) {
    const schedule = getScheduleByDay(day);
    await this.bot.sendMessage(chatId, `Розклад на ${day}: \n\n${schedule}`);
  }

  private async sendScheduleCommands(chatId: number) {
    const availableCommands = buildScheduleAvailableCommands(
      this.getSchedulePattern,
    );
    await this.bot.sendMessage(chatId, availableCommands);
  }

  private async sendHelp(chatId: number) {
    const availableCommands = '/schedule_commands';
    await this.bot.sendMessage(chatId, availableCommands);
  }
}

import TelegramBot from 'node-telegram-bot-api';

export interface ISendMessage {
  chatId: number;
  topicId?: number;
  text: string;
  reply_to_message_id?: number;
  reply_markup?:
    | TelegramBot.InlineKeyboardMarkup
    | TelegramBot.ReplyKeyboardMarkup
    | TelegramBot.ReplyKeyboardRemove
    | TelegramBot.ForceReply;
}

import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [TelegramModule, ConfigModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}

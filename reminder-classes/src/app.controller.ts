import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    console.log('get request');
    return 'Hello';
  }
}

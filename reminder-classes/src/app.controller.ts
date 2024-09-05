import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    const dataNow = new Date();
    const hours = dataNow.getHours();
    const minutes = dataNow.getMinutes();
    const seconds = dataNow.getSeconds();

    console.log(`get request at ${hours}:${minutes}:${seconds}`);
    return `Hello at ${hours}:${minutes}:${seconds}`;
  }
}

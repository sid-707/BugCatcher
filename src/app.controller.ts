import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  root() {
    console.log("FRONTEND CREATED")
    return {};
  }

  @Get('/upload')
  uploadFile(): string {
    return 'upload file here'
  }
}

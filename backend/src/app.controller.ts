import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/login')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':password')
  verifyPassword(@Param('password')
        password: string,): boolean {
    
    return this.appService.verifyPassword(password);
  }
}

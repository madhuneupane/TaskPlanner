import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  verifyPassword(password: string): boolean {
    if(password==="NOW!")
    return true;
  else
  return false;
  }
}

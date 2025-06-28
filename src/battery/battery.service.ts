import { Injectable } from '@nestjs/common';

@Injectable()
export class BatteryService {
  powerSupply() {
    return 'Battery is working,you can start your engine.';
  }
}

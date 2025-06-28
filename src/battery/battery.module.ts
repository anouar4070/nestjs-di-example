import { Module } from '@nestjs/common';
import { BatteryService } from './battery.service';

@Module({
  providers: [BatteryService],
})
export class BatteryModule {}

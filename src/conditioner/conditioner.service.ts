import { EngineService } from './../engine/engine.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConditionerService {
  constructor(private readonly engineService: EngineService) {}

  conditionerOn() {
    return `${this.engineService.startEngine()} and conditioner is on`;
  }
}

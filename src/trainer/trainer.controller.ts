import { Controller, Get } from '@nestjs/common';
import { Trainer } from './interfaces/trainer.interface';
import { TrainerService } from './trainer.service';

@Controller('trainer')
export class TrainerController {
    constructor(private readonly trainerService: TrainerService) {}

    @Get()
    async findAll(): Promise<Trainer[]> {
        return this.trainerService.findAll();
    }
}

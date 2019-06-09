import { Trainer } from './trainer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainerService {
    constructor(
        @InjectRepository(Trainer)
        private readonly trainerRepository: Repository<Trainer>,
    ) {}

    findAll(): Promise<Trainer[]> {
        return this.trainerRepository.find();
    }
}

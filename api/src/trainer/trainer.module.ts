import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Trainer } from './trainer.entity';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Trainer])],
    providers: [TrainerService],
    controllers: [TrainerController],
})
export class TrainerModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Pokemon])],
    providers: [PokemonService],
    controllers: [PokemonController],
})

export class PokemonModule {}

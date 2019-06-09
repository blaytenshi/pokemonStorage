import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PokemonType } from './pokemonType.entity';
import { PokemonTypeService } from './pokemonType.service';
import { PokemonTypeController } from './pokemonType.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PokemonType])],
    providers: [PokemonTypeService],
    controllers: [PokemonTypeController],
})
export class PokemonTypeModule {}

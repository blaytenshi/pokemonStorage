import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
    constructor(
        @InjectRepository(Pokemon)
        private readonly pokemonRepository: Repository<Pokemon>,
    ) {}

    create(pokemon: CreatePokemonDto): Promise<Pokemon> {
        const pokemonEntity = this.pokemonRepository.create(pokemon);
        return this.pokemonRepository.save(pokemonEntity);
    }

    findAll(): Promise<Pokemon[]> {
        return this.pokemonRepository.find();
    }
}

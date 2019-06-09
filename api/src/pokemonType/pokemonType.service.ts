import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonType } from './pokemonType.entity';
import { Repository } from 'typeorm';
import { CreatePokemonTypeDto } from './dto/create-pokemon-type.dto';

@Injectable()
export class PokemonTypeService {
    constructor(
        @InjectRepository(PokemonType)
        private readonly pokemonTypeRepository: Repository<PokemonType>,
    ) {}

    create(pokemonType: CreatePokemonTypeDto) {
        // create entities from the DTO
        const pokemonTypeEntity = this.pokemonTypeRepository.create(pokemonType);
        // save the entity with the repository
        return this.pokemonTypeRepository.save(pokemonTypeEntity);
    }

    findAll(): Promise<PokemonType[]> {
        return this.pokemonTypeRepository.find();
    }
}

import {Body, Controller, Get, Post} from '@nestjs/common';
import {PokemonService} from './pokemon.service';
import {Pokemon} from './interfaces/pokemon.interface';
import {CreatePokemonDto} from './dto/create-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Post()
    async createPokemon(@Body() pokemon: CreatePokemonDto) {
        return this.pokemonService.create(pokemon);
    }

    @Get()
    async findAll(): Promise<Pokemon[]> {
        return this.pokemonService.findAll();
    }
}

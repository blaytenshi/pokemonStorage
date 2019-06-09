import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokemonTypeService } from './pokemonType.service';
import { CreatePokemonTypeDto } from './dto/create-pokemon-type.dto';
import { PokemonType } from './interface/pokemonType.interface';

@Controller('pokemonType')
export class PokemonTypeController {
    constructor(private readonly pokemonTypeService: PokemonTypeService) {}

    @Post()
    async createPokemonType(@Body() pokemonType: CreatePokemonTypeDto) {
        return this.pokemonTypeService.create(pokemonType);
    }

    @Get()
    async findAll(): Promise<PokemonType[]> {
        return this.pokemonTypeService.findAll();
    }
}

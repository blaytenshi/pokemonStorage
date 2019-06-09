import { Pokemon } from '../pokemon/pokemon.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PokemonType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50 })
    description: string;

    @OneToMany(type => Pokemon, pokemon => pokemon.type)
    pokemons: Pokemon[];
}

import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Pokemon} from '../pokemon/pokemon.entity';

@Entity()
export class Trainer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50})
    firstName: string;

    @Column({ length: 50})
    lastName: string;

    @OneToMany(type => Pokemon, pokemon => pokemon.trainer)
    pokemons: Pokemon[];
}

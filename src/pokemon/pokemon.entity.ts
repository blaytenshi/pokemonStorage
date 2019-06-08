import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Trainer} from '../trainer/trainer.entity';

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('int')
    age: number;

    @Column({ length: 50 })
    type: string;

    @ManyToOne(type => Trainer, trainer => trainer.pokemons)
    trainer: Trainer;
}

import { Entity, Column, PrimaryColumn, OneToMany, JoinTable } from 'typeorm';
import { Harvest } from '../harvests/harvests.entity'


@Entity()
export class Bay {
    @PrimaryColumn()
    id: string;

    @OneToMany(type => Harvest, harvest => harvest.bay)
    harvests: Harvest[];
    @JoinTable()

    @Column()
    lightCount: number;

    @Column()
    squareFootage: number;
}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Bay } from '../bays/bays.entity';


@Entity()
export class Harvest {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    plantCount: number;

    @Column()
    harvestGrams: number;

    @Column()
    totalPlantGrams: number;

    @Column()
    classification: string;

    @ManyToOne(type => Bay, bay => bay.harvests)
    bay: Bay

    @Column()
    strain: string;

    @Column()
    date: Date;

    @Column()
    harvestLbs: number;

    @Column()
    totalPlantLbs: number;

    @Column()
    percentHarvestedPlantWeight: number;

    @Column()
    lbsHarvestedPerSqFt: number;

    @Column()
    planstPerLight: number;

    @Column()
    harvestLbsPerLight: number;

    @Column()
    sfFtPerPlant: number;
}


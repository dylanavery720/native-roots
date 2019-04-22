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

    @Column({ type: 'float' })
    harvestLbs: number;

    @Column({ type: 'float' })
    totalPlantLbs: number;

    @Column({ type: 'float' })
    percentHarvestedPlantWeight: number;

    @Column({ type: 'float' })
    lbsHarvestedPerSqFt: number;

    @Column({ type: 'float' })
    planstPerLight: number;

    @Column({ type: 'float' })
    harvestLbsPerLight: number;

    @Column({ type: 'float' })
    sqFtPerPlant: number;
}


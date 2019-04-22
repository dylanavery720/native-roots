import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Harvest } from './harvests.entity';
import { HarvestDTO } from './harvests.dto';
import { BaysService } from 'bays/bays.service';

@Injectable()
export class HarvestsService {
    constructor(
        @InjectRepository(Harvest)
        private readonly harvestsRepository: Repository<Harvest>,
        private readonly baysService: BaysService
    ) { }

    async getHarvest(id): Promise<Harvest> {
        return await this.harvestsRepository.findOne(id, { relations: ['bay'] })
    }

    async getAllHarvests(): Promise<Harvest[]> {
        return await this.harvestsRepository.find({ relations: ['bay'] })
    }

    async createAndSaveHarvest(harvestDTO: HarvestDTO): Promise<Harvest> {
        const harvest = await this.prepareHarvest(harvestDTO)
        const createdHarvest = this.harvestsRepository.create(harvest)
        const savedHarvest = await this.harvestsRepository.save(createdHarvest)
        return await this.getHarvest(savedHarvest)
    }

    async prepareHarvest(harvestDTO: HarvestDTO): Promise<Harvest> {
        let harvest: Harvest = harvestDTO as Harvest
        const { harvestGrams, totalPlantGrams, plantCount } = harvestDTO
        const bay = await this.baysService.getBay(harvest.bay.id)
        harvest.date = new Date()
        harvest.harvestLbs = this.convertGramsToPounds(harvestGrams)
        harvest.totalPlantLbs = this.convertGramsToPounds(totalPlantGrams)
        harvest.percentHarvestedPlantWeight = (this.convertPercentage(harvestGrams, totalPlantGrams) * 100)
        harvest.lbsHarvestedPerSqFt = this.convertPercentage(harvest.totalPlantLbs, bay.squareFootage)
        harvest.planstPerLight = this.convertPercentage(plantCount, bay.lightCount)
        harvest.harvestLbsPerLight = this.convertPercentage(harvest.harvestLbs, bay.lightCount)
        harvest.sqFtPerPlant = this.convertPercentage(plantCount, bay.squareFootage)
        harvest.bay = bay
        return harvest
    }

    convertGramsToPounds(grams): number {
        return Number(grams / 453.59237)
    }

    convertPercentage(num, den): number {
        return Number(num / den)
    }
}
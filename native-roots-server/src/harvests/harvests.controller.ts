import { Get, Post, Controller, Param, Body, Put, Delete } from '@nestjs/common';
import { HarvestsService } from './harvests.service';
import { Harvest } from './harvests.entity'
import { BaysService } from '../bays/bays.service'

@Controller('harvests')
export class HarvestsController {
    constructor(private readonly harvestsService: HarvestsService, private readonly baysService: BaysService) { }

    @Get()
    async getAlbums(): Promise<Harvest[]> {
        return await this.harvestsService.getAllHarvests()
    }

    @Post()
    async create(@Body() harvestDTO): Promise<Harvest> {
        const bay = await this.baysService.getBay({ id: harvestDTO.bay })
        return await this.harvestsService.createAndSaveHarvest(harvestDTO);
    }
}

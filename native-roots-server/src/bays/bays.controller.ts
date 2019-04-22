import { Get, Post, Controller, Param, Body } from '@nestjs/common';
import { BaysService } from './bays.service';
import { BayDTO } from './bays.dto'
import { Bay } from './bays.entity'

@Controller('bays')
export class BaysController {
    constructor(private readonly baysService: BaysService) { }

    @Get()
    async getBays(): Promise<Bay[]> {
        return await this.baysService.getAllBays()
    }

    @Get(':id')
    async getBay(@Param('id') id): Promise<Bay> {
        return await this.baysService.getBay(id);
    }

    @Post()
    async create(@Body() artistDTO: BayDTO): Promise<Bay> {
        return await this.baysService.createAndSaveBay(artistDTO);
    }
}
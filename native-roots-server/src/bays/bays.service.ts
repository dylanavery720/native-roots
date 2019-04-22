import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bay } from './bays.entity';
import { BayDTO } from './bays.dto';

@Injectable()
export class BaysService {
    constructor(
        @InjectRepository(Bay)
        private readonly baysRepository: Repository<Bay>
    ) { }

    async save(bay: Bay): Promise<Bay> {
        return await this.baysRepository.save(bay)
    }

    async getBay(id): Promise<Bay> {
        return await this.baysRepository.findOne(id, {
            relations: ['harvests']
        })
    }

    async getAllBays(): Promise<Bay[]> {
        return await this.baysRepository.find({ relations: ['harvests'] })
    }

    async createAndSaveBay(bayDTO: BayDTO): Promise<Bay> {
        const bay = this.baysRepository.create(bayDTO)
        const savedBay = await this.baysRepository.save(bay)
        return await this.getBay(savedBay.id)
    }
}
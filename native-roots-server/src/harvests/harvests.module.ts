import { Module } from '@nestjs/common';
import { HarvestsController } from './harvests.controller';
import { HarvestsService } from './harvests.service';
import { Harvest } from './harvests.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaysModule } from '../bays/bays.module';

@Module({
    imports: [TypeOrmModule.forFeature([Harvest]), BaysModule],
    controllers: [HarvestsController],
    providers: [HarvestsService],
    exports: [HarvestsService]
})
export class HarvestsModule { }
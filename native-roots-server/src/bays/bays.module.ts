import { Module } from '@nestjs/common';
import { BaysController } from './bays.controller';
import { BaysService } from './bays.service';
import { Bay } from './bays.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Bay])],
    controllers: [BaysController],
    providers: [BaysService],
    exports: [BaysService]
})
export class BaysModule { }
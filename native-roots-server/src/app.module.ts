import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaysModule } from './bays/bays.module'
import { HarvestsModule } from './harvests/harvests.module'

@Module({
  imports: [TypeOrmModule.forRoot(), BaysModule, HarvestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

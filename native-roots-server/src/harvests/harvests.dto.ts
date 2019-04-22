import { Bay } from '../bays/bays.entity'

export class HarvestDTO {
    plantCount: number
    harvestGrams: number
    totalPlantGrams: number
    bay: Bay
    classification: string
    strain: string
}